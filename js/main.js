const buttonSearch = document.querySelector('#buttonSearch');


buttonSearch.addEventListener('click', () =>{
    const searchInput = document.querySelector('#search');

    if(searchInput.value !== ''){
        BuscarDados(searchInput.value)
    }else{
        alert('Preencha o campo busca');
    }
})
