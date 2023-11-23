"use strict";
exports.__esModule = true;
var buttons_view_1 = require("./buttons.view");
var Controller = /** @class */ (function () {
    function Controller(view) {
        this.view = view;
        this.bindEvents();
    }
    Controller.prototype.bindEvents = function () {
        this.view.bindConfirmButton(function () {
            alert("Your data has been submitted");
        });
        this.view.bindCancelButton(function () {
            alert("Your data has been cancelled");
        });
    };
    return Controller;
}());
var view = new buttons_view_1.View();
var controller = new Controller(view);
