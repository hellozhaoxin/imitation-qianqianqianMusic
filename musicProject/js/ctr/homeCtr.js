/**
 * Created by john on 2018/9/16.
 */
main.controller('home',['$scope','$http','publicData',function($scope,$http,publicData){
    $scope.allSong = [];
    $scope.category  = null;
    for(var i = 0;i<publicData.typeArr.length;i++){
        $scope.category = publicData.typeArr[i];
        $http.get(publicData.musicUrl+'type='+publicData.typeArr[i]+'&count=3&offset=0')
            .then(function succcess(res){
                $scope.allSong.push(res);
            });
    }
}]);
