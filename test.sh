#!/bin/sh

shopt -s extglob
apt-get update
rm -rf -- !(allure-report)
echo -------------------------
