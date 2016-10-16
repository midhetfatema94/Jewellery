angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.myInterval = 1200;
  // $(document).ready(function() {
  //   $('#myCarousel').carousel({
  //     interval: 1200,
  //     cycle: true
  //   })
  // });

  // $scope.rotate = function() {
  //   console.log("inside rotate")
  //   $('#myCarousel').ready(function() {
  //       interval: 5
  //   })
  // }

//   $('.nav-carousel').bind({
//   offset:
//   {
//     top: $('#thumbCarousel').height()-$('.nav-carousel').height()
//   }
// });

// $(document).ready( function()
// {
//   var carouselContainer = $('.carousel');
//   var slideInterval = 2500;

//   $('#carousel').carousel({
//     interval:   slideInterval
//   });

//   var clickEvent = false;
//   $('#thumbCarousel').on('click', '.nav-carousel a', function() {
//       clickEvent = true;
//       // $('.nav-carousel li').removeClass('active');
//       $(this).parent().addClass('active');
//   }).on('slid.bs.carousel', function(e)
//   {
//     if(!clickEvent)
//     {
//       var count = $('.nav-carousel').children().length -1;
//       var current = $('.nav-carousel li.active');
//       current.removeClass('active').next().addClass('active');
//       var id = parseInt(current.data('slide-to'));
//       if(count == id)
//       {
//         $('.nav-carousel li').first().addClass('active');
//       }
//     }
//     clickEvent = false;
//   });
// });

// $(document).ready(function()
// {
//   $('.slide1, .slide2, .slide3').hover(function()
//     {
//       $(this).find('.caption').delay(200).slideDown(350);
//     },
//     function()
//     {
//       $(this).find('.caption').delay(200).slideUp(350);
//   });

//   $('.fade1, .fade2').hover(
//       function(){
//         $(this).find('.caption').delay(200).fadeIn(350);
//       },
//       function(){
//         $(this).find('.caption').delay(200).fadeOut(350);
//       }
//   );
// });

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})

.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("about");
  $scope.menutitle = NavigationService.makeactive("About");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})

.controller('ShopCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("shop");
  $scope.menutitle = NavigationService.makeactive("Shop");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})

.controller('CustomCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("custom");
  $scope.menutitle = NavigationService.makeactive("Custom");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("contact");
  $scope.menutitle = NavigationService.makeactive("Contact");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
