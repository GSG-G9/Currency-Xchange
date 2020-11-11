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


