import { Template } from 'meteor/templating';
 
import './body.html';
 
Template.body.helpers({
  tasks: [
    { text: 'This is task 1' , time: '5/6'},
    { text: 'This is task 2' , time: '7/5'},
    { text: 'This is task 3' , time: '7/5'},
  ],
});