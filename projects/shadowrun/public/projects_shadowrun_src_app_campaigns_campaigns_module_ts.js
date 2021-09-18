"use strict";
(self["webpackChunkrpg"] = self["webpackChunkrpg"] || []).push([["projects_shadowrun_src_app_campaigns_campaigns_module_ts"],{

/***/ 4531:
/*!**************************************************************************!*\
  !*** ./projects/shadowrun/src/app/campaigns/campaigns-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignsRoutingModule": () => (/* binding */ CampaignsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class CampaignsRoutingModule {
}
CampaignsRoutingModule.ɵfac = function CampaignsRoutingModule_Factory(t) { return new (t || CampaignsRoutingModule)(); };
CampaignsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CampaignsRoutingModule });
CampaignsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CampaignsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 296:
/*!*********************************************************************!*\
  !*** ./projects/shadowrun/src/app/campaigns/campaigns.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignsComponent": () => (/* binding */ CampaignsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CampaignsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CampaignsComponent.ɵfac = function CampaignsComponent_Factory(t) { return new (t || CampaignsComponent)(); };
CampaignsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CampaignsComponent, selectors: [["ng-component"]], decls: 2, vars: 0, template: function CampaignsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "campaigns works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wYWlnbnMuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 2314:
/*!******************************************************************!*\
  !*** ./projects/shadowrun/src/app/campaigns/campaigns.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignsModule": () => (/* binding */ CampaignsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaigns-routing.module */ 4531);
/* harmony import */ var _campaigns_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaigns.component */ 296);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class CampaignsModule {
}
CampaignsModule.ɵfac = function CampaignsModule_Factory(t) { return new (t || CampaignsModule)(); };
CampaignsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CampaignsModule });
CampaignsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_0__.CampaignsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CampaignsModule, { declarations: [_campaigns_component__WEBPACK_IMPORTED_MODULE_1__.CampaignsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_0__.CampaignsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=projects_shadowrun_src_app_campaigns_campaigns_module_ts.js.map