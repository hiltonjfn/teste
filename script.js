    // Quando o usuário selecionar um arquivo
    document.getElementById('file-input').addEventListener('change', function(event) {
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
        var content = e.target.result;
        document.getElementById('file-content').textContent = content;
      };

      reader.readAsText(file);
    });
