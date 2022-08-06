

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
            <h2><a href="${res.html_url}" target="_blank">${res.login}</a></h2>
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
                ${
                res.location ?
                `<a href="https://www.google.es/maps/place/${res.location}" target="_blank">${res.location}</a>` : 
                '<span>Não possui</span>'
                }
            </div>

            <div>
                <img class="iconInfo" src="assets/twitter.png">
                ${
                    res.twitter_username ?
                    `<a href="https://twitter.com/${res.twitter_username}" target="_blank">${res.twitter_username}</a>` : 
                    '<p>Não possui</p>'
                }
            </div>

            <div>
                <img class="iconInfo" src="assets/link.png">
                ${
                    res.blog ?
                    `<a href="${res.blog}" target="_blank">${res.blog}</a>` : 
                    '<p>Não possui</p>'
                }
            </div>

            <div>
                <img class="iconInfo" src="assets/organization.png">
                ${
                    res.companies ?
                    `<a href="${res.companies}" target="_blank">${res.companies}</a>` : 
                    '<p>Não possui</p>'
                }
            </div>

        </div>
    </div>
    `;

}






