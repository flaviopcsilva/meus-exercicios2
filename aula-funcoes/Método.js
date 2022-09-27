const pessoa{
  nome : "Flávio",
  idade : 41,
  profissao : "DEV",
  apresentar : function(){
    const faixaEtaria = this.determinarFaixaEtaria(this.idade);
    console.log(`Sou ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}`);
  },
  determinarFaixaEtaria : function(){
    if(this.idade<=21){
      return "Jovem";
    }else if(this.idade<66){
      return "Adulto";
    }else{
      return "Idoso";
    }
  }
}

pessoa.apresentar();