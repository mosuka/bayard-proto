extern crate protobuf_codegen_pure;
extern crate protoc;
extern crate protoc_rust;
extern crate protoc_rust_grpc;

use protobuf_codegen_pure::Customize;
use std::fs;

fn main() {
    fs::remove_dir_all("src/proto").unwrap_or_default();

    fs::create_dir_all("src/proto").unwrap_or_default();

    protoc_rust::run(protoc_rust::Args {
        out_dir: "src/proto",
        input: &["proto/indexrpcpb.proto"],
        includes: &["proto"],
        customize: Customize {
            ..Default::default()
        },
    })
    .expect("protoc");

    protoc_rust_grpc::run(protoc_rust_grpc::Args {
        out_dir: "src/proto",
        input: &["proto/indexpb.proto"],
        includes: &["proto"],
        rust_protobuf: true,
        ..Default::default()
    })
    .expect("protoc-rust-grpc");
}
