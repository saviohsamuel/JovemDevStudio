$(document).ready(function () {
    // Abrir/fechar menu ao clicar no botão
    $(".menu-toggle").on('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
        $(this).toggleClass("on");
        $(".menu-section").toggleClass("on");
        $("nav ul").toggleClass("hidden");
    });
    // Fechar menu ao clicar em um item de navegação
    $("nav ul li a").on('click', function () {
        $(".menu-toggle").removeClass("on");
        $(".menu-section").removeClass("on");
        $("nav ul").addClass("hidden");
    });
    // Fechar menu ao clicar fora do menu/nav
    $(document).on('click', function () {
        if ($(".menu-section").hasClass("on")) {
            $(".menu-toggle").removeClass("on");
            $(".menu-section").removeClass("on");
            $("nav ul").addClass("hidden");
        }
    });
    // Impede o fechamento ao clicar dentro do menu/nav
    $(".menu-section, nav ul").on('click', function (event) {
        event.stopPropagation(); // Impede que o clique se propague para o documento
    });
});

// Carrega o kit do Font Awesome
(function loadFontAwesome() {
    const script = document.createElement('script');
    script.src = "https://kit.fontawesome.com/bc93cf7741.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
})();  

// Botão de inicio da página
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 550)
})
function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};    

// Formata o número de telefone no padrão seguinte: (DDD) 91234-5678
function formatarTelefone(input) {
    let valor = input.value.replace(/\D/g, "");            
    if (valor.length <= 11) {
        valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    }    
    input.value = valor;
};