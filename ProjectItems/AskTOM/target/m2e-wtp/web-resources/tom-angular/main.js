(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=padding-top:50px>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tom-angular';
    }
    AppComponent = __decorate([
        Object(node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _services_tom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/tom.service */ "./src/app/services/tom.service.ts");
/* harmony import */ var _components_response_response_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/response/response.component */ "./src/app/components/response/response.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node_modules/@angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var node_modules_angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/topic-list/topic-list.component */ "./src/app/components/topic-list/topic-list.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_register_tom_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/register-tom.service */ "./src/app/services/register-tom.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(node_modules_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _components_response_response_component__WEBPACK_IMPORTED_MODULE_1__["ResponseComponent"],
                _components_topic_list_topic_list_component__WEBPACK_IMPORTED_MODULE_11__["TopicListComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"]
            ],
            imports: [
                node_modules_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]
            ],
            providers: [_services_tom_service__WEBPACK_IMPORTED_MODULE_0__["TomService"], _services_register_tom_service__WEBPACK_IMPORTED_MODULE_14__["RegisterTomService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/dropdown-menu/dropdown-menu.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/dropdown-menu/dropdown-menu.ts ***!
  \***********************************************************/
/*! exports provided: DropdownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownMenu", function() { return DropdownMenu; });
var DropdownMenu = /** @class */ (function () {
    function DropdownMenu(name) {
        this.name = name;
    }
    return DropdownMenu;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- TOP NAVBAR START-->\r\n  <nav class=\"navbar navbar-expand-lg bg-dark navbar-dark fixed-top col-12 clearfix\">\r\n    <a class=\"navbar-brand\" \r\n      style=\"color:whitesmoke\">\r\n         AskTOM    </a>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n    </ul>\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" \r\n        role=\"button\" \r\n        data-toggle=\"dropdown\" \r\n        aria-haspopup=\"true\" \r\n        style=\"color:whitesmoke\"\r\n        aria-expanded=\"false\">\r\n        Menu\r\n      </a>\r\n      <div class=\"dropdown-menu\" \r\n        aria-labelledby=\"navbarDropdown\">\r\n        <a class=\"dropdown-item\" \r\n          ></a>\r\n      </div>\r\n    </li>\r\n  </nav>\r\n<!-- NAVBAR END -->\r\n<p>\r\n  home-work(s)!\r\n</p>\r\n<div *ngFor=\"let topic of topics\">\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-3\"></div>\r\n        <div class=\"col-sm-6\">{{topic.name}}</div>\r\n        <div class=\"col-sm-3\"></div>\r\n      </div>\r\n</div>\r\n\r\n\r\n<!-- NavBar with Nav Pills for cleanish looking navigation on the bottom of the page -->\r\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom col-12\">"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent( /*private tomService:TomService*/) {
        this.topics = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        /* this.tomService
           .getTopics()
           .subscribe(
             data => {
               this.topics = data;
             },
             error => {
               console.log(error.message);
             }
           );
           */
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- TOP NAVBAR START-->\r\n  <nav class=\"navbar navbar-expand-lg bg-dark navbar-dark fixed-top col-12 clearfix\">\r\n        <a class=\"navbar-brand\" \r\n          style=\"color:whitesmoke\">\r\n             AskTOM    </a>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n        </ul>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" \r\n            role=\"button\" \r\n            data-toggle=\"dropdown\" \r\n            aria-haspopup=\"true\" \r\n            style=\"color:whitesmoke\"\r\n            aria-expanded=\"false\">\r\n            Menu\r\n          </a>\r\n          <div class=\"dropdown-menu\" \r\n            aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" \r\n              ></a>\r\n          </div>\r\n        </li>\r\n      </nav>\r\n    <!-- NAVBAR END -->\r\n\r\n<div class=\"container-fluid\">\r\n  \r\n  <div class=\"d-flex justify-content-center\">\r\n    <h1>Welcome to AskTOM</h1>\r\n  </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-3\"></div>\r\n      <div class=\"col-6\">\r\n          <div class=\"form-group\">\r\n              Username:<input type=\"text\" \r\n              class=\"form-control\" \r\n              [(ngModel)]=newTom.username required>\r\n          </div>\r\n      </div>\r\n      <div class=\"col-3\"></div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-3\"></div>\r\n      <div class=\"col-6\">\r\n        <div class=\"form-group\">\r\n            Password:<input type=\"password\" \r\n            class=\"form-control\"\r\n            [(ngModel)]=newTom.password required>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-3\"></div>\r\n    </div>\r\n    <br>\r\n    <!-- for a single button in the middle of a row -->\r\n    <div class=\"row\">\r\n        <div class=\"col-4\"></div>\r\n        <div class=\"col-4\">\r\n            <button class=\"btn-primary\" (click)=\"addTom()\"><span>Login</span></button>\r\n        </div>\r\n        <div class=\"col-4\"></div>\r\n    </div>\r\n    <br>\r\n    <div class=\"row\">\r\n      <div class=\"col-4\"></div>\r\n      <div class=\"col-4\">\r\n          <nav><a routerLink=\"/register\" routerLinkActive=\"active\">\r\n          <button class=\"btn-primary\"><span>Register</span></button>\r\n          </a></nav>\r\n      </div>\r\n      <div class=\"col-4\"></div>\r\n    </div>\r\n</div>\r\n\r\n<!-- NavBar with Nav Pills for cleanish looking navigation on the bottom of the page -->\r\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom col-12\">"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tom_tom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tom/tom */ "./src/app/components/tom/tom.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_tom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tom.service */ "./src/app/services/tom.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginTom, router) {
        this.loginTom = loginTom;
        this.router = router;
        this.newTom = new _tom_tom__WEBPACK_IMPORTED_MODULE_1__["Tom"]("", "", 2);
        this.option = { id: 1, name: "true" };
        this.options = [
            { id: 1, name: "Info" }
        ];
    }
    LoginComponent.prototype.addTom = function () {
        var _this = this;
        new _tom_tom__WEBPACK_IMPORTED_MODULE_1__["Tom"](this.newTom.username, this.newTom.password, this.newTom.privId);
        this.loginTom.getTom(this.newTom.username, this.newTom.password).subscribe(function (data) {
            /**
             * Pass result to home with a
             * logged-in user
             */
            if (data != null) {
                _this.router.navigateByUrl('/home');
            }
        }, function (error) {
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.option;
        this.options;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tom_service__WEBPACK_IMPORTED_MODULE_3__["TomService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- TOP NAVBAR START-->\r\n  <nav class=\"navbar navbar-expand-lg bg-dark navbar-dark fixed-top col-12 clearfix\">\r\n    <a class=\"navbar-brand\" \r\n      style=\"color:whitesmoke\">\r\n         AskTOM    </a>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n    </ul>\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" \r\n        role=\"button\" \r\n        data-toggle=\"dropdown\" \r\n        aria-haspopup=\"true\" \r\n        style=\"color:whitesmoke\"\r\n        aria-expanded=\"false\">\r\n        Menu\r\n      </a>\r\n      <div class=\"dropdown-menu\" \r\n        aria-labelledby=\"navbarDropdown\">\r\n        <a class=\"dropdown-item\" \r\n          ></a>\r\n      </div>\r\n    </li>\r\n  </nav>\r\n<!-- NAVBAR END -->\r\n<!-- NavBar with Nav Pills for cleanish looking navigation on the bottom of the page -->\r\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom col-12\">"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node_modules/@angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _option_option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../option/option */ "./src/app/components/option/option.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.options = [];
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _option_option__WEBPACK_IMPORTED_MODULE_1__["Option"])
    ], NavbarComponent.prototype, "option", void 0);
    __decorate([
        Object(node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NavbarComponent.prototype, "options", void 0);
    NavbarComponent = __decorate([
        Object(node_modules_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/option/option.ts":
/*!*********************************************!*\
  !*** ./src/app/components/option/option.ts ***!
  \*********************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
var Option = /** @class */ (function () {
    function Option(id, name) {
        this.id = id;
        this.name = name;
    }
    return Option;
}());



/***/ }),

/***/ "./src/app/components/register/register-response/registerResponse.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/register/register-response/registerResponse.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterResponse", function() { return RegisterResponse; });
var RegisterResponse = /** @class */ (function () {
    function RegisterResponse(registerSuccess) {
        this.registerSuccess = registerSuccess;
    }
    return RegisterResponse;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- TOP NAVBAR START-->\r\n  <nav class=\"navbar navbar-expand-lg bg-dark navbar-dark fixed-top col-12 clearfix\">\r\n    <a class=\"navbar-brand\" \r\n      style=\"color:whitesmoke\">\r\n         AskTOM    </a>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n    </ul>\r\n    <li class=\"nav-item dropdown\">\r\n      <a class=\"nav-link dropdown-toggle\" \r\n        role=\"button\" \r\n        data-toggle=\"dropdown\" \r\n        aria-haspopup=\"true\" \r\n        style=\"color:whitesmoke\"\r\n        aria-expanded=\"false\">\r\n        Menu\r\n      </a>\r\n      <div class=\"dropdown-menu\" \r\n        aria-labelledby=\"navbarDropdown\">\r\n        <a class=\"dropdown-item\" \r\n          ></a>\r\n      </div>\r\n    </li>\r\n  </nav>\r\n  \r\n<!-- NAVBAR END -->\r\n<div class=\"container-fluid\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <h1>Please Register</h1>\r\n  </div>\r\n      <!-- Userame -->\r\n      <div class=\"row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n              Username:<input type=\"text\" \r\n              class=\"form-control\"\r\n              id=\"register-username\"\r\n              [(ngModel)]=addNewTom.username required>\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n      </div>\r\n      <!-- Password -->\r\n      <div class=\"row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n          Password:\r\n          <input type=\"password\"\r\n                class=\"form-control\" \r\n                id=\"register-password\"\r\n                [(ngModel)]=addNewTom.password required>\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n      </div>\r\n      <!-- Confirm Password -->\r\n      <div class=\"row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n          Confirm Password:\r\n          <input type=\"password\" \r\n              class=\"form-control\"\r\n              id=\"register-password-confirm\"\r\n              [(ngModel)]=addNewTom.passwordConfirm required>\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-3\"></div>\r\n        <div class=\"col-6\">\r\n          <div ngbDropdown>\r\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><span>{{privileges.name}}</span></button>\r\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n              <button *ngFor=\"let option of options\" (click)=setDropdownText(option.name) class=\"btn dropdown-item text-center\"><span>{{option.name}}</span></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-3\"></div>\r\n      </div>\r\n      <br>\r\n      <br>\r\n  <!-- for a single button in the middle of a row -->\r\n  <div class=\"row\">\r\n    <div class=\"col-4\">\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <nav><a routerLink=\"/login\" routerLinkActive=\"active\">\r\n      <button class=\"btn-primary text-center\"><span>Confirm</span></button>\r\n      </a></nav>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <nav><a routerLink=\"/login\" routerLinkActive=\"active\">\r\n      <button class=\"btn-default\"><span>Cancel</span></button>\r\n      </a></nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- NavBar with Nav Pills for cleanish looking navigation on the bottom of the page -->\r\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom col-12\">\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _services_register_tom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/register-tom.service */ "./src/app/services/register-tom.service.ts");
/* harmony import */ var _dropdown_menu_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dropdown-menu/dropdown-menu */ "./src/app/components/dropdown-menu/dropdown-menu.ts");
/* harmony import */ var _tom_tom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../tom/tom */ "./src/app/components/tom/tom.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tom_newTom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tom/newTom */ "./src/app/components/tom/newTom.ts");
/* harmony import */ var _register_response_registerResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-response/registerResponse */ "./src/app/components/register/register-response/registerResponse.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(registerTomService) {
        this.registerTomService = registerTomService;
        this.feedback = new _register_response_registerResponse__WEBPACK_IMPORTED_MODULE_5__["RegisterResponse"](false);
        this.newTom = new _tom_tom__WEBPACK_IMPORTED_MODULE_2__["Tom"]("", "", 0);
        this.addNewTom = new _tom_newTom__WEBPACK_IMPORTED_MODULE_4__["NewTom"]("", "", "", 0);
        this.privileges = new _dropdown_menu_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__["DropdownMenu"]("Privilege Level");
        this.options = [
            { id: 1, name: "Admin" },
            { id: 2, name: "User" }
        ];
    }
    RegisterComponent.prototype.setDropdownText = function (name) {
        this.privileges.name = name;
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.addTom = function () {
        var _this = this;
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.name == this.privileges.name) {
                this.addNewTom.privId = item.id;
            }
        }
        if (this.addNewTom.privId != 0) {
            if (this.addNewTom.password == this.addNewTom.passwordConfirm) {
                new _tom_newTom__WEBPACK_IMPORTED_MODULE_4__["NewTom"](this.addNewTom.username, this.addNewTom.password, this.addNewTom.passwordConfirm, this.addNewTom.privId);
                this.registerTomService.addFreshNewTom(this.addNewTom.username, this.addNewTom.password, this.addNewTom.passwordConfirm, this.addNewTom.privId).subscribe(function (data) {
                    /*
                      Route back to login
                      AND
                      at login,
                      notify user of result w/ an HTML message
                    */
                    _this.feedback = data;
                    if (_this.feedback) {
                    }
                    else {
                    }
                }, function (error) {
                    console.log(error.message);
                });
            }
            else {
                /* */
            }
        }
        else {
        }
    };
    RegisterComponent.prototype.checkPrivSelection = function (name) {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: '[app-register],[ngbd-dropdown-basic]',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_register_tom_service__WEBPACK_IMPORTED_MODULE_0__["RegisterTomService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/response/response.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/response/response.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/response/response.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/response/response.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- TOP NAVBAR START-->\r\n  <nav class=\"navbar navbar-expand-lg bg-dark navbar-dark fixed-top col-12 clearfix\">\r\n      <a class=\"navbar-brand\" \r\n        style=\"color:whitesmoke\">\r\n           AskTOM    </a>\r\n      <ul class=\"navbar-nav ml-auto\">\r\n      </ul>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" \r\n          role=\"button\" \r\n          data-toggle=\"dropdown\" \r\n          aria-haspopup=\"true\" \r\n          style=\"color:whitesmoke\"\r\n          aria-expanded=\"false\">\r\n          Menu\r\n        </a>\r\n        <div class=\"dropdown-menu\" \r\n          aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\"\r\n            ></a>\r\n        </div>\r\n      </li>\r\n    </nav>\r\n  <!-- NAVBAR END -->\r\n  <!-- NavBar with Nav Pills for cleanish looking navigation on the bottom of the page -->\r\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom col-12\">\r\n\r\n<p>\r\n  response works!\r\n</p>\r\n<div *ngFor=\"let response of responses\">\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-2\">{{response.votes}}</div>\r\n        <div class=\"col-sm-8\">{{response.content}}</div>\r\n        <div class=\"col-sm-2\"></div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/response/response.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/response/response.component.ts ***!
  \***********************************************************/
/*! exports provided: ResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseComponent", function() { return ResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponseComponent = /** @class */ (function () {
    function ResponseComponent() {
        this.responses = [];
    }
    ResponseComponent.prototype.ngOnInit = function () {
    };
    ResponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-response',
            template: __webpack_require__(/*! ./response.component.html */ "./src/app/components/response/response.component.html"),
            styles: [__webpack_require__(/*! ./response.component.css */ "./src/app/components/response/response.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResponseComponent);
    return ResponseComponent;
}());



/***/ }),

/***/ "./src/app/components/tom/newTom.ts":
/*!******************************************!*\
  !*** ./src/app/components/tom/newTom.ts ***!
  \******************************************/
/*! exports provided: NewTom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTom", function() { return NewTom; });
var NewTom = /** @class */ (function () {
    function NewTom(username, password, passwordConfirm, privId) {
        this.username = username;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.privId = privId;
    }
    return NewTom;
}());



/***/ }),

/***/ "./src/app/components/tom/tom.ts":
/*!***************************************!*\
  !*** ./src/app/components/tom/tom.ts ***!
  \***************************************/
/*! exports provided: Tom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tom", function() { return Tom; });
var Tom = /** @class */ (function () {
    function Tom(username, password, privId) {
        this.username = username;
        this.password = password;
        this.privId = privId;
    }
    return Tom;
}());



/***/ }),

/***/ "./src/app/components/topic-list/topic-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/topic-list/topic-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/topic-list/topic-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/topic-list/topic-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n  <div class=\"col-sm-3\"></div>\r\n  <div class=\"col-sm-6\" id=\"topic-name\" ></div>\r\n  <div class=\"col-sm-3\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/topic-list/topic-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/topic-list/topic-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TopicListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListComponent", function() { return TopicListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopicListComponent = /** @class */ (function () {
    function TopicListComponent() {
    }
    TopicListComponent.prototype.ngOnInit = function () {
    };
    TopicListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-list',
            template: __webpack_require__(/*! ./topic-list.component.html */ "./src/app/components/topic-list/topic-list.component.html"),
            styles: [__webpack_require__(/*! ./topic-list.component.css */ "./src/app/components/topic-list/topic-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopicListComponent);
    return TopicListComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_response_response_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/response/response.component */ "./src/app/components/response/response.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");




var appRoutes = [
    {
        path: 'register',
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    },
    {
        path: 'responses',
        component: _components_response_response_component__WEBPACK_IMPORTED_MODULE_2__["ResponseComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }
];


/***/ }),

/***/ "./src/app/services/register-tom.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/register-tom.service.ts ***!
  \**************************************************/
/*! exports provided: RegisterTomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterTomService", function() { return RegisterTomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterTomService = /** @class */ (function () {
    function RegisterTomService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    RegisterTomService.prototype.addFreshNewTom = function (username, password, passwordConfirm, privId) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        /* Point to tomcat server */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        body = body.set('username', username);
        body = body.set('password', password);
        body = body.set('passwordConfirm', passwordConfirm);
        body = body.set('privId', privId.toString());
        /* Point to tomcat server */
        return this.http.post("http://loaclhost:8085/AskTOM/RegisterServlet", body, { headers: headers });
    };
    RegisterTomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterTomService);
    return RegisterTomService;
}());



/***/ }),

/***/ "./src/app/services/tom.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/tom.service.ts ***!
  \*****************************************/
/*! exports provided: TomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomService", function() { return TomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TomService = /** @class */ (function () {
    function TomService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    TomService.prototype.getTopics = function () {
        return this.http.get("http://localhost:8085/AskTOM/GetTopics");
    };
    TomService.prototype.getTom = function (username, password) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        /* Point to tomcat server */
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded');
        body = body.set('username', username);
        body = body.set('password', password);
        /* Point to tomcat server */
        return this.http.post("http://localhost:8085/AskTOM/LoginServlet", body, { headers: headers });
    };
    TomService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TomService);
    return TomService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\laure\Desktop\NG Folder\ProjectItems\AngularTom\tom-angular\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map