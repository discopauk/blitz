import "./style/main.scss";
const thumbMain = document.querySelector(".is-main"),
	filterBtns = document.querySelectorAll(".filters__btn"),
	apartamentCard = document.querySelectorAll(".apartment__item");

console.log(apartamentCard);
// menu
document.querySelector(".header__menu").addEventListener("click", () => {
	document.querySelector(".main-menu").classList.toggle("hidden");
	document.querySelector(".burg").classList.toggle("is-open");
});

// slider
document.querySelectorAll(".gallery__item").forEach((elem) => {
	elem.addEventListener("click", (e) => {
		let srcMain = e.target.src;
		e.target.src = thumbMain.children[0].src;
		thumbMain.children[0].src = srcMain;
	});
});

// filters
// при нажатии на кнопку брем дату ту и фром, оставляем подходящим карточках дисплей, все убираем
filterBtns.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		console.log(btn);
		console.log(e.target);
		let priceFrom = parseInt(e.target.dataset.from, 10),
			priceTo = parseInt(e.target.dataset.to, 10);
		console.log(typeof priceFrom, typeof priceTo);
		for (let i = 0; i < apartamentCard.length; i++) {
			let card = apartamentCard[i],
				cardPrice = parseInt(card.dataset.price, 10);

			card.classList.add("hidden");
			if (priceFrom < cardPrice < priceTo) {
				card.classList.remove("hidden");
				console.log(cardPrice);
			}
		}
	});
});
