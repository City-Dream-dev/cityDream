const mockProjects = [
  {
    'id': '5cec3d70-5001-4de7-a38c-3a0682ac2d82',
    'title': 'Вело парковка у центрі міста',
    'image': 'https://media-edg.barcelona.cat/wp-content/uploads/2016/12/13140856/IMG_20161212_082517.jpg',
    'short_description': 'я приїзжаю до центру міста на вєліку, і хочу його десь\nпарконуть так шоб мій вєлік не поїхав кататься без мене...',
    'author': {
      'id': '6cb0afbd-4d34-4583-918e-fde646e37a95',
      'name': 'Serhii Polishchuk',
      'avatar': 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-9/148020285_3921173837932700_1036186354155017450_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Uz2mjUCV-kAX-kGbeP&_nc_ht=scontent-mad1-1.xx&oh=00_AT-8vKt3D6RXu2DFqcMfOS7XMiR4-86b-vm7eJQ97NESAA&oe=631D578E'
    }
  },
  {
    'id': '5cec3d70-5001-4de7-a38c-3a0682ac2d82',
    'title': 'Вело парковка у центрі міста',
    'image': 'https://media-edg.barcelona.cat/wp-content/uploads/2016/12/13140856/IMG_20161212_082517.jpg',
    'short_description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur doloremque eos quia? Asperiores deserunt doloremque ducimus facere illo incidunt quae quisquam reiciendis saepe velit. Amet deserunt quam quidem saepe tempore. Accusantium ad animi, autem, blanditiis corporis dicta doloribus esse, eum excepturi fugit hic ipsam laborum maxime natus nesciunt nisi omnis pariatur possimus quibusdam reiciendis rem repudiandae rerum sint tempore tenetur unde ut. Explicabo, minima, vel! Ab, ad deleniti doloremque doloribus dolorum error est explicabo in incidunt iure magni nam natus necessitatibus nemo officia officiis optio praesentium quae quasi veniam. Accusantium alias asperiores debitis dicta dolore est iusto perspiciatis quos.',
    'author': {
      'id': '6cb0afbd-4d34-4583-918e-fde646e37a95',
      'name': 'Serhii Polishchuk',
      'avatar': 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-9/148020285_3921173837932700_1036186354155017450_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Uz2mjUCV-kAX-kGbeP&_nc_ht=scontent-mad1-1.xx&oh=00_AT-8vKt3D6RXu2DFqcMfOS7XMiR4-86b-vm7eJQ97NESAA&oe=631D578E'
    }
  },
  {
    'id': '5cec3d70-5001-4de7-a38c-3a0682ac2d82',
    'title': 'Вело парковка у центрі міста',
    'image': 'https://media-edg.barcelona.cat/wp-content/uploads/2016/12/13140856/IMG_20161212_082517.jpg',
    'short_description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis exercitationem facere fuga in iste obcaecati sapiente, soluta sunt? Accusantium ad animi at autem dicta ea earum expedita facilis harum id libero nam possimus quidem rerum, saepe sapiente suscipit tempore velit!',
    'author': {
      'id': '6cb0afbd-4d34-4583-918e-fde646e37a95',
      'name': 'Serhii Polishchuk',
      'avatar': 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-9/148020285_3921173837932700_1036186354155017450_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Uz2mjUCV-kAX-kGbeP&_nc_ht=scontent-mad1-1.xx&oh=00_AT-8vKt3D6RXu2DFqcMfOS7XMiR4-86b-vm7eJQ97NESAA&oe=631D578E'
    }
  },
  {
    'id': '5cec3d70-5001-4de7-a38c-3a0682ac2d82',
    'title': 'Вело парковка у центрі міста',
    'image': 'https://media-edg.barcelona.cat/wp-content/uploads/2016/12/13140856/IMG_20161212_082517.jpg',
    'short_description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad amet consequatur corporis cupiditate, eaque facere harum impedit magnam molestias nisi odio quas quasi quos tenetur vero vitae! A, asperiores beatae, consequatur cum cupiditate doloremque ducimus esse fugit illo iste laborum obcaecati officiis pariatur placeat ratione sapiente sit, ut voluptatibus.',
    'author': {
      'id': '6cb0afbd-4d34-4583-918e-fde646e37a95',
      'name': 'Serhii Polishchuk',
      'avatar': 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-9/148020285_3921173837932700_1036186354155017450_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0Uz2mjUCV-kAX-kGbeP&_nc_ht=scontent-mad1-1.xx&oh=00_AT-8vKt3D6RXu2DFqcMfOS7XMiR4-86b-vm7eJQ97NESAA&oe=631D578E'
    }
  }
];

const getProjectCard = (project) => `
  <div class="project-card__image">
    <img src="${project.CoverImage}" alt="${project.Title}">
  <div>
  <h3 class="project-card__title">
    ${project.Title}
  </h3>
  <p class="project-card__author">
    ${project.Owner.FirstName} ${project.Owner.LastName}
  </p>
  <p class="project-card__description">
     ${project.Description}
  </p>
`;

(function () {
  const projectsBlock = document.getElementsByClassName('js-projects-block')[0];

  // TODO: replace mock data with request. Need to put correct url
  fetch('https://www.citydream.pp.ua/api/dreams.json')
    .then(data => data.json())
    .then(data => {
    data?.projects?.forEach((project) => {
      const projectCardContent = getProjectCard(project);
      const projectCard = document.createElement('div');

      projectCard.setAttribute('class', 'project-card');
      projectCard.innerHTML = projectCardContent;
      projectsBlock.appendChild(projectCard);
    })
  }).catch(error => console.error(error));

  // mockProjects.forEach((project) => {
  //   const projectCardContent = getProjectCard(project);
  //   const projectCard = document.createElement('div');
  //
  //   projectCard.setAttribute('class', 'project-card');
  //   projectCard.innerHTML = projectCardContent;
  //   projectsBlock.appendChild(projectCard);
  // })
})();
