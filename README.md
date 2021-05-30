## tomato-work-server

原来的服务是使用egg写的，本人将使用express改写

首先个人理解express和egg的区别：

* express 偏原生，灵活性更强，egg高度封装，大部分组件插件中间件只能用egg二次封装那一套
* express文件结构（mvc）一般按自己思路组织，而egg会建议官方给定的mvc文件结构
* context上下文 和 回调request，response，next
* 个人偏向于喜欢express，一方面灵活一些，另一方面，像webpack和vite这些工程化打包工具都是使用express作为服务，所以学习了express之后可以更方的学习webpack和vite的原理
