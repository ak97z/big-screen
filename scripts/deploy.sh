#!/usr/bin/env sh

yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m deploy &&
git remote add origin git@github.com:ak97z/big-screen.git &&
git push -uf origin master:gh-pages &&
cd -;
