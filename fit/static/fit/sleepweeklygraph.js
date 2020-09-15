var date = document.getElementsByName( 'b' );
var sleephr = document.getElementsByName( 'g' );
var date_a0 = [];
var sleephr_a0 = [];


for(var i = 0; i < 7; i++){
    date_a0[i] = date[i].title;
    sleephr_a0[i] = sleephr[i].title;
}


//棒グラフ
var ctx = document.getElementById("myBarChart");
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
          label: "睡眠時間",
          //背景色
          backgroundColor: "rgba(75,192,192,0.4)",
          //枠線の色
          borderColor: "rgba(75,192,192,1)",
          //グラフのデータ
          data: sleephr_a0
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
