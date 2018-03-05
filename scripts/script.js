
function hideLogo() {
    var x = document.getElementById("vid");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("logo").style.display = 'none';
    } else {
        x.style.display = "none";
    }
}