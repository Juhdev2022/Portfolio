function writeTitle(){
    function activeWorld(element){
        const arrText = element.innerHTML.split('');
        element.innerHTML = '';
        arrText.forEach((letra, i) =>{
            setTimeout(()=>{
                element.innerHTML += letra;
            }, 75 * i);
        })
    }
    const title = document.querySelector('.digitando');
    activeWorld(title);
}
writeTitle();




function menuMobile(){
    const activeMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacao-primaria');
    
    
    activeMenu.addEventListener('click',()=>{
        activeMenu.classList.toggle('fa-x');
        navMenu.classList.toggle('ativado');
    });
}



function sobreMim(){
const divExperiencia = document.querySelectorAll('.experience_content div');
const liExperiencia = document.querySelectorAll('experience_content ul li');
const divEducacao = document.querySelectorAll('education_content div');
const liEducacao = document.querySelectorAll('education_content ul li');

function slideShow(index){
    divExperiencia.forEach((div)=>{
        div.classList.remove('ativo')
    });

    liExperiencia.forEach((botao)=>{
        botao.classList.remove('ativo');
    });
    divExperiencia[index].classList.add('ativo');
    liExperiencia[index].classList.add('ativo');
   
}
function slideShow2(index){
    divEducacao.forEach((div)=>{
        div.classList.remove('ativo')
    });
    liEducacao.forEach((botao)=>{
       botao.classList.remove('ativo');
    })
    divEducacao[index].classList.add('ativo');
    liEducacao[index].classList.add('ativo');
}

liExperiencia.forEach((event, index) => {
    event.addEventListener('click', () =>{
        slideShow(index);
    })
});

liEducacao.forEach((event, index) => {
    event.addEventListener('click', () =>{
        slideShow2(index);
    })
});
}

sobreMim();




document.addEventListener('DOMContentLoaded', function() {
    const buttonGraphic = document.querySelector('.projects_models .graphic');
    const buttonAll = document.querySelector('.projects_models .all');
    const buttonDesign = document.querySelector('.projects_models .design');
    const buttonWebsite = document.querySelector('.projects_models .website');
    const images = document.querySelectorAll('.projects_storage ul li');
  
    buttonGraphic.addEventListener('click', function() {
      images.forEach(function(image) {
        if (image.id === 'graphic') {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  
    buttonAll.addEventListener('click', function() {
      images.forEach(function(image) {
        image.style.display = 'block';
      });
    });
  
    buttonDesign.addEventListener('click', function() {
      images.forEach(function(image) {
        if (image.id === 'design') {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    });
  
    buttonWebsite.addEventListener('click', function() {
        images.forEach(function(image) {
          if (image.id.includes('website')) {
            image.style.display = 'block';
          } else {
            image.style.display = 'none';
          }
        });
      });
    });


         // Obtém a referência para todos os elementos <li> dentro de .projects_models ul
         const buttons = document.querySelectorAll('.projects_models ul li');

         // Adiciona um ouvinte de evento de clique a cada botão
         buttons.forEach(button => {
             button.addEventListener('click', function() {
                 // Remove a classe 'active' de todos os botões
                 buttons.forEach(btn => btn.classList.remove('active'));

                 // Adiciona a classe 'active' somente ao botão clicado
                 this.classList.add('active');
             });
         });





