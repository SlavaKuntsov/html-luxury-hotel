
let bool = false

let menuOpen = document.getElementById("open")
let menuClose = document.getElementById("close")
let menu = document.querySelector("#burger-menu")

menuOpen.addEventListener("click", function () {

	console.log(bool)

	if (!bool) {
		menu.style.left = "0"
		bool = true
	}

	window.onscroll = function () { window.scrollTo(0, 0); };
})
menuClose.addEventListener("click", function () {

	console.log(bool)

	if (bool) {
		menu.style.left = "100%"
		bool = false
	}

	window.onscroll = function () { };
})

