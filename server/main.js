import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import { CollocationCollection } from '/imports/api/CollocationCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });
 
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
<<<<<<< HEAD
});

 
Meteor.startup(() => {
  if (CollocationCollection.find()) {
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
=======
>>>>>>> parent of a29e009 (tentative collocation collection)
});