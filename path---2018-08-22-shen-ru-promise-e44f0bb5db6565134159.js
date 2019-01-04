webpackJsonp([0xd51c2b19ed41],{662:function(e,o){e.exports={data:{site:{siteMetadata:{title:"创宇前端 - 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-08-22-shen-ru-promise/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-78bfec2b6f52903dfe09f0c20ac21089-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIDAQX/xAAXAQADAQAAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAAHtwsmV1NIn/8QAFxABAAMAAAAAAAAAAAAAAAAAAQASIP/aAAgBAQABBQKXXP8A/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABgRAAIDAAAAAAAAAAAAAAAAAAECEBEh/9oACAECAQE/AWOVH//EABcQAAMBAAAAAAAAAAAAAAAAAAABIDH/2gAIAQEABj8CMc//xAAaEAEAAwADAAAAAAAAAAAAAAABABARITFR/9oACAEBAAE/IVwZyTAHzumNf//aAAwDAQACAAMAAAAQSD//xAAWEQADAAAAAAAAAAAAAAAAAAABECH/2gAIAQMBAT8QCr//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QuMf/xAAaEAACAwEBAAAAAAAAAAAAAAABEQAxcRAh/9oACAEBAAE/EDlCwPIHZaBrrIpSW5//2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="深入Promise"\n        title=""\n        src="/static/header-78bfec2b6f52903dfe09f0c20ac21089-d6978.jpeg"\n        srcset="/static/header-78bfec2b6f52903dfe09f0c20ac21089-527f0.jpeg 300w,\n/static/header-78bfec2b6f52903dfe09f0c20ac21089-9a7cd.jpeg 600w,\n/static/header-78bfec2b6f52903dfe09f0c20ac21089-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h1>深入Promise</h1>\n<blockquote>\n<p>new Promise((resolve, reject) => setTimeout(resolve, 1000, ‘foo’))<br>\n.then(console.log)<br>\n// foo (1s后)</p>\n</blockquote>\n<p>在使用 Promise 的时候，我们最简单的理解与用法就是像上面的代码那样，把异步结果提供给 resolve 作参数，然后通过给 then 方法传递一个自定义函数作为结果处理函数。但 resolve 和 reject 这两个参数到底是什么？在这背后，它的基本工作方式到底是怎样的呢？让我们从规范的角度来初步了解它吧。  </p>\n<p><a href="https://www.ecma-international.org/ecma-262/8.0/#sec-promise-objects">参考: ES8 Promise</a>  </p>\n<h2>TL;DR</h2>\n<ul>\n<li>\n<p>promise 的工作机制与 callback 类似，都采用内部的抽象操作 Job 来实现异步</p>\n</li>\n<li>\n<p>Promise 构造函数里的 resolve/reject 函数是内部创建的，在调用它们时传入的参数就是要解析的结果，把它和 promise 已经存储的用户传入的处理函数一起插入到 Job 队列中。传入的参数也可以是一个 promise，在 Promise.all/race 的内部就有用到。</p>\n</li>\n<li>\n<p>Promise.prototype.then 根据当前的 promise 的状态来决定是立即将 promise 中存储的结果取出并和参数中的处理函数一起直接插入到 Job 队列中还是先与 promise 关联起来作为结果处理函数。then 会隐式调用 Promise 构建函数构建新的 promise 并返回。  </p>\n</li>\n<li>\n<p>Promise.all 先创建一个新的 promise，然后先、初始化一个空的结果数组和一个计数器来对已经 resolve 的 promise进行计数，之后会进行迭代，对于每个迭代值它都会为其创造一个promise，并设定这个promise的then为向结果数组里添加结果以及计数器—，当计数器减至0时就会resolve最终结果。</p>\n</li>\n<li>\n<p>Promise.race 也是会创建一个新的主 promise，之后主要是根据 promise 只能 resolve 一次的限制，对于每个迭代值都会创造另一个promise，先resolve的也就会先被主 promise resolve 返回结果。 </p>\n</li>\n</ul>\n<hr>\n<h3><code>new Promise(executor)</code></h3>\n<p>首先从 Promise 这个构造函数说起，它是全局对象的 Promise 属性的值，这也就是为什么浏览器环境下我们能直接调用它的原因，就像 String, Array 这些构造函数一样。  </p>\n<p><code>new Promise(executor)</code>的第一步就像其他构造函数一样，按照 Promise 的 prototype 来构建一个新对象，并初始化了几个内部插槽<code>[[PromiseState]]</code>，<code>[[PromiseResult]]</code>，<code>[[PromiseFullfillReactions]]</code>，<code>[[PromiseRejectReactions]]</code>，<code>[[PromiseIsHandled]]</code>来记录一些相关的信息，可以从名字来大致推断出他们的作用，详情我们下文再提。这里它们的初始值除了<code>[[PromiseResult]]</code>依次为 “pending”，空 list，空 list，false。  </p>\n<p>下一步，ES 会根据这个 promise 对象来生成用来resolve promise的 <code>resolve function</code> 和用来 reject promise 的 <code>reject function</code>。然后调用 executor，以 <code>resolve function</code> 和 <code>reject function</code> 为参数，如果在这个过程中出错了，就直接 reject promise。最后返回 promise。  </p>\n<p>那什么又是 resolve，什么又是 reject 呢。我们知道 Promise 的状态，也就是<code>[[PromiseState]]</code>有三种值: pending, fullfilled, rejected，用 <code>reject function</code> 就可以 reject promise，把它的状态从 pending 变为rejected。不过 <code>resolve function</code> 既可以 fullfill promise 来把promise的状态从 pending 变为 fullfilled，也可以用来 reject promise。  </p>\n<p>那么 <code>resolve function</code> 和 <code>reject function</code> 到底做了些什么呢？  </p>\n<p>先来看 <code>reject function</code> ，首先在生成它的时候，会给它初始化<code>[[Promise]]</code>和<code>[[AlreadyResolved]]</code>插槽，也就是把它和某个 promise 关联起来。在执行时，会传入一个参数 reason，并只有当<code>[[AlreadyResolved]]</code>是 false，也就是还没 resolve 过、状态为 pending 时，才会调用返回 <code>RejectPromise</code>、传入 promise 和 reason 参数来 reject promise，否则返回 undefined。<br>\n<code>RejectPromise(promise, reason)</code>，除了把<code>[[PromiseState]]</code>从 pending 变为 rejected 之外，还会把 promise 的结果<code>[[PromiseResult]]</code>的值设为 reason，并会取出 promise 的<code>[[PromiseRejectReactions]]</code>中已存的记录（相信读者们已经明白后面还会有一个操作来向这个内部插槽里存记录），并用 <code>TriggerPromiseReactions</code> 调用这些记录做后续处理，并传入 reject 的原因 reason。类似的，<code>resolve function</code> 中用到的 <code>FullfillPromise(promise, value)</code> 操作把 promise 的状态变为 fulfilled，抽取<code>[[PromiseFullfillReactions]]</code>的值调用 <code>TriggerPromiseReactions</code>，并传入 fulfilled 的结果 value。  </p>\n<p><code>TriggerPromiseReactions(reactions, argument)</code> 会调用 <code>EnqueueJob("PromiseJobs", PromiseReactionJob, &#x3C;&#x3C;reactions, argument>>)</code>，待会再详细说明。  </p>\n<p>再来看 <code>resolve function</code>，与 <code>reject function</code> 一样，在生成它时，会把它与某个 promise 关联起来。在执行时，我们传入的参数叫做 resolution。如果 promise 已经 resolve 过，就返回 undefined。之后的情况就相对复杂一些了。    </p>\n<ol>\n<li>\n<p>如果用户把这个 promise 本身传给了 resolve function 作为参数 resolution，就会创建一个 TypeError，throw 它，并调用 <code>RejectPromise</code>，reason 参数为这个 TypeError。</p>\n</li>\n<li>\n<p>如果 resolution 的类型不是 Object，就调用 <code>FulfillPromise(promise, resolution)</code>。  </p>\n</li>\n<li>\n<p>其余的情况就是 resolution 是除了自身以外的带 then 的对象 (Promise) 的情况了。</p>\n<ul>\n<li>如果 resolution 是个不带then的对象，就 <code>RejectPromise</code>。</li>\n<li>如果有 then 属性但不能调用，也 <code>FulfillPromise</code>, 。</li>\n<li>如果有 then 属性并且可以调用，就 <code>EnqueueJob("PromiseJobs", PromiseResolveThenableJob, &#x3C;&#x3C;promise, resolution, thenAction>>)</code>。 </li>\n</ul>\n</li>\n</ol>\n<p>在说明 <code>EnqueueJob</code> 之前，先来看看 Job 是个什么东西。简单来说，它就像是回调的内部实现机制：“当没有其他 ES 在跑时，初始化并执行自己对应的 ES。“。我们有一个待执行的 FIFO 的 Job 队列，以及当前的执行环境 running execution context 和 execution context stack，当后两者均为空时，才会执行 Job 队列的第一个。  </p>\n<p>ES 规定实现里至少要有两个 Job 队列，<code>ScriptJobs</code> 和 <code>PromiseJobs</code>。当我们调用 <code>EnqueueJob("PromiseJobs", ...)</code>时，也就将要完成的 Job 和它们的参数插入到了 <code>PromiseJobs</code> 这个队列。可以看到，Promise 下有两种 Job  </p>\n<ol>\n<li><code>PromiseReactionJob(reaction, argument)</code><br>\nreaction 有三个内部插槽 <code>[[Capability]]</code>、<code>[[Type]]</code> 和 <code>[[Handler]]</code>，分别表示 <code>[[关联的 promise 及相关的resolve function 和 reject function]]</code>、<code>[[类别]]</code>、<code>[[handler]]</code>。如果用户没有给 handler(undefined)，就根据类别是 Fulfill 还是 Reject 来把 argument 当作结果。如果给了 handler，就用它来对 argument 进行进一步处理。最后根据这个结果来用 resolve function 和 reject function 进行处理并返回。</li>\n<li><code>PromiseResolveThenableJob(promiseToResolve, thenable, then)</code><br>\n创建和 promiseToResolve 关联的 resolve function 和 reject function。以 then 为调用函数，thenable 为this，resolve function和reject function 为参数调用返回。  </li>\n</ol>\n<h3><code>Promise.prototype.then(onfulfilled, onrejected)</code></h3>\n<p>首先是创建一个 <code>promiseCapability</code>，它包含了一个新的 promise 和相关联的 <code>resolve function</code> 和 <code>reject function</code>。promise 的产生就是像正常使用 Promise 构造函数那样构建一个 promise，不过传给构造函数 executor 是内部自动创建的，作用是把 resolve/reject function 记录到<code>PromiseCapability</code>中。\n根据 promiseCapability 和 onfulfilled/onrejected 创建两个分别用于 fulfill 和 reject 的PromiseReaction，也就是 PromiseJobs 里最终要执行的操作。\n如果当前的 promise(<code>this</code>)是 pending 状态，就把这两个 reaction 分别插入到 promise的<code>[[PromiseFulfillReactions]]</code>和<code>[[PromiseRejectReactions]]</code>队列中。但如果此时 promise 已经是 fulfilled 或是 rejected 状态了，就从 promise 的<code>[[PromiseResult]]</code>取出值 result，作为 fulfilled 的结果/reject 的原因，插入到 Job 队列里，<code>EnqueueJob("PromiseJobs", PromiseReactionJob, &#x3C;&#x3C;reaciton, result>>)</code>，最后返回 prjomiseCapability 里存储的新 promise。<code>Promise.prototype.catch(onrejected)</code> 就是 <code>Promise.prototype.then(undefined, onrejected)</code></p>\n<h3><code>Promise.resolve(x)</code></h3>\n<p>像 then 那样创建一个 <code>promiseCapability</code>，然后直接调用其中的 <code>resolve function</code> 并传入要解析的值x，最后返回其中的新 promise.  </p>\n<h3><code>Promise.all(iterable)</code></h3>\n<p>Promise.all也会像 then 那样创建一个 <code>promiseCapability</code>，里面包含着一个新的 promise 及其关联的 <code>resolve function</code> 和 <code>reject function</code>，之后就结合迭代器循环：1.如果迭代完了并且计数器为0则调用 <code>promiseCapability</code> 的 <code>resolve function</code> 来 resolve 结果数组 2.否则计数器加1，然后取出下一个迭代的值，传给 <code>Promise.resolve</code> 也构建一个新的 promise，然后内部创建一个 <code>Promise.all Resolve Element Function</code>，传给这个新 promise 的 then 用来把结果添加到结果数组并使计数器减一。  </p>\n<h3><code>Promise.race(iterable)</code></h3>\n<p>同样的，创建一个 <code>promiseCapability</code>，然后进行迭代，用 <code>Promise.resolve</code> 来构建一个新的 promise，之后调用这个新 promise 的 then 方法，传入 promiseCapability 里的 <code>resolve/reject function</code>，结合之前提到的 promise 只会 resolve 一次，可以看到确实很有 race 的意味。  </p>\n<h2>结语</h2>\n<p>看到这里，不知道大家是否对 Promise 有了更深的理解了呢。再往深一步，ES6里新提出的 async/await 实际上也是应用了 Generator 的思想与 Promise，感兴趣的话可以继续了解一下。</p>',fields:{slug:"/2018-08-22-shen-ru-promise/"},frontmatter:{title:"深入Promise",date:"2018-08-22",catalog:"技术杂谈",author:"Kacxxia"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in/kaggle数据实验入门之泰坦尼克号/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2019-01-04-heretic-judger-2/"},frontmatter:{title:"异端审判器！一个泛用型文本聚类模型的实现（2）"}}},{node:{fields:{slug:"/2018-12-28-ye-xu-ni-dui-fetch-liao-jie-de-bu-shi-na-mo-duo-er/"},frontmatter:{title:"也许你对Fetch了解得不是那么多（二)"}}},{node:{fields:{slug:"/2018-12-28-ye-xu-ni-dui-fetch-liao-jie-de-bu-shi-na-mo-duo-yi/"},frontmatter:{title:"也许你对Fetch了解得不是那么多(一)"}}},{node:{fields:{slug:"/2018-12-13-css-lie-biao-xiang-bu-ju-ji-qiao/"},frontmatter:{title:"CSS 列表项布局技巧"}}},{node:{fields:{slug:"/2018-12-04-ren-gong-zhi-zhang-ye-shua-ti-kaggle-ru-men-zhi-shi-zhan-tai-tan-ni-ke-hao/"},frontmatter:{title:"人工智障也刷题！Kaggle入门之实战泰坦尼克号"}}},{node:{fields:{slug:"/2018-11-16-yi-5-ge-zui-xin-de-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【译】5 个最新的用户体验设计趋势"}}},{node:{fields:{slug:"/2018-10-23-reactfiber/"},frontmatter:{title:"React Fiber"}}},{node:{fields:{slug:"/2018-10-22-yi-reactnative-yu-ios-jiao-hu/"},frontmatter:{title:"【译】React Native与ios交互"}}},{node:{fields:{slug:"/2018-10-11-yi-ni-er-duo-li-you-tiao-yu/"},frontmatter:{title:"【译】你耳朵里有条鱼"}}},{node:{fields:{slug:"/2018-10-07-dapp-dev-practice/"},frontmatter:{title:"区块链上编程：DApp 开发实践"}}},{node:{fields:{slug:"/2018-10-05-ni-ting-shuo-guo-yuan-sheng-html-zu-jian-ma/"},frontmatter:{title:"你听说过原生 HTML 组件吗？"}}},{node:{fields:{slug:"/2018-09-28-yong-huo-zhuo-de-cnn-jin-hang-yan-zheng-ma-shi-bie/"},frontmatter:{title:"用“活着的”CNN进行验证码识别"}}},{node:{fields:{slug:"/2018-09-27-yi-chao-shi-yong-7-ge-you-xiu-de-ui-jiao-hu-dong-hua-ji-qiao/"},frontmatter:{title:"【译】超实用！7 个优秀的 UI 交互动画技巧"}}},{node:{fields:{slug:"/2018-09-25-guan-yu-http2-de-yan-jiu/"},frontmatter:{title:"关于 HTTP2 的研究"}}},{node:{fields:{slug:"/2018-09-25-yi-android-lu-jing-dong-hua/"},frontmatter:{title:"【译】Android 路径动画"}}},{node:{fields:{slug:"/2018-09-25- heretic-judger-1/"},frontmatter:{title:"异端审判器！一个泛用型文本聚类模型的实现（1）"}}},{node:{fields:{slug:"/2018-09-25-wo-men-ying-gai-zuo-xie-li-suo-neng-ji-de-you-hua/"},frontmatter:{title:"我们应该做些力所能及的优化"}}},{node:{fields:{slug:"/2018-09-25-twenty-to-fifty-years-programming/"},frontmatter:{title:"【译】有哪些事情是编程 20 到 50 多年后才知道的？"}}},{node:{fields:{slug:"/2018-08-24-mongodb-shi-wu/"},frontmatter:{title:"认识 MongoDB 4.0 的新特性——事务（Transactions）"}}},{node:{fields:{slug:"/2018-09-19-yi-yu-yong-hu-lian-xi-zai-wang-ye-she-ji-zhong-rong-ru-you-mo/"},frontmatter:{title:"【译】与用户联系：在网页设计中融入幽默"}}},{node:{fields:{slug:"/2018-09-19-yi-ru-he-she-ji-geng-hao-de-shu-ju-biao/"},frontmatter:{title:"【译】如何设计更好的数据表"}}},{node:{fields:{slug:"/2018-09-13-yi-dao-shi-jian-xun-huan-ti-yin-fa-de-xie-an/"},frontmatter:{title:"一道事件循环题引发的血案"}}},{node:{fields:{slug:"/2018-09-12-qian-duan-gong-cheng-hua-jiao-shou-jia/"},frontmatter:{title:"前端工程化：脚手架"}}},{node:{fields:{slug:"/2018-09-12-qian-tan-vue-zhong-computed-shi-xian-yuan-li/"},frontmatter:{title:"浅谈 Vue 中 computed 实现原理"}}},{node:{fields:{slug:"/2018-09-11-http-de-qian-shi-jin-sheng/"},frontmatter:{title:"HTTP 的前世今生"}}},{node:{fields:{slug:"/2018-08-31-jian-shu-da-shu-ju-shi-shi-chu-li-kuang-jia/"},frontmatter:{title:"简述大数据实时处理框架"}}},{node:{fields:{slug:"/2018-08-22-shen-ru-promise/"},frontmatter:{title:"深入Promise"}}},{node:{fields:{slug:"/2018-08-13-tcp-lian-jie-ji-chang-jian-gong-ji-shou-fa-fen-xi/"},frontmatter:{title:"要点梳理：TCP连接及常见攻击手法分析"}}},{node:{fields:{slug:"/2018-08-13-ran-bing-luan-bf-ke-pu-bf-jie-shi-qi-de-js-shi-xian/"},frontmatter:{title:"然并卵：BF 科普 & BF 解释器的 JS 实现"}}},{node:{fields:{slug:"/2018-08-10-dapp-kai-fa-jian-jie/"},frontmatter:{title:"DApp 开发简介"}}},{node:{fields:{slug:"/2018-08-09-shi-lian-zhi-shi-performance/"},frontmatter:{title:"试炼之石-Performance"}}},{node:{fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog"}}},{node:{fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱"}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM？！"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-16-yuan-chuang-ji-yu-babylonjs-shi-xian-3d-da-ji-xiao-guo/"},frontmatter:{title:"基于 Babylon.js 实现 3D 打击效果"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【译】让我们从零开始编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南——用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)——白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-08-22-shen-ru-promise/"}}}});
//# sourceMappingURL=path---2018-08-22-shen-ru-promise-e44f0bb5db6565134159.js.map