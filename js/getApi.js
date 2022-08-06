

var dataFormatada = "";

function buscarDados(usuario){
    
    fetch(`https://api.github.com/users/${usuario}`)
    .then(async (res)=>{
         const resultado = await res.json();
            if(res.ok === true){
                dataFormatada = formatarData(resultado.created_at);
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
    
    boxResult.innerHTML = '';
    console.log(res)
    boxResult.innerHTML += `<div class="divImg"><img class="imgAvatar" src="${res.avatar_url}"</div>`
    boxResult.innerHTML += `
    <div class="content">
        <div class="divTitle">
            <h1>${res.name}</h1>
            <h2>${res.login}</h2>
        </div>
        <span>${ 
           "Entrou em " + dataFormatada
        }</span>

        <h3>${res.bio ? res.bio : 'Não possui'}</h3>
    
        <div class="divInfo">
            <div>
                <h4>
                    Repositórios
                </h4>
                <p>
                    ${res.public_repos}                
                </p>
            </div>
            <div>
                <h4>
                    Seguidores
                </h4>
                <p>
                    ${res.followers}                
                </p>
            </div>
            <div>
                <h4>
                    Seguindo
                </h4>
                <p>
                    ${res.following}                
                </p>
            </div>
        </div>

        <div class="divLinks">
            <div>
                <img class="iconInfo"src="assets/location-pin.png" alt="Localização">
                <p>${res.location ? res.location : 'Não possui'}</p>
            </div>

            <div>
                <img class="iconInfo" src="assets/twitter.png">
                <p>${res.twitter_username ? res.twitter_username : 'Não possui' }</p>
            </div>

            <div>
                <img class="iconInfo" src="assets/link.png">
                <p>${res.blog ? res.blog : 'Não possui'}</p>
            </div>

            <div>
                <img class="iconInfo" src="assets/organization.png">
                <p>${res.organizations_url ? res.organizations_url : 'Não possui'}</p>
            </div>

        </div>
    </div>
    `;

}






