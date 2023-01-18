### vite
#### 1. esbuild
 * esbuild是基于Go语言开发的javascript bundler, 它的构建速度是webapck的几十倍.
 * 被vite用于开发环境的依赖解析和Transform.

#### 2. 实现原理 <br/>
 * <b>由Go实现并编译成本地代码</b>: 多数Bundler都是由javascript实现的, 但是CLI应用对于JIT编译语言来说性能是最不好的.每次运行bundler的时候, js虚拟机都是以第一次运行代码的视角来解析bundler(比如webpack)的代码,没有优化信息.当esbuild在解析js的时候,node还在解析bundler的js代码
 * <b>重度使用并行计算: </b> Go语言本身的设计就很重视并行计算, 所以esbuild对这一点加以利用.在构建中主要有三个环节: <br/> ``` a. 解析(Parsing); b. 链接(linking); c. 代码生成(code generation)```在解析和代码生成环节会尽可能使用多核进行并行计算
 * <b>ESbuild中的一切代码从零实现: </b>通过自行实现所有逻辑来避免第三方库带来的性能问题,统一的数据结构可以减少数据转换开销,并且可以根据需要改变架构,当然最大的缺点就是工作量倍增.
