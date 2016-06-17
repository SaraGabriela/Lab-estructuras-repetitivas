function generaTabla(){
	var num= parseInt(document.getElementById("operando").value);
	var ul=document.getElementById("lista");
	var resultado=[];
	for(i=0;i<=12;i++){
		resultado[i]=num*i;
		var muestra=(num+"x"+i+"="+resultado[i]);
		var li=document.createElement("li");
		li.appendChild(document.createTextNode(muestra));
		ul.appendChild(li);
	}

}