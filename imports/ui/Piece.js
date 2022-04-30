import { Template } from 'meteor/templating';

import { PieceCollection } from '../api/PieceCollection';

import './Piece.html';

Template.piece.events({
 // 'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
 //   PieceCollection.update(this._id, {
 //     $set: { isChecked: !this.isChecked },
//    });
//  },
  'click .delete'() {
    PieceCollection.remove(this._id);
  },
});