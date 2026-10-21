
/* OPEN A POPUP */

function showPopup(title, message) {
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupMessage").textContent = message;

    document.getElementById("popup").showModal();
}

/* CLOSE THE POPUP */

function closePopup() {
    document.getElementById("popup").close();
}

/* CHANGE TEXT ON THE MAIN PAGE */

function changeText() {
    const text = document.getElementById("demoText");

    text.textContent = "The button works! You can replace this message.";
}
