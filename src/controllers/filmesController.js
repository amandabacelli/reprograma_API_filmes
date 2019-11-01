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
    const genre = req.params.genero
    genre = filmes.genre
    const findGenero = (genre.map(element => element.genre))
    return res.status(200).send(findGenero)
}