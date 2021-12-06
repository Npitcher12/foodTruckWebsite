document.getElementById('foodPopup').style.display = "none";

function showFood(foodImage) {
	const foodPopup = document.getElementById('foodPopup');
	const foodImg = document.getElementById('foodImage');
	foodImg.src = foodImage;
	foodPopup.style.display = "block"
}

function closeFood() {
	const foodPopup = document.getElementById('foodPopup');
	foodPopup.style.display = "none"
}

function increment() {
	const amount = document.getElementById('quantity');
	amount.stepUp();
}

function decrement() {
	const amount = document.getElementById('quantity');
	amount.stepDown();
}