use std::process::{Command};

fn main() {
    let status = Command::new("./protoc.sh").status().expect("failed to run");
    if status.success() {
        println!("success to generate codes");
    } else {
        println!("failed to generate codes");
    }
}
