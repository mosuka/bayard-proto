.DEFAULT_GOAL := build

clean:
	cargo clean

format:
	cargo fmt

rust:
	./protoc_rust.sh

build:
	cargo build --release

test:
	cargo test
