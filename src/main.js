import './style.css'
import data from './data.json'

document.addEventListener('DOMContentLoaded', () => {
  // Set Presentation Section content
  const presentationSection = document.querySelector('#presentation')

  const presentationFragment = `
    <h1>${data.personalData.fullname}</h1>
    <p>${data.personalData.department}</p>
    <div>
      <p>${data.personalData.addres}</p>
      <p>${data.personalData.phone}</p>
      <p>${data.personalData.email}</p>
    </div>
  `
  presentationSection.innerHTML += presentationFragment

  // Set Skills Section content
  const skillsSection = document.querySelector('#skills')

  const skillsFragment = `<p>${data.skills}</p>`

  skillsSection.innerHTML += skillsFragment

  // Set Education section content
  const educationSection = document.querySelector('#education')

  let educationFragment = ``

  for (const item of data.education) {
    const fragment = `
    <div>
      <h3>${item.instituteName}</h3>
      <p>${item.duration.start} to ${item.duration.end}</p>
      <h4>Exciting things I did:</h4>
      <ul>
        ${(item.thingsIDid.map((value) => `<li>${value}</li>`)).join("")}
      </ul>
    </div>
    `

    educationFragment += fragment
  }

  educationSection.innerHTML += educationFragment

  // Set Experience section content
  const experienceSection = document.querySelector('#experience')

  let experienceFragment = ``

  for (const item of data.experience) {
    const fragment = `
    <div>
      <h3>${item.companyName}, ${item.location} – ${item.role}</h3>
      <p>${item.duration.start} to ${item.duration.end}</p>
      <h4>Key Achievements:</h4>
      <ul>
        ${(item.achievements.map((value) => `<li>${value}</li>`)).join("")}
      </ul>
      <h4>Skills Used/Acquired:</h4>
      <ul>
        ${(item.skillsAcquired.map((value) => `<li>${value}</li>`)).join("")}
      </ul>
      </div>
    `

    experienceFragment += fragment
  }

  experienceSection.innerHTML += experienceFragment

  // Set Social section content
  const socialSection = document.querySelector('#social')

  const socialFragment = `
  <div>
    <a href="${data.links.github}">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#4a5565" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M9.974 0C4.465 0 0 4.465 0 9.974C0 14.38 2.857 18.119 6.821 19.439C7.32 19.529 7.5 19.222 7.5 18.958C7.5 18.721 7.492 18.093 7.489 17.262C4.714 17.864 4.128 15.924 4.128 15.924C3.676 14.772 3.021 14.465 3.021 14.465C2.116 13.846 3.09 13.86 3.09 13.86C4.092 13.93 4.617 14.888 4.617 14.888C5.507 16.412 6.953 15.972 7.519 15.717C7.61 15.072 7.87 14.632 8.154 14.383C5.94 14.132 3.612 13.276 3.612 9.453C3.612 8.366 4.001 7.474 4.636 6.778C4.535 6.525 4.19 5.51 4.735 4.138C4.735 4.138 5.572 3.869 7.477 5.159C8.29064 4.93788 9.12986 4.8249 9.973 4.823C10.8161 4.8249 11.6554 4.93788 12.469 5.159C14.375 3.868 15.211 4.138 15.211 4.138C15.756 5.51 15.414 6.525 15.31 6.778C15.95 7.474 16.334 8.365 16.334 9.453C16.334 13.286 14.004 14.128 11.782 14.375C12.137 14.683 12.457 15.291 12.457 16.221C12.457 17.555 12.445 18.631 12.445 18.958C12.445 19.225 12.623 19.535 13.132 19.437C17.094 18.115 19.948 14.379 19.948 9.974C19.948 4.465 15.483 0 9.974 0C9.974 0 9.974 0 9.974 0Z" fill="#030712" fill-rule="evenodd" transform="translate(2.052 2)" />
        </g>
      </svg>
      <span>Visit my Github</span>
    </a>
    <a href="${data.links.linkedin}">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#4a5565" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M2.188 2.38419e-07C0.979601 0 0 0.979601 0 2.188C2.38419e-07 3.3964 0.979601 4.376 2.188 4.376C3.3964 4.376 4.376 3.3964 4.376 2.188C4.376 0.979601 3.3964 0 2.188 0C2.188 0 2.188 2.38419e-07 2.188 2.38419e-07ZM6.442 6.034L6.442 18.173L10.211 18.173C10.211 18.173 10.211 12.17 10.211 12.17C10.211 10.586 10.509 9.052 12.473 9.052C14.41 9.052 14.434 10.863 14.434 12.27C14.434 12.27 14.434 18.174 14.434 18.174L18.205 18.174C18.205 18.174 18.205 11.517 18.205 11.517C18.205 8.247 17.501 5.734 13.679 5.734C11.844 5.734 10.614 6.741 10.111 7.694C10.111 7.694 10.06 7.694 10.06 7.694L10.06 6.034L6.442 6.034ZM0.3 6.034L4.075 6.034L4.075 18.173L0.3 18.173L0.3 6.034Z" fill="#030712" transform="translate(2.795 2.821)" />
        </g>
      </svg>
      <span>Visit my Linkedin</span>
    </a>
  </div> 
  `

  socialSection.innerHTML += socialFragment
})