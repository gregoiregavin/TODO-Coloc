import './dashboard.html'
import '../../components/header/header'
import '../../components/footer/footer'

Template.dashboard.events({
    "submit .js-ajouter-piece"(event){
        event.preventDefault();
       const nomPiece = event.target.text.value

        Pieces.insert({
            nom: nomPiece,
            dateCreation: new Date(),
          }); 
    }
})