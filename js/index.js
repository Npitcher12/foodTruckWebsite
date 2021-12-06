function photoPopup() {
	const photoPopup = document.getElementById('photoPopup');
	photoPopup.style.display = "block"
}

function photoPopupClose() {
	const photoPopup = document.getElementById('photoPopup');
	photoPopup.style.display = "none"
}

function reviewPopup() {
	const reviewPopup = document.getElementById('reviewPopup');
	reviewPopup.style.display = "block"
}

function reviewPopupClose() {
	const reviewPopup = document.getElementById('reviewPopup');
	reviewPopup.style.display = "none"
}

function checkStars(className) {
	const stars = {
		starNames: []
	}
	for (let i = 1; i <= 5; i += 1) {
		stars.starNames.push("star" + i);
	}
	const star1 = document.getElementsByClassName(stars.starNames[0])[0];
	const star2 = document.getElementsByClassName(stars.starNames[1])[0];
	const star3 = document.getElementsByClassName(stars.starNames[2])[0];
	const star4 = document.getElementsByClassName(stars.starNames[3])[0];
	const star5 = document.getElementsByClassName(stars.starNames[4])[0];
	star1.classList.remove("checked");
	star2.classList.remove("checked");
	star3.classList.remove("checked");
	star4.classList.remove("checked");
	star5.classList.remove("checked");
	if (className === "star1") {
		star1.classList.add("checked");
	}
	else if (className === "star2") {
		star1.classList.add("checked");
		star2.classList.add("checked");
	}
	else if (className === "star3") {
		star1.classList.add("checked");
		star2.classList.add("checked");
		star3.classList.add("checked");
	}
	else if (className === "star4") {
		star1.classList.add("checked");
		star2.classList.add("checked");
		star3.classList.add("checked");
		star4.classList.add("checked");
	}
	else if (className === "star5") {
		star1.classList.add("checked");
		star2.classList.add("checked");
		star3.classList.add("checked");
		star4.classList.add("checked");
		star5.classList.add("checked");
	}
}




