# Sistema Automatizado de Registros de Producao e Manutencao

> Sistema de automação com **Google Apps Script + Google Forms + Google Sheets** para organizar relatórios de produção e manutenção por mês, reduzindo erros manuais e retrabalho. Com o objetivo de ser eficiente e rápido.

## 🚀 Visão geral

Este projeto automatiza o registro de **relatórios de produção e manutenção** que antes eram lançados manualmente por uma auxiliar administrativa, gerando:

- Erros de digitação  
- Retrabalho e perda de tempo   
- Dificuldade para consolidar tomadas de decições

Com este sistema, os funcionários preenchem um **Google Forms padronizado**, e o **Google Apps Script**:

1. Lê as respostas em uma **planilha de respostas forms**  
2. Direciona cada registro para a **aba correta por mês**  
3. Organiza os dados nas colunas certas (Data, nome, equipamento, quantidade, observações)  

👉 Hoje o fluxo atende em torno de **15 colaboradores** e é utilizado no dia a dia da operação. Cada colaborador envia o seu relatório ao decorrer do dia e a automação distrbui os dados sem mudanças manuais. 

## 🧩 Problema

Antes da automação:

- Os relatórios eram digitados manualmente em planilhas  
- Havia **risco alto de erros** por escrita incorreta
- A responsabilidade ficava concentrada em uma única pessoa  
- A separação por mês dependia de filtro manual e organização constante 
- Perda de relatórios por acúmulo de tarefas 

Isso gerava impacto direto na **confiabilidade dos dados** e na **tomada de decisão**.

---

## ✅ Solução

A solução foi construir um fluxo automatizado usando o ecossistema Google:

- 📋 **Google Forms** para padronizar a entrada de dados  
- 📑 **Planilha mãe (Google Sheets)** recebendo todas as respostas  
- 📄 **Abas por mês** organizando os registros (jan, fev, mar, etc.)  
- ⚙️ **Google Apps Script (JavaScript)** para:
  - Ler as respostas do Forms
  - Identificar o mês selecionado pelo usuário
  - Enviar os dados para a aba correta
  - Preencher automaticamente as colunas definidas

---

## 💼 Impacto no negócio

Alguns resultados práticos da automação:

- ✅ **Redução de erros de digitação**  
- ✅ **Menos sobrecarga** para a auxiliar administrativa  
- ✅ **Dados organizados por mês automaticamente**  
- ✅ **Melhor qualidade de informação para tomada de decisão**  
- ✅ **Processo acessível a todos os funcionários via Forms**

> Em resumo: transformou um processo manual, sujeito a erros, em um fluxo **padronizado, automatizado e escalável**.

---

## 🛠️ Tecnologias utilizadas

- 🧩 **Google Apps Script (JavaScript)**
- 📊 **Google Sheets**
- 📋 **Google Forms**


