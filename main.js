const messages = document.querySelectorAll(".comment")
const read = document.querySelector(".read")

let unreadMsg = []


messages.forEach((msg) => {
  if (msg.classList.contains("unread")) {
    unreadMsg.push(msg)
    msg.style.backgroundColor = "hsl(210, 60%, 98%)";
    const msg_p = msg.lastElementChild.firstElementChild
    msg_p.innerHTML += '<i class="fa-solid fa-circle"></i>'
  }
})

read.addEventListener("click", (e) => {
  
  unreadMsg.forEach((msg) => {
    msg.classList.remove("unread")
    msg.style.backgroundColor = "initial";
    const p = msg.lastElementChild.firstElementChild
    if(p.lastElementChild.classList.contains("fa-circle")){
      p.removeChild(p.lastElementChild)
    }
  })
})
