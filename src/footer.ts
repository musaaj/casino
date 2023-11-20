import $ from "./selector";


/**
 * user profile avatar
 * @param src {string} - uri of a png, svg or jpg image
 * @returns string
 */
function avatar(src?:string):string{
	return `<img class="w-6 h-6 rounded-full border border-green-500" src="${src != undefined? src : "./img/avatar.png"}" />`;
}


/**
 * Footer for the app
 */
function footer():string{
	return `<div class="h-12 fixed bottom-0 bg-slate-900 w-full p-3">
	    <div class="flex slide">
	      <p class="px-2">${avatar()}<p> <p class="text-green-500">musaaj --> ₦50, 000</p>
			</div>
	  </div>
	`;
}


export default function setFooter():void{
	let app = $("#footer") as HTMLElement;
	app.innerHTML = footer();
}
