function par(){

	var lista=[];
for (var i =1; i <= 100; i++) {
	var ul=document.getElementById("lista");
	if(i%2===0){
		for (var a=0; a<=100; a++) {
			lista[a]=i;
			muestra=lista[a];
	var li=document.createElement("li");
li.appendChild(document.createTextNode(muestra));
ul.appendChild(li);
		}
	}
}
}