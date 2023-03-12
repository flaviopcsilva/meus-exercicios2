const express = require('express')
const knex = require('./conexao')
const { addUsuario, atualizar, deleteRegistro } = require('./controladores/controles')
const { detalharUsuario } = require('./testes')


const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    try {
        //conexao.query('select * from agenda')
        // const agenda = await knex('agenda').debug()
        //      query bruta:
        // const agenda = await knex.raw('select * from agenda')

        //const agenda = await knex('agenda').where('id', 5).debug()
        //const agenda = await knex('agenda').where('id', '!=', 5).debug()
        // const agenda = await knex('agenda').where({ id: 5, nome: 'alguma coisa' }).debug()
        //      pegar o primeiro registro
        // const agenda = await knex('agenda').where({ id: 5, }).first().debug()
        //      pegando somente alguns campos
        // const agenda = await knex('agenda').where({ id: 5, }).select('id', 'nome').first().debug()
        // select * from agenda where email is null
        // select * from agenda where id between 5 and 10
        //const agenda = await knex('agenda').whereNull('email').debug()
        //const agenda = await knex('agenda').whereNotNull('email').debug()
        //const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug()
        //const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug()
        //const agenda = await knex('agenda').distinct('email', 'nome').debug()
        //      agrupar registros
        //select email from agenda group by email
        //const agenda = await knex('agenda').select('email').groupBy('email').count().debug()

        //      limite e offset
        //const agenda = await knex('agenda').limit(5).offset(2).debug()
        //const agenda = await knex('agenda').whereNull('email').count().debug()
        //const agenda = await knex('agenda').whereNull('email').sum('id').debug()
        //const agenda = await knex('agenda').whereNull('email').avg('id').debug()
        //const agenda = await knex('agenda').whereNull('email').min('id').debug()
        //const agenda = await knex('agenda').whereNull('email').max('id').debug()

        //retornando a quantidade de medicamentos
        const qtdMedicamentos = await knex('farmacia').count().debug()

        // retornar a idade do usuario mais novo da tabela
        const usuarioMaisNovo = await knex('usuarios').min('idade').debug()

        //retornar todas as categorias não nulas e a soma do estoque de cada categoria da tabela farmacia
        const somaEstoque = await knex('farmacia').select('categoria')
            .sum('estoque').whereNotNull('categoria').groupBy('categoria').debug()

        // retornar quantidade de medicamentos sem categoria
        const medicamentosSemCategoria = await knex('farmacia').whereNull('categoria').count().debug()

        // retornar a categoria e a quantidade de produtos de categoria que não seja nulo
        const categoriaQuantidade = await knex('farmacia').select('categoria')
            .count().whereNotNull('categoria').groupBy('categoria').debug()

        // retornar a idade e a quantidade de registro de cada idade, ONDE a idade seja maior ou = a 18
        const retornarIdade = await knex('usuarios').select('idade').count()
            .where('idade', '>=', 18).groupBy('idade').debug()
        //rows=0

        //console.log(agenda[0])

        return res.json(retornarIdade)



    } catch (error) {
        console.log(error.message)
    }

})
app.get('/usuario', detalharUsuario)
app.post('/usuario', addUsuario)
app.put('/usuario/:id', atualizar)
app.delete('/usuario/:id', deleteRegistro)

app.post('/:id/anotacoes', async (req, res) => {
    const { id } = req.params
    const { nota } = req.body

    const anotacao = await knex('anotacoes')
        .insert({
            agenda_id: id,
            nota
        })
        .returning('*')
        .debug()

    return res.json(anotacao)
})
//      aplicando join
app.get('/anotacoes', async (req, res) => {
    const anotacoes = await knex('anotacoes')
        .join('agenda', 'anotacoes.agenda_id', '=', 'agenda.id')
        .select('anotacoes.*', 'agenda.nome')
        .debug()
    return res.json(anotacoes)
})

app.listen(3000, () => {
    console.log('O servidor está rodando na porta http://localhost:3000')
})