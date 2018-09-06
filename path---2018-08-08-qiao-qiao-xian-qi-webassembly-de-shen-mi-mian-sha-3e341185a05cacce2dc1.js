webpackJsonp([55073322347625],{631:function(n,a){n.exports={data:{site:{siteMetadata:{title:"创宇前端 - 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-ba6d87467eca66a6f7e65f697c72af20-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/aAAwDAQACEAMQAAAB7VGtSRL/xAAaEAACAwEBAAAAAAAAAAAAAAABAgADERAh/9oACAEBAAEFArPUpVlMwTBz/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFxEAAwEAAAAAAAAAAAAAAAAAEBESIf/aAAgBAgEBPwGsQ//EABoQAAICAwAAAAAAAAAAAAAAAAExABACEoH/2gAIAQEABj8CyAcOxPaUVf/EABwQAAICAgMAAAAAAAAAAAAAAAERACEQMWFxkf/aAAgBAQABPyFynSrhiIBGFzR9TieY/9oADAMBAAIAAwAAABADz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABYRAQEBAAAAAAAAAAAAAAAAAAEQUf/aAAgBAgEBPxAQ9z//xAAaEAEAAgMBAAAAAAAAAAAAAAABABEhMVHx/9oACAEBAAE/ENylgKNwHMQXzmYN6iqT7Wi54qABQUT/2Q==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="悄悄掀起 WebAssembly 的神秘面纱"\n        title=""\n        src="/static/header-ba6d87467eca66a6f7e65f697c72af20-d6978.jpeg"\n        srcset="/static/header-ba6d87467eca66a6f7e65f697c72af20-527f0.jpeg 300w,\n/static/header-ba6d87467eca66a6f7e65f697c72af20-9a7cd.jpeg 600w,\n/static/header-ba6d87467eca66a6f7e65f697c72af20-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>前端开发人员想必对现代浏览器都已经非常熟悉了吧？HTML5，CSS4，JavaScript ES6，这些已经在现代浏览器中慢慢普及的技术为前端开发带来了极大的便利。</p>\n<p>得益于 JIT（Just-in-time）技术，JavaScript 的运行速度比原来快了 10 倍，这也是 JavaScript 被运用得越来越广泛的原因之一。但是，这是极限了吗？</p>\n<p>随着浏览器技术的发展，Web 游戏眼看着又要“卷土重来”了，不过这一次不是基于 Flash 的游戏，而是充分利用了现代 HTML5 技术实现。JavaScript 成为了 Web 游戏的开发语言，但是对于游戏这样需要大量运算的程序来说，即便是有 JIT 加持，JavaScript 的性能还是不能满足人类贪婪的欲望。</p>\n</blockquote>\n<h1>JavaScript 在浏览器中是怎么跑起来的？</h1>\n<p>对于现在的计算机来说，它们只能读懂“机器语言”，而人类的大脑能力有限，直接编写机器语言难度有点大，为了能让人更方便地编写程序，人类发明了大量的“高级编程语言”，JavaScript 就属于其中特殊的一种。</p>\n<p>为什么说是特殊的一种呢？由于计算机并不认识“高级编程语言”写出来的东西，所以大部分“高级编程语言”在写好以后都需要经过一个叫做“编译”的过程，将“高级编程语言”翻译成“机器语言”，然后交给计算机来运行。但是，JavaScript 不一样，它没有“编译”的过程，那么机器是怎么认识这种语言的呢？</p>\n<p>实际上，JavaScript 与其他一部分脚本语言采用的是一种“边解释边运行”的姿势来运行的，将代码一点一点地翻译给计算机。</p>\n<p>那么，JavaScript 的“解释”与其他语言的“编译”有什么区别呢？不都是翻译成“机器语言”吗？简单来讲，“编译”类似于“全文翻译”，就是代码编写好后，一次性将所有代码全部编译成“机器语言”，然后直接交给计算机；而“解释”则类似于“实时翻译”，代码写好后不会翻译，运行到哪，翻译到哪。</p>\n<p>“解释”和“编译”两种方法各有利弊。使用“解释”的方法，程序编写好后就可以直接运行了，而使用“编译”的方法，则需要先花费一段时间等待整个代码编译完成后才可以执行。这样一看似乎是“解释”的方法更快，但是如果一段代码要执行多次，使用“解释”的方法，程序每次运行时都需要重新“解释”一遍，而“编译”的方法则不需要了。这样一看，“编译”的整体效率似乎更高，因为它永远只翻译一次，而“解释”是运行一次翻译一次。并且，“编译”由于是一开始就对整个代码进行的，所以可以对代码进行针对性的优化。</p>\n<p>JavaScript 是使用“解释”的方案来运行的，这就造成了它的效率低下，因为代码每运行一次都要翻译一次，如果一个函数被循环调用了 10 次、100 次，这个执行效率可想而知。</p>\n<p>好在聪明的人类发明了 JIT（Just-in-time）技术，它综合了“解释”与“编译”的优点，它的原理实际上就是在“解释”运行的同时进行跟踪，如果某一段代码执行了多次，就会对这一段代码进行编译优化，这样，如果后续再运行到这一段代码，则不用再解释了。</p>\n<p>JIT 似乎是一个好东西，但是，对于 JavaScript 这种动态数据类型的语言来说，要实现一个完美的 JIT 非常难。为什么呢？因为 JavaScript 中的很多东西都是在运行的时候才能确定的。比如我写了一行代码：<code>const sum = (a, b, c) => a + b + c;</code>，这是一个使用 ES6 语法编写的 JavaScript 箭头函数，可以直接放在浏览器的控制台下运行，这将声明一个叫做 sum 的函数。然后我们可以直接调用它，比如：<code>console.log(sum(1, 2, 3))</code>，任何一个合格的前端开发人员都能很快得口算出答案，这将输出一个数字 <code>6</code>。但是，如果我们这样调用呢：<code>console.log(sum(\'1\', 2, 3))</code>，第一个参数变成了一个字符串，这在 JavaScript 中是完全允许的，但是这时得到的结果就完全不同了，这会导致一个字符串和两个数字进行连接，得到 <code>"123"</code>。这样一来，针对这一个函数的优化就变得非常困难了。</p>\n<p>虽说 JavaScript 自身的“特性”为 JIT 的实现带来了一些困难，但是不得不说 JIT 还是为 JavaScript 带来了非常可观的性能提升。</p>\n<h1>WebAssembly</h1>\n<p>为了能让代码跑得更快，WebAssembly 出现了（并且现在主流浏览器也都开始支持了），它能够允许你预先使用“编译”的方法将代码编译好后，直接放在浏览器中运行，这一步就做得比较彻底了，不再需要 JIT 来动态得进行优化了，所有优化都可以在编译的时候直接确定。</p>\n<p>WebAssembly 到底是什么呢？</p>\n<p>首先，它不是直接的机器语言，因为世界上的机器太多了，它们都说着不同的语言（架构不同），所以很多情况下都是为各种不同的机器架构专门生成对应的机器代码。但是要为各种机器都生成的话，太复杂了，每种语言都要为每种架构编写一个编译器。为了简化这个过程，就有了“中间代码（Intermediate representation，IR）”，只要将所有代码都翻译成 IR，再由 IR 来统一应对各种机器架构。</p>\n<p>实际上，WebAssembly 和 IR 差不多，就是用于充当各种机器架构翻译官的角色。WebAssembly 并不是直接的物理机器语言，而是抽象出来的一种虚拟的机器语言。从 WebAssembly 到机器语言虽说也需要一个“翻译”过程，但是在这里的“翻译”就没有太多的套路了，属于机器语言到机器语言的翻译，所以速度上已经非常接近纯机器语言了。</p>\n<blockquote>\n<p>这里有一个 WebAssembly 官网上提供的 Demo，是使用 <a href="https://unity3d.com/">Unity</a> 开发并发布为 WebAssembly 的一个小游戏：<a href="https://webassembly.org/demo/">https://webassembly.org/demo/</a>，可以去体验体验。</p>\n</blockquote>\n<h1>.wasm 文件 与 .wat 文件</h1>\n<p>WebAssembly 是通过 *.wasm  文件进行存储的，这是编译好的二进制文件，它的体积非常的小。</p>\n<p>在浏览器中，提供了一个全局的 <code>window.WebAssembly</code> 对象，可以用于实例化 WASM 模块。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/window.webassembly-5969ae40f51e4742cc91bbf07a52f58d-5e6c6.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 551px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 68.96551724137932%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB10lEQVQ4y41S2XLbMAz0V3g8frMtiSJ1U9RF64jixM1r//9jtgBcp+5M6+RhBxJELlbY3XjvMY4jnHNSz+czdrsdttst9vs9pmlC13Xo+16em6aRcwzu83tVVajrWs5sHj9ygz+UZSkDrLWCJEkQxzGKosA8zwIezGK4Mvg+102e51heFlwuF3R9h1jHQqCUEhKtGUaeuc/nuTKyLBNwjyuf2fBFZr6+XbEuK/zgScFC0wfqT3i7/oQxmmA+CbS+vd/JuZemKcIwxCYIAhhlUGuHTBWwpUPT9rKboigJFfjM8Xj8EqfT6UaYmgxD5lGZGpXt8PHxQwzg6YfDQQi/CyHMkwKeCDNdYpxXXN/fxRheB0++H2YFjOeEYYAkTuCMQ64rOHv7ZXaXXWXwbh6JnhGTwpMonPIJVdriZXnFuq6obf3pZhRFf116plIUmtigSRqUMeUuJYVVi9o15LKXPDpXSz55n/ed/k/lb1NStEmH1rRkjENnPaZhgh8nCb3lkBPYeSZ+rpB+2dAOfXoWUlf0WIYFUzfTTik2lK+e0FHuLGeQ6l3dv0DBjhETCrqcqUxMqQkqUNCRhgojGJqcEBTn8SuXtbkl/LEprgZ/ph6ZiPf2jRz+Alh1p2Crz2AqAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="window.WebAssembly"\n        title=""\n        src="/static/window.webassembly-5969ae40f51e4742cc91bbf07a52f58d-5e6c6.png"\n        srcset="/static/window.webassembly-5969ae40f51e4742cc91bbf07a52f58d-50568.png 300w,\n/static/window.webassembly-5969ae40f51e4742cc91bbf07a52f58d-5e6c6.png 551w"\n        sizes="(max-width: 551px) 100vw, 551px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>WebAssembly 是一种“虚拟<strong>机器语言</strong>”，所以它也有对应的“汇编语言”版本，也就是 *.wat 文件，这是 WebAssembly 模块的文本表示方法，采用“S-表达式（S-Expressions）”进行描述，可以直接通过工具将 *.wat 文件编译为 *.wasm 文件。熟悉 <a href="https://en.wikipedia.org/wiki/Lisp_%28programming_language%29">LISP</a> 的同学可能对这种表达式语法比较熟悉。</p>\n<h1>一个非常简单的例子</h1>\n<p>我们来看一个非常简单的例子，这个已经在 Chrome 69 Canary 和 Chrome 70 Canary 中测试通过，理论上可以在所有已经支持 WebAssembly 的浏览器中运行。<em>（在后文中有浏览器的支持情况）</em></p>\n<p>首先，我们先使用 S-表达式 编写一个十分简单的程序：</p>\n<div class="gatsby-highlight">\n      <pre class="language-wat"><code>;; test.wat\n(module\n  (import "env" "mem" (memory 1)) ;; 这里指定了从 env.mem 中导入一个内存对象\n  (func (export "get") (result i32)  ;; 定义并导出一个叫做“get”的函数，这个函数拥有一个 int32 类型的返回值，没有参数\n    memory.size))  ;; 最终返回 memory 对象的“尺寸”（单位为“页”，目前规定 1 页 = 64 KiB = 65536 Bytes）</code></pre>\n      </div>\n<blockquote>\n<p>可以使用 <a href="https://github.com/WebAssembly/wabt">wabt</a> 中的 <a href="https://cdn.rawgit.com/WebAssembly/wabt/aae5a4b7/demo/wasm2wat/">wasm2wat</a> 工具将 wasm 文件转为使用“S-表达式”进行描述的 wat 文件。同时也可以使用 <a href="https://cdn.rawgit.com/WebAssembly/wabt/aae5a4b7/demo/wat2wasm/">wat2wasm</a> 工具将 wat 转为 wasm。</p>\n</blockquote>\n<p>在 wat 文件中，双分号 <code>;;</code> 开头的内容都是注释。</p>\n<p>上面这个 wat 文件定义了一个 module，并导入了一个内存对象，然后导出了一个叫做“get”的函数，这个函数返回当前内存的“尺寸”。</p>\n<p>在 WebAssembly 中，线性内存可以在内部直接定义然后导出，也可以从外面导入，但是最多只能拥有一个内存。这个内存的大小并不是固定的，只需要给一个初始大小 <code>initial</code>，后期还可以根据需要调用 <code>grow</code> 函数进行扩展，也可以指定最大大小 <code>maximum</code>。<em>（这里所有内存大小的单位都是“页”，目前规定的是 1 页 = 64 KiB = 65536 Bytes。）</em></p>\n<p>上面这个 wat 文件使用 <a href="https://cdn.rawgit.com/WebAssembly/wabt/aae5a4b7/demo/wat2wasm/">wat2wasm</a> 编译为 wasm 后生成的文件体积非常小，只有 50 Bytes：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ wat2wasm test.wat\n$ xxd test.wasm\n00000000: 0061 736d 0100 0000 0105 0160 0001 7f02  .asm.......`....\n00000010: 0c01 0365 6e76 036d 656d 0200 0103 0201  ...env.mem......\n00000020: 0007 0701 0367 6574 0000 0a06 0104 003f  .....get.......?\n00000030: 000b                                     ..</code></pre>\n      </div>\n<p>为了让这个程序能在浏览器中运行，我们还必须使用 JavaScript 编写一段“胶水代码（glue code）”，以便这个程序能被加载到浏览器中并执行：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// main.js</span>\n\n<span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'./test.wasm\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> memory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>WebAssembly<span class="token punctuation">.</span>Memory</span><span class="token punctuation">(</span><span class="token punctuation">{</span> initial<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">.</span>WebAssembly<span class="token punctuation">.</span><span class="token function">instantiateStreaming</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  env<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mem<span class="token punctuation">:</span> memory<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> result<span class="token punctuation">;</span>\nresult <span class="token operator">=</span> mod<span class="token punctuation">.</span>instance<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 调用 WebAssembly 模块导出的 get 函数</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 1</span>\nmemory<span class="token punctuation">.</span><span class="token function">grow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nresult <span class="token operator">=</span> mod<span class="token punctuation">.</span>instance<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 调用 WebAssembly 模块导出的 get 函数</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 3</span>\n</code></pre>\n      </div>\n<p>这里我使用了现代浏览器都已经支持的 ES6 语法，首先，使用浏览器原生提供的 <code>fetch</code> 函数加载我们编译好的 <code>test.wasm</code> 文件。注意，这里根据规范，HTTP 响应的 Content-Type 中指定的 MIME 类型必须为 <code>application/wasm</code>。</p>\n<p>接下来，我们 new 了一个 <code>WebAssembly.Memory</code> 对象，通过这个对象，可以实现 JavaScript 与 WebAssembly 之间互通数据。</p>\n<p>再接下来，我们使用了 <code>WebAssembly.instantiateStreaming</code> 来实例化加载的 WebAssembly 模块，这里第一个参数是一个 Readable Stream，第二个参数是 importObject，用于指定导入 WebAssembly 的结构。因为上面的 wat 代码中指定了要从 <code>env.mem</code> 导入一个内存对象，所以这里就得要将我们 new 出来的内存对象放到 <code>env.mem</code> 中。 </p>\n<blockquote>\n<p>WebAssembly 还提供了一个 <code>instantiate</code> 函数，这个函数的第一个参数可以提供一个 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer">ArrayBuffer</a> 或是 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays">TypedArray</a>。但是这个函数是不推荐使用的，具体原因做过流量代理转发的同学可能会比较清楚，这里就不具体解释了。</p>\n</blockquote>\n<p>最后，我们就可以调用 WebAssembly 导出的函数 <code>get</code> 了，首先输出的内容为 <code>memory</code> 的 <code>initial</code> 的值。然后我们调用了 <code>memory.grow</code> 方法来增长 <code>memory</code> 的尺寸，最后输出的内容就是增长后内存的大小 <code>1 + 2 = 3</code>。</p>\n<h1>一个 WebAssembly 与 JavaScript 数据互通交互的例子</h1>\n<p>在 WebAssembly 中有一块内存，这块内存可以是内部定义的，也可以是从外面导入的，如果是内部定义的，则可以通过 <code>export</code> 进行导出。JavaScript 在拿到这块“内存”后，是拥有完全操作的权利的。JavaScript 使用 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView">DataView</a> 对 <code>Memory</code> 对象进行包装后，就可以使用 DataView 下面的函数对内存对象进行读取或写入操作。</p>\n<p>这里是一个简单的例子：</p>\n<div class="gatsby-highlight">\n      <pre class="language-wat"><code>;; example.wat\n(module\n  (import "env" "mem" (memory 1))\n  (import "js" "log" (func $log (param i32)))\n  (func (export "example")\n    i32.const 0\n    i64.const 8022916924116329800\n    i64.store\n    (i32.store (i32.const 8) (i32.const 560229490))\n    (call $log (i32.const 0))))</code></pre>\n      </div>\n<p>这个代码首先从 <code>env.mem</code> 导入一个内存对象作为默认内存，这和前面的例子是一样的。</p>\n<p>然后从 <code>js.log</code> 导入一个函数，这个函数拥有一个 32 位整型的参数，不需要返回值，在 wat 内部被命名为“$log”，这个名字只存在于 wat 文件中，在编译为 wasm 后就不存在了，只存储一个偏移地址。</p>\n<p>后面定义了一个函数，并导出为“example”函数。在 WebAssembly 中，函数里的内容都是在栈上的。</p>\n<blockquote>\n<p>首先，使用 <code>i32.const 0</code> 在栈内压入一个 32 位整型常数 <code>0</code>，然后使用 <code>i64.const 8022916924116329800</code> 在栈内压入一个 64 位整型常数 <code>8022916924116329800</code>，之后调用 <code>i64.store</code> 指令，这个指令将会将栈顶部第一个位置的一个 64 位整数存储到栈顶部第二个位置指定的“内存地址”开始的连续 8 个字节空间中。</p>\n</blockquote>\n<p>TL; DR; 简而言之，就是在内存的第 0 个位置开始的连续 8 个字节的空间里，存入一个 64 位整型数字 <code>8022916924116329800</code>。这个数字转为 16 进制表示为：<code>0x 6f 57 20 6f 6c 6c 65 48</code>，但是由于 WebAssembly 中<a href="https://webassembly.org/docs/semantics/#linear-memory-accesses">规定</a>的<a href="https://en.wikipedia.org/wiki/Endianness">字节序</a>是使用“小端序（Little-Endian Byte Order）”来存储数据，所以，在内存中第 0 个位置存储的是 <code>0x48</code>，第 1 个位置存储的是 <code>0x65</code>……所以，最终存储的实际上是 <code>0x 48 65 6c 6c 6f 20 57 6f</code>，对应着 <a href="http://www.asciitable.com/">ASCII</a> 码为：“Hello Wo”。</p>\n<blockquote>\n<p>然后，后面的一句指令 <code>(i32.store (i32.const 8) (i32.const 560229490))</code> 的格式是上面三条指令的“S-表达式”形式，只不过这里换成了 <code>i32.store</code> 来存储一个 32 位整型常数 <code>560229490</code> 到 8 号“内存地址”开始的连续 4 个字节空间中。</p>\n<p>实际上这一句指令的写法写成上面三句的语法是完全等效的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-wat"><code>i32.const 8\ni32.const 560229490\ni32.store</code></pre>\n      </div>\n</blockquote>\n<p>类似的，这里是在内存的第 8 个位置开始的连续 4 个字节的空间里，存入一个 32 位整型数字 <code>560229490</code>。这个数字转为 16 进制表示位：<code>0x 21 64 6c 72</code>，同样采用“小端序”来存储，所以存储的实际上是 <code>0x 72 6c 64 21</code>，对应着 <a href="http://www.asciitable.com/">ASCII</a> 码为：“rld!“。</p>\n<p>所以，最终，内存中前 12 个字节中的数据为 <code>0x 48 65 6c 6c 6f 20 57 6f 72 6c 64 21</code>，连起来就是对应着 <a href="http://www.asciitable.com/">ASCII</a> 码：“Hello World!“。</p>\n<p>将这个 wat 编译为 wasm 后，文件大小为 95 Bytes：</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ wat2wasm example.wat\n$ xxd example.wasm\n00000000: 0061 736d 0100 0000 0108 0260 017f 0060  .asm.......`...`\n00000010: 0000 0215 0203 656e 7603 6d65 6d02 0001  ......env.mem...\n00000020: 026a 7303 6c6f 6700 0003 0201 0107 0b01  .js.log.........\n00000030: 0765 7861 6d70 6c65 0001 0a23 0121 0041  .example...#.!.A\n00000040: 0042 c8ca b1e3 f68d c8ab ef00 3703 0041  .B..........7..A\n00000050: 0841 f2d8 918b 0236 0200 4100 1000 0b    .A.....6..A....</code></pre>\n      </div>\n<p>接下来，还是使用 JavaScript 编写“胶水代码”：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// example.js</span>\n\n<span class="token keyword">const</span> file <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">\'./example.wasm\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> memory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">window<span class="token punctuation">.</span>WebAssembly<span class="token punctuation">.</span>Memory</span><span class="token punctuation">(</span><span class="token punctuation">{</span> initial<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> dv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>memory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">log</span> <span class="token operator">=</span> offset <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> end <span class="token operator">=</span> offset<span class="token punctuation">;</span>\n  <span class="token keyword">while</span><span class="token punctuation">(</span>end <span class="token operator">&lt;</span> dv<span class="token punctuation">.</span>byteLength <span class="token operator">&amp;&amp;</span> dv<span class="token punctuation">.</span><span class="token function">getUint8</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">++</span>length<span class="token punctuation">;</span>\n    <span class="token operator">++</span>end<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> bufDv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> p <span class="token operator">=</span> offset<span class="token punctuation">;</span> p <span class="token operator">&lt;</span> end<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">,</span> <span class="token operator">++</span>p<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    bufDv<span class="token punctuation">.</span><span class="token function">setUint8</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> dv<span class="token punctuation">.</span><span class="token function">getUint8</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TextDecoder</span><span class="token punctuation">(</span><span class="token string">\'utf-8\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> mod <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">.</span>WebAssembly<span class="token punctuation">.</span><span class="token function">instantiateStreaming</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  env<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    mem<span class="token punctuation">:</span> memory<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  js<span class="token punctuation">:</span> <span class="token punctuation">{</span> log <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nmod<span class="token punctuation">.</span>instance<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 调用 WebAssembly 模块导出的 example 函数</span>\n</code></pre>\n      </div>\n<p>这里，使用 <code>DataView</code> 对 <code>memory</code> 进行了一次包装，这样就可以方便地对内存对象进行读写操作了。</p>\n<p>然后，这里在 JavaScript 中实现了一个 <code>log</code> 函数，函数接受一个参数（这个参数在上面的 wat 中指定了是整数型）。下面的实现首先是确定输出的字符串长度（字符串通常以 <code>\'\\0\'</code> 结尾），然后将字符串复制到一个长度合适的 <code>ArrayBuffer</code> 中，然后使用浏览器中的 <code>TextDecoder</code> 类对其进行字符串解码，就得到了原始字符串。</p>\n<p>最后，将 log 函数放入 importObject 的 <code>js.log</code> 中，实例化 WebAssembly 模块，最后调用导出的 <code>example</code> 函数，就可以看到打印的 <code>Hello World</code>。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/example-c98eba29994a4fa5b6634b93b98d3984-17e1f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 351px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 23.361823361823365%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA60lEQVQY04VQ23KDIBT0SxwFjSAIZFJNQA1JrNFeHvr/P7MFM+n0pdOHnXPfnT2J9x7LsmCwHJPnuI4coxOYbxrvdwU/SLhTg89F4+tDY7oe0B4t8jxHmqZbzLIMlFKUZYnk7C+4L2/oBxfiK27TBcPoIMQOqmHgfIe6ZluuVahZCdf3WNcV8zzDWos+1FVVPQiN2QeyEceTg3UDDi8thFQghILQIig/QMgTFEqpjcQ5h67r0LYtiqIAYwyJ1gZ7Y9BICWN0aFbhiGxqfyHaizYjouW4H3sycCS1kD8/eA6i2n+IxL/zeCeEwDfzEph09k3FkQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Example - Hello World!"\n        title=""\n        src="/static/example-c98eba29994a4fa5b6634b93b98d3984-17e1f.png"\n        srcset="/static/example-c98eba29994a4fa5b6634b93b98d3984-812fb.png 300w,\n/static/example-c98eba29994a4fa5b6634b93b98d3984-17e1f.png 351w"\n        sizes="(max-width: 351px) 100vw, 351px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<blockquote>\n<p>通过 WebAssembly，我们可以将很多其他语言编写的类库直接封装到浏览器中运行，比如 Google Developers 就给了一个使用 WebAssembly 加载一个使用 C 语言编写的 WebP 图片编码库，将一张 jpg 格式的图片转换为 webp 格式并显示出来的例子：<a href="https://developers.google.com/web/updates/2018/03/emscripting-a-c-library">https://developers.google.com/web/updates/2018/03/emscripting-a-c-library</a>。</p>\n<p>这个例子使用 <a href="http://emscripten.org">Emscripten</a> 工具对 C 语言代码进行编译，这个工具在安装的时候需要到 GitHub、亚马逊 S3 等服务器下载文件，在国内这神奇的网络环境下速度异常缓慢，总共几十兆的文件可能挂机一天都下不完。可以尝试修改 emsdk 文件（Python），增加代理配置（但是效果不明显），或是在下载的过程中会提示下载链接和存放路径，使用其他工具下载后放到指定地方，重新安装会自动跳过已经下载的文件。</p>\n</blockquote>\n<h1>WebAssembly 的现状与未来</h1>\n<p>目前 WebAssembly 的二进制格式版本已经确定，未来的改进也都将以兼容的形式进行更新，这表示 WebAssembly 已经进入现代标准了。</p>\n<p><a href="https://caniuse.com/#feat=wasm">\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/caniuse-eab51268adc721d158996e8d0ecfe6e3-c4b3c.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 87.8930817610063%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAA7DAAAOwwHHb6hkAAADH0lEQVQ4y42S60/TUBjG+0f51U9GE0PEeGU6QB1XGaCBKESDYrxfUKeJBtgciChOEUSuBsOY7N5tbdfNdV1b1su2lp4VRgAvaDzDoEYwmjx58+Sc9/c+b3IOkmb8UsIrJXxKEptPhRfSJBQ0ULlM5A8tylGVxzWJWMjENIVGJNrLUy5YpbgnnfCJcW8q4ZVnA0DEc3J0cYN+TsnJESQbGVBDz+RkUE6RshDOMnaN9wCR0ESYgAMBA3xITWJz/JrhMSUJKwFHAxFDUrQ7yaKxV52Bc3XRwW7OM0yazjPhaZ508PGZRMTB4XaGdDIR5yxpp4lpCrezhI+LOhnSgcB52jxDt191b99Ct19JuUew2sNqMqhKhApjBVwVMSi4gppPw7Mirgqh/JWII7APgHjcctNTuJW23BTdw3jDUZlD4Z5zfCivZFDJ65eBFZ5DswZnadp8Iw9bb0m+MQgrEBbW4Q36AUOtw53XPPu3xczXhamXeOMxGKL+LwzitLXNe6QwdLI0WHModKYq82Hmb+RGmGK6784YCl11B1HDXrT6IFqxV6G9cxLxb1gFlNB173bbgUtPy8MVOtfJw6hht0J7FNavzAZ+7/4TVoTQcpp65nu4a6rkjrV84rSu4XWFv2KPQrnJ1nrB3q9mIj9GbALLrG+FIzpR046ZUpO5bLS5qHq80g/Xptz4KQM/+XwTeN0g0Ttn6Zojpo5jO/2Vpg7DWJPOOFqFVu6TYy6sqZyftAGNVkQc8sp6LMxbe/AgErlQF9XvbnugLwhWmx6VjbbojRNVfmMRSAappuq0vV9+PwRc40tqYkEggEQAzk+dqoT/TFMpBGs+fq11l25Av/9NSbmttOaJvmhAX2vVoX33e1uL3zYW244XPLY0Doafj/Rd9ZytQZ+aLA0FAdvD8IAZER2ve97drp9qNI7V1k2caLG3jKK9lx0XiSHzZKAvNN7ldPYOE33DaM/0+8exfkt4pGuCsJFDVmqoC1maT3zWWCmFvvjQ/SRiZkX3KmCW56iVHLeaZT8tcF807pvKfgPsqsatLM5+zHFfAftxkYMN3wEfAkgngsGAGAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="浏览器兼容性"\n        title=""\n        src="/static/caniuse-eab51268adc721d158996e8d0ecfe6e3-abe1c.png"\n        srcset="/static/caniuse-eab51268adc721d158996e8d0ecfe6e3-10046.png 300w,\n/static/caniuse-eab51268adc721d158996e8d0ecfe6e3-3c4a3.png 600w,\n/static/caniuse-eab51268adc721d158996e8d0ecfe6e3-abe1c.png 1200w,\n/static/caniuse-eab51268adc721d158996e8d0ecfe6e3-c4b3c.png 1272w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </a></p>\n<p>现在的 WebAssembly 还并不完美，虽说已经有使用 WebAssembly 开发的 Web 游戏出现了，但是还有很多不完美的地方。</p>\n<p>比如，现在的 WebAssembly 还必须配合“JavaScript glue code”来使用，也就是必须使用 JavaScript 来 fetch WebAssembly 的文件，然后调用 <code>window.WebAssembly.instantiate</code>、<code>window.WebAssembly.instantiateStreaming</code> 等函数进行实例化。部分情况下还需要 JavaScript 来管理堆栈。官方推荐的编译工具 <a href="http://emscripten.org">Emscripten</a> 虽然使用了各种黑科技来缩小编译后生成的代码的数量，但是最终生成的 JavaScript Glue Code 文件还是至少有 15K。</p>\n<p>未来，WebAssembly 将可能直接通过 HTML 标签进行引用，比如：<code>&#x3C;script src="./wa.wasm">&#x3C;/script></code>；或者可以通过 JavaScript ES6 模块的方式引用，比如：<code>import xxx from \'./wa.wasm\';</code>；</p>\n<p>线程的支持，异常处理，垃圾收集，尾调用优化等，都已经加入 WebAssembly 的<a href="https://webassembly.org/docs/future-features">计划列表</a>中了。</p>\n<h1>小结</h1>\n<p>WebAssembly 的出现，使得前端不再只能使用 JavaScript 进行开发了，C、C++、Go 等等都可以为浏览器前端贡献代码。</p>\n<p>这里我使用 wat 文件来编写的两个例子仅供参考，实际上在生产环境不大可能直接使用 wat 来进行开发，而是会使用 C、C++、Go 等语言编写模块，然后发布为 WebAssembly。</p>\n<p>WebAssembly 的出现不是要取代 JavaScript，而是与 JavaScript 相辅相成，为前端开发带来一种新的选择。将计算密集型的部分交给 WebAssembly 来处理，让浏览器发挥出最大的性能！</p>',fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱",date:"2018-08-07",catalog:"前沿新兴",author:"jinliming2"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-08-31-jian-shu-da-shu-ju-shi-shi-chu-li-kuang-jia/"},frontmatter:{title:"简述大数据实时处理框架"}}},{node:{fields:{slug:"/2018-08-13-tcp-lian-jie-ji-chang-jian-gong-ji-shou-fa-fen-xi/"},frontmatter:{title:"要点梳理：TCP连接及常见攻击手法分析"}}},{node:{fields:{slug:"/2018-08-13-ran-bing-luan-bf-ke-pu-bf-jie-shi-qi-de-js-shi-xian/"},frontmatter:{title:"然并卵：BF 科普 & BF 解释器的 JS 实现"}}},{node:{fields:{slug:"/2018-08-10-dapp-kai-fa-jian-jie/"},frontmatter:{title:"DApp 开发简介"}}},{node:{fields:{slug:"/2018-08-09-shi-lian-zhi-shi-performance/"},frontmatter:{title:"试炼之石-Performance"}}},{node:{fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog"}}},{node:{fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱"}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"
},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM？！"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-16-yuan-chuang-ji-yu-babylonjs-shi-xian-3d-da-ji-xiao-guo/"},frontmatter:{title:"基于 Babylon.js 实现 3D 打击效果"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【译】让我们从零开始编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南——用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)——白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"}}}});
//# sourceMappingURL=path---2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha-3e341185a05cacce2dc1.js.map