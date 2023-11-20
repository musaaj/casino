export default function startBtn():String{
	return `
	  <div class="h-24 w-12">
		  <div class="relative bottom-0 active:-mb-12 relative top-12  text-white w-8 rounded-r-2xl bg-slate-400">
			  <button id="btn" class="block h-16 w-2 bg-black ml-2 relative bottom-6 active:top-6 transition-transform duration-300 rounded-b-full my-transform">
				  <span class="inline-block w-6 h-6 border border-red-500 border-8 bg-orange-600 relative rounded-full -ml-px -top-6 shadow shadow-red-700"></span>
				</button>
			</div>
		</div>
	`
}
