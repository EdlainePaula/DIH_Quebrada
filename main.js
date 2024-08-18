const temporizador=document.querySelector('.temporizador');
const timerloop= setInterval(contadorDeTempo, 1000);


function contadorDeTempo(){

    const ct= new Date();
    console.log('ct = ${ct}');

    const tf= new Date(2024, 8, 30, 0o0, 0o0, 0o0);
    console.log('tf = ${tf}');

    const deltaT= tf - ct;
    console.log('deltaT = ${deltaT}');

    const diasCalc =  deltaT/(1000 * 60 * 60 *24);
    const dias = Math.floor(diasCalc);

    const horasCalc = (diasCalc-dias) * 24;
    const horas= Math.floor(horasCalc);

    const minutosCalc = (horasCalc-horas) * 60;
    const minutos= Math.floor(minutosCalc);

    const segundosCalc = (minutosCalc-minutos) * 60;
    const segundos= Math.floor(segundosCalc);

    temporizador.innerHTML=`
    <div>${dias}</div>
    <div>${horas}</div>
    <div class="coluna">:</div>
    <div>${minutos}</div>
    <div class="coluna">:</div>
    <div>${segundos}</div>
    `; 

    if(deltaT < 0) {
        clearInterval(timerloop);
        temporizador.innerHTML ="<h1> Fim da promocção</h1>"
    }
    
};

function abrirPagina(){
    window.location ="novidades.html"
}

function paginaInicial(){
    window.location ="index.html"
}

var batom = document.getElementById('batom');

batom.addEventListener('click', function() {
    window.location.href = 'batom.html';
});

var batom = document.getElementById('bases');

bases.addEventListener('click', function() {
    window.location.href = 'bases.html';
});


const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 8,
    speed: 200,
    preventClicks: true,
    noSwiping: true,
    freeMode: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        950: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


const barraDePesquisa = document.querySelector(".banner__pesquisa");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
    const produtos = document.querySelectorAll(".swiper-slide");

    const valorFiltro = barraDePesquisa.value.toLowerCase();

    produtos.forEach(produto => {
        const titulo = produto.textContent.toLowerCase();

        if (titulo.includes(valorFiltro)) {
            produto.style.display = "block";
        } else {
            produto.style.display = "none";
        }
    });

    if (algumProdutoVisivel) {
        tituloPagina.classList.remove('hidden');
    } else {
        tituloPagina.classList.add('hidden');
    }
}