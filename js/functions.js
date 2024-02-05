function updateUI(data) {
    return `
           <div  class="card-body">
               <img class="image" src="${data.flags.png}" />
              <div class="text">
              <h3 class="name" >${data.name.common}</h3>
              <h6>Population: <span>${data.population}</span></h6>
              <h6>Region: <span>${data.region}</span></h6>
              <h6>Capital: <span>${data.capital}</span></h6>
              </div>
              
           </div>
       `;
  }



  

  

  function aboutCountry(data) {
    return `
    <div  class="countryAbout">
    <div class="img">
<img width="560" height="401" src="${data.flags.png}" alt="">
    </div>
    <div class="text">
        <div class="text-1">
            <h2>${data.name.common}</h2>
        <h4>Native Name:  <span>${data.name.nativeName}</span> </h4>
        <h4>Region: <span> ${data.region}</span></h4>
        <h4>Sub Region: <span>${data.subregion}</span></h4>
        <h4>Capital: <span>${data.capital[0]}</span></h4>
        </div>
        <div class="text-2">
            <h4>Top Level Domain: <span></span></h4>
            <h4>Currencies: <span>${data.currencies}</span></h4>
            <h4> Languages: <span>English, Uzbek, Russia</span></h4>
        </div>
    </div>
   </div>
    `;
}


export { aboutCountry, updateUI};