import './dashboard.html'
import '../../components/header/header'
import '../../components/footer/footer'
import { PieceCollection } from '../../../collections/Pieces';
import { TacheCollection } from '../../../collections/Taches';
import { Colocations } from '../../../collections/Colocations';

Template.dashboard.helpers({
  pieces() {
    return PieceCollection.find({});
  },
});

Template.piece.helpers({
  taches() {
    return TacheCollection.find({ idPiece: this._id });
  },
})

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

Template.form_tache.helpers({
  pieces() {
    return PieceCollection.find({});
  }
})

Template.form_tache.events({
  "submit .js-ajouter-tache"(event){
      event.preventDefault();
    // const nomPiece = event.target.text.value
     const { target } = event;
     const nomTache = target.text.value;
     const piece = target.choisir_piece.value;

     TacheCollection.insert({
          nom: nomTache,
          idPiece: piece,
          dateCreation: new Date(),
          dateDone: new Date(),
        }); 

      target.text.value = '';
  }
})

Template.tache.events({
  'click .delete'() {
    TacheCollection.remove(this._id);
  },
  'click .done'() {
    TacheCollection.update(this._id, {
      $set: { dateDone: new Date () },
    });
    Colocations.update( //copier-coller du stackoverflow de Joël
      { _id : colocId },
      { $inc : { membres: { ["$[index]"]: { score : 1 } } } },
      { arrayFilters: [ { index: Colocations.findIndex(membres.username === Meteor.user(true)) } ] },
    )
    //il faut faire un index finder pour avoir le bon utilisateur et update selon le stackoverflow
    // Index finder : 
    // const fruits = ["pomme", "banane", "melon", "fraise", "raisin"];   Pour nous c'est le tableau des membres
    // const indice = fruits.findIndex(fruit => fruit === "fraise");      
        // On cherche l'account qui est log ? Celui qui est log c'est 
        // find index iduser === meteor.user (true)
    // console.log(indice); // 3
    // console.log(fruits[indice]); // fraise 
    console.log('this._is', this._id)
  }
});


Template.piece.events({
  'click .delete'() {
    PieceCollection.remove(this._id);
  },
});

Template.registerHelper('formatDate', function(date) { //Comme c'est un register helper on peut l'utiliser partout
  const mois = date.getMonth() + 1;
  const jour = date.getDate();
  return jour + "-" + mois;
});