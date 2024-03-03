var app = angular.module('Image-Application', []);

app.controller('ImageController', function($scope, $interval) {
  $scope.images = [
    { thumbnail: 'https://picsum.photos/id/71/50/50', fullsize: 'https://picsum.photos/id/71/400/400' },
    { thumbnail: 'https://picsum.photos/id/102/50/50', fullsize: 'https://picsum.photos/id/102/400/400' },
    { thumbnail: 'https://picsum.photos/id/13/50/50', fullsize: 'https://picsum.photos/id/13/400/400' },
    { thumbnail: 'https://picsum.photos/id/185/50/50', fullsize: 'https://picsum.photos/id/185/400/400' },
    { thumbnail: 'https://picsum.photos/id/20/50/50', fullsize: 'https://picsum.photos/id/20/400/400' },
    { thumbnail: 'https://picsum.photos/id/100/50/50', fullsize: 'https://picsum.photos/id/100/400/400' },
  ];

  $scope.currentIndex = null;

  $scope.showFullSize = function(index) {
    $scope.currentIndex = index;
  };

  $scope.prev = function() {
    $scope.currentIndex = ($scope.currentIndex - 1 + $scope.images.length) % $scope.images.length;
  };

  $scope.next = function() {
    $scope.currentIndex = ($scope.currentIndex + 1) % $scope.images.length;
  };

  var intervalPromise = $interval(function() {
    $scope.currentIndex = ($scope.currentIndex + 1) % $scope.images.length;
  }, 2000);

  $scope.$on('$destroy', function() {
    $interval.cancel(intervalPromise);
  });
});