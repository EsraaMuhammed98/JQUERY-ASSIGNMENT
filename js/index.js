// =============================================
$(".slidebar a").on("click", function () {
  const currentLink = $(this).attr("href");
  const offsetVal = $(currentLink).offset().top;
  console.log(currentLink, offsetVal);
  $("html , body").animate({ scrollTop: offsetVal }, 2000);
});
// =============================================
$("#open").on("click", () => {
  $(".slider-content").animate({ width: "250px" }, 1000);
  $("#open").animate({ marginLeft: "230px" }, 1000);
});

$("#close").on("click", () => {
  $(".slider-content").animate({ width: "0" }, 1000);
  $("#open").animate({ marginLeft: "20px" }, 1000);
});

// ==========================================

$("#duration h3").on("click", function () {
  $("#duration p").not(this).slideUp(500);
  $(this).next().slideToggle(500);
});

// =====================================
let oldDate = new Date("10 october 2021 9:56:00").getTime();

let countDown = setInterval(() => {
  let newDate = new Date().getTime();
  let timeleft = oldDate - newDate;

  $(".day").html(Math.floor(timeleft / (1000 * 60 * 60 * 24)) + " D");
  $(".hour").html(
    Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + " h"
  );
  $(".minute").html(
    Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)) + " m"
  );
  $(".second").html(Math.floor((timeleft % (1000 * 60)) / 1000) + " s");
}, 1000);

// =====================================

$("#message").on("input", function () {
  let currentLenght = this.value.length;
  let maxChar = 100;

  let returnedChar = maxChar - currentLenght;
  $("#charReaminig").html(returnedChar);
  if (returnedChar <= 0) {
    $("#remainingFinsh").removeClass("d-none");
    $("#countChar").addClass("d-none");
  } else {
    $("#remainingFinsh").addClass("d-none");
    $("#countChar").removeClass("d-none");
  }
});
