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
// Efeito aparecer projetos
document.addEventListener("DOMContentLoaded", () => {
    const projetos = document.querySelectorAll(".container__projetos");
    projetos.forEach((projeto, index) => {
        // Alterna entre direita (default) e esquerda
        if (index % 2 !== 0) {
            projeto.classList.add("esquerda");
        }
    });
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aparecer");
            } else {
                entry.target.classList.remove("aparecer");
            }
        });
    }, observerOptions);
    projetos.forEach(projeto => observer.observe(projeto));
});