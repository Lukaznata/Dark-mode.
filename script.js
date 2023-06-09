const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')

$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})



const $elemento = document.querySelector('#meuElemento');
const $conteudoOriginal = $elemento.innerHTML;

const $botao = document.querySelector('#trocarBotao');
const $conteudoOriginalBt = $botao.innerHTML;

const $textoSimples = document.querySelector("#textoSimples");
const $textoSimplesOri = $textoSimples.innerHTML;

const $labeldarkmode = document.querySelector("#labelDarkMode");
const $labeldarkmodeOri = $labeldarkmode.innerHTML;

function alterarConteudo(elemento, conteudo) {
  elemento.innerHTML = conteudo;
}

$botao.addEventListener('click', function() {
  if ($elemento.innerHTML === $conteudoOriginal && $botao.innerHTML === $conteudoOriginalBt && $textoSimples.innerHTML === $textoSimplesOri) {
    alterarConteudo($elemento, 'Test Dark-Mode');
    alterarConteudo($botao, 'exchange language');
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

$icon.addEventListener('click', function() {
  $icon.classList.add('beat-fade');

  // Remova a classe 'beat-fade' após a duração da animação
  setTimeout(function() {
    $icon.classList.remove('beat-fade');
  }, 500);
});

$labelDarkMode.addEventListener('click', function() {
  $icon.classList.add('beat-fade');

  // Remova a classe 'beat-fade' após a duração da animação
  setTimeout(function() {
    $icon.classList.remove('beat-fade');
  }, 500);
});
  



var $elementoAnima = document.getElementById('meuElemento');
  $elementoAnima.addEventListener('animationend', function() {
  $elementoAnima.classList.add('shrink-concluida');


var $elementoAnimaFim = document.getElementsByClassName('shrink-concluida');
var $elementosEscondidos = document.getElementsByClassName('hide');

  $elementoAnimaFim[0].addEventListener('animationend', function() {
    for (var i = 0; i < $elementosEscondidos.length; i++){
      $elementosEscondidos[i].classList.remove('hide');
    }
  });
});
