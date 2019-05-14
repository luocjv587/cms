(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/discussion/Form.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/discussion/Form.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var config_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config/helper */ "./resources/js/config/helper.js");
/* harmony import */ var simplemde_dist_simplemde_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplemde/dist/simplemde.min */ "./node_modules/simplemde/dist/simplemde.min.js");
/* harmony import */ var simplemde_dist_simplemde_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplemde_dist_simplemde_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    discussion: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      simplemde: {},
      tags: null,
      allTag: []
    };
  },
  computed: {
    mode: function mode() {
      return this.discussion.id ? 'update' : 'create';
    }
  },
  created: function created() {
    this.loadTags();
  },
  watch: {
    discussion: function discussion() {
      this.tags = this.discussion.tags.data;
      this.simplemde.value(this.discussion.content_raw);
    }
  },
  mounted: function mounted() {
    var t = this.$t || this.$i18n.t;
    this.simplemde = new simplemde_dist_simplemde_min__WEBPACK_IMPORTED_MODULE_1___default.a({
      element: document.getElementById("editor"),
      placeholder: t('form.content_placeholder', {
        type: t('form.discussion')
      }),
      autoDownloadFontAwesome: true
    });
  },
  methods: {
    loadTags: function loadTags() {
      var _this = this;

      this.$http.get('tags').then(function (response) {
        _this.allTag = response.data.data;
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if (this.tags.length == 0) {
        toastr.error('Tag must select one or more.');
        return;
      }

      var tagIDs = [];
      var url = 'discussion' + (this.discussion.id ? '/' + this.discussion.id : '');
      var method = this.discussion.id ? 'patch' : 'post';

      for (var i = 0; i < this.tags.length; i++) {
        tagIDs[i] = this.tags[i].id;
      }

      this.discussion.tags = JSON.stringify(tagIDs);
      this.discussion.content = this.simplemde.value();
      this.$http[method](url, this.discussion).then(function (response) {
        toastr.success('You ' + _this2.mode + 'd the discussion success!');

        _this2.$router.push({
          name: 'dashboard.discussion'
        });
      })["catch"](function (_ref) {
        var response = _ref.response;
        Object(config_helper__WEBPACK_IMPORTED_MODULE_0__["stack_error"])(response);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/discussion/Form.vue?vue&type=template&id=229856da&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/discussion/Form.vue?vue&type=template&id=229856da& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "form",
      {
        staticClass: "col-sm-9 offset-sm-1",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onSubmit($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-sm-2 col-form-label", attrs: { for: "title" } },
            [_vm._v(_vm._s(_vm.$t("form.title")))]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-10" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.discussion.title,
                  expression: "discussion.title"
                }
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "title", name: "title" },
              domProps: { value: _vm.discussion.title },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.discussion, "title", $event.target.value)
                }
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("label", { staticClass: "col-sm-2 col-form-label" }, [
            _vm._v(_vm._s(_vm.$t("form.tag")))
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-sm-10" },
            [
              _c("multiselect", {
                attrs: {
                  options: _vm.allTag,
                  multiple: true,
                  searchable: true,
                  "hide-selected": true,
                  "close-on-select": false,
                  "clear-on-select": false,
                  limit: 5,
                  placeholder: _vm.$t("form.select_tag"),
                  label: "tag",
                  "track-by": "tag"
                },
                model: {
                  value: _vm.tags,
                  callback: function($$v) {
                    _vm.tags = $$v
                  },
                  expression: "tags"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c(
            "label",
            { staticClass: "col-sm-2 col-form-label", attrs: { for: "title" } },
            [_vm._v(_vm._s(_vm.$t("form.content")))]
          ),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("div", { staticClass: "col-sm-2 col-form-label" }, [
            _vm._v("\n        " + _vm._s(_vm.$t("form.status")) + "\n      ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-2" }, [
            _c(
              "div",
              {
                staticClass: "togglebutton",
                staticStyle: { "margin-top": "6px" }
              },
              [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.discussion.status,
                        expression: "discussion.status"
                      }
                    ],
                    attrs: { type: "checkbox", name: "status", value: "1" },
                    domProps: {
                      checked: Array.isArray(_vm.discussion.status)
                        ? _vm._i(_vm.discussion.status, "1") > -1
                        : _vm.discussion.status
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.discussion.status,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = "1",
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(
                                _vm.discussion,
                                "status",
                                $$a.concat([$$v])
                              )
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                _vm.discussion,
                                "status",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(_vm.discussion, "status", $$c)
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "toggle" })
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group row" }, [
          _c("div", { staticClass: "offset-sm-2 col-sm-10" }, [
            _c(
              "button",
              { staticClass: "btn btn-info", attrs: { type: "submit" } },
              [
                _vm._v(
                  _vm._s(
                    _vm.discussion.id
                      ? _vm.$t("form.edit")
                      : _vm.$t("form.create")
                  )
                )
              ]
            )
          ])
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-10" }, [
      _c("textarea", { attrs: { id: "editor", name: "content" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/config/helper.js":
/*!***************************************!*\
  !*** ./resources/js/config/helper.js ***!
  \***************************************/
/*! exports provided: stack_error */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stack_error", function() { return stack_error; });
function stack_error(response) {
  if (typeof response.data == 'string') {
    toastr.error(response.status + ' ' + response.statusText);
  } else {
    var data = response.data.errors;
    var content = '';
    Object.keys(data).map(function (key, index) {
      var value = data[key];
      content += '<span style="color: #e74c3c">' + value[0] + '</span><br>';
    });
    swal({
      title: "Error Text!",
      type: 'error',
      html: content
    });
  }
}

/***/ }),

/***/ "./resources/js/dashboard/modules/discussion/Form.vue":
/*!************************************************************!*\
  !*** ./resources/js/dashboard/modules/discussion/Form.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_229856da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=229856da& */ "./resources/js/dashboard/modules/discussion/Form.vue?vue&type=template&id=229856da&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/discussion/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_229856da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_229856da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/discussion/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/discussion/Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/discussion/Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/discussion/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/discussion/Form.vue?vue&type=template&id=229856da&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/discussion/Form.vue?vue&type=template&id=229856da& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_229856da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=229856da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/discussion/Form.vue?vue&type=template&id=229856da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_229856da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_229856da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);