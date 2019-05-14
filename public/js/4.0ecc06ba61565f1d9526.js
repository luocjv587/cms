(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/Form.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/article/Form.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormMixin */ "./resources/js/dashboard/modules/article/FormMixin.vue");
/* harmony import */ var simplemde_dist_simplemde_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simplemde/dist/simplemde.min */ "./node_modules/simplemde/dist/simplemde.min.js");
/* harmony import */ var simplemde_dist_simplemde_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simplemde_dist_simplemde_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config/helper */ "./resources/js/config/helper.js");
/* harmony import */ var vue_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-datepicker */ "./node_modules/vue-datepicker/vue-datepicker.vue");
/* harmony import */ var fine_uploader_lib_traditional__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fine-uploader/lib/traditional */ "./node_modules/fine-uploader/lib/traditional.js");
/* harmony import */ var fine_uploader_lib_traditional__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fine_uploader_lib_traditional__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var emojione__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! emojione */ "./node_modules/emojione/lib/js/emojione.js");
/* harmony import */ var emojione__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(emojione__WEBPACK_IMPORTED_MODULE_6__);
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
  mixins: [_FormMixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a,
    DatePicker: vue_datepicker__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    article: {
      type: Object,
      "default": function _default() {
        return {
          page_image: ''
        };
      }
    }
  },
  data: function data() {
    return {
      simplemde: '',
      content: ''
    };
  },
  computed: {
    mode: function mode() {
      return this.article.id ? 'update' : 'create';
    }
  },
  watch: {
    article: function article() {
      this.selected = this.article.category.data;
      this.tags = this.article.tags.data;
      this.simplemde.value(this.article.content);
      this.startTime.time = this.article.published_time;
    }
  },
  mounted: function mounted() {
    var t = this.$t || this.$i18n.t;
    var self = this;
    this.simplemde = new simplemde_dist_simplemde_min__WEBPACK_IMPORTED_MODULE_1___default.a({
      element: document.getElementById('editor'),
      placeholder: t('form.content_placeholder', {
        type: t('form.article')
      }),
      autoDownloadFontAwesome: true,
      forceSync: true,
      previewRender: function previewRender(plainText, preview) {
        preview.className += ' markdown';
        return self.parse(plainText);
      }
    });
    this.contentUploader();
  },
  methods: {
    parse: function parse(content) {
      marked.setOptions({
        highlight: function highlight(code) {
          return hljs.highlightAuto(code).value;
        },
        sanitize: true
      });
      return emojione__WEBPACK_IMPORTED_MODULE_6___default.a.toImage(marked(content));
    },
    onSubmit: function onSubmit() {
      var _this = this;

      if (!this.tags || !this.selected) {
        toastr.error('Category and Tag must select one or more.');
        return;
      }

      var tagIDs = [];
      var url = 'article' + (this.article.id ? '/' + this.article.id : '');
      var method = this.article.id ? 'patch' : 'post';

      for (var i = 0; i < this.tags.length; i++) {
        tagIDs[i] = this.tags[i].id;
      }

      this.article.published_at = this.startTime.time;
      this.article.content = this.simplemde.value();
      this.article.category_id = this.selected.id;
      this.article.tags = JSON.stringify(tagIDs);
      this.$http[method](url, this.article).then(function (response) {
        toastr.success('You ' + _this.mode + 'd the article success!');

        _this.$router.push({
          name: 'dashboard.article'
        });
      })["catch"](function (_ref) {
        var response = _ref.response;
        Object(config_helper__WEBPACK_IMPORTED_MODULE_3__["stack_error"])(response);
      });
    },
    coverUploader: function coverUploader(event) {
      var _this2 = this;

      var files = event.target.files;
      var formData = new FormData();
      formData.append('image', files[0]);
      formData.append('strategy', 'cover');
      this.$http.post('file/upload', formData).then(function (response) {
        toastr.success('You upload a file success!');
        _this2.article.page_image = response.data.url;
      })["catch"](function (_ref2) {
        var response = _ref2.response;

        if (response.data.error) {
          toastr.error(response.data.error.message);
        } else {
          toastr.error(response.status + ' : Resource ' + response.statusText);
        }
      });
    },
    contentUploader: function contentUploader() {
      var vm = this;
      this.simplemde.codemirror.on('paste', function (editor, event) {
        if (event.clipboardData.types.indexOf('Files') >= 0) {
          event.preventDefault();
        }
      });
      var contentUploader = new fine_uploader_lib_traditional__WEBPACK_IMPORTED_MODULE_5___default.a.FineUploaderBasic({
        paste: {
          targetElement: document.querySelector('.CodeMirror')
        },
        request: {
          endpoint: '/api/file/upload',
          inputName: 'image',
          customHeaders: {
            'X-CSRF-TOKEN': window.Laravel.csrfToken,
            'X-Requested-With': 'XMLHttpRequest'
          },
          params: {
            strategy: 'article'
          }
        },
        validation: {
          allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
        },
        callbacks: {
          onPasteReceived: function onPasteReceived(file) {
            var promise = new fine_uploader_lib_traditional__WEBPACK_IMPORTED_MODULE_5___default.a.Promise();

            if (file == null || typeof file.type == 'undefined' || file.type.indexOf('image/')) {
              toastr.error('Only can upload image!');
              return promise.failure('not a image.');
            }

            return promise.then(function () {
              vm.createdImageUploading('image.png');
            }).success('image');
          },
          onComplete: function onComplete(id, name, responseJSON) {
            vm.replaceImageUploading(name, responseJSON.url);
          }
        }
      });
      var dragAndDropModule = new fine_uploader_lib_traditional__WEBPACK_IMPORTED_MODULE_5___default.a.DragAndDrop({
        dropZoneElements: [document.querySelector('.CodeMirror')],
        callbacks: {
          processingDroppedFilesComplete: function processingDroppedFilesComplete(files, dropTarget) {
            files.forEach(function (file) {
              vm.createdImageUploading(file.name);
            });
            contentUploader.addFiles(files); //this submits the dropped files to Fine Uploader
          }
        }
      });
    },
    getImageUploading: function getImageUploading() {
      return '\n![Uploading ...]()\n';
    },
    createdImageUploading: function createdImageUploading(name) {
      this.simplemde.value(this.simplemde.value() + this.getImageUploading());
    },
    replaceImageUploading: function replaceImageUploading(name, url) {
      var result = '\n![' + name + '](' + url + ')\n';
      this.simplemde.value(this.simplemde.value().replace(this.getImageUploading(), result));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/FormMixin.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/article/FormMixin.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selected: null,
      options: [],
      tags: null,
      allTag: [],
      startTime: {
        time: ''
      },
      option: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm:ss',
        placeholder: 'Published At?',
        inputStyle: {
          'display': 'inline-block',
          'padding': '6px 6px 6px 10px',
          'height': '41px',
          'line-height': '22px',
          'font-size': '13px',
          'border': '1px solid #dce4ec',
          'border-radius': '6px',
          'color': '#5F5F5F'
        },
        color: {
          header: '#52697f',
          headerText: '#1abc9c'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5,
        dismissible: true
      }
    };
  },
  mounted: function mounted() {
    this.option.placeholder = this.$t('form.published_at');
  },
  created: function created() {
    this.loadCategories();
    this.loadTags();
  },
  methods: {
    loadCategories: function loadCategories() {
      var _this = this;

      this.$http.get('categories').then(function (response) {
        _this.options = response.data.data;
      });
    },
    loadTags: function loadTags() {
      var _this2 = this;

      this.$http.get('tags').then(function (response) {
        _this2.allTag = response.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover-upload[data-v-3130a27e] {\n  display: inline-block;\n}\n.cover-upload .file[data-v-3130a27e] {\n  position: relative;\n  margin: 0 auto;\n  display: block;\n  width: 100px;\n  height: 35px;\n  line-height: 35px;\n  font-size: 12px;\n}\n.cover-upload .file span[data-v-3130a27e] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.cover-upload .file input[data-v-3130a27e] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  width: 100px;\n  height: 35px;\n  opacity: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/sass-loader/lib/loader.js??ref--10-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/Form.vue?vue&type=template&id=3130a27e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/dashboard/modules/article/Form.vue?vue&type=template&id=3130a27e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "form-group row" }, [
            _c("label", { staticClass: "col-sm-2 col-form-label" }, [
              _vm._v(_vm._s(_vm.$t("form.category")))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-10" },
              [
                _c("multiselect", {
                  attrs: {
                    options: _vm.options,
                    label: "name",
                    placeholder: _vm.$t("form.select_category"),
                    "track-by": "name"
                  },
                  model: {
                    value: _vm.selected,
                    callback: function($$v) {
                      _vm.selected = $$v
                    },
                    expression: "selected"
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
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "title" }
              },
              [_vm._v(_vm._s(_vm.$t("form.title")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.article.title,
                    expression: "article.title"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "title", name: "title" },
                domProps: { value: _vm.article.title },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.article, "title", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "subtitle" }
              },
              [_vm._v(_vm._s(_vm.$t("form.subtitle")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.article.subtitle,
                    expression: "article.subtitle"
                  }
                ],
                staticClass: "form-control",
                attrs: { type: "text", id: "subtitle", name: "subtitle" },
                domProps: { value: _vm.article.subtitle },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.article, "subtitle", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "page_image" }
              },
              [_vm._v(_vm._s(_vm.$t("form.page_image")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-5" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.article.page_image,
                    expression: "article.page_image"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  type: "text",
                  id: "page_image",
                  name: "page_image",
                  placeholder: "ex: /uploads/default_avatar.png"
                },
                domProps: { value: _vm.article.page_image },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.article, "page_image", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-5" }, [
              _vm.article.page_image != null && _vm.article.page_image != ""
                ? _c("img", {
                    attrs: {
                      src: _vm.article.page_image,
                      alt: "Pig Jian",
                      width: "35",
                      height: "35"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c("div", { staticClass: "cover-upload pull-right" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-success file",
                    attrs: { href: "javascript:;" }
                  },
                  [
                    _c("span", [_vm._v(_vm._s(_vm.$t("form.upload_file")))]),
                    _vm._v(" "),
                    _c("input", {
                      attrs: { type: "file" },
                      on: { change: _vm.coverUploader }
                    })
                  ]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c(
              "label",
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "title" }
              },
              [_vm._v(_vm._s(_vm.$t("form.content")))]
            ),
            _vm._v(" "),
            _vm._m(0)
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
              {
                staticClass: "col-sm-2 col-form-label",
                attrs: { for: "meta_description" }
              },
              [_vm._v(_vm._s(_vm.$t("form.meta_description")))]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-10" }, [
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.article.meta_description,
                    expression: "article.meta_description"
                  }
                ],
                staticClass: "form-control",
                attrs: { id: "meta_description", name: "meta_description" },
                domProps: { value: _vm.article.meta_description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(
                      _vm.article,
                      "meta_description",
                      $event.target.value
                    )
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c("label", { staticClass: "col-sm-2 col-form-label" }, [
              _vm._v(_vm._s(_vm.$t("form.datetime")))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-sm-10" },
              [
                _c("date-picker", {
                  attrs: { date: _vm.startTime, option: _vm.option }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group row" }, [
            _c("div", { staticClass: "col-sm-2 col-form-label" }, [
              _vm._v(
                "\n          " + _vm._s(_vm.$t("form.is_draft")) + "\n        "
              )
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
                          value: _vm.article.is_draft,
                          expression: "article.is_draft"
                        }
                      ],
                      attrs: { type: "checkbox", name: "is_draft" },
                      domProps: {
                        checked: Array.isArray(_vm.article.is_draft)
                          ? _vm._i(_vm.article.is_draft, null) > -1
                          : _vm.article.is_draft
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.article.is_draft,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.article,
                                  "is_draft",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.article,
                                  "is_draft",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.article, "is_draft", $$c)
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "toggle" })
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-2 col-form-label" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.$t("form.is_original")) +
                  "\n        "
              )
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
                          value: _vm.article.is_original,
                          expression: "article.is_original"
                        }
                      ],
                      attrs: { type: "checkbox", name: "is_original" },
                      domProps: {
                        checked: Array.isArray(_vm.article.is_original)
                          ? _vm._i(_vm.article.is_original, null) > -1
                          : _vm.article.is_original
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.article.is_original,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                _vm.$set(
                                  _vm.article,
                                  "is_original",
                                  $$a.concat([$$v])
                                )
                            } else {
                              $$i > -1 &&
                                _vm.$set(
                                  _vm.article,
                                  "is_original",
                                  $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                )
                            }
                          } else {
                            _vm.$set(_vm.article, "is_original", $$c)
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
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-12" }, [
          _c("div", { staticClass: "form-group row" }, [
            _c("div", { staticClass: "offset-sm-2 col-sm-10" }, [
              _c(
                "button",
                { staticClass: "btn btn-info", attrs: { type: "submit" } },
                [
                  _vm._v(
                    _vm._s(
                      _vm.article.id
                        ? _vm.$t("form.edit")
                        : _vm.$t("form.create")
                    )
                  )
                ]
              )
            ])
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
      _c("textarea", { attrs: { id: "editor" } })
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

/***/ "./resources/js/dashboard/modules/article/Form.vue":
/*!*********************************************************!*\
  !*** ./resources/js/dashboard/modules/article/Form.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_3130a27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=3130a27e&scoped=true& */ "./resources/js/dashboard/modules/article/Form.vue?vue&type=template&id=3130a27e&scoped=true&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/article/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Form_vue_vue_type_style_index_0_id_3130a27e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true& */ "./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_3130a27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_3130a27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3130a27e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/article/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/article/Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/dashboard/modules/article/Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_3130a27e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/sass-loader/lib/loader.js??ref--10-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/Form.vue?vue&type=style&index=0&id=3130a27e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_3130a27e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_3130a27e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_3130a27e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_3130a27e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_sass_loader_lib_loader_js_ref_10_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_style_index_0_id_3130a27e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/dashboard/modules/article/Form.vue?vue&type=template&id=3130a27e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/article/Form.vue?vue&type=template&id=3130a27e&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3130a27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=3130a27e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/Form.vue?vue&type=template&id=3130a27e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3130a27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_3130a27e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/dashboard/modules/article/FormMixin.vue":
/*!**************************************************************!*\
  !*** ./resources/js/dashboard/modules/article/FormMixin.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormMixin.vue?vue&type=script&lang=js& */ "./resources/js/dashboard/modules/article/FormMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _FormMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/dashboard/modules/article/FormMixin.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/dashboard/modules/article/FormMixin.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/dashboard/modules/article/FormMixin.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormMixin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/dashboard/modules/article/FormMixin.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormMixin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ })

}]);