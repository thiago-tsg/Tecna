import '../plugins/pure-slide/pure-slide';

import '../plugins/pure-lightbox/pure-lightbox';
import VMasker from 'vanilla-masker';
// test if #f_telefone exists
if (document.querySelector("#f_telefone")) {
  VMasker(document.querySelector("#f_telefone")).maskPattern("(99) 99999-9999");
}
document.querySelectorAll('.tabs a').forEach(tab => {
  tab.addEventListener('click', function(e) {
    e.preventDefault();

    // Remove a classe ativa de todas as tabs e conteúdos
    document.querySelectorAll('.tabs a').forEach(link => link.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Adiciona a classe ativa ao link clicado e ao conteúdo correspondente
    this.classList.add('active');
    document.getElementById(this.getAttribute('data-tab')).classList.add('active');
  });
});


window.onscroll = function() {
  addClassOnScroll();
};

function addClassOnScroll() {
  // Verifica se a página foi rolada mais de 150px\
  const header = document.getElementById("tpl__header");
  if (window.scrollY > 60) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}
