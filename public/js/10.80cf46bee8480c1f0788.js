(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/Modal.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/components/Modal.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    show: {
      type: Boolean,
      "default": false
    },
    title: {
      type: String,
      "default": 'Modal'
    },
    small: {
      type: Boolean,
      "default": false
    },
    large: {
      type: Boolean,
      "default": false
    },
    full: {
      type: Boolean,
      "default": false
    },
    force: {
      type: Boolean,
      "default": false
    },
    confirmText: {
      type: String,
      "default": 'OK'
    },
    cancelText: {
      type: String,
      "default": 'Cancel'
    },
    confirmClass: {
      type: String,
      "default": 'btn btn-info'
    },
    cancelClass: {
      type: String,
      "default": 'btn btn-light'
    },
    closeWhenConfirm: {
      type: Boolean,
      "default": false
    },
    showFooter: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      duration: null
    };
  },
  computed: {
    modalClass: function modalClass() {
      return {
        'modal-lg': this.large,
        'modal-sm': this.small,
        'modal-full': this.full
      };
    }
  },
  created: function created() {
    if (this.show) {
      document.body.className += ' modal-open';
    }
  },
  beforeDestroy: function beforeDestroy() {
    document.body.className = document.body.className.replace(/\s?modal-open/, '');
  },
  watch: {
    show: function show(value) {
      if (value) {
        document.body.className += ' modal-open';
      } else {
        if (!this.duration) {
          this.duration = window.getComputedStyle(this.$el)['transition-duration'].replace('s', '') * 1000;
        }

        window.setTimeout(function () {
          document.body.className = document.body.className.replace(/\s?modal-open/, '');
        }, this.duration || 0);
      }
    }
  },
  methods: {
    confirm: function confirm() {
      this.$emit('confirm');
    },
    cancel: function cancel() {
      this.$emit('cancel');
    },
    clickMask: function clickMask() {
      if (!this.force) {
        this.cancel();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/file/File.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/file/File.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dashboard_components_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dashboard/components/Modal */ "./resources/js/dashboard/components/Modal.vue");
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
    Modal: dashboard_components_Modal__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      folder: '',
      files: null,
      file_name: '',
      path: '',
      upload: {},
      showFolder: false,
      showFile: false,
      showImage: false,
      preview_image: '',
      fields: [{
        name: 'name',
        title: 'ID',
        titleClass: 'text-center',
        dataClass: 'text-center'
      }, {
        name: 'user',
        title: 'User Name',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'username'
      }, {
        name: 'title',
        title: 'Title'
      }, {
        name: "content",
        title: 'Content',
        callback: 'content'
      }, {
        name: 'status',
        title: 'Status',
        titleClass: 'text-center',
        dataClass: 'text-center',
        callback: 'status'
      }, {
        name: 'created_at',
        title: 'Created At'
      }, {
        name: '__actions',
        dataClass: 'text-center'
      }]
    };
  },
  mounted: function mounted() {
    this.getFileInfo(this.$route.query.folder);
  },
  methods: {
    preview: function preview(path) {
      this.showImage = true;
      this.preview_image = path;
    },
    confirm: function confirm() {
      var _this = this;

      if (!this.folder) {
        toastr.error('The folder name must be required!');
        return;
      }

      var path = this.upload.folder == '/' ? '' : this.upload.folder;
      this.path = path + '/' + this.folder;
      this.$http.post('folder', {
        folder: this.path
      }).then(function (response) {
        toastr.success('You create a new folder success!');
        _this.showFolder = false;

        _this.$set(_this.upload.subfolders, _this.path, _this.folder);

        _this.folder = '';
      })["catch"](function (_ref) {
        var response = _ref.response;
        toastr.error(response.status + ' : ' + response.statusText);
      });
    },
    change: function change(event) {
      this.files = event.target.files;
    },
    uploadFile: function uploadFile() {
      var _this2 = this;

      if (!this.files) {
        toastr.error('The file must be required');
        return;
      }

      var formData = new FormData();
      formData.append('file', this.files[0]);
      formData.append('name', this.file_name);
      formData.append('folder', this.upload.folder);
      this.$http.post('upload', formData).then(function (response) {
        toastr.success('You upload a file success!');
        var file = {
          fullPath: response.data.real_path,
          mimeType: response.data.mime,
          name: response.data.original_name,
          size: response.data.size,
          webPath: response.data.url
        };

        _this2.upload.files.push(file);

        _this2.file_name = '';
        _this2.showFile = false;
      })["catch"](function (_ref2) {
        var response = _ref2.response;

        if (response.data.error) {
          toastr.error(response.data.error.message);
        } else {
          toastr.error(response.status + ' : Resource ' + response.statusText);
        }
      });
    },
    deleteFolder: function deleteFolder(name) {
      var _this3 = this;

      var path = this.upload.folder == '/' ? '' : this.upload.folder;
      this.$http.post('folder/delete', {
        del_folder: name,
        folder: this.upload.folder
      }).then(function (response) {
        toastr.success('You delete a folder success!');

        _this3.$delete(_this3.upload.subfolders, path + '/' + name);
      })["catch"](function (_ref3) {
        var response = _ref3.response;

        if (response.data.error) {
          toastr.error(response.data.error.http_code + ' : Resource ' + response.data.error.message);
        } else {
          toastr.error(response.status + ' : Resource ' + response.statusText);
        }
      });
    },
    deleteFile: function deleteFile(file, index) {
      var _this4 = this;

      this.$http.post('file/delete', {
        path: file.fullPath
      }).then(function (response) {
        toastr.success('You delete a file success!');

        _this4.upload.files.splice(index, 1);
      })["catch"](function (_ref4) {
        var response = _ref4.response;
        toastr.error(response.status + ' : Resource ' + response.statusText);
      });
    },
    getFileInfo: function getFileInfo(path) {
      var _this5 = this;

      var url = 'upload';

      if (path) {
        url = url + '?folder=' + path;
      } else {
        path = '/';
      }

      this.$http.get(url).then(function (response) {
        _this5.upload = response.data.data;

        if (_this5.upload.subfolders instanceof Array) {
          _this5.upload.subfolders = {};
        }

        _this5.$router.push({
          name: 'dashboard.file',
          query: {
            folder: path
          }
        });
      });
    },
    checkImageType: function checkImageType(fileType) {
      if (fileType != null) {
        return fileType.indexOf("image/") != -1;
      }

      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal[data-v-4c56f9ed] {\n  display: block;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: opacity 0.3s ease;\n}\n.modal-header[data-v-4c56f9ed] {\n  padding-bottom: 25px;\n  border: none;\n}\n.modal-dialog[data-v-4c56f9ed] {\n  vertical-align: middle;\n  margin: 30px auto;\n}\n.modal-content[data-v-4c56f9ed] {\n  background-color: #fff;\n  border-radius: 5px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all 0.3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-enter .modal-content[data-v-4c56f9ed],\n.modal-leave-active .modal-content[data-v-4c56f9ed] {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-content .btn[data-v-428a31fe] {\n  display: inline-block;\n  border-radius: 50%;\n  width: 2.2rem;\n  height: 2.2rem;\n  line-height: 2.2rem;\n  padding: 0;\n  margin-left: 5px;\n  margin-right: 5px;\n}\nh5[data-v-428a31fe] {\n  margin-bottom: 0;\n  font-weight: 400;\n}\n.breadcrumb[data-v-428a31fe] {\n  padding: 0.25rem 0.7rem !important;\n  margin: 0;\n}\n.box-body button[data-v-428a31fe],\n.box-body button[data-v-428a31fe]:hover {\n  padding: 0;\n  border-radius: 50%;\n  width: 2.5em;\n  height: 2.5em;\n  outline: none;\n}\n.preview-size[data-v-428a31fe] {\n  width: 100%;\n}\n.file-upload input[data-v-428a31fe] {\n  width: 71px;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/Modal.vue?vue&type=template&id=4c56f9ed&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/components/Modal.vue?vue&type=template&id=4c56f9ed&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _vm.show
    ? _c("transition", { attrs: { name: "modal" } }, [
        _c(
          "div",
          {
            staticClass: "modal",
            on: {
              click: function($event) {
                if ($event.target !== $event.currentTarget) {
                  return null
                }
                return _vm.clickMask($event)
              }
            }
          },
          [
            _c("div", { staticClass: "modal-dialog", class: _vm.modalClass }, [
              _c("div", { staticClass: "modal-content" }, [
                _c(
                  "div",
                  { staticClass: "modal-header" },
                  [
                    _vm._t("header", [
                      _c(
                        "h4",
                        { staticClass: "modal-title" },
                        [
                          _vm._t("title", [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.title) +
                                "\n              "
                            )
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        { staticClass: "close", on: { click: _vm.cancel } },
                        [_c("i", { staticClass: "fas fa-times-circle" })]
                      )
                    ])
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  [_vm._t("default")],
                  2
                ),
                _vm._v(" "),
                _vm.showFooter
                  ? _c(
                      "div",
                      { staticClass: "modal-footer" },
                      [
                        _vm._t("footer", [
                          _c(
                            "button",
                            {
                              class: _vm.cancelClass,
                              attrs: { type: "button" },
                              on: { click: _vm.cancel }
                            },
                            [_vm._v(_vm._s(_vm.cancelText))]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              class: _vm.confirmClass,
                              attrs: { type: "button" },
                              on: { click: _vm.confirm }
                            },
                            [_vm._v(_vm._s(_vm.confirmText))]
                          )
                        ])
                      ],
                      2
                    )
                  : _vm._e()
              ])
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/file/File.vue?vue&type=template&id=428a31fe&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/file/File.vue?vue&type=template&id=428a31fe&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "row" },
    [
      _c("div", { staticClass: "box" }, [
        _c("div", { staticClass: "box-title" }, [
          _c("div", { staticClass: "row d-flex m-0" }, [
            _c(
              "div",
              { staticClass: "col-md-6 d-flex align-items-center p-0" },
              [
                _c("h5", { staticClass: "align-self-center" }, [
                  _vm._v(_vm._s(_vm.$t("page.files")) + "  ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "float-left" }, [
                  _c("nav", { attrs: { "aria-label": "breadcrumb" } }, [
                    _c(
                      "ol",
                      { staticClass: "breadcrumb" },
                      [
                        _vm._l(_vm.upload.breadcrumbs, function(disp, path) {
                          return _c("li", { staticClass: "breadcrumb-item" }, [
                            _c(
                              "a",
                              {
                                attrs: { href: "javascript:;" },
                                on: {
                                  click: function($event) {
                                    return _vm.getFileInfo(path)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(disp) +
                                    "\n                  "
                                )
                              ]
                            )
                          ])
                        }),
                        _vm._v(" "),
                        _c("li", { staticClass: "breadcrumb-item active" }, [
                          _vm._v(_vm._s(_vm.upload.folderName))
                        ])
                      ],
                      2
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-md-6 align-items-center p-0 text-right" },
              [
                _c("small", [
                  _vm.checkPermission("CREATE_FILE_FOLDER")
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-success btn-sm",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.showFolder = true
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-plus-circle" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.$t("table.new_folder")) +
                              "\n            "
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.checkPermission("UPLOAD_FILE")
                    ? _c(
                        "button",
                        {
                          staticClass: "btn btn-primary btn-sm",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              _vm.showFile = true
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fas fa-inbox" }),
                          _vm._v(
                            " " +
                              _vm._s(_vm.$t("table.upload")) +
                              "\n            "
                          )
                        ]
                      )
                    : _vm._e()
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "box-content p-0" }, [
          _c(
            "table",
            {
              staticClass: "table table-striped table-hover",
              attrs: { id: "uploads-table" }
            },
            [
              _c(
                "tbody",
                [
                  _c("tr", [
                    _c("th", [_vm._v(_vm._s(_vm.$t("table.name")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("table.type")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("table.date")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("table.size")))]),
                    _vm._v(" "),
                    _c("th", [_vm._v(_vm._s(_vm.$t("table.action")))])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.upload.subfolders, function(name, path) {
                    return _c("tr", [
                      _c("td", [
                        _c(
                          "a",
                          {
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function($event) {
                                return _vm.getFileInfo(path)
                              }
                            }
                          },
                          [
                            _c("i", { staticClass: "fas fa-folder" }),
                            _vm._v(
                              "\n                " +
                                _vm._s(name) +
                                "\n              "
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("-")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("-")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("-")]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "a",
                          {
                            staticClass: "btn btn-sm btn-secondary",
                            attrs: { href: "javascript:;" },
                            on: {
                              click: function($event) {
                                return _vm.getFileInfo(path)
                              }
                            }
                          },
                          [_c("i", { staticClass: "fas fa-folder-open" })]
                        ),
                        _vm._v(" "),
                        _vm.checkPermission("DESTROY_FILE")
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-sm btn-danger",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteFolder(name)
                                  }
                                }
                              },
                              [_c("i", { staticClass: "fas fa-trash-alt" })]
                            )
                          : _vm._e()
                      ])
                    ])
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.upload.files, function(file, index) {
                    return _c(
                      "tr",
                      [
                        file.type == "folder"
                          ? [
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function($event) {
                                        return _vm.getFileInfo(file.fullPath)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", { staticClass: "fas fa-folder" }),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(file.name) +
                                        "\n                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v("-")]),
                              _vm._v(" "),
                              _c("td", [_vm._v("-")]),
                              _vm._v(" "),
                              _c("td", [_vm._v("-")]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-sm btn-secondary",
                                    attrs: { href: "javascript:;" },
                                    on: {
                                      click: function($event) {
                                        return _vm.getFileInfo(file.fullPath)
                                      }
                                    }
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fas fa-folder-open"
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.checkPermission("DESTROY_FILE")
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-danger",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteFolder(
                                              file.fullPath
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-trash-alt"
                                        })
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]
                          : [
                              _c("td", [
                                _c(
                                  "a",
                                  {
                                    attrs: {
                                      target: "_blank",
                                      href: file.webPath
                                    }
                                  },
                                  [
                                    _vm.checkImageType(file.mimeType)
                                      ? _c("i", { staticClass: "fas fa-image" })
                                      : _c("i", {
                                          staticClass: "fas fa-file-alt"
                                        }),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(file.name) +
                                        "\n                "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(file.mimeType))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(file.modified))]),
                              _vm._v(" "),
                              _c("td", [_vm._v(_vm._s(file.size))]),
                              _vm._v(" "),
                              _c("td", [
                                _vm.checkImageType(file.mimeType)
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-info",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.preview(file.webPath)
                                          }
                                        }
                                      },
                                      [_c("i", { staticClass: "fas fa-eye" })]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.checkPermission("DESTROY_FILE")
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-sm btn-danger",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteFile(file, index)
                                          }
                                        }
                                      },
                                      [
                                        _c("i", {
                                          staticClass: "fas fa-trash-alt"
                                        })
                                      ]
                                    )
                                  : _vm._e()
                              ])
                            ]
                      ],
                      2
                    )
                  })
                ],
                2
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: { show: _vm.showFolder, "show-footer": "" },
          on: {
            confirm: _vm.confirm,
            cancel: function($event) {
              _vm.showFolder = false
            }
          }
        },
        [
          _c("template", { slot: "title" }, [
            _vm._v(_vm._s(_vm.$t("form.create_folder")))
          ]),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-form-label col-sm-3",
                  attrs: { for: "folder" }
                },
                [_vm._v(_vm._s(_vm.$t("form.folder_name")))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.folder,
                      expression: "folder"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "folder",
                    placeholder: _vm.$t("form.folder_name")
                  },
                  domProps: { value: _vm.folder },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.folder = $event.target.value
                    }
                  }
                })
              ])
            ])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: { show: _vm.showFile, "show-footer": "" },
          on: {
            confirm: _vm.uploadFile,
            cancel: function($event) {
              _vm.showFile = false
            }
          }
        },
        [
          _c("template", { slot: "title" }, [
            _vm._v(_vm._s(_vm.$t("form.upload_file")))
          ]),
          _vm._v(" "),
          _c("form", { attrs: { enctype: "multipart/form-data" } }, [
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-form-label col-sm-3",
                  attrs: { for: "file" }
                },
                [_vm._v(_vm._s(_vm.$t("form.file")))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8 file-upload" }, [
                _c(
                  "button",
                  { staticClass: "btn btn-primary", attrs: { type: "button" } },
                  [_vm._v(_vm._s(_vm.$t("table.upload")))]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "file", id: "file", name: "file" },
                  on: { change: _vm.change }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                {
                  staticClass: "col-form-label col-sm-3",
                  attrs: { for: "file_name" }
                },
                [_vm._v(_vm._s(_vm.$t("form.file_name")))]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-8" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.file_name,
                      expression: "file_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    id: "file_name",
                    name: "file_name",
                    placeholder: _vm.$t("form.file_name")
                  },
                  domProps: { value: _vm.file_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.file_name = $event.target.value
                    }
                  }
                })
              ])
            ])
          ])
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "modal",
        {
          attrs: { show: _vm.showImage },
          on: {
            confirm: _vm.confirm,
            cancel: function($event) {
              _vm.showImage = false
            }
          }
        },
        [
          _c("template", { slot: "title" }, [
            _vm._v(_vm._s(_vm.$t("form.image")))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-12 text-center" }, [
            _c("img", {
              staticClass: "preview-size",
              attrs: { src: _vm.preview_image }
            })
          ])
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/dashboard/components/Modal.vue":
/*!*****************************************************!*\
  !*** ./resources/js/dashboard/components/Modal.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_4c56f9ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=4c56f9ed&scoped=true& */ "./resources/js/dashboard/components/Modal.vue?vue&type=template&id=4c56f9ed&scoped=true&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_4c56f9ed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true& */ "./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_4c56f9ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_4c56f9ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4c56f9ed",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/components/Modal.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/dashboard/components/Modal.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4c56f9ed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--10-2!../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/Modal.vue?vue&type=style&index=0&id=4c56f9ed&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4c56f9ed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4c56f9ed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4c56f9ed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4c56f9ed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_4c56f9ed_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/dashboard/components/Modal.vue?vue&type=template&id=4c56f9ed&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/dashboard/components/Modal.vue?vue&type=template&id=4c56f9ed&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_4c56f9ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=4c56f9ed&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/components/Modal.vue?vue&type=template&id=4c56f9ed&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_4c56f9ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_4c56f9ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/dashboard/modules/file/File.vue":
/*!******************************************************!*\
  !*** ./resources/js/dashboard/modules/file/File.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File_vue_vue_type_template_id_428a31fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File.vue?vue&type=template&id=428a31fe&scoped=true& */ "./resources/js/dashboard/modules/file/File.vue?vue&type=template&id=428a31fe&scoped=true&");
/* harmony import */ var _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/file/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _File_vue_vue_type_style_index_0_id_428a31fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true& */ "./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _File_vue_vue_type_template_id_428a31fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _File_vue_vue_type_template_id_428a31fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "428a31fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/file/File.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/file/File.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/dashboard/modules/file/File.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/file/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_428a31fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/file/File.vue?vue&type=style&index=0&id=428a31fe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_428a31fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_428a31fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_428a31fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_428a31fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_style_index_0_id_428a31fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/dashboard/modules/file/File.vue?vue&type=template&id=428a31fe&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/file/File.vue?vue&type=template&id=428a31fe&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_428a31fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=template&id=428a31fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/file/File.vue?vue&type=template&id=428a31fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_428a31fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_428a31fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);