/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery","./jquery.validate"],t):t(jQuery)}(function(t){!function(){function e(t){return t.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g,"")}t.validator.addMethod("maxWords",function(t,a,d){return this.optional(a)||e(t).match(/\b\w+\b/g).length<=d},t.validator.format("Please enter {0} words or less.")),t.validator.addMethod("minWords",function(t,a,d){return this.optional(a)||e(t).match(/\b\w+\b/g).length>=d},t.validator.format("Please enter at least {0} words.")),t.validator.addMethod("rangeWords",function(t,a,d){var i=e(t),n=/\b\w+\b/g;return this.optional(a)||i.match(n).length>=d[0]&&i.match(n).length<=d[1]},t.validator.format("Please enter between {0} and {1} words."))}(),t.validator.addMethod("accept",function(e,a,d){var i,n="string"==typeof d?d.replace(/\s/g,"").replace(/,/g,"|"):"image/*",r=this.optional(a);if(r)return r;if("file"===t(a).attr("type")&&(n=n.replace(/\*/g,".*"),a.files&&a.files.length))for(i=0;i<a.files.length;i++)if(!a.files[i].type.match(new RegExp(".?("+n+")$","i")))return!1;return!0},t.validator.format("Please enter a value with a valid mimetype.")),t.validator.addMethod("alphanumeric",function(t,e){return this.optional(e)||/^\w+$/i.test(t)},"Letters, numbers, and underscores only please"),t.validator.addMethod("bankaccountNL",function(t,e){if(this.optional(e))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t))return!1;var a,d=t.replace(/ /g,""),i=0,n=d.length;for(a=0;a<n;a++)i+=(n-a)*d.substring(a,a+1);return i%11==0},"Please specify a valid bank account number"),t.validator.addMethod("bankorgiroaccountNL",function(e,a){return this.optional(a)||t.validator.methods.bankaccountNL.call(this,e,a)||t.validator.methods.giroaccountNL.call(this,e,a)},"Please specify a valid bank or giro account number"),t.validator.addMethod("bic",function(t,e){return this.optional(e)||/^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(t)},"Please specify a valid BIC code"),t.validator.addMethod("cifES",function(t){"use strict";var e,a,d,i,n,r,o=[];if(!(t=t.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)"))return!1;for(d=0;d<9;d++)o[d]=parseInt(t.charAt(d),10);for(a=o[2]+o[4]+o[6],i=1;i<8;i+=2)r=(n=(2*o[i]).toString()).charAt(1),a+=parseInt(n.charAt(0),10)+(""===r?0:parseInt(r,10));return!!/^[ABCDEFGHJNPQRSUVW]{1}/.test(t)&&(a+="",t+=e=10-parseInt(a.charAt(a.length-1),10),o[8].toString()===String.fromCharCode(64+e)||o[8].toString()===t.charAt(t.length-1))},"Please specify a valid CIF number."),t.validator.addMethod("creditcardtypes",function(t,e,a){if(/[^0-9\-]+/.test(t))return!1;t=t.replace(/\D/g,"");var d=0;return a.mastercard&&(d|=1),a.visa&&(d|=2),a.amex&&(d|=4),a.dinersclub&&(d|=8),a.enroute&&(d|=16),a.discover&&(d|=32),a.jcb&&(d|=64),a.unknown&&(d|=128),a.all&&(d=255),1&d&&/^(5[12345])/.test(t)?16===t.length:2&d&&/^(4)/.test(t)?16===t.length:4&d&&/^(3[47])/.test(t)?15===t.length:8&d&&/^(3(0[012345]|[68]))/.test(t)?14===t.length:16&d&&/^(2(014|149))/.test(t)?15===t.length:32&d&&/^(6011)/.test(t)?16===t.length:64&d&&/^(3)/.test(t)?16===t.length:64&d&&/^(2131|1800)/.test(t)?15===t.length:!!(128&d)},"Please enter a valid credit card number."),t.validator.addMethod("currency",function(t,e,a){var d,i="string"==typeof a,n=i?a:a[0],r=!!i||a[1];return n=n.replace(/,/g,""),d="^["+(n=r?n+"]":n+"]?")+"([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$",d=new RegExp(d),this.optional(e)||d.test(t)},"Please specify a valid currency"),t.validator.addMethod("dateFA",function(t,e){return this.optional(e)||/^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(t)},"Please enter a correct date"),t.validator.addMethod("dateITA",function(t,e){var a,d,i,n,r,o=!1;return/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(t)?(a=t.split("/"),d=parseInt(a[0],10),i=parseInt(a[1],10),n=parseInt(a[2],10),o=(r=new Date(n,i-1,d,12,0,0,0)).getUTCFullYear()===n&&r.getUTCMonth()===i-1&&r.getUTCDate()===d):o=!1,this.optional(e)||o},"Please enter a correct date"),t.validator.addMethod("dateNL",function(t,e){return this.optional(e)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(t)},"Please enter a correct date"),t.validator.addMethod("extension",function(t,e,a){return a="string"==typeof a?a.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(e)||t.match(new RegExp(".("+a+")$","i"))},t.validator.format("Please enter a value with a valid extension.")),t.validator.addMethod("giroaccountNL",function(t,e){return this.optional(e)||/^[0-9]{1,7}$/.test(t)},"Please specify a valid giro account number"),t.validator.addMethod("iban",function(t,e){if(this.optional(e))return!0;var a,d,i,n,r,o=t.replace(/ /g,"").toUpperCase(),s="",l=!0,u="";if(!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(o))return!1;if(void 0!==(i={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"}[o.substring(0,2)])&&!new RegExp("^[A-Z]{2}\\d{2}"+i+"$","").test(o))return!1;for(a=o.substring(4,o.length)+o.substring(0,4),n=0;n<a.length;n++)"0"!==(d=a.charAt(n))&&(l=!1),l||(s+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(d));for(r=0;r<s.length;r++)u=(""+u+s.charAt(r))%97;return 1===u},"Please specify a valid IBAN"),t.validator.addMethod("integer",function(t,e){return this.optional(e)||/^-?\d+$/.test(t)},"A positive or negative non-decimal number please"),t.validator.addMethod("ipv4",function(t,e){return this.optional(e)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(t)},"Please enter a valid IP v4 address."),t.validator.addMethod("ipv6",function(t,e){return this.optional(e)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(t)},"Please enter a valid IP v6 address."),t.validator.addMethod("lettersonly",function(t,e){return this.optional(e)||/^[a-z]+$/i.test(t)},"Letters only please"),t.validator.addMethod("letterswithbasicpunc",function(t,e){return this.optional(e)||/^[a-z\-.,()'"\s]+$/i.test(t)},"Letters or punctuation only please"),t.validator.addMethod("mobileNL",function(t,e){return this.optional(e)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(t)},"Please specify a valid mobile number"),t.validator.addMethod("mobileUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),t.validator.addMethod("nieES",function(t){"use strict";return!!(t=t.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")&&(/^[T]{1}/.test(t)?t[8]===/^[T]{1}[A-Z0-9]{8}$/.test(t):!!/^[XYZ]{1}/.test(t)&&t[8]==="TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.replace("X","0").replace("Y","1").replace("Z","2").substring(0,8)%23))},"Please specify a valid NIE number."),t.validator.addMethod("nifES",function(t){"use strict";return!!(t=t.toUpperCase()).match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")&&(/^[0-9]{8}[A-Z]{1}$/.test(t)?"TRWAGMYFPDXBNJZSQVHLCKE".charAt(t.substring(8,0)%23)===t.charAt(8):!!/^[KLM]{1}/.test(t)&&t[8]===String.fromCharCode(64))},"Please specify a valid NIF number."),t.validator.addMethod("nowhitespace",function(t,e){return this.optional(e)||/^\S+$/i.test(t)},"No white space please"),t.validator.addMethod("pattern",function(t,e,a){return!!this.optional(e)||("string"==typeof a&&(a=new RegExp("^(?:"+a+")$")),a.test(t))},"Invalid format."),t.validator.addMethod("phoneNL",function(t,e){return this.optional(e)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(t)},"Please specify a valid phone number."),t.validator.addMethod("phoneUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),t.validator.addMethod("phoneUS",function(t,e){return t=t.replace(/\s+/g,""),this.optional(e)||t.length>9&&t.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/)},"Please specify a valid phone number"),t.validator.addMethod("phonesUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),t.validator.addMethod("postalCodeCA",function(t,e){return this.optional(e)||/^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(t)},"Please specify a valid postal code"),t.validator.addMethod("postalcodeBR",function(t,e){return this.optional(e)||/^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(t)},"Informe um CEP válido."),t.validator.addMethod("postalcodeIT",function(t,e){return this.optional(e)||/^\d{5}$/.test(t)},"Please specify a valid postal code"),t.validator.addMethod("postalcodeNL",function(t,e){return this.optional(e)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t)},"Please specify a valid postal code"),t.validator.addMethod("postcodeUK",function(t,e){return this.optional(e)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(t)},"Please specify a valid UK postcode"),t.validator.addMethod("require_from_group",function(e,a,d){var i=t(d[1],a.form),n=i.eq(0),r=n.data("valid_req_grp")?n.data("valid_req_grp"):t.extend({},this),o=i.filter(function(){return r.elementValue(this)}).length>=d[0];return n.data("valid_req_grp",r),t(a).data("being_validated")||(i.data("being_validated",!0),i.each(function(){r.element(this)}),i.data("being_validated",!1)),o},t.validator.format("Please fill at least {0} of these fields.")),t.validator.addMethod("skip_or_fill_minimum",function(e,a,d){var i=t(d[1],a.form),n=i.eq(0),r=n.data("valid_skip")?n.data("valid_skip"):t.extend({},this),o=i.filter(function(){return r.elementValue(this)}).length,s=0===o||o>=d[0];return n.data("valid_skip",r),t(a).data("being_validated")||(i.data("being_validated",!0),i.each(function(){r.element(this)}),i.data("being_validated",!1)),s},t.validator.format("Please either skip these fields or fill at least {0} of them.")),jQuery.validator.addMethod("stateUS",function(t,e,a){var d,i=void 0===a,n=!i&&void 0!==a.caseSensitive&&a.caseSensitive,r=!i&&void 0!==a.includeTerritories&&a.includeTerritories,o=!i&&void 0!==a.includeMilitary&&a.includeMilitary;return d=r||o?r&&o?"^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":r?"^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$":"^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$":"^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$",d=n?new RegExp(d):new RegExp(d,"i"),this.optional(e)||d.test(t)},"Please specify a valid state"),t.validator.addMethod("strippedminlength",function(e,a,d){return t(e).text().length>=d},t.validator.format("Please enter at least {0} characters")),t.validator.addMethod("time",function(t,e){return this.optional(e)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(t)},"Please enter a valid time, between 00:00 and 23:59"),t.validator.addMethod("time12h",function(t,e){return this.optional(e)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t)},"Please enter a valid time in 12-hour am/pm format"),t.validator.addMethod("url2",function(t,e){return this.optional(e)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},t.validator.messages.url),t.validator.addMethod("vinUS",function(t){if(17!==t.length)return!1;var e,a,d,i,n,r,o=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],s=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],l=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],u=0;for(e=0;e<17;e++){if(i=l[e],d=t.slice(e,e+1),8===e&&(r=d),isNaN(d)){for(a=0;a<o.length;a++)if(d.toUpperCase()===o[a]){d=s[a],d*=i,isNaN(r)&&8===a&&(r=o[a]);break}}else d*=i;u+=d}return 10===(n=u%11)&&(n="X"),n===r},"The specified vehicle identification number (VIN) is invalid."),t.validator.addMethod("zipcodeUS",function(t,e){return this.optional(e)||/^\d{5}(-\d{4})?$/.test(t)},"The specified US ZIP Code is invalid"),t.validator.addMethod("ziprange",function(t,e){return this.optional(e)||/^90[2-5]\d\{2\}-\d{4}$/.test(t)},"Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")});