import { Mongo } from 'meteor/mongo';
 
export const PieceCollection = new Mongo.Collection('pieces');

// Renvoie la liste de toutes les Pieces 
//export const toutesLesPieces = () => {
 //   return Pieces.find({}, { sort: { createdAt: -1 } });
//}

// Rajoute une Piece dans la collection
//export const ajouterPiece = (nomPiece) => {

 //   Pieces.insert({
 //       nom: nomPiece,
  //      dateCreation: new Date(),
 //   });
//};

Template.mainContainer.helpers({
   pieces() {
     return PieceCollection.find({});
   },
 });
 
Template.form3.events({
  'submit .piece-form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const { target } = event;
    const text = target.text.value;

    // Insert a task into the collection
    PieceCollection.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});