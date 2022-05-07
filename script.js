$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })
});
// typing animation script
var typed = new Typed(".typing", {
strings: ["Youtuber","Developer","Computer Engineer"],
typeSpeed:100,
backSpeed:60,
loop:true,
});
// typing animation script
var typed = new Typed(".typing-2", {
    strings: ["Youtuber","Developer","Singer","Engineer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true,
    });