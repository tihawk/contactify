#!/usr/bin/env bash

cd contactify-quark
./gradlew build
cd ../contactify-react
npm install
npm run build
