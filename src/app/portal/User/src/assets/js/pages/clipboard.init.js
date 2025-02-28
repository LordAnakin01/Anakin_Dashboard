/*
Template Name: Amezia -  Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Clipboard
*/

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
    console.log(e);
});

clipboard.on('error', function (e) {
    console.log(e);
});