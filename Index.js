window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navBar');

    if (window.scrollY > 0) {
        navBar.classList.add('shadow'); 
    } else {
        navBar.classList.remove('shadow'); 
    }
});

// IDs dos selects de filtro
const filters = ['subjectFilter', 'trimesterFilter', 'toolFilter', 'languageFilter'];

// Seleciona todos os cards de projeto
const projectCards = document.querySelectorAll('.projectCard');

// Adiciona evento de mudança em todos os filtros
filters.forEach(id => {
    document.getElementById(id).addEventListener('change', filterProjects);
});

// Função que filtra os cards com base nas seleções
function filterProjects() {
    // Captura os valores atuais de cada filtro
    const subject = document.getElementById('subjectFilter').value;
    const trimester = document.getElementById('trimesterFilter').value;
    const tool = document.getElementById('toolFilter').value;
    const language = document.getElementById('languageFilter').value;

    // Itera sobre cada card
    projectCards.forEach(card => {
        // Verifica se o card corresponde a cada filtro (ou se o filtro está vazio)
        const matchSubject = subject === '' || card.dataset.subject === subject;
        const matchTrimester = trimester === '' || card.dataset.trimester === trimester;
        const matchTool = tool === '' || card.dataset.tool === tool;
        const matchLanguage = language === '' || card.dataset.language === language;

        // Se todos os filtros forem compatíveis, mostra o card; senão, esconde
        if (matchSubject && matchTrimester && matchTool && matchLanguage) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}