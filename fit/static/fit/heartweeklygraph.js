var date = document.getElementsByName( 'a' );
var sleept = document.getElementsByName( 'b' );
var workhr = document.getElementsByName( 'e' );
var date_a0 = [];
var sleept_a0 = [];
var workhr_a0 = [];


for(var i = 0; i < 7; i++){
    date_a0[i] = date[i].title;
    sleept_a0[i] = sleept[i].title;

    var workhr_a0_0 = workhr[i].title;
        if ( workhr_a0_0.length == 7) {
            var a_hr = workhr_a0_0.substring( 0, 1 );
            var a_min = workhr_a0_0.substring( 2, 4 );
            var jikan = Number(a_hr) + (Number(a_min)/60);
        } else {
            var a_hr = workhr_a0_0.substring( 0, 2 );
            var a_min = workhr_a0_0.substring( 3, 5 );
            var jikan = Number(a_hr) + (Number(a_min)/60);
        }
    workhr_a0[i] = Number(jikan.toFixed(2));

}


//棒グラフ
var ctx = document.getElementById("myBarChart0");
var myBarChart = new Chart(ctx, {
  //グラフの種類
  type: 'bar',
  //データの設定
  data: {
      //データ項目のラベル
      labels: date_a0,
      //データセット
      datasets: [{
          //凡例
          label: "作業時間",
          //背景色
          backgroundColor: "rgba(255,153,0,0.4)",
          //枠線の色
          borderColor: "rgba(255,153,0,1)",
          //グラフのデータ
          data: workhr_a0
      }, {
          label: "睡眠時間",
          //背景色
          backgroundColor: "rgba(75,192,192,0.4)",
          //枠線の色
          borderColor: "rgba(75,192,192,1)",
          //グラフのデータ
          data: sleept_a0
      }]
  },
  //オプションの設定
  options: {
      //軸の設定
      scales: {
          //縦軸の設定
          yAxes: [{
              //目盛りの設定
              ticks: {
                  //開始値を0にする
                  beginAtZero:true,
              }
          }]
      }
  }
});

