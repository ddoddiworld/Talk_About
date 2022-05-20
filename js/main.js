$(document).ready(function () {

  // 슬라이더
  $('.bxslider').bxSlider({
    mode: 'fade',
    slideWidth: 600,
  });

  var tabBtn = $(".tab > .tab-btn > li");
  var tabCont = $(".tab-cont > section");

  // 탭(인기블로그,인기스토리)
  $(tabCont).hide().eq(0).show();

  $(tabBtn).click(function (e) {
    var target = $(this);
    var index = target.index();
    $(tabBtn).removeClass("active");
    $(this).addClass("active");
    $(tabCont).css("display", "none");
    $(tabCont).eq(index).css("display", "block");
  });

  // 사이드 매뉴 탭
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').addClass('active');
    $('.overlay').fadeIn();
  });
  $('#sidebar .xi-close').on('click', function () {
    $('#sidebar').removeClass('active');
    $('.overlay').fadeOut();
  });

})
