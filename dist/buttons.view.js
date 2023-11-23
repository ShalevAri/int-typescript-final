"use strict";
exports.__esModule = true;
exports.View = void 0;
var View = /** @class */ (function () {
    function View() {
        this.confirmButton = document.querySelector(".confirm-button");
        this.cancelButton = document.querySelector(".cancel-button");
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
    return View;
}());
exports.View = View;
