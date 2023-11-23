"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = /** @class */ (function () {
    function View() {
        this.confirmButton = document.querySelector(".confirm-button");
        this.cancelButton = document.querySelector(".cancel-button");
        this.recipientName = document.querySelector(".person-name");
        this.location = document.querySelector(".location");
        this.time = document.querySelector(".time");
    }
    View.prototype.bindConfirmButton = function (callback) {
        this.confirmButton.addEventListener("click", function (e) {
            e.preventDefault();
            callback();
        });
    };
    View.prototype.bindCancelButton = function (callback) {
        this.cancelButton.addEventListener("click", function (e) {
            e.preventDefault();
            callback();
        });
    };
    View.prototype.bindRecipientName = function (callback) {
        this.recipientName.addEventListener("click", function (e) {
            e.preventDefault();
            callback();
        });
    };
    View.prototype.bindLocation = function (callback) {
        this.location.addEventListener("select", function (e) {
            e.preventDefault();
            callback();
        });
    };
    View.prototype.bindTime = function (callback) {
        this.time.addEventListener("select", function (e) {
            e.preventDefault();
            callback();
        });
    };
    return View;
}());
exports.View = View;
