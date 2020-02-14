function converter(){
	var inp=Math.trunc(document.getElementById("decim").value);
	var mod, bin=[1000], a=inp;
	
	if(inp<0){
		document.getElementById("bina").innerHTML=
		"You input a negative number. Click the refresh, or press F5 to try again.";
	}
	
	else{
		while(a>0){
			mod=a%2;
			bin.push(mod);
			a=Math.trunc(a/2);
		}
		
		document.getElementById("bina").innerHTML=
		"You input the decimal number: ["+ inp +"]10<br>And it will become binary ";
		while(bin.length>0) document.getElementById("bina").innerHTML += bin.pop();
		
	}
}