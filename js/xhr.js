function GenericXHR (url , responseCallback){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
               return responseCallback(JSON.parse(xhr.responseText));
            }else if(xhr.status === 404){
                handelErorr(`not found,${xhr.status},${xhr.responseText1}`);
            }else{
                handelErorr(`internal error,${xhr.status},${xhr.responseText}`);
            }
        }
    }
    xhr.open("GET" , url);
    xhr.send();
}

function handelErorr(error){
    const errorP = document.getElementById('error_handel');
    errorP.textContent = error;
}

const inputChangeTo = document.getElementById('exchange_to_input');
const main = document.getElementById('main');

// GenericXHR( `https://api.unsplash.com/search/photos?client_id=0ZxAs6sAoEUe2x4F8jct34FDsXarlgmSj6q5o1QXa9I&query=${inputChangeTo}`, (data)=> console.log(data))

GenericXHR( `https://api.unsplash.com/search/photos?client_id=0ZxAs6sAoEUe2x4F8jct34FDsXarlgmSj6q5o1QXa9I&query=london`, (data)=>makeBa(data)
    function makePackground(imgdata){
        console.log( data.results[0].urls.full);
    }
)
