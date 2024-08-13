// Función para encriptar el texto
function encryptText(text) {
    return text
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  }
  
  // Función para desencriptar el texto
  function decryptText(text) {
    return text
      .replace(/ufat/g, 'u')
      .replace(/ober/g, 'o')
      .replace(/ai/g, 'a')
      .replace(/imes/g, 'i')
      .replace(/enter/g, 'e');
  }
  
  // Función para procesar el texto basado en la acción (encriptar o desencriptar)
  function processText(action) {
    const inputText = document.getElementById('inputText').value;
    let result;
  
    if (action === 'encrypt') {
      result = encryptText(inputText);
    } else if (action === 'decrypt') {
      result = decryptText(inputText);
    }
  
    document.getElementById('outputText').value = result;
  }
  
  // Función para copiar el texto al portapapeles
  function copyToClipboard() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles!');
  }
  