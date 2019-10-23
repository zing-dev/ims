package utils

import (
	"crypto/md5"
	"encoding/hex"
	"io"
	"mime/multipart"
	"os"
	"path"
	"reflect"
	"strconv"
	"strings"
)

func Duplicate(a interface{}) (ret []interface{}) {
	va := reflect.ValueOf(a)
	for i := 0; i < va.Len(); i++ {
		if i > 0 && reflect.DeepEqual(va.Index(i-1).Interface(), va.Index(i).Interface()) {
			continue
		}
		ret = append(ret, va.Index(i).Interface())
	}
	return ret
}

func ElementExists(str1, str2 []interface{}) bool {
	for _, v := range str1 {
		for _, v2 := range str2 {
			if v == v2 {
				return true
			}
		}
	}
	return false
}
func StrToIntSlice(str, sep string) []int {
	var intStr []int
	split := strings.Split(str, sep)
	for _, v := range split {
		i, err := strconv.Atoi(v)
		if err != nil {
			return nil
		}
		intStr = append(intStr, i)
	}

	return intStr
}

func Mkdir(p string) bool {
	_, err := os.Stat(p)
	if os.IsNotExist(err) {
		err := os.MkdirAll(p, 0777)
		if err != nil {
			return false
		}
	}
	return true
}

func CopyFile(p string, src multipart.File) error {
	dst, err := os.OpenFile(p, os.O_RDWR|os.O_CREATE, 0777)
	defer func() {
		dst.Close()
	}()
	if err != nil {
		return err
	}
	_, _ = src.Seek(0, io.SeekStart)
	_, err = io.Copy(dst, src)
	if err != nil {
		return err
	}
	return nil
}

func Md5File(file io.Reader) (string, error) {
	instance := md5.New()
	_, err := io.Copy(instance, file)
	if err != nil {
		return "", err
	}
	return hex.EncodeToString(instance.Sum(nil)), nil
}

func Md5Str(value string) string {
	instance := md5.New()
	instance.Write([]byte(value))
	return hex.EncodeToString(instance.Sum(nil))
}

func FileName(p string, version string) string {
	return strings.TrimSuffix(path.Base(p), path.Ext(p)) + "-" + version + path.Ext(p)
}

func VersionCompare(v1, v2 string) int8 {
	if v1 == v2 {
		return 0
	}
	sv1 := strings.Split(v1, ".")
	sv2 := strings.Split(v2, ".")
	for k, v := range sv1 {
		if v > sv2[k] {
			return 1
		} else if v < sv2[k] {
			return -1
		}
	}
	return 1
}
