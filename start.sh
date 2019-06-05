#!/usr/bin/env bash

IMG_NAME=zorro

if [[ "$(docker images -q $IMG_NAME 2> /dev/null)" == "" ]]; then
  docker build -t $IMG_NAME .
fi

docker run -it -v $(pwd):/home/node/code $IMG_NAME ash
