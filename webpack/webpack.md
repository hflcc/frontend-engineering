### webpack的原理
1. 最初的webpack核心解决的问题就是代码合并与拆分
2. webpack的核心理念是将资源都视为模块, 统一进行打包和处理
3. webpack提供了loader和plugins完成功能扩展
4. [soucemap原理--阮一峰老师](https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

### webpack打包相关
1. hash与整个项目的构建相关, chunkhash与同一chunk内容相关, contenthash与文件内容本身相关, 建议多数时候使用contenthash
2. treeShaking条件<br/>
   * 一定要通过解构的方式获取, 才可以触发treeshaking 如:```import { get } from 'lodash-es''```
   * 调用的npm包必须使用esm规范 比如lodash-es包
   * 同一文件的treeshaking是有触发条件的,条件就是mode=production
3. 代码分割 code split <br/>
   * 见 optimization.splitChunks 配置

### webpack hooks
1. compiler钩子
2. compilation钩子

### webpack-dev-middleware (1.12.2) 中间件原理
1. 修改webapck的fs为MemoryFileSystem, 并将构建结果全部存储到内存中
2. 实现请求的中间件,用于处理所有资源请求,并到内存中查询相应的文件返回
3. 打包时会将hmr中的clientjs打包进appjs主入口中，
4. 建立心跳包的关键技术点 EventSource, 以text/event-stream 格式发送事件, 
   与 WebSockets不同的是，服务端推送是单向的。数据信息被单向从服务端到客户端分发.

### webpack-hot-middleware (2.25.1) 热更新中间件原理
1. 复杂点:需要客户端和服务端同事配合实现 (HotModuleReplacementPlugin和webpack-hot-middleware联动使用)
2. 复杂点:客户端和服务端双向通信机制

### loader原理
1. 主要解决非JS文件的文件转换问题
2. 常见的css-loader/less-loader其原理都是将less和css转换成module模块,再供style-loader插入到dom中
3. webpack内联式调用loader `import 'style-loader!css-loader!less-loader!./index.less'` (很少这样用)

### plugin原理
1.
