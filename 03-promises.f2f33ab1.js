!function(){function e(e,n){return new Promise((function(o,t){var a=Math.random()>.3;setTimeout((function(){a?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}var n=document.querySelector(".form");n.addEventListener("submit",(function(i){i.preventDefault();for(var c=0;c<a.value;c++)e(c+1,t.value*c+o.value).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}));n.reset()}));var o=n.delay,t=n.step,a=n.amount}();
//# sourceMappingURL=03-promises.f2f33ab1.js.map
