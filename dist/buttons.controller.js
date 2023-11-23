"use strict";
exports.__esModule = true;
var db_ts_1 = require("./db.ts");
var Controller = /** @class */ (function () {
    function Controller(view) {
        this.view = view;
        this.bindEvents();
    }
    Controller.prototype.bindEvents = function () {
        var _this = this;
        this.view.bindConfirmButton(function () { return _this.handleConfirmButtonClick(); });
        this.view.bindCancelButton(function () { return _this.handleCancelButtonClick(); });
    };
    Controller.prototype.handleConfirmButtonClick = function () {
        var formData = {
            recipientName: this.view.getRecipientName(),
            place: this.view.getLocation(),
            time: this.view.getTime()
        };
        db_ts_1.deliveryDatabase.push(formData);
        console.log("Delivery Database:", db_ts_1.deliveryDatabase);
    };
    Controller.prototype.handleCancelButtonClick = function () {
        this.view.resetForm();
    };
    return Controller;
}());
exports["default"] = Controller;
