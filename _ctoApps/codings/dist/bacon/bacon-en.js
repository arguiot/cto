"use strict";window.addEventListener("load",function(){function e(){this.encrypt=function(e,a){var t="";a=a.replace(/[^A-Za-z]/g,"");for(var r=a.split(""),s=0;s<r.length;s++){switch(r[s]){case"A":case"a":t+="aaaaa ";break;case"B":case"b":t+="aaaab ";break;case"C":case"c":t+="aaaba ";break;case"D":case"d":t+="aaabb ";break;case"E":case"e":t+="aabaa ";break;case"F":case"f":t+="aabab ";break;case"G":case"g":t+="aabba ";break;case"H":case"h":t+="aabbb ";break;case"I":case"i":case"J":case"j":t+="abaaa ";break;case"K":case"k":t+="abaab ";break;case"L":case"l":t+="ababa ";break;case"M":case"m":t+="ababb ";break;case"N":case"n":t+="abbaa ";break;case"O":case"o":t+="abbab ";break;case"P":case"p":t+="abbba ";break;case"Q":case"q":t+="abbbb ";break;case"R":case"r":t+="baaaa ";break;case"S":case"s":t+="baaab ";break;case"T":case"t":t+="baaba ";break;case"U":case"u":case"V":case"v":t+="baabb ";break;case"W":case"w":t+="babaa ";break;case"X":case"x":t+="babab ";break;case"Y":case"y":t+="babba ";break;case"Z":case"z":t+="babbb "}}return t},this.decrypt=function(e,a){var t="";a=a.replace(/[^ABab]/g,""),a=a.toLowerCase();for(var r=this.str_split(a,5),s=0;s<r.length;s++){switch(r[s]){case"aaaaa":t+="A";break;case"aaaab":t+="B";break;case"aaaba":t+="C";break;case"aaabb":t+="D";break;case"aabaa":t+="E";break;case"aabab":t+="F";break;case"aabba":t+="G";break;case"aabbb":t+="H";break;case"abaaa":t+="I";break;case"abaab":t+="K";break;case"ababa":t+="L";break;case"ababb":t+="M";break;case"abbaa":t+="N";break;case"abbab":t+="O";break;case"abbba":t+="P";break;case"abbbb":t+="Q";break;case"baaaa":t+="R";break;case"baaab":t+="S";break;case"baaba":t+="T";break;case"baabb":t+="U";break;case"babaa":t+="W";break;case"babab":t+="X";break;case"babba":t+="Y";break;case"babbb":t+="Z"}}return t},this.str_split=function(e,a){if(e+="",a>0){for(var t=[];e.length>a;)t[t.length]=e.substring(0,a),e=e.substring(a);return t[t.length]=e,t}return!1}}function a(e,a,t){this.algo=e,this.state=a,this.opts=t,this.charToValue=function(e,a){for(var t=a.length,r=0;r<t;++r){var s=a[r].getElementsByClassName("alphabet")[0].value,n=parseInt(a[r].getElementsByClassName("offset")[0].innerText),i=s.indexOf(e);if(i>=0){for(var c=i+n;c<0;)c+=s.length;return c%s.length}}return-1},this.valueToChar=function(e,a){var t=void 0;if(this.opts.$convertToUpcase.prop("checked")&&this.state.$alphabets.length>0)t=this.state.$alphabets[0];else for(var r=this.state.$alphabets.length,s=0;!t&&s<r;++s)this.state.$alphabets[s].getElementsByClassName("alphabet")[0].value.indexOf(a)>=0&&(t=this.state.$alphabets[s]);if(t){var n=t.getElementsByClassName("alphabet")[0].value,i=parseInt(t.getElementsByClassName("offset")[0].innerText);if(n.length){for(e-=i;e<0;)e+=n.length;return e%=n.length,n.substr(e,1)}}return a},this.normalizeKey=function(){var e=[],a=this.state.$key.val(),t=a.length,r=this.state.$keyAlphabets;r||(r=this.state.$alphabets);for(var s=0;s<t;++s){var n=this.charToValue(a[s],r);(n>=0||!this.opts.$skipNonLetterKeys.prop("checked"))&&e.push(n)}return e},this.process=function(e,a){return a?this.algo.encrypt(this.state.$alphabets,e):this.algo.decrypt(this.state.$alphabets,e)}}function t(e){function a(){jQuery("#alphabet-details").modal("hide"),y=null,g=null,k=null}function t(){jQuery("#alphabet-length").text(""+g.val().length)}function s(){g.val(l(jQuery("#compressed-alphabet").val())),t(),r()}function n(e){return function(a){var t=jQuery("#compressed-alphabet");t.val(t.val()+e),s(),a.preventDefault()}}function c(e){if(e.length<3)return e;for(var a="",t=0;t<e.length;)if("-"!==e[t]){var r=e[t].charCodeAt(0),s=t+1;if(s<e.length)if(r===e[s].charCodeAt(0)-1)for(;s<e.length&&r===e[s].charCodeAt(0)-1;)++s,++r;else if(r===e[s].charCodeAt(0)+1)for(;s<e.length&&r===e[s].charCodeAt(0)+1;)++s,--r;if(s-t>=3)a+=e[t]+"-"+e[s-1];else for(var n=t;n<s;++n)a+=e[n];t=s}else a+="---",++t;return a}function l(e){for(var a="",t=0;t<e.length;)if(t+2<e.length&&"-"===e[t+1]){if(e[t].charCodeAt(0)<e[t+2].charCodeAt(0))for(var r=e[t].charCodeAt(0);r<=e[t+2].charCodeAt(0);++r)a+=String.fromCharCode(r);else for(var s=e[t].charCodeAt(0);s>=e[t+2].charCodeAt(0);--s)a+=String.fromCharCode(s);t+=3}else a+=e[t],++t;return a}function o(e){y=e,g=jQuery(".alphabet",e),k=jQuery(".offset",e),jQuery("#compressed-alphabet").val(c(g.val())),jQuery("#keyword-for-alphabet").val(""),jQuery("#offset-for-alphabet").val(k.text()),t(),jQuery("#alphabet-details").modal("show")}function b(e){return function(){var a=jQuery(this),t=a.children("div").first(),s=t.children("input").first();e.push(a.get()[0]),s.on("keyup",r),t.children("span").first().children("button").first().on("click",function(e){o(a),e.preventDefault()})}}function h(a,t,s){var n=jQuery('<div class="form-group"><div class="input-group"><input type="text" class="form-control alphabet"><span class="input-group-btn"><button class="btn btn-default">…</button></span></div><span class="offset">'+s+'</span><div class="alert alert-danger alert-hidden"></div></div>');t.append(n);var i=jQuery("input",n);i.val(a),i.on("keyup",r),jQuery("button",n).on("click",function(e){o(n),e.preventDefault()}),e.$alphabets.push(n.get()[0]),r()}function p(e,a){if(e)for(var t=function(e){for(var a={},t=e.firstChild;t;t=t.nextSibling)for(var r=t.firstChild.firstChild,s=r.value,n=0;n<s.length;++n)a[s[n]]=a[s[n]]?a[s[n]]+1:1;return a}(e),r=e.firstChild;r;r=r.nextSibling){var s=r.firstChild.firstChild,n=s.value,i=r.firstChild.nextSibling.nextSibling,c="";if(0===n.length)c="Alphabet is empty.";else if(a){for(var l="",o=0,b={},h=0;h<n.length;++h)t[n[h]]>1&&(b[n[h]]||(o&&(l+=", "),l+=n[h],b[n[h]]=!0),++o);l.length&&(c=o>1?"characters $1 occur multiple times":"character $1 occurs multiple times",c=c.replace("$1",l))}if(c!==i.innerHTML){for(;i.firstChild;)i.removeChild(i.firstChild);i.appendChild(document.createTextNode(c)),c.length?i.classList.remove("alert-hidden"):i.classList.add("alert-hidden")}}}var u=jQuery("#alphabets"),f=jQuery("#key-alphabets"),v=jQuery("#keyword-for-alphabet");jQuery("#compressed-alphabet").on("keyup",function(){v.val(""),s()}),v.on("keyup",function(){var e=void 0,a="",t=g.val().split("").sort(),r=v.val();for(e=0;e<r.length;++e){var n=t.indexOf(r[e]);n>=0&&(a+=t[n],t.splice(n,1))}for(e=0;e<t.length;++e)a+=t[e];jQuery("#compressed-alphabet").val(c(a)),s()});var d=jQuery("#offset-for-alphabet");d.on("keyup",function(){var e=d.val();e.match(/^[+-]?[0-9]+$/)&&(k.text(e),r())}),jQuery("#alphabet-detail-buttons").children().each(function(){var e=jQuery(this),a=e.prop("id");a&&"add-"===a.substring(0,4)&&e.on("click",n(a.substring(4)))}),jQuery("#reverse-alphabet").on("click",function(e){for(var a="",t=g.val().length-1;t>=0;--t)a+=g.val()[t];jQuery("#compressed-alphabet").val(c(a)),s(),e.preventDefault()}),jQuery("#permute-alphabet").on("click",function(e){for(var a=g.val().split(""),t=a.length-1;t>0;--t){var r=Math.floor(Math.random()*t),n=a[r];a[r]=a[t],a[t]=n}jQuery("#compressed-alphabet").val(c(a.join(""))),s(),e.preventDefault()}),jQuery("#shift-alphabet-left").on("click",function(e){var a=g.val(),t=a.substr(1)+a.substr(0,1);jQuery("#compressed-alphabet").val(c(t)),s(),e.preventDefault()}),jQuery("#shift-alphabet-right").on("click",function(e){var a=g.val(),t=a.substr(a.length-1)+a.substr(0,a.length-1);jQuery("#compressed-alphabet").val(c(t)),s(),e.preventDefault()}),jQuery("#clone-alphabet-to-other-case").on("click",function(e){e.preventDefault();for(var t="",s=g.val(),n=0;n<s.length;++n)s[n]===s[n].toUpperCase()?t+=s[n].toLowerCase():t+=s[n].toUpperCase();h(t,jQuery(y.parent()),parseInt(k.text())),a(),r()}),jQuery("#delete-alphabet").on("click",function(t){e.$alphabets.splice(e.$alphabets.indexOf(g.get()[0]),1),y.remove(),a(),r(),t.preventDefault()});var y=void 0,g=void 0,k=void 0;jQuery(".form-group",u).each(b(e.$alphabets)),f.length&&(e.$keyAlphabets=[],jQuery(".form-group",f).each(b(e.$keyAlphabets))),jQuery("#add-alphabet").on("click",function(e){h("",u),e.preventDefault()});var j=jQuery("#add-key-alphabet");j&&j.on("click",function(e){h("",f),e.preventDefault()}),i=function(){p(u.get()[0],!0),p(f.get()[0],!1)}}function r(){i();var e=c.encrypting?c.$plain:c.$cipher;(c.encrypting?c.$cipher:c.$plain).val(o.process(e.val(),c.encrypting))}var s=new e,n={forEach:function(e,a){for(var t in e)e.hasOwnProperty(t)&&a(e[t],t)}},i=void 0,c=new function(){this.encrypting=!0,this.$plain=jQuery("#plain"),this.$cipher=jQuery("#cipher"),this.$key=jQuery("#key"),this.$direction=jQuery("#direction"),this.$alphabets=[],this.$keyAlphabets=void 0,this.setEncrypting=function(){this.encrypting||(this.$direction.removeClass("flip"),this.$direction.addClass("flop"),this.encrypting=!0)},this.setDecrypting=function(){this.encrypting&&(this.$direction.removeClass("flop"),this.$direction.addClass("flip"),this.encrypting=!1)},this.$direction.on("click",function(e){c.encrypting?c.setDecrypting():c.setEncrypting(),e.preventDefault()}),this.$plain.on("keyup",function(){c.setEncrypting(),r()}),this.$cipher.on("keyup",function(){c.setDecrypting(),r()}),this.$key.on("keyup",r)},l=new function(){this.$deleteWhitespace=jQuery("#deleteWhitespace"),this.$groupBy5s=jQuery("#groupBy5s"),this.$deleteNonLetters=jQuery("#deleteNonLetters"),this.$convertToUpcase=jQuery("#convertToUpcase"),this.$skipNonLetterKeys=jQuery("#skipNonLetterKeys"),n.forEach(this,function(e){e.on("change",r)})},o=new a(s,c,l);this.evokeUpdate=function(){r()},function(){t(c);var e=jQuery("#page");e&&e.append(jQuery("#alphabet-details"))}()});