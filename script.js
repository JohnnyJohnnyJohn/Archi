if (window.innerWidth < 960){
    document.getElementsByTagName("header")[0].style.backgroundColor = "#EFE8E1"
}

window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.

    if (window.scrollY >= 120) {
        document.getElementsByTagName("header")[0].style.backgroundColor = "#ffffff90";
    } else {
        document.getElementsByTagName("header")[0].style.backgroundColor = "transparent"
    }
};

window.addEventListener('resize', function(event) {
    if (window.innerWidth < 960){
        document.getElementsByTagName("header")[0].style.backgroundColor = "#EFE8E1"
    } else {
        if (window.scrollY >= 120) {
            document.getElementsByTagName("header")[0].style.backgroundColor = "#ffffff90";
        } else {
            document.getElementsByTagName("header")[0].style.backgroundColor = "transparent"
        }
    }
}, true);

document.getElementById("menu").onclick = function(){
    for (let index = 0; index < document.getElementsByTagName("nav").length; index++) {
        document.getElementsByTagName("nav")[index].style.display = "block";
    }
};