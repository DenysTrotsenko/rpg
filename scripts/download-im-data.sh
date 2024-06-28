#!/bin/bash

gsutil -m cp -R gs://imperium-maledictum.appspot.com/settings/8e3c265b4939aa8d /Users/denystrotsenko/Public
gsutil -m cp -R gs://imperium-maledictum.appspot.com/settings/722023a54da68e38 /Users/denystrotsenko/Public

npx -p node-firestore-import-export firestore-export -a /Users/denystrotsenko/Public/imperium-maledictum-firebase-adminsdk-qcin6-d8b4a53df3.json -b /Users/denystrotsenko/Public/backup.json
