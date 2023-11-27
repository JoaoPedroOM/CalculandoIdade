// Inputs 
const dias = document.getElementById("day");
const mes = document.getElementById("month");
const ano = document.getElementById("year");

const Mybtn = document.getElementById("btn");

// Exibir calculo
const MostraAno = document.getElementById("showAno")
const MostraMes = document.getElementById("showMes")
const MostraDia = document.getElementById("showDias")

Mybtn.addEventListener("click", calculaData);
const label = document.getElementsByTagName("label");
const inputs = document.getElementsByTagName("input");
const aviso = document.getElementsByClassName("warning");

function basicValidation(){
  
  // Verifica se os campos estão vazios!
  if(dias.value == "" && mes.value == "" && ano.value == "")
  {
    // For para percorrer todas as classes de "aviso",todos os elemntos com a tag "label" e "input e assim exibir o warning e mudar as cores necessárias
    for(let i = 0; i <3; i++){
      aviso[i].innerHTML= "This fiel is required";
      label[i].style.color = "#FF5757";
      inputs[i].style.border = "2px solid #FF5757";
      inputs[i].style.backgroundColor = "#F0F0F0";

    }
  }
    else{
      for(let i = 0; i <3; i++){
        aviso[i].innerHTML= "";
        inputs[i].style.border = "2px solid #DBDBDB";
        label[i].style.color = "#716F6F";
        inputs[i].style.backgroundColor = "#FFF";
      }

      validaEntrada();
    }

}

function validaEntrada(){
    // Valida entrada dos inputs
    const atual = new Date();

    if(dias.value > 31 || dias.value <= 0){
      errorData();
    }
    else if(mes.value > 12 || mes.value <= 0)
    {
      aviso[1].innerHTML = "Must be a valid month";

      for (let i = 0; i < 3; i++) {
      label[i].style.color = "#FF5757";
      inputs[i].style.border = "2px solid #FF5757";
      }
    }

    else if(ano.value > atual.getFullYear() || ano.value <= 0)
    {
      aviso[2].innerHTML = "Must be in the past";

      for (let i = 0; i < 3; i++) {
      label[i].style.color = "#FF5757";
      inputs[i].style.border = "2px solid #FF5757";
      }
    }

    else {
      limparMensagens();
      verificaAnoBissexto();
  }
 
}

function verificaAnoBissexto() {

  if (anoBissexto(ano.value)) 
  {
    if (mes.value == 2 && dias.value > 29) 
    {
        errorData();
    } 
      else 
      {
        calculaData();
      }  
  } 
    else 
  {
    if (mes.value == 2 && dias.value > 28) 
    {
      errorData();
    } 
    else 
    {
      const mesesCom30dias = [4, 6, 9, 11];
      const mesesCom31dias = [1, 3, 5, 7, 8, 10, 12]; 

      const mesNumerico = parseInt(mes.value, 10);
      if(mesesCom31dias.includes(mesNumerico) && dias.value <= 31){
        calculaData();
      }
      else if(mesesCom30dias.includes(mesNumerico) && dias.value <=30)
      {
        calculaData();
      }
      else{
        errorData();
      }
    }
  }
}

function calculaData() {
  let dataUsuario = new Date(ano.value, mes.value, dias.value);

  let dataAtual = new Date();

  let diferenca = dataAtual.getTime() - dataUsuario.getTime();
  let anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365.25));
  
  let diasTotais = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  const meses = Math.floor((diasTotais % 365) / 30);
  const diffDias = Math.floor((diasTotais % 365) / 12);

  console.log(anos, meses, diffDias)

  MostraAno.innerHTML = anos;
  MostraMes.innerHTML = meses;
  MostraDia.innerHTML = diffDias;

}

function errorData() {
  aviso[0].innerHTML = "Must be a valid day";

  for (let i = 0; i < 3; i++) {
    label[i].style.color = "#FF5757";
    inputs[i].style.border = "2px solid #FF5757";
  }
}

function limparMensagens() {
  aviso[0].innerHTML = "";
  for (let i = 0; i <= 2; i++) {
    label[i].style.color = "#716F6F";
    inputs[i].style.border = "2px solid #DBDBDB";
  }
}

function anoBissexto(ano) {
  if ((ano % 400 === 0) || (ano % 4 === 0 && ano % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

