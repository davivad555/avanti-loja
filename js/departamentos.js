import { Departamentos } from "../data/departamentosData.js"


export function showMenuDesktop(){
    document.querySelector('#categorias-btn').addEventListener('click', (e)=>{
        document.querySelector('.menu-desktop').classList.toggle('no-show');
    })

    Departamentos.forEach((item)=>{
        let Li = document.createElement('li');
        Li.innerHTML = `<h2>${item.depName}</h2>`
        document.querySelector('.container-departaments .departaments').appendChild(Li);

        Li.addEventListener('mouseover', ()=>{
            let cate = document.querySelector('.container-categoria')
            cate.innerHTML = ""
            item.categoria.forEach((icat)=>{
                let areaCategoria = document.querySelector('.categoria').cloneNode(true);
                areaCategoria.innerHTML = ""
       
                let h2 = document.createElement('h2');
                h2.textContent = `${icat.catName}`;
                areaCategoria.appendChild(h2);
                for (const element of icat.subCategoria) {
                    let h3 = document.createElement('h3');
                    h3.textContent = `${element}`;
                    areaCategoria.appendChild(h3);
                }    

                cate.appendChild(areaCategoria)
                
            })
        })
        
    })
}


export function showMenuMobile(){
    document.querySelector('#menu-btn').addEventListener('click', ()=>{
        document.querySelector('.menu-mobile').classList.toggle('move-left');
    })

    let areaDepartamento = document.querySelector('.menu-mobile .departaments')
    Departamentos.forEach((item)=>{
        let LiDep = document.querySelector('#li-departaments').cloneNode(true);
        let containerCategoria = LiDep.querySelector('.models .container-categoria').cloneNode(false)
        let h2 = document.createElement('h2');
        h2.textContent = `${item.depName}`
        LiDep.appendChild(h2);
        areaDepartamento.appendChild(LiDep)

        item.categoria.forEach((icat)=>{                   
            let Categoria = document.querySelector('.models .categoria').cloneNode(true);
            let h2 = document.createElement('h2');
            h2.textContent = icat.catName;
            Categoria.appendChild(h2);   
            
            for (const element of icat.subCategoria) {
                let h3 = document.createElement('h3');
                h3.textContent = `${element}`;
                Categoria.appendChild(h3);
            }   

            containerCategoria.appendChild(Categoria)
            
            console.log(LiDep.querySelectorAll('.container-categoria').length)
            LiDep.appendChild(containerCategoria)

            
        })
        
        LiDep.addEventListener('click', (e)=>{
            h2.style.setProperty('--rotate', '-90deg')
            containerCategoria.classList.toggle('no-show')
        })
    })


}
