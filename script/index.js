const members = [
  { name: 'Peter Quill', id: 'peter' },
  { name: 'Gamora Titan', id: 'gamora' },
  { name: 'Drax o Destruidor', id: 'drax' },
  { name: 'Mantis', id: 'mantis' },
  { name: 'Rocket Raccoon', id: 'rocket' },
  { name: 'I am Groot', id: 'groot' },
]

let activeMember = 0
console.log(activeMember)

const images = document.getElementById('images')

function changeStatusButtons() {
  const prev = document.getElementById('button_prev')
  const isFirst = activeMember === 0
  prev.removeAttribute("disabled") != isFirst
  prev.disabled = isFirst

  
  const next = document.getElementById('button_next')
  const isLast = activeMember === members.length - 1
  next.disabled = isLast

}

function navigationMember(direction){
  activeMember += direction

  const member = members[activeMember]

  console.log(activeMember, member)

  images.style.transform = `translateY(${-100 * activeMember}vh)` //muda os personagens com translate

  changeStatusButtons()
}