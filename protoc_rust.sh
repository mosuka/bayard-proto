#!/usr/bin/env bash

OUTPUT_DIR=./src/proto

mkdir -p ${OUTPUT_DIR}
rm -rf ${OUTPUT_DIR}/*

GRPC_RUST_PLUGIN=$(which grpc_rust_plugin)

PROTO_DIRS=$(find . -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq  | grep -v '/target/')
for PROTO_DIR in ${PROTO_DIRS}
do
  PROTO_FILES=$(find "${PROTO_DIR}" -name '*.proto' -print0 | xargs -0 -n1 | sort | uniq | grep -v "${PROTO_DIR}/eraftpb.proto")
  protoc --proto_path="${PROTO_DIR}" --rust_out=${OUTPUT_DIR} --grpc_out=${OUTPUT_DIR} --plugin=protoc-gen-grpc=${GRPC_RUST_PLUGIN} ${PROTO_FILES}
done

RS_FILES=$(find ${OUTPUT_DIR} -name '*.rs' -print0 | xargs -0 -n1 basename | sort | uniq)
echo "// This file is generated. Do not edit" > ${OUTPUT_DIR}/mod.rs
echo "" >> ${OUTPUT_DIR}/mod.rs

echo "use raft::eraftpb;" >> ${OUTPUT_DIR}/mod.rs

echo "" >> ${OUTPUT_DIR}/mod.rs
for RS_FILE in ${RS_FILES}
do
  MODULE_NAME=$(echo "${RS_FILE}" | awk -F'.' '{print $1}')
  echo "pub mod ${MODULE_NAME};" >> ${OUTPUT_DIR}/mod.rs
done
