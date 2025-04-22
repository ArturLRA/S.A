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

projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const modal = document.getElementById('projectModal');
      document.getElementById('modalImg').src = card.querySelector('img').src;
      document.getElementById('modalTitle').textContent = card.querySelector('h3').textContent;
      document.getElementById('modalDescription').textContent = card.querySelector('p').textContent;
      if (card.dataset.link === '') {
        document.getElementById('modalLink').style.display = 'none';
      }
      else {
        document.getElementById('modalLink').href = card.dataset.link;
      }

      modal.style.display = 'flex';
    });
  });
  
  document.querySelector('.closeBtn').addEventListener('click', () => {
    document.getElementById('projectModal').style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
    }
  });