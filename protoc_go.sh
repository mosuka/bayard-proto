#!/usr/bin/env bash

OUTPUT_DIR=./go

mkdir -p ${OUTPUT_DIR}
rm -rf ${OUTPUT_DIR}/*

PROTO_DIRS=$(find . -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq | grep -v '/target/')
for PROTO_DIR in ${PROTO_DIRS}
do
  PROTO_FILES=$(find "${PROTO_DIR}" -name '*.proto' -print0 | xargs -0 -n1 | sort | uniq)
  protoc --proto_path="${PROTO_DIR}" --go_out=plugins=grpc:${OUTPUT_DIR} ${PROTO_FILES}
done
