#!/usr/bin/env bash

mkdir -p ./grpc-web
rm -rf ./grpc-web/*

PROTO_DIRS=$(find . -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
for PROTO_DIR in ${PROTO_DIRS}
do
  PROTO_FILES=$(find "${PROTO_DIR}" -name '*.proto' -print0 | xargs -0 -n1 | sort | uniq)
  protoc --proto_path="${PROTO_DIR}" --js_out=import_style=commonjs:./grpc-web --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./grpc-web ${PROTO_FILES}
done
