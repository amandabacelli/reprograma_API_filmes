const filmes = require ('../models/filmes.json')

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
    console.log(listaGenero)
    return res.status(200).send(listaGenero)
}