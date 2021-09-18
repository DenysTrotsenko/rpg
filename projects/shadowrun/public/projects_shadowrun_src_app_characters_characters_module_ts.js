"use strict";
(self["webpackChunkrpg"] = self["webpackChunkrpg"] || []).push([["projects_shadowrun_src_app_characters_characters_module_ts"],{

/***/ 7108:
/*!****************************************************************************!*\
  !*** ./projects/shadowrun/src/app/characters/characters-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersRoutingModule": () => (/* binding */ CharactersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _characters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters.component */ 1801);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ 868);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create/create.component */ 3397);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ 9993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);







const routes = [
    {
        path: '',
        component: _characters_component__WEBPACK_IMPORTED_MODULE_0__.CharactersComponent,
        children: [
            { path: 'list', component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent },
            { path: 'pc/create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_2__.CreateComponent },
            { path: 'pc/update/:id', component: _create_create_component__WEBPACK_IMPORTED_MODULE_2__.CreateComponent },
            { path: 'pc/view/:id', component: _view_view_component__WEBPACK_IMPORTED_MODULE_3__.ViewComponent },
            { path: '**', redirectTo: 'list', pathMatch: 'full' }
        ]
    }
];
class CharactersRoutingModule {
}
CharactersRoutingModule.ɵfac = function CharactersRoutingModule_Factory(t) { return new (t || CharactersRoutingModule)(); };
CharactersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CharactersRoutingModule });
CharactersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CharactersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 1801:
/*!***********************************************************************!*\
  !*** ./projects/shadowrun/src/app/characters/characters.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersComponent": () => (/* binding */ CharactersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class CharactersComponent {
    constructor() { }
    ngOnInit() {
    }
}
CharactersComponent.ɵfac = function CharactersComponent_Factory(t) { return new (t || CharactersComponent)(); };
CharactersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharactersComponent, selectors: [["ng-component"]], decls: 2, vars: 0, consts: [[1, "p-10"]], template: function CharactersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFyYWN0ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ 7407:
/*!********************************************************************!*\
  !*** ./projects/shadowrun/src/app/characters/characters.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharactersModule": () => (/* binding */ CharactersModule)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e_5e_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e/5e.module */ 6789);
/* harmony import */ var _shadowrun_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shadowrun/app/ui/ui.module */ 7682);
/* harmony import */ var _characters_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters-routing.module */ 7108);
/* harmony import */ var _characters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters.component */ 1801);
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ 3397);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ 868);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/view.component */ 9993);
/* harmony import */ var _clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clone-dialog/clone-dialog.component */ 4827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);










class CharactersModule {
}
CharactersModule.ɵfac = function CharactersModule_Factory(t) { return new (t || CharactersModule)(); };
CharactersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: CharactersModule });
CharactersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _characters_routing_module__WEBPACK_IMPORTED_MODULE_3__.CharactersRoutingModule,
            _shadowrun_app_5e_5e_module__WEBPACK_IMPORTED_MODULE_1__.FifthEditionModule,
            _shadowrun_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](CharactersModule, { declarations: [_characters_component__WEBPACK_IMPORTED_MODULE_4__.CharactersComponent,
        _create_create_component__WEBPACK_IMPORTED_MODULE_5__.CreateComponent,
        _list_list_component__WEBPACK_IMPORTED_MODULE_6__.ListComponent,
        _view_view_component__WEBPACK_IMPORTED_MODULE_7__.ViewComponent,
        _clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_8__.CloneDialogComponent], imports: [_shared__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _characters_routing_module__WEBPACK_IMPORTED_MODULE_3__.CharactersRoutingModule,
        _shadowrun_app_5e_5e_module__WEBPACK_IMPORTED_MODULE_1__.FifthEditionModule,
        _shadowrun_app_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UiModule] }); })();


/***/ }),

/***/ 4827:
/*!**************************************************************************************!*\
  !*** ./projects/shadowrun/src/app/characters/clone-dialog/clone-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CloneDialogComponent": () => (/* binding */ CloneDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 2213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 781);








class CloneDialogComponent {
    constructor(data) {
        this.data = data;
        this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl(`(clone) ${this.data}`, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.maxLength(32)]);
    }
}
CloneDialogComponent.ɵfac = function CloneDialogComponent_Factory(t) { return new (t || CloneDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
CloneDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CloneDialogComponent, selectors: [["ng-component"]], decls: 12, vars: 4, consts: [["mat-dialog-title", ""], ["appearance", "outline"], ["matInput", "", 3, "formControl"], [1, "actions"], ["mat-stroked-button", "", "color", "primary", 1, "mr-5", 3, "mat-dialog-close"], ["mat-flat-button", "", "color", "primary", 1, "ml-5", 3, "disabled", "mat-dialog-close"]], template: function CloneDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Clone");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "New Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-dialog-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Cancel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Clone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.control.valid)("mat-dialog-close", ctx.control.value);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbG9uZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 3397:
/*!**************************************************************************!*\
  !*** ./projects/shadowrun/src/app/characters/create/create.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "positiveQualitiesMaxCostValidator": () => (/* binding */ positiveQualitiesMaxCostValidator),
/* harmony export */   "CreateComponent": () => (/* binding */ CreateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 3720);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/5e */ 9022);
/* harmony import */ var _shadowrun_app_5e_5e_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shadowrun/app/5e/5e.variables */ 2084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shadowrun_app_5e_5e_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shadowrun/app/5e/5e.service */ 9300);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _ui_components_portrait_select_portrait_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/portrait-select/portrait-select.component */ 3758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 7007);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _5e_components_create_pc_qualities_create_pc_qualities_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../5e/components/create-pc-qualities/create-pc-qualities.component */ 6133);
/* harmony import */ var _5e_components_create_pc_attributes_create_pc_attributes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../5e/components/create-pc-attributes/create-pc-attributes.component */ 4491);
/* harmony import */ var _5e_components_create_pc_skills_create_pc_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../5e/components/create-pc-skills/create-pc-skills.component */ 3252);
/* harmony import */ var _5e_components_create_pc_knowledge_create_pc_knowledge_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../5e/components/create-pc-knowledge/create-pc-knowledge.component */ 484);
/* harmony import */ var _5e_components_create_pc_contacts_create_pc_contacts_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../5e/components/create-pc-contacts/create-pc-contacts.component */ 1467);
/* harmony import */ var _5e_components_create_pc_lifestyle_create_pc_lifestyle_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../5e/components/create-pc-lifestyle/create-pc-lifestyle.component */ 7183);
/* harmony import */ var _5e_components_create_pc_final_calculations_create_pc_final_calculations_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../5e/components/create-pc-final-calculations/create-pc-final-calculations.component */ 425);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _5e_components_create_pc_spells_create_pc_spells_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../5e/components/create-pc-spells/create-pc-spells.component */ 5303);
/* harmony import */ var _5e_components_create_pc_adept_powers_create_pc_adept_powers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../5e/components/create-pc-adept-powers/create-pc-adept-powers.component */ 5916);
/* harmony import */ var _5e_components_create_pc_complex_forms_create_pc_complex_forms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../5e/components/create-pc-complex-forms/create-pc-complex-forms.component */ 9571);





























function CreateComponent_mat_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", i_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", i_r6.name, " (", i_r6.cost, ") ");
} }
function CreateComponent_mat_option_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", i_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", i_r7.name, " (", i_r7.cost, ") ");
} }
function CreateComponent_mat_form_field_34_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", i_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", i_r9.name, " ");
} }
function CreateComponent_mat_form_field_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Magic Tradition");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, CreateComponent_mat_form_field_34_mat_option_4_Template, 2, 2, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r2.MAGIC_TRADITIONS);
} }
function CreateComponent_s5e_create_pc_spells_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "s5e-create-pc-spells", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("initial", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, ctx_r3.character$));
} }
function CreateComponent_s5e_create_pc_adept_powers_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "s5e-create-pc-adept-powers", 31);
} }
function CreateComponent_s5e_create_pc_complex_forms_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "s5e-create-pc-complex-forms", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](1, "async");
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("initial", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](1, 1, ctx_r5.character$));
} }
/** A maximum cost of positive qualities shouldn't exceed */
function positiveQualitiesMaxCostValidator(max) {
    return (qualities) => {
        var _a;
        const costs = ((_a = qualities.value) !== null && _a !== void 0 ? _a : []).map(i => { var _a, _b; return (_b = (_a = i.rating) === null || _a === void 0 ? void 0 : _a.cost) !== null && _b !== void 0 ? _b : 0; });
        const positive = costs.filter(i => i >= 0);
        const sum = positive.reduce((acc, cur) => acc + cur, 0);
        return sum > max ? { positiveQualitiesMaxCost: { value: qualities.value } } : null;
    };
}
const DEFAULT_PORTRAIT = 'pc_humanmale_00_faceless.png';
class CreateComponent extends _shared__WEBPACK_IMPORTED_MODULE_0__.UnsubscribeDirective {
    constructor(firestore, route, router, service) {
        super();
        this.firestore = firestore;
        this.route = route;
        this.router = router;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            portrait: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(DEFAULT_PORTRAIT, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            miscellaneous: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroup({
                biography: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
                gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            }),
            metatype: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.METATYPE_ID.HUMAN, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            awakening: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(_shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.MUNDANE, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            magic_tradition: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            qualities: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [positiveQualitiesMaxCostValidator(_shadowrun_app_5e_5e_variables__WEBPACK_IMPORTED_MODULE_2__.POSITIVE_QUALITIES_MAX_COST)]),
            attributes: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            knowledge: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            spells: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            complex_forms: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            adept_powers: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            lifestyles: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]),
            ware: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
            gear: new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(null),
        });
        this.AWAKENINGS = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENINGS;
        this.METATYPES = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.METATYPES;
        this.MAGIC_TRADITIONS = _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.MAGIC_TRADITIONS;
        this.character$ = this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(res => res.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(id => this.firestore.doc(`characters/${id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)((p, q) => JSON.stringify(p) === JSON.stringify(q)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(res => {
            this.form.patchValue({
                id: !!res ? res.id : this.service.getId(),
                portrait: !!res ? res.portrait : DEFAULT_PORTRAIT,
                name: !!res ? res.name : '',
                metatype: !!res ? res.metatype : _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.METATYPE_ID.HUMAN,
                awakening: !!res ? res.awakening : _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.MUNDANE,
                magic_tradition: !!res ? res.magic_tradition : null,
                qualities: !!res ? res.qualities : null,
                attributes: !!res ? res.attributes : null,
                skills: !!res ? res.skills : null,
                knowledge: !!res ? res.knowledge : null,
                contacts: !!res ? res.contacts : null,
                spells: !!res ? res.spells : null,
                complex_forms: !!res ? res.complex_forms : null,
                adept_powers: !!res ? res.adept_powers : null,
                lifestyles: !!res ? res.lifestyles : null,
                ware: !!res ? res.ware : null,
                gear: !!res ? res.gear : null,
            }, { emitEvent: false });
            !!res ? this.portrait.disable() : this.portrait.enable();
            !!res ? this.name.disable() : this.name.enable();
            !!res ? this.metatype.disable() : this.metatype.enable();
            !!res ? this.awakening.disable() : this.awakening.enable();
            !!res ? this.magic_tradition.disable() : this.magic_tradition.enable();
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.shareReplay)(1));
    }
    get portrait() { return this.form.get('portrait'); }
    get name() { return this.form.get('name'); }
    get metatype() { return this.form.get('metatype'); }
    get awakening() { return this.form.get('awakening'); }
    get magic_tradition() { return this.form.get('magic_tradition'); }
    ngOnInit() {
        this.subscriptions = this.character$.subscribe();
        this.subscriptions = this.form.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(value => {
            // console.log(value.portrait);
            // console.log(this.getCalculatedKarma(value));
        }))
            .subscribe();
    }
    getCalculatedEssence() { }
    getCalculatedKarma(form) {
        // const metatype: number = this.data.metatypes.find(i => i.id === form.metatype).cost;
        // const awakening: number = this.data.awakenings.find(i => i.id === form.awakening).cost;
        // const qualities: number = form.qualities.reduce((acc, quality) => {
        //   const cost = quality.rating?.cost ?? 0;
        //
        //   return acc + cost;
        // }, 0);
        // const attributes: number = form.attributes.reduce((acc, attribute) => {
        //   const free: number = attribute.min * ((attribute.min + 1) / 2);
        //   const level: number = attribute.rating > 1 ? attribute.rating * ((attribute.rating + 1) / 2) - free : 0;
        //
        //   return acc + level * KARMA_PER_ATTRIBUTE;
        // }, 0);
        // const skills: number = form.skills.reduce((acc, skill) => {
        //   const level: number = skill.rating > 0 ? skill.rating * ((skill.rating + 1) / 2) : 0;
        //
        //   return acc + level * KARMA_PER_ACTIVE_SKILL;
        // }, 0);
        // const knowledge: number = form.knowledge.reduce((acc, skill) => {
        //   const level: number = skill.rating > 0 ? skill.rating * ((skill.rating + 1) / 2) : 0;
        //
        //   return acc + level * KARMA_PER_KNOWLEDGE;
        // }, 0);
        // const karma = [
        //   metatype, awakening, qualities, attributes, skills, knowledge
        // ];
        //
        // return karma.reduce((acc, cur) => acc + cur, 0);
        return 0;
    }
    getCalculatedNuyen() { }
    isAdeptPowersAvailable(form) {
        const canUseAdeptPowers = [
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.MYSTIC_ADEPT,
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.ADEPT
        ];
        return canUseAdeptPowers.includes(form.awakening);
    }
    isComplexFormsAvailable(form) {
        const canUseComplexForms = [
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.TECHNOMANCER
        ];
        return canUseComplexForms.includes(form.awakening);
    }
    isMagicTraditionAvailable(form) {
        const hasMagicTradition = [
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.MYSTIC_ADEPT,
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.MAGICIAN,
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.ASPECTED_MAGICIAN_ALCHEMIST,
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.ASPECTED_MAGICIAN_SPELLCASTER,
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.ASPECTED_MAGICIAN_SUMMONER
        ];
        return hasMagicTradition.includes(form.awakening);
    }
    isSpellsAvailable(form) {
        const canUseSpells = [
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.MYSTIC_ADEPT,
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.MAGICIAN,
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.ASPECTED_MAGICIAN_ALCHEMIST,
            _shadowrun_app_5e__WEBPACK_IMPORTED_MODULE_1__.AWAKENING_ID.ASPECTED_MAGICIAN_SPELLCASTER
        ];
        return canUseSpells.includes(form.awakening);
    }
    onSubmit(form) {
        console.log(form);
        this.firestore
            .update(`characters/${form.id}`, form)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.tap)(() => this.router.navigate(['characters/list'])))
            .subscribe();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shadowrun_app_5e_5e_service__WEBPACK_IMPORTED_MODULE_3__.FifthEditionService)); };
CreateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["ng-component"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵInheritDefinitionFeature"]], decls: 56, vars: 29, consts: [[1, "toolbar-main"], [3, "formGroup", "ngSubmit"], [1, "mb-15"], [1, "d-f", "fd-r"], [1, "d-f", "fd-c"], ["formControlName", "portrait", 1, "mr-15"], ["appearance", "outline"], ["matInput", "", "formControlName", "name"], ["appearance", "outline", "formGroupName", "miscellaneous"], ["formControlName", "gender"], ["value", "Male"], ["value", "Female"], ["formControlName", "metatype"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "awakening"], ["appearance", "outline", 4, "ngIf"], ["formControlName", "qualities", 3, "initial", "awakening", "metatype"], ["formControlName", "attributes", 3, "initial", "awakening", "metatype", "qualities"], ["formControlName", "skills", 3, "initial", "awakening"], ["formControlName", "knowledge", 3, "initial"], ["formControlName", "contacts", 3, "initial"], ["formControlName", "spells", 3, "initial", 4, "ngIf"], ["formControlName", "adept_powers", 4, "ngIf"], ["formControlName", "complex_forms", 3, "initial", 4, "ngIf"], ["formControlName", "lifestyles"], [3, "character"], ["type", "reset", "mat-button", "", 1, "mr-15"], ["type", "submit", "mat-flat-button", "", "color", "primary"], [3, "value"], ["formControlName", "magic_tradition"], ["formControlName", "spells", 3, "initial"], ["formControlName", "adept_powers"], ["formControlName", "complex_forms", 3, "initial"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Character Creation / Upgrade");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("ngSubmit", function CreateComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.form.getRawValue()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "mat-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "portrait-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](22, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](26, "Metatype");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](27, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, CreateComponent_mat_option_28_Template, 2, 3, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](31, "Awakening");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](32, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](33, CreateComponent_mat_option_33_Template, 2, 3, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, CreateComponent_mat_form_field_34_Template, 5, 1, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](35, "s5e-create-pc-qualities", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](37, "s5e-create-pc-attributes", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](39, "s5e-create-pc-skills", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](41, "s5e-create-pc-knowledge", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](43, "s5e-create-pc-contacts", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](44, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](45, CreateComponent_s5e_create_pc_spells_45_Template, 2, 3, "s5e-create-pc-spells", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](46, CreateComponent_s5e_create_pc_adept_powers_46_Template, 1, 0, "s5e-create-pc-adept-powers", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](47, CreateComponent_s5e_create_pc_complex_forms_47_Template, 2, 3, "s5e-create-pc-complex-forms", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](48, "s5e-create-pc-lifestyle", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](49, "s5e-create-pc-final-calculations", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](50, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](51, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](53, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](55, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.METATYPES);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx.AWAKENINGS);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isMagicTraditionAvailable(ctx.form.getRawValue()));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("initial", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](36, 19, ctx.character$))("awakening", ctx.form.get("awakening").value)("metatype", ctx.form.get("metatype").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("initial", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](38, 21, ctx.character$))("awakening", ctx.form.get("awakening").value)("metatype", ctx.form.get("metatype").value)("qualities", ctx.form.get("qualities").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("initial", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](40, 23, ctx.character$))("awakening", ctx.form.get("awakening").value);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("initial", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](42, 25, ctx.character$));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("initial", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](44, 27, ctx.character$));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isSpellsAvailable(ctx.form.getRawValue()));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isAdeptPowersAvailable(ctx.form.getRawValue()));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isComplexFormsAvailable(ctx.form.getRawValue()));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("character", ctx.form.getRawValue());
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbar, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardContent, _ui_components_portrait_select_portrait_select_component__WEBPACK_IMPORTED_MODULE_4__.PortraitSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_26__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupName, _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_28__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_29__.NgIf, _5e_components_create_pc_qualities_create_pc_qualities_component__WEBPACK_IMPORTED_MODULE_5__.CreatePcQualitiesComponent, _5e_components_create_pc_attributes_create_pc_attributes_component__WEBPACK_IMPORTED_MODULE_6__.CreatePcAttributesComponent, _5e_components_create_pc_skills_create_pc_skills_component__WEBPACK_IMPORTED_MODULE_7__.CreatePcSkillsComponent, _5e_components_create_pc_knowledge_create_pc_knowledge_component__WEBPACK_IMPORTED_MODULE_8__.CreatePcKnowledgeComponent, _5e_components_create_pc_contacts_create_pc_contacts_component__WEBPACK_IMPORTED_MODULE_9__.CreatePcContactsComponent, _5e_components_create_pc_lifestyle_create_pc_lifestyle_component__WEBPACK_IMPORTED_MODULE_10__.CreatePcLifestyleComponent, _5e_components_create_pc_final_calculations_create_pc_final_calculations_component__WEBPACK_IMPORTED_MODULE_11__.CreatePcFinalCalculationsComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _5e_components_create_pc_spells_create_pc_spells_component__WEBPACK_IMPORTED_MODULE_12__.CreatePcSpellsComponent, _5e_components_create_pc_adept_powers_create_pc_adept_powers_component__WEBPACK_IMPORTED_MODULE_13__.CreatePcAdeptPowersComponent, _5e_components_create_pc_complex_forms_create_pc_complex_forms_component__WEBPACK_IMPORTED_MODULE_14__.CreatePcComplexFormsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 868:
/*!**********************************************************************!*\
  !*** ./projects/shadowrun/src/app/characters/list/list.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shadowrun/app/ui/ui.models */ 2645);
/* harmony import */ var _shadowrun_app_characters_clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shadowrun/app/characters/clone-dialog/clone-dialog.component */ 4827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _shadowrun_app_5e_5e_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shadowrun/app/5e/5e.service */ 9300);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 2529);














const _c0 = function (a1) { return ["../pc/view", a1]; };
const _c1 = function (a1) { return ["../pc/update", a1]; };
function ListComponent_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "keyboard_double_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_mat_list_item_8_Template_button_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const character_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.onCloneClick(character_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ListComponent_mat_list_item_8_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const character_r1 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.onDeleteClick(character_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const character_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/images/portraits/" + character_r1.portrait, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, character_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](character_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c1, character_r1.id));
} }
class ListComponent {
    constructor(dialog, firestore, service) {
        this.dialog = dialog;
        this.firestore = firestore;
        this.service = service;
        this.portraits = _shadowrun_app_ui_ui_models__WEBPACK_IMPORTED_MODULE_0__.PORTRAITS;
        this.characters$ = this.firestore.collection('characters');
    }
    onCloneClick(i) {
        this.dialog
            .open(_shadowrun_app_characters_clone_dialog_clone_dialog_component__WEBPACK_IMPORTED_MODULE_1__.CloneDialogComponent, { data: i.name })
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(res => !!res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(res => {
            const id = this.service.getId();
            const name = res;
            return this.firestore.update(`characters/${id}`, Object.assign(Object.assign({}, i), { id, name }));
        }))
            .subscribe();
    }
    onDeleteClick(i) {
        this.dialog
            .confirm({
            data: {
                title: 'Delete Character',
                description: `Are sure you want to delete this character (${i.name})?`,
                ok: 'Delete',
                cancel: 'Cancel'
            }
        })
            .afterClosed()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(res => !!res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this.firestore.delete(`characters/${i.id}`)))
            .subscribe();
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.FirestoreService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shadowrun_app_5e_5e_service__WEBPACK_IMPORTED_MODULE_3__.FifthEditionService)); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["ng-component"]], decls: 10, vars: 3, consts: [[1, "toolbar-main"], ["matListAvatar", "", "src", "assets/images/portraits/pc_humanmale_00_faceless.png", "alt", "Default portrait", 1, "portrait"], ["matLine", "", "routerLink", "../pc/create"], [4, "ngFor", "ngForOf"], ["matListAvatar", "", "alt", "Character portrait", 1, "portrait", 3, "src"], ["matLine", "", 3, "routerLink"], ["mat-icon-button", "", "matTooltip", "Upgrade", 3, "routerLink"], ["color", "primary"], ["mat-icon-button", "", "matTooltip", "Clone", 3, "click"], ["color", "accent"], ["mat-icon-button", "", "matTooltip", "Delete", 3, "click"], ["color", "warn"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Characters List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Create new PC");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ListComponent_mat_list_item_8_Template, 13, 8, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 1, ctx.characters$));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListAvatarCssMatStyler, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatLine, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatAnchor, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: [".portrait[_ngcontent-%COMP%] {\n  height: 45px;\n  border-radius: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7QUFDRiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRyYWl0IHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 9993:
/*!**********************************************************************!*\
  !*** ./projects/shadowrun/src/app/characters/view/view.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": () => (/* binding */ ViewComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 8454);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 298);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _5e_components_view_general_view_general_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../5e/components/view-general/view-general.component */ 4485);
/* harmony import */ var _5e_components_view_qualities_view_qualities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../5e/components/view-qualities/view-qualities.component */ 6625);
/* harmony import */ var _5e_components_view_attributes_view_attributes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../5e/components/view-attributes/view-attributes.component */ 5849);
/* harmony import */ var _5e_components_view_skills_view_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../5e/components/view-skills/view-skills.component */ 9749);
/* harmony import */ var _5e_components_view_spells_view_spells_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../5e/components/view-spells/view-spells.component */ 261);
/* harmony import */ var _5e_components_view_complex_forms_view_complex_forms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../5e/components/view-complex-forms/view-complex-forms.component */ 7582);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 4364);
















class ViewComponent {
    constructor(route, firestore) {
        this.route = route;
        this.firestore = firestore;
        this.character$ = this.route.paramMap
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(res => res.get('id')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(id => this.firestore.doc(`characters/${id}`)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
        this.view$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__.BehaviorSubject('full');
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.FirestoreService)); };
ViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["ng-component"]], decls: 28, vars: 36, consts: [[1, "toolbar-main"], [1, "f-1"], ["mat-icon-button", "", "matTooltip", "Concise View", 3, "click"], ["mat-icon-button", "", "matTooltip", "Full View", 3, "click"], [3, "character", "view"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Character View");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewComponent_Template_button_click_4_listener() { return ctx.view$.next("concise"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "unfold_less");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function ViewComponent_Template_button_click_7_listener() { return ctx.view$.next("full"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "unfold_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](10, "s5e-view-general", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "s5e-view-qualities", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "s5e-view-attributes", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "s5e-view-skills", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](22, "s5e-view-spells", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](24, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](25, "s5e-view-complex-forms", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](27, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("character", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](11, 12, ctx.character$))("view", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 14, ctx.view$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("character", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](14, 16, ctx.character$))("view", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](15, 18, ctx.view$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("character", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](17, 20, ctx.character$))("view", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](18, 22, ctx.view$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("character", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](20, 24, ctx.character$))("view", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](21, 26, ctx.view$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("character", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](23, 28, ctx.character$))("view", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](24, 30, ctx.view$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("character", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](26, 32, ctx.character$))("view", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](27, 34, ctx.view$));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _5e_components_view_general_view_general_component__WEBPACK_IMPORTED_MODULE_1__.ViewGeneralComponent, _5e_components_view_qualities_view_qualities_component__WEBPACK_IMPORTED_MODULE_2__.ViewQualitiesComponent, _5e_components_view_attributes_view_attributes_component__WEBPACK_IMPORTED_MODULE_3__.ViewAttributesComponent, _5e_components_view_skills_view_skills_component__WEBPACK_IMPORTED_MODULE_4__.ViewSkillsComponent, _5e_components_view_spells_view_spells_component__WEBPACK_IMPORTED_MODULE_5__.ViewSpellsComponent, _5e_components_view_complex_forms_view_complex_forms_component__WEBPACK_IMPORTED_MODULE_6__.ViewComplexFormsComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=projects_shadowrun_src_app_characters_characters_module_ts.js.map