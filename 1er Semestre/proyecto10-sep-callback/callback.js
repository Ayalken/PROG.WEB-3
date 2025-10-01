

const f=(y)=>{
    
    if (y%2===0){
        console.log("espar")
    }
    else (y%2===1);
    {   console.log("esimpar")}
}
const g=(y)=>{
    if (y%2===0){
        return true 
    }
}


const f1 =(y)=>{
   return y+1; 
}
const f2 =(y)=>{
   return y*2; 
}

function miFuncion(x,callback,callback1,callback2){

    x=x+1;
    let d= callback(x)
    let z =callback1(x)
    let w =callback2(z)
    return z,w,d,g;
}
console.log(miFuncion(6,f,g,f1,f2))

