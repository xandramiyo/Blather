console.log('Hello World')

const commentCtr = document.querySelector('.post-comment-ctr')
const commentMenu = document.querySelector('.comment-menu-btn')

commentCtr.addEventListener('click', handleClick)

function handleClick(evt) {
  if(evt.target.classList.contains('btn-img')) {
    const showPostCommentDiv = evt.target.parentNode.parentNode
    showPostCommentDiv.querySelector('.sub-menu').classList.toggle('hidden')
  }
}

const nav = document.querySelector(".nav")

nav.addEventListener('click', function(evt) {
  console.log('click')
})

