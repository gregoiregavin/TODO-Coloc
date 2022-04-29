import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';
import { CollocationCollection } from '/imports/api/CollocationCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

const insertCollocation = collocationText => CollocationCollection.insert({ text: collocationText });
 
Meteor.startup(() => {
  if (TasksCollection.find()) {
    [
      
    ].forEach(insertTask)
  };
  
  if (CollocationCollection.find()) {
      [

      ].forEach(insertCollocation)
  };


});

