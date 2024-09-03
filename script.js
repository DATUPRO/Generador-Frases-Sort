document.addEventListener('DOMContentLoaded', () => {
    const frases = [
        "La vida és bella.",
        "Cada dia és una nova oportunitat.",
        "Somriu, és gratis!",
        "El futur és avui.",
        "Confia en tu mateix."
    ];

    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById('frase').innerText = fraseAleatoria;
});
