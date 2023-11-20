function repeatStr(str:string, n:number):string{
	let s = "";
	while(n--   && (s += str));
	return s;
}

function prizeItem(item:String, prize: number){
	return `
	  <div class="flex mb-px ml-px bg-slate-900">
		  <div class="px-2">
			  <div class="flex">
				${repeatStr(`<img class="h-4 w-4" src="img/icons8-${item}-96.png" />`, 3)}
				</div>
			</div>
			<div class="w-16 px-2 text-[10px] text-orange-300 flex flex-col justify-center">
				<span>₦${prize.toLocaleString()}</span>
			</div>
		</div>
	`
}

function prize(items: String[], prizes: number[]){
	return `
		<div class="flex w-full flex-wrap bg-gradient-to-l from-blue-800/25 to-black/20 p-px rounded justify-center">
			${items.map((item:String, idx:number)=>prizeItem(item, prizes[idx])).join("")}
		</div>
	`
}

export default prize;
