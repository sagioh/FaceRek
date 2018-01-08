const request = require('request');

const tlvId = '293397';

function getWeather(cityId) {
    return new Promise((resolve, reject) => {
    request('http://api.openweathermap.org/data/2.5/weather?id=' + cityId + '&APPID=ff908e323a7a4e90bd9748e1b8880d26&units=metric', {
        json: true
    }, (err, res, result) => {
        if (err) {
           reject(err);
        }

        let weatherInfo = {};
        weatherInfo.city = result.name;
        weatherInfo.temp = result.main.temp;
        weatherInfo.description = result.weather[0].description;
        weatherInfo.state = result.main.temp > 23 ? 'Hot' : 'cold';

        console.log('City: ' + weatherInfo.city);
        console.log('Temp: ' + weatherInfo.temp);
        console.log('Weather description: ' + weatherInfo.description);
        console.log('State: ' + weatherInfo.state);
        console.log(weatherInfo + ' weatherInfo');

        resolve(weatherInfo);
    });
})};


//function linkByEmotionAndWeather(emotion, weatherInfo) {
//    console.log(emotion + ' ' + weatherInfo);
//
//    var url = '';
//    var weatherState = weatherInfo.state;
//    switch (emotion) {
//        case "anger":
//        case "contempt":
//        case "disgust":
//            switch (weatherState) {
//                case "Hot":
//                    console.log(emotion + ' 1' + weatherState);
//                    url = 'https://www.youtube.com/watch?v=uuKjtu5cQDM';
//                    break;
//                case "Cold":
//                    console.logg(emotion + ' 2' + weatherState);
//                    url = 'https://www.youtube.com/watch?v=uuKjtu5cQDM';
//                    break;
//                default:
//                    console.log("Got to default");
//                    break;
//            }
//            break;
//        case "happiness":
//        case "sadness":
//        case "surprise":
//            switch (weatherState) {
//                case "Hot":
//                    console.log(emotion + ' 3' + weatherState);
//                    url = 'https://www.youtube.com/watch?v=uuKjtu5cQDM';
//                    break;
//                case "Cold":
//                    console.log(emotion + ' 4' + weatherState);
//                    break;
//                default:
//                    console.log("Got to default");
//                    break;
//            }
//            break;
//        default:
//            console.log("Got to default");
//            break;
//    }
//    console.log('url: ' + url);
//    return url;
//};

//function foo(emotion){
//getWeather(tlvId).then(function(weatherInfo){
//    var urlResult = linkByEmotionAndWeather(emotion, weatherInfo.state)
//    console.log('resp: '+ urlResult);
//})};
//foo('anger');
