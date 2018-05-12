var app = angular
      .module("AppHome", [])
      .controller("HomeController", HomeController)
      .factory('jsonFactorie',jsonFactorie);


HomeController.$inject = ["$scope", "$http","$timeout","jsonFactorie"];

function HomeController($scope,$http,$timeout,jsonFactorie){

  var ctrl = this;
  ctrl.acutalProduct = {};
  ctrl.products = [];

  ctrl.init = function() {
    jsonFactorie.getProducts().then(succesCallBack,errorCallBack);

    function succesCallBack(response){
      ctrl.products = response.data;
    }
    function errorCallBack(err){
      console.log(err)
    }
  };

  ctrl.setProduct = function(data){
    ctrl.acutalProduct = data;
  }
  
  $timeout(ctrl.init);
}

// conexion a la url del Json
function jsonFactorie($http) {
  return {
    getProducts: function() {
      return $http.get('https://demo4010019.mockable.io/products')
    }
  }
};