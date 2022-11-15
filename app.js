const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
inputCity = inputPart.querySelector("input"),
weatherPart = wrapper.querySelector(".weather-part"),
arrowBack = wrapper.querySelector("header i"),
searchBtn = inputPart.querySelector(".search-button"),
navigationBtn = inputPart.querySelector(".search-location");


let MyApi= "4827950b1bea47a6d3115157b4845ca2"


inputCity.addEventListener("keypress", function(e){
    if (e.key === "Enter" && inputCity.value != "") {     
        e.preventDefault();
        requestApi(inputCity.value);
        }
       
})

searchBtn.addEventListener("click", ()=>{
       requestApi(inputCity.value);
}
)


navigationBtn.addEventListener("click", ()=>{
   if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          lon = position.coords.longitude;
          lat = position.coords.latitude;
          api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${MyApi}`;
          fetchData();
        })
    }
})



function requestApi(city){
     api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${MyApi}&units=metric`;
    fetchData();
}


function fetchData(){ 
    fetch(api)
        .then(res => res.json())
        .then(info => {
            const city = info.name;
            const country = info.sys.country;
            const temp = info.main.temp;
            const description = info.weather[0].description;
            const feelsLike = info.main.feels_like;
            const humidity = info.main.humidity;
            const iconImg = info.weather[0].icon;
        
          
        
            weatherPart.querySelector(".temp .number").innerText = Math.floor(temp);
            weatherPart.querySelector(".weather").innerText = description;
            weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
            weatherPart.querySelector(".temp .number-2").innerText = Math.floor(feelsLike);
            weatherPart.querySelector(".humidity span").innerText = `${humidity}`;
            weatherPart.querySelector("img").src = `http://openweathermap.org/img/wn/${iconImg}@2x.png`;
            wrapper.classList.add("active");

            arrowBack.addEventListener("click", ()=>{
                wrapper.classList.remove("active");
            })
        })
}





