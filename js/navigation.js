var adminURL = "";
if(isproduction)
{
  adminURL =  "http://www.wohlig.co.in/demo/index.php";
}
else {
  adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
  var navigation = [{
    name: "Jewellery",
    classis: "active",
    anchor: "home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      anchor: "home"
    }]
  },
  {
    name: "About",
    classis: "active",
    anchor: "newTab"
  },
  {
    name: "Shop",
    classis: "active",
    anchor: "newTab"
  },
  {
    name: "Custom",
    classis: "active",
    anchor: "newTab"
  },
  {
    name: "Retailers",
    classis: "active",
    anchor: "newTab"
  },
  {
    name: "Journal",
    classis: "active",
    anchor: "newTab"
  },
  {
    name: "Contact",
    classis: "active",
    anchor: "newTab"
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

  };
});
