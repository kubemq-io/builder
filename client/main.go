package main

import (
	"encoding/json"
	"syscall/js"
	"gopkg.in/yaml.v2"
)
func parse(this js.Value, args []js.Value) interface{} {
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
