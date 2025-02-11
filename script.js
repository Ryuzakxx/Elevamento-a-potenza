function calcolaPotenza() {

    var base = document.getElementById('base').value;
    var esponente = document.getElementById('esponente').value;

    var risultato = Math.pow(base, esponente);

    document.getElementById('risultato').value = risultato;
}
