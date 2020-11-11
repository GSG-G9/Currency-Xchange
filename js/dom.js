function handelErorr(error){
    const errorP = document.getElementById('error_handel');
    errorP.textContent = error;
}

const inputChangeTo = document.getElementById('exchange_to_input');
const main = document.getElementById('main');




inputChangeTo.addEventListener('focusout' , function(){
    GenericXHR( `https://api.unsplash.com/search/photos?client_id=0ZxAs6sAoEUe2x4F8jct34FDsXarlgmSj6q5o1QXa9I&query=${inputChangeTo.value}`, (data)=>{
        main.style.backgroundImage = ` url(${data.results[0].urls.regular})`;
    })
})
