import { Template } from 'meteor/templating';

import { ColocationCollection } from '../api/colocation-collection';

import './colocation.html';

Template.colocation.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    ColocationCollection.update(this._id);
  },
});
