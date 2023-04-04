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
            person: "1",
            img: "../img/main/solo.jpg",
        },
        {
            title: "Standart room",
            text: "Two-person / 18m",
            person: "2",
            img: "../img/main/standart.jpg",
        },
        {
            title: "Classic room with 2 separate beds",
            text: "Two-person / 22m",
            person: "2",
            img: "../img/main/classic.jpg",
        },
        {
            title: "Superior room with bathroom",
            text: "Two-person / 21m",
            person: "2",
            img: "../img/main/bathroom.jpg",
        },
        {
            title: "Deluxe room",
            text: "Two-person / 26m",
            person: "2",
            img: "../img/main/delux.jpg",
        },
        {
            title: "Junior suite room",
            text: "Three-person / 27m",
            person: "3",
            img: "../img/main/polylux.jpg",
        },
        {
            title: "Luxury room",
            text: "Two-person / 26m",
            person: "2",
            img: "../img/main/luxury.jpg",
        },
        {
            title: "Family Room (two adjacent rooms)",
            text: "Five-person / 63m",
            person: "5",
            img: "../img/main/family.jpg",
        },
        {
            title: "Presidential suite with a separate entrance from the street",
            text: "Two-person / 29m",
            person: "2",
            img: "../img/main/resident.jpg",
        },
    ];

    let choose = document.getElementById("choose");
    let choose2 = document.getElementById("choose2");

    let roomChoose = false;
    let personChoose = false;
	
    choose.innerHTML = "<h5>Room not selected</h5>";
    choose2.innerHTML = "<h5>Room not selected</h5>";
	choose.style.margin = "2px 0 0 0";
	choose2.style.margin = "2px 0 0 0";

    function isClick(title, person) {
        console.log(title + " " + person);
        roomChoose = title;
        personChoose = person;

        choose.innerHTML = `<h5>You have chosen:</h5> <h4>${roomChoose}</h4> `;
        choose2.innerHTML = `<h5>You have chosen:</h5> <h4>${roomChoose}</h4> `;
		choose.style.margin = "0px 0 0 0";
		choose2.style.margin = "0px 0 0 0";
    }

    allCarts.innerHTML = allCartsArray
        .map(
            (item) =>
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

    let inDate = document.getElementById("in");
    let outDate = document.getElementById("out");

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

	let reserv = document.getElementById("reserv")
	let form = document.getElementById("form")
	let formClose = document.getElementById("formClose")

	let inDateOutput = document.getElementById("in-output")
	let outDateOutput = document.getElementById("out-output")
	let roomDateOutput = document.getElementById("room-output")
	let personDateOutput = document.getElementById("person-output")

	
    reserv.addEventListener("click", function () {
        console.log(1);

		function remove() {
			reserv.classList.remove("incorrect")
		}

        if (
            roomChoose !== false &&
            personChoose !== false && 
			inDate.value !== "" &&
            outDate.value !== ""
        ) {
			console.log(2)
			form.style.visibility = "visible";
			form.style.opacity = "1";

			window.onscroll = function () {
				window.scrollTo(0, 0);
			};

			inDateOutput.innerHTML = `Date-in: <span>${inDate.value}</span> `;
			outDateOutput.innerHTML = `Date-out: <span>${outDate.value}</span>`;
			roomDateOutput.innerHTML = `You have chosen: <span>${roomChoose}</span>`;
			personDateOutput.innerHTML = `For: <span>${personChoose}</span> person(s), with <span>${radio.value}</span>`;
		} 
		else {
			reserv.classList.add("incorrect")
			setTimeout(remove, 400)
        }
    });

	formClose.addEventListener("click", function() {
		form.style.visibility = "hidden";
		form.style.opacity = "0";

		window.onscroll = function () {};
	})


	form.addEventListener("submit", function() {
		form.style.visibility = "hidden";
		form.style.opacity = "0";

		window.onscroll = function () {};

		function formCloseAlert() {
			alert(1)
		}

		setTimeout(formCloseAlert, 800)
	})
}

// ========================================

let viewMap = document.getElementById("map");

if (viewMap) {
    viewMap.addEventListener("click", function () {
        alert("Sorry, the map is temporarily not working");
    });
}

// ========================================

let track = document.getElementById("track");

if (track) {
    let leftBtn = document.getElementById("left");
    let rightBtn = document.getElementById("right");

    let position = 0;
    let itemWidth;
    if (window.innerWidth > 550) {
        itemWidth = 500;
    }
    if (window.innerWidth < 550 && window.innerWidth > 450) {
        itemWidth = 350;
    }
    if (window.innerWidth < 450) {
        itemWidth = 300;
    }

    leftBtn.addEventListener("click", () => {
        position += itemWidth;
        setPosition();
    });

    rightBtn.addEventListener("click", () => {
        position -= itemWidth;
        setPosition();
    });

    setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
        track.style.transition = `transform .4s ease-in-out`;
        checkButtons();
    };

    checkButtons = () => {
        if (position === 0) {
            leftBtn.setAttribute("disabled", true);
            leftBtn.style.opacity = 0.7;
        } else {
            leftBtn.removeAttribute("disabled");
            leftBtn.style.opacity = 1;
        }
        if (position === -((3 - 1) * itemWidth)) {
            rightBtn.setAttribute("disabled", true);
            rightBtn.style.opacity = 0.7;
        } else {
            rightBtn.removeAttribute("disabled");
            rightBtn.style.opacity = 1;
        }
    };
    checkButtons();
}

// =================================

let allFacilities = document.getElementById("facilities");

let allFacilitiesArray = [
    {
        title: "Restaurants",
        img: "../img/main/restaurant.png",
        time: "7.00 - 11.00",
        text: "",
    },
    {
        title: "Poolside Bar",
        img: "../img/main/bar.png",
        time: "21.00 - 24.00",
        text: "",
    },
    {
        title: "Swimming Pool",
        img: "../img/main/pool.png",
        time: "12.00 - 17.00",
        text: "If you do not like the sea with its fauna, then we suggest visiting the pool with crystal clear water; there is also a shallow pool so that parents remain calm about the safety of their children",
    },
    {
        title: "The Gym",
        img: "../img/main/gym.png",
        time: "12.00 - 17.00",
        text: "",
    },
    {
        title: "Spa",
        img: "../img/main/spa.png",
        time: "12.00 - 19.00",
        text: "",
    },
    {
        title: "Laundry",
        img: "../img/main/laundry.png",
        time: "9.00 - 19.00",
        text: "",
    },
];

if(allFacilities) {

	allFacilities.innerHTML = allFacilitiesArray.map((item) =>
		`
		<div class="cartF">
			<div class="front">
				<img src="${item.img}" alt="">
				<div class="cart-text">
					<p>${item.title}</p>
				</div>
				<span>${item.title}</span>
			</div>
			<div class="back">
				<span></span>
				<div class="time">
					<h3>Work time:</h3>
					<h4>${item.time}</h4>
				</div>
				<p>${item.text}</p>
			</div>
		</div>
		`
		).join("");
}


// ------------------------

let cartF = document.querySelectorAll(".cartF");

let front = document.querySelectorAll(".front");
let back = document.querySelectorAll(".back");

if (cartF) {
    cartF.forEach((cart, index) => {
        let bool = false;

        cart.addEventListener("click", function () {
            bool = !bool;

            front.forEach((fItem, fIndex) => {
                if (index == fIndex) {
                    if (bool) {
                        fItem.style.transform =
                            "perspective(900px) rotateY(-180deg)";
                        fItem.style.zIndex = -10;
                    } else {
                        fItem.style.transform =
                            "perspective(900px) rotateY(0deg)";
                        fItem.style.zIndex = 10;
                    }
                }
            });
            back.forEach((bItem, bIndex) => {
                if (index == bIndex) {
                    if (bool) {
                        bItem.style.transform =
                            "perspective(900px) rotateY(0deg)";
                        bItem.style.zIndex = 10;
                    } else {
                        bItem.style.transform =
                            "perspective(900px) rotateY(180deg)";
                        bItem.style.zIndex = -10;
                    }
                }
            });
        });
    });
}

// ==========================================

document.addEventListener("DOMContentLoaded", function () {
	console.log("dom ok")	

	const animateItems = document.querySelectorAll(".animate")

	function scrollAnimation () {
		let scrollCenter = (window.innerHeight / 1.3) + window.scrollY

		animateItems.forEach(item => {
			let offsetItem = window.pageYOffset + item.getBoundingClientRect().top

			if(scrollCenter >= offsetItem) {
				item.classList.add("animate")
				console.log("add")
			}
			else{
				item.classList.remove("animate")
				console.log("remove")
			}
		})
	}

	scrollAnimation()
	window.addEventListener("scroll", function () {
		scrollAnimation()
	})
})