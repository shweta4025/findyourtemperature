let city = document.getElementById("cityName");
let tempicon =  document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let weather = document.getElementById("weather");
  let iconfile;

  const inputcity = document.getElementById("city");
  const searchbutton = document.getElementById("searchButton");

  searchbutton.addEventListener('click',(e)=>{
      e.preventDefault();

      getWeather(inputcity.value);
      inputcity.value="";

  });

  const getWeather = async (place)=>{
      try{

        const proxy = "https://cors-anywhere.herokuapp.com/";
          const response = await fetch(`${proxy}api.openweathermap.org/data/2.5/weather?q=${place}&appid=4e12d162cc4e7075e68744bd32eed389`);

          const weatherData = await response.json();
          const{name}=weatherData;
          const{feels_like} = weatherData.main;
          const{id,main} = weatherData.weather[0];

          city.textContent = name;
          weather.textContent = main;
          tempvalue.textContent = Math.round(feels_like-273);

          if(id<300 && id>200){
            tempicon.src = "https://www.flaticon.com/premium-icon/icons/svg/1959/1959321.svg";
        }else
            if(id<400 && id>300){
                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/414/414927.svg?token=exp=1612672912~hmac=10407220e388d8fdaa8363a09d7134ff"; 
            }
           else if(id<600 && id>500){
                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/1146/1146858.svg?token=exp=1612672971~hmac=a19334c3b6ed78b99e22d941b504a492";
            }
           else if(id<700 && id>600){
                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/4165/4165543.svg?token=exp=1612673087~hmac=5b6ad96946a8c6133b050a2c23dba0fc";
            }
            else if(id<800 && id>700){
                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/899/899681.svg?token=exp=1612673182~hmac=bd465a2e35c8b8c52a4a1d2d01908b8d";
            }
           else if(id==800){
                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/1146/1146869.svg?token=exp=1612673241~hmac=91573ab04ed8ec42f7f395ece2486036";
            }

      }catch(error){
          alert('OOPS!!!  LOCATION NOT FOUND');
      }
  }


  window.addEventListener("load",()=>{
      let long;
      let lat;
     
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition((position)=>{
                    long = position.coords.longitude;
                    lat = position.coords.latitude;
                    const duplicate = "https://cors-anywhere.herokuapp.com/";


                    const api = `${duplicate}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4e12d162cc4e7075e68744bd32eed389`;

                    fetch(api).then((response)=>{
                        return response.json();
                    })

                    .then((data)=>{
                        const{name} = data;
                        const{feels_like} = data.main;
                        const{id,main} = data.weather[0];

                        city.textContent = name;
                        weather.textContent = main;
                        tempvalue.textContent = Math.round(feels_like-273);


                        if(id<300 && id>200){
                            tempicon.src = "https://www.flaticon.com/premium-icon/icons/svg/1959/1959321.svg";
                        }else
                            if(id<400 && id>300){
                                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/414/414927.svg?token=exp=1612672912~hmac=10407220e388d8fdaa8363a09d7134ff"; 
                            }
                           else if(id<600 && id>500){
                                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/1146/1146858.svg?token=exp=1612672971~hmac=a19334c3b6ed78b99e22d941b504a492";
                            }
                           else if(id<700 && id>600){
                                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/4165/4165543.svg?token=exp=1612673087~hmac=5b6ad96946a8c6133b050a2c23dba0fc";
                            }
                            else if(id<800 && id>700){
                                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/899/899681.svg?token=exp=1612673182~hmac=bd465a2e35c8b8c52a4a1d2d01908b8d";
                            }
                           else if(id==800){
                                tempicon.src ="https://www.flaticon.com/svg/vstatic/svg/1146/1146869.svg?token=exp=1612673241~hmac=91573ab04ed8ec42f7f395ece2486036";
                            }
                        
                    })
          })
      }
  })
