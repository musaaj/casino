import $ from "./selector";
import _alert from "./alert";
import header from "./header";
import footer from "./footer";
import prize from "./prize";
import slotShow from "./slot";
import { getOdds } from "./slot";
import { img, trophies } from "./constants";
import {getLogin, isLogin, login, Login} from "./def"



function getWin([first, second, third]:number[], trophies: number[]): number
{
	return (first == second) && (second == third)? trophies[first] : 0;
}

var screenWidth = window.screen.availWidth;
var screenHeight = window.screen.availHeight;

document.documentElement.style.setProperty("--screen-width", `${screenWidth}px`);
document.documentElement.style.setProperty("--screen-height", `${screenHeight}px`);
let user: Login = getLogin()
var data: number[] = getOdds();
var animate: string = "";
var counter: number = 0;
var balance: number = 1000;
var win: number = 0;
var running: boolean = false;

if (isLogin()){
	balance = user.balance;
	win = user.win;
	balance = 1e4;
}

function setup(items:number[], anim:string): void{
		const html = `
		<div>
		  ${header(balance, win)}
			<div class="flex-row my-4">
			  ${prize(img, trophies)}
			</div>
			<div class="mt-16">
			  ${slotShow(items, anim)}
			</div>
			<div>
			</div>
			<div id="footer" class="relative">${footer()}</div>
		</div>
		`;
	const app = $("#app") as HTMLElement;
	app.innerHTML = html;
}


(function main(): void{
		setup(data, animate);
	
	let btn = $("#btn") as HTMLElement;
	btn.addEventListener("click", ()=>{
		if (balance >= 100){
		  if (!running){
		    animate = "animate"
		    balance -= 100;
				user.balance = balance;
				login(user);
			  running = true;
				main();
			}
		}else{
			_alert("low balance!");
		}
	});

	const item0 = $("#item0") as HTMLElement;
	item0.addEventListener("animationiteration", ()=>{
			if (counter < 100){
	      data = getOdds();
				main();
			}
			else{
				animate = "";
				counter = 0;
				win += getWin(data, trophies);
				user.win = win;
				login(user);
				running = false;
				main()
			}
		counter++;
		});

}());

