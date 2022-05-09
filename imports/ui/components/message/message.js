import "./message.html"
import "./message.css"

Template.messages.events({
    "click .message" (event) {
        currentMessage = event.currentTarget
        currentMessage.remove()
    },
});

export const popMessage = () => { 
    let messages = document.getElementById("messages")
    console.log(messages);
    messages.classList.toggle('invisible');
}