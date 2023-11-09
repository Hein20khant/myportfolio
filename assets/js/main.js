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
     * annimation typed
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

    /**
     * Back to top button
     */
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
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        }, { rootMargin: "-50px" })
    })
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
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
let mode_btn = document.getElementById('light_dark_toggle');
var icon = document.getElementById('mode_group');

mode_btn.onclick = function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('light');
        icon.classList.add('dark');
    } else {
        icon.classList.remove('dark');
        icon.classList.add('light');
    }
}
var nav_mobile = document.getElementById('mobile_nav_open');
var close_btn = document.getElementById('mobile_nav_close');
var header = document.getElementById('header');
nav_mobile.onclick = function() {
    header.style.left = "0px";
    nav_mobile.style.display = "none";
    close_btn.style.display = "inline"
}
close_btn.onclick = function() {
    header.style.left = "-300px";
    close_btn.style.display = "none";
    nav_mobile.style.display = "inline";
}