angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.igClick = function () {
    console.log("clicked on ig icon");
  }

  $(window).load(function() {
    $('.topCarousel').flexslider({
      animation: "slide",
      directionNav: false
    });
  });

  $(window).load(function() {
    $('.igCarousel').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      directionNav: false
    });
  });

  NavigationService.getBannerImages(function(data) {
    if (data.status) {
      console.log("products", data);
      $scope.mySlides = data.response;
    }
    else {
      console.log("error while fetching products");
    }
  });

  var access = "206699945.ee12b30.6d9d9eca03e946398b97ec61b38b9820";
  NavigationService.getInstaImages(access, function(data) {
    if (data.meta.code == 200) {
      console.log("products", data.data);
      $scope.instaImages = data.data;
    }
    else {
      console.log("error while fetching products");
    }
  });

  console.log("insta image:", $scope.instaImages);

  // var feed = new Instafeed({
  //     get: 'tagged',
  //     tagName: 'awesome',
  //     clientId: 'ee12b303600d479188f159f272356aa8',
  //     accessToken: '206699945.ee12b30.6d9d9eca03e946398b97ec61b38b9820'
  // });
  // feed.run();

  // $scope.mySlides = [
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
  //   'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  // ];
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

  NavigationService.getAllProducts(function(data) {
    if (data.status) {
      console.log("products", data);
      $scope.allProducts = data.response;
    }
    else {
      console.log("error while fetching products");
    }
  });

})

.controller('BlogCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("blog");
  $scope.menutitle = NavigationService.makeactive("Blog");
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