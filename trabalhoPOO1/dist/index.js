"use strict";
class Cliente {
    constructor(nome, cpf, dataNascimento, sexo, endereco, telefones) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.endereco = endereco;
        this.telefones = telefones;
    }
}
class Venda {
    constructor(codigo, data, cliente, produtos, rua) {
        this.codigo = codigo;
        this.data = data;
        this.cliente = cliente;
        this.produtos = produtos;
        this.rua = rua;
    }
    calcularTotal() {
        let total = 0;
        for (const produto of this.produtos) {
            total += produto.valor;
        }
        return total;
    }
}
class Endereco {
    constructor(rua, numero, cidade, estado) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }
}
class Telefone {
    constructor(ddd, numero, tipo) {
        this.ddd = ddd;
        this.numero = numero;
        this.tipo = tipo;
    }
}
class Produto {
    constructor(codigo, descricao, valor, nome) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.nome = nome;
    }
}
const endereco = new Endereco('Rua A', 123, 'Cidade Y', 'Estado F');
const telefone1 = new Telefone('11', 12345678, 'Celular');
const cliente = new Cliente('João', 123456789, 1990, 'Masculino', endereco, [telefone1]);
const produto1 = new Produto(1, 'Produto 1', 10.99, 'Produto 1');
const venda = new Venda(1, 2022, cliente, [produto1], 'Rua 2');
console.log('Exemplo de Cliente:');
console.log(`Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);
console.log('\nExemplo de Venda:');
console.log(`Código: ${venda.codigo}, Total: R$ ${venda.calcularTotal().toFixed(2)}`);
