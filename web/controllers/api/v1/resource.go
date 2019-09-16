package v1

import (
	"github.com/kataras/iris"
	"simple-ims/models"
	"simple-ims/utils"
	"strconv"
	"time"
)

//添加资源
func ResourceAdd(ctx iris.Context) {
	name := ctx.PostValue("name")
	desc := ctx.PostValue("desc")
	if name == "" || desc == "" {
		response(ctx, false, "请输入资源名称和描述", nil)
		return
	}
	t, err := ctx.PostValueInt("type")
	if err != nil {
		response(ctx, false, "资源类型非法", nil)
		return
	}
	user := auth(ctx)
	if user == nil {
		return
	}
	rm := models.ResourceModel{
		UserId: user.ID,
		Name:   name,
		Type:   t,
		Desc:   desc,
	}
	_, err = rm.Insert()
	if err != nil {
		response(ctx, false, "保存资源失败:"+err.Error(), nil)
		return
	}
	response(ctx, true, "保存资源成功", nil)
}

//更新资源
func ResourceUpdate(ctx iris.Context) {
	id, err := ctx.PostValueInt("id")
	if err != nil {
		response(ctx, false, "资源ID不合法:"+err.Error(), nil)
		return
	}
	name := ctx.PostValue("name")
	desc := ctx.PostValue("desc")
	if name == "" || desc == "" {
		response(ctx, false, "请输入资源名称和描述", nil)
		return
	}
	t, err := ctx.PostValueInt("type")
	if err != nil {
		response(ctx, false, "资源类型非法:"+err.Error(), nil)
		return
	}
	user := auth(ctx)
	if user == nil {
		return
	}
	rm := models.ResourceModel{
		ID:     id,
		UserId: user.ID,
		Name:   name,
		Type:   t,
		Desc:   desc,
	}
	_, err = rm.Update()
	if err != nil {
		response(ctx, false, "更新资源失败:"+err.Error(), nil)
		return
	}
	response(ctx, true, "更新资源成功", nil)
}

//添加资源版本
func ResourceUpgrade(ctx iris.Context) {
	resourceID, err := ctx.PostValueInt("resource_id")
	if err != nil {
		response(ctx, false, "资源ID非法", nil)
		return
	}
	version := ctx.FormValue("version")
	logStr := ctx.FormValue("log")
	if version == "" || logStr == "" {
		response(ctx, false, "请填写版本号和版本更新日志", nil)
		return
	}

	file, info, err := ctx.FormFile("file")

	resourceHistoryModel := &models.ResourceHistoryModel{
		ResourceID: resourceID,
	}
	if file != nil {
		if err != nil {
			response(ctx, false, "获取上传文件失败:"+err.Error(), nil)
			return
		}

		defer file.Close()

		uploadDir := "uploads/" + time.Now().Format("2006/01/")
		if !utils.Mkdir(uploadDir) {
			response(ctx, false, "创建文件夹失败", nil)
			return
		}

		resourceHistoryModel.Hash, err = utils.Md5File(file)
		if err != nil {
			response(ctx, false, "获取文件MD5失败:"+err.Error(), nil)
			return
		}
		model, err := resourceHistoryModel.FirstBy()
		if model != nil {
			response(ctx, true, "相同的文件hash已存在:"+model.Hash, iris.Map{
				"resource": model,
			})
			return
		}
		resourceHistoryModel.Log = logStr
		resourceHistoryModel.File = info.Filename
		resourceHistoryModel.Path = uploadDir + utils.FileName(info.Filename, version)
		err = utils.CopyFile(resourceHistoryModel.Path, file)
		if err != nil {
			response(ctx, false, "保存文件失败:"+err.Error(), nil)
			return
		}
	} else {
		response(ctx, false, "请上传文件", nil)
		return
	}

	model, err := resourceHistoryModel.Insert()
	if err != nil {
		response(ctx, false, "添加资源版本失败:"+err.Error(), nil)
		return
	}

	resourceModel := &models.ResourceModel{
		ID:   resourceID,
		RHId: model.ID,
	}
	_, err = resourceModel.Update()
	if err != nil {
		response(ctx, false, "更新资源失败:"+err.Error(), nil)
		return
	}

	response(ctx, true, "保存文件成功", iris.Map{
		"resource": model,
	})
}

//删除资源
func ResourceDelete(ctx iris.Context) {
	idsStr := ctx.FormValue("id")
	ids := utils.StrToIntAlice(idsStr, ",")

	if ids == nil {
		response(ctx, false, "资源ID不合法", nil)
		return
	}

	resourceModel := &models.ResourceModel{}
	_, err := resourceModel.FindByIds(ids)
	if err != nil {
		response(ctx, false, "查找要删除的资源失败:"+err.Error(), nil)
		return
	}
	_, err = resourceModel.DeleteByIds(ids)
	if err != nil {
		response(ctx, false, "删除资源失败:"+err.Error(), nil)
		return
	}
	//go func(resources *[]models.ResourceModel) {
	//	for _, resource := range *resources {
	//		err := os.Remove(resource.Path)
	//		if err != nil {
	//			log.Println("remove file", resource.Name, err)
	//		} else {
	//			log.Println("remove file", resource.Name)
	//		}
	//	}
	//}(resources)
	response(ctx, true, "", nil)
	return
}

//资源列表
func ResourceLists(ctx iris.Context) {
	if ctx.URLParamExists("resource_type") {
		resourceType, err := ctx.URLParamInt("resource_type")
		if err != nil {
			response(ctx, false, "资源分类ID不合法:"+err.Error(), nil)
			return
		}
		rm := models.ResourceModel{
			Type: resourceType,
		}
		data, err := rm.FindBy()
		if err != nil {
			response(ctx, false, "获取当前分类资源失败:"+err.Error(), nil)
			return
		}
		response(ctx, true, "", iris.Map{
			"resources": data,
			"timestamp": time.Now().Unix(),
		})
		return
	}

	resourceModel := &models.ResourceModel{}
	model, err := resourceModel.All()

	if err != nil {
		response(ctx, false, "获取资源列表失败:"+err.Error(), nil)
		return
	}

	response(ctx, true, "", iris.Map{
		"resources": model,
		"timestamp": time.Now().Unix(),
	})
}

//资源列表
func ResourceGroupLists(ctx iris.Context) {
	typeModel := &models.ResourceTypeModel{}
	allType, err := typeModel.All()
	if err != nil {
		response(ctx, false, "获取资源类型列表失败:"+err.Error(), nil)
		return
	}

	if len(allType) > 0 {
		resourceModel := &models.ResourceModel{}
		var data []map[string]interface{}
		for _, t := range allType {
			model, err := resourceModel.FindByType(t.ID)
			if err != nil {
				response(ctx, false, "获取资源失败:"+err.Error(), nil)
				return
			}
			if len(model) > 0 {
				resource := make(map[string]interface{})
				resource["name"] = t.Name
				resource["desc"] = t.Desc
				resource["lists"] = model
				data = append(data, resource)
			}
		}
		response(ctx, true, "", iris.Map{
			"resources": data,
			"timestamp": time.Now().Unix(),
		})
		return
	}
	response(ctx, true, "请先添加资源分类", nil)
}

//下载文件
func ResourceDownload(ctx iris.Context) {

	idStr := ctx.URLParam("id")
	version := ctx.URLParam("version")

	id, err := strconv.Atoi(idStr)
	if err != nil || version == "" {
		response(ctx, false, "文件ID和版本不能为空", nil)
		return
	}

	historyModel, err := (&models.ResourceHistoryModel{
		ResourceID: id,
		Version:    version,
	}).FirstBy()

	if err != nil {
		response(ctx, false, "当前资源不存在", nil)
		return
	}

	_, err = historyModel.Increment()
	if err != nil {
		response(ctx, false, "更新资源下载量失败", nil)
		return
	}

	userModel, _ := authUser(ctx)
	downloadModel := models.DownloadModel{
		RHId:     historyModel.ID,
		UserId:   userModel.ID,
		CreateAt: time.Now(),
	}
	_, err = downloadModel.Insert()
	if err != nil {
		response(ctx, false, "添加下载资源记录失败", nil)
		return
	}

	err = ctx.SendFile(historyModel.Path, utils.FileName(historyModel.File, historyModel.Version))
	if err != nil {
		response(ctx, false, "文件不存在"+err.Error(), nil)
	}

}
