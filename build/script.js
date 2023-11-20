"use strict";(()=>{function E(e){return e.indexOf("#")!=-1?document.querySelector(e):document.querySelectorAll(e)}var r=E;function S(e){let t=r("#app"),n=document.createElement("div");n.className="fixed top-0 left-0 right-0 bottom-0 z-100 px-12";let i=`<div class="relative top-48 p-2 bg-slate-800/50 backdrop-blur rounded text-center flex flex-col justify-center">
	    <p class="text-xl text-white p-2 w-full overflow-hide">${e}</p>
			<button id="close-btn" class="p-2 text-lg text-white">OK</button>
	  </div`;n.innerHTML=i,t.appendChild(n),r("#close-btn").addEventListener("click",()=>{t.removeChild(n)})}var x=S;function H(e,t){return`
	  <header class="w-full flex text-2xl text-white p-2 flex justify-end bg-black/90 backdrop-blur">
		  <section class="flex w-full justify-start">
			 <h1 class="text-yellow-400 text-bold text-[12pt] w-1/2">Bal. ${e?e.toLocaleString():0}</h1>
			 <h1 class="text-green-500 text-bold text-[12pt] w-1/2">Win ${t?t.toLocaleString():0}</h1>
			</section>
		  <section>
			  <button>\u2630</button>
			</section>
		</header>
	`}var h=H;function M(e){return`<img class="w-6 h-6 rounded-full border border-green-500" src="${e??"./img/avatar.png"}" />`}function k(){return`<div class="h-12 fixed bottom-0 bg-slate-900 w-full p-3">
	    <div class="flex slide">
	      <p class="px-2">${M()}<p> <p class="text-green-500">musaaj --> \u20A650, 000</p>
			</div>
	  </div>
	`}function m(){let e=r("#footer");e.innerHTML=k()}function T(e,t){let n="";for(;t--&&(n+=e););return n}function j(e,t){return`
	  <div class="flex mb-px ml-px bg-slate-900">
		  <div class="px-2">
			  <div class="flex">
				${T(`<img class="h-4 w-4" src="img/icons8-${e}-96.png" />`,3)}
				</div>
			</div>
			<div class="w-16 px-2 text-[10px] text-orange-300 flex flex-col justify-center">
				<span>\u20A6${t.toLocaleString()}</span>
			</div>
		</div>
	`}function O(e,t){return`
		<div class="flex w-full flex-wrap bg-gradient-to-l from-blue-800/25 to-black/20 p-px rounded justify-center">
			${e.map((n,i)=>j(n,t[i])).join("")}
		</div>
	`}var w=O;function u(){return`
	  <div class="h-24 w-12">
		  <div class="relative bottom-0 active:-mb-12 relative top-12  text-white w-8 rounded-r-2xl bg-slate-400">
			  <button id="btn" class="block h-16 w-2 bg-black ml-2 relative bottom-6 active:top-6 transition-transform duration-300 rounded-b-full my-transform">
				  <span class="inline-block w-6 h-6 border border-red-500 border-8 bg-orange-600 relative rounded-full -ml-px -top-6 shadow shadow-red-700"></span>
				</button>
			</div>
		</div>
	`}var a=["pumpkin","pineapple","watermelon","berry","carrot","mango","lemon","bananas","43","seven"],f=[500,1e3,2e3,4e3,6e3,8e3,1e4,12e3,15e3,2e4];function s(){return[0,0,0].map(()=>Math.round(Math.random()*9))}function N(e,t){return`
	  <div class="flex py-px overflow-hidden bg-white my-shadow">
		  ${e.map(n=>`<img class="h-16 w-16 relative ${t}" src="img/icons8-${a[n]}-96.png"/>`).join("")}
		</div>
	`}function B(e,t){return`
	  <div id="item0" class="w-full border border-4 border-orange-500 rounded">
		  ${N(e,t)} 
		</div>
	`}function z(e,t){return`
	  <div class="flex justify-center w-full">
		  <div class="bg-orange-500 p-2 rounded d3-shadow">
			  <div id="slot" class="p-px bg-orange-500">
			  ${B(e,t)}
			  </div>
				<div class="bg-slate-800 h-12 w-full rounded p-px">
				  <div class="text-slate-500  font-lcd text-3xl">000000000000000</div>
					<div class="relative -mt-[36px] top-0 left-0 right-0 bottom-0 text-green-500 text-right z-10 font-lcd text-3xl">${e.join("")}</div>
				</div>
			</div>
			${u()}
		</div>
	`}var L=z;function $(){let e=localStorage.getItem("login");return e?JSON.parse(e):{balance:0,win:0}}function y(){return!!localStorage.getItem("login")}function p(e){localStorage.setItem("login",JSON.stringify(e))}function I([e,t,n],i){return e==t&&t==n?i[e]:0}var W=window.screen.availWidth,A=window.screen.availHeight;document.documentElement.style.setProperty("--screen-width",`${W}px`);document.documentElement.style.setProperty("--screen-height",`${A}px`);var o=$(),d=s(),g="",b=0,l=1e3,c=0,v=!1;y()&&(l=o.balance,c=o.win,l=1e4);function F(e,t){let n=`
		<div>
		  ${h(l,c)}
			<div class="flex-row my-4">
			  ${w(a,f)}
			</div>
			<div class="mt-16">
			  ${L(e,t)}
			</div>
			<div>
			</div>
					`,i=r("#app");i.innerHTML=n}(function e(){F(d,g),r("#btn").addEventListener("click",()=>{l>=100?v||(g="animate",l-=100,o.balance=l,p(o),v=!0,e()):x("low balance!")}),r("#item0").addEventListener("animationiteration",()=>{b<100?(d=s(),e()):(d=s(),g="",b=0,c+=I(d,f),o.win=c,p(o),v=!1,e()),b++})})();m();})();
