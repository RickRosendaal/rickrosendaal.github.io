(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{248:function(e,t,o){var content=o(252);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(47).default)("2d58c58a",content,!0,{sourceMap:!1})},249:function(e,t,o){var content=o(256);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(47).default)("26c51384",content,!0,{sourceMap:!1})},251:function(e,t,o){"use strict";var r=o(248);o.n(r).a},252:function(e,t,o){(t=o(46)(!1)).push([e.i,".page-header[data-v-28cfd809]{height:40rem}@media (min-width:1024px){.page-header[data-v-28cfd809]{height:18.75rem}}",""]),e.exports=t},253:function(e,t,o){"use strict";var r={components:{},props:{image:String,round_img:{required:!1,default:!1},flip_img:{required:!1,default:!1}}},n=(o(251),o(23)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page-header w-full / flex justify-between flex-row flex-col-reverse md:flex-row / my-24 md:my-48"},[o("div",{staticClass:"w-full md:w-1/3 mt-16 md:mt-0 h-2/3"},[o("h1",{staticClass:"leading-tight"},[e._t("title")],2),e._v(" "),o("h4",[e._t("description")],2)]),e._v(" "),o("div",{staticClass:"w-full md:w-2/3 h-1/3 md:h-full",style:e.flip_img?"transform: scaleX(-1);":""},[e._t("image-area",[o("img",{staticClass:"page-header-img w-1/2 md:w-auto h-full mx-auto",class:e.round_img?"rounded-full":"",attrs:{src:e.image}})])],2)])}),[],!1,null,"28cfd809",null);t.a=component.exports},254:function(e,t,o){"use strict";var r={props:{title:String,description:String,label:String,footer_left:String}},n=(o(255),o(23)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"/ flex flex-col / shadow"},[e._t("header"),e._v(" "),o("div",{staticClass:"info-container / relative"},[o("p",{staticClass:"card-type / mb-3"},[e._t("label",[e._v(e._s(e.label))])],2),e._v(" "),o("p",{staticClass:"card-title / mb-1"},[o("b",[e._t("title",[e._v(e._s(e.title))])],2)]),e._v(" "),o("p",{staticClass:"card-description / mb-12"},[e._t("description",[o("div",{domProps:{innerHTML:e._s(e.description)}})])],2),e._v(" "),o("div",{staticClass:"absolute / w-full / flex justify-between items-end / bottom-0 right-0"},[o("p",{staticClass:"card-type / align-bottom "},[o("b",[e._t("footer-left",[e._v("\r\n            "+e._s(e.footer_left)+"\r\n          ")])],2)]),e._v(" "),e._t("footer-right")],2)])],2)}),[],!1,null,"d328d8ac",null);t.a=component.exports},255:function(e,t,o){"use strict";var r=o(249);o.n(r).a},256:function(e,t,o){(t=o(46)(!1)).push([e.i,".about-me-card[data-v-d328d8ac]{background-color:#f7fafc}.info-container[data-v-d328d8ac]{margin:20px;height:100%}.card-type[data-v-d328d8ac]{font-size:12px;color:#a0aec0}",""]),e.exports=t},282:function(e,t,o){var content=o(334);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(47).default)("69ad68cc",content,!0,{sourceMap:!1})},283:function(e,t,o){var content=o(336);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(47).default)("625a306e",content,!0,{sourceMap:!1})},333:function(e,t,o){"use strict";var r=o(282);o.n(r).a},334:function(e,t,o){(t=o(46)(!1)).push([e.i,".project-card[data-v-48fba09b]{background-color:#f7fafc;width:100%;margin-bottom:1.5rem}.project-card[data-v-48fba09b]:last-child{margin-bottom:0}.project-card[data-v-48fba09b]:hover{background-color:#edf2f7}.project-card:hover video[data-v-48fba09b]{filter:brightness(90%)}@media (min-width:1024px){.project-card[data-v-48fba09b]{width:calc(50% - .75rem)}.zero-margin-second-last-child[data-v-48fba09b]:nth-last-child(2){margin-bottom:0}}.info-container[data-v-48fba09b]{margin:20px;flex-grow:1}.project-type[data-v-48fba09b]{font-size:12px;color:#a0aec0}.skills-image[data-v-48fba09b]{height:28px}.skills-image[data-v-48fba09b]:not(:first-child){margin-left:10px}video[data-v-48fba09b]{filter:brightness(100%)}",""]),e.exports=t},335:function(e,t,o){"use strict";var r=o(283);o.n(r).a},336:function(e,t,o){(t=o(46)(!1)).push([e.i,"",""]),e.exports=t},343:function(e,t,o){"use strict";o.r(t);var r={components:{about_me_card:o(254).a},props:{title:String,description:String,project_type:String,year:String,page:String,video:String,video_overlay_image:String,skills_images:Array},data:function(){return{video_overlay:null}},methods:{mouseover:function(e){e.target.play(),this.video_overlay.style.opacity="0"},mouseleave:function(e){e.target.pause(),this.video_overlay.style.opacity="1"}},mounted:function(){this.video_overlay=this.$el.querySelector(".video-overlay")}},n=(o(333),o(23)),l={components:{project_card:Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"project-card / w-9/19",attrs:{target:"_blank",href:e.page.startsWith("http")?e.page:"/projects/"+e.page}},[o("about_me_card",{staticClass:"w-full h-full / flex flex-col / shadow"},[o("div",{staticClass:"video-area",attrs:{slot:"header"},slot:"header"},[o("video",{staticClass:"project-video",attrs:{muted:"",autoplay:"",loop:"",poster:e.video_overlay_image,preload:"none"},domProps:{muted:!0}},[e.video?[o("source",{attrs:{src:e.video+".webm",type:"video/webm"}}),e._v(" "),o("source",{attrs:{src:e.video+".mp4",type:"video/mp4"}})]:e._e()],2)]),e._v(" "),o("template",{slot:"label"},[e._v(e._s(e.project_type))]),e._v(" "),o("template",{slot:"title"},[e._v(e._s(e.title))]),e._v(" "),o("template",{slot:"description"},[e._v(e._s(e.description))]),e._v(" "),o("template",{slot:"footer-left"},[e._v(e._s(e.year))]),e._v(" "),o("div",{staticClass:"relative / flex justify-end",attrs:{slot:"footer-right"},slot:"footer-right"},e._l(e.skills_images,(function(e){return o("img",{staticClass:"skills-image object-scale-down",attrs:{src:"images/software/"+e+".png"}})})),0)],2)],1)}),[],!1,null,"48fba09b",null).exports,page_header:o(253).a},data:function(){return{projects:[{title:"TeamNow",description:"Are your people aware of the progress they’re making? Do they know how other teams are performing? With our gamification platform your people will go on a journey in a fun way while they're making their team stronger and stronger.",project_type:"Freelance project",year:"Jul 2017 - Jun 2018",page:"https://teamnow.nl",video:"videos/teamnow",video_overlay_image:"images/projects/teamnow/1.jpg",skills_images:["unity","c-sharp","dot-net","github-cat","api"]},{title:"Online Gastheer",description:"Online Gastheer is a restaurant reservation system specializing in guest contact. Get optimal occupancy right now, get the most out of your guests and guarantee the safety of your staff.",project_type:"Freelance project",year:"Oct 2019 - Now",page:"https://onlinegastheer.nl",video:"videos/online-gastheer",video_overlay_image:"images/projects/online-gastheer/1.jpg",skills_images:["c-plus-plus","github-cat"]},{title:"Blue Mountain configurator",description:"A coffee corner configurator developed for Blue Mountain. Create your own coffee corner and generate your quotation. Made in Unity.",project_type:"Freelance project",year:"Apr 2019 - May 2019",page:"https://bluemountain.nl/",video:"videos/blue-mountain",video_overlay_image:"images/projects/blue-mountain/1.jpeg",skills_images:["unity","c-sharp","dot-net","github-cat"]},{title:"Shotgo - Remake",description:"Shogo is a multiplayer pogo mayhem first person shooter, play online with others and rise to the top of the score board. Controlled movement is key to winning the game as your momentum can give you an edge over your opponents. Find all kinds of cool weapons troughout the level and spread the mayhem.",project_type:"School project",year:"2019",page:"https://www.youtube.com/watch?v=8TNF94THdHA",video:"videos/shotgo-remake",video_overlay_image:"images/projects/shotgo/shotgo-remake.jpeg",skills_images:["ue4","c-plus-plus","github-cat"]},{title:"Tetracer",description:"Tetracer is a challenging but fun arcade racing game where you need to driver over temporary placed platforms that are being build by your buddy or the AI. The challenge is to move as quickly as possible while not falling of the platforms or hitting an obstacle.",project_type:"School project",year:"2016",page:"https://www.youtube.com/watch?v=FT2Sscp1FdI",video:"videos/tetracer",video_overlay_image:"images/projects/tetracer/1.jpg",skills_images:["unity","c-sharp","dot-net","github-cat","api"]},{title:"Shotgo",description:"Shogo is a multiplayer pogo mayhem first person shooter, play online with others and rise to the top of the score board. Controlled movement is key to winning the game as your momentum can give you an edge over your opponents. Find all kinds of cool weapons troughout the level and spread the mayhem.",project_type:"School project",year:"2016",page:"https://www.youtube.com/watch?v=TlOtTxdSvcc",video:"videos/shotgo",video_overlay_image:"images/projects/shotgo/1.jpg",skills_images:["ue4","c-plus-plus","github-cat"]},{title:"Vrequency Visor",description:"Vrequency Visor is a Virtual Reality stealth game created in Unreal Engine 4, using C++ and UE4's blueprints. You can move around throwing a disk and teleporting to it. The goal, escape the facility without getting spotted by the robots.You can disable the robots by removing their batteries or shooting a stun arrow in the robot.",project_type:"School project",year:"2017",page:"https://www.youtube.com/watch?v=Sv1wraJFtJs",video:"videos/vrequency-visor",video_overlay_image:"images/projects/vrequency-visor/3.jpg",skills_images:["ue4","c-plus-plus","github-cat"]},{title:"The Deep Blue",description:"The Deep Blue is a game created 'from scratch' using our self-created engine in C++. In the game you're diving, finding signs of an ancient civilization which lived on the bottom of the ocean. Your goal: Figure out what happened to this civilization.",project_type:"School project",year:"2017",page:"https://www.youtube.com/watch?v=ZuX1iifRegY",video:"videos/the-deep-blue",video_overlay_image:"images/projects/the-deep-blue/1.jpg",skills_images:["c-plus-plus","github-cat"]}]}}},c=(o(335),Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"projects"}},[o("page_header",{attrs:{image:"/images/undraw/projects.svg"}},[o("template",{slot:"title"},[e._v("Projects")]),e._v(" "),o("template",{slot:"description"},[e._v("\r\n      Here you can find an overview from some of the projects I've worked on over the years.\r\n      The projects are a combination of freelance projects, but also a couple of school projects.\r\n    ")])],2),e._v(" "),o("section",{staticClass:"w-screen-bg bg-indigo-100 / pt-32 pb-32 "},[o("h2",{staticClass:"text-center leading-none / mb-16"},[e._v("Freelance projects")]),e._v(" "),o("div",{staticClass:"project-container / flex flex-wrap justify-between"},e._l(e.projects.filter((function(p){return"Freelance project"===p.project_type})),(function(t){return o("project_card",e._b({key:t.title},"project_card",t,!1))})),1)]),e._v(" "),o("section",{staticClass:"w-screen-bg / pt-32 pb-32 "},[o("h2",{staticClass:"text-center leading-none / mb-16"},[e._v("School projects")]),e._v(" "),o("div",{staticClass:"project-container / flex flex-wrap justify-between"},e._l(e.projects.filter((function(p){return"Freelance project"!==p.project_type})),(function(t){return o("project_card",e._b({key:t.title},"project_card",t,!1))})),1)])],1)}),[],!1,null,"1878de64",null));t.default=c.exports}}]);