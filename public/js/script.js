$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.narbar').toggleClass('nav-toggle');
});

$(window).on('load scroll', function(){

  $('#menu-bar').removeClass('fa-times');
  $('.narbar').removeClass('nav-toggle');

  //scroll spy

  $('section').each(function(){

    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 200;
    let height = $(this).height();
    let id = $(this).attr('id');

    if(top > offset && top < offset + height){
      $('.narbar ul li a').removeClass('active');
      $('.narbar').find(`[href="#${id}"]`).addClass('active');
    }

  })


});

$('#menu .list .btn').click(function(){
  $(this).addClass('active').siblings().removeClass('active');

  let src = $(this).attr('data-src');

  $('#menu-img').attr('src', src);

});

document.querySelector("#btn").addEventListener("click", function(){
  var name = document.querySelector("#usrname").value;
  var email = document.querySelector("#email").value;
  var phoneNum = document.querySelector("#phoneNum").value;



  if((name === "")||(email === "")||(phoneNum === "")){
    alert("You have missed to fill some field !");
  }else if(phoneNum.length != 10){
      alert("enter valid phone number");
  }else{
    alert("Your order has been placed SUCCESSFULLY !");
  }


});

function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}


});
