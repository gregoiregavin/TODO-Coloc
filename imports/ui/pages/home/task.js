import { Template } from 'meteor/templating';

import { TasksCollection } from '../api/tasks-collection';

import './task.html';

// Ici on récup le nm de l'utilisateur

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    TasksCollection.update(this._id, {
      $set: { isChecked: !this.isChecked },
    });
  },
  'click .delete'() {
    TasksCollection.remove(this._id);
  },
});