function set2fig(num) {
   // 桁数が1桁であれば先頭に0を加えて2桁に調整する
   var ret;
   if( num < 10 ) { ret = "0" + num; }
   else { ret = num; }
   return ret;
}

function showClock2() {
   var nowTime = new Date();
   var nowYear = nowTime.getFullYear();
   var nowMonth = ("0"+(nowTime.getMonth() + 1)).slice(-2);
   var nowDay = ("0"+nowTime.getDate()).slice(-2);
   var nowHour = set2fig( nowTime.getHours() );
   var nowMin  = set2fig( nowTime.getMinutes() );
   var nowSec  = set2fig( nowTime.getSeconds() );
   var msg = nowYear + "年" + nowMonth + "月" + nowDay + "日" + nowHour + ":" + nowMin + ":" + nowSec;
   document.getElementById("RealtimeClockArea2").innerHTML = msg;
}

showClock2()
setInterval('showClock2()',1000);