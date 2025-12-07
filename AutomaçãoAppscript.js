// Desenvolvido por Juan Franco Simão.


function direciona_para_a_aba() {
  // Evita concorrência
  var lock = LockService.getScriptLock();
  lock.waitLock(40000); 

  var ss = SpreadsheetApp.openById('1GzGZbYlfBqzO7T_hqJ_Iyopkyxl5afskOn4GtpPydPU');
  var sheetRespostas = ss.getSheetByName("Respostas_forms1");
  var dados = sheetRespostas.getDataRange().getValues();

  var MAPEAMENTO = {
    2: 1,
    4: 2,
    5: 3,
    6: 4,
    7: 5,
    8: 6,
    9: 12
  };

  for (var i = 1; i < dados.length; i++) {
    var status = dados[i][10]?.toString().trim();

    if (status !== "Okay") {
      var nomeAbaDestino = dados[i][3]?.toString().trim().toUpperCase();
      var abaDestino = ss.getSheetByName(nomeAbaDestino);

      if (abaDestino) {
        var linhaDestino = 3;
        while (abaDestino.getRange(linhaDestino, 3).getValue() !== "") linhaDestino++;

        for (var colOrigem in MAPEAMENTO) {
          abaDestino.getRange(linhaDestino, MAPEAMENTO[colOrigem])
            .setValue(dados[i][parseInt(colOrigem)]);
        }

        sheetRespostas.getRange(i + 1, 11).setValue("Okay");
        ordenarAbaPorData(abaDestino);

      } else {
        sheetRespostas.getRange(i + 1, 11).setValue("Erro: Aba '" + nomeAbaDestino + "' não existe");
      }
    }
  }

  lock.releaseLock(); // libera o bloqueio
}

function ordenarAbaPorData(aba) {
  var ultimaLinha = aba.getLastRow();
  var ultimaColuna = aba.getLastColumn();

  if (ultimaLinha > 3) {
    var intervalo = aba.getRange(3, 1, ultimaLinha - 2, ultimaColuna);
    intervalo.sort({ column: 1, ascending: true }); // Coluna B
  }
}

// Desenvolvido por Juan Franco Simão.
