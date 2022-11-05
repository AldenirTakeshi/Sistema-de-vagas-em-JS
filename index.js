const vagas = [];

// Listar as vagas do arrays 'vagas'
let listarVagas = () => {
  const vagasEmTexto = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos )";
    return textoFinal;
  }, "");
  alert(vagasEmTexto);
};

// ADD da vaga
let novaVaga = () => {
  const nome = prompt("Informe o nome da vaga: ");
  const descricao = prompt("Informe a descrição da vaga: ");
  const dataLimite = prompt("Informe a data limite da vaga: ");

  const confirmacao = confirm(
    "Deseja salvar a vaga coma as seguintes informações?\n" +
      "\nNome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
  }
};

// Exibição da vaga
let exibirVaga = () => {
  const indice = prompt("Informe o indice da vaga que deseja ver: ");
  const vaga = vagas[indice];

  if (indice >= vagas.length || indice < 0) {
    alert("Indice inváldo!");
    return;
  } else {
    const candidatosEmTexto = vaga.candidatos.reduce(
      (textoFinal, candidato) => {
        return (textoFinal = "\n - " + candidato);
        // - Aldenir
        // - José
        // - João
      },
      ""
    );

    alert(
      "Vaga n° " +
        indice +
        "\nNome: " +
        vaga.nome +
        "\nDescrição: " +
        vaga.descricao +
        "\nData limite: " +
        vaga.dataLimite +
        "\nQuantidade de candidados: " +
        vaga.candidatos.length +
        "\nCandidatos inscritos: " +
        candidatosEmTexto
    );
  }
};

let inscreverCandidato = () => {
  const candidato = prompt("Informe o nome da candidato: ");
  const indice = prompt(
    "Informe o indice da vaga que deseja inscrever o candidato: "
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("Incrição Realizada!");
  }
};

//

let excluirVaga = () => {
  const indice = prompt("Informe o indice da vaga que deseja excluir: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluida!");
  }
};

let exibirMenu = () => {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego\n" +
      "\nEscolha umas das opções: " +
      "\n1. Listar vagas disponiveis" +
      "\n2. Criar uma nova vaga" +
      "\n3. Visualizar uma vaga " +
      "\n4. Increver um candidato" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );

  return opcao;
};

let executarMenu = () => {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo...");
        break;

      default:
        alert("Opçcao inválida!");
        break;
    }
  } while (opcao != "6");
};

executarMenu();
