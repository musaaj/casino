interface Login{
	username?: string;
	firstName?: string;
	lastName?: string;
	balance: number;
	win: number;
}

function getLogin(): Login{
	const login = localStorage.getItem("login");
	return login? JSON.parse(login) as Login : {balance: 0, win: 0};
}

function isLogin(): boolean{
	return localStorage.getItem("login")
	? true : false;
}

function login(credentials: Login):void{
	localStorage.setItem("login", JSON.stringify(credentials));
}

export {getLogin, isLogin, login, Login};
