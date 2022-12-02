#! usr/bin/bash

ls -R
mkdir folder
touch ./folder/file.txt
ls -R
mkdir resultFolder
ls -R
cd folder
ls -R
cp ~/folder/file.txt ~/resultFolder/
cd ..
cd resultFolder
ls -R
mv file.txt newFile.txt
cd ..
cd folder
ls -R
mv file.txt newFile.txt
ls -l
ls ~/resultFolder/ -l