window.onload = function() {
  let cities = document.querySelector("nav");
  let shownCity = document.querySelector("h1");
  let box = document.getElementById("box");

  function vibe(number){
    if (number < 20 & number > 10){
      box.classList.remove('cold');
      box.classList.remove('hot');
      box.classList.add("normal");
 }
 if (number >= 20){
  box.classList.remove('normal');
  box.classList.remove('cold');
  box.classList.add("hot");
}
if (number <= 10){
  box.classList.remove('normal');
  box.classList.remove('hot');
  box.classList.add("cold");
}

  }

  async function dubaiTemp() {
      let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=dubai&units=metric&appid=40fc162ecb4055782ccc61eaff73bf4b")
      let commits = await response.json();
      let x = commits;
      return x;
  };


  async function zurichTemp() {
      let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=zurich&units=metric&appid=40fc162ecb4055782ccc61eaff73bf4b")
      let commits = await response.json();
      let x = commits;
      return x;
  };

  async function parisTemp() {
      let response = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=75000,france&units=metric&appid=40fc162ecb4055782ccc61eaff73bf4b")
      let commits = await response.json();
      let x = commits;
      return x;
  };

  async function nycTemp() {
      let response = await fetch("https://api.openweathermap.org/data/2.5/weather?zip=10001,us&units=metric&appid=40fc162ecb4055782ccc61eaff73bf4b")
      let commits = await response.json();
      let x = commits;
      return x;
  };

  async function tokyoTemp() {
      let response = await fetch("http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=40fc162ecb4055782ccc61eaff73bf4b")
      let commits = await response.json();
      let x = commits;
      return x;
  };









  cities.onclick = function(event) {
      let target = event.target; // where was the click?

      if (target.tagName === 'A' && target.id === 'DXB') {
          //shownCity.innerHTML = 
          dubaiTemp().then(function(value) {

              //alert(value.main.temp); // 4
              shownCity.innerHTML = "DUBAI " + Math.round(value.main.temp) + "°"
              vibe(Math.round(value.main.temp));

          });


      }
      if (target.tagName === 'A' && target.id === 'ZRH') {
          //shownCity.innerHTML = 
          zurichTemp().then(function(value) {

              //alert(value.main.temp); // 4
              shownCity.innerHTML = "ZURICH " + Math.round(value.main.temp) + "°"
              vibe(Math.round(value.main.temp));



          });


      }
      if (target.tagName === 'A' && target.id === 'CDG') {
          //shownCity.innerHTML = 
          parisTemp().then(function(value) {

              //alert(value.main.temp); // 4
              shownCity.innerHTML = "PARIS " + Math.round(value.main.temp) + "°"
              vibe(Math.round(value.main.temp));



          });


      }
      if (target.tagName === 'A' && target.id === 'JFK') {
          nycTemp().then(function(value) {

              shownCity.innerHTML = "NYC " + Math.round(value.main.temp) + "°"
              vibe(Math.round(value.main.temp));



          });


      }

      if (target.tagName === 'A' && target.id === 'HND') {
          //shownCity.innerHTML = 
          tokyoTemp().then(function(value) {

              //alert(value.main.temp); // 4
              shownCity.innerHTML = "TOKYO " + Math.round(value.main.temp) + "°"
              vibe(Math.round(value.main.temp));



          });


      }

  }


}