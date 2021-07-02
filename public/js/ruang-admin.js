arrBulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var txt = "";
txt += "<p><b>Browser</b>: " + navigator.appCodeName + "</p>";
txt += "<p><b>Cookies</b>: " + navigator.cookieEnabled + "</p>";
txt += "<p><b>Plataform</b>: " + navigator.platform + "</p>";
txt += "<p><b>User Agent</b>: " + navigator.userAgent + "</p>";
var d = new Date();
const tgl = d.getDate();
const bln = d.getMonth();
const thn = d.getFullYear();
const bulan = arrBulan[bln]

document.getElementById("Statistic").innerHTML = txt
document.getElementById("tgl").innerHTML = tgl
document.getElementById("bln").innerHTML = bulan
document.getElementById("thn").innerHTML = thn


function cb(response) {
    document.getElementById('visits').innerText = response.value;
}

var countDate = new Date('May 13 2021 00:00:00').getTime();

function newYear(){
	var now = new Date().getTime();
	gap = countDate - now;

	var detik = 1000;
	var menit = detik * 60;
	var jam = menit * 60;
	var hari = jam * 24;

	var h = Math.floor(gap / (hari));
	var j = Math.floor( (gap % (hari)) / (jam) );
	var m = Math.floor( (gap % (jam))  / (menit) );
	var d = Math.floor( (gap % (menit))  / (detik) );

	document.getElementById('hari').innerText = h;
	document.getElementById('jam').innerText = j;
	document.getElementById('menit').innerText = m;
	document.getElementById('detik').innerText = d;
}

setInterval( function(){
	newYear();
}, 1000);
(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

// Modal Javascript

$(document).ready(function () {
  $("#myBtn").click(function () {
    $('.modal').modal('show');
  });

  $("#modalLong").click(function () {
    $('.modal').modal('show');
  });

  $("#modalScroll").click(function () {
    $('.modal').modal('show');
  });

  $('#modalCenter').click(function () {
    $('.modal').modal('show');
  });
});

// Popover Javascript

$(function () {
  $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
  trigger: 'focus'
});


// Version in Sidebar

var version = document.getElementById('version-ruangadmin');

version.innerHTML = "Version 1.1";