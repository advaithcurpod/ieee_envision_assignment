function show() {
    var x = document.getElementById("hidden-l");
    var y = document.getElementById("hidden-r");
    var plop = document.getElementById("i66");

    if (x.style.display == "none" && y.style.display == "none") {
        x.style.display = "flex";
        y.style.display = "flex";
        plop.style.filter = "invert(70%) sepia(0%) saturate(500%) hue-rotate(0deg) brightness(119%) contrast(119%)";
    }
    else {
        x.style.display = "none";
        y.style.display = "none";
        plop.style.filter = "none";
    }
}
