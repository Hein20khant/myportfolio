/**
 * type annimation
 */
(function() {
    // "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * annimation
     */
    const typed = select('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
    let backtotop = select('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('scroll', toggleBacktotop)
        scroll(document, toggleBacktotop)
    }

})()

function contactUs() {
    let U_name = document.querySelector("#User_name").value;
    let U_email = document.querySelector("#User_email").value;
    let M_sub = document.querySelector("#Main_subject").value;
    let C_msm = document.querySelector("#Contact_message").value;
    var params = {
        from_name: document.querySelector("#User_name").value,
        email_id: document.querySelector("#User_email").value,
        Title: document.querySelector("#Main_subject").value,
        message: document.querySelector("#Contact_message").value
    }
    if (U_name != "" && U_email != "" && M_sub != "" && C_msm != "") {
        emailjs.send('service_6suxow9', 'template_dn7jgve', params)
            .then(function(response) {
                alert('SUCCESS!', response.status, response.text);
            }, function(error) {
                alert('FAILED...', error);
            });
    } else {
        alert("try")
    }
}

// document.getElementById("light_btn").addEventListener("click", function() {
//     document.getElementById('header').classList.
// });

// document.getElementById("dark_btn").addEventListener("click", function() {
//     console.log("this is dark btn");
// });