
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  
  var adminUrl = "http://localhost:1337/api/";
  var navigation = [{
    name: "Jewellery",
    classis: "active",
    anchor: "home"
    // subnav: [{
    //   name: "Subnav1",
    //   classis: "active",
    //   anchor: "home"
    // }]
  },
  {
    name: "About",
    classis: "active",
    anchor: "about"
  },
  {
    name: "Shop",
    classis: "active",
    anchor: "shop"
  },
  {
    name: "Blog",
    classis: "active",
    anchor: "blog"
  },
  // {
  //   name: "Retailers",
  //   classis: "active",
  //   anchor: "newTab"
  // },
  // {
  //   name: "Journal",
  //   classis: "active",
  //   anchor: "newTab"
  // },
  {
    name: "Contact",
    classis: "active",
    anchor: "contact"
  }];

  return {
    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },
    getAllProducts: function (callback) {
      // console.log('form data: ', formData);
      $http({
        url: adminUrl + 'product/getAll',
        method: 'POST',
        withCredentials: false,
      }).success(callback);
    },
    getBannerImages: function(callback) {
      $http({
        url: adminUrl + 'banner/getAll',
        method: 'POST',
        withCredentials: false,
      }).success(callback);
    },
    getInstaImages: function(accessToken, callback) {
      console.log("access token is:", accessToken);      
      $http({
        url: 'https://api.instagram.com/v1/users/self/media/recent/?access_token=' + accessToken,
        method: 'GET',
        withCredentials: false,
      }).success(callback);
    }
  };
});
