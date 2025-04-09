
export function resultSeach(){
    let areaResults = document.querySelector('.results-search').cloneNode(true);
    let container = document.querySelector('.area-search')
    let searchInput = document.querySelector('#search-input');
    let searchBtn = document.querySelector('.search-btn');

    searchInput.addEventListener('input', (e)=>{
        let searchValue = e.target.value;
        let search = areaResults.querySelector('span')
        search.innerHTML = "";
        search.innerHTML = searchValue;
    })
    searchInput.addEventListener('keydown',(e)=>{
        if(e.key ==='Backspace' || e.target.value ===""){
            areaResults.remove()
        }

    })


    searchBtn.addEventListener('click',()=>{
        if(searchInput.value!==""){
            container.appendChild(areaResults)
        }

    })

     
}     

function buscados(resultsInput, searchInput){
    searchInput.addEventListener('change',()=>{

        if(searchInput.value){
            resultsInput.querySelector('span').innerHTML = searchInput.value
        } 

    })
}