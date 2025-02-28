/*
Template Name: Amezia -  Admin & Dashboard Template
Author: Themesbrand
Website: https://themesbrand.com/
Contact: themesbrand@gmail.com
File: Session Timeout Js File
*/

$.sessionTimeout({
    keepAliveUrl: 'page-starter.html',
    logoutButton: 'Logout',
    logoutUrl: 'auth-login.html',
    redirUrl: 'auth-lock-screen.html',
    warnAfter: 3000,
    redirAfter: 30000,
    countdownBar: true
});

$('#session-timeout-dialog  [data-dismiss=modal]').attr("data-bs-dismiss", "modal");