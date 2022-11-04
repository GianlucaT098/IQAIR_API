//import axios from 'axios';

const apiKey="5983fa9a-98fe-42e7-8c9b-11b065218624";

baseUrl="https://api.airvisual.com/v2/countries?key=5983fa9a-98fe-42e7-8c9b-11b065218624";

function onResponse(response)
{
  return response.json();
}

async function onJson(json)
{

  let resp_country = document.getElementById("resp_country");
  resp_country.style.display="grid";
  let title=document.getElementById("country_title");
  title.style.display="block";
  let ddata=json.data;
  for(let i=0;i<ddata.length;i++)
  {
    for (var k in ddata[i])
    {
      if (typeof ddata[i][k] !== 'function') {
           //console.log(k + ": " + ddata[i][k]);
           let div = document.createElement("a");
           div.append(ddata[i][k]);
           div.name=ddata[i][k];
           resp_country.appendChild(div);

      }

    }
  }
  await dolaterCountry();
  document.getElementById("resp_country").scrollIntoView({behavior: 'smooth'});
}

async function onJson1(json)
{
  let resp_country = document.getElementById("resp_state");
  resp_country.style.display="grid";
  let title=document.getElementById("state_title");
  title.style.display="block";
  let ddata=json.data;
  for(let i=0;i<ddata.length;i++)
  {
    for (var k in ddata[i])
    {
      if (typeof ddata[i][k] !== 'function') {
           //console.log(k + ": " + ddata[i][k]);
           let div = document.createElement("a");
           div.append(ddata[i][k]);
           div.name=ddata[i][k];
           resp_country.appendChild(div);

      }

    }
  }
  await dolaterState();
  document.getElementById("resp_state").scrollIntoView({behavior: 'smooth'});
}

async function onJson2(json)
{
  let resp_country = document.getElementById("resp_city");
  resp_country.style.display="grid";
  let title=document.getElementById("city_title");
  title.style.display="block";
  let ddata=json.data;
  for(let i=0;i<ddata.length;i++)
  {
    for (var k in ddata[i])
    {
      if (typeof ddata[i][k] !== 'function') {
           //console.log(k + ": " + ddata[i][k]);
           let div = document.createElement("a");
           div.append(ddata[i][k]);
           div.name=ddata[i][k];
           resp_country.appendChild(div);

      }

    }
  }
  await dolaterCity();
  document.getElementById("resp_city").scrollIntoView({behavior: 'smooth'});
}

async function onJson3(json)
{


  //console.log(json);
  let png=json.data.current.weather.ic;
  let resp_data = document.getElementById("resp_data");
  let title=document.getElementById("data_title");
  title.style.display="block";
  resp_data.style.display="grid";
  let ddata_pollutin=json.data.current.pollution;
  let ddata_weather=json.data.current.weather;
  //console.log(ddata_pollutin);
  //console.log(ddata_weather);

    for (var k in ddata_pollutin)
    {
      if (typeof ddata_pollutin[k] !== 'function') {
           console.log(k + ": " + ddata_pollutin[k]);
           let div = document.createElement("a");
           let div1=document.createElement("a");
           div1.append(k);
           div1.className="left";
           div1.name=ddata_pollutin[k];
           div.append(ddata_pollutin[k]);
           div.name=ddata_pollutin[k];
           div.className="right";
           resp_data.appendChild(div1);
           resp_data.appendChild(div);

      }

    
  }


    for (var k in ddata_weather)
    {
      if (typeof ddata_weather[k] !== 'function' && k!=='ic' && k!=='ts') {
           console.log(k + ": " + ddata_weather[k]);
           let div = document.createElement("a");
           let div1=document.createElement("a");
           div1.append(k);
           div1.className="left";
           div1.name=ddata_weather[k];
           div.append(ddata_weather[k]);
           div.name=ddata_weather[k];
           div.className="right";
           resp_data.appendChild(div1);
           resp_data.appendChild(div);

      }

    }

    let img = document.createElement("img")
    img.src= "https://www.airvisual.com/images/"+png+".png";
    resp_data.appendChild(img);
    document.getElementById("resp_data").scrollIntoView({behavior: 'smooth'});
  
  //await dolaterCity();
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + "path=/";
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

async function clickStatesFromCountries(event)
{
  const click = event.currentTarget.name;
  //console.log(click);
  searchStatesFromCountries(click);
}

async function clickCityFromState(event)
{
  const click = event.currentTarget.name;
  //console.log(click);
  searchCityFromState(click);
}

async function clicDataFromCity(event)
{
  const click = event.currentTarget.name;
  //console.log(click);
  searchDataFromCity(click);
}

async function searchDataFromCity(City)
{

  console.log('Searching Data');
  //console.log(City);
  setCookie("city", City,1);
  let country = getCookie("country");
  let state = getCookie("state");
  //console.log(City);

  rest_url = "http://api.airvisual.com/v2/city?city="+City+"&state="+state+"&country="+country+"&key="+apiKey;

  fetch(rest_url).then(onResponse).then(onJson3);

}

async function searchCityFromState(State)
{

  console.log('Searching City');
  console.log(State);
  setCookie("state", State,1);
  let country = getCookie("country");
  console.log(country);

  rest_url = "http://api.airvisual.com/v2/cities?state="+ State +"&country="+country+"&key="+apiKey;

  fetch(rest_url).then(onResponse).then(onJson2);

}

async function searchStatesFromCountries(Country)
{
    //event.preventDefault();
    console.log('Searching States');
    //const input = document.querySelector('#searchStatesByCountries');
    //const value = input.value;


    console.log(Country);
    setCookie("country",Country,1);

    //setCookie("nome",author_value,1);
    //return value;

    rest_url = 'http://api.airvisual.com/v2/states?country='+Country+'&key='+apiKey;
	
    // Effettuare la richiesta
    fetch(rest_url).then(onResponse).then(onJson1);

}

async function searchCountries(event)
{
    event.preventDefault();
    console.log('Searching Countries');
    //const input = document.querySelector('#searchCountries');
    //const value = input.value;

    //console.log(value);

    //setCookie("nome",author_value,1);
    //return value;

    rest_url = 'http://api.airvisual.com/v2/countries?&key='+apiKey;
	
    // Effettuare la richiesta
    fetch(rest_url).then(onResponse).then(onJson);


}

//doIt();


//const formsC = document.getElementById('searchC');
const formsS = document.getElementById('searchSByC');


//formsC.addEventListener('submit', searchStatesFromCountries);
formsS.addEventListener('submit', searchCountries);


async function dolaterCountry()
{
  const countryClicked=document.getElementById("resp_country").children;
  //console.log(countryClicked);
  
  for(let i=0;i<countryClicked.length;i++)
  {
  
    //console.log(countryClicked[i]);
      countryClicked[i].addEventListener("click",clickStatesFromCountries);  
  }
}

async function dolaterState()
{
  const stateClicked=document.getElementById("resp_state").children;
  //console.log(countryClicked);
  
  for(let i=0;i<stateClicked.length;i++)
  {
  
    //console.log(stateClicked[i]);
    stateClicked[i].addEventListener("click",clickCityFromState);
  
  }
}

async function dolaterCity()
{
  const cityClicked=document.getElementById("resp_city").children;
  //console.log(countryClicked);
  
  for(let i=0;i<cityClicked.length;i++)
  {
  
    //console.log(cityClicked[i]);
    cityClicked[i].addEventListener("click",clicDataFromCity);
  
  }
}


