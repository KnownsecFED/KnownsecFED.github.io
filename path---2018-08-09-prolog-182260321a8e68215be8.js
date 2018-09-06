webpackJsonp([39633707322727],{632:function(n,a){n.exports={data:{site:{siteMetadata:{title:"创宇前端 - 最酷开发者的技术分享",author:"KnownsecFED",siteUrl:"https://knownsec-fed.com"}},markdownRemark:{id:"/tmp/app/src/pages/2018-08-09-prolog/index.md absPath of file >>> MarkdownRemark",html:'<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/header-6c77233f9f5f86bdc998314fdd535858-d6978.jpeg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 1200px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 50%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAKABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAE/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHWJHkllq//xAAbEAADAAIDAAAAAAAAAAAAAAAAAQIDERMhMf/aAAgBAQABBQJ3KLyd89GkV4j/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAZEAACAwEAAAAAAAAAAAAAAAAAARAhMUH/2gAIAQEABj8C1FI4ZP8A/8QAHRAAAgEEAwAAAAAAAAAAAAAAAAERECExYUFRkf/aAAgBAQABPyHn59SPUFRtGkWsPKDuD//aAAwDAQACAAMAAAAQ3N//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAwEBPxCn/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAECAQE/EImP/8QAHRAAAgIBBQAAAAAAAAAAAAAAAREAITFBUWFx0f/aAAgBAQABPxAPRsoBl5ClADJc+oBUFjg1CFg9ZSVBUhU1E53n/9k=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="那迷人的被遗忘的语言：Prolog"\n        title=""\n        src="/static/header-6c77233f9f5f86bdc998314fdd535858-d6978.jpeg"\n        srcset="/static/header-6c77233f9f5f86bdc998314fdd535858-527f0.jpeg 300w,\n/static/header-6c77233f9f5f86bdc998314fdd535858-9a7cd.jpeg 600w,\n/static/header-6c77233f9f5f86bdc998314fdd535858-d6978.jpeg 1200w"\n        sizes="(max-width: 1200px) 100vw, 1200px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>在进入正题之前，我们先一起思考一个问题：当我们在编程时，我们在做什么？</p>\n<p>看到这个问题，有些同学可能会第一时间要回答：</p>\n<ul>\n<li>在听音乐</li>\n<li>在打字</li>\n<li>在发呆</li>\n<li>在装作很忙的样子</li>\n<li>……</li>\n</ul>\n<p>尼玛，我不是那个意思，说认真的：当我们在编程时，我们在做什么？</p>\n<p>我们在把所想的「解决方案」转换成计算机可理解的「计算机语言」。</p>\n<p>JavaScript, Python, Java, Ruby, C++ …… 等等等等，哪怕是世界上最好的语言 PHP，也大抵如此：<strong>「解决方案」->「计算机语言」</strong>。</p>\n<p>但你有没有想过反过来？<strong>「计算机语言」->「解决方案」</strong> 这样，我们使用「计算机语言」描述问题，而计算机来告诉我们「解决方案」？</p>\n<p>或许你会想到人工智能、深度学习等等概念，但那些热门话题不是我们今天要讨论的。</p>\n<p>今天，我们来一起聊聊那迷人的被遗忘的语言：Prolog.</p>\n<h1>Prolog 简介</h1>\n<p>Prolog（Programming in Logic的缩写）是一种逻辑编程语言。它创建在逻辑学的理论基础之上， 诞生与 1972 年，最初被运用于自然语言等研究领域，距今 46 年历史。当下火热的 JavaScript 语言 23 岁，年龄刚好是 Prolog 的一半。</p>\n<p>说到 Prolog 是一种逻辑编程语言，那么跟一般的函数式语言有什么区别呢？答：完全不是一码事情。在 Prolog 里，最基本的做法是先描述事实（定立对象与对象之间的关系），然后用询问目标的方式来查询各种对象之间的关系，系统会自动进行匹配、回溯，并给出答案。</p>\n<p>举个例子：</p>\n<p>我们使用下面的语法来表述一个事实</p>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token function">handsome</span><span class="token punctuation">(</span>ergou<span class="token punctuation">)</span><span class="token operator">.</span>\n</code></pre>\n      </div>\n<p>这个语句描述了一个事实：二狗 (ergou) 是无比帅气 (handsome) 的，然后以句号 (.) 结束，表明这个事实描述完毕，不容置疑。</p>\n<p>然后接下来我们在 Prolog 的控制台 (REPL) 里就会得到如下的结论：</p>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token operator">?-</span> <span class="token function">handsome</span><span class="token punctuation">(</span><span class="token variable">X</span><span class="token punctuation">)</span><span class="token operator">.</span>\n<span class="token variable">X</span> <span class="token operator">=</span> ergou<span class="token operator">.</span>\n\n<span class="token operator">?-</span>\n</code></pre>\n      </div>\n<p>其中 <code>?-</code> 开头的是我们手动输入的，其他的是 Prolog 返回的。上面的那些操作是：</p>\n<ol>\n<li>我们首先问 Prolog：谁是世界上最帅的人？<code>handsome(X).</code> 其中 <code>X</code> 是大写字母开头，在 Prolog 里所有大写字母开头的都是变量。</li>\n<li>然后 Prolog 回答说：<code>X = ergou.</code> ，当然是二狗了！</li>\n</ol>\n<p>以上，应该可以算作 Prolog 基本思路的一个演示。你可以去下载适用于你的 Prolog 环境，然后在自己的电脑上把玩一下。</p>\n<p>建议使用 SWI Prolog（本文的所有演示代码都是在 SWI Prolog 进行的操作）：<a href="http://www.swi-prolog.org/">http://www.swi-prolog.org/</a></p>\n<p>安装完毕之后，执行下面三步，即可复现上面的结果：</p>\n<ol>\n<li>将事实写入文件</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token keyword">echo</span> <span class="token string">\'handsome(ergou).\'</span> <span class="token operator">></span> fact.prolog\n</code></pre>\n      </div>\n<ol start="2">\n<li>启动 Prolog REPL 并加载既定事实：</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>swipl fact.prolog\n</code></pre>\n      </div>\n<ol start="3">\n<li>在 Prolog REPL 内输入以下语句并回车：</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token function">handsome</span><span class="token punctuation">(</span><span class="token variable">X</span><span class="token punctuation">)</span><span class="token operator">.</span>\n</code></pre>\n      </div>\n<h1>谁是我大爷？</h1>\n<p>刚才的例子是我们描述了一个事实，然后又让 Prolog 告诉了我们这个事实，好像没有太大的用途，接下来我们试着做一下别的事情：</p>\n<h4>文件名：grandfather.prolog</h4>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token function">father</span><span class="token punctuation">(</span>yigou<span class="token punctuation">,</span>ergou<span class="token punctuation">)</span><span class="token operator">.</span>\n<span class="token function">father</span><span class="token punctuation">(</span>linggou<span class="token punctuation">,</span>yigou<span class="token punctuation">)</span><span class="token operator">.</span>\n\n<span class="token function">grandfather</span><span class="token punctuation">(</span><span class="token variable">X</span><span class="token punctuation">,</span><span class="token variable">Z</span><span class="token punctuation">)</span> <span class="token operator">:-</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token variable">X</span><span class="token punctuation">,</span><span class="token variable">Y</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">father</span><span class="token punctuation">(</span><span class="token variable">Y</span><span class="token punctuation">,</span><span class="token variable">Z</span><span class="token punctuation">)</span><span class="token operator">.</span>\n</code></pre>\n      </div>\n<p>看了上面的代码，应该可以理解到，我们是描述了三个事实：</p>\n<ol>\n<li>二狗 (ergou) 的父亲是 一狗 (yigou)</li>\n<li>一狗 (yigou) 的父亲是零狗 (linggou)</li>\n<li>X 是 Z 大爷的前提条件是：X 是 Y 的父亲，Y 是 Z 的父亲</li>\n</ol>\n<p>有了这些事实，我们可以干什么？可以找到二狗爷爷啊！</p>\n<blockquote>\n<p>载入既定事实</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>swipl grandfather.prolog\n</code></pre>\n      </div>\n<blockquote>\n<p>执行询问语句</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token operator">?-</span> <span class="token function">grandfather</span><span class="token punctuation">(</span><span class="token variable">X</span><span class="token punctuation">,</span>yigou<span class="token punctuation">)</span><span class="token operator">.</span>\nfalse<span class="token operator">.</span>\n\n<span class="token operator">?-</span> <span class="token function">grandfather</span><span class="token punctuation">(</span><span class="token variable">X</span><span class="token punctuation">,</span>ergou<span class="token punctuation">)</span><span class="token operator">.</span>\n<span class="token variable">X</span> <span class="token operator">=</span> linggou<span class="token operator">.</span>\n\n<span class="token operator">?-</span>\n</code></pre>\n      </div>\n<p>可以看到一狗 (yigou) 是没有爷爷的，二狗 (ergou) 的爷爷是零狗 (linggou) 。</p>\n<h1>我和小红的共同爱好是什么？</h1>\n<p>像刚才那个例子，我们再举一个来加深一下这种思维方式：</p>\n<h4>文件名：music.prolog</h4>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token function">listen</span><span class="token punctuation">(</span>ergou<span class="token punctuation">,</span> bach<span class="token punctuation">)</span><span class="token operator">.</span> <span class="token comment">% 二狗 听 巴赫</span>\n<span class="token function">listen</span><span class="token punctuation">(</span>ergou<span class="token punctuation">,</span> beethoven<span class="token punctuation">)</span><span class="token operator">.</span> <span class="token comment">% 二狗 听 贝多芬</span>\n<span class="token function">listen</span><span class="token punctuation">(</span>ergou<span class="token punctuation">,</span> mozart<span class="token punctuation">)</span><span class="token operator">.</span> <span class="token comment">% 二狗 听 莫扎特</span>\n<span class="token function">listen</span><span class="token punctuation">(</span>xiaohong<span class="token punctuation">,</span> mj<span class="token punctuation">)</span><span class="token operator">.</span>  <span class="token comment">% 小红 听 迈克尔·杰克逊</span>\n<span class="token function">listen</span><span class="token punctuation">(</span>xiaohong<span class="token punctuation">,</span> dylan<span class="token punctuation">)</span><span class="token operator">.</span> <span class="token comment">% 小红 听 鲍勃·迪伦</span>\n<span class="token function">listen</span><span class="token punctuation">(</span>xiaohong<span class="token punctuation">,</span> bach<span class="token punctuation">)</span><span class="token operator">.</span> <span class="token comment">% 小红 听 巴赫</span>\n<span class="token function">listen</span><span class="token punctuation">(</span>xiaohong<span class="token punctuation">,</span> beethoven<span class="token punctuation">)</span><span class="token operator">.</span> <span class="token comment">% 小红 听 贝多芬</span>\n</code></pre>\n      </div>\n<p>上面这些代码描述了二狗和小红的听歌品味，现在如果二狗想要找出自己与小红在听歌品味上的共同之处，该怎么办？</p>\n<blockquote>\n<p>载入既定事实</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>swipl music.prolog\n</code></pre>\n      </div>\n<blockquote>\n<p>执行询问语句</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token operator">?-</span> <span class="token function">listen</span><span class="token punctuation">(</span>ergou<span class="token punctuation">,</span> <span class="token variable">X</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">listen</span><span class="token punctuation">(</span>xiaohong<span class="token punctuation">,</span><span class="token variable">X</span><span class="token punctuation">)</span><span class="token operator">.</span>\n<span class="token variable">X</span> <span class="token operator">=</span> bach <span class="token operator">;</span>\n<span class="token variable">X</span> <span class="token operator">=</span> beethoven <span class="token operator">;</span>\nfalse<span class="token operator">.</span>\n\n<span class="token operator">?-</span>\n</code></pre>\n      </div>\n<p>我们在加载了既定事实之后，开始询问：有什么音乐是二狗 (ergou) 和小红 (xiaohong) 都有在听的呢？</p>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token operator">?-</span> <span class="token function">listen</span><span class="token punctuation">(</span>ergou<span class="token punctuation">,</span> <span class="token variable">X</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">listen</span><span class="token punctuation">(</span>xiaohong<span class="token punctuation">,</span><span class="token variable">X</span><span class="token punctuation">)</span><span class="token operator">.</span>\n</code></pre>\n      </div>\n<p>然后我们得到了下面的答案：</p>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token operator">?-</span> <span class="token function">listen</span><span class="token punctuation">(</span>ergou<span class="token punctuation">,</span> <span class="token variable">X</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">listen</span><span class="token punctuation">(</span>xiaohong<span class="token punctuation">,</span><span class="token variable">X</span><span class="token punctuation">)</span><span class="token operator">.</span>\n<span class="token variable">X</span> <span class="token operator">=</span> bach\n</code></pre>\n      </div>\n<p>如果你有在跟着文章手动操作，如果你是个细心的同学，你会发现这次询问之后光标停留在了 <code>X = bach</code> 这里，而不是换行显示出 <code>?-</code>。这是为什么呢？</p>\n<p>这时候 Prolog 是在说：问题还有别的解答，按下 <code>;</code> 寻求更多，按下 <code>Enter</code> 表示接受当前答案。在上边了例子中，我们持续按下 <code>;</code> ，直到返回 <code>false</code> 才停下来。</p>\n<p>于是我们得到了二狗和小红共同欣赏的音乐，是巴赫和贝多芬。</p>\n<h1>鸡兔同笼问题</h1>\n<p>接下来我们来一个经典问题：</p>\n<blockquote>\n<p>今有雉兔同笼，上有三十五头，下有九十四足，问雉兔各几何？</p>\n</blockquote>\n<p>—— 《孙子算经》</p>\n<p>翻译成白话文：</p>\n<blockquote>\n<p>有若干只鸡兔同在一个笼子里，从上面数，有35个头，从下面数，有94只脚。问笼中各有多少只鸡和兔？</p>\n</blockquote>\n<p>停！快停止思考！</p>\n<p>如果你在使用 JavaScript、Python 等等语言的思路去尝试编程解决问题的话，赶紧停下来，现在我们要用描述既定事实的方式，让 Prolog 给我们答案！</p>\n<h4>文件名：chicken-and-rabbits.prolog</h4>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token comment">% 首先，我们引入一个 clpq 的库来帮助我们进行运算符描述</span>\n<span class="token operator">:-</span> <span class="token function">use_module</span><span class="token punctuation">(</span><span class="token function">library</span><span class="token punctuation">(</span>clpq<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">.</span>\n\n<span class="token comment">% 然后，我们定义事实：脑袋的总数量(H) 应当等于 鸡的总数量(C) 加上 兔子的总数量(R)</span>\n<span class="token function">head</span><span class="token punctuation">(</span><span class="token variable">C</span><span class="token punctuation">,</span><span class="token variable">R</span><span class="token punctuation">,</span><span class="token variable">H</span><span class="token punctuation">)</span> <span class="token operator">:-</span> <span class="token punctuation">{</span><span class="token variable">H</span> <span class="token operator">=</span> <span class="token variable">C</span> <span class="token operator">+</span> <span class="token variable">R</span><span class="token punctuation">}</span><span class="token operator">.</span>\n\n<span class="token comment">% 然后，我们定义事实：脚的总数量(F) 应当等于 鸡的总数量(C)乘以二 加上 兔子的总数量(R)乘以四</span>\n<span class="token function">foot</span><span class="token punctuation">(</span><span class="token variable">C</span><span class="token punctuation">,</span><span class="token variable">R</span><span class="token punctuation">,</span><span class="token variable">F</span><span class="token punctuation">)</span> <span class="token operator">:-</span> <span class="token punctuation">{</span><span class="token variable">F</span> <span class="token operator">=</span> <span class="token variable">C</span><span class="token operator">*</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token variable">R</span><span class="token operator">*</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token operator">.</span>\n</code></pre>\n      </div>\n<p>我们定义好了事实，那么接下来让我们去询问 Prolog 答案：</p>\n<blockquote>\n<p>载入既定事实</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>swipl chicken-and-rabbits.prolog\n</code></pre>\n      </div>\n<blockquote>\n<p>执行询问语句</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-prolog"><code><span class="token operator">?-</span> <span class="token function">head</span><span class="token punctuation">(</span><span class="token variable">C</span><span class="token punctuation">,</span><span class="token variable">R</span><span class="token punctuation">,</span><span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">foot</span><span class="token punctuation">(</span><span class="token variable">C</span><span class="token punctuation">,</span><span class="token variable">R</span><span class="token punctuation">,</span><span class="token number">94</span><span class="token punctuation">)</span><span class="token operator">.</span>\n<span class="token variable">C</span> <span class="token operator">=</span> <span class="token number">23</span><span class="token punctuation">,</span>\n<span class="token variable">R</span> <span class="token operator">=</span> <span class="token number">12.</span>\n</code></pre>\n      </div>\n<p>答：鸡有 23 只！兔有 12 只！</p>\n<p>哈哈哈哈，没错！再也不需要去绞尽脑汁思考怎么告诉计算机去计算啦！只需要告诉 Prolog 既定事实，剩下的，就是提出正确的问题啦！</p>\n<p>古老的 Prolog 在计算机科学中的逐渐退热，必然有对应的原因，但这种语言所特有的思维方式，也不妨去探寻一下。在当下的编程氛围里，或许 Prolog 就像是夏日的一杯加冰柠檬水，给我们带来凉爽和清新呢！</p>\n<p>好了，关于 Prolog 的讨论，我们今天就到这里了，多谢各位！</p>\n<p>还有更多关于 Prolog 的资料，感兴趣可以继续阅读：</p>\n<ul>\n<li><a href="https://en.wikipedia.org/wiki/Prolog">Prolog - Wikipedia</a></li>\n<li><a href="http://www.swi-prolog.org/">SWI-Prolog</a></li>\n<li><a href="http://www.swi-prolog.org/man/clpqr.html">SWI-Prolog manual / clpqr</a></li>\n<li><a href="http://www.sjsu.edu/faculty/watkins/prolog.htm">Introduction to the Programming Language PROLOG: A Language  for Logic Programming and Symbolic Computation</a></li>\n</ul>',fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog",date:"2018-08-09",catalog:"技术杂谈",author:"王二狗"}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/howToWrite/"},frontmatter:{title:""}}},{node:{fields:{slug:"/2018-08-31-jian-shu-da-shu-ju-shi-shi-chu-li-kuang-jia/"},frontmatter:{title:"简述大数据实时处理框架"}}},{node:{fields:{slug:"/2018-08-13-tcp-lian-jie-ji-chang-jian-gong-ji-shou-fa-fen-xi/"},frontmatter:{title:"要点梳理：TCP连接及常见攻击手法分析"}}},{node:{fields:{slug:"/2018-08-13-ran-bing-luan-bf-ke-pu-bf-jie-shi-qi-de-js-shi-xian/"},frontmatter:{title:"然并卵：BF 科普 & BF 解释器的 JS 实现"}}},{node:{fields:{slug:"/2018-08-10-dapp-kai-fa-jian-jie/"},frontmatter:{title:"DApp 开发简介"}}},{node:{fields:{slug:"/2018-08-09-shi-lian-zhi-shi-performance/"},frontmatter:{title:"试炼之石-Performance"}}},{node:{fields:{slug:"/2018-08-09-prolog/"},frontmatter:{title:"那迷人的被遗忘的语言：Prolog"}}},{node:{fields:{slug:"/2018-08-08-qiao-qiao-xian-qi-webassembly-de-shen-mi-mian-sha/"},frontmatter:{title:"悄悄掀起 WebAssembly 的神秘面纱"}}},{node:{fields:{slug:"/2018-04-16-fan-yi-2018-nian-12-zhong-yi-dong-duan-yong-hu-ti-yan-she-ji-qu-shi/"},frontmatter:{title:"【翻译】2018 年 12 种移动端用户体验设计趋势"}}},{node:{fields:{slug:"/2018-04-08-fan-yi-mei-ge-uiux-she-ji-shi-du-xu-yao-zhi-dao-de-xin-li-xue-yuan-li/"},frontmatter:{title:"【翻译】每个 UI / UX 设计师都需要知道的心理学原理"}}},{node:{fields:{slug:"/2018-04-07-fan-yi-yan-fa-ren-yuan-de-sheng-chan-li-shi-fou-ke-yi-liang-hua/"},frontmatter:{title:"【翻译】研发人员的生产力是否可以量化"}}},{node:{fields:{slug:"/2018-04-01-fan-yi-jie-he-tu-xing-he-yu-yin-jie-mian-ti-gong-geng-hao-de-yong-hu-ti-yan/"},frontmatter:{title:"【翻译】结合图形和语音界面，提供更好的用户体验"}}},{node:{fields:{slug:"/2018-03-31-fan-yi-http1-dao-http2-de-yan-bian-ru-he-gai-bian-liao-web/"},frontmatter:{title:"【译】HTTP1 到 HTTP 2 的演变如何改变了 web"}}},{node:{fields:{slug:"/2018-03-28-shui-dong-liao-wo-de-dom/"},frontmatter:{title:"谁动了我的 DOM？！"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-wei-kai-yuan-ruan-jian-she-ji/"},frontmatter:{title:"【翻译】为开源软件设计"}}},{node:{fields:{slug:"/2018-03-27-fan-yi-nodejstwofactor-shen-fen-ren-zheng/"},frontmatter:{title:"【译】node.js Two-Factor 身份认证"}}},{node:{fields:{slug:"/2018-03-25-react-server-side-render-with-hapi/"},frontmatter:{title:"服务端渲染和静态化"}}},{node:{fields:{slug:"/2018-03-25-ru-he-xie-yi-ge-gao-bi-ge-readme/"},frontmatter:{title:"如何写一个高逼格 README"}}},{node:{fields:{slug:"/2018-03-25-quan-zhan-gong-cheng-shi-zhi-lu-reactnative-zhi-sao-miao-er-wei-ma/"},frontmatter:{title:"全栈工程师之路-React Native之扫描二维码"}}},{node:{fields:{slug:"/2018-03-22-wu-xian-wang-luo-ling-lei-xiu-tan/"},frontmatter:{title:"无线网络另类嗅探"}}},{node:{fields:{slug:"/2018-03-19-fan-yi-shi-yong-de-ui-dong-hua-ji-qiao-gai-jin-ui-wei-jiao-hu-de-shi-yong-jian-yi/"},frontmatter:{title:"【翻译】实用的 UI 动画技巧——改进 UI 微交互的实用建议"}}},{node:{fields:{slug:"/2018-03-19-reactref-zhi-bei-jiao-cheng/"},frontmatter:{title:"React ref 指北教程"}}},{node:{fields:{slug:"/2018-03-18-fan-yi-how-to-prevent-your-node.js-process-from-crashing/"},frontmatter:{title:"【翻译】 如何使你的 Node 应用免于崩溃"}}},{node:{fields:{slug:"/2018-03-17-yi-zhong-qian-hou-duan-fen-li-de-kua-yu-kai-fa-fang-shi/"},frontmatter:{title:"一种方便的跨域开发解决方案"}}},{node:{fields:{slug:"/2018-03-16-yuan-chuang-ji-yu-babylonjs-shi-xian-3d-da-ji-xiao-guo/"},frontmatter:{title:"基于 Babylon.js 实现 3D 打击效果"}}},{node:{fields:{slug:"/2018-03-13-fan-yi-ru-he-chuang-jian-jiao-hu-you-hao-de-biao-dan/"},frontmatter:{title:"【译】如何创建交互友好的表单"}}},{node:{fields:{slug:"/2018-03-12-fan-yi-rang-wo-men-cong-ling-kai-shi-bian-bian-xie-yi-ge-web-fu-wu-qi/"},frontmatter:{title:"【译】让我们从零开始编写一个web服务器"}}},{node:{fields:{slug:"/2018-03-11-bikeshedding/"},frontmatter:{title:"由屎色自行车棚引发的思考"}}},{node:{fields:{slug:"/2018-03-11-xin-shou-shi-jiao-de-docker/"},frontmatter:{title:"新手视角的 Docker"}}},{node:{fields:{slug:"/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/"},frontmatter:{title:"【译】基于 Cypress 测试 React 应用"}}},{node:{fields:{slug:"/2018-03-05-fan-yi-ru-he-zhao-dao-wan-mei-de-se-cai-da-pei-jie-shao-colorclaim/"},frontmatter:{title:"【译】如何找到完美的色彩搭配 - 介绍 ColorClaim"}}},{node:{fields:{slug:"/2018-03-05-ru-he-shi-yong-mac-po-jie-wifi/"},frontmatter:{title:"如何使用Mac破解Wifi"}}},{node:{fields:{slug:"/2018-03-05-yi-ge-chrome-kuo-zhan-jiu-zhe-yang-dan-sheng-liao/"},frontmatter:{title:"程序员偷懒指南——用chrome插件实现前端资讯推送"}}},{node:{fields:{slug:"/2018-03-01-wei-xian-de-targetblank-yu-opener/"},frontmatter:{title:'危险的 target="_blank" 与 “opener”'}}},{node:{fields:{slug:"/2018-02-28-activerecord-he-datamappers-mo-shi-jian-jie/"},frontmatter:{title:"Active Record 和 Data Mappers 模式简介"}}},{node:{fields:{slug:"/2018-02-26-bu-jin-jin-shi-piao-liang-tu-xiang-ru-he-qu-dong-yong-hu-ti-yan/"},frontmatter:{title:"【译】不仅仅是漂亮：图像如何驱动用户体验"}}},{node:{fields:{slug:"/2018-02-23-css3-clip-path-yong-fa-jie-shao/"},frontmatter:{title:"CSS3 clip-path 用法介绍"}}},{node:{fields:{slug:"/2018-02-23-du-shu-bi-ji-ke-shi-hua-shi-yi-zhong-yi-shu-bu-zhi-shi-mei-xin-xi-tu-biao-she-ji-yuan-li-yu-jing-dian-an-li-xu-zhang/"},frontmatter:{title:"读书笔记：可视化是一种艺术 -《不只是美：信息图表设计原理与经典案例》序章"}}},{node:{fields:{slug:"/2018-02-23-mei-ge-node-ying-yong-ke-neng-cun-zai-de-timing-attack-an-quan-lou-dong/"},frontmatter:{title:"每个 node 应用可能存在的 timing-attack 安全漏洞"}}},{node:{fields:{slug:"/2018-02-09-zan-lai-liao-liao-vuecompile/"},frontmatter:{title:"咱来聊聊 Vue - compile"}}},{node:{fields:{slug:"/2018-02-05-ji-yi-ci-jian-dan-de-csrf-gong-ji-shi-yan/"},frontmatter:{title:"记一次简单的 CSRF 攻击实验"}}},{node:{fields:{slug:"/2018-02-04-fan-yi-reactscope-jie-shao/"},frontmatter:{title:"【译】React Scope介绍"}}},{node:{fields:{slug:"/2018-02-03-fan-yi-liu-ge-xuan-ze-ui-yan-se-de-ji-qiao/"},frontmatter:{title:"【译】六个选择UI颜色的技巧"}}},{node:{fields:{slug:"/2018-02-03-huo-yong-git-apply-he-ru-patch-bu-ding/"},frontmatter:{title:"活用 git apply 合入 patch 补丁"}}},{node:{fields:{slug:"/2018-02-03-wo-de-di-yi-ge-node-ming-ling-hang-gong-ju/"},frontmatter:{title:"我的第一个 Node 命令行工具"}}},{node:{fields:{slug:"/2018-02-01-fan-yi-react-xin-de-contextapi/"},frontmatter:{title:"【译】React ⚛️  新的 Context API"}}},{node:{fields:{slug:"/2018-01-29-kuai-su-da-jian-ni-de-github-page-ge-ren-bo-ke-ji-yu-createreactapp-de-dan-ye-mian-ying-yong-shi-jian/"},frontmatter:{title:"快速搭建你的 github pages 个人博客 —— 基于 Create-React-App 的单页面应用实践"}}},{node:{fields:{slug:"/2018-01-28-redux-promise-middleware/"},frontmatter:{title:"一个插件让你在 Redux 中写 promise 事半功倍"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-react-zu-jian-mo-shi/"},frontmatter:{title:"【译】React 组件设计模式基础"}}},{node:{fields:{slug:"/2018-01-28-fan-yi-bu-yao-rang-yong-hu-zai-chan-pin-ti-yan-shang-shou-dao-cuo-zhe/"},frontmatter:{title:"【译】不要让用户在产品体验上受到挫折"}}},{node:{fields:{slug:"/2018-01-27-javascript-mo-huan-dai-li/"},frontmatter:{title:"JavaScript 魔幻代理"}}},{node:{fields:{slug:"/2018-01-22-web-qian-duan-jian-dan-ding-yue-de-shi-xian/"},frontmatter:{title:"Web前端简单订阅的实现"}}},{node:{fields:{slug:"/2018-01-21-how-django-works/"},frontmatter:{title:"从请求到响应 django 都做了哪些处理"}}},{node:{fields:{slug:"/2018-01-21-electron-with-react/"},frontmatter:{title:"React+Electron搭建一个桌面应用"}}},{node:{fields:{slug:"/2018-01-20-fan-yi-ui-she-ji-zhong-de-ge-shi-ta-yuan-ze/"},frontmatter:{title:"【译】UI 设计中的格式塔原则"}}},{node:{fields:{slug:"/2018-01-19-xia-yi-dai-tong-xin-xie-yi-quic/"},frontmatter:{title:"下一代通信协议：QUIC"}}},{node:{fields:{slug:"/2018-01-19-fan-yi-shi-yong-css-zhui-zong-yong-hu/"},frontmatter:{title:"【译】使用 CSS 追踪用户"}}},{node:{fields:{slug:"/2018-01-14-antd-yuan-ma-jie-du-notification/"},frontmatter:{title:"antd 源码解读 notification"}}},{node:{fields:{slug:"/2018-01-14-ui-zhong-de-pai-ban-chu-xue-zhe-zhi-nan/"},frontmatter:{title:"【译】UI 中的排版：初学者指南"}}},{node:{fields:{slug:"/2018-01-14-learn-koa-intro/"},frontmatter:{title:"koa包教包会(一)——白话koa"}}},{node:{fields:{slug:"/2018-01-13-zi-ji-dong-shou-xie-yi-ge-simplevue/"},frontmatter:{title:"自己动手写一个 SimpleVue"}}},{node:{fields:{slug:"/2018-01-12-translation-React-Animations-in-Depth/"},frontmatter:{title:"【译】React Web 动画的 5 种创建方式，每一种都不简单"}}},{node:{fields:{slug:"/2018-01-10-ru-he-kuo-zhan-create-react-app-de-webpack-pei-zhi/"},frontmatter:{title:"如何扩展 Create React App 的 Webpack 配置"}}},{node:{fields:{slug:"/2018-01-08-mapbox-gl-js/"},frontmatter:{title:"3D GIS 应用开发 —— 基于 Mapbox GL 的实践总结"}}},{node:{fields:{slug:"/2018-01-07-the-importance-of-visual-appeal-in-web-design/"},frontmatter:{title:"【译】视觉吸引力在网页设计中的重要性"}}},{node:{fields:{slug:"/2018-01-06-react-higher-order-component/"},frontmatter:{title:"React 高阶组件介绍"}}},{node:{fields:{slug:"/2018-01-05-to-vim/"},frontmatter:{title:"如何让 vim 成为我们的神器"}}},{node:{fields:{slug:"/2018-01-05-d3-js-v3-data-driven-and-d3-force/"},frontmatter:{title:"D3.js 数据驱动 和 force 力学图讲解"}}},{node:{fields:{slug:"/2018-01-05-create-a-redux-middleware/"},frontmatter:{title:"如何编写一个 Redux 中间件"}}}]}},pathContext:{slug:"/2018-08-09-prolog/"}}}});
//# sourceMappingURL=path---2018-08-09-prolog-182260321a8e68215be8.js.map