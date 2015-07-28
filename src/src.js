if (Meteor.isClient) {

  // This code only runs on the client

  document.title = "Do They Go Together?";

  angular.module('src',['angular-meteor']);
 
  angular.module('src').controller('HomeCtrl', ['$scope',
    function ($scope) {
 
      $scope.thingCategories = [
        { name: 'Food' },
        { name: 'People' },
        { name: 'Politics' },
        { name: 'Potpourri' }
      ];

      $scope.thingRatings = [
        { name: 'Heck No!',rating:0, src:'' },
        { name: 'A Little Bit',rating:1,src:'' },
        { name: 'Totally!',rating:2,src:'' }
      ];


      $scope.things = [
        {name:'Michael Jackson',
        src:'',
        description:'Blanket\'s Dad!'},
        {name:'Justin Bieber',
        src:'',
        description:'The Biebs!'}
      ]

      $scope.thingA = $scope.things[0];
      $scope.thingB = $scope.things[1];

  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
