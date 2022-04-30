import { Template } from 'meteor/templating';

import { ColocationCollection } from '../api/ColocationCollection';

import './Colocation.html';

// On a pas besoin de ça non ?

Template.colocation.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    ColocationCollection.update(this._id);
  },
});