import './dashboard.html'
import '../../components/header/header'
import '../../components/footer/footer'
import { PieceCollection } from '../../../collections/Pieces';

Template.dashboard.helpers({
     pieces() {
       return PieceCollection.find({});
     },
   });

Template.dashboard.events({
    "submit .js-ajouter-piece"(event){
        event.preventDefault();
       const nomPiece = event.target.text.value

       PieceCollection.insert({
            nom: nomPiece,
            dateCreation: new Date(),
          }); 
    }
})