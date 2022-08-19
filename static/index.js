$("document").ready(() => {
  $(".menu__category").click(() => {
    $(".menu__hidden").css("display", "block");
    $(".menu__category").css("display", "none");
  });
  $(".back").click(() => {
    $(".menu__category").css("display", "block");
    $(".menu__hidden").css("display", "none");
  });
  $("html, body").fadeIn("slow", function () {
    $("a[href], button[href]").click(function (event) {
      var url = $(this).attr("href");
      event.preventDefault();
      $("html, body").fadeOut("slow", function () {
        window.location = url;
      });
    });
  });
});
