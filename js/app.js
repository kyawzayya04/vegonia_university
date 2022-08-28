$(document).ready(function(){
    
	// Start Header
		// Start Navbar
	$(".navbuttons").click(function(){
		$(this).toggleClass("crossxs")
	})
		// End Navbar
	// End Header
})


// Start Javascript Area


// Start Student Counter

var getcountervalues = document.querySelectorAll(".countervalues")

getcountervalues.forEach(function(getcountervalue){
	getcountervalue.textContent = 0;
	// console.log(getcountervalue)

	const updatecounter = function(){
		// console.log("hi") 

		const getcttarget = +getcountervalue.getAttribute("data-target");
		// console.log(getcttarget)
		// console.log(typeof getcttarget,getcttarget);
		const getctcontent = +getcountervalue.innerText;
		// console.log(typeof getctcontent)
		const incnumber = getcttarget / 100
		// console.log(incnumber)

		if(getctcontent < getcttarget){
			getcountervalue.innerText = getctcontent+incnumber;
			setTimeout(updatecounter,50)
		}
	}

	updatecounter()

})

// End Student Counter


// End Javascript Area