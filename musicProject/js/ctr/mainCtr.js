/**
 * Created by john on 2018/9/7.
 */
var main = angular.module('app',['ngRoute']);
main.controller('mainCtr',['$scope','$http','publicData',function($scope,$http,publicData){
    //点击事件
    $scope.categroy = function(categroy){
        $http.get(publicData.musicUrl+'type='+categroy+'&count=15&offset=0')
            .then(function succcess(res){
                $scope.poster = res.data.billboard.pic_s192;
                $scope.songdetailsArr = res.data.song_list;
            });
    };
    $scope.mid = function(id){
        $http.get(publicData.playUrl+'mid='+id)
            .then(function succcess(res){
                $scope.playPic = res.data.songinfo.pic_big;
                $scope.author = res.data.songinfo.author;
                $scope.title = res.data.songinfo.title;
                $scope.playMusicurl = res.data.bitrate.show_link;
            });
        $http.get(publicData.lrcUrl+'mid='+id)
            .then(function succcess(res){
                $scope.lrc = res.data.lrcContent;
            });
    }
}]);


