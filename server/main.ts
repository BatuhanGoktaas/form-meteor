import { Meteor } from 'meteor/meteor';
import {TasksCollection} from '/imports/api/TasksCollection'



function insertTask(task:string){
  TasksCollection.insert({task,createdAt:new Date,isChecked:false});
}


Meteor.startup(() => {

  // If the Links collection is empty, add some data.
  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task'
    ].forEach(insertTask)
  }
});
