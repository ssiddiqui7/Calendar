import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';
 
import './body.html';
 
Template.body.helpers({
  // tasks: [
  //   { text: 'This is task 1' , time: '5/6'},
  //   { text: 'This is task 2' , time: '7/5'},
  //   { text: 'This is task 3' , time: '7/5'},
  // ],
   tasks() {
    return Tasks.find({});
  },
});

Template.body.events({
	'submit .new-task'(event){
		event.preventDefault();

		const target = event.target;
		const text = target.text.value;
		const date = target.date.value;
		const start_time = target.start_time.value;
		const end_time = target.end_time.value;

		Tasks.insert({
			text,
			date,
			start_time,
			end_time
		});

	//Clear form
	target.text.value = '';
	target.date.value = '';
	target.start_time.value = '';
	target.end_time.value = '';
	},
});


body = $('body');
cal_div = $('<div>');
cal_div.addClass("container");
body.append(cal_div);

cal_row = $('<div>');
cal_row.addClass("row");
cal_div.append(cal_row);

var days = 7;
for(i=0; i<days; i++){
	column = $('<div>');
	column.addClass('col-xs-1');
	column.text("col");
	cal_row.append(column);
}




	// makeGrid = ->
	// 	body = $('body')
	// 	grid = $('<div>')
	// 	grid.addClass('grid')
	// 	body.append(grid)

	// 	for i in [0..sz-1]
	// 		row_plus_ind = "row_"+i 
	// 		row = $('<div>')
	// 		row.addClass('row')
	// 		row.addClass(row_plus_ind)

	// 		grid.append(row)

	// 		for j in [0..sz-1]
	// 			col_plus_ind = "col_"+j
	// 			box = $('<div>')
	// 			box.addClass('box')
	// 			box.addClass(col_plus_ind)

	// 			row.append(box)
