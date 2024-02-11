console.log("Your index.js file is loaded correctly!");

$(document).ready(function() {
  var learnMoreBtn = $("#learnMoreBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  $(window).scroll(function() {
    scrollFunction();
  });

  function scrollFunction() {
    if ($(document).scrollTop() > 20) {
      mybutton.css("display", "block");
    } else {
      mybutton.css("display", "none");
    }
  }

  
  'downloadResume'.click(function() {
    $("body,html").animate({ scrollTop: 0 }, "slow");
  });
});


function myFunction() {
  document.getElementById("demo").innerHTML = "Thank you for downloading my resume!";
}
