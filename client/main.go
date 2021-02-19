package main

import (
	"encoding/json"
	"syscall/js"
	"gopkg.in/yaml.v2"
)
func parse(this js.Value, args []js.Value) interface{} {
	kind:=args[1].String()
	switch kind {
	case "cluster":
		c:=&ClusterConfig{}
		err:=json.Unmarshal([]byte(args[0].String()),c)
		if err!= nil {
			return err.Error()
		}
		y,err:=yaml.Marshal(c)
		if err!= nil {
			return err.Error()
		}
		return string(y)
	case "bridges":
		b:=&BridgesConfig{}
		err:=json.Unmarshal([]byte(args[0].String()),b)
		if err!= nil {
			return err.Error()
		}
		y,err:=yaml.Marshal(b)
		if err!= nil {
			return err.Error()
		}
		return string(y)
	case "targets":
		t:=&TargetsConfig{}
		err:=json.Unmarshal([]byte(args[0].String()),t)
		if err!= nil {
			return err.Error()
		}
		y,err:=yaml.Marshal(t)
		if err!= nil {
			return err.Error()
		}
		return string(y)
	case "sources":
		s:=&SourcesConfig{}
		err:=json.Unmarshal([]byte(args[0].String()),s)
		if err!= nil {
			return err.Error()
		}
		y,err:=yaml.Marshal(s)
		if err!= nil {
			return err.Error()
		}
		return string(y)
	}
	return ""
}
func registerCallbacks() {
	js.Global().Set("waparse", js.FuncOf(parse))
}
func main() {
	println("started")
	registerCallbacks()
	select {
	}

}
