/*
1、搜索

POST       http://music.163.com/api/search/get/ 

参数

s: 搜索词  
limit: 返回数量  
sub: 意义不明(非必须参数)；取值：false  
type: 搜索类型；取值意义  
  
1 单曲  
10 专辑  
100 歌手  
1000 歌单  
1002 用户  
offset: 偏移数量，用于分页  
MUSIC_U: 意义不明(非必须参数)



2、获取歌手专辑列表

GET           http://music.163.com/api/artist/albums/[artist_id]/ 

参数

offset: 偏移数量，用于分页  
limit: 返回数量


3. 获取专辑音乐列表 

GET     http://music.163.com/api/album/[album_id]/  
  
  
其中album_id用专辑id替换


4、歌曲信息

GET      http://music.163.com/api/song/detail/

必要参数：

id：歌曲ID

ids：不知道干什么用的，用[]括起来的歌曲ID


5、歌单

GET     http://music.163.com/api/playlist/detail

必要参数：

id：歌单ID


6、歌词

GET     http://music.163.com/api/song/lyric

必要参数：

id：歌曲ID

lv：值为-1，我猜测应该是判断是否搜索lyric格式

kv：值为-1，这个值貌似并不影响结果，意义不明

tv：值为-1，是否搜索tlyric格式


7、mv

GET   http://music.163.com/api/mv/detail

必要参数：

id：mvid

type：值为mp4，视频格式，不清楚还有没有别的格式





*/