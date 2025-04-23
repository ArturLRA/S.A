window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.navBar');

    if (window.scrollY > 0) {
        navBar.classList.add('shadow'); 
    } else {
        navBar.classList.remove('shadow'); 
    }
});

const filters = ['subjectFilter', 'trimesterFilter', 'toolFilter'];


const projectCards = document.querySelectorAll('.projectCard');


filters.forEach(id => {
    document.getElementById(id).addEventListener('change', filterProjects);
});


function filterProjects() {
    const subject = document.getElementById('subjectFilter').value;
    const trimester = document.getElementById('trimesterFilter').value;
    const tool = document.getElementById('toolFilter').value;

    projectCards.forEach(card => {
        const matchSubject = subject === '' || card.dataset.subject === subject;
        const matchTrimester = trimester === '' || card.dataset.trimester === trimester;
        const matchTool = tool === '' || card.dataset.tool === tool;

        if (matchSubject && matchTrimester && matchTool) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });


    const blocks = document.querySelectorAll('.mathBlocks, .portugueseBlocks, .scienceBlocks, .historyBlocks, .tiBlocks');
    blocks.forEach(block => {
        const visibleCards = block.querySelectorAll('.projectCard[style*="display: block"]');
        const title = block.querySelector('h1');

        if (visibleCards.length === 0) {
            title.style.display = 'none';
        } else {
            title.style.display = 'block';
        }
    });
}