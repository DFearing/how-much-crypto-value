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

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GET_TICKER_URL = 'https://api.cryptonator.com/api/ticker/';
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getTickerData = function (base, target) {
        return this.get("" + GET_TICKER_URL + base + "-" + target);
    };
    ApiService.prototype.get = function (url) {
        return this.http.get(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers, body: '' }))
            .map(function (res) { return res.json(); })
            .catch(function (x) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(x); });
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_app_root_component__ = __webpack_require__("../../../../../src/app/components/app-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_edit_holding_add_edit_holding_component__ = __webpack_require__("../../../../../src/app/components/add-edit-holding/add-edit-holding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_currency_selector_currency_selector_component__ = __webpack_require__("../../../../../src/app/components/currency-selector/currency-selector.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_holding_card_holding_card_component__ = __webpack_require__("../../../../../src/app/components/holding-card/holding-card.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__components_app_root_component__["a" /* AppRootComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_add_edit_holding_add_edit_holding_component__["a" /* AddEditHoldingComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_currency_selector_currency_selector_component__["a" /* CurrencySelectorComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_holding_card_holding_card_component__["a" /* HoldingCardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot([{ path: "", component: __WEBPACK_IMPORTED_MODULE_9__components_app_component__["a" /* AppComponent */] }]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdDialogModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__components_app_root_component__["a" /* AppRootComponent */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__components_add_edit_holding_add_edit_holding_component__["a" /* AddEditHoldingComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_holding_model__ = __webpack_require__("../../../../../src/app/models/holding.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__currency_list_constant__ = __webpack_require__("../../../../../src/app/currency-list.constant.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BASE_TARGET = "usd";
var AppService = (function () {
    function AppService(router, apiService) {
        this.router = router;
        this.apiService = apiService;
        this.holdings = [];
        this.value = 0;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        this.currencySubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](__WEBPACK_IMPORTED_MODULE_6__currency_list_constant__["a" /* CURRENCY_LIST */]);
        this.holdingSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]([]);
        this.currencyList = this.currencySubject.asObservable();
        this.valueChanged = this.valueChange.asObservable();
        this.holdingList = this.holdingSubject.asObservable();
    }
    AppService.prototype.hasHoldings = function () {
        return this.holdings.length > 0;
    };
    AppService.prototype.addHolding = function (holding) {
        var target = __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](this.holdings, { base: holding.base.toLocaleLowerCase() });
        if (target) {
            target.quantity += holding.quantity;
        }
        else {
            this.holdings.push(holding);
        }
        this.holdingSubject.next(this.holdings);
        this.updateUrl();
    };
    AppService.prototype.removeHolding = function (holding) {
        this.holdings = __WEBPACK_IMPORTED_MODULE_3_underscore__["reject"](this.holdings, function (x) { return x.base == holding.base && x.quantity == holding.quantity; });
        this.holdingSubject.next(this.holdings);
        this.updateUrl();
    };
    AppService.prototype.updateHolding = function (source, holding) {
        var target = __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](this.holdings, { quantity: source.quantity, base: source.base });
        target.quantity = holding.quantity;
        target.base = holding.base;
        this.holdingSubject.next(this.holdings);
        this.updateUrl();
    };
    AppService.prototype.calculateValue = function () {
        var _this = this;
        var calls = [];
        this.holdings.forEach(function (holding) {
            calls.push(_this.apiService.getTickerData(holding.base, BASE_TARGET));
        });
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].zip.apply(null, calls).subscribe(function (results) {
            _this.value = 0;
            results.forEach(function (result) {
                if (result.success) {
                    var holding = __WEBPACK_IMPORTED_MODULE_3_underscore__["findWhere"](_this.holdings, { base: result.ticker.base.toLowerCase() });
                    holding.price = result.ticker.price;
                    holding.change = result.ticker.change;
                    holding.value = holding.quantity * holding.price;
                    _this.value += holding.value;
                    _this.valueChange.next(_this.value);
                    _this.lastUpdated = new Date();
                }
            });
        });
    };
    AppService.prototype.parseUrl = function (params) {
        this.holdings = [];
        for (var i = 0; i < 100; i++) {
            if (params["b" + i] && params["q" + i]) {
                this.holdings.push(new __WEBPACK_IMPORTED_MODULE_5__models_holding_model__["a" /* Holding */](params["b" + i].toLowerCase(), parseFloat(params["q" + i])));
            }
            else {
                i = 100;
            }
        }
        this.holdingSubject.next(this.holdings);
        this.calculateValue();
    };
    AppService.prototype.updateUrl = function () {
        var navigationExtras = {
            queryParams: {},
            preserveQueryParams: false
        };
        this.holdings.forEach(function (holding, index) {
            navigationExtras.queryParams["b" + index] = holding.base;
            navigationExtras.queryParams["q" + index] = holding.quantity;
        });
        this.router.navigate(["/"], navigationExtras);
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__api_service__["a" /* ApiService */]) === "function" && _b || Object])
], AppService);

var _a, _b;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-edit-holding/add-edit-holding.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-edit-holding/add-edit-holding.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title>Crypto Holding</h2>\r\n<md-dialog-content>\r\n  <md-input-container>\r\n    <input mdInput placeholder=\"Quantity\" [(ngModel)]=\"holding.quantity\" type=\"number\">\r\n  </md-input-container>\r\n  <app-currency-selector [selected]=\"holding.base\" (onSelectionChange)=\"updateCurrency($event)\"></app-currency-selector>\r\n</md-dialog-content>\r\n<md-dialog-actions>\r\n  <button md-raised-button [md-dialog-close]=\"true\" (click)=\"save()\">OK</button>\r\n  <button md-raised-button md-dialog-close>Cancel</button>\r\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/components/add-edit-holding/add-edit-holding.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_holding_model__ = __webpack_require__("../../../../../src/app/models/holding.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEditHoldingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AddEditHoldingComponent = (function () {
    function AddEditHoldingComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.holding = new __WEBPACK_IMPORTED_MODULE_2__models_holding_model__["a" /* Holding */](data.base, data.quantity);
    }
    AddEditHoldingComponent.prototype.updateCurrency = function (currency) {
        this.holding.base = currency.code;
    };
    AddEditHoldingComponent.prototype.save = function () {
        this.dialogRef.close(this.holding);
    };
    return AddEditHoldingComponent;
}());
AddEditHoldingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-crypto-holding',
        template: __webpack_require__("../../../../../src/app/components/add-edit-holding/add-edit-holding.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-edit-holding/add-edit-holding.component.css")]
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MdDialogRef */]) === "function" && _a || Object])
], AddEditHoldingComponent);

var _a;
//# sourceMappingURL=add-edit-holding.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRootComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppRootComponent = (function () {
    function AppRootComponent() {
    }
    return AppRootComponent;
}());
AppRootComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    })
], AppRootComponent);

//# sourceMappingURL=app-root.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h1>How Much Crypto Value Do You Have?</h1>\r\n  <p>Use this site to calculate the current market value of your crypto holdings. Bookmark it to create a quick reference.</p>\r\n</header>\r\n\r\n<div class=\"current-value\" *ngIf=\"appService.hasHoldings()\">\r\n  {{currentValue | currency:'USD':true}} in USD\r\n  <div class=\"last-updated\">Last Updated: {{appService.lastUpdated}}</div>\r\n</div>\r\n\r\n<div class=\"actions\">\r\n  <button md-raised-button (click)=\"addHolding()\" class=\"add\">Add Crypto Holding</button>\r\n  <button md-raised-button (click)=\"refresh()\" class=\"refresh\" *ngIf=\"appService.hasHoldings()\">Refresh</button>\r\n</div>\r\n\r\n<div class=\"card-grid\" layout=\"horizontal\" layout-align=\"center center\">\r\n  <ng-template ngFor let-holding [ngForOf]=\"appService.holdingList | async\">\r\n    <app-holding-card [holding]=\"holding\"></app-holding-card>\r\n  </ng-template>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_edit_holding_add_edit_holding_component__ = __webpack_require__("../../../../../src/app/components/add-edit-holding/add-edit-holding.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_holding_model__ = __webpack_require__("../../../../../src/app/models/holding.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = (function () {
    function AppComponent(route, dialog, appService) {
        this.route = route;
        this.dialog = dialog;
        this.appService = appService;
        this.currentValue = 0;
        this.refreshSubject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (x) { return _this.appService.parseUrl(x); });
        this.appService.valueChanged.subscribe(function (x) {
            _this.currentValue = x;
        });
        this.refreshSubject.debounceTime(250).subscribe(function (x) {
            _this.appService.calculateValue();
        });
    };
    AppComponent.prototype.addHolding = function () {
        var _this = this;
        var base = '';
        var quantity = 0;
        var holding = new __WEBPACK_IMPORTED_MODULE_6__models_holding_model__["a" /* Holding */]('', 0);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__add_edit_holding_add_edit_holding_component__["a" /* AddEditHoldingComponent */], {
            data: holding,
            height: '250px',
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.quantity > 0) {
                    _this.appService.addHolding(new __WEBPACK_IMPORTED_MODULE_6__models_holding_model__["a" /* Holding */](result.base, result.quantity));
                }
            }
        });
    };
    AppComponent.prototype.refresh = function () {
        this.refreshSubject.next();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/components/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/currency-selector/currency-selector.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/currency-selector/currency-selector.component.html":
/***/ (function(module, exports) {

module.exports = "  <md-input-container>\r\n    <input mdInput placeholder=\"Crypto\" [mdAutocomplete]=\"auto\" [formControl]=\"control\">\r\n  </md-input-container>\r\n  <md-autocomplete #auto=\"mdAutocomplete\" name=\"base\" ngDefaultControl>\r\n    <md-option *ngFor=\"let currency of filteredCurrencyList | async\" [value]=\"currency.code\" (onSelectionChange)=\"filterSelection($event, currency)\">\r\n      {{currency.name}} ({{currency.code}})\r\n    </md-option>\r\n  </md-autocomplete>"

/***/ }),

/***/ "../../../../../src/app/components/currency-selector/currency-selector.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencySelectorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencySelectorComponent = (function () {
    function CurrencySelectorComponent(appService) {
        this.appService = appService;
        this.onSelectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]();
        this.control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* FormControl */]();
    }
    CurrencySelectorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.currencyList.subscribe(function (x) {
            _this.currencyList = x;
            if (_this.selected) {
                _this.control.setValue(_this.selected.toUpperCase());
            }
        });
        this.filteredCurrencyList = this.control.valueChanges
            .startWith(null)
            .map(function (val) { return _this.filterCurrency(val); });
    };
    CurrencySelectorComponent.prototype.filterCurrency = function (val) {
        val = (val || "").toLowerCase();
        return val ? this.currencyList.filter(function (s) { return s.code.toLowerCase().indexOf(val) > -1 || s.name.toLowerCase().indexOf(val) > -1; }) : this.currencyList;
    };
    CurrencySelectorComponent.prototype.filterSelection = function (event, currency) {
        if (event.source.selected) {
            this.onSelectionChange.emit(currency);
        }
    };
    return CurrencySelectorComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", String)
], CurrencySelectorComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* EventEmitter */]) === "function" && _a || Object)
], CurrencySelectorComponent.prototype, "onSelectionChange", void 0);
CurrencySelectorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-currency-selector',
        template: __webpack_require__("../../../../../src/app/components/currency-selector/currency-selector.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/currency-selector/currency-selector.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object])
], CurrencySelectorComponent);

var _a, _b;
//# sourceMappingURL=currency-selector.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/holding-card/holding-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".price-change.negative {\r\n\tcolor: red;\r\n}\r\n\r\n.price-change.positive {\r\n\tcolor: green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/holding-card/holding-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card class=\"holding-card\">\r\n  <md-card-header>\r\n    <md-card-title class=\"header\">{{holding.base | uppercase}} @ {{holding.value | currency:'USD':true}} </md-card-title>\r\n    <md-card-subtitle>\r\n    Qty: {{holding.quantity}}\r\n\r\n    </md-card-subtitle>\r\n  </md-card-header>\r\n  <md-card-content class=\"content\">\r\n    <p>Price: <strong>{{holding.price | currency:'USD':true}}</strong>, Past Hour: <strong><span class=\"price-change\" [class.positive]=\"holding.change > 0\" [class.negative]=\"holding.change < 0\">{{holding.change | currency:'USD':true}}</span></strong></p>\r\n  </md-card-content>\r\n  <md-card-actions>\r\n    <button md-button (click)=\"edit()\" class=\"edit\">EDIT</button>\r\n    <button md-button (click)=\"remove()\" class=\"remove\">REMOVE</button>\r\n  </md-card-actions>\r\n</md-card>"

/***/ }),

/***/ "../../../../../src/app/components/holding-card/holding-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_holding_model__ = __webpack_require__("../../../../../src/app/models/holding.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_edit_holding_add_edit_holding_component__ = __webpack_require__("../../../../../src/app/components/add-edit-holding/add-edit-holding.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoldingCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HoldingCardComponent = (function () {
    function HoldingCardComponent(appService, dialog) {
        this.appService = appService;
        this.dialog = dialog;
    }
    HoldingCardComponent.prototype.edit = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__add_edit_holding_add_edit_holding_component__["a" /* AddEditHoldingComponent */], {
            data: this.holding,
            height: '250px',
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (result.quantity > 0) {
                    _this.appService.updateHolding(_this.holding, new __WEBPACK_IMPORTED_MODULE_3__models_holding_model__["a" /* Holding */](result.base, result.quantity));
                }
            }
        });
    };
    HoldingCardComponent.prototype.remove = function () {
        if (confirm("Are you sure you want to remove this crypto holding?")) {
            this.appService.removeHolding(this.holding);
        }
    };
    return HoldingCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_holding_model__["a" /* Holding */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_holding_model__["a" /* Holding */]) === "function" && _a || Object)
], HoldingCardComponent.prototype, "holding", void 0);
HoldingCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-holding-card',
        template: __webpack_require__("../../../../../src/app/components/holding-card/holding-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/holding-card/holding-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* AppService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MdDialog */]) === "function" && _c || Object])
], HoldingCardComponent);

var _a, _b, _c;
//# sourceMappingURL=holding-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/currency-list.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENCY_LIST; });
var CURRENCY_LIST = [{ "code": "007", "name": "007", "statuses": ["primary"] }, { "code": "1337", "name": "1337", "statuses": ["primary"] }, { "code": "1ST", "name": "1ST", "statuses": ["primary"] }, { "code": "256", "name": "256", "statuses": ["primary"] }, { "code": "2GIVE", "name": "2GIVE", "statuses": ["primary"] }, { "code": "404", "name": "404", "statuses": ["primary"] }, { "code": "611", "name": "611", "statuses": ["primary"] }, { "code": "888", "name": "888", "statuses": ["primary"] }, { "code": "8BIT", "name": "8Bit", "statuses": ["primary"] }, { "code": "8BT", "name": "8BT", "statuses": ["primary"] }, { "code": "9COIN", "name": "9COIN", "statuses": ["primary"] }, { "code": "ABC", "name": "ABC", "statuses": ["primary"] }, { "code": "ABN", "name": "ABN", "statuses": ["primary"] }, { "code": "ACES", "name": "ACES", "statuses": ["primary"] }, { "code": "ACID", "name": "ACID", "statuses": ["primary"] }, { "code": "ACN", "name": "ACN", "statuses": ["primary"] }, { "code": "ACOIN", "name": "ACOIN", "statuses": ["primary"] }, { "code": "ACP", "name": "ACP", "statuses": ["primary"] }, { "code": "ADC", "name": "ADC", "statuses": ["primary"] }, { "code": "ADL", "name": "ADL", "statuses": ["primary"] }, { "code": "ADT", "name": "ADT", "statuses": ["primary"] }, { "code": "ADX", "name": "ADX", "statuses": ["primary"] }, { "code": "ADZ", "name": "Adzcoin", "statuses": ["primary"] }, { "code": "AEB", "name": "AEB", "statuses": ["primary"] }, { "code": "AEO", "name": "AEO", "statuses": ["primary"] }, { "code": "AEON", "name": "Aeon", "statuses": ["primary"] }, { "code": "AGRS", "name": "Agoras Tokens", "statuses": ["primary"] }, { "code": "AIB", "name": "AIB", "statuses": ["primary"] }, { "code": "AIR", "name": "AIR", "statuses": ["primary"] }, { "code": "ALEX", "name": "ALEX", "statuses": ["primary"] }, { "code": "ALL", "name": "ALL", "statuses": ["primary"] }, { "code": "ALT", "name": "ALT", "statuses": ["primary"] }, { "code": "ALTC", "name": "ALTC", "statuses": ["primary"] }, { "code": "AMBER", "name": "AMBER", "statuses": ["primary"] }, { "code": "AMS", "name": "AMS", "statuses": ["primary"] }, { "code": "ANAL", "name": "ANAL", "statuses": ["primary"] }, { "code": "ANI", "name": "ANI", "statuses": ["primary"] }, { "code": "ANTI", "name": "AntiBitcoin", "statuses": ["primary"] }, { "code": "APC", "name": "Applecoin", "statuses": ["primary"] }, { "code": "APT", "name": "APT", "statuses": ["primary"] }, { "code": "APW", "name": "APW", "statuses": ["primary"] }, { "code": "APX", "name": "APX", "statuses": ["primary"] }, { "code": "ANT", "name": "Aragon", "statuses": ["primary"] }, { "code": "ARB", "name": "ARB", "statuses": ["primary"] }, { "code": "ARC", "name": "ARC", "statuses": ["primary"] }, { "code": "ARCO", "name": "ARCO", "statuses": ["primary"] }, { "code": "ARD", "name": "ARD", "statuses": ["primary"] }, { "code": "ARDR", "name": "ARDR", "statuses": ["primary"] }, { "code": "ARE", "name": "ARE", "statuses": ["primary"] }, { "code": "ARK", "name": "ARK", "statuses": ["primary"] }, { "code": "ARM", "name": "ARM", "statuses": ["primary"] }, { "code": "ARTA", "name": "ARTA", "statuses": ["primary"] }, { "code": "ABY", "name": "ArtByte", "statuses": ["primary"] }, { "code": "ARTC", "name": "ARTC", "statuses": ["primary"] }, { "code": "ADCN", "name": "Asiadigicoin", "statuses": ["primary"] }, { "code": "AST", "name": "AST", "statuses": ["primary"] }, { "code": "ATB", "name": "ATB", "statuses": ["secondary"] }, { "code": "ATM", "name": "ATM", "statuses": ["primary"] }, { "code": "ATU", "name": "ATU", "statuses": ["secondary"] }, { "code": "ATX", "name": "ATX", "statuses": ["primary"] }, { "code": "REP", "name": "Augur", "statuses": ["primary"] }, { "code": "AUM", "name": "AUM", "statuses": ["primary"] }, { "code": "AUR", "name": "Auroracoin", "statuses": ["primary"] }, { "code": "AURS", "name": "AURS", "statuses": ["primary"] }, { "code": "AUS", "name": "AUS", "statuses": ["secondary"] }, { "code": "AUD", "name": "Australian Dollar", "statuses": ["secondary"] }, { "code": "AV", "name": "AV", "statuses": ["primary"] }, { "code": "AVT", "name": "AVT", "statuses": ["primary"] }, { "code": "B2", "name": "B2", "statuses": ["primary"] }, { "code": "B3", "name": "B3", "statuses": ["primary"] }, { "code": "BA", "name": "BA", "statuses": ["primary"] }, { "code": "BAB", "name": "BAB", "statuses": ["primary"] }, { "code": "BAC", "name": "BAC", "statuses": ["primary"] }, { "code": "BAN", "name": "BAN", "statuses": ["primary"] }, { "code": "BAS", "name": "BAS", "statuses": ["primary"] }, { "code": "BASH", "name": "BASH", "statuses": ["primary"] }, { "code": "BAT", "name": "BAT", "statuses": ["primary"] }, { "code": "BTA", "name": "Bata", "statuses": ["primary"] }, { "code": "BAY", "name": "BAY", "statuses": ["primary"] }, { "code": "BBCC", "name": "BBCC", "statuses": ["primary"] }, { "code": "BBP", "name": "BBP", "statuses": ["primary"] }, { "code": "BCU", "name": "BCU", "statuses": ["primary"] }, { "code": "BDC", "name": "BDC", "statuses": ["primary"] }, { "code": "BDL", "name": "BDL", "statuses": ["primary"] }, { "code": "BEE", "name": "BEE", "statuses": ["primary"] }, { "code": "BEEP", "name": "BEEP", "statuses": ["primary"] }, { "code": "BEEZ", "name": "BEEZ", "statuses": ["primary"] }, { "code": "BELA", "name": "BellaCoin", "statuses": ["primary"] }, { "code": "BERN", "name": "BERNcash", "statuses": ["primary"] }, { "code": "BEST", "name": "BEST", "statuses": ["primary"] }, { "code": "BET", "name": "BET", "statuses": ["primary"] }, { "code": "BHC", "name": "BHC", "statuses": ["primary"] }, { "code": "BILL", "name": "BILL", "statuses": ["primary"] }, { "code": "BIOS", "name": "BiosCrypto", "statuses": ["primary"] }, { "code": "BIT", "name": "BIT", "statuses": ["primary"] }, { "code": "BIT16", "name": "BIT16", "statuses": ["primary"] }, { "code": "BITB", "name": "BitBean", "statuses": ["primary"] }, { "code": "BITCF", "name": "BITCF", "statuses": ["primary"] }, { "code": "BTC", "name": "Bitcoin", "statuses": ["primary", "secondary"] }, { "code": "BCH", "name": "Bitcoin Cash", "statuses": ["primary"] }, { "code": "XBC", "name": "Bitcoin Plus", "statuses": ["primary"] }, { "code": "BTCD", "name": "BitcoinDark", "statuses": ["primary"] }, { "code": "BCY", "name": "Bitcrystals", "statuses": ["primary"] }, { "code": "BTM", "name": "Bitmark", "statuses": ["primary"] }, { "code": "BITON", "name": "BITON", "statuses": ["primary"] }, { "code": "BPC", "name": "Bitpark coin", "statuses": ["primary"] }, { "code": "BTQ", "name": "BitQuark", "statuses": ["primary"] }, { "code": "BSD", "name": "BitSend", "statuses": ["primary"] }, { "code": "BTS", "name": "BitShares", "statuses": ["primary"] }, { "code": "SWIFT", "name": "BitSwift", "statuses": ["primary"] }, { "code": "BITZ", "name": "Bitz", "statuses": ["primary"] }, { "code": "BIZ", "name": "BIZ", "statuses": ["primary"] }, { "code": "BLK", "name": "Blackcoin", "statuses": ["primary"] }, { "code": "JACK", "name": "BlackJack", "statuses": ["primary"] }, { "code": "BLC", "name": "Blakecoin", "statuses": ["primary"] }, { "code": "BLAZR", "name": "BLAZR", "statuses": ["primary"] }, { "code": "BLITZ", "name": "Blitzcoin", "statuses": ["primary"] }, { "code": "BLOCK", "name": "Blocknet", "statuses": ["primary"] }, { "code": "BLRY", "name": "BLRY", "statuses": ["primary"] }, { "code": "BLU", "name": "BLU", "statuses": ["primary"] }, { "code": "BLUS", "name": "BLUS", "statuses": ["primary"] }, { "code": "BMC", "name": "BMC", "statuses": ["primary"] }, { "code": "BNT", "name": "BNT", "statuses": ["primary"] }, { "code": "BOD", "name": "BOD", "statuses": ["primary"] }, { "code": "BOMB", "name": "BOMB", "statuses": ["primary"] }, { "code": "BON", "name": "BON", "statuses": ["primary"] }, { "code": "BOOM", "name": "BOOM", "statuses": ["primary"] }, { "code": "BOST", "name": "BoostCoin", "statuses": ["primary"] }, { "code": "BOS", "name": "BOS", "statuses": ["primary"] }, { "code": "BOSS", "name": "BOSS", "statuses": ["primary"] }, { "code": "BPOK", "name": "BPOK", "statuses": ["primary"] }, { "code": "BQ", "name": "BQ", "statuses": ["primary"] }, { "code": "BQX", "name": "BQX", "statuses": ["primary"] }, { "code": "BRAIN", "name": "BRAIN", "statuses": ["primary"] }, { "code": "BRIT", "name": "BRIT", "statuses": ["primary"] }, { "code": "GBP", "name": "British Pound Sterling", "statuses": ["secondary"] }, { "code": "BRK", "name": "BRK", "statuses": ["primary"] }, { "code": "BRONZ", "name": "BRONZ", "statuses": ["primary"] }, { "code": "BRX", "name": "BRX", "statuses": ["primary"] }, { "code": "BSC", "name": "BSC", "statuses": ["primary"] }, { "code": "BST", "name": "BST", "statuses": ["primary"] }, { "code": "BSTK", "name": "BSTK", "statuses": ["primary"] }, { "code": "BTCHC", "name": "BTCHC", "statuses": ["primary"] }, { "code": "BTCO", "name": "BTCO", "statuses": ["primary"] }, { "code": "BTCR", "name": "BTCR", "statuses": ["primary"] }, { "code": "BTCRY", "name": "BTCRY", "statuses": ["primary"] }, { "code": "BTCS", "name": "BTCS", "statuses": ["primary"] }, { "code": "BTCU", "name": "BTCU", "statuses": ["primary"] }, { "code": "BTD", "name": "BTD", "statuses": ["primary"] }, { "code": "BTLC", "name": "BTLC", "statuses": ["primary"] }, { "code": "BTP", "name": "BTP", "statuses": ["primary"] }, { "code": "BTTF", "name": "BTTF", "statuses": ["primary"] }, { "code": "BTX", "name": "BTX", "statuses": ["primary"] }, { "code": "BUB", "name": "BUB", "statuses": ["primary"] }, { "code": "BUCKS", "name": "BUCKS", "statuses": ["primary"] }, { "code": "BURST", "name": "Burst", "statuses": ["primary"] }, { "code": "BUS", "name": "BUS", "statuses": ["primary"] }, { "code": "BUZZ", "name": "BUZZ", "statuses": ["primary"] }, { "code": "BVC", "name": "BVC", "statuses": ["primary"] }, { "code": "BXT", "name": "BXT", "statuses": ["primary"] }, { "code": "GBYTE", "name": "Byteball", "statuses": ["primary"] }, { "code": "BYC", "name": "Bytecent", "statuses": ["primary"] }, { "code": "BCN", "name": "Bytecoin", "statuses": ["primary"] }, { "code": "CAB", "name": "Cabbage Unit", "statuses": ["primary"] }, { "code": "CALC", "name": "CALC", "statuses": ["primary"] }, { "code": "CAD", "name": "Canadian Dollar", "statuses": ["secondary"] }, { "code": "CANN", "name": "CannabisCoin", "statuses": ["primary"] }, { "code": "CPC", "name": "Capricoin", "statuses": ["primary"] }, { "code": "CAT", "name": "CAT", "statuses": ["primary"] }, { "code": "CB", "name": "CB", "statuses": ["primary"] }, { "code": "CC", "name": "CC", "statuses": ["primary"] }, { "code": "CCC", "name": "CCC", "statuses": ["primary"] }, { "code": "CCRB", "name": "CCRB", "statuses": ["primary"] }, { "code": "CCX", "name": "CCX", "statuses": ["primary"] }, { "code": "CD", "name": "CD", "statuses": ["primary"] }, { "code": "CDN", "name": "CDN", "statuses": ["primary"] }, { "code": "CF", "name": "CF", "statuses": ["primary"] }, { "code": "CFC", "name": "CFC", "statuses": ["primary"] }, { "code": "CFI", "name": "CFI", "statuses": ["primary"] }, { "code": "CH", "name": "CH", "statuses": ["primary"] }, { "code": "CHEMX", "name": "CHEMX", "statuses": ["primary"] }, { "code": "CHESS", "name": "CHESS", "statuses": ["primary"] }, { "code": "CNY", "name": "Chinese Yuan", "statuses": ["secondary"] }, { "code": "CHRG", "name": "CHRG", "statuses": ["primary"] }, { "code": "CIRC", "name": "CIRC", "statuses": ["primary"] }, { "code": "CJ", "name": "CJ", "statuses": ["primary"] }, { "code": "CJC", "name": "CJC", "statuses": ["primary"] }, { "code": "CLAM", "name": "Clams", "statuses": ["primary"] }, { "code": "CLINT", "name": "CLINT", "statuses": ["primary"] }, { "code": "CLOAK", "name": "Cloakcoin", "statuses": ["primary"] }, { "code": "CLR", "name": "CLR", "statuses": ["primary"] }, { "code": "CLUB", "name": "CLUB", "statuses": ["primary"] }, { "code": "CLUD", "name": "CLUD", "statuses": ["primary"] }, { "code": "CMT", "name": "CMT", "statuses": ["primary"] }, { "code": "CNC", "name": "CNC", "statuses": ["primary"] }, { "code": "CND", "name": "CND", "statuses": ["primary"] }, { "code": "CNNC", "name": "CNNC", "statuses": ["primary"] }, { "code": "CNT", "name": "CNT", "statuses": ["primary"] }, { "code": "COXST", "name": "CoExistCoin", "statuses": ["primary"] }, { "code": "CV2", "name": "Colossuscoin2.0", "statuses": ["primary"] }, { "code": "CON", "name": "CON", "statuses": ["primary"] }, { "code": "CONX", "name": "CONX", "statuses": ["primary"] }, { "code": "CORG", "name": "CORG", "statuses": ["primary"] }, { "code": "COS", "name": "COS", "statuses": ["primary"] }, { "code": "XCP", "name": "Counterparty", "statuses": ["primary"] }, { "code": "COV", "name": "COV", "statuses": ["primary"] }, { "code": "COVAL", "name": "COVAL", "statuses": ["primary"] }, { "code": "COX", "name": "COX", "statuses": ["primary"] }, { "code": "CRAFT", "name": "CRAFT", "statuses": ["primary"] }, { "code": "CRAVE", "name": "CRAVE", "statuses": ["primary"] }, { "code": "CRC", "name": "CRC", "statuses": ["primary"] }, { "code": "CRB", "name": "Creditbit", "statuses": ["primary"] }, { "code": "CREVA", "name": "CrevaCoin", "statuses": ["primary"] }, { "code": "CRIME", "name": "CRIME", "statuses": ["primary"] }, { "code": "CRNK", "name": "CRNK", "statuses": ["primary"] }, { "code": "CRPC", "name": "CRPC", "statuses": ["primary"] }, { "code": "CRS", "name": "CRS", "statuses": ["primary"] }, { "code": "CRT", "name": "CRT", "statuses": ["primary"] }, { "code": "CRW", "name": "CRW", "statuses": ["primary"] }, { "code": "CRX", "name": "CRX", "statuses": ["primary"] }, { "code": "CBX", "name": "Crypto Bullion", "statuses": ["primary"] }, { "code": "CESC", "name": "CryptoEscudo", "statuses": ["primary"] }, { "code": "XCN", "name": "Cryptonite", "statuses": ["primary"] }, { "code": "CS", "name": "CS", "statuses": ["primary"] }, { "code": "CSMIC", "name": "CSMIC", "statuses": ["primary"] }, { "code": "CST", "name": "CST", "statuses": ["primary"] }, { "code": "CTK", "name": "CTK", "statuses": ["primary"] }, { "code": "CTL", "name": "CTL", "statuses": ["primary"] }, { "code": "CTO", "name": "CTO", "statuses": ["primary"] }, { "code": "CURE", "name": "Curecoin", "statuses": ["primary"] }, { "code": "CVC", "name": "CVC", "statuses": ["primary"] }, { "code": "CWXT", "name": "CWXT", "statuses": ["primary"] }, { "code": "CXT", "name": "CXT", "statuses": ["primary"] }, { "code": "CYP", "name": "Cypher", "statuses": ["primary"] }, { "code": "CZECO", "name": "CZECO", "statuses": ["primary"] }, { "code": "DANC", "name": "DANC", "statuses": ["primary"] }, { "code": "DAR", "name": "DAR", "statuses": ["primary"] }, { "code": "DGD", "name": "DarkGoldCoin", "statuses": ["primary"] }, { "code": "DAS", "name": "DAS", "statuses": ["primary"] }, { "code": "DASH", "name": "Dash", "statuses": ["primary", "secondary"] }, { "code": "DSH", "name": "Dashcoin", "statuses": ["primary"] }, { "code": "DBG", "name": "DBG", "statuses": ["primary"] }, { "code": "DBIX", "name": "DBIX", "statuses": ["primary"] }, { "code": "DBT", "name": "DBT", "statuses": ["secondary"] }, { "code": "DBTC", "name": "DBTC", "statuses": ["primary"] }, { "code": "DC", "name": "DC", "statuses": ["primary"] }, { "code": "DCC", "name": "DCC", "statuses": ["primary"] }, { "code": "DCK", "name": "DCK", "statuses": ["primary"] }, { "code": "DCT", "name": "DCT", "statuses": ["primary"] }, { "code": "DCYP", "name": "DCYP", "statuses": ["primary"] }, { "code": "DDF", "name": "DDF", "statuses": ["primary"] }, { "code": "DECR", "name": "DECR", "statuses": ["primary"] }, { "code": "DCR", "name": "Decred", "statuses": ["primary"] }, { "code": "DEEP", "name": "DEEP", "statuses": ["primary"] }, { "code": "DEL", "name": "DEL", "statuses": ["primary"] }, { "code": "DEN", "name": "DEN", "statuses": ["primary"] }, { "code": "DESH", "name": "DESH", "statuses": ["primary"] }, { "code": "DES", "name": "Destiny", "statuses": ["primary"] }, { "code": "DETH", "name": "DETH", "statuses": ["primary"] }, { "code": "DEUS", "name": "DEUS", "statuses": ["primary"] }, { "code": "DEM", "name": "Deutsche eMark", "statuses": ["primary"] }, { "code": "DFT", "name": "DFT", "statuses": ["primary"] }, { "code": "DGCS", "name": "DGCS", "statuses": ["primary"] }, { "code": "DGMS", "name": "DGMS", "statuses": ["primary"] }, { "code": "DGORE", "name": "DGORE", "statuses": ["primary"] }, { "code": "DMD", "name": "Diamond", "statuses": ["primary"] }, { "code": "DIBC", "name": "DIBC", "statuses": ["primary"] }, { "code": "DIC", "name": "DIC", "statuses": ["primary"] }, { "code": "DGB", "name": "Digibyte", "statuses": ["primary"] }, { "code": "CUBE", "name": "DigiCube", "statuses": ["primary"] }, { "code": "DGC", "name": "Digitalcoin", "statuses": ["primary"] }, { "code": "XDN", "name": "DigitalNote", "statuses": ["primary"] }, { "code": "DP", "name": "DigitalPrice", "statuses": ["primary"] }, { "code": "DIME", "name": "Dimecoin", "statuses": ["primary"] }, { "code": "DIRT", "name": "DIRT", "statuses": ["primary"] }, { "code": "DISK", "name": "DISK", "statuses": ["primary"] }, { "code": "DLC", "name": "DLC", "statuses": ["primary"] }, { "code": "DMC", "name": "DMC", "statuses": ["primary"] }, { "code": "NOTE", "name": "DNotes", "statuses": ["primary"] }, { "code": "DNT", "name": "DNT", "statuses": ["primary"] }, { "code": "DOC", "name": "DOC", "statuses": ["primary"] }, { "code": "DOGE", "name": "Dogecoin", "statuses": ["primary", "secondary"] }, { "code": "DOPE", "name": "DopeCoin", "statuses": ["primary"] }, { "code": "DP2", "name": "DP2", "statuses": ["primary"] }, { "code": "DRA", "name": "DRA", "statuses": ["primary"] }, { "code": "DRACO", "name": "DRACO", "statuses": ["primary"] }, { "code": "DRM", "name": "DRM", "statuses": ["primary"] }, { "code": "DRM8", "name": "DRM8", "statuses": ["primary"] }, { "code": "DROP", "name": "DROP", "statuses": ["primary"] }, { "code": "DRZ", "name": "DRZ", "statuses": ["primary"] }, { "code": "DTB", "name": "DTB", "statuses": ["primary"] }, { "code": "DTT", "name": "DTT", "statuses": ["primary"] }, { "code": "DUO", "name": "DUO", "statuses": ["primary"] }, { "code": "DUS", "name": "DUS", "statuses": ["secondary"] }, { "code": "DXC", "name": "DXC", "statuses": ["primary"] }, { "code": "DYN", "name": "DYN", "statuses": ["primary"] }, { "code": "EAC", "name": "Earthcoin", "statuses": ["primary"] }, { "code": "EB3", "name": "EB3", "statuses": ["primary"] }, { "code": "EBH", "name": "EBH", "statuses": ["primary"] }, { "code": "EBST", "name": "EBST", "statuses": ["primary"] }, { "code": "EBT", "name": "EBT", "statuses": ["secondary"] }, { "code": "ECA", "name": "ECA", "statuses": ["primary"] }, { "code": "ECCHI", "name": "ECCHI", "statuses": ["primary"] }, { "code": "ECLI", "name": "ECLI", "statuses": ["primary"] }, { "code": "ECN", "name": "ECN", "statuses": ["primary"] }, { "code": "ECO", "name": "ECO", "statuses": ["primary"] }, { "code": "ECON", "name": "ECON", "statuses": ["primary"] }, { "code": "EDC", "name": "EDC", "statuses": ["primary"] }, { "code": "EDG", "name": "EDG", "statuses": ["primary"] }, { "code": "EDRC", "name": "EDRC", "statuses": ["primary"] }, { "code": "EDR", "name": "EDRCoin", "statuses": ["primary"] }, { "code": "EET", "name": "EET", "statuses": ["secondary"] }, { "code": "EGO", "name": "EGO", "statuses": ["primary"] }, { "code": "EMC2", "name": "Einsteinium", "statuses": ["primary"] }, { "code": "EKO", "name": "EKO", "statuses": ["primary"] }, { "code": "EL", "name": "EL", "statuses": ["primary"] }, { "code": "ELCO", "name": "ELcoin", "statuses": ["primary"] }, { "code": "EFL", "name": "Electronic Gulden", "statuses": ["primary"] }, { "code": "EMB", "name": "EMB", "statuses": ["secondary"] }, { "code": "EME", "name": "EME", "statuses": ["secondary"] }, { "code": "EMC", "name": "Emercoin", "statuses": ["primary"] }, { "code": "EMG", "name": "EMG", "statuses": ["primary"] }, { "code": "EMPC", "name": "EMPC", "statuses": ["primary"] }, { "code": "ENE", "name": "ENE", "statuses": ["primary"] }, { "code": "ENRG", "name": "Energycoin", "statuses": ["primary"] }, { "code": "ENT", "name": "ENT", "statuses": ["primary"] }, { "code": "ENTER", "name": "ENTER", "statuses": ["primary"] }, { "code": "EOS", "name": "EOS", "statuses": ["primary"] }, { "code": "EPC", "name": "EPC", "statuses": ["primary"] }, { "code": "EQM", "name": "EQM", "statuses": ["primary"] }, { "code": "ERC", "name": "ERC", "statuses": ["primary"] }, { "code": "ERY", "name": "ERY", "statuses": ["primary"] }, { "code": "ESB", "name": "ESB", "statuses": ["secondary"] }, { "code": "ESC", "name": "ESC", "statuses": ["primary"] }, { "code": "ESP", "name": "ESP", "statuses": ["primary"] }, { "code": "EST", "name": "EST", "statuses": ["primary"] }, { "code": "ETH", "name": "Ethereum", "statuses": ["primary", "secondary"] }, { "code": "ETC", "name": "Ethereum Classic", "statuses": ["primary"] }, { "code": "ETP", "name": "ETP", "statuses": ["primary"] }, { "code": "ETT", "name": "ETT", "statuses": ["primary"] }, { "code": "ETX", "name": "ETX", "statuses": ["primary"] }, { "code": "EUC", "name": "EUC", "statuses": ["primary"] }, { "code": "EURC", "name": "EURC", "statuses": ["primary"] }, { "code": "EUR", "name": "Euro", "statuses": ["primary", "secondary"] }, { "code": "EGC", "name": "EverGreenCoin", "statuses": ["primary"] }, { "code": "EVIL", "name": "EVIL", "statuses": ["primary"] }, { "code": "EVO", "name": "EVO", "statuses": ["primary"] }, { "code": "EVX", "name": "EVX", "statuses": ["primary"] }, { "code": "EXB", "name": "EXB", "statuses": ["primary"] }, { "code": "EXCL", "name": "EXCL", "statuses": ["primary"] }, { "code": "EXP", "name": "Expanse", "statuses": ["primary"] }, { "code": "EXT", "name": "EXT", "statuses": ["primary"] }, { "code": "FCT", "name": "Factom", "statuses": ["primary"] }, { "code": "FADE", "name": "FADE", "statuses": ["primary"] }, { "code": "FAIR", "name": "Faircoin", "statuses": ["primary"] }, { "code": "FAZZ", "name": "FAZZ", "statuses": ["primary"] }, { "code": "FCASH", "name": "FCASH", "statuses": ["primary"] }, { "code": "FCH", "name": "FCH", "statuses": ["primary"] }, { "code": "FCN", "name": "FCN", "statuses": ["primary"] }, { "code": "FTC", "name": "Feathercoin", "statuses": ["primary"] }, { "code": "TIPS", "name": "Fedoracoin", "statuses": ["primary"] }, { "code": "FIND", "name": "FIND", "statuses": ["primary"] }, { "code": "FIRE", "name": "FIRE", "statuses": ["primary"] }, { "code": "FIRST", "name": "FIRST", "statuses": ["primary"] }, { "code": "FJC", "name": "FJC", "statuses": ["primary"] }, { "code": "FLO", "name": "Florincoin", "statuses": ["primary"] }, { "code": "FLVR", "name": "FLVR", "statuses": ["primary"] }, { "code": "FLX", "name": "FLX", "statuses": ["primary"] }, { "code": "FLY", "name": "Flycoin", "statuses": ["primary"] }, { "code": "FNC", "name": "FNC", "statuses": ["primary"] }, { "code": "FLDC", "name": "FoldingCoin", "statuses": ["primary"] }, { "code": "FONZ", "name": "FONZ", "statuses": ["primary"] }, { "code": "FRDC", "name": "FRDC", "statuses": ["primary"] }, { "code": "FRE", "name": "FRE", "statuses": ["primary"] }, { "code": "FRN", "name": "FRN", "statuses": ["primary"] }, { "code": "FRST", "name": "FRST", "statuses": ["primary"] }, { "code": "FRWC", "name": "FRWC", "statuses": ["primary"] }, { "code": "FST", "name": "FST", "statuses": ["primary"] }, { "code": "FUN", "name": "FUN", "statuses": ["primary"] }, { "code": "FUNC", "name": "FUNC", "statuses": ["primary"] }, { "code": "FUNK", "name": "FUNK", "statuses": ["primary"] }, { "code": "FUTC", "name": "FUTC", "statuses": ["primary"] }, { "code": "FUZZ", "name": "FUZZ", "statuses": ["primary"] }, { "code": "FX", "name": "FX", "statuses": ["primary"] }, { "code": "FYN", "name": "FYN", "statuses": ["primary"] }, { "code": "FYP", "name": "FYP", "statuses": ["primary"] }, { "code": "GAC", "name": "GAC", "statuses": ["primary"] }, { "code": "GAIN", "name": "GAIN", "statuses": ["primary"] }, { "code": "GAM", "name": "GAM", "statuses": ["primary"] }, { "code": "GBT", "name": "GameBet Coin", "statuses": ["primary"] }, { "code": "GAME", "name": "GameCredits", "statuses": ["primary"] }, { "code": "GARY", "name": "GARY", "statuses": ["primary"] }, { "code": "GB", "name": "GB", "statuses": ["primary"] }, { "code": "GBC", "name": "GBC", "statuses": ["primary"] }, { "code": "GBG", "name": "GBG", "statuses": ["primary"] }, { "code": "GBRC", "name": "GBRC", "statuses": ["primary"] }, { "code": "GCC", "name": "GCC", "statuses": ["primary"] }, { "code": "GEO", "name": "GeoCoin", "statuses": ["primary"] }, { "code": "GIFT", "name": "GIFT", "statuses": ["primary"] }, { "code": "GIZ", "name": "GIZ", "statuses": ["primary"] }, { "code": "GLC", "name": "GLC", "statuses": ["primary"] }, { "code": "GLO", "name": "GLO", "statuses": ["primary"] }, { "code": "BSTY", "name": "GlobalBoost-Y", "statuses": ["primary"] }, { "code": "GLTC", "name": "GLTC", "statuses": ["primary"] }, { "code": "GLUCK", "name": "GLUCK", "statuses": ["primary"] }, { "code": "GNO", "name": "GNO", "statuses": ["primary"] }, { "code": "GCR", "name": "GoCoineR", "statuses": ["primary"] }, { "code": "GLD", "name": "GoldCoin", "statuses": ["primary"] }, { "code": "GNT", "name": "Golem", "statuses": ["primary"] }, { "code": "GOLOS", "name": "GOLOS", "statuses": ["primary"] }, { "code": "GOON", "name": "GOON", "statuses": ["primary"] }, { "code": "GOTX", "name": "GOTX", "statuses": ["primary"] }, { "code": "GP", "name": "GP", "statuses": ["primary"] }, { "code": "GPU", "name": "GPU", "statuses": ["primary"] }, { "code": "GRAM", "name": "GRAM", "statuses": ["primary"] }, { "code": "GRE", "name": "GRE", "statuses": ["primary"] }, { "code": "GREED", "name": "GREED", "statuses": ["primary"] }, { "code": "GRC", "name": "Gridcoin", "statuses": ["primary"] }, { "code": "GRS", "name": "Groestlcoin", "statuses": ["primary"] }, { "code": "GROW", "name": "GrowCoin", "statuses": ["primary"] }, { "code": "GRP", "name": "GRP", "statuses": ["primary"] }, { "code": "GSB", "name": "GSB", "statuses": ["secondary"] }, { "code": "GSM", "name": "GSM", "statuses": ["primary"] }, { "code": "GSX", "name": "GSX", "statuses": ["primary"] }, { "code": "GT", "name": "GT", "statuses": ["primary"] }, { "code": "GUC", "name": "GUC", "statuses": ["primary"] }, { "code": "NLG", "name": "Gulden", "statuses": ["primary"] }, { "code": "GUM", "name": "GUM", "statuses": ["primary"] }, { "code": "GUP", "name": "GUP", "statuses": ["primary"] }, { "code": "GYC", "name": "GYC", "statuses": ["primary"] }, { "code": "HAWK", "name": "HAWK", "statuses": ["primary"] }, { "code": "HBT", "name": "HBT", "statuses": ["secondary"] }, { "code": "HEAT", "name": "HEAT", "statuses": ["primary"] }, { "code": "HEDG", "name": "HEDG", "statuses": ["primary"] }, { "code": "THC", "name": "Hempcoin", "statuses": ["primary"] }, { "code": "HET", "name": "HET", "statuses": ["secondary"] }, { "code": "XHI", "name": "HiCoin", "statuses": ["primary"] }, { "code": "HIFUN", "name": "HIFUN", "statuses": ["primary"] }, { "code": "HILL", "name": "HILL", "statuses": ["primary"] }, { "code": "HKG", "name": "HKG", "statuses": ["primary"] }, { "code": "HLB", "name": "HLB", "statuses": ["primary"] }, { "code": "HMQ", "name": "HMQ", "statuses": ["primary"] }, { "code": "HNC", "name": "HNC", "statuses": ["primary"] }, { "code": "HODL", "name": "HOdlcoin", "statuses": ["primary"] }, { "code": "HOP", "name": "HOP", "statuses": ["primary"] }, { "code": "HPC", "name": "HPC", "statuses": ["primary"] }, { "code": "HRB", "name": "HRB", "statuses": ["primary"] }, { "code": "HSP", "name": "HSP", "statuses": ["primary"] }, { "code": "HTC", "name": "HTC", "statuses": ["primary"] }, { "code": "HTML5", "name": "HTMLCOIN", "statuses": ["primary"] }, { "code": "HTS", "name": "HTS", "statuses": ["primary"] }, { "code": "HUC", "name": "HUC", "statuses": ["primary"] }, { "code": "HUS", "name": "HUS", "statuses": ["secondary"] }, { "code": "HVCO", "name": "HVCO", "statuses": ["primary"] }, { "code": "IBANK", "name": "IBANK", "statuses": ["primary"] }, { "code": "IBC", "name": "IBC", "statuses": ["primary"] }, { "code": "IBT", "name": "IBT", "statuses": ["secondary"] }, { "code": "ICASH", "name": "iCash", "statuses": ["primary"] }, { "code": "ICO", "name": "ICO", "statuses": ["primary"] }, { "code": "ICOB", "name": "ICOB", "statuses": ["primary"] }, { "code": "ICN", "name": "Iconomi", "statuses": ["primary"] }, { "code": "ICS", "name": "ICS", "statuses": ["primary"] }, { "code": "IET", "name": "IET", "statuses": ["secondary"] }, { "code": "IGN", "name": "IGN", "statuses": ["primary"] }, { "code": "ILC", "name": "ILC", "statuses": ["primary"] }, { "code": "IML", "name": "IML", "statuses": ["primary"] }, { "code": "IMS", "name": "IMS", "statuses": ["primary"] }, { "code": "INC", "name": "INC", "statuses": ["primary"] }, { "code": "INCNT", "name": "INCNT", "statuses": ["primary"] }, { "code": "INCP", "name": "INCP", "statuses": ["primary"] }, { "code": "IDR", "name": "Indonesian Rupiah", "statuses": ["secondary"] }, { "code": "INF", "name": "INF", "statuses": ["primary"] }, { "code": "IFC", "name": "Infinitecoin", "statuses": ["primary"] }, { "code": "INFX", "name": "Influxcoin", "statuses": ["primary"] }, { "code": "INSN", "name": "INSN", "statuses": ["primary"] }, { "code": "IOC", "name": "IO Coin", "statuses": ["primary"] }, { "code": "ION", "name": "ION", "statuses": ["primary"] }, { "code": "IONX", "name": "IONX", "statuses": ["primary"] }, { "code": "IOP", "name": "IOP", "statuses": ["primary"] }, { "code": "IOT", "name": "IOT", "statuses": ["primary"] }, { "code": "ISE", "name": "ISE", "statuses": ["secondary"] }, { "code": "ITI", "name": "ITI", "statuses": ["primary"] }, { "code": "IUS", "name": "IUS", "statuses": ["secondary"] }, { "code": "IXC", "name": "IXC", "statuses": ["primary"] }, { "code": "IXT", "name": "IXT", "statuses": ["primary"] }, { "code": "JPY", "name": "Japanese Yen", "statuses": ["secondary"] }, { "code": "JIF", "name": "JIF", "statuses": ["primary"] }, { "code": "JIO", "name": "JIO", "statuses": ["primary"] }, { "code": "JNS", "name": "JNS", "statuses": ["primary"] }, { "code": "JPC", "name": "JPC", "statuses": ["primary"] }, { "code": "JW", "name": "JW", "statuses": ["primary"] }, { "code": "JWL", "name": "JWL", "statuses": ["primary"] }, { "code": "KARMA", "name": "Karma", "statuses": ["primary"] }, { "code": "KAT", "name": "KAT", "statuses": ["primary"] }, { "code": "KC", "name": "KC", "statuses": ["primary"] }, { "code": "KGC", "name": "KGC", "statuses": ["primary"] }, { "code": "KGDC", "name": "KGDC", "statuses": ["primary"] }, { "code": "KLC", "name": "KLC", "statuses": ["primary"] }, { "code": "KMD", "name": "KMD", "statuses": ["primary"] }, { "code": "KOBO", "name": "KOBO", "statuses": ["primary"] }, { "code": "KORE", "name": "KoreCoin", "statuses": ["primary"] }, { "code": "KPL", "name": "KPL", "statuses": ["primary"] }, { "code": "KRAK", "name": "KRAK", "statuses": ["primary"] }, { "code": "KRB", "name": "KRB", "statuses": ["primary"] }, { "code": "KRC", "name": "KRC", "statuses": ["primary"] }, { "code": "KUBO", "name": "KUBO", "statuses": ["primary"] }, { "code": "KUSH", "name": "KUSH", "statuses": ["primary"] }, { "code": "L7S", "name": "L7S", "statuses": ["primary"] }, { "code": "LANA", "name": "LANA", "statuses": ["primary"] }, { "code": "LBC", "name": "LBC", "statuses": ["primary"] }, { "code": "LC", "name": "LC", "statuses": ["primary"] }, { "code": "LDC", "name": "LDC", "statuses": ["primary"] }, { "code": "LDCN", "name": "LDCN", "statuses": ["primary"] }, { "code": "LEA", "name": "LeaCoin", "statuses": ["primary"] }, { "code": "LEAF", "name": "LEAF", "statuses": ["primary"] }, { "code": "LEO", "name": "LEO", "statuses": ["primary", "secondary"] }, { "code": "LEPEN", "name": "LEPEN", "statuses": ["primary"] }, { "code": "LGD", "name": "LGD", "statuses": ["primary"] }, { "code": "LIMX", "name": "LIMX", "statuses": ["primary"] }, { "code": "LINDA", "name": "LINDA", "statuses": ["primary"] }, { "code": "LIR", "name": "LIR", "statuses": ["primary"] }, { "code": "LSK", "name": "Lisk", "statuses": ["primary"] }, { "code": "LTC", "name": "Litecoin", "statuses": ["primary", "secondary"] }, { "code": "LTCR", "name": "Litecred", "statuses": ["primary"] }, { "code": "LDOGE", "name": "LiteDoge", "statuses": ["primary"] }, { "code": "LIZI", "name": "LIZI", "statuses": ["primary"] }, { "code": "LKC", "name": "LKC", "statuses": ["primary"] }, { "code": "LLT", "name": "LLT", "statuses": ["primary"] }, { "code": "LMC", "name": "LMC", "statuses": ["primary"] }, { "code": "LOC", "name": "LOC", "statuses": ["primary"] }, { "code": "LOOT", "name": "LOOT", "statuses": ["primary"] }, { "code": "LSB", "name": "LSB", "statuses": ["secondary"] }, { "code": "LTD", "name": "LTD", "statuses": ["primary"] }, { "code": "LTH", "name": "LTH", "statuses": ["primary"] }, { "code": "LTS", "name": "LTS", "statuses": ["primary"] }, { "code": "LUNA", "name": "LUNA", "statuses": ["primary"] }, { "code": "LUN", "name": "Lunyr", "statuses": ["primary"] }, { "code": "M1", "name": "M1", "statuses": ["primary"] }, { "code": "MAD", "name": "MAD", "statuses": ["primary"] }, { "code": "XMG", "name": "Magi", "statuses": ["primary"] }, { "code": "MAI", "name": "MAI", "statuses": ["primary"] }, { "code": "MAID", "name": "MaidSafeCoin", "statuses": ["primary"] }, { "code": "MALC", "name": "MALC", "statuses": ["primary"] }, { "code": "MAN", "name": "MAN", "statuses": ["primary"] }, { "code": "MXT", "name": "MarteXcoin", "statuses": ["primary"] }, { "code": "MARV", "name": "MARV", "statuses": ["primary"] }, { "code": "MARX", "name": "MARX", "statuses": ["primary"] }, { "code": "OMNI", "name": "Mastercoin (Omni)", "statuses": ["primary"] }, { "code": "MAVRO", "name": "MAVRO", "statuses": ["primary"] }, { "code": "MAZE", "name": "MAZE", "statuses": ["primary"] }, { "code": "MBIT", "name": "MBIT", "statuses": ["primary"] }, { "code": "MBL", "name": "MBL", "statuses": ["primary"] }, { "code": "MCAP", "name": "MCAP", "statuses": ["primary"] }, { "code": "MCO", "name": "MCO", "statuses": ["primary"] }, { "code": "MCR", "name": "MCR", "statuses": ["primary"] }, { "code": "MCRN", "name": "MCRN", "statuses": ["primary"] }, { "code": "MEC", "name": "Megacoin", "statuses": ["primary"] }, { "code": "MEME", "name": "Memetic", "statuses": ["primary"] }, { "code": "MEN", "name": "MEN", "statuses": ["primary"] }, { "code": "MET", "name": "MET", "statuses": ["secondary"] }, { "code": "METAL", "name": "METAL", "statuses": ["primary"] }, { "code": "MG", "name": "MG", "statuses": ["primary"] }, { "code": "MGC", "name": "MGC", "statuses": ["primary"] }, { "code": "MHC", "name": "MHC", "statuses": ["primary"] }, { "code": "MND", "name": "MindCoin", "statuses": ["primary"] }, { "code": "MIU", "name": "MIU", "statuses": ["primary"] }, { "code": "MLN", "name": "MLN", "statuses": ["primary"] }, { "code": "MM", "name": "MM", "statuses": ["primary"] }, { "code": "MMXVI", "name": "MMXVI", "statuses": ["primary"] }, { "code": "MNE", "name": "MNE", "statuses": ["primary"] }, { "code": "MNM", "name": "MNM", "statuses": ["primary"] }, { "code": "MOIN", "name": "MOIN", "statuses": ["primary"] }, { "code": "MOJO", "name": "MojoCoin", "statuses": ["primary"] }, { "code": "MONA", "name": "MonaCoin", "statuses": ["primary"] }, { "code": "XMR", "name": "Monero", "statuses": ["primary", "secondary"] }, { "code": "MUE", "name": "MonetaryUnit", "statuses": ["primary"] }, { "code": "MOON", "name": "Mooncoin", "statuses": ["primary"] }, { "code": "MOOND", "name": "MOOND", "statuses": ["primary"] }, { "code": "MOTO", "name": "MOTO", "statuses": ["primary"] }, { "code": "MPK", "name": "MPK", "statuses": ["primary"] }, { "code": "MPRO", "name": "MPRO", "statuses": ["primary"] }, { "code": "MRB", "name": "MRB", "statuses": ["primary"] }, { "code": "MRP", "name": "MRP", "statuses": ["primary"] }, { "code": "MRV", "name": "MRV", "statuses": ["primary"] }, { "code": "MSCN", "name": "MSCN", "statuses": ["primary"] }, { "code": "MSP", "name": "MSP", "statuses": ["primary"] }, { "code": "MST", "name": "MST", "statuses": ["primary"] }, { "code": "MTL", "name": "MTL", "statuses": ["primary"] }, { "code": "MUSIC", "name": "MUSIC", "statuses": ["primary"] }, { "code": "MYB", "name": "MYB", "statuses": ["primary"] }, { "code": "MYST", "name": "MYST", "statuses": ["primary"] }, { "code": "N7", "name": "N7", "statuses": ["primary"] }, { "code": "NMC", "name": "Namecoin", "statuses": ["primary"] }, { "code": "NANOX", "name": "NANOX", "statuses": ["primary"] }, { "code": "NAUT", "name": "Nautiluscoin", "statuses": ["primary"] }, { "code": "NAV", "name": "NAV Coin", "statuses": ["primary"] }, { "code": "NCS", "name": "NCS", "statuses": ["primary"] }, { "code": "NDC", "name": "NDC", "statuses": ["primary"] }, { "code": "NDOGE", "name": "NDOGE", "statuses": ["primary"] }, { "code": "XEM", "name": "NEM", "statuses": ["primary"] }, { "code": "NEO", "name": "NEO", "statuses": ["primary"] }, { "code": "NEOS", "name": "NeosCoin", "statuses": ["primary"] }, { "code": "NET", "name": "NetCoin", "statuses": ["primary"] }, { "code": "NETKO", "name": "NETKO", "statuses": ["primary"] }, { "code": "NTRN", "name": "Neutron", "statuses": ["primary"] }, { "code": "NEVA", "name": "NevaCoin", "statuses": ["primary"] }, { "code": "NEWB", "name": "NEWB", "statuses": ["primary"] }, { "code": "NXS", "name": "Nexus", "statuses": ["primary"] }, { "code": "NIC", "name": "NIC", "statuses": ["primary"] }, { "code": "NICE", "name": "NICE", "statuses": ["primary"] }, { "code": "NIXON", "name": "NIXON", "statuses": ["primary"] }, { "code": "NKA", "name": "NKA", "statuses": ["primary"] }, { "code": "NKT", "name": "NKT", "statuses": ["primary"] }, { "code": "NLC2", "name": "NLC2", "statuses": ["primary"] }, { "code": "NMR", "name": "NMR", "statuses": ["primary"] }, { "code": "NO", "name": "NO", "statuses": ["primary"] }, { "code": "NODES", "name": "NODES", "statuses": ["primary"] }, { "code": "NOO", "name": "NOO", "statuses": ["primary"] }, { "code": "NVC", "name": "Novacoin", "statuses": ["primary"] }, { "code": "NPC", "name": "NPC", "statuses": ["primary"] }, { "code": "NRC", "name": "NRC", "statuses": ["primary"] }, { "code": "NTCC", "name": "NTCC", "statuses": ["primary"] }, { "code": "NUBIS", "name": "NUBIS", "statuses": ["primary"] }, { "code": "NBT", "name": "NuBits", "statuses": ["primary", "secondary"] }, { "code": "NUM", "name": "NUM", "statuses": ["primary"] }, { "code": "NXC", "name": "NXC", "statuses": ["primary"] }, { "code": "NXT", "name": "NXT", "statuses": ["primary"] }, { "code": "NZC", "name": "NZC", "statuses": ["primary"] }, { "code": "OAX", "name": "OAX", "statuses": ["primary"] }, { "code": "OBITS", "name": "OBITS", "statuses": ["primary"] }, { "code": "OBS", "name": "OBS", "statuses": ["primary"] }, { "code": "OBT", "name": "OBT", "statuses": ["secondary"] }, { "code": "OCOW", "name": "OCOW", "statuses": ["primary"] }, { "code": "OD", "name": "OD", "statuses": ["primary"] }, { "code": "OK", "name": "OKCash", "statuses": ["primary"] }, { "code": "OLYMP", "name": "OLYMP", "statuses": ["primary"] }, { "code": "OMC", "name": "OMC", "statuses": ["primary"] }, { "code": "OMG", "name": "OMG", "statuses": ["primary"] }, { "code": "ONE", "name": "ONE", "statuses": ["primary"] }, { "code": "OP", "name": "OP", "statuses": ["primary"] }, { "code": "OPAL", "name": "OPAL", "statuses": ["primary"] }, { "code": "OPES", "name": "OPES", "statuses": ["primary"] }, { "code": "OPT", "name": "OPT", "statuses": ["primary"] }, { "code": "ORLY", "name": "Orlycoin", "statuses": ["primary"] }, { "code": "OS", "name": "OS", "statuses": ["primary"] }, { "code": "OS76", "name": "OS76", "statuses": ["primary"] }, { "code": "OTX", "name": "OTX", "statuses": ["primary"] }, { "code": "OZC", "name": "OZC", "statuses": ["primary"] }, { "code": "P7C", "name": "P7C", "statuses": ["primary"] }, { "code": "PAC", "name": "PAC", "statuses": ["primary"] }, { "code": "PAK", "name": "PAK", "statuses": ["primary"] }, { "code": "PAL", "name": "PAL", "statuses": ["primary"] }, { "code": "PND", "name": "Pandacoin", "statuses": ["primary"] }, { "code": "PART", "name": "PART", "statuses": ["primary"] }, { "code": "PASC", "name": "PASC", "statuses": ["primary"] }, { "code": "PAY", "name": "PAY", "statuses": ["primary"] }, { "code": "XPY", "name": "Paycoin", "statuses": ["primary"] }, { "code": "PAYP", "name": "PAYP", "statuses": ["primary"] }, { "code": "PBK", "name": "PBK", "statuses": ["primary"] }, { "code": "PCM", "name": "PCM", "statuses": ["primary"] }, { "code": "PCS", "name": "PCS", "statuses": ["primary"] }, { "code": "PDC", "name": "PDC", "statuses": ["primary"] }, { "code": "PPC", "name": "Peercoin", "statuses": ["primary"] }, { "code": "PEN", "name": "PEN", "statuses": ["primary"] }, { "code": "PEO", "name": "PEO", "statuses": ["primary"] }, { "code": "PGUC", "name": "PGUC", "statuses": ["primary"] }, { "code": "PHR", "name": "PHR", "statuses": ["primary"] }, { "code": "PIE", "name": "PIE", "statuses": ["primary"] }, { "code": "PC", "name": "Pinkcoin", "statuses": ["primary"] }, { "code": "PINKX", "name": "PINKX", "statuses": ["primary"] }, { "code": "PIO", "name": "PIO", "statuses": ["primary"] }, { "code": "PIPL", "name": "PIPL", "statuses": ["primary"] }, { "code": "PIVX", "name": "PIVX", "statuses": ["primary"] }, { "code": "PIZZA", "name": "PIZZA", "statuses": ["primary"] }, { "code": "PKB", "name": "PKB", "statuses": ["primary"] }, { "code": "PLB", "name": "PLB", "statuses": ["primary"] }, { "code": "PLBT", "name": "PLBT", "statuses": ["primary"] }, { "code": "PLN", "name": "PLN", "statuses": ["primary", "secondary"] }, { "code": "PLNC", "name": "PLNC", "statuses": ["primary"] }, { "code": "PLR", "name": "PLR", "statuses": ["primary"] }, { "code": "PLU", "name": "PLU", "statuses": ["primary"] }, { "code": "PNK", "name": "PNK", "statuses": ["primary"] }, { "code": "PONZ2", "name": "PONZ2", "statuses": ["primary"] }, { "code": "PONZI", "name": "PONZI", "statuses": ["primary"] }, { "code": "POST", "name": "POST", "statuses": ["primary"] }, { "code": "POSW", "name": "POSW", "statuses": ["primary"] }, { "code": "POT", "name": "Potcoin", "statuses": ["primary"] }, { "code": "PPY", "name": "PPY", "statuses": ["primary"] }, { "code": "PQT", "name": "PQT", "statuses": ["primary"] }, { "code": "PRC", "name": "PRC", "statuses": ["primary"] }, { "code": "PRE", "name": "PRE", "statuses": ["primary"] }, { "code": "PRES", "name": "PRES", "statuses": ["primary"] }, { "code": "PRG", "name": "PRG", "statuses": ["primary"] }, { "code": "PXI", "name": "Prime-XI", "statuses": ["primary"] }, { "code": "XPM", "name": "Primecoin", "statuses": ["primary"] }, { "code": "PRM", "name": "PRM", "statuses": ["primary"] }, { "code": "PRO", "name": "PRO", "statuses": ["primary"] }, { "code": "PROC", "name": "PROC", "statuses": ["primary"] }, { "code": "PRX", "name": "PRX", "statuses": ["primary"] }, { "code": "PSB", "name": "PSB", "statuses": ["primary"] }, { "code": "PST", "name": "PST", "statuses": ["primary"] }, { "code": "PTA", "name": "PTA", "statuses": ["primary"] }, { "code": "PTC", "name": "PTC", "statuses": ["primary"] }, { "code": "PTO", "name": "PTO", "statuses": ["primary"] }, { "code": "PTOY", "name": "PTOY", "statuses": ["primary"] }, { "code": "PTY", "name": "PTY", "statuses": ["primary"] }, { "code": "PULSE", "name": "PULSE", "statuses": ["primary"] }, { "code": "PUT", "name": "PUT", "statuses": ["primary"] }, { "code": "PUTIN", "name": "PUTIN", "statuses": ["primary"] }, { "code": "PX", "name": "PX", "statuses": ["primary"] }, { "code": "QAU", "name": "QAU", "statuses": ["primary"] }, { "code": "QBC", "name": "QBC", "statuses": ["primary"] }, { "code": "QCN", "name": "QCN", "statuses": ["primary"] }, { "code": "QRL", "name": "QRL", "statuses": ["primary"] }, { "code": "QTU", "name": "QTU", "statuses": ["primary"] }, { "code": "QTUM", "name": "QTUM", "statuses": ["primary"] }, { "code": "QTZ", "name": "QTZ", "statuses": ["primary"] }, { "code": "QRK", "name": "Quark", "statuses": ["primary"] }, { "code": "QWARK", "name": "QWARK", "statuses": ["primary"] }, { "code": "RADI", "name": "RADI", "statuses": ["primary"] }, { "code": "RADS", "name": "Radium", "statuses": ["primary"] }, { "code": "XRA", "name": "RateCoin", "statuses": ["primary"] }, { "code": "RATIO", "name": "RATIO", "statuses": ["primary"] }, { "code": "RBIT", "name": "RBIT", "statuses": ["primary"] }, { "code": "RCN", "name": "RCN", "statuses": ["primary"] }, { "code": "RCX", "name": "RCX", "statuses": ["primary"] }, { "code": "RDD", "name": "Reddcoin", "statuses": ["primary"] }, { "code": "REE", "name": "REE", "statuses": ["primary"] }, { "code": "RET", "name": "RET", "statuses": ["secondary"] }, { "code": "RHFC", "name": "RHFC", "statuses": ["primary"] }, { "code": "RICE", "name": "RICE", "statuses": ["primary"] }, { "code": "RIDE", "name": "RIDE", "statuses": ["primary"] }, { "code": "RIC", "name": "Riecoin", "statuses": ["primary"] }, { "code": "RBT", "name": "Rimbit", "statuses": ["secondary"] }, { "code": "RING", "name": "RING", "statuses": ["primary"] }, { "code": "RIO", "name": "RIO", "statuses": ["primary"] }, { "code": "XRP", "name": "Ripple", "statuses": ["primary"] }, { "code": "RISE", "name": "RISE", "statuses": ["primary"] }, { "code": "RIYA", "name": "RIYA", "statuses": ["primary"] }, { "code": "RKC", "name": "RKC", "statuses": ["primary"] }, { "code": "RLC", "name": "RLC", "statuses": ["primary"] }, { "code": "RLT", "name": "RLT", "statuses": ["primary"] }, { "code": "RNC", "name": "RNC", "statuses": ["primary"] }, { "code": "ROBO", "name": "ROBO", "statuses": ["primary"] }, { "code": "RONIN", "name": "RONIN", "statuses": ["primary"] }, { "code": "ROO", "name": "ROO", "statuses": ["primary"] }, { "code": "ROS", "name": "RosCoin", "statuses": ["primary"] }, { "code": "RPC", "name": "RPC", "statuses": ["primary"] }, { "code": "RRT", "name": "RRT", "statuses": ["primary"] }, { "code": "RBIES", "name": "Rubies", "statuses": ["primary"] }, { "code": "RUBIT", "name": "RUBIT", "statuses": ["primary"] }, { "code": "RUR", "name": "Ruble", "statuses": ["secondary"] }, { "code": "RBY", "name": "Rubycoin", "statuses": ["primary"] }, { "code": "RVT", "name": "RVT", "statuses": ["primary"] }, { "code": "SAFEX", "name": "SAFEX", "statuses": ["primary"] }, { "code": "SAK", "name": "SAK", "statuses": ["primary"] }, { "code": "SAN", "name": "SAN", "statuses": ["primary"] }, { "code": "SBD", "name": "SBD", "statuses": ["primary"] }, { "code": "SBIT", "name": "SBIT", "statuses": ["primary"] }, { "code": "SBT", "name": "SBT", "statuses": ["secondary"] }, { "code": "SCAN", "name": "SCAN", "statuses": ["primary"] }, { "code": "SCB", "name": "SCB", "statuses": ["primary"] }, { "code": "SCITW", "name": "SCITW", "statuses": ["primary"] }, { "code": "SCRPT", "name": "SCRPT", "statuses": ["primary"] }, { "code": "SCS", "name": "SCS", "statuses": ["primary"] }, { "code": "SCT", "name": "SCT", "statuses": ["primary"] }, { "code": "SDT", "name": "SDT", "statuses": ["primary"] }, { "code": "SEQ", "name": "SEQ", "statuses": ["primary"] }, { "code": "SET", "name": "SET", "statuses": ["secondary"] }, { "code": "SXC", "name": "Sexcoin", "statuses": ["primary"] }, { "code": "SGC", "name": "SGC", "statuses": ["primary"] }, { "code": "SH", "name": "SH", "statuses": ["primary"] }, { "code": "SDC", "name": "ShadowCash", "statuses": ["primary"] }, { "code": "SHDW", "name": "SHDW", "statuses": ["primary"] }, { "code": "SHELL", "name": "SHELL", "statuses": ["primary"] }, { "code": "SHIFT", "name": "Shift", "statuses": ["primary"] }, { "code": "SHREK", "name": "SHREK", "statuses": ["primary"] }, { "code": "SC", "name": "Siacoin", "statuses": ["primary"] }, { "code": "SIB", "name": "Siberian chervonets", "statuses": ["primary"] }, { "code": "SIC", "name": "SIC", "statuses": ["primary"] }, { "code": "SIGU", "name": "SIGU", "statuses": ["primary"] }, { "code": "SKB", "name": "SKB", "statuses": ["primary"] }, { "code": "SKI", "name": "SKI", "statuses": ["primary"] }, { "code": "SLFI", "name": "SLFI", "statuses": ["primary"] }, { "code": "SLING", "name": "Sling", "statuses": ["primary"] }, { "code": "SLS", "name": "SLS", "statuses": ["primary"] }, { "code": "SMBR", "name": "SMBR", "statuses": ["primary"] }, { "code": "SMC", "name": "SMC", "statuses": ["primary"] }, { "code": "SMF", "name": "SMF", "statuses": ["primary"] }, { "code": "SMLY", "name": "SmileyCoin", "statuses": ["primary"] }, { "code": "SMSR", "name": "SMSR", "statuses": ["primary"] }, { "code": "SNC", "name": "SNC", "statuses": ["primary"] }, { "code": "SNG", "name": "SNG", "statuses": ["primary"] }, { "code": "SNGLS", "name": "SNGLS", "statuses": ["primary"] }, { "code": "SNM", "name": "SNM", "statuses": ["primary"] }, { "code": "SNRG", "name": "SNRG", "statuses": ["primary"] }, { "code": "SOAR", "name": "SOAR", "statuses": ["primary"] }, { "code": "SLR", "name": "Solarcoin", "statuses": ["primary"] }, { "code": "SONG", "name": "SongCoin", "statuses": ["primary"] }, { "code": "SOUL", "name": "SOUL", "statuses": ["primary"] }, { "code": "SP", "name": "SP", "statuses": ["primary"] }, { "code": "SPHR", "name": "Sphere", "statuses": ["primary"] }, { "code": "SPM", "name": "SPM", "statuses": ["primary"] }, { "code": "SPORT", "name": "SPORT", "statuses": ["primary"] }, { "code": "SPR", "name": "SpreadCoin", "statuses": ["primary"] }, { "code": "SPT", "name": "SPT", "statuses": ["primary"] }, { "code": "SPX", "name": "SPX", "statuses": ["primary"] }, { "code": "SQC", "name": "Squall Coin", "statuses": ["primary"] }, { "code": "SSTC", "name": "SSTC", "statuses": ["primary"] }, { "code": "STAR", "name": "STAR", "statuses": ["primary"] }, { "code": "START", "name": "Startcoin", "statuses": ["primary"] }, { "code": "SNT", "name": "Status", "statuses": ["primary"] }, { "code": "STE", "name": "STE", "statuses": ["primary"] }, { "code": "XST", "name": "Stealthcoin", "statuses": ["primary"] }, { "code": "STEEM", "name": "Steem", "statuses": ["primary"] }, { "code": "STR", "name": "Stellar", "statuses": ["primary"] }, { "code": "XLM", "name": "Stellar", "statuses": ["primary"] }, { "code": "STEPS", "name": "Steps", "statuses": ["primary"] }, { "code": "SLG", "name": "Sterlingcoin", "statuses": ["primary"] }, { "code": "STK", "name": "STK", "statuses": ["primary"] }, { "code": "STO", "name": "STO", "statuses": ["primary"] }, { "code": "STONK", "name": "STONK", "statuses": ["primary"] }, { "code": "STORJ", "name": "STORJ", "statuses": ["primary"] }, { "code": "SJCX", "name": "Storjcoin X", "statuses": ["primary"] }, { "code": "STP", "name": "STP", "statuses": ["primary"] }, { "code": "STRAT", "name": "STRAT", "statuses": ["primary"] }, { "code": "STRB", "name": "STRB", "statuses": ["primary"] }, { "code": "STRP", "name": "STRP", "statuses": ["primary"] }, { "code": "STV", "name": "STV", "statuses": ["primary"] }, { "code": "STX", "name": "STX", "statuses": ["primary"] }, { "code": "SUB", "name": "Subcriptio", "statuses": ["primary"] }, { "code": "SUPER", "name": "SUPER", "statuses": ["primary"] }, { "code": "SUR", "name": "SUR", "statuses": ["primary"] }, { "code": "SWT", "name": "SWT", "statuses": ["primary"] }, { "code": "SDP", "name": "SydPak Coin", "statuses": ["primary"] }, { "code": "AMP", "name": "Synereo", "statuses": ["primary"] }, { "code": "SYNX", "name": "SYNX", "statuses": ["primary"] }, { "code": "SYS", "name": "Syscoin", "statuses": ["primary"] }, { "code": "TAA", "name": "TAA", "statuses": ["primary"] }, { "code": "TAAS", "name": "TAAS", "statuses": ["primary"] }, { "code": "TAB", "name": "TAB", "statuses": ["primary", "secondary"] }, { "code": "TAG", "name": "TagCoin", "statuses": ["primary"] }, { "code": "TAJ", "name": "TAJ", "statuses": ["primary"] }, { "code": "TAK", "name": "TAK", "statuses": ["primary"] }, { "code": "TAKE", "name": "TAKE", "statuses": ["primary"] }, { "code": "TALK", "name": "TALK", "statuses": ["primary"] }, { "code": "TAM", "name": "TAM", "statuses": ["primary"] }, { "code": "TAO", "name": "TAO", "statuses": ["primary"] }, { "code": "TB", "name": "TB", "statuses": ["primary"] }, { "code": "TBCX", "name": "TBCX", "statuses": ["primary"] }, { "code": "TBT", "name": "TBT", "statuses": ["secondary"] }, { "code": "TC", "name": "TC", "statuses": ["secondary"] }, { "code": "TCASH", "name": "TCASH", "statuses": ["primary"] }, { "code": "TCOIN", "name": "TCOIN", "statuses": ["primary"] }, { "code": "TCR", "name": "TCR", "statuses": ["primary"] }, { "code": "TCX", "name": "TCX", "statuses": ["primary"] }, { "code": "TDFB", "name": "TDFB", "statuses": ["primary"] }, { "code": "TECH", "name": "TECH", "statuses": ["primary"] }, { "code": "TELL", "name": "TELL", "statuses": ["primary"] }, { "code": "TERA", "name": "TERA", "statuses": ["primary"] }, { "code": "TERI", "name": "TERI", "statuses": ["primary"] }, { "code": "TRC", "name": "Terracoin", "statuses": ["primary"] }, { "code": "TESLA", "name": "TESLA", "statuses": ["primary"] }, { "code": "TES", "name": "TeslaCoin", "statuses": ["primary"] }, { "code": "TET", "name": "TET", "statuses": ["secondary"] }, { "code": "TFL", "name": "TFL", "statuses": ["primary"] }, { "code": "THOM", "name": "THOM", "statuses": ["primary"] }, { "code": "THS", "name": "THS", "statuses": ["primary"] }, { "code": "TIA", "name": "TIA", "statuses": ["primary"] }, { "code": "TIX", "name": "Tickets", "statuses": ["primary"] }, { "code": "TIDE", "name": "TIDE", "statuses": ["primary"] }, { "code": "XTC", "name": "TileCoin", "statuses": ["primary"] }, { "code": "TIM", "name": "TIM", "statuses": ["primary"] }, { "code": "TIME", "name": "TIME", "statuses": ["primary"] }, { "code": "TTC", "name": "TittieCoin", "statuses": ["primary"] }, { "code": "TKN", "name": "TKN", "statuses": ["primary"] }, { "code": "TKS", "name": "TKS", "statuses": ["primary"] }, { "code": "TLEX", "name": "TLEX", "statuses": ["primary"] }, { "code": "TMC", "name": "TMC", "statuses": ["primary"] }, { "code": "TNG", "name": "TNG", "statuses": ["primary"] }, { "code": "TNT", "name": "TNT", "statuses": ["primary"] }, { "code": "TOA", "name": "TOA", "statuses": ["primary"] }, { "code": "TODAY", "name": "TODAY", "statuses": ["primary"] }, { "code": "TOKEN", "name": "TOKEN", "statuses": ["primary"] }, { "code": "TOOL", "name": "TOOL", "statuses": ["primary"] }, { "code": "TOR", "name": "TOR", "statuses": ["primary"] }, { "code": "TOT", "name": "TOT", "statuses": ["primary"] }, { "code": "TPG", "name": "TPG", "statuses": ["primary"] }, { "code": "TRA", "name": "TRA", "statuses": ["primary"] }, { "code": "TX", "name": "Transfercoin", "statuses": ["primary"] }, { "code": "TRAP", "name": "TRAP", "statuses": ["primary"] }, { "code": "TRICK", "name": "TRICK", "statuses": ["primary"] }, { "code": "TRIG", "name": "TRIG", "statuses": ["primary"] }, { "code": "TROLL", "name": "TROLL", "statuses": ["primary"] }, { "code": "TRON", "name": "TRON", "statuses": ["primary"] }, { "code": "TRS", "name": "TRS", "statuses": ["primary"] }, { "code": "TRST", "name": "TRST", "statuses": ["primary"] }, { "code": "TRUMP", "name": "TrumpCoin", "statuses": ["primary"] }, { "code": "TRUST", "name": "TRUST", "statuses": ["primary"] }, { "code": "TSE", "name": "TSE", "statuses": ["primary", "secondary"] }, { "code": "TWERK", "name": "TWERK", "statuses": ["primary"] }, { "code": "TWIST", "name": "TWIST", "statuses": ["primary"] }, { "code": "UAE", "name": "UAE", "statuses": ["primary"] }, { "code": "UBC", "name": "UBC", "statuses": ["primary"] }, { "code": "UBIQ", "name": "Ubiquoin", "statuses": ["primary"] }, { "code": "UBQ", "name": "UBQ", "statuses": ["primary"] }, { "code": "UET", "name": "UET", "statuses": ["primary"] }, { "code": "UIS", "name": "UIS", "statuses": ["primary"] }, { "code": "UAH", "name": "Ukrainian Hryvnia", "statuses": ["secondary"] }, { "code": "UNB", "name": "UNB", "statuses": ["primary"] }, { "code": "UNC", "name": "UNC", "statuses": ["primary"] }, { "code": "UNF", "name": "Unfed", "statuses": ["primary"] }, { "code": "UNI", "name": "UNI", "statuses": ["primary"] }, { "code": "UNO", "name": "Unobtanium", "statuses": ["primary"] }, { "code": "UNRC", "name": "UNRC", "statuses": ["primary"] }, { "code": "UNY", "name": "UNY", "statuses": ["primary"] }, { "code": "URC", "name": "URC", "statuses": ["primary"] }, { "code": "URO", "name": "Uro", "statuses": ["primary"] }, { "code": "USD", "name": "US Dollar", "statuses": ["primary", "secondary"] }, { "code": "USC", "name": "USC", "statuses": ["primary"] }, { "code": "UTA", "name": "UTA", "statuses": ["primary"] }, { "code": "VAL", "name": "VAL", "statuses": ["primary"] }, { "code": "VASH", "name": "VASH", "statuses": ["primary"] }, { "code": "XVC", "name": "Vcash", "statuses": ["primary"] }, { "code": "VCOIN", "name": "VCOIN", "statuses": ["primary"] }, { "code": "VEC2", "name": "VEC2", "statuses": ["primary"] }, { "code": "VEG", "name": "VEG", "statuses": ["primary"] }, { "code": "VENE", "name": "VENE", "statuses": ["primary"] }, { "code": "VER", "name": "VER", "statuses": ["primary"] }, { "code": "XVG", "name": "Verge", "statuses": ["primary"] }, { "code": "VRC", "name": "VeriCoin", "statuses": ["primary"] }, { "code": "VTC", "name": "Vertcoin", "statuses": ["primary"] }, { "code": "VIA", "name": "Viacoin", "statuses": ["primary"] }, { "code": "VIP", "name": "VIP Tokens", "statuses": ["primary"] }, { "code": "VISIO", "name": "VISIO", "statuses": ["primary"] }, { "code": "VK", "name": "VK", "statuses": ["primary"] }, { "code": "VLT", "name": "VLT", "statuses": ["primary"] }, { "code": "VLTC", "name": "VLTC", "statuses": ["primary"] }, { "code": "VNTX", "name": "VNTX", "statuses": ["primary"] }, { "code": "VOLT", "name": "VOLT", "statuses": ["primary"] }, { "code": "VOX", "name": "Voxels", "statuses": ["primary"] }, { "code": "VOYA", "name": "VOYA", "statuses": ["primary"] }, { "code": "VPN", "name": "VPNCoin", "statuses": ["primary"] }, { "code": "VRM", "name": "VRM", "statuses": ["primary"] }, { "code": "VRS", "name": "VRS", "statuses": ["primary"] }, { "code": "VSL", "name": "VSL", "statuses": ["primary"] }, { "code": "VSM", "name": "VSM", "statuses": ["primary"] }, { "code": "VTL", "name": "VTL", "statuses": ["primary"] }, { "code": "VTR", "name": "VTR", "statuses": ["primary"] }, { "code": "VTX", "name": "VTX", "statuses": ["primary"] }, { "code": "VTY", "name": "VTY", "statuses": ["primary"] }, { "code": "VUC", "name": "VUC", "statuses": ["primary"] }, { "code": "WA", "name": "WA", "statuses": ["primary"] }, { "code": "WARP", "name": "WARP", "statuses": ["primary"] }, { "code": "WASH", "name": "WASH", "statuses": ["primary"] }, { "code": "WAV", "name": "WAV", "statuses": ["primary"] }, { "code": "WAVES", "name": "WAVES", "statuses": ["primary"] }, { "code": "WAY", "name": "WAY", "statuses": ["primary"] }, { "code": "WCASH", "name": "WCASH", "statuses": ["primary"] }, { "code": "WCN", "name": "WCN", "statuses": ["primary"] }, { "code": "WEX", "name": "WEX", "statuses": ["primary"] }, { "code": "WGO", "name": "WGO", "statuses": ["primary"] }, { "code": "WGR", "name": "WGR", "statuses": ["primary"] }, { "code": "XWC", "name": "Whitecoin", "statuses": ["primary"] }, { "code": "WBB", "name": "Wild Beast Block", "statuses": ["primary"] }, { "code": "WIN", "name": "WIN", "statuses": ["primary"] }, { "code": "WINGS", "name": "WINGS", "statuses": ["primary"] }, { "code": "WISC", "name": "WISC", "statuses": ["primary"] }, { "code": "LOG", "name": "Woodcoin", "statuses": ["primary"] }, { "code": "WDC", "name": "Worldcoin", "statuses": ["primary"] }, { "code": "WTT", "name": "WTT", "statuses": ["primary"] }, { "code": "X2", "name": "X2", "statuses": ["primary"] }, { "code": "XAUR", "name": "XAUR", "statuses": ["primary"] }, { "code": "XAU", "name": "Xaurum", "statuses": ["primary"] }, { "code": "XAV", "name": "XAV", "statuses": ["primary"] }, { "code": "XB", "name": "XB", "statuses": ["primary"] }, { "code": "XBB", "name": "XBB", "statuses": ["primary"] }, { "code": "XBG", "name": "XBG", "statuses": ["primary"] }, { "code": "XBP", "name": "XBP", "statuses": ["primary"] }, { "code": "XBTS", "name": "XBTS", "statuses": ["primary"] }, { "code": "XBU", "name": "XBU", "statuses": ["primary"] }, { "code": "XBY", "name": "XBY", "statuses": ["primary"] }, { "code": "XCO", "name": "XCO", "statuses": ["primary"] }, { "code": "XCXT", "name": "XCXT", "statuses": ["primary"] }, { "code": "XDB", "name": "XDB", "statuses": ["primary"] }, { "code": "XDE", "name": "XDE", "statuses": ["primary"] }, { "code": "XDE2", "name": "XDE2", "statuses": ["primary"] }, { "code": "XEL", "name": "XEL", "statuses": ["primary"] }, { "code": "XET", "name": "XET", "statuses": ["secondary"] }, { "code": "XFC", "name": "XFC", "statuses": ["primary"] }, { "code": "XGB", "name": "XGB", "statuses": ["primary"] }, { "code": "XID", "name": "XID", "statuses": ["primary"] }, { "code": "XIN", "name": "XIN", "statuses": ["primary"] }, { "code": "XJO", "name": "XJO", "statuses": ["primary"] }, { "code": "XLC", "name": "XLC", "statuses": ["primary"] }, { "code": "XLTCG", "name": "XLTCG", "statuses": ["primary"] }, { "code": "XMS", "name": "XMS", "statuses": ["primary"] }, { "code": "XMT", "name": "XMT", "statuses": ["primary"] }, { "code": "XMY", "name": "XMY", "statuses": ["primary"] }, { "code": "XNG", "name": "XNG", "statuses": ["primary"] }, { "code": "XNX", "name": "XNX", "statuses": ["primary"] }, { "code": "XOC", "name": "XOC", "statuses": ["primary"] }, { "code": "XODUS", "name": "XODUS", "statuses": ["primary"] }, { "code": "XOT", "name": "XOT", "statuses": ["primary"] }, { "code": "XPC", "name": "XPC", "statuses": ["primary"] }, { "code": "XPD", "name": "XPD", "statuses": ["primary"] }, { "code": "XPRO", "name": "XPRO", "statuses": ["primary"] }, { "code": "XPTX", "name": "XPTX", "statuses": ["primary"] }, { "code": "XQN", "name": "XQN", "statuses": ["primary"] }, { "code": "XRC", "name": "XRC", "statuses": ["primary"] }, { "code": "XSP", "name": "XSP", "statuses": ["primary"] }, { "code": "XSPEC", "name": "XSPEC", "statuses": ["primary"] }, { "code": "XSSX", "name": "XSSX", "statuses": ["primary"] }, { "code": "XSY", "name": "XSY", "statuses": ["primary"] }, { "code": "XT", "name": "XT", "statuses": ["primary"] }, { "code": "XTO", "name": "XTO", "statuses": ["primary"] }, { "code": "XTZ", "name": "XTZ", "statuses": ["primary"] }, { "code": "XUP", "name": "XUP", "statuses": ["primary"] }, { "code": "XVE", "name": "XVE", "statuses": ["primary"] }, { "code": "XVP", "name": "XVP", "statuses": ["primary"] }, { "code": "XZA", "name": "XZA", "statuses": ["primary"] }, { "code": "YAC", "name": "Yacoin", "statuses": ["primary"] }, { "code": "YBC", "name": "Ybcoin", "statuses": ["primary"] }, { "code": "YBT", "name": "YBT", "statuses": ["secondary"] }, { "code": "YET", "name": "YET", "statuses": ["secondary"] }, { "code": "YMC", "name": "YMC", "statuses": ["primary"] }, { "code": "YOC", "name": "YOC", "statuses": ["primary"] }, { "code": "YOG", "name": "YOG", "statuses": ["primary"] }, { "code": "YOVI", "name": "YOVI", "statuses": ["primary"] }, { "code": "ZAP", "name": "ZAP", "statuses": ["primary"] }, { "code": "ZYD", "name": "ZayedCoin", "statuses": ["primary"] }, { "code": "ZBCN", "name": "ZBCN", "statuses": ["primary"] }, { "code": "ZEC", "name": "Zcash", "statuses": ["primary"] }, { "code": "ZCL", "name": "Zcash classic", "statuses": ["primary"] }, { "code": "ZCC", "name": "ZCC", "statuses": ["primary"] }, { "code": "XZC", "name": "Zcoin", "statuses": ["primary"] }, { "code": "ZEIT", "name": "Zeitcoin", "statuses": ["primary"] }, { "code": "ZEN", "name": "ZEN", "statuses": ["primary"] }, { "code": "ZENI", "name": "ZENI", "statuses": ["primary"] }, { "code": "ZET2", "name": "ZET2", "statuses": ["primary"] }, { "code": "ZET", "name": "Zetacoin", "statuses": ["primary"] }, { "code": "ZRC", "name": "ZiftrCOIN", "statuses": ["primary"] }, { "code": "ZBC", "name": "Zilbercoin", "statuses": ["primary", "secondary"] }, { "code": "ZMC", "name": "ZMC", "statuses": ["primary"] }, { "code": "ZNE", "name": "ZNE", "statuses": ["primary"] }, { "code": "ZNY", "name": "ZNY", "statuses": ["primary"] }, { "code": "ZRX", "name": "ZRX", "statuses": ["primary"] }, { "code": "ZUR", "name": "ZUR", "statuses": ["primary"] }];
//# sourceMappingURL=currency-list.constant.js.map

/***/ }),

/***/ "../../../../../src/app/models/holding.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Holding; });
var Holding = (function () {
    function Holding(base, quantity) {
        if (base === void 0) { base = "btc"; }
        if (quantity === void 0) { quantity = 0; }
        this.base = base;
        this.quantity = quantity;
        this.value = 0;
        this.price = 0;
        this.change = 0;
    }
    return Holding;
}());

//# sourceMappingURL=holding.model.js.map

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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map