// This file is generated. Do not edit
// @generated

// https://github.com/Manishearth/rust-clippy/issues/702
#![allow(unknown_lints)]
#![allow(clippy::all)]

#![cfg_attr(rustfmt, rustfmt_skip)]

#![allow(box_pointers)]
#![allow(dead_code)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
#![allow(non_snake_case)]
#![allow(non_upper_case_globals)]
#![allow(trivial_casts)]
#![allow(unsafe_code)]
#![allow(unused_imports)]
#![allow(unused_results)]

const METHOD_INDEX_SERVICE_GET: ::grpcio::Method<super::indexpb::GetReq, super::indexpb::GetReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Get",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_SEARCH: ::grpcio::Method<super::indexpb::SearchReq, super::indexpb::SearchReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Search",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_SET: ::grpcio::Method<super::indexpb::SetReq, super::indexpb::SetReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Set",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_DELETE: ::grpcio::Method<super::indexpb::DeleteReq, super::indexpb::DeleteReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Delete",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_BULK_SET: ::grpcio::Method<super::indexpb::BulkSetReq, super::indexpb::BulkSetReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/BulkSet",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_BULK_DELETE: ::grpcio::Method<super::indexpb::BulkDeleteReq, super::indexpb::BulkDeleteReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/BulkDelete",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_COMMIT: ::grpcio::Method<super::indexpb::CommitReq, super::indexpb::CommitReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Commit",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_ROLLBACK: ::grpcio::Method<super::indexpb::RollbackReq, super::indexpb::RollbackReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Rollback",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_MERGE: ::grpcio::Method<super::indexpb::MergeReq, super::indexpb::MergeReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Merge",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_SCHEMA: ::grpcio::Method<super::indexpb::SchemaReq, super::indexpb::SchemaReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Schema",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_METRICS: ::grpcio::Method<super::indexpb::MetricsReq, super::indexpb::MetricsReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Metrics",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

const METHOD_INDEX_SERVICE_STATUS: ::grpcio::Method<super::indexpb::StatusReq, super::indexpb::StatusReply> = ::grpcio::Method {
    ty: ::grpcio::MethodType::Unary,
    name: "/bayard.index.IndexService/Status",
    req_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
    resp_mar: ::grpcio::Marshaller { ser: ::grpcio::pb_ser, de: ::grpcio::pb_de },
};

#[derive(Clone)]
pub struct IndexServiceClient {
    client: ::grpcio::Client,
}

impl IndexServiceClient {
    pub fn new(channel: ::grpcio::Channel) -> Self {
        IndexServiceClient {
            client: ::grpcio::Client::new(channel),
        }
    }

    pub fn get_opt(&self, req: &super::indexpb::GetReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::GetReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_GET, req, opt)
    }

    pub fn get(&self, req: &super::indexpb::GetReq) -> ::grpcio::Result<super::indexpb::GetReply> {
        self.get_opt(req, ::grpcio::CallOption::default())
    }

    pub fn get_async_opt(&self, req: &super::indexpb::GetReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::GetReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_GET, req, opt)
    }

    pub fn get_async(&self, req: &super::indexpb::GetReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::GetReply>> {
        self.get_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn search_opt(&self, req: &super::indexpb::SearchReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::SearchReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_SEARCH, req, opt)
    }

    pub fn search(&self, req: &super::indexpb::SearchReq) -> ::grpcio::Result<super::indexpb::SearchReply> {
        self.search_opt(req, ::grpcio::CallOption::default())
    }

    pub fn search_async_opt(&self, req: &super::indexpb::SearchReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::SearchReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_SEARCH, req, opt)
    }

    pub fn search_async(&self, req: &super::indexpb::SearchReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::SearchReply>> {
        self.search_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn set_opt(&self, req: &super::indexpb::SetReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::SetReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_SET, req, opt)
    }

    pub fn set(&self, req: &super::indexpb::SetReq) -> ::grpcio::Result<super::indexpb::SetReply> {
        self.set_opt(req, ::grpcio::CallOption::default())
    }

    pub fn set_async_opt(&self, req: &super::indexpb::SetReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::SetReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_SET, req, opt)
    }

    pub fn set_async(&self, req: &super::indexpb::SetReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::SetReply>> {
        self.set_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn delete_opt(&self, req: &super::indexpb::DeleteReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::DeleteReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_DELETE, req, opt)
    }

    pub fn delete(&self, req: &super::indexpb::DeleteReq) -> ::grpcio::Result<super::indexpb::DeleteReply> {
        self.delete_opt(req, ::grpcio::CallOption::default())
    }

    pub fn delete_async_opt(&self, req: &super::indexpb::DeleteReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::DeleteReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_DELETE, req, opt)
    }

    pub fn delete_async(&self, req: &super::indexpb::DeleteReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::DeleteReply>> {
        self.delete_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn bulk_set_opt(&self, req: &super::indexpb::BulkSetReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::BulkSetReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_BULK_SET, req, opt)
    }

    pub fn bulk_set(&self, req: &super::indexpb::BulkSetReq) -> ::grpcio::Result<super::indexpb::BulkSetReply> {
        self.bulk_set_opt(req, ::grpcio::CallOption::default())
    }

    pub fn bulk_set_async_opt(&self, req: &super::indexpb::BulkSetReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::BulkSetReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_BULK_SET, req, opt)
    }

    pub fn bulk_set_async(&self, req: &super::indexpb::BulkSetReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::BulkSetReply>> {
        self.bulk_set_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn bulk_delete_opt(&self, req: &super::indexpb::BulkDeleteReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::BulkDeleteReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_BULK_DELETE, req, opt)
    }

    pub fn bulk_delete(&self, req: &super::indexpb::BulkDeleteReq) -> ::grpcio::Result<super::indexpb::BulkDeleteReply> {
        self.bulk_delete_opt(req, ::grpcio::CallOption::default())
    }

    pub fn bulk_delete_async_opt(&self, req: &super::indexpb::BulkDeleteReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::BulkDeleteReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_BULK_DELETE, req, opt)
    }

    pub fn bulk_delete_async(&self, req: &super::indexpb::BulkDeleteReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::BulkDeleteReply>> {
        self.bulk_delete_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn commit_opt(&self, req: &super::indexpb::CommitReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::CommitReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_COMMIT, req, opt)
    }

    pub fn commit(&self, req: &super::indexpb::CommitReq) -> ::grpcio::Result<super::indexpb::CommitReply> {
        self.commit_opt(req, ::grpcio::CallOption::default())
    }

    pub fn commit_async_opt(&self, req: &super::indexpb::CommitReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::CommitReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_COMMIT, req, opt)
    }

    pub fn commit_async(&self, req: &super::indexpb::CommitReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::CommitReply>> {
        self.commit_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn rollback_opt(&self, req: &super::indexpb::RollbackReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::RollbackReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_ROLLBACK, req, opt)
    }

    pub fn rollback(&self, req: &super::indexpb::RollbackReq) -> ::grpcio::Result<super::indexpb::RollbackReply> {
        self.rollback_opt(req, ::grpcio::CallOption::default())
    }

    pub fn rollback_async_opt(&self, req: &super::indexpb::RollbackReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::RollbackReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_ROLLBACK, req, opt)
    }

    pub fn rollback_async(&self, req: &super::indexpb::RollbackReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::RollbackReply>> {
        self.rollback_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn merge_opt(&self, req: &super::indexpb::MergeReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::MergeReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_MERGE, req, opt)
    }

    pub fn merge(&self, req: &super::indexpb::MergeReq) -> ::grpcio::Result<super::indexpb::MergeReply> {
        self.merge_opt(req, ::grpcio::CallOption::default())
    }

    pub fn merge_async_opt(&self, req: &super::indexpb::MergeReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::MergeReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_MERGE, req, opt)
    }

    pub fn merge_async(&self, req: &super::indexpb::MergeReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::MergeReply>> {
        self.merge_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn schema_opt(&self, req: &super::indexpb::SchemaReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::SchemaReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_SCHEMA, req, opt)
    }

    pub fn schema(&self, req: &super::indexpb::SchemaReq) -> ::grpcio::Result<super::indexpb::SchemaReply> {
        self.schema_opt(req, ::grpcio::CallOption::default())
    }

    pub fn schema_async_opt(&self, req: &super::indexpb::SchemaReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::SchemaReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_SCHEMA, req, opt)
    }

    pub fn schema_async(&self, req: &super::indexpb::SchemaReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::SchemaReply>> {
        self.schema_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn metrics_opt(&self, req: &super::indexpb::MetricsReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::MetricsReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_METRICS, req, opt)
    }

    pub fn metrics(&self, req: &super::indexpb::MetricsReq) -> ::grpcio::Result<super::indexpb::MetricsReply> {
        self.metrics_opt(req, ::grpcio::CallOption::default())
    }

    pub fn metrics_async_opt(&self, req: &super::indexpb::MetricsReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::MetricsReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_METRICS, req, opt)
    }

    pub fn metrics_async(&self, req: &super::indexpb::MetricsReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::MetricsReply>> {
        self.metrics_async_opt(req, ::grpcio::CallOption::default())
    }

    pub fn status_opt(&self, req: &super::indexpb::StatusReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<super::indexpb::StatusReply> {
        self.client.unary_call(&METHOD_INDEX_SERVICE_STATUS, req, opt)
    }

    pub fn status(&self, req: &super::indexpb::StatusReq) -> ::grpcio::Result<super::indexpb::StatusReply> {
        self.status_opt(req, ::grpcio::CallOption::default())
    }

    pub fn status_async_opt(&self, req: &super::indexpb::StatusReq, opt: ::grpcio::CallOption) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::StatusReply>> {
        self.client.unary_call_async(&METHOD_INDEX_SERVICE_STATUS, req, opt)
    }

    pub fn status_async(&self, req: &super::indexpb::StatusReq) -> ::grpcio::Result<::grpcio::ClientUnaryReceiver<super::indexpb::StatusReply>> {
        self.status_async_opt(req, ::grpcio::CallOption::default())
    }
    pub fn spawn<F>(&self, f: F) where F: ::futures::Future<Item = (), Error = ()> + Send + 'static {
        self.client.spawn(f)
    }
}

pub trait IndexService {
    fn get(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::GetReq, sink: ::grpcio::UnarySink<super::indexpb::GetReply>);
    fn search(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::SearchReq, sink: ::grpcio::UnarySink<super::indexpb::SearchReply>);
    fn set(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::SetReq, sink: ::grpcio::UnarySink<super::indexpb::SetReply>);
    fn delete(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::DeleteReq, sink: ::grpcio::UnarySink<super::indexpb::DeleteReply>);
    fn bulk_set(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::BulkSetReq, sink: ::grpcio::UnarySink<super::indexpb::BulkSetReply>);
    fn bulk_delete(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::BulkDeleteReq, sink: ::grpcio::UnarySink<super::indexpb::BulkDeleteReply>);
    fn commit(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::CommitReq, sink: ::grpcio::UnarySink<super::indexpb::CommitReply>);
    fn rollback(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::RollbackReq, sink: ::grpcio::UnarySink<super::indexpb::RollbackReply>);
    fn merge(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::MergeReq, sink: ::grpcio::UnarySink<super::indexpb::MergeReply>);
    fn schema(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::SchemaReq, sink: ::grpcio::UnarySink<super::indexpb::SchemaReply>);
    fn metrics(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::MetricsReq, sink: ::grpcio::UnarySink<super::indexpb::MetricsReply>);
    fn status(&mut self, ctx: ::grpcio::RpcContext, req: super::indexpb::StatusReq, sink: ::grpcio::UnarySink<super::indexpb::StatusReply>);
}

pub fn create_index_service<S: IndexService + Send + Clone + 'static>(s: S) -> ::grpcio::Service {
    let mut builder = ::grpcio::ServiceBuilder::new();
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_GET, move |ctx, req, resp| {
        instance.get(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_SEARCH, move |ctx, req, resp| {
        instance.search(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_SET, move |ctx, req, resp| {
        instance.set(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_DELETE, move |ctx, req, resp| {
        instance.delete(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_BULK_SET, move |ctx, req, resp| {
        instance.bulk_set(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_BULK_DELETE, move |ctx, req, resp| {
        instance.bulk_delete(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_COMMIT, move |ctx, req, resp| {
        instance.commit(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_ROLLBACK, move |ctx, req, resp| {
        instance.rollback(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_MERGE, move |ctx, req, resp| {
        instance.merge(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_SCHEMA, move |ctx, req, resp| {
        instance.schema(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_METRICS, move |ctx, req, resp| {
        instance.metrics(ctx, req, resp)
    });
    let mut instance = s.clone();
    builder = builder.add_unary_handler(&METHOD_INDEX_SERVICE_STATUS, move |ctx, req, resp| {
        instance.status(ctx, req, resp)
    });
    builder.build()
}
