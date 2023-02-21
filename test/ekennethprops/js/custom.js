// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
getYear();

// nav menu 
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}

function closeNav() {
    document.getElementById("myNav").classList.toggle("menu_width2")
    // document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
  }

  //change background color on scroll

  function changeBg(){
    var navBar = document.querySelector('.navbar-nav');
    var scrollValue = window.scrollY;
    if(scrollValue < 150){
        navBar.classList.remove('bgColor')
    }else{
        navBar.classList.add('bgColor')
    }
    // console.log("scrollValue", scrollValue);
  }

  window.addEventListener('scroll', changeBg);