import { Template } from 'meteor/templating';

import { CollocationCollection } from '../api/CollocationCollection';

import './Collocation.html';

Template.collocation.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    CollocationCollection.update(this._id, {
      $set: { isChecked: !this.isChecked },
    });
  },
  'click .delete'() {
    CollocationCollection.remove(this._id);
  },
});