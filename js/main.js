const buttonSearch = document.querySelector('#buttonSearch');


buttonSearch.addEventListener('click', () =>{
    const searchInput = document.querySelector('#search');

    if(searchInput.value !== ''){
        buscarDados(searchInput.value)
    }else{
        alert('Preencha o campo busca');
    }
})


function exibirLoading(){
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const loading = document.createElement('div');
    loading.id = 'loading';
    
    loading.classList.add('divLoading');


    loading.innerHTML = `<img src="./assets/Rolling-1s-200px.svg" alt="Loading"  class="loading"/>`;
    
    result.appendChild(loading);

}

function exibirErro(){
    
    const result = document.querySelector('#result');
    result.innerHTML = '';

    const erro = document.createElement('div');
    erro.id = 'erro';


    erro.innerHTML=`<p class="textError">Usuário não encontrado</p>`;

    result.appendChild(erro);
}