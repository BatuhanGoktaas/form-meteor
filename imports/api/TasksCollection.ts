import { Mongo } from 'meteor/mongo';

export interface Tasks{
    _id?: string;
    task: string;
    isChecked: boolean;
    createdAt: Date;
}

export const TasksCollection = new Mongo.Collection<Tasks>('tasks');