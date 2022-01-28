const testeController=require('../controllers').teste
const md_auth=require('../config/authenticated')

module.exports=(app) => {
    app.post('/api/teste', testeController.addTeste)
    app.post('/api/login', testeController.login)
    app.get('/api/usuarios', md_auth.auth, testeController.getAll)
}