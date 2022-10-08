const getProjectCard = (project) => `
  <div class="project-card__image">
    <img src="${project.CoverImage}" alt="${project.Title}">
  <div>
  <h3 class="project-card__title">
    ${project.Title}
  </h3>
  <p class="project-card__author">
    ${project.Owner.FirstName.String} ${project.Owner.LastName.String}
  </p>
  <p class="project-card__description">
     ${project.Description}
  </p>
`;

(function () {
  const projectsBlock = document.getElementsByClassName('js-projects-block')[0];

  fetch('https://www.citydream.pp.ua/api/dreams.json')
    .then(data => data.json())
    .then(data => {
      data?.forEach((project) => {
        const projectCardContent = getProjectCard(project);
        const projectCard = document.createElement('div');
        projectCard.setAttribute('class', 'project-card');
        projectCard.innerHTML = projectCardContent;
        projectsBlock.appendChild(projectCard);
      })
    }).catch(error => console.error(error));
})();
