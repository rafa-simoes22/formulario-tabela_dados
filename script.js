function getNewRow(){

    const nome = document.querySelector("#name").value;
    const data = document.querySelector("#date").value;
    const escola = document.querySelector("#school").value;
    const vaga = document.querySelector("#vaga").value;

    const tabelaDados = document.querySelector("table");
    const novaLinha = tabelaDados.insertRow();
    
    novaLinha.insertCell().textContent = nome;
    novaLinha.insertCell().textContent = data;
    novaLinha.insertCell().textContent = escola;
    novaLinha.insertCell().textContent = vaga;

    document.querySelector("#name").value = "";
    document.querySelector("#date").value = "";
    document.querySelector("#school").value = "";
    document.querySelector("#vaga").value = "";
}