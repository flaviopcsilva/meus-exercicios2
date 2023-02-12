const express = require('express')
const pool = require('./conexao')

const app = express()

app.use(express.json())

app.get('/:id', async (req, res) => {

    const { id } = req.params

    try {

        const query = 'update empresas set site = $1 where id = $2'
        const params = ['www.cakewalk.com', id]

        const resultado = await pool.query(query, params)
        return res.json(resultado)

    } catch (error) {
        return res.json('deu erro')
    }

})

app.get('/', async (req, res) => {
    try {
        const query = `select e.id as "ID da Empresa",f.id as "ID da Filial", e.nome, f.pais,p.nome as "Funcionário"
    from empresas e join
    filiais f on e.id = f.empresa_id
    join pessoas p on p.empresa_id = e.id`
        const resultado = await pool.query(query)
        return res.json(resultado.rows)

    } catch (error) {
        return res.json('deu erro')
    }
})

app.listen('8000')