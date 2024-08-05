/*
Este es una mini guia de uso de typescript, tomado del libro Learning Angular 4ta edicion con isbn 9781803240602
A continuación se muestra la información correspondiente del capitulo 2
*/ 

//***************************************Definición de una variable 
var marca : string ='';
const producto : number = 0;
const pi: number= 3.14567;
let definicion : boolean = false;
let hola: any =1000;
hola= true;
//variable que permite varios tipos de datos:
let multiple: string | number = 'Hola';
multiple = 3,14;
//multiple = false; error debido a que no soporta boolean 


/**
 * La variable se incluye un 2 puntos con su tipo de dato, ya sea:
 * string ="hilera"
 * number = es un valor numerico ya sea entero o flotante.
 * boolean = boleano [true, false]
 * null = valores nulos
 * undefined = valores nodefinidos // Se sabe desde javascript que significa...
 * any = que puede ser cualquiera, (usar con responsabilidad)
 */



//********************Arreglos************************/
let numeros : number[] =[1,2,3,4,5];
let num : number []= [];
let nombres : string[]=["Alicia","Luis"];

//***********************Tuplas****************************/
let persona : [number,string]=[24,"Luis"];

//**************************Enum**********************************/
enum marcas{
    toyota=5,
    chevy=1,
    ford,
    ram,
    bmw
}
let carro : marcas = marcas.toyota;


/*************************** Definición de tipos **********************************/
type vehiculo = "Carro"| "Barco" | "Avion";
//entonces por ejemplo:...
//let defvehiculo : vehiculo = "Tanque"; define un error debido a que no forma parte del tipo definido anteriormente
let defvehiculo: vehiculo = "Barco"; //si funciona



/************************** Definición de la funciones y métodos **************************/
function mifuncion() : string{
    return "Hola";
}
//Arrow function
let funciona= () : string => {
    return 'Hola';
}
//Usamos void cuando no queremos que retorne nada, como en c o c++
let funcionaParam = (num:number,variable: string) : void => {
    console.log("Hola mundo\n");
}


//Definicion de parametros opcionales o atributos de una clase opcionales: se usa un ? al final de la variable
const variableOpcional = (nombre:string,num? :any): void =>{
    console.log('hola\n');
}

class miClase {
    mivar? : any;//opcional
    mivar2 : string ; //no opcional
}

/***************** DECLARACION DE OBJETOS ********************************/
const personatica : {
    nombre: string,
    apellidos :string,
    canton?:string, //opcional
    edad?: number //opcional
} ={
    nombre:'juan',
    apellidos:'rojas',
    canton : 'limon'
};


/*******INTERSECCIONES DE TIPOS **********************/
interface Person {
    name: string;
}

interface Employee {
employeeId: number;
}
  
type EmployeePerson = Person & Employee;
let emp: EmployeePerson = { name: "John", employeeId: 123 };




//******************************** GENERICOS COMO EN C++ *************/
function generica<A> (param : A): A {
  return param;
}


//***************************INTERFACES ********************/
interface figura {
    area : number;
    medicion? : string; //opcional
}
class cuadrado implements figura{
    area: number; // como implementa la inteface figura, tambien debe de ternerla como atributo de la clase
}
