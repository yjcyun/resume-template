// Display name and title on very top
function displayName(data) {
  const top = document.getElementById('top');
  top.innerHTML = '';

  top.innerHTML = `
    <h1>${data.name}</h1>
    <p>${data.title}</p>
  `
}

// Display work experience
function displayWorkExperience(data) {
  const workExperience = document.getElementById('work-experience');
  workExperience.innerHTML = '';

  data.workExperiences.forEach(job => {
    const { title, company, site, period, desc } = job;

    const descList = desc.map(list => `<li>${list}</li>`).join('');

    workExperience.innerHTML +=
      `
      <div class='body'>
        <h4>${title}</h4>
        <span class='grey-text'>${company}  ${site && `- <a href=${site}>${displayLink(site)}</a>`}</span>
        <span class="date">${period}</span>
        <div class="job-des">
          <ul>
           ${descList}
          </ul>
        </div>
      </div>
    `
  });
}

// Display projects
function displayProjects(data) {
  const projectsList = document.getElementById('projects');
  projectsList.innerHTML = '';

  data.projects.forEach(project => {
    const { title, desc, site, stacks } = project;

    projectsList.innerHTML += `
      <div class='body'>
        <h4>${title}</h4>
        <span class='grey-text'>${desc} - <a href=${site}>${displayLink(site)}</a></span>
        <span class="date">${stacks}</span>
      </div>
    `
  });
}

// Display links without 'https://'
function displayLink(link) {
  return link.replace('https://', '')
}



fetch('./resume.json')
  .then(response => response.json())
  .then(data => {
    displayName(data);
    displayWorkExperience(data);
    displayProjects(data);
  });