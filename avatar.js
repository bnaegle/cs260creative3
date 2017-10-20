angular.module('app', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {


  $scope.users = [];

  $scope.addNew = function (user) {
    $scope.users.push({ 
      rent: user.rent,
      food: user.food,
	  gas: user.gas,
	  misc: user.misc
	  
    }); /* [1] */
    
    user.name = ''; /* [2] */
    user.url = '';
	user.email = '';
  };
  
  $scope.moneyLeft = 
}
