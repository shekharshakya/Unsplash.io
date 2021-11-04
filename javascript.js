// open menu function
function openmenu() {
    document.getElementById("navlists").classList.toggle("open-menu");
}
// open menu function

//modal box 
//modal box timing function come after timer
setTimeout(function() {
    document.getElementById("cookies-container").classList.add("cookiesContentOpen");
}, 3000);
//modal box timing function come after timer
// close menu function
function closemodal() {
    document.getElementById("cookies-container").classList.add("cookiesContentClose");
}
// close menu function
//modal box 

// scroll top button in right side of the screen start
var mybutton = document.getElementById("myBtn"); //Get the button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// scroll top button in right side of the screen  end 




//jquery code start here
$(document).ready(function() {
    // testimonials slick slider start
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<i class="fas fa-chevron-circle-left left-arrow "></i>',
        nextArrow: '<i class="fas fa-chevron-circle-right  right-arrow"></i>',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }); // testimonials slick slider end
    // start waypoint start

    // $("").waypoint(function(direction) {
    //     $("").addClass("")
    // })
})

// // way point
// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//         notify('I am 20px from the top of the window')
//     },
//     offset: 20
// })