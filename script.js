document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        "La vida �s bella.",
        "Cada dia �s una nova oportunitat.",
        "Somriu, �s gratis!",
        "El futur �s avui.",
        "Confia en tu mateix."
    ];

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerText = fraseAleatoria;
});
