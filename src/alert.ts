import $ from "./selector";


function _alert(msg:string):void{
	const app = $("#app") as Element
	const element = document.createElement("div");
	element.className = "fixed top-0 left-0 right-0 bottom-0 z-100 px-12";
	let html = `<div class="relative top-48 p-2 bg-slate-800/50 backdrop-blur rounded text-center flex flex-col justify-center">
	    <p class="text-xl text-white p-2 w-full overflow-hide">${msg}</p>
			<button id="close-btn" class="p-2 text-lg text-white">OK</button>
	  </div`;
		element.innerHTML = html;
		app.appendChild(element);

		let closeBtn = $("#close-btn") as HTMLButtonElement;
		closeBtn.addEventListener("click", ()=>{
						app.removeChild(element);
		});
}

export default _alert;
