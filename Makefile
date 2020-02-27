.DEFAULT_GOAL := build

clean:
	cargo clean

format:
	cargo fmt

protoc:
	./protoc.sh

build: protoc
	cargo build --release

test:
	cargo test
