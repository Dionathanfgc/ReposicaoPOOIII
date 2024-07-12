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
