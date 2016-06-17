var notas=[],mayor,menor=100,suma=0;
for (var i=1; i <= 5; i++) {
	notas[i]=parseFloat(prompt("Ingrese la nota del alumno nro "+i));
	suma=suma+notas[i];
   if(notas[i]<menor){
   	menor=notas[i];
   }
   else{
   	mayor=notas[i];
   }
}
alert("La nota menor es "+menor+" y la nota mayor es "+mayor)