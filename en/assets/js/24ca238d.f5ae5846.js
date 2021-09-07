(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9202],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return l},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1290:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={id:"grpc",title:"gRPC",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},c=void 0,p={unversionedId:"component/transport/grpc",id:"component/transport/grpc",isDocsHomePage:!1,title:"gRPC",description:"Our transporter/grpc is developed upon gRPC, and implements Transporter interface. You could use it for the communication between services on gRPC protocol.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/transport/grpc.md",sourceDirName:"component/transport",slug:"/component/transport/grpc",permalink:"/en/docs/component/transport/grpc",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/transport/grpc.md",tags:[],version:"current",frontMatter:{id:"grpc",title:"gRPC",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"HTTP",permalink:"/en/docs/component/transport/http"},next:{title:"Protobuf Guideline",permalink:"/en/docs/guide/api-protobuf"}},s=[{value:"Server",id:"server",children:[{value:"Options",id:"options",children:[]},{value:"Implementation Details",id:"implementation-details",children:[]},{value:"Usage",id:"usage",children:[]}]},{value:"client",id:"client",children:[{value:"Options",id:"options-2",children:[]},{value:"Implementation Details",id:"implementation-details-1",children:[]},{value:"Usage",id:"usage-1",children:[]}]},{value:"References",id:"references",children:[]}],l={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our transporter/grpc is developed upon ",(0,i.kt)("a",{parentName:"p",href:"https://www.grpc.io/"},"gRPC"),", and implements ",(0,i.kt)("inlineCode",{parentName:"p"},"Transporter")," interface. You could use it for the communication between services on gRPC protocol."),(0,i.kt)("h2",{id:"server"},"Server"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("h4",{id:"network"},(0,i.kt)("inlineCode",{parentName:"h4"},"Network()")),(0,i.kt)("p",null,"To set communication protocol such as tcp."),(0,i.kt)("h4",{id:"address"},(0,i.kt)("inlineCode",{parentName:"h4"},"Address()")),(0,i.kt)("p",null,"To set server's listening address."),(0,i.kt)("h4",{id:"timeout"},(0,i.kt)("inlineCode",{parentName:"h4"},"Timeout()")),(0,i.kt)("p",null,"To set the server-side timeout."),(0,i.kt)("h4",{id:"logger"},(0,i.kt)("inlineCode",{parentName:"h4"},"Logger()")),(0,i.kt)("p",null,"To set logger."),(0,i.kt)("h4",{id:"middleware"},(0,i.kt)("inlineCode",{parentName:"h4"},"Middleware()")),(0,i.kt)("p",null,"To set middleware for gRPC server."),(0,i.kt)("h4",{id:"unaryinterceptor"},(0,i.kt)("inlineCode",{parentName:"h4"},"UnaryInterceptor()")),(0,i.kt)("p",null,"To set interceptors for gRPC server."),(0,i.kt)("h4",{id:"options-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"Options()")),(0,i.kt)("p",null,"To set some extra ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc.ServerOption")),(0,i.kt)("h3",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("h4",{id:"newserver"},(0,i.kt)("inlineCode",{parentName:"h4"},"NewServer()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'func NewServer(opts ...ServerOption) *Server {\n  // grpc server default configuration\n    srv := &Server{\n        network: "tcp",\n        address: ":0",\n        timeout: 1 * time.Second,\n        health:  health.NewServer(),\n        log:     log.NewHelper(log.DefaultLogger),\n    }\n  // apply opts\n    for _, o := range opts {\n        o(srv)\n    }\n  // convert middleware to grpc interceptor\n    var ints = []grpc.UnaryServerInterceptor{\n        srv.unaryServerInterceptor(),\n    }\n\n    if len(srv.ints) > 0 {\n        ints = append(ints, srv.ints...)\n    }\n\n  // convert UnaryInterceptor to ServerOption\n    var grpcOpts = []grpc.ServerOption{\n        grpc.ChainUnaryInterceptor(ints...),\n    }\n    if len(srv.grpcOpts) > 0 {\n        grpcOpts = append(grpcOpts, srv.grpcOpts...)\n    }\n  // create grpc server\n    srv.Server = grpc.NewServer(grpcOpts...)\n  // create metadata server\n    srv.metadata = apimd.NewServer(srv.Server)\n    // register these internal API\n    grpc_health_v1.RegisterHealthServer(srv.Server, srv.health)\n    apimd.RegisterMetadataServer(srv.Server, srv.metadata)\n    reflection.Register(srv.Server)\n    return srv\n}\n')),(0,i.kt)("h4",{id:"unaryserverinterceptor"},(0,i.kt)("inlineCode",{parentName:"h4"},"unaryServerInterceptor()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func (s *Server) unaryServerInterceptor() grpc.UnaryServerInterceptor {\n    return func(ctx context.Context, req interface{}, info *grpc.UnaryServerInfo, handler grpc.UnaryHandler) (interface{}, error) {\n    // merge two ctx\n        ctx, cancel := ic.Merge(ctx, s.ctx)\n        defer cancel()\n    // get metadata from ctx\n        md, _ := grpcmd.FromIncomingContext(ctx)\n    // bind some information into ctx\n        ctx = transport.NewServerContext(ctx, &Transport{\n            endpoint:  s.endpoint.String(),\n            operation: info.FullMethod,\n            header:    headerCarrier(md),\n        })\n    // set timeout\n        if s.timeout > 0 {\n            ctx, cancel = context.WithTimeout(ctx, s.timeout)\n            defer cancel()\n        }\n    // middleware\n        h := func(ctx context.Context, req interface{}) (interface{}, error) {\n            return handler(ctx, req)\n        }\n        if len(s.middleware) > 0 {\n            h = middleware.Chain(s.middleware...)(h)\n        }\n        return h(ctx, req)\n    }\n}\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"These are some basic usage of gRPC, you could refer to ",(0,i.kt)("a",{parentName:"p",href:"https://pkg.go.dev/google.golang.org/grpc"},"gRPC Docs")," for advanced examples."),(0,i.kt)("h4",{id:"register-grpc-server"},"Register gRPC Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'gs := grpc.NewServer()\napp := kratos.New(\n    kratos.Name("kratos"),\n    kratos.Version("v1.0.0"),\n    kraotos.Server(gs),\n)\n')),(0,i.kt)("h4",{id:"set-middleware-in-grpc-server"},"Set middleware in gRPC Server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'grpcSrv := grpc.NewServer(\n    grpc.Address(":9000"),\n    grpc.Middleware(\n        logging.Server(),\n    ),\n)\n')),(0,i.kt)("h4",{id:"process-request-in-grpc-middleware"},"Process Request in gRPC Middleware"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"if info, ok := transport.FromServerContext(ctx); ok {\n  kind = info.Kind().String()\n  operation = info.Operation()\n}\n")),(0,i.kt)("h2",{id:"client"},"client"),(0,i.kt)("h3",{id:"options-2"},"Options"),(0,i.kt)("h4",{id:"withendpoint"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithEndpoint()")),(0,i.kt)("p",null,"To set the endpoint which the client will connect to."),(0,i.kt)("h4",{id:"withtimeout"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithTimeout()")),(0,i.kt)("p",null,"To set the client-side timeout."),(0,i.kt)("h4",{id:"withmiddleware"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithMiddleware()")),(0,i.kt)("p",null,"To set middleware."),(0,i.kt)("h4",{id:"withdiscovery"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithDiscovery()")),(0,i.kt)("p",null,"To set the discovery for gRPC client."),(0,i.kt)("h4",{id:"withunaryinterceptor"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithUnaryInterceptor()")),(0,i.kt)("p",null,"To set interceptors for gRPC client."),(0,i.kt)("h4",{id:"withoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"WithOptions()")),(0,i.kt)("p",null,"To set some extra ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc.ClientOption")),(0,i.kt)("h3",{id:"implementation-details-1"},"Implementation Details"),(0,i.kt)("h4",{id:"dial"},(0,i.kt)("inlineCode",{parentName:"h4"},"dial()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func dial(ctx context.Context, insecure bool, opts ...ClientOption) (*grpc.ClientConn, error) {\n    // default options\n  options := clientOptions{\n        timeout: 500 * time.Millisecond,\n    }\n  // apply opts\n    for _, o := range opts {\n        o(&options)\n    }\n  // convert middleware to grpc interceptor\n    var ints = []grpc.UnaryClientInterceptor{\n        unaryClientInterceptor(options.middleware, options.timeout),\n    }\n    if len(options.ints) > 0 {\n        ints = append(ints, options.ints...)\n    }\n    var grpcOpts = []grpc.DialOption{\n    // client side balancer\n        grpc.WithBalancerName(roundrobin.Name),\n        grpc.WithChainUnaryInterceptor(ints...),\n    }\n    if options.discovery != nil {\n    // To use service discovery\n        grpcOpts = append(grpcOpts, grpc.WithResolvers(discovery.NewBuilder(options.discovery)))\n    }\n    if insecure {\n    // to disable transport security for connection\n        grpcOpts = append(grpcOpts, grpc.WithInsecure())\n    }\n    if len(options.grpcOpts) > 0 {\n        grpcOpts = append(grpcOpts, options.grpcOpts...)\n    }\n    return grpc.DialContext(ctx, options.endpoint, grpcOpts...)\n}\n")),(0,i.kt)("h4",{id:"unaryclientinterceptor"},(0,i.kt)("inlineCode",{parentName:"h4"},"unaryClientInterceptor()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func unaryClientInterceptor(ms []middleware.Middleware, timeout time.Duration) grpc.UnaryClientInterceptor {\n    return func(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {\n    // bind some information into ctx\n        ctx = transport.NewClientContext(ctx, &Transport{\n            endpoint:  cc.Target(),\n            operation: method,\n            header:    headerCarrier{},\n        })\n        if timeout > 0 {\n      // set the timeout\n            var cancel context.CancelFunc\n            ctx, cancel = context.WithTimeout(ctx, timeout)\n            defer cancel()\n        }\n    // middleware \n        h := func(ctx context.Context, req interface{}) (interface{}, error) {\n            if tr, ok := transport.FromClientContext(ctx); ok {\n                keys := tr.Header().Keys()\n                keyvals := make([]string, 0, len(keys))\n                for _, k := range keys {\n                    keyvals = append(keyvals, k, tr.Header().Get(k))\n                }\n                ctx = grpcmd.AppendToOutgoingContext(ctx, keyvals...)\n            }\n            return reply, invoker(ctx, method, req, reply, cc, opts...)\n        }\n        if len(ms) > 0 {\n            h = middleware.Chain(ms...)(h)\n        }\n        _, err := h(ctx, req)\n        return err\n    }\n}\n")),(0,i.kt)("h3",{id:"usage-1"},"Usage"),(0,i.kt)("h4",{id:"client-connection"},"Client Connection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'    conn, err := grpc.DialInsecure(\n        context.Background(),\n        grpc.WithEndpoint("127.0.0.1:9000"),\n    )\n')),(0,i.kt)("h4",{id:"middleware-1"},"Middleware"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := grpc.DialInsecure(\n    context.Background(),\n    transport.WithEndpoint("127.0.0.1:9000"),\n    transport.WithMiddleware(\n          recovery.Recovery(),\n    ),\n)\n')),(0,i.kt)("h4",{id:"service-discovery"},"Service Discovery"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'conn, err := grpc.DialInsecure(\n    context.Background(),\n    grpc.WithEndpoint("discovery:///helloworld"),\n    grpc.WithDiscovery(r),\n)\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.grpc.io/"},"https://www.grpc.io/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.grpc.io/docs/languages/go/quickstart/"},"https://www.grpc.io/docs/languages/go/quickstart/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc-go"},"https://github.com/grpc/grpc-go"))))}d.isMDXComponent=!0}}]);