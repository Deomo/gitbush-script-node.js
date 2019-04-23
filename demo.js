#!/usr/bin/env node

var fs = require('fs')
var dirName = process.argv[2]

process.chdir('/users/Deomo/desktop')
fs.mkdirSync("./" + dirName)
process.chdir("./" + dirName)

fs.mkdirSync("css")
fs.mkdirSync("js")

fs.writeFileSync("index.html","<!DOCTYPE>\n<title>hello</title>\n<h1>hello</h1>")


fs.writeFileSync("css/style.css","body{color:blue;}")
fs.writeFileSync("js/main.js","var string = \"hello world\"\nalert(string)")


process.exit(0)