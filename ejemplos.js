
var arrayTest = [
{nombre:"matias",perfil:"admin",sueldo:50},
{nombre:"lucas",perfil:"empleado",sueldo:20},
{nombre:"martin",perfil:"empleado",sueldo:10},
{nombre:"claudio",perfil:"admin",sueldo:20}
];


// filtro y  ACUMULADOR

var resultadoArray = arrayTest.filter(function(elemento){ // retorna array de objetos
 return elemento.perfil == "empleado";
});

var sum = resultadoArray.reduce(function(valoranterior,valoractual){ // retorna un numero final no array 
    return valoranterior+valoractual.sueldo;
},0);

//CALCULAR EL MAYOR RETORNANDO UN OBJETO 
var arrayTest = [
{nombre:"matias",perfil:"admin",sueldo:50},
{nombre:"lucas",perfil:"empleado",sueldo:20},
{nombre:"martin",perfil:"empleado",sueldo:10},
{nombre:"claudio",perfil:"admin",sueldo:20}
];

var resultado = arrayTest.reduce(function(anterior,actual,indice,array){

    if(anterior.sueldo > actual.sueldo){
        return anterior;
    }else{
        return actual;
    }

});

// CALCULAR EL MAYOR RETORNANDO SOLO UN NUMERO 

var arrayTest = [
{nombre:"matias",perfil:"admin",sueldo:50},
{nombre:"lucas",perfil:"empleado",sueldo:20},
{nombre:"martin",perfil:"empleado",sueldo:60},
{nombre:"claudio",perfil:"admin",sueldo:20}
];

var resultado = arrayTest.reduce(function(anterior,actual,indice,array){

    if(anterior > actual.sueldo){
        return anterior;
    }else{
        return actual.sueldo;
    }

},0);

console.log(resultado);

//PROMEDIO

var arrayTest = [
{nombre:"matias",perfil:"admin",sueldo:50},
{nombre:"lucas",perfil:"empleado",sueldo:20},
{nombre:"martin",perfil:"empleado",sueldo:60},
{nombre:"claudio",perfil:"admin",sueldo:20}
];
//podria ponerle un filter primero para sacar los numeros aunque no es necesario
var resultado = arrayTest.reduce(function(anterior,actual,indice,array){

    if(indice == array.length -1){
        return (anterior + actual.sueldo)/ array.length;
    }else{
        return anterior + actual.sueldo;
    }
    

},0);

console.log(resultado);