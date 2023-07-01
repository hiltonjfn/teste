 // Nome do arquivo de texto
 var fileName = 'seu_arquivo.txt';

 // Função para carregar o conteúdo do arquivo de texto
 function loadFile() {
   var xhr = new XMLHttpRequest();
   xhr.open('GET', fileName, true);
   xhr.onreadystatechange = function() {
     if (xhr.readyState === 4 && xhr.status === 200) {
       var content = xhr.responseText;
       document.getElementById('file-content').textContent = content;
     }
   };
   xhr.send();
 }

 // Chama a função para carregar o arquivo quando a página é carregada
 window.onload = loadFile;