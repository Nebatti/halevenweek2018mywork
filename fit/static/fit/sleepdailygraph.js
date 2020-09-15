var date = document.getElementsByName( 'b' );
var deep = document.getElementsByName( 'c' );
var light = document.getElementsByName( 'd' );
var rem = document.getElementsByName( 'e' );
var wake = document.getElementsByName( 'f' );

for(var i = 0; i < 7; i++){
    var hoge0 = [];
    hoge0[0] = deep[i].title;
    hoge0[1] = light[i].title;
    hoge0[2] = rem[i].title;
    hoge0[3] = wake[i].title;

    var ctx = document.getElementById(date[i].title).getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["deep", "light", "rem", "wake"],
            datasets: [{
                backgroundColor: [
                "#2ecc71",
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c",
                "#34495e"
                ],
                data: hoge0
            }]
        },
        options: {
            animation: false,
        }
    });
}
