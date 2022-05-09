import "./message.html"
import "./message.css"

Template.messages.events({
    "click .message" (event) {
        currentMessage = event.currentTarget;
        currentMessage.remove();
    },
});

export const creerMessage = () => { 
    let parent = document.getElementById("messages")
    console.log(parent);
}