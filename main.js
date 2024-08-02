const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(){
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu)



let count = 1

document.getElementById('radio1').checked = true

setInterval(function(){
  nextImage()
}, 5000)

function nextImage(){
  count++
  if(count>3){
    count = 1
  }
  document.getElementById("radio"+count).checked = true
}