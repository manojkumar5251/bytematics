angular.module("myapp", ["ui.bootstrap", "dialogs"]);
var app = angular.module("myapp", []);

app.controller("control", function($scope) {
  $scope.show = false;
  $scope.background = "";

  $scope.click = function() {
    $scope.show = !$scope.show;
  };
});
