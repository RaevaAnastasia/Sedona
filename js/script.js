var link = document.querySelector(".search-button");
var popup = document.querySelector(".search-dropdown");
var fieldArrival = popup.querySelector(".search-field-arrival");
var form = popup.querySelector(".search-form");
var fieldExit = popup.querySelector(".search-field-exit");
var fieldAdult = popup.querySelector(".search-field-adult");
var fieldChild = popup.querySelector(".search-field-child");

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.toggle("search-dropdown-show");
	if (popup.classList.contains("search-dropdown-error")) {
		popup.classList.remove("search-dropdown-error");
	}
});

form.addEventListener("submit", function(evt) {
	if (!fieldArrival.value || !fieldExit || !fieldAdult || !fieldChild) {
	evt.preventDefault();
	popup.classList.remove("search-dropdown-error");
    popup.offsetWidth = popup.offsetWidth;
	popup.classList.add("search-dropdown-error");}
});