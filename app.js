// Display name and title on very top
function displayName(data) {
  const top = document.getElementById('top');

  top.innerHTML = `
    <h1>${data.name}</h1>
    <p>${data.title}</p>
  `
}

// Display work experience
function displayWorkExperience(data) {
  const workExperience = document.getElementById('work-experience');

  data.workExperiences.forEach(job => {
    const { title, company, site, period, desc } = job;

    const descList = desc.map(list => `<li>${list}</li>`).join('');

    workExperience.innerHTML +=
      `
      <div class='body'>
        <h4>${title}</h4>
        <span class='grey-text'>${company}  ${site && `- <a href=${site}>${displayLink(site)}</a>`}</span>
        <span class='date'>${period}</span>
        <div class='job-des'>
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

  data.projects.forEach(project => {
    const { title, desc, site, stacks } = project;

    projectsList.innerHTML += `
      <div class='body'>
        <h4>${title}</h4>
        <span class='grey-text'>${desc} - <a href=${site}>${displayLink(site)}</a></span>
        <span class='date'>${stacks}</span>
      </div>
    `
  });
}

// Display links without 'https://'
function displayLink(link) {
  return link.replace('https://', '')
}

// Contact section
function displayContact(data) {
  const contact = document.getElementById('contact');
  data.personalInfo.forEach(info => {
    const { title, desc, link1, link2 } = info;
    contact.innerHTML += `
      ${title === 'Websites'
        ? `<div class='contact__container'>
            <h5>${title}</h5>
            <span><a href=${link1}>${displayLink(link1)}</a></span><br/>
            <span><a href=${link2}>${displayLink(link2)}</a></span>
          </div>`
        : `<div class='contact-section'>
            <h5>${title}</h5>
            <p>${desc}</p>
          </div>`
      }  
    `
  })
}

// Display skills/ rograms
function displaySkills(data) {
  const programs = document.getElementById('programs');
  data.skills.forEach(skill => {
    programs.innerHTML += `
      <li>${skill}</li>
    `
  })
}

// Display education
function displayEducation(data) {
  const education = document.getElementById('education');
  data.educations.forEach(edu => {
    const { degree, school, locationYear } = edu;

    education.innerHTML += `
      <div class='contact-section'>
        <h5>${degree}</h5>
        <p>${school}</br>${locationYear}</p>
      </div>
    `
  })
}

// Fetch data
fetch('./resume.json')
  .then(response => response.json())
  .then(data => {
    displayName(data);
    displayWorkExperience(data);
    displayProjects(data);
    displayContact(data);
    displaySkills(data);
    displayEducation(data);
  });