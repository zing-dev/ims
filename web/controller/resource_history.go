package controller

import (
	"fmt"
	"github.com/kataras/iris/v12"
	"simple-ims/models"
	"simple-ims/utils"
	"time"
)

//todo
func ResourceHistoryDelete(ctx iris.Context) {
	id, err := ctx.URLParamInt("id")
	if err != nil {
		response(ctx, false, "资源版本ID不合法:"+err.Error(), nil)
		return
	}
	rhm := &models.ResourceHistoryModel{}
	rhm, err = rhm.First()
	if err != nil {
		return
	}

	if rhm.Id == id {
		return
	}
}

//资源版本回滚
func ResourceHistoryRollback(ctx iris.Context) {
	resourceId, err := ctx.URLParamInt("resource_id")
	if err != nil {
		response(ctx, false, "资源ID不合法:"+err.Error(), nil)
		return
	}
	user := auth(ctx)
	if user == nil {
		return
	}
	rm := &models.ResourceModel{Id: resourceId}
	rm, err = rm.First()
	if err != nil {
		response(ctx, false, "资源不存在:"+err.Error(), nil)
		return
	}
	rhm := &models.ResourceHistoryModel{ResourceId: rm.Id}
	rhm2, err2 := rhm.FindBy()
	if err2 != nil {
		response(ctx, false, "资源版本不存在:"+err2.Error(), nil)
		return
	}
	if len(rhm2) <= 1 {
		response(ctx, false, "资源版本数量小于一个", nil)
		return
	}
	err = rhm2[0].Delete()
	if err != nil {
		response(ctx, false, "删除当前版本失败:"+err.Error(), nil)
		return
	}
	rm.RHId = rhm2[1].Id
	if err = rm.Update(); err != nil {
		response(ctx, false, "更新版本失败:"+err.Error(), nil)
		return
	}
	log(ctx, fmt.Sprintf("回滚版本[ %s ], 版本[ %s ] -> [ %s ]", rm.Name, rhm2[0].Version, rhm2[1].Version))
	response(ctx, true, "删除版本成功", nil)
}

func ResourceHistoryUpdate(ctx iris.Context) {
	resourceID, err := ctx.PostValueInt("resource_id")
	if err != nil {
		response(ctx, false, "资源ID非法", nil)
		return
	}

	rm := &models.ResourceModel{Id: resourceID}
	rm, err = rm.First()
	if err != nil {
		response(ctx, false, "资源不存在:"+err.Error(), nil)
		return
	}
	id := ctx.PostValueIntDefault("id", 0)
	if id == 0 {
		id = rm.RHId
	}
	rhm := &models.ResourceHistoryModel{Id: id}
	rhm, err = rhm.First()
	if err != nil {
		response(ctx, false, "当前版本不存在:"+err.Error(), nil)
		return
	}

	file, info, err := ctx.FormFile("file")
	if file != nil {
		if err != nil {
			response(ctx, false, "获取上传文件失败:"+err.Error(), nil)
			return
		}
		_ = file.Close()

		uploadDir := "uploads/" + time.Now().Format("2006/01/")
		if !utils.Mkdir(uploadDir) {
			response(ctx, false, "创建文件夹失败", nil)
			return
		}

		rhm.Hash, err = utils.Md5File(file)
		if err != nil {
			response(ctx, false, "获取文件MD5失败:"+err.Error(), nil)
			return
		}
		rhm.Log = ctx.PostValue("log")
		rhm.File = info.Filename
		rhm.Path = uploadDir + utils.FileName(info.Filename, rhm.Version)
		err = utils.CopyFile(rhm.Path, file)
		if err != nil {
			response(ctx, false, "保存文件失败:"+err.Error(), nil)
			return
		}
	} else {
		response(ctx, false, "请上传文件", nil)
		return
	}

	user := auth(ctx)
	rhm.UserId = user.ID
	rhm.CreatedAt = time.Now()
	if err = rhm.Update(); err != nil {
		response(ctx, false, "更新当前资源版本失败:"+err.Error(), nil)
		return
	}

	rm = &models.ResourceModel{
		Id:   resourceID,
		RHId: rhm.Id,
	}
	if err = rm.Update(); err != nil {
		response(ctx, false, "更新资源失败:"+err.Error(), nil)
		return
	}
	log(ctx, fmt.Sprintf("更新资源版本[ %s ], 版本[ %s ], 日志[ %s ]", rhm.File, rhm.Version, rhm.Log))
	response(ctx, true, "更新当前资源版本成功", iris.Map{
		"resource": rhm,
	})
}

func ResourceHistoryLists(ctx iris.Context) {
	type res struct {
		models.ResourceHistoryModel
		Username string `json:"username"`
	}
	var list []res

	resourceId, err := ctx.URLParamInt("resource_id")
	if err != nil {
		response(ctx, false, "资源ID非法", nil)
		return
	}
	rhm := models.ResourceHistoryModel{ResourceId: resourceId}
	rhms, err := rhm.FindBy()
	if err != nil {
		response(ctx, false, "获取历史版本失败", nil)
		return
	}
	user := models.UserModel{}
	users, err := user.Find()
	if err != nil {
		return
	}

	for _, v := range rhms {
		for _, u := range users {
			if u.ID == v.UserId {
				list = append(list, res{
					ResourceHistoryModel: v,
					Username:             u.Username,
				})
				break
			} else if v.UserId == 0 {
				list = append(list, res{
					ResourceHistoryModel: v,
				})
				break
			}
		}
	}
	response(ctx, true, "", iris.Map{
		"resources": list,
	})
}
