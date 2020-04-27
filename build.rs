use std::io::{Error, ErrorKind};
use std::process::{Command, Stdio};

fn main() -> Result<(), std::io::Error> {
    let mut proc_rust = Command::new("./protoc_rust.sh")
        .stdout(Stdio::piped())
        .spawn()
        .expect("failed to run");
    let ret = proc_rust.wait().unwrap();

    if ret.success() {
        // noop
    } else {
        return Err(Error::new(
            ErrorKind::Other,
            format!("failed to run: {}", ret.code().unwrap()),
        ));
    }

    let mut proc_grpc_web = Command::new("./protoc_grpc-web.sh")
        .stdout(Stdio::piped())
        .spawn()
        .expect("failed to run");
    let ret = proc_grpc_web.wait().unwrap();

    if ret.success() {
        Ok(())
    } else {
        Err(Error::new(
            ErrorKind::Other,
            format!("failed to run: {}", ret.code().unwrap()),
        ))
    }
}
