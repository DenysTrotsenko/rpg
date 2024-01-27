#!/bin/bash

gsutil -m cp -R gs://imperium-maledictum.appspot.com/data /Users/denystrotsenko/Public

npx -p node-firestore-import-export firestore-export -a /Users/denystrotsenko/Public/imperium-maledictum-firebase-adminsdk-qcin6-d8b4a53df3.json -b /Users/denystrotsenko/Public/backup.json
