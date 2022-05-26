import "./message.html"
import "./message.css"

Template.messages.events({
    "click .message" (event) {
        event.currentTarget.remove()
    },
});

export const popMessage = (type, contenu) => { 
    
    let newDiv = document.createElement("div")
    newDiv.classList.add("message")

    switch (type) {
        case "success" :
            newDiv.classList.add("success")
            break
        case "warning" :
            newDiv.classList.add("warning")
            break
        case "error" :
            newDiv.classList.add("error")
            break
    }
   
    newMessage = document.createElement("p")
    newMessage.append(contenu)

    newDiv.append(newMessage)
    messages.append(newDiv)
}