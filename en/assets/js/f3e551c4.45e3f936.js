"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[932],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return g}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),g=o,m=d["".concat(l,".").concat(g)]||d[g]||s[g]||a;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6325:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],c={id:"tracing",title:"Tracing",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},l=void 0,p={unversionedId:"component/middleware/tracing",id:"component/middleware/tracing",isDocsHomePage:!1,title:"Tracing",description:"We use OpenTelemetry for distributed tracing.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/tracing.md",sourceDirName:"component/middleware",slug:"/component/middleware/tracing",permalink:"/en/docs/component/middleware/tracing",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/middleware/tracing.md",tags:[],version:"current",frontMatter:{id:"tracing",title:"Tracing",keywords:["Go","Kratos","Toolkit","Framework","Microservices","Protobuf","gRPC","HTTP"]},sidebar:"docs",previous:{title:"Recovery",permalink:"/en/docs/component/middleware/recovery"},next:{title:"Validate",permalink:"/en/docs/component/middleware/validate"}},u=[{value:"Configuration",id:"configuration",children:[{value:"<code>WithTracerProvider</code>",id:"withtracerprovider",children:[],level:4},{value:"<code>WithPropagator</code>",id:"withpropagator",children:[],level:4}],level:3},{value:"Usage",id:"usage",children:[{value:"Tracing for Server",id:"tracing-for-server",children:[],level:4},{value:"Tracing for Client",id:"tracing-for-client",children:[],level:4}],level:3},{value:"References",id:"references",children:[],level:3}],s={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We use OpenTelemetry for distributed tracing."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"There are two methods for configuration ",(0,a.kt)("inlineCode",{parentName:"p"},"WithTracerProvider()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"WithPropagator()"),"."),(0,a.kt)("h4",{id:"withtracerprovider"},(0,a.kt)("inlineCode",{parentName:"h4"},"WithTracerProvider")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithTracerProvider(provider trace.TracerProvider) Option {\n    return func(opts *options) {\n        opts.TracerProvider = provider\n    }\n}    \n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WithTracerProvider")," is for setting the provider, it accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"trace.TracerProvider")),(0,a.kt)("h4",{id:"withpropagator"},(0,a.kt)("inlineCode",{parentName:"h4"},"WithPropagator")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"func WithPropagator(propagator propagation.TextMapPropagator) Option {\n    return func(opts *options) {\n        opts.Propagator = propagator\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WithPropagator")," is for setting the text map propagator, it accepts ",(0,a.kt)("inlineCode",{parentName:"p"},"propagation.TextMapPropagator")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("h4",{id:"tracing-for-server"},"Tracing for Server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package server\n\nfunc initTracer() func() {\n    // create a jaeger pipeline\n    flush, err := jaeger.InstallNewPipeline(\n        jaeger.WithCollectorEndpoint("http://localhost:14268/api/traces"),\n        jaeger.WithSDKOptions(\n            sdktrace.WithSampler(sdktrace.AlwaysSample()),\n            sdktrace.WithResource(resource.NewWithAttributes(\n                semconv.ServiceNameKey.String("kratos-trace"),\n                attribute.String("exporter", "jaeger"),\n                attribute.Float64("float", 312.23),\n            )),\n        ),\n    )\n    if err != nil {\n        log.Fatal(err)\n    }\n    return flush\n}\n// NewGRPCServer new a gRPC server.\nfunc NewGRPCServer(c *conf.Server, executor *service.ExecutorService) *grpc.Server {\n    flush := initTracer()\n    defer flush()\n    //tr := otel.Tracer("component-main")\n    var opts = []grpc.ServerOption{\n        grpc.Middleware(\n            middleware.Chain(\n                tracing.Server(tracing.WithTracerProvider(otel.GetTracerProvider())),\n            ),\n        ),\n    }\n   // ...\n}\n')),(0,a.kt)("h4",{id:"tracing-for-client"},"Tracing for Client"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'\nfunc initTracer() func() {\n    // create a jaeger pipeline\n    flush, err := jaeger.InstallNewPipeline(\n        jaeger.WithCollectorEndpoint("http://localhost:14268/api/traces"),\n        jaeger.WithSDKOptions(\n            sdktrace.WithSampler(sdktrace.AlwaysSample()),\n            sdktrace.WithResource(resource.NewWithAttributes(\n                semconv.ServiceNameKey.String("kratos-trace"),\n                attribute.String("exporter", "jaeger"),\n                attribute.Float64("float", 312.23),\n            )),\n        ),\n    )\n    if err != nil {\n        log.Fatal(err)\n    }\n    return flush\n}\nfunc grpcCli() (*grpc.ClientConn, error) {\n    return grpc.DialInsecure(\n        context.Background(),\n        grpc.WithMiddleware(\n            tracing.Client(\n                tracing.WithTracerProvider(\n                    otel.GetTracerProvider(),\n                ),\n            ),\n        ),\n    )\n}\n')),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://opentelemetry.io/"},"https://opentelemetry.io/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/open-telemetry/opentelemetry-go/tree/main/example"},"https://github.com/open-telemetry/opentelemetry-go/tree/main/example")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/go.opentelemetry.io/otel"},"https://pkg.go.dev/go.opentelemetry.io/otel"))))}d.isMDXComponent=!0}}]);