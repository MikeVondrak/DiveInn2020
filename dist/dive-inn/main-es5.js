function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./server/app/routes.ts":
  /*!******************************!*\
    !*** ./server/app/routes.ts ***!
    \******************************/

  /*! exports provided: routes */

  /***/
  function serverAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    }); // SHARED BETWEEN FRONTEND AND BACKEND


    var routes = {
      api: {
        _root: '/api',
        font: '/font',
        test: '/test-data',
        other: '/other'
      },
      error: {
        _404: '/*'
      }
    };
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_head_uri_loader_head_uri_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/head-uri-loader/head-uri-loader.service */
    "./src/app/services/head-uri-loader/head-uri-loader.service.ts");
    /* harmony import */


    var _components_font_test_font_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/font-test/font-test.component */
    "./src/app/components/font-test/font-test.component.ts");
    /* harmony import */


    var _components_server_test_server_test_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/server-test/server-test.component */
    "./src/app/components/server-test/server-test.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_animated_cube_animated_cube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/components/animated-cube/animated-cube.component */
    "./src/app/shared/components/animated-cube/animated-cube.component.ts");
    /* harmony import */


    var _shared_components_animated_checkmark_svg_animated_checkmark_svg_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/components/animated-checkmark-svg/animated-checkmark-svg.component */
    "./src/app/shared/components/animated-checkmark-svg/animated-checkmark-svg.component.ts");
    /* harmony import */


    var _components_font_configuration_font_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/font-configuration/font-configuration.component */
    "./src/app/components/font-configuration/font-configuration.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(headUriLoader) {
        _classCallCheck(this, AppComponent);

        this.headUriLoader = headUriLoader;
        this.title = 'dive-inn';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.headUriLoader.loadFontsLink();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_head_uri_loader_head_uri_loader_service__WEBPACK_IMPORTED_MODULE_1__["HeadUriLoaderService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [["src", "/assets/images/logoLg.png"], ["src", "/assets/images/logoSm.png"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-font-test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-server-test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-animated-cube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-animated-checkmark-svg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-font-configuration");
        }
      },
      directives: [_components_font_test_font_test_component__WEBPACK_IMPORTED_MODULE_2__["FontTestComponent"], _components_server_test_server_test_component__WEBPACK_IMPORTED_MODULE_3__["ServerTestComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _shared_components_animated_cube_animated_cube_component__WEBPACK_IMPORTED_MODULE_5__["AnimatedCubeComponent"], _shared_components_animated_checkmark_svg_animated_checkmark_svg_component__WEBPACK_IMPORTED_MODULE_6__["AnimatedCheckmarkSvgComponent"], _components_font_configuration_font_configuration_component__WEBPACK_IMPORTED_MODULE_7__["FontConfigurationComponent"]],
      styles: [".hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  \n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n  \n}\n[_nghost-%COMP%] {\n  display: block;\n  margin: 2rem;\n  padding: 2rem;\n  border: 1px solid #de2726;\n}\n[_nghost-%COMP%]   .gray-lt[_ngcontent-%COMP%] {\n  color: #cbb;\n}\n[_nghost-%COMP%]   .gray-md[_ngcontent-%COMP%] {\n  color: #988;\n}\n[_nghost-%COMP%]   .gray-dk[_ngcontent-%COMP%] {\n  color: #544;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvRDpcXF9kZXZcXGRpdmUtaW5uLWRlbnZlclxcRGl2ZUlubjIwMjBcXHNlcnZlci8uLlxcc3JjXFxzY3NzXFxfdXRpbGl0aWVzLnNjc3MiLCIuLi9zcmMvYXBwL0Q6XFxfZGV2XFxkaXZlLWlubi1kZW52ZXJcXERpdmVJbm4yMDIwXFxzZXJ2ZXIvLi5cXHNyY1xcc2Nzc1xcX2NsYXNzZXMuc2NzcyIsIi4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiLi4vc3JjL2FwcC9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi4vc3JjL2FwcC9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXHNjc3NcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7Q0FBQTtBQXlCQTs7Q0FBQTtBQWlCQTs7Q0FBQTtBQzVDQTtFQUNFLGFBQUE7QUNhRjtBRFZBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFBNkIsYUFBQTtFQUM3Qiw4QkFBQTtFQUNBLG1CQUFBO0VBQXFCLGVBQUE7QUNldkI7QUN4QkE7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBRDBCRjtBQ3hCRTtFQUNFLFdDUFc7QUZpQ2Y7QUN4QkU7RUFDRSxXQ1RXO0FGbUNmO0FDeEJFO0VBQ0UsV0NYVztBRnFDZiIsImZpbGUiOiIuLi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcclxuXHJcbi8qKlxyXG4gIENvbnZlcnRzIHVuaXRsZXNzIG51bWJlcnMgb3IgcHggdmFsdWVzIHRvIHJlbVxyXG4gIEV4YW1wbGU6XHJcbiAgICB3aWR0aDogcHhUb1JlbSg0OHB4KTsgICAgICAgICA9PiB3aWR0aDogM3JlbTtcclxuICAgIHBhZGRpbmc6IHB4VG9SZW0oOCAxNiAyNCAzMik7ID0+IHBhZGRpbmc6IDAuNXJlbSAxcmVtIDEuNXJlbSAycmVtO1xyXG4qL1xyXG5AZnVuY3Rpb24gcHhUb1JlbSgkcHhWYWx1ZXMpIHtcclxuICAkcmVtVmFsdWVzOiAoKTsgLy8gZW1wdHkgbGlzdFxyXG4gICRiYXNlOiBzdHJpcFVuaXQoJGJhc2UtZm9udC1zaXplKTtcclxuXHJcbiAgQGVhY2ggJHB4VmFsdWUgaW4gJHB4VmFsdWVzIHtcclxuICAgIEBpZiB0eXBlLW9mKCRweFZhbHVlKSAhPSAnbnVtYmVyJyBvciAobm90IHVuaXRsZXNzKCRweFZhbHVlKSBhbmQgdW5pdCgkcHhWYWx1ZSkgIT0gJ3B4Jykge1xyXG4gICAgICBAZXJyb3IgXCJOdW1iZXIgb3IgcHggdmFsdWUgcmVxdWlyZWQsIGludmFsaWQgaW5wdXQ6ICN7JHB4VmFsdWV9XCI7XHJcbiAgICB9XHJcbiAgICAkcHhWYWx1ZTogc3RyaXBVbml0KCRweFZhbHVlKTsgLy8gcmVtb3ZlICdweCcgdW5pdCBpZiBwcmVzZW50XHJcbiAgICAkcmVtVmFsdWVzOiBhcHBlbmQoJHJlbVZhbHVlcywgICgkcHhWYWx1ZSAvICRiYXNlKSArIDByZW0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGEgc2luZ2xlIHZhbHVlIHJldHVybiB0aGUgbnVtZXJpYyB2YXJpYWJsZSBpbnN0ZWFkIG9mIGEgc3RyaW5nIHRvIGFsbG93IHVzZSBpbiBjYWxjdWxhdGlvbnNcclxuICBAaWYgbGVuZ3RoKCRyZW1WYWx1ZXMgPT0gMSkge1xyXG4gICAgQHJldHVybiBudGgoJHJlbVZhbHVlcywgMSk7XHJcbiAgfVxyXG4gIEByZXR1cm4gJHJlbVZhbHVlczsgLy8gI3skcmVtVmFsdWVzfTtcclxufVxyXG5cclxuLyoqXHJcbiAgUmVtb3ZlIHVuaXQgZnJvbSB2YWx1ZSBsaXN0XHJcbiovXHJcbkBmdW5jdGlvbiBzdHJpcFVuaXRzKCR2YWx1ZXMpIHtcclxuICAkdW5pdGxlc3M6ICgpO1xyXG5cclxuICBAaWYgbGVuZ3RoKCRsaXN0OiAkdmFsdWVzKSA9PSAxIHtcclxuICAgIEByZXR1cm4gc3RyaXBVbml0KCR2YWx1ZXMpO1xyXG4gIH1cclxuICBAZWxzZSB7XHJcbiAgICBAZWFjaCAkdmFsIGluICR2YWx1ZXMgeyAgICAgIFxyXG4gICAgICAkdW5pdGxlc3M6IGFwcGVuZCgkdW5pdGxlc3MsIHN0cmlwVW5pdCgkdmFsKSk7XHJcbiAgICB9XHJcbiAgICBAcmV0dXJuICR1bml0bGVzcztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gIFJlbW92ZSB1bml0IGZyb20gdmFsdWUgZS5nLiAxNnB4ID0+IDE2LCAycmVtID0+IDJcclxuKi9cclxuQGZ1bmN0aW9uIHN0cmlwVW5pdCgkdmFsdWUpIHtcclxuICBAaWYgdHlwZS1vZigkdmFsdWUpICE9ICdudW1iZXInIHtcclxuICAgIEBlcnJvciBcIk51bWJlciB2YWx1ZSByZXF1aXJlZCwgaW52YWxpZCBpbnB1dDogI3skdmFsdWV9XCI7XHJcbiAgfVxyXG4gICR1bml0bGVzczogJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTsgLy8gcmVtb3ZlIHVuaXQgZGl2aWRpbmcgYnkgMXVuaXRcclxuICBAcmV0dXJuICR1bml0bGVzcztcclxufSIsIi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXN1YWxseS1oaWRkZW4geyBcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDFweDsgXHJcbiAgd2lkdGg6IDFweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTsgLyogSUU2LCBJRTcgKi9cclxuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogYWRkZWQgbGluZSAqL1xyXG59IiwiLyoqXG4gIENvbnZlcnRzIHVuaXRsZXNzIG51bWJlcnMgb3IgcHggdmFsdWVzIHRvIHJlbVxuICBFeGFtcGxlOlxuICAgIHdpZHRoOiBweFRvUmVtKDQ4cHgpOyAgICAgICAgID0+IHdpZHRoOiAzcmVtO1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oOCAxNiAyNCAzMik7ID0+IHBhZGRpbmc6IDAuNXJlbSAxcmVtIDEuNXJlbSAycmVtO1xuKi9cbi8qKlxuICBSZW1vdmUgdW5pdCBmcm9tIHZhbHVlIGxpc3RcbiovXG4vKipcbiAgUmVtb3ZlIHVuaXQgZnJvbSB2YWx1ZSBlLmcuIDE2cHggPT4gMTYsIDJyZW0gPT4gMlxuKi9cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udmlzdWFsbHktaGlkZGVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7XG4gIC8qIElFNiwgSUU3ICovXG4gIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgLyogYWRkZWQgbGluZSAqL1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDJyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZTI3MjY7XG59XG46aG9zdCAuZ3JheS1sdCB7XG4gIGNvbG9yOiAjY2JiO1xufVxuOmhvc3QgLmdyYXktbWQge1xuICBjb2xvcjogIzk4ODtcbn1cbjpob3N0IC5ncmF5LWRrIHtcbiAgY29sb3I6ICM1NDQ7XG59IiwiQGltcG9ydCAnLi4vc2Nzcy9jb21tb24taW1wb3J0cyc7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7IC8vIHNldCBjdXN0b20gZWxlbWVudCBkaXNwbGF5IHNpbmNlIGRlZmF1bHQgZm9yIHVua25vd24gZWxlbWVudHMgaXMgJ2lubGluZScgaW4gbW9zdCBicm93c2Vyc1xyXG5cclxuICBtYXJnaW46IDJyZW07XHJcbiAgcGFkZGluZzogMnJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkZGl2ZS1yZWQ7XHJcblxyXG4gIC5ncmF5LWx0IHtcclxuICAgIGNvbG9yOiAkZGl2ZS1ncmF5LWx0O1xyXG4gIH1cclxuICAuZ3JheS1tZCB7XHJcbiAgICBjb2xvcjogJGRpdmUtZ3JheS1tZDtcclxuICB9XHJcbiAgLmdyYXktZGsge1xyXG4gICAgY29sb3I6ICRkaXZlLWdyYXktZGs7XHJcbiAgfVxyXG59IiwiJGRpdmUtd2hpdGU6ICNlYmViZWI7XHJcbiRkaXZlLXJlZDogI2RlMjcyNjtcclxuJGRpdmUtYmxhY2s6ICMxNTEyMTI7XHJcbiRkaXZlLWdyYXktbHQ6ICNjYmI7XHJcbiRkaXZlLWdyYXktbWQ6ICM5ODg7XHJcbiRkaXZlLWdyYXktZGs6ICM1NDQ7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _services_head_uri_loader_head_uri_loader_service__WEBPACK_IMPORTED_MODULE_1__["HeadUriLoaderService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_server_test_server_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/server-test/server-test.component */
    "./src/app/components/server-test/server-test.component.ts");
    /* harmony import */


    var _components_font_test_font_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/font-test/font-test.component */
    "./src/app/components/font-test/font-test.component.ts");
    /* harmony import */


    var _components_shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/shared/checkbox/checkbox.component */
    "./src/app/components/shared/checkbox/checkbox.component.ts");
    /* harmony import */


    var _shared_components_animated_cube_animated_cube_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/components/animated-cube/animated-cube.component */
    "./src/app/shared/components/animated-cube/animated-cube.component.ts");
    /* harmony import */


    var _shared_components_animated_checkmark_svg_animated_checkmark_svg_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/components/animated-checkmark-svg/animated-checkmark-svg.component */
    "./src/app/shared/components/animated-checkmark-svg/animated-checkmark-svg.component.ts");
    /* harmony import */


    var _shared_components_form_controls_checkbox_svg_checkbox_svg_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/components/form-controls/checkbox-svg/checkbox-svg.component */
    "./src/app/shared/components/form-controls/checkbox-svg/checkbox-svg.component.ts");
    /* harmony import */


    var _components_font_configuration_font_configuration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/font-configuration/font-configuration.component */
    "./src/app/components/font-configuration/font-configuration.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_server_test_server_test_component__WEBPACK_IMPORTED_MODULE_6__["ServerTestComponent"], _components_font_test_font_test_component__WEBPACK_IMPORTED_MODULE_7__["FontTestComponent"], _components_shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"], _shared_components_animated_cube_animated_cube_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedCubeComponent"], _shared_components_animated_checkmark_svg_animated_checkmark_svg_component__WEBPACK_IMPORTED_MODULE_10__["AnimatedCheckmarkSvgComponent"], _shared_components_form_controls_checkbox_svg_checkbox_svg_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxSvgComponent"], _components_font_configuration_font_configuration_component__WEBPACK_IMPORTED_MODULE_12__["FontConfigurationComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_server_test_server_test_component__WEBPACK_IMPORTED_MODULE_6__["ServerTestComponent"], _components_font_test_font_test_component__WEBPACK_IMPORTED_MODULE_7__["FontTestComponent"], _components_shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"], _shared_components_animated_cube_animated_cube_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedCubeComponent"], _shared_components_animated_checkmark_svg_animated_checkmark_svg_component__WEBPACK_IMPORTED_MODULE_10__["AnimatedCheckmarkSvgComponent"], _shared_components_form_controls_checkbox_svg_checkbox_svg_component__WEBPACK_IMPORTED_MODULE_11__["CheckboxSvgComponent"], _components_font_configuration_font_configuration_component__WEBPACK_IMPORTED_MODULE_12__["FontConfigurationComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/font-configuration/font-configuration.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/font-configuration/font-configuration.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: FontConfigurationComponent */

  /***/
  function srcAppComponentsFontConfigurationFontConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontConfigurationComponent", function () {
      return FontConfigurationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_font_manager_font_manager_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/font-manager/font-manager.service */
    "./src/app/services/font-manager/font-manager.service.ts");

    var FontConfigurationComponent = /*#__PURE__*/function () {
      function FontConfigurationComponent(fontManagerService) {
        _classCallCheck(this, FontConfigurationComponent);

        this.fontManagerService = fontManagerService;
      }

      _createClass(FontConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fontManagerService.init();
        }
      }]);

      return FontConfigurationComponent;
    }();

    FontConfigurationComponent.ɵfac = function FontConfigurationComponent_Factory(t) {
      return new (t || FontConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_font_manager_font_manager_service__WEBPACK_IMPORTED_MODULE_1__["FontManagerService"]));
    };

    FontConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FontConfigurationComponent,
      selectors: [["app-font-configuration"]],
      decls: 2,
      vars: 0,
      template: function FontConfigurationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Font Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9udC1jb25maWd1cmF0aW9uL2ZvbnQtY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-font-configuration',
          templateUrl: './font-configuration.component.html',
          styleUrls: ['./font-configuration.component.scss']
        }]
      }], function () {
        return [{
          type: _services_font_manager_font_manager_service__WEBPACK_IMPORTED_MODULE_1__["FontManagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/font-test/font-test.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/font-test/font-test.component.ts ***!
    \*************************************************************/

  /*! exports provided: FontTestComponent */

  /***/
  function srcAppComponentsFontTestFontTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontTestComponent", function () {
      return FontTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_ui_font_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/ui-font.model */
    "./src/app/models/ui-font.model.ts");
    /* harmony import */


    var _services_api_font_font_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api/font/font.service */
    "./src/app/services/api/font/font.service.ts");
    /* harmony import */


    var _services_external_google_google_fonts_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/external/google/google-fonts-api.service */
    "./src/app/services/external/google/google-fonts-api.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/checkbox/checkbox.component */
    "./src/app/components/shared/checkbox/checkbox.component.ts");

    function FontTestComponent_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var font_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", font_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", font_r5.uiText, " ");
      }
    }

    function FontTestComponent_option_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var font_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", font_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", font_r6.uiText, " ");
      }
    }

    function FontTestComponent_option_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var font_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", font_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", font_r7.uiText, " ");
      }
    }

    var ControlsEnum;

    (function (ControlsEnum) {
      ControlsEnum[ControlsEnum["header"] = 0] = "header";
      ControlsEnum[ControlsEnum["text"] = 1] = "text";
    })(ControlsEnum || (ControlsEnum = {}));

    var FontTestComponent = /*#__PURE__*/function () {
      // public boldCheckbox : boolean;
      function FontTestComponent(fontService, fontsApiService) {
        _classCallCheck(this, FontTestComponent);

        this.fontService = fontService;
        this.fontsApiService = fontsApiService; // fonts available in dropdowns

        this.fontOptions = Object.assign([], _models_ui_font_model__WEBPACK_IMPORTED_MODULE_1__["fonts"]); // make enum values available in template

        this.controlsEnum = ControlsEnum; // ngStyles

        this.headerStyle = {};
        this.textStyle = {}; // { 'font-family': 'PT Sans' };
        // ngModels

        this.headerFont = _models_ui_font_model__WEBPACK_IMPORTED_MODULE_1__["headerFonts"][0];
        this.textFont = this.fontOptions.find(function (font) {
          return font.uiText === 'PT Sans Bold';
        });
        this.hFonts = _models_ui_font_model__WEBPACK_IMPORTED_MODULE_1__["headerFonts"];
        this.tFonts = _models_ui_font_model__WEBPACK_IMPORTED_MODULE_1__["textFonts"];
        /**
         * Standard dropdown change event, fires after ngModelChange
         * @param $event DOM event
         */
        // public onChange($event: Event) {
        //   console.log('font-test - customCheckboxChanged DOM event: ' + $event);
        // }
        // public customCheckboxChanged(newVal: boolean) {
        //   console.log('customCheckboxChanged: ' + newVal);
        //   this.textFont.properties.bold = newVal;
        // [(ngModel)]="textFont.properties.bold"
        // (ngModelChange)="$event ? textFont.properties.weight = 700 : textFont.properties.weight = 400"
        // [checked]="textFont.properties.weight === 700"
        //}

        this._checkedValue = false;
      }

      _createClass(FontTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.onModelChange(ControlsEnum.header);
          this.onModelChange(ControlsEnum.text);
          this.fontList$ = this.fontService.getFonts$(); //console.time('font-test getFonts$');

          this.fontsApiService.getFonts$('popularity').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (f) {
            _this.googleFontList = f; // for (let i = 0; i < 1; i++) {
            //   console.log(JSON.stringify(this.googleFontList[i], null, 4));
            //   console.timeEnd('font-test getFonts$');
            // }
          }); // this.fontsApiService.getFonts$('trending')
          //   .pipe(take(1))
          //   .subscribe(fonts => {
          //     this.googleFontList = fonts;
          //     for (let i=0; i<1; i++) {
          //       console.log(JSON.stringify(this.googleFontList[i], null, 4));
          //     }
          //   });
          // this.fontsApiService.getFonts$('trending')
          //   .pipe(take(1))
          //   .subscribe(fonts => {
          //     this.googleFontList = fonts;
          //     for (let i=0; i<1; i++) {
          //       console.log(JSON.stringify(this.googleFontList[i], null, 4));
          //     }
          //   });
          // this.fontsApiService.getFonts$('popularity')
          //   .pipe(take(1))
          //   .subscribe(fonts => {
          //     this.googleFontList = fonts;
          //     for (let i=0; i<1; i++) {
          //       console.log(JSON.stringify(this.googleFontList[i], null, 4));
          //     }
          //   });
        }
        /**
         * Callback for Angular event when dropdown selection is changed and model has updated
         * Set the associated ngStyle object when dropdown changes
         * @param controlId Enum value to distinguish initiating control
         * @param $newVal New font selected
         */

      }, {
        key: "onModelChange",
        value: function onModelChange(controlId, $newVal) {
          if ($newVal) {
            switch (controlId) {
              case ControlsEnum.header:
                //this.headerStyle = { 'font-family': this.headerFont.family };
                this.headerStyle = this.buildStyleObject(this.headerStyle, $newVal.family);
                break;

              case ControlsEnum.text:
                //this.textStyle = { 'font-family': this.textFont.family };
                this.textStyle = this.buildStyleObject(this.textStyle, $newVal.family);
                break;
            }
          }
        }
      }, {
        key: "buildStyleObject",

        /**
         * Create a style object to pass into ngStyle binding
         * @TODO refactor to pass in any number and type of properties for styles
         */
        value: function buildStyleObject(styleObject, fontFamily, fontWeight) {
          var newStyle = {
            'font-family': fontFamily ? fontFamily : styleObject['font-family'],
            'font-weight': fontWeight ? fontWeight : styleObject['font-weight']
          };
          return newStyle;
        }
      }, {
        key: "checkedValue",
        get: function get() {
          return this._checkedValue;
        },
        set: function set(newVal) {
          var _this2 = this;

          setTimeout(function () {
            _this2._checkedValue = newVal;
            newVal ? _this2.textFont.properties.weight = 700 : _this2.textFont.properties.weight = 400;
            _this2.textFont.properties.bold = newVal;
            _this2.textStyle = _this2.buildStyleObject(_this2.textStyle, undefined, _this2.textFont.properties.weight);
          });
        }
      }]);

      return FontTestComponent;
    }();

    FontTestComponent.ɵfac = function FontTestComponent_Factory(t) {
      return new (t || FontTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_font_font_service__WEBPACK_IMPORTED_MODULE_2__["FontApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_external_google_google_fonts_api_service__WEBPACK_IMPORTED_MODULE_3__["GoogleFontsApiService"]));
    };

    FontTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FontTestComponent,
      selectors: [["app-font-test"]],
      decls: 95,
      vars: 36,
      consts: [[3, "ngStyle"], [1, "controlsContainer"], [3, "ngModel", "ngModelChange"], ["label", "Header Fonts"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["label", "Text Fonts"], ["for", "headerBold"], ["type", "checkbox", "id", "headerBold", 3, "ngModel", "checked", "ngModelChange"], ["uiLabel", "Bold", 3, "checkedValue", "checkedValueChange"], ["for", "addFontFamily"], ["type", "text", "id", "addFontFamily", "name", "bogusName", "required", "", 3, "ngModel", "ngModelChange"], ["addFontFamily", "ngModel"], ["for", "addFontHref"], ["type", "text", "id", "addFontHref", 3, "ngModel", "ngModelChange"], ["addFontHref", "ngModel"], ["type", "radio", "name", "testRadio", "id", "testRadio1"], ["for", "testRadio1"], ["type", "radio", "name", "testRadio", "id", "testRadio2"], ["for", "testRadio2"], [3, "ngValue"]],
      template: function FontTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dive Inn - What's Inside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "a b c d e f g h i j k l m n o p q r s t u v w x y z");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "abcdefghijklmnopqrstuvwxyz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ". ? ! / @ # $ % ^ & * ( ) ~ - + = ' \" : ; < >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The quick brown fox jumped over the lazy dog.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "a b c d e f g h i j k l m n o p q r s t u v w x y z");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "abcdefghijklmnopqrstuvwxyz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, ". ? ! / @ # $ % ^ & * ( ) ~ - + = ' \" : ; < >");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FontTestComponent_Template_select_ngModelChange_28_listener($event) {
            return ctx.onModelChange(ctx.controlsEnum.header, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "optgroup", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FontTestComponent_option_30_Template, 2, 2, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "optgroup", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, FontTestComponent_option_33_Template, 2, 2, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Bold: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FontTestComponent_Template_input_ngModelChange_37_listener($event) {
            return ctx.headerFont.properties.bold = $event;
          })("ngModelChange", function FontTestComponent_Template_input_ngModelChange_37_listener($event) {
            return $event ? ctx.headerFont.properties.weight = 700 : ctx.headerFont.properties.weight = 400;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Selected Font:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FontTestComponent_Template_select_ngModelChange_47_listener($event) {
            return ctx.onModelChange(ctx.controlsEnum.text, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, FontTestComponent_option_48_Template, 2, 2, "option", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Selected Font:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "checkbox", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("checkedValueChange", function FontTestComponent_Template_checkbox_checkedValueChange_59_listener($event) {
            return ctx.checkedValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Add a new font");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Family: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FontTestComponent_Template_input_ngModelChange_69_listener($event) {
            return ctx.fontNameToAdd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Href: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FontTestComponent_Template_input_ngModelChange_77_listener($event) {
            return ctx.fontHrefToAdd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Test Radio jpgy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "jpgy Test Radio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](70);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.headerStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.headerStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.headerStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.headerStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.headerStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.headerStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.textStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.textStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.textStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.textStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.textStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.textStyle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.headerFont);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 34, ctx.fontList$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tFonts);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.headerFont.properties.bold)("checked", ctx.headerFont.properties.weight === 700);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headerFont.uiText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("bold: ", ctx.headerFont.properties.bold, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("weight: ", ctx.headerFont.properties.weight, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.textFont);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fontOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.textFont.uiText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("bold: ", ctx.textFont.properties.bold, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("weight: ", ctx.textFont.properties.weight, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checkedValue", ctx.checkedValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Bold value: ", ctx.textFont.properties.bold, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Weight value: ", ctx.textFont.properties.weight, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fontNameToAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", ctx.fontNameToAdd, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Valid: ", _r3.valid, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fontHrefToAdd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input: ", ctx.fontNameToAdd, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Valid: ", _r4.valid, "");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _shared_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: [".hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  \n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n  \n}\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .controlsContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   hr[_ngcontent-%COMP%] {\n  margin: 2em 0;\n}\n[_nghost-%COMP%]   optgroup[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #de2726;\n}\n[_nghost-%COMP%]   optgroup[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvY29tcG9uZW50cy9mb250LXRlc3QvRDpcXF9kZXZcXGRpdmUtaW5uLWRlbnZlclxcRGl2ZUlubjIwMjBcXHNlcnZlci8uLlxcc3JjXFxzY3NzXFxfdXRpbGl0aWVzLnNjc3MiLCIuLi9zcmMvYXBwL2NvbXBvbmVudHMvZm9udC10ZXN0L0Q6XFxfZGV2XFxkaXZlLWlubi1kZW52ZXJcXERpdmVJbm4yMDIwXFxzZXJ2ZXIvLi5cXHNyY1xcc2Nzc1xcX2NsYXNzZXMuc2NzcyIsIi4uL3NyYy9hcHAvY29tcG9uZW50cy9mb250LXRlc3QvZm9udC10ZXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vc3JjL2FwcC9jb21wb25lbnRzL2ZvbnQtdGVzdC9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZm9udC10ZXN0XFxmb250LXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7Ozs7O0NBQUE7QUF5QkE7O0NBQUE7QUFpQkE7O0NBQUE7QUM1Q0E7RUFDRSxhQUFBO0FDYUY7QURWQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQTZCLGFBQUE7RUFDN0IsOEJBQUE7RUFDQSxtQkFBQTtFQUFxQixlQUFBO0FDZXZCO0FDeEJBO0VBQ0UsY0FBQTtBRDJCRjtBQ3pCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBRDJCSjtBQ3hCRTtFQUNFLGFBQUE7QUQwQko7QUN2QkU7RUFDRSxnQ0FBQTtBRHlCSjtBQ3hCSTtFQUNFLFlBQUE7QUQwQk4iLCJmaWxlIjoiLi4vc3JjL2FwcC9jb21wb25lbnRzL2ZvbnQtdGVzdC9mb250LXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XHJcblxyXG4vKipcclxuICBDb252ZXJ0cyB1bml0bGVzcyBudW1iZXJzIG9yIHB4IHZhbHVlcyB0byByZW1cclxuICBFeGFtcGxlOlxyXG4gICAgd2lkdGg6IHB4VG9SZW0oNDhweCk7ICAgICAgICAgPT4gd2lkdGg6IDNyZW07XHJcbiAgICBwYWRkaW5nOiBweFRvUmVtKDggMTYgMjQgMzIpOyA9PiBwYWRkaW5nOiAwLjVyZW0gMXJlbSAxLjVyZW0gMnJlbTtcclxuKi9cclxuQGZ1bmN0aW9uIHB4VG9SZW0oJHB4VmFsdWVzKSB7XHJcbiAgJHJlbVZhbHVlczogKCk7IC8vIGVtcHR5IGxpc3RcclxuICAkYmFzZTogc3RyaXBVbml0KCRiYXNlLWZvbnQtc2l6ZSk7XHJcblxyXG4gIEBlYWNoICRweFZhbHVlIGluICRweFZhbHVlcyB7XHJcbiAgICBAaWYgdHlwZS1vZigkcHhWYWx1ZSkgIT0gJ251bWJlcicgb3IgKG5vdCB1bml0bGVzcygkcHhWYWx1ZSkgYW5kIHVuaXQoJHB4VmFsdWUpICE9ICdweCcpIHtcclxuICAgICAgQGVycm9yIFwiTnVtYmVyIG9yIHB4IHZhbHVlIHJlcXVpcmVkLCBpbnZhbGlkIGlucHV0OiAjeyRweFZhbHVlfVwiO1xyXG4gICAgfVxyXG4gICAgJHB4VmFsdWU6IHN0cmlwVW5pdCgkcHhWYWx1ZSk7IC8vIHJlbW92ZSAncHgnIHVuaXQgaWYgcHJlc2VudFxyXG4gICAgJHJlbVZhbHVlczogYXBwZW5kKCRyZW1WYWx1ZXMsICAoJHB4VmFsdWUgLyAkYmFzZSkgKyAwcmVtKTtcclxuICB9XHJcblxyXG4gIC8vIGZvciBhIHNpbmdsZSB2YWx1ZSByZXR1cm4gdGhlIG51bWVyaWMgdmFyaWFibGUgaW5zdGVhZCBvZiBhIHN0cmluZyB0byBhbGxvdyB1c2UgaW4gY2FsY3VsYXRpb25zXHJcbiAgQGlmIGxlbmd0aCgkcmVtVmFsdWVzID09IDEpIHtcclxuICAgIEByZXR1cm4gbnRoKCRyZW1WYWx1ZXMsIDEpO1xyXG4gIH1cclxuICBAcmV0dXJuICRyZW1WYWx1ZXM7IC8vICN7JHJlbVZhbHVlc307XHJcbn1cclxuXHJcbi8qKlxyXG4gIFJlbW92ZSB1bml0IGZyb20gdmFsdWUgbGlzdFxyXG4qL1xyXG5AZnVuY3Rpb24gc3RyaXBVbml0cygkdmFsdWVzKSB7XHJcbiAgJHVuaXRsZXNzOiAoKTtcclxuXHJcbiAgQGlmIGxlbmd0aCgkbGlzdDogJHZhbHVlcykgPT0gMSB7XHJcbiAgICBAcmV0dXJuIHN0cmlwVW5pdCgkdmFsdWVzKTtcclxuICB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGVhY2ggJHZhbCBpbiAkdmFsdWVzIHsgICAgICBcclxuICAgICAgJHVuaXRsZXNzOiBhcHBlbmQoJHVuaXRsZXNzLCBzdHJpcFVuaXQoJHZhbCkpO1xyXG4gICAgfVxyXG4gICAgQHJldHVybiAkdW5pdGxlc3M7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICBSZW1vdmUgdW5pdCBmcm9tIHZhbHVlIGUuZy4gMTZweCA9PiAxNiwgMnJlbSA9PiAyXHJcbiovXHJcbkBmdW5jdGlvbiBzdHJpcFVuaXQoJHZhbHVlKSB7XHJcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnbnVtYmVyJyB7XHJcbiAgICBAZXJyb3IgXCJOdW1iZXIgdmFsdWUgcmVxdWlyZWQsIGludmFsaWQgaW5wdXQ6ICN7JHZhbHVlfVwiO1xyXG4gIH1cclxuICAkdW5pdGxlc3M6ICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7IC8vIHJlbW92ZSB1bml0IGRpdmlkaW5nIGJ5IDF1bml0XHJcbiAgQHJldHVybiAkdW5pdGxlc3M7XHJcbn0iLCIuaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzdWFsbHktaGlkZGVuIHsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxcHg7IFxyXG4gIHdpZHRoOiAxcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7IC8qIElFNiwgSUU3ICovXHJcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIGFkZGVkIGxpbmUgKi9cclxufSIsIi8qKlxuICBDb252ZXJ0cyB1bml0bGVzcyBudW1iZXJzIG9yIHB4IHZhbHVlcyB0byByZW1cbiAgRXhhbXBsZTpcbiAgICB3aWR0aDogcHhUb1JlbSg0OHB4KTsgICAgICAgICA9PiB3aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nOiBweFRvUmVtKDggMTYgMjQgMzIpOyA9PiBwYWRkaW5nOiAwLjVyZW0gMXJlbSAxLjVyZW0gMnJlbTtcbiovXG4vKipcbiAgUmVtb3ZlIHVuaXQgZnJvbSB2YWx1ZSBsaXN0XG4qL1xuLyoqXG4gIFJlbW92ZSB1bml0IGZyb20gdmFsdWUgZS5nLiAxNnB4ID0+IDE2LCAycmVtID0+IDJcbiovXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc3VhbGx5LWhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xuICAvKiBJRTYsIElFNyAqL1xuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qIGFkZGVkIGxpbmUgKi9cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5jb250cm9sc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IGhyIHtcbiAgbWFyZ2luOiAyZW0gMDtcbn1cbjpob3N0IG9wdGdyb3VwIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZTI3MjY7XG59XG46aG9zdCBvcHRncm91cDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uL3Njc3MvY29tbW9uLWltcG9ydHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAuY29udHJvbHNDb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIGhyIHtcclxuICAgIG1hcmdpbjogMmVtIDA7XHJcbiAgfVxyXG5cclxuICBvcHRncm91cCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRpdmUtcmVkO1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-font-test',
          templateUrl: './font-test.component.html',
          styleUrls: ['./font-test.component.scss']
        }]
      }], function () {
        return [{
          type: _services_api_font_font_service__WEBPACK_IMPORTED_MODULE_2__["FontApiService"]
        }, {
          type: _services_external_google_google_fonts_api_service__WEBPACK_IMPORTED_MODULE_3__["GoogleFontsApiService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/server-test/server-test.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/server-test/server-test.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ServerTestComponent */

  /***/
  function srcAppComponentsServerTestServerTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerTestComponent", function () {
      return ServerTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_server_test_server_test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/server-test/server-test.service */
    "./src/app/services/server-test/server-test.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ServerTestComponent_p_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Return var: ", item_r1 == null ? null : item_r1.test_id, "\n");
      }
    }

    var a = {
      prop: "a"
    };

    var ServerTestComponent = /*#__PURE__*/function () {
      function ServerTestComponent(serverTestService) {
        _classCallCheck(this, ServerTestComponent);

        this.serverTestService = serverTestService;
      }

      _createClass(ServerTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//this.serverResponse$ = this.serverTestService.getServerTestData$();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "getAnswer",
        value: function getAnswer() {
          console.log('**** component getAnswer()');
          this.serverResponse$ = this.serverTestService.getServerTestData$(); //this.serverTestService.getServerTestData$();
        }
      }]);

      return ServerTestComponent;
    }();

    ServerTestComponent.ɵfac = function ServerTestComponent_Factory(t) {
      return new (t || ServerTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_server_test_server_test_service__WEBPACK_IMPORTED_MODULE_1__["ServerTestService"]));
    };

    ServerTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServerTestComponent,
      selectors: [["app-server-test"]],
      decls: 8,
      vars: 3,
      consts: [[3, "click"], ["class", "bordered", 4, "ngFor", "ngForOf"], [1, "bordered"]],
      template: function ServerTestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Server Test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerTestComponent_Template_button_click_4_listener() {
            return ctx.getAnswer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "server test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ServerTestComponent_p_6_Template, 2, 1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx.serverResponse$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   p.bordered[_ngcontent-%COMP%] {\n  padding: 1em;\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvY29tcG9uZW50cy9zZXJ2ZXItdGVzdC9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcc2VydmVyLXRlc3RcXHNlcnZlci10ZXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vc3JjL2FwcC9jb21wb25lbnRzL3NlcnZlci10ZXN0L3NlcnZlci10ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQ0NGO0FEQ0U7RUFJRSxZQUFBO0VBQ0EscUJBQUE7QUNGSiIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvc2VydmVyLXRlc3Qvc2VydmVyLXRlc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIHAuYm9yZGVyZWQge1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gZGlzcGxheTogaW5saW5lO1xyXG4gICAgLy8gbWFyZ2luOiAxZW07XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcblxyXG4gICAgXHJcbiAgfVxyXG59IiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IHAuYm9yZGVyZWQge1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-server-test',
          templateUrl: './server-test.component.html',
          styleUrls: ['./server-test.component.scss']
        }]
      }], function () {
        return [{
          type: _services_server_test_server_test_service__WEBPACK_IMPORTED_MODULE_1__["ServerTestService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/shared/checkbox/checkbox.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/shared/checkbox/checkbox.component.ts ***!
    \******************************************************************/

  /*! exports provided: CheckboxComponent */

  /***/
  function srcAppComponentsSharedCheckboxCheckboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
      return CheckboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var CheckboxComponent = /*#__PURE__*/function () {
      function CheckboxComponent(renderer, elementRef, cdr) {
        _classCallCheck(this, CheckboxComponent);

        this.renderer = renderer;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.uiLabel = '';
        this.checkedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._checkedValue = false;
        this.controlID = "myCheckbox" + CheckboxComponent.idCounter++;
        console.log('constructor: ' + this._checkedValue);
      }

      _createClass(CheckboxComponent, [{
        key: "ngOnInit",
        // Inputs are available now
        value: function ngOnInit() {
          console.log('onInit: ' + this._checkedValue);
        }
      }, {
        key: "onChange",
        value: function onChange($event) {
          console.log('checkbox change event: ' + $event); //this.checked = event.target.checked;
        }
      }, {
        key: "onNgModelChange",
        value: function onNgModelChange($newValue) {
          console.log('checkbox model changed to new value: ' + $newValue);
        }
      }, {
        key: "checkedValue",
        get: function get() {
          console.log('checkbox getter: ' + this._checkedValue);
          return this._checkedValue;
        },
        set: function set(newVal) {
          console.log('checkbox setter: ' + this._checkedValue + ' -> ' + newVal);
          this._checkedValue = newVal; // emit our checkValueChanged event to outside listeners

          this.checkedValueChange.emit(this._checkedValue);
          this.cdr.detectChanges();
        }
      }]);

      return CheckboxComponent;
    }();

    CheckboxComponent.idCounter = 0;

    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) {
      return new (t || CheckboxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckboxComponent,
      selectors: [["checkbox"]],
      inputs: {
        uiLabel: "uiLabel",
        checkedValue: "checkedValue"
      },
      outputs: {
        checkedValueChange: "checkedValueChange"
      },
      decls: 4,
      vars: 3,
      consts: [["type", "checkbox", "id", "textBold", 3, "ngModel", "checked", "ngModelChange", "change"], ["for", "textBold"]],
      template: function CheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckboxComponent_Template_input_ngModelChange_0_listener($event) {
            return ctx.checkedValue = $event;
          })("change", function CheckboxComponent_Template_input_change_0_listener($event) {
            return ctx.onChange($event);
          })("ngModelChange", function CheckboxComponent_Template_input_ngModelChange_0_listener($event) {
            return ctx.onNgModelChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.checkedValue)("checked", ctx.checkedValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.uiLabel);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY2hlY2tib3gvRDpcXF9kZXZcXGRpdmUtaW5uLWRlbnZlclxcRGl2ZUlubjIwMjBcXHNlcnZlci8uLlxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcY2hlY2tib3hcXGNoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwiLi4vc3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9jaGVja2JveC9jaGVja2JveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiIuLi9zcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NoZWNrYm94L2NoZWNrYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"],
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'checkbox',
          templateUrl: './checkbox.component.html',
          styleUrls: ['./checkbox.component.scss'],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        uiLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        checkedValueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        checkedValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/models/ui-font.model.ts":
  /*!*****************************************!*\
    !*** ./src/app/models/ui-font.model.ts ***!
    \*****************************************/

  /*! exports provided: UiFont, fonts, headerFonts, textFonts */

  /***/
  function srcAppModelsUiFontModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiFont", function () {
      return UiFont;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fonts", function () {
      return fonts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "headerFonts", function () {
      return headerFonts;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "textFonts", function () {
      return textFonts;
    });

    var UiFont = function UiFont(font) {
      _classCallCheck(this, UiFont);

      if (!font.family) {
        throw new Error('font.family must exist and not be an empty string in constructor argument for UiFont');
      }

      this.family = font.family;
      this.uiText = font.uiText ? font.uiText : font.family;
      this.hrefId = font.hrefId ? font.hrefId : font.family.split(' ').join('+');
      this.properties = font.properties ? Object.assign({}, font.properties) : {};
    };
    /**
     * Include fonts here, will be downloaded via <link> element and added as an option in font dropdowns
     */


    var uiFonts = [{
      family: 'Alfa Slab One'
    }, {
      family: 'Anton'
    }, {
      family: 'Bevan'
    }, {
      family: 'Patua One'
    }, {
      family: 'Piedra'
    }, {
      family: 'PT Sans',
      hrefId: 'PT+Sans'
    }, {
      family: 'PT Sans',
      hrefId: 'PT+Sans:wght@700',
      uiText: 'PT Sans Bold',
      properties: {
        weight: 700
      }
    }];

    function generateFonts(fonts) {
      return fonts.map(function (font) {
        return new UiFont(font);
      });
    }

    var fonts = generateFonts(uiFonts);
    var _headerFonts = [{
      family: 'Alfa Slab One'
    }, {
      family: 'Anton'
    }, {
      family: 'Bevan'
    }, {
      family: 'Patua One'
    }, {
      family: 'Piedra'
    }];
    var _textFonts = [{
      family: 'PT Sans',
      hrefId: 'PT+Sans'
    }, {
      family: 'PT Sans',
      hrefId: 'PT+Sans:wght@700',
      uiText: 'PT Sans Bold',
      properties: {
        weight: 700
      }
    }];
    var headerFonts = generateFonts(_headerFonts);
    var textFonts = generateFonts(_textFonts);
    /***/
  },

  /***/
  "./src/app/services/api/font/font.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/api/font/font.service.ts ***!
    \***************************************************/

  /*! exports provided: FontApiService */

  /***/
  function srcAppServicesApiFontFontServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontApiService", function () {
      return FontApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _server_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../server/app/routes */
    "./server/app/routes.ts");
    /* harmony import */


    var _models_ui_font_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../models/ui-font.model */
    "./src/app/models/ui-font.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // shared from backend


    var FontApiService = /*#__PURE__*/function () {
      function FontApiService(http) {
        _classCallCheck(this, FontApiService);

        this.http = http;
      }

      _createClass(FontApiService, [{
        key: "getFonts$",
        value: function getFonts$() {
          console.log('**** API service getFonts()');
          var results = this.http.get(_server_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"].api._root + _server_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"].api.font);
          var uifontArray = results.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (fontArray) {
            return fontArray.map(function (font) {
              var uifont = {
                family: font.font_family,
                uiText: font.ui_text,
                hrefId: font.href_id
              };
              return new _models_ui_font_model__WEBPACK_IMPORTED_MODULE_3__["UiFont"](uifont);
            });
          }));
          return uifontArray;
        }
      }, {
        key: "getFontFamilyFavorites",
        value: function getFontFamilyFavorites() {
          return this.http.get(_server_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"].api._root + _server_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"].api.font + '?fontdata=family');
        } // public getFontFamilyBlacklist(): Observable<string[]> {
        // }

      }, {
        key: "addFont",
        value: function addFont(font) {// TODO
        }
      }]);

      return FontApiService;
    }();

    FontApiService.ɵfac = function FontApiService_Factory(t) {
      return new (t || FontApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    FontApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FontApiService,
      factory: FontApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/external/google/google-fonts-api.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/services/external/google/google-fonts-api.service.ts ***!
    \**********************************************************************/

  /*! exports provided: GoogleFontsApiService */

  /***/
  function srcAppServicesExternalGoogleGoogleFontsApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleFontsApiService", function () {
      return GoogleFontsApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var GoogleFontsApiService = /*#__PURE__*/function () {
      /**
       * @param http HttpClient for API requests
       */
      function GoogleFontsApiService(http) {
        _classCallCheck(this, GoogleFontsApiService);

        this.http = http;
        this.BASE_URL = 'https://www.googleapis.com/webfonts/v1/webfonts';
        this.API_KEY = '?key=AIzaSyCqZ3dPYustmQUajzIhYu7MJeJ_ePHPnyk';
        this.SORT_PARAM = '&sort=';
        this.URL = this.BASE_URL + this.API_KEY + this.SORT_PARAM;
        /**
         * map of sharedReplay Observables to store caches of different sort methods
         */

        this.cacheMap = new Map();
      }
      /**
       * Gets an array of fonts from the Google Fonts API, optionally sorted
       * @param sort [='popularity'] sort type option
       * @param clearCache [=false] boolean to force API request
       * @returns Observable of fonts array
       */


      _createClass(GoogleFontsApiService, [{
        key: "getFonts$",
        value: function getFonts$() {
          var sort = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'popularity';
          var clearCache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          //console.time('getFonts$');
          var url = this.URL + sort;
          return this.getGoogleFontsData$(sort, url, clearCache);
        }
        /**
         * Returns font data for the provided sort key, populating if necessary with a GET request to the provided URL
         * @param sortKey Key for cache map
         * @param url URL for API request
         * @param clearCache [=false] boolean to force API request for new data
         * @returns Observable of Google Fonts array
         */

      }, {
        key: "getGoogleFontsData$",
        value: function getGoogleFontsData$(sortKey, url) {
          var clearCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var cache$ = this.cacheMap.get(sortKey);

          if (!cache$ || clearCache) {
            //console.log('!!!!! GoogleFontsApiService.getGoogleFontsData$ making HTTP request !!!!!');
            //console.time('Google Fonts Request');
            cache$ = this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pluck"])('items'), // enable 'multicast' style of notification for better performance (if we had multiple subscribers),
            // and provide last value to each new subscriber
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(this.CACHE_SIZE));
            this.cacheMap.set(sortKey, cache$); //console.timeEnd('Google Fonts Request');
          }

          return cache$;
        }
      }]);

      return GoogleFontsApiService;
    }();

    GoogleFontsApiService.ɵfac = function GoogleFontsApiService_Factory(t) {
      return new (t || GoogleFontsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GoogleFontsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GoogleFontsApiService,
      factory: GoogleFontsApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleFontsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/font-manager/font-manager.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/font-manager/font-manager.service.ts ***!
    \***************************************************************/

  /*! exports provided: FontManagerService */

  /***/
  function srcAppServicesFontManagerFontManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontManagerService", function () {
      return FontManagerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _external_google_google_fonts_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../external/google/google-fonts-api.service */
    "./src/app/services/external/google/google-fonts-api.service.ts");
    /* harmony import */


    var _api_font_font_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api/font/font.service */
    "./src/app/services/api/font/font.service.ts");
    /* harmony import */


    var _head_uri_loader_head_uri_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../head-uri-loader/head-uri-loader.service */
    "./src/app/services/head-uri-loader/head-uri-loader.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _logger_logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../logger/logger.service */
    "./src/app/services/logger/logger.service.ts");

    var FontManagerService = /*#__PURE__*/function () {
      function FontManagerService(googleFontsApiService, fontsApiService, headUriService, logger) {
        _classCallCheck(this, FontManagerService);

        this.googleFontsApiService = googleFontsApiService;
        this.fontsApiService = fontsApiService;
        this.headUriService = headUriService;
        this.logger = logger;
        this.googleFontCategories = new Set();
        this.allFonts = []; // this.logger.enableLogger(true);
      }

      _createClass(FontManagerService, [{
        key: "init",
        value: function init() {
          // this.logger.log('Test');
          // this.logger.log('', undefined, { label: 'Get Font Categories', action: 'start' });
          // this.logger.log('', { 'Categories Size': this.googleFontCategories.size, 'another var': 100 });
          this.getAllGoogleFonts();
        }
      }, {
        key: "getAllGoogleFonts",
        value: function getAllGoogleFonts() {
          var _this3 = this;

          if (!this.allFonts || !this.allFonts.length) {
            this.googleFontsApiService.getFonts$('popularity').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (fonts) {
              _this3.allFonts = fonts; // debugger;
              // this.logger.log('', undefined, { label: 'getFonts$', action: 'stop' });

              _this3.parseFontsForCategories();
            });
          }
        }
      }, {
        key: "parseFontsForCategories",
        value: function parseFontsForCategories() {
          var _this4 = this;

          // add category of each font to Set to retrieve unique category values
          this.allFonts.forEach(function (font) {
            _this4.googleFontCategories.add(font.category);
          }); // this.logger.log('', [{ 'Categories Size': this.googleFontCategories.size, Categories: this.googleFontCategories }]);
          // this.logger.log('', null, { label: 'Get Font Categories', action: 'stop' });
        }
      }, {
        key: "getSelectableFonts",
        value: function getSelectableFonts() {}
      }, {
        key: "getBlacklistedFonts",
        value: function getBlacklistedFonts() {}
      }]);

      return FontManagerService;
    }();

    FontManagerService.ɵfac = function FontManagerService_Factory(t) {
      return new (t || FontManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_external_google_google_fonts_api_service__WEBPACK_IMPORTED_MODULE_1__["GoogleFontsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_font_font_service__WEBPACK_IMPORTED_MODULE_2__["FontApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_head_uri_loader_head_uri_loader_service__WEBPACK_IMPORTED_MODULE_3__["HeadUriLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]));
    };

    FontManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FontManagerService,
      factory: FontManagerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontManagerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _external_google_google_fonts_api_service__WEBPACK_IMPORTED_MODULE_1__["GoogleFontsApiService"]
        }, {
          type: _api_font_font_service__WEBPACK_IMPORTED_MODULE_2__["FontApiService"]
        }, {
          type: _head_uri_loader_head_uri_loader_service__WEBPACK_IMPORTED_MODULE_3__["HeadUriLoaderService"]
        }, {
          type: _logger_logger_service__WEBPACK_IMPORTED_MODULE_5__["LoggerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/head-uri-loader/head-uri-loader.service.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/services/head-uri-loader/head-uri-loader.service.ts ***!
    \*********************************************************************/

  /*! exports provided: HeadUriLoaderService */

  /***/
  function srcAppServicesHeadUriLoaderHeadUriLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeadUriLoaderService", function () {
      return HeadUriLoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _models_ui_font_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/ui-font.model */
    "./src/app/models/ui-font.model.ts");

    var HeadUriLoaderService = /*#__PURE__*/function () {
      function HeadUriLoaderService(rendererFactory, document) {
        _classCallCheck(this, HeadUriLoaderService);

        this.document = document;
        this.fontBaseUrl = 'https://fonts.googleapis.com/css2?family=';
        this.fontNameSeparator = '&family=';
        this.fontBaseUrlParam = '&display=swap'; // Renderer2 can't be injected (usually used in a Component), so create using factory

        this.renderer = rendererFactory.createRenderer(null, null);
      }

      _createClass(HeadUriLoaderService, [{
        key: "loadFontsLink",
        value: function loadFontsLink() {
          // construct the href string for the link element that will be appended to <head>
          this.fontLinkUrl = this.fontBaseUrl;
          this.fontLinkUrl += _models_ui_font_model__WEBPACK_IMPORTED_MODULE_2__["fonts"].map(function (font) {
            return font.hrefId;
          }).join(this.fontNameSeparator);
          this.fontLinkUrl += this.fontBaseUrlParam;
          console.log('** fontLinkUrl: ' + this.fontLinkUrl); // construct the link element to append

          var fontLink = this.renderer.createElement('link');
          fontLink.type = 'text/css';
          fontLink.rel = 'stylesheet';
          fontLink.href = this.fontLinkUrl;
          fontLink.onload = this.onloadCallback.bind(this, ['fontLink']);
          fontLink.onerror = this.onloadCallback.bind(this, ['fontLink Error']); // append <link> to <head>

          this.attachToHead(fontLink);
        }
      }, {
        key: "attachToHead",
        value: function attachToHead(element) {
          var head = this.document.head || this.document.getElementsByTagName('head')[0];
          head.appendChild(element);
        }
      }, {
        key: "onloadCallback",
        value: function onloadCallback(args) {
          console.log('** onloadCallback: ' + args[0]);
        }
      }]);

      return HeadUriLoaderService;
    }();

    HeadUriLoaderService.ɵfac = function HeadUriLoaderService_Factory(t) {
      return new (t || HeadUriLoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    HeadUriLoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HeadUriLoaderService,
      factory: HeadUriLoaderService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadUriLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/logger/logger.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/logger/logger.service.ts ***!
    \***************************************************/

  /*! exports provided: LoggerService */

  /***/
  function srcAppServicesLoggerLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
      return LoggerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // tslint:disable: no-console


    var LoggerService = function LoggerService() {
      _classCallCheck(this, LoggerService);
    };

    LoggerService.ɵfac = function LoggerService_Factory(t) {
      return new (t || LoggerService)();
    };

    LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggerService,
      factory: LoggerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/server-test/server-test.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/server-test/server-test.service.ts ***!
    \*************************************************************/

  /*! exports provided: ServerTestService */

  /***/
  function srcAppServicesServerTestServerTestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServerTestService", function () {
      return ServerTestService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _server_app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../server/app/routes */
    "./server/app/routes.ts"); // shared from backend


    var ServerTestService = /*#__PURE__*/function () {
      function ServerTestService(http) {
        _classCallCheck(this, ServerTestService);

        this.http = http;
      }

      _createClass(ServerTestService, [{
        key: "getServerTestData$",
        value: function getServerTestData$() {
          console.log('**** service getServerTestData()');
          return this.http.get(_server_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"].api._root + _server_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"].api.test);
        }
      }]);

      return ServerTestService;
    }();

    ServerTestService.ɵfac = function ServerTestService_Factory(t) {
      return new (t || ServerTestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ServerTestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServerTestService,
      factory: ServerTestService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerTestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/animated-checkmark-svg/animated-checkmark-svg.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/shared/components/animated-checkmark-svg/animated-checkmark-svg.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: AnimatedCheckmarkSvgComponent */

  /***/
  function srcAppSharedComponentsAnimatedCheckmarkSvgAnimatedCheckmarkSvgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimatedCheckmarkSvgComponent", function () {
      return AnimatedCheckmarkSvgComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var snapsvg_cjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! snapsvg-cjs */
    "./node_modules/snapsvg-cjs/dist/snap.svg-cjs.js");
    /* harmony import */


    var snapsvg_cjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(snapsvg_cjs__WEBPACK_IMPORTED_MODULE_1__); // load snapsvg with types
    //declare var mina: any; // snapsvg animation


    var AnimatedCheckmarkSvgComponent = /*#__PURE__*/function () {
      function AnimatedCheckmarkSvgComponent() {
        _classCallCheck(this, AnimatedCheckmarkSvgComponent);

        this.htmlId = '';
        this.checked = false;
        this.time = 80;
        this.midTr = mina.easein;
        this.lastTr = mina.easeout;
      }

      _createClass(AnimatedCheckmarkSvgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // const s = Snap('#snapSvg');
          // const c = s.circle(50, 50, 50);
          // c.animate({r:10}, 2000);    
          // c.attr({
          //   fill: 'red',
          //   stroke: 'yellow',
          //   strokeWidth: 5
          // });
          // this.pathUn = Snap.select('#CheckedPath_un');
          // this.pathMid = Snap.select('#CheckedPath_mid');
          // this.pathChk = Snap.select('#CheckedPath_chk');
          //debugger;
          this.pathUn = Snap.select('.animated-checkmark-unchecked');
          this.pathMid = Snap.select('.animated-checkmark-midchecked');
          this.pathChk = Snap.select('.animated-checkmark-checked');
          this.dUn = this.pathUn.node.getAttribute('d');
          this.dMid = this.pathMid.node.getAttribute('d');
          this.dChk = this.pathChk.node.getAttribute('d'); // var toUnchk = () => { this.pathUn.animate({ d: this.dUn }, 200, mina.easein, toMid1); }
          // var toMid1 = () => { this.pathUn.animate({ d: this.dMid }, 200, mina.easeout, toChk); }
          // var toChk = () => { this.pathUn.animate({ d: this.dChk }, 200, mina.easein, toMid2); }
          // var toMid2 = () => { this.pathUn.animate({ d: this.dMid }, 200, mina.easeout, toUnchk); }
          // var transitionChecked = this.animate.bind(this, )
          //toMid1();
        }
      }, {
        key: "animate",
        value: function animate() {
          if (this.checked) {
            this.transitionUnchecked();
          } else {
            this.transitionChecked();
          }

          this.checked = !this.checked;
        }
      }, {
        key: "transitionChecked",
        value: function transitionChecked() {
          var _this5 = this;

          var toMid1 = function toMid1() {
            _this5.pathUn.animate({
              d: _this5.dMid
            }, _this5.time, _this5.midTr, toChk);
          };

          var toChk = function toChk() {
            _this5.pathUn.animate({
              d: _this5.dChk
            }, _this5.time, _this5.lastTr);
          };

          toMid1(); // let f = this.ani.bind(this, [this.dChk, this.time]);
          // debugger;
          // this.ani(this.dMid, this.time, f);
        }
      }, {
        key: "transitionUnchecked",
        value: function transitionUnchecked() {
          var _this6 = this;

          var toMid2 = function toMid2() {
            _this6.pathUn.animate({
              d: _this6.dMid
            }, _this6.time, _this6.midTr, toUnchk);
          };

          var toUnchk = function toUnchk() {
            _this6.pathUn.animate({
              d: _this6.dUn
            }, _this6.time, _this6.lastTr);
          };

          toMid2();
        }
      }, {
        key: "ani",
        value: function ani(d, time, callback) {
          debugger;

          if (callback) {
            this.pathUn.animate({
              d: d
            }, time, mina.linear, callback);
          } else {
            this.pathUn.animate({
              d: d
            }, time, mina.linear);
          }
        }
      }]);

      return AnimatedCheckmarkSvgComponent;
    }();

    AnimatedCheckmarkSvgComponent.ɵfac = function AnimatedCheckmarkSvgComponent_Factory(t) {
      return new (t || AnimatedCheckmarkSvgComponent)();
    };

    AnimatedCheckmarkSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnimatedCheckmarkSvgComponent,
      selectors: [["app-animated-checkmark-svg"]],
      inputs: {
        htmlId: "htmlId",
        size: "size"
      },
      decls: 13,
      vars: 1,
      consts: [[1, "svg-container", 3, "id", "click"], ["width", "1e3", "height", "1e3", "version", "1.1", "viewBox", "0 0 264.6 264.6", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m264.6 264.6h-264.6v-264.6h264.6v264.6z", "fill", "#de2726"], ["id", "CheckedPath_un", "d", "m2.375e-6 264.6h264.6v-264.6h-264.6v168.2z", "fill", "#ebebeb", 1, "animated-checkmark-unchecked"], ["width", "1e3", "height", "1e3", "version", "1.1", "viewBox", "0 0 264.6 264.6", "xmlns", "http://www.w3.org/2000/svg", 1, "hidden"], ["d", "m264.6 264.6h-264.6v-264.6h264.6v264.6z", "display", "inline", "fill", "#de2726"], ["id", "CheckedPath_mid", "d", "m101.5 186.9 60.63-0.4676 0.9351-108.8-18.55 0.1559-0.9352 90.09-42.08 0.3117z", "display", "inline", "fill", "#ebebeb", 1, "animated-checkmark-midchecked"], ["transform", "translate(0 0)"], ["d", "m264.6 264.58h-264.6v-297.02h264.6v232.18z", "display", "inline", "fill", "#de2726"], ["id", "CheckedPath_chk", "d", "m11.5 136.48 86.4 85.08 155.2-152.5-26.45-26.01-128.7 126.1-59.95-59.07z", "display", "inline", "fill", "#ebebeb", 1, "animated-checkmark-checked"]],
      template: function AnimatedCheckmarkSvgComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnimatedCheckmarkSvgComponent_Template_button_click_0_listener() {
            return ctx.animate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.htmlId);
        }
      },
      styles: [".hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  \n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n  \n}\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   button.svg-container[_ngcontent-%COMP%] {\n  width: 10.25rem;\n  height: 10.25rem;\n  padding: 0;\n  margin: 0;\n  border: none;\n  border-radius: 1.28125rem;\n}\n[_nghost-%COMP%]   button.svg-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 10.25rem;\n  height: 10.25rem;\n  border-radius: 1.28125rem;\n}\n[_nghost-%COMP%]   button.svg-container[_ngcontent-%COMP%]   svg.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5pbWF0ZWQtY2hlY2ttYXJrLXN2Zy9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXHNjc3NcXF91dGlsaXRpZXMuc2NzcyIsIi4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5pbWF0ZWQtY2hlY2ttYXJrLXN2Zy9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXHNjc3NcXF9jbGFzc2VzLnNjc3MiLCIuLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FuaW1hdGVkLWNoZWNrbWFyay1zdmcvYW5pbWF0ZWQtY2hlY2ttYXJrLXN2Zy5jb21wb25lbnQuc2NzcyIsIi4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5pbWF0ZWQtY2hlY2ttYXJrLXN2Zy9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxhbmltYXRlZC1jaGVja21hcmstc3ZnXFxhbmltYXRlZC1jaGVja21hcmstc3ZnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7OztDQUFBO0FBeUJBOztDQUFBO0FBaUJBOztDQUFBO0FDNUNBO0VBQ0UsYUFBQTtBQ2FGO0FEVkE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUE2QixhQUFBO0VBQzdCLDhCQUFBO0VBQ0EsbUJBQUE7RUFBcUIsZUFBQTtBQ2V2QjtBQ3RCQTtFQUNFLGNBQUE7QUR5QkY7QUN2QkU7RUFDRSxlQU5ZO0VBT1osZ0JBUFk7RUFRWixVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBRHlCSjtBQ3ZCSTtFQUNFLGVBZFU7RUFlVixnQkFmVTtFQWdCVix5QkFBQTtBRHlCTjtBQ3hCTTtFQUNFLGFBQUE7QUQwQlIiLCJmaWxlIjoiLi4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hbmltYXRlZC1jaGVja21hcmstc3ZnL2FuaW1hdGVkLWNoZWNrbWFyay1zdmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XHJcblxyXG4vKipcclxuICBDb252ZXJ0cyB1bml0bGVzcyBudW1iZXJzIG9yIHB4IHZhbHVlcyB0byByZW1cclxuICBFeGFtcGxlOlxyXG4gICAgd2lkdGg6IHB4VG9SZW0oNDhweCk7ICAgICAgICAgPT4gd2lkdGg6IDNyZW07XHJcbiAgICBwYWRkaW5nOiBweFRvUmVtKDggMTYgMjQgMzIpOyA9PiBwYWRkaW5nOiAwLjVyZW0gMXJlbSAxLjVyZW0gMnJlbTtcclxuKi9cclxuQGZ1bmN0aW9uIHB4VG9SZW0oJHB4VmFsdWVzKSB7XHJcbiAgJHJlbVZhbHVlczogKCk7IC8vIGVtcHR5IGxpc3RcclxuICAkYmFzZTogc3RyaXBVbml0KCRiYXNlLWZvbnQtc2l6ZSk7XHJcblxyXG4gIEBlYWNoICRweFZhbHVlIGluICRweFZhbHVlcyB7XHJcbiAgICBAaWYgdHlwZS1vZigkcHhWYWx1ZSkgIT0gJ251bWJlcicgb3IgKG5vdCB1bml0bGVzcygkcHhWYWx1ZSkgYW5kIHVuaXQoJHB4VmFsdWUpICE9ICdweCcpIHtcclxuICAgICAgQGVycm9yIFwiTnVtYmVyIG9yIHB4IHZhbHVlIHJlcXVpcmVkLCBpbnZhbGlkIGlucHV0OiAjeyRweFZhbHVlfVwiO1xyXG4gICAgfVxyXG4gICAgJHB4VmFsdWU6IHN0cmlwVW5pdCgkcHhWYWx1ZSk7IC8vIHJlbW92ZSAncHgnIHVuaXQgaWYgcHJlc2VudFxyXG4gICAgJHJlbVZhbHVlczogYXBwZW5kKCRyZW1WYWx1ZXMsICAoJHB4VmFsdWUgLyAkYmFzZSkgKyAwcmVtKTtcclxuICB9XHJcblxyXG4gIC8vIGZvciBhIHNpbmdsZSB2YWx1ZSByZXR1cm4gdGhlIG51bWVyaWMgdmFyaWFibGUgaW5zdGVhZCBvZiBhIHN0cmluZyB0byBhbGxvdyB1c2UgaW4gY2FsY3VsYXRpb25zXHJcbiAgQGlmIGxlbmd0aCgkcmVtVmFsdWVzID09IDEpIHtcclxuICAgIEByZXR1cm4gbnRoKCRyZW1WYWx1ZXMsIDEpO1xyXG4gIH1cclxuICBAcmV0dXJuICRyZW1WYWx1ZXM7IC8vICN7JHJlbVZhbHVlc307XHJcbn1cclxuXHJcbi8qKlxyXG4gIFJlbW92ZSB1bml0IGZyb20gdmFsdWUgbGlzdFxyXG4qL1xyXG5AZnVuY3Rpb24gc3RyaXBVbml0cygkdmFsdWVzKSB7XHJcbiAgJHVuaXRsZXNzOiAoKTtcclxuXHJcbiAgQGlmIGxlbmd0aCgkbGlzdDogJHZhbHVlcykgPT0gMSB7XHJcbiAgICBAcmV0dXJuIHN0cmlwVW5pdCgkdmFsdWVzKTtcclxuICB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGVhY2ggJHZhbCBpbiAkdmFsdWVzIHsgICAgICBcclxuICAgICAgJHVuaXRsZXNzOiBhcHBlbmQoJHVuaXRsZXNzLCBzdHJpcFVuaXQoJHZhbCkpO1xyXG4gICAgfVxyXG4gICAgQHJldHVybiAkdW5pdGxlc3M7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICBSZW1vdmUgdW5pdCBmcm9tIHZhbHVlIGUuZy4gMTZweCA9PiAxNiwgMnJlbSA9PiAyXHJcbiovXHJcbkBmdW5jdGlvbiBzdHJpcFVuaXQoJHZhbHVlKSB7XHJcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnbnVtYmVyJyB7XHJcbiAgICBAZXJyb3IgXCJOdW1iZXIgdmFsdWUgcmVxdWlyZWQsIGludmFsaWQgaW5wdXQ6ICN7JHZhbHVlfVwiO1xyXG4gIH1cclxuICAkdW5pdGxlc3M6ICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7IC8vIHJlbW92ZSB1bml0IGRpdmlkaW5nIGJ5IDF1bml0XHJcbiAgQHJldHVybiAkdW5pdGxlc3M7XHJcbn0iLCIuaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzdWFsbHktaGlkZGVuIHsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxcHg7IFxyXG4gIHdpZHRoOiAxcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7IC8qIElFNiwgSUU3ICovXHJcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIGFkZGVkIGxpbmUgKi9cclxufSIsIi8qKlxuICBDb252ZXJ0cyB1bml0bGVzcyBudW1iZXJzIG9yIHB4IHZhbHVlcyB0byByZW1cbiAgRXhhbXBsZTpcbiAgICB3aWR0aDogcHhUb1JlbSg0OHB4KTsgICAgICAgICA9PiB3aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nOiBweFRvUmVtKDggMTYgMjQgMzIpOyA9PiBwYWRkaW5nOiAwLjVyZW0gMXJlbSAxLjVyZW0gMnJlbTtcbiovXG4vKipcbiAgUmVtb3ZlIHVuaXQgZnJvbSB2YWx1ZSBsaXN0XG4qL1xuLyoqXG4gIFJlbW92ZSB1bml0IGZyb20gdmFsdWUgZS5nLiAxNnB4ID0+IDE2LCAycmVtID0+IDJcbiovXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc3VhbGx5LWhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xuICAvKiBJRTYsIElFNyAqL1xuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qIGFkZGVkIGxpbmUgKi9cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IGJ1dHRvbi5zdmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwLjI1cmVtO1xuICBoZWlnaHQ6IDEwLjI1cmVtO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS4yODEyNXJlbTtcbn1cbjpob3N0IGJ1dHRvbi5zdmctY29udGFpbmVyIHN2ZyB7XG4gIHdpZHRoOiAxMC4yNXJlbTtcbiAgaGVpZ2h0OiAxMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMS4yODEyNXJlbTtcbn1cbjpob3N0IGJ1dHRvbi5zdmctY29udGFpbmVyIHN2Zy5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufSIsIkBpbXBvcnQgJ35zcmMvc2Nzcy9jb21tb24taW1wb3J0cyc7XHJcblxyXG4kY2hlY2ttYXJrU2l6ZTogcHhUb1JlbSgxNjRweCk7XHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gIGJ1dHRvbi5zdmctY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAkY2hlY2ttYXJrU2l6ZTtcclxuICAgIGhlaWdodDogJGNoZWNrbWFya1NpemU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogJGNoZWNrbWFya1NpemUgLyA4O1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIHdpZHRoOiAkY2hlY2ttYXJrU2l6ZTtcclxuICAgICAgaGVpZ2h0OiAkY2hlY2ttYXJrU2l6ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogJGNoZWNrbWFya1NpemUgLyA4O1xyXG4gICAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAvLyBpbWFnZSB7XHJcbiAgICAgIC8vICAgd2lkdGg6IDUwJTtcclxuICAgICAgLy8gICBoZWlnaHQ6IDUwJTtcclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimatedCheckmarkSvgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-animated-checkmark-svg',
          templateUrl: './animated-checkmark-svg.component.html',
          styleUrls: ['./animated-checkmark-svg.component.scss']
        }]
      }], function () {
        return [];
      }, {
        htmlId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/animated-cube/animated-cube.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shared/components/animated-cube/animated-cube.component.ts ***!
    \****************************************************************************/

  /*! exports provided: AnimatedCubeComponent */

  /***/
  function srcAppSharedComponentsAnimatedCubeAnimatedCubeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnimatedCubeComponent", function () {
      return AnimatedCubeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnimatedCubeComponent = /*#__PURE__*/function () {
      function AnimatedCubeComponent() {
        _classCallCheck(this, AnimatedCubeComponent);
      }

      _createClass(AnimatedCubeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnimatedCubeComponent;
    }();

    AnimatedCubeComponent.ɵfac = function AnimatedCubeComponent_Factory(t) {
      return new (t || AnimatedCubeComponent)();
    };

    AnimatedCubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnimatedCubeComponent,
      selectors: [["app-animated-cube"]],
      decls: 14,
      vars: 0,
      consts: [[1, "scene-3d"], [1, "cube"], [1, "face", "front"], [1, "face", "right"], [1, "face", "left"], [1, "face", "back"], [1, "face", "top"], [1, "face", "bottom"]],
      template: function AnimatedCubeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "front");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "top");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "bottom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  \n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n  \n}\n[_nghost-%COMP%] {\n  display: block;\n  margin: 4em;\n}\n[_nghost-%COMP%]   .scene-3d[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 5rem;\n  perspective: 15rem;\n}\n[_nghost-%COMP%]   .cube[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  -webkit-animation: spin-vertical 5s linear infinite;\n          animation: spin-vertical 5s linear infinite;\n}\n@-webkit-keyframes spin-horizontal {\n  0% {\n    transform: translateZ(0rem) rotateY(0deg);\n  }\n  100% {\n    transform: translateZ(0rem) rotateY(360deg);\n  }\n}\n@keyframes spin-horizontal {\n  0% {\n    transform: translateZ(0rem) rotateY(0deg);\n  }\n  100% {\n    transform: translateZ(0rem) rotateY(360deg);\n  }\n}\n@-webkit-keyframes spin-vertical {\n  from {\n    transform: translateZ(0rem) rotateX(360deg) rotateY(0deg);\n  }\n  to {\n    transform: translateZ(0rem) rotateX(0deg) rotateY(360deg);\n  }\n}\n@keyframes spin-vertical {\n  from {\n    transform: translateZ(0rem) rotateX(360deg) rotateY(0deg);\n  }\n  to {\n    transform: translateZ(0rem) rotateX(0deg) rotateY(360deg);\n  }\n}\n[_nghost-%COMP%]   .cube[_ngcontent-%COMP%]   .face[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(222, 39, 38, 0.51);\n  border: 1px solid #ebebeb;\n  text-align: center;\n  line-height: 5rem;\n}\n[_nghost-%COMP%]   .cube[_ngcontent-%COMP%]   .face.front[_ngcontent-%COMP%] {\n  transform: rotateY(0deg) translateZ(2.5rem);\n}\n[_nghost-%COMP%]   .cube[_ngcontent-%COMP%]   .face.left[_ngcontent-%COMP%] {\n  transform: rotateY(-90deg) translateZ(2.5rem);\n}\n[_nghost-%COMP%]   .cube[_ngcontent-%COMP%]   .face.right[_ngcontent-%COMP%] {\n  transform: rotateY(90deg) translateZ(2.5rem);\n}\n[_nghost-%COMP%]   .cube[_ngcontent-%COMP%]   .face.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg) translateZ(2.5rem);\n}\n[_nghost-%COMP%]   .cube[_ngcontent-%COMP%]   .face.top[_ngcontent-%COMP%] {\n  transform: rotateX(90deg) translateZ(2.5rem);\n}\n[_nghost-%COMP%]   .cube[_ngcontent-%COMP%]   .face.bottom[_ngcontent-%COMP%] {\n  transform: rotateX(-90deg) translateZ(2.5rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5pbWF0ZWQtY3ViZS9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXHNjc3NcXF91dGlsaXRpZXMuc2NzcyIsIi4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5pbWF0ZWQtY3ViZS9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXHNjc3NcXF9jbGFzc2VzLnNjc3MiLCIuLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FuaW1hdGVkLWN1YmUvYW5pbWF0ZWQtY3ViZS5jb21wb25lbnQuc2NzcyIsIi4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYW5pbWF0ZWQtY3ViZS9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxhbmltYXRlZC1jdWJlXFxhbmltYXRlZC1jdWJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7OztDQUFBO0FBeUJBOztDQUFBO0FBaUJBOztDQUFBO0FDNUNBO0VBQ0UsYUFBQTtBQ2FGO0FEVkE7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUE2QixhQUFBO0VBQzdCLDhCQUFBO0VBQ0EsbUJBQUE7RUFBcUIsZUFBQTtBQ2V2QjtBQ3hCQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FEMkJGO0FDdEJFO0VBQ0UsV0FKUztFQUtULFlBTFM7RUFNVCxrQkFBQTtBRHdCSjtBQ3JCRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSw0QkFBQTtFQUVBLG1EQUFBO1VBQUEsMkNBQUE7QURxQko7QUNwQkk7RUFDRTtJQUFLLHlDQUFBO0VEdUJUO0VDdEJJO0lBQU8sMkNBQUE7RUR5Qlg7QUFDRjtBQzVCSTtFQUNFO0lBQUsseUNBQUE7RUR1QlQ7RUN0Qkk7SUFBTywyQ0FBQTtFRHlCWDtBQUNGO0FDeEJJO0VBQ0U7SUFBTyx5REFBQTtFRDJCWDtFQzFCSTtJQUFLLHlEQUFBO0VENkJUO0FBQ0Y7QUNoQ0k7RUFDRTtJQUFPLHlEQUFBO0VEMkJYO0VDMUJJO0lBQUsseURBQUE7RUQ2QlQ7QUFDRjtBQzNCSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFqQ087QUQ4RGI7QUMzQk07RUFBWSwyQ0FBQTtBRDhCbEI7QUM3Qk07RUFBWSw2Q0FBQTtBRGdDbEI7QUMvQk07RUFBWSw0Q0FBQTtBRGtDbEI7QUNqQ007RUFBWSw2Q0FBQTtBRG9DbEI7QUNuQ007RUFBWSw0Q0FBQTtBRHNDbEI7QUNyQ007RUFBWSw2Q0FBQTtBRHdDbEIiLCJmaWxlIjoiLi4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9hbmltYXRlZC1jdWJlL2FuaW1hdGVkLWN1YmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XHJcblxyXG4vKipcclxuICBDb252ZXJ0cyB1bml0bGVzcyBudW1iZXJzIG9yIHB4IHZhbHVlcyB0byByZW1cclxuICBFeGFtcGxlOlxyXG4gICAgd2lkdGg6IHB4VG9SZW0oNDhweCk7ICAgICAgICAgPT4gd2lkdGg6IDNyZW07XHJcbiAgICBwYWRkaW5nOiBweFRvUmVtKDggMTYgMjQgMzIpOyA9PiBwYWRkaW5nOiAwLjVyZW0gMXJlbSAxLjVyZW0gMnJlbTtcclxuKi9cclxuQGZ1bmN0aW9uIHB4VG9SZW0oJHB4VmFsdWVzKSB7XHJcbiAgJHJlbVZhbHVlczogKCk7IC8vIGVtcHR5IGxpc3RcclxuICAkYmFzZTogc3RyaXBVbml0KCRiYXNlLWZvbnQtc2l6ZSk7XHJcblxyXG4gIEBlYWNoICRweFZhbHVlIGluICRweFZhbHVlcyB7XHJcbiAgICBAaWYgdHlwZS1vZigkcHhWYWx1ZSkgIT0gJ251bWJlcicgb3IgKG5vdCB1bml0bGVzcygkcHhWYWx1ZSkgYW5kIHVuaXQoJHB4VmFsdWUpICE9ICdweCcpIHtcclxuICAgICAgQGVycm9yIFwiTnVtYmVyIG9yIHB4IHZhbHVlIHJlcXVpcmVkLCBpbnZhbGlkIGlucHV0OiAjeyRweFZhbHVlfVwiO1xyXG4gICAgfVxyXG4gICAgJHB4VmFsdWU6IHN0cmlwVW5pdCgkcHhWYWx1ZSk7IC8vIHJlbW92ZSAncHgnIHVuaXQgaWYgcHJlc2VudFxyXG4gICAgJHJlbVZhbHVlczogYXBwZW5kKCRyZW1WYWx1ZXMsICAoJHB4VmFsdWUgLyAkYmFzZSkgKyAwcmVtKTtcclxuICB9XHJcblxyXG4gIC8vIGZvciBhIHNpbmdsZSB2YWx1ZSByZXR1cm4gdGhlIG51bWVyaWMgdmFyaWFibGUgaW5zdGVhZCBvZiBhIHN0cmluZyB0byBhbGxvdyB1c2UgaW4gY2FsY3VsYXRpb25zXHJcbiAgQGlmIGxlbmd0aCgkcmVtVmFsdWVzID09IDEpIHtcclxuICAgIEByZXR1cm4gbnRoKCRyZW1WYWx1ZXMsIDEpO1xyXG4gIH1cclxuICBAcmV0dXJuICRyZW1WYWx1ZXM7IC8vICN7JHJlbVZhbHVlc307XHJcbn1cclxuXHJcbi8qKlxyXG4gIFJlbW92ZSB1bml0IGZyb20gdmFsdWUgbGlzdFxyXG4qL1xyXG5AZnVuY3Rpb24gc3RyaXBVbml0cygkdmFsdWVzKSB7XHJcbiAgJHVuaXRsZXNzOiAoKTtcclxuXHJcbiAgQGlmIGxlbmd0aCgkbGlzdDogJHZhbHVlcykgPT0gMSB7XHJcbiAgICBAcmV0dXJuIHN0cmlwVW5pdCgkdmFsdWVzKTtcclxuICB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGVhY2ggJHZhbCBpbiAkdmFsdWVzIHsgICAgICBcclxuICAgICAgJHVuaXRsZXNzOiBhcHBlbmQoJHVuaXRsZXNzLCBzdHJpcFVuaXQoJHZhbCkpO1xyXG4gICAgfVxyXG4gICAgQHJldHVybiAkdW5pdGxlc3M7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICBSZW1vdmUgdW5pdCBmcm9tIHZhbHVlIGUuZy4gMTZweCA9PiAxNiwgMnJlbSA9PiAyXHJcbiovXHJcbkBmdW5jdGlvbiBzdHJpcFVuaXQoJHZhbHVlKSB7XHJcbiAgQGlmIHR5cGUtb2YoJHZhbHVlKSAhPSAnbnVtYmVyJyB7XHJcbiAgICBAZXJyb3IgXCJOdW1iZXIgdmFsdWUgcmVxdWlyZWQsIGludmFsaWQgaW5wdXQ6ICN7JHZhbHVlfVwiO1xyXG4gIH1cclxuICAkdW5pdGxlc3M6ICR2YWx1ZSAvICgkdmFsdWUgKiAwICsgMSk7IC8vIHJlbW92ZSB1bml0IGRpdmlkaW5nIGJ5IDF1bml0XHJcbiAgQHJldHVybiAkdW5pdGxlc3M7XHJcbn0iLCIuaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udmlzdWFsbHktaGlkZGVuIHsgXHJcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxcHg7IFxyXG4gIHdpZHRoOiAxcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjbGlwOiByZWN0KDFweCAxcHggMXB4IDFweCk7IC8qIElFNiwgSUU3ICovXHJcbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIGFkZGVkIGxpbmUgKi9cclxufSIsIi8qKlxuICBDb252ZXJ0cyB1bml0bGVzcyBudW1iZXJzIG9yIHB4IHZhbHVlcyB0byByZW1cbiAgRXhhbXBsZTpcbiAgICB3aWR0aDogcHhUb1JlbSg0OHB4KTsgICAgICAgICA9PiB3aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nOiBweFRvUmVtKDggMTYgMjQgMzIpOyA9PiBwYWRkaW5nOiAwLjVyZW0gMXJlbSAxLjVyZW0gMnJlbTtcbiovXG4vKipcbiAgUmVtb3ZlIHVuaXQgZnJvbSB2YWx1ZSBsaXN0XG4qL1xuLyoqXG4gIFJlbW92ZSB1bml0IGZyb20gdmFsdWUgZS5nLiAxNnB4ID0+IDE2LCAycmVtID0+IDJcbiovXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnZpc3VhbGx5LWhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgxcHggMXB4IDFweCAxcHgpO1xuICAvKiBJRTYsIElFNyAqL1xuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qIGFkZGVkIGxpbmUgKi9cbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA0ZW07XG59XG46aG9zdCAuc2NlbmUtM2Qge1xuICB3aWR0aDogNXJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBwZXJzcGVjdGl2ZTogMTVyZW07XG59XG46aG9zdCAuY3ViZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYW5pbWF0aW9uOiBzcGluLXZlcnRpY2FsIDVzIGxpbmVhciBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgc3Bpbi1ob3Jpem9udGFsIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcmVtKSByb3RhdGVZKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcmVtKSByb3RhdGVZKDM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc3Bpbi12ZXJ0aWNhbCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcmVtKSByb3RhdGVYKDM2MGRlZykgcm90YXRlWSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDByZW0pIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgzNjBkZWcpO1xuICB9XG59XG46aG9zdCAuY3ViZSAuZmFjZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDM5LCAzOCwgMC41MSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmViZWI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDVyZW07XG59XG46aG9zdCAuY3ViZSAuZmFjZS5mcm9udCB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKSB0cmFuc2xhdGVaKDIuNXJlbSk7XG59XG46aG9zdCAuY3ViZSAuZmFjZS5sZWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC05MGRlZykgdHJhbnNsYXRlWigyLjVyZW0pO1xufVxuOmhvc3QgLmN1YmUgLmZhY2UucmlnaHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoOTBkZWcpIHRyYW5zbGF0ZVooMi41cmVtKTtcbn1cbjpob3N0IC5jdWJlIC5mYWNlLmJhY2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKSB0cmFuc2xhdGVaKDIuNXJlbSk7XG59XG46aG9zdCAuY3ViZSAuZmFjZS50b3Age1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpIHRyYW5zbGF0ZVooMi41cmVtKTtcbn1cbjpob3N0IC5jdWJlIC5mYWNlLmJvdHRvbSB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooMi41cmVtKTtcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL2NvbW1vbi1pbXBvcnRzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDRlbTtcclxuXHJcbiAgJGN1YmVTaXplOiA1cmVtO1xyXG4gICRwZXJzcGVjdGl2ZTogJGN1YmVTaXplKjM7XHJcbiAgJHRyYW5zbGF0ZVo6IDByZW07XHJcbiAgLnNjZW5lLTNkIHtcclxuICAgIHdpZHRoOiAkY3ViZVNpemU7XHJcbiAgICBoZWlnaHQ6ICRjdWJlU2l6ZTtcclxuICAgIHBlcnNwZWN0aXZlOiAkY3ViZVNpemUqMztcclxuICB9XHJcblxyXG4gIC5jdWJlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG5cclxuICAgIGFuaW1hdGlvbjogc3Bpbi12ZXJ0aWNhbCA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBAa2V5ZnJhbWVzIHNwaW4taG9yaXpvbnRhbCB7XHJcbiAgICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKCR0cmFuc2xhdGVaKSByb3RhdGVZKDBkZWcpOyB9XHJcbiAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooJHRyYW5zbGF0ZVopIHJvdGF0ZVkoMzYwZGVnKTsgfVxyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyBzcGluLXZlcnRpY2FsIHtcclxuICAgICAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigkdHJhbnNsYXRlWikgcm90YXRlWCgzNjBkZWcpIHJvdGF0ZVkoMGRlZyk7IH1cclxuICAgICAgdG8geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooJHRyYW5zbGF0ZVopIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgzNjBkZWcpOyB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZhY2Uge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLDM5LDM4LDAuNTEpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkZGl2ZS13aGl0ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogJGN1YmVTaXplO1xyXG5cclxuICAgICAgJi5mcm9udCAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVooJGN1YmVTaXplLzIpOyB9O1xyXG4gICAgICAmLmxlZnQgICAgeyB0cmFuc2Zvcm06IHJvdGF0ZVkoLTkwZGVnKSB0cmFuc2xhdGVaKCRjdWJlU2l6ZS8yKTsgfTtcclxuICAgICAgJi5yaWdodCAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKDkwZGVnKSB0cmFuc2xhdGVaKCRjdWJlU2l6ZS8yKTsgfTtcclxuICAgICAgJi5iYWNrICAgIHsgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZykgdHJhbnNsYXRlWigkY3ViZVNpemUvMik7IH07XHJcbiAgICAgICYudG9wICAgICB7IHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZykgdHJhbnNsYXRlWigkY3ViZVNpemUvMik7IH07XHJcbiAgICAgICYuYm90dG9tICB7IHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpIHRyYW5zbGF0ZVooJGN1YmVTaXplLzIpOyB9O1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimatedCubeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-animated-cube',
          templateUrl: './animated-cube.component.html',
          styleUrls: ['./animated-cube.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/components/form-controls/checkbox-svg/checkbox-svg.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/form-controls/checkbox-svg/checkbox-svg.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: CheckboxSvgComponent */

  /***/
  function srcAppSharedComponentsFormControlsCheckboxSvgCheckboxSvgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxSvgComponent", function () {
      return CheckboxSvgComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _animated_checkmark_svg_animated_checkmark_svg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../animated-checkmark-svg/animated-checkmark-svg.component */
    "./src/app/shared/components/animated-checkmark-svg/animated-checkmark-svg.component.ts");

    var CheckboxSvgComponent = /*#__PURE__*/function () {
      function CheckboxSvgComponent() {
        _classCallCheck(this, CheckboxSvgComponent);

        this.htmlId = '';
        this.uiLabel = '';
      }

      _createClass(CheckboxSvgComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CheckboxSvgComponent;
    }();

    CheckboxSvgComponent.ɵfac = function CheckboxSvgComponent_Factory(t) {
      return new (t || CheckboxSvgComponent)();
    };

    CheckboxSvgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckboxSvgComponent,
      selectors: [["app-checkbox-svg"]],
      inputs: {
        htmlId: "htmlId",
        uiLabel: "uiLabel"
      },
      decls: 4,
      vars: 4,
      consts: [[3, "id"], ["type", "checkbox", 3, "id"], [3, "for"]],
      template: function CheckboxSvgComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-checkmark-svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.htmlId + "_checkmark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.htmlId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.htmlId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.uiLabel);
        }
      },
      directives: [_animated_checkmark_svg_animated_checkmark_svg_component__WEBPACK_IMPORTED_MODULE_1__["AnimatedCheckmarkSvgComponent"]],
      styles: [".hidden[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]   [type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute !important;\n  height: 1px;\n  width: 1px;\n  overflow: hidden;\n  clip: rect(1px 1px 1px 1px);\n  \n  clip: rect(1px, 1px, 1px, 1px);\n  white-space: nowrap;\n  \n}\n[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   label[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS1jb250cm9scy9jaGVja2JveC1zdmcvRDpcXF9kZXZcXGRpdmUtaW5uLWRlbnZlclxcRGl2ZUlubjIwMjBcXHNlcnZlci8uLlxcc3JjXFxzY3NzXFxfdXRpbGl0aWVzLnNjc3MiLCIuLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0tY29udHJvbHMvY2hlY2tib3gtc3ZnL0Q6XFxfZGV2XFxkaXZlLWlubi1kZW52ZXJcXERpdmVJbm4yMDIwXFxzZXJ2ZXIvLi5cXHNyY1xcc2Nzc1xcX2NsYXNzZXMuc2NzcyIsIi4uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9ybS1jb250cm9scy9jaGVja2JveC1zdmcvY2hlY2tib3gtc3ZnLmNvbXBvbmVudC5zY3NzIiwiLi4vc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9mb3JtLWNvbnRyb2xzL2NoZWNrYm94LXN2Zy9EOlxcX2RldlxcZGl2ZS1pbm4tZGVudmVyXFxEaXZlSW5uMjAyMFxcc2VydmVyLy4uXFxzcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxmb3JtLWNvbnRyb2xzXFxjaGVja2JveC1zdmdcXGNoZWNrYm94LXN2Zy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTs7Ozs7Q0FBQTtBQXlCQTs7Q0FBQTtBQWlCQTs7Q0FBQTtBQzVDQTtFQUNFLGFBQUE7QUNhRjtBRFZBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFBNkIsYUFBQTtFQUM3Qiw4QkFBQTtFQUNBLG1CQUFBO0VBQXFCLGVBQUE7QUNldkI7QUN4QkE7RUFDRSxjQUFBO0FEMkJGO0FDdEJFO0VBQ0UsVUFBQTtBRHdCSiIsImZpbGUiOiIuLi9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Zvcm0tY29udHJvbHMvY2hlY2tib3gtc3ZnL2NoZWNrYm94LXN2Zy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcclxuXHJcbi8qKlxyXG4gIENvbnZlcnRzIHVuaXRsZXNzIG51bWJlcnMgb3IgcHggdmFsdWVzIHRvIHJlbVxyXG4gIEV4YW1wbGU6XHJcbiAgICB3aWR0aDogcHhUb1JlbSg0OHB4KTsgICAgICAgICA9PiB3aWR0aDogM3JlbTtcclxuICAgIHBhZGRpbmc6IHB4VG9SZW0oOCAxNiAyNCAzMik7ID0+IHBhZGRpbmc6IDAuNXJlbSAxcmVtIDEuNXJlbSAycmVtO1xyXG4qL1xyXG5AZnVuY3Rpb24gcHhUb1JlbSgkcHhWYWx1ZXMpIHtcclxuICAkcmVtVmFsdWVzOiAoKTsgLy8gZW1wdHkgbGlzdFxyXG4gICRiYXNlOiBzdHJpcFVuaXQoJGJhc2UtZm9udC1zaXplKTtcclxuXHJcbiAgQGVhY2ggJHB4VmFsdWUgaW4gJHB4VmFsdWVzIHtcclxuICAgIEBpZiB0eXBlLW9mKCRweFZhbHVlKSAhPSAnbnVtYmVyJyBvciAobm90IHVuaXRsZXNzKCRweFZhbHVlKSBhbmQgdW5pdCgkcHhWYWx1ZSkgIT0gJ3B4Jykge1xyXG4gICAgICBAZXJyb3IgXCJOdW1iZXIgb3IgcHggdmFsdWUgcmVxdWlyZWQsIGludmFsaWQgaW5wdXQ6ICN7JHB4VmFsdWV9XCI7XHJcbiAgICB9XHJcbiAgICAkcHhWYWx1ZTogc3RyaXBVbml0KCRweFZhbHVlKTsgLy8gcmVtb3ZlICdweCcgdW5pdCBpZiBwcmVzZW50XHJcbiAgICAkcmVtVmFsdWVzOiBhcHBlbmQoJHJlbVZhbHVlcywgICgkcHhWYWx1ZSAvICRiYXNlKSArIDByZW0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZm9yIGEgc2luZ2xlIHZhbHVlIHJldHVybiB0aGUgbnVtZXJpYyB2YXJpYWJsZSBpbnN0ZWFkIG9mIGEgc3RyaW5nIHRvIGFsbG93IHVzZSBpbiBjYWxjdWxhdGlvbnNcclxuICBAaWYgbGVuZ3RoKCRyZW1WYWx1ZXMgPT0gMSkge1xyXG4gICAgQHJldHVybiBudGgoJHJlbVZhbHVlcywgMSk7XHJcbiAgfVxyXG4gIEByZXR1cm4gJHJlbVZhbHVlczsgLy8gI3skcmVtVmFsdWVzfTtcclxufVxyXG5cclxuLyoqXHJcbiAgUmVtb3ZlIHVuaXQgZnJvbSB2YWx1ZSBsaXN0XHJcbiovXHJcbkBmdW5jdGlvbiBzdHJpcFVuaXRzKCR2YWx1ZXMpIHtcclxuICAkdW5pdGxlc3M6ICgpO1xyXG5cclxuICBAaWYgbGVuZ3RoKCRsaXN0OiAkdmFsdWVzKSA9PSAxIHtcclxuICAgIEByZXR1cm4gc3RyaXBVbml0KCR2YWx1ZXMpO1xyXG4gIH1cclxuICBAZWxzZSB7XHJcbiAgICBAZWFjaCAkdmFsIGluICR2YWx1ZXMgeyAgICAgIFxyXG4gICAgICAkdW5pdGxlc3M6IGFwcGVuZCgkdW5pdGxlc3MsIHN0cmlwVW5pdCgkdmFsKSk7XHJcbiAgICB9XHJcbiAgICBAcmV0dXJuICR1bml0bGVzcztcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gIFJlbW92ZSB1bml0IGZyb20gdmFsdWUgZS5nLiAxNnB4ID0+IDE2LCAycmVtID0+IDJcclxuKi9cclxuQGZ1bmN0aW9uIHN0cmlwVW5pdCgkdmFsdWUpIHtcclxuICBAaWYgdHlwZS1vZigkdmFsdWUpICE9ICdudW1iZXInIHtcclxuICAgIEBlcnJvciBcIk51bWJlciB2YWx1ZSByZXF1aXJlZCwgaW52YWxpZCBpbnB1dDogI3skdmFsdWV9XCI7XHJcbiAgfVxyXG4gICR1bml0bGVzczogJHZhbHVlIC8gKCR2YWx1ZSAqIDAgKyAxKTsgLy8gcmVtb3ZlIHVuaXQgZGl2aWRpbmcgYnkgMXVuaXRcclxuICBAcmV0dXJuICR1bml0bGVzcztcclxufSIsIi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi52aXN1YWxseS1oaWRkZW4geyBcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDFweDsgXHJcbiAgd2lkdGg6IDFweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTsgLyogSUU2LCBJRTcgKi9cclxuICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogYWRkZWQgbGluZSAqL1xyXG59IiwiLyoqXG4gIENvbnZlcnRzIHVuaXRsZXNzIG51bWJlcnMgb3IgcHggdmFsdWVzIHRvIHJlbVxuICBFeGFtcGxlOlxuICAgIHdpZHRoOiBweFRvUmVtKDQ4cHgpOyAgICAgICAgID0+IHdpZHRoOiAzcmVtO1xuICAgIHBhZGRpbmc6IHB4VG9SZW0oOCAxNiAyNCAzMik7ID0+IHBhZGRpbmc6IDAuNXJlbSAxcmVtIDEuNXJlbSAycmVtO1xuKi9cbi8qKlxuICBSZW1vdmUgdW5pdCBmcm9tIHZhbHVlIGxpc3RcbiovXG4vKipcbiAgUmVtb3ZlIHVuaXQgZnJvbSB2YWx1ZSBlLmcuIDE2cHggPT4gMTYsIDJyZW0gPT4gMlxuKi9cbi5oaWRkZW4sIDpob3N0IGlucHV0IFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52aXN1YWxseS1oaWRkZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiAxcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMXB4IDFweCAxcHggMXB4KTtcbiAgLyogSUU2LCBJRTcgKi9cbiAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBhZGRlZCBsaW5lICovXG59XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46aG9zdCBsYWJlbCB7XG4gIGNvbG9yOiByZWQ7XG59IiwiQGltcG9ydCAnfnNyYy9zY3NzL2NvbW1vbi1pbXBvcnRzJztcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgaW5wdXQgW3R5cGU9Y2hlY2tib3hdIHtcclxuICAgIEBleHRlbmQgLmhpZGRlblxyXG4gIH1cclxuICBsYWJlbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxSvgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-checkbox-svg',
          templateUrl: './checkbox-svg.component.html',
          styleUrls: ['./checkbox-svg.component.scss']
        }]
      }], function () {
        return [];
      }, {
        htmlId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        uiLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\_dev\dive-inn-denver\DiveInn2020\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map