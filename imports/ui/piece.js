import { Template } from 'meteor/templating';

import { PieceCollection } from '../api/piece-collection';

import './piece.html';

// Ici on récup le nm de l'utilisateur

Template.piece.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    PieceCollection.update(this._id, {
      $set: { isChecked: !this.isChecked },
    });
  },
  'click .delete'() {
    PieceCollection.remove(this._id);
  },
});
