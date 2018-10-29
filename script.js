function greet() {
window.alert("helo");}

function init() {
	//DOM 2
	document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
	document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";
	//DOM 3
	document.getElementById("identif").innerHTML = "<div><p>Your are doing great!</p></div>";
	//DOM 4
	let image = document.createElement("img");
	document.getElementById("new_element").appendChild(image).src = "flower2.png";
	//DOM 5
	let spans = document.getElementById("rainbow").getElementsByTagName("span");
	let colors = ["red", "orange","yellow","green","blue","purple","pink"];

	for (var i = spans.length - 1; i >= 0; i--) {
		spans[i].style.color = colors[i];
	}

	//DOM 6

	var changeSrc = function(event) {
		if (event.target.src) {
			let filename = event.target.src.replace(/^.*[\\\/]/, '');
			
			if(filename === "flower2.png"){
	 			event.target.src = "flower1.png";
			} else {			
				event.target.src = "flower2.png";
			}
		}
	 };
	
	document.getElementById("event").addEventListener("mouseover", changeSrc);
};
