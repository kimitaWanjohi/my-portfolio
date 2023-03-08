const menu = document.getElementById('menu');
const backdrop = document.getElementById('backdrop');
const works = document.getElementById('works');

// eslint-disable-next-line
function showMenu() {
  menu.classList.remove('mobile-menu-hide');
  backdrop.classList.remove('backdrop-hidden');
  document.body.style.overflow = 'hidden';
}

// eslint-disable-next-line
function hideMenu() {
  menu.classList.add('mobile-menu-hide');
  backdrop.classList.add('backdrop-hidden');
  document.body.style.overflow = 'auto';
}

// projects
const projectsData = [
  {
    id: 1,
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    name: 'Project 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    name: 'Project 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    name: 'Project 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 5,
    name: 'Project 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 6,
    name: 'Project 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'assets/Snapshoot-Portfolio.png',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

function createProjectCards(projects) {
  projects.forEach((project) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.innerHTML = `
        <div class='card-media' style='background-image: url(${project.image});'>
        </div>
        <div class='card-body'>
            <h2 class='card-title'>
                ${project.name}
            </h2>
            <ul class='card-tags'>
                ${project.technologies.map((tech) => `<li class='card-tag'>${tech}</li>`).join('')}
            </ul>
            <button data-target="modal-${project.id}" onclick="showModal(this)" class='card-btn'>See Project</button>
        </div>
        `;
    works.appendChild(projectCard);
  });
}

function createModals(projects) {
  projects.forEach((project) => {
    const modal = document.createElement('div');
    modal.classList.add('modal-container');
    modal.classList.add('modal-hidden');
    modal.id = `modal-${project.id}`;
    modal.innerHTML = `
    <div class="modal-close">
        <img class="close-icon" onclick="closeModal('modal-${project.id}')" src="assets/Icon.png" alt="close">
    </div>
    <div class="modal-media" style="background-image: url('${project.image}');">
    </div>
    <div class="modal-header">
        <div>
            <h2 class="modal-title">
                ${project.name}
            </h2>
        </div>
        <div class="modal-btns">
            <a href="${project.liveLink}" class="modal-btn">
                See Live
                <img class="ml-1" src="assets/live-btn.svg" alt="">
            </a>
            <a href="${project.githubLink}" class="modal-btn">
                See Source
                <img class="ml-1" src="assets/github-btn.svg" alt="">
            </a>
        </div>
    </div>
    <ul class="modal-tags">
        ${project.technologies.map((tech) => `<li class="modal-tag">${tech}</li>`).join('')}
    </ul>
    <div class="modal-desc">
        <p>
            ${project.description}
        </p>
    </div>
  `;
    document.body.appendChild(modal);
  });
}
function showModal(btn) {

  const modal = document.getElementById(btn.dataset.target); modal.classList.remove('modal-hidden'); backdrop.classList.remove('backdrop-hidden');

}

function closeModal(modalId) {

  const modal = document.getElementById(modalId); modal.classList.add('modal-hidden'); backdrop.classList.add('backdrop-hidden');

}

createProjectCards(projectsData);
