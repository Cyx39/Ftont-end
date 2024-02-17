function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function Login(){
  var time1 = function redirecinar(){
    window.location.href = "./Login/Login.html"
  }
  setTimeout(time1, 2000)
}
function Cadastro(){
  window.location.href = "./Cadastro/Cadastro.html"
}
    // Fecha o overlay e volta para a tela anterior quando o botão é clicado
    Fechar.addEventListener('click', function () {
      var Voltar = function BACK(){
        window.history.back();
      }
      setTimeout(Voltar, 310)
    });

    
function suport() {
  window.alert("Em desevolvimento, mas caso tenha um problema entre em contato pelo e-mail. -> cnideias2024@gmail.com")
}

document.getElementById('ImagemUser').addEventListener('click', function() {
  document.getElementById('SelecionarImagem').click();
});

document.getElementById('SelecionarImagem').addEventListener('change', function() {
  var file = this.files[0];
  if (file) {
      var reader = new FileReader();
      reader.onload = function(e) {
          document.getElementById('ImagemUser').src = e.target.result;
      }
      reader.readAsDataURL(file);
  }
});

document.getElementById('user').addEventListener('click', function (){ 
  var nome = prompt('Digite seu nome  (OBS: não coloque "CN", Pois wundo Clicar no oK ja ira colocar automaticamente');
  if (nome !== null && nome !== "") {
   // Adiciona duas letras no início do nome
   var nomeModificado = "CN " + nome;
   document.getElementById("user").innerText = nomeModificado;
  } else {
    alert("Por favor, insira um nome.");
  }
})