
// hover function isn't working.
let modalBtn = document.querySelector('.another')

$(document).ready(function() {
    $('.box').hover(function(){

        $(this).css("background-color", "black")
    },function(){
      $(this).css("background-color", "white")
    })
})


$(() => {
  const $openBtn = $('#openModal')
   const $modal = $('#modal')
   const $closeBtn = $('#close')

   const openModal = () => {
     $modal.css('display', 'block')
   }
   const closeModal = () => {
     $modal.css('display', 'none')
   }
   $openBtn.on("click", openModal)
   $closeBtn.on('click', closeModal)



})
