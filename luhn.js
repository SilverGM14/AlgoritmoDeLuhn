function verificarAlgoritmo() {
	var numeros=document.getElementById("input1").value.replace(/\s/g,'');
	var digitos=numeros.length;
	var sumatoria=0;
	var segundoDigito=false;
	for(var i=digitos-1;i>=0;i--){
		var n=parseInt(numeros[i]);
		if(segundoDigito){
			n*=2;
			sumatoria+=Math.floor(n/10)+(n%10);
		}else{
			sumatoria+=n;
		}
		segundoDigito=!segundoDigito;
	}
	if(sumatoria%10==0){
		alert("Número válido");
	}else{
		alert("Número inválido, pruebe otra vez");
	}
}
