var edad=[],suma=0,promedio;
var num=parseInt(prompt("¿Cuántos alumnos se registrarán?"));
for (var i = 1; i <= num; i++) {
	edad[i]=parseInt(prompt("¿Cuál es la edad del alumno nro "+i+"?"));
	suma=suma+edad[i];
}
promedio=suma/num;
alert("El promedio de las "+num+" edades ingresadas es "+promedio);