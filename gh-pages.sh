#!/bin/sh
# Ensure .gitignore does not contain build folder

npm run build
git add build
git commit -m "update deployment"
git push
git subtree push --prefix build origin gh-pages