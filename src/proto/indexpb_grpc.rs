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


// interface

pub trait Index {
    fn raft(&self, o: ::grpc::RequestOptions, p: super::eraftpb::Message) -> ::grpc::SingleResponse<super::indexrpcpb::RaftDone>;

    fn raft_conf_change(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::ConfChangeReq) -> ::grpc::SingleResponse<super::indexrpcpb::RaftDone>;

    fn probe(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::ProbeReq) -> ::grpc::SingleResponse<super::indexrpcpb::ProbeResp>;

    fn peers(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::PeersReq) -> ::grpc::SingleResponse<super::indexrpcpb::PeersResp>;

    fn metrics(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::MetricsReq) -> ::grpc::SingleResponse<super::indexrpcpb::MetricsResp>;

    fn get(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::GetReq) -> ::grpc::SingleResponse<super::indexrpcpb::GetResp>;

    fn put(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::PutReq) -> ::grpc::SingleResponse<super::indexrpcpb::PutResp>;

    fn delete(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::DeleteReq) -> ::grpc::SingleResponse<super::indexrpcpb::DeleteResp>;

    fn bulk_put(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::BulkPutReq) -> ::grpc::SingleResponse<super::indexrpcpb::BulkPutResp>;

    fn bulk_delete(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::BulkDeleteReq) -> ::grpc::SingleResponse<super::indexrpcpb::BulkDeleteResp>;

    fn commit(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::CommitReq) -> ::grpc::SingleResponse<super::indexrpcpb::CommitResp>;

    fn rollback(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::RollbackReq) -> ::grpc::SingleResponse<super::indexrpcpb::RollbackResp>;

    fn merge(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::MergeReq) -> ::grpc::SingleResponse<super::indexrpcpb::MergeResp>;

    fn search(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::SearchReq) -> ::grpc::SingleResponse<super::indexrpcpb::SearchResp>;

    fn schema(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::SchemaReq) -> ::grpc::SingleResponse<super::indexrpcpb::SchemaResp>;
}

// client

pub struct IndexClient {
    grpc_client: ::std::sync::Arc<::grpc::Client>,
    method_Raft: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::eraftpb::Message, super::indexrpcpb::RaftDone>>,
    method_RaftConfChange: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::ConfChangeReq, super::indexrpcpb::RaftDone>>,
    method_Probe: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::ProbeReq, super::indexrpcpb::ProbeResp>>,
    method_Peers: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::PeersReq, super::indexrpcpb::PeersResp>>,
    method_Metrics: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::MetricsReq, super::indexrpcpb::MetricsResp>>,
    method_Get: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::GetReq, super::indexrpcpb::GetResp>>,
    method_Put: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::PutReq, super::indexrpcpb::PutResp>>,
    method_Delete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::DeleteReq, super::indexrpcpb::DeleteResp>>,
    method_BulkPut: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::BulkPutReq, super::indexrpcpb::BulkPutResp>>,
    method_BulkDelete: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::BulkDeleteReq, super::indexrpcpb::BulkDeleteResp>>,
    method_Commit: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::CommitReq, super::indexrpcpb::CommitResp>>,
    method_Rollback: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::RollbackReq, super::indexrpcpb::RollbackResp>>,
    method_Merge: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::MergeReq, super::indexrpcpb::MergeResp>>,
    method_Search: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::SearchReq, super::indexrpcpb::SearchResp>>,
    method_Schema: ::std::sync::Arc<::grpc::rt::MethodDescriptor<super::indexrpcpb::SchemaReq, super::indexrpcpb::SchemaResp>>,
}

impl ::grpc::ClientStub for IndexClient {
    fn with_client(grpc_client: ::std::sync::Arc<::grpc::Client>) -> Self {
        IndexClient {
            grpc_client: grpc_client,
            method_Raft: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Raft".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_RaftConfChange: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/RaftConfChange".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Probe: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Probe".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Peers: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Peers".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Metrics: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Metrics".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Get: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Get".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Put: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Put".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Delete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Delete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_BulkPut: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/BulkPut".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_BulkDelete: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/BulkDelete".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Commit: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Commit".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Rollback: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Rollback".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Merge: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Merge".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Search: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Search".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
            method_Schema: ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                name: "/indexpb.Index/Schema".to_string(),
                streaming: ::grpc::rt::GrpcStreaming::Unary,
                req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
            }),
        }
    }
}

impl Index for IndexClient {
    fn raft(&self, o: ::grpc::RequestOptions, p: super::eraftpb::Message) -> ::grpc::SingleResponse<super::indexrpcpb::RaftDone> {
        self.grpc_client.call_unary(o, p, self.method_Raft.clone())
    }

    fn raft_conf_change(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::ConfChangeReq) -> ::grpc::SingleResponse<super::indexrpcpb::RaftDone> {
        self.grpc_client.call_unary(o, p, self.method_RaftConfChange.clone())
    }

    fn probe(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::ProbeReq) -> ::grpc::SingleResponse<super::indexrpcpb::ProbeResp> {
        self.grpc_client.call_unary(o, p, self.method_Probe.clone())
    }

    fn peers(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::PeersReq) -> ::grpc::SingleResponse<super::indexrpcpb::PeersResp> {
        self.grpc_client.call_unary(o, p, self.method_Peers.clone())
    }

    fn metrics(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::MetricsReq) -> ::grpc::SingleResponse<super::indexrpcpb::MetricsResp> {
        self.grpc_client.call_unary(o, p, self.method_Metrics.clone())
    }

    fn get(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::GetReq) -> ::grpc::SingleResponse<super::indexrpcpb::GetResp> {
        self.grpc_client.call_unary(o, p, self.method_Get.clone())
    }

    fn put(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::PutReq) -> ::grpc::SingleResponse<super::indexrpcpb::PutResp> {
        self.grpc_client.call_unary(o, p, self.method_Put.clone())
    }

    fn delete(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::DeleteReq) -> ::grpc::SingleResponse<super::indexrpcpb::DeleteResp> {
        self.grpc_client.call_unary(o, p, self.method_Delete.clone())
    }

    fn bulk_put(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::BulkPutReq) -> ::grpc::SingleResponse<super::indexrpcpb::BulkPutResp> {
        self.grpc_client.call_unary(o, p, self.method_BulkPut.clone())
    }

    fn bulk_delete(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::BulkDeleteReq) -> ::grpc::SingleResponse<super::indexrpcpb::BulkDeleteResp> {
        self.grpc_client.call_unary(o, p, self.method_BulkDelete.clone())
    }

    fn commit(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::CommitReq) -> ::grpc::SingleResponse<super::indexrpcpb::CommitResp> {
        self.grpc_client.call_unary(o, p, self.method_Commit.clone())
    }

    fn rollback(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::RollbackReq) -> ::grpc::SingleResponse<super::indexrpcpb::RollbackResp> {
        self.grpc_client.call_unary(o, p, self.method_Rollback.clone())
    }

    fn merge(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::MergeReq) -> ::grpc::SingleResponse<super::indexrpcpb::MergeResp> {
        self.grpc_client.call_unary(o, p, self.method_Merge.clone())
    }

    fn search(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::SearchReq) -> ::grpc::SingleResponse<super::indexrpcpb::SearchResp> {
        self.grpc_client.call_unary(o, p, self.method_Search.clone())
    }

    fn schema(&self, o: ::grpc::RequestOptions, p: super::indexrpcpb::SchemaReq) -> ::grpc::SingleResponse<super::indexrpcpb::SchemaResp> {
        self.grpc_client.call_unary(o, p, self.method_Schema.clone())
    }
}

// server

pub struct IndexServer;


impl IndexServer {
    pub fn new_service_def<H : Index + 'static + Sync + Send + 'static>(handler: H) -> ::grpc::rt::ServerServiceDefinition {
        let handler_arc = ::std::sync::Arc::new(handler);
        ::grpc::rt::ServerServiceDefinition::new("/indexpb.Index",
            vec![
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Raft".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.raft(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/RaftConfChange".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.raft_conf_change(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Probe".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.probe(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Peers".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.peers(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Metrics".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.metrics(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Get".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.get(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Put".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.put(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Delete".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.delete(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/BulkPut".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.bulk_put(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/BulkDelete".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.bulk_delete(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Commit".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.commit(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Rollback".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.rollback(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Merge".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.merge(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Search".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.search(o, p))
                    },
                ),
                ::grpc::rt::ServerMethod::new(
                    ::std::sync::Arc::new(::grpc::rt::MethodDescriptor {
                        name: "/indexpb.Index/Schema".to_string(),
                        streaming: ::grpc::rt::GrpcStreaming::Unary,
                        req_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                        resp_marshaller: Box::new(::grpc::protobuf::MarshallerProtobuf),
                    }),
                    {
                        let handler_copy = handler_arc.clone();
                        ::grpc::rt::MethodHandlerUnary::new(move |o, p| handler_copy.schema(o, p))
                    },
                ),
            ],
        )
    }
}
