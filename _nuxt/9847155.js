(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{257:function(t,e,o){var content=o(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("3236cb02",content,!0,{sourceMap:!1})},258:function(t,e,o){var content=o(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("c30a1e56",content,!0,{sourceMap:!1})},259:function(t,e,o){var content=o(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("ec7ffa66",content,!0,{sourceMap:!1})},260:function(t,e,o){var content=o(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("2410b588",content,!0,{sourceMap:!1})},261:function(t,e,o){var content=o(280);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(47).default)("9d97e608",content,!0,{sourceMap:!1})},263:function(t,e,o){"use strict";o(58);var n={components:{},methods:{scroll_to_about_me:function(){document.getElementsByClassName("home/about-me")[0].scrollIntoView({behavior:"smooth"})},type:function(){var i=0,h1=document.querySelector("h1"),t=h1.innerText,e=h1.offsetHeight;h1.style.setProperty("height","".concat(e,"px")),h1.innerText="",console.log(e);console.log(h1.innerText),setTimeout((function e(){if(i<t.length){var o=t.charAt(i);if(h1.innerHTML+=o,i++,","===o)return void setTimeout(e,500);setTimeout(e,40)}else h1.style.removeProperty("height")}),300)}},mounted:function(){this.type()}},l=(o(271),o(23)),r=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"home/landing_area / w-screen-bg h-screen-vp flex flex-col md:flex-row-reverse / mt-0 md:pt-48 md:pb-10"},[t._m(0),t._v(" "),o("div",{staticClass:"w-full md:w-1/2 h-7/10 md:h-auto / "},[o("h1",{staticClass:"leading-tight / mt-0"},[t._v(t._s(t.$t("home.landing_area.title")))]),t._v(" "),o("h2",{staticClass:"text-blue-800 / mt-20"},[t._v("Rick Rosendaal.")]),t._v(" "),o("h4",{staticClass:" / mt-0"},[t._v(t._s(t.$t("home.landing_area.description")))]),t._v(" "),o("nuxt-link",{attrs:{to:"/contact"}},[o("button",{staticClass:"mt-20 tracking-widest",staticStyle:{height:"3.125rem","letter-spacing":"0.2em"}},[t._v("\n        "+t._s(t.$t("global.contact_me"))+" />\n      ")])])],1),t._v(" "),o("a",{staticClass:"btn",attrs:{id:"home-scroll-button",target:"projects"},on:{click:t.scroll_to_about_me}},[o("span")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"w-full h-3/10 md:w-1/2 md:h-full / flex items-end flex-col"},[e("div",{staticClass:"w-full h-full md:w-2/3 md:h-2/3 flex items-center md:block"},[e("img",{staticClass:"rounded-full h-3/4 md:h-auto / mx-auto",staticStyle:{transform:"scaleX(1)"},attrs:{src:"/images/personal/rick-casual.jpg"}})])])}],!1,null,"ecb517e6",null).exports,c={components:{}},m=(o(273),Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"home/projects w-screen-bg flex flex-col md:flex-row  justify-between / pt-32 pb-32"},[o("div",{staticClass:"relative w-full md:w-1/3 pr-10"},[o("h2",{staticClass:"leading-none / mb-5"},[t._v(t._s(t.$t("home.projects.title")))]),t._v(" "),o("h4",[t._v("\n\t\t\t"+t._s(t.$t("home.projects.description"))+"\n\t\t")]),t._v(" "),o("div",{staticClass:"category-img-sm / relative / mt-5"},[o("img",{attrs:{src:"images/undraw/projects_dashboard_blank.svg"}}),t._v(" "),o("div",{staticClass:"video-container shadow-md absolute"},[o("div",[o("video",{staticClass:"youtube-video",attrs:{muted:"",autoplay:"",loop:"",poster:"images/projects/teamnow/1.jpg",preload:"none"},domProps:{muted:!0}},[o("source",{attrs:{src:"videos/banner.webm",type:"video/webm"}}),t._v(" "),o("source",{attrs:{src:"videos/banner.mp4",type:"video/mp4"}})])])])]),t._v(" "),o("nuxt-link",{attrs:{to:"/projects"}},[o("button",{staticClass:"tracking-widest mt-16",staticStyle:{height:"3.125rem","letter-spacing":"0.2em"}},[t._v("\n\t\t\t\t"+t._s(t.$t("home.projects.view_all_projects"))+" />\n\t\t\t")])])],1),t._v(" "),o("div",{staticClass:"category-img-md / relative"},[o("img",{attrs:{src:"images/undraw/projects_dashboard_blank.svg"}}),t._v(" "),o("div",{staticClass:"video-container shadow-md absolute"},[o("div",[o("video",{staticClass:"youtube-video",attrs:{muted:"",autoplay:"",loop:"",poster:"images/projects/teamnow/1.jpg",preload:"none"},domProps:{muted:!0}},[o("source",{attrs:{src:"videos/banner.webm",type:"video/webm"}}),t._v(" "),o("source",{attrs:{src:"videos/banner.mp4",type:"video/mp4"}})])])])])])}),[],!1,null,"2666fb5e",null).exports),d={components:{}},v=(o(275),Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"home/about-me / w-screen-bg / bg-indigo-100 / flex flex-col md:flex-row justify-between / pt-32 pb-32"},[o("div",{staticClass:"w-full md:w-5/12"},[o("h2",{staticClass:"leading-none / mb-5"},[t._v(t._s(t.$t("home.about_me.title")))]),t._v(" "),o("h4",[t._v("\n\t\t\t"+t._s(t.$t("home.about_me.description"))+"\n\t\t")]),t._v(" "),o("img",{staticClass:"category-img-sm / w-1/2 / mt-20",attrs:{src:"/images/undraw/programming.svg"}}),t._v(" "),o("nuxt-link",{attrs:{to:"/about-me"}},[o("button",{staticClass:"mt-20 tracking-widest",staticStyle:{height:"3.125rem","letter-spacing":"0.2em"}},[t._v("\n\t\t\t\t"+t._s(t.$t("global.read_more"))+" />\n\t\t\t")])])],1),t._v(" "),o("img",{staticClass:"category-img-md / w-1/2",attrs:{src:"/images/undraw/programming.svg"}})])}),[],!1,null,"ad4423ae",null).exports),f={components:{},data:function(){return{skills_images:["ue4","c-plus-plus","c-sharp","css","dot-net","github-cat"]}},computed:{skills_image_style:function(){return"width: 50px"}}},_=(o(277),{name:"Home",components:{landing_area:r,projects:m,about_me:v,skills:Object(l.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"home/skills w-screen-bg bg-indigo-100 flex justify-between / pt-32 pb-32"},[o("div",{staticClass:"w-full md:w-5/12"},[o("h2",{staticClass:"leading-none / mb-5"},[t._v(t._s(t.$t("home.skills.title")))]),t._v(" "),o("h4",[t._v(t._s(t.$t("home.skills.description")))]),t._v(" "),o("div",{staticClass:"flex justify-between / mt-10 w-2/3 md:w-full"},t._l(t.skills_images,(function(t){return o("img",{staticClass:"w-1/12 object-scale-down",attrs:{src:"/images/software/"+t+".png"}})})),0),t._v(" "),o("img",{staticClass:"category-img-sm / skills-img / w-8/12 / pt-20 pb-20 pr-10",attrs:{src:"/images/undraw/skills.svg"}}),t._v(" "),o("nuxt-link",{attrs:{to:"/skills"}},[o("button",{staticClass:"mt-20 tracking-widest",staticStyle:{height:"3.125rem","letter-spacing":"0.2em"}},[t._v("\n\t\t\t\t"+t._s(t.$t("home.skills.view_all_skills"))+"  />\n\t\t\t")])])],1),t._v(" "),o("img",{staticClass:"category-img-md  / skills-img / w-5/12 / pt-20 pb-20 pr-10",attrs:{src:"/images/undraw/skills.svg"}})])}),[],!1,null,"f26b34ea",null).exports}});e.a=_},271:function(t,e,o){"use strict";var n=o(257);o.n(n).a},272:function(t,e,o){(e=o(46)(!1)).push([t.i,"#home-scroll-button[data-v-ecb517e6]{cursor:pointer;top:auto;bottom:50px;position:absolute;left:50%;z-index:2;display:inline-block;transform:translate(-50%);letter-spacing:.1em;text-decoration:none;transition:opacity .3s;width:60px;height:100px}#home-scroll-button span[data-v-ecb517e6]{position:absolute;top:0;left:50%;width:40px;height:40px;margin-left:-20px;border-left:1px solid #2d3748;border-bottom:1px solid #2d3748;transform:rotate(-45deg);-webkit-animation:sdb05-data-v-ecb517e6 1.5s infinite;animation:sdb05-data-v-ecb517e6 1.5s infinite;box-sizing:border-box}@-webkit-keyframes sdb05-data-v-ecb517e6{0%{-webkit-transform:rotate(-45deg) translate(20px,-20px);opacity:0}50%{opacity:1}to{-webkit-transform:rotate(-45deg) translate(-20px,20px);opacity:0}}@keyframes sdb05-data-v-ecb517e6{0%{transform:rotate(-45deg) translate(20px,-20px);opacity:0}50%{opacity:1}to{transform:rotate(-45deg) translate(-20px,20px);opacity:0}}",""]),t.exports=e},273:function(t,e,o){"use strict";var n=o(258);o.n(n).a},274:function(t,e,o){(e=o(46)(!1)).push([t.i,".video-container[data-v-2666fb5e]{display:grid;grid-template-columns:1fr;grid-gap:10px 10px;left:0;top:24px;width:80%}.video-container div[data-v-2666fb5e]{box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);outline:1px solid #2d3748}",""]),t.exports=e},275:function(t,e,o){"use strict";var n=o(259);o.n(n).a},276:function(t,e,o){(e=o(46)(!1)).push([t.i,"",""]),t.exports=e},277:function(t,e,o){"use strict";var n=o(260);o.n(n).a},278:function(t,e,o){(e=o(46)(!1)).push([t.i,".skills-img[data-v-f26b34ea]{transform:scaleX(-1)}",""]),t.exports=e},279:function(t,e,o){"use strict";var n=o(261);o.n(n).a},280:function(t,e,o){(e=o(46)(!1)).push([t.i,".category-img-sm{display:block}.category-img-md{display:none}@media (min-width:1024px){.category-img-sm{display:none}.category-img-md{display:block}}",""]),t.exports=e},350:function(t,e,o){"use strict";o.r(e);var n=o(263),l=(o(279),o(23)),component=Object(l.a)(n.a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("landing_area"),this._v(" "),e("about_me"),this._v(" "),e("projects"),this._v(" "),e("skills")],1)}),[],!1,null,null,null);e.default=component.exports}}]);