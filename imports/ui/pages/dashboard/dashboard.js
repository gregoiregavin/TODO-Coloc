import './dashboard.html'
import '../../components/header/header'
import '../../components/footer/footer'
import { Pieces } from '../../../collections/Pieces';

Template.dashboard.helpers({
     pieces() {
       return Pieces.find({});
     },
   });

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