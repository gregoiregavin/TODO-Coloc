import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import { CollocationCollection } from '/imports/api/CollocationCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

const insertCollocation = collocationText => CollocationCollection.insert({ text: collocationText });
 
Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task'
    ].forEach(insertTask)
  }
});

Meteor.startup(() => {
  if (CollocationCollection.find().count() === 0) {
    [
      'First Collocation',
      'Second Collocation',
      'Third Collocation',
      'Fourth Collocation',
      'Fifth Collocation',
      'Sixth Collocation',
      'Seventh Collocation'
    ].forEach(insertCollocation)
  }
});