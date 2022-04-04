const search = document.querySelector('.input-search')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const time = document.querySelector('.time')
const temperature = document.querySelector('.temperature .value')
const shortDesc = document.querySelector('.short-desc')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const cloud = document.querySelector('.cloud span')
const content = document.querySelector('.content')
const body = document.querySelector('body')


changeWeatherUI('Ha Noi')
async function changeWeatherUI(capitalSearch)
{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    
    let data = await fetch(url).then(res=>res.json())
    if ( data.cod == 200 )
    {
        content.classList.remove('hide')
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility +'m'
        wind.innerText = data.wind.speed +'m/s'
        cloud.innerText = data.main.humidity +'%'
        let temp = Math.round( data.main.temp )
        temperature.innerText = temp
        shortDesc.innerText = data.weather[0] ?  data.weather[0].main : ''
        time.innerHTML = new Date().toLocaleString()

        body.setAttribute('class' , 'hot')
        if ( temp < 25)
        {
            body.setAttribute('class','cool')
        }
        if ( temp <= 22 )
        {
            body.setAttribute('class','warm')
        }
        if( temp <=19)
        {
            bodys.setAttribute('class','cold')
        }
    }
    else{
        content.classList.add('hide')
    }
}

search.addEventListener('keypress',function(e){
    if (e.code === 'Enter'){
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})