console.log('Hello World')

//nav bar submenu
const userDropdown = document.querySelector('.user-menu-dropdown')
const userMenu = document.querySelector('.user-menu-wrap')

userDropdown.addEventListener('click', function(evt) {
  userMenu.classList.toggle('open-menu')
})

//thread submenu
const threadCtr = document.querySelector('.thread-ctr')

if(threadCtr) {
  threadCtr.addEventListener('click', threadMenuClick)

  function threadMenuClick(evt) {
    const threadBanner = evt.target.parentNode.parentNode
    threadBanner.querySelector('.dot-menu').classList.toggle('hidden')
  }
}

//comment submenu
const commentCtr = document.querySelector('.post-comment-ctr')
const commentMenu = document.querySelector('.comment-menu-btn')

if(commentCtr) {
  commentCtr.addEventListener('click', handleClick)
  
  function handleClick(evt) {
    if(evt.target.classList.contains('btn-img')) {
      const showPostCommentDiv = evt.target.parentNode.parentNode
      showPostCommentDiv.querySelector('.sub-menu').classList.toggle('hidden')
    }
  }
}

//text editor
const buttons = document.querySelectorAll('.option-button')
const contentInput = document.querySelector('.text-input')

if(buttons) {
  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      let myEvent = button.dataset.command
    // document.execCommand(myEvent, false, null)
    //add || myEvent === "insertImage" in the if statement when added
    if(myEvent === 'createLink') {
      let url = prompt('Insert link here')
      contentInput.execCommand(myEvent, false, url)
    }
    })
  })
}
