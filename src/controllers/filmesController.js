//params são variáveis

const filmes = require ('../models/filmes.json')
const fs = require('fs')

exports.get = (req,res) => {
    return res.status(200).send(filmes)
}
exports.getDiretor = (req,res) => {
    const director = req.params.diretor //tem que ser igual que está na rota
    const findDIretor = (filmes.filter(element => element.director == director))
    return res.status(200).send(findDIretor)
}

exports.getGenero = (req,res) => {
    const tipoGenero = req.params.genero
    let listaGenero = []
    for(let i = 0; i < filmes.length; i++){
        for(let j = 0; j < filmes[i].genre.length; j++) {
            if(filmes[i].genre[j] === tipoGenero){
                listaGenero.push(filmes[i]) 
            }
        }               
        
    }
    return res.status(200).send(listaGenero)
}

//segunda forma do for - includes varre a array procurando uma string especifica
//const tipoGenero = req.params.genre
//const listaFilmes = filmes.filter(e => e.genre.includes(tipoGenero))
exports.post = (req,res) => {
    const { title, year, director, duration, genre, rate } = req.body
    filmes.push({ title, year, director, duration, genre, rate })
    

    fs.writeFile(".\src\models\filmes.json", JSON.stringify(filmes), 'utf8', function(err) {
        if(err){
            return res.status(500).send({message: err}) 
        }
        console.log("filme gravado")
        
    })
    return res.status(201).send(filmes)

    
}

