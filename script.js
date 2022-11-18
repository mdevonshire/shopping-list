var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listLength = document.getElementsByTagName("li").length;
var list = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("[x]"));
	li.appendChild(deleteButton);
	ul.appendChild(li);
	listLength = document.getElementsByTagName("li").length;
	initiateListener();
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function initiateListeners(){
	for (var i = 0; i < listLength; i++) {
		listNumber = i;
		list[i].addEventListener("click", markListItem);
	}
}

function markListItem(event){
	console.log(event.srcElement.localName)
	if (event.srcElement.localName === "li"){
		event.target.classList.toggle("done");
	}
	else if (event.srcElement.localName === "button"){
		event.target.parentNode.parentNode.removeChild(event.target.parentNode);
	}
	
}

//This sets up listeners for all the list elements
initiateListeners();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
	




