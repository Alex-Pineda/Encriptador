function encriptarTexto() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = encriptar(inputText);

    document.getElementById('encrypted-text').value = encryptedText;
    document.getElementById('input-text').value = '';
    document.getElementById('output-section').style.display = 'none';
    document.getElementById('copy-button').style.display = 'block';
    document.getElementById('encrypted-text').style.display = 'block'; // Mostrar textarea
    verificarCampos();
}

function encriptar(texto) {
    let resultado = texto;
    resultado = resultado.replace(/e/g, "enter");
    resultado = resultado.replace(/i/g, "imes");
    resultado = resultado.replace(/a/g, "ai");
    resultado = resultado.replace(/o/g, "ober");
    resultado = resultado.replace(/u/g, "ufat");
    return resultado;
}

function desencriptarTexto() {
    const inputText = document.getElementById('input-text').value;
    const decryptedText = desencriptar(inputText);

    document.getElementById('encrypted-text').value = decryptedText;
    document.getElementById('input-text').value = '';
    document.getElementById('output-section').style.display = 'none';
    document.getElementById('copy-button').style.display = 'block';
    document.getElementById('encrypted-text').style.display = 'block'; // Mostrar textarea
    verificarCampos();
}

function desencriptar(texto) {
    let resultado = texto;
    resultado = resultado.replace(/enter/g, "e");
    resultado = resultado.replace(/imes/g, "i");
    resultado = resultado.replace(/ai/g, "a");
    resultado = resultado.replace(/ober/g, "o");
    resultado = resultado.replace(/ufat/g, "u");
    return resultado;
}

function copiarTexto() {
    const encryptedText = document.getElementById('encrypted-text');
    encryptedText.select();
    document.execCommand('copy');
}

function verificarCampos() {
    const inputText = document.getElementById('input-text').value;
    const encryptedText = document.getElementById('encrypted-text').value;

    if (!inputText && !encryptedText) {
        document.getElementById('output-section').style.display = 'flex';
        document.getElementById('copy-button').style.display = 'none';
        document.getElementById('encrypted-text').style.display = 'none'; // Ocultar textarea si no hay texto

    }
} 