function header(balance:number, win:number):string{
	return `
	  <header class="w-full flex text-2xl text-white p-2 flex justify-end bg-black/90 backdrop-blur">
		  <section class="flex w-full justify-start">
			 <h1 class="text-yellow-400 text-bold text-[12pt] w-1/2">Bal. ${balance?balance.toLocaleString() : 0.00}</h1>
			 <h1 class="text-green-500 text-bold text-[12pt] w-1/2">Win ${win? win.toLocaleString() : 0.00}</h1>
			</section>
		  <section>
			  <button>☰</button>
			</section>
		</header>
	`
}

export default header;
