#!/usr/bin/env bash

cd contactify-quark
./gradlew build
cd ../contactify-react
npm run build
