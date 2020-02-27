# bayard-proto

[![Join the chat at https://gitter.im/bayard-search/bayard](https://badges.gitter.im/bayard-search/bayard.svg)](https://gitter.im/bayard-search/bayard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Requirement

The following products are required to build:

- Rust >= 1.39.0
- make >= 3.81
- protoc >= 3.9.2
- protobuf-codegen = 2.10.1
- grpcio-compiler = 0.4.3

```
% brew install protobuf  # OS X
% apt-get install protobuf-compiler  # Linux

% cargo install protobuf-codegen
% cargo install grpcio-compiler
```

## Build

```
% make build
```
