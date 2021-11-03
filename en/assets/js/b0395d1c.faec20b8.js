"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3080],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),g=p(r),m=o,d=g["".concat(s,".").concat(m)]||g[m]||u[m]||i;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var p=2;p<i;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2860:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return g}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),c=["components"],a={id:"registry",title:"Registry"},s=void 0,p={unversionedId:"component/registry",id:"component/registry",isDocsHomePage:!1,title:"Registry",description:"Interface",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/component/registry.md",sourceDirName:"component",slug:"/component/registry",permalink:"/en/docs/component/registry",editUrl:"https://github.com/go-kratos/go-kratos.dev/edit/main/i18n/en/docusaurus-plugin-content-docs/current/component/registry.md",tags:[],version:"current",frontMatter:{id:"registry",title:"Registry"},sidebar:"docs",previous:{title:"Metrics",permalink:"/en/docs/component/metrics"},next:{title:"Encoding",permalink:"/en/docs/component/encoding"}},l=[{value:"Interface",id:"interface",children:[],level:3},{value:"Usage",id:"usage",children:[{value:"Register a Service",id:"register-a-service",children:[],level:4},{value:"Service Discovery (gRPC)",id:"service-discovery-grpc",children:[],level:4}],level:3}],u={toc:l};function g(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"interface"},"Interface"),(0,i.kt)("p",null,"Registry has two interface, the Registrar is for services' register and deregister, the Discovery is for fetching the list of services."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Registrar interface {\n    // register the service\n    Register(ctx context.Context, service *ServiceInstance) error\n    // deregister the service\n    Deregister(ctx context.Context, service *ServiceInstance) error\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type Discovery interface {\n    // fetch the service list of serviceName\n    Fetch(ctx context.Context, serviceName string) ([]*ServiceInstance, error)\n    // subscribe to a list of serviceName\n    Watch(ctx context.Context, serviceName string) (Watcher, error)\n}\n")),(0,i.kt)("p",null,"Implementations:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/consul"},"consul"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/etcd"},"etcd"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/go-kratos/kube"},"k8s")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("h4",{id:"register-a-service"},"Register a Service"),(0,i.kt)("p",null,"Create a Registrar(e.g. consul) and inject it to Kratos applications. Then the framework will do register and deregister automatically."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import consul "github.com/go-kratos/consul/registry"\nimport  "github.com/hashicorp/consul/api"\n\ncli, err := api.NewClient(api.DefaultConfig())\nif err != nil {\n    panic(err)\n}\nreg := consul.New(cli)\n\napp := kratos.New(\n    kratos.Name(Name),\n    kratos.Version(Version),\n    kratos.Metadata(map[string]string{}),\n    kratos.Logger(logger),\n    kratos.Server(\n        hs,\n        gs,\n    ),\n    kratos.Registrar(reg),\n)\n')),(0,i.kt)("h4",{id:"service-discovery-grpc"},"Service Discovery (gRPC)"),(0,i.kt)("p",null,"Create a Registrar(e.g. consul), create an Endpoint with url format as ",(0,i.kt)("inlineCode",{parentName:"p"},"<schema>://[namespace]/<service-name>"),", then use ",(0,i.kt)("inlineCode",{parentName:"p"},"grc.WithDiscovery")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"grpc.WithEndpoint")," as the options of the Dial method to get the gRPC connection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/go-kratos/kratos/transport/http"\nimport "github.com/go-kratos/kratos/v2/transport/grpc"\n\ncli, err := api.NewClient(api.DefaultConfig())\nif err != nil {\n    panic(err)\n}\ndis := consul.New(cli)\n\nendpoint := "discovery://default/provider"\nconn, err := grpc.Dial(context.Background(), grpc.WithEndpoint(endpoint), grpc.WithDiscovery(dis))\nif err != nil {\n    panic(err)\n}\n')))}g.isMDXComponent=!0}}]);