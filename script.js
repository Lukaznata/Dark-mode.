const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')
const $labeldarkmode = document.querySelector("#labelDarkMode");
//trocar classe do html
$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})
//altera classe do html com um enter
$labeldarkmode.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    $html.classList.toggle('dark-mode')
    // altera classe do html quando a tecla Enter for pressionada
  }
});




const $elemento = document.querySelector('#meuElemento');
const $conteudoOriginal = $elemento.innerHTML;

const $botao = document.querySelector('#trocarBotao');
const $conteudoOriginalBt = $botao.innerHTML;

const $textoSimples = document.querySelector("#textoSimples");
const $textoSimplesOri = $textoSimples.innerHTML;

const $labeldarkmodeOri = $labeldarkmode.innerHTML;

function alterarConteudo(elemento, conteudo) {
  elemento.innerHTML = conteudo;
}
//alterar linguagem via click no botao
$botao.addEventListener('click', function() {
  if ($elemento.innerHTML === $conteudoOriginal && $botao.innerHTML === $conteudoOriginalBt && $textoSimples.innerHTML === $textoSimplesOri) {
    alterarConteudo($elemento, 'Dark Mode');
    alterarConteudo($botao, 'Traduzir');
    alterarConteudo($textoSimples, 'this is a '+' <a href="https://www.google.com/search?q=dark-mode&rlz=1C1GCEU_pt-BRBR1044BR1044&oq=dark-mode&aqs=chrome..69i57j0i19i512l4j69i60j69i61l2.3712j0j7&sourceid=chrome&ie=UTF-8">dark-mode</a>' + ' test');
    alterarConteudo($labeldarkmode, 'Dark-mode');
  } else {
    alterarConteudo($elemento, $conteudoOriginal);
    alterarConteudo($botao, $conteudoOriginalBt);
    alterarConteudo($textoSimples, $textoSimplesOri);
    alterarConteudo($labeldarkmode, $labeldarkmodeOri);
  }
});





var $icon = document.getElementById('icon');
var $labelDarkMode = document.getElementById('labelDarkMode')
// Remova a classe 'beat-fade' após a duração da animação clicando na lampada
function removeBeatFadeClass() {
  $icon.classList.remove('beat-fade');
}
$icon.addEventListener('click', function() {
  $icon.classList.add('beat-fade');

  setTimeout(removeBeatFadeClass, 500);
});
// Remova a classe 'beat-fade' após a duração da animação clicando no texto
$labelDarkMode.addEventListener('click', function() {
  $icon.classList.add('beat-fade');

  setTimeout(removeBeatFadeClass, 500);
});





var $elementoAnima = document.querySelector('.animacaoInit');
var $elementosEscondidos = document.getElementsByClassName('hide');
//altera a classe hide. alterando a opacidade depois que animacao do $elementoAnima terminar.
$elementoAnima.addEventListener('animationend', function() {
    $elementosEscondidos[0].style.opacity = 1;
});



//adiciona uma classe ao html para fazer funcionar caso esteja sem javascript
document.body.classList.add('js-enabled');

// Verifica se o dispositivo tem preferência por cores claras
const prefersLightMode = window.matchMedia('(prefers-color-scheme: light)').matches;

// Se o modo claro for preferido, adiciona a classe "light-mode" ao elemento <html>
if (prefersLightMode) {
  document.documentElement.classList.add('light-mode');
}

//rola a pagina para o topo automaticamente ao iniciar
window.onload = function() {
  window.scrollTo(0, 0);
};




var $menuOculto = document.getElementById('menuOculto');
var $menuItens = document.querySelectorAll('#menu li a');
var removeActiveTimeout;

//adiciona a classe ao menu, o fazendo aparecer
$menuOculto.addEventListener('mouseenter', function() {
  $menuOculto.classList.add('active');
});
//retira a classe do menu, o fazendo sair
$menuOculto.addEventListener('mouseleave', function() {
  removeActiveTimeout = setTimeout(function() {
    $menuOculto.classList.remove('active');
  }, 0);
});

//passa item por item que estão com focus do menu, se tiverem. eles adicionam a classe de aparecer ao menu
$menuItens.forEach(function(item) {
  item.addEventListener('focus', function() {
    $menuOculto.classList.add('active');
    clearTimeout(removeActiveTimeout);
  });
// verifica se o focus ainda está no menu, se nao estiver, ele remove a classe, fazendo o menu fechar
  item.addEventListener('blur', function() {
    removeActiveTimeout = setTimeout(function() {
      $menuOculto.classList.remove('active');
    }, 0);
  });
});

  
