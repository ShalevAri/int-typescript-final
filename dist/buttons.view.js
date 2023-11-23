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
    View.prototype.getRecipientName = function () {
        return this.recipientName.value;
    };
    View.prototype.getLocation = function () {
        return this.location.value;
    };
    View.prototype.getTime = function () {
        return this.time.value;
    };
    View.prototype.resetForm = function () {
        this.recipientName.value = "";
        this.location.value = "london";
        this.time.value = "morning";
    };
    return View;
}());
exports.View = View;
