function addContact() {
    // Obter os valores do formulário
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    // Validar se ambos os campos foram preenchidos
    if (name && phone) {
        // Verificar se o contato já existe na tabela
        if (!contactExists(name, phone)) {
            // Criar uma nova linha na tabela
            var table = document.getElementById("contactTable").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.rows.length);

            // Inserir células na nova linha
            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);

            // Preencher as células com os valores do formulário
            cell1.innerHTML = name;
            cell2.innerHTML = phone;

            // Limpar os campos do formulário
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
        } else {
            alert("Este contato já existe na agenda.");
        }
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function contactExists(name, phone) {
    // Verificar se o contato já existe na tabela
    var table = document.getElementById("contactTable").getElementsByTagName('tbody')[0];
    for (var i = 0; i < table.rows.length; i++) {
        var existingName = table.rows[i].cells[0].innerHTML;
        var existingPhone = table.rows[i].cells[1].innerHTML;
        
        // Comparar nome e telefone
        if (existingName === name && existingPhone === phone) {
            return true; // O contato já existe
        }
    }
    return false; // O contato não existe
}
