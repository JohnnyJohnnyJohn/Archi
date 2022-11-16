window.onscroll = function () {
    // We add pageYOffset for compatibility with IE.
    if (window.scrollY >= 120) {
        document.getElementsByTagName("header")[0].style.backgroundColor = "#ffffff75";
    } else {
        document.getElementsByTagName("header")[0].style.backgroundColor = "transparent"
    }
};