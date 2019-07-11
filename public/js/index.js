$("#scrollbutton").click(function() {
  $("html,body").animate(
    {
      scrollTop: $("#association").offset().top
    },
    "slow"
  );
});
