angular.module('app', [])
  .controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {
  $scope.users = {};
  $scope.addNew = function (user) {
    $scope.users = { 
      income: user.income,
      rent: user.rent,
      food: user.food,
	    gas: user.gas,
      misc: user.misc,
      expenses: user.rent + user.food + user.gas + user.misc
    };
    console.log(users);
    
    user.income = '';
    user.rent = '';
    user.food = '';
    user.gas = '';
    user.misc = '';
  };
}
