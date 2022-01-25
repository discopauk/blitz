import "./style/main.scss";

// menu 
document.querySelector(".header__menu").addEventListener("click", () => {
	document.querySelector(".main-menu").classList.toggle("hidden");
	document.querySelector(".burg").classList.toggle("is-open");
});

// slider 
const thumbMain = document.querySelector(".is-main");

document.querySelectorAll(".gallery__item").forEach(elem => {
	elem.addEventListener("click", (e) => {
		let srcMain = e.target.src;
		e.target.src = thumbMain.children[0].src;
		thumbMain.children[0].src = srcMain;
	});
});