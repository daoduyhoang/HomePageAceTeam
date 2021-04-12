$("#icon-mb").click(function () {
  $(".menu-mobile").slideToggle();
});

$("#menu-genaral > ul > li>a").click(function (e) {
  // Prevent a page reload when a link is pressed
  e.preventDefault();
  var link = $(this).attr("href");
  $("html,body").animate(
    {
      scrollTop: $("#" + link).offset().top,
    },
    "slow"
  );
  if ($(window).width() <= 500) {
    $("#icon-mb").click();
  }
  //   console.log($(window).width());
});

$().ready(function () {
  $("#contact-form").validate({
    rules: {
      user: {
        required: true,
      },
      numberPhone: {
        required: true,
        minlength: 10,
        number: true,
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      user: {
        required: "Vui lòng nhập tên của bạn",
      },
      numberPhone: {
        required: "Vui lòng nhập số điện thoại",
        minlength: "Hãy nhập ít nhất 8 ký tự",
        number: "Sai định dạng",
      },
      email: {
        required: "Vui lòng nhập email",
        email: "Email không đúng định dạng",
      },
    },
    submitHandler: function (form) {
      // alert("okkoko");
      $(".notify").slideDown();
      $("#contact-form")[0].reset();
      setTimeout(() => {
        $(".notify").slideUp();
      }, 2000);
    },
  });
});

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  var service = $("#service").offset().top;
  var reason = $("#reason").offset().top;
  var project = $("#project").offset().top;
  if (scroll >= service - 20 && scroll < reason) {
    // REMOVE OTHER CLASS
    // $("#reason").children("#left-reason,#right-reason");
    // console.log($("#reason .container").children());
    // ADD SECTIONCLASS
    $("#service-left").removeClass("slide-out-left");
    $("#service-left").addClass("slide-in-left");
    $("#service-right").removeClass("slide-out-right");
    $("#service-right").addClass("slide-in-right");
    $("#animate-title-service").removeClass("tracking-out-contract");
    $("#animate-title-service").addClass("tracking-in-expand");
  } else if (scroll >= reason - 20 && scroll < project) {
    $(".left-reason").removeClass("slide-out-left");
    $(".left-reason").addClass("slide-in-left");
    $(".right-reason").removeClass("slide-out-right");
    $(".right-reason").addClass("slide-in-right");
    $("#animation-title-reason").removeClass("tracking-out-contract");
    $("#animation-title-reason").addClass("tracking-in-expand");
  }
}); //missing );
