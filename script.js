window.onload = function(){
fetch('https://api.ipregistry.co/?key=pi0gwgtuajzmsz4h')
  .then(response => response.json())
  .then(json => {
      fetch("https://api.weatherapi.com/v1/current.json?key=7508c8d893cb4d91bcb121951230502&q="+json.location.city+"&aqi=no")
      .then(response => response.json())
      .then(json => {
        document.getElementById("city").innerHTML=json.current.condition.text;
        console.log(json.location.name);
        document.getElementById("deg").innerHTML="°C";
        document.getElementById("weather").innerHTML=json.current.temp_c;
        console.log(json.current.temp_c);
        console.log(json.current.condition.text);
        console.log(json);
      }
      );
    }
  );
  document.getElementsByClassName("load")[0].classList.add("removeload");
}

function flip(){
  
  if(document.getElementsByTagName("body")[0].style.backgroundColor=="black"){
    document.getElementsByTagName("body")[0].style.backgroundColor="white";
    document.getElementById("weather").style.color="black";
    document.getElementById("deg").style.color="black";
    document.getElementById("city").style.color="black";
  }
  else{
    document.getElementsByTagName("body")[0].style.backgroundColor="black";
    document.getElementById("weather").style.color="white";
    document.getElementById("deg").style.color="white";
    document.getElementById("city").style.color="white";  
  }
}