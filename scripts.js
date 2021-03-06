(function(){
	"use strict";
	window.assert = function(value, desc) {
	    var li = document.createElement("li");

	    li.className = value ? "pass" : "fail";
	    li.appendChild(document.createTextNode(desc));
	    document.getElementById("results").appendChild(li);
	}
})();

window.onload = function() {
	
	function creep() {
		return this;
	}

	assert( creep() === window, "Creeping in the window" );

	var sneak = creep;

	assert( sneak() === window, "Sneaking in the window" );

	var ninja1 = {
		skulk: creep
	}

	assert( ninja1.skulk() === ninja1, "The first ninja is skulking" );

	var ninja2 = {
		skulk: creep
	}

	assert( ninja2.skulk() === ninja2, "The second ninja is skulking" );

}