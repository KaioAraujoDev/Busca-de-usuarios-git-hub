


function BuscarDados(usuario){
    
    fetch(`https://api.github.com/users/${usuario}`)
    .then(async (res)=>{
         const resultado = await res.json();
         Exibirdados(resultado);
    })
    console.log('passei pela função');

}

BuscarDados('Garchy');


function Exibirdados(res){
    const boxResult = document.querySelector('#result');

    boxResult.innerHTML += `<p>Nome : ${res.name}</p>`
    boxResult.innerHTML += `<p>Nome : ${res.bio}</p>`
    boxResult.innerHTML += `<img src="${res.avatar_url}"/>`
}






