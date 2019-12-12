// prettier-ignore
// Custome theme code

if ($(".clean-gallery").length > 0) {
  baguetteBox.run(".clean-gallery", { animation: "slideIn" });
}
// prettier-ignore
if ($(".clean-product").length > 0) {
  $(window).on("load", function() {
    $(".sp-wrap").smoothproducts();
  });
}
