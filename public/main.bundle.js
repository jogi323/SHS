webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__admin_routing_module__["a" /* AdminRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */]]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var routes = [];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//Lazy Loading Modules


//Main Routing File

//components

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_5__admin_admin_module__["a" /* AdminModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* routing */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/aboutus/aboutus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    return AboutusComponent;
}());
AboutusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-aboutus',
        template: __webpack_require__("../../../../../src/app/home/components/aboutus/aboutus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/aboutus/aboutus.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);

//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/academics/academics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/academics/academics.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  academics works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/academics/academics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcademicsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcademicsComponent = (function () {
    function AcademicsComponent() {
    }
    AcademicsComponent.prototype.ngOnInit = function () {
    };
    return AcademicsComponent;
}());
AcademicsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-academics',
        template: __webpack_require__("../../../../../src/app/home/components/academics/academics.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/academics/academics.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AcademicsComponent);

//# sourceMappingURL=academics.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/admissions/admissions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/admissions/admissions.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admissions works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/admissions/admissions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmissionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdmissionsComponent = (function () {
    function AdmissionsComponent() {
    }
    AdmissionsComponent.prototype.ngOnInit = function () {
    };
    return AdmissionsComponent;
}());
AdmissionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-admissions',
        template: __webpack_require__("../../../../../src/app/home/components/admissions/admissions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/admissions/admissions.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdmissionsComponent);

//# sourceMappingURL=admissions.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/contactus/contactus.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/contactus/contactus.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"contact-us\">\n       <div class=\"container\">\n          <div class=\"contact-form\">\n           <div class=\"row\">\n               <div class=\"col-sm-7\">                  \n                    <form id=\"ajax-contact\"  method=\"post\" action=\"contact-form-mail.php\" role=\"form\">\n                        <div class=\"messages\" id=\"form-messages\"></div>\n                        <div class=\"controls\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"form_name\">Firstname *</label>\n                                        <input id=\"form_name\" type=\"text\" name=\"name\" class=\"form-control\" placeholder=\"Please enter your firstname *\" required=\"required\" data-error=\"Firstname is required.\">\n                                        <div class=\"help-block with-errors\"></div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"form_lastname\">Lastname *</label>\n                                        <input id=\"form_lastname\" type=\"text\" name=\"surname\" class=\"form-control\" placeholder=\"Please enter your lastname *\" required=\"required\" data-error=\"Lastname is required.\">\n                                        <div class=\"help-block with-errors\"></div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"form_email\">Email *</label>\n                                        <input id=\"form_email\" type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Please enter your email *\" required=\"required\" data-error=\"Valid email is required.\">\n                                        <div class=\"help-block with-errors\"></div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                        <label for=\"form_phone\">Phone*</label>\n                                        <input id=\"form_phone\" type=\"tel\" name=\"phone\"  class=\"form-control\" placeholder=\"Please enter your phone*\" required oninvalid=\"setCustomValidity('Plz enter your correct phone number ')\"\n    onchange=\"try{setCustomValidity('')}catch(e){}\">\n                                        \n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <div class=\"form-group\">\n                                        <label for=\"form_message\">Message *</label>\n                                        <textarea id=\"form_message\" name=\"message\" class=\"form-control\" placeholder=\"Message for me *\" rows=\"4\" required=\"required\" data-error=\"Please,leave us a message.\"></textarea>\n                                        <div class=\"help-block with-errors\"></div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12\">\n                                    <input type=\"submit\" class=\"btn btn-black\" value=\"Send message\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                   <br>\n                                    <small class=\"text-muted\"><strong>*</strong> These fields are required.</small>\n                                </div>\n                            </div>\n                        </div>\n\n                    </form>\n    \n               </div>\n               <div class=\"col-sm-5\">\n                   <div class=\"row col1\">\n                       <div class=\"col-xs-3\">\n                           <i class=\"fa fa-map-marker\" style=\"font-size:16px;\"></i>   Address\n                       </div>\n                       <div class=\"col-xs-9\">\n                           Siddhardha High School,<br> Ravikamatham,Visakha patnam,<br> Andhra Pradsh,Pin-code:531025.\n                       </div>\n                   </div>\n                   \n                    <div class=\"row col1\">\n                        <div class=\"col-sm-3\">\n                            <i class=\"fa fa-phone\"></i>   Phone\n                        </div>\n                        <div class=\"col-sm-9\">\n                             +(91) 9010698030\n                        </div>\n                    </div>\n                    <!--<div class=\"row col1\">\n                        <div class=\"col-sm-3\">\n                             <i class=\"fa fa-fax\"></i>    Fax  \n                        </div>\n                        <div class=\"col-sm-9\">\n                              123 123 4567\n                        </div>\n                    </div>-->\n                    <div class=\"row col1\">\n                        <div class=\"col-sm-3\">\n                            <i class=\"fa fa-envelope\"></i>   Email\n                        </div>\n                        <div class=\"col-sm-9\">\n                             <a href=\"mailto:siddhardhahighscool@gmail.com\">siddhardhahighscool@gmail.com</a> <br> \n                        </div>\n                    </div><br>\n                    <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.9692426364104!2d82.80183311432528!3d17.793142587836638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39846b9226fd4d%3A0xa678619796e4f8c1!2sSiddhardha+High+School!5e0!3m2!1sen!2sin!4v1499323415772\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n               </div>\n           </div>\n           \n          </div>\n       </div>\n   </div>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/contactus/contactus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-contactus',
        template: __webpack_require__("../../../../../src/app/home/components/contactus/contactus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/contactus/contactus.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactusComponent);

//# sourceMappingURL=contactus.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".first-slide,.second-slide,.third-slide{\r\n    width: 80% !important;\r\n    height: 25% !important;\r\n    margin-left: 10%;\r\n    /*padding-right: 10%;*/\r\n}\r\n.carousel-inner{\r\n  width:100%;\r\n  max-height: 300px !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n  <!--wrapper for slides-->\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img class=\"first-slide\" src=\"assets/images/5.jpg\" alt=\"dosa\"  />\n    </div>\n    <div class=\"item\">\n      <img class=\"second-slide\" src=\"assets/images/1.jpg\" alt=\"idli\"  />\n    </div>\n    <div class=\"item\">\n      <img class=\"third-slide\" src=\"assets/images/5.jpg\" alt=\"vada\" />\n    </div>\n  </div>\n  <!--Left and right controls-->\n  <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n    <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n    <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n<script type=\"text/javascript\">\n  jQuery(document).ready(function () {\n    $(\"#myCarousel\").carousel({\n        interval: 500\n    })\n  });\n</script>"

/***/ }),

/***/ "../../../../../src/app/home/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/home/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/employment/employment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/employment/employment.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  employment works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/employment/employment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmploymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmploymentComponent = (function () {
    function EmploymentComponent() {
    }
    EmploymentComponent.prototype.ngOnInit = function () {
    };
    return EmploymentComponent;
}());
EmploymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-employment',
        template: __webpack_require__("../../../../../src/app/home/components/employment/employment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/employment/employment.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EmploymentComponent);

//# sourceMappingURL=employment.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/feestructure/feestructure.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/feestructure/feestructure.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  feestructure works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/feestructure/feestructure.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeestructureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeestructureComponent = (function () {
    function FeestructureComponent() {
    }
    FeestructureComponent.prototype.ngOnInit = function () {
    };
    return FeestructureComponent;
}());
FeestructureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-feestructure',
        template: __webpack_require__("../../../../../src/app/home/components/feestructure/feestructure.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/feestructure/feestructure.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FeestructureComponent);

//# sourceMappingURL=feestructure.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/home/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-inverse{\r\n    background-color: rgba(4, 2, 3, 0.46) !important;\r\n    border-color: white !important;    \r\n}\r\n.navbar-inverse .navbar-nav>li>a{\r\n    color:white;\r\n}\r\nul li:hover {\r\n    background-color: #d04444;\r\n}\r\na.active{\r\n    background-color: black !important;\r\n    /*color: red !important;*/\r\n}\r\na.active[_ngcontent-c2]{\r\n    color: white;\r\n}\r\n.dropdown-menu{\r\n    background-color: rgba(4, 2, 3, 0.46) !important; \r\n  \r\n}\r\n.dropdown-menu li a{\r\n    color: white !important;\r\n}\r\n.dropdown-menu li:hover a{\r\n    background-color: #d04444 !important;\r\n    color: white !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>                        \n      </button>\n      <a class=\"navbar-brand\" [routerLink]=\"['']\"></a>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!--<li><a [routerLink]=\"['/aboutus']\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>-->\n        <li><a routerLink=\"/login\"  routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li><a routerLink=\"/dashboard\"  routerLinkActive=\"active\">Home</a></li>\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">Our School<span class=\"caret\"></span></a>\n            <ul class=\"dropdown-menu\">\n              <li><a routerLink=\"/academics\"  routerLinkActive=\"active\">Academics</a></li>\n              <li><a routerLink=\"/feedetails\" routerLinkActive=\"active\">Admissions</a></li>\n              <li><a routerLink=\"/admissions\"  routerLinkActive=\"active\">Fee Structure</a></li>\n            </ul>     \n        </li>\n        <li><a routerLink=\"/aboutus\"  routerLinkActive=\"active\">About US</a></li>\n        <li><a routerLink=\"/news\"  routerLinkActive=\"active\">News</a></li>\n        <li><a routerLink=\"/employment\" routerLinkActive=\"active\">Employment</a></li>\n        <li><a routerLink=\"/contactus\" routerLinkActive=\"active\">Contact US</a></li>\n        <!--<li><a routerLink=\"/aboutus\" routerLinkActive=\"active\">Dashboard</a></li>\n        <li><a routerLink=\"/employment\" routerLinkActive=\"active\">Heroes</a></li>\n   -->\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/home/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/home/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/components/news/news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  news works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/components/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/home/components/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/components/news/news.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewsComponent);

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/home/components/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_contactus_contactus_component__ = __webpack_require__("../../../../../src/app/home/components/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_news_news_component__ = __webpack_require__("../../../../../src/app/home/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_employment_employment_component__ = __webpack_require__("../../../../../src/app/home/components/employment/employment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_academics_academics_component__ = __webpack_require__("../../../../../src/app/home/components/academics/academics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_feestructure_feestructure_component__ = __webpack_require__("../../../../../src/app/home/components/feestructure/feestructure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_admissions_admissions_component__ = __webpack_require__("../../../../../src/app/home/components/admissions/admissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__("../../../../../src/app/home/components/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_5__components_contactus_contactus_component__["a" /* ContactusComponent */] },
            { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_4__components_aboutus_aboutus_component__["a" /* AboutusComponent */] },
            { path: 'news', component: __WEBPACK_IMPORTED_MODULE_6__components_news_news_component__["a" /* NewsComponent */] },
            { path: 'employment', component: __WEBPACK_IMPORTED_MODULE_7__components_employment_employment_component__["a" /* EmploymentComponent */] },
            { path: 'academics', component: __WEBPACK_IMPORTED_MODULE_8__components_academics_academics_component__["a" /* AcademicsComponent */] },
            { path: 'feedetails', component: __WEBPACK_IMPORTED_MODULE_9__components_feestructure_feestructure_component__["a" /* FeestructureComponent */] },
            { path: 'admissions', component: __WEBPACK_IMPORTED_MODULE_10__components_admissions_admissions_component__["a" /* AdmissionsComponent */] },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/home/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/home/components/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_contactus_contactus_component__ = __webpack_require__("../../../../../src/app/home/components/contactus/contactus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/home/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_news_news_component__ = __webpack_require__("../../../../../src/app/home/components/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_employment_employment_component__ = __webpack_require__("../../../../../src/app/home/components/employment/employment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_academics_academics_component__ = __webpack_require__("../../../../../src/app/home/components/academics/academics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_feestructure_feestructure_component__ = __webpack_require__("../../../../../src/app/home/components/feestructure/feestructure.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_admissions_admissions_component__ = __webpack_require__("../../../../../src/app/home/components/admissions/admissions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__ = __webpack_require__("../../../../../src/app/home/components/login/login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["i" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__home_routing_module__["a" /* HomeRoutingModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__components_dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__components_aboutus_aboutus_component__["a" /* AboutusComponent */], __WEBPACK_IMPORTED_MODULE_6__components_contactus_contactus_component__["a" /* ContactusComponent */], __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */], __WEBPACK_IMPORTED_MODULE_8__components_news_news_component__["a" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_9__components_employment_employment_component__["a" /* EmploymentComponent */], __WEBPACK_IMPORTED_MODULE_10__components_academics_academics_component__["a" /* AcademicsComponent */], __WEBPACK_IMPORTED_MODULE_11__components_feestructure_feestructure_component__["a" /* FeestructureComponent */], __WEBPACK_IMPORTED_MODULE_12__components_admissions_admissions_component__["a" /* AdmissionsComponent */], __WEBPACK_IMPORTED_MODULE_13__components_login_login_component__["a" /* LoginComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map