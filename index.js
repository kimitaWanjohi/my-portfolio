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
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'https://picsum.photos/200/300',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'https://picsum.photos/200/300',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'https://picsum.photos/200/300',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'https://picsum.photos/200/300',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'https://picsum.photos/200/300',
    liveLink: 'https://www.google.com',
    githubLink: 'https://www.google.com',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Project 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.',
    image: 'https://picsum.photos/200/300',
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
            <button class='card-btn'>See Project</button>
        </div>
        
        `;
    works.appendChild(projectCard);
  });
}

createProjectCards(projectsData);
