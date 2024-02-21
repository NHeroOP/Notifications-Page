const messages = document.querySelectorAll(".comment")
const read = document.querySelector(".read")

let unreadMsg = []


messages.forEach((msg) => {
  if (msg.classList.contains("unread")) {
    unreadMsg.push(msg)
    msg.style.backgroundColor = "hsl(210, 60%, 98%)";
    
    const msg_p = document.createElement("p")
    msg_p.classList = "unread-sign"
    msg.appendChild(msg_p)
  }
})

read.addEventListener("click", (e) => {
  
  unreadMsg.forEach((msg) => {
    msg.classList.remove("unread")
    msg.style.backgroundColor = "initial";
    if (msg.lastChild.classList.contains("unread-sign")){
      msg.removeChild(msg.lastChild)
    }
  })
})
