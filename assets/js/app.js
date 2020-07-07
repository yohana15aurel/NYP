/*

Table of Content :
1. Fixed Navbar
2. Navbar Color
3. Home Modal Tab 
4. Mega Menu
5. List Grid tab

*/

(function (window, $, fx) {
  $(document).ready(function ($) {
    "use strict";



    navbarFixed();
    navbarColor();
    tabHome();
    megaMenu();
    list_grid_news();
    list_grid_feature();
    list_grid_messages();
    list_grid_classroom();

    /*
    
    1. Fixed Navbar
    
    */

    //Navbar
    function navbarFixed() {
      $('[data-toggle=collapse-side]').click(function (e) {
        $('.side-collapse').toggleClass('open');
      });
      $('#close').click(function () {
        $('.side-collapse').toggleClass('open');
      })
      $('.close').click(function () {
        $('.side-collapse').toggleClass('open');
      })
      $(document).scroll(function () {
        var $nav = $(".navbar-static-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
      var expand = $('#expandMenu');
      var expandMenu = $('.navbar-mobile_detail')
      expand.click(function () {
        expandMenu.toggle()
      })
    }

    /*
    
    2. Navbar Color
    
    */

    //change logo navbar 
    function navbarColor() {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
          $('.navbar-static-top').css("background-color", "#fff");
          $('.navbar-bottom').css("background-color", "#1e4590");

          $('.navbar-bottom').css("display", "flex");
          $('.navbar-bottom').css("justify-content", "center");
          $('.hover-1-home').css("color", "#000");
          $('.hover-2-home').css("color", "#fff");
          $('.navbar-static-top .navbar-brand img').attr('src', 'assets/images/NYP-Logo.png');
        }
        else {
          $('.navbar-static-top').css("background-color", "transparent");
          $('.navbar-bottom').css("background-color", "transparent");
          $('.hover-1-home').css("color", "#fff");
          $('.navbar .navbar-brand img').attr('src', 'assets/images/NYP-Logo-white.png');
        }
      });
    }

    /*
    
    3. Home Modal Tab
    
    */
    //tab home
    function tabHome() {
      $('#btn-1').on('click', function () {
        var tabTarget = $(this).data('tab');
        $('#findCourse').modal('show');
        $('.nav-tabs a[href="#' + tabTarget + '"]').tab('show');
      });
      $('#btn-2').on('click', function () {
        var tabTarget = $(this).data('tab');
        $('#findCourse').modal('show');
        $('.nav-tabs a[href="#' + tabTarget + '"]').tab('show');
      });

      $('#btn-3').on('click', function () {
        var tabTarget = $(this).data('tab');
        $('#findCourse').modal('show');
        $('.nav-tabs a[href="#' + tabTarget + '"]').tab('show');
      });

      $('#btn-4').on('click', function () {
        var tabTarget = $(this).data('tab');
        $('#findCourse').modal('show');
        $('.nav-tabs a[href="#' + tabTarget + '"]').tab('show');
      });

      $('#btn-5').on('click', function () {
        var tabTarget = $(this).data('tab');
        $('#findCourse').modal('show');
        $('.nav-tabs a[href="#' + tabTarget + '"]').tab('show');
      });
    }

    /*
    
    4. Mega Menu
    
    */
    function megaMenu() {
      $(".dropdown").hover(
        function () {
          $('.dropdown-menu', this).fadeIn(300);
        },
        function () {
          $('.dropdown-menu', this).fadeOut(300);
        });
    }

    /*
    
    5. List Grid Tab
    
    */
    function list_grid_news() {
      $('#list').click(function (event) {
        event.preventDefault();
        $('#news_event .item').addClass('list-group-item');
        $('.glyphicon-th-list').css("color", "#1E4590");
        $('.glyphicon-th').css("color", "#e6e6e5");
      });
      $('#grid').click(function (event) {
        event.preventDefault();
        $('#news_event .item').removeClass('list-group-item');
        $('#news_event .item').addClass('grid-group-item');
        $('.glyphicon-th').css("color", "#1E4590");
        $('.glyphicon-th-list').css("color", "#e6e6e5");
      });

    }

    function list_grid_feature() {
      $('#list').click(function (event) {
        event.preventDefault();
        $('#feature .item').addClass('list-group-item');
      });
      $('#grid').click(function (event) {
        event.preventDefault();
        $('#feature .item').removeClass('list-group-item');
        $('#feature .item').addClass('grid-group-item');
      });
    }

    function list_grid_messages() {
      $('#list').click(function (event) {
        event.preventDefault();
        $('#messages .item').addClass('list-group-item');
      });
      $('#grid').click(function (event) {
        event.preventDefault();
        $('#messages .item').removeClass('list-group-item');
        $('#messages .item').addClass('grid-group-item');
      });
    }

    function list_grid_classroom() {
      $('#list').click(function (event) {
        event.preventDefault();
        $('#classroom .item').addClass('list-group-item');
      });
      $('#grid').click(function (event) {
        event.preventDefault();
        $('#classroom .item').removeClass('list-group-item');
        $('#classroom .item').addClass('grid-group-item');
      });
    }





    $('.continue').click(function () {
      $('.nav-tabs > .active').next('li').find('button').trigger('click');
    });




  });
}(window, jQuery, FXM));