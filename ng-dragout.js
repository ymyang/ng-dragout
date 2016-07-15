/**
 * Created by yang on 2016/7/15.
 */
angular.module('ng-dragout', []).directive('ngDragOut', function() {

    return {
        restrict: 'A',
        replace: false,
        transclude: false,
        scope: {
            file: '=ngDragOut'
        },
        link: function($scope, $element, attrs) {
            var file = $scope.file;

            $element.attr('draggable', 'true');

            $element.on('dragstart', function(event) {

                var data = event.dataTransfer || event.originalEvent.dataTransfer;

                //data.setData('DownloadURL', 'image/jpg:test.jpg:http://192.168.0.26/test.jpg');

                var info = file.mime + ':' + file.name + ':' + file.url;
                data.setData('DownloadURL', info);
            });

        }
    };
});