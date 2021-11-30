var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login(props) {
        var _this = _super.call(this, props) || this;
        _this.email = '';
        _this.passwords = '';
        _this.onSubmit = _this.onSubmit.bind(_this);
        return _this;
    }
    Login.prototype.render = function () {
        var _a = this, email = _a.email, password = _a.password;
        return (React.createElement("div", { className: "App" },
            React.createElement("header", null, "Login"),
            React.createElement("input", { name: "email", placeholder: "Email", onChange: this.onChange, value: email, fluid: true }),
            React.createElement("input", { name: "password", type: "password", placeholder: "Password", onChange: this.onChange, value: password, fluid: true }),
            React.createElement("button", { onClick: this.onSubmit }, "Submit")));
    };
    Login.prototype.onChange = function (event) {
        var _a = event.target, name = _a.name, value = _a.value;
        this[name] = value;
    };
    Login.prototype.onSubmit = function () {
        var _a = this, email = _a.email, password = _a.password;
        console.log('결과확인 : ', email, password);
    };
    __decorate([
        observable
    ], Login.prototype, "email", void 0);
    __decorate([
        observable
    ], Login.prototype, "passwords", void 0);
    __decorate([
        action.bound
    ], Login.prototype, "onChange", null);
    Login = __decorate([
        observer
    ], Login);
    return Login;
}(Component));
export default Login;
//# sourceMappingURL=login.js.map