var minSectionIndex = 1
var maxSectionIndex = 4
var currentSectionIndex = 1
var previousSectionIndex = 1
var currentSection = document.getElementById("section-" + currentSectionIndex)
var previousSection = document.getElementById("section-" + previousSectionIndex)
var motion = ""

function getCurrentSection() {
    // Returns the currently showing section.
    return document.getElementById("section-" + currentSectionIndex);
}

function getPreviousSection() {
    // Returns the previously shown section.
    return document.getElementById("section-" + previousSectionIndex);
}

function removeTransitioningLabel(el) {
    // Removes the transitioning class from the slideshow.
    document.getElementById("slideshow").classList.remove("transitioning")
}

// This handles animation of the different slides.
document.addEventListener("wheel", function (e) {

    // Return if another transition is still running.
    if (document.getElementById("slideshow").classList.contains("transitioning")) {
	return;
    }

    // Remove old transitioning labels.
    currentSection.classList.remove("fading-in-top")
    currentSection.classList.remove("fading-in-bottom")

    previousSectionIndex = currentSectionIndex;

    if (e.deltaY < 0 && currentSectionIndex > minSectionIndex) {
	currentSectionIndex =  previousSectionIndex - 1;
	motion = "up"
    } else if (e.deltaY > 0 && currentSectionIndex < maxSectionIndex) {
	currentSectionIndex += 1;
	motion = "down"
    }
    
    currentSection = getCurrentSection()
    previousSection = getPreviousSection()

    if (previousSection != currentSection) {
	document.getElementById("slideshow").classList.add("transitioning")
	getPreviousSection().style.visibility = "hidden"
	getCurrentSection().style.visibility = "visible"
    } else {
	return;
    }

    // Block this function as long as animations are running.
    currentSection.addEventListener("animationend", removeTransitioningLabel)
    if (motion == "up") {
	currentSection.classList.add("fading-in-top")
    } else if (motion == "down") {
	currentSection.classList.add("fading-in-bottom")
    }

    // Navigation arrows.
    if (currentSectionIndex == minSectionIndex) {
	document.getElementById("up-btn").style.visibility = "hidden"
    } else if (currentSectionIndex == maxSectionIndex) {
	document.getElementById("down-btn").style.visibility = "hidden"
    } else {
	document.getElementById("up-btn").style.visibility = "visible"
	document.getElementById("down-btn").style.visibility = "visible"
    }

    
}, true)
