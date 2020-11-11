function GenericXHR (url , responseCallback){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            if(xhr.status === 200){
                const respnose = JSON.parse(xhr.responseText);
                responseCallback(Response);
            }
        }
    }
    xhr.open("GET" , url);
    xhr.send();
}