$(document).ready(function(){var a=0;var b=new Event("imagesLoaded");[].forEach.call(document.querySelectorAll("img.waitUntilLoaded"),function(c){if(c.complete){return}a++;var e=false;var d=setTimeout(function(){e=true;console.log("image timed out: "+c.src);a--;if(a==0){document.dispatchEvent(b)}},5000);c.onload=function(){if(e){return}clearTimeout(d);a--;if(a==0){document.dispatchEvent(b)}}});console.log("images to load:"+a);if(a==0){document.dispatchEvent(b)}});