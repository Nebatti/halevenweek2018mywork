
//1日目
var date1 = date[0].title;
var josonurl = "../../static/fit/heart/heart" + date1 + ".json";

$.getJSON(josonurl, function(json) {

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

    var ctx = document.getElementById(date1).getContext('2d');
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
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: false,
                            min: 50,
                            max: 130
                        }
                    }]
                },
            animation: false,
            }
        };

    var chart = new Chart(ctx, config);
});


//2日目
var date2 = date[1].title;
josonurl = "../../static/fit/heart/heart" + date2 + ".json";

$.getJSON(josonurl, function(json) {

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

    var ctx = document.getElementById(date2).getContext('2d');
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
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 50,
                        max: 130
                    }
                }]
            },
            animation: false,
        }
    };
    var chart = new Chart(ctx, config);
});


//3日目
var date3 = date[2].title;
josonurl = "../../static/fit/heart/heart" + date3 + ".json";

$.getJSON(josonurl, function(json) {

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

    var ctx = document.getElementById(date3).getContext('2d');
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
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 50,
                        max: 130
                    }
                }]
            },
            animation: false,
        }
    };
    var chart = new Chart(ctx, config);
});


//4日目
var date4 = date[3].title;
josonurl = "../../static/fit/heart/heart" + date4 + ".json";

$.getJSON(josonurl, function(json) {

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

    var ctx = document.getElementById(date4).getContext('2d');
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
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 50,
                        max: 130
                    }
                }]
            },
            animation: false,
        }
    };

    var chart = new Chart(ctx, config);
});


//5日目
var date5 = date[4].title;
josonurl = "../../static/fit/heart/heart" + date5 + ".json";

$.getJSON(josonurl, function(json) {

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

    var ctx = document.getElementById(date5).getContext('2d');
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
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 50,
                        max: 130
                    }
                }]
            },
            animation: false,
        }
    };

    var chart = new Chart(ctx, config);
});


//6日目
var date6 = date[5].title;
josonurl = "../../static/fit/heart/heart" + date6 + ".json";

$.getJSON(josonurl, function(json) {

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

    var ctx = document.getElementById(date6).getContext('2d');
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
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 50,
                        max: 130
                    }
                }]
            },
            animation: false,
        }
    };

    var chart = new Chart(ctx, config);
});


//7日目
var date7 = date[6].title;
josonurl = "../../static/fit/heart/heart" + date7 + ".json";

$.getJSON(josonurl, function(json) {

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

    var ctx = document.getElementById(date7).getContext('2d');
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
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false,
                        min: 50,
                        max: 130
                    }
                }]
            },
            animation: false,
        }
    };
    var chart = new Chart(ctx, config);
});

