(function(e){e.fn.onScreen=function(t){var n=e.extend({container:window,direction:"vertical",toggleClass:null,doIn:null,doOut:null,tolerance:0,throttle:null,lazyAttr:null,lazyPlaceholder:"data:image/gif;base64,R0lGODlhEAAFAIAAAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQAAACwAAAAAEAAFAAACCIyPqcvtD00BACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIQTGCiywKPmjxUNhjtMlWrAgAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFEiyUf6wCEBHvLPemIHdTzCMDegkACH5BAkJAAYALAAAAAAQAAUAgoSChLS2tIyKjLy+vIyOjMTCxP///wAAAAMUWCQ09jAaAiqQmFosdeXRUAkBCCUAIfkECQkACAAsAAAAABAABQCDvLq83N7c3Nrc9Pb0xMLE/P78vL68/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCEwkCnKGbegvQn4RjGMx8F1HxBi5Il4oEiap2DcVYlpZwQAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCDwnCGHEcIMxPn4VAGMQNBx0zQEZHkiYNiap5RaBKG9EQAh+QQJCQAJACwAAAAAEAAFAIOEgoTMysyMjozs6uyUlpSMiozMzsyUkpTs7uz///8AAAAAAAAAAAAAAAAAAAAAAAAEGTBJiYgoBM09DfhAwHEeKI4dGKLTIHzCwEUAIfkECQkACAAsAAAAABAABQCDvLq85OLkxMLE9Pb0vL685ObkxMbE/Pr8////AAAAAAAAAAAAAAAAAAAAAAAAAAAABCAQSTmMEGaco8+UBSACwWBqHxKOJYd+q1iaXFoRRMbtEQAh+QQJCQAIACwAAAAAEAAFAIO8urzc3tzc2tz09vTEwsT8/vy8vrz8+vz///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAEIhBJWc6wJZAtJh3gcRBAaXiIZV2kiRbgNZbA6VXiUAhGL0QAIfkECQkABgAsAAAAABAABQCChIKEtLa0jIqMvL68jI6MxMLE////AAAAAxRoumxFgoxGCbiANos145e3DJcQJAAh+QQJCQAFACwAAAAAEAAFAIK8urzc2tzEwsS8vrzc3tz///8AAAAAAAADFFi6XCQwtCmAHbPVm9kGWKcEQxkkACH5BAkJAAIALAAAAAAQAAUAgfT29Pz6/P///wAAAAIRlI8SAZsPYnuJMUCRnNksWwAAOw==",debug:!1},t);return this.each(function(){function g(){return n.container==window?v<l-n.tolerance&&r<v+p-n.tolerance&&!t:v<u-n.tolerance&&v>-p+n.tolerance&&!t}function y(){return n.container==window?v+p<r&&t||v>l&&t:v>u-n.tolerance&&t||-p+n.tolerance>v&&t}function b(){return n.container==window?m<h-n.tolerance&&i<m+d-n.tolerance&&!t:m<f-n.tolerance&&m>-d+n.tolerance&&!t}function w(){return n.container==window?m+d<i&&t||m>h&&t:m>f-n.tolerance&&t||-d+n.tolerance>m&&t}function E(){if(n.direction=="vertical")return g();if(n.direction=="horizontal")return b()}function S(){if(n.direction=="vertical")return y();if(n.direction=="horizontal")return w()}function x(e,t,n){var r,i,s;return function(){i=arguments,s=!0,n=n||this,r||function(){s?(e.apply(n,i),s=!1,r=setTimeout(arguments.callee,t)):r=null}()}}function T(){n.container!=window&&e(n.container).css("position")=="static"&&e(n.container).css("position","relative"),o=e(n.container),u=o.height(),f=o.width(),l=o.scrollTop()+u,h=o.scrollLeft()+f,p=s.outerHeight(!0),d=s.outerWidth(!0),n.container==window?(v=s.offset().top,m=s.offset().left):(v=s.position().top,m=s.position().left),r=o.scrollTop(),i=o.scrollLeft(),n.debug&&(console.log("Container: "+n.container+"\nWidth: "+u+"\nHeight: "+f+"\nBottom: "+l+"\nRight: "+h),console.log("Matched element: "+(typeof s.attr("class")!="undefined"?s.prop("tagName").toLowerCase()+"."+s.attr("class"):s.prop("tagName").toLowerCase())+"\nLeft: "+m+"\nTop: "+v+"\nWidth: "+d+"\nHeight: "+p)),E()?(n.toggleClass&&s.addClass(n.toggleClass),typeof n.doIn=="function"&&n.doIn.call(s[0]),n.lazyAttr&&s.prop("tagName")==="IMG"&&(lazyImg=s.attr(n.lazyAttr),s.css({background:"url("+n.lazyPlaceholder+") center center no-repeat","min-height":"5px","min-width":"16px"}),s.prop("src",lazyImg)),t=!0):S()&&(n.toggleClass&&s.removeClass(n.toggleClass),typeof n.doOut=="function"&&n.doOut.call(s[0]),t=!1)}var t=!1,r,i,s=e(this),o,u,f,l,h,p,d,v,m;T(),T=n.throttle?x(T,n.throttle):T,e(n.container).on("scroll",T).on("resize",T).on("load",T),typeof module=="object"&&module&&typeof module.exports=="object"?module.exports=jQuery:typeof define=="function"&&define.amd&&define("jquery-onscreen",[],function(){return jQuery})})}})(jQuery);