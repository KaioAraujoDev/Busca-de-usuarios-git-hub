


function buscarDados(usuario){
    
    fetch(`https://api.github.com/users/${usuario}`)
    .then(async (res)=>{
         const resultado = await res.json();
            if(res.ok === true){
                exibirDados(resultado);
            }else{
                exibirErro();
            }
            
        
    
    })
    .catch(err => {
        console.log(err);
    });    
    console.log('passei pela função');
    exibirLoading();
}


function exibirDados(res){
    const boxResult = document.querySelector('#result');
    boxResult.removeChild(loading);

    
    boxResult.innerHTML = '';
    boxResult.innerHTML += `<p>Nome : ${res.name}</p>`
    boxResult.innerHTML += `<p>Nome : ${res.bio}</p>`
    boxResult.innerHTML += `<img src="${res.avatar_url}"/>`
}






