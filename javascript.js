//after window is loaded completely 
window.onload = function() {
    //hide the preloader
    document.querySelector(".wrapper").style.display = "none";
}

//contact form validation
function validation() {
    var user = document.getElementById("username").value;
    var gmail = document.getElementById("email").value;
    if (user == "") {
        alert("please fill the username field");
        user.classList.add("alertcss");
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        alert("please fill the username length  3 t0 19");
        return false;
    }

    if (gmail == "") {
        alert("please fill the email field");
        return false;
    }
    if (gmail.indexOf("@") <= 0) {
        alert("please fill the email field");
        return false;
    }
    if ((gmail.charAt(email.length - 4) != ".") && (gmail.charAt(email.length - 2) != ".")) {
        // alert("Invalid Email ID");
        return false;
    }
}

//contact form validation

// open menu function
function openmenu() {
    document.getElementById("navlists").classList.toggle("open-menu");
}
// open menu function

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

// javascript line chart
window.onload = function() {

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Line Chart"
            },
            data: [{
                type: "line",
                indexLabelFontSize: 16,
                dataPoints: [
                    { y: 460 },
                    { y: 400 },
                    { y: 500, indexLabel: "\u2191 highest", markerColor: "red", markerType: "triangle" },
                    { y: 460 },
                    { y: 450 },
                    { y: 500 },
                    { y: 480 },
                    { y: 480 },
                    { y: 410, indexLabel: "\u2193 lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
                    { y: 500 },
                    { y: 480 },
                    { y: 510 }
                ]
            }]
        });
        chart.render();
    }
    // javascript line chart


//jquery code start here
$(document).ready(function() {

    // automatic popUp modal
    setTimeout(function() {
            $('.automatic-popUp').css(
                'opacity', '1');
            console.log("hello shekhar");
        }, 3000)
        //close automatic popUp
    $('.close').click(function() {
        $('.automatic-popUp').css('display', 'none');
    });
    //close automatic popUp
    $('.accept').click(function() {
        $('.automatic-popUp').css('display', 'none');
    });
    // automatic popUp modal

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
    });
    // testimonials slick slider end
    // start waypoint start
    $("#about").waypoint(function(direction) {
        $(".about-right-img").addClass("animate__animated animate__fadeInUp")
        $(".about-details").addClass("animate__animated animate__fadeInLeft")
        $(".about-bg").addClass("animate__animated animate__fadeInRight")
    }, {
        offset: "40%"
    });
    $(".services").waypoint(function(direction) {
        $(".services-item").addClass("animate__animated animate__zoomIn")

    }, {
        offset: "40%"
    });
    $("#chartContainer").waypoint(function(direction) {
        $("#chartContainer").addClass("animate__animated animate__fadeInRight")

    }, {
        offset: "40%"
    });
})