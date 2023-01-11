const fs = require('fs/promises');
const { format } = require('date-fns');


const listarContas = async (req, res) => {
    try {
        const banco = await fs.readFile('./src/dados/bancodedados.json');
        const contas = JSON.parse(banco);
        return res.status(200).json(contas.contas);
    } catch (error) {
        return res.status(500).json({ Mensagem: error.message });
    }
};

const cadastrarConta = async (req, res) => {
    try {
        const { nome, cpf, data_nascimento, telefone, email, senha } = req.body;
        const banco = await fs.readFile('./src/dados/bancodedados.json');
        let contas = JSON.parse(banco);

        if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
            return res.status(400).json({ Mensagem: 'Todos os dados são obrigatórios' });
        };

        // verificar se ja existe cpf e email
        let usuarios = contas.contas.find((usuario) => {
            return usuario.cpf === cpf;
        });

        if (usuarios) {
            return res.status(400).json({ Mensagem: 'Já existe usuário com esse CPF.' })
        }
        usuarios = contas.contas.find((usuario) => {
            return usuario.email === email;
        })
        if (usuarios) {
            return res.status(400).json({ Mensagem: 'Já existe usuário com esse e-mail.' })
        }


        //Cadastrar Usuário
        let contadorDeNumeroDaConta = contas.banco.contador;
        let saldo = contas.banco.saldo;
        const usuario = {
            numeroDaConta: contadorDeNumeroDaConta++, nome, cpf, data_nascimento, telefone, email, senha, saldo
        }
        contas.banco.contador = contadorDeNumeroDaConta;

        contas.contas.push(usuario);

        await fs.writeFile('./src/dados/bancodedados.json', JSON.stringify(contas));

        return res.status(201).send();



    } catch (error) {
        return res.status(500).json({ Mensagem: error.message });
    }
};

//   Depósito
const deposito = async (req, res) => {
    const { numero_conta, valor } = req.body;
    try {
        //importando dados JSON
        const banco = await fs.readFile('./src/dados/bancodedados.json');
        let contas = JSON.parse(banco);

        //Verificar se os valores foram declarados no body
        if (!numero_conta) {
            return res.status(400).json({ Mensagem: 'O número da conta é obrigatório.' });
        };
        //verificando se foi declarado ou se é menor ou igual a zero
        if (!valor || valor < 0) {
            return res.status(400).json({ Mensagem: 'O valor é obrigatório ou não pode ser menor ou igual a zero.' });
        };

        const contaEncontrada = contas.contas.find((numConta) => {
            return numConta.numeroDaConta === Number(numero_conta);
        });

        if (!contaEncontrada) {
            return res.status(404).json({ Mensagem: 'Conta inválida.' });
        };

        //cadastrando deposito com data
        const novaData = new Date();
        const dataFormatada = format(novaData, 'dd-MM-yy HH:mm:ss');

        const novoDeposito = {
            data: dataFormatada,
            numero_conta,
            valor
        };

        contas.depositos.push(novoDeposito);
        contaEncontrada.saldo += valor;
        //gravando no arquivo .json
        await fs.writeFile('./src/dados/bancodedados.json', JSON.stringify(contas));


        return res.status(201).send();


    } catch (error) {
        return res.status(500).json({ Mensagem: error.message });
    }
}

module.exports = {
    listarContas,
    cadastrarConta,
    deposito
};