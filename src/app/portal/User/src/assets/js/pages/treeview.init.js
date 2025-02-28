
/*
Template Name: Amezia - Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Treeview 
*/


$(function () {
	"use strict";

	// Default
	$('#jstree').jstree();

	//Check Box
	$('#jstree-checkbox').jstree({
		"checkbox": {
			"keep_selected_style": false
		},
		"plugins": ["checkbox"]
	});
});