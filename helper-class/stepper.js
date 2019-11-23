"use strict";
exports.__esModule = true;
var Stepper = /** @class */ (function () {
    function Stepper(min, max, step, current) {
        this.min = min;
        this.max = max;
        this.step = step;
        this.current = current;
    }
    Object.defineProperty(Stepper.prototype, "isMax", {
        get: function () {
            return this.current === this.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stepper.prototype, "isMin", {
        get: function () {
            return this.current === this.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stepper.prototype, "currentPosition", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    Stepper.prototype.next = function () {
        var current = this.current + this.step;
        this.current = this.calibratePosition(current);
    };
    Stepper.prototype.prev = function () {
        var current = this.current - this.step;
        this.current = this.calibratePosition(current);
    };
    Stepper.prototype.moveTo = function (position) {
        this.current = this.calibratePosition(position);
    };
    Stepper.prototype.calibratePosition = function (position) {
        return position > this.max
            ? this.max
            : position < this.min
                ? this.min
                : position;
    };
    Stepper.create = function (max) {
        return new Stepper(1, max, 1, 1);
    };
    return Stepper;
}());
exports.Stepper = Stepper;
