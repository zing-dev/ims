package models

import (
	"github.com/jinzhu/gorm"
	"time"
)

type ProjectHistoryModel struct {
	ID        int       `json:"id" gorm:"primary_key;AUTO_INCREMENT"`
	ProjectId int       `json:"project_id" gorm:"not null"`
	Version   string    `json:"version" gorm:"not null"`
	RHIds     string    `json:"rh_ids"`
	Log       string    `json:"log"`
	Path      string    `json:"path"`
	Hash      string    `json:"hash"`
	Download  int       `json:"download"`
	CreatedAt time.Time `json:"created_at"`
}

func (ph *ProjectHistoryModel) DeleteByProjectId(projectId int) (*ProjectHistoryModel, error) {
	model := db.DB.Where("project_id = ?", projectId).Delete(ph)
	if model.RowsAffected == 0 {
		return nil, NoRecordExists
	}
	return model.Value.(*ProjectHistoryModel), model.Error
}

//根据ID删除
func (ph *ProjectHistoryModel) DeleteByIds(ids []int) (*ProjectHistoryModel, error) {
	model := db.DB.Where(ids).Delete(ph)
	if model.RowsAffected == 0 {
		return nil, NoRecordExists
	}
	return model.Value.(*ProjectHistoryModel), model.Error
}

func (ph *ProjectHistoryModel) FindBy() ([]ProjectHistoryModel, error) {
	var projects []ProjectHistoryModel
	model := db.DB.Order("id DESC").Where(&ph).Find(&projects)
	if model.Error == gorm.ErrRecordNotFound {
		return projects, nil
	}
	return projects, model.Error
}

func (ph *ProjectHistoryModel) First() (*ProjectHistoryModel, error) {
	var project ProjectHistoryModel
	model := db.DB.Order("id DESC").Where(&ph).First(&project)
	if model.Error == gorm.ErrRecordNotFound {
		return nil, nil
	}
	return &project, model.Error
}

func (ph *ProjectHistoryModel) Insert() (*ProjectHistoryModel, error) {
	model := db.DB.Create(ph)
	return model.Value.(*ProjectHistoryModel), model.Error
}

//更新
func (ph *ProjectHistoryModel) Update() (*ProjectHistoryModel, error) {
	phm := &ProjectHistoryModel{}
	model := db.DB.Model(phm).Updates(ph)
	if model.RowsAffected == 0 {
		return nil, NoRecordExists
	}
	return model.Value.(*ProjectHistoryModel), model.Error
}

func (ph *ProjectHistoryModel) FindValueBy(key string) ([]interface{}, error) {
	if key == "" {
		return nil, ErrorParams
	}
	var values []interface{}
	model := db.DB.Model(ph).Where(ph).Pluck(key, &values)
	return values, model.Error
}

func (ph *ProjectHistoryModel) FindRHIDs() ([]string, error) {
	var values []string
	model := db.DB.Model(ph).Where(ph).Pluck("rh_ids", &values)
	return values, model.Error
}
