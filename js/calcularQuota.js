hipoteca={
    inici:0,
    capital: 0,
    interes: 0,
    termini: 0,
    cuota: function() {
        return ((this.capital*this.interes/12)/(100*(1-Math.pow(1+this.interes/(12*100),this.termini*-1)))).toFixed(2);
    }
}

function calcularInici(val) {

}

function calcularCapital(val) {
    hipoteca.capital=val;
}

function calcularInteres(val) {
    hipoteca.interes=val;
}

function calcularTermini(val) {
    hipoteca.termini=val;
    document.getElementById("mesosAnys").innerHTML = (val)+" mesos seran "+parseInt(val/12)+" anys";
    if (val%12){
        document.getElementById("mesosAnys").innerHTML += " i "+(val%12)+" mesos"
    } 
    resultatCuota();
}

function resultatCuota (){
    if (parseFloat(hipoteca.cuota())>0){
        document.getElementById("resultat").innerHTML = " "+hipoteca.cuota()+" €";
    }
}