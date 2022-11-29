function soma(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
function decisao(resp, pri, sec){
    if(resp == 1){
        resultado = soma(pri,sec)
        document.write("<p>A soma é " + resultado)
    }
    if(resp == 2){
        resultado = sub(pri,sec)
        document.write("<p>A subtração é " + resultado)
    }
    if(resp == 3){
        resultado = mul(pri,sec)
        document.write("<p>A multiplicação é " + resultado)
    }
    if(resp == 4){
        resultado = div(pri,sec)
        document.write("<p>A divisão é " + resultado)
    }
}
//pri, sec SÃO PARÂMETROS