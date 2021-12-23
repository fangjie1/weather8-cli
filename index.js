#!/usr/bin/env node

const getWeather = require('weather8')

function formatDate(date) {
  // date = new Date();
  date = new Date(); //转换成Data();
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  return y + '-' + m + '-' + d;
}

if(process.argv[2] === '--help') {
  console.log(`
  Usage:
    weather8 <cityName>

  Example:
    weather8 北京
  `)
} else {
  let city = process.argv[2]
  getWeather(city)
    .then(data => {
      console.log('当前城市:' + data.result.location.name)
      // console.log('PM2.5   :' + data.results[0].pm25)
      console.log('天气概况:')
      console.log(' * ' + formatDate())
      console.log(' * ' + data.result.now.temp +'℃')
      console.log(' * ' + data.result.now.wind_dir +' '+ data.result.now.wind_class)
      console.log(' * ' + data.result.now.text)
    }).catch(e => {
      console.log(e)
    })

} 
