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
