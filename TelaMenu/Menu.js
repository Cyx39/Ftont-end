document.getElementById('backlink').addEventListener('click', function(){
  var time = function back(){
    window.history.back()
  }
  setTimeout(time, 500);
});

document.getElementById('discord').addEventListener('click', function dc(){
  var direcioonamentotime1 = function diret(){
    window.location.href = "dasda"//trocar o link do DC
  }
  setTimeout(direcioonamentotime1, 1000)
});

function sporadms(){
  var div = document.getElementById("conteudo-adm");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
};

function dev(){
  var div = document.getElementById("dev");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

document.getElementById('Games-text').addEventListener('click', function(){
  var timeredirection = function(){
    window.location.href = '../Games/Games.html'
  }
  setTimeout(timeredirection, 998)
})