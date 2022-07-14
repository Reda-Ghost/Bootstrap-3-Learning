$(document).ready(function () {

  // add class active on navigation bar 
  $('.navbar-nav > li > a').click(function (e) { 
    e.preventDefault();
    $(this).parent().addClass('active').siblings().removeClass('active')
  });

});
