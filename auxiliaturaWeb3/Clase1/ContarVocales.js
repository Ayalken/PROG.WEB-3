const palabra="angelaa";
let contador =0;
for (let i=0; i<palabra.length; i++){
    if(palabra[i]=="a" || palabra[i]=="e" || palabra[i]=="i" || palabra[i]=="o" ||palabra[i]=="u" ) {
        contador+=1;
    }
}
console.log(contador);