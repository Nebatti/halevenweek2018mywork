var today=new Date();
var year = today.getFullYear();
var month = ("0"+(today.getMonth() + 1)).slice(-2);
var day = ("0"+today.getDate()).slice(-2);

//公開用にvokenは削除 var token = '';

function getJsonData () {
  const api = {
    url : 'https://api.fitbit.com/1',
    resource : '/user/-/activities/heart/date/'+ year +'-'+ month +'-'+ day +'/1d/1sec.json',
  }
  fetch(`${api.url}${api.resource}`, {
      method: 'get',
      headers: { 'Authorization': `Bearer ${token}` }
  }).then((response)=>{
      return response.json();
  }).then((json)=>{
      var leng = json["activities-heart-intraday"].dataset.length - 1;
      
      var practice = document.getElementById('sample');
      practice.innerHTML = '<p>スマートフォンとの同期時刻：' + JSON.stringify(json["activities-heart-intraday"].dataset[leng].time) + '心拍数：' + JSON.stringify(json["activities-heart-intraday"].dataset[leng].value) + '</p>';
      var rate1 = JSON.stringify(json["activities-heart-intraday"].dataset[leng].value);
      var rate2 = JSON.stringify(json["activities-heart-intraday"].dataset[leng-1].value);
      var sa = rate2-rate1;
      var practice3 = document.getElementById('sample2');
      practice3.innerHTML = '<p>前回の同期時刻　　　　　　：' + JSON.stringify(json["activities-heart-intraday"].dataset[leng-1].time) + '心拍数：' + JSON.stringify(json["activities-heart-intraday"].dataset[leng-1].value) +'</p><p>'+ '前回との差' + sa +'</p>';

    var kankaku = JSON.stringify(json["activities-heart-intraday"].dataset[leng].value);
    var kankaku2 = 60 / kankaku * 1000 / 2;
    var hyouji = 0;
    function tenmetu1 () {
        setTimeout(tenmetu1, kankaku2)
            if (hyouji == 0){
                var practice2 = document.getElementById('tenmetutest');
                practice2.innerHTML = '<font color="red" size="7" ><p>　</p></font>';
                hyouji = 1;
            }
        else{
            var practice2 = document.getElementById('tenmetutest');
           practice2.innerHTML = '<font color="red" size="7" ><p>♥</p></font>';
            hyouji = 0;
        }
    }
    tenmetu1();
      
  });
}
getJsonData ();


function gurafu(){
	const api = {
	  url : 'https://api.fitbit.com/1',
	  resource : '/user/-/activities/heart/date/'+ year +'-'+ month +'-'+ day +'/1d/1min.json',
	}
	fetch(`${api.url}${api.resource}`, {
	  method: 'get',
	  headers: { 'Authorization': `Bearer ${token}` }
	}).then((response)=>{
	  return response.json();
	}).then((json)=>{
	  var leng = json["activities-heart-intraday"].dataset.length - 1;
	  var practice = document.getElementById('sample');
	  var kankaku = JSON.stringify(json["activities-heart-intraday"].dataset[leng].value);
	  var kankaku2 = 60 / kankaku * 1000 / 2;
	  var hyouji = 0;

	  function foo () {
	  	//setTimeoutメソッドで1秒後に関数fooを呼び出す
		setTimeout(foo, kankaku2)
		if (hyouji == 0){
			var practice2 = document.getElementById('tenmetutest');
			practice2.innerHTML = '<font color="red" size="7" ><p>　</p></font>';
			hyouji = 1;
		}else{
			var practice2 = document.getElementById('tenmetutest');
			practice2.innerHTML = '<font color="red" size="7" ><p>♥</p></font>';
			hyouji = 0;
			}
		}
		foo();

		var json2 = json["activities-heart-intraday"];
		var data10bai =[];
		for(var i=0; i < json2.dataset.length; i=i+10){
		  data10bai.push(json2.dataset[i]);
		}
		var labels = data10bai.map(function(e){
			e.time2 = json["activities-heart"][0]["dateTime"] + "T" + e.time;
			return e.time2
		});
		var data = json2.dataset.map(function(e) {
		return e.value;
		});

		var ctx = document.getElementById('myChart').getContext('2d');
		var config = {
			type: 'line',
			data: {
				labels: labels,
				datasets: [{
					label: '心拍数',
					fill: false,
					data: data,
         			backgroundColor: 'rgba(0, 119, 204, 0.3)'
				}]
			},
			options: {
				scales: {
					xAxes: [{
						type: 'time',
						time: {
							displayFormat: 'h:mm:ss',
						}
					}]
				}
   			}
		};

		var chart = new Chart(ctx, config);
	});        
}

var timer = setTimeout(gurafu(), 300000);


