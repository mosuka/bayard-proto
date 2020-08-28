PROTO_VERSION ?= $(shell cargo metadata --no-deps --format-version=1 | jq -r '.packages[] | select(.name=="bayard-proto") | .version')

.DEFAULT_GOAL := build

clean:
	cargo clean

format:
	cargo fmt

build:
	cargo build --release

test:
	cargo test

tag:
	git tag v$(PROTO_VERSION)
	git push origin v$(PROTO_VERSION)

publish:
ifeq ($(shell curl -s -XGET https://crates.io/api/v1/crates/bayard-proto | jq -r '.versions[].num' | grep $(PROTO_VERSION)),)
	cargo package && cargo publish
endif
