class Cliente {
    nome: string;
    cpf: number;
    dataNascimento: number;
    sexo: string;
    endereco: Endereco;
    telefones: Telefone[];
  
    constructor(nome: string, cpf: number, dataNascimento: number, sexo: string, endereco: Endereco, telefones: Telefone[]) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.endereco = endereco;
        this.telefones = telefones;
    }
}

class Venda {
    codigo: number;
    data: number;
    cliente: Cliente;
    produtos: Produto[];
    rua: string;
  
    constructor(codigo: number, data: number, cliente: Cliente, produtos: Produto[], rua: string) {
        this.codigo = codigo;
        this.data = data;
        this.cliente = cliente;
        this.produtos = produtos;
        this.rua = rua;
    }
  
    calcularTotal(): number {
      let total = 0;
      for (const produto of this.produtos) {
        total += produto.valor;
      }
      return total;
    }
}

class Endereco {
    rua: string;
    numero: number;
    cidade: string;
    estado: string;
  
    constructor(rua: string, numero: number, cidade: string, estado: string) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
    }
}

class Telefone {
    ddd: string;
    numero: number;
    tipo: string;
  
    constructor(ddd: string, numero: number, tipo: string) {
        this.ddd = ddd;
        this.numero = numero;
        this.tipo = tipo;
    }
}
  
class Produto {
    codigo: number;
    descricao: string;
    valor: number;
    nome: string;
  
    constructor(codigo: number, descricao: string, valor: number, nome: string) {
        this.codigo = codigo;
        this.descricao = descricao;
        this.valor = valor;
        this.nome = nome;
    }
}

const endereco = new Endereco('Rua A', 123, 'Cidade Y', 'Estado F');
const telefone1 = new Telefone('11', 12345678, 'Celular');
const cliente = new Cliente('Dione', 123456789, 1990, 'Masculino', endereco, [telefone1]);
const produto1 = new Produto(1, 'Produto 1', 10.99, 'Produto 1');
const venda = new Venda(1, 2022, cliente, [produto1], 'Rua 2');

console.log('Cliente:');
console.log(`Nome: ${cliente.nome}, CPF: ${cliente.cpf}`);

console.log('\nVenda:');
console.log(`Código: ${venda.codigo}, Total: R$ ${venda.calcularTotal().toFixed(2)}`);
