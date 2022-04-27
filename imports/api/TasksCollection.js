import { Mongo } from 'meteor/mongo';
 
export const TasksCollection = new Mongo.Collection('tasks');

export const CollocationCollection = new Mongo.Collection('collocation');