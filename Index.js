window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navBar');

    if (window.scrollY > 0) {
        navBar.classList.add('shadow'); 
    } else {
        navBar.classList.remove('shadow'); 
    }
});

const filters = ['subjectFilter', 'trimesterFilter', 'toolFilter', 'languageFilter'];


const projectCards = document.querySelectorAll('.projectCard');


filters.forEach(id => {
    document.getElementById(id).addEventListener('change', filterProjects);
});


function filterProjects() {

    const subject = document.getElementById('subjectFilter').value;
    const trimester = document.getElementById('trimesterFilter').value;
    const tool = document.getElementById('toolFilter').value;
    const language = document.getElementById('languageFilter').value;


    projectCards.forEach(card => {

        const matchSubject = subject === '' || card.dataset.subject === subject;
        const matchTrimester = trimester === '' || card.dataset.trimester === trimester;
        const matchTool = tool === '' || card.dataset.tool === tool;
        const matchLanguage = language === '' || card.dataset.language === language;


        if (matchSubject && matchTrimester && matchTool && matchLanguage) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}