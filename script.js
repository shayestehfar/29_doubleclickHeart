const loveMe = document.querySelector('.love-me')
const timesEl = document.querySelector('.times')
let times = 0

loveMe.addEventListener('dblclick', (e) => {
  times++
  timesEl.innerText = times

  const clickX = e.clientX // Returns x of clicked point
  const clickY = e.clientY // Returns Y of clicked point
  const xOffset = e.target.offsetLeft // Finds the x offset of the target element: love-me
  const yOffset = e.target.offsetTop // Finds the y offset of the target element : love me
  const x = clickX - xOffset // the x position of the clicked point in relative to target element
  const y = clickY - yOffset // the y position of the clicked point in relative to target element

  // create heart element
  const heartEl = document.createElement('i')
  heartEl.classList.add('fas')
  heartEl.classList.add('fa-heart')
  loveMe.appendChild(heartEl)
  heartEl.style.left = `${x}px`
  heartEl.style.top = `${y}px`

  //remove created element after 1 s
  setTimeout(() => {
    heartEl.remove()
  }, 1000)
})
