window.onload = fade(), fade2();

function fade() {
	setTimeout(fadein, 250);
};

function fade2() {
	setTimeout(fadein2, 1000);
};

function fadein() {
	document.getElementById("name").classList.add("onload");
}

function fadein2() {
	document.getElementById("subname").classList.add("onload");
}

window.onscroll = function apparition() {
			/*console.log(document.body.scrollTop);*/

	if (document.body.scrollTop > 420 || document.documentElement.scrollTop > 420) {

	    document.getElementById("creation-line").style.opacity=("1");
	    document.getElementById("photo").style.width=("180px");
	    document.getElementById("photo").style.height=("180px");

	}

	if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {

	    document.getElementById("jauge-pr").classList.add("load");
	    document.getElementById("jauge-pr").style.opacity=("1");
	    document.getElementById("jauge-php").classList.add("load");
	    document.getElementById("jauge-php").style.opacity=("1");
	    document.getElementById("jauge-css").classList.add("load");
	    document.getElementById("jauge-css").style.opacity=("1");
	    document.getElementById("jauge-wp").classList.add("load");
	    document.getElementById("jauge-wp").style.opacity=("1");

	}
}

display = true;

function design() {
	if(display) {
		document.getElementById("dev-works").classList.add("disparition");
		document.getElementById("dev-works").classList.add("display-none");
	}
	else {
		document.getElementById("dev-works").classList.remove("disparition");
		document.getElementById("dev-works").classList.remove("display-none");
		document.getElementById("design-works").classList.remove("disparition");
		document.getElementById("design-works").classList.remove("display-none");
	}
	display = !display;
}

function dev() {
	if(display) {
		document.getElementById("design-works").classList.add("disparition");
		document.getElementById("design-works").classList.add("display-none");
	}
	else {
		document.getElementById("dev-works").classList.remove("disparition");
		document.getElementById("dev-works").classList.remove("display-none");
		document.getElementById("design-works").classList.remove("disparition");
		document.getElementById("design-works").classList.remove("display-none");
	}
	display = !display;
}