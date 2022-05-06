import { Template } from 'meteor/templating';
import { TasksCollection } from '../api/tasks-collection';
import { ColocationCollection } from '../api/colocation-collection';
import { PieceCollection } from '../api/piece-collection';
import { ReactiveDict } from 'meteor/reactive-dict';
import './app.html';
import './task.js';
import "./login.js";
import './colocation.js';
import './colocation.html'
import './piece.js';
import './piece.html'

const HIDE_COMPLETED_STRING = 'hideCompleted';

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

const getTasksFilter = () => {
  const user = getUser();

  const hideCompletedFilter = { isChecked: { $ne: true } };

  const userFilter = user ? { userId: user._id } : {};

  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  return { userFilter, pendingOnlyFilter };
};

Template.mainContainer.onCreated(function mainContainerOnCreated() {
  this.state = new ReactiveDict();
});

Template.mainContainer.events({
  'click #hide-completed-button'(event, instance) {
    const currentHideCompleted = instance.state.get(HIDE_COMPLETED_STRING);
    instance.state.set(HIDE_COMPLETED_STRING, !currentHideCompleted);
  },
  'click .user'() {
    Meteor.logout();
  }
});

Template.mainContainer.helpers({
 tasks() {
    const instance = Template.instance();
    const hideCompleted = instance.state.get(HIDE_COMPLETED_STRING);

    const { pendingOnlyFilter, userFilter } = getTasksFilter();

    if (!isUserLogged()) {
      return [];
    }

    return TasksCollection.find(hideCompleted ? pendingOnlyFilter : userFilter, {
      sort: { createdAt: -1 },
    }).fetch();
  },
  hideCompleted() {
    return Template.instance().state.get(HIDE_COMPLETED_STRING);
  },
  incompleteCount() {
    if (!isUserLogged()) {
      return '';
    }

    const { pendingOnlyFilter } = getTasksFilter();

    const incompleteTasksCount = TasksCollection.find(pendingOnlyFilter).count();
    return incompleteTasksCount ? `(${incompleteTasksCount})` : '';
  },
  isUserLogged() {
    return isUserLogged();
  },
  getUser() {
    return getUser();
  }, 
  colocations() {
    return ColocationCollection.find({});
  },
  pieces() {
    return PieceCollection.find({});
  },
});

Template.form.events({
  'submit .task-form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const { target } = event;
    const text = target.text.value;

    // Insert a task into the collection
    TasksCollection.insert({
      text,
      userId: getUser()._id,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
  },
});

Template.form2.events({
  'submit .colocation-form'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const { target } = event;
    const text = target.text.value;

    // Insert a task into the collection
    ColocationCollection.insert({
      text,
      userId: getUser()._id,
      createdAt: new Date(), // current time
    });

    // Clear form
    target.text.value = '';
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
