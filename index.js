window.addEventListener('load', () => {
  const nav = document.querySelector('nav')
  const burger = document.querySelector('.burger')
  const up = document.querySelector('#up')
  const middle = document.querySelector('#middle')
  const down = document.querySelector('#down')
  const validate = document.querySelector('#name-button')
  const input = document.querySelector('#name')
  const nameText = document.querySelector('#hello-name')
  const door = document.querySelector('.door')
  const logo = document.querySelector('.half-logo-off')
  const nameWrap = document.querySelector('.name-off')
  const members = [{name: 'Jessica', lastname: 'Pearson', function: 'CEO'}, {name: 'Harvey', lastname: 'Specter', function: 'CEO & Head lawyer'}, {name: 'Louis', lastname: 'Litt', function: 'CEO & finance lawyer'},
  {name: 'Donna', lastname: 'Paulsen', function: 'Community manager'}, {name: 'Rachelle', lastname: 'Zane', function: 'Ayoub\'s wife'}, {name: 'Mike', lastname: 'Ross', function: 'Lawyer'},
  {name: 'Amanda', lastname: 'Schull', function: 'Lawyer'}, {name: 'Daniel', lastname: 'Hardman', function: 'Founder'}, {name: 'Robert', lastname: 'Zane', function: 'PDG'},
  {name: 'Travis', lastname: 'Tanner', function: 'Lawyer'}, {name: 'Charles', lastname: 'Forstman', function: 'Law expert'}, {name: 'Cameron', lastname: 'Dennis', function: 'Law expert'}]

  burger.addEventListener('click', () => handleBurger())

  const handleBurger = () => {
    if(up.className !== 'up') {
      up.className = 'up'
      middle.className = 'middle'
      down.className = 'down'
      nav.className = 'nav-open';
      console.log('ok')
    } else {
      up.className = 'close-up'
      middle.className = 'close-middle'
      down.className = 'close-down'
      nav.className = 'nav-closed';
      console.log(up.className)
    }
  }

  const unlockButton = (e) => {
    if (e.target.value.length >= 3) {
      validate.style.opacity = '1'
      validate.style.cursor = 'pointer'
      input.style.borderColor = 'grey'
      nameText.textContent = `Hi ${input.value} !`
      console.log(input.value)
    } else {
      validate.style.opacity = '0.5'
      validate.style.cursor = 'default'
     
    }
  }

  const access= () => {
    if (validate.style.opacity === '1') {
      door.style.zIndex = '-1'
      logo.className = 'half-logo'
      nameWrap.className = 'name'
    } else {
      input.style.border = '2px solid red'
    }
  }

  switch(true) {
    case (window.location.href === 'file:///C:/Users/Ayoub/Desktop/bootstrap/home.html'):
      validate.addEventListener('click', () => access())
      $('#name').on('change textInput input', (e) => unlockButton(e))
      break;
    case (window.location.href === 'file:///C:/Users/Ayoub/Desktop/bootstrap/team.html'):
      for (let i = 0; i < members.length; i++) {
        console.log(document.getElementById(i))
        document.getElementById(i).style.background = `url(./images/${members[i].name.toLocaleLowerCase()}.png)`
        document.getElementById(`b${i}`).textContent = `${members[i].name} ${members[i].lastname}`
        document.getElementById(`p${i}`).textContent = members[i].function
      }
      break;
  }
})