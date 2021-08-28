/* Botão scroll top */

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
          $("#scroll-top-btn").css({"display": "block"});
        }
        else {
          $("#scroll-top-btn").css({"display": "none"});
        }
      })
})
  
$(function() {
    $("#scroll-top-btn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      })
})

