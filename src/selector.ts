function $(selector:String):NodeListOf<HTMLElement> | HTMLElement{
	return (selector.indexOf("#") != -1)?
		document.querySelector(selector as keyof(Element)) as HTMLElement
	: document.querySelectorAll(selector as keyof(Element)) as NodeListOf<HTMLElement>;
}

export default $;
