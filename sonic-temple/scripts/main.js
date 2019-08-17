"use strict";

// Slider

$(".slider").slick({
  dots: !0,
  arrows: !0,
  infinite: !0,
  speed: 500,
  fade: !0,
  adaptiveHeight: !0,
  cssEase: "linear",
  responsive: [{ breakpoint: 768, settings: { dots: !1 } }]
}),

  // Anchor Animation

  $(document).ready(function() {
    $("body").on("click", "a", function(e) {
      e.preventDefault();
      var t = $(this).attr("href"),
        i = $(t).offset().top;
      $("body,html").animate({ scrollTop: i }, 1500);
    });
  }),

  // Form submission

  $(document).ready(function() {
    $("#inquire-form").submit(function(e) {
      e.preventDefault();
      var t = $(this).serialize();
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: t,
        success: function() {
          alert("Your message has been sent!");
        },
        error: function(e) {
          alert("An error occurred while sending the message. Try again!");
        }
      });
    });
  });
