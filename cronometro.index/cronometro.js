var horas = 00 ;
var minutos = 00;
var segundos= 00;
var milessimos= 000;
var começo

function clicar1() {
      começo=  setInterval(contador,0)

}

function clicar2(){
    clearInterval(começo)    


}

function clicar3(){
    clearInterval(começo)
    horas=00
    minutos=00
    segundos=00
    milessimos=000
    document.getElementById('mile').innerHTML='000'
    document.getElementById('sec').innerHTML='00'
    document.getElementById('min').innerHTML='00'
    document.getElementById('hour').innerHTML='00'



}

function contador(){
            milessimos++
            if(milessimos==1000){
                segundos++
                milessimos=0
            }else if(segundos==60){
                minutos++
                segundos=0
                milessimos=0
            } else if(minutos==60){
                horas++
                minutos=0
                segundos=0
                milessimos=0
            }
            document.getElementById('mile').innerHTML=milessimos
            document.getElementById('sec').innerHTML=segundos
            document.getElementById('min').innerHTML=minutos
            document.getElementById('hour').innerHTML=horas

}