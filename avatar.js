angular.module('app', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {

$scope.items = [];

$scope.add = function () {
  $scope.items.push({});
};

  $scope.users = [];

  $scope.addNew = function (user) {
    $scope.users.push({ 
      name: user.name,
      avatarUrl: user.url,
	  email: user.email
    }); /* [1] */
    
    user.name = ''; /* [2] */
    user.url = '';
	user.email = '';
  };
}
