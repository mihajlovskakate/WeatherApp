const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
inputCity = inputPart.querySelector("input");


let api;

inputCity.addEventListener("keypress", function(e){
    if (e.key === "Enter" && inputCity.value != "") {     
        e.preventDefault();
        requestApi(inputCity.value);
        }
       
})


function requestApi(city){
    const myApi= "4827950b1bea47a6d3115157b4845ca2"
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApi}&units=metric`;
    fetchData();
}






