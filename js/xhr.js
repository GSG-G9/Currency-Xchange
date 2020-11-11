function GenericXHR (url , responseCallback){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const respnose = JSON.parse(xhr.responseText);
                responseCallback(respnose);
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

function handelErorr(data){
    const errorP = document.getElementById('error_handel');
    errorP.textContent = data;
}