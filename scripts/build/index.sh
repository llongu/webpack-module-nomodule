#!/usr/bin/env sh
echo 'sh 命令执行开始...'
node build --es16 --first && node build --es15
echo 'sh 命令执行完毕...'
