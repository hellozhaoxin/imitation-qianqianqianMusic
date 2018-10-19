/**
 * Created by john on 2018/9/15.
 */
main.factory('publicData',function(){
    musicPath = {
        musicUrl:'http://www.wwtliu.com/sxtstu/music/baidu/list.php?',
        playUrl:'http://www.wwtliu.com/sxtstu/music/baidu/play.php?',
        lrcUrl:'http://www.wwtliu.com/sxtstu/music/baidu/lrc.php?',
        typeArr:[1,2,11,12,16,21,22,23,24,25]
    };
    return musicPath;
});