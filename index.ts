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
//Boolean aceitam somente true ou falso

let result: boolean = true;
let result2: boolean = false;

//string("blue",'blue, `Blue`)
//pode ser usado todos os tipos de aspas ou strings, porém nada diferente pode ser utilziado
let animal: string = ``;

// Number(int, float, hex, binary)
//vai aceitar qualquer tipo de número, diferentemente do python, somente não vai aceitar 0 à esquerda
let age: number = 26;

//array(type[])
let nameList: string[] = [];
nameList.push('Carlos');

//tuple()
//utilizada em valores imutaveis, uma vez declarados não podem ser alterados, então definir somente nesse cenário
let moduleList: [string, string, string] = ['M3', 'M4', 'M5'];

//any NÃO RECOMENDADO!!!!
//any literalmente deixa utilizar qualquer coisa, array, string, number function e etc...
let anything: any = ['Carlos', 26];

//null / undefined
//quando utilizado somente vai ficar vazia ou repetindo o tipo igual o exemplo a seguir
let empty: undefined = undefined;
let empty2: null = null;

// void (vazio)
//Situação ao qual exite um retorno. Porém um retorno vazio.
//um exemplo de função que não tem retorno, ou se fosse colocado um""return" vazio no final
function logName(name: string): void {
  console.log(name);
}

//never
//Situação  ao qual nunca exite um retorno
//Quando uma função retorna somente throws é utilizad o never, é o único cenário que o never é utilizado
function error(): never {
  throw 'Erro';
}

//object(diretamente)
//aceita somente os valores já existentes na criação do objeto, não permite alterações posteriores
let carlos: object = { name: 'Carlos' };
let andre: { name: string } = { name: 'Andre' };

//Criação de novos tipos

//type
//Type e suas funções
//? utilizado para colocar propriedades dinamicas
type Human = {
  name: string;
  age?: number;
};

let kohaute: Human = { name: 'kohaute' };
kohaute.name = 'Kohaute';
kohaute.age = 23;

//Type - multiple types
//é possivel criar tipos , sempre começar ocm letra maiuscula quando for criar um novo conforme o exemplo, é possivel utilizar diversos tipos diferentes dependendo da necessidade
type Id = number | string | undefined;

let idTable: Id = '12345';
let idUser: Id = 12345;
let idProduct: Id = undefined;

//Type -pre defined values
//Assim poderá ser passado somente algum dos seguintes valores que foram pré definidos
type OS = 'Windows' | 'MacOS' | 'Ubuntu';
let pc: OS = 'MacOS';

//Type - intercecção
type Person = {
  name: string;
  gender: 'M' | 'F';
  health_points: number;
};
let aragorn: Person = {
  name: 'Aragorn',
  gender: 'M',
  health_points: 100,
};

type Magician = Person & {
  mana_points: number;
};
let gandalf: Person & Magician = {
  name: 'Gandalf',
  gender: 'M',
  health_points: 100,
  mana_points: 100,
};

//interface
//declaração normal igual ao type, somente não é necessário o =
interface Car {
  model: string;
  brand: string;
  year: number;
  plate?: string;
}
let uno: Car = {
  model: 'Uno',
  brand: 'Fiat',
  year: 1998,
  plate: 'III1234',
};
//Não é possivel fazer TIPOS MULTIPLOS, NEM OS PRÉ DEFINIDOS com uma interface,
// apenas nos valores internos do objeto dela
//interface Id2 = string | number | undefined
interface Id2 {}
// Ela sempre representará um objeto, igual acima

//Interface - readonly(exclusivo da interface)
//readonly: o nome declarado nunca irá mudar
interface Pet {
  readonly name: string;
  age: number;
}

let dog: Pet = {
  name: 'Thor',
  age: 6,
};
//dog.name="Apolo" << ERRO
//dog.age=7 << SUCESSO

//Interface -  extends
// conforme exemplo, ele extende as informações, semelhante ao que foi feito na intercecção, a interface funcionca somente com o extends, então se for type utilizar XXXX = XXX & e se for interface utilizar extends
interface Character {
  name: string;
  lvl: number;
  experience: number;
}

let berethor: Character = {
  name: 'Berethor',
  lvl: 1,
  experience: 0,
};

interface Hunter extends Character{
  have_bow: boolean;
}

let legolas: Hunter = {
  name: 'Berethor',
  lvl: 1,
  experience: 0,
  have_bow: true,
};

//decorators

//Class Decorator

//Property Decorator
