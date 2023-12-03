var rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function (details) {
  var rectlocation = rect.getBoundingClientRect();
  var insiderect = details.clientX - rectlocation.left;

  if (insiderect < rectlocation.width / 2) {
    var redcolor = gsap.utils.mapRange(
      0,
      rectlocation.width / 2,
      255,
      0,
      insiderect
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redcolor},0,0)`,
      ease: Power4,
    });
  } else {
    var bluecolor = gsap.utils.mapRange(
      rectlocation.width / 2,
      rectlocation.width,
      0,
      255,
      insiderect
    );
    gsap.to(rect, {
      backgroundColor: `rgb(0,0,${bluecolor})`,
      ease: Power4,
    });
  }
});

rect.addEventListener("mouseleave", function () {
  gsap.to(rect, {
    backgroundColor: "white",
  });
});
