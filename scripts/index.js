let bool = false;

let menuOpen = document.getElementById("open");
let menuClose = document.getElementById("close");
let menu = document.querySelector("#burger-menu");

menuOpen.addEventListener("click", function () {

    if (!bool) {
        menu.style.left = "0";
        bool = true;
    }

    window.onscroll = function () {
        window.scrollTo(0, 0);
    };
});
menuClose.addEventListener("click", function () {

    if (bool) {
        menu.style.left = "100%";
        bool = false;
    }

    window.onscroll = function () {};
});

// ===============================================

let allCarts = document.getElementById("all-carts");

if (allCarts) {

	let allCartsArray = [
		{
			title: "Single room",
			text: "One-person / 12m",
			person: '1',
			img: "../img/main/solo.jpg",
		},
		{
			title: "Standart room",
			text: "Two-person / 18m",
			person: '2',
			img: "../img/main/standart.jpg",
		},
		{
			title: "Classic room with 2 separate beds",
			text: "Two-person / 22m",
			person: '2',
			img: "../img/main/classic.jpg",
		},
		{
			title: "Superior room with bathroom",
			text: "Two-person / 21m",
			person: '2',
			img: "../img/main/bathroom.jpg",
		},
		{
			title: "Deluxe room",
			text: "Two-person / 26m",
			person: '2',
			img: "../img/main/delux.jpg",
		},
		{
			title: "Junior suite room",
			text: "Three-person / 27m",
			person: '3',
			img: "../img/main/polylux.jpg",
		},
		{
			title: "Luxury room",
			text: "Two-person / 26m",
			person: '2',
			img: "../img/main/luxury.jpg",
		},
		{
			title: "Family Room (two adjacent rooms)",
			text: "Five-person / 63m",
			person: '5',
			img: "../img/main/family.jpg",
		},
		{
			title: "Presidential suite with a separate entrance from the street",
			text: "Two-person / 29m",
			person: '2',
			img: "../img/main/resident.jpg",
		},
	];
	
	let choose = document.getElementById("choose");
	let choose2 = document.getElementById("choose2");
	
	let roomChoose = false;
	let personChoose = false;
	choose.innerHTML = "<h5>Room not selected</h5>";
	choose2.innerHTML = "<h5>Room not selected</h5>";
	
	function isClick(title, person) {
		console.log(title + " " + person)
		roomChoose = title
		personChoose = person
	
		choose.innerHTML = `<h5>You have chosen:</h5> <h4>${roomChoose}</h4> `;
		choose2.innerHTML = `<h5>You have chosen:</h5> <h4>${roomChoose}</h4> `;
	}
	
	allCarts.innerHTML = allCartsArray.map( (item) =>
		`
			<div class="cart" onClick="isClick(\'${item.title}'\, \'${item.person}'\)">
				<div class="cart-img">
					<img src=${item.img} alt="img">
				</div>
				<h5>${item.title}</h5>
				<p>${item.text}<sup>2</sup></p>
			</div>
		`
		)
		.join("");
	
	let in_data = document.getElementById("in");
	console.log("in_data: ", in_data);
	let out_data = document.getElementById("out");
	console.log("out_data: ", out_data);
	
	
	let radio = document.querySelector('input[name="radio"]:checked');
	let r;
	
	
	let rates = document.querySelector('input[name="radio"]');
	let rate_value;
	for (let i = 0; i < rates.length; i++) {
		if (rates[i].checked) {
			rate_value = rates[i].value;
			console.log("rate_value: ", rate_value);
		}
	}
	
	reserv.addEventListener("click", function () {
		console.log(1);
		if (roomChoose !== false && personChoose !== false && in_data.value !== "" && out_data.value !== "") {
			alert(`
	You are registered!
	Date-in: ${in_data.value}
	Date-out: ${out_data.value}
	For: ${personChoose} person, with ${radio.value}
	You have chosen: ${roomChoose}`);
		} else {
			alert("You haven't finished registering!");
		}
	});
}


// ========================================

let viewMap = document.getElementById("map");

if(viewMap) {

	viewMap.addEventListener("click", function () {
		alert("Sorry, the map is temporarily not working")
	})
}