document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        "Has guanyat el segon premi en un concurs de bellesa. Cobres 10 €.",
        "Vas a la presó. Vés directament a la presó, no passis per la casella de sortida, no cobris 200 €.",
        "Vés a la casella de sortida. Cobres 200 €.",
        "Vés al Ferrocarril Reading. Si passes per la casella de sortida, cobres 200 €.",
        "Vés al ferrocarril més proper. Si és propietat d'un altre jugador, paga el doble del lloguer que li deus. Si no és propietat de ningú, la pots comprar.",
        "Avança fins a l'Avinguda Illinois. Si passes per la casella de sortida, cobres 200 €.",
        "Avança fins a l'Avinguda St. Charles. Si passes per la casella de sortida, cobres 200 €.",
        "Avança fins al Passeig de Tablado (Boardwalk).",
        "Vés al ferrocarril més proper. Si és propietat d'un altre jugador, paga el doble del lloguer que li deus. Si no és propietat de ningú, la pots comprar.",
        "Avança fins a la Companyia de Serveis Públics més propera. Si no és propietat de ningú, la pots comprar. Si és propietat d'un altre jugador, llença els daus i paga 10 vegades el nombre que surti en els daus.",
        "Retrocedeix 3 caselles.",
        "El banc et paga un dividend de 50 €.",
        "Fas reparacions a totes les teves propietats: paga 25 € per cada casa i 100 € per cada hotel.",
        "Sur de la presó gratis. Aquesta targeta es pot conservar fins que s'utilitzi o es vengui.",
        "Paga una multa per excés de velocitat de 15 €.",
        "Has estat elegit president del consell d'administració. Paga 50 € a cada jugador."
    ];

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerText = fraseAleatoria;
});
