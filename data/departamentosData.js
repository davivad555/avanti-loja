import {categoria} from './categoriaData.js';



export const Departamentos = [
   {id_dep:0, depName:"Moda", categoria: categoria.filter((cat)=>{if(0 === cat.id_dep) return cat})},
   {id_dep:1, depName:"Eletrônicos" ,categoria: categoria.filter((cat)=>{if(1 === cat.id_dep) return cat})},
   {id_dep:2, depName:"Casa e Decoração", categoria: categoria.filter((cat)=>{if(2 === cat.id_dep) return cat})},
   {id_dep:3, depName:"Beleza e Cuidados Pessoais", categoria: categoria.filter((cat)=>{if(3 === cat.id_dep) return cat})},
   {id_dep:4, depName:"Esportes e Lazer", categoria: categoria.filter((cat)=>{if(4 === cat.id_dep) return cat})},
   {id_dep:5, depName:"Supermercado", categoria: categoria.filter((cat)=>{if(5 === cat.id_dep) return cat})},
   {id_dep:6, depName:"Livros e Papelaria", categoria: categoria.filter((cat)=>{if(6 === cat.id_dep) return cat})},
   {id_dep:7, depName:"Brinquedos e Jogos", categoria: categoria.filter((cat)=>{if(7 === cat.id_dep) return cat})},
   {id_dep:8, depName:"Automotivo", categoria: categoria.filter((cat)=>{if(8 === cat.id_dep) return cat})},
   {id_dep:9, depName:"Saúde e Bem-Estar", categoria: categoria.filter((cat)=>{if(9 === cat.id_dep) return cat})}
]

