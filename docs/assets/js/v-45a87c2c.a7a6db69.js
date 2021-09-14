"use strict";(self.webpackChunkxzs_docs=self.webpackChunkxzs_docs||[]).push([[71],{8992:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-45a87c2c",path:"/guide/wx.html",title:"4.2 小程序",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"4.2.1 登录",slug:"_4-2-1-登录",children:[]},{level:3,title:"4.2.2 注册",slug:"_4-2-2-注册",children:[]},{level:3,title:"4.2.3 检查绑定",slug:"_4-2-3-检查绑定",children:[]},{level:3,title:"4.2.3 解绑退出",slug:"_4-2-3-解绑退出",children:[]},{level:3,title:"4.2.3 主页试卷列表",slug:"_4-2-3-主页试卷列表",children:[]},{level:3,title:"4.2.4 任务中心",slug:"_4-2-4-任务中心",children:[]},{level:3,title:"4.2.4 试卷列表",slug:"_4-2-4-试卷列表",children:[]}],filePathRelative:"guide/wx.md",git:{updatedTime:1631534121e3}}},783:(n,e,s)=>{s.r(e),s.d(e,{default:()=>l});const a=(0,s(6252).uE)('<h1 id="_4-2-小程序" tabindex="-1"><a class="header-anchor" href="#_4-2-小程序" aria-hidden="true">#</a> 4.2 小程序</h1><h3 id="_4-2-1-登录" tabindex="-1"><a class="header-anchor" href="#_4-2-1-登录" aria-hidden="true">#</a> 4.2.1 登录</h3><ul><li>接口地址：/api/wx/student/auth/bind</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>     userName: student  //用户名\n     password: 123456   //密码\n     code: 023BNuFa1CQ14B07KVHa16RHM94BNuF0   //授权码\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: &quot;950efd96-ecd1-4482-9204-c54cd3325a8a&quot;  //登录Token\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-2-注册" tabindex="-1"><a class="header-anchor" href="#_4-2-2-注册" aria-hidden="true">#</a> 4.2.2 注册</h3><ul><li>接口地址：/api/wx/student/user/register</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    userName: student2  //用户名\n    password: 123456 //密码\n    userLevel: 1   //年级\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-3-检查绑定" tabindex="-1"><a class="header-anchor" href="#_4-2-3-检查绑定" aria-hidden="true">#</a> 4.2.3 检查绑定</h3><ul><li>接口地址：/api/wx/student/user/register</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    code: 063MMx000eoAnM15Tj400hq8l64MMx0Z  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: &quot;2fa8cbb7-6be9-4e54-bc68-1265348cf703&quot;  //登录令牌\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-3-解绑退出" tabindex="-1"><a class="header-anchor" href="#_4-2-3-解绑退出" aria-hidden="true">#</a> 4.2.3 解绑退出</h3><ul><li>接口地址：/api/wx/student/auth/unBind</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: null\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="_4-2-3-主页试卷列表" tabindex="-1"><a class="header-anchor" href="#_4-2-3-主页试卷列表" aria-hidden="true">#</a> 4.2.3 主页试卷列表</h3><ul><li>接口地址：/api/wx/student/dashboard/index</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;fixedPaper&quot;: [  //固定试卷\n            {\n                &quot;id&quot;: 40,  //试卷id\n                &quot;name&quot;: &quot;aaa&quot;,  //试卷名称\n                &quot;limitStartTime&quot;: null,\n                &quot;limitEndTime&quot;: null\n            }\n        ],\n        &quot;timeLimitPaper&quot;: [  //时段试卷\n            {\n                &quot;id&quot;: 26,  //试卷id\n                &quot;name&quot;: &quot;202008705&quot;,  //试卷名称\n                &quot;limitStartTime&quot;: 1600704000000,\n                &quot;limitEndTime&quot;: 1664985600000,\n                &quot;startTime&quot;: &quot;2020-09-22 00:00:00&quot;,  //考试开始时间\n                &quot;endTime&quot;: &quot;2022-10-06 00:00:00&quot;  //考试结束时间\n            }\n        ],\n        &quot;classPaper&quot;: [  //班级试卷\n            {\n                &quot;paperId&quot;: 21,  //试卷id\n                &quot;paperName&quot;: &quot;20200908&quot;,  //试卷名称\n                &quot;className&quot;: &quot;1班&quot;  //班级\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h3 id="_4-2-4-任务中心" tabindex="-1"><a class="header-anchor" href="#_4-2-4-任务中心" aria-hidden="true">#</a> 4.2.4 任务中心</h3><ul><li>接口地址：/api/wx/student/dashboard/index</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    token: edadfcc9-4ce5-43a3-bb8f-302c5f7f2c59  //令牌\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: [\n        {\n            &quot;id&quot;: 5,\n            &quot;title&quot;: &quot;基础任务&quot;, //任务标题\n            &quot;paperItems&quot;: [\n                {\n                    &quot;examPaperId&quot;: 19,  //试卷id\n                    &quot;examPaperName&quot;: &quot;基础任务一&quot;,  //试卷名称\n                    &quot;examPaperAnswerId&quot;: 9,  //答卷id\n                    &quot;status&quot;: 2 //答卷状态\n                }\n            ]\n        }\n    ]\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="_4-2-4-试卷列表" tabindex="-1"><a class="header-anchor" href="#_4-2-4-试卷列表" aria-hidden="true">#</a> 4.2.4 试卷列表</h3><ul><li>接口地址：/api/wx/student/exam/paper/pageList</li><li>请求参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    paperType: 1,  //试卷类型\n    pageIndex: 1,  //页码\n    pageSize: 20  //每页数量\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>返回参数：</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;code&quot;: 1,\n    &quot;message&quot;: &quot;成功&quot;,\n    &quot;response&quot;: {\n        &quot;total&quot;: 9,\n        &quot;list&quot;: [\n            {\n                &quot;id&quot;: 72,\n                &quot;name&quot;: &quot;固定试卷&quot;, //试卷名称\n                &quot;questionCount&quot;: 1, //题目数量\n                &quot;score&quot;: 50, //分数\n                &quot;createTime&quot;: &quot;2021-09-10 16:06:45&quot;, //创建时间\n                &quot;createUser&quot;: 2, //创建人\n                &quot;subjectId&quot;: 4, //学科\n                &quot;subjectName&quot;: &quot;语文&quot;, //学科名称\n                &quot;paperType&quot;: 1, //试卷类型\n                &quot;frameTextContentId&quot;: 294,  试卷内容\n                &quot;startTime&quot;: &quot;&quot;,  //考试开始时间\n                &quot;endTime&quot;: &quot;&quot;, //考试结束时间\n                &quot;paperTypeStr&quot;: &quot;固定试卷&quot;, //试卷类型\n                &quot;scoreStr&quot;: &quot;5&quot;, //分数\n                &quot;suggestTimeStr&quot;: &quot;20分钟&quot; //考试时长\n            }\n        ]\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',36),l={render:function(n,e){return a}}}}]);