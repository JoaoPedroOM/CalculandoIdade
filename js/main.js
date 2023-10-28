// Inputs 
const dias = document.getElementById("day");
const mes = document.getElementById("month");
const ano = document.getElementById("year");

const Mybtn = document.getElementById("btn");

// Exibir calculo
const MostraAno = document.getElementById("showAno")
const MostraMes = document.getElementById("showMes")
const MostraDia = document.getElementById("showDias")

Mybtn.addEventListener("click", contagem);

function basicValidation(){
  const label = document.getElementsByTagName("label");
  const inputs = document.getElementsByTagName("input");
  const aviso = document.getElementsByClassName("warning");
  
  
  if(dias.value == "" && mes.value == "" && ano.value == "")
  {
    // For para percorrer todas as classes de "aviso",todos os elemntos com a tag "label" e "input e assim exibir o warning e mudar as cores necessárias
    for(let i = 0; i <=2; i++){
      aviso[i].innerHTML= "This fiel is required";
      aviso[i].style.color ="#FF5757";
      label[i].style.color = "#FF5757";
      inputs[i].style.backgroundColor = "#F0F0F0";

    }
    }

    else{
      for(let i = 0; i <=2; i++){
        aviso[i].innerHTML= "";
        label[i].style.color = "#716F6F";
        inputs[i].backgroundColor = "#FFF";
      }
    }
}

function contagem(){
  
//   // Pega a data atual
//   const hoje = new Date();

//   // Pega a data digitada pelo usuario
//   const dataNiver = new Date(`${ano.value},${mes.value}, ${dias.value}`);

//   // Faz a diferença entre ano informado e atual
//   const idade = Math.abs((dataNiver.getFullYear() - hoje.getFullYear()).toString().padStart(2,'0'));

//   // Faz a diferença do mes informado e atual 
//   const mesDiff = Math.abs(((dataNiver.getMonth() + 1)- hoje.getMonth()).toString().padStart(2,'0'));

// // Calcula a diferença em milissegundos entre as duas datas
// const diferencaEmMilissegundos = hoje - dataNiver;

// // Converte a diferença em milissegundos para dias
// const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));


//   console.log(diferencaEmDias);
//   console.log(idade);
//   console.log(mesDiff);

// Pega a data atual
const hoje = new Date();

const year = parseInt(ano.value);
const month = parseInt(mes.value) - 1; 
const dia = parseInt(dias.value);

const dataNiver = new Date(ano, month, dia);

// Calcula a diferença em milissegundos entre as duas datas
const diferencaSegundos = (dataNiver - hoje)/1000 ;

// Converte a diferença em milissegundos para dias
const diferencaEmDias = Math.floor(diferencaSegundos / 3600 / 24);

// Calcula a diferença em anos, meses e dias
const diffAnos = hoje.getFullYear() - year;
const diffMeses = (hoje.getMonth() - month).toString().padStart(2,'0');
const diffDias = (hoje.getDate() - dia).toString().padStart(2,'0');

console.log(diferencaEmDias);

MostraAno.innerHTML = diffAnos;
MostraMes.innerHTML = diffMeses;
MostraDia.innerHTML = diffDias;


}
