const teste=require('../models').teste

const jwt=require('../config/jwt')

function addTeste(req, res) {
    teste.create(req.body)
        .then(testeData => {
            res.status(200).send({testeData})
        })
        .catch(err => {
            res.status(500).send({err})
        })
}

function login(req, res) {
    teste.findOne({
        where: {
            nome: req.body.nome,
            email: req.body.email
        }
    })
    .then(usuario=> {

        if (usuario) {
            if (req.body.token) {
                res.status(200).send({
                    token: jwt.createToken(usuario)
                })
            }
            res.status(200).send({
                usuario: usuario,
            })
        } else {
            res.status(401).send({message: 'Acesso não autorizado'})   
        }
    })
    .catch(err=> {
        res.status(500).send({message: 'Erro!'})
    })
}

function getAll(req, res) {
    teste.findAll()
    .then(usuarios => {
        res.status(200).send({usuarios})
    })
    .catch(err => {
        res.status(500).send({message: 'Ocorreu um erro ao buscar usuarios'})
    })
}

module.exports={
    addTeste,
    login,
    getAll
}