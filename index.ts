// Como definir um tipo?

//function funcao(name: string){
//  console.log(name)
//}

let nome: string = 'Carlos';

nome = ' Andre';

// Como definir o tipo de um parâmetro de função?

function funcao(name: string, age: number) {
  console.log(name);
  console.log(age);
}

funcao('a', 1);
//Foi criada uma função com dois parametros, uma string e um number, assim quando vai chamar esta função é necessário repassar ambos parâmetros. No exemplo foi utilizado uma string e um number, assim ´´e necessário chamar String, Number
function funcao2(name: string): string {
  return name;
}

// Como definir o tipo do retorno de uma função?

//Types
// boolean(true/false)
let result: boolean = true;
let result2: boolean = false;
//Boolean aceitam somente true ou falso

//string("blue",'blue, `Blue`)
let animal: string = ``;
//pode ser usado todos os tipos de aspas ou strings, porém nada diferente pode ser utilziado

// Number(int, float, hex, binary)
let age: number = 26;
//vai aceitar qualquer tipo de número, diferentemente do python, somente não vai aceitar 0 à esquerda

//array(type[])
let nameList: string[] = [];
nameList.push('Carlos');

//tuple()
let moduleList: [string, string, string] = ['M3', 'M4', 'M5'];
//utilizada em valores imutaveis, uma vez declarados não podem ser alterados, então definir somente nesse cenário

//any NÃO RECOMENDADO!!!!
let anything: any = ['Carlos', 26];
//any literalmente deixa utilizar qualquer coisa, array, string, number function e etc...

//null / undefined
let empty: undefined = undefined;
let empty2: null = null;
//quando utilizado somente vai ficar vazia ou repetindo o tipo igual o exemplo acima

// void (vazio)
//Situação ao qual exite um retorno. Porém um retorno vazio.
function logName(name: string):void{
  console.log(name)
}
//um exemplo de função que não tem retorno, ou se fosse colocado um""return" vazio no final

//never
//Situação  ao qual nunca exite um retorno
function error():never{
  throw "Erro"
}
//Quando uma função retorna somente throws é utilizad o never, é o único cenário que o never é utilizado

//object

//type

//multiple types
