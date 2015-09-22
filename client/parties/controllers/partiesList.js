angular.module("socially").controller("PartiesListCtrl", ['$scope', '$meteor','$rootScope',
  function($scope, $meteor,$rootScope){
 	$scope.operators=[{name:'Aircel',icon:'aircel.png'},
					   {name:'Airtel',icon:'airtel.png'},
					   {name:'BSNL',icon:'bsnl.png'},
					   {name:'Docomo CDMA',icon:'docomo-cdma.png'},
					   {name:'Docomo GSM',icon:'docomo-gsm.png'},
					   {name:'Idea',icon:'idea.png'},
					   {name:'Tata Indicom',icon:'indicom.png'},
					   {name:'MTNL',icon:'mtnl.png'},
					  {name:'Reliance CDMA',icon:'reliance-cdma.png'},
					  {name:'Reliance GSM',icon:'reliance-gsm.png'},
					  {name:'Uninor',icon:'uninor.png'},
					   {name:'Tata Indicom',icon:'indicom.png'},
					   {name:'Videocon',icon:'videocon.png'},
					  {name:'Vodafone',icon:'vodafone.png'}
					 ]
    $scope.parties = $meteor.collection(Parties).subscribe('parties');
 
    $scope.remove = function(party){
      $scope.parties.splice( $scope.parties.indexOf(party), 1 );
    };
 
    $scope.removeAll = function(){
      $scope.parties.remove();
    };

  }]);