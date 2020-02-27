.DEFAULT_GOAL := build

clean:
	cargo clean

format:
	cargo fmt

prepare:
	cargo update -p protobuf --precise 2.8.0

protoc: prepare
	./protoc.sh

build: protoc
	cargo build --release

test:
	cargo test
