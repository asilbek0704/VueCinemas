"use strict";(function(){var a=function(a){return document.querySelector(a)},b=a(".header__nav-btn"),c=a(".header__nav-list");b.addEventListener("click",function(){c.classList.add("active")}),document.addEventListener("click",function(a){c.classList.contains("active")&&a.target!=c&&a.target!=b&&"header__nav-link"!=a.target.className&&c.classList.remove("active")});var d=a(".btn[data-action=download]"),f=a(".banner__modal"),g=document.querySelectorAll(".banner__button"),h=a("body");d.addEventListener("click",function(a){a.preventDefault(),f.classList.add("show"),h.classList.add("block-scroll")}),g.forEach(function(a){a.addEventListener("click",function(b){"close"===a.getAttribute("data-action")&&b.preventDefault(),f.classList.remove("show"),h.classList.remove("block-scroll")})});var i=document.querySelector(".banner__content-btn .btn"),j=document.querySelector(".watch"),k=document.querySelector(".watch__overlay"),l=document.querySelector(".icon-close");l.addEventListener("click",function(){j.classList.remove("show"),h.classList.remove("block-scroll")}),i.addEventListener("click",function(a){a.preventDefault(),j.classList.add("show"),h.classList.add("block-scroll")}),k.addEventListener("click",function(){j.classList.remove("show"),h.classList.remove("block-scroll")})})();