export const test01 = {
    template: require('./app.html'),
    controller($scope,$http,$rootScope) {
//varibales


$scope.en = true;
        // your code here
$scope.init = function(){
    $http({
  method: 'GET',
  url: "/test01/data.json"
}).then(function (respnse) {
    
  
  $scope.data = respnse.data;
 $rootScope.data =respnse.data;
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


}

$scope.langSetting = function(a){

    if(a == 0)
      {
  $scope.en = true;

      }

     else  {
    $scope.en = false;
  
        }
     } 

}


}
