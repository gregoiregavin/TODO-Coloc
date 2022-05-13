import './dashboard.html'
import '../../components/header/header'
import '../../components/footer/footer'
import { PieceCollection } from '../../../collections/Pieces';
import { TacheCollection } from '../../../collections/Taches';

Template.dashboard.helpers({
     pieces() {
       return PieceCollection.find({});
     },
     taches() {
      return TacheCollection.find({});
    },
   });

Template.form_piece.events({
    "submit .js-ajouter-piece"(event){
        event.preventDefault();
      // const nomPiece = event.target.text.value
       const { target } = event;
       const nomPiece = target.text.value;

       PieceCollection.insert({
            nom: nomPiece,
            dateCreation: new Date(),
          }); 

        target.text.value = '';
    }
})

Template.form_tache.events({
  "submit .js-ajouter-tache"(event){
      event.preventDefault();
    // const nomPiece = event.target.text.value
     const { target } = event;
     const nomTache = target.text.value;

     TacheCollection.insert({
          nom: nomTache,
          dateCreation: new Date(),
        }); 

      target.text.value = '';
  }
})
