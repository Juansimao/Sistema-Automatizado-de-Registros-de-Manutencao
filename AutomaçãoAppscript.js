


function direciona_para_a_aba() {
  // Configurações da planilha
  var ss = SpreadsheetApp.openById('Link_Planilha');
  var sheetRespostas = ss.getSheetByName("Respostas ao formulário 1");
  var dados = sheetRespostas.getDataRange().getValues();

  // Mapeamento de colunas: Form_Responses1 → Aba Destino
  var MAPEAMENTO = {
    6: 2,  // Coluna G (Forms) → Coluna B (Aba Destino) - DATA
    2: 3,  // Coluna C (Forms) → Coluna C (Aba Destino) - NOME
    3: 4,  // Coluna D (Forms) → Coluna D (Aba Destino) - PAINEL
    4: 5,  // Coluna E (Forms) → Coluna E (Aba Destino) - QUANTIDADE
    5: 8   // Coluna F (Forms) → Coluna H (Aba Destino) - OBSERVAÇÕES
  };

  for (var i = 1; i < dados.length; i++) { // Começa na linha 2 (ignora cabeçalho)
    var status = dados[i][7].toString().trim(); // Agora verifica a coluna H (índice 7)

    if (status !== "Okay") {
      var nomeAbaDestino = dados[i][1].toString().trim().toUpperCase(); // Coluna B (Mês)
      var abaDestino = ss.getSheetByName(nomeAbaDestino);

      if (abaDestino) {
        // Define a linha de início como 4
        var linhaDestino = 4;
        
        // Encontra a próxima linha vazia começando da linha 4
        while (abaDestino.getRange(linhaDestino, 2).getValue() !== "") {
          linhaDestino++;
        }
        
        // Preenche os dados nas colunas corretas
        for (var colOrigem in MAPEAMENTO) {
          var valor = dados[i][parseInt(colOrigem)];
          abaDestino.getRange(linhaDestino, MAPEAMENTO[colOrigem]).setValue(valor);
        }
        
        // Marca como "Okay" na COLUNA H (índice 7) do Forms
        sheetRespostas.getRange(i + 1, 8).setValue("Okay"); // Coluna H = índice 7 + 1
      } else {
        sheetRespostas.getRange(i + 1, 8).setValue("Erro: Aba '" + nomeAbaDestino + "' não existe");
      }
    }
  }
}

