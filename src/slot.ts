import startBtn from "./start_btn";
import {img} from "./constants";

function getOdds():number[]{
	const seed = [0,0,0];
	return seed.map(()=>{
			return Math.round(Math.random() * 9);
		});
}

function slotFace(odds:number[], animation:string): string{
	return `
	  <div class="flex py-px overflow-hidden bg-white my-shadow">
		  ${odds.map((item)=>`<img class="h-16 w-16 relative ${animation}" src="img/icons8-${img[item]}-96.png"/>`).join("")}
		</div>
	`
}

function slot(props:number[], anim:string): string{
	return `
	  <div id="item0" class="w-full border border-4 border-orange-500 rounded">
		  ${slotFace(props, anim)} 
		</div>
	`
}


function slotShow(props:number[], anim:string): string{
	return `
	  <div class="flex justify-center w-full">
		  <div class="bg-orange-500 p-2 rounded d3-shadow">
			  <div id="slot" class="p-px bg-orange-500">
			  ${slot(props, anim)}
			  </div>
				<div class="bg-slate-800 h-12 w-full rounded p-px">
				  <div class="text-slate-500  font-lcd text-3xl">000000000000000</div>
					<div class="relative -mt-[36px] top-0 left-0 right-0 bottom-0 text-green-500 text-right z-10 font-lcd text-3xl">${props.join("")}</div>
				</div>
			</div>
			${startBtn()}
		</div>
	`
}
export {getOdds};
export default slotShow;
