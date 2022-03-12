const fadeRightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInRight')
    }
  })
}, {
  threshold: 0.3
})
document.querySelectorAll('.project__details').forEach((projectDetail, index) => {
  if (index !== 1) {
    fadeRightObserver.observe(projectDetail)
  }
})

const fadeLeftObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeInLeft')
    }
  })
}, {
  threshold: 0.3
})
fadeLeftObserver.observe(document.querySelector('.about__text'))
fadeLeftObserver.observe(document.querySelector('.project__details--alt'))

const fadeInObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const contacts = document.querySelectorAll('.contact__detail')
      contacts.forEach((contact, index) => {
        contact.setAttribute('style', `animation: fadeIn .7s ${index / 3}s both`)
      })
    }
  })
}, {
  threshold: 0.3
})
fadeInObserver.observe(document.querySelector('.contact__details'))

const skillsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skills = document.querySelectorAll('.skill')
      skills.forEach(skill => {
        skill.setAttribute('style', 'display: flex')
      })
    }
  })
}, {
  threshold: 0.3
})
skillsObserver.observe(document.querySelector('.skills'))