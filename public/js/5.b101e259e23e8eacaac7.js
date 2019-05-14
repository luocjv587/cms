(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.datepicker-overlay[data-v-3faef998] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n  -webkit-animation: fadein-data-v-3faef998 0.5s;\n  /* Safari, Chrome and Opera > 12.1 */\n  /* Firefox < 16 */\n  /* Internet Explorer */\n  /* Opera < 12.1 */\n  animation: fadein-data-v-3faef998 0.5s;\n}\n@keyframes fadein-data-v-3faef998 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein-data-v-3faef998 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n/* Internet Explorer */\n/* Opera < 12.1 */\n.cov-date-body[data-v-3faef998] {\n  display: inline-block;\n  background: #3F51B5;\n  overflow: hidden;\n  position: relative;\n  font-size: 16px;\n  font-family: 'Roboto';\n  font-weight: 400;\n  position: fixed;\n  display: block;\n  width: 400px;\n  max-width: 100%;\n  z-index: 999;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n}\n.cov-picker-box[data-v-3faef998] {\n  background: #fff;\n  width: 100%;\n  display: inline-block;\n  padding: 25px;\n  box-sizing: border-box !important;\n  -moz-box-sizing: border-box !important;\n  -webkit-box-sizing: border-box !important;\n  -ms-box-sizing: border-box !important;\n  width: 400px;\n  max-width: 100%;\n  height: 280px;\n  text-align: start!important;\n}\n.cov-picker-box td[data-v-3faef998] {\n  height: 34px;\n  width: 34px;\n  padding: 0;\n  line-height: 34px;\n  color: #000;\n  background: #fff;\n  text-align: center;\n  cursor: pointer;\n}\n.cov-picker-box td[data-v-3faef998]:hover {\n  background: #E6E6E6;\n}\ntable[data-v-3faef998] {\n  border-collapse: collapse;\n  border-spacing: 0;\n  width: 100%;\n}\n.day[data-v-3faef998] {\n  width: 14.2857143%;\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  height: 34px;\n  padding: 0;\n  line-height: 34px;\n  color: #000;\n  background: #fff;\n  vertical-align: middle;\n}\n.week ul[data-v-3faef998] {\n  margin: 0 0 8px;\n  padding: 0;\n  list-style: none;\n}\n.week ul li[data-v-3faef998] {\n  width: 14.2%;\n  display: inline-block;\n  text-align: center;\n  background: transparent;\n  color: #000;\n  font-weight: bold;\n}\n.passive-day[data-v-3faef998] {\n  color: #bbb;\n}\n.checked[data-v-3faef998] {\n  background: #F50057;\n  color: #FFF !important;\n  border-radius: 3px;\n}\n.unavailable[data-v-3faef998] {\n  color: #ccc;\n  cursor: not-allowed;\n}\n.cov-date-monthly[data-v-3faef998] {\n  height: 150px;\n}\n.cov-date-monthly > div[data-v-3faef998] {\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n  vertical-align: middle;\n  color: #fff;\n  height: 150px;\n  float: left;\n  text-align: center;\n  cursor: pointer;\n}\n.cov-date-previous[data-v-3faef998],\n.cov-date-next[data-v-3faef998] {\n  position: relative;\n  width: 20% !important;\n  text-indent: -300px;\n  overflow: hidden;\n  color: #fff;\n}\n.cov-date-caption[data-v-3faef998] {\n  width: 60%;\n  padding: 50px 0!important;\n  box-sizing: border-box;\n  font-size: 24px;\n}\n.cov-date-caption span[data-v-3faef998]:hover {\n  color: rgba(255, 255, 255, 0.7);\n}\n.cov-date-previous[data-v-3faef998]:hover,\n.cov-date-next[data-v-3faef998]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.day[data-v-3faef998]:hover {\n  background: #EAEAEA;\n}\n.unavailable[data-v-3faef998]:hover {\n  background: none;\n}\n.checked[data-v-3faef998]:hover {\n  background: #FF4F8E;\n}\n.cov-date-next[data-v-3faef998]::before,\n.cov-date-previous[data-v-3faef998]::before {\n  width: 20px;\n  height: 2px;\n  text-align: center;\n  position: absolute;\n  background: #fff;\n  top: 50%;\n  margin-top: -7px;\n  margin-left: -7px;\n  left: 50%;\n  line-height: 0;\n  content: '';\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.cov-date-next[data-v-3faef998]::after,\n.cov-date-previous[data-v-3faef998]::after {\n  width: 20px;\n  height: 2px;\n  text-align: center;\n  position: absolute;\n  background: #fff;\n  margin-top: 6px;\n  margin-left: -7px;\n  top: 50%;\n  left: 50%;\n  line-height: 0;\n  content: '';\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.cov-date-previous[data-v-3faef998]::after {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.cov-date-previous[data-v-3faef998]::before {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.date-item[data-v-3faef998] {\n  text-align: center;\n  font-size: 20px;\n  padding: 10px 0;\n  cursor: pointer;\n}\n.date-item[data-v-3faef998]:hover {\n  background: #e0e0e0;\n}\n.date-list[data-v-3faef998] {\n  overflow: auto;\n  vertical-align: top;\n  padding: 0;\n}\n.cov-vue-date[data-v-3faef998] {\n  display: inline-block;\n  color: #5D5D5D;\n}\n.button-box[data-v-3faef998] {\n  background: #fff;\n  vertical-align: top;\n  height: 50px;\n  line-height: 50px;\n  text-align: right;\n  padding-right: 20px;\n}\n.button-box span[data-v-3faef998] {\n  cursor: pointer;\n  padding: 10px 20px;\n}\n.watch-box[data-v-3faef998] {\n  height: 100%;\n  overflow: hidden;\n}\n.hour-box[data-v-3faef998],\n.min-box[data-v-3faef998] {\n  display: inline-block;\n  width: 50%;\n  text-align: center;\n  height: 100%;\n  overflow: auto;\n  float: left;\n}\n.hour-box ul[data-v-3faef998],\n.min-box ul[data-v-3faef998] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.hour-item[data-v-3faef998],\n.min-item[data-v-3faef998] {\n  padding: 10px;\n  font-size: 36px;\n  cursor: pointer;\n}\n.hour-item[data-v-3faef998]:hover,\n.min-item[data-v-3faef998]:hover {\n  background: #E3E3E3;\n}\n.hour-box .active[data-v-3faef998],\n.min-box .active[data-v-3faef998] {\n  background: #F50057;\n  color: #FFF !important;\n}\n[data-v-3faef998]::-webkit-scrollbar {\n  width: 2px;\n}\n[data-v-3faef998]::-webkit-scrollbar-track {\n  background: #E3E3E3;\n}\n[data-v-3faef998]::-webkit-scrollbar-thumb {\n  background: #C1C1C1;\n  border-radius: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/emojione/lib/js/emojione.js":
/*!**************************************************!*\
  !*** ./node_modules/emojione/lib/js/emojione.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* jshint maxerr: 10000 */
/* jslint unused: true */
/* jshint shadow: true */
/* jshint -W075 */
(function(ns){
    // this list must be ordered from largest length of the value array, index 0, to the shortest
    ns.emojioneList = {":kiss_ww:":{"unicode":["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","1f469-2764-1f48b-1f469"],"fname":"1f469-2764-1f48b-1f469","uc":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","isCanonical": true},":couplekiss_ww:":{"unicode":["1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","1f469-2764-1f48b-1f469"],"fname":"1f469-2764-1f48b-1f469","uc":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","isCanonical": false},":kiss_mm:":{"unicode":["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","1f468-2764-1f48b-1f468"],"fname":"1f468-2764-1f48b-1f468","uc":"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","isCanonical": true},":couplekiss_mm:":{"unicode":["1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","1f468-2764-1f48b-1f468"],"fname":"1f468-2764-1f48b-1f468","uc":"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","isCanonical": false},":family_mmbb:":{"unicode":["1f468-200d-1f468-200d-1f466-200d-1f466","1f468-1f468-1f466-1f466"],"fname":"1f468-1f468-1f466-1f466","uc":"1f468-200d-1f468-200d-1f466-200d-1f466","isCanonical": true},":family_mmgb:":{"unicode":["1f468-200d-1f468-200d-1f467-200d-1f466","1f468-1f468-1f467-1f466"],"fname":"1f468-1f468-1f467-1f466","uc":"1f468-200d-1f468-200d-1f467-200d-1f466","isCanonical": true},":family_mmgg:":{"unicode":["1f468-200d-1f468-200d-1f467-200d-1f467","1f468-1f468-1f467-1f467"],"fname":"1f468-1f468-1f467-1f467","uc":"1f468-200d-1f468-200d-1f467-200d-1f467","isCanonical": true},":family_mwbb:":{"unicode":["1f468-200d-1f469-200d-1f466-200d-1f466","1f468-1f469-1f466-1f466"],"fname":"1f468-1f469-1f466-1f466","uc":"1f468-200d-1f469-200d-1f466-200d-1f466","isCanonical": true},":family_mwgb:":{"unicode":["1f468-200d-1f469-200d-1f467-200d-1f466","1f468-1f469-1f467-1f466"],"fname":"1f468-1f469-1f467-1f466","uc":"1f468-200d-1f469-200d-1f467-200d-1f466","isCanonical": true},":family_mwgg:":{"unicode":["1f468-200d-1f469-200d-1f467-200d-1f467","1f468-1f469-1f467-1f467"],"fname":"1f468-1f469-1f467-1f467","uc":"1f468-200d-1f469-200d-1f467-200d-1f467","isCanonical": true},":family_wwbb:":{"unicode":["1f469-200d-1f469-200d-1f466-200d-1f466","1f469-1f469-1f466-1f466"],"fname":"1f469-1f469-1f466-1f466","uc":"1f469-200d-1f469-200d-1f466-200d-1f466","isCanonical": true},":family_wwgb:":{"unicode":["1f469-200d-1f469-200d-1f467-200d-1f466","1f469-1f469-1f467-1f466"],"fname":"1f469-1f469-1f467-1f466","uc":"1f469-200d-1f469-200d-1f467-200d-1f466","isCanonical": true},":family_wwgg:":{"unicode":["1f469-200d-1f469-200d-1f467-200d-1f467","1f469-1f469-1f467-1f467"],"fname":"1f469-1f469-1f467-1f467","uc":"1f469-200d-1f469-200d-1f467-200d-1f467","isCanonical": true},":couple_ww:":{"unicode":["1f469-200d-2764-fe0f-200d-1f469","1f469-2764-1f469"],"fname":"1f469-2764-1f469","uc":"1f469-200d-2764-fe0f-200d-1f469","isCanonical": true},":couple_with_heart_ww:":{"unicode":["1f469-200d-2764-fe0f-200d-1f469","1f469-2764-1f469"],"fname":"1f469-2764-1f469","uc":"1f469-200d-2764-fe0f-200d-1f469","isCanonical": false},":couple_mm:":{"unicode":["1f468-200d-2764-fe0f-200d-1f468","1f468-2764-1f468"],"fname":"1f468-2764-1f468","uc":"1f468-200d-2764-fe0f-200d-1f468","isCanonical": true},":couple_with_heart_mm:":{"unicode":["1f468-200d-2764-fe0f-200d-1f468","1f468-2764-1f468"],"fname":"1f468-2764-1f468","uc":"1f468-200d-2764-fe0f-200d-1f468","isCanonical": false},":family_mmb:":{"unicode":["1f468-200d-1f468-200d-1f466","1f468-1f468-1f466"],"fname":"1f468-1f468-1f466","uc":"1f468-200d-1f468-200d-1f466","isCanonical": true},":family_mmg:":{"unicode":["1f468-200d-1f468-200d-1f467","1f468-1f468-1f467"],"fname":"1f468-1f468-1f467","uc":"1f468-200d-1f468-200d-1f467","isCanonical": true},":family_mwg:":{"unicode":["1f468-200d-1f469-200d-1f467","1f468-1f469-1f467"],"fname":"1f468-1f469-1f467","uc":"1f468-200d-1f469-200d-1f467","isCanonical": true},":family_wwb:":{"unicode":["1f469-200d-1f469-200d-1f466","1f469-1f469-1f466"],"fname":"1f469-1f469-1f466","uc":"1f469-200d-1f469-200d-1f466","isCanonical": true},":family_wwg:":{"unicode":["1f469-200d-1f469-200d-1f467","1f469-1f469-1f467"],"fname":"1f469-1f469-1f467","uc":"1f469-200d-1f469-200d-1f467","isCanonical": true},":rainbow_flag:":{"unicode":["1f3f3-fe0f-200d-1f308","1f3f3-1f308"],"fname":"1f3f3-1f308","uc":"1f3f3-fe0f-200d-1f308","isCanonical": true},":gay_pride_flag:":{"unicode":["1f3f3-fe0f-200d-1f308","1f3f3-1f308"],"fname":"1f3f3-1f308","uc":"1f3f3-fe0f-200d-1f308","isCanonical": false},":eye_in_speech_bubble:":{"unicode":["1f441-200d-1f5e8","1f441-1f5e8"],"fname":"1f441-1f5e8","uc":"1f441-200d-1f5e8","isCanonical": true},":hash:":{"unicode":["0023-fe0f-20e3","0023-20e3"],"fname":"0023-20e3","uc":"0023-20e3","isCanonical": true},":zero:":{"unicode":["0030-fe0f-20e3","0030-20e3"],"fname":"0030-20e3","uc":"0030-20e3","isCanonical": true},":one:":{"unicode":["0031-fe0f-20e3","0031-20e3"],"fname":"0031-20e3","uc":"0031-20e3","isCanonical": true},":two:":{"unicode":["0032-fe0f-20e3","0032-20e3"],"fname":"0032-20e3","uc":"0032-20e3","isCanonical": true},":three:":{"unicode":["0033-fe0f-20e3","0033-20e3"],"fname":"0033-20e3","uc":"0033-20e3","isCanonical": true},":four:":{"unicode":["0034-fe0f-20e3","0034-20e3"],"fname":"0034-20e3","uc":"0034-20e3","isCanonical": true},":five:":{"unicode":["0035-fe0f-20e3","0035-20e3"],"fname":"0035-20e3","uc":"0035-20e3","isCanonical": true},":six:":{"unicode":["0036-fe0f-20e3","0036-20e3"],"fname":"0036-20e3","uc":"0036-20e3","isCanonical": true},":seven:":{"unicode":["0037-fe0f-20e3","0037-20e3"],"fname":"0037-20e3","uc":"0037-20e3","isCanonical": true},":eight:":{"unicode":["0038-fe0f-20e3","0038-20e3"],"fname":"0038-20e3","uc":"0038-20e3","isCanonical": true},":nine:":{"unicode":["0039-fe0f-20e3","0039-20e3"],"fname":"0039-20e3","uc":"0039-20e3","isCanonical": true},":asterisk:":{"unicode":["002a-fe0f-20e3","002a-20e3"],"fname":"002a-20e3","uc":"002a-20e3","isCanonical": true},":keycap_asterisk:":{"unicode":["002a-fe0f-20e3","002a-20e3"],"fname":"002a-20e3","uc":"002a-20e3","isCanonical": false},":handball_tone5:":{"unicode":["1f93e-1f3ff"],"fname":"1f93e-1f3ff","uc":"1f93e-1f3ff","isCanonical": true},":handball_tone4:":{"unicode":["1f93e-1f3fe"],"fname":"1f93e-1f3fe","uc":"1f93e-1f3fe","isCanonical": true},":handball_tone3:":{"unicode":["1f93e-1f3fd"],"fname":"1f93e-1f3fd","uc":"1f93e-1f3fd","isCanonical": true},":handball_tone2:":{"unicode":["1f93e-1f3fc"],"fname":"1f93e-1f3fc","uc":"1f93e-1f3fc","isCanonical": true},":handball_tone1:":{"unicode":["1f93e-1f3fb"],"fname":"1f93e-1f3fb","uc":"1f93e-1f3fb","isCanonical": true},":water_polo_tone5:":{"unicode":["1f93d-1f3ff"],"fname":"1f93d-1f3ff","uc":"1f93d-1f3ff","isCanonical": true},":water_polo_tone4:":{"unicode":["1f93d-1f3fe"],"fname":"1f93d-1f3fe","uc":"1f93d-1f3fe","isCanonical": true},":water_polo_tone3:":{"unicode":["1f93d-1f3fd"],"fname":"1f93d-1f3fd","uc":"1f93d-1f3fd","isCanonical": true},":water_polo_tone2:":{"unicode":["1f93d-1f3fc"],"fname":"1f93d-1f3fc","uc":"1f93d-1f3fc","isCanonical": true},":water_polo_tone1:":{"unicode":["1f93d-1f3fb"],"fname":"1f93d-1f3fb","uc":"1f93d-1f3fb","isCanonical": true},":wrestlers_tone5:":{"unicode":["1f93c-1f3ff"],"fname":"1f93c-1f3ff","uc":"1f93c-1f3ff","isCanonical": true},":wrestling_tone5:":{"unicode":["1f93c-1f3ff"],"fname":"1f93c-1f3ff","uc":"1f93c-1f3ff","isCanonical": false},":wrestlers_tone4:":{"unicode":["1f93c-1f3fe"],"fname":"1f93c-1f3fe","uc":"1f93c-1f3fe","isCanonical": true},":wrestling_tone4:":{"unicode":["1f93c-1f3fe"],"fname":"1f93c-1f3fe","uc":"1f93c-1f3fe","isCanonical": false},":wrestlers_tone3:":{"unicode":["1f93c-1f3fd"],"fname":"1f93c-1f3fd","uc":"1f93c-1f3fd","isCanonical": true},":wrestling_tone3:":{"unicode":["1f93c-1f3fd"],"fname":"1f93c-1f3fd","uc":"1f93c-1f3fd","isCanonical": false},":wrestlers_tone2:":{"unicode":["1f93c-1f3fc"],"fname":"1f93c-1f3fc","uc":"1f93c-1f3fc","isCanonical": true},":wrestling_tone2:":{"unicode":["1f93c-1f3fc"],"fname":"1f93c-1f3fc","uc":"1f93c-1f3fc","isCanonical": false},":wrestlers_tone1:":{"unicode":["1f93c-1f3fb"],"fname":"1f93c-1f3fb","uc":"1f93c-1f3fb","isCanonical": true},":wrestling_tone1:":{"unicode":["1f93c-1f3fb"],"fname":"1f93c-1f3fb","uc":"1f93c-1f3fb","isCanonical": false},":juggling_tone5:":{"unicode":["1f939-1f3ff"],"fname":"1f939-1f3ff","uc":"1f939-1f3ff","isCanonical": true},":juggler_tone5:":{"unicode":["1f939-1f3ff"],"fname":"1f939-1f3ff","uc":"1f939-1f3ff","isCanonical": false},":juggling_tone4:":{"unicode":["1f939-1f3fe"],"fname":"1f939-1f3fe","uc":"1f939-1f3fe","isCanonical": true},":juggler_tone4:":{"unicode":["1f939-1f3fe"],"fname":"1f939-1f3fe","uc":"1f939-1f3fe","isCanonical": false},":juggling_tone3:":{"unicode":["1f939-1f3fd"],"fname":"1f939-1f3fd","uc":"1f939-1f3fd","isCanonical": true},":juggler_tone3:":{"unicode":["1f939-1f3fd"],"fname":"1f939-1f3fd","uc":"1f939-1f3fd","isCanonical": false},":juggling_tone2:":{"unicode":["1f939-1f3fc"],"fname":"1f939-1f3fc","uc":"1f939-1f3fc","isCanonical": true},":juggler_tone2:":{"unicode":["1f939-1f3fc"],"fname":"1f939-1f3fc","uc":"1f939-1f3fc","isCanonical": false},":juggling_tone1:":{"unicode":["1f939-1f3fb"],"fname":"1f939-1f3fb","uc":"1f939-1f3fb","isCanonical": true},":juggler_tone1:":{"unicode":["1f939-1f3fb"],"fname":"1f939-1f3fb","uc":"1f939-1f3fb","isCanonical": false},":cartwheel_tone5:":{"unicode":["1f938-1f3ff"],"fname":"1f938-1f3ff","uc":"1f938-1f3ff","isCanonical": true},":person_doing_cartwheel_tone5:":{"unicode":["1f938-1f3ff"],"fname":"1f938-1f3ff","uc":"1f938-1f3ff","isCanonical": false},":cartwheel_tone4:":{"unicode":["1f938-1f3fe"],"fname":"1f938-1f3fe","uc":"1f938-1f3fe","isCanonical": true},":person_doing_cartwheel_tone4:":{"unicode":["1f938-1f3fe"],"fname":"1f938-1f3fe","uc":"1f938-1f3fe","isCanonical": false},":cartwheel_tone3:":{"unicode":["1f938-1f3fd"],"fname":"1f938-1f3fd","uc":"1f938-1f3fd","isCanonical": true},":person_doing_cartwheel_tone3:":{"unicode":["1f938-1f3fd"],"fname":"1f938-1f3fd","uc":"1f938-1f3fd","isCanonical": false},":cartwheel_tone2:":{"unicode":["1f938-1f3fc"],"fname":"1f938-1f3fc","uc":"1f938-1f3fc","isCanonical": true},":person_doing_cartwheel_tone2:":{"unicode":["1f938-1f3fc"],"fname":"1f938-1f3fc","uc":"1f938-1f3fc","isCanonical": false},":cartwheel_tone1:":{"unicode":["1f938-1f3fb"],"fname":"1f938-1f3fb","uc":"1f938-1f3fb","isCanonical": true},":person_doing_cartwheel_tone1:":{"unicode":["1f938-1f3fb"],"fname":"1f938-1f3fb","uc":"1f938-1f3fb","isCanonical": false},":shrug_tone5:":{"unicode":["1f937-1f3ff"],"fname":"1f937-1f3ff","uc":"1f937-1f3ff","isCanonical": true},":shrug_tone4:":{"unicode":["1f937-1f3fe"],"fname":"1f937-1f3fe","uc":"1f937-1f3fe","isCanonical": true},":shrug_tone3:":{"unicode":["1f937-1f3fd"],"fname":"1f937-1f3fd","uc":"1f937-1f3fd","isCanonical": true},":shrug_tone2:":{"unicode":["1f937-1f3fc"],"fname":"1f937-1f3fc","uc":"1f937-1f3fc","isCanonical": true},":shrug_tone1:":{"unicode":["1f937-1f3fb"],"fname":"1f937-1f3fb","uc":"1f937-1f3fb","isCanonical": true},":mrs_claus_tone5:":{"unicode":["1f936-1f3ff"],"fname":"1f936-1f3ff","uc":"1f936-1f3ff","isCanonical": true},":mother_christmas_tone5:":{"unicode":["1f936-1f3ff"],"fname":"1f936-1f3ff","uc":"1f936-1f3ff","isCanonical": false},":mrs_claus_tone4:":{"unicode":["1f936-1f3fe"],"fname":"1f936-1f3fe","uc":"1f936-1f3fe","isCanonical": true},":mother_christmas_tone4:":{"unicode":["1f936-1f3fe"],"fname":"1f936-1f3fe","uc":"1f936-1f3fe","isCanonical": false},":mrs_claus_tone3:":{"unicode":["1f936-1f3fd"],"fname":"1f936-1f3fd","uc":"1f936-1f3fd","isCanonical": true},":mother_christmas_tone3:":{"unicode":["1f936-1f3fd"],"fname":"1f936-1f3fd","uc":"1f936-1f3fd","isCanonical": false},":mrs_claus_tone2:":{"unicode":["1f936-1f3fc"],"fname":"1f936-1f3fc","uc":"1f936-1f3fc","isCanonical": true},":mother_christmas_tone2:":{"unicode":["1f936-1f3fc"],"fname":"1f936-1f3fc","uc":"1f936-1f3fc","isCanonical": false},":mrs_claus_tone1:":{"unicode":["1f936-1f3fb"],"fname":"1f936-1f3fb","uc":"1f936-1f3fb","isCanonical": true},":mother_christmas_tone1:":{"unicode":["1f936-1f3fb"],"fname":"1f936-1f3fb","uc":"1f936-1f3fb","isCanonical": false},":man_in_tuxedo_tone5:":{"unicode":["1f935-1f3ff"],"fname":"1f935-1f3ff","uc":"1f935-1f3ff","isCanonical": true},":tuxedo_tone5:":{"unicode":["1f935-1f3ff"],"fname":"1f935-1f3ff","uc":"1f935-1f3ff","isCanonical": false},":man_in_tuxedo_tone4:":{"unicode":["1f935-1f3fe"],"fname":"1f935-1f3fe","uc":"1f935-1f3fe","isCanonical": true},":tuxedo_tone4:":{"unicode":["1f935-1f3fe"],"fname":"1f935-1f3fe","uc":"1f935-1f3fe","isCanonical": false},":man_in_tuxedo_tone3:":{"unicode":["1f935-1f3fd"],"fname":"1f935-1f3fd","uc":"1f935-1f3fd","isCanonical": true},":tuxedo_tone3:":{"unicode":["1f935-1f3fd"],"fname":"1f935-1f3fd","uc":"1f935-1f3fd","isCanonical": false},":man_in_tuxedo_tone2:":{"unicode":["1f935-1f3fc"],"fname":"1f935-1f3fc","uc":"1f935-1f3fc","isCanonical": true},":tuxedo_tone2:":{"unicode":["1f935-1f3fc"],"fname":"1f935-1f3fc","uc":"1f935-1f3fc","isCanonical": false},":man_in_tuxedo_tone1:":{"unicode":["1f935-1f3fb"],"fname":"1f935-1f3fb","uc":"1f935-1f3fb","isCanonical": true},":tuxedo_tone1:":{"unicode":["1f935-1f3fb"],"fname":"1f935-1f3fb","uc":"1f935-1f3fb","isCanonical": false},":prince_tone5:":{"unicode":["1f934-1f3ff"],"fname":"1f934-1f3ff","uc":"1f934-1f3ff","isCanonical": true},":prince_tone4:":{"unicode":["1f934-1f3fe"],"fname":"1f934-1f3fe","uc":"1f934-1f3fe","isCanonical": true},":prince_tone3:":{"unicode":["1f934-1f3fd"],"fname":"1f934-1f3fd","uc":"1f934-1f3fd","isCanonical": true},":prince_tone2:":{"unicode":["1f934-1f3fc"],"fname":"1f934-1f3fc","uc":"1f934-1f3fc","isCanonical": true},":prince_tone1:":{"unicode":["1f934-1f3fb"],"fname":"1f934-1f3fb","uc":"1f934-1f3fb","isCanonical": true},":selfie_tone5:":{"unicode":["1f933-1f3ff"],"fname":"1f933-1f3ff","uc":"1f933-1f3ff","isCanonical": true},":selfie_tone4:":{"unicode":["1f933-1f3fe"],"fname":"1f933-1f3fe","uc":"1f933-1f3fe","isCanonical": true},":selfie_tone3:":{"unicode":["1f933-1f3fd"],"fname":"1f933-1f3fd","uc":"1f933-1f3fd","isCanonical": true},":selfie_tone2:":{"unicode":["1f933-1f3fc"],"fname":"1f933-1f3fc","uc":"1f933-1f3fc","isCanonical": true},":selfie_tone1:":{"unicode":["1f933-1f3fb"],"fname":"1f933-1f3fb","uc":"1f933-1f3fb","isCanonical": true},":pregnant_woman_tone5:":{"unicode":["1f930-1f3ff"],"fname":"1f930-1f3ff","uc":"1f930-1f3ff","isCanonical": true},":expecting_woman_tone5:":{"unicode":["1f930-1f3ff"],"fname":"1f930-1f3ff","uc":"1f930-1f3ff","isCanonical": false},":pregnant_woman_tone4:":{"unicode":["1f930-1f3fe"],"fname":"1f930-1f3fe","uc":"1f930-1f3fe","isCanonical": true},":expecting_woman_tone4:":{"unicode":["1f930-1f3fe"],"fname":"1f930-1f3fe","uc":"1f930-1f3fe","isCanonical": false},":pregnant_woman_tone3:":{"unicode":["1f930-1f3fd"],"fname":"1f930-1f3fd","uc":"1f930-1f3fd","isCanonical": true},":expecting_woman_tone3:":{"unicode":["1f930-1f3fd"],"fname":"1f930-1f3fd","uc":"1f930-1f3fd","isCanonical": false},":pregnant_woman_tone2:":{"unicode":["1f930-1f3fc"],"fname":"1f930-1f3fc","uc":"1f930-1f3fc","isCanonical": true},":expecting_woman_tone2:":{"unicode":["1f930-1f3fc"],"fname":"1f930-1f3fc","uc":"1f930-1f3fc","isCanonical": false},":pregnant_woman_tone1:":{"unicode":["1f930-1f3fb"],"fname":"1f930-1f3fb","uc":"1f930-1f3fb","isCanonical": true},":expecting_woman_tone1:":{"unicode":["1f930-1f3fb"],"fname":"1f930-1f3fb","uc":"1f930-1f3fb","isCanonical": false},":face_palm_tone5:":{"unicode":["1f926-1f3ff"],"fname":"1f926-1f3ff","uc":"1f926-1f3ff","isCanonical": true},":facepalm_tone5:":{"unicode":["1f926-1f3ff"],"fname":"1f926-1f3ff","uc":"1f926-1f3ff","isCanonical": false},":face_palm_tone4:":{"unicode":["1f926-1f3fe"],"fname":"1f926-1f3fe","uc":"1f926-1f3fe","isCanonical": true},":facepalm_tone4:":{"unicode":["1f926-1f3fe"],"fname":"1f926-1f3fe","uc":"1f926-1f3fe","isCanonical": false},":face_palm_tone3:":{"unicode":["1f926-1f3fd"],"fname":"1f926-1f3fd","uc":"1f926-1f3fd","isCanonical": true},":facepalm_tone3:":{"unicode":["1f926-1f3fd"],"fname":"1f926-1f3fd","uc":"1f926-1f3fd","isCanonical": false},":face_palm_tone2:":{"unicode":["1f926-1f3fc"],"fname":"1f926-1f3fc","uc":"1f926-1f3fc","isCanonical": true},":facepalm_tone2:":{"unicode":["1f926-1f3fc"],"fname":"1f926-1f3fc","uc":"1f926-1f3fc","isCanonical": false},":face_palm_tone1:":{"unicode":["1f926-1f3fb"],"fname":"1f926-1f3fb","uc":"1f926-1f3fb","isCanonical": true},":facepalm_tone1:":{"unicode":["1f926-1f3fb"],"fname":"1f926-1f3fb","uc":"1f926-1f3fb","isCanonical": false},":fingers_crossed_tone5:":{"unicode":["1f91e-1f3ff"],"fname":"1f91e-1f3ff","uc":"1f91e-1f3ff","isCanonical": true},":hand_with_index_and_middle_fingers_crossed_tone5:":{"unicode":["1f91e-1f3ff"],"fname":"1f91e-1f3ff","uc":"1f91e-1f3ff","isCanonical": false},":fingers_crossed_tone4:":{"unicode":["1f91e-1f3fe"],"fname":"1f91e-1f3fe","uc":"1f91e-1f3fe","isCanonical": true},":hand_with_index_and_middle_fingers_crossed_tone4:":{"unicode":["1f91e-1f3fe"],"fname":"1f91e-1f3fe","uc":"1f91e-1f3fe","isCanonical": false},":fingers_crossed_tone3:":{"unicode":["1f91e-1f3fd"],"fname":"1f91e-1f3fd","uc":"1f91e-1f3fd","isCanonical": true},":hand_with_index_and_middle_fingers_crossed_tone3:":{"unicode":["1f91e-1f3fd"],"fname":"1f91e-1f3fd","uc":"1f91e-1f3fd","isCanonical": false},":fingers_crossed_tone2:":{"unicode":["1f91e-1f3fc"],"fname":"1f91e-1f3fc","uc":"1f91e-1f3fc","isCanonical": true},":hand_with_index_and_middle_fingers_crossed_tone2:":{"unicode":["1f91e-1f3fc"],"fname":"1f91e-1f3fc","uc":"1f91e-1f3fc","isCanonical": false},":fingers_crossed_tone1:":{"unicode":["1f91e-1f3fb"],"fname":"1f91e-1f3fb","uc":"1f91e-1f3fb","isCanonical": true},":hand_with_index_and_middle_fingers_crossed_tone1:":{"unicode":["1f91e-1f3fb"],"fname":"1f91e-1f3fb","uc":"1f91e-1f3fb","isCanonical": false},":handshake_tone5:":{"unicode":["1f91d-1f3ff"],"fname":"1f91d-1f3ff","uc":"1f91d-1f3ff","isCanonical": true},":shaking_hands_tone5:":{"unicode":["1f91d-1f3ff"],"fname":"1f91d-1f3ff","uc":"1f91d-1f3ff","isCanonical": false},":handshake_tone4:":{"unicode":["1f91d-1f3fe"],"fname":"1f91d-1f3fe","uc":"1f91d-1f3fe","isCanonical": true},":shaking_hands_tone4:":{"unicode":["1f91d-1f3fe"],"fname":"1f91d-1f3fe","uc":"1f91d-1f3fe","isCanonical": false},":handshake_tone3:":{"unicode":["1f91d-1f3fd"],"fname":"1f91d-1f3fd","uc":"1f91d-1f3fd","isCanonical": true},":shaking_hands_tone3:":{"unicode":["1f91d-1f3fd"],"fname":"1f91d-1f3fd","uc":"1f91d-1f3fd","isCanonical": false},":handshake_tone2:":{"unicode":["1f91d-1f3fc"],"fname":"1f91d-1f3fc","uc":"1f91d-1f3fc","isCanonical": true},":shaking_hands_tone2:":{"unicode":["1f91d-1f3fc"],"fname":"1f91d-1f3fc","uc":"1f91d-1f3fc","isCanonical": false},":handshake_tone1:":{"unicode":["1f91d-1f3fb"],"fname":"1f91d-1f3fb","uc":"1f91d-1f3fb","isCanonical": true},":shaking_hands_tone1:":{"unicode":["1f91d-1f3fb"],"fname":"1f91d-1f3fb","uc":"1f91d-1f3fb","isCanonical": false},":right_facing_fist_tone5:":{"unicode":["1f91c-1f3ff"],"fname":"1f91c-1f3ff","uc":"1f91c-1f3ff","isCanonical": true},":right_fist_tone5:":{"unicode":["1f91c-1f3ff"],"fname":"1f91c-1f3ff","uc":"1f91c-1f3ff","isCanonical": false},":right_facing_fist_tone4:":{"unicode":["1f91c-1f3fe"],"fname":"1f91c-1f3fe","uc":"1f91c-1f3fe","isCanonical": true},":right_fist_tone4:":{"unicode":["1f91c-1f3fe"],"fname":"1f91c-1f3fe","uc":"1f91c-1f3fe","isCanonical": false},":right_facing_fist_tone3:":{"unicode":["1f91c-1f3fd"],"fname":"1f91c-1f3fd","uc":"1f91c-1f3fd","isCanonical": true},":right_fist_tone3:":{"unicode":["1f91c-1f3fd"],"fname":"1f91c-1f3fd","uc":"1f91c-1f3fd","isCanonical": false},":right_facing_fist_tone2:":{"unicode":["1f91c-1f3fc"],"fname":"1f91c-1f3fc","uc":"1f91c-1f3fc","isCanonical": true},":right_fist_tone2:":{"unicode":["1f91c-1f3fc"],"fname":"1f91c-1f3fc","uc":"1f91c-1f3fc","isCanonical": false},":right_facing_fist_tone1:":{"unicode":["1f91c-1f3fb"],"fname":"1f91c-1f3fb","uc":"1f91c-1f3fb","isCanonical": true},":right_fist_tone1:":{"unicode":["1f91c-1f3fb"],"fname":"1f91c-1f3fb","uc":"1f91c-1f3fb","isCanonical": false},":left_facing_fist_tone5:":{"unicode":["1f91b-1f3ff"],"fname":"1f91b-1f3ff","uc":"1f91b-1f3ff","isCanonical": true},":left_fist_tone5:":{"unicode":["1f91b-1f3ff"],"fname":"1f91b-1f3ff","uc":"1f91b-1f3ff","isCanonical": false},":left_facing_fist_tone4:":{"unicode":["1f91b-1f3fe"],"fname":"1f91b-1f3fe","uc":"1f91b-1f3fe","isCanonical": true},":left_fist_tone4:":{"unicode":["1f91b-1f3fe"],"fname":"1f91b-1f3fe","uc":"1f91b-1f3fe","isCanonical": false},":left_facing_fist_tone3:":{"unicode":["1f91b-1f3fd"],"fname":"1f91b-1f3fd","uc":"1f91b-1f3fd","isCanonical": true},":left_fist_tone3:":{"unicode":["1f91b-1f3fd"],"fname":"1f91b-1f3fd","uc":"1f91b-1f3fd","isCanonical": false},":left_facing_fist_tone2:":{"unicode":["1f91b-1f3fc"],"fname":"1f91b-1f3fc","uc":"1f91b-1f3fc","isCanonical": true},":left_fist_tone2:":{"unicode":["1f91b-1f3fc"],"fname":"1f91b-1f3fc","uc":"1f91b-1f3fc","isCanonical": false},":left_facing_fist_tone1:":{"unicode":["1f91b-1f3fb"],"fname":"1f91b-1f3fb","uc":"1f91b-1f3fb","isCanonical": true},":left_fist_tone1:":{"unicode":["1f91b-1f3fb"],"fname":"1f91b-1f3fb","uc":"1f91b-1f3fb","isCanonical": false},":raised_back_of_hand_tone5:":{"unicode":["1f91a-1f3ff"],"fname":"1f91a-1f3ff","uc":"1f91a-1f3ff","isCanonical": true},":back_of_hand_tone5:":{"unicode":["1f91a-1f3ff"],"fname":"1f91a-1f3ff","uc":"1f91a-1f3ff","isCanonical": false},":raised_back_of_hand_tone4:":{"unicode":["1f91a-1f3fe"],"fname":"1f91a-1f3fe","uc":"1f91a-1f3fe","isCanonical": true},":back_of_hand_tone4:":{"unicode":["1f91a-1f3fe"],"fname":"1f91a-1f3fe","uc":"1f91a-1f3fe","isCanonical": false},":raised_back_of_hand_tone3:":{"unicode":["1f91a-1f3fd"],"fname":"1f91a-1f3fd","uc":"1f91a-1f3fd","isCanonical": true},":back_of_hand_tone3:":{"unicode":["1f91a-1f3fd"],"fname":"1f91a-1f3fd","uc":"1f91a-1f3fd","isCanonical": false},":raised_back_of_hand_tone2:":{"unicode":["1f91a-1f3fc"],"fname":"1f91a-1f3fc","uc":"1f91a-1f3fc","isCanonical": true},":back_of_hand_tone2:":{"unicode":["1f91a-1f3fc"],"fname":"1f91a-1f3fc","uc":"1f91a-1f3fc","isCanonical": false},":raised_back_of_hand_tone1:":{"unicode":["1f91a-1f3fb"],"fname":"1f91a-1f3fb","uc":"1f91a-1f3fb","isCanonical": true},":back_of_hand_tone1:":{"unicode":["1f91a-1f3fb"],"fname":"1f91a-1f3fb","uc":"1f91a-1f3fb","isCanonical": false},":call_me_tone5:":{"unicode":["1f919-1f3ff"],"fname":"1f919-1f3ff","uc":"1f919-1f3ff","isCanonical": true},":call_me_hand_tone5:":{"unicode":["1f919-1f3ff"],"fname":"1f919-1f3ff","uc":"1f919-1f3ff","isCanonical": false},":call_me_tone4:":{"unicode":["1f919-1f3fe"],"fname":"1f919-1f3fe","uc":"1f919-1f3fe","isCanonical": true},":call_me_hand_tone4:":{"unicode":["1f919-1f3fe"],"fname":"1f919-1f3fe","uc":"1f919-1f3fe","isCanonical": false},":call_me_tone3:":{"unicode":["1f919-1f3fd"],"fname":"1f919-1f3fd","uc":"1f919-1f3fd","isCanonical": true},":call_me_hand_tone3:":{"unicode":["1f919-1f3fd"],"fname":"1f919-1f3fd","uc":"1f919-1f3fd","isCanonical": false},":call_me_tone2:":{"unicode":["1f919-1f3fc"],"fname":"1f919-1f3fc","uc":"1f919-1f3fc","isCanonical": true},":call_me_hand_tone2:":{"unicode":["1f919-1f3fc"],"fname":"1f919-1f3fc","uc":"1f919-1f3fc","isCanonical": false},":call_me_tone1:":{"unicode":["1f919-1f3fb"],"fname":"1f919-1f3fb","uc":"1f919-1f3fb","isCanonical": true},":call_me_hand_tone1:":{"unicode":["1f919-1f3fb"],"fname":"1f919-1f3fb","uc":"1f919-1f3fb","isCanonical": false},":metal_tone5:":{"unicode":["1f918-1f3ff"],"fname":"1f918-1f3ff","uc":"1f918-1f3ff","isCanonical": true},":sign_of_the_horns_tone5:":{"unicode":["1f918-1f3ff"],"fname":"1f918-1f3ff","uc":"1f918-1f3ff","isCanonical": false},":metal_tone4:":{"unicode":["1f918-1f3fe"],"fname":"1f918-1f3fe","uc":"1f918-1f3fe","isCanonical": true},":sign_of_the_horns_tone4:":{"unicode":["1f918-1f3fe"],"fname":"1f918-1f3fe","uc":"1f918-1f3fe","isCanonical": false},":metal_tone3:":{"unicode":["1f918-1f3fd"],"fname":"1f918-1f3fd","uc":"1f918-1f3fd","isCanonical": true},":sign_of_the_horns_tone3:":{"unicode":["1f918-1f3fd"],"fname":"1f918-1f3fd","uc":"1f918-1f3fd","isCanonical": false},":metal_tone2:":{"unicode":["1f918-1f3fc"],"fname":"1f918-1f3fc","uc":"1f918-1f3fc","isCanonical": true},":sign_of_the_horns_tone2:":{"unicode":["1f918-1f3fc"],"fname":"1f918-1f3fc","uc":"1f918-1f3fc","isCanonical": false},":metal_tone1:":{"unicode":["1f918-1f3fb"],"fname":"1f918-1f3fb","uc":"1f918-1f3fb","isCanonical": true},":sign_of_the_horns_tone1:":{"unicode":["1f918-1f3fb"],"fname":"1f918-1f3fb","uc":"1f918-1f3fb","isCanonical": false},":bath_tone5:":{"unicode":["1f6c0-1f3ff"],"fname":"1f6c0-1f3ff","uc":"1f6c0-1f3ff","isCanonical": true},":bath_tone4:":{"unicode":["1f6c0-1f3fe"],"fname":"1f6c0-1f3fe","uc":"1f6c0-1f3fe","isCanonical": true},":bath_tone3:":{"unicode":["1f6c0-1f3fd"],"fname":"1f6c0-1f3fd","uc":"1f6c0-1f3fd","isCanonical": true},":bath_tone2:":{"unicode":["1f6c0-1f3fc"],"fname":"1f6c0-1f3fc","uc":"1f6c0-1f3fc","isCanonical": true},":bath_tone1:":{"unicode":["1f6c0-1f3fb"],"fname":"1f6c0-1f3fb","uc":"1f6c0-1f3fb","isCanonical": true},":walking_tone5:":{"unicode":["1f6b6-1f3ff"],"fname":"1f6b6-1f3ff","uc":"1f6b6-1f3ff","isCanonical": true},":walking_tone4:":{"unicode":["1f6b6-1f3fe"],"fname":"1f6b6-1f3fe","uc":"1f6b6-1f3fe","isCanonical": true},":walking_tone3:":{"unicode":["1f6b6-1f3fd"],"fname":"1f6b6-1f3fd","uc":"1f6b6-1f3fd","isCanonical": true},":walking_tone2:":{"unicode":["1f6b6-1f3fc"],"fname":"1f6b6-1f3fc","uc":"1f6b6-1f3fc","isCanonical": true},":walking_tone1:":{"unicode":["1f6b6-1f3fb"],"fname":"1f6b6-1f3fb","uc":"1f6b6-1f3fb","isCanonical": true},":mountain_bicyclist_tone5:":{"unicode":["1f6b5-1f3ff"],"fname":"1f6b5-1f3ff","uc":"1f6b5-1f3ff","isCanonical": true},":mountain_bicyclist_tone4:":{"unicode":["1f6b5-1f3fe"],"fname":"1f6b5-1f3fe","uc":"1f6b5-1f3fe","isCanonical": true},":mountain_bicyclist_tone3:":{"unicode":["1f6b5-1f3fd"],"fname":"1f6b5-1f3fd","uc":"1f6b5-1f3fd","isCanonical": true},":mountain_bicyclist_tone2:":{"unicode":["1f6b5-1f3fc"],"fname":"1f6b5-1f3fc","uc":"1f6b5-1f3fc","isCanonical": true},":mountain_bicyclist_tone1:":{"unicode":["1f6b5-1f3fb"],"fname":"1f6b5-1f3fb","uc":"1f6b5-1f3fb","isCanonical": true},":bicyclist_tone5:":{"unicode":["1f6b4-1f3ff"],"fname":"1f6b4-1f3ff","uc":"1f6b4-1f3ff","isCanonical": true},":bicyclist_tone4:":{"unicode":["1f6b4-1f3fe"],"fname":"1f6b4-1f3fe","uc":"1f6b4-1f3fe","isCanonical": true},":bicyclist_tone3:":{"unicode":["1f6b4-1f3fd"],"fname":"1f6b4-1f3fd","uc":"1f6b4-1f3fd","isCanonical": true},":bicyclist_tone2:":{"unicode":["1f6b4-1f3fc"],"fname":"1f6b4-1f3fc","uc":"1f6b4-1f3fc","isCanonical": true},":bicyclist_tone1:":{"unicode":["1f6b4-1f3fb"],"fname":"1f6b4-1f3fb","uc":"1f6b4-1f3fb","isCanonical": true},":rowboat_tone5:":{"unicode":["1f6a3-1f3ff"],"fname":"1f6a3-1f3ff","uc":"1f6a3-1f3ff","isCanonical": true},":rowboat_tone4:":{"unicode":["1f6a3-1f3fe"],"fname":"1f6a3-1f3fe","uc":"1f6a3-1f3fe","isCanonical": true},":rowboat_tone3:":{"unicode":["1f6a3-1f3fd"],"fname":"1f6a3-1f3fd","uc":"1f6a3-1f3fd","isCanonical": true},":rowboat_tone2:":{"unicode":["1f6a3-1f3fc"],"fname":"1f6a3-1f3fc","uc":"1f6a3-1f3fc","isCanonical": true},":rowboat_tone1:":{"unicode":["1f6a3-1f3fb"],"fname":"1f6a3-1f3fb","uc":"1f6a3-1f3fb","isCanonical": true},":pray_tone5:":{"unicode":["1f64f-1f3ff"],"fname":"1f64f-1f3ff","uc":"1f64f-1f3ff","isCanonical": true},":pray_tone4:":{"unicode":["1f64f-1f3fe"],"fname":"1f64f-1f3fe","uc":"1f64f-1f3fe","isCanonical": true},":pray_tone3:":{"unicode":["1f64f-1f3fd"],"fname":"1f64f-1f3fd","uc":"1f64f-1f3fd","isCanonical": true},":pray_tone2:":{"unicode":["1f64f-1f3fc"],"fname":"1f64f-1f3fc","uc":"1f64f-1f3fc","isCanonical": true},":pray_tone1:":{"unicode":["1f64f-1f3fb"],"fname":"1f64f-1f3fb","uc":"1f64f-1f3fb","isCanonical": true},":person_with_pouting_face_tone5:":{"unicode":["1f64e-1f3ff"],"fname":"1f64e-1f3ff","uc":"1f64e-1f3ff","isCanonical": true},":person_with_pouting_face_tone4:":{"unicode":["1f64e-1f3fe"],"fname":"1f64e-1f3fe","uc":"1f64e-1f3fe","isCanonical": true},":person_with_pouting_face_tone3:":{"unicode":["1f64e-1f3fd"],"fname":"1f64e-1f3fd","uc":"1f64e-1f3fd","isCanonical": true},":person_with_pouting_face_tone2:":{"unicode":["1f64e-1f3fc"],"fname":"1f64e-1f3fc","uc":"1f64e-1f3fc","isCanonical": true},":person_with_pouting_face_tone1:":{"unicode":["1f64e-1f3fb"],"fname":"1f64e-1f3fb","uc":"1f64e-1f3fb","isCanonical": true},":person_frowning_tone5:":{"unicode":["1f64d-1f3ff"],"fname":"1f64d-1f3ff","uc":"1f64d-1f3ff","isCanonical": true},":person_frowning_tone4:":{"unicode":["1f64d-1f3fe"],"fname":"1f64d-1f3fe","uc":"1f64d-1f3fe","isCanonical": true},":person_frowning_tone3:":{"unicode":["1f64d-1f3fd"],"fname":"1f64d-1f3fd","uc":"1f64d-1f3fd","isCanonical": true},":person_frowning_tone2:":{"unicode":["1f64d-1f3fc"],"fname":"1f64d-1f3fc","uc":"1f64d-1f3fc","isCanonical": true},":person_frowning_tone1:":{"unicode":["1f64d-1f3fb"],"fname":"1f64d-1f3fb","uc":"1f64d-1f3fb","isCanonical": true},":raised_hands_tone5:":{"unicode":["1f64c-1f3ff"],"fname":"1f64c-1f3ff","uc":"1f64c-1f3ff","isCanonical": true},":raised_hands_tone4:":{"unicode":["1f64c-1f3fe"],"fname":"1f64c-1f3fe","uc":"1f64c-1f3fe","isCanonical": true},":raised_hands_tone3:":{"unicode":["1f64c-1f3fd"],"fname":"1f64c-1f3fd","uc":"1f64c-1f3fd","isCanonical": true},":raised_hands_tone2:":{"unicode":["1f64c-1f3fc"],"fname":"1f64c-1f3fc","uc":"1f64c-1f3fc","isCanonical": true},":raised_hands_tone1:":{"unicode":["1f64c-1f3fb"],"fname":"1f64c-1f3fb","uc":"1f64c-1f3fb","isCanonical": true},":raising_hand_tone5:":{"unicode":["1f64b-1f3ff"],"fname":"1f64b-1f3ff","uc":"1f64b-1f3ff","isCanonical": true},":raising_hand_tone4:":{"unicode":["1f64b-1f3fe"],"fname":"1f64b-1f3fe","uc":"1f64b-1f3fe","isCanonical": true},":raising_hand_tone3:":{"unicode":["1f64b-1f3fd"],"fname":"1f64b-1f3fd","uc":"1f64b-1f3fd","isCanonical": true},":raising_hand_tone2:":{"unicode":["1f64b-1f3fc"],"fname":"1f64b-1f3fc","uc":"1f64b-1f3fc","isCanonical": true},":raising_hand_tone1:":{"unicode":["1f64b-1f3fb"],"fname":"1f64b-1f3fb","uc":"1f64b-1f3fb","isCanonical": true},":bow_tone5:":{"unicode":["1f647-1f3ff"],"fname":"1f647-1f3ff","uc":"1f647-1f3ff","isCanonical": true},":bow_tone4:":{"unicode":["1f647-1f3fe"],"fname":"1f647-1f3fe","uc":"1f647-1f3fe","isCanonical": true},":bow_tone3:":{"unicode":["1f647-1f3fd"],"fname":"1f647-1f3fd","uc":"1f647-1f3fd","isCanonical": true},":bow_tone2:":{"unicode":["1f647-1f3fc"],"fname":"1f647-1f3fc","uc":"1f647-1f3fc","isCanonical": true},":bow_tone1:":{"unicode":["1f647-1f3fb"],"fname":"1f647-1f3fb","uc":"1f647-1f3fb","isCanonical": true},":ok_woman_tone5:":{"unicode":["1f646-1f3ff"],"fname":"1f646-1f3ff","uc":"1f646-1f3ff","isCanonical": true},":ok_woman_tone4:":{"unicode":["1f646-1f3fe"],"fname":"1f646-1f3fe","uc":"1f646-1f3fe","isCanonical": true},":ok_woman_tone3:":{"unicode":["1f646-1f3fd"],"fname":"1f646-1f3fd","uc":"1f646-1f3fd","isCanonical": true},":ok_woman_tone2:":{"unicode":["1f646-1f3fc"],"fname":"1f646-1f3fc","uc":"1f646-1f3fc","isCanonical": true},":ok_woman_tone1:":{"unicode":["1f646-1f3fb"],"fname":"1f646-1f3fb","uc":"1f646-1f3fb","isCanonical": true},":no_good_tone5:":{"unicode":["1f645-1f3ff"],"fname":"1f645-1f3ff","uc":"1f645-1f3ff","isCanonical": true},":no_good_tone4:":{"unicode":["1f645-1f3fe"],"fname":"1f645-1f3fe","uc":"1f645-1f3fe","isCanonical": true},":no_good_tone3:":{"unicode":["1f645-1f3fd"],"fname":"1f645-1f3fd","uc":"1f645-1f3fd","isCanonical": true},":no_good_tone2:":{"unicode":["1f645-1f3fc"],"fname":"1f645-1f3fc","uc":"1f645-1f3fc","isCanonical": true},":no_good_tone1:":{"unicode":["1f645-1f3fb"],"fname":"1f645-1f3fb","uc":"1f645-1f3fb","isCanonical": true},":vulcan_tone5:":{"unicode":["1f596-1f3ff"],"fname":"1f596-1f3ff","uc":"1f596-1f3ff","isCanonical": true},":raised_hand_with_part_between_middle_and_ring_fingers_tone5:":{"unicode":["1f596-1f3ff"],"fname":"1f596-1f3ff","uc":"1f596-1f3ff","isCanonical": false},":vulcan_tone4:":{"unicode":["1f596-1f3fe"],"fname":"1f596-1f3fe","uc":"1f596-1f3fe","isCanonical": true},":raised_hand_with_part_between_middle_and_ring_fingers_tone4:":{"unicode":["1f596-1f3fe"],"fname":"1f596-1f3fe","uc":"1f596-1f3fe","isCanonical": false},":vulcan_tone3:":{"unicode":["1f596-1f3fd"],"fname":"1f596-1f3fd","uc":"1f596-1f3fd","isCanonical": true},":raised_hand_with_part_between_middle_and_ring_fingers_tone3:":{"unicode":["1f596-1f3fd"],"fname":"1f596-1f3fd","uc":"1f596-1f3fd","isCanonical": false},":vulcan_tone2:":{"unicode":["1f596-1f3fc"],"fname":"1f596-1f3fc","uc":"1f596-1f3fc","isCanonical": true},":raised_hand_with_part_between_middle_and_ring_fingers_tone2:":{"unicode":["1f596-1f3fc"],"fname":"1f596-1f3fc","uc":"1f596-1f3fc","isCanonical": false},":vulcan_tone1:":{"unicode":["1f596-1f3fb"],"fname":"1f596-1f3fb","uc":"1f596-1f3fb","isCanonical": true},":raised_hand_with_part_between_middle_and_ring_fingers_tone1:":{"unicode":["1f596-1f3fb"],"fname":"1f596-1f3fb","uc":"1f596-1f3fb","isCanonical": false},":middle_finger_tone5:":{"unicode":["1f595-1f3ff"],"fname":"1f595-1f3ff","uc":"1f595-1f3ff","isCanonical": true},":reversed_hand_with_middle_finger_extended_tone5:":{"unicode":["1f595-1f3ff"],"fname":"1f595-1f3ff","uc":"1f595-1f3ff","isCanonical": false},":middle_finger_tone4:":{"unicode":["1f595-1f3fe"],"fname":"1f595-1f3fe","uc":"1f595-1f3fe","isCanonical": true},":reversed_hand_with_middle_finger_extended_tone4:":{"unicode":["1f595-1f3fe"],"fname":"1f595-1f3fe","uc":"1f595-1f3fe","isCanonical": false},":middle_finger_tone3:":{"unicode":["1f595-1f3fd"],"fname":"1f595-1f3fd","uc":"1f595-1f3fd","isCanonical": true},":reversed_hand_with_middle_finger_extended_tone3:":{"unicode":["1f595-1f3fd"],"fname":"1f595-1f3fd","uc":"1f595-1f3fd","isCanonical": false},":middle_finger_tone2:":{"unicode":["1f595-1f3fc"],"fname":"1f595-1f3fc","uc":"1f595-1f3fc","isCanonical": true},":reversed_hand_with_middle_finger_extended_tone2:":{"unicode":["1f595-1f3fc"],"fname":"1f595-1f3fc","uc":"1f595-1f3fc","isCanonical": false},":middle_finger_tone1:":{"unicode":["1f595-1f3fb"],"fname":"1f595-1f3fb","uc":"1f595-1f3fb","isCanonical": true},":reversed_hand_with_middle_finger_extended_tone1:":{"unicode":["1f595-1f3fb"],"fname":"1f595-1f3fb","uc":"1f595-1f3fb","isCanonical": false},":hand_splayed_tone5:":{"unicode":["1f590-1f3ff"],"fname":"1f590-1f3ff","uc":"1f590-1f3ff","isCanonical": true},":raised_hand_with_fingers_splayed_tone5:":{"unicode":["1f590-1f3ff"],"fname":"1f590-1f3ff","uc":"1f590-1f3ff","isCanonical": false},":hand_splayed_tone4:":{"unicode":["1f590-1f3fe"],"fname":"1f590-1f3fe","uc":"1f590-1f3fe","isCanonical": true},":raised_hand_with_fingers_splayed_tone4:":{"unicode":["1f590-1f3fe"],"fname":"1f590-1f3fe","uc":"1f590-1f3fe","isCanonical": false},":hand_splayed_tone3:":{"unicode":["1f590-1f3fd"],"fname":"1f590-1f3fd","uc":"1f590-1f3fd","isCanonical": true},":raised_hand_with_fingers_splayed_tone3:":{"unicode":["1f590-1f3fd"],"fname":"1f590-1f3fd","uc":"1f590-1f3fd","isCanonical": false},":hand_splayed_tone2:":{"unicode":["1f590-1f3fc"],"fname":"1f590-1f3fc","uc":"1f590-1f3fc","isCanonical": true},":raised_hand_with_fingers_splayed_tone2:":{"unicode":["1f590-1f3fc"],"fname":"1f590-1f3fc","uc":"1f590-1f3fc","isCanonical": false},":hand_splayed_tone1:":{"unicode":["1f590-1f3fb"],"fname":"1f590-1f3fb","uc":"1f590-1f3fb","isCanonical": true},":raised_hand_with_fingers_splayed_tone1:":{"unicode":["1f590-1f3fb"],"fname":"1f590-1f3fb","uc":"1f590-1f3fb","isCanonical": false},":man_dancing_tone5:":{"unicode":["1f57a-1f3ff"],"fname":"1f57a-1f3ff","uc":"1f57a-1f3ff","isCanonical": true},":male_dancer_tone5:":{"unicode":["1f57a-1f3ff"],"fname":"1f57a-1f3ff","uc":"1f57a-1f3ff","isCanonical": false},":man_dancing_tone4:":{"unicode":["1f57a-1f3fe"],"fname":"1f57a-1f3fe","uc":"1f57a-1f3fe","isCanonical": true},":male_dancer_tone4:":{"unicode":["1f57a-1f3fe"],"fname":"1f57a-1f3fe","uc":"1f57a-1f3fe","isCanonical": false},":man_dancing_tone3:":{"unicode":["1f57a-1f3fd"],"fname":"1f57a-1f3fd","uc":"1f57a-1f3fd","isCanonical": true},":male_dancer_tone3:":{"unicode":["1f57a-1f3fd"],"fname":"1f57a-1f3fd","uc":"1f57a-1f3fd","isCanonical": false},":man_dancing_tone2:":{"unicode":["1f57a-1f3fc"],"fname":"1f57a-1f3fc","uc":"1f57a-1f3fc","isCanonical": true},":male_dancer_tone2:":{"unicode":["1f57a-1f3fc"],"fname":"1f57a-1f3fc","uc":"1f57a-1f3fc","isCanonical": false},":man_dancing_tone1:":{"unicode":["1f57a-1f3fb"],"fname":"1f57a-1f3fb","uc":"1f57a-1f3fb","isCanonical": true},":male_dancer_tone1:":{"unicode":["1f57a-1f3fb"],"fname":"1f57a-1f3fb","uc":"1f57a-1f3fb","isCanonical": false},":spy_tone5:":{"unicode":["1f575-1f3ff"],"fname":"1f575-1f3ff","uc":"1f575-1f3ff","isCanonical": true},":sleuth_or_spy_tone5:":{"unicode":["1f575-1f3ff"],"fname":"1f575-1f3ff","uc":"1f575-1f3ff","isCanonical": false},":spy_tone4:":{"unicode":["1f575-1f3fe"],"fname":"1f575-1f3fe","uc":"1f575-1f3fe","isCanonical": true},":sleuth_or_spy_tone4:":{"unicode":["1f575-1f3fe"],"fname":"1f575-1f3fe","uc":"1f575-1f3fe","isCanonical": false},":spy_tone3:":{"unicode":["1f575-1f3fd"],"fname":"1f575-1f3fd","uc":"1f575-1f3fd","isCanonical": true},":sleuth_or_spy_tone3:":{"unicode":["1f575-1f3fd"],"fname":"1f575-1f3fd","uc":"1f575-1f3fd","isCanonical": false},":spy_tone2:":{"unicode":["1f575-1f3fc"],"fname":"1f575-1f3fc","uc":"1f575-1f3fc","isCanonical": true},":sleuth_or_spy_tone2:":{"unicode":["1f575-1f3fc"],"fname":"1f575-1f3fc","uc":"1f575-1f3fc","isCanonical": false},":spy_tone1:":{"unicode":["1f575-1f3fb"],"fname":"1f575-1f3fb","uc":"1f575-1f3fb","isCanonical": true},":sleuth_or_spy_tone1:":{"unicode":["1f575-1f3fb"],"fname":"1f575-1f3fb","uc":"1f575-1f3fb","isCanonical": false},":muscle_tone5:":{"unicode":["1f4aa-1f3ff"],"fname":"1f4aa-1f3ff","uc":"1f4aa-1f3ff","isCanonical": true},":muscle_tone4:":{"unicode":["1f4aa-1f3fe"],"fname":"1f4aa-1f3fe","uc":"1f4aa-1f3fe","isCanonical": true},":muscle_tone3:":{"unicode":["1f4aa-1f3fd"],"fname":"1f4aa-1f3fd","uc":"1f4aa-1f3fd","isCanonical": true},":muscle_tone2:":{"unicode":["1f4aa-1f3fc"],"fname":"1f4aa-1f3fc","uc":"1f4aa-1f3fc","isCanonical": true},":muscle_tone1:":{"unicode":["1f4aa-1f3fb"],"fname":"1f4aa-1f3fb","uc":"1f4aa-1f3fb","isCanonical": true},":haircut_tone5:":{"unicode":["1f487-1f3ff"],"fname":"1f487-1f3ff","uc":"1f487-1f3ff","isCanonical": true},":haircut_tone4:":{"unicode":["1f487-1f3fe"],"fname":"1f487-1f3fe","uc":"1f487-1f3fe","isCanonical": true},":haircut_tone3:":{"unicode":["1f487-1f3fd"],"fname":"1f487-1f3fd","uc":"1f487-1f3fd","isCanonical": true},":haircut_tone2:":{"unicode":["1f487-1f3fc"],"fname":"1f487-1f3fc","uc":"1f487-1f3fc","isCanonical": true},":haircut_tone1:":{"unicode":["1f487-1f3fb"],"fname":"1f487-1f3fb","uc":"1f487-1f3fb","isCanonical": true},":massage_tone5:":{"unicode":["1f486-1f3ff"],"fname":"1f486-1f3ff","uc":"1f486-1f3ff","isCanonical": true},":massage_tone4:":{"unicode":["1f486-1f3fe"],"fname":"1f486-1f3fe","uc":"1f486-1f3fe","isCanonical": true},":massage_tone3:":{"unicode":["1f486-1f3fd"],"fname":"1f486-1f3fd","uc":"1f486-1f3fd","isCanonical": true},":massage_tone2:":{"unicode":["1f486-1f3fc"],"fname":"1f486-1f3fc","uc":"1f486-1f3fc","isCanonical": true},":massage_tone1:":{"unicode":["1f486-1f3fb"],"fname":"1f486-1f3fb","uc":"1f486-1f3fb","isCanonical": true},":nail_care_tone5:":{"unicode":["1f485-1f3ff"],"fname":"1f485-1f3ff","uc":"1f485-1f3ff","isCanonical": true},":nail_care_tone4:":{"unicode":["1f485-1f3fe"],"fname":"1f485-1f3fe","uc":"1f485-1f3fe","isCanonical": true},":nail_care_tone3:":{"unicode":["1f485-1f3fd"],"fname":"1f485-1f3fd","uc":"1f485-1f3fd","isCanonical": true},":nail_care_tone2:":{"unicode":["1f485-1f3fc"],"fname":"1f485-1f3fc","uc":"1f485-1f3fc","isCanonical": true},":nail_care_tone1:":{"unicode":["1f485-1f3fb"],"fname":"1f485-1f3fb","uc":"1f485-1f3fb","isCanonical": true},":dancer_tone5:":{"unicode":["1f483-1f3ff"],"fname":"1f483-1f3ff","uc":"1f483-1f3ff","isCanonical": true},":dancer_tone4:":{"unicode":["1f483-1f3fe"],"fname":"1f483-1f3fe","uc":"1f483-1f3fe","isCanonical": true},":dancer_tone3:":{"unicode":["1f483-1f3fd"],"fname":"1f483-1f3fd","uc":"1f483-1f3fd","isCanonical": true},":dancer_tone2:":{"unicode":["1f483-1f3fc"],"fname":"1f483-1f3fc","uc":"1f483-1f3fc","isCanonical": true},":dancer_tone1:":{"unicode":["1f483-1f3fb"],"fname":"1f483-1f3fb","uc":"1f483-1f3fb","isCanonical": true},":guardsman_tone5:":{"unicode":["1f482-1f3ff"],"fname":"1f482-1f3ff","uc":"1f482-1f3ff","isCanonical": true},":guardsman_tone4:":{"unicode":["1f482-1f3fe"],"fname":"1f482-1f3fe","uc":"1f482-1f3fe","isCanonical": true},":guardsman_tone3:":{"unicode":["1f482-1f3fd"],"fname":"1f482-1f3fd","uc":"1f482-1f3fd","isCanonical": true},":guardsman_tone2:":{"unicode":["1f482-1f3fc"],"fname":"1f482-1f3fc","uc":"1f482-1f3fc","isCanonical": true},":guardsman_tone1:":{"unicode":["1f482-1f3fb"],"fname":"1f482-1f3fb","uc":"1f482-1f3fb","isCanonical": true},":information_desk_person_tone5:":{"unicode":["1f481-1f3ff"],"fname":"1f481-1f3ff","uc":"1f481-1f3ff","isCanonical": true},":information_desk_person_tone4:":{"unicode":["1f481-1f3fe"],"fname":"1f481-1f3fe","uc":"1f481-1f3fe","isCanonical": true},":information_desk_person_tone3:":{"unicode":["1f481-1f3fd"],"fname":"1f481-1f3fd","uc":"1f481-1f3fd","isCanonical": true},":information_desk_person_tone2:":{"unicode":["1f481-1f3fc"],"fname":"1f481-1f3fc","uc":"1f481-1f3fc","isCanonical": true},":information_desk_person_tone1:":{"unicode":["1f481-1f3fb"],"fname":"1f481-1f3fb","uc":"1f481-1f3fb","isCanonical": true},":angel_tone5:":{"unicode":["1f47c-1f3ff"],"fname":"1f47c-1f3ff","uc":"1f47c-1f3ff","isCanonical": true},":angel_tone4:":{"unicode":["1f47c-1f3fe"],"fname":"1f47c-1f3fe","uc":"1f47c-1f3fe","isCanonical": true},":angel_tone3:":{"unicode":["1f47c-1f3fd"],"fname":"1f47c-1f3fd","uc":"1f47c-1f3fd","isCanonical": true},":angel_tone2:":{"unicode":["1f47c-1f3fc"],"fname":"1f47c-1f3fc","uc":"1f47c-1f3fc","isCanonical": true},":angel_tone1:":{"unicode":["1f47c-1f3fb"],"fname":"1f47c-1f3fb","uc":"1f47c-1f3fb","isCanonical": true},":princess_tone5:":{"unicode":["1f478-1f3ff"],"fname":"1f478-1f3ff","uc":"1f478-1f3ff","isCanonical": true},":princess_tone4:":{"unicode":["1f478-1f3fe"],"fname":"1f478-1f3fe","uc":"1f478-1f3fe","isCanonical": true},":princess_tone3:":{"unicode":["1f478-1f3fd"],"fname":"1f478-1f3fd","uc":"1f478-1f3fd","isCanonical": true},":princess_tone2:":{"unicode":["1f478-1f3fc"],"fname":"1f478-1f3fc","uc":"1f478-1f3fc","isCanonical": true},":princess_tone1:":{"unicode":["1f478-1f3fb"],"fname":"1f478-1f3fb","uc":"1f478-1f3fb","isCanonical": true},":construction_worker_tone5:":{"unicode":["1f477-1f3ff"],"fname":"1f477-1f3ff","uc":"1f477-1f3ff","isCanonical": true},":construction_worker_tone4:":{"unicode":["1f477-1f3fe"],"fname":"1f477-1f3fe","uc":"1f477-1f3fe","isCanonical": true},":construction_worker_tone3:":{"unicode":["1f477-1f3fd"],"fname":"1f477-1f3fd","uc":"1f477-1f3fd","isCanonical": true},":construction_worker_tone2:":{"unicode":["1f477-1f3fc"],"fname":"1f477-1f3fc","uc":"1f477-1f3fc","isCanonical": true},":construction_worker_tone1:":{"unicode":["1f477-1f3fb"],"fname":"1f477-1f3fb","uc":"1f477-1f3fb","isCanonical": true},":baby_tone5:":{"unicode":["1f476-1f3ff"],"fname":"1f476-1f3ff","uc":"1f476-1f3ff","isCanonical": true},":baby_tone4:":{"unicode":["1f476-1f3fe"],"fname":"1f476-1f3fe","uc":"1f476-1f3fe","isCanonical": true},":baby_tone3:":{"unicode":["1f476-1f3fd"],"fname":"1f476-1f3fd","uc":"1f476-1f3fd","isCanonical": true},":baby_tone2:":{"unicode":["1f476-1f3fc"],"fname":"1f476-1f3fc","uc":"1f476-1f3fc","isCanonical": true},":baby_tone1:":{"unicode":["1f476-1f3fb"],"fname":"1f476-1f3fb","uc":"1f476-1f3fb","isCanonical": true},":older_woman_tone5:":{"unicode":["1f475-1f3ff"],"fname":"1f475-1f3ff","uc":"1f475-1f3ff","isCanonical": true},":grandma_tone5:":{"unicode":["1f475-1f3ff"],"fname":"1f475-1f3ff","uc":"1f475-1f3ff","isCanonical": false},":older_woman_tone4:":{"unicode":["1f475-1f3fe"],"fname":"1f475-1f3fe","uc":"1f475-1f3fe","isCanonical": true},":grandma_tone4:":{"unicode":["1f475-1f3fe"],"fname":"1f475-1f3fe","uc":"1f475-1f3fe","isCanonical": false},":older_woman_tone3:":{"unicode":["1f475-1f3fd"],"fname":"1f475-1f3fd","uc":"1f475-1f3fd","isCanonical": true},":grandma_tone3:":{"unicode":["1f475-1f3fd"],"fname":"1f475-1f3fd","uc":"1f475-1f3fd","isCanonical": false},":older_woman_tone2:":{"unicode":["1f475-1f3fc"],"fname":"1f475-1f3fc","uc":"1f475-1f3fc","isCanonical": true},":grandma_tone2:":{"unicode":["1f475-1f3fc"],"fname":"1f475-1f3fc","uc":"1f475-1f3fc","isCanonical": false},":older_woman_tone1:":{"unicode":["1f475-1f3fb"],"fname":"1f475-1f3fb","uc":"1f475-1f3fb","isCanonical": true},":grandma_tone1:":{"unicode":["1f475-1f3fb"],"fname":"1f475-1f3fb","uc":"1f475-1f3fb","isCanonical": false},":older_man_tone5:":{"unicode":["1f474-1f3ff"],"fname":"1f474-1f3ff","uc":"1f474-1f3ff","isCanonical": true},":older_man_tone4:":{"unicode":["1f474-1f3fe"],"fname":"1f474-1f3fe","uc":"1f474-1f3fe","isCanonical": true},":older_man_tone3:":{"unicode":["1f474-1f3fd"],"fname":"1f474-1f3fd","uc":"1f474-1f3fd","isCanonical": true},":older_man_tone2:":{"unicode":["1f474-1f3fc"],"fname":"1f474-1f3fc","uc":"1f474-1f3fc","isCanonical": true},":older_man_tone1:":{"unicode":["1f474-1f3fb"],"fname":"1f474-1f3fb","uc":"1f474-1f3fb","isCanonical": true},":man_with_turban_tone5:":{"unicode":["1f473-1f3ff"],"fname":"1f473-1f3ff","uc":"1f473-1f3ff","isCanonical": true},":man_with_turban_tone4:":{"unicode":["1f473-1f3fe"],"fname":"1f473-1f3fe","uc":"1f473-1f3fe","isCanonical": true},":man_with_turban_tone3:":{"unicode":["1f473-1f3fd"],"fname":"1f473-1f3fd","uc":"1f473-1f3fd","isCanonical": true},":man_with_turban_tone2:":{"unicode":["1f473-1f3fc"],"fname":"1f473-1f3fc","uc":"1f473-1f3fc","isCanonical": true},":man_with_turban_tone1:":{"unicode":["1f473-1f3fb"],"fname":"1f473-1f3fb","uc":"1f473-1f3fb","isCanonical": true},":man_with_gua_pi_mao_tone5:":{"unicode":["1f472-1f3ff"],"fname":"1f472-1f3ff","uc":"1f472-1f3ff","isCanonical": true},":man_with_gua_pi_mao_tone4:":{"unicode":["1f472-1f3fe"],"fname":"1f472-1f3fe","uc":"1f472-1f3fe","isCanonical": true},":man_with_gua_pi_mao_tone3:":{"unicode":["1f472-1f3fd"],"fname":"1f472-1f3fd","uc":"1f472-1f3fd","isCanonical": true},":man_with_gua_pi_mao_tone2:":{"unicode":["1f472-1f3fc"],"fname":"1f472-1f3fc","uc":"1f472-1f3fc","isCanonical": true},":man_with_gua_pi_mao_tone1:":{"unicode":["1f472-1f3fb"],"fname":"1f472-1f3fb","uc":"1f472-1f3fb","isCanonical": true},":person_with_blond_hair_tone5:":{"unicode":["1f471-1f3ff"],"fname":"1f471-1f3ff","uc":"1f471-1f3ff","isCanonical": true},":person_with_blond_hair_tone4:":{"unicode":["1f471-1f3fe"],"fname":"1f471-1f3fe","uc":"1f471-1f3fe","isCanonical": true},":person_with_blond_hair_tone3:":{"unicode":["1f471-1f3fd"],"fname":"1f471-1f3fd","uc":"1f471-1f3fd","isCanonical": true},":person_with_blond_hair_tone2:":{"unicode":["1f471-1f3fc"],"fname":"1f471-1f3fc","uc":"1f471-1f3fc","isCanonical": true},":person_with_blond_hair_tone1:":{"unicode":["1f471-1f3fb"],"fname":"1f471-1f3fb","uc":"1f471-1f3fb","isCanonical": true},":bride_with_veil_tone5:":{"unicode":["1f470-1f3ff"],"fname":"1f470-1f3ff","uc":"1f470-1f3ff","isCanonical": true},":bride_with_veil_tone4:":{"unicode":["1f470-1f3fe"],"fname":"1f470-1f3fe","uc":"1f470-1f3fe","isCanonical": true},":bride_with_veil_tone3:":{"unicode":["1f470-1f3fd"],"fname":"1f470-1f3fd","uc":"1f470-1f3fd","isCanonical": true},":bride_with_veil_tone2:":{"unicode":["1f470-1f3fc"],"fname":"1f470-1f3fc","uc":"1f470-1f3fc","isCanonical": true},":bride_with_veil_tone1:":{"unicode":["1f470-1f3fb"],"fname":"1f470-1f3fb","uc":"1f470-1f3fb","isCanonical": true},":cop_tone5:":{"unicode":["1f46e-1f3ff"],"fname":"1f46e-1f3ff","uc":"1f46e-1f3ff","isCanonical": true},":cop_tone4:":{"unicode":["1f46e-1f3fe"],"fname":"1f46e-1f3fe","uc":"1f46e-1f3fe","isCanonical": true},":cop_tone3:":{"unicode":["1f46e-1f3fd"],"fname":"1f46e-1f3fd","uc":"1f46e-1f3fd","isCanonical": true},":cop_tone2:":{"unicode":["1f46e-1f3fc"],"fname":"1f46e-1f3fc","uc":"1f46e-1f3fc","isCanonical": true},":cop_tone1:":{"unicode":["1f46e-1f3fb"],"fname":"1f46e-1f3fb","uc":"1f46e-1f3fb","isCanonical": true},":woman_tone5:":{"unicode":["1f469-1f3ff"],"fname":"1f469-1f3ff","uc":"1f469-1f3ff","isCanonical": true},":woman_tone4:":{"unicode":["1f469-1f3fe"],"fname":"1f469-1f3fe","uc":"1f469-1f3fe","isCanonical": true},":woman_tone3:":{"unicode":["1f469-1f3fd"],"fname":"1f469-1f3fd","uc":"1f469-1f3fd","isCanonical": true},":woman_tone2:":{"unicode":["1f469-1f3fc"],"fname":"1f469-1f3fc","uc":"1f469-1f3fc","isCanonical": true},":woman_tone1:":{"unicode":["1f469-1f3fb"],"fname":"1f469-1f3fb","uc":"1f469-1f3fb","isCanonical": true},":man_tone5:":{"unicode":["1f468-1f3ff"],"fname":"1f468-1f3ff","uc":"1f468-1f3ff","isCanonical": true},":man_tone4:":{"unicode":["1f468-1f3fe"],"fname":"1f468-1f3fe","uc":"1f468-1f3fe","isCanonical": true},":man_tone3:":{"unicode":["1f468-1f3fd"],"fname":"1f468-1f3fd","uc":"1f468-1f3fd","isCanonical": true},":man_tone2:":{"unicode":["1f468-1f3fc"],"fname":"1f468-1f3fc","uc":"1f468-1f3fc","isCanonical": true},":man_tone1:":{"unicode":["1f468-1f3fb"],"fname":"1f468-1f3fb","uc":"1f468-1f3fb","isCanonical": true},":girl_tone5:":{"unicode":["1f467-1f3ff"],"fname":"1f467-1f3ff","uc":"1f467-1f3ff","isCanonical": true},":girl_tone4:":{"unicode":["1f467-1f3fe"],"fname":"1f467-1f3fe","uc":"1f467-1f3fe","isCanonical": true},":girl_tone3:":{"unicode":["1f467-1f3fd"],"fname":"1f467-1f3fd","uc":"1f467-1f3fd","isCanonical": true},":girl_tone2:":{"unicode":["1f467-1f3fc"],"fname":"1f467-1f3fc","uc":"1f467-1f3fc","isCanonical": true},":girl_tone1:":{"unicode":["1f467-1f3fb"],"fname":"1f467-1f3fb","uc":"1f467-1f3fb","isCanonical": true},":boy_tone5:":{"unicode":["1f466-1f3ff"],"fname":"1f466-1f3ff","uc":"1f466-1f3ff","isCanonical": true},":boy_tone4:":{"unicode":["1f466-1f3fe"],"fname":"1f466-1f3fe","uc":"1f466-1f3fe","isCanonical": true},":boy_tone3:":{"unicode":["1f466-1f3fd"],"fname":"1f466-1f3fd","uc":"1f466-1f3fd","isCanonical": true},":boy_tone2:":{"unicode":["1f466-1f3fc"],"fname":"1f466-1f3fc","uc":"1f466-1f3fc","isCanonical": true},":boy_tone1:":{"unicode":["1f466-1f3fb"],"fname":"1f466-1f3fb","uc":"1f466-1f3fb","isCanonical": true},":open_hands_tone5:":{"unicode":["1f450-1f3ff"],"fname":"1f450-1f3ff","uc":"1f450-1f3ff","isCanonical": true},":open_hands_tone4:":{"unicode":["1f450-1f3fe"],"fname":"1f450-1f3fe","uc":"1f450-1f3fe","isCanonical": true},":open_hands_tone3:":{"unicode":["1f450-1f3fd"],"fname":"1f450-1f3fd","uc":"1f450-1f3fd","isCanonical": true},":open_hands_tone2:":{"unicode":["1f450-1f3fc"],"fname":"1f450-1f3fc","uc":"1f450-1f3fc","isCanonical": true},":open_hands_tone1:":{"unicode":["1f450-1f3fb"],"fname":"1f450-1f3fb","uc":"1f450-1f3fb","isCanonical": true},":clap_tone5:":{"unicode":["1f44f-1f3ff"],"fname":"1f44f-1f3ff","uc":"1f44f-1f3ff","isCanonical": true},":clap_tone4:":{"unicode":["1f44f-1f3fe"],"fname":"1f44f-1f3fe","uc":"1f44f-1f3fe","isCanonical": true},":clap_tone3:":{"unicode":["1f44f-1f3fd"],"fname":"1f44f-1f3fd","uc":"1f44f-1f3fd","isCanonical": true},":clap_tone2:":{"unicode":["1f44f-1f3fc"],"fname":"1f44f-1f3fc","uc":"1f44f-1f3fc","isCanonical": true},":clap_tone1:":{"unicode":["1f44f-1f3fb"],"fname":"1f44f-1f3fb","uc":"1f44f-1f3fb","isCanonical": true},":thumbsdown_tone5:":{"unicode":["1f44e-1f3ff"],"fname":"1f44e-1f3ff","uc":"1f44e-1f3ff","isCanonical": true},":-1_tone5:":{"unicode":["1f44e-1f3ff"],"fname":"1f44e-1f3ff","uc":"1f44e-1f3ff","isCanonical": false},":thumbdown_tone5:":{"unicode":["1f44e-1f3ff"],"fname":"1f44e-1f3ff","uc":"1f44e-1f3ff","isCanonical": false},":thumbsdown_tone4:":{"unicode":["1f44e-1f3fe"],"fname":"1f44e-1f3fe","uc":"1f44e-1f3fe","isCanonical": true},":-1_tone4:":{"unicode":["1f44e-1f3fe"],"fname":"1f44e-1f3fe","uc":"1f44e-1f3fe","isCanonical": false},":thumbdown_tone4:":{"unicode":["1f44e-1f3fe"],"fname":"1f44e-1f3fe","uc":"1f44e-1f3fe","isCanonical": false},":thumbsdown_tone3:":{"unicode":["1f44e-1f3fd"],"fname":"1f44e-1f3fd","uc":"1f44e-1f3fd","isCanonical": true},":-1_tone3:":{"unicode":["1f44e-1f3fd"],"fname":"1f44e-1f3fd","uc":"1f44e-1f3fd","isCanonical": false},":thumbdown_tone3:":{"unicode":["1f44e-1f3fd"],"fname":"1f44e-1f3fd","uc":"1f44e-1f3fd","isCanonical": false},":thumbsdown_tone2:":{"unicode":["1f44e-1f3fc"],"fname":"1f44e-1f3fc","uc":"1f44e-1f3fc","isCanonical": true},":-1_tone2:":{"unicode":["1f44e-1f3fc"],"fname":"1f44e-1f3fc","uc":"1f44e-1f3fc","isCanonical": false},":thumbdown_tone2:":{"unicode":["1f44e-1f3fc"],"fname":"1f44e-1f3fc","uc":"1f44e-1f3fc","isCanonical": false},":thumbsdown_tone1:":{"unicode":["1f44e-1f3fb"],"fname":"1f44e-1f3fb","uc":"1f44e-1f3fb","isCanonical": true},":-1_tone1:":{"unicode":["1f44e-1f3fb"],"fname":"1f44e-1f3fb","uc":"1f44e-1f3fb","isCanonical": false},":thumbdown_tone1:":{"unicode":["1f44e-1f3fb"],"fname":"1f44e-1f3fb","uc":"1f44e-1f3fb","isCanonical": false},":thumbsup_tone5:":{"unicode":["1f44d-1f3ff"],"fname":"1f44d-1f3ff","uc":"1f44d-1f3ff","isCanonical": true},":+1_tone5:":{"unicode":["1f44d-1f3ff"],"fname":"1f44d-1f3ff","uc":"1f44d-1f3ff","isCanonical": false},":thumbup_tone5:":{"unicode":["1f44d-1f3ff"],"fname":"1f44d-1f3ff","uc":"1f44d-1f3ff","isCanonical": false},":thumbsup_tone4:":{"unicode":["1f44d-1f3fe"],"fname":"1f44d-1f3fe","uc":"1f44d-1f3fe","isCanonical": true},":+1_tone4:":{"unicode":["1f44d-1f3fe"],"fname":"1f44d-1f3fe","uc":"1f44d-1f3fe","isCanonical": false},":thumbup_tone4:":{"unicode":["1f44d-1f3fe"],"fname":"1f44d-1f3fe","uc":"1f44d-1f3fe","isCanonical": false},":thumbsup_tone3:":{"unicode":["1f44d-1f3fd"],"fname":"1f44d-1f3fd","uc":"1f44d-1f3fd","isCanonical": true},":+1_tone3:":{"unicode":["1f44d-1f3fd"],"fname":"1f44d-1f3fd","uc":"1f44d-1f3fd","isCanonical": false},":thumbup_tone3:":{"unicode":["1f44d-1f3fd"],"fname":"1f44d-1f3fd","uc":"1f44d-1f3fd","isCanonical": false},":thumbsup_tone2:":{"unicode":["1f44d-1f3fc"],"fname":"1f44d-1f3fc","uc":"1f44d-1f3fc","isCanonical": true},":+1_tone2:":{"unicode":["1f44d-1f3fc"],"fname":"1f44d-1f3fc","uc":"1f44d-1f3fc","isCanonical": false},":thumbup_tone2:":{"unicode":["1f44d-1f3fc"],"fname":"1f44d-1f3fc","uc":"1f44d-1f3fc","isCanonical": false},":thumbsup_tone1:":{"unicode":["1f44d-1f3fb"],"fname":"1f44d-1f3fb","uc":"1f44d-1f3fb","isCanonical": true},":+1_tone1:":{"unicode":["1f44d-1f3fb"],"fname":"1f44d-1f3fb","uc":"1f44d-1f3fb","isCanonical": false},":thumbup_tone1:":{"unicode":["1f44d-1f3fb"],"fname":"1f44d-1f3fb","uc":"1f44d-1f3fb","isCanonical": false},":ok_hand_tone5:":{"unicode":["1f44c-1f3ff"],"fname":"1f44c-1f3ff","uc":"1f44c-1f3ff","isCanonical": true},":ok_hand_tone4:":{"unicode":["1f44c-1f3fe"],"fname":"1f44c-1f3fe","uc":"1f44c-1f3fe","isCanonical": true},":ok_hand_tone3:":{"unicode":["1f44c-1f3fd"],"fname":"1f44c-1f3fd","uc":"1f44c-1f3fd","isCanonical": true},":ok_hand_tone2:":{"unicode":["1f44c-1f3fc"],"fname":"1f44c-1f3fc","uc":"1f44c-1f3fc","isCanonical": true},":ok_hand_tone1:":{"unicode":["1f44c-1f3fb"],"fname":"1f44c-1f3fb","uc":"1f44c-1f3fb","isCanonical": true},":wave_tone5:":{"unicode":["1f44b-1f3ff"],"fname":"1f44b-1f3ff","uc":"1f44b-1f3ff","isCanonical": true},":wave_tone4:":{"unicode":["1f44b-1f3fe"],"fname":"1f44b-1f3fe","uc":"1f44b-1f3fe","isCanonical": true},":wave_tone3:":{"unicode":["1f44b-1f3fd"],"fname":"1f44b-1f3fd","uc":"1f44b-1f3fd","isCanonical": true},":wave_tone2:":{"unicode":["1f44b-1f3fc"],"fname":"1f44b-1f3fc","uc":"1f44b-1f3fc","isCanonical": true},":wave_tone1:":{"unicode":["1f44b-1f3fb"],"fname":"1f44b-1f3fb","uc":"1f44b-1f3fb","isCanonical": true},":punch_tone5:":{"unicode":["1f44a-1f3ff"],"fname":"1f44a-1f3ff","uc":"1f44a-1f3ff","isCanonical": true},":punch_tone4:":{"unicode":["1f44a-1f3fe"],"fname":"1f44a-1f3fe","uc":"1f44a-1f3fe","isCanonical": true},":punch_tone3:":{"unicode":["1f44a-1f3fd"],"fname":"1f44a-1f3fd","uc":"1f44a-1f3fd","isCanonical": true},":punch_tone2:":{"unicode":["1f44a-1f3fc"],"fname":"1f44a-1f3fc","uc":"1f44a-1f3fc","isCanonical": true},":punch_tone1:":{"unicode":["1f44a-1f3fb"],"fname":"1f44a-1f3fb","uc":"1f44a-1f3fb","isCanonical": true},":point_right_tone5:":{"unicode":["1f449-1f3ff"],"fname":"1f449-1f3ff","uc":"1f449-1f3ff","isCanonical": true},":point_right_tone4:":{"unicode":["1f449-1f3fe"],"fname":"1f449-1f3fe","uc":"1f449-1f3fe","isCanonical": true},":point_right_tone3:":{"unicode":["1f449-1f3fd"],"fname":"1f449-1f3fd","uc":"1f449-1f3fd","isCanonical": true},":point_right_tone2:":{"unicode":["1f449-1f3fc"],"fname":"1f449-1f3fc","uc":"1f449-1f3fc","isCanonical": true},":point_right_tone1:":{"unicode":["1f449-1f3fb"],"fname":"1f449-1f3fb","uc":"1f449-1f3fb","isCanonical": true},":point_left_tone5:":{"unicode":["1f448-1f3ff"],"fname":"1f448-1f3ff","uc":"1f448-1f3ff","isCanonical": true},":point_left_tone4:":{"unicode":["1f448-1f3fe"],"fname":"1f448-1f3fe","uc":"1f448-1f3fe","isCanonical": true},":point_left_tone3:":{"unicode":["1f448-1f3fd"],"fname":"1f448-1f3fd","uc":"1f448-1f3fd","isCanonical": true},":point_left_tone2:":{"unicode":["1f448-1f3fc"],"fname":"1f448-1f3fc","uc":"1f448-1f3fc","isCanonical": true},":point_left_tone1:":{"unicode":["1f448-1f3fb"],"fname":"1f448-1f3fb","uc":"1f448-1f3fb","isCanonical": true},":point_down_tone5:":{"unicode":["1f447-1f3ff"],"fname":"1f447-1f3ff","uc":"1f447-1f3ff","isCanonical": true},":point_down_tone4:":{"unicode":["1f447-1f3fe"],"fname":"1f447-1f3fe","uc":"1f447-1f3fe","isCanonical": true},":point_down_tone3:":{"unicode":["1f447-1f3fd"],"fname":"1f447-1f3fd","uc":"1f447-1f3fd","isCanonical": true},":point_down_tone2:":{"unicode":["1f447-1f3fc"],"fname":"1f447-1f3fc","uc":"1f447-1f3fc","isCanonical": true},":point_down_tone1:":{"unicode":["1f447-1f3fb"],"fname":"1f447-1f3fb","uc":"1f447-1f3fb","isCanonical": true},":point_up_2_tone5:":{"unicode":["1f446-1f3ff"],"fname":"1f446-1f3ff","uc":"1f446-1f3ff","isCanonical": true},":point_up_2_tone4:":{"unicode":["1f446-1f3fe"],"fname":"1f446-1f3fe","uc":"1f446-1f3fe","isCanonical": true},":point_up_2_tone3:":{"unicode":["1f446-1f3fd"],"fname":"1f446-1f3fd","uc":"1f446-1f3fd","isCanonical": true},":point_up_2_tone2:":{"unicode":["1f446-1f3fc"],"fname":"1f446-1f3fc","uc":"1f446-1f3fc","isCanonical": true},":point_up_2_tone1:":{"unicode":["1f446-1f3fb"],"fname":"1f446-1f3fb","uc":"1f446-1f3fb","isCanonical": true},":nose_tone5:":{"unicode":["1f443-1f3ff"],"fname":"1f443-1f3ff","uc":"1f443-1f3ff","isCanonical": true},":nose_tone4:":{"unicode":["1f443-1f3fe"],"fname":"1f443-1f3fe","uc":"1f443-1f3fe","isCanonical": true},":nose_tone3:":{"unicode":["1f443-1f3fd"],"fname":"1f443-1f3fd","uc":"1f443-1f3fd","isCanonical": true},":nose_tone2:":{"unicode":["1f443-1f3fc"],"fname":"1f443-1f3fc","uc":"1f443-1f3fc","isCanonical": true},":nose_tone1:":{"unicode":["1f443-1f3fb"],"fname":"1f443-1f3fb","uc":"1f443-1f3fb","isCanonical": true},":ear_tone5:":{"unicode":["1f442-1f3ff"],"fname":"1f442-1f3ff","uc":"1f442-1f3ff","isCanonical": true},":ear_tone4:":{"unicode":["1f442-1f3fe"],"fname":"1f442-1f3fe","uc":"1f442-1f3fe","isCanonical": true},":ear_tone3:":{"unicode":["1f442-1f3fd"],"fname":"1f442-1f3fd","uc":"1f442-1f3fd","isCanonical": true},":ear_tone2:":{"unicode":["1f442-1f3fc"],"fname":"1f442-1f3fc","uc":"1f442-1f3fc","isCanonical": true},":ear_tone1:":{"unicode":["1f442-1f3fb"],"fname":"1f442-1f3fb","uc":"1f442-1f3fb","isCanonical": true},":lifter_tone5:":{"unicode":["1f3cb-1f3ff"],"fname":"1f3cb-1f3ff","uc":"1f3cb-1f3ff","isCanonical": true},":weight_lifter_tone5:":{"unicode":["1f3cb-1f3ff"],"fname":"1f3cb-1f3ff","uc":"1f3cb-1f3ff","isCanonical": false},":lifter_tone4:":{"unicode":["1f3cb-1f3fe"],"fname":"1f3cb-1f3fe","uc":"1f3cb-1f3fe","isCanonical": true},":weight_lifter_tone4:":{"unicode":["1f3cb-1f3fe"],"fname":"1f3cb-1f3fe","uc":"1f3cb-1f3fe","isCanonical": false},":lifter_tone3:":{"unicode":["1f3cb-1f3fd"],"fname":"1f3cb-1f3fd","uc":"1f3cb-1f3fd","isCanonical": true},":weight_lifter_tone3:":{"unicode":["1f3cb-1f3fd"],"fname":"1f3cb-1f3fd","uc":"1f3cb-1f3fd","isCanonical": false},":lifter_tone2:":{"unicode":["1f3cb-1f3fc"],"fname":"1f3cb-1f3fc","uc":"1f3cb-1f3fc","isCanonical": true},":weight_lifter_tone2:":{"unicode":["1f3cb-1f3fc"],"fname":"1f3cb-1f3fc","uc":"1f3cb-1f3fc","isCanonical": false},":lifter_tone1:":{"unicode":["1f3cb-1f3fb"],"fname":"1f3cb-1f3fb","uc":"1f3cb-1f3fb","isCanonical": true},":weight_lifter_tone1:":{"unicode":["1f3cb-1f3fb"],"fname":"1f3cb-1f3fb","uc":"1f3cb-1f3fb","isCanonical": false},":swimmer_tone5:":{"unicode":["1f3ca-1f3ff"],"fname":"1f3ca-1f3ff","uc":"1f3ca-1f3ff","isCanonical": true},":swimmer_tone4:":{"unicode":["1f3ca-1f3fe"],"fname":"1f3ca-1f3fe","uc":"1f3ca-1f3fe","isCanonical": true},":swimmer_tone3:":{"unicode":["1f3ca-1f3fd"],"fname":"1f3ca-1f3fd","uc":"1f3ca-1f3fd","isCanonical": true},":swimmer_tone2:":{"unicode":["1f3ca-1f3fc"],"fname":"1f3ca-1f3fc","uc":"1f3ca-1f3fc","isCanonical": true},":swimmer_tone1:":{"unicode":["1f3ca-1f3fb"],"fname":"1f3ca-1f3fb","uc":"1f3ca-1f3fb","isCanonical": true},":horse_racing_tone5:":{"unicode":["1f3c7-1f3ff"],"fname":"1f3c7-1f3ff","uc":"1f3c7-1f3ff","isCanonical": true},":horse_racing_tone4:":{"unicode":["1f3c7-1f3fe"],"fname":"1f3c7-1f3fe","uc":"1f3c7-1f3fe","isCanonical": true},":horse_racing_tone3:":{"unicode":["1f3c7-1f3fd"],"fname":"1f3c7-1f3fd","uc":"1f3c7-1f3fd","isCanonical": true},":horse_racing_tone2:":{"unicode":["1f3c7-1f3fc"],"fname":"1f3c7-1f3fc","uc":"1f3c7-1f3fc","isCanonical": true},":horse_racing_tone1:":{"unicode":["1f3c7-1f3fb"],"fname":"1f3c7-1f3fb","uc":"1f3c7-1f3fb","isCanonical": true},":surfer_tone5:":{"unicode":["1f3c4-1f3ff"],"fname":"1f3c4-1f3ff","uc":"1f3c4-1f3ff","isCanonical": true},":surfer_tone4:":{"unicode":["1f3c4-1f3fe"],"fname":"1f3c4-1f3fe","uc":"1f3c4-1f3fe","isCanonical": true},":surfer_tone3:":{"unicode":["1f3c4-1f3fd"],"fname":"1f3c4-1f3fd","uc":"1f3c4-1f3fd","isCanonical": true},":surfer_tone2:":{"unicode":["1f3c4-1f3fc"],"fname":"1f3c4-1f3fc","uc":"1f3c4-1f3fc","isCanonical": true},":surfer_tone1:":{"unicode":["1f3c4-1f3fb"],"fname":"1f3c4-1f3fb","uc":"1f3c4-1f3fb","isCanonical": true},":runner_tone5:":{"unicode":["1f3c3-1f3ff"],"fname":"1f3c3-1f3ff","uc":"1f3c3-1f3ff","isCanonical": true},":runner_tone4:":{"unicode":["1f3c3-1f3fe"],"fname":"1f3c3-1f3fe","uc":"1f3c3-1f3fe","isCanonical": true},":runner_tone3:":{"unicode":["1f3c3-1f3fd"],"fname":"1f3c3-1f3fd","uc":"1f3c3-1f3fd","isCanonical": true},":runner_tone2:":{"unicode":["1f3c3-1f3fc"],"fname":"1f3c3-1f3fc","uc":"1f3c3-1f3fc","isCanonical": true},":runner_tone1:":{"unicode":["1f3c3-1f3fb"],"fname":"1f3c3-1f3fb","uc":"1f3c3-1f3fb","isCanonical": true},":santa_tone5:":{"unicode":["1f385-1f3ff"],"fname":"1f385-1f3ff","uc":"1f385-1f3ff","isCanonical": true},":santa_tone4:":{"unicode":["1f385-1f3fe"],"fname":"1f385-1f3fe","uc":"1f385-1f3fe","isCanonical": true},":santa_tone3:":{"unicode":["1f385-1f3fd"],"fname":"1f385-1f3fd","uc":"1f385-1f3fd","isCanonical": true},":santa_tone2:":{"unicode":["1f385-1f3fc"],"fname":"1f385-1f3fc","uc":"1f385-1f3fc","isCanonical": true},":santa_tone1:":{"unicode":["1f385-1f3fb"],"fname":"1f385-1f3fb","uc":"1f385-1f3fb","isCanonical": true},":flag_zw:":{"unicode":["1f1ff-1f1fc"],"fname":"1f1ff-1f1fc","uc":"1f1ff-1f1fc","isCanonical": true},":zw:":{"unicode":["1f1ff-1f1fc"],"fname":"1f1ff-1f1fc","uc":"1f1ff-1f1fc","isCanonical": false},":flag_zm:":{"unicode":["1f1ff-1f1f2"],"fname":"1f1ff-1f1f2","uc":"1f1ff-1f1f2","isCanonical": true},":zm:":{"unicode":["1f1ff-1f1f2"],"fname":"1f1ff-1f1f2","uc":"1f1ff-1f1f2","isCanonical": false},":flag_za:":{"unicode":["1f1ff-1f1e6"],"fname":"1f1ff-1f1e6","uc":"1f1ff-1f1e6","isCanonical": true},":za:":{"unicode":["1f1ff-1f1e6"],"fname":"1f1ff-1f1e6","uc":"1f1ff-1f1e6","isCanonical": false},":flag_yt:":{"unicode":["1f1fe-1f1f9"],"fname":"1f1fe-1f1f9","uc":"1f1fe-1f1f9","isCanonical": true},":yt:":{"unicode":["1f1fe-1f1f9"],"fname":"1f1fe-1f1f9","uc":"1f1fe-1f1f9","isCanonical": false},":flag_ye:":{"unicode":["1f1fe-1f1ea"],"fname":"1f1fe-1f1ea","uc":"1f1fe-1f1ea","isCanonical": true},":ye:":{"unicode":["1f1fe-1f1ea"],"fname":"1f1fe-1f1ea","uc":"1f1fe-1f1ea","isCanonical": false},":flag_xk:":{"unicode":["1f1fd-1f1f0"],"fname":"1f1fd-1f1f0","uc":"1f1fd-1f1f0","isCanonical": true},":xk:":{"unicode":["1f1fd-1f1f0"],"fname":"1f1fd-1f1f0","uc":"1f1fd-1f1f0","isCanonical": false},":flag_ws:":{"unicode":["1f1fc-1f1f8"],"fname":"1f1fc-1f1f8","uc":"1f1fc-1f1f8","isCanonical": true},":ws:":{"unicode":["1f1fc-1f1f8"],"fname":"1f1fc-1f1f8","uc":"1f1fc-1f1f8","isCanonical": false},":flag_wf:":{"unicode":["1f1fc-1f1eb"],"fname":"1f1fc-1f1eb","uc":"1f1fc-1f1eb","isCanonical": true},":wf:":{"unicode":["1f1fc-1f1eb"],"fname":"1f1fc-1f1eb","uc":"1f1fc-1f1eb","isCanonical": false},":flag_vu:":{"unicode":["1f1fb-1f1fa"],"fname":"1f1fb-1f1fa","uc":"1f1fb-1f1fa","isCanonical": true},":vu:":{"unicode":["1f1fb-1f1fa"],"fname":"1f1fb-1f1fa","uc":"1f1fb-1f1fa","isCanonical": false},":flag_vn:":{"unicode":["1f1fb-1f1f3"],"fname":"1f1fb-1f1f3","uc":"1f1fb-1f1f3","isCanonical": true},":vn:":{"unicode":["1f1fb-1f1f3"],"fname":"1f1fb-1f1f3","uc":"1f1fb-1f1f3","isCanonical": false},":flag_vi:":{"unicode":["1f1fb-1f1ee"],"fname":"1f1fb-1f1ee","uc":"1f1fb-1f1ee","isCanonical": true},":vi:":{"unicode":["1f1fb-1f1ee"],"fname":"1f1fb-1f1ee","uc":"1f1fb-1f1ee","isCanonical": false},":flag_vg:":{"unicode":["1f1fb-1f1ec"],"fname":"1f1fb-1f1ec","uc":"1f1fb-1f1ec","isCanonical": true},":vg:":{"unicode":["1f1fb-1f1ec"],"fname":"1f1fb-1f1ec","uc":"1f1fb-1f1ec","isCanonical": false},":flag_ve:":{"unicode":["1f1fb-1f1ea"],"fname":"1f1fb-1f1ea","uc":"1f1fb-1f1ea","isCanonical": true},":ve:":{"unicode":["1f1fb-1f1ea"],"fname":"1f1fb-1f1ea","uc":"1f1fb-1f1ea","isCanonical": false},":flag_vc:":{"unicode":["1f1fb-1f1e8"],"fname":"1f1fb-1f1e8","uc":"1f1fb-1f1e8","isCanonical": true},":vc:":{"unicode":["1f1fb-1f1e8"],"fname":"1f1fb-1f1e8","uc":"1f1fb-1f1e8","isCanonical": false},":flag_va:":{"unicode":["1f1fb-1f1e6"],"fname":"1f1fb-1f1e6","uc":"1f1fb-1f1e6","isCanonical": true},":va:":{"unicode":["1f1fb-1f1e6"],"fname":"1f1fb-1f1e6","uc":"1f1fb-1f1e6","isCanonical": false},":flag_uz:":{"unicode":["1f1fa-1f1ff"],"fname":"1f1fa-1f1ff","uc":"1f1fa-1f1ff","isCanonical": true},":uz:":{"unicode":["1f1fa-1f1ff"],"fname":"1f1fa-1f1ff","uc":"1f1fa-1f1ff","isCanonical": false},":flag_uy:":{"unicode":["1f1fa-1f1fe"],"fname":"1f1fa-1f1fe","uc":"1f1fa-1f1fe","isCanonical": true},":uy:":{"unicode":["1f1fa-1f1fe"],"fname":"1f1fa-1f1fe","uc":"1f1fa-1f1fe","isCanonical": false},":flag_us:":{"unicode":["1f1fa-1f1f8"],"fname":"1f1fa-1f1f8","uc":"1f1fa-1f1f8","isCanonical": true},":us:":{"unicode":["1f1fa-1f1f8"],"fname":"1f1fa-1f1f8","uc":"1f1fa-1f1f8","isCanonical": false},":flag_um:":{"unicode":["1f1fa-1f1f2"],"fname":"1f1fa-1f1f2","uc":"1f1fa-1f1f2","isCanonical": true},":um:":{"unicode":["1f1fa-1f1f2"],"fname":"1f1fa-1f1f2","uc":"1f1fa-1f1f2","isCanonical": false},":flag_ug:":{"unicode":["1f1fa-1f1ec"],"fname":"1f1fa-1f1ec","uc":"1f1fa-1f1ec","isCanonical": true},":ug:":{"unicode":["1f1fa-1f1ec"],"fname":"1f1fa-1f1ec","uc":"1f1fa-1f1ec","isCanonical": false},":flag_ua:":{"unicode":["1f1fa-1f1e6"],"fname":"1f1fa-1f1e6","uc":"1f1fa-1f1e6","isCanonical": true},":ua:":{"unicode":["1f1fa-1f1e6"],"fname":"1f1fa-1f1e6","uc":"1f1fa-1f1e6","isCanonical": false},":flag_tz:":{"unicode":["1f1f9-1f1ff"],"fname":"1f1f9-1f1ff","uc":"1f1f9-1f1ff","isCanonical": true},":tz:":{"unicode":["1f1f9-1f1ff"],"fname":"1f1f9-1f1ff","uc":"1f1f9-1f1ff","isCanonical": false},":flag_tw:":{"unicode":["1f1f9-1f1fc"],"fname":"1f1f9-1f1fc","uc":"1f1f9-1f1fc","isCanonical": true},":tw:":{"unicode":["1f1f9-1f1fc"],"fname":"1f1f9-1f1fc","uc":"1f1f9-1f1fc","isCanonical": false},":flag_tv:":{"unicode":["1f1f9-1f1fb"],"fname":"1f1f9-1f1fb","uc":"1f1f9-1f1fb","isCanonical": true},":tuvalu:":{"unicode":["1f1f9-1f1fb"],"fname":"1f1f9-1f1fb","uc":"1f1f9-1f1fb","isCanonical": false},":flag_tt:":{"unicode":["1f1f9-1f1f9"],"fname":"1f1f9-1f1f9","uc":"1f1f9-1f1f9","isCanonical": true},":tt:":{"unicode":["1f1f9-1f1f9"],"fname":"1f1f9-1f1f9","uc":"1f1f9-1f1f9","isCanonical": false},":flag_tr:":{"unicode":["1f1f9-1f1f7"],"fname":"1f1f9-1f1f7","uc":"1f1f9-1f1f7","isCanonical": true},":tr:":{"unicode":["1f1f9-1f1f7"],"fname":"1f1f9-1f1f7","uc":"1f1f9-1f1f7","isCanonical": false},":flag_to:":{"unicode":["1f1f9-1f1f4"],"fname":"1f1f9-1f1f4","uc":"1f1f9-1f1f4","isCanonical": true},":to:":{"unicode":["1f1f9-1f1f4"],"fname":"1f1f9-1f1f4","uc":"1f1f9-1f1f4","isCanonical": false},":flag_tn:":{"unicode":["1f1f9-1f1f3"],"fname":"1f1f9-1f1f3","uc":"1f1f9-1f1f3","isCanonical": true},":tn:":{"unicode":["1f1f9-1f1f3"],"fname":"1f1f9-1f1f3","uc":"1f1f9-1f1f3","isCanonical": false},":flag_tm:":{"unicode":["1f1f9-1f1f2"],"fname":"1f1f9-1f1f2","uc":"1f1f9-1f1f2","isCanonical": true},":turkmenistan:":{"unicode":["1f1f9-1f1f2"],"fname":"1f1f9-1f1f2","uc":"1f1f9-1f1f2","isCanonical": false},":flag_tl:":{"unicode":["1f1f9-1f1f1"],"fname":"1f1f9-1f1f1","uc":"1f1f9-1f1f1","isCanonical": true},":tl:":{"unicode":["1f1f9-1f1f1"],"fname":"1f1f9-1f1f1","uc":"1f1f9-1f1f1","isCanonical": false},":flag_tk:":{"unicode":["1f1f9-1f1f0"],"fname":"1f1f9-1f1f0","uc":"1f1f9-1f1f0","isCanonical": true},":tk:":{"unicode":["1f1f9-1f1f0"],"fname":"1f1f9-1f1f0","uc":"1f1f9-1f1f0","isCanonical": false},":flag_tj:":{"unicode":["1f1f9-1f1ef"],"fname":"1f1f9-1f1ef","uc":"1f1f9-1f1ef","isCanonical": true},":tj:":{"unicode":["1f1f9-1f1ef"],"fname":"1f1f9-1f1ef","uc":"1f1f9-1f1ef","isCanonical": false},":flag_th:":{"unicode":["1f1f9-1f1ed"],"fname":"1f1f9-1f1ed","uc":"1f1f9-1f1ed","isCanonical": true},":th:":{"unicode":["1f1f9-1f1ed"],"fname":"1f1f9-1f1ed","uc":"1f1f9-1f1ed","isCanonical": false},":flag_tg:":{"unicode":["1f1f9-1f1ec"],"fname":"1f1f9-1f1ec","uc":"1f1f9-1f1ec","isCanonical": true},":tg:":{"unicode":["1f1f9-1f1ec"],"fname":"1f1f9-1f1ec","uc":"1f1f9-1f1ec","isCanonical": false},":flag_tf:":{"unicode":["1f1f9-1f1eb"],"fname":"1f1f9-1f1eb","uc":"1f1f9-1f1eb","isCanonical": true},":tf:":{"unicode":["1f1f9-1f1eb"],"fname":"1f1f9-1f1eb","uc":"1f1f9-1f1eb","isCanonical": false},":flag_td:":{"unicode":["1f1f9-1f1e9"],"fname":"1f1f9-1f1e9","uc":"1f1f9-1f1e9","isCanonical": true},":td:":{"unicode":["1f1f9-1f1e9"],"fname":"1f1f9-1f1e9","uc":"1f1f9-1f1e9","isCanonical": false},":flag_tc:":{"unicode":["1f1f9-1f1e8"],"fname":"1f1f9-1f1e8","uc":"1f1f9-1f1e8","isCanonical": true},":tc:":{"unicode":["1f1f9-1f1e8"],"fname":"1f1f9-1f1e8","uc":"1f1f9-1f1e8","isCanonical": false},":flag_ta:":{"unicode":["1f1f9-1f1e6"],"fname":"1f1f9-1f1e6","uc":"1f1f9-1f1e6","isCanonical": true},":ta:":{"unicode":["1f1f9-1f1e6"],"fname":"1f1f9-1f1e6","uc":"1f1f9-1f1e6","isCanonical": false},":flag_sz:":{"unicode":["1f1f8-1f1ff"],"fname":"1f1f8-1f1ff","uc":"1f1f8-1f1ff","isCanonical": true},":sz:":{"unicode":["1f1f8-1f1ff"],"fname":"1f1f8-1f1ff","uc":"1f1f8-1f1ff","isCanonical": false},":flag_sy:":{"unicode":["1f1f8-1f1fe"],"fname":"1f1f8-1f1fe","uc":"1f1f8-1f1fe","isCanonical": true},":sy:":{"unicode":["1f1f8-1f1fe"],"fname":"1f1f8-1f1fe","uc":"1f1f8-1f1fe","isCanonical": false},":flag_sx:":{"unicode":["1f1f8-1f1fd"],"fname":"1f1f8-1f1fd","uc":"1f1f8-1f1fd","isCanonical": true},":sx:":{"unicode":["1f1f8-1f1fd"],"fname":"1f1f8-1f1fd","uc":"1f1f8-1f1fd","isCanonical": false},":flag_sv:":{"unicode":["1f1f8-1f1fb"],"fname":"1f1f8-1f1fb","uc":"1f1f8-1f1fb","isCanonical": true},":sv:":{"unicode":["1f1f8-1f1fb"],"fname":"1f1f8-1f1fb","uc":"1f1f8-1f1fb","isCanonical": false},":flag_st:":{"unicode":["1f1f8-1f1f9"],"fname":"1f1f8-1f1f9","uc":"1f1f8-1f1f9","isCanonical": true},":st:":{"unicode":["1f1f8-1f1f9"],"fname":"1f1f8-1f1f9","uc":"1f1f8-1f1f9","isCanonical": false},":flag_ss:":{"unicode":["1f1f8-1f1f8"],"fname":"1f1f8-1f1f8","uc":"1f1f8-1f1f8","isCanonical": true},":ss:":{"unicode":["1f1f8-1f1f8"],"fname":"1f1f8-1f1f8","uc":"1f1f8-1f1f8","isCanonical": false},":flag_sr:":{"unicode":["1f1f8-1f1f7"],"fname":"1f1f8-1f1f7","uc":"1f1f8-1f1f7","isCanonical": true},":sr:":{"unicode":["1f1f8-1f1f7"],"fname":"1f1f8-1f1f7","uc":"1f1f8-1f1f7","isCanonical": false},":flag_so:":{"unicode":["1f1f8-1f1f4"],"fname":"1f1f8-1f1f4","uc":"1f1f8-1f1f4","isCanonical": true},":so:":{"unicode":["1f1f8-1f1f4"],"fname":"1f1f8-1f1f4","uc":"1f1f8-1f1f4","isCanonical": false},":flag_sn:":{"unicode":["1f1f8-1f1f3"],"fname":"1f1f8-1f1f3","uc":"1f1f8-1f1f3","isCanonical": true},":sn:":{"unicode":["1f1f8-1f1f3"],"fname":"1f1f8-1f1f3","uc":"1f1f8-1f1f3","isCanonical": false},":flag_sm:":{"unicode":["1f1f8-1f1f2"],"fname":"1f1f8-1f1f2","uc":"1f1f8-1f1f2","isCanonical": true},":sm:":{"unicode":["1f1f8-1f1f2"],"fname":"1f1f8-1f1f2","uc":"1f1f8-1f1f2","isCanonical": false},":flag_sl:":{"unicode":["1f1f8-1f1f1"],"fname":"1f1f8-1f1f1","uc":"1f1f8-1f1f1","isCanonical": true},":sl:":{"unicode":["1f1f8-1f1f1"],"fname":"1f1f8-1f1f1","uc":"1f1f8-1f1f1","isCanonical": false},":flag_sk:":{"unicode":["1f1f8-1f1f0"],"fname":"1f1f8-1f1f0","uc":"1f1f8-1f1f0","isCanonical": true},":sk:":{"unicode":["1f1f8-1f1f0"],"fname":"1f1f8-1f1f0","uc":"1f1f8-1f1f0","isCanonical": false},":flag_sj:":{"unicode":["1f1f8-1f1ef"],"fname":"1f1f8-1f1ef","uc":"1f1f8-1f1ef","isCanonical": true},":sj:":{"unicode":["1f1f8-1f1ef"],"fname":"1f1f8-1f1ef","uc":"1f1f8-1f1ef","isCanonical": false},":flag_si:":{"unicode":["1f1f8-1f1ee"],"fname":"1f1f8-1f1ee","uc":"1f1f8-1f1ee","isCanonical": true},":si:":{"unicode":["1f1f8-1f1ee"],"fname":"1f1f8-1f1ee","uc":"1f1f8-1f1ee","isCanonical": false},":flag_sh:":{"unicode":["1f1f8-1f1ed"],"fname":"1f1f8-1f1ed","uc":"1f1f8-1f1ed","isCanonical": true},":sh:":{"unicode":["1f1f8-1f1ed"],"fname":"1f1f8-1f1ed","uc":"1f1f8-1f1ed","isCanonical": false},":flag_sg:":{"unicode":["1f1f8-1f1ec"],"fname":"1f1f8-1f1ec","uc":"1f1f8-1f1ec","isCanonical": true},":sg:":{"unicode":["1f1f8-1f1ec"],"fname":"1f1f8-1f1ec","uc":"1f1f8-1f1ec","isCanonical": false},":flag_se:":{"unicode":["1f1f8-1f1ea"],"fname":"1f1f8-1f1ea","uc":"1f1f8-1f1ea","isCanonical": true},":se:":{"unicode":["1f1f8-1f1ea"],"fname":"1f1f8-1f1ea","uc":"1f1f8-1f1ea","isCanonical": false},":flag_sd:":{"unicode":["1f1f8-1f1e9"],"fname":"1f1f8-1f1e9","uc":"1f1f8-1f1e9","isCanonical": true},":sd:":{"unicode":["1f1f8-1f1e9"],"fname":"1f1f8-1f1e9","uc":"1f1f8-1f1e9","isCanonical": false},":flag_sc:":{"unicode":["1f1f8-1f1e8"],"fname":"1f1f8-1f1e8","uc":"1f1f8-1f1e8","isCanonical": true},":sc:":{"unicode":["1f1f8-1f1e8"],"fname":"1f1f8-1f1e8","uc":"1f1f8-1f1e8","isCanonical": false},":flag_sb:":{"unicode":["1f1f8-1f1e7"],"fname":"1f1f8-1f1e7","uc":"1f1f8-1f1e7","isCanonical": true},":sb:":{"unicode":["1f1f8-1f1e7"],"fname":"1f1f8-1f1e7","uc":"1f1f8-1f1e7","isCanonical": false},":flag_sa:":{"unicode":["1f1f8-1f1e6"],"fname":"1f1f8-1f1e6","uc":"1f1f8-1f1e6","isCanonical": true},":saudiarabia:":{"unicode":["1f1f8-1f1e6"],"fname":"1f1f8-1f1e6","uc":"1f1f8-1f1e6","isCanonical": false},":saudi:":{"unicode":["1f1f8-1f1e6"],"fname":"1f1f8-1f1e6","uc":"1f1f8-1f1e6","isCanonical": false},":flag_rw:":{"unicode":["1f1f7-1f1fc"],"fname":"1f1f7-1f1fc","uc":"1f1f7-1f1fc","isCanonical": true},":rw:":{"unicode":["1f1f7-1f1fc"],"fname":"1f1f7-1f1fc","uc":"1f1f7-1f1fc","isCanonical": false},":flag_ru:":{"unicode":["1f1f7-1f1fa"],"fname":"1f1f7-1f1fa","uc":"1f1f7-1f1fa","isCanonical": true},":ru:":{"unicode":["1f1f7-1f1fa"],"fname":"1f1f7-1f1fa","uc":"1f1f7-1f1fa","isCanonical": false},":flag_rs:":{"unicode":["1f1f7-1f1f8"],"fname":"1f1f7-1f1f8","uc":"1f1f7-1f1f8","isCanonical": true},":rs:":{"unicode":["1f1f7-1f1f8"],"fname":"1f1f7-1f1f8","uc":"1f1f7-1f1f8","isCanonical": false},":flag_ro:":{"unicode":["1f1f7-1f1f4"],"fname":"1f1f7-1f1f4","uc":"1f1f7-1f1f4","isCanonical": true},":ro:":{"unicode":["1f1f7-1f1f4"],"fname":"1f1f7-1f1f4","uc":"1f1f7-1f1f4","isCanonical": false},":flag_re:":{"unicode":["1f1f7-1f1ea"],"fname":"1f1f7-1f1ea","uc":"1f1f7-1f1ea","isCanonical": true},":re:":{"unicode":["1f1f7-1f1ea"],"fname":"1f1f7-1f1ea","uc":"1f1f7-1f1ea","isCanonical": false},":flag_qa:":{"unicode":["1f1f6-1f1e6"],"fname":"1f1f6-1f1e6","uc":"1f1f6-1f1e6","isCanonical": true},":qa:":{"unicode":["1f1f6-1f1e6"],"fname":"1f1f6-1f1e6","uc":"1f1f6-1f1e6","isCanonical": false},":flag_py:":{"unicode":["1f1f5-1f1fe"],"fname":"1f1f5-1f1fe","uc":"1f1f5-1f1fe","isCanonical": true},":py:":{"unicode":["1f1f5-1f1fe"],"fname":"1f1f5-1f1fe","uc":"1f1f5-1f1fe","isCanonical": false},":flag_pw:":{"unicode":["1f1f5-1f1fc"],"fname":"1f1f5-1f1fc","uc":"1f1f5-1f1fc","isCanonical": true},":pw:":{"unicode":["1f1f5-1f1fc"],"fname":"1f1f5-1f1fc","uc":"1f1f5-1f1fc","isCanonical": false},":flag_pt:":{"unicode":["1f1f5-1f1f9"],"fname":"1f1f5-1f1f9","uc":"1f1f5-1f1f9","isCanonical": true},":pt:":{"unicode":["1f1f5-1f1f9"],"fname":"1f1f5-1f1f9","uc":"1f1f5-1f1f9","isCanonical": false},":flag_ps:":{"unicode":["1f1f5-1f1f8"],"fname":"1f1f5-1f1f8","uc":"1f1f5-1f1f8","isCanonical": true},":ps:":{"unicode":["1f1f5-1f1f8"],"fname":"1f1f5-1f1f8","uc":"1f1f5-1f1f8","isCanonical": false},":flag_pr:":{"unicode":["1f1f5-1f1f7"],"fname":"1f1f5-1f1f7","uc":"1f1f5-1f1f7","isCanonical": true},":pr:":{"unicode":["1f1f5-1f1f7"],"fname":"1f1f5-1f1f7","uc":"1f1f5-1f1f7","isCanonical": false},":flag_pn:":{"unicode":["1f1f5-1f1f3"],"fname":"1f1f5-1f1f3","uc":"1f1f5-1f1f3","isCanonical": true},":pn:":{"unicode":["1f1f5-1f1f3"],"fname":"1f1f5-1f1f3","uc":"1f1f5-1f1f3","isCanonical": false},":flag_pm:":{"unicode":["1f1f5-1f1f2"],"fname":"1f1f5-1f1f2","uc":"1f1f5-1f1f2","isCanonical": true},":pm:":{"unicode":["1f1f5-1f1f2"],"fname":"1f1f5-1f1f2","uc":"1f1f5-1f1f2","isCanonical": false},":flag_pl:":{"unicode":["1f1f5-1f1f1"],"fname":"1f1f5-1f1f1","uc":"1f1f5-1f1f1","isCanonical": true},":pl:":{"unicode":["1f1f5-1f1f1"],"fname":"1f1f5-1f1f1","uc":"1f1f5-1f1f1","isCanonical": false},":flag_pk:":{"unicode":["1f1f5-1f1f0"],"fname":"1f1f5-1f1f0","uc":"1f1f5-1f1f0","isCanonical": true},":pk:":{"unicode":["1f1f5-1f1f0"],"fname":"1f1f5-1f1f0","uc":"1f1f5-1f1f0","isCanonical": false},":flag_ph:":{"unicode":["1f1f5-1f1ed"],"fname":"1f1f5-1f1ed","uc":"1f1f5-1f1ed","isCanonical": true},":ph:":{"unicode":["1f1f5-1f1ed"],"fname":"1f1f5-1f1ed","uc":"1f1f5-1f1ed","isCanonical": false},":flag_pg:":{"unicode":["1f1f5-1f1ec"],"fname":"1f1f5-1f1ec","uc":"1f1f5-1f1ec","isCanonical": true},":pg:":{"unicode":["1f1f5-1f1ec"],"fname":"1f1f5-1f1ec","uc":"1f1f5-1f1ec","isCanonical": false},":flag_pf:":{"unicode":["1f1f5-1f1eb"],"fname":"1f1f5-1f1eb","uc":"1f1f5-1f1eb","isCanonical": true},":pf:":{"unicode":["1f1f5-1f1eb"],"fname":"1f1f5-1f1eb","uc":"1f1f5-1f1eb","isCanonical": false},":flag_pe:":{"unicode":["1f1f5-1f1ea"],"fname":"1f1f5-1f1ea","uc":"1f1f5-1f1ea","isCanonical": true},":pe:":{"unicode":["1f1f5-1f1ea"],"fname":"1f1f5-1f1ea","uc":"1f1f5-1f1ea","isCanonical": false},":flag_pa:":{"unicode":["1f1f5-1f1e6"],"fname":"1f1f5-1f1e6","uc":"1f1f5-1f1e6","isCanonical": true},":pa:":{"unicode":["1f1f5-1f1e6"],"fname":"1f1f5-1f1e6","uc":"1f1f5-1f1e6","isCanonical": false},":flag_om:":{"unicode":["1f1f4-1f1f2"],"fname":"1f1f4-1f1f2","uc":"1f1f4-1f1f2","isCanonical": true},":om:":{"unicode":["1f1f4-1f1f2"],"fname":"1f1f4-1f1f2","uc":"1f1f4-1f1f2","isCanonical": false},":flag_nz:":{"unicode":["1f1f3-1f1ff"],"fname":"1f1f3-1f1ff","uc":"1f1f3-1f1ff","isCanonical": true},":nz:":{"unicode":["1f1f3-1f1ff"],"fname":"1f1f3-1f1ff","uc":"1f1f3-1f1ff","isCanonical": false},":flag_nu:":{"unicode":["1f1f3-1f1fa"],"fname":"1f1f3-1f1fa","uc":"1f1f3-1f1fa","isCanonical": true},":nu:":{"unicode":["1f1f3-1f1fa"],"fname":"1f1f3-1f1fa","uc":"1f1f3-1f1fa","isCanonical": false},":flag_nr:":{"unicode":["1f1f3-1f1f7"],"fname":"1f1f3-1f1f7","uc":"1f1f3-1f1f7","isCanonical": true},":nr:":{"unicode":["1f1f3-1f1f7"],"fname":"1f1f3-1f1f7","uc":"1f1f3-1f1f7","isCanonical": false},":flag_np:":{"unicode":["1f1f3-1f1f5"],"fname":"1f1f3-1f1f5","uc":"1f1f3-1f1f5","isCanonical": true},":np:":{"unicode":["1f1f3-1f1f5"],"fname":"1f1f3-1f1f5","uc":"1f1f3-1f1f5","isCanonical": false},":flag_no:":{"unicode":["1f1f3-1f1f4"],"fname":"1f1f3-1f1f4","uc":"1f1f3-1f1f4","isCanonical": true},":no:":{"unicode":["1f1f3-1f1f4"],"fname":"1f1f3-1f1f4","uc":"1f1f3-1f1f4","isCanonical": false},":flag_nl:":{"unicode":["1f1f3-1f1f1"],"fname":"1f1f3-1f1f1","uc":"1f1f3-1f1f1","isCanonical": true},":nl:":{"unicode":["1f1f3-1f1f1"],"fname":"1f1f3-1f1f1","uc":"1f1f3-1f1f1","isCanonical": false},":flag_ni:":{"unicode":["1f1f3-1f1ee"],"fname":"1f1f3-1f1ee","uc":"1f1f3-1f1ee","isCanonical": true},":ni:":{"unicode":["1f1f3-1f1ee"],"fname":"1f1f3-1f1ee","uc":"1f1f3-1f1ee","isCanonical": false},":flag_ng:":{"unicode":["1f1f3-1f1ec"],"fname":"1f1f3-1f1ec","uc":"1f1f3-1f1ec","isCanonical": true},":nigeria:":{"unicode":["1f1f3-1f1ec"],"fname":"1f1f3-1f1ec","uc":"1f1f3-1f1ec","isCanonical": false},":flag_nf:":{"unicode":["1f1f3-1f1eb"],"fname":"1f1f3-1f1eb","uc":"1f1f3-1f1eb","isCanonical": true},":nf:":{"unicode":["1f1f3-1f1eb"],"fname":"1f1f3-1f1eb","uc":"1f1f3-1f1eb","isCanonical": false},":flag_ne:":{"unicode":["1f1f3-1f1ea"],"fname":"1f1f3-1f1ea","uc":"1f1f3-1f1ea","isCanonical": true},":ne:":{"unicode":["1f1f3-1f1ea"],"fname":"1f1f3-1f1ea","uc":"1f1f3-1f1ea","isCanonical": false},":flag_nc:":{"unicode":["1f1f3-1f1e8"],"fname":"1f1f3-1f1e8","uc":"1f1f3-1f1e8","isCanonical": true},":nc:":{"unicode":["1f1f3-1f1e8"],"fname":"1f1f3-1f1e8","uc":"1f1f3-1f1e8","isCanonical": false},":flag_na:":{"unicode":["1f1f3-1f1e6"],"fname":"1f1f3-1f1e6","uc":"1f1f3-1f1e6","isCanonical": true},":na:":{"unicode":["1f1f3-1f1e6"],"fname":"1f1f3-1f1e6","uc":"1f1f3-1f1e6","isCanonical": false},":flag_mz:":{"unicode":["1f1f2-1f1ff"],"fname":"1f1f2-1f1ff","uc":"1f1f2-1f1ff","isCanonical": true},":mz:":{"unicode":["1f1f2-1f1ff"],"fname":"1f1f2-1f1ff","uc":"1f1f2-1f1ff","isCanonical": false},":flag_my:":{"unicode":["1f1f2-1f1fe"],"fname":"1f1f2-1f1fe","uc":"1f1f2-1f1fe","isCanonical": true},":my:":{"unicode":["1f1f2-1f1fe"],"fname":"1f1f2-1f1fe","uc":"1f1f2-1f1fe","isCanonical": false},":flag_mx:":{"unicode":["1f1f2-1f1fd"],"fname":"1f1f2-1f1fd","uc":"1f1f2-1f1fd","isCanonical": true},":mx:":{"unicode":["1f1f2-1f1fd"],"fname":"1f1f2-1f1fd","uc":"1f1f2-1f1fd","isCanonical": false},":flag_mw:":{"unicode":["1f1f2-1f1fc"],"fname":"1f1f2-1f1fc","uc":"1f1f2-1f1fc","isCanonical": true},":mw:":{"unicode":["1f1f2-1f1fc"],"fname":"1f1f2-1f1fc","uc":"1f1f2-1f1fc","isCanonical": false},":flag_mv:":{"unicode":["1f1f2-1f1fb"],"fname":"1f1f2-1f1fb","uc":"1f1f2-1f1fb","isCanonical": true},":mv:":{"unicode":["1f1f2-1f1fb"],"fname":"1f1f2-1f1fb","uc":"1f1f2-1f1fb","isCanonical": false},":flag_mu:":{"unicode":["1f1f2-1f1fa"],"fname":"1f1f2-1f1fa","uc":"1f1f2-1f1fa","isCanonical": true},":mu:":{"unicode":["1f1f2-1f1fa"],"fname":"1f1f2-1f1fa","uc":"1f1f2-1f1fa","isCanonical": false},":flag_mt:":{"unicode":["1f1f2-1f1f9"],"fname":"1f1f2-1f1f9","uc":"1f1f2-1f1f9","isCanonical": true},":mt:":{"unicode":["1f1f2-1f1f9"],"fname":"1f1f2-1f1f9","uc":"1f1f2-1f1f9","isCanonical": false},":flag_ms:":{"unicode":["1f1f2-1f1f8"],"fname":"1f1f2-1f1f8","uc":"1f1f2-1f1f8","isCanonical": true},":ms:":{"unicode":["1f1f2-1f1f8"],"fname":"1f1f2-1f1f8","uc":"1f1f2-1f1f8","isCanonical": false},":flag_mr:":{"unicode":["1f1f2-1f1f7"],"fname":"1f1f2-1f1f7","uc":"1f1f2-1f1f7","isCanonical": true},":mr:":{"unicode":["1f1f2-1f1f7"],"fname":"1f1f2-1f1f7","uc":"1f1f2-1f1f7","isCanonical": false},":flag_mq:":{"unicode":["1f1f2-1f1f6"],"fname":"1f1f2-1f1f6","uc":"1f1f2-1f1f6","isCanonical": true},":mq:":{"unicode":["1f1f2-1f1f6"],"fname":"1f1f2-1f1f6","uc":"1f1f2-1f1f6","isCanonical": false},":flag_mp:":{"unicode":["1f1f2-1f1f5"],"fname":"1f1f2-1f1f5","uc":"1f1f2-1f1f5","isCanonical": true},":mp:":{"unicode":["1f1f2-1f1f5"],"fname":"1f1f2-1f1f5","uc":"1f1f2-1f1f5","isCanonical": false},":flag_mo:":{"unicode":["1f1f2-1f1f4"],"fname":"1f1f2-1f1f4","uc":"1f1f2-1f1f4","isCanonical": true},":mo:":{"unicode":["1f1f2-1f1f4"],"fname":"1f1f2-1f1f4","uc":"1f1f2-1f1f4","isCanonical": false},":flag_mn:":{"unicode":["1f1f2-1f1f3"],"fname":"1f1f2-1f1f3","uc":"1f1f2-1f1f3","isCanonical": true},":mn:":{"unicode":["1f1f2-1f1f3"],"fname":"1f1f2-1f1f3","uc":"1f1f2-1f1f3","isCanonical": false},":flag_mm:":{"unicode":["1f1f2-1f1f2"],"fname":"1f1f2-1f1f2","uc":"1f1f2-1f1f2","isCanonical": true},":mm:":{"unicode":["1f1f2-1f1f2"],"fname":"1f1f2-1f1f2","uc":"1f1f2-1f1f2","isCanonical": false},":flag_ml:":{"unicode":["1f1f2-1f1f1"],"fname":"1f1f2-1f1f1","uc":"1f1f2-1f1f1","isCanonical": true},":ml:":{"unicode":["1f1f2-1f1f1"],"fname":"1f1f2-1f1f1","uc":"1f1f2-1f1f1","isCanonical": false},":flag_mk:":{"unicode":["1f1f2-1f1f0"],"fname":"1f1f2-1f1f0","uc":"1f1f2-1f1f0","isCanonical": true},":mk:":{"unicode":["1f1f2-1f1f0"],"fname":"1f1f2-1f1f0","uc":"1f1f2-1f1f0","isCanonical": false},":flag_mh:":{"unicode":["1f1f2-1f1ed"],"fname":"1f1f2-1f1ed","uc":"1f1f2-1f1ed","isCanonical": true},":mh:":{"unicode":["1f1f2-1f1ed"],"fname":"1f1f2-1f1ed","uc":"1f1f2-1f1ed","isCanonical": false},":flag_mg:":{"unicode":["1f1f2-1f1ec"],"fname":"1f1f2-1f1ec","uc":"1f1f2-1f1ec","isCanonical": true},":mg:":{"unicode":["1f1f2-1f1ec"],"fname":"1f1f2-1f1ec","uc":"1f1f2-1f1ec","isCanonical": false},":flag_mf:":{"unicode":["1f1f2-1f1eb"],"fname":"1f1f2-1f1eb","uc":"1f1f2-1f1eb","isCanonical": true},":mf:":{"unicode":["1f1f2-1f1eb"],"fname":"1f1f2-1f1eb","uc":"1f1f2-1f1eb","isCanonical": false},":flag_me:":{"unicode":["1f1f2-1f1ea"],"fname":"1f1f2-1f1ea","uc":"1f1f2-1f1ea","isCanonical": true},":me:":{"unicode":["1f1f2-1f1ea"],"fname":"1f1f2-1f1ea","uc":"1f1f2-1f1ea","isCanonical": false},":flag_md:":{"unicode":["1f1f2-1f1e9"],"fname":"1f1f2-1f1e9","uc":"1f1f2-1f1e9","isCanonical": true},":md:":{"unicode":["1f1f2-1f1e9"],"fname":"1f1f2-1f1e9","uc":"1f1f2-1f1e9","isCanonical": false},":flag_mc:":{"unicode":["1f1f2-1f1e8"],"fname":"1f1f2-1f1e8","uc":"1f1f2-1f1e8","isCanonical": true},":mc:":{"unicode":["1f1f2-1f1e8"],"fname":"1f1f2-1f1e8","uc":"1f1f2-1f1e8","isCanonical": false},":flag_ma:":{"unicode":["1f1f2-1f1e6"],"fname":"1f1f2-1f1e6","uc":"1f1f2-1f1e6","isCanonical": true},":ma:":{"unicode":["1f1f2-1f1e6"],"fname":"1f1f2-1f1e6","uc":"1f1f2-1f1e6","isCanonical": false},":flag_ly:":{"unicode":["1f1f1-1f1fe"],"fname":"1f1f1-1f1fe","uc":"1f1f1-1f1fe","isCanonical": true},":ly:":{"unicode":["1f1f1-1f1fe"],"fname":"1f1f1-1f1fe","uc":"1f1f1-1f1fe","isCanonical": false},":flag_lv:":{"unicode":["1f1f1-1f1fb"],"fname":"1f1f1-1f1fb","uc":"1f1f1-1f1fb","isCanonical": true},":lv:":{"unicode":["1f1f1-1f1fb"],"fname":"1f1f1-1f1fb","uc":"1f1f1-1f1fb","isCanonical": false},":flag_lu:":{"unicode":["1f1f1-1f1fa"],"fname":"1f1f1-1f1fa","uc":"1f1f1-1f1fa","isCanonical": true},":lu:":{"unicode":["1f1f1-1f1fa"],"fname":"1f1f1-1f1fa","uc":"1f1f1-1f1fa","isCanonical": false},":flag_lt:":{"unicode":["1f1f1-1f1f9"],"fname":"1f1f1-1f1f9","uc":"1f1f1-1f1f9","isCanonical": true},":lt:":{"unicode":["1f1f1-1f1f9"],"fname":"1f1f1-1f1f9","uc":"1f1f1-1f1f9","isCanonical": false},":flag_ls:":{"unicode":["1f1f1-1f1f8"],"fname":"1f1f1-1f1f8","uc":"1f1f1-1f1f8","isCanonical": true},":ls:":{"unicode":["1f1f1-1f1f8"],"fname":"1f1f1-1f1f8","uc":"1f1f1-1f1f8","isCanonical": false},":flag_lr:":{"unicode":["1f1f1-1f1f7"],"fname":"1f1f1-1f1f7","uc":"1f1f1-1f1f7","isCanonical": true},":lr:":{"unicode":["1f1f1-1f1f7"],"fname":"1f1f1-1f1f7","uc":"1f1f1-1f1f7","isCanonical": false},":flag_lk:":{"unicode":["1f1f1-1f1f0"],"fname":"1f1f1-1f1f0","uc":"1f1f1-1f1f0","isCanonical": true},":lk:":{"unicode":["1f1f1-1f1f0"],"fname":"1f1f1-1f1f0","uc":"1f1f1-1f1f0","isCanonical": false},":flag_li:":{"unicode":["1f1f1-1f1ee"],"fname":"1f1f1-1f1ee","uc":"1f1f1-1f1ee","isCanonical": true},":li:":{"unicode":["1f1f1-1f1ee"],"fname":"1f1f1-1f1ee","uc":"1f1f1-1f1ee","isCanonical": false},":flag_lc:":{"unicode":["1f1f1-1f1e8"],"fname":"1f1f1-1f1e8","uc":"1f1f1-1f1e8","isCanonical": true},":lc:":{"unicode":["1f1f1-1f1e8"],"fname":"1f1f1-1f1e8","uc":"1f1f1-1f1e8","isCanonical": false},":flag_lb:":{"unicode":["1f1f1-1f1e7"],"fname":"1f1f1-1f1e7","uc":"1f1f1-1f1e7","isCanonical": true},":lb:":{"unicode":["1f1f1-1f1e7"],"fname":"1f1f1-1f1e7","uc":"1f1f1-1f1e7","isCanonical": false},":flag_la:":{"unicode":["1f1f1-1f1e6"],"fname":"1f1f1-1f1e6","uc":"1f1f1-1f1e6","isCanonical": true},":la:":{"unicode":["1f1f1-1f1e6"],"fname":"1f1f1-1f1e6","uc":"1f1f1-1f1e6","isCanonical": false},":flag_kz:":{"unicode":["1f1f0-1f1ff"],"fname":"1f1f0-1f1ff","uc":"1f1f0-1f1ff","isCanonical": true},":kz:":{"unicode":["1f1f0-1f1ff"],"fname":"1f1f0-1f1ff","uc":"1f1f0-1f1ff","isCanonical": false},":flag_ky:":{"unicode":["1f1f0-1f1fe"],"fname":"1f1f0-1f1fe","uc":"1f1f0-1f1fe","isCanonical": true},":ky:":{"unicode":["1f1f0-1f1fe"],"fname":"1f1f0-1f1fe","uc":"1f1f0-1f1fe","isCanonical": false},":flag_kw:":{"unicode":["1f1f0-1f1fc"],"fname":"1f1f0-1f1fc","uc":"1f1f0-1f1fc","isCanonical": true},":kw:":{"unicode":["1f1f0-1f1fc"],"fname":"1f1f0-1f1fc","uc":"1f1f0-1f1fc","isCanonical": false},":flag_kr:":{"unicode":["1f1f0-1f1f7"],"fname":"1f1f0-1f1f7","uc":"1f1f0-1f1f7","isCanonical": true},":kr:":{"unicode":["1f1f0-1f1f7"],"fname":"1f1f0-1f1f7","uc":"1f1f0-1f1f7","isCanonical": false},":flag_kp:":{"unicode":["1f1f0-1f1f5"],"fname":"1f1f0-1f1f5","uc":"1f1f0-1f1f5","isCanonical": true},":kp:":{"unicode":["1f1f0-1f1f5"],"fname":"1f1f0-1f1f5","uc":"1f1f0-1f1f5","isCanonical": false},":flag_kn:":{"unicode":["1f1f0-1f1f3"],"fname":"1f1f0-1f1f3","uc":"1f1f0-1f1f3","isCanonical": true},":kn:":{"unicode":["1f1f0-1f1f3"],"fname":"1f1f0-1f1f3","uc":"1f1f0-1f1f3","isCanonical": false},":flag_km:":{"unicode":["1f1f0-1f1f2"],"fname":"1f1f0-1f1f2","uc":"1f1f0-1f1f2","isCanonical": true},":km:":{"unicode":["1f1f0-1f1f2"],"fname":"1f1f0-1f1f2","uc":"1f1f0-1f1f2","isCanonical": false},":flag_ki:":{"unicode":["1f1f0-1f1ee"],"fname":"1f1f0-1f1ee","uc":"1f1f0-1f1ee","isCanonical": true},":ki:":{"unicode":["1f1f0-1f1ee"],"fname":"1f1f0-1f1ee","uc":"1f1f0-1f1ee","isCanonical": false},":flag_kh:":{"unicode":["1f1f0-1f1ed"],"fname":"1f1f0-1f1ed","uc":"1f1f0-1f1ed","isCanonical": true},":kh:":{"unicode":["1f1f0-1f1ed"],"fname":"1f1f0-1f1ed","uc":"1f1f0-1f1ed","isCanonical": false},":flag_kg:":{"unicode":["1f1f0-1f1ec"],"fname":"1f1f0-1f1ec","uc":"1f1f0-1f1ec","isCanonical": true},":kg:":{"unicode":["1f1f0-1f1ec"],"fname":"1f1f0-1f1ec","uc":"1f1f0-1f1ec","isCanonical": false},":flag_ke:":{"unicode":["1f1f0-1f1ea"],"fname":"1f1f0-1f1ea","uc":"1f1f0-1f1ea","isCanonical": true},":ke:":{"unicode":["1f1f0-1f1ea"],"fname":"1f1f0-1f1ea","uc":"1f1f0-1f1ea","isCanonical": false},":flag_jp:":{"unicode":["1f1ef-1f1f5"],"fname":"1f1ef-1f1f5","uc":"1f1ef-1f1f5","isCanonical": true},":jp:":{"unicode":["1f1ef-1f1f5"],"fname":"1f1ef-1f1f5","uc":"1f1ef-1f1f5","isCanonical": false},":flag_jo:":{"unicode":["1f1ef-1f1f4"],"fname":"1f1ef-1f1f4","uc":"1f1ef-1f1f4","isCanonical": true},":jo:":{"unicode":["1f1ef-1f1f4"],"fname":"1f1ef-1f1f4","uc":"1f1ef-1f1f4","isCanonical": false},":flag_jm:":{"unicode":["1f1ef-1f1f2"],"fname":"1f1ef-1f1f2","uc":"1f1ef-1f1f2","isCanonical": true},":jm:":{"unicode":["1f1ef-1f1f2"],"fname":"1f1ef-1f1f2","uc":"1f1ef-1f1f2","isCanonical": false},":flag_je:":{"unicode":["1f1ef-1f1ea"],"fname":"1f1ef-1f1ea","uc":"1f1ef-1f1ea","isCanonical": true},":je:":{"unicode":["1f1ef-1f1ea"],"fname":"1f1ef-1f1ea","uc":"1f1ef-1f1ea","isCanonical": false},":flag_it:":{"unicode":["1f1ee-1f1f9"],"fname":"1f1ee-1f1f9","uc":"1f1ee-1f1f9","isCanonical": true},":it:":{"unicode":["1f1ee-1f1f9"],"fname":"1f1ee-1f1f9","uc":"1f1ee-1f1f9","isCanonical": false},":flag_is:":{"unicode":["1f1ee-1f1f8"],"fname":"1f1ee-1f1f8","uc":"1f1ee-1f1f8","isCanonical": true},":is:":{"unicode":["1f1ee-1f1f8"],"fname":"1f1ee-1f1f8","uc":"1f1ee-1f1f8","isCanonical": false},":flag_ir:":{"unicode":["1f1ee-1f1f7"],"fname":"1f1ee-1f1f7","uc":"1f1ee-1f1f7","isCanonical": true},":ir:":{"unicode":["1f1ee-1f1f7"],"fname":"1f1ee-1f1f7","uc":"1f1ee-1f1f7","isCanonical": false},":flag_iq:":{"unicode":["1f1ee-1f1f6"],"fname":"1f1ee-1f1f6","uc":"1f1ee-1f1f6","isCanonical": true},":iq:":{"unicode":["1f1ee-1f1f6"],"fname":"1f1ee-1f1f6","uc":"1f1ee-1f1f6","isCanonical": false},":flag_io:":{"unicode":["1f1ee-1f1f4"],"fname":"1f1ee-1f1f4","uc":"1f1ee-1f1f4","isCanonical": true},":io:":{"unicode":["1f1ee-1f1f4"],"fname":"1f1ee-1f1f4","uc":"1f1ee-1f1f4","isCanonical": false},":flag_in:":{"unicode":["1f1ee-1f1f3"],"fname":"1f1ee-1f1f3","uc":"1f1ee-1f1f3","isCanonical": true},":in:":{"unicode":["1f1ee-1f1f3"],"fname":"1f1ee-1f1f3","uc":"1f1ee-1f1f3","isCanonical": false},":flag_im:":{"unicode":["1f1ee-1f1f2"],"fname":"1f1ee-1f1f2","uc":"1f1ee-1f1f2","isCanonical": true},":im:":{"unicode":["1f1ee-1f1f2"],"fname":"1f1ee-1f1f2","uc":"1f1ee-1f1f2","isCanonical": false},":flag_il:":{"unicode":["1f1ee-1f1f1"],"fname":"1f1ee-1f1f1","uc":"1f1ee-1f1f1","isCanonical": true},":il:":{"unicode":["1f1ee-1f1f1"],"fname":"1f1ee-1f1f1","uc":"1f1ee-1f1f1","isCanonical": false},":flag_ie:":{"unicode":["1f1ee-1f1ea"],"fname":"1f1ee-1f1ea","uc":"1f1ee-1f1ea","isCanonical": true},":ie:":{"unicode":["1f1ee-1f1ea"],"fname":"1f1ee-1f1ea","uc":"1f1ee-1f1ea","isCanonical": false},":flag_id:":{"unicode":["1f1ee-1f1e9"],"fname":"1f1ee-1f1e9","uc":"1f1ee-1f1e9","isCanonical": true},":indonesia:":{"unicode":["1f1ee-1f1e9"],"fname":"1f1ee-1f1e9","uc":"1f1ee-1f1e9","isCanonical": false},":flag_ic:":{"unicode":["1f1ee-1f1e8"],"fname":"1f1ee-1f1e8","uc":"1f1ee-1f1e8","isCanonical": true},":ic:":{"unicode":["1f1ee-1f1e8"],"fname":"1f1ee-1f1e8","uc":"1f1ee-1f1e8","isCanonical": false},":flag_hu:":{"unicode":["1f1ed-1f1fa"],"fname":"1f1ed-1f1fa","uc":"1f1ed-1f1fa","isCanonical": true},":hu:":{"unicode":["1f1ed-1f1fa"],"fname":"1f1ed-1f1fa","uc":"1f1ed-1f1fa","isCanonical": false},":flag_ht:":{"unicode":["1f1ed-1f1f9"],"fname":"1f1ed-1f1f9","uc":"1f1ed-1f1f9","isCanonical": true},":ht:":{"unicode":["1f1ed-1f1f9"],"fname":"1f1ed-1f1f9","uc":"1f1ed-1f1f9","isCanonical": false},":flag_hr:":{"unicode":["1f1ed-1f1f7"],"fname":"1f1ed-1f1f7","uc":"1f1ed-1f1f7","isCanonical": true},":hr:":{"unicode":["1f1ed-1f1f7"],"fname":"1f1ed-1f1f7","uc":"1f1ed-1f1f7","isCanonical": false},":flag_hn:":{"unicode":["1f1ed-1f1f3"],"fname":"1f1ed-1f1f3","uc":"1f1ed-1f1f3","isCanonical": true},":hn:":{"unicode":["1f1ed-1f1f3"],"fname":"1f1ed-1f1f3","uc":"1f1ed-1f1f3","isCanonical": false},":flag_hm:":{"unicode":["1f1ed-1f1f2"],"fname":"1f1ed-1f1f2","uc":"1f1ed-1f1f2","isCanonical": true},":hm:":{"unicode":["1f1ed-1f1f2"],"fname":"1f1ed-1f1f2","uc":"1f1ed-1f1f2","isCanonical": false},":flag_hk:":{"unicode":["1f1ed-1f1f0"],"fname":"1f1ed-1f1f0","uc":"1f1ed-1f1f0","isCanonical": true},":hk:":{"unicode":["1f1ed-1f1f0"],"fname":"1f1ed-1f1f0","uc":"1f1ed-1f1f0","isCanonical": false},":flag_gy:":{"unicode":["1f1ec-1f1fe"],"fname":"1f1ec-1f1fe","uc":"1f1ec-1f1fe","isCanonical": true},":gy:":{"unicode":["1f1ec-1f1fe"],"fname":"1f1ec-1f1fe","uc":"1f1ec-1f1fe","isCanonical": false},":flag_gw:":{"unicode":["1f1ec-1f1fc"],"fname":"1f1ec-1f1fc","uc":"1f1ec-1f1fc","isCanonical": true},":gw:":{"unicode":["1f1ec-1f1fc"],"fname":"1f1ec-1f1fc","uc":"1f1ec-1f1fc","isCanonical": false},":flag_gu:":{"unicode":["1f1ec-1f1fa"],"fname":"1f1ec-1f1fa","uc":"1f1ec-1f1fa","isCanonical": true},":gu:":{"unicode":["1f1ec-1f1fa"],"fname":"1f1ec-1f1fa","uc":"1f1ec-1f1fa","isCanonical": false},":flag_gt:":{"unicode":["1f1ec-1f1f9"],"fname":"1f1ec-1f1f9","uc":"1f1ec-1f1f9","isCanonical": true},":gt:":{"unicode":["1f1ec-1f1f9"],"fname":"1f1ec-1f1f9","uc":"1f1ec-1f1f9","isCanonical": false},":flag_gs:":{"unicode":["1f1ec-1f1f8"],"fname":"1f1ec-1f1f8","uc":"1f1ec-1f1f8","isCanonical": true},":gs:":{"unicode":["1f1ec-1f1f8"],"fname":"1f1ec-1f1f8","uc":"1f1ec-1f1f8","isCanonical": false},":flag_gr:":{"unicode":["1f1ec-1f1f7"],"fname":"1f1ec-1f1f7","uc":"1f1ec-1f1f7","isCanonical": true},":gr:":{"unicode":["1f1ec-1f1f7"],"fname":"1f1ec-1f1f7","uc":"1f1ec-1f1f7","isCanonical": false},":flag_gq:":{"unicode":["1f1ec-1f1f6"],"fname":"1f1ec-1f1f6","uc":"1f1ec-1f1f6","isCanonical": true},":gq:":{"unicode":["1f1ec-1f1f6"],"fname":"1f1ec-1f1f6","uc":"1f1ec-1f1f6","isCanonical": false},":flag_gp:":{"unicode":["1f1ec-1f1f5"],"fname":"1f1ec-1f1f5","uc":"1f1ec-1f1f5","isCanonical": true},":gp:":{"unicode":["1f1ec-1f1f5"],"fname":"1f1ec-1f1f5","uc":"1f1ec-1f1f5","isCanonical": false},":flag_gn:":{"unicode":["1f1ec-1f1f3"],"fname":"1f1ec-1f1f3","uc":"1f1ec-1f1f3","isCanonical": true},":gn:":{"unicode":["1f1ec-1f1f3"],"fname":"1f1ec-1f1f3","uc":"1f1ec-1f1f3","isCanonical": false},":flag_gm:":{"unicode":["1f1ec-1f1f2"],"fname":"1f1ec-1f1f2","uc":"1f1ec-1f1f2","isCanonical": true},":gm:":{"unicode":["1f1ec-1f1f2"],"fname":"1f1ec-1f1f2","uc":"1f1ec-1f1f2","isCanonical": false},":flag_gl:":{"unicode":["1f1ec-1f1f1"],"fname":"1f1ec-1f1f1","uc":"1f1ec-1f1f1","isCanonical": true},":gl:":{"unicode":["1f1ec-1f1f1"],"fname":"1f1ec-1f1f1","uc":"1f1ec-1f1f1","isCanonical": false},":flag_gi:":{"unicode":["1f1ec-1f1ee"],"fname":"1f1ec-1f1ee","uc":"1f1ec-1f1ee","isCanonical": true},":gi:":{"unicode":["1f1ec-1f1ee"],"fname":"1f1ec-1f1ee","uc":"1f1ec-1f1ee","isCanonical": false},":flag_gh:":{"unicode":["1f1ec-1f1ed"],"fname":"1f1ec-1f1ed","uc":"1f1ec-1f1ed","isCanonical": true},":gh:":{"unicode":["1f1ec-1f1ed"],"fname":"1f1ec-1f1ed","uc":"1f1ec-1f1ed","isCanonical": false},":flag_gg:":{"unicode":["1f1ec-1f1ec"],"fname":"1f1ec-1f1ec","uc":"1f1ec-1f1ec","isCanonical": true},":gg:":{"unicode":["1f1ec-1f1ec"],"fname":"1f1ec-1f1ec","uc":"1f1ec-1f1ec","isCanonical": false},":flag_gf:":{"unicode":["1f1ec-1f1eb"],"fname":"1f1ec-1f1eb","uc":"1f1ec-1f1eb","isCanonical": true},":gf:":{"unicode":["1f1ec-1f1eb"],"fname":"1f1ec-1f1eb","uc":"1f1ec-1f1eb","isCanonical": false},":flag_ge:":{"unicode":["1f1ec-1f1ea"],"fname":"1f1ec-1f1ea","uc":"1f1ec-1f1ea","isCanonical": true},":ge:":{"unicode":["1f1ec-1f1ea"],"fname":"1f1ec-1f1ea","uc":"1f1ec-1f1ea","isCanonical": false},":flag_gd:":{"unicode":["1f1ec-1f1e9"],"fname":"1f1ec-1f1e9","uc":"1f1ec-1f1e9","isCanonical": true},":gd:":{"unicode":["1f1ec-1f1e9"],"fname":"1f1ec-1f1e9","uc":"1f1ec-1f1e9","isCanonical": false},":flag_gb:":{"unicode":["1f1ec-1f1e7"],"fname":"1f1ec-1f1e7","uc":"1f1ec-1f1e7","isCanonical": true},":gb:":{"unicode":["1f1ec-1f1e7"],"fname":"1f1ec-1f1e7","uc":"1f1ec-1f1e7","isCanonical": false},":flag_ga:":{"unicode":["1f1ec-1f1e6"],"fname":"1f1ec-1f1e6","uc":"1f1ec-1f1e6","isCanonical": true},":ga:":{"unicode":["1f1ec-1f1e6"],"fname":"1f1ec-1f1e6","uc":"1f1ec-1f1e6","isCanonical": false},":flag_fr:":{"unicode":["1f1eb-1f1f7"],"fname":"1f1eb-1f1f7","uc":"1f1eb-1f1f7","isCanonical": true},":fr:":{"unicode":["1f1eb-1f1f7"],"fname":"1f1eb-1f1f7","uc":"1f1eb-1f1f7","isCanonical": false},":flag_fo:":{"unicode":["1f1eb-1f1f4"],"fname":"1f1eb-1f1f4","uc":"1f1eb-1f1f4","isCanonical": true},":fo:":{"unicode":["1f1eb-1f1f4"],"fname":"1f1eb-1f1f4","uc":"1f1eb-1f1f4","isCanonical": false},":flag_fm:":{"unicode":["1f1eb-1f1f2"],"fname":"1f1eb-1f1f2","uc":"1f1eb-1f1f2","isCanonical": true},":fm:":{"unicode":["1f1eb-1f1f2"],"fname":"1f1eb-1f1f2","uc":"1f1eb-1f1f2","isCanonical": false},":flag_fk:":{"unicode":["1f1eb-1f1f0"],"fname":"1f1eb-1f1f0","uc":"1f1eb-1f1f0","isCanonical": true},":fk:":{"unicode":["1f1eb-1f1f0"],"fname":"1f1eb-1f1f0","uc":"1f1eb-1f1f0","isCanonical": false},":flag_fj:":{"unicode":["1f1eb-1f1ef"],"fname":"1f1eb-1f1ef","uc":"1f1eb-1f1ef","isCanonical": true},":fj:":{"unicode":["1f1eb-1f1ef"],"fname":"1f1eb-1f1ef","uc":"1f1eb-1f1ef","isCanonical": false},":flag_fi:":{"unicode":["1f1eb-1f1ee"],"fname":"1f1eb-1f1ee","uc":"1f1eb-1f1ee","isCanonical": true},":fi:":{"unicode":["1f1eb-1f1ee"],"fname":"1f1eb-1f1ee","uc":"1f1eb-1f1ee","isCanonical": false},":flag_eu:":{"unicode":["1f1ea-1f1fa"],"fname":"1f1ea-1f1fa","uc":"1f1ea-1f1fa","isCanonical": true},":eu:":{"unicode":["1f1ea-1f1fa"],"fname":"1f1ea-1f1fa","uc":"1f1ea-1f1fa","isCanonical": false},":flag_et:":{"unicode":["1f1ea-1f1f9"],"fname":"1f1ea-1f1f9","uc":"1f1ea-1f1f9","isCanonical": true},":et:":{"unicode":["1f1ea-1f1f9"],"fname":"1f1ea-1f1f9","uc":"1f1ea-1f1f9","isCanonical": false},":flag_es:":{"unicode":["1f1ea-1f1f8"],"fname":"1f1ea-1f1f8","uc":"1f1ea-1f1f8","isCanonical": true},":es:":{"unicode":["1f1ea-1f1f8"],"fname":"1f1ea-1f1f8","uc":"1f1ea-1f1f8","isCanonical": false},":flag_er:":{"unicode":["1f1ea-1f1f7"],"fname":"1f1ea-1f1f7","uc":"1f1ea-1f1f7","isCanonical": true},":er:":{"unicode":["1f1ea-1f1f7"],"fname":"1f1ea-1f1f7","uc":"1f1ea-1f1f7","isCanonical": false},":flag_eh:":{"unicode":["1f1ea-1f1ed"],"fname":"1f1ea-1f1ed","uc":"1f1ea-1f1ed","isCanonical": true},":eh:":{"unicode":["1f1ea-1f1ed"],"fname":"1f1ea-1f1ed","uc":"1f1ea-1f1ed","isCanonical": false},":flag_eg:":{"unicode":["1f1ea-1f1ec"],"fname":"1f1ea-1f1ec","uc":"1f1ea-1f1ec","isCanonical": true},":eg:":{"unicode":["1f1ea-1f1ec"],"fname":"1f1ea-1f1ec","uc":"1f1ea-1f1ec","isCanonical": false},":flag_ee:":{"unicode":["1f1ea-1f1ea"],"fname":"1f1ea-1f1ea","uc":"1f1ea-1f1ea","isCanonical": true},":ee:":{"unicode":["1f1ea-1f1ea"],"fname":"1f1ea-1f1ea","uc":"1f1ea-1f1ea","isCanonical": false},":flag_ec:":{"unicode":["1f1ea-1f1e8"],"fname":"1f1ea-1f1e8","uc":"1f1ea-1f1e8","isCanonical": true},":ec:":{"unicode":["1f1ea-1f1e8"],"fname":"1f1ea-1f1e8","uc":"1f1ea-1f1e8","isCanonical": false},":flag_ea:":{"unicode":["1f1ea-1f1e6"],"fname":"1f1ea-1f1e6","uc":"1f1ea-1f1e6","isCanonical": true},":ea:":{"unicode":["1f1ea-1f1e6"],"fname":"1f1ea-1f1e6","uc":"1f1ea-1f1e6","isCanonical": false},":flag_dz:":{"unicode":["1f1e9-1f1ff"],"fname":"1f1e9-1f1ff","uc":"1f1e9-1f1ff","isCanonical": true},":dz:":{"unicode":["1f1e9-1f1ff"],"fname":"1f1e9-1f1ff","uc":"1f1e9-1f1ff","isCanonical": false},":flag_do:":{"unicode":["1f1e9-1f1f4"],"fname":"1f1e9-1f1f4","uc":"1f1e9-1f1f4","isCanonical": true},":do:":{"unicode":["1f1e9-1f1f4"],"fname":"1f1e9-1f1f4","uc":"1f1e9-1f1f4","isCanonical": false},":flag_dm:":{"unicode":["1f1e9-1f1f2"],"fname":"1f1e9-1f1f2","uc":"1f1e9-1f1f2","isCanonical": true},":dm:":{"unicode":["1f1e9-1f1f2"],"fname":"1f1e9-1f1f2","uc":"1f1e9-1f1f2","isCanonical": false},":flag_dk:":{"unicode":["1f1e9-1f1f0"],"fname":"1f1e9-1f1f0","uc":"1f1e9-1f1f0","isCanonical": true},":dk:":{"unicode":["1f1e9-1f1f0"],"fname":"1f1e9-1f1f0","uc":"1f1e9-1f1f0","isCanonical": false},":flag_dj:":{"unicode":["1f1e9-1f1ef"],"fname":"1f1e9-1f1ef","uc":"1f1e9-1f1ef","isCanonical": true},":dj:":{"unicode":["1f1e9-1f1ef"],"fname":"1f1e9-1f1ef","uc":"1f1e9-1f1ef","isCanonical": false},":flag_dg:":{"unicode":["1f1e9-1f1ec"],"fname":"1f1e9-1f1ec","uc":"1f1e9-1f1ec","isCanonical": true},":dg:":{"unicode":["1f1e9-1f1ec"],"fname":"1f1e9-1f1ec","uc":"1f1e9-1f1ec","isCanonical": false},":flag_de:":{"unicode":["1f1e9-1f1ea"],"fname":"1f1e9-1f1ea","uc":"1f1e9-1f1ea","isCanonical": true},":de:":{"unicode":["1f1e9-1f1ea"],"fname":"1f1e9-1f1ea","uc":"1f1e9-1f1ea","isCanonical": false},":flag_cz:":{"unicode":["1f1e8-1f1ff"],"fname":"1f1e8-1f1ff","uc":"1f1e8-1f1ff","isCanonical": true},":cz:":{"unicode":["1f1e8-1f1ff"],"fname":"1f1e8-1f1ff","uc":"1f1e8-1f1ff","isCanonical": false},":flag_cy:":{"unicode":["1f1e8-1f1fe"],"fname":"1f1e8-1f1fe","uc":"1f1e8-1f1fe","isCanonical": true},":cy:":{"unicode":["1f1e8-1f1fe"],"fname":"1f1e8-1f1fe","uc":"1f1e8-1f1fe","isCanonical": false},":flag_cx:":{"unicode":["1f1e8-1f1fd"],"fname":"1f1e8-1f1fd","uc":"1f1e8-1f1fd","isCanonical": true},":cx:":{"unicode":["1f1e8-1f1fd"],"fname":"1f1e8-1f1fd","uc":"1f1e8-1f1fd","isCanonical": false},":flag_cw:":{"unicode":["1f1e8-1f1fc"],"fname":"1f1e8-1f1fc","uc":"1f1e8-1f1fc","isCanonical": true},":cw:":{"unicode":["1f1e8-1f1fc"],"fname":"1f1e8-1f1fc","uc":"1f1e8-1f1fc","isCanonical": false},":flag_cv:":{"unicode":["1f1e8-1f1fb"],"fname":"1f1e8-1f1fb","uc":"1f1e8-1f1fb","isCanonical": true},":cv:":{"unicode":["1f1e8-1f1fb"],"fname":"1f1e8-1f1fb","uc":"1f1e8-1f1fb","isCanonical": false},":flag_cu:":{"unicode":["1f1e8-1f1fa"],"fname":"1f1e8-1f1fa","uc":"1f1e8-1f1fa","isCanonical": true},":cu:":{"unicode":["1f1e8-1f1fa"],"fname":"1f1e8-1f1fa","uc":"1f1e8-1f1fa","isCanonical": false},":flag_cr:":{"unicode":["1f1e8-1f1f7"],"fname":"1f1e8-1f1f7","uc":"1f1e8-1f1f7","isCanonical": true},":cr:":{"unicode":["1f1e8-1f1f7"],"fname":"1f1e8-1f1f7","uc":"1f1e8-1f1f7","isCanonical": false},":flag_cp:":{"unicode":["1f1e8-1f1f5"],"fname":"1f1e8-1f1f5","uc":"1f1e8-1f1f5","isCanonical": true},":cp:":{"unicode":["1f1e8-1f1f5"],"fname":"1f1e8-1f1f5","uc":"1f1e8-1f1f5","isCanonical": false},":flag_co:":{"unicode":["1f1e8-1f1f4"],"fname":"1f1e8-1f1f4","uc":"1f1e8-1f1f4","isCanonical": true},":co:":{"unicode":["1f1e8-1f1f4"],"fname":"1f1e8-1f1f4","uc":"1f1e8-1f1f4","isCanonical": false},":flag_cn:":{"unicode":["1f1e8-1f1f3"],"fname":"1f1e8-1f1f3","uc":"1f1e8-1f1f3","isCanonical": true},":cn:":{"unicode":["1f1e8-1f1f3"],"fname":"1f1e8-1f1f3","uc":"1f1e8-1f1f3","isCanonical": false},":flag_cm:":{"unicode":["1f1e8-1f1f2"],"fname":"1f1e8-1f1f2","uc":"1f1e8-1f1f2","isCanonical": true},":cm:":{"unicode":["1f1e8-1f1f2"],"fname":"1f1e8-1f1f2","uc":"1f1e8-1f1f2","isCanonical": false},":flag_cl:":{"unicode":["1f1e8-1f1f1"],"fname":"1f1e8-1f1f1","uc":"1f1e8-1f1f1","isCanonical": true},":chile:":{"unicode":["1f1e8-1f1f1"],"fname":"1f1e8-1f1f1","uc":"1f1e8-1f1f1","isCanonical": false},":flag_ck:":{"unicode":["1f1e8-1f1f0"],"fname":"1f1e8-1f1f0","uc":"1f1e8-1f1f0","isCanonical": true},":ck:":{"unicode":["1f1e8-1f1f0"],"fname":"1f1e8-1f1f0","uc":"1f1e8-1f1f0","isCanonical": false},":flag_ci:":{"unicode":["1f1e8-1f1ee"],"fname":"1f1e8-1f1ee","uc":"1f1e8-1f1ee","isCanonical": true},":ci:":{"unicode":["1f1e8-1f1ee"],"fname":"1f1e8-1f1ee","uc":"1f1e8-1f1ee","isCanonical": false},":flag_ch:":{"unicode":["1f1e8-1f1ed"],"fname":"1f1e8-1f1ed","uc":"1f1e8-1f1ed","isCanonical": true},":ch:":{"unicode":["1f1e8-1f1ed"],"fname":"1f1e8-1f1ed","uc":"1f1e8-1f1ed","isCanonical": false},":flag_cg:":{"unicode":["1f1e8-1f1ec"],"fname":"1f1e8-1f1ec","uc":"1f1e8-1f1ec","isCanonical": true},":cg:":{"unicode":["1f1e8-1f1ec"],"fname":"1f1e8-1f1ec","uc":"1f1e8-1f1ec","isCanonical": false},":flag_cf:":{"unicode":["1f1e8-1f1eb"],"fname":"1f1e8-1f1eb","uc":"1f1e8-1f1eb","isCanonical": true},":cf:":{"unicode":["1f1e8-1f1eb"],"fname":"1f1e8-1f1eb","uc":"1f1e8-1f1eb","isCanonical": false},":flag_cd:":{"unicode":["1f1e8-1f1e9"],"fname":"1f1e8-1f1e9","uc":"1f1e8-1f1e9","isCanonical": true},":congo:":{"unicode":["1f1e8-1f1e9"],"fname":"1f1e8-1f1e9","uc":"1f1e8-1f1e9","isCanonical": false},":flag_cc:":{"unicode":["1f1e8-1f1e8"],"fname":"1f1e8-1f1e8","uc":"1f1e8-1f1e8","isCanonical": true},":cc:":{"unicode":["1f1e8-1f1e8"],"fname":"1f1e8-1f1e8","uc":"1f1e8-1f1e8","isCanonical": false},":flag_ca:":{"unicode":["1f1e8-1f1e6"],"fname":"1f1e8-1f1e6","uc":"1f1e8-1f1e6","isCanonical": true},":ca:":{"unicode":["1f1e8-1f1e6"],"fname":"1f1e8-1f1e6","uc":"1f1e8-1f1e6","isCanonical": false},":flag_bz:":{"unicode":["1f1e7-1f1ff"],"fname":"1f1e7-1f1ff","uc":"1f1e7-1f1ff","isCanonical": true},":bz:":{"unicode":["1f1e7-1f1ff"],"fname":"1f1e7-1f1ff","uc":"1f1e7-1f1ff","isCanonical": false},":flag_by:":{"unicode":["1f1e7-1f1fe"],"fname":"1f1e7-1f1fe","uc":"1f1e7-1f1fe","isCanonical": true},":by:":{"unicode":["1f1e7-1f1fe"],"fname":"1f1e7-1f1fe","uc":"1f1e7-1f1fe","isCanonical": false},":flag_bw:":{"unicode":["1f1e7-1f1fc"],"fname":"1f1e7-1f1fc","uc":"1f1e7-1f1fc","isCanonical": true},":bw:":{"unicode":["1f1e7-1f1fc"],"fname":"1f1e7-1f1fc","uc":"1f1e7-1f1fc","isCanonical": false},":flag_bv:":{"unicode":["1f1e7-1f1fb"],"fname":"1f1e7-1f1fb","uc":"1f1e7-1f1fb","isCanonical": true},":bv:":{"unicode":["1f1e7-1f1fb"],"fname":"1f1e7-1f1fb","uc":"1f1e7-1f1fb","isCanonical": false},":flag_bt:":{"unicode":["1f1e7-1f1f9"],"fname":"1f1e7-1f1f9","uc":"1f1e7-1f1f9","isCanonical": true},":bt:":{"unicode":["1f1e7-1f1f9"],"fname":"1f1e7-1f1f9","uc":"1f1e7-1f1f9","isCanonical": false},":flag_bs:":{"unicode":["1f1e7-1f1f8"],"fname":"1f1e7-1f1f8","uc":"1f1e7-1f1f8","isCanonical": true},":bs:":{"unicode":["1f1e7-1f1f8"],"fname":"1f1e7-1f1f8","uc":"1f1e7-1f1f8","isCanonical": false},":flag_br:":{"unicode":["1f1e7-1f1f7"],"fname":"1f1e7-1f1f7","uc":"1f1e7-1f1f7","isCanonical": true},":br:":{"unicode":["1f1e7-1f1f7"],"fname":"1f1e7-1f1f7","uc":"1f1e7-1f1f7","isCanonical": false},":flag_bq:":{"unicode":["1f1e7-1f1f6"],"fname":"1f1e7-1f1f6","uc":"1f1e7-1f1f6","isCanonical": true},":bq:":{"unicode":["1f1e7-1f1f6"],"fname":"1f1e7-1f1f6","uc":"1f1e7-1f1f6","isCanonical": false},":flag_bo:":{"unicode":["1f1e7-1f1f4"],"fname":"1f1e7-1f1f4","uc":"1f1e7-1f1f4","isCanonical": true},":bo:":{"unicode":["1f1e7-1f1f4"],"fname":"1f1e7-1f1f4","uc":"1f1e7-1f1f4","isCanonical": false},":flag_bn:":{"unicode":["1f1e7-1f1f3"],"fname":"1f1e7-1f1f3","uc":"1f1e7-1f1f3","isCanonical": true},":bn:":{"unicode":["1f1e7-1f1f3"],"fname":"1f1e7-1f1f3","uc":"1f1e7-1f1f3","isCanonical": false},":flag_bm:":{"unicode":["1f1e7-1f1f2"],"fname":"1f1e7-1f1f2","uc":"1f1e7-1f1f2","isCanonical": true},":bm:":{"unicode":["1f1e7-1f1f2"],"fname":"1f1e7-1f1f2","uc":"1f1e7-1f1f2","isCanonical": false},":flag_bl:":{"unicode":["1f1e7-1f1f1"],"fname":"1f1e7-1f1f1","uc":"1f1e7-1f1f1","isCanonical": true},":bl:":{"unicode":["1f1e7-1f1f1"],"fname":"1f1e7-1f1f1","uc":"1f1e7-1f1f1","isCanonical": false},":flag_bj:":{"unicode":["1f1e7-1f1ef"],"fname":"1f1e7-1f1ef","uc":"1f1e7-1f1ef","isCanonical": true},":bj:":{"unicode":["1f1e7-1f1ef"],"fname":"1f1e7-1f1ef","uc":"1f1e7-1f1ef","isCanonical": false},":flag_bi:":{"unicode":["1f1e7-1f1ee"],"fname":"1f1e7-1f1ee","uc":"1f1e7-1f1ee","isCanonical": true},":bi:":{"unicode":["1f1e7-1f1ee"],"fname":"1f1e7-1f1ee","uc":"1f1e7-1f1ee","isCanonical": false},":flag_bh:":{"unicode":["1f1e7-1f1ed"],"fname":"1f1e7-1f1ed","uc":"1f1e7-1f1ed","isCanonical": true},":bh:":{"unicode":["1f1e7-1f1ed"],"fname":"1f1e7-1f1ed","uc":"1f1e7-1f1ed","isCanonical": false},":flag_bg:":{"unicode":["1f1e7-1f1ec"],"fname":"1f1e7-1f1ec","uc":"1f1e7-1f1ec","isCanonical": true},":bg:":{"unicode":["1f1e7-1f1ec"],"fname":"1f1e7-1f1ec","uc":"1f1e7-1f1ec","isCanonical": false},":flag_bf:":{"unicode":["1f1e7-1f1eb"],"fname":"1f1e7-1f1eb","uc":"1f1e7-1f1eb","isCanonical": true},":bf:":{"unicode":["1f1e7-1f1eb"],"fname":"1f1e7-1f1eb","uc":"1f1e7-1f1eb","isCanonical": false},":flag_be:":{"unicode":["1f1e7-1f1ea"],"fname":"1f1e7-1f1ea","uc":"1f1e7-1f1ea","isCanonical": true},":be:":{"unicode":["1f1e7-1f1ea"],"fname":"1f1e7-1f1ea","uc":"1f1e7-1f1ea","isCanonical": false},":flag_bd:":{"unicode":["1f1e7-1f1e9"],"fname":"1f1e7-1f1e9","uc":"1f1e7-1f1e9","isCanonical": true},":bd:":{"unicode":["1f1e7-1f1e9"],"fname":"1f1e7-1f1e9","uc":"1f1e7-1f1e9","isCanonical": false},":flag_bb:":{"unicode":["1f1e7-1f1e7"],"fname":"1f1e7-1f1e7","uc":"1f1e7-1f1e7","isCanonical": true},":bb:":{"unicode":["1f1e7-1f1e7"],"fname":"1f1e7-1f1e7","uc":"1f1e7-1f1e7","isCanonical": false},":flag_ba:":{"unicode":["1f1e7-1f1e6"],"fname":"1f1e7-1f1e6","uc":"1f1e7-1f1e6","isCanonical": true},":ba:":{"unicode":["1f1e7-1f1e6"],"fname":"1f1e7-1f1e6","uc":"1f1e7-1f1e6","isCanonical": false},":flag_az:":{"unicode":["1f1e6-1f1ff"],"fname":"1f1e6-1f1ff","uc":"1f1e6-1f1ff","isCanonical": true},":az:":{"unicode":["1f1e6-1f1ff"],"fname":"1f1e6-1f1ff","uc":"1f1e6-1f1ff","isCanonical": false},":flag_ax:":{"unicode":["1f1e6-1f1fd"],"fname":"1f1e6-1f1fd","uc":"1f1e6-1f1fd","isCanonical": true},":ax:":{"unicode":["1f1e6-1f1fd"],"fname":"1f1e6-1f1fd","uc":"1f1e6-1f1fd","isCanonical": false},":flag_aw:":{"unicode":["1f1e6-1f1fc"],"fname":"1f1e6-1f1fc","uc":"1f1e6-1f1fc","isCanonical": true},":aw:":{"unicode":["1f1e6-1f1fc"],"fname":"1f1e6-1f1fc","uc":"1f1e6-1f1fc","isCanonical": false},":flag_au:":{"unicode":["1f1e6-1f1fa"],"fname":"1f1e6-1f1fa","uc":"1f1e6-1f1fa","isCanonical": true},":au:":{"unicode":["1f1e6-1f1fa"],"fname":"1f1e6-1f1fa","uc":"1f1e6-1f1fa","isCanonical": false},":flag_at:":{"unicode":["1f1e6-1f1f9"],"fname":"1f1e6-1f1f9","uc":"1f1e6-1f1f9","isCanonical": true},":at:":{"unicode":["1f1e6-1f1f9"],"fname":"1f1e6-1f1f9","uc":"1f1e6-1f1f9","isCanonical": false},":flag_as:":{"unicode":["1f1e6-1f1f8"],"fname":"1f1e6-1f1f8","uc":"1f1e6-1f1f8","isCanonical": true},":as:":{"unicode":["1f1e6-1f1f8"],"fname":"1f1e6-1f1f8","uc":"1f1e6-1f1f8","isCanonical": false},":flag_ar:":{"unicode":["1f1e6-1f1f7"],"fname":"1f1e6-1f1f7","uc":"1f1e6-1f1f7","isCanonical": true},":ar:":{"unicode":["1f1e6-1f1f7"],"fname":"1f1e6-1f1f7","uc":"1f1e6-1f1f7","isCanonical": false},":flag_aq:":{"unicode":["1f1e6-1f1f6"],"fname":"1f1e6-1f1f6","uc":"1f1e6-1f1f6","isCanonical": true},":aq:":{"unicode":["1f1e6-1f1f6"],"fname":"1f1e6-1f1f6","uc":"1f1e6-1f1f6","isCanonical": false},":flag_ao:":{"unicode":["1f1e6-1f1f4"],"fname":"1f1e6-1f1f4","uc":"1f1e6-1f1f4","isCanonical": true},":ao:":{"unicode":["1f1e6-1f1f4"],"fname":"1f1e6-1f1f4","uc":"1f1e6-1f1f4","isCanonical": false},":flag_am:":{"unicode":["1f1e6-1f1f2"],"fname":"1f1e6-1f1f2","uc":"1f1e6-1f1f2","isCanonical": true},":am:":{"unicode":["1f1e6-1f1f2"],"fname":"1f1e6-1f1f2","uc":"1f1e6-1f1f2","isCanonical": false},":flag_al:":{"unicode":["1f1e6-1f1f1"],"fname":"1f1e6-1f1f1","uc":"1f1e6-1f1f1","isCanonical": true},":al:":{"unicode":["1f1e6-1f1f1"],"fname":"1f1e6-1f1f1","uc":"1f1e6-1f1f1","isCanonical": false},":flag_ai:":{"unicode":["1f1e6-1f1ee"],"fname":"1f1e6-1f1ee","uc":"1f1e6-1f1ee","isCanonical": true},":ai:":{"unicode":["1f1e6-1f1ee"],"fname":"1f1e6-1f1ee","uc":"1f1e6-1f1ee","isCanonical": false},":flag_ag:":{"unicode":["1f1e6-1f1ec"],"fname":"1f1e6-1f1ec","uc":"1f1e6-1f1ec","isCanonical": true},":ag:":{"unicode":["1f1e6-1f1ec"],"fname":"1f1e6-1f1ec","uc":"1f1e6-1f1ec","isCanonical": false},":flag_af:":{"unicode":["1f1e6-1f1eb"],"fname":"1f1e6-1f1eb","uc":"1f1e6-1f1eb","isCanonical": true},":af:":{"unicode":["1f1e6-1f1eb"],"fname":"1f1e6-1f1eb","uc":"1f1e6-1f1eb","isCanonical": false},":flag_ae:":{"unicode":["1f1e6-1f1ea"],"fname":"1f1e6-1f1ea","uc":"1f1e6-1f1ea","isCanonical": true},":ae:":{"unicode":["1f1e6-1f1ea"],"fname":"1f1e6-1f1ea","uc":"1f1e6-1f1ea","isCanonical": false},":flag_ad:":{"unicode":["1f1e6-1f1e9"],"fname":"1f1e6-1f1e9","uc":"1f1e6-1f1e9","isCanonical": true},":ad:":{"unicode":["1f1e6-1f1e9"],"fname":"1f1e6-1f1e9","uc":"1f1e6-1f1e9","isCanonical": false},":flag_ac:":{"unicode":["1f1e6-1f1e8"],"fname":"1f1e6-1f1e8","uc":"1f1e6-1f1e8","isCanonical": true},":ac:":{"unicode":["1f1e6-1f1e8"],"fname":"1f1e6-1f1e8","uc":"1f1e6-1f1e8","isCanonical": false},":mahjong:":{"unicode":["1f004-fe0f","1f004"],"fname":"1f004","uc":"1f004","isCanonical": true},":parking:":{"unicode":["1f17f-fe0f","1f17f"],"fname":"1f17f","uc":"1f17f","isCanonical": true},":sa:":{"unicode":["1f202-fe0f","1f202"],"fname":"1f202","uc":"1f202","isCanonical": true},":u7121:":{"unicode":["1f21a-fe0f","1f21a"],"fname":"1f21a","uc":"1f21a","isCanonical": true},":u6307:":{"unicode":["1f22f-fe0f","1f22f"],"fname":"1f22f","uc":"1f22f","isCanonical": true},":u6708:":{"unicode":["1f237-fe0f","1f237"],"fname":"1f237","uc":"1f237","isCanonical": true},":film_frames:":{"unicode":["1f39e-fe0f","1f39e"],"fname":"1f39e","uc":"1f39e","isCanonical": true},":tickets:":{"unicode":["1f39f-fe0f","1f39f"],"fname":"1f39f","uc":"1f39f","isCanonical": true},":admission_tickets:":{"unicode":["1f39f-fe0f","1f39f"],"fname":"1f39f","uc":"1f39f","isCanonical": false},":lifter:":{"unicode":["1f3cb-fe0f","1f3cb"],"fname":"1f3cb","uc":"1f3cb","isCanonical": true},":weight_lifter:":{"unicode":["1f3cb-fe0f","1f3cb"],"fname":"1f3cb","uc":"1f3cb","isCanonical": false},":golfer:":{"unicode":["1f3cc-fe0f","1f3cc"],"fname":"1f3cc","uc":"1f3cc","isCanonical": true},":motorcycle:":{"unicode":["1f3cd-fe0f","1f3cd"],"fname":"1f3cd","uc":"1f3cd","isCanonical": true},":racing_motorcycle:":{"unicode":["1f3cd-fe0f","1f3cd"],"fname":"1f3cd","uc":"1f3cd","isCanonical": false},":race_car:":{"unicode":["1f3ce-fe0f","1f3ce"],"fname":"1f3ce","uc":"1f3ce","isCanonical": true},":racing_car:":{"unicode":["1f3ce-fe0f","1f3ce"],"fname":"1f3ce","uc":"1f3ce","isCanonical": false},":military_medal:":{"unicode":["1f396-fe0f","1f396"],"fname":"1f396","uc":"1f396","isCanonical": true},":reminder_ribbon:":{"unicode":["1f397-fe0f","1f397"],"fname":"1f397","uc":"1f397","isCanonical": true},":hot_pepper:":{"unicode":["1f336-fe0f","1f336"],"fname":"1f336","uc":"1f336","isCanonical": true},":cloud_rain:":{"unicode":["1f327-fe0f","1f327"],"fname":"1f327","uc":"1f327","isCanonical": true},":cloud_with_rain:":{"unicode":["1f327-fe0f","1f327"],"fname":"1f327","uc":"1f327","isCanonical": false},":cloud_snow:":{"unicode":["1f328-fe0f","1f328"],"fname":"1f328","uc":"1f328","isCanonical": true},":cloud_with_snow:":{"unicode":["1f328-fe0f","1f328"],"fname":"1f328","uc":"1f328","isCanonical": false},":cloud_lightning:":{"unicode":["1f329-fe0f","1f329"],"fname":"1f329","uc":"1f329","isCanonical": true},":cloud_with_lightning:":{"unicode":["1f329-fe0f","1f329"],"fname":"1f329","uc":"1f329","isCanonical": false},":cloud_tornado:":{"unicode":["1f32a-fe0f","1f32a"],"fname":"1f32a","uc":"1f32a","isCanonical": true},":cloud_with_tornado:":{"unicode":["1f32a-fe0f","1f32a"],"fname":"1f32a","uc":"1f32a","isCanonical": false},":fog:":{"unicode":["1f32b-fe0f","1f32b"],"fname":"1f32b","uc":"1f32b","isCanonical": true},":wind_blowing_face:":{"unicode":["1f32c-fe0f","1f32c"],"fname":"1f32c","uc":"1f32c","isCanonical": true},":chipmunk:":{"unicode":["1f43f-fe0f","1f43f"],"fname":"1f43f","uc":"1f43f","isCanonical": true},":spider:":{"unicode":["1f577-fe0f","1f577"],"fname":"1f577","uc":"1f577","isCanonical": true},":spider_web:":{"unicode":["1f578-fe0f","1f578"],"fname":"1f578","uc":"1f578","isCanonical": true},":thermometer:":{"unicode":["1f321-fe0f","1f321"],"fname":"1f321","uc":"1f321","isCanonical": true},":microphone2:":{"unicode":["1f399-fe0f","1f399"],"fname":"1f399","uc":"1f399","isCanonical": true},":studio_microphone:":{"unicode":["1f399-fe0f","1f399"],"fname":"1f399","uc":"1f399","isCanonical": false},":level_slider:":{"unicode":["1f39a-fe0f","1f39a"],"fname":"1f39a","uc":"1f39a","isCanonical": true},":control_knobs:":{"unicode":["1f39b-fe0f","1f39b"],"fname":"1f39b","uc":"1f39b","isCanonical": true},":flag_white:":{"unicode":["1f3f3-fe0f","1f3f3"],"fname":"1f3f3","uc":"1f3f3","isCanonical": true},":waving_white_flag:":{"unicode":["1f3f3-fe0f","1f3f3"],"fname":"1f3f3","uc":"1f3f3","isCanonical": false},":rosette:":{"unicode":["1f3f5-fe0f","1f3f5"],"fname":"1f3f5","uc":"1f3f5","isCanonical": true},":label:":{"unicode":["1f3f7-fe0f","1f3f7"],"fname":"1f3f7","uc":"1f3f7","isCanonical": true},":projector:":{"unicode":["1f4fd-fe0f","1f4fd"],"fname":"1f4fd","uc":"1f4fd","isCanonical": true},":film_projector:":{"unicode":["1f4fd-fe0f","1f4fd"],"fname":"1f4fd","uc":"1f4fd","isCanonical": false},":om_symbol:":{"unicode":["1f549-fe0f","1f549"],"fname":"1f549","uc":"1f549","isCanonical": true},":dove:":{"unicode":["1f54a-fe0f","1f54a"],"fname":"1f54a","uc":"1f54a","isCanonical": true},":dove_of_peace:":{"unicode":["1f54a-fe0f","1f54a"],"fname":"1f54a","uc":"1f54a","isCanonical": false},":candle:":{"unicode":["1f56f-fe0f","1f56f"],"fname":"1f56f","uc":"1f56f","isCanonical": true},":clock:":{"unicode":["1f570-fe0f","1f570"],"fname":"1f570","uc":"1f570","isCanonical": true},":mantlepiece_clock:":{"unicode":["1f570-fe0f","1f570"],"fname":"1f570","uc":"1f570","isCanonical": false},":hole:":{"unicode":["1f573-fe0f","1f573"],"fname":"1f573","uc":"1f573","isCanonical": true},":dark_sunglasses:":{"unicode":["1f576-fe0f","1f576"],"fname":"1f576","uc":"1f576","isCanonical": true},":joystick:":{"unicode":["1f579-fe0f","1f579"],"fname":"1f579","uc":"1f579","isCanonical": true},":paperclips:":{"unicode":["1f587-fe0f","1f587"],"fname":"1f587","uc":"1f587","isCanonical": true},":linked_paperclips:":{"unicode":["1f587-fe0f","1f587"],"fname":"1f587","uc":"1f587","isCanonical": false},":pen_ballpoint:":{"unicode":["1f58a-fe0f","1f58a"],"fname":"1f58a","uc":"1f58a","isCanonical": true},":lower_left_ballpoint_pen:":{"unicode":["1f58a-fe0f","1f58a"],"fname":"1f58a","uc":"1f58a","isCanonical": false},":pen_fountain:":{"unicode":["1f58b-fe0f","1f58b"],"fname":"1f58b","uc":"1f58b","isCanonical": true},":lower_left_fountain_pen:":{"unicode":["1f58b-fe0f","1f58b"],"fname":"1f58b","uc":"1f58b","isCanonical": false},":paintbrush:":{"unicode":["1f58c-fe0f","1f58c"],"fname":"1f58c","uc":"1f58c","isCanonical": true},":lower_left_paintbrush:":{"unicode":["1f58c-fe0f","1f58c"],"fname":"1f58c","uc":"1f58c","isCanonical": false},":crayon:":{"unicode":["1f58d-fe0f","1f58d"],"fname":"1f58d","uc":"1f58d","isCanonical": true},":lower_left_crayon:":{"unicode":["1f58d-fe0f","1f58d"],"fname":"1f58d","uc":"1f58d","isCanonical": false},":desktop:":{"unicode":["1f5a5-fe0f","1f5a5"],"fname":"1f5a5","uc":"1f5a5","isCanonical": true},":desktop_computer:":{"unicode":["1f5a5-fe0f","1f5a5"],"fname":"1f5a5","uc":"1f5a5","isCanonical": false},":printer:":{"unicode":["1f5a8-fe0f","1f5a8"],"fname":"1f5a8","uc":"1f5a8","isCanonical": true},":trackball:":{"unicode":["1f5b2-fe0f","1f5b2"],"fname":"1f5b2","uc":"1f5b2","isCanonical": true},":frame_photo:":{"unicode":["1f5bc-fe0f","1f5bc"],"fname":"1f5bc","uc":"1f5bc","isCanonical": true},":frame_with_picture:":{"unicode":["1f5bc-fe0f","1f5bc"],"fname":"1f5bc","uc":"1f5bc","isCanonical": false},":dividers:":{"unicode":["1f5c2-fe0f","1f5c2"],"fname":"1f5c2","uc":"1f5c2","isCanonical": true},":card_index_dividers:":{"unicode":["1f5c2-fe0f","1f5c2"],"fname":"1f5c2","uc":"1f5c2","isCanonical": false},":card_box:":{"unicode":["1f5c3-fe0f","1f5c3"],"fname":"1f5c3","uc":"1f5c3","isCanonical": true},":card_file_box:":{"unicode":["1f5c3-fe0f","1f5c3"],"fname":"1f5c3","uc":"1f5c3","isCanonical": false},":file_cabinet:":{"unicode":["1f5c4-fe0f","1f5c4"],"fname":"1f5c4","uc":"1f5c4","isCanonical": true},":wastebasket:":{"unicode":["1f5d1-fe0f","1f5d1"],"fname":"1f5d1","uc":"1f5d1","isCanonical": true},":notepad_spiral:":{"unicode":["1f5d2-fe0f","1f5d2"],"fname":"1f5d2","uc":"1f5d2","isCanonical": true},":spiral_note_pad:":{"unicode":["1f5d2-fe0f","1f5d2"],"fname":"1f5d2","uc":"1f5d2","isCanonical": false},":calendar_spiral:":{"unicode":["1f5d3-fe0f","1f5d3"],"fname":"1f5d3","uc":"1f5d3","isCanonical": true},":spiral_calendar_pad:":{"unicode":["1f5d3-fe0f","1f5d3"],"fname":"1f5d3","uc":"1f5d3","isCanonical": false},":compression:":{"unicode":["1f5dc-fe0f","1f5dc"],"fname":"1f5dc","uc":"1f5dc","isCanonical": true},":key2:":{"unicode":["1f5dd-fe0f","1f5dd"],"fname":"1f5dd","uc":"1f5dd","isCanonical": true},":old_key:":{"unicode":["1f5dd-fe0f","1f5dd"],"fname":"1f5dd","uc":"1f5dd","isCanonical": false},":newspaper2:":{"unicode":["1f5de-fe0f","1f5de"],"fname":"1f5de","uc":"1f5de","isCanonical": true},":rolled_up_newspaper:":{"unicode":["1f5de-fe0f","1f5de"],"fname":"1f5de","uc":"1f5de","isCanonical": false},":dagger:":{"unicode":["1f5e1-fe0f","1f5e1"],"fname":"1f5e1","uc":"1f5e1","isCanonical": true},":dagger_knife:":{"unicode":["1f5e1-fe0f","1f5e1"],"fname":"1f5e1","uc":"1f5e1","isCanonical": false},":speaking_head:":{"unicode":["1f5e3-fe0f","1f5e3"],"fname":"1f5e3","uc":"1f5e3","isCanonical": true},":speaking_head_in_silhouette:":{"unicode":["1f5e3-fe0f","1f5e3"],"fname":"1f5e3","uc":"1f5e3","isCanonical": false},":speech_left:":{"unicode":["1f5e8-fe0f","1f5e8"],"fname":"1f5e8","uc":"1f5e8","isCanonical": true},":left_speech_bubble:":{"unicode":["1f5e8-fe0f","1f5e8"],"fname":"1f5e8","uc":"1f5e8","isCanonical": false},":anger_right:":{"unicode":["1f5ef-fe0f","1f5ef"],"fname":"1f5ef","uc":"1f5ef","isCanonical": true},":right_anger_bubble:":{"unicode":["1f5ef-fe0f","1f5ef"],"fname":"1f5ef","uc":"1f5ef","isCanonical": false},":ballot_box:":{"unicode":["1f5f3-fe0f","1f5f3"],"fname":"1f5f3","uc":"1f5f3","isCanonical": true},":ballot_box_with_ballot:":{"unicode":["1f5f3-fe0f","1f5f3"],"fname":"1f5f3","uc":"1f5f3","isCanonical": false},":map:":{"unicode":["1f5fa-fe0f","1f5fa"],"fname":"1f5fa","uc":"1f5fa","isCanonical": true},":world_map:":{"unicode":["1f5fa-fe0f","1f5fa"],"fname":"1f5fa","uc":"1f5fa","isCanonical": false},":tools:":{"unicode":["1f6e0-fe0f","1f6e0"],"fname":"1f6e0","uc":"1f6e0","isCanonical": true},":hammer_and_wrench:":{"unicode":["1f6e0-fe0f","1f6e0"],"fname":"1f6e0","uc":"1f6e0","isCanonical": false},":shield:":{"unicode":["1f6e1-fe0f","1f6e1"],"fname":"1f6e1","uc":"1f6e1","isCanonical": true},":oil:":{"unicode":["1f6e2-fe0f","1f6e2"],"fname":"1f6e2","uc":"1f6e2","isCanonical": true},":oil_drum:":{"unicode":["1f6e2-fe0f","1f6e2"],"fname":"1f6e2","uc":"1f6e2","isCanonical": false},":satellite_orbital:":{"unicode":["1f6f0-fe0f","1f6f0"],"fname":"1f6f0","uc":"1f6f0","isCanonical": true},":fork_knife_plate:":{"unicode":["1f37d-fe0f","1f37d"],"fname":"1f37d","uc":"1f37d","isCanonical": true},":fork_and_knife_with_plate:":{"unicode":["1f37d-fe0f","1f37d"],"fname":"1f37d","uc":"1f37d","isCanonical": false},":eye:":{"unicode":["1f441-fe0f","1f441"],"fname":"1f441","uc":"1f441","isCanonical": true},":levitate:":{"unicode":["1f574-fe0f","1f574"],"fname":"1f574","uc":"1f574","isCanonical": true},":man_in_business_suit_levitating:":{"unicode":["1f574-fe0f","1f574"],"fname":"1f574","uc":"1f574","isCanonical": false},":spy:":{"unicode":["1f575-fe0f","1f575"],"fname":"1f575","uc":"1f575","isCanonical": true},":sleuth_or_spy:":{"unicode":["1f575-fe0f","1f575"],"fname":"1f575","uc":"1f575","isCanonical": false},":hand_splayed:":{"unicode":["1f590-fe0f","1f590"],"fname":"1f590","uc":"1f590","isCanonical": true},":raised_hand_with_fingers_splayed:":{"unicode":["1f590-fe0f","1f590"],"fname":"1f590","uc":"1f590","isCanonical": false},":mountain_snow:":{"unicode":["1f3d4-fe0f","1f3d4"],"fname":"1f3d4","uc":"1f3d4","isCanonical": true},":snow_capped_mountain:":{"unicode":["1f3d4-fe0f","1f3d4"],"fname":"1f3d4","uc":"1f3d4","isCanonical": false},":camping:":{"unicode":["1f3d5-fe0f","1f3d5"],"fname":"1f3d5","uc":"1f3d5","isCanonical": true},":beach:":{"unicode":["1f3d6-fe0f","1f3d6"],"fname":"1f3d6","uc":"1f3d6","isCanonical": true},":beach_with_umbrella:":{"unicode":["1f3d6-fe0f","1f3d6"],"fname":"1f3d6","uc":"1f3d6","isCanonical": false},":construction_site:":{"unicode":["1f3d7-fe0f","1f3d7"],"fname":"1f3d7","uc":"1f3d7","isCanonical": true},":building_construction:":{"unicode":["1f3d7-fe0f","1f3d7"],"fname":"1f3d7","uc":"1f3d7","isCanonical": false},":homes:":{"unicode":["1f3d8-fe0f","1f3d8"],"fname":"1f3d8","uc":"1f3d8","isCanonical": true},":house_buildings:":{"unicode":["1f3d8-fe0f","1f3d8"],"fname":"1f3d8","uc":"1f3d8","isCanonical": false},":cityscape:":{"unicode":["1f3d9-fe0f","1f3d9"],"fname":"1f3d9","uc":"1f3d9","isCanonical": true},":house_abandoned:":{"unicode":["1f3da-fe0f","1f3da"],"fname":"1f3da","uc":"1f3da","isCanonical": true},":derelict_house_building:":{"unicode":["1f3da-fe0f","1f3da"],"fname":"1f3da","uc":"1f3da","isCanonical": false},":classical_building:":{"unicode":["1f3db-fe0f","1f3db"],"fname":"1f3db","uc":"1f3db","isCanonical": true},":desert:":{"unicode":["1f3dc-fe0f","1f3dc"],"fname":"1f3dc","uc":"1f3dc","isCanonical": true},":island:":{"unicode":["1f3dd-fe0f","1f3dd"],"fname":"1f3dd","uc":"1f3dd","isCanonical": true},":desert_island:":{"unicode":["1f3dd-fe0f","1f3dd"],"fname":"1f3dd","uc":"1f3dd","isCanonical": false},":park:":{"unicode":["1f3de-fe0f","1f3de"],"fname":"1f3de","uc":"1f3de","isCanonical": true},":national_park:":{"unicode":["1f3de-fe0f","1f3de"],"fname":"1f3de","uc":"1f3de","isCanonical": false},":stadium:":{"unicode":["1f3df-fe0f","1f3df"],"fname":"1f3df","uc":"1f3df","isCanonical": true},":couch:":{"unicode":["1f6cb-fe0f","1f6cb"],"fname":"1f6cb","uc":"1f6cb","isCanonical": true},":couch_and_lamp:":{"unicode":["1f6cb-fe0f","1f6cb"],"fname":"1f6cb","uc":"1f6cb","isCanonical": false},":shopping_bags:":{"unicode":["1f6cd-fe0f","1f6cd"],"fname":"1f6cd","uc":"1f6cd","isCanonical": true},":bellhop:":{"unicode":["1f6ce-fe0f","1f6ce"],"fname":"1f6ce","uc":"1f6ce","isCanonical": true},":bellhop_bell:":{"unicode":["1f6ce-fe0f","1f6ce"],"fname":"1f6ce","uc":"1f6ce","isCanonical": false},":bed:":{"unicode":["1f6cf-fe0f","1f6cf"],"fname":"1f6cf","uc":"1f6cf","isCanonical": true},":motorway:":{"unicode":["1f6e3-fe0f","1f6e3"],"fname":"1f6e3","uc":"1f6e3","isCanonical": true},":railway_track:":{"unicode":["1f6e4-fe0f","1f6e4"],"fname":"1f6e4","uc":"1f6e4","isCanonical": true},":railroad_track:":{"unicode":["1f6e4-fe0f","1f6e4"],"fname":"1f6e4","uc":"1f6e4","isCanonical": false},":motorboat:":{"unicode":["1f6e5-fe0f","1f6e5"],"fname":"1f6e5","uc":"1f6e5","isCanonical": true},":airplane_small:":{"unicode":["1f6e9-fe0f","1f6e9"],"fname":"1f6e9","uc":"1f6e9","isCanonical": true},":small_airplane:":{"unicode":["1f6e9-fe0f","1f6e9"],"fname":"1f6e9","uc":"1f6e9","isCanonical": false},":cruise_ship:":{"unicode":["1f6f3-fe0f","1f6f3"],"fname":"1f6f3","uc":"1f6f3","isCanonical": true},":passenger_ship:":{"unicode":["1f6f3-fe0f","1f6f3"],"fname":"1f6f3","uc":"1f6f3","isCanonical": false},":white_sun_small_cloud:":{"unicode":["1f324-fe0f","1f324"],"fname":"1f324","uc":"1f324","isCanonical": true},":white_sun_with_small_cloud:":{"unicode":["1f324-fe0f","1f324"],"fname":"1f324","uc":"1f324","isCanonical": false},":white_sun_cloud:":{"unicode":["1f325-fe0f","1f325"],"fname":"1f325","uc":"1f325","isCanonical": true},":white_sun_behind_cloud:":{"unicode":["1f325-fe0f","1f325"],"fname":"1f325","uc":"1f325","isCanonical": false},":white_sun_rain_cloud:":{"unicode":["1f326-fe0f","1f326"],"fname":"1f326","uc":"1f326","isCanonical": true},":white_sun_behind_cloud_with_rain:":{"unicode":["1f326-fe0f","1f326"],"fname":"1f326","uc":"1f326","isCanonical": false},":mouse_three_button:":{"unicode":["1f5b1-fe0f","1f5b1"],"fname":"1f5b1","uc":"1f5b1","isCanonical": true},":three_button_mouse:":{"unicode":["1f5b1-fe0f","1f5b1"],"fname":"1f5b1","uc":"1f5b1","isCanonical": false},":point_up_tone1:":{"unicode":["261d-1f3fb"],"fname":"261d-1f3fb","uc":"261d-1f3fb","isCanonical": true},":point_up_tone2:":{"unicode":["261d-1f3fc"],"fname":"261d-1f3fc","uc":"261d-1f3fc","isCanonical": true},":point_up_tone3:":{"unicode":["261d-1f3fd"],"fname":"261d-1f3fd","uc":"261d-1f3fd","isCanonical": true},":point_up_tone4:":{"unicode":["261d-1f3fe"],"fname":"261d-1f3fe","uc":"261d-1f3fe","isCanonical": true},":point_up_tone5:":{"unicode":["261d-1f3ff"],"fname":"261d-1f3ff","uc":"261d-1f3ff","isCanonical": true},":v_tone1:":{"unicode":["270c-1f3fb"],"fname":"270c-1f3fb","uc":"270c-1f3fb","isCanonical": true},":v_tone2:":{"unicode":["270c-1f3fc"],"fname":"270c-1f3fc","uc":"270c-1f3fc","isCanonical": true},":v_tone3:":{"unicode":["270c-1f3fd"],"fname":"270c-1f3fd","uc":"270c-1f3fd","isCanonical": true},":v_tone4:":{"unicode":["270c-1f3fe"],"fname":"270c-1f3fe","uc":"270c-1f3fe","isCanonical": true},":v_tone5:":{"unicode":["270c-1f3ff"],"fname":"270c-1f3ff","uc":"270c-1f3ff","isCanonical": true},":fist_tone1:":{"unicode":["270a-1f3fb"],"fname":"270a-1f3fb","uc":"270a-1f3fb","isCanonical": true},":fist_tone2:":{"unicode":["270a-1f3fc"],"fname":"270a-1f3fc","uc":"270a-1f3fc","isCanonical": true},":fist_tone3:":{"unicode":["270a-1f3fd"],"fname":"270a-1f3fd","uc":"270a-1f3fd","isCanonical": true},":fist_tone4:":{"unicode":["270a-1f3fe"],"fname":"270a-1f3fe","uc":"270a-1f3fe","isCanonical": true},":fist_tone5:":{"unicode":["270a-1f3ff"],"fname":"270a-1f3ff","uc":"270a-1f3ff","isCanonical": true},":raised_hand_tone1:":{"unicode":["270b-1f3fb"],"fname":"270b-1f3fb","uc":"270b-1f3fb","isCanonical": true},":raised_hand_tone2:":{"unicode":["270b-1f3fc"],"fname":"270b-1f3fc","uc":"270b-1f3fc","isCanonical": true},":raised_hand_tone3:":{"unicode":["270b-1f3fd"],"fname":"270b-1f3fd","uc":"270b-1f3fd","isCanonical": true},":raised_hand_tone4:":{"unicode":["270b-1f3fe"],"fname":"270b-1f3fe","uc":"270b-1f3fe","isCanonical": true},":raised_hand_tone5:":{"unicode":["270b-1f3ff"],"fname":"270b-1f3ff","uc":"270b-1f3ff","isCanonical": true},":writing_hand_tone1:":{"unicode":["270d-1f3fb"],"fname":"270d-1f3fb","uc":"270d-1f3fb","isCanonical": true},":writing_hand_tone2:":{"unicode":["270d-1f3fc"],"fname":"270d-1f3fc","uc":"270d-1f3fc","isCanonical": true},":writing_hand_tone3:":{"unicode":["270d-1f3fd"],"fname":"270d-1f3fd","uc":"270d-1f3fd","isCanonical": true},":writing_hand_tone4:":{"unicode":["270d-1f3fe"],"fname":"270d-1f3fe","uc":"270d-1f3fe","isCanonical": true},":writing_hand_tone5:":{"unicode":["270d-1f3ff"],"fname":"270d-1f3ff","uc":"270d-1f3ff","isCanonical": true},":basketball_player_tone1:":{"unicode":["26f9-1f3fb"],"fname":"26f9-1f3fb","uc":"26f9-1f3fb","isCanonical": true},":person_with_ball_tone1:":{"unicode":["26f9-1f3fb"],"fname":"26f9-1f3fb","uc":"26f9-1f3fb","isCanonical": false},":basketball_player_tone2:":{"unicode":["26f9-1f3fc"],"fname":"26f9-1f3fc","uc":"26f9-1f3fc","isCanonical": true},":person_with_ball_tone2:":{"unicode":["26f9-1f3fc"],"fname":"26f9-1f3fc","uc":"26f9-1f3fc","isCanonical": false},":basketball_player_tone3:":{"unicode":["26f9-1f3fd"],"fname":"26f9-1f3fd","uc":"26f9-1f3fd","isCanonical": true},":person_with_ball_tone3:":{"unicode":["26f9-1f3fd"],"fname":"26f9-1f3fd","uc":"26f9-1f3fd","isCanonical": false},":basketball_player_tone4:":{"unicode":["26f9-1f3fe"],"fname":"26f9-1f3fe","uc":"26f9-1f3fe","isCanonical": true},":person_with_ball_tone4:":{"unicode":["26f9-1f3fe"],"fname":"26f9-1f3fe","uc":"26f9-1f3fe","isCanonical": false},":basketball_player_tone5:":{"unicode":["26f9-1f3ff"],"fname":"26f9-1f3ff","uc":"26f9-1f3ff","isCanonical": true},":person_with_ball_tone5:":{"unicode":["26f9-1f3ff"],"fname":"26f9-1f3ff","uc":"26f9-1f3ff","isCanonical": false},":copyright:":{"unicode":["00a9-fe0f","00a9"],"fname":"00a9","uc":"00a9","isCanonical": true},":registered:":{"unicode":["00ae-fe0f","00ae"],"fname":"00ae","uc":"00ae","isCanonical": true},":bangbang:":{"unicode":["203c-fe0f","203c"],"fname":"203c","uc":"203c","isCanonical": true},":interrobang:":{"unicode":["2049-fe0f","2049"],"fname":"2049","uc":"2049","isCanonical": true},":tm:":{"unicode":["2122-fe0f","2122"],"fname":"2122","uc":"2122","isCanonical": true},":information_source:":{"unicode":["2139-fe0f","2139"],"fname":"2139","uc":"2139","isCanonical": true},":left_right_arrow:":{"unicode":["2194-fe0f","2194"],"fname":"2194","uc":"2194","isCanonical": true},":arrow_up_down:":{"unicode":["2195-fe0f","2195"],"fname":"2195","uc":"2195","isCanonical": true},":arrow_upper_left:":{"unicode":["2196-fe0f","2196"],"fname":"2196","uc":"2196","isCanonical": true},":arrow_upper_right:":{"unicode":["2197-fe0f","2197"],"fname":"2197","uc":"2197","isCanonical": true},":arrow_lower_right:":{"unicode":["2198-fe0f","2198"],"fname":"2198","uc":"2198","isCanonical": true},":arrow_lower_left:":{"unicode":["2199-fe0f","2199"],"fname":"2199","uc":"2199","isCanonical": true},":leftwards_arrow_with_hook:":{"unicode":["21a9-fe0f","21a9"],"fname":"21a9","uc":"21a9","isCanonical": true},":arrow_right_hook:":{"unicode":["21aa-fe0f","21aa"],"fname":"21aa","uc":"21aa","isCanonical": true},":watch:":{"unicode":["231a-fe0f","231a"],"fname":"231a","uc":"231a","isCanonical": true},":hourglass:":{"unicode":["231b-fe0f","231b"],"fname":"231b","uc":"231b","isCanonical": true},":m:":{"unicode":["24c2-fe0f","24c2"],"fname":"24c2","uc":"24c2","isCanonical": true},":black_small_square:":{"unicode":["25aa-fe0f","25aa"],"fname":"25aa","uc":"25aa","isCanonical": true},":white_small_square:":{"unicode":["25ab-fe0f","25ab"],"fname":"25ab","uc":"25ab","isCanonical": true},":arrow_forward:":{"unicode":["25b6-fe0f","25b6"],"fname":"25b6","uc":"25b6","isCanonical": true},":arrow_backward:":{"unicode":["25c0-fe0f","25c0"],"fname":"25c0","uc":"25c0","isCanonical": true},":white_medium_square:":{"unicode":["25fb-fe0f","25fb"],"fname":"25fb","uc":"25fb","isCanonical": true},":black_medium_square:":{"unicode":["25fc-fe0f","25fc"],"fname":"25fc","uc":"25fc","isCanonical": true},":white_medium_small_square:":{"unicode":["25fd-fe0f","25fd"],"fname":"25fd","uc":"25fd","isCanonical": true},":black_medium_small_square:":{"unicode":["25fe-fe0f","25fe"],"fname":"25fe","uc":"25fe","isCanonical": true},":sunny:":{"unicode":["2600-fe0f","2600"],"fname":"2600","uc":"2600","isCanonical": true},":cloud:":{"unicode":["2601-fe0f","2601"],"fname":"2601","uc":"2601","isCanonical": true},":telephone:":{"unicode":["260e-fe0f","260e"],"fname":"260e","uc":"260e","isCanonical": true},":ballot_box_with_check:":{"unicode":["2611-fe0f","2611"],"fname":"2611","uc":"2611","isCanonical": true},":umbrella:":{"unicode":["2614-fe0f","2614"],"fname":"2614","uc":"2614","isCanonical": true},":coffee:":{"unicode":["2615-fe0f","2615"],"fname":"2615","uc":"2615","isCanonical": true},":point_up:":{"unicode":["261d-fe0f","261d"],"fname":"261d","uc":"261d","isCanonical": true},":relaxed:":{"unicode":["263a-fe0f","263a"],"fname":"263a","uc":"263a","isCanonical": true},":aries:":{"unicode":["2648-fe0f","2648"],"fname":"2648","uc":"2648","isCanonical": true},":taurus:":{"unicode":["2649-fe0f","2649"],"fname":"2649","uc":"2649","isCanonical": true},":gemini:":{"unicode":["264a-fe0f","264a"],"fname":"264a","uc":"264a","isCanonical": true},":cancer:":{"unicode":["264b-fe0f","264b"],"fname":"264b","uc":"264b","isCanonical": true},":leo:":{"unicode":["264c-fe0f","264c"],"fname":"264c","uc":"264c","isCanonical": true},":virgo:":{"unicode":["264d-fe0f","264d"],"fname":"264d","uc":"264d","isCanonical": true},":libra:":{"unicode":["264e-fe0f","264e"],"fname":"264e","uc":"264e","isCanonical": true},":scorpius:":{"unicode":["264f-fe0f","264f"],"fname":"264f","uc":"264f","isCanonical": true},":sagittarius:":{"unicode":["2650-fe0f","2650"],"fname":"2650","uc":"2650","isCanonical": true},":capricorn:":{"unicode":["2651-fe0f","2651"],"fname":"2651","uc":"2651","isCanonical": true},":aquarius:":{"unicode":["2652-fe0f","2652"],"fname":"2652","uc":"2652","isCanonical": true},":pisces:":{"unicode":["2653-fe0f","2653"],"fname":"2653","uc":"2653","isCanonical": true},":spades:":{"unicode":["2660-fe0f","2660"],"fname":"2660","uc":"2660","isCanonical": true},":clubs:":{"unicode":["2663-fe0f","2663"],"fname":"2663","uc":"2663","isCanonical": true},":hearts:":{"unicode":["2665-fe0f","2665"],"fname":"2665","uc":"2665","isCanonical": true},":diamonds:":{"unicode":["2666-fe0f","2666"],"fname":"2666","uc":"2666","isCanonical": true},":hotsprings:":{"unicode":["2668-fe0f","2668"],"fname":"2668","uc":"2668","isCanonical": true},":recycle:":{"unicode":["267b-fe0f","267b"],"fname":"267b","uc":"267b","isCanonical": true},":wheelchair:":{"unicode":["267f-fe0f","267f"],"fname":"267f","uc":"267f","isCanonical": true},":anchor:":{"unicode":["2693-fe0f","2693"],"fname":"2693","uc":"2693","isCanonical": true},":warning:":{"unicode":["26a0-fe0f","26a0"],"fname":"26a0","uc":"26a0","isCanonical": true},":zap:":{"unicode":["26a1-fe0f","26a1"],"fname":"26a1","uc":"26a1","isCanonical": true},":white_circle:":{"unicode":["26aa-fe0f","26aa"],"fname":"26aa","uc":"26aa","isCanonical": true},":black_circle:":{"unicode":["26ab-fe0f","26ab"],"fname":"26ab","uc":"26ab","isCanonical": true},":soccer:":{"unicode":["26bd-fe0f","26bd"],"fname":"26bd","uc":"26bd","isCanonical": true},":baseball:":{"unicode":["26be-fe0f","26be"],"fname":"26be","uc":"26be","isCanonical": true},":snowman:":{"unicode":["26c4-fe0f","26c4"],"fname":"26c4","uc":"26c4","isCanonical": true},":partly_sunny:":{"unicode":["26c5-fe0f","26c5"],"fname":"26c5","uc":"26c5","isCanonical": true},":no_entry:":{"unicode":["26d4-fe0f","26d4"],"fname":"26d4","uc":"26d4","isCanonical": true},":church:":{"unicode":["26ea-fe0f","26ea"],"fname":"26ea","uc":"26ea","isCanonical": true},":fountain:":{"unicode":["26f2-fe0f","26f2"],"fname":"26f2","uc":"26f2","isCanonical": true},":golf:":{"unicode":["26f3-fe0f","26f3"],"fname":"26f3","uc":"26f3","isCanonical": true},":sailboat:":{"unicode":["26f5-fe0f","26f5"],"fname":"26f5","uc":"26f5","isCanonical": true},":tent:":{"unicode":["26fa-fe0f","26fa"],"fname":"26fa","uc":"26fa","isCanonical": true},":fuelpump:":{"unicode":["26fd-fe0f","26fd"],"fname":"26fd","uc":"26fd","isCanonical": true},":scissors:":{"unicode":["2702-fe0f","2702"],"fname":"2702","uc":"2702","isCanonical": true},":airplane:":{"unicode":["2708-fe0f","2708"],"fname":"2708","uc":"2708","isCanonical": true},":envelope:":{"unicode":["2709-fe0f","2709"],"fname":"2709","uc":"2709","isCanonical": true},":v:":{"unicode":["270c-fe0f","270c"],"fname":"270c","uc":"270c","isCanonical": true},":pencil2:":{"unicode":["270f-fe0f","270f"],"fname":"270f","uc":"270f","isCanonical": true},":black_nib:":{"unicode":["2712-fe0f","2712"],"fname":"2712","uc":"2712","isCanonical": true},":heavy_check_mark:":{"unicode":["2714-fe0f","2714"],"fname":"2714","uc":"2714","isCanonical": true},":heavy_multiplication_x:":{"unicode":["2716-fe0f","2716"],"fname":"2716","uc":"2716","isCanonical": true},":eight_spoked_asterisk:":{"unicode":["2733-fe0f","2733"],"fname":"2733","uc":"2733","isCanonical": true},":eight_pointed_black_star:":{"unicode":["2734-fe0f","2734"],"fname":"2734","uc":"2734","isCanonical": true},":snowflake:":{"unicode":["2744-fe0f","2744"],"fname":"2744","uc":"2744","isCanonical": true},":sparkle:":{"unicode":["2747-fe0f","2747"],"fname":"2747","uc":"2747","isCanonical": true},":exclamation:":{"unicode":["2757-fe0f","2757"],"fname":"2757","uc":"2757","isCanonical": true},":heart:":{"unicode":["2764-fe0f","2764"],"fname":"2764","uc":"2764","isCanonical": true},":arrow_right:":{"unicode":["27a1-fe0f","27a1"],"fname":"27a1","uc":"27a1","isCanonical": true},":arrow_heading_up:":{"unicode":["2934-fe0f","2934"],"fname":"2934","uc":"2934","isCanonical": true},":arrow_heading_down:":{"unicode":["2935-fe0f","2935"],"fname":"2935","uc":"2935","isCanonical": true},":arrow_left:":{"unicode":["2b05-fe0f","2b05"],"fname":"2b05","uc":"2b05","isCanonical": true},":arrow_up:":{"unicode":["2b06-fe0f","2b06"],"fname":"2b06","uc":"2b06","isCanonical": true},":arrow_down:":{"unicode":["2b07-fe0f","2b07"],"fname":"2b07","uc":"2b07","isCanonical": true},":black_large_square:":{"unicode":["2b1b-fe0f","2b1b"],"fname":"2b1b","uc":"2b1b","isCanonical": true},":white_large_square:":{"unicode":["2b1c-fe0f","2b1c"],"fname":"2b1c","uc":"2b1c","isCanonical": true},":star:":{"unicode":["2b50-fe0f","2b50"],"fname":"2b50","uc":"2b50","isCanonical": true},":o:":{"unicode":["2b55-fe0f","2b55"],"fname":"2b55","uc":"2b55","isCanonical": true},":wavy_dash:":{"unicode":["3030-fe0f","3030"],"fname":"3030","uc":"3030","isCanonical": true},":part_alternation_mark:":{"unicode":["303d-fe0f","303d"],"fname":"303d","uc":"303d","isCanonical": true},":congratulations:":{"unicode":["3297-fe0f","3297"],"fname":"3297","uc":"3297","isCanonical": true},":secret:":{"unicode":["3299-fe0f","3299"],"fname":"3299","uc":"3299","isCanonical": true},":cross:":{"unicode":["271d-fe0f","271d"],"fname":"271d","uc":"271d","isCanonical": true},":latin_cross:":{"unicode":["271d-fe0f","271d"],"fname":"271d","uc":"271d","isCanonical": false},":keyboard:":{"unicode":["2328-fe0f","2328"],"fname":"2328","uc":"2328","isCanonical": true},":writing_hand:":{"unicode":["270d-fe0f","270d"],"fname":"270d","uc":"270d","isCanonical": true},":eject:":{"unicode":["23cf-fe0f","23cf"],"fname":"23cf","uc":"23cf","isCanonical": true},":eject_symbol:":{"unicode":["23cf-fe0f","23cf"],"fname":"23cf","uc":"23cf","isCanonical": false},":track_next:":{"unicode":["23ed-fe0f","23ed"],"fname":"23ed","uc":"23ed","isCanonical": true},":next_track:":{"unicode":["23ed-fe0f","23ed"],"fname":"23ed","uc":"23ed","isCanonical": false},":track_previous:":{"unicode":["23ee-fe0f","23ee"],"fname":"23ee","uc":"23ee","isCanonical": true},":previous_track:":{"unicode":["23ee-fe0f","23ee"],"fname":"23ee","uc":"23ee","isCanonical": false},":play_pause:":{"unicode":["23ef-fe0f","23ef"],"fname":"23ef","uc":"23ef","isCanonical": true},":stopwatch:":{"unicode":["23f1-fe0f","23f1"],"fname":"23f1","uc":"23f1","isCanonical": true},":timer:":{"unicode":["23f2-fe0f","23f2"],"fname":"23f2","uc":"23f2","isCanonical": true},":timer_clock:":{"unicode":["23f2-fe0f","23f2"],"fname":"23f2","uc":"23f2","isCanonical": false},":pause_button:":{"unicode":["23f8-fe0f","23f8"],"fname":"23f8","uc":"23f8","isCanonical": true},":double_vertical_bar:":{"unicode":["23f8-fe0f","23f8"],"fname":"23f8","uc":"23f8","isCanonical": false},":stop_button:":{"unicode":["23f9-fe0f","23f9"],"fname":"23f9","uc":"23f9","isCanonical": true},":record_button:":{"unicode":["23fa-fe0f","23fa"],"fname":"23fa","uc":"23fa","isCanonical": true},":umbrella2:":{"unicode":["2602-fe0f","2602"],"fname":"2602","uc":"2602","isCanonical": true},":snowman2:":{"unicode":["2603-fe0f","2603"],"fname":"2603","uc":"2603","isCanonical": true},":comet:":{"unicode":["2604-fe0f","2604"],"fname":"2604","uc":"2604","isCanonical": true},":shamrock:":{"unicode":["2618-fe0f","2618"],"fname":"2618","uc":"2618","isCanonical": true},":skull_crossbones:":{"unicode":["2620-fe0f","2620"],"fname":"2620","uc":"2620","isCanonical": true},":skull_and_crossbones:":{"unicode":["2620-fe0f","2620"],"fname":"2620","uc":"2620","isCanonical": false},":radioactive:":{"unicode":["2622-fe0f","2622"],"fname":"2622","uc":"2622","isCanonical": true},":radioactive_sign:":{"unicode":["2622-fe0f","2622"],"fname":"2622","uc":"2622","isCanonical": false},":biohazard:":{"unicode":["2623-fe0f","2623"],"fname":"2623","uc":"2623","isCanonical": true},":biohazard_sign:":{"unicode":["2623-fe0f","2623"],"fname":"2623","uc":"2623","isCanonical": false},":orthodox_cross:":{"unicode":["2626-fe0f","2626"],"fname":"2626","uc":"2626","isCanonical": true},":star_and_crescent:":{"unicode":["262a-fe0f","262a"],"fname":"262a","uc":"262a","isCanonical": true},":peace:":{"unicode":["262e-fe0f","262e"],"fname":"262e","uc":"262e","isCanonical": true},":peace_symbol:":{"unicode":["262e-fe0f","262e"],"fname":"262e","uc":"262e","isCanonical": false},":yin_yang:":{"unicode":["262f-fe0f","262f"],"fname":"262f","uc":"262f","isCanonical": true},":wheel_of_dharma:":{"unicode":["2638-fe0f","2638"],"fname":"2638","uc":"2638","isCanonical": true},":frowning2:":{"unicode":["2639-fe0f","2639"],"fname":"2639","uc":"2639","isCanonical": true},":white_frowning_face:":{"unicode":["2639-fe0f","2639"],"fname":"2639","uc":"2639","isCanonical": false},":hammer_pick:":{"unicode":["2692-fe0f","2692"],"fname":"2692","uc":"2692","isCanonical": true},":hammer_and_pick:":{"unicode":["2692-fe0f","2692"],"fname":"2692","uc":"2692","isCanonical": false},":crossed_swords:":{"unicode":["2694-fe0f","2694"],"fname":"2694","uc":"2694","isCanonical": true},":scales:":{"unicode":["2696-fe0f","2696"],"fname":"2696","uc":"2696","isCanonical": true},":alembic:":{"unicode":["2697-fe0f","2697"],"fname":"2697","uc":"2697","isCanonical": true},":gear:":{"unicode":["2699-fe0f","2699"],"fname":"2699","uc":"2699","isCanonical": true},":atom:":{"unicode":["269b-fe0f","269b"],"fname":"269b","uc":"269b","isCanonical": true},":atom_symbol:":{"unicode":["269b-fe0f","269b"],"fname":"269b","uc":"269b","isCanonical": false},":fleur-de-lis:":{"unicode":["269c-fe0f","269c"],"fname":"269c","uc":"269c","isCanonical": true},":coffin:":{"unicode":["26b0-fe0f","26b0"],"fname":"26b0","uc":"26b0","isCanonical": true},":urn:":{"unicode":["26b1-fe0f","26b1"],"fname":"26b1","uc":"26b1","isCanonical": true},":funeral_urn:":{"unicode":["26b1-fe0f","26b1"],"fname":"26b1","uc":"26b1","isCanonical": false},":thunder_cloud_rain:":{"unicode":["26c8-fe0f","26c8"],"fname":"26c8","uc":"26c8","isCanonical": true},":thunder_cloud_and_rain:":{"unicode":["26c8-fe0f","26c8"],"fname":"26c8","uc":"26c8","isCanonical": false},":pick:":{"unicode":["26cf-fe0f","26cf"],"fname":"26cf","uc":"26cf","isCanonical": true},":helmet_with_cross:":{"unicode":["26d1-fe0f","26d1"],"fname":"26d1","uc":"26d1","isCanonical": true},":helmet_with_white_cross:":{"unicode":["26d1-fe0f","26d1"],"fname":"26d1","uc":"26d1","isCanonical": false},":chains:":{"unicode":["26d3-fe0f","26d3"],"fname":"26d3","uc":"26d3","isCanonical": true},":shinto_shrine:":{"unicode":["26e9-fe0f","26e9"],"fname":"26e9","uc":"26e9","isCanonical": true},":mountain:":{"unicode":["26f0-fe0f","26f0"],"fname":"26f0","uc":"26f0","isCanonical": true},":beach_umbrella:":{"unicode":["26f1-fe0f","26f1"],"fname":"26f1","uc":"26f1","isCanonical": true},":umbrella_on_ground:":{"unicode":["26f1-fe0f","26f1"],"fname":"26f1","uc":"26f1","isCanonical": false},":ferry:":{"unicode":["26f4-fe0f","26f4"],"fname":"26f4","uc":"26f4","isCanonical": true},":skier:":{"unicode":["26f7-fe0f","26f7"],"fname":"26f7","uc":"26f7","isCanonical": true},":ice_skate:":{"unicode":["26f8-fe0f","26f8"],"fname":"26f8","uc":"26f8","isCanonical": true},":basketball_player:":{"unicode":["26f9-fe0f","26f9"],"fname":"26f9","uc":"26f9","isCanonical": true},":person_with_ball:":{"unicode":["26f9-fe0f","26f9"],"fname":"26f9","uc":"26f9","isCanonical": false},":star_of_david:":{"unicode":["2721-fe0f","2721"],"fname":"2721","uc":"2721","isCanonical": true},":heart_exclamation:":{"unicode":["2763-fe0f","2763"],"fname":"2763","uc":"2763","isCanonical": true},":heavy_heart_exclamation_mark_ornament:":{"unicode":["2763-fe0f","2763"],"fname":"2763","uc":"2763","isCanonical": false},":third_place:":{"unicode":["1f949"],"fname":"1f949","uc":"1f949","isCanonical": true},":third_place_medal:":{"unicode":["1f949"],"fname":"1f949","uc":"1f949","isCanonical": false},":second_place:":{"unicode":["1f948"],"fname":"1f948","uc":"1f948","isCanonical": true},":second_place_medal:":{"unicode":["1f948"],"fname":"1f948","uc":"1f948","isCanonical": false},":first_place:":{"unicode":["1f947"],"fname":"1f947","uc":"1f947","isCanonical": true},":first_place_medal:":{"unicode":["1f947"],"fname":"1f947","uc":"1f947","isCanonical": false},":fencer:":{"unicode":["1f93a"],"fname":"1f93a","uc":"1f93a","isCanonical": true},":fencing:":{"unicode":["1f93a"],"fname":"1f93a","uc":"1f93a","isCanonical": false},":goal:":{"unicode":["1f945"],"fname":"1f945","uc":"1f945","isCanonical": true},":goal_net:":{"unicode":["1f945"],"fname":"1f945","uc":"1f945","isCanonical": false},":handball:":{"unicode":["1f93e"],"fname":"1f93e","uc":"1f93e","isCanonical": true},":regional_indicator_z:":{"unicode":["1f1ff"],"fname":"1f1ff","uc":"1f1ff","isCanonical": true},":water_polo:":{"unicode":["1f93d"],"fname":"1f93d","uc":"1f93d","isCanonical": true},":martial_arts_uniform:":{"unicode":["1f94b"],"fname":"1f94b","uc":"1f94b","isCanonical": true},":karate_uniform:":{"unicode":["1f94b"],"fname":"1f94b","uc":"1f94b","isCanonical": false},":boxing_glove:":{"unicode":["1f94a"],"fname":"1f94a","uc":"1f94a","isCanonical": true},":boxing_gloves:":{"unicode":["1f94a"],"fname":"1f94a","uc":"1f94a","isCanonical": false},":wrestlers:":{"unicode":["1f93c"],"fname":"1f93c","uc":"1f93c","isCanonical": true},":wrestling:":{"unicode":["1f93c"],"fname":"1f93c","uc":"1f93c","isCanonical": false},":juggling:":{"unicode":["1f939"],"fname":"1f939","uc":"1f939","isCanonical": true},":juggler:":{"unicode":["1f939"],"fname":"1f939","uc":"1f939","isCanonical": false},":cartwheel:":{"unicode":["1f938"],"fname":"1f938","uc":"1f938","isCanonical": true},":person_doing_cartwheel:":{"unicode":["1f938"],"fname":"1f938","uc":"1f938","isCanonical": false},":canoe:":{"unicode":["1f6f6"],"fname":"1f6f6","uc":"1f6f6","isCanonical": true},":kayak:":{"unicode":["1f6f6"],"fname":"1f6f6","uc":"1f6f6","isCanonical": false},":motor_scooter:":{"unicode":["1f6f5"],"fname":"1f6f5","uc":"1f6f5","isCanonical": true},":motorbike:":{"unicode":["1f6f5"],"fname":"1f6f5","uc":"1f6f5","isCanonical": false},":scooter:":{"unicode":["1f6f4"],"fname":"1f6f4","uc":"1f6f4","isCanonical": true},":shopping_cart:":{"unicode":["1f6d2"],"fname":"1f6d2","uc":"1f6d2","isCanonical": true},":shopping_trolley:":{"unicode":["1f6d2"],"fname":"1f6d2","uc":"1f6d2","isCanonical": false},":black_joker:":{"unicode":["1f0cf"],"fname":"1f0cf","uc":"1f0cf","isCanonical": true},":a:":{"unicode":["1f170"],"fname":"1f170","uc":"1f170","isCanonical": true},":b:":{"unicode":["1f171"],"fname":"1f171","uc":"1f171","isCanonical": true},":o2:":{"unicode":["1f17e"],"fname":"1f17e","uc":"1f17e","isCanonical": true},":octagonal_sign:":{"unicode":["1f6d1"],"fname":"1f6d1","uc":"1f6d1","isCanonical": true},":stop_sign:":{"unicode":["1f6d1"],"fname":"1f6d1","uc":"1f6d1","isCanonical": false},":ab:":{"unicode":["1f18e"],"fname":"1f18e","uc":"1f18e","isCanonical": true},":cl:":{"unicode":["1f191"],"fname":"1f191","uc":"1f191","isCanonical": true},":regional_indicator_y:":{"unicode":["1f1fe"],"fname":"1f1fe","uc":"1f1fe","isCanonical": true},":cool:":{"unicode":["1f192"],"fname":"1f192","uc":"1f192","isCanonical": true},":free:":{"unicode":["1f193"],"fname":"1f193","uc":"1f193","isCanonical": true},":id:":{"unicode":["1f194"],"fname":"1f194","uc":"1f194","isCanonical": true},":new:":{"unicode":["1f195"],"fname":"1f195","uc":"1f195","isCanonical": true},":ng:":{"unicode":["1f196"],"fname":"1f196","uc":"1f196","isCanonical": true},":ok:":{"unicode":["1f197"],"fname":"1f197","uc":"1f197","isCanonical": true},":sos:":{"unicode":["1f198"],"fname":"1f198","uc":"1f198","isCanonical": true},":spoon:":{"unicode":["1f944"],"fname":"1f944","uc":"1f944","isCanonical": true},":up:":{"unicode":["1f199"],"fname":"1f199","uc":"1f199","isCanonical": true},":vs:":{"unicode":["1f19a"],"fname":"1f19a","uc":"1f19a","isCanonical": true},":champagne_glass:":{"unicode":["1f942"],"fname":"1f942","uc":"1f942","isCanonical": true},":clinking_glass:":{"unicode":["1f942"],"fname":"1f942","uc":"1f942","isCanonical": false},":tumbler_glass:":{"unicode":["1f943"],"fname":"1f943","uc":"1f943","isCanonical": true},":whisky:":{"unicode":["1f943"],"fname":"1f943","uc":"1f943","isCanonical": false},":koko:":{"unicode":["1f201"],"fname":"1f201","uc":"1f201","isCanonical": true},":stuffed_flatbread:":{"unicode":["1f959"],"fname":"1f959","uc":"1f959","isCanonical": true},":stuffed_pita:":{"unicode":["1f959"],"fname":"1f959","uc":"1f959","isCanonical": false},":u7981:":{"unicode":["1f232"],"fname":"1f232","uc":"1f232","isCanonical": true},":u7a7a:":{"unicode":["1f233"],"fname":"1f233","uc":"1f233","isCanonical": true},":u5408:":{"unicode":["1f234"],"fname":"1f234","uc":"1f234","isCanonical": true},":u6e80:":{"unicode":["1f235"],"fname":"1f235","uc":"1f235","isCanonical": true},":u6709:":{"unicode":["1f236"],"fname":"1f236","uc":"1f236","isCanonical": true},":shallow_pan_of_food:":{"unicode":["1f958"],"fname":"1f958","uc":"1f958","isCanonical": true},":paella:":{"unicode":["1f958"],"fname":"1f958","uc":"1f958","isCanonical": false},":u7533:":{"unicode":["1f238"],"fname":"1f238","uc":"1f238","isCanonical": true},":u5272:":{"unicode":["1f239"],"fname":"1f239","uc":"1f239","isCanonical": true},":salad:":{"unicode":["1f957"],"fname":"1f957","uc":"1f957","isCanonical": true},":green_salad:":{"unicode":["1f957"],"fname":"1f957","uc":"1f957","isCanonical": false},":u55b6:":{"unicode":["1f23a"],"fname":"1f23a","uc":"1f23a","isCanonical": true},":ideograph_advantage:":{"unicode":["1f250"],"fname":"1f250","uc":"1f250","isCanonical": true},":accept:":{"unicode":["1f251"],"fname":"1f251","uc":"1f251","isCanonical": true},":cyclone:":{"unicode":["1f300"],"fname":"1f300","uc":"1f300","isCanonical": true},":french_bread:":{"unicode":["1f956"],"fname":"1f956","uc":"1f956","isCanonical": true},":baguette_bread:":{"unicode":["1f956"],"fname":"1f956","uc":"1f956","isCanonical": false},":foggy:":{"unicode":["1f301"],"fname":"1f301","uc":"1f301","isCanonical": true},":closed_umbrella:":{"unicode":["1f302"],"fname":"1f302","uc":"1f302","isCanonical": true},":night_with_stars:":{"unicode":["1f303"],"fname":"1f303","uc":"1f303","isCanonical": true},":sunrise_over_mountains:":{"unicode":["1f304"],"fname":"1f304","uc":"1f304","isCanonical": true},":sunrise:":{"unicode":["1f305"],"fname":"1f305","uc":"1f305","isCanonical": true},":city_dusk:":{"unicode":["1f306"],"fname":"1f306","uc":"1f306","isCanonical": true},":carrot:":{"unicode":["1f955"],"fname":"1f955","uc":"1f955","isCanonical": true},":city_sunset:":{"unicode":["1f307"],"fname":"1f307","uc":"1f307","isCanonical": true},":city_sunrise:":{"unicode":["1f307"],"fname":"1f307","uc":"1f307","isCanonical": false},":rainbow:":{"unicode":["1f308"],"fname":"1f308","uc":"1f308","isCanonical": true},":potato:":{"unicode":["1f954"],"fname":"1f954","uc":"1f954","isCanonical": true},":bridge_at_night:":{"unicode":["1f309"],"fname":"1f309","uc":"1f309","isCanonical": true},":ocean:":{"unicode":["1f30a"],"fname":"1f30a","uc":"1f30a","isCanonical": true},":volcano:":{"unicode":["1f30b"],"fname":"1f30b","uc":"1f30b","isCanonical": true},":milky_way:":{"unicode":["1f30c"],"fname":"1f30c","uc":"1f30c","isCanonical": true},":earth_asia:":{"unicode":["1f30f"],"fname":"1f30f","uc":"1f30f","isCanonical": true},":new_moon:":{"unicode":["1f311"],"fname":"1f311","uc":"1f311","isCanonical": true},":bacon:":{"unicode":["1f953"],"fname":"1f953","uc":"1f953","isCanonical": true},":first_quarter_moon:":{"unicode":["1f313"],"fname":"1f313","uc":"1f313","isCanonical": true},":waxing_gibbous_moon:":{"unicode":["1f314"],"fname":"1f314","uc":"1f314","isCanonical": true},":full_moon:":{"unicode":["1f315"],"fname":"1f315","uc":"1f315","isCanonical": true},":crescent_moon:":{"unicode":["1f319"],"fname":"1f319","uc":"1f319","isCanonical": true},":first_quarter_moon_with_face:":{"unicode":["1f31b"],"fname":"1f31b","uc":"1f31b","isCanonical": true},":star2:":{"unicode":["1f31f"],"fname":"1f31f","uc":"1f31f","isCanonical": true},":cucumber:":{"unicode":["1f952"],"fname":"1f952","uc":"1f952","isCanonical": true},":stars:":{"unicode":["1f320"],"fname":"1f320","uc":"1f320","isCanonical": true},":chestnut:":{"unicode":["1f330"],"fname":"1f330","uc":"1f330","isCanonical": true},":avocado:":{"unicode":["1f951"],"fname":"1f951","uc":"1f951","isCanonical": true},":seedling:":{"unicode":["1f331"],"fname":"1f331","uc":"1f331","isCanonical": true},":palm_tree:":{"unicode":["1f334"],"fname":"1f334","uc":"1f334","isCanonical": true},":cactus:":{"unicode":["1f335"],"fname":"1f335","uc":"1f335","isCanonical": true},":tulip:":{"unicode":["1f337"],"fname":"1f337","uc":"1f337","isCanonical": true},":cherry_blossom:":{"unicode":["1f338"],"fname":"1f338","uc":"1f338","isCanonical": true},":rose:":{"unicode":["1f339"],"fname":"1f339","uc":"1f339","isCanonical": true},":hibiscus:":{"unicode":["1f33a"],"fname":"1f33a","uc":"1f33a","isCanonical": true},":sunflower:":{"unicode":["1f33b"],"fname":"1f33b","uc":"1f33b","isCanonical": true},":blossom:":{"unicode":["1f33c"],"fname":"1f33c","uc":"1f33c","isCanonical": true},":corn:":{"unicode":["1f33d"],"fname":"1f33d","uc":"1f33d","isCanonical": true},":croissant:":{"unicode":["1f950"],"fname":"1f950","uc":"1f950","isCanonical": true},":ear_of_rice:":{"unicode":["1f33e"],"fname":"1f33e","uc":"1f33e","isCanonical": true},":herb:":{"unicode":["1f33f"],"fname":"1f33f","uc":"1f33f","isCanonical": true},":four_leaf_clover:":{"unicode":["1f340"],"fname":"1f340","uc":"1f340","isCanonical": true},":maple_leaf:":{"unicode":["1f341"],"fname":"1f341","uc":"1f341","isCanonical": true},":fallen_leaf:":{"unicode":["1f342"],"fname":"1f342","uc":"1f342","isCanonical": true},":leaves:":{"unicode":["1f343"],"fname":"1f343","uc":"1f343","isCanonical": true},":mushroom:":{"unicode":["1f344"],"fname":"1f344","uc":"1f344","isCanonical": true},":tomato:":{"unicode":["1f345"],"fname":"1f345","uc":"1f345","isCanonical": true},":eggplant:":{"unicode":["1f346"],"fname":"1f346","uc":"1f346","isCanonical": true},":grapes:":{"unicode":["1f347"],"fname":"1f347","uc":"1f347","isCanonical": true},":melon:":{"unicode":["1f348"],"fname":"1f348","uc":"1f348","isCanonical": true},":watermelon:":{"unicode":["1f349"],"fname":"1f349","uc":"1f349","isCanonical": true},":tangerine:":{"unicode":["1f34a"],"fname":"1f34a","uc":"1f34a","isCanonical": true},":wilted_rose:":{"unicode":["1f940"],"fname":"1f940","uc":"1f940","isCanonical": true},":wilted_flower:":{"unicode":["1f940"],"fname":"1f940","uc":"1f940","isCanonical": false},":banana:":{"unicode":["1f34c"],"fname":"1f34c","uc":"1f34c","isCanonical": true},":pineapple:":{"unicode":["1f34d"],"fname":"1f34d","uc":"1f34d","isCanonical": true},":apple:":{"unicode":["1f34e"],"fname":"1f34e","uc":"1f34e","isCanonical": true},":green_apple:":{"unicode":["1f34f"],"fname":"1f34f","uc":"1f34f","isCanonical": true},":peach:":{"unicode":["1f351"],"fname":"1f351","uc":"1f351","isCanonical": true},":cherries:":{"unicode":["1f352"],"fname":"1f352","uc":"1f352","isCanonical": true},":strawberry:":{"unicode":["1f353"],"fname":"1f353","uc":"1f353","isCanonical": true},":rhino:":{"unicode":["1f98f"],"fname":"1f98f","uc":"1f98f","isCanonical": true},":rhinoceros:":{"unicode":["1f98f"],"fname":"1f98f","uc":"1f98f","isCanonical": false},":hamburger:":{"unicode":["1f354"],"fname":"1f354","uc":"1f354","isCanonical": true},":pizza:":{"unicode":["1f355"],"fname":"1f355","uc":"1f355","isCanonical": true},":meat_on_bone:":{"unicode":["1f356"],"fname":"1f356","uc":"1f356","isCanonical": true},":lizard:":{"unicode":["1f98e"],"fname":"1f98e","uc":"1f98e","isCanonical": true},":poultry_leg:":{"unicode":["1f357"],"fname":"1f357","uc":"1f357","isCanonical": true},":rice_cracker:":{"unicode":["1f358"],"fname":"1f358","uc":"1f358","isCanonical": true},":rice_ball:":{"unicode":["1f359"],"fname":"1f359","uc":"1f359","isCanonical": true},":gorilla:":{"unicode":["1f98d"],"fname":"1f98d","uc":"1f98d","isCanonical": true},":rice:":{"unicode":["1f35a"],"fname":"1f35a","uc":"1f35a","isCanonical": true},":curry:":{"unicode":["1f35b"],"fname":"1f35b","uc":"1f35b","isCanonical": true},":deer:":{"unicode":["1f98c"],"fname":"1f98c","uc":"1f98c","isCanonical": true},":ramen:":{"unicode":["1f35c"],"fname":"1f35c","uc":"1f35c","isCanonical": true},":spaghetti:":{"unicode":["1f35d"],"fname":"1f35d","uc":"1f35d","isCanonical": true},":bread:":{"unicode":["1f35e"],"fname":"1f35e","uc":"1f35e","isCanonical": true},":fries:":{"unicode":["1f35f"],"fname":"1f35f","uc":"1f35f","isCanonical": true},":butterfly:":{"unicode":["1f98b"],"fname":"1f98b","uc":"1f98b","isCanonical": true},":sweet_potato:":{"unicode":["1f360"],"fname":"1f360","uc":"1f360","isCanonical": true},":dango:":{"unicode":["1f361"],"fname":"1f361","uc":"1f361","isCanonical": true},":fox:":{"unicode":["1f98a"],"fname":"1f98a","uc":"1f98a","isCanonical": true},":fox_face:":{"unicode":["1f98a"],"fname":"1f98a","uc":"1f98a","isCanonical": false},":oden:":{"unicode":["1f362"],"fname":"1f362","uc":"1f362","isCanonical": true},":sushi:":{"unicode":["1f363"],"fname":"1f363","uc":"1f363","isCanonical": true},":owl:":{"unicode":["1f989"],"fname":"1f989","uc":"1f989","isCanonical": true},":fried_shrimp:":{"unicode":["1f364"],"fname":"1f364","uc":"1f364","isCanonical": true},":fish_cake:":{"unicode":["1f365"],"fname":"1f365","uc":"1f365","isCanonical": true},":shark:":{"unicode":["1f988"],"fname":"1f988","uc":"1f988","isCanonical": true},":icecream:":{"unicode":["1f366"],"fname":"1f366","uc":"1f366","isCanonical": true},":bat:":{"unicode":["1f987"],"fname":"1f987","uc":"1f987","isCanonical": true},":shaved_ice:":{"unicode":["1f367"],"fname":"1f367","uc":"1f367","isCanonical": true},":regional_indicator_x:":{"unicode":["1f1fd"],"fname":"1f1fd","uc":"1f1fd","isCanonical": true},":ice_cream:":{"unicode":["1f368"],"fname":"1f368","uc":"1f368","isCanonical": true},":duck:":{"unicode":["1f986"],"fname":"1f986","uc":"1f986","isCanonical": true},":doughnut:":{"unicode":["1f369"],"fname":"1f369","uc":"1f369","isCanonical": true},":eagle:":{"unicode":["1f985"],"fname":"1f985","uc":"1f985","isCanonical": true},":cookie:":{"unicode":["1f36a"],"fname":"1f36a","uc":"1f36a","isCanonical": true},":black_heart:":{"unicode":["1f5a4"],"fname":"1f5a4","uc":"1f5a4","isCanonical": true},":chocolate_bar:":{"unicode":["1f36b"],"fname":"1f36b","uc":"1f36b","isCanonical": true},":candy:":{"unicode":["1f36c"],"fname":"1f36c","uc":"1f36c","isCanonical": true},":lollipop:":{"unicode":["1f36d"],"fname":"1f36d","uc":"1f36d","isCanonical": true},":custard:":{"unicode":["1f36e"],"fname":"1f36e","uc":"1f36e","isCanonical": true},":pudding:":{"unicode":["1f36e"],"fname":"1f36e","uc":"1f36e","isCanonical": false},":flan:":{"unicode":["1f36e"],"fname":"1f36e","uc":"1f36e","isCanonical": false},":honey_pot:":{"unicode":["1f36f"],"fname":"1f36f","uc":"1f36f","isCanonical": true},":fingers_crossed:":{"unicode":["1f91e"],"fname":"1f91e","uc":"1f91e","isCanonical": true},":hand_with_index_and_middle_finger_crossed:":{"unicode":["1f91e"],"fname":"1f91e","uc":"1f91e","isCanonical": false},":cake:":{"unicode":["1f370"],"fname":"1f370","uc":"1f370","isCanonical": true},":bento:":{"unicode":["1f371"],"fname":"1f371","uc":"1f371","isCanonical": true},":stew:":{"unicode":["1f372"],"fname":"1f372","uc":"1f372","isCanonical": true},":handshake:":{"unicode":["1f91d"],"fname":"1f91d","uc":"1f91d","isCanonical": true},":shaking_hands:":{"unicode":["1f91d"],"fname":"1f91d","uc":"1f91d","isCanonical": false},":cooking:":{"unicode":["1f373"],"fname":"1f373","uc":"1f373","isCanonical": true},":fork_and_knife:":{"unicode":["1f374"],"fname":"1f374","uc":"1f374","isCanonical": true},":tea:":{"unicode":["1f375"],"fname":"1f375","uc":"1f375","isCanonical": true},":sake:":{"unicode":["1f376"],"fname":"1f376","uc":"1f376","isCanonical": true},":wine_glass:":{"unicode":["1f377"],"fname":"1f377","uc":"1f377","isCanonical": true},":cocktail:":{"unicode":["1f378"],"fname":"1f378","uc":"1f378","isCanonical": true},":tropical_drink:":{"unicode":["1f379"],"fname":"1f379","uc":"1f379","isCanonical": true},":beer:":{"unicode":["1f37a"],"fname":"1f37a","uc":"1f37a","isCanonical": true},":beers:":{"unicode":["1f37b"],"fname":"1f37b","uc":"1f37b","isCanonical": true},":ribbon:":{"unicode":["1f380"],"fname":"1f380","uc":"1f380","isCanonical": true},":gift:":{"unicode":["1f381"],"fname":"1f381","uc":"1f381","isCanonical": true},":birthday:":{"unicode":["1f382"],"fname":"1f382","uc":"1f382","isCanonical": true},":jack_o_lantern:":{"unicode":["1f383"],"fname":"1f383","uc":"1f383","isCanonical": true},":left_facing_fist:":{"unicode":["1f91b"],"fname":"1f91b","uc":"1f91b","isCanonical": true},":left_fist:":{"unicode":["1f91b"],"fname":"1f91b","uc":"1f91b","isCanonical": false},":right_facing_fist:":{"unicode":["1f91c"],"fname":"1f91c","uc":"1f91c","isCanonical": true},":right_fist:":{"unicode":["1f91c"],"fname":"1f91c","uc":"1f91c","isCanonical": false},":christmas_tree:":{"unicode":["1f384"],"fname":"1f384","uc":"1f384","isCanonical": true},":santa:":{"unicode":["1f385"],"fname":"1f385","uc":"1f385","isCanonical": true},":fireworks:":{"unicode":["1f386"],"fname":"1f386","uc":"1f386","isCanonical": true},":raised_back_of_hand:":{"unicode":["1f91a"],"fname":"1f91a","uc":"1f91a","isCanonical": true},":back_of_hand:":{"unicode":["1f91a"],"fname":"1f91a","uc":"1f91a","isCanonical": false},":sparkler:":{"unicode":["1f387"],"fname":"1f387","uc":"1f387","isCanonical": true},":balloon:":{"unicode":["1f388"],"fname":"1f388","uc":"1f388","isCanonical": true},":tada:":{"unicode":["1f389"],"fname":"1f389","uc":"1f389","isCanonical": true},":confetti_ball:":{"unicode":["1f38a"],"fname":"1f38a","uc":"1f38a","isCanonical": true},":tanabata_tree:":{"unicode":["1f38b"],"fname":"1f38b","uc":"1f38b","isCanonical": true},":crossed_flags:":{"unicode":["1f38c"],"fname":"1f38c","uc":"1f38c","isCanonical": true},":call_me:":{"unicode":["1f919"],"fname":"1f919","uc":"1f919","isCanonical": true},":call_me_hand:":{"unicode":["1f919"],"fname":"1f919","uc":"1f919","isCanonical": false},":bamboo:":{"unicode":["1f38d"],"fname":"1f38d","uc":"1f38d","isCanonical": true},":man_dancing:":{"unicode":["1f57a"],"fname":"1f57a","uc":"1f57a","isCanonical": true},":male_dancer:":{"unicode":["1f57a"],"fname":"1f57a","uc":"1f57a","isCanonical": false},":dolls:":{"unicode":["1f38e"],"fname":"1f38e","uc":"1f38e","isCanonical": true},":selfie:":{"unicode":["1f933"],"fname":"1f933","uc":"1f933","isCanonical": true},":flags:":{"unicode":["1f38f"],"fname":"1f38f","uc":"1f38f","isCanonical": true},":pregnant_woman:":{"unicode":["1f930"],"fname":"1f930","uc":"1f930","isCanonical": true},":expecting_woman:":{"unicode":["1f930"],"fname":"1f930","uc":"1f930","isCanonical": false},":wind_chime:":{"unicode":["1f390"],"fname":"1f390","uc":"1f390","isCanonical": true},":face_palm:":{"unicode":["1f926"],"fname":"1f926","uc":"1f926","isCanonical": true},":facepalm:":{"unicode":["1f926"],"fname":"1f926","uc":"1f926","isCanonical": false},":shrug:":{"unicode":["1f937"],"fname":"1f937","uc":"1f937","isCanonical": true},":rice_scene:":{"unicode":["1f391"],"fname":"1f391","uc":"1f391","isCanonical": true},":school_satchel:":{"unicode":["1f392"],"fname":"1f392","uc":"1f392","isCanonical": true},":mortar_board:":{"unicode":["1f393"],"fname":"1f393","uc":"1f393","isCanonical": true},":carousel_horse:":{"unicode":["1f3a0"],"fname":"1f3a0","uc":"1f3a0","isCanonical": true},":ferris_wheel:":{"unicode":["1f3a1"],"fname":"1f3a1","uc":"1f3a1","isCanonical": true},":roller_coaster:":{"unicode":["1f3a2"],"fname":"1f3a2","uc":"1f3a2","isCanonical": true},":fishing_pole_and_fish:":{"unicode":["1f3a3"],"fname":"1f3a3","uc":"1f3a3","isCanonical": true},":microphone:":{"unicode":["1f3a4"],"fname":"1f3a4","uc":"1f3a4","isCanonical": true},":movie_camera:":{"unicode":["1f3a5"],"fname":"1f3a5","uc":"1f3a5","isCanonical": true},":cinema:":{"unicode":["1f3a6"],"fname":"1f3a6","uc":"1f3a6","isCanonical": true},":headphones:":{"unicode":["1f3a7"],"fname":"1f3a7","uc":"1f3a7","isCanonical": true},":mrs_claus:":{"unicode":["1f936"],"fname":"1f936","uc":"1f936","isCanonical": true},":mother_christmas:":{"unicode":["1f936"],"fname":"1f936","uc":"1f936","isCanonical": false},":art:":{"unicode":["1f3a8"],"fname":"1f3a8","uc":"1f3a8","isCanonical": true},":man_in_tuxedo:":{"unicode":["1f935"],"fname":"1f935","uc":"1f935","isCanonical": true},":tophat:":{"unicode":["1f3a9"],"fname":"1f3a9","uc":"1f3a9","isCanonical": true},":circus_tent:":{"unicode":["1f3aa"],"fname":"1f3aa","uc":"1f3aa","isCanonical": true},":prince:":{"unicode":["1f934"],"fname":"1f934","uc":"1f934","isCanonical": true},":ticket:":{"unicode":["1f3ab"],"fname":"1f3ab","uc":"1f3ab","isCanonical": true},":clapper:":{"unicode":["1f3ac"],"fname":"1f3ac","uc":"1f3ac","isCanonical": true},":performing_arts:":{"unicode":["1f3ad"],"fname":"1f3ad","uc":"1f3ad","isCanonical": true},":sneezing_face:":{"unicode":["1f927"],"fname":"1f927","uc":"1f927","isCanonical": true},":sneeze:":{"unicode":["1f927"],"fname":"1f927","uc":"1f927","isCanonical": false},":video_game:":{"unicode":["1f3ae"],"fname":"1f3ae","uc":"1f3ae","isCanonical": true},":dart:":{"unicode":["1f3af"],"fname":"1f3af","uc":"1f3af","isCanonical": true},":slot_machine:":{"unicode":["1f3b0"],"fname":"1f3b0","uc":"1f3b0","isCanonical": true},":8ball:":{"unicode":["1f3b1"],"fname":"1f3b1","uc":"1f3b1","isCanonical": true},":game_die:":{"unicode":["1f3b2"],"fname":"1f3b2","uc":"1f3b2","isCanonical": true},":bowling:":{"unicode":["1f3b3"],"fname":"1f3b3","uc":"1f3b3","isCanonical": true},":flower_playing_cards:":{"unicode":["1f3b4"],"fname":"1f3b4","uc":"1f3b4","isCanonical": true},":lying_face:":{"unicode":["1f925"],"fname":"1f925","uc":"1f925","isCanonical": true},":liar:":{"unicode":["1f925"],"fname":"1f925","uc":"1f925","isCanonical": false},":musical_note:":{"unicode":["1f3b5"],"fname":"1f3b5","uc":"1f3b5","isCanonical": true},":notes:":{"unicode":["1f3b6"],"fname":"1f3b6","uc":"1f3b6","isCanonical": true},":saxophone:":{"unicode":["1f3b7"],"fname":"1f3b7","uc":"1f3b7","isCanonical": true},":drooling_face:":{"unicode":["1f924"],"fname":"1f924","uc":"1f924","isCanonical": true},":drool:":{"unicode":["1f924"],"fname":"1f924","uc":"1f924","isCanonical": false},":guitar:":{"unicode":["1f3b8"],"fname":"1f3b8","uc":"1f3b8","isCanonical": true},":musical_keyboard:":{"unicode":["1f3b9"],"fname":"1f3b9","uc":"1f3b9","isCanonical": true},":trumpet:":{"unicode":["1f3ba"],"fname":"1f3ba","uc":"1f3ba","isCanonical": true},":rofl:":{"unicode":["1f923"],"fname":"1f923","uc":"1f923","isCanonical": true},":rolling_on_the_floor_laughing:":{"unicode":["1f923"],"fname":"1f923","uc":"1f923","isCanonical": false},":violin:":{"unicode":["1f3bb"],"fname":"1f3bb","uc":"1f3bb","isCanonical": true},":musical_score:":{"unicode":["1f3bc"],"fname":"1f3bc","uc":"1f3bc","isCanonical": true},":running_shirt_with_sash:":{"unicode":["1f3bd"],"fname":"1f3bd","uc":"1f3bd","isCanonical": true},":nauseated_face:":{"unicode":["1f922"],"fname":"1f922","uc":"1f922","isCanonical": true},":sick:":{"unicode":["1f922"],"fname":"1f922","uc":"1f922","isCanonical": false},":tennis:":{"unicode":["1f3be"],"fname":"1f3be","uc":"1f3be","isCanonical": true},":ski:":{"unicode":["1f3bf"],"fname":"1f3bf","uc":"1f3bf","isCanonical": true},":basketball:":{"unicode":["1f3c0"],"fname":"1f3c0","uc":"1f3c0","isCanonical": true},":checkered_flag:":{"unicode":["1f3c1"],"fname":"1f3c1","uc":"1f3c1","isCanonical": true},":clown:":{"unicode":["1f921"],"fname":"1f921","uc":"1f921","isCanonical": true},":clown_face:":{"unicode":["1f921"],"fname":"1f921","uc":"1f921","isCanonical": false},":snowboarder:":{"unicode":["1f3c2"],"fname":"1f3c2","uc":"1f3c2","isCanonical": true},":runner:":{"unicode":["1f3c3"],"fname":"1f3c3","uc":"1f3c3","isCanonical": true},":surfer:":{"unicode":["1f3c4"],"fname":"1f3c4","uc":"1f3c4","isCanonical": true},":trophy:":{"unicode":["1f3c6"],"fname":"1f3c6","uc":"1f3c6","isCanonical": true},":football:":{"unicode":["1f3c8"],"fname":"1f3c8","uc":"1f3c8","isCanonical": true},":swimmer:":{"unicode":["1f3ca"],"fname":"1f3ca","uc":"1f3ca","isCanonical": true},":house:":{"unicode":["1f3e0"],"fname":"1f3e0","uc":"1f3e0","isCanonical": true},":house_with_garden:":{"unicode":["1f3e1"],"fname":"1f3e1","uc":"1f3e1","isCanonical": true},":office:":{"unicode":["1f3e2"],"fname":"1f3e2","uc":"1f3e2","isCanonical": true},":post_office:":{"unicode":["1f3e3"],"fname":"1f3e3","uc":"1f3e3","isCanonical": true},":hospital:":{"unicode":["1f3e5"],"fname":"1f3e5","uc":"1f3e5","isCanonical": true},":bank:":{"unicode":["1f3e6"],"fname":"1f3e6","uc":"1f3e6","isCanonical": true},":atm:":{"unicode":["1f3e7"],"fname":"1f3e7","uc":"1f3e7","isCanonical": true},":hotel:":{"unicode":["1f3e8"],"fname":"1f3e8","uc":"1f3e8","isCanonical": true},":love_hotel:":{"unicode":["1f3e9"],"fname":"1f3e9","uc":"1f3e9","isCanonical": true},":convenience_store:":{"unicode":["1f3ea"],"fname":"1f3ea","uc":"1f3ea","isCanonical": true},":school:":{"unicode":["1f3eb"],"fname":"1f3eb","uc":"1f3eb","isCanonical": true},":department_store:":{"unicode":["1f3ec"],"fname":"1f3ec","uc":"1f3ec","isCanonical": true},":cowboy:":{"unicode":["1f920"],"fname":"1f920","uc":"1f920","isCanonical": true},":face_with_cowboy_hat:":{"unicode":["1f920"],"fname":"1f920","uc":"1f920","isCanonical": false},":factory:":{"unicode":["1f3ed"],"fname":"1f3ed","uc":"1f3ed","isCanonical": true},":izakaya_lantern:":{"unicode":["1f3ee"],"fname":"1f3ee","uc":"1f3ee","isCanonical": true},":japanese_castle:":{"unicode":["1f3ef"],"fname":"1f3ef","uc":"1f3ef","isCanonical": true},":european_castle:":{"unicode":["1f3f0"],"fname":"1f3f0","uc":"1f3f0","isCanonical": true},":snail:":{"unicode":["1f40c"],"fname":"1f40c","uc":"1f40c","isCanonical": true},":snake:":{"unicode":["1f40d"],"fname":"1f40d","uc":"1f40d","isCanonical": true},":racehorse:":{"unicode":["1f40e"],"fname":"1f40e","uc":"1f40e","isCanonical": true},":sheep:":{"unicode":["1f411"],"fname":"1f411","uc":"1f411","isCanonical": true},":monkey:":{"unicode":["1f412"],"fname":"1f412","uc":"1f412","isCanonical": true},":chicken:":{"unicode":["1f414"],"fname":"1f414","uc":"1f414","isCanonical": true},":boar:":{"unicode":["1f417"],"fname":"1f417","uc":"1f417","isCanonical": true},":elephant:":{"unicode":["1f418"],"fname":"1f418","uc":"1f418","isCanonical": true},":octopus:":{"unicode":["1f419"],"fname":"1f419","uc":"1f419","isCanonical": true},":shell:":{"unicode":["1f41a"],"fname":"1f41a","uc":"1f41a","isCanonical": true},":bug:":{"unicode":["1f41b"],"fname":"1f41b","uc":"1f41b","isCanonical": true},":ant:":{"unicode":["1f41c"],"fname":"1f41c","uc":"1f41c","isCanonical": true},":bee:":{"unicode":["1f41d"],"fname":"1f41d","uc":"1f41d","isCanonical": true},":beetle:":{"unicode":["1f41e"],"fname":"1f41e","uc":"1f41e","isCanonical": true},":fish:":{"unicode":["1f41f"],"fname":"1f41f","uc":"1f41f","isCanonical": true},":tropical_fish:":{"unicode":["1f420"],"fname":"1f420","uc":"1f420","isCanonical": true},":blowfish:":{"unicode":["1f421"],"fname":"1f421","uc":"1f421","isCanonical": true},":turtle:":{"unicode":["1f422"],"fname":"1f422","uc":"1f422","isCanonical": true},":hatching_chick:":{"unicode":["1f423"],"fname":"1f423","uc":"1f423","isCanonical": true},":baby_chick:":{"unicode":["1f424"],"fname":"1f424","uc":"1f424","isCanonical": true},":hatched_chick:":{"unicode":["1f425"],"fname":"1f425","uc":"1f425","isCanonical": true},":bird:":{"unicode":["1f426"],"fname":"1f426","uc":"1f426","isCanonical": true},":penguin:":{"unicode":["1f427"],"fname":"1f427","uc":"1f427","isCanonical": true},":koala:":{"unicode":["1f428"],"fname":"1f428","uc":"1f428","isCanonical": true},":poodle:":{"unicode":["1f429"],"fname":"1f429","uc":"1f429","isCanonical": true},":camel:":{"unicode":["1f42b"],"fname":"1f42b","uc":"1f42b","isCanonical": true},":dolphin:":{"unicode":["1f42c"],"fname":"1f42c","uc":"1f42c","isCanonical": true},":mouse:":{"unicode":["1f42d"],"fname":"1f42d","uc":"1f42d","isCanonical": true},":cow:":{"unicode":["1f42e"],"fname":"1f42e","uc":"1f42e","isCanonical": true},":tiger:":{"unicode":["1f42f"],"fname":"1f42f","uc":"1f42f","isCanonical": true},":rabbit:":{"unicode":["1f430"],"fname":"1f430","uc":"1f430","isCanonical": true},":cat:":{"unicode":["1f431"],"fname":"1f431","uc":"1f431","isCanonical": true},":dragon_face:":{"unicode":["1f432"],"fname":"1f432","uc":"1f432","isCanonical": true},":whale:":{"unicode":["1f433"],"fname":"1f433","uc":"1f433","isCanonical": true},":horse:":{"unicode":["1f434"],"fname":"1f434","uc":"1f434","isCanonical": true},":monkey_face:":{"unicode":["1f435"],"fname":"1f435","uc":"1f435","isCanonical": true},":dog:":{"unicode":["1f436"],"fname":"1f436","uc":"1f436","isCanonical": true},":pig:":{"unicode":["1f437"],"fname":"1f437","uc":"1f437","isCanonical": true},":frog:":{"unicode":["1f438"],"fname":"1f438","uc":"1f438","isCanonical": true},":hamster:":{"unicode":["1f439"],"fname":"1f439","uc":"1f439","isCanonical": true},":wolf:":{"unicode":["1f43a"],"fname":"1f43a","uc":"1f43a","isCanonical": true},":bear:":{"unicode":["1f43b"],"fname":"1f43b","uc":"1f43b","isCanonical": true},":panda_face:":{"unicode":["1f43c"],"fname":"1f43c","uc":"1f43c","isCanonical": true},":pig_nose:":{"unicode":["1f43d"],"fname":"1f43d","uc":"1f43d","isCanonical": true},":feet:":{"unicode":["1f43e"],"fname":"1f43e","uc":"1f43e","isCanonical": true},":paw_prints:":{"unicode":["1f43e"],"fname":"1f43e","uc":"1f43e","isCanonical": false},":eyes:":{"unicode":["1f440"],"fname":"1f440","uc":"1f440","isCanonical": true},":ear:":{"unicode":["1f442"],"fname":"1f442","uc":"1f442","isCanonical": true},":nose:":{"unicode":["1f443"],"fname":"1f443","uc":"1f443","isCanonical": true},":lips:":{"unicode":["1f444"],"fname":"1f444","uc":"1f444","isCanonical": true},":tongue:":{"unicode":["1f445"],"fname":"1f445","uc":"1f445","isCanonical": true},":point_up_2:":{"unicode":["1f446"],"fname":"1f446","uc":"1f446","isCanonical": true},":point_down:":{"unicode":["1f447"],"fname":"1f447","uc":"1f447","isCanonical": true},":point_left:":{"unicode":["1f448"],"fname":"1f448","uc":"1f448","isCanonical": true},":point_right:":{"unicode":["1f449"],"fname":"1f449","uc":"1f449","isCanonical": true},":punch:":{"unicode":["1f44a"],"fname":"1f44a","uc":"1f44a","isCanonical": true},":wave:":{"unicode":["1f44b"],"fname":"1f44b","uc":"1f44b","isCanonical": true},":ok_hand:":{"unicode":["1f44c"],"fname":"1f44c","uc":"1f44c","isCanonical": true},":thumbsup:":{"unicode":["1f44d"],"fname":"1f44d","uc":"1f44d","isCanonical": true},":+1:":{"unicode":["1f44d"],"fname":"1f44d","uc":"1f44d","isCanonical": false},":thumbup:":{"unicode":["1f44d"],"fname":"1f44d","uc":"1f44d","isCanonical": false},":thumbsdown:":{"unicode":["1f44e"],"fname":"1f44e","uc":"1f44e","isCanonical": true},":-1:":{"unicode":["1f44e"],"fname":"1f44e","uc":"1f44e","isCanonical": false},":thumbdown:":{"unicode":["1f44e"],"fname":"1f44e","uc":"1f44e","isCanonical": false},":clap:":{"unicode":["1f44f"],"fname":"1f44f","uc":"1f44f","isCanonical": true},":open_hands:":{"unicode":["1f450"],"fname":"1f450","uc":"1f450","isCanonical": true},":crown:":{"unicode":["1f451"],"fname":"1f451","uc":"1f451","isCanonical": true},":womans_hat:":{"unicode":["1f452"],"fname":"1f452","uc":"1f452","isCanonical": true},":eyeglasses:":{"unicode":["1f453"],"fname":"1f453","uc":"1f453","isCanonical": true},":necktie:":{"unicode":["1f454"],"fname":"1f454","uc":"1f454","isCanonical": true},":shirt:":{"unicode":["1f455"],"fname":"1f455","uc":"1f455","isCanonical": true},":jeans:":{"unicode":["1f456"],"fname":"1f456","uc":"1f456","isCanonical": true},":dress:":{"unicode":["1f457"],"fname":"1f457","uc":"1f457","isCanonical": true},":kimono:":{"unicode":["1f458"],"fname":"1f458","uc":"1f458","isCanonical": true},":bikini:":{"unicode":["1f459"],"fname":"1f459","uc":"1f459","isCanonical": true},":womans_clothes:":{"unicode":["1f45a"],"fname":"1f45a","uc":"1f45a","isCanonical": true},":purse:":{"unicode":["1f45b"],"fname":"1f45b","uc":"1f45b","isCanonical": true},":handbag:":{"unicode":["1f45c"],"fname":"1f45c","uc":"1f45c","isCanonical": true},":pouch:":{"unicode":["1f45d"],"fname":"1f45d","uc":"1f45d","isCanonical": true},":mans_shoe:":{"unicode":["1f45e"],"fname":"1f45e","uc":"1f45e","isCanonical": true},":athletic_shoe:":{"unicode":["1f45f"],"fname":"1f45f","uc":"1f45f","isCanonical": true},":high_heel:":{"unicode":["1f460"],"fname":"1f460","uc":"1f460","isCanonical": true},":sandal:":{"unicode":["1f461"],"fname":"1f461","uc":"1f461","isCanonical": true},":boot:":{"unicode":["1f462"],"fname":"1f462","uc":"1f462","isCanonical": true},":footprints:":{"unicode":["1f463"],"fname":"1f463","uc":"1f463","isCanonical": true},":bust_in_silhouette:":{"unicode":["1f464"],"fname":"1f464","uc":"1f464","isCanonical": true},":boy:":{"unicode":["1f466"],"fname":"1f466","uc":"1f466","isCanonical": true},":girl:":{"unicode":["1f467"],"fname":"1f467","uc":"1f467","isCanonical": true},":man:":{"unicode":["1f468"],"fname":"1f468","uc":"1f468","isCanonical": true},":woman:":{"unicode":["1f469"],"fname":"1f469","uc":"1f469","isCanonical": true},":family:":{"unicode":["1f46a"],"fname":"1f46a","uc":"1f46a","isCanonical": true},":couple:":{"unicode":["1f46b"],"fname":"1f46b","uc":"1f46b","isCanonical": true},":cop:":{"unicode":["1f46e"],"fname":"1f46e","uc":"1f46e","isCanonical": true},":dancers:":{"unicode":["1f46f"],"fname":"1f46f","uc":"1f46f","isCanonical": true},":bride_with_veil:":{"unicode":["1f470"],"fname":"1f470","uc":"1f470","isCanonical": true},":person_with_blond_hair:":{"unicode":["1f471"],"fname":"1f471","uc":"1f471","isCanonical": true},":man_with_gua_pi_mao:":{"unicode":["1f472"],"fname":"1f472","uc":"1f472","isCanonical": true},":man_with_turban:":{"unicode":["1f473"],"fname":"1f473","uc":"1f473","isCanonical": true},":older_man:":{"unicode":["1f474"],"fname":"1f474","uc":"1f474","isCanonical": true},":older_woman:":{"unicode":["1f475"],"fname":"1f475","uc":"1f475","isCanonical": true},":grandma:":{"unicode":["1f475"],"fname":"1f475","uc":"1f475","isCanonical": false},":baby:":{"unicode":["1f476"],"fname":"1f476","uc":"1f476","isCanonical": true},":construction_worker:":{"unicode":["1f477"],"fname":"1f477","uc":"1f477","isCanonical": true},":princess:":{"unicode":["1f478"],"fname":"1f478","uc":"1f478","isCanonical": true},":japanese_ogre:":{"unicode":["1f479"],"fname":"1f479","uc":"1f479","isCanonical": true},":japanese_goblin:":{"unicode":["1f47a"],"fname":"1f47a","uc":"1f47a","isCanonical": true},":ghost:":{"unicode":["1f47b"],"fname":"1f47b","uc":"1f47b","isCanonical": true},":angel:":{"unicode":["1f47c"],"fname":"1f47c","uc":"1f47c","isCanonical": true},":alien:":{"unicode":["1f47d"],"fname":"1f47d","uc":"1f47d","isCanonical": true},":space_invader:":{"unicode":["1f47e"],"fname":"1f47e","uc":"1f47e","isCanonical": true},":imp:":{"unicode":["1f47f"],"fname":"1f47f","uc":"1f47f","isCanonical": true},":skull:":{"unicode":["1f480"],"fname":"1f480","uc":"1f480","isCanonical": true},":skeleton:":{"unicode":["1f480"],"fname":"1f480","uc":"1f480","isCanonical": false},":card_index:":{"unicode":["1f4c7"],"fname":"1f4c7","uc":"1f4c7","isCanonical": true},":information_desk_person:":{"unicode":["1f481"],"fname":"1f481","uc":"1f481","isCanonical": true},":guardsman:":{"unicode":["1f482"],"fname":"1f482","uc":"1f482","isCanonical": true},":dancer:":{"unicode":["1f483"],"fname":"1f483","uc":"1f483","isCanonical": true},":lipstick:":{"unicode":["1f484"],"fname":"1f484","uc":"1f484","isCanonical": true},":nail_care:":{"unicode":["1f485"],"fname":"1f485","uc":"1f485","isCanonical": true},":ledger:":{"unicode":["1f4d2"],"fname":"1f4d2","uc":"1f4d2","isCanonical": true},":massage:":{"unicode":["1f486"],"fname":"1f486","uc":"1f486","isCanonical": true},":notebook:":{"unicode":["1f4d3"],"fname":"1f4d3","uc":"1f4d3","isCanonical": true},":haircut:":{"unicode":["1f487"],"fname":"1f487","uc":"1f487","isCanonical": true},":notebook_with_decorative_cover:":{"unicode":["1f4d4"],"fname":"1f4d4","uc":"1f4d4","isCanonical": true},":barber:":{"unicode":["1f488"],"fname":"1f488","uc":"1f488","isCanonical": true},":closed_book:":{"unicode":["1f4d5"],"fname":"1f4d5","uc":"1f4d5","isCanonical": true},":syringe:":{"unicode":["1f489"],"fname":"1f489","uc":"1f489","isCanonical": true},":book:":{"unicode":["1f4d6"],"fname":"1f4d6","uc":"1f4d6","isCanonical": true},":pill:":{"unicode":["1f48a"],"fname":"1f48a","uc":"1f48a","isCanonical": true},":green_book:":{"unicode":["1f4d7"],"fname":"1f4d7","uc":"1f4d7","isCanonical": true},":kiss:":{"unicode":["1f48b"],"fname":"1f48b","uc":"1f48b","isCanonical": true},":blue_book:":{"unicode":["1f4d8"],"fname":"1f4d8","uc":"1f4d8","isCanonical": true},":love_letter:":{"unicode":["1f48c"],"fname":"1f48c","uc":"1f48c","isCanonical": true},":orange_book:":{"unicode":["1f4d9"],"fname":"1f4d9","uc":"1f4d9","isCanonical": true},":ring:":{"unicode":["1f48d"],"fname":"1f48d","uc":"1f48d","isCanonical": true},":books:":{"unicode":["1f4da"],"fname":"1f4da","uc":"1f4da","isCanonical": true},":gem:":{"unicode":["1f48e"],"fname":"1f48e","uc":"1f48e","isCanonical": true},":name_badge:":{"unicode":["1f4db"],"fname":"1f4db","uc":"1f4db","isCanonical": true},":couplekiss:":{"unicode":["1f48f"],"fname":"1f48f","uc":"1f48f","isCanonical": true},":scroll:":{"unicode":["1f4dc"],"fname":"1f4dc","uc":"1f4dc","isCanonical": true},":bouquet:":{"unicode":["1f490"],"fname":"1f490","uc":"1f490","isCanonical": true},":pencil:":{"unicode":["1f4dd"],"fname":"1f4dd","uc":"1f4dd","isCanonical": true},":couple_with_heart:":{"unicode":["1f491"],"fname":"1f491","uc":"1f491","isCanonical": true},":telephone_receiver:":{"unicode":["1f4de"],"fname":"1f4de","uc":"1f4de","isCanonical": true},":wedding:":{"unicode":["1f492"],"fname":"1f492","uc":"1f492","isCanonical": true},":pager:":{"unicode":["1f4df"],"fname":"1f4df","uc":"1f4df","isCanonical": true},":fax:":{"unicode":["1f4e0"],"fname":"1f4e0","uc":"1f4e0","isCanonical": true},":heartbeat:":{"unicode":["1f493"],"fname":"1f493","uc":"1f493","isCanonical": true},":satellite:":{"unicode":["1f4e1"],"fname":"1f4e1","uc":"1f4e1","isCanonical": true},":loudspeaker:":{"unicode":["1f4e2"],"fname":"1f4e2","uc":"1f4e2","isCanonical": true},":broken_heart:":{"unicode":["1f494"],"fname":"1f494","uc":"1f494","isCanonical": true},":mega:":{"unicode":["1f4e3"],"fname":"1f4e3","uc":"1f4e3","isCanonical": true},":outbox_tray:":{"unicode":["1f4e4"],"fname":"1f4e4","uc":"1f4e4","isCanonical": true},":two_hearts:":{"unicode":["1f495"],"fname":"1f495","uc":"1f495","isCanonical": true},":inbox_tray:":{"unicode":["1f4e5"],"fname":"1f4e5","uc":"1f4e5","isCanonical": true},":package:":{"unicode":["1f4e6"],"fname":"1f4e6","uc":"1f4e6","isCanonical": true},":sparkling_heart:":{"unicode":["1f496"],"fname":"1f496","uc":"1f496","isCanonical": true},":e-mail:":{"unicode":["1f4e7"],"fname":"1f4e7","uc":"1f4e7","isCanonical": true},":email:":{"unicode":["1f4e7"],"fname":"1f4e7","uc":"1f4e7","isCanonical": false},":incoming_envelope:":{"unicode":["1f4e8"],"fname":"1f4e8","uc":"1f4e8","isCanonical": true},":heartpulse:":{"unicode":["1f497"],"fname":"1f497","uc":"1f497","isCanonical": true},":envelope_with_arrow:":{"unicode":["1f4e9"],"fname":"1f4e9","uc":"1f4e9","isCanonical": true},":mailbox_closed:":{"unicode":["1f4ea"],"fname":"1f4ea","uc":"1f4ea","isCanonical": true},":cupid:":{"unicode":["1f498"],"fname":"1f498","uc":"1f498","isCanonical": true},":mailbox:":{"unicode":["1f4eb"],"fname":"1f4eb","uc":"1f4eb","isCanonical": true},":postbox:":{"unicode":["1f4ee"],"fname":"1f4ee","uc":"1f4ee","isCanonical": true},":blue_heart:":{"unicode":["1f499"],"fname":"1f499","uc":"1f499","isCanonical": true},":newspaper:":{"unicode":["1f4f0"],"fname":"1f4f0","uc":"1f4f0","isCanonical": true},":iphone:":{"unicode":["1f4f1"],"fname":"1f4f1","uc":"1f4f1","isCanonical": true},":green_heart:":{"unicode":["1f49a"],"fname":"1f49a","uc":"1f49a","isCanonical": true},":calling:":{"unicode":["1f4f2"],"fname":"1f4f2","uc":"1f4f2","isCanonical": true},":vibration_mode:":{"unicode":["1f4f3"],"fname":"1f4f3","uc":"1f4f3","isCanonical": true},":yellow_heart:":{"unicode":["1f49b"],"fname":"1f49b","uc":"1f49b","isCanonical": true},":mobile_phone_off:":{"unicode":["1f4f4"],"fname":"1f4f4","uc":"1f4f4","isCanonical": true},":signal_strength:":{"unicode":["1f4f6"],"fname":"1f4f6","uc":"1f4f6","isCanonical": true},":purple_heart:":{"unicode":["1f49c"],"fname":"1f49c","uc":"1f49c","isCanonical": true},":camera:":{"unicode":["1f4f7"],"fname":"1f4f7","uc":"1f4f7","isCanonical": true},":video_camera:":{"unicode":["1f4f9"],"fname":"1f4f9","uc":"1f4f9","isCanonical": true},":gift_heart:":{"unicode":["1f49d"],"fname":"1f49d","uc":"1f49d","isCanonical": true},":tv:":{"unicode":["1f4fa"],"fname":"1f4fa","uc":"1f4fa","isCanonical": true},":radio:":{"unicode":["1f4fb"],"fname":"1f4fb","uc":"1f4fb","isCanonical": true},":revolving_hearts:":{"unicode":["1f49e"],"fname":"1f49e","uc":"1f49e","isCanonical": true},":vhs:":{"unicode":["1f4fc"],"fname":"1f4fc","uc":"1f4fc","isCanonical": true},":arrows_clockwise:":{"unicode":["1f503"],"fname":"1f503","uc":"1f503","isCanonical": true},":heart_decoration:":{"unicode":["1f49f"],"fname":"1f49f","uc":"1f49f","isCanonical": true},":loud_sound:":{"unicode":["1f50a"],"fname":"1f50a","uc":"1f50a","isCanonical": true},":battery:":{"unicode":["1f50b"],"fname":"1f50b","uc":"1f50b","isCanonical": true},":diamond_shape_with_a_dot_inside:":{"unicode":["1f4a0"],"fname":"1f4a0","uc":"1f4a0","isCanonical": true},":electric_plug:":{"unicode":["1f50c"],"fname":"1f50c","uc":"1f50c","isCanonical": true},":mag:":{"unicode":["1f50d"],"fname":"1f50d","uc":"1f50d","isCanonical": true},":bulb:":{"unicode":["1f4a1"],"fname":"1f4a1","uc":"1f4a1","isCanonical": true},":mag_right:":{"unicode":["1f50e"],"fname":"1f50e","uc":"1f50e","isCanonical": true},":lock_with_ink_pen:":{"unicode":["1f50f"],"fname":"1f50f","uc":"1f50f","isCanonical": true},":anger:":{"unicode":["1f4a2"],"fname":"1f4a2","uc":"1f4a2","isCanonical": true},":closed_lock_with_key:":{"unicode":["1f510"],"fname":"1f510","uc":"1f510","isCanonical": true},":key:":{"unicode":["1f511"],"fname":"1f511","uc":"1f511","isCanonical": true},":bomb:":{"unicode":["1f4a3"],"fname":"1f4a3","uc":"1f4a3","isCanonical": true},":lock:":{"unicode":["1f512"],"fname":"1f512","uc":"1f512","isCanonical": true},":unlock:":{"unicode":["1f513"],"fname":"1f513","uc":"1f513","isCanonical": true},":zzz:":{"unicode":["1f4a4"],"fname":"1f4a4","uc":"1f4a4","isCanonical": true},":bell:":{"unicode":["1f514"],"fname":"1f514","uc":"1f514","isCanonical": true},":bookmark:":{"unicode":["1f516"],"fname":"1f516","uc":"1f516","isCanonical": true},":boom:":{"unicode":["1f4a5"],"fname":"1f4a5","uc":"1f4a5","isCanonical": true},":link:":{"unicode":["1f517"],"fname":"1f517","uc":"1f517","isCanonical": true},":radio_button:":{"unicode":["1f518"],"fname":"1f518","uc":"1f518","isCanonical": true},":sweat_drops:":{"unicode":["1f4a6"],"fname":"1f4a6","uc":"1f4a6","isCanonical": true},":back:":{"unicode":["1f519"],"fname":"1f519","uc":"1f519","isCanonical": true},":end:":{"unicode":["1f51a"],"fname":"1f51a","uc":"1f51a","isCanonical": true},":droplet:":{"unicode":["1f4a7"],"fname":"1f4a7","uc":"1f4a7","isCanonical": true},":on:":{"unicode":["1f51b"],"fname":"1f51b","uc":"1f51b","isCanonical": true},":soon:":{"unicode":["1f51c"],"fname":"1f51c","uc":"1f51c","isCanonical": true},":dash:":{"unicode":["1f4a8"],"fname":"1f4a8","uc":"1f4a8","isCanonical": true},":top:":{"unicode":["1f51d"],"fname":"1f51d","uc":"1f51d","isCanonical": true},":underage:":{"unicode":["1f51e"],"fname":"1f51e","uc":"1f51e","isCanonical": true},":poop:":{"unicode":["1f4a9"],"fname":"1f4a9","uc":"1f4a9","isCanonical": true},":shit:":{"unicode":["1f4a9"],"fname":"1f4a9","uc":"1f4a9","isCanonical": false},":hankey:":{"unicode":["1f4a9"],"fname":"1f4a9","uc":"1f4a9","isCanonical": false},":poo:":{"unicode":["1f4a9"],"fname":"1f4a9","uc":"1f4a9","isCanonical": false},":keycap_ten:":{"unicode":["1f51f"],"fname":"1f51f","uc":"1f51f","isCanonical": true},":muscle:":{"unicode":["1f4aa"],"fname":"1f4aa","uc":"1f4aa","isCanonical": true},":capital_abcd:":{"unicode":["1f520"],"fname":"1f520","uc":"1f520","isCanonical": true},":abcd:":{"unicode":["1f521"],"fname":"1f521","uc":"1f521","isCanonical": true},":dizzy:":{"unicode":["1f4ab"],"fname":"1f4ab","uc":"1f4ab","isCanonical": true},":1234:":{"unicode":["1f522"],"fname":"1f522","uc":"1f522","isCanonical": true},":symbols:":{"unicode":["1f523"],"fname":"1f523","uc":"1f523","isCanonical": true},":speech_balloon:":{"unicode":["1f4ac"],"fname":"1f4ac","uc":"1f4ac","isCanonical": true},":abc:":{"unicode":["1f524"],"fname":"1f524","uc":"1f524","isCanonical": true},":fire:":{"unicode":["1f525"],"fname":"1f525","uc":"1f525","isCanonical": true},":flame:":{"unicode":["1f525"],"fname":"1f525","uc":"1f525","isCanonical": false},":white_flower:":{"unicode":["1f4ae"],"fname":"1f4ae","uc":"1f4ae","isCanonical": true},":flashlight:":{"unicode":["1f526"],"fname":"1f526","uc":"1f526","isCanonical": true},":wrench:":{"unicode":["1f527"],"fname":"1f527","uc":"1f527","isCanonical": true},":100:":{"unicode":["1f4af"],"fname":"1f4af","uc":"1f4af","isCanonical": true},":hammer:":{"unicode":["1f528"],"fname":"1f528","uc":"1f528","isCanonical": true},":nut_and_bolt:":{"unicode":["1f529"],"fname":"1f529","uc":"1f529","isCanonical": true},":moneybag:":{"unicode":["1f4b0"],"fname":"1f4b0","uc":"1f4b0","isCanonical": true},":knife:":{"unicode":["1f52a"],"fname":"1f52a","uc":"1f52a","isCanonical": true},":gun:":{"unicode":["1f52b"],"fname":"1f52b","uc":"1f52b","isCanonical": true},":currency_exchange:":{"unicode":["1f4b1"],"fname":"1f4b1","uc":"1f4b1","isCanonical": true},":crystal_ball:":{"unicode":["1f52e"],"fname":"1f52e","uc":"1f52e","isCanonical": true},":heavy_dollar_sign:":{"unicode":["1f4b2"],"fname":"1f4b2","uc":"1f4b2","isCanonical": true},":six_pointed_star:":{"unicode":["1f52f"],"fname":"1f52f","uc":"1f52f","isCanonical": true},":credit_card:":{"unicode":["1f4b3"],"fname":"1f4b3","uc":"1f4b3","isCanonical": true},":beginner:":{"unicode":["1f530"],"fname":"1f530","uc":"1f530","isCanonical": true},":trident:":{"unicode":["1f531"],"fname":"1f531","uc":"1f531","isCanonical": true},":yen:":{"unicode":["1f4b4"],"fname":"1f4b4","uc":"1f4b4","isCanonical": true},":black_square_button:":{"unicode":["1f532"],"fname":"1f532","uc":"1f532","isCanonical": true},":white_square_button:":{"unicode":["1f533"],"fname":"1f533","uc":"1f533","isCanonical": true},":dollar:":{"unicode":["1f4b5"],"fname":"1f4b5","uc":"1f4b5","isCanonical": true},":red_circle:":{"unicode":["1f534"],"fname":"1f534","uc":"1f534","isCanonical": true},":blue_circle:":{"unicode":["1f535"],"fname":"1f535","uc":"1f535","isCanonical": true},":money_with_wings:":{"unicode":["1f4b8"],"fname":"1f4b8","uc":"1f4b8","isCanonical": true},":large_orange_diamond:":{"unicode":["1f536"],"fname":"1f536","uc":"1f536","isCanonical": true},":large_blue_diamond:":{"unicode":["1f537"],"fname":"1f537","uc":"1f537","isCanonical": true},":chart:":{"unicode":["1f4b9"],"fname":"1f4b9","uc":"1f4b9","isCanonical": true},":small_orange_diamond:":{"unicode":["1f538"],"fname":"1f538","uc":"1f538","isCanonical": true},":small_blue_diamond:":{"unicode":["1f539"],"fname":"1f539","uc":"1f539","isCanonical": true},":seat:":{"unicode":["1f4ba"],"fname":"1f4ba","uc":"1f4ba","isCanonical": true},":small_red_triangle:":{"unicode":["1f53a"],"fname":"1f53a","uc":"1f53a","isCanonical": true},":small_red_triangle_down:":{"unicode":["1f53b"],"fname":"1f53b","uc":"1f53b","isCanonical": true},":computer:":{"unicode":["1f4bb"],"fname":"1f4bb","uc":"1f4bb","isCanonical": true},":arrow_up_small:":{"unicode":["1f53c"],"fname":"1f53c","uc":"1f53c","isCanonical": true},":briefcase:":{"unicode":["1f4bc"],"fname":"1f4bc","uc":"1f4bc","isCanonical": true},":arrow_down_small:":{"unicode":["1f53d"],"fname":"1f53d","uc":"1f53d","isCanonical": true},":clock1:":{"unicode":["1f550"],"fname":"1f550","uc":"1f550","isCanonical": true},":minidisc:":{"unicode":["1f4bd"],"fname":"1f4bd","uc":"1f4bd","isCanonical": true},":clock2:":{"unicode":["1f551"],"fname":"1f551","uc":"1f551","isCanonical": true},":floppy_disk:":{"unicode":["1f4be"],"fname":"1f4be","uc":"1f4be","isCanonical": true},":clock3:":{"unicode":["1f552"],"fname":"1f552","uc":"1f552","isCanonical": true},":cd:":{"unicode":["1f4bf"],"fname":"1f4bf","uc":"1f4bf","isCanonical": true},":clock4:":{"unicode":["1f553"],"fname":"1f553","uc":"1f553","isCanonical": true},":dvd:":{"unicode":["1f4c0"],"fname":"1f4c0","uc":"1f4c0","isCanonical": true},":clock5:":{"unicode":["1f554"],"fname":"1f554","uc":"1f554","isCanonical": true},":clock6:":{"unicode":["1f555"],"fname":"1f555","uc":"1f555","isCanonical": true},":file_folder:":{"unicode":["1f4c1"],"fname":"1f4c1","uc":"1f4c1","isCanonical": true},":clock7:":{"unicode":["1f556"],"fname":"1f556","uc":"1f556","isCanonical": true},":clock8:":{"unicode":["1f557"],"fname":"1f557","uc":"1f557","isCanonical": true},":open_file_folder:":{"unicode":["1f4c2"],"fname":"1f4c2","uc":"1f4c2","isCanonical": true},":clock9:":{"unicode":["1f558"],"fname":"1f558","uc":"1f558","isCanonical": true},":clock10:":{"unicode":["1f559"],"fname":"1f559","uc":"1f559","isCanonical": true},":page_with_curl:":{"unicode":["1f4c3"],"fname":"1f4c3","uc":"1f4c3","isCanonical": true},":clock11:":{"unicode":["1f55a"],"fname":"1f55a","uc":"1f55a","isCanonical": true},":clock12:":{"unicode":["1f55b"],"fname":"1f55b","uc":"1f55b","isCanonical": true},":page_facing_up:":{"unicode":["1f4c4"],"fname":"1f4c4","uc":"1f4c4","isCanonical": true},":mount_fuji:":{"unicode":["1f5fb"],"fname":"1f5fb","uc":"1f5fb","isCanonical": true},":tokyo_tower:":{"unicode":["1f5fc"],"fname":"1f5fc","uc":"1f5fc","isCanonical": true},":date:":{"unicode":["1f4c5"],"fname":"1f4c5","uc":"1f4c5","isCanonical": true},":statue_of_liberty:":{"unicode":["1f5fd"],"fname":"1f5fd","uc":"1f5fd","isCanonical": true},":japan:":{"unicode":["1f5fe"],"fname":"1f5fe","uc":"1f5fe","isCanonical": true},":calendar:":{"unicode":["1f4c6"],"fname":"1f4c6","uc":"1f4c6","isCanonical": true},":moyai:":{"unicode":["1f5ff"],"fname":"1f5ff","uc":"1f5ff","isCanonical": true},":grin:":{"unicode":["1f601"],"fname":"1f601","uc":"1f601","isCanonical": true},":joy:":{"unicode":["1f602"],"fname":"1f602","uc":"1f602","isCanonical": true},":smiley:":{"unicode":["1f603"],"fname":"1f603","uc":"1f603","isCanonical": true},":chart_with_upwards_trend:":{"unicode":["1f4c8"],"fname":"1f4c8","uc":"1f4c8","isCanonical": true},":smile:":{"unicode":["1f604"],"fname":"1f604","uc":"1f604","isCanonical": true},":sweat_smile:":{"unicode":["1f605"],"fname":"1f605","uc":"1f605","isCanonical": true},":chart_with_downwards_trend:":{"unicode":["1f4c9"],"fname":"1f4c9","uc":"1f4c9","isCanonical": true},":laughing:":{"unicode":["1f606"],"fname":"1f606","uc":"1f606","isCanonical": true},":satisfied:":{"unicode":["1f606"],"fname":"1f606","uc":"1f606","isCanonical": false},":wink:":{"unicode":["1f609"],"fname":"1f609","uc":"1f609","isCanonical": true},":bar_chart:":{"unicode":["1f4ca"],"fname":"1f4ca","uc":"1f4ca","isCanonical": true},":blush:":{"unicode":["1f60a"],"fname":"1f60a","uc":"1f60a","isCanonical": true},":yum:":{"unicode":["1f60b"],"fname":"1f60b","uc":"1f60b","isCanonical": true},":clipboard:":{"unicode":["1f4cb"],"fname":"1f4cb","uc":"1f4cb","isCanonical": true},":relieved:":{"unicode":["1f60c"],"fname":"1f60c","uc":"1f60c","isCanonical": true},":heart_eyes:":{"unicode":["1f60d"],"fname":"1f60d","uc":"1f60d","isCanonical": true},":pushpin:":{"unicode":["1f4cc"],"fname":"1f4cc","uc":"1f4cc","isCanonical": true},":smirk:":{"unicode":["1f60f"],"fname":"1f60f","uc":"1f60f","isCanonical": true},":unamused:":{"unicode":["1f612"],"fname":"1f612","uc":"1f612","isCanonical": true},":round_pushpin:":{"unicode":["1f4cd"],"fname":"1f4cd","uc":"1f4cd","isCanonical": true},":sweat:":{"unicode":["1f613"],"fname":"1f613","uc":"1f613","isCanonical": true},":pensive:":{"unicode":["1f614"],"fname":"1f614","uc":"1f614","isCanonical": true},":paperclip:":{"unicode":["1f4ce"],"fname":"1f4ce","uc":"1f4ce","isCanonical": true},":confounded:":{"unicode":["1f616"],"fname":"1f616","uc":"1f616","isCanonical": true},":kissing_heart:":{"unicode":["1f618"],"fname":"1f618","uc":"1f618","isCanonical": true},":straight_ruler:":{"unicode":["1f4cf"],"fname":"1f4cf","uc":"1f4cf","isCanonical": true},":kissing_closed_eyes:":{"unicode":["1f61a"],"fname":"1f61a","uc":"1f61a","isCanonical": true},":stuck_out_tongue_winking_eye:":{"unicode":["1f61c"],"fname":"1f61c","uc":"1f61c","isCanonical": true},":triangular_ruler:":{"unicode":["1f4d0"],"fname":"1f4d0","uc":"1f4d0","isCanonical": true},":stuck_out_tongue_closed_eyes:":{"unicode":["1f61d"],"fname":"1f61d","uc":"1f61d","isCanonical": true},":disappointed:":{"unicode":["1f61e"],"fname":"1f61e","uc":"1f61e","isCanonical": true},":bookmark_tabs:":{"unicode":["1f4d1"],"fname":"1f4d1","uc":"1f4d1","isCanonical": true},":angry:":{"unicode":["1f620"],"fname":"1f620","uc":"1f620","isCanonical": true},":rage:":{"unicode":["1f621"],"fname":"1f621","uc":"1f621","isCanonical": true},":cry:":{"unicode":["1f622"],"fname":"1f622","uc":"1f622","isCanonical": true},":persevere:":{"unicode":["1f623"],"fname":"1f623","uc":"1f623","isCanonical": true},":triumph:":{"unicode":["1f624"],"fname":"1f624","uc":"1f624","isCanonical": true},":disappointed_relieved:":{"unicode":["1f625"],"fname":"1f625","uc":"1f625","isCanonical": true},":fearful:":{"unicode":["1f628"],"fname":"1f628","uc":"1f628","isCanonical": true},":weary:":{"unicode":["1f629"],"fname":"1f629","uc":"1f629","isCanonical": true},":sleepy:":{"unicode":["1f62a"],"fname":"1f62a","uc":"1f62a","isCanonical": true},":tired_face:":{"unicode":["1f62b"],"fname":"1f62b","uc":"1f62b","isCanonical": true},":sob:":{"unicode":["1f62d"],"fname":"1f62d","uc":"1f62d","isCanonical": true},":cold_sweat:":{"unicode":["1f630"],"fname":"1f630","uc":"1f630","isCanonical": true},":scream:":{"unicode":["1f631"],"fname":"1f631","uc":"1f631","isCanonical": true},":astonished:":{"unicode":["1f632"],"fname":"1f632","uc":"1f632","isCanonical": true},":flushed:":{"unicode":["1f633"],"fname":"1f633","uc":"1f633","isCanonical": true},":dizzy_face:":{"unicode":["1f635"],"fname":"1f635","uc":"1f635","isCanonical": true},":mask:":{"unicode":["1f637"],"fname":"1f637","uc":"1f637","isCanonical": true},":smile_cat:":{"unicode":["1f638"],"fname":"1f638","uc":"1f638","isCanonical": true},":joy_cat:":{"unicode":["1f639"],"fname":"1f639","uc":"1f639","isCanonical": true},":smiley_cat:":{"unicode":["1f63a"],"fname":"1f63a","uc":"1f63a","isCanonical": true},":heart_eyes_cat:":{"unicode":["1f63b"],"fname":"1f63b","uc":"1f63b","isCanonical": true},":smirk_cat:":{"unicode":["1f63c"],"fname":"1f63c","uc":"1f63c","isCanonical": true},":kissing_cat:":{"unicode":["1f63d"],"fname":"1f63d","uc":"1f63d","isCanonical": true},":pouting_cat:":{"unicode":["1f63e"],"fname":"1f63e","uc":"1f63e","isCanonical": true},":crying_cat_face:":{"unicode":["1f63f"],"fname":"1f63f","uc":"1f63f","isCanonical": true},":scream_cat:":{"unicode":["1f640"],"fname":"1f640","uc":"1f640","isCanonical": true},":no_good:":{"unicode":["1f645"],"fname":"1f645","uc":"1f645","isCanonical": true},":ok_woman:":{"unicode":["1f646"],"fname":"1f646","uc":"1f646","isCanonical": true},":bow:":{"unicode":["1f647"],"fname":"1f647","uc":"1f647","isCanonical": true},":see_no_evil:":{"unicode":["1f648"],"fname":"1f648","uc":"1f648","isCanonical": true},":hear_no_evil:":{"unicode":["1f649"],"fname":"1f649","uc":"1f649","isCanonical": true},":speak_no_evil:":{"unicode":["1f64a"],"fname":"1f64a","uc":"1f64a","isCanonical": true},":raising_hand:":{"unicode":["1f64b"],"fname":"1f64b","uc":"1f64b","isCanonical": true},":raised_hands:":{"unicode":["1f64c"],"fname":"1f64c","uc":"1f64c","isCanonical": true},":person_frowning:":{"unicode":["1f64d"],"fname":"1f64d","uc":"1f64d","isCanonical": true},":person_with_pouting_face:":{"unicode":["1f64e"],"fname":"1f64e","uc":"1f64e","isCanonical": true},":pray:":{"unicode":["1f64f"],"fname":"1f64f","uc":"1f64f","isCanonical": true},":rocket:":{"unicode":["1f680"],"fname":"1f680","uc":"1f680","isCanonical": true},":railway_car:":{"unicode":["1f683"],"fname":"1f683","uc":"1f683","isCanonical": true},":bullettrain_side:":{"unicode":["1f684"],"fname":"1f684","uc":"1f684","isCanonical": true},":bullettrain_front:":{"unicode":["1f685"],"fname":"1f685","uc":"1f685","isCanonical": true},":metro:":{"unicode":["1f687"],"fname":"1f687","uc":"1f687","isCanonical": true},":station:":{"unicode":["1f689"],"fname":"1f689","uc":"1f689","isCanonical": true},":bus:":{"unicode":["1f68c"],"fname":"1f68c","uc":"1f68c","isCanonical": true},":busstop:":{"unicode":["1f68f"],"fname":"1f68f","uc":"1f68f","isCanonical": true},":ambulance:":{"unicode":["1f691"],"fname":"1f691","uc":"1f691","isCanonical": true},":fire_engine:":{"unicode":["1f692"],"fname":"1f692","uc":"1f692","isCanonical": true},":police_car:":{"unicode":["1f693"],"fname":"1f693","uc":"1f693","isCanonical": true},":taxi:":{"unicode":["1f695"],"fname":"1f695","uc":"1f695","isCanonical": true},":red_car:":{"unicode":["1f697"],"fname":"1f697","uc":"1f697","isCanonical": true},":blue_car:":{"unicode":["1f699"],"fname":"1f699","uc":"1f699","isCanonical": true},":truck:":{"unicode":["1f69a"],"fname":"1f69a","uc":"1f69a","isCanonical": true},":ship:":{"unicode":["1f6a2"],"fname":"1f6a2","uc":"1f6a2","isCanonical": true},":speedboat:":{"unicode":["1f6a4"],"fname":"1f6a4","uc":"1f6a4","isCanonical": true},":traffic_light:":{"unicode":["1f6a5"],"fname":"1f6a5","uc":"1f6a5","isCanonical": true},":construction:":{"unicode":["1f6a7"],"fname":"1f6a7","uc":"1f6a7","isCanonical": true},":rotating_light:":{"unicode":["1f6a8"],"fname":"1f6a8","uc":"1f6a8","isCanonical": true},":triangular_flag_on_post:":{"unicode":["1f6a9"],"fname":"1f6a9","uc":"1f6a9","isCanonical": true},":door:":{"unicode":["1f6aa"],"fname":"1f6aa","uc":"1f6aa","isCanonical": true},":no_entry_sign:":{"unicode":["1f6ab"],"fname":"1f6ab","uc":"1f6ab","isCanonical": true},":smoking:":{"unicode":["1f6ac"],"fname":"1f6ac","uc":"1f6ac","isCanonical": true},":no_smoking:":{"unicode":["1f6ad"],"fname":"1f6ad","uc":"1f6ad","isCanonical": true},":bike:":{"unicode":["1f6b2"],"fname":"1f6b2","uc":"1f6b2","isCanonical": true},":walking:":{"unicode":["1f6b6"],"fname":"1f6b6","uc":"1f6b6","isCanonical": true},":mens:":{"unicode":["1f6b9"],"fname":"1f6b9","uc":"1f6b9","isCanonical": true},":womens:":{"unicode":["1f6ba"],"fname":"1f6ba","uc":"1f6ba","isCanonical": true},":restroom:":{"unicode":["1f6bb"],"fname":"1f6bb","uc":"1f6bb","isCanonical": true},":baby_symbol:":{"unicode":["1f6bc"],"fname":"1f6bc","uc":"1f6bc","isCanonical": true},":toilet:":{"unicode":["1f6bd"],"fname":"1f6bd","uc":"1f6bd","isCanonical": true},":wc:":{"unicode":["1f6be"],"fname":"1f6be","uc":"1f6be","isCanonical": true},":bath:":{"unicode":["1f6c0"],"fname":"1f6c0","uc":"1f6c0","isCanonical": true},":metal:":{"unicode":["1f918"],"fname":"1f918","uc":"1f918","isCanonical": true},":sign_of_the_horns:":{"unicode":["1f918"],"fname":"1f918","uc":"1f918","isCanonical": false},":grinning:":{"unicode":["1f600"],"fname":"1f600","uc":"1f600","isCanonical": true},":innocent:":{"unicode":["1f607"],"fname":"1f607","uc":"1f607","isCanonical": true},":smiling_imp:":{"unicode":["1f608"],"fname":"1f608","uc":"1f608","isCanonical": true},":sunglasses:":{"unicode":["1f60e"],"fname":"1f60e","uc":"1f60e","isCanonical": true},":neutral_face:":{"unicode":["1f610"],"fname":"1f610","uc":"1f610","isCanonical": true},":expressionless:":{"unicode":["1f611"],"fname":"1f611","uc":"1f611","isCanonical": true},":confused:":{"unicode":["1f615"],"fname":"1f615","uc":"1f615","isCanonical": true},":kissing:":{"unicode":["1f617"],"fname":"1f617","uc":"1f617","isCanonical": true},":kissing_smiling_eyes:":{"unicode":["1f619"],"fname":"1f619","uc":"1f619","isCanonical": true},":stuck_out_tongue:":{"unicode":["1f61b"],"fname":"1f61b","uc":"1f61b","isCanonical": true},":worried:":{"unicode":["1f61f"],"fname":"1f61f","uc":"1f61f","isCanonical": true},":frowning:":{"unicode":["1f626"],"fname":"1f626","uc":"1f626","isCanonical": true},":anguished:":{"unicode":["1f627"],"fname":"1f627","uc":"1f627","isCanonical": true},":grimacing:":{"unicode":["1f62c"],"fname":"1f62c","uc":"1f62c","isCanonical": true},":open_mouth:":{"unicode":["1f62e"],"fname":"1f62e","uc":"1f62e","isCanonical": true},":hushed:":{"unicode":["1f62f"],"fname":"1f62f","uc":"1f62f","isCanonical": true},":sleeping:":{"unicode":["1f634"],"fname":"1f634","uc":"1f634","isCanonical": true},":no_mouth:":{"unicode":["1f636"],"fname":"1f636","uc":"1f636","isCanonical": true},":helicopter:":{"unicode":["1f681"],"fname":"1f681","uc":"1f681","isCanonical": true},":steam_locomotive:":{"unicode":["1f682"],"fname":"1f682","uc":"1f682","isCanonical": true},":train2:":{"unicode":["1f686"],"fname":"1f686","uc":"1f686","isCanonical": true},":light_rail:":{"unicode":["1f688"],"fname":"1f688","uc":"1f688","isCanonical": true},":tram:":{"unicode":["1f68a"],"fname":"1f68a","uc":"1f68a","isCanonical": true},":oncoming_bus:":{"unicode":["1f68d"],"fname":"1f68d","uc":"1f68d","isCanonical": true},":trolleybus:":{"unicode":["1f68e"],"fname":"1f68e","uc":"1f68e","isCanonical": true},":minibus:":{"unicode":["1f690"],"fname":"1f690","uc":"1f690","isCanonical": true},":oncoming_police_car:":{"unicode":["1f694"],"fname":"1f694","uc":"1f694","isCanonical": true},":oncoming_taxi:":{"unicode":["1f696"],"fname":"1f696","uc":"1f696","isCanonical": true},":oncoming_automobile:":{"unicode":["1f698"],"fname":"1f698","uc":"1f698","isCanonical": true},":articulated_lorry:":{"unicode":["1f69b"],"fname":"1f69b","uc":"1f69b","isCanonical": true},":tractor:":{"unicode":["1f69c"],"fname":"1f69c","uc":"1f69c","isCanonical": true},":monorail:":{"unicode":["1f69d"],"fname":"1f69d","uc":"1f69d","isCanonical": true},":mountain_railway:":{"unicode":["1f69e"],"fname":"1f69e","uc":"1f69e","isCanonical": true},":suspension_railway:":{"unicode":["1f69f"],"fname":"1f69f","uc":"1f69f","isCanonical": true},":mountain_cableway:":{"unicode":["1f6a0"],"fname":"1f6a0","uc":"1f6a0","isCanonical": true},":aerial_tramway:":{"unicode":["1f6a1"],"fname":"1f6a1","uc":"1f6a1","isCanonical": true},":rowboat:":{"unicode":["1f6a3"],"fname":"1f6a3","uc":"1f6a3","isCanonical": true},":vertical_traffic_light:":{"unicode":["1f6a6"],"fname":"1f6a6","uc":"1f6a6","isCanonical": true},":put_litter_in_its_place:":{"unicode":["1f6ae"],"fname":"1f6ae","uc":"1f6ae","isCanonical": true},":do_not_litter:":{"unicode":["1f6af"],"fname":"1f6af","uc":"1f6af","isCanonical": true},":potable_water:":{"unicode":["1f6b0"],"fname":"1f6b0","uc":"1f6b0","isCanonical": true},":non-potable_water:":{"unicode":["1f6b1"],"fname":"1f6b1","uc":"1f6b1","isCanonical": true},":no_bicycles:":{"unicode":["1f6b3"],"fname":"1f6b3","uc":"1f6b3","isCanonical": true},":bicyclist:":{"unicode":["1f6b4"],"fname":"1f6b4","uc":"1f6b4","isCanonical": true},":mountain_bicyclist:":{"unicode":["1f6b5"],"fname":"1f6b5","uc":"1f6b5","isCanonical": true},":no_pedestrians:":{"unicode":["1f6b7"],"fname":"1f6b7","uc":"1f6b7","isCanonical": true},":children_crossing:":{"unicode":["1f6b8"],"fname":"1f6b8","uc":"1f6b8","isCanonical": true},":shower:":{"unicode":["1f6bf"],"fname":"1f6bf","uc":"1f6bf","isCanonical": true},":bathtub:":{"unicode":["1f6c1"],"fname":"1f6c1","uc":"1f6c1","isCanonical": true},":passport_control:":{"unicode":["1f6c2"],"fname":"1f6c2","uc":"1f6c2","isCanonical": true},":customs:":{"unicode":["1f6c3"],"fname":"1f6c3","uc":"1f6c3","isCanonical": true},":baggage_claim:":{"unicode":["1f6c4"],"fname":"1f6c4","uc":"1f6c4","isCanonical": true},":left_luggage:":{"unicode":["1f6c5"],"fname":"1f6c5","uc":"1f6c5","isCanonical": true},":earth_africa:":{"unicode":["1f30d"],"fname":"1f30d","uc":"1f30d","isCanonical": true},":earth_americas:":{"unicode":["1f30e"],"fname":"1f30e","uc":"1f30e","isCanonical": true},":globe_with_meridians:":{"unicode":["1f310"],"fname":"1f310","uc":"1f310","isCanonical": true},":waxing_crescent_moon:":{"unicode":["1f312"],"fname":"1f312","uc":"1f312","isCanonical": true},":waning_gibbous_moon:":{"unicode":["1f316"],"fname":"1f316","uc":"1f316","isCanonical": true},":last_quarter_moon:":{"unicode":["1f317"],"fname":"1f317","uc":"1f317","isCanonical": true},":waning_crescent_moon:":{"unicode":["1f318"],"fname":"1f318","uc":"1f318","isCanonical": true},":new_moon_with_face:":{"unicode":["1f31a"],"fname":"1f31a","uc":"1f31a","isCanonical": true},":last_quarter_moon_with_face:":{"unicode":["1f31c"],"fname":"1f31c","uc":"1f31c","isCanonical": true},":full_moon_with_face:":{"unicode":["1f31d"],"fname":"1f31d","uc":"1f31d","isCanonical": true},":sun_with_face:":{"unicode":["1f31e"],"fname":"1f31e","uc":"1f31e","isCanonical": true},":evergreen_tree:":{"unicode":["1f332"],"fname":"1f332","uc":"1f332","isCanonical": true},":deciduous_tree:":{"unicode":["1f333"],"fname":"1f333","uc":"1f333","isCanonical": true},":lemon:":{"unicode":["1f34b"],"fname":"1f34b","uc":"1f34b","isCanonical": true},":pear:":{"unicode":["1f350"],"fname":"1f350","uc":"1f350","isCanonical": true},":baby_bottle:":{"unicode":["1f37c"],"fname":"1f37c","uc":"1f37c","isCanonical": true},":horse_racing:":{"unicode":["1f3c7"],"fname":"1f3c7","uc":"1f3c7","isCanonical": true},":rugby_football:":{"unicode":["1f3c9"],"fname":"1f3c9","uc":"1f3c9","isCanonical": true},":european_post_office:":{"unicode":["1f3e4"],"fname":"1f3e4","uc":"1f3e4","isCanonical": true},":rat:":{"unicode":["1f400"],"fname":"1f400","uc":"1f400","isCanonical": true},":mouse2:":{"unicode":["1f401"],"fname":"1f401","uc":"1f401","isCanonical": true},":ox:":{"unicode":["1f402"],"fname":"1f402","uc":"1f402","isCanonical": true},":water_buffalo:":{"unicode":["1f403"],"fname":"1f403","uc":"1f403","isCanonical": true},":cow2:":{"unicode":["1f404"],"fname":"1f404","uc":"1f404","isCanonical": true},":tiger2:":{"unicode":["1f405"],"fname":"1f405","uc":"1f405","isCanonical": true},":leopard:":{"unicode":["1f406"],"fname":"1f406","uc":"1f406","isCanonical": true},":rabbit2:":{"unicode":["1f407"],"fname":"1f407","uc":"1f407","isCanonical": true},":cat2:":{"unicode":["1f408"],"fname":"1f408","uc":"1f408","isCanonical": true},":dragon:":{"unicode":["1f409"],"fname":"1f409","uc":"1f409","isCanonical": true},":crocodile:":{"unicode":["1f40a"],"fname":"1f40a","uc":"1f40a","isCanonical": true},":whale2:":{"unicode":["1f40b"],"fname":"1f40b","uc":"1f40b","isCanonical": true},":ram:":{"unicode":["1f40f"],"fname":"1f40f","uc":"1f40f","isCanonical": true},":goat:":{"unicode":["1f410"],"fname":"1f410","uc":"1f410","isCanonical": true},":rooster:":{"unicode":["1f413"],"fname":"1f413","uc":"1f413","isCanonical": true},":dog2:":{"unicode":["1f415"],"fname":"1f415","uc":"1f415","isCanonical": true},":pig2:":{"unicode":["1f416"],"fname":"1f416","uc":"1f416","isCanonical": true},":dromedary_camel:":{"unicode":["1f42a"],"fname":"1f42a","uc":"1f42a","isCanonical": true},":busts_in_silhouette:":{"unicode":["1f465"],"fname":"1f465","uc":"1f465","isCanonical": true},":two_men_holding_hands:":{"unicode":["1f46c"],"fname":"1f46c","uc":"1f46c","isCanonical": true},":two_women_holding_hands:":{"unicode":["1f46d"],"fname":"1f46d","uc":"1f46d","isCanonical": true},":thought_balloon:":{"unicode":["1f4ad"],"fname":"1f4ad","uc":"1f4ad","isCanonical": true},":euro:":{"unicode":["1f4b6"],"fname":"1f4b6","uc":"1f4b6","isCanonical": true},":pound:":{"unicode":["1f4b7"],"fname":"1f4b7","uc":"1f4b7","isCanonical": true},":mailbox_with_mail:":{"unicode":["1f4ec"],"fname":"1f4ec","uc":"1f4ec","isCanonical": true},":mailbox_with_no_mail:":{"unicode":["1f4ed"],"fname":"1f4ed","uc":"1f4ed","isCanonical": true},":postal_horn:":{"unicode":["1f4ef"],"fname":"1f4ef","uc":"1f4ef","isCanonical": true},":no_mobile_phones:":{"unicode":["1f4f5"],"fname":"1f4f5","uc":"1f4f5","isCanonical": true},":twisted_rightwards_arrows:":{"unicode":["1f500"],"fname":"1f500","uc":"1f500","isCanonical": true},":repeat:":{"unicode":["1f501"],"fname":"1f501","uc":"1f501","isCanonical": true},":repeat_one:":{"unicode":["1f502"],"fname":"1f502","uc":"1f502","isCanonical": true},":arrows_counterclockwise:":{"unicode":["1f504"],"fname":"1f504","uc":"1f504","isCanonical": true},":low_brightness:":{"unicode":["1f505"],"fname":"1f505","uc":"1f505","isCanonical": true},":high_brightness:":{"unicode":["1f506"],"fname":"1f506","uc":"1f506","isCanonical": true},":mute:":{"unicode":["1f507"],"fname":"1f507","uc":"1f507","isCanonical": true},":sound:":{"unicode":["1f509"],"fname":"1f509","uc":"1f509","isCanonical": true},":no_bell:":{"unicode":["1f515"],"fname":"1f515","uc":"1f515","isCanonical": true},":microscope:":{"unicode":["1f52c"],"fname":"1f52c","uc":"1f52c","isCanonical": true},":telescope:":{"unicode":["1f52d"],"fname":"1f52d","uc":"1f52d","isCanonical": true},":clock130:":{"unicode":["1f55c"],"fname":"1f55c","uc":"1f55c","isCanonical": true},":clock230:":{"unicode":["1f55d"],"fname":"1f55d","uc":"1f55d","isCanonical": true},":clock330:":{"unicode":["1f55e"],"fname":"1f55e","uc":"1f55e","isCanonical": true},":clock430:":{"unicode":["1f55f"],"fname":"1f55f","uc":"1f55f","isCanonical": true},":clock530:":{"unicode":["1f560"],"fname":"1f560","uc":"1f560","isCanonical": true},":clock630:":{"unicode":["1f561"],"fname":"1f561","uc":"1f561","isCanonical": true},":clock730:":{"unicode":["1f562"],"fname":"1f562","uc":"1f562","isCanonical": true},":clock830:":{"unicode":["1f563"],"fname":"1f563","uc":"1f563","isCanonical": true},":clock930:":{"unicode":["1f564"],"fname":"1f564","uc":"1f564","isCanonical": true},":clock1030:":{"unicode":["1f565"],"fname":"1f565","uc":"1f565","isCanonical": true},":clock1130:":{"unicode":["1f566"],"fname":"1f566","uc":"1f566","isCanonical": true},":clock1230:":{"unicode":["1f567"],"fname":"1f567","uc":"1f567","isCanonical": true},":speaker:":{"unicode":["1f508"],"fname":"1f508","uc":"1f508","isCanonical": true},":train:":{"unicode":["1f68b"],"fname":"1f68b","uc":"1f68b","isCanonical": true},":medal:":{"unicode":["1f3c5"],"fname":"1f3c5","uc":"1f3c5","isCanonical": true},":sports_medal:":{"unicode":["1f3c5"],"fname":"1f3c5","uc":"1f3c5","isCanonical": false},":flag_black:":{"unicode":["1f3f4"],"fname":"1f3f4","uc":"1f3f4","isCanonical": true},":waving_black_flag:":{"unicode":["1f3f4"],"fname":"1f3f4","uc":"1f3f4","isCanonical": false},":camera_with_flash:":{"unicode":["1f4f8"],"fname":"1f4f8","uc":"1f4f8","isCanonical": true},":sleeping_accommodation:":{"unicode":["1f6cc"],"fname":"1f6cc","uc":"1f6cc","isCanonical": true},":middle_finger:":{"unicode":["1f595"],"fname":"1f595","uc":"1f595","isCanonical": true},":reversed_hand_with_middle_finger_extended:":{"unicode":["1f595"],"fname":"1f595","uc":"1f595","isCanonical": false},":vulcan:":{"unicode":["1f596"],"fname":"1f596","uc":"1f596","isCanonical": true},":raised_hand_with_part_between_middle_and_ring_fingers:":{"unicode":["1f596"],"fname":"1f596","uc":"1f596","isCanonical": false},":slight_frown:":{"unicode":["1f641"],"fname":"1f641","uc":"1f641","isCanonical": true},":slightly_frowning_face:":{"unicode":["1f641"],"fname":"1f641","uc":"1f641","isCanonical": false},":slight_smile:":{"unicode":["1f642"],"fname":"1f642","uc":"1f642","isCanonical": true},":slightly_smiling_face:":{"unicode":["1f642"],"fname":"1f642","uc":"1f642","isCanonical": false},":airplane_departure:":{"unicode":["1f6eb"],"fname":"1f6eb","uc":"1f6eb","isCanonical": true},":airplane_arriving:":{"unicode":["1f6ec"],"fname":"1f6ec","uc":"1f6ec","isCanonical": true},":tone1:":{"unicode":["1f3fb"],"fname":"1f3fb","uc":"1f3fb","isCanonical": true},":tone2:":{"unicode":["1f3fc"],"fname":"1f3fc","uc":"1f3fc","isCanonical": true},":tone3:":{"unicode":["1f3fd"],"fname":"1f3fd","uc":"1f3fd","isCanonical": true},":tone4:":{"unicode":["1f3fe"],"fname":"1f3fe","uc":"1f3fe","isCanonical": true},":tone5:":{"unicode":["1f3ff"],"fname":"1f3ff","uc":"1f3ff","isCanonical": true},":upside_down:":{"unicode":["1f643"],"fname":"1f643","uc":"1f643","isCanonical": true},":upside_down_face:":{"unicode":["1f643"],"fname":"1f643","uc":"1f643","isCanonical": false},":money_mouth:":{"unicode":["1f911"],"fname":"1f911","uc":"1f911","isCanonical": true},":money_mouth_face:":{"unicode":["1f911"],"fname":"1f911","uc":"1f911","isCanonical": false},":nerd:":{"unicode":["1f913"],"fname":"1f913","uc":"1f913","isCanonical": true},":nerd_face:":{"unicode":["1f913"],"fname":"1f913","uc":"1f913","isCanonical": false},":hugging:":{"unicode":["1f917"],"fname":"1f917","uc":"1f917","isCanonical": true},":hugging_face:":{"unicode":["1f917"],"fname":"1f917","uc":"1f917","isCanonical": false},":rolling_eyes:":{"unicode":["1f644"],"fname":"1f644","uc":"1f644","isCanonical": true},":face_with_rolling_eyes:":{"unicode":["1f644"],"fname":"1f644","uc":"1f644","isCanonical": false},":thinking:":{"unicode":["1f914"],"fname":"1f914","uc":"1f914","isCanonical": true},":thinking_face:":{"unicode":["1f914"],"fname":"1f914","uc":"1f914","isCanonical": false},":zipper_mouth:":{"unicode":["1f910"],"fname":"1f910","uc":"1f910","isCanonical": true},":zipper_mouth_face:":{"unicode":["1f910"],"fname":"1f910","uc":"1f910","isCanonical": false},":thermometer_face:":{"unicode":["1f912"],"fname":"1f912","uc":"1f912","isCanonical": true},":face_with_thermometer:":{"unicode":["1f912"],"fname":"1f912","uc":"1f912","isCanonical": false},":head_bandage:":{"unicode":["1f915"],"fname":"1f915","uc":"1f915","isCanonical": true},":face_with_head_bandage:":{"unicode":["1f915"],"fname":"1f915","uc":"1f915","isCanonical": false},":robot:":{"unicode":["1f916"],"fname":"1f916","uc":"1f916","isCanonical": true},":robot_face:":{"unicode":["1f916"],"fname":"1f916","uc":"1f916","isCanonical": false},":lion_face:":{"unicode":["1f981"],"fname":"1f981","uc":"1f981","isCanonical": true},":lion:":{"unicode":["1f981"],"fname":"1f981","uc":"1f981","isCanonical": false},":unicorn:":{"unicode":["1f984"],"fname":"1f984","uc":"1f984","isCanonical": true},":unicorn_face:":{"unicode":["1f984"],"fname":"1f984","uc":"1f984","isCanonical": false},":scorpion:":{"unicode":["1f982"],"fname":"1f982","uc":"1f982","isCanonical": true},":crab:":{"unicode":["1f980"],"fname":"1f980","uc":"1f980","isCanonical": true},":turkey:":{"unicode":["1f983"],"fname":"1f983","uc":"1f983","isCanonical": true},":cheese:":{"unicode":["1f9c0"],"fname":"1f9c0","uc":"1f9c0","isCanonical": true},":cheese_wedge:":{"unicode":["1f9c0"],"fname":"1f9c0","uc":"1f9c0","isCanonical": false},":hotdog:":{"unicode":["1f32d"],"fname":"1f32d","uc":"1f32d","isCanonical": true},":hot_dog:":{"unicode":["1f32d"],"fname":"1f32d","uc":"1f32d","isCanonical": false},":taco:":{"unicode":["1f32e"],"fname":"1f32e","uc":"1f32e","isCanonical": true},":burrito:":{"unicode":["1f32f"],"fname":"1f32f","uc":"1f32f","isCanonical": true},":popcorn:":{"unicode":["1f37f"],"fname":"1f37f","uc":"1f37f","isCanonical": true},":champagne:":{"unicode":["1f37e"],"fname":"1f37e","uc":"1f37e","isCanonical": true},":bottle_with_popping_cork:":{"unicode":["1f37e"],"fname":"1f37e","uc":"1f37e","isCanonical": false},":bow_and_arrow:":{"unicode":["1f3f9"],"fname":"1f3f9","uc":"1f3f9","isCanonical": true},":archery:":{"unicode":["1f3f9"],"fname":"1f3f9","uc":"1f3f9","isCanonical": false},":amphora:":{"unicode":["1f3fa"],"fname":"1f3fa","uc":"1f3fa","isCanonical": true},":place_of_worship:":{"unicode":["1f6d0"],"fname":"1f6d0","uc":"1f6d0","isCanonical": true},":worship_symbol:":{"unicode":["1f6d0"],"fname":"1f6d0","uc":"1f6d0","isCanonical": false},":kaaba:":{"unicode":["1f54b"],"fname":"1f54b","uc":"1f54b","isCanonical": true},":mosque:":{"unicode":["1f54c"],"fname":"1f54c","uc":"1f54c","isCanonical": true},":synagogue:":{"unicode":["1f54d"],"fname":"1f54d","uc":"1f54d","isCanonical": true},":menorah:":{"unicode":["1f54e"],"fname":"1f54e","uc":"1f54e","isCanonical": true},":prayer_beads:":{"unicode":["1f4ff"],"fname":"1f4ff","uc":"1f4ff","isCanonical": true},":cricket:":{"unicode":["1f3cf"],"fname":"1f3cf","uc":"1f3cf","isCanonical": true},":cricket_bat_ball:":{"unicode":["1f3cf"],"fname":"1f3cf","uc":"1f3cf","isCanonical": false},":volleyball:":{"unicode":["1f3d0"],"fname":"1f3d0","uc":"1f3d0","isCanonical": true},":field_hockey:":{"unicode":["1f3d1"],"fname":"1f3d1","uc":"1f3d1","isCanonical": true},":hockey:":{"unicode":["1f3d2"],"fname":"1f3d2","uc":"1f3d2","isCanonical": true},":ping_pong:":{"unicode":["1f3d3"],"fname":"1f3d3","uc":"1f3d3","isCanonical": true},":table_tennis:":{"unicode":["1f3d3"],"fname":"1f3d3","uc":"1f3d3","isCanonical": false},":badminton:":{"unicode":["1f3f8"],"fname":"1f3f8","uc":"1f3f8","isCanonical": true},":drum:":{"unicode":["1f941"],"fname":"1f941","uc":"1f941","isCanonical": true},":drum_with_drumsticks:":{"unicode":["1f941"],"fname":"1f941","uc":"1f941","isCanonical": false},":shrimp:":{"unicode":["1f990"],"fname":"1f990","uc":"1f990","isCanonical": true},":squid:":{"unicode":["1f991"],"fname":"1f991","uc":"1f991","isCanonical": true},":egg:":{"unicode":["1f95a"],"fname":"1f95a","uc":"1f95a","isCanonical": true},":milk:":{"unicode":["1f95b"],"fname":"1f95b","uc":"1f95b","isCanonical": true},":glass_of_milk:":{"unicode":["1f95b"],"fname":"1f95b","uc":"1f95b","isCanonical": false},":peanuts:":{"unicode":["1f95c"],"fname":"1f95c","uc":"1f95c","isCanonical": true},":shelled_peanut:":{"unicode":["1f95c"],"fname":"1f95c","uc":"1f95c","isCanonical": false},":kiwi:":{"unicode":["1f95d"],"fname":"1f95d","uc":"1f95d","isCanonical": true},":kiwifruit:":{"unicode":["1f95d"],"fname":"1f95d","uc":"1f95d","isCanonical": false},":pancakes:":{"unicode":["1f95e"],"fname":"1f95e","uc":"1f95e","isCanonical": true},":regional_indicator_w:":{"unicode":["1f1fc"],"fname":"1f1fc","uc":"1f1fc","isCanonical": true},":regional_indicator_v:":{"unicode":["1f1fb"],"fname":"1f1fb","uc":"1f1fb","isCanonical": true},":regional_indicator_u:":{"unicode":["1f1fa"],"fname":"1f1fa","uc":"1f1fa","isCanonical": true},":regional_indicator_t:":{"unicode":["1f1f9"],"fname":"1f1f9","uc":"1f1f9","isCanonical": true},":regional_indicator_s:":{"unicode":["1f1f8"],"fname":"1f1f8","uc":"1f1f8","isCanonical": true},":regional_indicator_r:":{"unicode":["1f1f7"],"fname":"1f1f7","uc":"1f1f7","isCanonical": true},":regional_indicator_q:":{"unicode":["1f1f6"],"fname":"1f1f6","uc":"1f1f6","isCanonical": true},":regional_indicator_p:":{"unicode":["1f1f5"],"fname":"1f1f5","uc":"1f1f5","isCanonical": true},":regional_indicator_o:":{"unicode":["1f1f4"],"fname":"1f1f4","uc":"1f1f4","isCanonical": true},":regional_indicator_n:":{"unicode":["1f1f3"],"fname":"1f1f3","uc":"1f1f3","isCanonical": true},":regional_indicator_m:":{"unicode":["1f1f2"],"fname":"1f1f2","uc":"1f1f2","isCanonical": true},":regional_indicator_l:":{"unicode":["1f1f1"],"fname":"1f1f1","uc":"1f1f1","isCanonical": true},":regional_indicator_k:":{"unicode":["1f1f0"],"fname":"1f1f0","uc":"1f1f0","isCanonical": true},":regional_indicator_j:":{"unicode":["1f1ef"],"fname":"1f1ef","uc":"1f1ef","isCanonical": true},":regional_indicator_i:":{"unicode":["1f1ee"],"fname":"1f1ee","uc":"1f1ee","isCanonical": true},":regional_indicator_h:":{"unicode":["1f1ed"],"fname":"1f1ed","uc":"1f1ed","isCanonical": true},":regional_indicator_g:":{"unicode":["1f1ec"],"fname":"1f1ec","uc":"1f1ec","isCanonical": true},":regional_indicator_f:":{"unicode":["1f1eb"],"fname":"1f1eb","uc":"1f1eb","isCanonical": true},":regional_indicator_e:":{"unicode":["1f1ea"],"fname":"1f1ea","uc":"1f1ea","isCanonical": true},":regional_indicator_d:":{"unicode":["1f1e9"],"fname":"1f1e9","uc":"1f1e9","isCanonical": true},":regional_indicator_c:":{"unicode":["1f1e8"],"fname":"1f1e8","uc":"1f1e8","isCanonical": true},":regional_indicator_b:":{"unicode":["1f1e7"],"fname":"1f1e7","uc":"1f1e7","isCanonical": true},":regional_indicator_a:":{"unicode":["1f1e6"],"fname":"1f1e6","uc":"1f1e6","isCanonical": true},":fast_forward:":{"unicode":["23e9"],"fname":"23e9","uc":"23e9","isCanonical": true},":rewind:":{"unicode":["23ea"],"fname":"23ea","uc":"23ea","isCanonical": true},":arrow_double_up:":{"unicode":["23eb"],"fname":"23eb","uc":"23eb","isCanonical": true},":arrow_double_down:":{"unicode":["23ec"],"fname":"23ec","uc":"23ec","isCanonical": true},":alarm_clock:":{"unicode":["23f0"],"fname":"23f0","uc":"23f0","isCanonical": true},":hourglass_flowing_sand:":{"unicode":["23f3"],"fname":"23f3","uc":"23f3","isCanonical": true},":ophiuchus:":{"unicode":["26ce"],"fname":"26ce","uc":"26ce","isCanonical": true},":white_check_mark:":{"unicode":["2705"],"fname":"2705","uc":"2705","isCanonical": true},":fist:":{"unicode":["270a"],"fname":"270a","uc":"270a","isCanonical": true},":raised_hand:":{"unicode":["270b"],"fname":"270b","uc":"270b","isCanonical": true},":sparkles:":{"unicode":["2728"],"fname":"2728","uc":"2728","isCanonical": true},":x:":{"unicode":["274c"],"fname":"274c","uc":"274c","isCanonical": true},":negative_squared_cross_mark:":{"unicode":["274e"],"fname":"274e","uc":"274e","isCanonical": true},":question:":{"unicode":["2753"],"fname":"2753","uc":"2753","isCanonical": true},":grey_question:":{"unicode":["2754"],"fname":"2754","uc":"2754","isCanonical": true},":grey_exclamation:":{"unicode":["2755"],"fname":"2755","uc":"2755","isCanonical": true},":heavy_plus_sign:":{"unicode":["2795"],"fname":"2795","uc":"2795","isCanonical": true},":heavy_minus_sign:":{"unicode":["2796"],"fname":"2796","uc":"2796","isCanonical": true},":heavy_division_sign:":{"unicode":["2797"],"fname":"2797","uc":"2797","isCanonical": true},":curly_loop:":{"unicode":["27b0"],"fname":"27b0","uc":"27b0","isCanonical": true},":loop:":{"unicode":["27bf"],"fname":"27bf","uc":"27bf","isCanonical": true}};
    // ns.shortnames = Object.keys(ns.emojioneList).map(function(emoji) {
    //     return emoji.replace(/[+]/g, "\\$&");
    // }).join('|');
    var tmpShortNames = [],
        emoji;
    for (emoji in ns.emojioneList) {
        if (!ns.emojioneList.hasOwnProperty(emoji)) continue;
        tmpShortNames.push(emoji.replace(/[+]/g, "\\$&"));
    }
    ns.shortnames = tmpShortNames.join('|');
    ns.asciiList = {
        '<3':'2764',
        '</3':'1f494',
        ':\')':'1f602',
        ':\'-)':'1f602',
        ':D':'1f603',
        ':-D':'1f603',
        '=D':'1f603',
        ':)':'1f642',
        ':-)':'1f642',
        '=]':'1f642',
        '=)':'1f642',
        ':]':'1f642',
        '\':)':'1f605',
        '\':-)':'1f605',
        '\'=)':'1f605',
        '\':D':'1f605',
        '\':-D':'1f605',
        '\'=D':'1f605',
        '>:)':'1f606',
        '>;)':'1f606',
        '>:-)':'1f606',
        '>=)':'1f606',
        ';)':'1f609',
        ';-)':'1f609',
        '*-)':'1f609',
        '*)':'1f609',
        ';-]':'1f609',
        ';]':'1f609',
        ';D':'1f609',
        ';^)':'1f609',
        '\':(':'1f613',
        '\':-(':'1f613',
        '\'=(':'1f613',
        ':*':'1f618',
        ':-*':'1f618',
        '=*':'1f618',
        ':^*':'1f618',
        '>:P':'1f61c',
        'X-P':'1f61c',
        'x-p':'1f61c',
        '>:[':'1f61e',
        ':-(':'1f61e',
        ':(':'1f61e',
        ':-[':'1f61e',
        ':[':'1f61e',
        '=(':'1f61e',
        '>:(':'1f620',
        '>:-(':'1f620',
        ':@':'1f620',
        ':\'(':'1f622',
        ':\'-(':'1f622',
        ';(':'1f622',
        ';-(':'1f622',
        '>.<':'1f623',
        'D:':'1f628',
        ':$':'1f633',
        '=$':'1f633',
        '#-)':'1f635',
        '#)':'1f635',
        '%-)':'1f635',
        '%)':'1f635',
        'X)':'1f635',
        'X-)':'1f635',
        '*\\0/*':'1f646',
        '\\0/':'1f646',
        '*\\O/*':'1f646',
        '\\O/':'1f646',
        'O:-)':'1f607',
        '0:-3':'1f607',
        '0:3':'1f607',
        '0:-)':'1f607',
        '0:)':'1f607',
        '0;^)':'1f607',
        'O:)':'1f607',
        'O;-)':'1f607',
        'O=)':'1f607',
        '0;-)':'1f607',
        'O:-3':'1f607',
        'O:3':'1f607',
        'B-)':'1f60e',
        'B)':'1f60e',
        '8)':'1f60e',
        '8-)':'1f60e',
        'B-D':'1f60e',
        '8-D':'1f60e',
        '-_-':'1f611',
        '-__-':'1f611',
        '-___-':'1f611',
        '>:\\':'1f615',
        '>:/':'1f615',
        ':-/':'1f615',
        ':-.':'1f615',
        ':/':'1f615',
        ':\\':'1f615',
        '=/':'1f615',
        '=\\':'1f615',
        ':L':'1f615',
        '=L':'1f615',
        ':P':'1f61b',
        ':-P':'1f61b',
        '=P':'1f61b',
        ':-p':'1f61b',
        ':p':'1f61b',
        '=p':'1f61b',
        ':-Þ':'1f61b',
        ':Þ':'1f61b',
        ':þ':'1f61b',
        ':-þ':'1f61b',
        ':-b':'1f61b',
        ':b':'1f61b',
        'd:':'1f61b',
        ':-O':'1f62e',
        ':O':'1f62e',
        ':-o':'1f62e',
        ':o':'1f62e',
        'O_O':'1f62e',
        '>:O':'1f62e',
        ':-X':'1f636',
        ':X':'1f636',
        ':-#':'1f636',
        ':#':'1f636',
        '=X':'1f636',
        '=x':'1f636',
        ':x':'1f636',
        ':-x':'1f636',
        '=#':'1f636'
    };
    ns.asciiRegexp = '(\\<3|&lt;3|\\<\\/3|&lt;\\/3|\\:\'\\)|\\:\'\\-\\)|\\:D|\\:\\-D|\\=D|\\:\\)|\\:\\-\\)|\\=\\]|\\=\\)|\\:\\]|\'\\:\\)|\'\\:\\-\\)|\'\\=\\)|\'\\:D|\'\\:\\-D|\'\\=D|\\>\\:\\)|&gt;\\:\\)|\\>;\\)|&gt;;\\)|\\>\\:\\-\\)|&gt;\\:\\-\\)|\\>\\=\\)|&gt;\\=\\)|;\\)|;\\-\\)|\\*\\-\\)|\\*\\)|;\\-\\]|;\\]|;D|;\\^\\)|\'\\:\\(|\'\\:\\-\\(|\'\\=\\(|\\:\\*|\\:\\-\\*|\\=\\*|\\:\\^\\*|\\>\\:P|&gt;\\:P|X\\-P|x\\-p|\\>\\:\\[|&gt;\\:\\[|\\:\\-\\(|\\:\\(|\\:\\-\\[|\\:\\[|\\=\\(|\\>\\:\\(|&gt;\\:\\(|\\>\\:\\-\\(|&gt;\\:\\-\\(|\\:@|\\:\'\\(|\\:\'\\-\\(|;\\(|;\\-\\(|\\>\\.\\<|&gt;\\.&lt;|D\\:|\\:\\$|\\=\\$|#\\-\\)|#\\)|%\\-\\)|%\\)|X\\)|X\\-\\)|\\*\\\\0\\/\\*|\\\\0\\/|\\*\\\\O\\/\\*|\\\\O\\/|O\\:\\-\\)|0\\:\\-3|0\\:3|0\\:\\-\\)|0\\:\\)|0;\\^\\)|O\\:\\-\\)|O\\:\\)|O;\\-\\)|O\\=\\)|0;\\-\\)|O\\:\\-3|O\\:3|B\\-\\)|B\\)|8\\)|8\\-\\)|B\\-D|8\\-D|\\-_\\-|\\-__\\-|\\-___\\-|\\>\\:\\\\|&gt;\\:\\\\|\\>\\:\\/|&gt;\\:\\/|\\:\\-\\/|\\:\\-\\.|\\:\\/|\\:\\\\|\\=\\/|\\=\\\\|\\:L|\\=L|\\:P|\\:\\-P|\\=P|\\:\\-p|\\:p|\\=p|\\:\\-Þ|\\:\\-&THORN;|\\:Þ|\\:&THORN;|\\:þ|\\:&thorn;|\\:\\-þ|\\:\\-&thorn;|\\:\\-b|\\:b|d\\:|\\:\\-O|\\:O|\\:\\-o|\\:o|O_O|\\>\\:O|&gt;\\:O|\\:\\-X|\\:X|\\:\\-#|\\:#|\\=X|\\=x|\\:x|\\:\\-x|\\=#)';
    // javascript escapes here must be ordered from largest length to shortest
    ns.unicodeRegexp = '(\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC8B\\u200D\\uD83D\\uDC68|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC69|\\uD83D\\uDC68\\uD83D\\uDC69\\uD83D\\uDC67\\uD83D\\uDC66|\\uD83D\\uDC68\\uD83D\\uDC69\\uD83D\\uDC66\\uD83D\\uDC66|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC66\\uD83D\\uDC66|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC67\\uD83D\\uDC67|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC67\\uD83D\\uDC66|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC67\\uD83D\\uDC66|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC67\\uD83D\\uDC67|\\uD83D\\uDC68\\uD83D\\uDC69\\uD83D\\uDC67\\uD83D\\uDC67|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC66\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\u2764\\uFE0F\\u200D\\uD83D\\uDC68|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC66|\\uD83D\\uDC69\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC66|\\uD83D\\uDC68\\u200D\\uD83D\\uDC68\\u200D\\uD83D\\uDC67|\\uD83D\\uDC68\\u200D\\uD83D\\uDC69\\u200D\\uD83D\\uDC67|\\uD83D\\uDC69\\u2764\\uD83D\\uDC8B\\uD83D\\uDC69|\\uD83D\\uDC68\\u2764\\uD83D\\uDC8B\\uD83D\\uDC68|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC67|\\uD83D\\uDC68\\uD83D\\uDC68\\uD83D\\uDC66|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC66|\\uD83D\\uDC69\\uD83D\\uDC69\\uD83D\\uDC67|\\uD83C\\uDFF3\\uFE0F\\u200D\\uD83C\\uDF08|\\uD83D\\uDC68\\uD83D\\uDC69\\uD83D\\uDC67|\\uD83D\\uDC68\\u2764\\uD83D\\uDC68|\\uD83D\\uDC41\\u200D\\uD83D\\uDDE8|\\uD83D\\uDC69\\u2764\\uD83D\\uDC69|\\uD83D\\uDC41\\uD83D\\uDDE8|\\uD83C\\uDDE6\\uD83C\\uDDE8|\\uD83C\\uDDE6\\uD83C\\uDDE9|\\uD83C\\uDDE6\\uD83C\\uDDEA|\\uD83C\\uDDE6\\uD83C\\uDDEB|\\uD83C\\uDDE6\\uD83C\\uDDEC|\\uD83C\\uDDE6\\uD83C\\uDDEE|\\uD83C\\uDDE6\\uD83C\\uDDF1|\\uD83C\\uDDE6\\uD83C\\uDDF2|\\uD83C\\uDDE6\\uD83C\\uDDF4|\\uD83C\\uDDE6\\uD83C\\uDDF6|\\uD83C\\uDDE6\\uD83C\\uDDF7|\\uD83C\\uDDE6\\uD83C\\uDDF8|\\uD83E\\uDD3E\\uD83C\\uDFFF|\\uD83E\\uDD3E\\uD83C\\uDFFE|\\uD83E\\uDD3E\\uD83C\\uDFFD|\\uD83E\\uDD3E\\uD83C\\uDFFC|\\uD83E\\uDD3E\\uD83C\\uDFFB|\\uD83E\\uDD3D\\uD83C\\uDFFF|\\uD83E\\uDD3D\\uD83C\\uDFFE|\\uD83E\\uDD3D\\uD83C\\uDFFD|\\uD83E\\uDD3D\\uD83C\\uDFFC|\\uD83E\\uDD3D\\uD83C\\uDFFB|\\uD83E\\uDD3C\\uD83C\\uDFFF|\\uD83E\\uDD3C\\uD83C\\uDFFE|\\uD83E\\uDD3C\\uD83C\\uDFFD|\\uD83E\\uDD3C\\uD83C\\uDFFC|\\uD83E\\uDD3C\\uD83C\\uDFFB|\\uD83E\\uDD39\\uD83C\\uDFFF|\\uD83E\\uDD39\\uD83C\\uDFFE|\\uD83E\\uDD39\\uD83C\\uDFFD|\\uD83E\\uDD39\\uD83C\\uDFFC|\\uD83E\\uDD39\\uD83C\\uDFFB|\\uD83E\\uDD38\\uD83C\\uDFFF|\\uD83E\\uDD38\\uD83C\\uDFFE|\\uD83E\\uDD38\\uD83C\\uDFFD|\\uD83E\\uDD38\\uD83C\\uDFFC|\\uD83E\\uDD38\\uD83C\\uDFFB|\\uD83E\\uDD37\\uD83C\\uDFFF|\\uD83E\\uDD37\\uD83C\\uDFFE|\\uD83E\\uDD37\\uD83C\\uDFFD|\\uD83E\\uDD37\\uD83C\\uDFFC|\\uD83E\\uDD37\\uD83C\\uDFFB|\\uD83E\\uDD36\\uD83C\\uDFFF|\\uD83E\\uDD36\\uD83C\\uDFFE|\\uD83E\\uDD36\\uD83C\\uDFFD|\\uD83E\\uDD36\\uD83C\\uDFFC|\\uD83E\\uDD36\\uD83C\\uDFFB|\\uD83E\\uDD35\\uD83C\\uDFFF|\\uD83E\\uDD35\\uD83C\\uDFFE|\\uD83E\\uDD35\\uD83C\\uDFFD|\\uD83E\\uDD35\\uD83C\\uDFFC|\\uD83E\\uDD35\\uD83C\\uDFFB|\\uD83E\\uDD34\\uD83C\\uDFFF|\\uD83E\\uDD34\\uD83C\\uDFFE|\\uD83E\\uDD34\\uD83C\\uDFFD|\\uD83E\\uDD34\\uD83C\\uDFFC|\\uD83E\\uDD34\\uD83C\\uDFFB|\\uD83E\\uDD33\\uD83C\\uDFFF|\\uD83E\\uDD33\\uD83C\\uDFFE|\\uD83E\\uDD33\\uD83C\\uDFFD|\\uD83E\\uDD33\\uD83C\\uDFFC|\\uD83E\\uDD33\\uD83C\\uDFFB|\\uD83E\\uDD30\\uD83C\\uDFFF|\\uD83E\\uDD30\\uD83C\\uDFFE|\\uD83E\\uDD30\\uD83C\\uDFFD|\\uD83E\\uDD30\\uD83C\\uDFFC|\\uD83E\\uDD30\\uD83C\\uDFFB|\\uD83E\\uDD26\\uD83C\\uDFFF|\\uD83E\\uDD26\\uD83C\\uDFFE|\\uD83E\\uDD26\\uD83C\\uDFFD|\\uD83E\\uDD26\\uD83C\\uDFFC|\\uD83E\\uDD26\\uD83C\\uDFFB|\\uD83E\\uDD1E\\uD83C\\uDFFF|\\uD83E\\uDD1E\\uD83C\\uDFFE|\\uD83E\\uDD1E\\uD83C\\uDFFD|\\uD83E\\uDD1E\\uD83C\\uDFFC|\\uD83E\\uDD1E\\uD83C\\uDFFB|\\uD83E\\uDD1D\\uD83C\\uDFFF|\\uD83E\\uDD1D\\uD83C\\uDFFE|\\uD83E\\uDD1D\\uD83C\\uDFFD|\\uD83E\\uDD1D\\uD83C\\uDFFC|\\uD83E\\uDD1D\\uD83C\\uDFFB|\\uD83E\\uDD1C\\uD83C\\uDFFF|\\uD83E\\uDD1C\\uD83C\\uDFFE|\\uD83E\\uDD1C\\uD83C\\uDFFD|\\uD83E\\uDD1C\\uD83C\\uDFFC|\\uD83E\\uDD1C\\uD83C\\uDFFB|\\uD83E\\uDD1B\\uD83C\\uDFFF|\\uD83E\\uDD1B\\uD83C\\uDFFE|\\uD83E\\uDD1B\\uD83C\\uDFFD|\\uD83E\\uDD1B\\uD83C\\uDFFC|\\uD83E\\uDD1B\\uD83C\\uDFFB|\\uD83E\\uDD1A\\uD83C\\uDFFF|\\uD83E\\uDD1A\\uD83C\\uDFFE|\\uD83E\\uDD1A\\uD83C\\uDFFD|\\uD83E\\uDD1A\\uD83C\\uDFFC|\\uD83E\\uDD1A\\uD83C\\uDFFB|\\uD83E\\uDD19\\uD83C\\uDFFF|\\uD83E\\uDD19\\uD83C\\uDFFE|\\uD83E\\uDD19\\uD83C\\uDFFD|\\uD83E\\uDD19\\uD83C\\uDFFC|\\uD83E\\uDD19\\uD83C\\uDFFB|\\uD83E\\uDD18\\uD83C\\uDFFF|\\uD83E\\uDD18\\uD83C\\uDFFE|\\uD83E\\uDD18\\uD83C\\uDFFD|\\uD83E\\uDD18\\uD83C\\uDFFC|\\uD83E\\uDD18\\uD83C\\uDFFB|\\uD83D\\uDEC0\\uD83C\\uDFFF|\\uD83D\\uDEC0\\uD83C\\uDFFE|\\uD83D\\uDEC0\\uD83C\\uDFFD|\\uD83D\\uDEC0\\uD83C\\uDFFC|\\uD83D\\uDEC0\\uD83C\\uDFFB|\\uD83D\\uDEB6\\uD83C\\uDFFF|\\uD83D\\uDEB6\\uD83C\\uDFFE|\\uD83D\\uDEB6\\uD83C\\uDFFD|\\uD83D\\uDEB6\\uD83C\\uDFFC|\\uD83D\\uDEB6\\uD83C\\uDFFB|\\uD83D\\uDEB5\\uD83C\\uDFFF|\\uD83D\\uDEB5\\uD83C\\uDFFE|\\uD83D\\uDEB5\\uD83C\\uDFFD|\\uD83D\\uDEB5\\uD83C\\uDFFC|\\uD83D\\uDEB5\\uD83C\\uDFFB|\\uD83D\\uDEB4\\uD83C\\uDFFF|\\uD83D\\uDEB4\\uD83C\\uDFFE|\\uD83D\\uDEB4\\uD83C\\uDFFD|\\uD83D\\uDEB4\\uD83C\\uDFFC|\\uD83D\\uDEB4\\uD83C\\uDFFB|\\uD83D\\uDEA3\\uD83C\\uDFFF|\\uD83D\\uDEA3\\uD83C\\uDFFE|\\uD83D\\uDEA3\\uD83C\\uDFFD|\\uD83D\\uDEA3\\uD83C\\uDFFC|\\uD83D\\uDEA3\\uD83C\\uDFFB|\\uD83D\\uDE4F\\uD83C\\uDFFF|\\uD83D\\uDE4F\\uD83C\\uDFFE|\\uD83D\\uDE4F\\uD83C\\uDFFD|\\uD83D\\uDE4F\\uD83C\\uDFFC|\\uD83D\\uDE4F\\uD83C\\uDFFB|\\uD83D\\uDE4E\\uD83C\\uDFFF|\\uD83D\\uDE4E\\uD83C\\uDFFE|\\uD83D\\uDE4E\\uD83C\\uDFFD|\\uD83D\\uDE4E\\uD83C\\uDFFC|\\uD83D\\uDE4E\\uD83C\\uDFFB|\\uD83D\\uDE4D\\uD83C\\uDFFF|\\uD83D\\uDE4D\\uD83C\\uDFFE|\\uD83D\\uDE4D\\uD83C\\uDFFD|\\uD83D\\uDE4D\\uD83C\\uDFFC|\\uD83D\\uDE4D\\uD83C\\uDFFB|\\uD83D\\uDE4C\\uD83C\\uDFFF|\\uD83D\\uDE4C\\uD83C\\uDFFE|\\uD83D\\uDE4C\\uD83C\\uDFFD|\\uD83D\\uDE4C\\uD83C\\uDFFC|\\uD83D\\uDE4C\\uD83C\\uDFFB|\\uD83D\\uDE4B\\uD83C\\uDFFF|\\uD83D\\uDE4B\\uD83C\\uDFFE|\\uD83D\\uDE4B\\uD83C\\uDFFD|\\uD83D\\uDE4B\\uD83C\\uDFFC|\\uD83D\\uDE4B\\uD83C\\uDFFB|\\uD83D\\uDE47\\uD83C\\uDFFF|\\uD83D\\uDE47\\uD83C\\uDFFE|\\uD83D\\uDE47\\uD83C\\uDFFD|\\uD83D\\uDE47\\uD83C\\uDFFC|\\uD83D\\uDE47\\uD83C\\uDFFB|\\uD83D\\uDE46\\uD83C\\uDFFF|\\uD83D\\uDE46\\uD83C\\uDFFE|\\uD83D\\uDE46\\uD83C\\uDFFD|\\uD83D\\uDE46\\uD83C\\uDFFC|\\uD83D\\uDE46\\uD83C\\uDFFB|\\uD83D\\uDE45\\uD83C\\uDFFF|\\uD83D\\uDE45\\uD83C\\uDFFE|\\uD83D\\uDE45\\uD83C\\uDFFD|\\uD83D\\uDE45\\uD83C\\uDFFC|\\uD83D\\uDE45\\uD83C\\uDFFB|\\uD83D\\uDD96\\uD83C\\uDFFF|\\uD83D\\uDD96\\uD83C\\uDFFE|\\uD83D\\uDD96\\uD83C\\uDFFD|\\uD83D\\uDD96\\uD83C\\uDFFC|\\uD83D\\uDD96\\uD83C\\uDFFB|\\uD83D\\uDD95\\uD83C\\uDFFF|\\uD83D\\uDD95\\uD83C\\uDFFE|\\uD83D\\uDD95\\uD83C\\uDFFD|\\uD83D\\uDD95\\uD83C\\uDFFC|\\uD83D\\uDD95\\uD83C\\uDFFB|\\uD83D\\uDD90\\uD83C\\uDFFF|\\uD83D\\uDD90\\uD83C\\uDFFE|\\uD83D\\uDD90\\uD83C\\uDFFD|\\uD83D\\uDD90\\uD83C\\uDFFC|\\uD83D\\uDD90\\uD83C\\uDFFB|\\uD83D\\uDD7A\\uD83C\\uDFFF|\\uD83D\\uDD7A\\uD83C\\uDFFE|\\uD83D\\uDD7A\\uD83C\\uDFFD|\\uD83D\\uDD7A\\uD83C\\uDFFC|\\uD83D\\uDD7A\\uD83C\\uDFFB|\\uD83D\\uDD75\\uD83C\\uDFFF|\\uD83D\\uDD75\\uD83C\\uDFFE|\\uD83D\\uDD75\\uD83C\\uDFFD|\\uD83D\\uDD75\\uD83C\\uDFFC|\\uD83D\\uDD75\\uD83C\\uDFFB|\\uD83D\\uDCAA\\uD83C\\uDFFF|\\uD83D\\uDCAA\\uD83C\\uDFFE|\\uD83D\\uDCAA\\uD83C\\uDFFD|\\uD83D\\uDCAA\\uD83C\\uDFFC|\\uD83D\\uDCAA\\uD83C\\uDFFB|\\uD83D\\uDC87\\uD83C\\uDFFF|\\uD83D\\uDC87\\uD83C\\uDFFE|\\uD83D\\uDC87\\uD83C\\uDFFD|\\uD83D\\uDC87\\uD83C\\uDFFC|\\uD83D\\uDC87\\uD83C\\uDFFB|\\uD83D\\uDC86\\uD83C\\uDFFF|\\uD83D\\uDC86\\uD83C\\uDFFE|\\uD83D\\uDC86\\uD83C\\uDFFD|\\uD83D\\uDC86\\uD83C\\uDFFC|\\uD83D\\uDC86\\uD83C\\uDFFB|\\uD83D\\uDC85\\uD83C\\uDFFF|\\uD83D\\uDC85\\uD83C\\uDFFE|\\uD83D\\uDC85\\uD83C\\uDFFD|\\uD83D\\uDC85\\uD83C\\uDFFC|\\uD83D\\uDC85\\uD83C\\uDFFB|\\uD83D\\uDC83\\uD83C\\uDFFF|\\uD83D\\uDC83\\uD83C\\uDFFE|\\uD83D\\uDC83\\uD83C\\uDFFD|\\uD83D\\uDC83\\uD83C\\uDFFC|\\uD83D\\uDC83\\uD83C\\uDFFB|\\uD83D\\uDC82\\uD83C\\uDFFF|\\uD83D\\uDC82\\uD83C\\uDFFE|\\uD83D\\uDC82\\uD83C\\uDFFD|\\uD83D\\uDC82\\uD83C\\uDFFC|\\uD83D\\uDC82\\uD83C\\uDFFB|\\uD83D\\uDC81\\uD83C\\uDFFF|\\uD83D\\uDC81\\uD83C\\uDFFE|\\uD83D\\uDC81\\uD83C\\uDFFD|\\uD83D\\uDC81\\uD83C\\uDFFC|\\uD83D\\uDC81\\uD83C\\uDFFB|\\uD83D\\uDC7C\\uD83C\\uDFFF|\\uD83D\\uDC7C\\uD83C\\uDFFE|\\uD83D\\uDC7C\\uD83C\\uDFFD|\\uD83D\\uDC7C\\uD83C\\uDFFC|\\uD83D\\uDC7C\\uD83C\\uDFFB|\\uD83D\\uDC78\\uD83C\\uDFFF|\\uD83D\\uDC78\\uD83C\\uDFFE|\\uD83D\\uDC78\\uD83C\\uDFFD|\\uD83D\\uDC78\\uD83C\\uDFFC|\\uD83D\\uDC78\\uD83C\\uDFFB|\\uD83D\\uDC77\\uD83C\\uDFFF|\\uD83D\\uDC77\\uD83C\\uDFFE|\\uD83D\\uDC77\\uD83C\\uDFFD|\\uD83D\\uDC77\\uD83C\\uDFFC|\\uD83D\\uDC77\\uD83C\\uDFFB|\\uD83D\\uDC76\\uD83C\\uDFFF|\\uD83D\\uDC76\\uD83C\\uDFFE|\\uD83D\\uDC76\\uD83C\\uDFFD|\\uD83D\\uDC76\\uD83C\\uDFFC|\\uD83D\\uDC76\\uD83C\\uDFFB|\\uD83D\\uDC75\\uD83C\\uDFFF|\\uD83D\\uDC75\\uD83C\\uDFFE|\\uD83D\\uDC75\\uD83C\\uDFFD|\\uD83D\\uDC75\\uD83C\\uDFFC|\\uD83D\\uDC75\\uD83C\\uDFFB|\\uD83D\\uDC74\\uD83C\\uDFFF|\\uD83D\\uDC74\\uD83C\\uDFFE|\\uD83D\\uDC74\\uD83C\\uDFFD|\\uD83D\\uDC74\\uD83C\\uDFFC|\\uD83D\\uDC74\\uD83C\\uDFFB|\\uD83D\\uDC73\\uD83C\\uDFFF|\\uD83D\\uDC73\\uD83C\\uDFFE|\\uD83D\\uDC73\\uD83C\\uDFFD|\\uD83D\\uDC73\\uD83C\\uDFFC|\\uD83D\\uDC73\\uD83C\\uDFFB|\\uD83D\\uDC72\\uD83C\\uDFFF|\\uD83D\\uDC72\\uD83C\\uDFFE|\\uD83D\\uDC72\\uD83C\\uDFFD|\\uD83D\\uDC72\\uD83C\\uDFFC|\\uD83D\\uDC72\\uD83C\\uDFFB|\\uD83D\\uDC71\\uD83C\\uDFFF|\\uD83D\\uDC71\\uD83C\\uDFFE|\\uD83D\\uDC71\\uD83C\\uDFFD|\\uD83D\\uDC71\\uD83C\\uDFFC|\\uD83D\\uDC71\\uD83C\\uDFFB|\\uD83D\\uDC70\\uD83C\\uDFFF|\\uD83D\\uDC70\\uD83C\\uDFFE|\\uD83D\\uDC70\\uD83C\\uDFFD|\\uD83D\\uDC70\\uD83C\\uDFFC|\\uD83D\\uDC70\\uD83C\\uDFFB|\\uD83D\\uDC6E\\uD83C\\uDFFF|\\uD83D\\uDC6E\\uD83C\\uDFFE|\\uD83D\\uDC6E\\uD83C\\uDFFD|\\uD83D\\uDC6E\\uD83C\\uDFFC|\\uD83D\\uDC6E\\uD83C\\uDFFB|\\uD83D\\uDC69\\uD83C\\uDFFF|\\uD83D\\uDC69\\uD83C\\uDFFE|\\uD83D\\uDC69\\uD83C\\uDFFD|\\uD83D\\uDC69\\uD83C\\uDFFC|\\uD83D\\uDC69\\uD83C\\uDFFB|\\uD83D\\uDC68\\uD83C\\uDFFF|\\uD83D\\uDC68\\uD83C\\uDFFE|\\uD83D\\uDC68\\uD83C\\uDFFD|\\uD83D\\uDC68\\uD83C\\uDFFC|\\uD83D\\uDC68\\uD83C\\uDFFB|\\uD83D\\uDC67\\uD83C\\uDFFF|\\uD83D\\uDC67\\uD83C\\uDFFE|\\uD83D\\uDC67\\uD83C\\uDFFD|\\uD83D\\uDC67\\uD83C\\uDFFC|\\uD83D\\uDC67\\uD83C\\uDFFB|\\uD83D\\uDC66\\uD83C\\uDFFF|\\uD83D\\uDC66\\uD83C\\uDFFE|\\uD83D\\uDC66\\uD83C\\uDFFD|\\uD83D\\uDC66\\uD83C\\uDFFC|\\uD83D\\uDC66\\uD83C\\uDFFB|\\uD83D\\uDC50\\uD83C\\uDFFF|\\uD83D\\uDC50\\uD83C\\uDFFE|\\uD83D\\uDC50\\uD83C\\uDFFD|\\uD83D\\uDC50\\uD83C\\uDFFC|\\uD83D\\uDC50\\uD83C\\uDFFB|\\uD83D\\uDC4F\\uD83C\\uDFFF|\\uD83D\\uDC4F\\uD83C\\uDFFE|\\uD83D\\uDC4F\\uD83C\\uDFFD|\\uD83D\\uDC4F\\uD83C\\uDFFC|\\uD83D\\uDC4F\\uD83C\\uDFFB|\\uD83D\\uDC4E\\uD83C\\uDFFF|\\uD83D\\uDC4E\\uD83C\\uDFFE|\\uD83D\\uDC4E\\uD83C\\uDFFD|\\uD83D\\uDC4E\\uD83C\\uDFFC|\\uD83D\\uDC4E\\uD83C\\uDFFB|\\uD83D\\uDC4D\\uD83C\\uDFFF|\\uD83D\\uDC4D\\uD83C\\uDFFE|\\uD83D\\uDC4D\\uD83C\\uDFFD|\\uD83D\\uDC4D\\uD83C\\uDFFC|\\uD83D\\uDC4D\\uD83C\\uDFFB|\\uD83D\\uDC4C\\uD83C\\uDFFF|\\uD83D\\uDC4C\\uD83C\\uDFFE|\\uD83D\\uDC4C\\uD83C\\uDFFD|\\uD83D\\uDC4C\\uD83C\\uDFFC|\\uD83D\\uDC4C\\uD83C\\uDFFB|\\uD83D\\uDC4B\\uD83C\\uDFFF|\\uD83D\\uDC4B\\uD83C\\uDFFE|\\uD83D\\uDC4B\\uD83C\\uDFFD|\\uD83D\\uDC4B\\uD83C\\uDFFC|\\uD83D\\uDC4B\\uD83C\\uDFFB|\\uD83D\\uDC4A\\uD83C\\uDFFF|\\uD83D\\uDC4A\\uD83C\\uDFFE|\\uD83D\\uDC4A\\uD83C\\uDFFD|\\uD83D\\uDC4A\\uD83C\\uDFFC|\\uD83D\\uDC4A\\uD83C\\uDFFB|\\uD83D\\uDC49\\uD83C\\uDFFF|\\uD83D\\uDC49\\uD83C\\uDFFE|\\uD83D\\uDC49\\uD83C\\uDFFD|\\uD83D\\uDC49\\uD83C\\uDFFC|\\uD83D\\uDC49\\uD83C\\uDFFB|\\uD83D\\uDC48\\uD83C\\uDFFF|\\uD83D\\uDC48\\uD83C\\uDFFE|\\uD83D\\uDC48\\uD83C\\uDFFD|\\uD83D\\uDC48\\uD83C\\uDFFC|\\uD83D\\uDC48\\uD83C\\uDFFB|\\uD83D\\uDC47\\uD83C\\uDFFF|\\uD83D\\uDC47\\uD83C\\uDFFE|\\uD83D\\uDC47\\uD83C\\uDFFD|\\uD83D\\uDC47\\uD83C\\uDFFC|\\uD83D\\uDC47\\uD83C\\uDFFB|\\uD83D\\uDC46\\uD83C\\uDFFF|\\uD83D\\uDC46\\uD83C\\uDFFE|\\uD83D\\uDC46\\uD83C\\uDFFD|\\uD83D\\uDC46\\uD83C\\uDFFC|\\uD83D\\uDC46\\uD83C\\uDFFB|\\uD83D\\uDC43\\uD83C\\uDFFF|\\uD83D\\uDC43\\uD83C\\uDFFE|\\uD83D\\uDC43\\uD83C\\uDFFD|\\uD83D\\uDC43\\uD83C\\uDFFC|\\uD83D\\uDC43\\uD83C\\uDFFB|\\uD83D\\uDC42\\uD83C\\uDFFF|\\uD83D\\uDC42\\uD83C\\uDFFE|\\uD83D\\uDC42\\uD83C\\uDFFD|\\uD83D\\uDC42\\uD83C\\uDFFC|\\uD83D\\uDC42\\uD83C\\uDFFB|\\uD83C\\uDFCB\\uD83C\\uDFFF|\\uD83C\\uDFCB\\uD83C\\uDFFE|\\uD83C\\uDFF3\\uD83C\\uDF08|\\uD83C\\uDFCB\\uD83C\\uDFFC|\\uD83C\\uDFCB\\uD83C\\uDFFB|\\uD83C\\uDFCA\\uD83C\\uDFFF|\\uD83C\\uDFCA\\uD83C\\uDFFE|\\uD83C\\uDFCA\\uD83C\\uDFFD|\\uD83C\\uDFCA\\uD83C\\uDFFC|\\uD83C\\uDFCA\\uD83C\\uDFFB|\\uD83C\\uDFC7\\uD83C\\uDFFF|\\uD83C\\uDFC7\\uD83C\\uDFFE|\\uD83C\\uDFC7\\uD83C\\uDFFD|\\uD83C\\uDFC7\\uD83C\\uDFFC|\\uD83C\\uDFC7\\uD83C\\uDFFB|\\uD83C\\uDFC4\\uD83C\\uDFFF|\\uD83C\\uDFCB\\uD83C\\uDFFD|\\uD83C\\uDFC4\\uD83C\\uDFFD|\\uD83C\\uDFC4\\uD83C\\uDFFC|\\uD83C\\uDFC4\\uD83C\\uDFFB|\\uD83C\\uDFC3\\uD83C\\uDFFF|\\uD83C\\uDFC3\\uD83C\\uDFFE|\\uD83C\\uDFC3\\uD83C\\uDFFD|\\uD83C\\uDFC3\\uD83C\\uDFFC|\\uD83C\\uDFC3\\uD83C\\uDFFB|\\uD83C\\uDF85\\uD83C\\uDFFF|\\uD83C\\uDF85\\uD83C\\uDFFE|\\uD83C\\uDF85\\uD83C\\uDFFD|\\uD83C\\uDF85\\uD83C\\uDFFC|\\uD83C\\uDF85\\uD83C\\uDFFB|\\uD83C\\uDDFF\\uD83C\\uDDFC|\\uD83C\\uDDFF\\uD83C\\uDDF2|\\uD83C\\uDDFF\\uD83C\\uDDE6|\\uD83C\\uDDFE\\uD83C\\uDDF9|\\uD83C\\uDDFE\\uD83C\\uDDEA|\\uD83C\\uDDFD\\uD83C\\uDDF0|\\uD83C\\uDDFC\\uD83C\\uDDF8|\\uD83C\\uDDFC\\uD83C\\uDDEB|\\uD83C\\uDDFB\\uD83C\\uDDFA|\\uD83C\\uDDFB\\uD83C\\uDDF3|\\uD83C\\uDDFB\\uD83C\\uDDEE|\\uD83C\\uDDFB\\uD83C\\uDDEC|\\uD83C\\uDDFB\\uD83C\\uDDEA|\\uD83C\\uDDFB\\uD83C\\uDDE8|\\uD83C\\uDDFB\\uD83C\\uDDE6|\\uD83C\\uDDFA\\uD83C\\uDDFF|\\uD83C\\uDDFA\\uD83C\\uDDFE|\\uD83C\\uDDFA\\uD83C\\uDDF8|\\uD83C\\uDDFA\\uD83C\\uDDF2|\\uD83C\\uDDFA\\uD83C\\uDDEC|\\uD83C\\uDDFA\\uD83C\\uDDE6|\\uD83C\\uDDF9\\uD83C\\uDDFF|\\uD83C\\uDDF9\\uD83C\\uDDFC|\\uD83C\\uDDF9\\uD83C\\uDDFB|\\uD83C\\uDDF9\\uD83C\\uDDF9|\\uD83C\\uDDF9\\uD83C\\uDDF7|\\uD83C\\uDDF9\\uD83C\\uDDF4|\\uD83C\\uDDF9\\uD83C\\uDDF3|\\uD83C\\uDDF9\\uD83C\\uDDF2|\\uD83C\\uDDF9\\uD83C\\uDDF1|\\uD83C\\uDDF9\\uD83C\\uDDF0|\\uD83C\\uDDF9\\uD83C\\uDDEF|\\uD83C\\uDDF9\\uD83C\\uDDED|\\uD83C\\uDDF9\\uD83C\\uDDEC|\\uD83C\\uDDF9\\uD83C\\uDDEB|\\uD83C\\uDDF9\\uD83C\\uDDE9|\\uD83C\\uDDF9\\uD83C\\uDDE8|\\uD83C\\uDDF9\\uD83C\\uDDE6|\\uD83C\\uDDF8\\uD83C\\uDDFF|\\uD83C\\uDDF8\\uD83C\\uDDFE|\\uD83C\\uDDF8\\uD83C\\uDDFD|\\uD83C\\uDDF8\\uD83C\\uDDFB|\\uD83C\\uDDF8\\uD83C\\uDDF9|\\uD83C\\uDDF8\\uD83C\\uDDF8|\\uD83C\\uDDF8\\uD83C\\uDDF7|\\uD83C\\uDDF8\\uD83C\\uDDF4|\\uD83C\\uDDF8\\uD83C\\uDDF3|\\uD83C\\uDDF8\\uD83C\\uDDF2|\\uD83C\\uDDF8\\uD83C\\uDDF1|\\uD83C\\uDDF8\\uD83C\\uDDF0|\\uD83C\\uDDF8\\uD83C\\uDDEF|\\uD83C\\uDDF8\\uD83C\\uDDEE|\\uD83C\\uDDF8\\uD83C\\uDDED|\\uD83C\\uDDF8\\uD83C\\uDDEC|\\uD83C\\uDDF8\\uD83C\\uDDEA|\\uD83C\\uDDF8\\uD83C\\uDDE9|\\uD83C\\uDDF8\\uD83C\\uDDE8|\\uD83C\\uDDF8\\uD83C\\uDDE7|\\uD83C\\uDDF8\\uD83C\\uDDE6|\\uD83C\\uDDF7\\uD83C\\uDDFC|\\uD83C\\uDDF7\\uD83C\\uDDFA|\\uD83C\\uDDF7\\uD83C\\uDDF8|\\uD83C\\uDDF7\\uD83C\\uDDF4|\\uD83C\\uDDF7\\uD83C\\uDDEA|\\uD83C\\uDDF6\\uD83C\\uDDE6|\\uD83C\\uDDF5\\uD83C\\uDDFE|\\uD83C\\uDDF5\\uD83C\\uDDFC|\\uD83C\\uDDF5\\uD83C\\uDDF9|\\uD83C\\uDDF5\\uD83C\\uDDF8|\\uD83C\\uDDF5\\uD83C\\uDDF7|\\uD83C\\uDDF5\\uD83C\\uDDF3|\\uD83C\\uDDF5\\uD83C\\uDDF2|\\uD83C\\uDDF5\\uD83C\\uDDF1|\\uD83C\\uDDF5\\uD83C\\uDDF0|\\uD83C\\uDDF5\\uD83C\\uDDED|\\uD83C\\uDDF5\\uD83C\\uDDEC|\\uD83C\\uDDF5\\uD83C\\uDDEB|\\uD83C\\uDDF5\\uD83C\\uDDEA|\\uD83C\\uDDF5\\uD83C\\uDDE6|\\uD83C\\uDDF4\\uD83C\\uDDF2|\\uD83C\\uDDF3\\uD83C\\uDDFF|\\uD83C\\uDDF3\\uD83C\\uDDFA|\\uD83C\\uDDF3\\uD83C\\uDDF7|\\uD83C\\uDDF3\\uD83C\\uDDF5|\\uD83C\\uDDF3\\uD83C\\uDDF4|\\uD83C\\uDDF3\\uD83C\\uDDF1|\\uD83C\\uDDF3\\uD83C\\uDDEE|\\uD83C\\uDDF3\\uD83C\\uDDEC|\\uD83C\\uDDF3\\uD83C\\uDDEB|\\uD83C\\uDDF3\\uD83C\\uDDEA|\\uD83C\\uDDF3\\uD83C\\uDDE8|\\uD83C\\uDDF3\\uD83C\\uDDE6|\\uD83C\\uDDF2\\uD83C\\uDDFF|\\uD83C\\uDDF2\\uD83C\\uDDFE|\\uD83C\\uDDF2\\uD83C\\uDDFD|\\uD83C\\uDDF2\\uD83C\\uDDFC|\\uD83C\\uDDF2\\uD83C\\uDDFB|\\uD83C\\uDDF2\\uD83C\\uDDFA|\\uD83C\\uDDF2\\uD83C\\uDDF9|\\uD83C\\uDDF2\\uD83C\\uDDF8|\\uD83C\\uDDF2\\uD83C\\uDDF7|\\uD83C\\uDDF2\\uD83C\\uDDF6|\\uD83C\\uDDF2\\uD83C\\uDDF5|\\uD83C\\uDDF2\\uD83C\\uDDF4|\\uD83C\\uDDF2\\uD83C\\uDDF3|\\uD83C\\uDDF2\\uD83C\\uDDF2|\\uD83C\\uDDF2\\uD83C\\uDDF1|\\uD83C\\uDDF2\\uD83C\\uDDF0|\\uD83C\\uDDF2\\uD83C\\uDDED|\\uD83C\\uDDF2\\uD83C\\uDDEC|\\uD83C\\uDDF2\\uD83C\\uDDEB|\\uD83C\\uDDF2\\uD83C\\uDDEA|\\uD83C\\uDDF2\\uD83C\\uDDE9|\\uD83C\\uDDF2\\uD83C\\uDDE8|\\uD83C\\uDDF2\\uD83C\\uDDE6|\\uD83C\\uDDF1\\uD83C\\uDDFE|\\uD83C\\uDDF1\\uD83C\\uDDFB|\\uD83C\\uDDF1\\uD83C\\uDDFA|\\uD83C\\uDDF1\\uD83C\\uDDF9|\\uD83C\\uDDF1\\uD83C\\uDDF8|\\uD83C\\uDDF1\\uD83C\\uDDF7|\\uD83C\\uDDF1\\uD83C\\uDDF0|\\uD83C\\uDDF1\\uD83C\\uDDEE|\\uD83C\\uDDF1\\uD83C\\uDDE8|\\uD83C\\uDDF1\\uD83C\\uDDE7|\\uD83C\\uDDF1\\uD83C\\uDDE6|\\uD83C\\uDDF0\\uD83C\\uDDFF|\\uD83C\\uDDF0\\uD83C\\uDDFE|\\uD83C\\uDDF0\\uD83C\\uDDFC|\\uD83C\\uDDF0\\uD83C\\uDDF7|\\uD83C\\uDDF0\\uD83C\\uDDF5|\\uD83C\\uDDF0\\uD83C\\uDDF3|\\uD83C\\uDDF0\\uD83C\\uDDF2|\\uD83C\\uDDF0\\uD83C\\uDDEE|\\uD83C\\uDDF0\\uD83C\\uDDED|\\uD83C\\uDDF0\\uD83C\\uDDEC|\\uD83C\\uDDF0\\uD83C\\uDDEA|\\uD83C\\uDDEF\\uD83C\\uDDF5|\\uD83C\\uDDEF\\uD83C\\uDDF4|\\uD83C\\uDDEF\\uD83C\\uDDF2|\\uD83C\\uDDEF\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDF9|\\uD83C\\uDDEE\\uD83C\\uDDF8|\\uD83C\\uDDEE\\uD83C\\uDDF7|\\uD83C\\uDDEE\\uD83C\\uDDF6|\\uD83C\\uDDEE\\uD83C\\uDDF4|\\uD83C\\uDDEE\\uD83C\\uDDF3|\\uD83C\\uDDEE\\uD83C\\uDDF2|\\uD83C\\uDDEE\\uD83C\\uDDF1|\\uD83C\\uDDEE\\uD83C\\uDDEA|\\uD83C\\uDDEE\\uD83C\\uDDE9|\\uD83C\\uDDEE\\uD83C\\uDDE8|\\uD83C\\uDDED\\uD83C\\uDDFA|\\uD83C\\uDDED\\uD83C\\uDDF9|\\uD83C\\uDDED\\uD83C\\uDDF7|\\uD83C\\uDDED\\uD83C\\uDDF3|\\uD83C\\uDDED\\uD83C\\uDDF2|\\uD83C\\uDDED\\uD83C\\uDDF0|\\uD83C\\uDDEC\\uD83C\\uDDFE|\\uD83C\\uDDEC\\uD83C\\uDDFC|\\uD83C\\uDDEC\\uD83C\\uDDFA|\\uD83C\\uDDEC\\uD83C\\uDDF9|\\uD83C\\uDDEC\\uD83C\\uDDF8|\\uD83C\\uDDEC\\uD83C\\uDDF7|\\uD83C\\uDDEC\\uD83C\\uDDF6|\\uD83C\\uDDEC\\uD83C\\uDDF5|\\uD83C\\uDDEC\\uD83C\\uDDF3|\\uD83C\\uDDEC\\uD83C\\uDDF2|\\uD83C\\uDDEC\\uD83C\\uDDF1|\\uD83C\\uDDEC\\uD83C\\uDDEE|\\uD83C\\uDDEC\\uD83C\\uDDED|\\uD83C\\uDDEC\\uD83C\\uDDEC|\\uD83C\\uDDEC\\uD83C\\uDDEB|\\uD83C\\uDDEC\\uD83C\\uDDEA|\\uD83C\\uDDEC\\uD83C\\uDDE9|\\uD83C\\uDDEC\\uD83C\\uDDE7|\\uD83C\\uDDEC\\uD83C\\uDDE6|\\uD83C\\uDDEB\\uD83C\\uDDF7|\\uD83C\\uDDEB\\uD83C\\uDDF4|\\uD83C\\uDDEB\\uD83C\\uDDF2|\\uD83C\\uDDEB\\uD83C\\uDDF0|\\uD83C\\uDDEB\\uD83C\\uDDEF|\\uD83C\\uDDEB\\uD83C\\uDDEE|\\uD83C\\uDDEA\\uD83C\\uDDFA|\\uD83C\\uDDEA\\uD83C\\uDDF9|\\uD83C\\uDDEA\\uD83C\\uDDF8|\\uD83C\\uDDEA\\uD83C\\uDDF7|\\uD83C\\uDDEA\\uD83C\\uDDED|\\uD83C\\uDDEA\\uD83C\\uDDEC|\\uD83C\\uDDEA\\uD83C\\uDDEA|\\uD83C\\uDDEA\\uD83C\\uDDE8|\\uD83C\\uDDEA\\uD83C\\uDDE6|\\uD83C\\uDDE9\\uD83C\\uDDFF|\\uD83C\\uDDE9\\uD83C\\uDDF4|\\uD83C\\uDDE9\\uD83C\\uDDF2|\\uD83C\\uDDE9\\uD83C\\uDDF0|\\uD83C\\uDDE9\\uD83C\\uDDEF|\\uD83C\\uDDE9\\uD83C\\uDDEC|\\uD83C\\uDDE9\\uD83C\\uDDEA|\\uD83C\\uDDE8\\uD83C\\uDDFF|\\uD83C\\uDDE8\\uD83C\\uDDFE|\\uD83C\\uDDE8\\uD83C\\uDDFD|\\uD83C\\uDDE8\\uD83C\\uDDFC|\\uD83C\\uDDE8\\uD83C\\uDDFB|\\uD83C\\uDDE8\\uD83C\\uDDFA|\\uD83C\\uDDE8\\uD83C\\uDDF7|\\uD83C\\uDDE8\\uD83C\\uDDF5|\\uD83C\\uDDE8\\uD83C\\uDDF4|\\uD83C\\uDDE8\\uD83C\\uDDF3|\\uD83C\\uDDE8\\uD83C\\uDDF2|\\uD83C\\uDDE8\\uD83C\\uDDF1|\\uD83C\\uDDE8\\uD83C\\uDDF0|\\uD83C\\uDDE8\\uD83C\\uDDEE|\\uD83C\\uDDE8\\uD83C\\uDDED|\\uD83C\\uDDE8\\uD83C\\uDDEC|\\uD83C\\uDDE8\\uD83C\\uDDEB|\\uD83C\\uDDE8\\uD83C\\uDDE9|\\uD83C\\uDDE8\\uD83C\\uDDE8|\\uD83C\\uDDE8\\uD83C\\uDDE6|\\uD83C\\uDDE7\\uD83C\\uDDFF|\\uD83C\\uDDE7\\uD83C\\uDDFE|\\uD83C\\uDDE7\\uD83C\\uDDFC|\\uD83C\\uDDE7\\uD83C\\uDDFB|\\uD83C\\uDDE7\\uD83C\\uDDF9|\\uD83C\\uDDE7\\uD83C\\uDDF8|\\uD83C\\uDDE7\\uD83C\\uDDF7|\\uD83C\\uDDE7\\uD83C\\uDDF6|\\uD83C\\uDDE7\\uD83C\\uDDF4|\\uD83C\\uDDE7\\uD83C\\uDDF3|\\uD83C\\uDDE7\\uD83C\\uDDF2|\\uD83C\\uDDE7\\uD83C\\uDDF1|\\uD83C\\uDDE7\\uD83C\\uDDEF|\\uD83C\\uDDE7\\uD83C\\uDDEE|\\uD83C\\uDDE7\\uD83C\\uDDED|\\uD83C\\uDDE7\\uD83C\\uDDEC|\\uD83C\\uDDE7\\uD83C\\uDDEB|\\uD83C\\uDDE7\\uD83C\\uDDEA|\\uD83C\\uDDE7\\uD83C\\uDDE9|\\uD83C\\uDDE7\\uD83C\\uDDE7|\\uD83C\\uDDE7\\uD83C\\uDDE6|\\uD83C\\uDDE6\\uD83C\\uDDFF|\\uD83C\\uDDE6\\uD83C\\uDDFD|\\uD83C\\uDDE6\\uD83C\\uDDFC|\\uD83C\\uDDE6\\uD83C\\uDDFA|\\uD83C\\uDDE6\\uD83C\\uDDF9|\\uD83C\\uDFC4\\uD83C\\uDFFE|\\uD83D\\uDDE3\\uFE0F|\\u26F9\\uD83C\\uDFFF|\\u26F9\\uD83C\\uDFFE|\\u26F9\\uD83C\\uDFFD|\\u26F9\\uD83C\\uDFFC|\\u26F9\\uD83C\\uDFFB|\\u270D\\uD83C\\uDFFF|\\u270D\\uD83C\\uDFFE|\\u270D\\uD83C\\uDFFD|\\u270D\\uD83C\\uDFFC|\\u270D\\uD83C\\uDFFB|\\uD83C\\uDC04\\uFE0F|\\uD83C\\uDD7F\\uFE0F|\\uD83C\\uDE02\\uFE0F|\\uD83C\\uDE1A\\uFE0F|\\uD83C\\uDE2F\\uFE0F|\\uD83C\\uDE37\\uFE0F|\\uD83C\\uDF9E\\uFE0F|\\uD83C\\uDF9F\\uFE0F|\\uD83C\\uDFCB\\uFE0F|\\uD83C\\uDFCC\\uFE0F|\\uD83C\\uDFCD\\uFE0F|\\uD83C\\uDFCE\\uFE0F|\\uD83C\\uDF96\\uFE0F|\\uD83C\\uDF97\\uFE0F|\\uD83C\\uDF36\\uFE0F|\\uD83C\\uDF27\\uFE0F|\\uD83C\\uDF28\\uFE0F|\\uD83C\\uDF29\\uFE0F|\\uD83C\\uDF2A\\uFE0F|\\uD83C\\uDF2B\\uFE0F|\\uD83C\\uDF2C\\uFE0F|\\uD83D\\uDC3F\\uFE0F|\\uD83D\\uDD77\\uFE0F|\\uD83D\\uDD78\\uFE0F|\\uD83C\\uDF21\\uFE0F|\\uD83C\\uDF99\\uFE0F|\\uD83C\\uDF9A\\uFE0F|\\uD83C\\uDF9B\\uFE0F|\\uD83C\\uDFF3\\uFE0F|\\uD83C\\uDFF5\\uFE0F|\\uD83C\\uDFF7\\uFE0F|\\uD83D\\uDCFD\\uFE0F|\\uD83D\\uDD49\\uFE0F|\\uD83D\\uDD4A\\uFE0F|\\uD83D\\uDD6F\\uFE0F|\\uD83D\\uDD70\\uFE0F|\\uD83D\\uDD73\\uFE0F|\\uD83D\\uDD76\\uFE0F|\\uD83D\\uDD79\\uFE0F|\\uD83D\\uDD87\\uFE0F|\\uD83D\\uDD8A\\uFE0F|\\uD83D\\uDD8B\\uFE0F|\\uD83D\\uDD8C\\uFE0F|\\uD83D\\uDD8D\\uFE0F|\\uD83D\\uDDA5\\uFE0F|\\uD83D\\uDDA8\\uFE0F|\\uD83D\\uDDB2\\uFE0F|\\uD83D\\uDDBC\\uFE0F|\\uD83D\\uDDC2\\uFE0F|\\uD83D\\uDDC3\\uFE0F|\\uD83D\\uDDC4\\uFE0F|\\uD83D\\uDDD1\\uFE0F|\\uD83D\\uDDD2\\uFE0F|\\uD83D\\uDDD3\\uFE0F|\\uD83D\\uDDDC\\uFE0F|\\uD83D\\uDDDD\\uFE0F|\\uD83D\\uDDDE\\uFE0F|\\uD83D\\uDDE1\\uFE0F|\\u270B\\uD83C\\uDFFF|\\uD83D\\uDDE8\\uFE0F|\\uD83D\\uDDEF\\uFE0F|\\uD83D\\uDDF3\\uFE0F|\\uD83D\\uDDFA\\uFE0F|\\uD83D\\uDEE0\\uFE0F|\\uD83D\\uDEE1\\uFE0F|\\uD83D\\uDEE2\\uFE0F|\\uD83D\\uDEF0\\uFE0F|\\uD83C\\uDF7D\\uFE0F|\\uD83D\\uDC41\\uFE0F|\\uD83D\\uDD74\\uFE0F|\\uD83D\\uDD75\\uFE0F|\\uD83D\\uDD90\\uFE0F|\\uD83C\\uDFD4\\uFE0F|\\uD83C\\uDFD5\\uFE0F|\\uD83C\\uDFD6\\uFE0F|\\uD83C\\uDFD7\\uFE0F|\\uD83C\\uDFD8\\uFE0F|\\uD83C\\uDFD9\\uFE0F|\\uD83C\\uDFDA\\uFE0F|\\uD83C\\uDFDB\\uFE0F|\\uD83C\\uDFDC\\uFE0F|\\uD83C\\uDFDD\\uFE0F|\\uD83C\\uDFDE\\uFE0F|\\uD83C\\uDFDF\\uFE0F|\\uD83D\\uDECB\\uFE0F|\\uD83D\\uDECD\\uFE0F|\\uD83D\\uDECE\\uFE0F|\\uD83D\\uDECF\\uFE0F|\\uD83D\\uDEE3\\uFE0F|\\uD83D\\uDEE4\\uFE0F|\\uD83D\\uDEE5\\uFE0F|\\uD83D\\uDEE9\\uFE0F|\\uD83D\\uDEF3\\uFE0F|\\uD83C\\uDF24\\uFE0F|\\uD83C\\uDF25\\uFE0F|\\uD83C\\uDF26\\uFE0F|\\uD83D\\uDDB1\\uFE0F|\\u261D\\uD83C\\uDFFB|\\u261D\\uD83C\\uDFFC|\\u261D\\uD83C\\uDFFD|\\u261D\\uD83C\\uDFFE|\\u261D\\uD83C\\uDFFF|\\u270C\\uD83C\\uDFFB|\\u270C\\uD83C\\uDFFC|\\u270C\\uD83C\\uDFFD|\\u270C\\uD83C\\uDFFE|\\u270C\\uD83C\\uDFFF|\\u270A\\uD83C\\uDFFB|\\u270A\\uD83C\\uDFFC|\\u270A\\uD83C\\uDFFD|\\u270A\\uD83C\\uDFFE|\\u270A\\uD83C\\uDFFF|\\u270B\\uD83C\\uDFFB|\\u270B\\uD83C\\uDFFC|\\u270B\\uD83C\\uDFFD|\\u270B\\uD83C\\uDFFE|\\4\\uFE0F\\u20E3|\\9\\uFE0F\\u20E3|\\0\\uFE0F\\u20E3|\\1\\uFE0F\\u20E3|\\2\\uFE0F\\u20E3|\\3\\uFE0F\\u20E3|\\#\\uFE0F\\u20E3|\\5\\uFE0F\\u20E3|\\6\\uFE0F\\u20E3|\\7\\uFE0F\\u20E3|\\8\\uFE0F\\u20E3|\\*\\uFE0F\\u20E3|\\uD83D\\uDDE1|\\uD83D\\uDD77|\\uD83D\\uDDE3|\\uD83D\\uDEE4|\\uD83D\\uDDE8|\\uD83D\\uDD78|\\uD83D\\uDDEF|\\uD83C\\uDE37|\\uD83D\\uDDF3|\\uD83C\\uDF21|\\uD83D\\uDDFA|\\uD83D\\uDDB1|\\uD83D\\uDEE0|\\uD83C\\uDF99|\\uD83D\\uDEE1|\\uD83C\\uDF9E|\\uD83D\\uDEE2|\\uD83C\\uDF9A|\\uD83D\\uDEF0|\\uD83D\\uDEE3|\\uD83C\\uDF7D|\\uD83C\\uDF9B|\\uD83D\\uDC41|\\uD83C\\uDF9F|\\uD83D\\uDD74|\\uD83C\\uDFF3|\\uD83D\\uDD75|\\uD83D\\uDEF3|\\uD83D\\uDD90|\\uD83C\\uDFF5|\\uD83C\\uDFD4|\\uD83C\\uDFCB|\\uD83C\\uDFD5|\\uD83C\\uDFF7|\\uD83C\\uDFD6|\\uD83D\\uDECF|\\uD83C\\uDFD7|\\uD83D\\uDCFD|\\uD83C\\uDFD8|\\uD83C\\uDFCC|\\uD83C\\uDFD9|\\uD83D\\uDD49|\\uD83C\\uDFDA|\\uD83C\\uDF25|\\uD83C\\uDFDB|\\uD83D\\uDD4A|\\uD83C\\uDFDC|\\uD83C\\uDFCD|\\uD83C\\uDFDD|\\uD83D\\uDD6F|\\uD83C\\uDFDE|\\uD83D\\uDECE|\\uD83C\\uDFDF|\\uD83D\\uDD70|\\uD83D\\uDECB|\\uD83C\\uDFCE|\\uD83D\\uDECD|\\uD83D\\uDD73|\\uD83D\\uDECE|\\uD83D\\uDEE9|\\uD83D\\uDECF|\\uD83D\\uDD76|\\uD83D\\uDEE3|\\uD83C\\uDF96|\\uD83D\\uDEE4|\\uD83D\\uDD79|\\uD83D\\uDEE5|\\uD83D\\uDECD|\\uD83D\\uDEE9|\\uD83D\\uDD87|\\uD83D\\uDEF3|\\uD83C\\uDF97|\\uD83C\\uDF24|\\uD83D\\uDD8A|\\uD83C\\uDF25|\\uD83C\\uDC04|\\uD83C\\uDF26|\\uD83D\\uDD8B|\\uD83D\\uDDB1|\\uD83C\\uDF36|\\uD83D\\uDD8C|\\uD83C\\uDF26|\\uD83D\\uDD8D|\\uD83C\\uDF27|\\uD83D\\uDDA5|\\uD83C\\uDD7F|\\uD83D\\uDDA8|\\uD83C\\uDF28|\\uD83D\\uDDB2|\\uD83D\\uDECB|\\uD83D\\uDDBC|\\uD83C\\uDF29|\\uD83D\\uDDC2|\\uD83C\\uDE02|\\uD83D\\uDDC3|\\uD83C\\uDF2A|\\uD83D\\uDDC4|\\uD83D\\uDEE5|\\uD83D\\uDDD1|\\uD83C\\uDF2B|\\uD83D\\uDDD2|\\uD83C\\uDE1A|\\uD83D\\uDDD3|\\uD83C\\uDF2C|\\uD83D\\uDDDC|\\uD83C\\uDF24|\\uD83D\\uDDDD|\\uD83D\\uDC3F|\\uD83D\\uDDDE|\\u00A9\\uFE0F|\\uD83C\\uDFDF|\\u00AE\\uFE0F|\\uD83C\\uDFDE|\\u203C\\uFE0F|\\uD83C\\uDFDD|\\u2049\\uFE0F|\\uD83C\\uDFDC|\\u2122\\uFE0F|\\uD83C\\uDFDB|\\u2139\\uFE0F|\\uD83C\\uDFDA|\\u2194\\uFE0F|\\uD83C\\uDFD9|\\u2195\\uFE0F|\\uD83C\\uDFD8|\\u2196\\uFE0F|\\uD83C\\uDFD7|\\u2197\\uFE0F|\\uD83C\\uDFD6|\\u2198\\uFE0F|\\uD83C\\uDFD5|\\u2199\\uFE0F|\\uD83C\\uDFD4|\\u21A9\\uFE0F|\\uD83D\\uDD90|\\u21AA\\uFE0F|\\uD83D\\uDD75|\\u231A\\uFE0F|\\uD83D\\uDD74|\\u231B\\uFE0F|\\uD83D\\uDC41|\\u24C2\\uFE0F|\\uD83C\\uDF7D|\\u25AA\\uFE0F|\\uD83D\\uDEF0|\\u25AB\\uFE0F|\\uD83D\\uDEE2|\\u25B6\\uFE0F|\\uD83D\\uDEE1|\\u25C0\\uFE0F|\\uD83D\\uDEE0|\\u25FB\\uFE0F|\\uD83D\\uDDFA|\\u25FC\\uFE0F|\\uD83D\\uDDF3|\\u25FD\\uFE0F|\\uD83D\\uDDEF|\\u25FE\\uFE0F|\\uD83D\\uDDE8|\\u2600\\uFE0F|\\uD83D\\uDDE3|\\u2601\\uFE0F|\\uD83D\\uDDE1|\\u260E\\uFE0F|\\uD83D\\uDDDE|\\u2611\\uFE0F|\\uD83D\\uDDDD|\\u2614\\uFE0F|\\uD83D\\uDDDC|\\u2615\\uFE0F|\\uD83D\\uDDD3|\\u261D\\uFE0F|\\uD83D\\uDDD2|\\u263A\\uFE0F|\\uD83D\\uDDD1|\\u2648\\uFE0F|\\uD83D\\uDDC4|\\u2649\\uFE0F|\\uD83D\\uDDC3|\\u264A\\uFE0F|\\uD83D\\uDDC2|\\u264B\\uFE0F|\\uD83D\\uDDBC|\\u264C\\uFE0F|\\uD83D\\uDDB2|\\u264D\\uFE0F|\\uD83D\\uDDA8|\\u264E\\uFE0F|\\uD83D\\uDDA5|\\u264F\\uFE0F|\\uD83D\\uDD8D|\\u2650\\uFE0F|\\uD83D\\uDD8C|\\u2651\\uFE0F|\\uD83D\\uDD8B|\\u2652\\uFE0F|\\uD83D\\uDD8A|\\u2653\\uFE0F|\\uD83D\\uDD87|\\u2660\\uFE0F|\\uD83D\\uDD79|\\u2663\\uFE0F|\\uD83D\\uDD76|\\u2665\\uFE0F|\\uD83D\\uDD73|\\u2666\\uFE0F|\\uD83D\\uDD70|\\u2668\\uFE0F|\\uD83D\\uDD6F|\\u267B\\uFE0F|\\uD83D\\uDD4A|\\u267F\\uFE0F|\\uD83D\\uDD49|\\u2693\\uFE0F|\\uD83D\\uDCFD|\\u26A0\\uFE0F|\\uD83C\\uDFF7|\\u26A1\\uFE0F|\\uD83C\\uDFF5|\\u26AA\\uFE0F|\\uD83C\\uDFF3|\\u26AB\\uFE0F|\\uD83C\\uDF9B|\\u26BD\\uFE0F|\\uD83C\\uDF9A|\\u26BE\\uFE0F|\\uD83C\\uDF99|\\u26C4\\uFE0F|\\uD83C\\uDF21|\\u26C5\\uFE0F|\\uD83D\\uDD78|\\u26D4\\uFE0F|\\uD83D\\uDD77|\\u26EA\\uFE0F|\\uD83D\\uDC3F|\\uD83C\\uDE2F|\\uD83C\\uDF2C|\\u26F3\\uFE0F|\\uD83C\\uDF2B|\\u26F5\\uFE0F|\\uD83C\\uDF2A|\\u26FA\\uFE0F|\\uD83C\\uDF29|\\u26FD\\uFE0F|\\uD83C\\uDF28|\\u2702\\uFE0F|\\uD83C\\uDF27|\\u2708\\uFE0F|\\uD83C\\uDF36|\\u2709\\uFE0F|\\uD83C\\uDF97|\\u270C\\uFE0F|\\uD83C\\uDF96|\\u270F\\uFE0F|\\uD83C\\uDFCE|\\u2712\\uFE0F|\\uD83C\\uDFCD|\\u2714\\uFE0F|\\uD83C\\uDFCC|\\u2716\\uFE0F|\\uD83C\\uDFCB|\\u2733\\uFE0F|\\uD83C\\uDF9F|\\u2734\\uFE0F|\\uD83C\\uDF9E|\\u2744\\uFE0F|\\uD83C\\uDE37|\\u2747\\uFE0F|\\uD83C\\uDE2F|\\u2757\\uFE0F|\\uD83C\\uDE1A|\\u2764\\uFE0F|\\uD83C\\uDE02|\\u27A1\\uFE0F|\\uD83C\\uDD7F|\\u2934\\uFE0F|\\uD83C\\uDC04|\\u2935\\uFE0F|\\uD83C\\uDDE6|\\u2B05\\uFE0F|\\uD83C\\uDDE7|\\u2B06\\uFE0F|\\uD83C\\uDDE8|\\u2B07\\uFE0F|\\uD83C\\uDDE9|\\u2B1B\\uFE0F|\\uD83C\\uDDEA|\\u2B1C\\uFE0F|\\uD83C\\uDDEB|\\u2B50\\uFE0F|\\uD83C\\uDDEC|\\u2B55\\uFE0F|\\uD83C\\uDDED|\\u3030\\uFE0F|\\uD83C\\uDDEE|\\u303D\\uFE0F|\\uD83C\\uDDEF|\\u3297\\uFE0F|\\uD83C\\uDDF0|\\u3299\\uFE0F|\\uD83C\\uDDF1|\\u271D\\uFE0F|\\uD83C\\uDDF2|\\u2328\\uFE0F|\\uD83C\\uDDF3|\\u270D\\uFE0F|\\uD83C\\uDDF4|\\u23CF\\uFE0F|\\uD83C\\uDDF5|\\u23ED\\uFE0F|\\uD83C\\uDDF6|\\u23EE\\uFE0F|\\uD83C\\uDDF7|\\u23EF\\uFE0F|\\uD83C\\uDDF8|\\u23F1\\uFE0F|\\uD83C\\uDDF9|\\u23F2\\uFE0F|\\uD83C\\uDDFA|\\u23F8\\uFE0F|\\uD83C\\uDDFB|\\u23F9\\uFE0F|\\uD83C\\uDDFC|\\u23FA\\uFE0F|\\uD83E\\uDD5E|\\u2602\\uFE0F|\\uD83E\\uDD5D|\\u2603\\uFE0F|\\uD83E\\uDD5C|\\u2604\\uFE0F|\\uD83E\\uDD5B|\\u2618\\uFE0F|\\uD83E\\uDD5A|\\u2620\\uFE0F|\\uD83E\\uDD91|\\u2622\\uFE0F|\\uD83E\\uDD90|\\u2623\\uFE0F|\\uD83E\\uDD41|\\u2626\\uFE0F|\\uD83C\\uDFF8|\\u262A\\uFE0F|\\uD83C\\uDFD3|\\u262E\\uFE0F|\\uD83C\\uDFD2|\\u262F\\uFE0F|\\uD83C\\uDFD1|\\u2638\\uFE0F|\\uD83C\\uDFD0|\\u2639\\uFE0F|\\uD83C\\uDFCF|\\u2692\\uFE0F|\\uD83D\\uDCFF|\\u2694\\uFE0F|\\uD83D\\uDD4E|\\u2696\\uFE0F|\\uD83D\\uDD4D|\\u2697\\uFE0F|\\uD83D\\uDD4C|\\u2699\\uFE0F|\\uD83D\\uDD4B|\\u269B\\uFE0F|\\uD83D\\uDED0|\\u269C\\uFE0F|\\uD83C\\uDFFA|\\u26B0\\uFE0F|\\uD83C\\uDFF9|\\u26B1\\uFE0F|\\uD83C\\uDF7E|\\u26C8\\uFE0F|\\uD83C\\uDF7F|\\u26CF\\uFE0F|\\uD83C\\uDF2F|\\u26D1\\uFE0F|\\uD83C\\uDF2E|\\u26D3\\uFE0F|\\uD83C\\uDF2D|\\u26E9\\uFE0F|\\uD83E\\uDDC0|\\u26F0\\uFE0F|\\uD83E\\uDD83|\\u26F1\\uFE0F|\\uD83E\\uDD80|\\u26F4\\uFE0F|\\uD83E\\uDD82|\\u26F7\\uFE0F|\\uD83E\\uDD84|\\u26F8\\uFE0F|\\uD83E\\uDD81|\\u26F9\\uFE0F|\\uD83E\\uDD16|\\u2721\\uFE0F|\\uD83E\\uDD15|\\u2763\\uFE0F|\\uD83E\\uDD12|\\uD83E\\uDD49|\\uD83E\\uDD48|\\uD83E\\uDD47|\\uD83E\\uDD3A|\\uD83E\\uDD45|\\uD83E\\uDD3E|\\uD83C\\uDDFF|\\uD83E\\uDD3D|\\uD83E\\uDD4B|\\uD83E\\uDD4A|\\uD83E\\uDD3C|\\uD83E\\uDD39|\\uD83E\\uDD38|\\uD83D\\uDEF6|\\uD83D\\uDEF5|\\uD83D\\uDEF4|\\uD83D\\uDED2|\\uD83C\\uDCCF|\\uD83C\\uDD70|\\uD83C\\uDD71|\\uD83C\\uDD7E|\\uD83D\\uDED1|\\uD83C\\uDD8E|\\uD83C\\uDD91|\\uD83C\\uDDFE|\\uD83C\\uDD92|\\uD83C\\uDD93|\\uD83C\\uDD94|\\uD83C\\uDD95|\\uD83C\\uDD96|\\uD83C\\uDD97|\\uD83C\\uDD98|\\uD83E\\uDD44|\\uD83C\\uDD99|\\uD83C\\uDD9A|\\uD83E\\uDD42|\\uD83E\\uDD43|\\uD83C\\uDE01|\\uD83E\\uDD59|\\uD83C\\uDE32|\\uD83C\\uDE33|\\uD83C\\uDE34|\\uD83C\\uDE35|\\uD83C\\uDE36|\\uD83E\\uDD58|\\uD83C\\uDE38|\\uD83C\\uDE39|\\uD83E\\uDD57|\\uD83C\\uDE3A|\\uD83C\\uDE50|\\uD83C\\uDE51|\\uD83C\\uDF00|\\uD83E\\uDD56|\\uD83C\\uDF01|\\uD83C\\uDF02|\\uD83C\\uDF03|\\uD83C\\uDF04|\\uD83C\\uDF05|\\uD83C\\uDF06|\\uD83E\\uDD55|\\uD83C\\uDF07|\\uD83C\\uDF08|\\uD83E\\uDD54|\\uD83C\\uDF09|\\uD83C\\uDF0A|\\uD83C\\uDF0B|\\uD83C\\uDF0C|\\uD83C\\uDF0F|\\uD83C\\uDF11|\\uD83E\\uDD53|\\uD83C\\uDF13|\\uD83C\\uDF14|\\uD83C\\uDF15|\\uD83C\\uDF19|\\uD83C\\uDF1B|\\uD83C\\uDF1F|\\uD83E\\uDD52|\\uD83C\\uDF20|\\uD83C\\uDF30|\\uD83E\\uDD51|\\uD83C\\uDF31|\\uD83C\\uDF34|\\uD83C\\uDF35|\\uD83C\\uDF37|\\uD83C\\uDF38|\\uD83C\\uDF39|\\uD83C\\uDF3A|\\uD83C\\uDF3B|\\uD83C\\uDF3C|\\uD83C\\uDF3D|\\uD83E\\uDD50|\\uD83C\\uDF3E|\\uD83C\\uDF3F|\\uD83C\\uDF40|\\uD83C\\uDF41|\\uD83C\\uDF42|\\uD83C\\uDF43|\\uD83C\\uDF44|\\uD83C\\uDF45|\\uD83C\\uDF46|\\uD83C\\uDF47|\\uD83C\\uDF48|\\uD83C\\uDF49|\\uD83C\\uDF4A|\\uD83E\\uDD40|\\uD83C\\uDF4C|\\uD83C\\uDF4D|\\uD83C\\uDF4E|\\uD83C\\uDF4F|\\uD83C\\uDF51|\\uD83C\\uDF52|\\uD83C\\uDF53|\\uD83E\\uDD8F|\\uD83C\\uDF54|\\uD83C\\uDF55|\\uD83C\\uDF56|\\uD83E\\uDD8E|\\uD83C\\uDF57|\\uD83C\\uDF58|\\uD83C\\uDF59|\\uD83E\\uDD8D|\\uD83C\\uDF5A|\\uD83C\\uDF5B|\\uD83E\\uDD8C|\\uD83C\\uDF5C|\\uD83C\\uDF5D|\\uD83C\\uDF5E|\\uD83C\\uDF5F|\\uD83E\\uDD8B|\\uD83C\\uDF60|\\uD83C\\uDF61|\\uD83E\\uDD8A|\\uD83C\\uDF62|\\uD83C\\uDF63|\\uD83E\\uDD89|\\uD83C\\uDF64|\\uD83C\\uDF65|\\uD83E\\uDD88|\\uD83C\\uDF66|\\uD83E\\uDD87|\\uD83C\\uDF67|\\uD83C\\uDDFD|\\uD83C\\uDF68|\\uD83E\\uDD86|\\uD83C\\uDF69|\\uD83E\\uDD85|\\uD83C\\uDF6A|\\uD83D\\uDDA4|\\uD83C\\uDF6B|\\uD83C\\uDF6C|\\uD83C\\uDF6D|\\uD83C\\uDF6E|\\uD83C\\uDF6F|\\uD83E\\uDD1E|\\uD83C\\uDF70|\\uD83C\\uDF71|\\uD83C\\uDF72|\\uD83E\\uDD1D|\\uD83C\\uDF73|\\uD83C\\uDF74|\\uD83C\\uDF75|\\uD83C\\uDF76|\\uD83C\\uDF77|\\uD83C\\uDF78|\\uD83C\\uDF79|\\uD83C\\uDF7A|\\uD83C\\uDF7B|\\uD83C\\uDF80|\\uD83C\\uDF81|\\uD83C\\uDF82|\\uD83C\\uDF83|\\uD83E\\uDD1B|\\uD83E\\uDD1C|\\uD83C\\uDF84|\\uD83C\\uDF85|\\uD83C\\uDF86|\\uD83E\\uDD1A|\\uD83C\\uDF87|\\uD83C\\uDF88|\\uD83C\\uDF89|\\uD83C\\uDF8A|\\uD83C\\uDF8B|\\uD83C\\uDF8C|\\uD83E\\uDD19|\\uD83C\\uDF8D|\\uD83D\\uDD7A|\\uD83C\\uDF8E|\\uD83E\\uDD33|\\uD83C\\uDF8F|\\uD83E\\uDD30|\\uD83C\\uDF90|\\uD83E\\uDD26|\\uD83E\\uDD37|\\uD83C\\uDF91|\\uD83C\\uDF92|\\uD83C\\uDF93|\\uD83C\\uDFA0|\\uD83C\\uDFA1|\\uD83C\\uDFA2|\\uD83C\\uDFA3|\\uD83C\\uDFA4|\\uD83C\\uDFA5|\\uD83C\\uDFA6|\\uD83C\\uDFA7|\\uD83E\\uDD36|\\uD83C\\uDFA8|\\uD83E\\uDD35|\\uD83C\\uDFA9|\\uD83C\\uDFAA|\\uD83E\\uDD34|\\uD83C\\uDFAB|\\uD83C\\uDFAC|\\uD83C\\uDFAD|\\uD83E\\uDD27|\\uD83C\\uDFAE|\\uD83C\\uDFAF|\\uD83C\\uDFB0|\\uD83C\\uDFB1|\\uD83C\\uDFB2|\\uD83C\\uDFB3|\\uD83C\\uDFB4|\\uD83E\\uDD25|\\uD83C\\uDFB5|\\uD83C\\uDFB6|\\uD83C\\uDFB7|\\uD83E\\uDD24|\\uD83C\\uDFB8|\\uD83C\\uDFB9|\\uD83C\\uDFBA|\\uD83E\\uDD23|\\uD83C\\uDFBB|\\uD83C\\uDFBC|\\uD83C\\uDFBD|\\uD83E\\uDD22|\\uD83C\\uDFBE|\\uD83C\\uDFBF|\\uD83C\\uDFC0|\\uD83C\\uDFC1|\\uD83E\\uDD21|\\uD83C\\uDFC2|\\uD83C\\uDFC3|\\uD83C\\uDFC4|\\uD83C\\uDFC6|\\uD83C\\uDFC8|\\uD83C\\uDFCA|\\uD83C\\uDFE0|\\uD83C\\uDFE1|\\uD83C\\uDFE2|\\uD83C\\uDFE3|\\uD83C\\uDFE5|\\uD83C\\uDFE6|\\uD83C\\uDFE7|\\uD83C\\uDFE8|\\uD83C\\uDFE9|\\uD83C\\uDFEA|\\uD83C\\uDFEB|\\uD83C\\uDFEC|\\uD83E\\uDD20|\\uD83C\\uDFED|\\uD83C\\uDFEE|\\uD83C\\uDFEF|\\uD83C\\uDFF0|\\uD83D\\uDC0C|\\uD83D\\uDC0D|\\uD83D\\uDC0E|\\uD83D\\uDC11|\\uD83D\\uDC12|\\uD83D\\uDC14|\\uD83D\\uDC17|\\uD83D\\uDC18|\\uD83D\\uDC19|\\uD83D\\uDC1A|\\uD83D\\uDC1B|\\uD83D\\uDC1C|\\uD83D\\uDC1D|\\uD83D\\uDC1E|\\uD83D\\uDC1F|\\uD83D\\uDC20|\\uD83D\\uDC21|\\uD83D\\uDC22|\\uD83D\\uDC23|\\uD83D\\uDC24|\\uD83D\\uDC25|\\uD83D\\uDC26|\\uD83D\\uDC27|\\uD83D\\uDC28|\\uD83D\\uDC29|\\uD83D\\uDC2B|\\uD83D\\uDC2C|\\uD83D\\uDC2D|\\uD83D\\uDC2E|\\uD83D\\uDC2F|\\uD83D\\uDC30|\\uD83D\\uDC31|\\uD83D\\uDC32|\\uD83D\\uDC33|\\uD83D\\uDC34|\\uD83D\\uDC35|\\uD83D\\uDC36|\\uD83D\\uDC37|\\uD83D\\uDC38|\\uD83D\\uDC39|\\uD83D\\uDC3A|\\uD83D\\uDC3B|\\uD83D\\uDC3C|\\uD83D\\uDC3D|\\uD83D\\uDC3E|\\uD83D\\uDC40|\\uD83D\\uDC42|\\uD83D\\uDC43|\\uD83D\\uDC44|\\uD83D\\uDC45|\\uD83D\\uDC46|\\uD83D\\uDC47|\\uD83D\\uDC48|\\uD83D\\uDC49|\\uD83D\\uDC4A|\\uD83D\\uDC4B|\\uD83D\\uDC4C|\\uD83D\\uDC4D|\\uD83D\\uDC4E|\\uD83D\\uDC4F|\\uD83D\\uDC50|\\uD83D\\uDC51|\\uD83D\\uDC52|\\uD83D\\uDC53|\\uD83D\\uDC54|\\uD83D\\uDC55|\\uD83D\\uDC56|\\uD83D\\uDC57|\\uD83D\\uDC58|\\uD83D\\uDC59|\\uD83D\\uDC5A|\\uD83D\\uDC5B|\\uD83D\\uDC5C|\\uD83D\\uDC5D|\\uD83D\\uDC5E|\\uD83D\\uDC5F|\\uD83D\\uDC60|\\uD83D\\uDC61|\\uD83D\\uDC62|\\uD83D\\uDC63|\\uD83D\\uDC64|\\uD83D\\uDC66|\\uD83D\\uDC67|\\uD83D\\uDC68|\\uD83D\\uDC69|\\uD83D\\uDC6A|\\uD83D\\uDC6B|\\uD83D\\uDC6E|\\uD83D\\uDC6F|\\uD83D\\uDC70|\\uD83D\\uDC71|\\uD83D\\uDC72|\\uD83D\\uDC73|\\uD83D\\uDC74|\\uD83D\\uDC75|\\uD83D\\uDC76|\\uD83D\\uDC77|\\uD83D\\uDC78|\\uD83D\\uDC79|\\uD83D\\uDC7A|\\uD83D\\uDC7B|\\uD83D\\uDC7C|\\uD83D\\uDC7D|\\uD83D\\uDC7E|\\uD83D\\uDC7F|\\uD83D\\uDC80|\\uD83D\\uDCC7|\\uD83D\\uDC81|\\uD83D\\uDC82|\\uD83D\\uDC83|\\uD83D\\uDC84|\\uD83D\\uDC85|\\uD83D\\uDCD2|\\uD83D\\uDC86|\\uD83D\\uDCD3|\\uD83D\\uDC87|\\uD83D\\uDCD4|\\uD83D\\uDC88|\\uD83D\\uDCD5|\\uD83D\\uDC89|\\uD83D\\uDCD6|\\uD83D\\uDC8A|\\uD83D\\uDCD7|\\uD83D\\uDC8B|\\uD83D\\uDCD8|\\uD83D\\uDC8C|\\uD83D\\uDCD9|\\uD83D\\uDC8D|\\uD83D\\uDCDA|\\uD83D\\uDC8E|\\uD83D\\uDCDB|\\uD83D\\uDC8F|\\uD83D\\uDCDC|\\uD83D\\uDC90|\\uD83D\\uDCDD|\\uD83D\\uDC91|\\uD83D\\uDCDE|\\uD83D\\uDC92|\\uD83D\\uDCDF|\\uD83D\\uDCE0|\\uD83D\\uDC93|\\uD83D\\uDCE1|\\uD83D\\uDCE2|\\uD83D\\uDC94|\\uD83D\\uDCE3|\\uD83D\\uDCE4|\\uD83D\\uDC95|\\uD83D\\uDCE5|\\uD83D\\uDCE6|\\uD83D\\uDC96|\\uD83D\\uDCE7|\\uD83D\\uDCE8|\\uD83D\\uDC97|\\uD83D\\uDCE9|\\uD83D\\uDCEA|\\uD83D\\uDC98|\\uD83D\\uDCEB|\\uD83D\\uDCEE|\\uD83D\\uDC99|\\uD83D\\uDCF0|\\uD83D\\uDCF1|\\uD83D\\uDC9A|\\uD83D\\uDCF2|\\uD83D\\uDCF3|\\uD83D\\uDC9B|\\uD83D\\uDCF4|\\uD83D\\uDCF6|\\uD83D\\uDC9C|\\uD83D\\uDCF7|\\uD83D\\uDCF9|\\uD83D\\uDC9D|\\uD83D\\uDCFA|\\uD83D\\uDCFB|\\uD83D\\uDC9E|\\uD83D\\uDCFC|\\uD83D\\uDD03|\\uD83D\\uDC9F|\\uD83D\\uDD0A|\\uD83D\\uDD0B|\\uD83D\\uDCA0|\\uD83D\\uDD0C|\\uD83D\\uDD0D|\\uD83D\\uDCA1|\\uD83D\\uDD0E|\\uD83D\\uDD0F|\\uD83D\\uDCA2|\\uD83D\\uDD10|\\uD83D\\uDD11|\\uD83D\\uDCA3|\\uD83D\\uDD12|\\uD83D\\uDD13|\\uD83D\\uDCA4|\\uD83D\\uDD14|\\uD83D\\uDD16|\\uD83D\\uDCA5|\\uD83D\\uDD17|\\uD83D\\uDD18|\\uD83D\\uDCA6|\\uD83D\\uDD19|\\uD83D\\uDD1A|\\uD83D\\uDCA7|\\uD83D\\uDD1B|\\uD83D\\uDD1C|\\uD83D\\uDCA8|\\uD83D\\uDD1D|\\uD83D\\uDD1E|\\uD83D\\uDCA9|\\uD83D\\uDD1F|\\uD83D\\uDCAA|\\uD83D\\uDD20|\\uD83D\\uDD21|\\uD83D\\uDCAB|\\uD83D\\uDD22|\\uD83D\\uDD23|\\uD83D\\uDCAC|\\uD83D\\uDD24|\\uD83D\\uDD25|\\uD83D\\uDCAE|\\uD83D\\uDD26|\\uD83D\\uDD27|\\uD83D\\uDCAF|\\uD83D\\uDD28|\\uD83D\\uDD29|\\uD83D\\uDCB0|\\uD83D\\uDD2A|\\uD83D\\uDD2B|\\uD83D\\uDCB1|\\uD83D\\uDD2E|\\uD83D\\uDCB2|\\uD83D\\uDD2F|\\uD83D\\uDCB3|\\uD83D\\uDD30|\\uD83D\\uDD31|\\uD83D\\uDCB4|\\uD83D\\uDD32|\\uD83D\\uDD33|\\uD83D\\uDCB5|\\uD83D\\uDD34|\\uD83D\\uDD35|\\uD83D\\uDCB8|\\uD83D\\uDD36|\\uD83D\\uDD37|\\uD83D\\uDCB9|\\uD83D\\uDD38|\\uD83D\\uDD39|\\uD83D\\uDCBA|\\uD83D\\uDD3A|\\uD83D\\uDD3B|\\uD83D\\uDCBB|\\uD83D\\uDD3C|\\uD83D\\uDCBC|\\uD83D\\uDD3D|\\uD83D\\uDD50|\\uD83D\\uDCBD|\\uD83D\\uDD51|\\uD83D\\uDCBE|\\uD83D\\uDD52|\\uD83D\\uDCBF|\\uD83D\\uDD53|\\uD83D\\uDCC0|\\uD83D\\uDD54|\\uD83D\\uDD55|\\uD83D\\uDCC1|\\uD83D\\uDD56|\\uD83D\\uDD57|\\uD83D\\uDCC2|\\uD83D\\uDD58|\\uD83D\\uDD59|\\uD83D\\uDCC3|\\uD83D\\uDD5A|\\uD83D\\uDD5B|\\uD83D\\uDCC4|\\uD83D\\uDDFB|\\uD83D\\uDDFC|\\uD83D\\uDCC5|\\uD83D\\uDDFD|\\uD83D\\uDDFE|\\uD83D\\uDCC6|\\uD83D\\uDDFF|\\uD83D\\uDE01|\\uD83D\\uDE02|\\uD83D\\uDE03|\\uD83D\\uDCC8|\\uD83D\\uDE04|\\uD83D\\uDE05|\\uD83D\\uDCC9|\\uD83D\\uDE06|\\uD83D\\uDE09|\\uD83D\\uDCCA|\\uD83D\\uDE0A|\\uD83D\\uDE0B|\\uD83D\\uDCCB|\\uD83D\\uDE0C|\\uD83D\\uDE0D|\\uD83D\\uDCCC|\\uD83D\\uDE0F|\\uD83D\\uDE12|\\uD83D\\uDCCD|\\uD83D\\uDE13|\\uD83D\\uDE14|\\uD83D\\uDCCE|\\uD83D\\uDE16|\\uD83D\\uDE18|\\uD83D\\uDCCF|\\uD83D\\uDE1A|\\uD83D\\uDE1C|\\uD83D\\uDCD0|\\uD83D\\uDE1D|\\uD83D\\uDE1E|\\uD83D\\uDCD1|\\uD83D\\uDE20|\\uD83D\\uDE21|\\uD83D\\uDE22|\\uD83D\\uDE23|\\uD83D\\uDE24|\\uD83D\\uDE25|\\uD83D\\uDE28|\\uD83D\\uDE29|\\uD83D\\uDE2A|\\uD83D\\uDE2B|\\uD83D\\uDE2D|\\uD83D\\uDE30|\\uD83D\\uDE31|\\uD83D\\uDE32|\\uD83D\\uDE33|\\uD83D\\uDE35|\\uD83D\\uDE37|\\uD83D\\uDE38|\\uD83D\\uDE39|\\uD83D\\uDE3A|\\uD83D\\uDE3B|\\uD83D\\uDE3C|\\uD83D\\uDE3D|\\uD83D\\uDE3E|\\uD83D\\uDE3F|\\uD83D\\uDE40|\\uD83D\\uDE45|\\uD83D\\uDE46|\\uD83D\\uDE47|\\uD83D\\uDE48|\\uD83D\\uDE49|\\uD83D\\uDE4A|\\uD83D\\uDE4B|\\uD83D\\uDE4C|\\uD83D\\uDE4D|\\uD83D\\uDE4E|\\uD83D\\uDE4F|\\uD83D\\uDE80|\\uD83D\\uDE83|\\uD83D\\uDE84|\\uD83D\\uDE85|\\uD83D\\uDE87|\\uD83D\\uDE89|\\uD83D\\uDE8C|\\uD83D\\uDE8F|\\uD83D\\uDE91|\\uD83D\\uDE92|\\uD83D\\uDE93|\\uD83D\\uDE95|\\uD83D\\uDE97|\\uD83D\\uDE99|\\uD83D\\uDE9A|\\uD83D\\uDEA2|\\uD83D\\uDEA4|\\uD83D\\uDEA5|\\uD83D\\uDEA7|\\uD83D\\uDEA8|\\uD83D\\uDEA9|\\uD83D\\uDEAA|\\uD83D\\uDEAB|\\uD83D\\uDEAC|\\uD83D\\uDEAD|\\uD83D\\uDEB2|\\uD83D\\uDEB6|\\uD83D\\uDEB9|\\uD83D\\uDEBA|\\uD83D\\uDEBB|\\uD83D\\uDEBC|\\uD83D\\uDEBD|\\uD83D\\uDEBE|\\uD83D\\uDEC0|\\uD83E\\uDD18|\\uD83D\\uDE00|\\uD83D\\uDE07|\\uD83D\\uDE08|\\uD83D\\uDE0E|\\uD83D\\uDE10|\\uD83D\\uDE11|\\uD83D\\uDE15|\\uD83D\\uDE17|\\uD83D\\uDE19|\\uD83D\\uDE1B|\\uD83D\\uDE1F|\\uD83D\\uDE26|\\uD83D\\uDE27|\\uD83D\\uDE2C|\\uD83D\\uDE2E|\\uD83D\\uDE2F|\\uD83D\\uDE34|\\uD83D\\uDE36|\\uD83D\\uDE81|\\uD83D\\uDE82|\\uD83D\\uDE86|\\uD83D\\uDE88|\\uD83D\\uDE8A|\\uD83D\\uDE8D|\\uD83D\\uDE8E|\\uD83D\\uDE90|\\uD83D\\uDE94|\\uD83D\\uDE96|\\uD83D\\uDE98|\\uD83D\\uDE9B|\\uD83D\\uDE9C|\\uD83D\\uDE9D|\\uD83D\\uDE9E|\\uD83D\\uDE9F|\\uD83D\\uDEA0|\\uD83D\\uDEA1|\\uD83D\\uDEA3|\\uD83D\\uDEA6|\\uD83D\\uDEAE|\\uD83D\\uDEAF|\\uD83D\\uDEB0|\\uD83D\\uDEB1|\\uD83D\\uDEB3|\\uD83D\\uDEB4|\\uD83D\\uDEB5|\\uD83D\\uDEB7|\\uD83D\\uDEB8|\\uD83D\\uDEBF|\\uD83D\\uDEC1|\\uD83D\\uDEC2|\\uD83D\\uDEC3|\\uD83D\\uDEC4|\\uD83D\\uDEC5|\\uD83C\\uDF0D|\\uD83C\\uDF0E|\\uD83C\\uDF10|\\uD83C\\uDF12|\\uD83C\\uDF16|\\uD83C\\uDF17|\\uD83C\\uDF18|\\uD83C\\uDF1A|\\uD83C\\uDF1C|\\uD83C\\uDF1D|\\uD83C\\uDF1E|\\uD83C\\uDF32|\\uD83C\\uDF33|\\uD83C\\uDF4B|\\uD83C\\uDF50|\\uD83C\\uDF7C|\\uD83C\\uDFC7|\\uD83C\\uDFC9|\\uD83C\\uDFE4|\\uD83D\\uDC00|\\uD83D\\uDC01|\\uD83D\\uDC02|\\uD83D\\uDC03|\\uD83D\\uDC04|\\uD83D\\uDC05|\\uD83D\\uDC06|\\uD83D\\uDC07|\\uD83D\\uDC08|\\uD83D\\uDC09|\\uD83D\\uDC0A|\\uD83D\\uDC0B|\\uD83D\\uDC0F|\\uD83D\\uDC10|\\uD83D\\uDC13|\\uD83D\\uDC15|\\uD83D\\uDC16|\\uD83D\\uDC2A|\\uD83D\\uDC65|\\uD83D\\uDC6C|\\uD83D\\uDC6D|\\uD83D\\uDCAD|\\uD83D\\uDCB6|\\uD83D\\uDCB7|\\uD83D\\uDCEC|\\uD83D\\uDCED|\\uD83D\\uDCEF|\\uD83D\\uDCF5|\\uD83D\\uDD00|\\uD83D\\uDD01|\\uD83D\\uDD02|\\uD83D\\uDD04|\\uD83D\\uDD05|\\uD83D\\uDD06|\\uD83D\\uDD07|\\uD83D\\uDD09|\\uD83D\\uDD15|\\uD83D\\uDD2C|\\uD83D\\uDD2D|\\uD83D\\uDD5C|\\uD83D\\uDD5D|\\uD83D\\uDD5E|\\uD83D\\uDD5F|\\uD83D\\uDD60|\\uD83D\\uDD61|\\uD83D\\uDD62|\\uD83D\\uDD63|\\uD83D\\uDD64|\\uD83D\\uDD65|\\uD83D\\uDD66|\\uD83D\\uDD67|\\uD83D\\uDD08|\\uD83D\\uDE8B|\\uD83C\\uDFC5|\\uD83C\\uDFF4|\\uD83D\\uDCF8|\\uD83D\\uDECC|\\uD83D\\uDD95|\\uD83D\\uDD96|\\uD83D\\uDE41|\\uD83D\\uDE42|\\uD83D\\uDEEB|\\uD83D\\uDEEC|\\uD83C\\uDFFB|\\uD83C\\uDFFC|\\uD83C\\uDFFD|\\uD83C\\uDFFE|\\uD83C\\uDFFF|\\uD83D\\uDE43|\\uD83E\\uDD11|\\uD83E\\uDD13|\\uD83E\\uDD17|\\uD83D\\uDE44|\\uD83E\\uDD14|\\uD83E\\uDD10|\\u26F2\\uFE0F|\\#\\u20E3|\\9\\u20E3|\\8\\u20E3|\\7\\u20E3|\\6\\u20E3|\\*\\u20E3|\\4\\u20E3|\\3\\u20E3|\\2\\u20E3|\\1\\u20E3|\\0\\u20E3|\\5\\u20E3|\\u26B1|\\u26B0|\\u269C|\\u269B|\\u2699|\\u2697|\\u2696|\\u2694|\\u2692|\\u2639|\\u2638|\\u262F|\\u262E|\\u262A|\\u2626|\\u2623|\\u2622|\\u2620|\\u2618|\\u2604|\\u2603|\\u2602|\\u23FA|\\u23F9|\\u23F8|\\u23F2|\\u23F1|\\u23EF|\\u23EE|\\u23ED|\\u23CF|\\u270D|\\u2328|\\u271D|\\u3299|\\u3297|\\u303D|\\u3030|\\u2B55|\\u2B50|\\u2B1C|\\u2B1B|\\u2B07|\\u2B06|\\u2B05|\\u2935|\\u23E9|\\u23EA|\\u23EB|\\u23EC|\\u23F0|\\u23F3|\\u26CE|\\u2705|\\u270A|\\u270B|\\u2728|\\u274C|\\u274E|\\u2753|\\u2754|\\u2755|\\u2795|\\u2796|\\u2797|\\u27B0|\\u27BF|\\u00A9|\\u00AE|\\u203C|\\u2049|\\u2122|\\u2139|\\u2194|\\u2195|\\u2196|\\u2197|\\u2198|\\u2199|\\u21A9|\\u21AA|\\u231A|\\u231B|\\u24C2|\\u25AA|\\u25AB|\\u25B6|\\u25C0|\\u25FB|\\u25FC|\\u25FD|\\u25FE|\\u2600|\\u2601|\\u260E|\\u2611|\\u2614|\\u2615|\\u261D|\\u263A|\\u2648|\\u2649|\\u264A|\\u264B|\\u264C|\\u264D|\\u264E|\\u264F|\\u2650|\\u2651|\\u2652|\\u2653|\\u2660|\\u2663|\\u2665|\\u2666|\\u2668|\\u267B|\\u267F|\\u2693|\\u26A0|\\u26A1|\\u26AA|\\u26AB|\\u26BD|\\u26BE|\\u26C4|\\u26C5|\\u26D4|\\u26EA|\\u26F2|\\u26F3|\\u26F5|\\u26FA|\\u26FD|\\u2702|\\u2708|\\u2709|\\u270C|\\u270F|\\u2712|\\u2714|\\u2716|\\u2733|\\u2734|\\u2744|\\u2747|\\u2721|\\u2764|\\u27A1|\\u2934|\\u2935|\\u2B05|\\u2B06|\\u2B07|\\u2B1B|\\u2B1C|\\u2B50|\\u2B55|\\u3030|\\u303D|\\u3297|\\u3299|\\u2934|\\u27A1|\\u2764|\\u2757|\\u2747|\\u2744|\\u2734|\\u2733|\\u2716|\\u2714|\\u2712|\\u270F|\\u270C|\\u2709|\\u2708|\\u2702|\\u26FD|\\u26FA|\\u26F5|\\u26F3|\\u26F2|\\u26EA|\\u26D4|\\u26C5|\\u26C4|\\u26BE|\\u26BD|\\u26AB|\\u26AA|\\u26A1|\\u26A0|\\u2693|\\u271D|\\u267F|\\u267B|\\u2668|\\u2666|\\u2665|\\u2663|\\u2660|\\u2653|\\u2652|\\u2651|\\u2650|\\u264F|\\u264E|\\u264D|\\u2328|\\u264C|\\u264B|\\u264A|\\u2649|\\u2648|\\u263A|\\u261D|\\u2615|\\u2614|\\u2611|\\u260E|\\u2601|\\u2600|\\u25FE|\\u25FD|\\u25FC|\\u25FB|\\u25C0|\\u25B6|\\u25AB|\\u25AA|\\u24C2|\\u231B|\\u231A|\\u21AA|\\u270D|\\u21A9|\\u2199|\\u2198|\\u2197|\\u2196|\\u2195|\\u2194|\\u2139|\\u2122|\\u2049|\\u203C|\\u00AE|\\u00A9|\\u2763|\\u26F9|\\u26F8|\\u26F7|\\u26F4|\\u26F1|\\u26F0|\\u26E9|\\u26D3|\\u23CF|\\u23ED|\\u23EE|\\u23EF|\\u23F1|\\u23F2|\\u23F8|\\u23F9|\\u23FA|\\u2602|\\u2603|\\u2604|\\u2618|\\u2620|\\u2622|\\u2623|\\u2626|\\u262A|\\u262E|\\u262F|\\u2638|\\u2639|\\u2692|\\u2694|\\u2696|\\u2697|\\u2699|\\u269B|\\u269C|\\u26B0|\\u26B1|\\u26C8|\\u26CF|\\u26D1|\\u26D3|\\u26E9|\\u26F0|\\u26F1|\\u26F4|\\u26F7|\\u26F8|\\u26F9|\\u2721|\\u2763|\\u26D1|\\u26CF|\\u26C8|\\u2757)';
    ns.jsEscapeMap = {"\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC69":"1f469-200d-2764-fe0f-200d-1f48b-200d-1f469","\uD83D\uDC69\u2764\uD83D\uDC8B\uD83D\uDC69":"1f469-2764-1f48b-1f469","\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC8B\u200D\uD83D\uDC68":"1f468-200d-2764-fe0f-200d-1f48b-200d-1f468","\uD83D\uDC68\u2764\uD83D\uDC8B\uD83D\uDC68":"1f468-2764-1f48b-1f468","\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66\u200D\uD83D\uDC66":"1f468-200d-1f468-200d-1f466-200d-1f466","\uD83D\uDC68\uD83D\uDC68\uD83D\uDC66\uD83D\uDC66":"1f468-1f468-1f466-1f466","\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC66":"1f468-200d-1f468-200d-1f467-200d-1f466","\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67\uD83D\uDC66":"1f468-1f468-1f467-1f466","\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67\u200D\uD83D\uDC67":"1f468-200d-1f468-200d-1f467-200d-1f467","\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67\uD83D\uDC67":"1f468-1f468-1f467-1f467","\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66":"1f468-200d-1f469-200d-1f466-200d-1f466","\uD83D\uDC68\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66":"1f468-1f469-1f466-1f466","\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66":"1f468-200d-1f469-200d-1f467-200d-1f466","\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66":"1f468-1f469-1f467-1f466","\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67":"1f468-200d-1f469-200d-1f467-200d-1f467","\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67":"1f468-1f469-1f467-1f467","\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66":"1f469-200d-1f469-200d-1f466-200d-1f466","\uD83D\uDC69\uD83D\uDC69\uD83D\uDC66\uD83D\uDC66":"1f469-1f469-1f466-1f466","\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66":"1f469-200d-1f469-200d-1f467-200d-1f466","\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67\uD83D\uDC66":"1f469-1f469-1f467-1f466","\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC67":"1f469-200d-1f469-200d-1f467-200d-1f467","\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67\uD83D\uDC67":"1f469-1f469-1f467-1f467","\uD83D\uDC69\u200D\u2764\uFE0F\u200D\uD83D\uDC69":"1f469-200d-2764-fe0f-200d-1f469","\uD83D\uDC69\u2764\uD83D\uDC69":"1f469-2764-1f469","\uD83D\uDC68\u200D\u2764\uFE0F\u200D\uD83D\uDC68":"1f468-200d-2764-fe0f-200d-1f468","\uD83D\uDC68\u2764\uD83D\uDC68":"1f468-2764-1f468","\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC66":"1f468-200d-1f468-200d-1f466","\uD83D\uDC68\uD83D\uDC68\uD83D\uDC66":"1f468-1f468-1f466","\uD83D\uDC68\u200D\uD83D\uDC68\u200D\uD83D\uDC67":"1f468-200d-1f468-200d-1f467","\uD83D\uDC68\uD83D\uDC68\uD83D\uDC67":"1f468-1f468-1f467","\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67":"1f468-200d-1f469-200d-1f467","\uD83D\uDC68\uD83D\uDC69\uD83D\uDC67":"1f468-1f469-1f467","\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC66":"1f469-200d-1f469-200d-1f466","\uD83D\uDC69\uD83D\uDC69\uD83D\uDC66":"1f469-1f469-1f466","\uD83D\uDC69\u200D\uD83D\uDC69\u200D\uD83D\uDC67":"1f469-200d-1f469-200d-1f467","\uD83D\uDC69\uD83D\uDC69\uD83D\uDC67":"1f469-1f469-1f467","\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08":"1f3f3-fe0f-200d-1f308","\uD83C\uDFF3\uD83C\uDF08":"1f3f3-1f308","\uD83D\uDC41\u200D\uD83D\uDDE8":"1f441-200d-1f5e8","\uD83D\uDC41\uD83D\uDDE8":"1f441-1f5e8","#\uFE0F\u20E3":"0023-fe0f-20e3","#\u20E3":"0023-20e3","0\uFE0F\u20E3":"0030-fe0f-20e3","0\u20E3":"0030-20e3","1\uFE0F\u20E3":"0031-fe0f-20e3","1\u20E3":"0031-20e3","2\uFE0F\u20E3":"0032-fe0f-20e3","2\u20E3":"0032-20e3","3\uFE0F\u20E3":"0033-fe0f-20e3","3\u20E3":"0033-20e3","4\uFE0F\u20E3":"0034-fe0f-20e3","4\u20E3":"0034-20e3","5\uFE0F\u20E3":"0035-fe0f-20e3","5\u20E3":"0035-20e3","6\uFE0F\u20E3":"0036-fe0f-20e3","6\u20E3":"0036-20e3","7\uFE0F\u20E3":"0037-fe0f-20e3","7\u20E3":"0037-20e3","8\uFE0F\u20E3":"0038-fe0f-20e3","8\u20E3":"0038-20e3","9\uFE0F\u20E3":"0039-fe0f-20e3","9\u20E3":"0039-20e3","*\uFE0F\u20E3":"002a-fe0f-20e3","*\u20E3":"002a-20e3","\uD83E\uDD3E\uD83C\uDFFF":"1f93e-1f3ff","\uD83E\uDD3E\uD83C\uDFFE":"1f93e-1f3fe","\uD83E\uDD3E\uD83C\uDFFD":"1f93e-1f3fd","\uD83E\uDD3E\uD83C\uDFFC":"1f93e-1f3fc","\uD83E\uDD3E\uD83C\uDFFB":"1f93e-1f3fb","\uD83E\uDD3D\uD83C\uDFFF":"1f93d-1f3ff","\uD83E\uDD3D\uD83C\uDFFE":"1f93d-1f3fe","\uD83E\uDD3D\uD83C\uDFFD":"1f93d-1f3fd","\uD83E\uDD3D\uD83C\uDFFC":"1f93d-1f3fc","\uD83E\uDD3D\uD83C\uDFFB":"1f93d-1f3fb","\uD83E\uDD3C\uD83C\uDFFF":"1f93c-1f3ff","\uD83E\uDD3C\uD83C\uDFFE":"1f93c-1f3fe","\uD83E\uDD3C\uD83C\uDFFD":"1f93c-1f3fd","\uD83E\uDD3C\uD83C\uDFFC":"1f93c-1f3fc","\uD83E\uDD3C\uD83C\uDFFB":"1f93c-1f3fb","\uD83E\uDD39\uD83C\uDFFF":"1f939-1f3ff","\uD83E\uDD39\uD83C\uDFFE":"1f939-1f3fe","\uD83E\uDD39\uD83C\uDFFD":"1f939-1f3fd","\uD83E\uDD39\uD83C\uDFFC":"1f939-1f3fc","\uD83E\uDD39\uD83C\uDFFB":"1f939-1f3fb","\uD83E\uDD38\uD83C\uDFFF":"1f938-1f3ff","\uD83E\uDD38\uD83C\uDFFE":"1f938-1f3fe","\uD83E\uDD38\uD83C\uDFFD":"1f938-1f3fd","\uD83E\uDD38\uD83C\uDFFC":"1f938-1f3fc","\uD83E\uDD38\uD83C\uDFFB":"1f938-1f3fb","\uD83E\uDD37\uD83C\uDFFF":"1f937-1f3ff","\uD83E\uDD37\uD83C\uDFFE":"1f937-1f3fe","\uD83E\uDD37\uD83C\uDFFD":"1f937-1f3fd","\uD83E\uDD37\uD83C\uDFFC":"1f937-1f3fc","\uD83E\uDD37\uD83C\uDFFB":"1f937-1f3fb","\uD83E\uDD36\uD83C\uDFFF":"1f936-1f3ff","\uD83E\uDD36\uD83C\uDFFE":"1f936-1f3fe","\uD83E\uDD36\uD83C\uDFFD":"1f936-1f3fd","\uD83E\uDD36\uD83C\uDFFC":"1f936-1f3fc","\uD83E\uDD36\uD83C\uDFFB":"1f936-1f3fb","\uD83E\uDD35\uD83C\uDFFF":"1f935-1f3ff","\uD83E\uDD35\uD83C\uDFFE":"1f935-1f3fe","\uD83E\uDD35\uD83C\uDFFD":"1f935-1f3fd","\uD83E\uDD35\uD83C\uDFFC":"1f935-1f3fc","\uD83E\uDD35\uD83C\uDFFB":"1f935-1f3fb","\uD83E\uDD34\uD83C\uDFFF":"1f934-1f3ff","\uD83E\uDD34\uD83C\uDFFE":"1f934-1f3fe","\uD83E\uDD34\uD83C\uDFFD":"1f934-1f3fd","\uD83E\uDD34\uD83C\uDFFC":"1f934-1f3fc","\uD83E\uDD34\uD83C\uDFFB":"1f934-1f3fb","\uD83E\uDD33\uD83C\uDFFF":"1f933-1f3ff","\uD83E\uDD33\uD83C\uDFFE":"1f933-1f3fe","\uD83E\uDD33\uD83C\uDFFD":"1f933-1f3fd","\uD83E\uDD33\uD83C\uDFFC":"1f933-1f3fc","\uD83E\uDD33\uD83C\uDFFB":"1f933-1f3fb","\uD83E\uDD30\uD83C\uDFFF":"1f930-1f3ff","\uD83E\uDD30\uD83C\uDFFE":"1f930-1f3fe","\uD83E\uDD30\uD83C\uDFFD":"1f930-1f3fd","\uD83E\uDD30\uD83C\uDFFC":"1f930-1f3fc","\uD83E\uDD30\uD83C\uDFFB":"1f930-1f3fb","\uD83E\uDD26\uD83C\uDFFF":"1f926-1f3ff","\uD83E\uDD26\uD83C\uDFFE":"1f926-1f3fe","\uD83E\uDD26\uD83C\uDFFD":"1f926-1f3fd","\uD83E\uDD26\uD83C\uDFFC":"1f926-1f3fc","\uD83E\uDD26\uD83C\uDFFB":"1f926-1f3fb","\uD83E\uDD1E\uD83C\uDFFF":"1f91e-1f3ff","\uD83E\uDD1E\uD83C\uDFFE":"1f91e-1f3fe","\uD83E\uDD1E\uD83C\uDFFD":"1f91e-1f3fd","\uD83E\uDD1E\uD83C\uDFFC":"1f91e-1f3fc","\uD83E\uDD1E\uD83C\uDFFB":"1f91e-1f3fb","\uD83E\uDD1D\uD83C\uDFFF":"1f91d-1f3ff","\uD83E\uDD1D\uD83C\uDFFE":"1f91d-1f3fe","\uD83E\uDD1D\uD83C\uDFFD":"1f91d-1f3fd","\uD83E\uDD1D\uD83C\uDFFC":"1f91d-1f3fc","\uD83E\uDD1D\uD83C\uDFFB":"1f91d-1f3fb","\uD83E\uDD1C\uD83C\uDFFF":"1f91c-1f3ff","\uD83E\uDD1C\uD83C\uDFFE":"1f91c-1f3fe","\uD83E\uDD1C\uD83C\uDFFD":"1f91c-1f3fd","\uD83E\uDD1C\uD83C\uDFFC":"1f91c-1f3fc","\uD83E\uDD1C\uD83C\uDFFB":"1f91c-1f3fb","\uD83E\uDD1B\uD83C\uDFFF":"1f91b-1f3ff","\uD83E\uDD1B\uD83C\uDFFE":"1f91b-1f3fe","\uD83E\uDD1B\uD83C\uDFFD":"1f91b-1f3fd","\uD83E\uDD1B\uD83C\uDFFC":"1f91b-1f3fc","\uD83E\uDD1B\uD83C\uDFFB":"1f91b-1f3fb","\uD83E\uDD1A\uD83C\uDFFF":"1f91a-1f3ff","\uD83E\uDD1A\uD83C\uDFFE":"1f91a-1f3fe","\uD83E\uDD1A\uD83C\uDFFD":"1f91a-1f3fd","\uD83E\uDD1A\uD83C\uDFFC":"1f91a-1f3fc","\uD83E\uDD1A\uD83C\uDFFB":"1f91a-1f3fb","\uD83E\uDD19\uD83C\uDFFF":"1f919-1f3ff","\uD83E\uDD19\uD83C\uDFFE":"1f919-1f3fe","\uD83E\uDD19\uD83C\uDFFD":"1f919-1f3fd","\uD83E\uDD19\uD83C\uDFFC":"1f919-1f3fc","\uD83E\uDD19\uD83C\uDFFB":"1f919-1f3fb","\uD83E\uDD18\uD83C\uDFFF":"1f918-1f3ff","\uD83E\uDD18\uD83C\uDFFE":"1f918-1f3fe","\uD83E\uDD18\uD83C\uDFFD":"1f918-1f3fd","\uD83E\uDD18\uD83C\uDFFC":"1f918-1f3fc","\uD83E\uDD18\uD83C\uDFFB":"1f918-1f3fb","\uD83D\uDEC0\uD83C\uDFFF":"1f6c0-1f3ff","\uD83D\uDEC0\uD83C\uDFFE":"1f6c0-1f3fe","\uD83D\uDEC0\uD83C\uDFFD":"1f6c0-1f3fd","\uD83D\uDEC0\uD83C\uDFFC":"1f6c0-1f3fc","\uD83D\uDEC0\uD83C\uDFFB":"1f6c0-1f3fb","\uD83D\uDEB6\uD83C\uDFFF":"1f6b6-1f3ff","\uD83D\uDEB6\uD83C\uDFFE":"1f6b6-1f3fe","\uD83D\uDEB6\uD83C\uDFFD":"1f6b6-1f3fd","\uD83D\uDEB6\uD83C\uDFFC":"1f6b6-1f3fc","\uD83D\uDEB6\uD83C\uDFFB":"1f6b6-1f3fb","\uD83D\uDEB5\uD83C\uDFFF":"1f6b5-1f3ff","\uD83D\uDEB5\uD83C\uDFFE":"1f6b5-1f3fe","\uD83D\uDEB5\uD83C\uDFFD":"1f6b5-1f3fd","\uD83D\uDEB5\uD83C\uDFFC":"1f6b5-1f3fc","\uD83D\uDEB5\uD83C\uDFFB":"1f6b5-1f3fb","\uD83D\uDEB4\uD83C\uDFFF":"1f6b4-1f3ff","\uD83D\uDEB4\uD83C\uDFFE":"1f6b4-1f3fe","\uD83D\uDEB4\uD83C\uDFFD":"1f6b4-1f3fd","\uD83D\uDEB4\uD83C\uDFFC":"1f6b4-1f3fc","\uD83D\uDEB4\uD83C\uDFFB":"1f6b4-1f3fb","\uD83D\uDEA3\uD83C\uDFFF":"1f6a3-1f3ff","\uD83D\uDEA3\uD83C\uDFFE":"1f6a3-1f3fe","\uD83D\uDEA3\uD83C\uDFFD":"1f6a3-1f3fd","\uD83D\uDEA3\uD83C\uDFFC":"1f6a3-1f3fc","\uD83D\uDEA3\uD83C\uDFFB":"1f6a3-1f3fb","\uD83D\uDE4F\uD83C\uDFFF":"1f64f-1f3ff","\uD83D\uDE4F\uD83C\uDFFE":"1f64f-1f3fe","\uD83D\uDE4F\uD83C\uDFFD":"1f64f-1f3fd","\uD83D\uDE4F\uD83C\uDFFC":"1f64f-1f3fc","\uD83D\uDE4F\uD83C\uDFFB":"1f64f-1f3fb","\uD83D\uDE4E\uD83C\uDFFF":"1f64e-1f3ff","\uD83D\uDE4E\uD83C\uDFFE":"1f64e-1f3fe","\uD83D\uDE4E\uD83C\uDFFD":"1f64e-1f3fd","\uD83D\uDE4E\uD83C\uDFFC":"1f64e-1f3fc","\uD83D\uDE4E\uD83C\uDFFB":"1f64e-1f3fb","\uD83D\uDE4D\uD83C\uDFFF":"1f64d-1f3ff","\uD83D\uDE4D\uD83C\uDFFE":"1f64d-1f3fe","\uD83D\uDE4D\uD83C\uDFFD":"1f64d-1f3fd","\uD83D\uDE4D\uD83C\uDFFC":"1f64d-1f3fc","\uD83D\uDE4D\uD83C\uDFFB":"1f64d-1f3fb","\uD83D\uDE4C\uD83C\uDFFF":"1f64c-1f3ff","\uD83D\uDE4C\uD83C\uDFFE":"1f64c-1f3fe","\uD83D\uDE4C\uD83C\uDFFD":"1f64c-1f3fd","\uD83D\uDE4C\uD83C\uDFFC":"1f64c-1f3fc","\uD83D\uDE4C\uD83C\uDFFB":"1f64c-1f3fb","\uD83D\uDE4B\uD83C\uDFFF":"1f64b-1f3ff","\uD83D\uDE4B\uD83C\uDFFE":"1f64b-1f3fe","\uD83D\uDE4B\uD83C\uDFFD":"1f64b-1f3fd","\uD83D\uDE4B\uD83C\uDFFC":"1f64b-1f3fc","\uD83D\uDE4B\uD83C\uDFFB":"1f64b-1f3fb","\uD83D\uDE47\uD83C\uDFFF":"1f647-1f3ff","\uD83D\uDE47\uD83C\uDFFE":"1f647-1f3fe","\uD83D\uDE47\uD83C\uDFFD":"1f647-1f3fd","\uD83D\uDE47\uD83C\uDFFC":"1f647-1f3fc","\uD83D\uDE47\uD83C\uDFFB":"1f647-1f3fb","\uD83D\uDE46\uD83C\uDFFF":"1f646-1f3ff","\uD83D\uDE46\uD83C\uDFFE":"1f646-1f3fe","\uD83D\uDE46\uD83C\uDFFD":"1f646-1f3fd","\uD83D\uDE46\uD83C\uDFFC":"1f646-1f3fc","\uD83D\uDE46\uD83C\uDFFB":"1f646-1f3fb","\uD83D\uDE45\uD83C\uDFFF":"1f645-1f3ff","\uD83D\uDE45\uD83C\uDFFE":"1f645-1f3fe","\uD83D\uDE45\uD83C\uDFFD":"1f645-1f3fd","\uD83D\uDE45\uD83C\uDFFC":"1f645-1f3fc","\uD83D\uDE45\uD83C\uDFFB":"1f645-1f3fb","\uD83D\uDD96\uD83C\uDFFF":"1f596-1f3ff","\uD83D\uDD96\uD83C\uDFFE":"1f596-1f3fe","\uD83D\uDD96\uD83C\uDFFD":"1f596-1f3fd","\uD83D\uDD96\uD83C\uDFFC":"1f596-1f3fc","\uD83D\uDD96\uD83C\uDFFB":"1f596-1f3fb","\uD83D\uDD95\uD83C\uDFFF":"1f595-1f3ff","\uD83D\uDD95\uD83C\uDFFE":"1f595-1f3fe","\uD83D\uDD95\uD83C\uDFFD":"1f595-1f3fd","\uD83D\uDD95\uD83C\uDFFC":"1f595-1f3fc","\uD83D\uDD95\uD83C\uDFFB":"1f595-1f3fb","\uD83D\uDD90\uD83C\uDFFF":"1f590-1f3ff","\uD83D\uDD90\uD83C\uDFFE":"1f590-1f3fe","\uD83D\uDD90\uD83C\uDFFD":"1f590-1f3fd","\uD83D\uDD90\uD83C\uDFFC":"1f590-1f3fc","\uD83D\uDD90\uD83C\uDFFB":"1f590-1f3fb","\uD83D\uDD7A\uD83C\uDFFF":"1f57a-1f3ff","\uD83D\uDD7A\uD83C\uDFFE":"1f57a-1f3fe","\uD83D\uDD7A\uD83C\uDFFD":"1f57a-1f3fd","\uD83D\uDD7A\uD83C\uDFFC":"1f57a-1f3fc","\uD83D\uDD7A\uD83C\uDFFB":"1f57a-1f3fb","\uD83D\uDD75\uD83C\uDFFF":"1f575-1f3ff","\uD83D\uDD75\uD83C\uDFFE":"1f575-1f3fe","\uD83D\uDD75\uD83C\uDFFD":"1f575-1f3fd","\uD83D\uDD75\uD83C\uDFFC":"1f575-1f3fc","\uD83D\uDD75\uD83C\uDFFB":"1f575-1f3fb","\uD83D\uDCAA\uD83C\uDFFF":"1f4aa-1f3ff","\uD83D\uDCAA\uD83C\uDFFE":"1f4aa-1f3fe","\uD83D\uDCAA\uD83C\uDFFD":"1f4aa-1f3fd","\uD83D\uDCAA\uD83C\uDFFC":"1f4aa-1f3fc","\uD83D\uDCAA\uD83C\uDFFB":"1f4aa-1f3fb","\uD83D\uDC87\uD83C\uDFFF":"1f487-1f3ff","\uD83D\uDC87\uD83C\uDFFE":"1f487-1f3fe","\uD83D\uDC87\uD83C\uDFFD":"1f487-1f3fd","\uD83D\uDC87\uD83C\uDFFC":"1f487-1f3fc","\uD83D\uDC87\uD83C\uDFFB":"1f487-1f3fb","\uD83D\uDC86\uD83C\uDFFF":"1f486-1f3ff","\uD83D\uDC86\uD83C\uDFFE":"1f486-1f3fe","\uD83D\uDC86\uD83C\uDFFD":"1f486-1f3fd","\uD83D\uDC86\uD83C\uDFFC":"1f486-1f3fc","\uD83D\uDC86\uD83C\uDFFB":"1f486-1f3fb","\uD83D\uDC85\uD83C\uDFFF":"1f485-1f3ff","\uD83D\uDC85\uD83C\uDFFE":"1f485-1f3fe","\uD83D\uDC85\uD83C\uDFFD":"1f485-1f3fd","\uD83D\uDC85\uD83C\uDFFC":"1f485-1f3fc","\uD83D\uDC85\uD83C\uDFFB":"1f485-1f3fb","\uD83D\uDC83\uD83C\uDFFF":"1f483-1f3ff","\uD83D\uDC83\uD83C\uDFFE":"1f483-1f3fe","\uD83D\uDC83\uD83C\uDFFD":"1f483-1f3fd","\uD83D\uDC83\uD83C\uDFFC":"1f483-1f3fc","\uD83D\uDC83\uD83C\uDFFB":"1f483-1f3fb","\uD83D\uDC82\uD83C\uDFFF":"1f482-1f3ff","\uD83D\uDC82\uD83C\uDFFE":"1f482-1f3fe","\uD83D\uDC82\uD83C\uDFFD":"1f482-1f3fd","\uD83D\uDC82\uD83C\uDFFC":"1f482-1f3fc","\uD83D\uDC82\uD83C\uDFFB":"1f482-1f3fb","\uD83D\uDC81\uD83C\uDFFF":"1f481-1f3ff","\uD83D\uDC81\uD83C\uDFFE":"1f481-1f3fe","\uD83D\uDC81\uD83C\uDFFD":"1f481-1f3fd","\uD83D\uDC81\uD83C\uDFFC":"1f481-1f3fc","\uD83D\uDC81\uD83C\uDFFB":"1f481-1f3fb","\uD83D\uDC7C\uD83C\uDFFF":"1f47c-1f3ff","\uD83D\uDC7C\uD83C\uDFFE":"1f47c-1f3fe","\uD83D\uDC7C\uD83C\uDFFD":"1f47c-1f3fd","\uD83D\uDC7C\uD83C\uDFFC":"1f47c-1f3fc","\uD83D\uDC7C\uD83C\uDFFB":"1f47c-1f3fb","\uD83D\uDC78\uD83C\uDFFF":"1f478-1f3ff","\uD83D\uDC78\uD83C\uDFFE":"1f478-1f3fe","\uD83D\uDC78\uD83C\uDFFD":"1f478-1f3fd","\uD83D\uDC78\uD83C\uDFFC":"1f478-1f3fc","\uD83D\uDC78\uD83C\uDFFB":"1f478-1f3fb","\uD83D\uDC77\uD83C\uDFFF":"1f477-1f3ff","\uD83D\uDC77\uD83C\uDFFE":"1f477-1f3fe","\uD83D\uDC77\uD83C\uDFFD":"1f477-1f3fd","\uD83D\uDC77\uD83C\uDFFC":"1f477-1f3fc","\uD83D\uDC77\uD83C\uDFFB":"1f477-1f3fb","\uD83D\uDC76\uD83C\uDFFF":"1f476-1f3ff","\uD83D\uDC76\uD83C\uDFFE":"1f476-1f3fe","\uD83D\uDC76\uD83C\uDFFD":"1f476-1f3fd","\uD83D\uDC76\uD83C\uDFFC":"1f476-1f3fc","\uD83D\uDC76\uD83C\uDFFB":"1f476-1f3fb","\uD83D\uDC75\uD83C\uDFFF":"1f475-1f3ff","\uD83D\uDC75\uD83C\uDFFE":"1f475-1f3fe","\uD83D\uDC75\uD83C\uDFFD":"1f475-1f3fd","\uD83D\uDC75\uD83C\uDFFC":"1f475-1f3fc","\uD83D\uDC75\uD83C\uDFFB":"1f475-1f3fb","\uD83D\uDC74\uD83C\uDFFF":"1f474-1f3ff","\uD83D\uDC74\uD83C\uDFFE":"1f474-1f3fe","\uD83D\uDC74\uD83C\uDFFD":"1f474-1f3fd","\uD83D\uDC74\uD83C\uDFFC":"1f474-1f3fc","\uD83D\uDC74\uD83C\uDFFB":"1f474-1f3fb","\uD83D\uDC73\uD83C\uDFFF":"1f473-1f3ff","\uD83D\uDC73\uD83C\uDFFE":"1f473-1f3fe","\uD83D\uDC73\uD83C\uDFFD":"1f473-1f3fd","\uD83D\uDC73\uD83C\uDFFC":"1f473-1f3fc","\uD83D\uDC73\uD83C\uDFFB":"1f473-1f3fb","\uD83D\uDC72\uD83C\uDFFF":"1f472-1f3ff","\uD83D\uDC72\uD83C\uDFFE":"1f472-1f3fe","\uD83D\uDC72\uD83C\uDFFD":"1f472-1f3fd","\uD83D\uDC72\uD83C\uDFFC":"1f472-1f3fc","\uD83D\uDC72\uD83C\uDFFB":"1f472-1f3fb","\uD83D\uDC71\uD83C\uDFFF":"1f471-1f3ff","\uD83D\uDC71\uD83C\uDFFE":"1f471-1f3fe","\uD83D\uDC71\uD83C\uDFFD":"1f471-1f3fd","\uD83D\uDC71\uD83C\uDFFC":"1f471-1f3fc","\uD83D\uDC71\uD83C\uDFFB":"1f471-1f3fb","\uD83D\uDC70\uD83C\uDFFF":"1f470-1f3ff","\uD83D\uDC70\uD83C\uDFFE":"1f470-1f3fe","\uD83D\uDC70\uD83C\uDFFD":"1f470-1f3fd","\uD83D\uDC70\uD83C\uDFFC":"1f470-1f3fc","\uD83D\uDC70\uD83C\uDFFB":"1f470-1f3fb","\uD83D\uDC6E\uD83C\uDFFF":"1f46e-1f3ff","\uD83D\uDC6E\uD83C\uDFFE":"1f46e-1f3fe","\uD83D\uDC6E\uD83C\uDFFD":"1f46e-1f3fd","\uD83D\uDC6E\uD83C\uDFFC":"1f46e-1f3fc","\uD83D\uDC6E\uD83C\uDFFB":"1f46e-1f3fb","\uD83D\uDC69\uD83C\uDFFF":"1f469-1f3ff","\uD83D\uDC69\uD83C\uDFFE":"1f469-1f3fe","\uD83D\uDC69\uD83C\uDFFD":"1f469-1f3fd","\uD83D\uDC69\uD83C\uDFFC":"1f469-1f3fc","\uD83D\uDC69\uD83C\uDFFB":"1f469-1f3fb","\uD83D\uDC68\uD83C\uDFFF":"1f468-1f3ff","\uD83D\uDC68\uD83C\uDFFE":"1f468-1f3fe","\uD83D\uDC68\uD83C\uDFFD":"1f468-1f3fd","\uD83D\uDC68\uD83C\uDFFC":"1f468-1f3fc","\uD83D\uDC68\uD83C\uDFFB":"1f468-1f3fb","\uD83D\uDC67\uD83C\uDFFF":"1f467-1f3ff","\uD83D\uDC67\uD83C\uDFFE":"1f467-1f3fe","\uD83D\uDC67\uD83C\uDFFD":"1f467-1f3fd","\uD83D\uDC67\uD83C\uDFFC":"1f467-1f3fc","\uD83D\uDC67\uD83C\uDFFB":"1f467-1f3fb","\uD83D\uDC66\uD83C\uDFFF":"1f466-1f3ff","\uD83D\uDC66\uD83C\uDFFE":"1f466-1f3fe","\uD83D\uDC66\uD83C\uDFFD":"1f466-1f3fd","\uD83D\uDC66\uD83C\uDFFC":"1f466-1f3fc","\uD83D\uDC66\uD83C\uDFFB":"1f466-1f3fb","\uD83D\uDC50\uD83C\uDFFF":"1f450-1f3ff","\uD83D\uDC50\uD83C\uDFFE":"1f450-1f3fe","\uD83D\uDC50\uD83C\uDFFD":"1f450-1f3fd","\uD83D\uDC50\uD83C\uDFFC":"1f450-1f3fc","\uD83D\uDC50\uD83C\uDFFB":"1f450-1f3fb","\uD83D\uDC4F\uD83C\uDFFF":"1f44f-1f3ff","\uD83D\uDC4F\uD83C\uDFFE":"1f44f-1f3fe","\uD83D\uDC4F\uD83C\uDFFD":"1f44f-1f3fd","\uD83D\uDC4F\uD83C\uDFFC":"1f44f-1f3fc","\uD83D\uDC4F\uD83C\uDFFB":"1f44f-1f3fb","\uD83D\uDC4E\uD83C\uDFFF":"1f44e-1f3ff","\uD83D\uDC4E\uD83C\uDFFE":"1f44e-1f3fe","\uD83D\uDC4E\uD83C\uDFFD":"1f44e-1f3fd","\uD83D\uDC4E\uD83C\uDFFC":"1f44e-1f3fc","\uD83D\uDC4E\uD83C\uDFFB":"1f44e-1f3fb","\uD83D\uDC4D\uD83C\uDFFF":"1f44d-1f3ff","\uD83D\uDC4D\uD83C\uDFFE":"1f44d-1f3fe","\uD83D\uDC4D\uD83C\uDFFD":"1f44d-1f3fd","\uD83D\uDC4D\uD83C\uDFFC":"1f44d-1f3fc","\uD83D\uDC4D\uD83C\uDFFB":"1f44d-1f3fb","\uD83D\uDC4C\uD83C\uDFFF":"1f44c-1f3ff","\uD83D\uDC4C\uD83C\uDFFE":"1f44c-1f3fe","\uD83D\uDC4C\uD83C\uDFFD":"1f44c-1f3fd","\uD83D\uDC4C\uD83C\uDFFC":"1f44c-1f3fc","\uD83D\uDC4C\uD83C\uDFFB":"1f44c-1f3fb","\uD83D\uDC4B\uD83C\uDFFF":"1f44b-1f3ff","\uD83D\uDC4B\uD83C\uDFFE":"1f44b-1f3fe","\uD83D\uDC4B\uD83C\uDFFD":"1f44b-1f3fd","\uD83D\uDC4B\uD83C\uDFFC":"1f44b-1f3fc","\uD83D\uDC4B\uD83C\uDFFB":"1f44b-1f3fb","\uD83D\uDC4A\uD83C\uDFFF":"1f44a-1f3ff","\uD83D\uDC4A\uD83C\uDFFE":"1f44a-1f3fe","\uD83D\uDC4A\uD83C\uDFFD":"1f44a-1f3fd","\uD83D\uDC4A\uD83C\uDFFC":"1f44a-1f3fc","\uD83D\uDC4A\uD83C\uDFFB":"1f44a-1f3fb","\uD83D\uDC49\uD83C\uDFFF":"1f449-1f3ff","\uD83D\uDC49\uD83C\uDFFE":"1f449-1f3fe","\uD83D\uDC49\uD83C\uDFFD":"1f449-1f3fd","\uD83D\uDC49\uD83C\uDFFC":"1f449-1f3fc","\uD83D\uDC49\uD83C\uDFFB":"1f449-1f3fb","\uD83D\uDC48\uD83C\uDFFF":"1f448-1f3ff","\uD83D\uDC48\uD83C\uDFFE":"1f448-1f3fe","\uD83D\uDC48\uD83C\uDFFD":"1f448-1f3fd","\uD83D\uDC48\uD83C\uDFFC":"1f448-1f3fc","\uD83D\uDC48\uD83C\uDFFB":"1f448-1f3fb","\uD83D\uDC47\uD83C\uDFFF":"1f447-1f3ff","\uD83D\uDC47\uD83C\uDFFE":"1f447-1f3fe","\uD83D\uDC47\uD83C\uDFFD":"1f447-1f3fd","\uD83D\uDC47\uD83C\uDFFC":"1f447-1f3fc","\uD83D\uDC47\uD83C\uDFFB":"1f447-1f3fb","\uD83D\uDC46\uD83C\uDFFF":"1f446-1f3ff","\uD83D\uDC46\uD83C\uDFFE":"1f446-1f3fe","\uD83D\uDC46\uD83C\uDFFD":"1f446-1f3fd","\uD83D\uDC46\uD83C\uDFFC":"1f446-1f3fc","\uD83D\uDC46\uD83C\uDFFB":"1f446-1f3fb","\uD83D\uDC43\uD83C\uDFFF":"1f443-1f3ff","\uD83D\uDC43\uD83C\uDFFE":"1f443-1f3fe","\uD83D\uDC43\uD83C\uDFFD":"1f443-1f3fd","\uD83D\uDC43\uD83C\uDFFC":"1f443-1f3fc","\uD83D\uDC43\uD83C\uDFFB":"1f443-1f3fb","\uD83D\uDC42\uD83C\uDFFF":"1f442-1f3ff","\uD83D\uDC42\uD83C\uDFFE":"1f442-1f3fe","\uD83D\uDC42\uD83C\uDFFD":"1f442-1f3fd","\uD83D\uDC42\uD83C\uDFFC":"1f442-1f3fc","\uD83D\uDC42\uD83C\uDFFB":"1f442-1f3fb","\uD83C\uDFCB\uD83C\uDFFF":"1f3cb-1f3ff","\uD83C\uDFCB\uD83C\uDFFE":"1f3cb-1f3fe","\uD83C\uDFCB\uD83C\uDFFD":"1f3cb-1f3fd","\uD83C\uDFCB\uD83C\uDFFC":"1f3cb-1f3fc","\uD83C\uDFCB\uD83C\uDFFB":"1f3cb-1f3fb","\uD83C\uDFCA\uD83C\uDFFF":"1f3ca-1f3ff","\uD83C\uDFCA\uD83C\uDFFE":"1f3ca-1f3fe","\uD83C\uDFCA\uD83C\uDFFD":"1f3ca-1f3fd","\uD83C\uDFCA\uD83C\uDFFC":"1f3ca-1f3fc","\uD83C\uDFCA\uD83C\uDFFB":"1f3ca-1f3fb","\uD83C\uDFC7\uD83C\uDFFF":"1f3c7-1f3ff","\uD83C\uDFC7\uD83C\uDFFE":"1f3c7-1f3fe","\uD83C\uDFC7\uD83C\uDFFD":"1f3c7-1f3fd","\uD83C\uDFC7\uD83C\uDFFC":"1f3c7-1f3fc","\uD83C\uDFC7\uD83C\uDFFB":"1f3c7-1f3fb","\uD83C\uDFC4\uD83C\uDFFF":"1f3c4-1f3ff","\uD83C\uDFC4\uD83C\uDFFE":"1f3c4-1f3fe","\uD83C\uDFC4\uD83C\uDFFD":"1f3c4-1f3fd","\uD83C\uDFC4\uD83C\uDFFC":"1f3c4-1f3fc","\uD83C\uDFC4\uD83C\uDFFB":"1f3c4-1f3fb","\uD83C\uDFC3\uD83C\uDFFF":"1f3c3-1f3ff","\uD83C\uDFC3\uD83C\uDFFE":"1f3c3-1f3fe","\uD83C\uDFC3\uD83C\uDFFD":"1f3c3-1f3fd","\uD83C\uDFC3\uD83C\uDFFC":"1f3c3-1f3fc","\uD83C\uDFC3\uD83C\uDFFB":"1f3c3-1f3fb","\uD83C\uDF85\uD83C\uDFFF":"1f385-1f3ff","\uD83C\uDF85\uD83C\uDFFE":"1f385-1f3fe","\uD83C\uDF85\uD83C\uDFFD":"1f385-1f3fd","\uD83C\uDF85\uD83C\uDFFC":"1f385-1f3fc","\uD83C\uDF85\uD83C\uDFFB":"1f385-1f3fb","\uD83C\uDDFF\uD83C\uDDFC":"1f1ff-1f1fc","\uD83C\uDDFF\uD83C\uDDF2":"1f1ff-1f1f2","\uD83C\uDDFF\uD83C\uDDE6":"1f1ff-1f1e6","\uD83C\uDDFE\uD83C\uDDF9":"1f1fe-1f1f9","\uD83C\uDDFE\uD83C\uDDEA":"1f1fe-1f1ea","\uD83C\uDDFD\uD83C\uDDF0":"1f1fd-1f1f0","\uD83C\uDDFC\uD83C\uDDF8":"1f1fc-1f1f8","\uD83C\uDDFC\uD83C\uDDEB":"1f1fc-1f1eb","\uD83C\uDDFB\uD83C\uDDFA":"1f1fb-1f1fa","\uD83C\uDDFB\uD83C\uDDF3":"1f1fb-1f1f3","\uD83C\uDDFB\uD83C\uDDEE":"1f1fb-1f1ee","\uD83C\uDDFB\uD83C\uDDEC":"1f1fb-1f1ec","\uD83C\uDDFB\uD83C\uDDEA":"1f1fb-1f1ea","\uD83C\uDDFB\uD83C\uDDE8":"1f1fb-1f1e8","\uD83C\uDDFB\uD83C\uDDE6":"1f1fb-1f1e6","\uD83C\uDDFA\uD83C\uDDFF":"1f1fa-1f1ff","\uD83C\uDDFA\uD83C\uDDFE":"1f1fa-1f1fe","\uD83C\uDDFA\uD83C\uDDF8":"1f1fa-1f1f8","\uD83C\uDDFA\uD83C\uDDF2":"1f1fa-1f1f2","\uD83C\uDDFA\uD83C\uDDEC":"1f1fa-1f1ec","\uD83C\uDDFA\uD83C\uDDE6":"1f1fa-1f1e6","\uD83C\uDDF9\uD83C\uDDFF":"1f1f9-1f1ff","\uD83C\uDDF9\uD83C\uDDFC":"1f1f9-1f1fc","\uD83C\uDDF9\uD83C\uDDFB":"1f1f9-1f1fb","\uD83C\uDDF9\uD83C\uDDF9":"1f1f9-1f1f9","\uD83C\uDDF9\uD83C\uDDF7":"1f1f9-1f1f7","\uD83C\uDDF9\uD83C\uDDF4":"1f1f9-1f1f4","\uD83C\uDDF9\uD83C\uDDF3":"1f1f9-1f1f3","\uD83C\uDDF9\uD83C\uDDF2":"1f1f9-1f1f2","\uD83C\uDDF9\uD83C\uDDF1":"1f1f9-1f1f1","\uD83C\uDDF9\uD83C\uDDF0":"1f1f9-1f1f0","\uD83C\uDDF9\uD83C\uDDEF":"1f1f9-1f1ef","\uD83C\uDDF9\uD83C\uDDED":"1f1f9-1f1ed","\uD83C\uDDF9\uD83C\uDDEC":"1f1f9-1f1ec","\uD83C\uDDF9\uD83C\uDDEB":"1f1f9-1f1eb","\uD83C\uDDF9\uD83C\uDDE9":"1f1f9-1f1e9","\uD83C\uDDF9\uD83C\uDDE8":"1f1f9-1f1e8","\uD83C\uDDF9\uD83C\uDDE6":"1f1f9-1f1e6","\uD83C\uDDF8\uD83C\uDDFF":"1f1f8-1f1ff","\uD83C\uDDF8\uD83C\uDDFE":"1f1f8-1f1fe","\uD83C\uDDF8\uD83C\uDDFD":"1f1f8-1f1fd","\uD83C\uDDF8\uD83C\uDDFB":"1f1f8-1f1fb","\uD83C\uDDF8\uD83C\uDDF9":"1f1f8-1f1f9","\uD83C\uDDF8\uD83C\uDDF8":"1f1f8-1f1f8","\uD83C\uDDF8\uD83C\uDDF7":"1f1f8-1f1f7","\uD83C\uDDF8\uD83C\uDDF4":"1f1f8-1f1f4","\uD83C\uDDF8\uD83C\uDDF3":"1f1f8-1f1f3","\uD83C\uDDF8\uD83C\uDDF2":"1f1f8-1f1f2","\uD83C\uDDF8\uD83C\uDDF1":"1f1f8-1f1f1","\uD83C\uDDF8\uD83C\uDDF0":"1f1f8-1f1f0","\uD83C\uDDF8\uD83C\uDDEF":"1f1f8-1f1ef","\uD83C\uDDF8\uD83C\uDDEE":"1f1f8-1f1ee","\uD83C\uDDF8\uD83C\uDDED":"1f1f8-1f1ed","\uD83C\uDDF8\uD83C\uDDEC":"1f1f8-1f1ec","\uD83C\uDDF8\uD83C\uDDEA":"1f1f8-1f1ea","\uD83C\uDDF8\uD83C\uDDE9":"1f1f8-1f1e9","\uD83C\uDDF8\uD83C\uDDE8":"1f1f8-1f1e8","\uD83C\uDDF8\uD83C\uDDE7":"1f1f8-1f1e7","\uD83C\uDDF8\uD83C\uDDE6":"1f1f8-1f1e6","\uD83C\uDDF7\uD83C\uDDFC":"1f1f7-1f1fc","\uD83C\uDDF7\uD83C\uDDFA":"1f1f7-1f1fa","\uD83C\uDDF7\uD83C\uDDF8":"1f1f7-1f1f8","\uD83C\uDDF7\uD83C\uDDF4":"1f1f7-1f1f4","\uD83C\uDDF7\uD83C\uDDEA":"1f1f7-1f1ea","\uD83C\uDDF6\uD83C\uDDE6":"1f1f6-1f1e6","\uD83C\uDDF5\uD83C\uDDFE":"1f1f5-1f1fe","\uD83C\uDDF5\uD83C\uDDFC":"1f1f5-1f1fc","\uD83C\uDDF5\uD83C\uDDF9":"1f1f5-1f1f9","\uD83C\uDDF5\uD83C\uDDF8":"1f1f5-1f1f8","\uD83C\uDDF5\uD83C\uDDF7":"1f1f5-1f1f7","\uD83C\uDDF5\uD83C\uDDF3":"1f1f5-1f1f3","\uD83C\uDDF5\uD83C\uDDF2":"1f1f5-1f1f2","\uD83C\uDDF5\uD83C\uDDF1":"1f1f5-1f1f1","\uD83C\uDDF5\uD83C\uDDF0":"1f1f5-1f1f0","\uD83C\uDDF5\uD83C\uDDED":"1f1f5-1f1ed","\uD83C\uDDF5\uD83C\uDDEC":"1f1f5-1f1ec","\uD83C\uDDF5\uD83C\uDDEB":"1f1f5-1f1eb","\uD83C\uDDF5\uD83C\uDDEA":"1f1f5-1f1ea","\uD83C\uDDF5\uD83C\uDDE6":"1f1f5-1f1e6","\uD83C\uDDF4\uD83C\uDDF2":"1f1f4-1f1f2","\uD83C\uDDF3\uD83C\uDDFF":"1f1f3-1f1ff","\uD83C\uDDF3\uD83C\uDDFA":"1f1f3-1f1fa","\uD83C\uDDF3\uD83C\uDDF7":"1f1f3-1f1f7","\uD83C\uDDF3\uD83C\uDDF5":"1f1f3-1f1f5","\uD83C\uDDF3\uD83C\uDDF4":"1f1f3-1f1f4","\uD83C\uDDF3\uD83C\uDDF1":"1f1f3-1f1f1","\uD83C\uDDF3\uD83C\uDDEE":"1f1f3-1f1ee","\uD83C\uDDF3\uD83C\uDDEC":"1f1f3-1f1ec","\uD83C\uDDF3\uD83C\uDDEB":"1f1f3-1f1eb","\uD83C\uDDF3\uD83C\uDDEA":"1f1f3-1f1ea","\uD83C\uDDF3\uD83C\uDDE8":"1f1f3-1f1e8","\uD83C\uDDF3\uD83C\uDDE6":"1f1f3-1f1e6","\uD83C\uDDF2\uD83C\uDDFF":"1f1f2-1f1ff","\uD83C\uDDF2\uD83C\uDDFE":"1f1f2-1f1fe","\uD83C\uDDF2\uD83C\uDDFD":"1f1f2-1f1fd","\uD83C\uDDF2\uD83C\uDDFC":"1f1f2-1f1fc","\uD83C\uDDF2\uD83C\uDDFB":"1f1f2-1f1fb","\uD83C\uDDF2\uD83C\uDDFA":"1f1f2-1f1fa","\uD83C\uDDF2\uD83C\uDDF9":"1f1f2-1f1f9","\uD83C\uDDF2\uD83C\uDDF8":"1f1f2-1f1f8","\uD83C\uDDF2\uD83C\uDDF7":"1f1f2-1f1f7","\uD83C\uDDF2\uD83C\uDDF6":"1f1f2-1f1f6","\uD83C\uDDF2\uD83C\uDDF5":"1f1f2-1f1f5","\uD83C\uDDF2\uD83C\uDDF4":"1f1f2-1f1f4","\uD83C\uDDF2\uD83C\uDDF3":"1f1f2-1f1f3","\uD83C\uDDF2\uD83C\uDDF2":"1f1f2-1f1f2","\uD83C\uDDF2\uD83C\uDDF1":"1f1f2-1f1f1","\uD83C\uDDF2\uD83C\uDDF0":"1f1f2-1f1f0","\uD83C\uDDF2\uD83C\uDDED":"1f1f2-1f1ed","\uD83C\uDDF2\uD83C\uDDEC":"1f1f2-1f1ec","\uD83C\uDDF2\uD83C\uDDEB":"1f1f2-1f1eb","\uD83C\uDDF2\uD83C\uDDEA":"1f1f2-1f1ea","\uD83C\uDDF2\uD83C\uDDE9":"1f1f2-1f1e9","\uD83C\uDDF2\uD83C\uDDE8":"1f1f2-1f1e8","\uD83C\uDDF2\uD83C\uDDE6":"1f1f2-1f1e6","\uD83C\uDDF1\uD83C\uDDFE":"1f1f1-1f1fe","\uD83C\uDDF1\uD83C\uDDFB":"1f1f1-1f1fb","\uD83C\uDDF1\uD83C\uDDFA":"1f1f1-1f1fa","\uD83C\uDDF1\uD83C\uDDF9":"1f1f1-1f1f9","\uD83C\uDDF1\uD83C\uDDF8":"1f1f1-1f1f8","\uD83C\uDDF1\uD83C\uDDF7":"1f1f1-1f1f7","\uD83C\uDDF1\uD83C\uDDF0":"1f1f1-1f1f0","\uD83C\uDDF1\uD83C\uDDEE":"1f1f1-1f1ee","\uD83C\uDDF1\uD83C\uDDE8":"1f1f1-1f1e8","\uD83C\uDDF1\uD83C\uDDE7":"1f1f1-1f1e7","\uD83C\uDDF1\uD83C\uDDE6":"1f1f1-1f1e6","\uD83C\uDDF0\uD83C\uDDFF":"1f1f0-1f1ff","\uD83C\uDDF0\uD83C\uDDFE":"1f1f0-1f1fe","\uD83C\uDDF0\uD83C\uDDFC":"1f1f0-1f1fc","\uD83C\uDDF0\uD83C\uDDF7":"1f1f0-1f1f7","\uD83C\uDDF0\uD83C\uDDF5":"1f1f0-1f1f5","\uD83C\uDDF0\uD83C\uDDF3":"1f1f0-1f1f3","\uD83C\uDDF0\uD83C\uDDF2":"1f1f0-1f1f2","\uD83C\uDDF0\uD83C\uDDEE":"1f1f0-1f1ee","\uD83C\uDDF0\uD83C\uDDED":"1f1f0-1f1ed","\uD83C\uDDF0\uD83C\uDDEC":"1f1f0-1f1ec","\uD83C\uDDF0\uD83C\uDDEA":"1f1f0-1f1ea","\uD83C\uDDEF\uD83C\uDDF5":"1f1ef-1f1f5","\uD83C\uDDEF\uD83C\uDDF4":"1f1ef-1f1f4","\uD83C\uDDEF\uD83C\uDDF2":"1f1ef-1f1f2","\uD83C\uDDEF\uD83C\uDDEA":"1f1ef-1f1ea","\uD83C\uDDEE\uD83C\uDDF9":"1f1ee-1f1f9","\uD83C\uDDEE\uD83C\uDDF8":"1f1ee-1f1f8","\uD83C\uDDEE\uD83C\uDDF7":"1f1ee-1f1f7","\uD83C\uDDEE\uD83C\uDDF6":"1f1ee-1f1f6","\uD83C\uDDEE\uD83C\uDDF4":"1f1ee-1f1f4","\uD83C\uDDEE\uD83C\uDDF3":"1f1ee-1f1f3","\uD83C\uDDEE\uD83C\uDDF2":"1f1ee-1f1f2","\uD83C\uDDEE\uD83C\uDDF1":"1f1ee-1f1f1","\uD83C\uDDEE\uD83C\uDDEA":"1f1ee-1f1ea","\uD83C\uDDEE\uD83C\uDDE9":"1f1ee-1f1e9","\uD83C\uDDEE\uD83C\uDDE8":"1f1ee-1f1e8","\uD83C\uDDED\uD83C\uDDFA":"1f1ed-1f1fa","\uD83C\uDDED\uD83C\uDDF9":"1f1ed-1f1f9","\uD83C\uDDED\uD83C\uDDF7":"1f1ed-1f1f7","\uD83C\uDDED\uD83C\uDDF3":"1f1ed-1f1f3","\uD83C\uDDED\uD83C\uDDF2":"1f1ed-1f1f2","\uD83C\uDDED\uD83C\uDDF0":"1f1ed-1f1f0","\uD83C\uDDEC\uD83C\uDDFE":"1f1ec-1f1fe","\uD83C\uDDEC\uD83C\uDDFC":"1f1ec-1f1fc","\uD83C\uDDEC\uD83C\uDDFA":"1f1ec-1f1fa","\uD83C\uDDEC\uD83C\uDDF9":"1f1ec-1f1f9","\uD83C\uDDEC\uD83C\uDDF8":"1f1ec-1f1f8","\uD83C\uDDEC\uD83C\uDDF7":"1f1ec-1f1f7","\uD83C\uDDEC\uD83C\uDDF6":"1f1ec-1f1f6","\uD83C\uDDEC\uD83C\uDDF5":"1f1ec-1f1f5","\uD83C\uDDEC\uD83C\uDDF3":"1f1ec-1f1f3","\uD83C\uDDEC\uD83C\uDDF2":"1f1ec-1f1f2","\uD83C\uDDEC\uD83C\uDDF1":"1f1ec-1f1f1","\uD83C\uDDEC\uD83C\uDDEE":"1f1ec-1f1ee","\uD83C\uDDEC\uD83C\uDDED":"1f1ec-1f1ed","\uD83C\uDDEC\uD83C\uDDEC":"1f1ec-1f1ec","\uD83C\uDDEC\uD83C\uDDEB":"1f1ec-1f1eb","\uD83C\uDDEC\uD83C\uDDEA":"1f1ec-1f1ea","\uD83C\uDDEC\uD83C\uDDE9":"1f1ec-1f1e9","\uD83C\uDDEC\uD83C\uDDE7":"1f1ec-1f1e7","\uD83C\uDDEC\uD83C\uDDE6":"1f1ec-1f1e6","\uD83C\uDDEB\uD83C\uDDF7":"1f1eb-1f1f7","\uD83C\uDDEB\uD83C\uDDF4":"1f1eb-1f1f4","\uD83C\uDDEB\uD83C\uDDF2":"1f1eb-1f1f2","\uD83C\uDDEB\uD83C\uDDF0":"1f1eb-1f1f0","\uD83C\uDDEB\uD83C\uDDEF":"1f1eb-1f1ef","\uD83C\uDDEB\uD83C\uDDEE":"1f1eb-1f1ee","\uD83C\uDDEA\uD83C\uDDFA":"1f1ea-1f1fa","\uD83C\uDDEA\uD83C\uDDF9":"1f1ea-1f1f9","\uD83C\uDDEA\uD83C\uDDF8":"1f1ea-1f1f8","\uD83C\uDDEA\uD83C\uDDF7":"1f1ea-1f1f7","\uD83C\uDDEA\uD83C\uDDED":"1f1ea-1f1ed","\uD83C\uDDEA\uD83C\uDDEC":"1f1ea-1f1ec","\uD83C\uDDEA\uD83C\uDDEA":"1f1ea-1f1ea","\uD83C\uDDEA\uD83C\uDDE8":"1f1ea-1f1e8","\uD83C\uDDEA\uD83C\uDDE6":"1f1ea-1f1e6","\uD83C\uDDE9\uD83C\uDDFF":"1f1e9-1f1ff","\uD83C\uDDE9\uD83C\uDDF4":"1f1e9-1f1f4","\uD83C\uDDE9\uD83C\uDDF2":"1f1e9-1f1f2","\uD83C\uDDE9\uD83C\uDDF0":"1f1e9-1f1f0","\uD83C\uDDE9\uD83C\uDDEF":"1f1e9-1f1ef","\uD83C\uDDE9\uD83C\uDDEC":"1f1e9-1f1ec","\uD83C\uDDE9\uD83C\uDDEA":"1f1e9-1f1ea","\uD83C\uDDE8\uD83C\uDDFF":"1f1e8-1f1ff","\uD83C\uDDE8\uD83C\uDDFE":"1f1e8-1f1fe","\uD83C\uDDE8\uD83C\uDDFD":"1f1e8-1f1fd","\uD83C\uDDE8\uD83C\uDDFC":"1f1e8-1f1fc","\uD83C\uDDE8\uD83C\uDDFB":"1f1e8-1f1fb","\uD83C\uDDE8\uD83C\uDDFA":"1f1e8-1f1fa","\uD83C\uDDE8\uD83C\uDDF7":"1f1e8-1f1f7","\uD83C\uDDE8\uD83C\uDDF5":"1f1e8-1f1f5","\uD83C\uDDE8\uD83C\uDDF4":"1f1e8-1f1f4","\uD83C\uDDE8\uD83C\uDDF3":"1f1e8-1f1f3","\uD83C\uDDE8\uD83C\uDDF2":"1f1e8-1f1f2","\uD83C\uDDE8\uD83C\uDDF1":"1f1e8-1f1f1","\uD83C\uDDE8\uD83C\uDDF0":"1f1e8-1f1f0","\uD83C\uDDE8\uD83C\uDDEE":"1f1e8-1f1ee","\uD83C\uDDE8\uD83C\uDDED":"1f1e8-1f1ed","\uD83C\uDDE8\uD83C\uDDEC":"1f1e8-1f1ec","\uD83C\uDDE8\uD83C\uDDEB":"1f1e8-1f1eb","\uD83C\uDDE8\uD83C\uDDE9":"1f1e8-1f1e9","\uD83C\uDDE8\uD83C\uDDE8":"1f1e8-1f1e8","\uD83C\uDDE8\uD83C\uDDE6":"1f1e8-1f1e6","\uD83C\uDDE7\uD83C\uDDFF":"1f1e7-1f1ff","\uD83C\uDDE7\uD83C\uDDFE":"1f1e7-1f1fe","\uD83C\uDDE7\uD83C\uDDFC":"1f1e7-1f1fc","\uD83C\uDDE7\uD83C\uDDFB":"1f1e7-1f1fb","\uD83C\uDDE7\uD83C\uDDF9":"1f1e7-1f1f9","\uD83C\uDDE7\uD83C\uDDF8":"1f1e7-1f1f8","\uD83C\uDDE7\uD83C\uDDF7":"1f1e7-1f1f7","\uD83C\uDDE7\uD83C\uDDF6":"1f1e7-1f1f6","\uD83C\uDDE7\uD83C\uDDF4":"1f1e7-1f1f4","\uD83C\uDDE7\uD83C\uDDF3":"1f1e7-1f1f3","\uD83C\uDDE7\uD83C\uDDF2":"1f1e7-1f1f2","\uD83C\uDDE7\uD83C\uDDF1":"1f1e7-1f1f1","\uD83C\uDDE7\uD83C\uDDEF":"1f1e7-1f1ef","\uD83C\uDDE7\uD83C\uDDEE":"1f1e7-1f1ee","\uD83C\uDDE7\uD83C\uDDED":"1f1e7-1f1ed","\uD83C\uDDE7\uD83C\uDDEC":"1f1e7-1f1ec","\uD83C\uDDE7\uD83C\uDDEB":"1f1e7-1f1eb","\uD83C\uDDE7\uD83C\uDDEA":"1f1e7-1f1ea","\uD83C\uDDE7\uD83C\uDDE9":"1f1e7-1f1e9","\uD83C\uDDE7\uD83C\uDDE7":"1f1e7-1f1e7","\uD83C\uDDE7\uD83C\uDDE6":"1f1e7-1f1e6","\uD83C\uDDE6\uD83C\uDDFF":"1f1e6-1f1ff","\uD83C\uDDE6\uD83C\uDDFD":"1f1e6-1f1fd","\uD83C\uDDE6\uD83C\uDDFC":"1f1e6-1f1fc","\uD83C\uDDE6\uD83C\uDDFA":"1f1e6-1f1fa","\uD83C\uDDE6\uD83C\uDDF9":"1f1e6-1f1f9","\uD83C\uDDE6\uD83C\uDDF8":"1f1e6-1f1f8","\uD83C\uDDE6\uD83C\uDDF7":"1f1e6-1f1f7","\uD83C\uDDE6\uD83C\uDDF6":"1f1e6-1f1f6","\uD83C\uDDE6\uD83C\uDDF4":"1f1e6-1f1f4","\uD83C\uDDE6\uD83C\uDDF2":"1f1e6-1f1f2","\uD83C\uDDE6\uD83C\uDDF1":"1f1e6-1f1f1","\uD83C\uDDE6\uD83C\uDDEE":"1f1e6-1f1ee","\uD83C\uDDE6\uD83C\uDDEC":"1f1e6-1f1ec","\uD83C\uDDE6\uD83C\uDDEB":"1f1e6-1f1eb","\uD83C\uDDE6\uD83C\uDDEA":"1f1e6-1f1ea","\uD83C\uDDE6\uD83C\uDDE9":"1f1e6-1f1e9","\uD83C\uDDE6\uD83C\uDDE8":"1f1e6-1f1e8","\uD83C\uDC04\uFE0F":"1f004-fe0f","\uD83C\uDC04":"1f004","\uD83C\uDD7F\uFE0F":"1f17f-fe0f","\uD83C\uDD7F":"1f17f","\uD83C\uDE02\uFE0F":"1f202-fe0f","\uD83C\uDE02":"1f202","\uD83C\uDE1A\uFE0F":"1f21a-fe0f","\uD83C\uDE1A":"1f21a","\uD83C\uDE2F\uFE0F":"1f22f-fe0f","\uD83C\uDE2F":"1f22f","\uD83C\uDE37\uFE0F":"1f237-fe0f","\uD83C\uDE37":"1f237","\uD83C\uDF9E\uFE0F":"1f39e-fe0f","\uD83C\uDF9E":"1f39e","\uD83C\uDF9F\uFE0F":"1f39f-fe0f","\uD83C\uDF9F":"1f39f","\uD83C\uDFCB\uFE0F":"1f3cb-fe0f","\uD83C\uDFCB":"1f3cb","\uD83C\uDFCC\uFE0F":"1f3cc-fe0f","\uD83C\uDFCC":"1f3cc","\uD83C\uDFCD\uFE0F":"1f3cd-fe0f","\uD83C\uDFCD":"1f3cd","\uD83C\uDFCE\uFE0F":"1f3ce-fe0f","\uD83C\uDFCE":"1f3ce","\uD83C\uDF96\uFE0F":"1f396-fe0f","\uD83C\uDF96":"1f396","\uD83C\uDF97\uFE0F":"1f397-fe0f","\uD83C\uDF97":"1f397","\uD83C\uDF36\uFE0F":"1f336-fe0f","\uD83C\uDF36":"1f336","\uD83C\uDF27\uFE0F":"1f327-fe0f","\uD83C\uDF27":"1f327","\uD83C\uDF28\uFE0F":"1f328-fe0f","\uD83C\uDF28":"1f328","\uD83C\uDF29\uFE0F":"1f329-fe0f","\uD83C\uDF29":"1f329","\uD83C\uDF2A\uFE0F":"1f32a-fe0f","\uD83C\uDF2A":"1f32a","\uD83C\uDF2B\uFE0F":"1f32b-fe0f","\uD83C\uDF2B":"1f32b","\uD83C\uDF2C\uFE0F":"1f32c-fe0f","\uD83C\uDF2C":"1f32c","\uD83D\uDC3F\uFE0F":"1f43f-fe0f","\uD83D\uDC3F":"1f43f","\uD83D\uDD77\uFE0F":"1f577-fe0f","\uD83D\uDD77":"1f577","\uD83D\uDD78\uFE0F":"1f578-fe0f","\uD83D\uDD78":"1f578","\uD83C\uDF21\uFE0F":"1f321-fe0f","\uD83C\uDF21":"1f321","\uD83C\uDF99\uFE0F":"1f399-fe0f","\uD83C\uDF99":"1f399","\uD83C\uDF9A\uFE0F":"1f39a-fe0f","\uD83C\uDF9A":"1f39a","\uD83C\uDF9B\uFE0F":"1f39b-fe0f","\uD83C\uDF9B":"1f39b","\uD83C\uDFF3\uFE0F":"1f3f3-fe0f","\uD83C\uDFF3":"1f3f3","\uD83C\uDFF5\uFE0F":"1f3f5-fe0f","\uD83C\uDFF5":"1f3f5","\uD83C\uDFF7\uFE0F":"1f3f7-fe0f","\uD83C\uDFF7":"1f3f7","\uD83D\uDCFD\uFE0F":"1f4fd-fe0f","\uD83D\uDCFD":"1f4fd","\uD83D\uDD49\uFE0F":"1f549-fe0f","\uD83D\uDD49":"1f549","\uD83D\uDD4A\uFE0F":"1f54a-fe0f","\uD83D\uDD4A":"1f54a","\uD83D\uDD6F\uFE0F":"1f56f-fe0f","\uD83D\uDD6F":"1f56f","\uD83D\uDD70\uFE0F":"1f570-fe0f","\uD83D\uDD70":"1f570","\uD83D\uDD73\uFE0F":"1f573-fe0f","\uD83D\uDD73":"1f573","\uD83D\uDD76\uFE0F":"1f576-fe0f","\uD83D\uDD76":"1f576","\uD83D\uDD79\uFE0F":"1f579-fe0f","\uD83D\uDD79":"1f579","\uD83D\uDD87\uFE0F":"1f587-fe0f","\uD83D\uDD87":"1f587","\uD83D\uDD8A\uFE0F":"1f58a-fe0f","\uD83D\uDD8A":"1f58a","\uD83D\uDD8B\uFE0F":"1f58b-fe0f","\uD83D\uDD8B":"1f58b","\uD83D\uDD8C\uFE0F":"1f58c-fe0f","\uD83D\uDD8C":"1f58c","\uD83D\uDD8D\uFE0F":"1f58d-fe0f","\uD83D\uDD8D":"1f58d","\uD83D\uDDA5\uFE0F":"1f5a5-fe0f","\uD83D\uDDA5":"1f5a5","\uD83D\uDDA8\uFE0F":"1f5a8-fe0f","\uD83D\uDDA8":"1f5a8","\uD83D\uDDB2\uFE0F":"1f5b2-fe0f","\uD83D\uDDB2":"1f5b2","\uD83D\uDDBC\uFE0F":"1f5bc-fe0f","\uD83D\uDDBC":"1f5bc","\uD83D\uDDC2\uFE0F":"1f5c2-fe0f","\uD83D\uDDC2":"1f5c2","\uD83D\uDDC3\uFE0F":"1f5c3-fe0f","\uD83D\uDDC3":"1f5c3","\uD83D\uDDC4\uFE0F":"1f5c4-fe0f","\uD83D\uDDC4":"1f5c4","\uD83D\uDDD1\uFE0F":"1f5d1-fe0f","\uD83D\uDDD1":"1f5d1","\uD83D\uDDD2\uFE0F":"1f5d2-fe0f","\uD83D\uDDD2":"1f5d2","\uD83D\uDDD3\uFE0F":"1f5d3-fe0f","\uD83D\uDDD3":"1f5d3","\uD83D\uDDDC\uFE0F":"1f5dc-fe0f","\uD83D\uDDDC":"1f5dc","\uD83D\uDDDD\uFE0F":"1f5dd-fe0f","\uD83D\uDDDD":"1f5dd","\uD83D\uDDDE\uFE0F":"1f5de-fe0f","\uD83D\uDDDE":"1f5de","\uD83D\uDDE1\uFE0F":"1f5e1-fe0f","\uD83D\uDDE1":"1f5e1","\uD83D\uDDE3\uFE0F":"1f5e3-fe0f","\uD83D\uDDE3":"1f5e3","\uD83D\uDDE8\uFE0F":"1f5e8-fe0f","\uD83D\uDDE8":"1f5e8","\uD83D\uDDEF\uFE0F":"1f5ef-fe0f","\uD83D\uDDEF":"1f5ef","\uD83D\uDDF3\uFE0F":"1f5f3-fe0f","\uD83D\uDDF3":"1f5f3","\uD83D\uDDFA\uFE0F":"1f5fa-fe0f","\uD83D\uDDFA":"1f5fa","\uD83D\uDEE0\uFE0F":"1f6e0-fe0f","\uD83D\uDEE0":"1f6e0","\uD83D\uDEE1\uFE0F":"1f6e1-fe0f","\uD83D\uDEE1":"1f6e1","\uD83D\uDEE2\uFE0F":"1f6e2-fe0f","\uD83D\uDEE2":"1f6e2","\uD83D\uDEF0\uFE0F":"1f6f0-fe0f","\uD83D\uDEF0":"1f6f0","\uD83C\uDF7D\uFE0F":"1f37d-fe0f","\uD83C\uDF7D":"1f37d","\uD83D\uDC41\uFE0F":"1f441-fe0f","\uD83D\uDC41":"1f441","\uD83D\uDD74\uFE0F":"1f574-fe0f","\uD83D\uDD74":"1f574","\uD83D\uDD75\uFE0F":"1f575-fe0f","\uD83D\uDD75":"1f575","\uD83D\uDD90\uFE0F":"1f590-fe0f","\uD83D\uDD90":"1f590","\uD83C\uDFD4\uFE0F":"1f3d4-fe0f","\uD83C\uDFD4":"1f3d4","\uD83C\uDFD5\uFE0F":"1f3d5-fe0f","\uD83C\uDFD5":"1f3d5","\uD83C\uDFD6\uFE0F":"1f3d6-fe0f","\uD83C\uDFD6":"1f3d6","\uD83C\uDFD7\uFE0F":"1f3d7-fe0f","\uD83C\uDFD7":"1f3d7","\uD83C\uDFD8\uFE0F":"1f3d8-fe0f","\uD83C\uDFD8":"1f3d8","\uD83C\uDFD9\uFE0F":"1f3d9-fe0f","\uD83C\uDFD9":"1f3d9","\uD83C\uDFDA\uFE0F":"1f3da-fe0f","\uD83C\uDFDA":"1f3da","\uD83C\uDFDB\uFE0F":"1f3db-fe0f","\uD83C\uDFDB":"1f3db","\uD83C\uDFDC\uFE0F":"1f3dc-fe0f","\uD83C\uDFDC":"1f3dc","\uD83C\uDFDD\uFE0F":"1f3dd-fe0f","\uD83C\uDFDD":"1f3dd","\uD83C\uDFDE\uFE0F":"1f3de-fe0f","\uD83C\uDFDE":"1f3de","\uD83C\uDFDF\uFE0F":"1f3df-fe0f","\uD83C\uDFDF":"1f3df","\uD83D\uDECB\uFE0F":"1f6cb-fe0f","\uD83D\uDECB":"1f6cb","\uD83D\uDECD\uFE0F":"1f6cd-fe0f","\uD83D\uDECD":"1f6cd","\uD83D\uDECE\uFE0F":"1f6ce-fe0f","\uD83D\uDECE":"1f6ce","\uD83D\uDECF\uFE0F":"1f6cf-fe0f","\uD83D\uDECF":"1f6cf","\uD83D\uDEE3\uFE0F":"1f6e3-fe0f","\uD83D\uDEE3":"1f6e3","\uD83D\uDEE4\uFE0F":"1f6e4-fe0f","\uD83D\uDEE4":"1f6e4","\uD83D\uDEE5\uFE0F":"1f6e5-fe0f","\uD83D\uDEE5":"1f6e5","\uD83D\uDEE9\uFE0F":"1f6e9-fe0f","\uD83D\uDEE9":"1f6e9","\uD83D\uDEF3\uFE0F":"1f6f3-fe0f","\uD83D\uDEF3":"1f6f3","\uD83C\uDF24\uFE0F":"1f324-fe0f","\uD83C\uDF24":"1f324","\uD83C\uDF25\uFE0F":"1f325-fe0f","\uD83C\uDF25":"1f325","\uD83C\uDF26\uFE0F":"1f326-fe0f","\uD83C\uDF26":"1f326","\uD83D\uDDB1\uFE0F":"1f5b1-fe0f","\uD83D\uDDB1":"1f5b1","\u261D\uD83C\uDFFB":"261d-1f3fb","\u261D\uD83C\uDFFC":"261d-1f3fc","\u261D\uD83C\uDFFD":"261d-1f3fd","\u261D\uD83C\uDFFE":"261d-1f3fe","\u261D\uD83C\uDFFF":"261d-1f3ff","\u270C\uD83C\uDFFB":"270c-1f3fb","\u270C\uD83C\uDFFC":"270c-1f3fc","\u270C\uD83C\uDFFD":"270c-1f3fd","\u270C\uD83C\uDFFE":"270c-1f3fe","\u270C\uD83C\uDFFF":"270c-1f3ff","\u270A\uD83C\uDFFB":"270a-1f3fb","\u270A\uD83C\uDFFC":"270a-1f3fc","\u270A\uD83C\uDFFD":"270a-1f3fd","\u270A\uD83C\uDFFE":"270a-1f3fe","\u270A\uD83C\uDFFF":"270a-1f3ff","\u270B\uD83C\uDFFB":"270b-1f3fb","\u270B\uD83C\uDFFC":"270b-1f3fc","\u270B\uD83C\uDFFD":"270b-1f3fd","\u270B\uD83C\uDFFE":"270b-1f3fe","\u270B\uD83C\uDFFF":"270b-1f3ff","\u270D\uD83C\uDFFB":"270d-1f3fb","\u270D\uD83C\uDFFC":"270d-1f3fc","\u270D\uD83C\uDFFD":"270d-1f3fd","\u270D\uD83C\uDFFE":"270d-1f3fe","\u270D\uD83C\uDFFF":"270d-1f3ff","\u26F9\uD83C\uDFFB":"26f9-1f3fb","\u26F9\uD83C\uDFFC":"26f9-1f3fc","\u26F9\uD83C\uDFFD":"26f9-1f3fd","\u26F9\uD83C\uDFFE":"26f9-1f3fe","\u26F9\uD83C\uDFFF":"26f9-1f3ff","\u00A9\uFE0F":"00a9-fe0f","\u00A9":"00a9","\u00AE\uFE0F":"00ae-fe0f","\u00AE":"00ae","\u203C\uFE0F":"203c-fe0f","\u203C":"203c","\u2049\uFE0F":"2049-fe0f","\u2049":"2049","\u2122\uFE0F":"2122-fe0f","\u2122":"2122","\u2139\uFE0F":"2139-fe0f","\u2139":"2139","\u2194\uFE0F":"2194-fe0f","\u2194":"2194","\u2195\uFE0F":"2195-fe0f","\u2195":"2195","\u2196\uFE0F":"2196-fe0f","\u2196":"2196","\u2197\uFE0F":"2197-fe0f","\u2197":"2197","\u2198\uFE0F":"2198-fe0f","\u2198":"2198","\u2199\uFE0F":"2199-fe0f","\u2199":"2199","\u21A9\uFE0F":"21a9-fe0f","\u21A9":"21a9","\u21AA\uFE0F":"21aa-fe0f","\u21AA":"21aa","\u231A\uFE0F":"231a-fe0f","\u231A":"231a","\u231B\uFE0F":"231b-fe0f","\u231B":"231b","\u24C2\uFE0F":"24c2-fe0f","\u24C2":"24c2","\u25AA\uFE0F":"25aa-fe0f","\u25AA":"25aa","\u25AB\uFE0F":"25ab-fe0f","\u25AB":"25ab","\u25B6\uFE0F":"25b6-fe0f","\u25B6":"25b6","\u25C0\uFE0F":"25c0-fe0f","\u25C0":"25c0","\u25FB\uFE0F":"25fb-fe0f","\u25FB":"25fb","\u25FC\uFE0F":"25fc-fe0f","\u25FC":"25fc","\u25FD\uFE0F":"25fd-fe0f","\u25FD":"25fd","\u25FE\uFE0F":"25fe-fe0f","\u25FE":"25fe","\u2600\uFE0F":"2600-fe0f","\u2600":"2600","\u2601\uFE0F":"2601-fe0f","\u2601":"2601","\u260E\uFE0F":"260e-fe0f","\u260E":"260e","\u2611\uFE0F":"2611-fe0f","\u2611":"2611","\u2614\uFE0F":"2614-fe0f","\u2614":"2614","\u2615\uFE0F":"2615-fe0f","\u2615":"2615","\u261D\uFE0F":"261d-fe0f","\u261D":"261d","\u263A\uFE0F":"263a-fe0f","\u263A":"263a","\u2648\uFE0F":"2648-fe0f","\u2648":"2648","\u2649\uFE0F":"2649-fe0f","\u2649":"2649","\u264A\uFE0F":"264a-fe0f","\u264A":"264a","\u264B\uFE0F":"264b-fe0f","\u264B":"264b","\u264C\uFE0F":"264c-fe0f","\u264C":"264c","\u264D\uFE0F":"264d-fe0f","\u264D":"264d","\u264E\uFE0F":"264e-fe0f","\u264E":"264e","\u264F\uFE0F":"264f-fe0f","\u264F":"264f","\u2650\uFE0F":"2650-fe0f","\u2650":"2650","\u2651\uFE0F":"2651-fe0f","\u2651":"2651","\u2652\uFE0F":"2652-fe0f","\u2652":"2652","\u2653\uFE0F":"2653-fe0f","\u2653":"2653","\u2660\uFE0F":"2660-fe0f","\u2660":"2660","\u2663\uFE0F":"2663-fe0f","\u2663":"2663","\u2665\uFE0F":"2665-fe0f","\u2665":"2665","\u2666\uFE0F":"2666-fe0f","\u2666":"2666","\u2668\uFE0F":"2668-fe0f","\u2668":"2668","\u267B\uFE0F":"267b-fe0f","\u267B":"267b","\u267F\uFE0F":"267f-fe0f","\u267F":"267f","\u2693\uFE0F":"2693-fe0f","\u2693":"2693","\u26A0\uFE0F":"26a0-fe0f","\u26A0":"26a0","\u26A1\uFE0F":"26a1-fe0f","\u26A1":"26a1","\u26AA\uFE0F":"26aa-fe0f","\u26AA":"26aa","\u26AB\uFE0F":"26ab-fe0f","\u26AB":"26ab","\u26BD\uFE0F":"26bd-fe0f","\u26BD":"26bd","\u26BE\uFE0F":"26be-fe0f","\u26BE":"26be","\u26C4\uFE0F":"26c4-fe0f","\u26C4":"26c4","\u26C5\uFE0F":"26c5-fe0f","\u26C5":"26c5","\u26D4\uFE0F":"26d4-fe0f","\u26D4":"26d4","\u26EA\uFE0F":"26ea-fe0f","\u26EA":"26ea","\u26F2\uFE0F":"26f2-fe0f","\u26F2":"26f2","\u26F3\uFE0F":"26f3-fe0f","\u26F3":"26f3","\u26F5\uFE0F":"26f5-fe0f","\u26F5":"26f5","\u26FA\uFE0F":"26fa-fe0f","\u26FA":"26fa","\u26FD\uFE0F":"26fd-fe0f","\u26FD":"26fd","\u2702\uFE0F":"2702-fe0f","\u2702":"2702","\u2708\uFE0F":"2708-fe0f","\u2708":"2708","\u2709\uFE0F":"2709-fe0f","\u2709":"2709","\u270C\uFE0F":"270c-fe0f","\u270C":"270c","\u270F\uFE0F":"270f-fe0f","\u270F":"270f","\u2712\uFE0F":"2712-fe0f","\u2712":"2712","\u2714\uFE0F":"2714-fe0f","\u2714":"2714","\u2716\uFE0F":"2716-fe0f","\u2716":"2716","\u2733\uFE0F":"2733-fe0f","\u2733":"2733","\u2734\uFE0F":"2734-fe0f","\u2734":"2734","\u2744\uFE0F":"2744-fe0f","\u2744":"2744","\u2747\uFE0F":"2747-fe0f","\u2747":"2747","\u2757\uFE0F":"2757-fe0f","\u2757":"2757","\u2764\uFE0F":"2764-fe0f","\u2764":"2764","\u27A1\uFE0F":"27a1-fe0f","\u27A1":"27a1","\u2934\uFE0F":"2934-fe0f","\u2934":"2934","\u2935\uFE0F":"2935-fe0f","\u2935":"2935","\u2B05\uFE0F":"2b05-fe0f","\u2B05":"2b05","\u2B06\uFE0F":"2b06-fe0f","\u2B06":"2b06","\u2B07\uFE0F":"2b07-fe0f","\u2B07":"2b07","\u2B1B\uFE0F":"2b1b-fe0f","\u2B1B":"2b1b","\u2B1C\uFE0F":"2b1c-fe0f","\u2B1C":"2b1c","\u2B50\uFE0F":"2b50-fe0f","\u2B50":"2b50","\u2B55\uFE0F":"2b55-fe0f","\u2B55":"2b55","\u3030\uFE0F":"3030-fe0f","\u3030":"3030","\u303D\uFE0F":"303d-fe0f","\u303D":"303d","\u3297\uFE0F":"3297-fe0f","\u3297":"3297","\u3299\uFE0F":"3299-fe0f","\u3299":"3299","\u271D\uFE0F":"271d-fe0f","\u271D":"271d","\u2328\uFE0F":"2328-fe0f","\u2328":"2328","\u270D\uFE0F":"270d-fe0f","\u270D":"270d","\u23CF\uFE0F":"23cf-fe0f","\u23CF":"23cf","\u23ED\uFE0F":"23ed-fe0f","\u23ED":"23ed","\u23EE\uFE0F":"23ee-fe0f","\u23EE":"23ee","\u23EF\uFE0F":"23ef-fe0f","\u23EF":"23ef","\u23F1\uFE0F":"23f1-fe0f","\u23F1":"23f1","\u23F2\uFE0F":"23f2-fe0f","\u23F2":"23f2","\u23F8\uFE0F":"23f8-fe0f","\u23F8":"23f8","\u23F9\uFE0F":"23f9-fe0f","\u23F9":"23f9","\u23FA\uFE0F":"23fa-fe0f","\u23FA":"23fa","\u2602\uFE0F":"2602-fe0f","\u2602":"2602","\u2603\uFE0F":"2603-fe0f","\u2603":"2603","\u2604\uFE0F":"2604-fe0f","\u2604":"2604","\u2618\uFE0F":"2618-fe0f","\u2618":"2618","\u2620\uFE0F":"2620-fe0f","\u2620":"2620","\u2622\uFE0F":"2622-fe0f","\u2622":"2622","\u2623\uFE0F":"2623-fe0f","\u2623":"2623","\u2626\uFE0F":"2626-fe0f","\u2626":"2626","\u262A\uFE0F":"262a-fe0f","\u262A":"262a","\u262E\uFE0F":"262e-fe0f","\u262E":"262e","\u262F\uFE0F":"262f-fe0f","\u262F":"262f","\u2638\uFE0F":"2638-fe0f","\u2638":"2638","\u2639\uFE0F":"2639-fe0f","\u2639":"2639","\u2692\uFE0F":"2692-fe0f","\u2692":"2692","\u2694\uFE0F":"2694-fe0f","\u2694":"2694","\u2696\uFE0F":"2696-fe0f","\u2696":"2696","\u2697\uFE0F":"2697-fe0f","\u2697":"2697","\u2699\uFE0F":"2699-fe0f","\u2699":"2699","\u269B\uFE0F":"269b-fe0f","\u269B":"269b","\u269C\uFE0F":"269c-fe0f","\u269C":"269c","\u26B0\uFE0F":"26b0-fe0f","\u26B0":"26b0","\u26B1\uFE0F":"26b1-fe0f","\u26B1":"26b1","\u26C8\uFE0F":"26c8-fe0f","\u26C8":"26c8","\u26CF\uFE0F":"26cf-fe0f","\u26CF":"26cf","\u26D1\uFE0F":"26d1-fe0f","\u26D1":"26d1","\u26D3\uFE0F":"26d3-fe0f","\u26D3":"26d3","\u26E9\uFE0F":"26e9-fe0f","\u26E9":"26e9","\u26F0\uFE0F":"26f0-fe0f","\u26F0":"26f0","\u26F1\uFE0F":"26f1-fe0f","\u26F1":"26f1","\u26F4\uFE0F":"26f4-fe0f","\u26F4":"26f4","\u26F7\uFE0F":"26f7-fe0f","\u26F7":"26f7","\u26F8\uFE0F":"26f8-fe0f","\u26F8":"26f8","\u26F9\uFE0F":"26f9-fe0f","\u26F9":"26f9","\u2721\uFE0F":"2721-fe0f","\u2721":"2721","\u2763\uFE0F":"2763-fe0f","\u2763":"2763","\uD83E\uDD49":"1f949","\uD83E\uDD48":"1f948","\uD83E\uDD47":"1f947","\uD83E\uDD3A":"1f93a","\uD83E\uDD45":"1f945","\uD83E\uDD3E":"1f93e","\uD83C\uDDFF":"1f1ff","\uD83E\uDD3D":"1f93d","\uD83E\uDD4B":"1f94b","\uD83E\uDD4A":"1f94a","\uD83E\uDD3C":"1f93c","\uD83E\uDD39":"1f939","\uD83E\uDD38":"1f938","\uD83D\uDEF6":"1f6f6","\uD83D\uDEF5":"1f6f5","\uD83D\uDEF4":"1f6f4","\uD83D\uDED2":"1f6d2","\uD83C\uDCCF":"1f0cf","\uD83C\uDD70":"1f170","\uD83C\uDD71":"1f171","\uD83C\uDD7E":"1f17e","\uD83D\uDED1":"1f6d1","\uD83C\uDD8E":"1f18e","\uD83C\uDD91":"1f191","\uD83C\uDDFE":"1f1fe","\uD83C\uDD92":"1f192","\uD83C\uDD93":"1f193","\uD83C\uDD94":"1f194","\uD83C\uDD95":"1f195","\uD83C\uDD96":"1f196","\uD83C\uDD97":"1f197","\uD83C\uDD98":"1f198","\uD83E\uDD44":"1f944","\uD83C\uDD99":"1f199","\uD83C\uDD9A":"1f19a","\uD83E\uDD42":"1f942","\uD83E\uDD43":"1f943","\uD83C\uDE01":"1f201","\uD83E\uDD59":"1f959","\uD83C\uDE32":"1f232","\uD83C\uDE33":"1f233","\uD83C\uDE34":"1f234","\uD83C\uDE35":"1f235","\uD83C\uDE36":"1f236","\uD83E\uDD58":"1f958","\uD83C\uDE38":"1f238","\uD83C\uDE39":"1f239","\uD83E\uDD57":"1f957","\uD83C\uDE3A":"1f23a","\uD83C\uDE50":"1f250","\uD83C\uDE51":"1f251","\uD83C\uDF00":"1f300","\uD83E\uDD56":"1f956","\uD83C\uDF01":"1f301","\uD83C\uDF02":"1f302","\uD83C\uDF03":"1f303","\uD83C\uDF04":"1f304","\uD83C\uDF05":"1f305","\uD83C\uDF06":"1f306","\uD83E\uDD55":"1f955","\uD83C\uDF07":"1f307","\uD83C\uDF08":"1f308","\uD83E\uDD54":"1f954","\uD83C\uDF09":"1f309","\uD83C\uDF0A":"1f30a","\uD83C\uDF0B":"1f30b","\uD83C\uDF0C":"1f30c","\uD83C\uDF0F":"1f30f","\uD83C\uDF11":"1f311","\uD83E\uDD53":"1f953","\uD83C\uDF13":"1f313","\uD83C\uDF14":"1f314","\uD83C\uDF15":"1f315","\uD83C\uDF19":"1f319","\uD83C\uDF1B":"1f31b","\uD83C\uDF1F":"1f31f","\uD83E\uDD52":"1f952","\uD83C\uDF20":"1f320","\uD83C\uDF30":"1f330","\uD83E\uDD51":"1f951","\uD83C\uDF31":"1f331","\uD83C\uDF34":"1f334","\uD83C\uDF35":"1f335","\uD83C\uDF37":"1f337","\uD83C\uDF38":"1f338","\uD83C\uDF39":"1f339","\uD83C\uDF3A":"1f33a","\uD83C\uDF3B":"1f33b","\uD83C\uDF3C":"1f33c","\uD83C\uDF3D":"1f33d","\uD83E\uDD50":"1f950","\uD83C\uDF3E":"1f33e","\uD83C\uDF3F":"1f33f","\uD83C\uDF40":"1f340","\uD83C\uDF41":"1f341","\uD83C\uDF42":"1f342","\uD83C\uDF43":"1f343","\uD83C\uDF44":"1f344","\uD83C\uDF45":"1f345","\uD83C\uDF46":"1f346","\uD83C\uDF47":"1f347","\uD83C\uDF48":"1f348","\uD83C\uDF49":"1f349","\uD83C\uDF4A":"1f34a","\uD83E\uDD40":"1f940","\uD83C\uDF4C":"1f34c","\uD83C\uDF4D":"1f34d","\uD83C\uDF4E":"1f34e","\uD83C\uDF4F":"1f34f","\uD83C\uDF51":"1f351","\uD83C\uDF52":"1f352","\uD83C\uDF53":"1f353","\uD83E\uDD8F":"1f98f","\uD83C\uDF54":"1f354","\uD83C\uDF55":"1f355","\uD83C\uDF56":"1f356","\uD83E\uDD8E":"1f98e","\uD83C\uDF57":"1f357","\uD83C\uDF58":"1f358","\uD83C\uDF59":"1f359","\uD83E\uDD8D":"1f98d","\uD83C\uDF5A":"1f35a","\uD83C\uDF5B":"1f35b","\uD83E\uDD8C":"1f98c","\uD83C\uDF5C":"1f35c","\uD83C\uDF5D":"1f35d","\uD83C\uDF5E":"1f35e","\uD83C\uDF5F":"1f35f","\uD83E\uDD8B":"1f98b","\uD83C\uDF60":"1f360","\uD83C\uDF61":"1f361","\uD83E\uDD8A":"1f98a","\uD83C\uDF62":"1f362","\uD83C\uDF63":"1f363","\uD83E\uDD89":"1f989","\uD83C\uDF64":"1f364","\uD83C\uDF65":"1f365","\uD83E\uDD88":"1f988","\uD83C\uDF66":"1f366","\uD83E\uDD87":"1f987","\uD83C\uDF67":"1f367","\uD83C\uDDFD":"1f1fd","\uD83C\uDF68":"1f368","\uD83E\uDD86":"1f986","\uD83C\uDF69":"1f369","\uD83E\uDD85":"1f985","\uD83C\uDF6A":"1f36a","\uD83D\uDDA4":"1f5a4","\uD83C\uDF6B":"1f36b","\uD83C\uDF6C":"1f36c","\uD83C\uDF6D":"1f36d","\uD83C\uDF6E":"1f36e","\uD83C\uDF6F":"1f36f","\uD83E\uDD1E":"1f91e","\uD83C\uDF70":"1f370","\uD83C\uDF71":"1f371","\uD83C\uDF72":"1f372","\uD83E\uDD1D":"1f91d","\uD83C\uDF73":"1f373","\uD83C\uDF74":"1f374","\uD83C\uDF75":"1f375","\uD83C\uDF76":"1f376","\uD83C\uDF77":"1f377","\uD83C\uDF78":"1f378","\uD83C\uDF79":"1f379","\uD83C\uDF7A":"1f37a","\uD83C\uDF7B":"1f37b","\uD83C\uDF80":"1f380","\uD83C\uDF81":"1f381","\uD83C\uDF82":"1f382","\uD83C\uDF83":"1f383","\uD83E\uDD1B":"1f91b","\uD83E\uDD1C":"1f91c","\uD83C\uDF84":"1f384","\uD83C\uDF85":"1f385","\uD83C\uDF86":"1f386","\uD83E\uDD1A":"1f91a","\uD83C\uDF87":"1f387","\uD83C\uDF88":"1f388","\uD83C\uDF89":"1f389","\uD83C\uDF8A":"1f38a","\uD83C\uDF8B":"1f38b","\uD83C\uDF8C":"1f38c","\uD83E\uDD19":"1f919","\uD83C\uDF8D":"1f38d","\uD83D\uDD7A":"1f57a","\uD83C\uDF8E":"1f38e","\uD83E\uDD33":"1f933","\uD83C\uDF8F":"1f38f","\uD83E\uDD30":"1f930","\uD83C\uDF90":"1f390","\uD83E\uDD26":"1f926","\uD83E\uDD37":"1f937","\uD83C\uDF91":"1f391","\uD83C\uDF92":"1f392","\uD83C\uDF93":"1f393","\uD83C\uDFA0":"1f3a0","\uD83C\uDFA1":"1f3a1","\uD83C\uDFA2":"1f3a2","\uD83C\uDFA3":"1f3a3","\uD83C\uDFA4":"1f3a4","\uD83C\uDFA5":"1f3a5","\uD83C\uDFA6":"1f3a6","\uD83C\uDFA7":"1f3a7","\uD83E\uDD36":"1f936","\uD83C\uDFA8":"1f3a8","\uD83E\uDD35":"1f935","\uD83C\uDFA9":"1f3a9","\uD83C\uDFAA":"1f3aa","\uD83E\uDD34":"1f934","\uD83C\uDFAB":"1f3ab","\uD83C\uDFAC":"1f3ac","\uD83C\uDFAD":"1f3ad","\uD83E\uDD27":"1f927","\uD83C\uDFAE":"1f3ae","\uD83C\uDFAF":"1f3af","\uD83C\uDFB0":"1f3b0","\uD83C\uDFB1":"1f3b1","\uD83C\uDFB2":"1f3b2","\uD83C\uDFB3":"1f3b3","\uD83C\uDFB4":"1f3b4","\uD83E\uDD25":"1f925","\uD83C\uDFB5":"1f3b5","\uD83C\uDFB6":"1f3b6","\uD83C\uDFB7":"1f3b7","\uD83E\uDD24":"1f924","\uD83C\uDFB8":"1f3b8","\uD83C\uDFB9":"1f3b9","\uD83C\uDFBA":"1f3ba","\uD83E\uDD23":"1f923","\uD83C\uDFBB":"1f3bb","\uD83C\uDFBC":"1f3bc","\uD83C\uDFBD":"1f3bd","\uD83E\uDD22":"1f922","\uD83C\uDFBE":"1f3be","\uD83C\uDFBF":"1f3bf","\uD83C\uDFC0":"1f3c0","\uD83C\uDFC1":"1f3c1","\uD83E\uDD21":"1f921","\uD83C\uDFC2":"1f3c2","\uD83C\uDFC3":"1f3c3","\uD83C\uDFC4":"1f3c4","\uD83C\uDFC6":"1f3c6","\uD83C\uDFC8":"1f3c8","\uD83C\uDFCA":"1f3ca","\uD83C\uDFE0":"1f3e0","\uD83C\uDFE1":"1f3e1","\uD83C\uDFE2":"1f3e2","\uD83C\uDFE3":"1f3e3","\uD83C\uDFE5":"1f3e5","\uD83C\uDFE6":"1f3e6","\uD83C\uDFE7":"1f3e7","\uD83C\uDFE8":"1f3e8","\uD83C\uDFE9":"1f3e9","\uD83C\uDFEA":"1f3ea","\uD83C\uDFEB":"1f3eb","\uD83C\uDFEC":"1f3ec","\uD83E\uDD20":"1f920","\uD83C\uDFED":"1f3ed","\uD83C\uDFEE":"1f3ee","\uD83C\uDFEF":"1f3ef","\uD83C\uDFF0":"1f3f0","\uD83D\uDC0C":"1f40c","\uD83D\uDC0D":"1f40d","\uD83D\uDC0E":"1f40e","\uD83D\uDC11":"1f411","\uD83D\uDC12":"1f412","\uD83D\uDC14":"1f414","\uD83D\uDC17":"1f417","\uD83D\uDC18":"1f418","\uD83D\uDC19":"1f419","\uD83D\uDC1A":"1f41a","\uD83D\uDC1B":"1f41b","\uD83D\uDC1C":"1f41c","\uD83D\uDC1D":"1f41d","\uD83D\uDC1E":"1f41e","\uD83D\uDC1F":"1f41f","\uD83D\uDC20":"1f420","\uD83D\uDC21":"1f421","\uD83D\uDC22":"1f422","\uD83D\uDC23":"1f423","\uD83D\uDC24":"1f424","\uD83D\uDC25":"1f425","\uD83D\uDC26":"1f426","\uD83D\uDC27":"1f427","\uD83D\uDC28":"1f428","\uD83D\uDC29":"1f429","\uD83D\uDC2B":"1f42b","\uD83D\uDC2C":"1f42c","\uD83D\uDC2D":"1f42d","\uD83D\uDC2E":"1f42e","\uD83D\uDC2F":"1f42f","\uD83D\uDC30":"1f430","\uD83D\uDC31":"1f431","\uD83D\uDC32":"1f432","\uD83D\uDC33":"1f433","\uD83D\uDC34":"1f434","\uD83D\uDC35":"1f435","\uD83D\uDC36":"1f436","\uD83D\uDC37":"1f437","\uD83D\uDC38":"1f438","\uD83D\uDC39":"1f439","\uD83D\uDC3A":"1f43a","\uD83D\uDC3B":"1f43b","\uD83D\uDC3C":"1f43c","\uD83D\uDC3D":"1f43d","\uD83D\uDC3E":"1f43e","\uD83D\uDC40":"1f440","\uD83D\uDC42":"1f442","\uD83D\uDC43":"1f443","\uD83D\uDC44":"1f444","\uD83D\uDC45":"1f445","\uD83D\uDC46":"1f446","\uD83D\uDC47":"1f447","\uD83D\uDC48":"1f448","\uD83D\uDC49":"1f449","\uD83D\uDC4A":"1f44a","\uD83D\uDC4B":"1f44b","\uD83D\uDC4C":"1f44c","\uD83D\uDC4D":"1f44d","\uD83D\uDC4E":"1f44e","\uD83D\uDC4F":"1f44f","\uD83D\uDC50":"1f450","\uD83D\uDC51":"1f451","\uD83D\uDC52":"1f452","\uD83D\uDC53":"1f453","\uD83D\uDC54":"1f454","\uD83D\uDC55":"1f455","\uD83D\uDC56":"1f456","\uD83D\uDC57":"1f457","\uD83D\uDC58":"1f458","\uD83D\uDC59":"1f459","\uD83D\uDC5A":"1f45a","\uD83D\uDC5B":"1f45b","\uD83D\uDC5C":"1f45c","\uD83D\uDC5D":"1f45d","\uD83D\uDC5E":"1f45e","\uD83D\uDC5F":"1f45f","\uD83D\uDC60":"1f460","\uD83D\uDC61":"1f461","\uD83D\uDC62":"1f462","\uD83D\uDC63":"1f463","\uD83D\uDC64":"1f464","\uD83D\uDC66":"1f466","\uD83D\uDC67":"1f467","\uD83D\uDC68":"1f468","\uD83D\uDC69":"1f469","\uD83D\uDC6A":"1f46a","\uD83D\uDC6B":"1f46b","\uD83D\uDC6E":"1f46e","\uD83D\uDC6F":"1f46f","\uD83D\uDC70":"1f470","\uD83D\uDC71":"1f471","\uD83D\uDC72":"1f472","\uD83D\uDC73":"1f473","\uD83D\uDC74":"1f474","\uD83D\uDC75":"1f475","\uD83D\uDC76":"1f476","\uD83D\uDC77":"1f477","\uD83D\uDC78":"1f478","\uD83D\uDC79":"1f479","\uD83D\uDC7A":"1f47a","\uD83D\uDC7B":"1f47b","\uD83D\uDC7C":"1f47c","\uD83D\uDC7D":"1f47d","\uD83D\uDC7E":"1f47e","\uD83D\uDC7F":"1f47f","\uD83D\uDC80":"1f480","\uD83D\uDCC7":"1f4c7","\uD83D\uDC81":"1f481","\uD83D\uDC82":"1f482","\uD83D\uDC83":"1f483","\uD83D\uDC84":"1f484","\uD83D\uDC85":"1f485","\uD83D\uDCD2":"1f4d2","\uD83D\uDC86":"1f486","\uD83D\uDCD3":"1f4d3","\uD83D\uDC87":"1f487","\uD83D\uDCD4":"1f4d4","\uD83D\uDC88":"1f488","\uD83D\uDCD5":"1f4d5","\uD83D\uDC89":"1f489","\uD83D\uDCD6":"1f4d6","\uD83D\uDC8A":"1f48a","\uD83D\uDCD7":"1f4d7","\uD83D\uDC8B":"1f48b","\uD83D\uDCD8":"1f4d8","\uD83D\uDC8C":"1f48c","\uD83D\uDCD9":"1f4d9","\uD83D\uDC8D":"1f48d","\uD83D\uDCDA":"1f4da","\uD83D\uDC8E":"1f48e","\uD83D\uDCDB":"1f4db","\uD83D\uDC8F":"1f48f","\uD83D\uDCDC":"1f4dc","\uD83D\uDC90":"1f490","\uD83D\uDCDD":"1f4dd","\uD83D\uDC91":"1f491","\uD83D\uDCDE":"1f4de","\uD83D\uDC92":"1f492","\uD83D\uDCDF":"1f4df","\uD83D\uDCE0":"1f4e0","\uD83D\uDC93":"1f493","\uD83D\uDCE1":"1f4e1","\uD83D\uDCE2":"1f4e2","\uD83D\uDC94":"1f494","\uD83D\uDCE3":"1f4e3","\uD83D\uDCE4":"1f4e4","\uD83D\uDC95":"1f495","\uD83D\uDCE5":"1f4e5","\uD83D\uDCE6":"1f4e6","\uD83D\uDC96":"1f496","\uD83D\uDCE7":"1f4e7","\uD83D\uDCE8":"1f4e8","\uD83D\uDC97":"1f497","\uD83D\uDCE9":"1f4e9","\uD83D\uDCEA":"1f4ea","\uD83D\uDC98":"1f498","\uD83D\uDCEB":"1f4eb","\uD83D\uDCEE":"1f4ee","\uD83D\uDC99":"1f499","\uD83D\uDCF0":"1f4f0","\uD83D\uDCF1":"1f4f1","\uD83D\uDC9A":"1f49a","\uD83D\uDCF2":"1f4f2","\uD83D\uDCF3":"1f4f3","\uD83D\uDC9B":"1f49b","\uD83D\uDCF4":"1f4f4","\uD83D\uDCF6":"1f4f6","\uD83D\uDC9C":"1f49c","\uD83D\uDCF7":"1f4f7","\uD83D\uDCF9":"1f4f9","\uD83D\uDC9D":"1f49d","\uD83D\uDCFA":"1f4fa","\uD83D\uDCFB":"1f4fb","\uD83D\uDC9E":"1f49e","\uD83D\uDCFC":"1f4fc","\uD83D\uDD03":"1f503","\uD83D\uDC9F":"1f49f","\uD83D\uDD0A":"1f50a","\uD83D\uDD0B":"1f50b","\uD83D\uDCA0":"1f4a0","\uD83D\uDD0C":"1f50c","\uD83D\uDD0D":"1f50d","\uD83D\uDCA1":"1f4a1","\uD83D\uDD0E":"1f50e","\uD83D\uDD0F":"1f50f","\uD83D\uDCA2":"1f4a2","\uD83D\uDD10":"1f510","\uD83D\uDD11":"1f511","\uD83D\uDCA3":"1f4a3","\uD83D\uDD12":"1f512","\uD83D\uDD13":"1f513","\uD83D\uDCA4":"1f4a4","\uD83D\uDD14":"1f514","\uD83D\uDD16":"1f516","\uD83D\uDCA5":"1f4a5","\uD83D\uDD17":"1f517","\uD83D\uDD18":"1f518","\uD83D\uDCA6":"1f4a6","\uD83D\uDD19":"1f519","\uD83D\uDD1A":"1f51a","\uD83D\uDCA7":"1f4a7","\uD83D\uDD1B":"1f51b","\uD83D\uDD1C":"1f51c","\uD83D\uDCA8":"1f4a8","\uD83D\uDD1D":"1f51d","\uD83D\uDD1E":"1f51e","\uD83D\uDCA9":"1f4a9","\uD83D\uDD1F":"1f51f","\uD83D\uDCAA":"1f4aa","\uD83D\uDD20":"1f520","\uD83D\uDD21":"1f521","\uD83D\uDCAB":"1f4ab","\uD83D\uDD22":"1f522","\uD83D\uDD23":"1f523","\uD83D\uDCAC":"1f4ac","\uD83D\uDD24":"1f524","\uD83D\uDD25":"1f525","\uD83D\uDCAE":"1f4ae","\uD83D\uDD26":"1f526","\uD83D\uDD27":"1f527","\uD83D\uDCAF":"1f4af","\uD83D\uDD28":"1f528","\uD83D\uDD29":"1f529","\uD83D\uDCB0":"1f4b0","\uD83D\uDD2A":"1f52a","\uD83D\uDD2B":"1f52b","\uD83D\uDCB1":"1f4b1","\uD83D\uDD2E":"1f52e","\uD83D\uDCB2":"1f4b2","\uD83D\uDD2F":"1f52f","\uD83D\uDCB3":"1f4b3","\uD83D\uDD30":"1f530","\uD83D\uDD31":"1f531","\uD83D\uDCB4":"1f4b4","\uD83D\uDD32":"1f532","\uD83D\uDD33":"1f533","\uD83D\uDCB5":"1f4b5","\uD83D\uDD34":"1f534","\uD83D\uDD35":"1f535","\uD83D\uDCB8":"1f4b8","\uD83D\uDD36":"1f536","\uD83D\uDD37":"1f537","\uD83D\uDCB9":"1f4b9","\uD83D\uDD38":"1f538","\uD83D\uDD39":"1f539","\uD83D\uDCBA":"1f4ba","\uD83D\uDD3A":"1f53a","\uD83D\uDD3B":"1f53b","\uD83D\uDCBB":"1f4bb","\uD83D\uDD3C":"1f53c","\uD83D\uDCBC":"1f4bc","\uD83D\uDD3D":"1f53d","\uD83D\uDD50":"1f550","\uD83D\uDCBD":"1f4bd","\uD83D\uDD51":"1f551","\uD83D\uDCBE":"1f4be","\uD83D\uDD52":"1f552","\uD83D\uDCBF":"1f4bf","\uD83D\uDD53":"1f553","\uD83D\uDCC0":"1f4c0","\uD83D\uDD54":"1f554","\uD83D\uDD55":"1f555","\uD83D\uDCC1":"1f4c1","\uD83D\uDD56":"1f556","\uD83D\uDD57":"1f557","\uD83D\uDCC2":"1f4c2","\uD83D\uDD58":"1f558","\uD83D\uDD59":"1f559","\uD83D\uDCC3":"1f4c3","\uD83D\uDD5A":"1f55a","\uD83D\uDD5B":"1f55b","\uD83D\uDCC4":"1f4c4","\uD83D\uDDFB":"1f5fb","\uD83D\uDDFC":"1f5fc","\uD83D\uDCC5":"1f4c5","\uD83D\uDDFD":"1f5fd","\uD83D\uDDFE":"1f5fe","\uD83D\uDCC6":"1f4c6","\uD83D\uDDFF":"1f5ff","\uD83D\uDE01":"1f601","\uD83D\uDE02":"1f602","\uD83D\uDE03":"1f603","\uD83D\uDCC8":"1f4c8","\uD83D\uDE04":"1f604","\uD83D\uDE05":"1f605","\uD83D\uDCC9":"1f4c9","\uD83D\uDE06":"1f606","\uD83D\uDE09":"1f609","\uD83D\uDCCA":"1f4ca","\uD83D\uDE0A":"1f60a","\uD83D\uDE0B":"1f60b","\uD83D\uDCCB":"1f4cb","\uD83D\uDE0C":"1f60c","\uD83D\uDE0D":"1f60d","\uD83D\uDCCC":"1f4cc","\uD83D\uDE0F":"1f60f","\uD83D\uDE12":"1f612","\uD83D\uDCCD":"1f4cd","\uD83D\uDE13":"1f613","\uD83D\uDE14":"1f614","\uD83D\uDCCE":"1f4ce","\uD83D\uDE16":"1f616","\uD83D\uDE18":"1f618","\uD83D\uDCCF":"1f4cf","\uD83D\uDE1A":"1f61a","\uD83D\uDE1C":"1f61c","\uD83D\uDCD0":"1f4d0","\uD83D\uDE1D":"1f61d","\uD83D\uDE1E":"1f61e","\uD83D\uDCD1":"1f4d1","\uD83D\uDE20":"1f620","\uD83D\uDE21":"1f621","\uD83D\uDE22":"1f622","\uD83D\uDE23":"1f623","\uD83D\uDE24":"1f624","\uD83D\uDE25":"1f625","\uD83D\uDE28":"1f628","\uD83D\uDE29":"1f629","\uD83D\uDE2A":"1f62a","\uD83D\uDE2B":"1f62b","\uD83D\uDE2D":"1f62d","\uD83D\uDE30":"1f630","\uD83D\uDE31":"1f631","\uD83D\uDE32":"1f632","\uD83D\uDE33":"1f633","\uD83D\uDE35":"1f635","\uD83D\uDE37":"1f637","\uD83D\uDE38":"1f638","\uD83D\uDE39":"1f639","\uD83D\uDE3A":"1f63a","\uD83D\uDE3B":"1f63b","\uD83D\uDE3C":"1f63c","\uD83D\uDE3D":"1f63d","\uD83D\uDE3E":"1f63e","\uD83D\uDE3F":"1f63f","\uD83D\uDE40":"1f640","\uD83D\uDE45":"1f645","\uD83D\uDE46":"1f646","\uD83D\uDE47":"1f647","\uD83D\uDE48":"1f648","\uD83D\uDE49":"1f649","\uD83D\uDE4A":"1f64a","\uD83D\uDE4B":"1f64b","\uD83D\uDE4C":"1f64c","\uD83D\uDE4D":"1f64d","\uD83D\uDE4E":"1f64e","\uD83D\uDE4F":"1f64f","\uD83D\uDE80":"1f680","\uD83D\uDE83":"1f683","\uD83D\uDE84":"1f684","\uD83D\uDE85":"1f685","\uD83D\uDE87":"1f687","\uD83D\uDE89":"1f689","\uD83D\uDE8C":"1f68c","\uD83D\uDE8F":"1f68f","\uD83D\uDE91":"1f691","\uD83D\uDE92":"1f692","\uD83D\uDE93":"1f693","\uD83D\uDE95":"1f695","\uD83D\uDE97":"1f697","\uD83D\uDE99":"1f699","\uD83D\uDE9A":"1f69a","\uD83D\uDEA2":"1f6a2","\uD83D\uDEA4":"1f6a4","\uD83D\uDEA5":"1f6a5","\uD83D\uDEA7":"1f6a7","\uD83D\uDEA8":"1f6a8","\uD83D\uDEA9":"1f6a9","\uD83D\uDEAA":"1f6aa","\uD83D\uDEAB":"1f6ab","\uD83D\uDEAC":"1f6ac","\uD83D\uDEAD":"1f6ad","\uD83D\uDEB2":"1f6b2","\uD83D\uDEB6":"1f6b6","\uD83D\uDEB9":"1f6b9","\uD83D\uDEBA":"1f6ba","\uD83D\uDEBB":"1f6bb","\uD83D\uDEBC":"1f6bc","\uD83D\uDEBD":"1f6bd","\uD83D\uDEBE":"1f6be","\uD83D\uDEC0":"1f6c0","\uD83E\uDD18":"1f918","\uD83D\uDE00":"1f600","\uD83D\uDE07":"1f607","\uD83D\uDE08":"1f608","\uD83D\uDE0E":"1f60e","\uD83D\uDE10":"1f610","\uD83D\uDE11":"1f611","\uD83D\uDE15":"1f615","\uD83D\uDE17":"1f617","\uD83D\uDE19":"1f619","\uD83D\uDE1B":"1f61b","\uD83D\uDE1F":"1f61f","\uD83D\uDE26":"1f626","\uD83D\uDE27":"1f627","\uD83D\uDE2C":"1f62c","\uD83D\uDE2E":"1f62e","\uD83D\uDE2F":"1f62f","\uD83D\uDE34":"1f634","\uD83D\uDE36":"1f636","\uD83D\uDE81":"1f681","\uD83D\uDE82":"1f682","\uD83D\uDE86":"1f686","\uD83D\uDE88":"1f688","\uD83D\uDE8A":"1f68a","\uD83D\uDE8D":"1f68d","\uD83D\uDE8E":"1f68e","\uD83D\uDE90":"1f690","\uD83D\uDE94":"1f694","\uD83D\uDE96":"1f696","\uD83D\uDE98":"1f698","\uD83D\uDE9B":"1f69b","\uD83D\uDE9C":"1f69c","\uD83D\uDE9D":"1f69d","\uD83D\uDE9E":"1f69e","\uD83D\uDE9F":"1f69f","\uD83D\uDEA0":"1f6a0","\uD83D\uDEA1":"1f6a1","\uD83D\uDEA3":"1f6a3","\uD83D\uDEA6":"1f6a6","\uD83D\uDEAE":"1f6ae","\uD83D\uDEAF":"1f6af","\uD83D\uDEB0":"1f6b0","\uD83D\uDEB1":"1f6b1","\uD83D\uDEB3":"1f6b3","\uD83D\uDEB4":"1f6b4","\uD83D\uDEB5":"1f6b5","\uD83D\uDEB7":"1f6b7","\uD83D\uDEB8":"1f6b8","\uD83D\uDEBF":"1f6bf","\uD83D\uDEC1":"1f6c1","\uD83D\uDEC2":"1f6c2","\uD83D\uDEC3":"1f6c3","\uD83D\uDEC4":"1f6c4","\uD83D\uDEC5":"1f6c5","\uD83C\uDF0D":"1f30d","\uD83C\uDF0E":"1f30e","\uD83C\uDF10":"1f310","\uD83C\uDF12":"1f312","\uD83C\uDF16":"1f316","\uD83C\uDF17":"1f317","\uD83C\uDF18":"1f318","\uD83C\uDF1A":"1f31a","\uD83C\uDF1C":"1f31c","\uD83C\uDF1D":"1f31d","\uD83C\uDF1E":"1f31e","\uD83C\uDF32":"1f332","\uD83C\uDF33":"1f333","\uD83C\uDF4B":"1f34b","\uD83C\uDF50":"1f350","\uD83C\uDF7C":"1f37c","\uD83C\uDFC7":"1f3c7","\uD83C\uDFC9":"1f3c9","\uD83C\uDFE4":"1f3e4","\uD83D\uDC00":"1f400","\uD83D\uDC01":"1f401","\uD83D\uDC02":"1f402","\uD83D\uDC03":"1f403","\uD83D\uDC04":"1f404","\uD83D\uDC05":"1f405","\uD83D\uDC06":"1f406","\uD83D\uDC07":"1f407","\uD83D\uDC08":"1f408","\uD83D\uDC09":"1f409","\uD83D\uDC0A":"1f40a","\uD83D\uDC0B":"1f40b","\uD83D\uDC0F":"1f40f","\uD83D\uDC10":"1f410","\uD83D\uDC13":"1f413","\uD83D\uDC15":"1f415","\uD83D\uDC16":"1f416","\uD83D\uDC2A":"1f42a","\uD83D\uDC65":"1f465","\uD83D\uDC6C":"1f46c","\uD83D\uDC6D":"1f46d","\uD83D\uDCAD":"1f4ad","\uD83D\uDCB6":"1f4b6","\uD83D\uDCB7":"1f4b7","\uD83D\uDCEC":"1f4ec","\uD83D\uDCED":"1f4ed","\uD83D\uDCEF":"1f4ef","\uD83D\uDCF5":"1f4f5","\uD83D\uDD00":"1f500","\uD83D\uDD01":"1f501","\uD83D\uDD02":"1f502","\uD83D\uDD04":"1f504","\uD83D\uDD05":"1f505","\uD83D\uDD06":"1f506","\uD83D\uDD07":"1f507","\uD83D\uDD09":"1f509","\uD83D\uDD15":"1f515","\uD83D\uDD2C":"1f52c","\uD83D\uDD2D":"1f52d","\uD83D\uDD5C":"1f55c","\uD83D\uDD5D":"1f55d","\uD83D\uDD5E":"1f55e","\uD83D\uDD5F":"1f55f","\uD83D\uDD60":"1f560","\uD83D\uDD61":"1f561","\uD83D\uDD62":"1f562","\uD83D\uDD63":"1f563","\uD83D\uDD64":"1f564","\uD83D\uDD65":"1f565","\uD83D\uDD66":"1f566","\uD83D\uDD67":"1f567","\uD83D\uDD08":"1f508","\uD83D\uDE8B":"1f68b","\uD83C\uDFC5":"1f3c5","\uD83C\uDFF4":"1f3f4","\uD83D\uDCF8":"1f4f8","\uD83D\uDECC":"1f6cc","\uD83D\uDD95":"1f595","\uD83D\uDD96":"1f596","\uD83D\uDE41":"1f641","\uD83D\uDE42":"1f642","\uD83D\uDEEB":"1f6eb","\uD83D\uDEEC":"1f6ec","\uD83C\uDFFB":"1f3fb","\uD83C\uDFFC":"1f3fc","\uD83C\uDFFD":"1f3fd","\uD83C\uDFFE":"1f3fe","\uD83C\uDFFF":"1f3ff","\uD83D\uDE43":"1f643","\uD83E\uDD11":"1f911","\uD83E\uDD13":"1f913","\uD83E\uDD17":"1f917","\uD83D\uDE44":"1f644","\uD83E\uDD14":"1f914","\uD83E\uDD10":"1f910","\uD83E\uDD12":"1f912","\uD83E\uDD15":"1f915","\uD83E\uDD16":"1f916","\uD83E\uDD81":"1f981","\uD83E\uDD84":"1f984","\uD83E\uDD82":"1f982","\uD83E\uDD80":"1f980","\uD83E\uDD83":"1f983","\uD83E\uDDC0":"1f9c0","\uD83C\uDF2D":"1f32d","\uD83C\uDF2E":"1f32e","\uD83C\uDF2F":"1f32f","\uD83C\uDF7F":"1f37f","\uD83C\uDF7E":"1f37e","\uD83C\uDFF9":"1f3f9","\uD83C\uDFFA":"1f3fa","\uD83D\uDED0":"1f6d0","\uD83D\uDD4B":"1f54b","\uD83D\uDD4C":"1f54c","\uD83D\uDD4D":"1f54d","\uD83D\uDD4E":"1f54e","\uD83D\uDCFF":"1f4ff","\uD83C\uDFCF":"1f3cf","\uD83C\uDFD0":"1f3d0","\uD83C\uDFD1":"1f3d1","\uD83C\uDFD2":"1f3d2","\uD83C\uDFD3":"1f3d3","\uD83C\uDFF8":"1f3f8","\uD83E\uDD41":"1f941","\uD83E\uDD90":"1f990","\uD83E\uDD91":"1f991","\uD83E\uDD5A":"1f95a","\uD83E\uDD5B":"1f95b","\uD83E\uDD5C":"1f95c","\uD83E\uDD5D":"1f95d","\uD83E\uDD5E":"1f95e","\uD83C\uDDFC":"1f1fc","\uD83C\uDDFB":"1f1fb","\uD83C\uDDFA":"1f1fa","\uD83C\uDDF9":"1f1f9","\uD83C\uDDF8":"1f1f8","\uD83C\uDDF7":"1f1f7","\uD83C\uDDF6":"1f1f6","\uD83C\uDDF5":"1f1f5","\uD83C\uDDF4":"1f1f4","\uD83C\uDDF3":"1f1f3","\uD83C\uDDF2":"1f1f2","\uD83C\uDDF1":"1f1f1","\uD83C\uDDF0":"1f1f0","\uD83C\uDDEF":"1f1ef","\uD83C\uDDEE":"1f1ee","\uD83C\uDDED":"1f1ed","\uD83C\uDDEC":"1f1ec","\uD83C\uDDEB":"1f1eb","\uD83C\uDDEA":"1f1ea","\uD83C\uDDE9":"1f1e9","\uD83C\uDDE8":"1f1e8","\uD83C\uDDE7":"1f1e7","\uD83C\uDDE6":"1f1e6","\u23E9":"23e9","\u23EA":"23ea","\u23EB":"23eb","\u23EC":"23ec","\u23F0":"23f0","\u23F3":"23f3","\u26CE":"26ce","\u2705":"2705","\u270A":"270a","\u270B":"270b","\u2728":"2728","\u274C":"274c","\u274E":"274e","\u2753":"2753","\u2754":"2754","\u2755":"2755","\u2795":"2795","\u2796":"2796","\u2797":"2797","\u27B0":"27b0","\u27BF":"27bf","\u00A9":"00a9","\u00AE":"00ae","\u203C":"203c","\u2049":"2049","\u2122":"2122","\u2139":"2139","\u2194":"2194","\u2195":"2195","\u2196":"2196","\u2197":"2197","\u2198":"2198","\u2199":"2199","\u21A9":"21a9","\u21AA":"21aa","\u231A":"231a","\u231B":"231b","\u24C2":"24c2","\u25AA":"25aa","\u25AB":"25ab","\u25B6":"25b6","\u25C0":"25c0","\u25FB":"25fb","\u25FC":"25fc","\u25FD":"25fd","\u25FE":"25fe","\u2600":"2600","\u2601":"2601","\u260E":"260e","\u2611":"2611","\u2614":"2614","\u2615":"2615","\u261D":"261d","\u263A":"263a","\u2648":"2648","\u2649":"2649","\u264A":"264a","\u264B":"264b","\u264C":"264c","\u264D":"264d","\u264E":"264e","\u264F":"264f","\u2650":"2650","\u2651":"2651","\u2652":"2652","\u2653":"2653","\u2660":"2660","\u2663":"2663","\u2665":"2665","\u2666":"2666","\u2668":"2668","\u267B":"267b","\u267F":"267f","\u2693":"2693","\u26A0":"26a0","\u26A1":"26a1","\u26AA":"26aa","\u26AB":"26ab","\u26BD":"26bd","\u26BE":"26be","\u26C4":"26c4","\u26C5":"26c5","\u26D4":"26d4","\u26EA":"26ea","\u26F2":"26f2","\u26F3":"26f3","\u26F5":"26f5","\u26FA":"26fa","\u26FD":"26fd","\u2702":"2702","\u2708":"2708","\u2709":"2709","\u270C":"270c","\u270F":"270f","\u2712":"2712","\u2714":"2714","\u2716":"2716","\u2733":"2733","\u2734":"2734","\u2744":"2744","\u2747":"2747","\u2757":"2757","\u2764":"2764","\u27A1":"27a1","\u2934":"2934","\u2935":"2935","\u2B05":"2b05","\u2B06":"2b06","\u2B07":"2b07","\u2B1B":"2b1b","\u2B1C":"2b1c","\u2B50":"2b50","\u2B55":"2b55","\u3030":"3030","\u303D":"303d","\u3297":"3297","\u3299":"3299","\uD83C\uDC04":"1f004","\uD83C\uDD7F":"1f17f","\uD83C\uDE02":"1f202","\uD83C\uDE1A":"1f21a","\uD83C\uDE2F":"1f22f","\uD83C\uDE37":"1f237","\uD83C\uDF9E":"1f39e","\uD83C\uDF9F":"1f39f","\uD83C\uDFCB":"1f3cb","\uD83C\uDFCC":"1f3cc","\uD83C\uDFCD":"1f3cd","\uD83C\uDFCE":"1f3ce","\uD83C\uDF96":"1f396","\uD83C\uDF97":"1f397","\uD83C\uDF36":"1f336","\uD83C\uDF27":"1f327","\uD83C\uDF28":"1f328","\uD83C\uDF29":"1f329","\uD83C\uDF2A":"1f32a","\uD83C\uDF2B":"1f32b","\uD83C\uDF2C":"1f32c","\uD83D\uDC3F":"1f43f","\uD83D\uDD77":"1f577","\uD83D\uDD78":"1f578","\uD83C\uDF21":"1f321","\uD83C\uDF99":"1f399","\uD83C\uDF9A":"1f39a","\uD83C\uDF9B":"1f39b","\uD83C\uDFF3":"1f3f3","\uD83C\uDFF5":"1f3f5","\uD83C\uDFF7":"1f3f7","\uD83D\uDCFD":"1f4fd","\u271D":"271d","\uD83D\uDD49":"1f549","\uD83D\uDD4A":"1f54a","\uD83D\uDD6F":"1f56f","\uD83D\uDD70":"1f570","\uD83D\uDD73":"1f573","\uD83D\uDD76":"1f576","\uD83D\uDD79":"1f579","\uD83D\uDD87":"1f587","\uD83D\uDD8A":"1f58a","\uD83D\uDD8B":"1f58b","\uD83D\uDD8C":"1f58c","\uD83D\uDD8D":"1f58d","\uD83D\uDDA5":"1f5a5","\uD83D\uDDA8":"1f5a8","\u2328":"2328","\uD83D\uDDB2":"1f5b2","\uD83D\uDDBC":"1f5bc","\uD83D\uDDC2":"1f5c2","\uD83D\uDDC3":"1f5c3","\uD83D\uDDC4":"1f5c4","\uD83D\uDDD1":"1f5d1","\uD83D\uDDD2":"1f5d2","\uD83D\uDDD3":"1f5d3","\uD83D\uDDDC":"1f5dc","\uD83D\uDDDD":"1f5dd","\uD83D\uDDDE":"1f5de","\uD83D\uDDE1":"1f5e1","\uD83D\uDDE3":"1f5e3","\uD83D\uDDE8":"1f5e8","\uD83D\uDDEF":"1f5ef","\uD83D\uDDF3":"1f5f3","\uD83D\uDDFA":"1f5fa","\uD83D\uDEE0":"1f6e0","\uD83D\uDEE1":"1f6e1","\uD83D\uDEE2":"1f6e2","\uD83D\uDEF0":"1f6f0","\uD83C\uDF7D":"1f37d","\uD83D\uDC41":"1f441","\uD83D\uDD74":"1f574","\uD83D\uDD75":"1f575","\u270D":"270d","\uD83D\uDD90":"1f590","\uD83C\uDFD4":"1f3d4","\uD83C\uDFD5":"1f3d5","\uD83C\uDFD6":"1f3d6","\uD83C\uDFD7":"1f3d7","\uD83C\uDFD8":"1f3d8","\uD83C\uDFD9":"1f3d9","\uD83C\uDFDA":"1f3da","\uD83C\uDFDB":"1f3db","\uD83C\uDFDC":"1f3dc","\uD83C\uDFDD":"1f3dd","\uD83C\uDFDE":"1f3de","\uD83C\uDFDF":"1f3df","\uD83D\uDECB":"1f6cb","\uD83D\uDECD":"1f6cd","\uD83D\uDECE":"1f6ce","\uD83D\uDECF":"1f6cf","\uD83D\uDEE3":"1f6e3","\uD83D\uDEE4":"1f6e4","\uD83D\uDEE5":"1f6e5","\uD83D\uDEE9":"1f6e9","\uD83D\uDEF3":"1f6f3","\u23CF":"23cf","\u23ED":"23ed","\u23EE":"23ee","\u23EF":"23ef","\u23F1":"23f1","\u23F2":"23f2","\u23F8":"23f8","\u23F9":"23f9","\u23FA":"23fa","\u2602":"2602","\u2603":"2603","\u2604":"2604","\u2618":"2618","\u2620":"2620","\u2622":"2622","\u2623":"2623","\u2626":"2626","\u262A":"262a","\u262E":"262e","\u262F":"262f","\u2638":"2638","\u2639":"2639","\u2692":"2692","\u2694":"2694","\u2696":"2696","\u2697":"2697","\u2699":"2699","\u269B":"269b","\u269C":"269c","\u26B0":"26b0","\u26B1":"26b1","\u26C8":"26c8","\u26CF":"26cf","\u26D1":"26d1","\u26D3":"26d3","\u26E9":"26e9","\u26F0":"26f0","\u26F1":"26f1","\u26F4":"26f4","\u26F7":"26f7","\u26F8":"26f8","\u26F9":"26f9","\u2721":"2721","\u2763":"2763","\uD83C\uDF24":"1f324","\uD83C\uDF25":"1f325","\uD83C\uDF26":"1f326","\uD83D\uDDB1":"1f5b1"};
    ns.imagePathPNG = 'https://cdn.jsdelivr.net/emojione/assets/png/';
    ns.imagePathSVG = 'https://cdn.jsdelivr.net/emojione/assets/svg/';
    ns.imagePathSVGSprites = './../assets/sprites/emojione.sprites.svg';
    ns.imageType = 'png'; // or svg
    ns.imageTitleTag = true; //set to false to remove title attribute from img tag
    ns.sprites = false; // if this is true then sprite markup will be used (if SVG image type is set then you must include the SVG sprite file locally)
    ns.unicodeAlt = true; // use the unicode char as the alt attribute (makes copy and pasting the resulting text better)
    ns.ascii = false; // change to true to convert ascii smileys
    ns.cacheBustParam = '?v=2.2.7'; // you can [optionally] modify this to force browsers to refresh their cache. it will be appended to the send of the filenames

    ns.regShortNames = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+ns.shortnames+")", "gi");
    ns.regAscii = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|((\\s|^)"+ns.asciiRegexp+"(?=\\s|$|[!,.?]))", "g");
    ns.regUnicode = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+ns.unicodeRegexp+")", "gi");

    ns.toImage = function(str) {
        str = ns.unicodeToImage(str);
        str = ns.shortnameToImage(str);
        return str;
    };

    // Uses toShort to transform all unicode into a standard shortname
    // then transforms the shortname into unicode
    // This is done for standardization when converting several unicode types
    ns.unifyUnicode = function(str) {
        str = ns.toShort(str);
        str = ns.shortnameToUnicode(str);
        return str;
    };

    // Replace shortnames (:wink:) with Ascii equivalents ( ;^) )
    // Useful for systems that dont support unicode nor images
    ns.shortnameToAscii = function(str) {
        var unicode,
        // something to keep in mind here is that array flip will destroy
        // half of the ascii text "emojis" because the unicode numbers are duplicated
        // this is ok for what it's being used for
            unicodeToAscii = ns.objectFlip(ns.asciiList);

        str = str.replace(ns.regShortNames, function(shortname) {
            if( (typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList)) ) {
                // if the shortname doesnt exist just return the entire match
                return shortname;
            }
            else {
                unicode = ns.emojioneList[shortname].unicode[ns.emojioneList[shortname].unicode.length-1];
                if(typeof unicodeToAscii[unicode] !== 'undefined') {
                    return unicodeToAscii[unicode];
                } else {
                    return shortname;
                }
            }
        });
        return str;
    };

    // will output unicode from shortname
    // useful for sending emojis back to mobile devices
    ns.shortnameToUnicode = function(str) {
        // replace regular shortnames first
        var unicode,fname,uc;
        str = str.replace(ns.regShortNames, function(shortname) {
            if( (typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList)) ) {
                // if the shortname doesnt exist just return the entire match
                return shortname;
            }
            unicode = ns.emojioneList[shortname].unicode[0].toUpperCase();
            fname = ns.emojioneList[shortname].fname;
            uc = ns.emojioneList[shortname].uc;
            //return ns.convert(unicode);
            return ns.convert(uc);
        });

        // if ascii smileys are turned on, then we'll replace them!
        if (ns.ascii) {

            str = str.replace(ns.regAscii, function(entire, m1, m2, m3) {
                if( (typeof m3 === 'undefined') || (m3 === '') || (!(ns.unescapeHTML(m3) in ns.asciiList)) ) {
                    // if the shortname doesnt exist just return the entire match
                    return entire;
                }

                m3 = ns.unescapeHTML(m3);
                unicode = ns.asciiList[m3].toUpperCase();
                return m2+ns.convert(unicode);
            });
        }

        return str;
    };

    ns.shortnameToImage = function(str) {
        // replace regular shortnames first
        var replaceWith,unicode,alt,title;
        str = str.replace(ns.regShortNames, function(shortname) {
            if( (typeof shortname === 'undefined') || (shortname === '') || (!(shortname in ns.emojioneList)) ) {
                // if the shortname doesnt exist just return the entire match
                return shortname;
            }
            else {
                unicode = ns.emojioneList[shortname].unicode[ns.emojioneList[shortname].unicode.length-1];
                title = ns.imageTitleTag ? 'title="'+shortname+'"' : '';

                // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
                alt = (ns.unicodeAlt) ? ns.convert(unicode.toUpperCase()) : shortname;

                if(ns.imageType === 'png') {
                    if(ns.sprites) {
                        replaceWith = '<span class="emojione emojione-'+unicode+'" ' + title + '>'+alt+'</span>';
                    }
                    else {
                        replaceWith = '<img class="emojione" alt="'+alt+'" ' + title + ' src="'+ns.imagePathPNG+unicode+'.png'+ns.cacheBustParam+'"/>';
                    }
                }
                else {
                    // svg
                    if(ns.sprites) {
                        replaceWith = '<svg class="emojione"><description>'+alt+'</description><use xlink:href="'+ns.imagePathSVGSprites+'#emoji-'+unicode+'"></use></svg>';
                    }
                    else {
                        replaceWith = '<object class="emojione" data="'+ns.imagePathSVG+unicode+'.svg'+ns.cacheBustParam+'" type="image/svg+xml" standby="'+alt+'">'+alt+'</object>';
                    }
                }

                return replaceWith;
            }
        });

        // if ascii smileys are turned on, then we'll replace them!
        if (ns.ascii) {

            str = str.replace(ns.regAscii, function(entire, m1, m2, m3) {
                if( (typeof m3 === 'undefined') || (m3 === '') || (!(ns.unescapeHTML(m3) in ns.asciiList)) ) {
                    // if the ascii doesnt exist just return the entire match
                    return entire;
                }

                m3 = ns.unescapeHTML(m3);
                unicode = ns.asciiList[m3];
                title = ns.imageTitleTag ? 'title="'+ns.escapeHTML(m3)+'"' : '';

                // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
                alt = (ns.unicodeAlt) ? ns.convert(unicode.toUpperCase()) : ns.escapeHTML(m3);

                if(ns.imageType === 'png') {
                    if(ns.sprites) {
                        replaceWith = m2+'<span class="emojione emojione-'+unicode+'"  ' + title + '>'+alt+'</span>';
                    }
                    else {
                        replaceWith = m2+'<img class="emojione" alt="'+alt+'" ' + title + ' src="'+ns.imagePathPNG+unicode+'.png'+ns.cacheBustParam+'"/>';
                    }
                }
                else {
                    // svg
                    if(ns.sprites) {
                        replaceWith = '<svg class="emojione"><description>'+alt+'</description><use xlink:href="'+ns.imagePathSVGSprites+'#emoji-'+unicode+'"></use></svg>';
                    }
                    else {
                        replaceWith = m2+'<object class="emojione" data="'+ns.imagePathSVG+unicode+'.svg'+ns.cacheBustParam+'" type="image/svg+xml" standby="'+alt+'">'+alt+'</object>';
                    }
                }

                return replaceWith;
            });
        }

        return str;
    };

    ns.unicodeToImage = function(str) {

        var replaceWith,unicode,short,fname,alt,title;
        var mappedUnicode = ns.mapUnicodeToShort();
        str = str.replace(ns.regUnicode, function(unicodeChar) {
            if( (typeof unicodeChar === 'undefined') || (unicodeChar === '') || (!(unicodeChar in ns.jsEscapeMap)) ) {
                // if the unicodeChar doesnt exist just return the entire match
                return unicodeChar;
            }
            else {
                // get the unicode codepoint from the actual char
                unicode = ns.jsEscapeMap[unicodeChar];

                //then map to shortname and locate the filename
                short = mappedUnicode[unicode];
                fname = ns.emojioneList[short].fname;

                // depending on the settings, we'll either add the native unicode as the alt tag, otherwise the shortname
                alt = (ns.unicodeAlt) ? ns.convert(unicode.toUpperCase()) : short;
                title = ns.imageTitleTag ? 'title="'+short+'"' : '';

                if(ns.imageType === 'png') {
                    if(ns.sprites) {
                        replaceWith = '<span class="emojione emojione-'+unicode+'" ' + title + '>'+alt+'</span>';
                    }
                    else {
                        replaceWith = '<img class="emojione" alt="'+alt+'" ' + title + ' src="'+ns.imagePathPNG+fname+'.png'+ns.cacheBustParam+'"/>';
                    }
                }
                else {
                    // svg
                    if(ns.sprites) {
                        replaceWith = '<svg class="emojione"><description>'+alt+'</description><use xlink:href="'+ns.imagePathSVGSprites+'#emoji-'+unicode+'"></use></svg>';
                    }
                    else {
                        replaceWith = '<img class="emojione" alt="'+alt+'" ' + title + ' src="'+ns.imagePathSVG+fname+'.svg'+ns.cacheBustParam+'"/>';
                    }
                }

                return replaceWith;
            }
        });

        return str;
    };

    // this is really just unicodeToShortname() but I opted for the shorthand name to match toImage()
    ns.toShort = function(str) {
        var find = ns.getUnicodeReplacementRegEx(),
            replacementList = ns.mapUnicodeCharactersToShort();
        return  ns.replaceAll(str, find,replacementList);
    };

    // for converting unicode code points and code pairs to their respective characters
    ns.convert = function(unicode) {
        if(unicode.indexOf("-") > -1) {
            var parts = [];
            var s = unicode.split('-');
            for(var i = 0; i < s.length; i++) {
                var part = parseInt(s[i], 16);
                if (part >= 0x10000 && part <= 0x10FFFF) {
                    var hi = Math.floor((part - 0x10000) / 0x400) + 0xD800;
                    var lo = ((part - 0x10000) % 0x400) + 0xDC00;
                    part = (String.fromCharCode(hi) + String.fromCharCode(lo));
                }
                else {
                    part = String.fromCharCode(part);
                }
                parts.push(part);
            }
            return parts.join('');
        }
        else {
            var s = parseInt(unicode, 16);
            if (s >= 0x10000 && s <= 0x10FFFF) {
                var hi = Math.floor((s - 0x10000) / 0x400) + 0xD800;
                var lo = ((s - 0x10000) % 0x400) + 0xDC00;
                return (String.fromCharCode(hi) + String.fromCharCode(lo));
            }
            else {
                return String.fromCharCode(s);
            }
        }
    };

    ns.escapeHTML = function (string) {
        var escaped = {
            '&' : '&amp;',
            '<' : '&lt;',
            '>' : '&gt;',
            '"' : '&quot;',
            '\'': '&#039;'
        };

        return string.replace(/[&<>"']/g, function (match) {
            return escaped[match];
        });
    };
    ns.unescapeHTML = function (string) {
        var unescaped = {
            '&amp;'  : '&',
            '&#38;'  : '&',
            '&#x26;' : '&',
            '&lt;'   : '<',
            '&#60;'  : '<',
            '&#x3C;' : '<',
            '&gt;'   : '>',
            '&#62;'  : '>',
            '&#x3E;' : '>',
            '&quot;' : '"',
            '&#34;'  : '"',
            '&#x22;' : '"',
            '&apos;' : '\'',
            '&#39;'  : '\'',
            '&#x27;' : '\''
        };

        return string.replace(/&(?:amp|#38|#x26|lt|#60|#x3C|gt|#62|#x3E|apos|#39|#x27|quot|#34|#x22);/ig, function (match) {
            return unescaped[match];
        });
    };

    ns.mapEmojioneList = function (addToMapStorage) {
        for (var shortname in ns.emojioneList) {
            if (!ns.emojioneList.hasOwnProperty(shortname)) { continue; }
            for (var i = 0, len = ns.emojioneList[shortname].unicode.length; i < len; i++) {
                var unicode = ns.emojioneList[shortname].unicode[i];
                addToMapStorage(unicode, shortname);
            }
        }
    };

    ns.mapUnicodeToShort = function() {
        if (!ns.memMapShortToUnicode) {
            ns.memMapShortToUnicode = {};
            ns.mapEmojioneList(function (unicode, shortname) {
                ns.memMapShortToUnicode[unicode] = shortname;
            });
        }
        return ns.memMapShortToUnicode;
    };

    ns.memoizeReplacement = function() {
        if (!ns.unicodeReplacementRegEx || !ns.memMapShortToUnicodeCharacters) {
            var unicodeList = [];
            ns.memMapShortToUnicodeCharacters = {};
            ns.mapEmojioneList(function (unicode, shortname) {
                var emojiCharacter = ns.convert(unicode);
                if(ns.emojioneList[shortname].isCanonical) {
                    ns.memMapShortToUnicodeCharacters[emojiCharacter] = shortname;
                }
                unicodeList.push(emojiCharacter);
            });
            ns.unicodeReplacementRegEx = unicodeList.join('|');
        }
    };

    ns.mapUnicodeCharactersToShort = function() {
        ns.memoizeReplacement();
        return ns.memMapShortToUnicodeCharacters;
    };

    ns.getUnicodeReplacementRegEx = function() {
        ns.memoizeReplacement();
        return ns.unicodeReplacementRegEx;
    };

    //reverse an object
    ns.objectFlip = function (obj) {
        var key, tmp_obj = {};

        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                tmp_obj[obj[key]] = key;
            }
        }

        return tmp_obj;
    };

    ns.escapeRegExp = function(string) {
        return string.replace(/[-[\]{}()*+?.,;:&\\^$#\s]/g, "\\$&");
    };

    ns.replaceAll = function(string, find, replacementList) {
        var escapedFind = ns.escapeRegExp(find);
        var search = new RegExp("<object[^>]*>.*?<\/object>|<span[^>]*>.*?<\/span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|("+escapedFind+")", "gi");

        // callback prevents replacing anything inside of these common html tags as well as between an <object></object> tag
        var replace = function(entire, m1) {
            return ((typeof m1 === 'undefined') || (m1 === '')) ? entire : replacementList[m1];
        };

        return string.replace(search,replace);
    };

}(this.emojione = this.emojione || {}));
if(true) module.exports = this.emojione;

/***/ }),

/***/ "./node_modules/fine-uploader/fine-uploader/fine-uploader.js":
/*!*******************************************************************!*\
  !*** ./node_modules/fine-uploader/fine-uploader/fine-uploader.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// Fine Uploader 5.16.2 - MIT licensed. http://fineuploader.com
(function(global) {
    var qq = function(element) {
        "use strict";
        return {
            hide: function() {
                element.style.display = "none";
                return this;
            },
            attach: function(type, fn) {
                if (element.addEventListener) {
                    element.addEventListener(type, fn, false);
                } else if (element.attachEvent) {
                    element.attachEvent("on" + type, fn);
                }
                return function() {
                    qq(element).detach(type, fn);
                };
            },
            detach: function(type, fn) {
                if (element.removeEventListener) {
                    element.removeEventListener(type, fn, false);
                } else if (element.attachEvent) {
                    element.detachEvent("on" + type, fn);
                }
                return this;
            },
            contains: function(descendant) {
                if (!descendant) {
                    return false;
                }
                if (element === descendant) {
                    return true;
                }
                if (element.contains) {
                    return element.contains(descendant);
                } else {
                    return !!(descendant.compareDocumentPosition(element) & 8);
                }
            },
            insertBefore: function(elementB) {
                elementB.parentNode.insertBefore(element, elementB);
                return this;
            },
            remove: function() {
                element.parentNode.removeChild(element);
                return this;
            },
            css: function(styles) {
                if (element.style == null) {
                    throw new qq.Error("Can't apply style to node as it is not on the HTMLElement prototype chain!");
                }
                if (styles.opacity != null) {
                    if (typeof element.style.opacity !== "string" && typeof element.filters !== "undefined") {
                        styles.filter = "alpha(opacity=" + Math.round(100 * styles.opacity) + ")";
                    }
                }
                qq.extend(element.style, styles);
                return this;
            },
            hasClass: function(name, considerParent) {
                var re = new RegExp("(^| )" + name + "( |$)");
                return re.test(element.className) || !!(considerParent && re.test(element.parentNode.className));
            },
            addClass: function(name) {
                if (!qq(element).hasClass(name)) {
                    element.className += " " + name;
                }
                return this;
            },
            removeClass: function(name) {
                var re = new RegExp("(^| )" + name + "( |$)");
                element.className = element.className.replace(re, " ").replace(/^\s+|\s+$/g, "");
                return this;
            },
            getByClass: function(className, first) {
                var candidates, result = [];
                if (first && element.querySelector) {
                    return element.querySelector("." + className);
                } else if (element.querySelectorAll) {
                    return element.querySelectorAll("." + className);
                }
                candidates = element.getElementsByTagName("*");
                qq.each(candidates, function(idx, val) {
                    if (qq(val).hasClass(className)) {
                        result.push(val);
                    }
                });
                return first ? result[0] : result;
            },
            getFirstByClass: function(className) {
                return qq(element).getByClass(className, true);
            },
            children: function() {
                var children = [], child = element.firstChild;
                while (child) {
                    if (child.nodeType === 1) {
                        children.push(child);
                    }
                    child = child.nextSibling;
                }
                return children;
            },
            setText: function(text) {
                element.innerText = text;
                element.textContent = text;
                return this;
            },
            clearText: function() {
                return qq(element).setText("");
            },
            hasAttribute: function(attrName) {
                var attrVal;
                if (element.hasAttribute) {
                    if (!element.hasAttribute(attrName)) {
                        return false;
                    }
                    return /^false$/i.exec(element.getAttribute(attrName)) == null;
                } else {
                    attrVal = element[attrName];
                    if (attrVal === undefined) {
                        return false;
                    }
                    return /^false$/i.exec(attrVal) == null;
                }
            }
        };
    };
    (function() {
        "use strict";
        qq.canvasToBlob = function(canvas, mime, quality) {
            return qq.dataUriToBlob(canvas.toDataURL(mime, quality));
        };
        qq.dataUriToBlob = function(dataUri) {
            var arrayBuffer, byteString, createBlob = function(data, mime) {
                var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, blobBuilder = BlobBuilder && new BlobBuilder();
                if (blobBuilder) {
                    blobBuilder.append(data);
                    return blobBuilder.getBlob(mime);
                } else {
                    return new Blob([ data ], {
                        type: mime
                    });
                }
            }, intArray, mimeString;
            if (dataUri.split(",")[0].indexOf("base64") >= 0) {
                byteString = atob(dataUri.split(",")[1]);
            } else {
                byteString = decodeURI(dataUri.split(",")[1]);
            }
            mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];
            arrayBuffer = new ArrayBuffer(byteString.length);
            intArray = new Uint8Array(arrayBuffer);
            qq.each(byteString, function(idx, character) {
                intArray[idx] = character.charCodeAt(0);
            });
            return createBlob(arrayBuffer, mimeString);
        };
        qq.log = function(message, level) {
            if (window.console) {
                if (!level || level === "info") {
                    window.console.log(message);
                } else {
                    if (window.console[level]) {
                        window.console[level](message);
                    } else {
                        window.console.log("<" + level + "> " + message);
                    }
                }
            }
        };
        qq.isObject = function(variable) {
            return variable && !variable.nodeType && Object.prototype.toString.call(variable) === "[object Object]";
        };
        qq.isFunction = function(variable) {
            return typeof variable === "function";
        };
        qq.isArray = function(value) {
            return Object.prototype.toString.call(value) === "[object Array]" || value && window.ArrayBuffer && value.buffer && value.buffer.constructor === ArrayBuffer;
        };
        qq.isItemList = function(maybeItemList) {
            return Object.prototype.toString.call(maybeItemList) === "[object DataTransferItemList]";
        };
        qq.isNodeList = function(maybeNodeList) {
            return Object.prototype.toString.call(maybeNodeList) === "[object NodeList]" || maybeNodeList.item && maybeNodeList.namedItem;
        };
        qq.isString = function(maybeString) {
            return Object.prototype.toString.call(maybeString) === "[object String]";
        };
        qq.trimStr = function(string) {
            if (String.prototype.trim) {
                return string.trim();
            }
            return string.replace(/^\s+|\s+$/g, "");
        };
        qq.format = function(str) {
            var args = Array.prototype.slice.call(arguments, 1), newStr = str, nextIdxToReplace = newStr.indexOf("{}");
            qq.each(args, function(idx, val) {
                var strBefore = newStr.substring(0, nextIdxToReplace), strAfter = newStr.substring(nextIdxToReplace + 2);
                newStr = strBefore + val + strAfter;
                nextIdxToReplace = newStr.indexOf("{}", nextIdxToReplace + val.length);
                if (nextIdxToReplace < 0) {
                    return false;
                }
            });
            return newStr;
        };
        qq.isFile = function(maybeFile) {
            return window.File && Object.prototype.toString.call(maybeFile) === "[object File]";
        };
        qq.isFileList = function(maybeFileList) {
            return window.FileList && Object.prototype.toString.call(maybeFileList) === "[object FileList]";
        };
        qq.isFileOrInput = function(maybeFileOrInput) {
            return qq.isFile(maybeFileOrInput) || qq.isInput(maybeFileOrInput);
        };
        qq.isInput = function(maybeInput, notFile) {
            var evaluateType = function(type) {
                var normalizedType = type.toLowerCase();
                if (notFile) {
                    return normalizedType !== "file";
                }
                return normalizedType === "file";
            };
            if (window.HTMLInputElement) {
                if (Object.prototype.toString.call(maybeInput) === "[object HTMLInputElement]") {
                    if (maybeInput.type && evaluateType(maybeInput.type)) {
                        return true;
                    }
                }
            }
            if (maybeInput.tagName) {
                if (maybeInput.tagName.toLowerCase() === "input") {
                    if (maybeInput.type && evaluateType(maybeInput.type)) {
                        return true;
                    }
                }
            }
            return false;
        };
        qq.isBlob = function(maybeBlob) {
            if (window.Blob && Object.prototype.toString.call(maybeBlob) === "[object Blob]") {
                return true;
            }
        };
        qq.isXhrUploadSupported = function() {
            var input = document.createElement("input");
            input.type = "file";
            return input.multiple !== undefined && typeof File !== "undefined" && typeof FormData !== "undefined" && typeof qq.createXhrInstance().upload !== "undefined";
        };
        qq.createXhrInstance = function() {
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            }
            try {
                return new ActiveXObject("MSXML2.XMLHTTP.3.0");
            } catch (error) {
                qq.log("Neither XHR or ActiveX are supported!", "error");
                return null;
            }
        };
        qq.isFolderDropSupported = function(dataTransfer) {
            return dataTransfer.items && dataTransfer.items.length > 0 && dataTransfer.items[0].webkitGetAsEntry;
        };
        qq.isFileChunkingSupported = function() {
            return !qq.androidStock() && qq.isXhrUploadSupported() && (File.prototype.slice !== undefined || File.prototype.webkitSlice !== undefined || File.prototype.mozSlice !== undefined);
        };
        qq.sliceBlob = function(fileOrBlob, start, end) {
            var slicer = fileOrBlob.slice || fileOrBlob.mozSlice || fileOrBlob.webkitSlice;
            return slicer.call(fileOrBlob, start, end);
        };
        qq.arrayBufferToHex = function(buffer) {
            var bytesAsHex = "", bytes = new Uint8Array(buffer);
            qq.each(bytes, function(idx, byt) {
                var byteAsHexStr = byt.toString(16);
                if (byteAsHexStr.length < 2) {
                    byteAsHexStr = "0" + byteAsHexStr;
                }
                bytesAsHex += byteAsHexStr;
            });
            return bytesAsHex;
        };
        qq.readBlobToHex = function(blob, startOffset, length) {
            var initialBlob = qq.sliceBlob(blob, startOffset, startOffset + length), fileReader = new FileReader(), promise = new qq.Promise();
            fileReader.onload = function() {
                promise.success(qq.arrayBufferToHex(fileReader.result));
            };
            fileReader.onerror = promise.failure;
            fileReader.readAsArrayBuffer(initialBlob);
            return promise;
        };
        qq.extend = function(first, second, extendNested) {
            qq.each(second, function(prop, val) {
                if (extendNested && qq.isObject(val)) {
                    if (first[prop] === undefined) {
                        first[prop] = {};
                    }
                    qq.extend(first[prop], val, true);
                } else {
                    first[prop] = val;
                }
            });
            return first;
        };
        qq.override = function(target, sourceFn) {
            var super_ = {}, source = sourceFn(super_);
            qq.each(source, function(srcPropName, srcPropVal) {
                if (target[srcPropName] !== undefined) {
                    super_[srcPropName] = target[srcPropName];
                }
                target[srcPropName] = srcPropVal;
            });
            return target;
        };
        qq.indexOf = function(arr, elt, from) {
            if (arr.indexOf) {
                return arr.indexOf(elt, from);
            }
            from = from || 0;
            var len = arr.length;
            if (from < 0) {
                from += len;
            }
            for (;from < len; from += 1) {
                if (arr.hasOwnProperty(from) && arr[from] === elt) {
                    return from;
                }
            }
            return -1;
        };
        qq.getUniqueId = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0, v = c == "x" ? r : r & 3 | 8;
                return v.toString(16);
            });
        };
        qq.ie = function() {
            return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident") !== -1;
        };
        qq.ie7 = function() {
            return navigator.userAgent.indexOf("MSIE 7") !== -1;
        };
        qq.ie8 = function() {
            return navigator.userAgent.indexOf("MSIE 8") !== -1;
        };
        qq.ie10 = function() {
            return navigator.userAgent.indexOf("MSIE 10") !== -1;
        };
        qq.ie11 = function() {
            return qq.ie() && navigator.userAgent.indexOf("rv:11") !== -1;
        };
        qq.edge = function() {
            return navigator.userAgent.indexOf("Edge") >= 0;
        };
        qq.safari = function() {
            return navigator.vendor !== undefined && navigator.vendor.indexOf("Apple") !== -1;
        };
        qq.chrome = function() {
            return navigator.vendor !== undefined && navigator.vendor.indexOf("Google") !== -1;
        };
        qq.opera = function() {
            return navigator.vendor !== undefined && navigator.vendor.indexOf("Opera") !== -1;
        };
        qq.firefox = function() {
            return !qq.edge() && !qq.ie11() && navigator.userAgent.indexOf("Mozilla") !== -1 && navigator.vendor !== undefined && navigator.vendor === "";
        };
        qq.windows = function() {
            return navigator.platform === "Win32";
        };
        qq.android = function() {
            return navigator.userAgent.toLowerCase().indexOf("android") !== -1;
        };
        qq.androidStock = function() {
            return qq.android() && navigator.userAgent.toLowerCase().indexOf("chrome") < 0;
        };
        qq.ios6 = function() {
            return qq.ios() && navigator.userAgent.indexOf(" OS 6_") !== -1;
        };
        qq.ios7 = function() {
            return qq.ios() && navigator.userAgent.indexOf(" OS 7_") !== -1;
        };
        qq.ios8 = function() {
            return qq.ios() && navigator.userAgent.indexOf(" OS 8_") !== -1;
        };
        qq.ios800 = function() {
            return qq.ios() && navigator.userAgent.indexOf(" OS 8_0 ") !== -1;
        };
        qq.ios = function() {
            return navigator.userAgent.indexOf("iPad") !== -1 || navigator.userAgent.indexOf("iPod") !== -1 || navigator.userAgent.indexOf("iPhone") !== -1;
        };
        qq.iosChrome = function() {
            return qq.ios() && navigator.userAgent.indexOf("CriOS") !== -1;
        };
        qq.iosSafari = function() {
            return qq.ios() && !qq.iosChrome() && navigator.userAgent.indexOf("Safari") !== -1;
        };
        qq.iosSafariWebView = function() {
            return qq.ios() && !qq.iosChrome() && !qq.iosSafari();
        };
        qq.preventDefault = function(e) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        };
        qq.toElement = function() {
            var div = document.createElement("div");
            return function(html) {
                div.innerHTML = html;
                var element = div.firstChild;
                div.removeChild(element);
                return element;
            };
        }();
        qq.each = function(iterableItem, callback) {
            var keyOrIndex, retVal;
            if (iterableItem) {
                if (window.Storage && iterableItem.constructor === window.Storage) {
                    for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                        retVal = callback(iterableItem.key(keyOrIndex), iterableItem.getItem(iterableItem.key(keyOrIndex)));
                        if (retVal === false) {
                            break;
                        }
                    }
                } else if (qq.isArray(iterableItem) || qq.isItemList(iterableItem) || qq.isNodeList(iterableItem)) {
                    for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                        retVal = callback(keyOrIndex, iterableItem[keyOrIndex]);
                        if (retVal === false) {
                            break;
                        }
                    }
                } else if (qq.isString(iterableItem)) {
                    for (keyOrIndex = 0; keyOrIndex < iterableItem.length; keyOrIndex++) {
                        retVal = callback(keyOrIndex, iterableItem.charAt(keyOrIndex));
                        if (retVal === false) {
                            break;
                        }
                    }
                } else {
                    for (keyOrIndex in iterableItem) {
                        if (Object.prototype.hasOwnProperty.call(iterableItem, keyOrIndex)) {
                            retVal = callback(keyOrIndex, iterableItem[keyOrIndex]);
                            if (retVal === false) {
                                break;
                            }
                        }
                    }
                }
            }
        };
        qq.bind = function(oldFunc, context) {
            if (qq.isFunction(oldFunc)) {
                var args = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var newArgs = qq.extend([], args);
                    if (arguments.length) {
                        newArgs = newArgs.concat(Array.prototype.slice.call(arguments));
                    }
                    return oldFunc.apply(context, newArgs);
                };
            }
            throw new Error("first parameter must be a function!");
        };
        qq.obj2url = function(obj, temp, prefixDone) {
            var uristrings = [], prefix = "&", add = function(nextObj, i) {
                var nextTemp = temp ? /\[\]$/.test(temp) ? temp : temp + "[" + i + "]" : i;
                if (nextTemp !== "undefined" && i !== "undefined") {
                    uristrings.push(typeof nextObj === "object" ? qq.obj2url(nextObj, nextTemp, true) : Object.prototype.toString.call(nextObj) === "[object Function]" ? encodeURIComponent(nextTemp) + "=" + encodeURIComponent(nextObj()) : encodeURIComponent(nextTemp) + "=" + encodeURIComponent(nextObj));
                }
            };
            if (!prefixDone && temp) {
                prefix = /\?/.test(temp) ? /\?$/.test(temp) ? "" : "&" : "?";
                uristrings.push(temp);
                uristrings.push(qq.obj2url(obj));
            } else if (Object.prototype.toString.call(obj) === "[object Array]" && typeof obj !== "undefined") {
                qq.each(obj, function(idx, val) {
                    add(val, idx);
                });
            } else if (typeof obj !== "undefined" && obj !== null && typeof obj === "object") {
                qq.each(obj, function(prop, val) {
                    add(val, prop);
                });
            } else {
                uristrings.push(encodeURIComponent(temp) + "=" + encodeURIComponent(obj));
            }
            if (temp) {
                return uristrings.join(prefix);
            } else {
                return uristrings.join(prefix).replace(/^&/, "").replace(/%20/g, "+");
            }
        };
        qq.obj2FormData = function(obj, formData, arrayKeyName) {
            if (!formData) {
                formData = new FormData();
            }
            qq.each(obj, function(key, val) {
                key = arrayKeyName ? arrayKeyName + "[" + key + "]" : key;
                if (qq.isObject(val)) {
                    qq.obj2FormData(val, formData, key);
                } else if (qq.isFunction(val)) {
                    formData.append(key, val());
                } else {
                    formData.append(key, val);
                }
            });
            return formData;
        };
        qq.obj2Inputs = function(obj, form) {
            var input;
            if (!form) {
                form = document.createElement("form");
            }
            qq.obj2FormData(obj, {
                append: function(key, val) {
                    input = document.createElement("input");
                    input.setAttribute("name", key);
                    input.setAttribute("value", val);
                    form.appendChild(input);
                }
            });
            return form;
        };
        qq.parseJson = function(json) {
            if (window.JSON && qq.isFunction(JSON.parse)) {
                return JSON.parse(json);
            } else {
                return eval("(" + json + ")");
            }
        };
        qq.getExtension = function(filename) {
            var extIdx = filename.lastIndexOf(".") + 1;
            if (extIdx > 0) {
                return filename.substr(extIdx, filename.length - extIdx);
            }
        };
        qq.getFilename = function(blobOrFileInput) {
            if (qq.isInput(blobOrFileInput)) {
                return blobOrFileInput.value.replace(/.*(\/|\\)/, "");
            } else if (qq.isFile(blobOrFileInput)) {
                if (blobOrFileInput.fileName !== null && blobOrFileInput.fileName !== undefined) {
                    return blobOrFileInput.fileName;
                }
            }
            return blobOrFileInput.name;
        };
        qq.DisposeSupport = function() {
            var disposers = [];
            return {
                dispose: function() {
                    var disposer;
                    do {
                        disposer = disposers.shift();
                        if (disposer) {
                            disposer();
                        }
                    } while (disposer);
                },
                attach: function() {
                    var args = arguments;
                    this.addDisposer(qq(args[0]).attach.apply(this, Array.prototype.slice.call(arguments, 1)));
                },
                addDisposer: function(disposeFunction) {
                    disposers.push(disposeFunction);
                }
            };
        };
    })();
    (function() {
        "use strict";
        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return qq;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
    })();
    (function() {
        "use strict";
        qq.Error = function(message) {
            this.message = "[Fine Uploader " + qq.version + "] " + message;
        };
        qq.Error.prototype = new Error();
    })();
    qq.version = "5.16.2";
    qq.supportedFeatures = function() {
        "use strict";
        var supportsUploading, supportsUploadingBlobs, supportsFileDrop, supportsAjaxFileUploading, supportsFolderDrop, supportsChunking, supportsResume, supportsUploadViaPaste, supportsUploadCors, supportsDeleteFileXdr, supportsDeleteFileCorsXhr, supportsDeleteFileCors, supportsFolderSelection, supportsImagePreviews, supportsUploadProgress;
        function testSupportsFileInputElement() {
            var supported = true, tempInput;
            try {
                tempInput = document.createElement("input");
                tempInput.type = "file";
                qq(tempInput).hide();
                if (tempInput.disabled) {
                    supported = false;
                }
            } catch (ex) {
                supported = false;
            }
            return supported;
        }
        function isChrome14OrHigher() {
            return (qq.chrome() || qq.opera()) && navigator.userAgent.match(/Chrome\/[1][4-9]|Chrome\/[2-9][0-9]/) !== undefined;
        }
        function isCrossOriginXhrSupported() {
            if (window.XMLHttpRequest) {
                var xhr = qq.createXhrInstance();
                return xhr.withCredentials !== undefined;
            }
            return false;
        }
        function isXdrSupported() {
            return window.XDomainRequest !== undefined;
        }
        function isCrossOriginAjaxSupported() {
            if (isCrossOriginXhrSupported()) {
                return true;
            }
            return isXdrSupported();
        }
        function isFolderSelectionSupported() {
            return document.createElement("input").webkitdirectory !== undefined;
        }
        function isLocalStorageSupported() {
            try {
                return !!window.localStorage && qq.isFunction(window.localStorage.setItem);
            } catch (error) {
                return false;
            }
        }
        function isDragAndDropSupported() {
            var span = document.createElement("span");
            return ("draggable" in span || "ondragstart" in span && "ondrop" in span) && !qq.android() && !qq.ios();
        }
        supportsUploading = testSupportsFileInputElement();
        supportsAjaxFileUploading = supportsUploading && qq.isXhrUploadSupported();
        supportsUploadingBlobs = supportsAjaxFileUploading && !qq.androidStock();
        supportsFileDrop = supportsAjaxFileUploading && isDragAndDropSupported();
        supportsFolderDrop = supportsFileDrop && function() {
            var input = document.createElement("input");
            input.type = "file";
            return !!("webkitdirectory" in (input || document.querySelectorAll("input[type=file]")[0]));
        }();
        supportsChunking = supportsAjaxFileUploading && qq.isFileChunkingSupported();
        supportsResume = supportsAjaxFileUploading && supportsChunking && isLocalStorageSupported();
        supportsUploadViaPaste = supportsAjaxFileUploading && isChrome14OrHigher();
        supportsUploadCors = supportsUploading && (window.postMessage !== undefined || supportsAjaxFileUploading);
        supportsDeleteFileCorsXhr = isCrossOriginXhrSupported();
        supportsDeleteFileXdr = isXdrSupported();
        supportsDeleteFileCors = isCrossOriginAjaxSupported();
        supportsFolderSelection = isFolderSelectionSupported();
        supportsImagePreviews = supportsAjaxFileUploading && window.FileReader !== undefined;
        supportsUploadProgress = function() {
            if (supportsAjaxFileUploading) {
                return !qq.androidStock() && !qq.iosChrome();
            }
            return false;
        }();
        return {
            ajaxUploading: supportsAjaxFileUploading,
            blobUploading: supportsUploadingBlobs,
            canDetermineSize: supportsAjaxFileUploading,
            chunking: supportsChunking,
            deleteFileCors: supportsDeleteFileCors,
            deleteFileCorsXdr: supportsDeleteFileXdr,
            deleteFileCorsXhr: supportsDeleteFileCorsXhr,
            dialogElement: !!window.HTMLDialogElement,
            fileDrop: supportsFileDrop,
            folderDrop: supportsFolderDrop,
            folderSelection: supportsFolderSelection,
            imagePreviews: supportsImagePreviews,
            imageValidation: supportsImagePreviews,
            itemSizeValidation: supportsAjaxFileUploading,
            pause: supportsChunking,
            progressBar: supportsUploadProgress,
            resume: supportsResume,
            scaling: supportsImagePreviews && supportsUploadingBlobs,
            tiffPreviews: qq.safari(),
            unlimitedScaledImageSize: !qq.ios(),
            uploading: supportsUploading,
            uploadCors: supportsUploadCors,
            uploadCustomHeaders: supportsAjaxFileUploading,
            uploadNonMultipart: supportsAjaxFileUploading,
            uploadViaPaste: supportsUploadViaPaste
        };
    }();
    qq.isGenericPromise = function(maybePromise) {
        "use strict";
        return !!(maybePromise && maybePromise.then && qq.isFunction(maybePromise.then));
    };
    qq.Promise = function() {
        "use strict";
        var successArgs, failureArgs, successCallbacks = [], failureCallbacks = [], doneCallbacks = [], state = 0;
        qq.extend(this, {
            then: function(onSuccess, onFailure) {
                if (state === 0) {
                    if (onSuccess) {
                        successCallbacks.push(onSuccess);
                    }
                    if (onFailure) {
                        failureCallbacks.push(onFailure);
                    }
                } else if (state === -1) {
                    onFailure && onFailure.apply(null, failureArgs);
                } else if (onSuccess) {
                    onSuccess.apply(null, successArgs);
                }
                return this;
            },
            done: function(callback) {
                if (state === 0) {
                    doneCallbacks.push(callback);
                } else {
                    callback.apply(null, failureArgs === undefined ? successArgs : failureArgs);
                }
                return this;
            },
            success: function() {
                state = 1;
                successArgs = arguments;
                if (successCallbacks.length) {
                    qq.each(successCallbacks, function(idx, callback) {
                        callback.apply(null, successArgs);
                    });
                }
                if (doneCallbacks.length) {
                    qq.each(doneCallbacks, function(idx, callback) {
                        callback.apply(null, successArgs);
                    });
                }
                return this;
            },
            failure: function() {
                state = -1;
                failureArgs = arguments;
                if (failureCallbacks.length) {
                    qq.each(failureCallbacks, function(idx, callback) {
                        callback.apply(null, failureArgs);
                    });
                }
                if (doneCallbacks.length) {
                    qq.each(doneCallbacks, function(idx, callback) {
                        callback.apply(null, failureArgs);
                    });
                }
                return this;
            }
        });
    };
    qq.BlobProxy = function(referenceBlob, onCreate) {
        "use strict";
        qq.extend(this, {
            referenceBlob: referenceBlob,
            create: function() {
                return onCreate(referenceBlob);
            }
        });
    };
    qq.UploadButton = function(o) {
        "use strict";
        var self = this, disposeSupport = new qq.DisposeSupport(), options = {
            acceptFiles: null,
            element: null,
            focusClass: "qq-upload-button-focus",
            folders: false,
            hoverClass: "qq-upload-button-hover",
            ios8BrowserCrashWorkaround: false,
            multiple: false,
            name: "qqfile",
            onChange: function(input) {},
            title: null
        }, input, buttonId;
        qq.extend(options, o);
        buttonId = qq.getUniqueId();
        function createInput() {
            var input = document.createElement("input");
            input.setAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME, buttonId);
            input.setAttribute("title", options.title);
            self.setMultiple(options.multiple, input);
            if (options.folders && qq.supportedFeatures.folderSelection) {
                input.setAttribute("webkitdirectory", "");
            }
            if (options.acceptFiles) {
                input.setAttribute("accept", options.acceptFiles);
            }
            input.setAttribute("type", "file");
            input.setAttribute("name", options.name);
            qq(input).css({
                position: "absolute",
                right: 0,
                top: 0,
                fontFamily: "Arial",
                fontSize: qq.ie() && !qq.ie8() ? "3500px" : "118px",
                margin: 0,
                padding: 0,
                cursor: "pointer",
                opacity: 0
            });
            !qq.ie7() && qq(input).css({
                height: "100%"
            });
            options.element.appendChild(input);
            disposeSupport.attach(input, "change", function() {
                options.onChange(input);
            });
            disposeSupport.attach(input, "mouseover", function() {
                qq(options.element).addClass(options.hoverClass);
            });
            disposeSupport.attach(input, "mouseout", function() {
                qq(options.element).removeClass(options.hoverClass);
            });
            disposeSupport.attach(input, "focus", function() {
                qq(options.element).addClass(options.focusClass);
            });
            disposeSupport.attach(input, "blur", function() {
                qq(options.element).removeClass(options.focusClass);
            });
            return input;
        }
        qq(options.element).css({
            position: "relative",
            overflow: "hidden",
            direction: "ltr"
        });
        qq.extend(this, {
            getInput: function() {
                return input;
            },
            getButtonId: function() {
                return buttonId;
            },
            setMultiple: function(isMultiple, optInput) {
                var input = optInput || this.getInput();
                if (options.ios8BrowserCrashWorkaround && qq.ios8() && (qq.iosChrome() || qq.iosSafariWebView())) {
                    input.setAttribute("multiple", "");
                } else {
                    if (isMultiple) {
                        input.setAttribute("multiple", "");
                    } else {
                        input.removeAttribute("multiple");
                    }
                }
            },
            setAcceptFiles: function(acceptFiles) {
                if (acceptFiles !== options.acceptFiles) {
                    input.setAttribute("accept", acceptFiles);
                }
            },
            reset: function() {
                if (input.parentNode) {
                    qq(input).remove();
                }
                qq(options.element).removeClass(options.focusClass);
                input = null;
                input = createInput();
            }
        });
        input = createInput();
    };
    qq.UploadButton.BUTTON_ID_ATTR_NAME = "qq-button-id";
    qq.UploadData = function(uploaderProxy) {
        "use strict";
        var data = [], byUuid = {}, byStatus = {}, byProxyGroupId = {}, byBatchId = {};
        function getDataByIds(idOrIds) {
            if (qq.isArray(idOrIds)) {
                var entries = [];
                qq.each(idOrIds, function(idx, id) {
                    entries.push(data[id]);
                });
                return entries;
            }
            return data[idOrIds];
        }
        function getDataByUuids(uuids) {
            if (qq.isArray(uuids)) {
                var entries = [];
                qq.each(uuids, function(idx, uuid) {
                    entries.push(data[byUuid[uuid]]);
                });
                return entries;
            }
            return data[byUuid[uuids]];
        }
        function getDataByStatus(status) {
            var statusResults = [], statuses = [].concat(status);
            qq.each(statuses, function(index, statusEnum) {
                var statusResultIndexes = byStatus[statusEnum];
                if (statusResultIndexes !== undefined) {
                    qq.each(statusResultIndexes, function(i, dataIndex) {
                        statusResults.push(data[dataIndex]);
                    });
                }
            });
            return statusResults;
        }
        qq.extend(this, {
            addFile: function(spec) {
                var status = spec.status || qq.status.SUBMITTING, id = data.push({
                    name: spec.name,
                    originalName: spec.name,
                    uuid: spec.uuid,
                    size: spec.size == null ? -1 : spec.size,
                    status: status,
                    file: spec.file
                }) - 1;
                if (spec.batchId) {
                    data[id].batchId = spec.batchId;
                    if (byBatchId[spec.batchId] === undefined) {
                        byBatchId[spec.batchId] = [];
                    }
                    byBatchId[spec.batchId].push(id);
                }
                if (spec.proxyGroupId) {
                    data[id].proxyGroupId = spec.proxyGroupId;
                    if (byProxyGroupId[spec.proxyGroupId] === undefined) {
                        byProxyGroupId[spec.proxyGroupId] = [];
                    }
                    byProxyGroupId[spec.proxyGroupId].push(id);
                }
                data[id].id = id;
                byUuid[spec.uuid] = id;
                if (byStatus[status] === undefined) {
                    byStatus[status] = [];
                }
                byStatus[status].push(id);
                spec.onBeforeStatusChange && spec.onBeforeStatusChange(id);
                uploaderProxy.onStatusChange(id, null, status);
                return id;
            },
            retrieve: function(optionalFilter) {
                if (qq.isObject(optionalFilter) && data.length) {
                    if (optionalFilter.id !== undefined) {
                        return getDataByIds(optionalFilter.id);
                    } else if (optionalFilter.uuid !== undefined) {
                        return getDataByUuids(optionalFilter.uuid);
                    } else if (optionalFilter.status) {
                        return getDataByStatus(optionalFilter.status);
                    }
                } else {
                    return qq.extend([], data, true);
                }
            },
            removeFileRef: function(id) {
                var record = getDataByIds(id);
                if (record) {
                    delete record.file;
                }
            },
            reset: function() {
                data = [];
                byUuid = {};
                byStatus = {};
                byBatchId = {};
            },
            setStatus: function(id, newStatus) {
                var oldStatus = data[id].status, byStatusOldStatusIndex = qq.indexOf(byStatus[oldStatus], id);
                byStatus[oldStatus].splice(byStatusOldStatusIndex, 1);
                data[id].status = newStatus;
                if (byStatus[newStatus] === undefined) {
                    byStatus[newStatus] = [];
                }
                byStatus[newStatus].push(id);
                uploaderProxy.onStatusChange(id, oldStatus, newStatus);
            },
            uuidChanged: function(id, newUuid) {
                var oldUuid = data[id].uuid;
                data[id].uuid = newUuid;
                byUuid[newUuid] = id;
                delete byUuid[oldUuid];
            },
            updateName: function(id, newName) {
                data[id].name = newName;
            },
            updateSize: function(id, newSize) {
                data[id].size = newSize;
            },
            setParentId: function(targetId, parentId) {
                data[targetId].parentId = parentId;
            },
            getIdsInProxyGroup: function(id) {
                var proxyGroupId = data[id].proxyGroupId;
                if (proxyGroupId) {
                    return byProxyGroupId[proxyGroupId];
                }
                return [];
            },
            getIdsInBatch: function(id) {
                var batchId = data[id].batchId;
                return byBatchId[batchId];
            }
        });
    };
    qq.status = {
        SUBMITTING: "submitting",
        SUBMITTED: "submitted",
        REJECTED: "rejected",
        QUEUED: "queued",
        CANCELED: "canceled",
        PAUSED: "paused",
        UPLOADING: "uploading",
        UPLOAD_FINALIZING: "upload finalizing",
        UPLOAD_RETRYING: "retrying upload",
        UPLOAD_SUCCESSFUL: "upload successful",
        UPLOAD_FAILED: "upload failed",
        DELETE_FAILED: "delete failed",
        DELETING: "deleting",
        DELETED: "deleted"
    };
    (function() {
        "use strict";
        qq.basePublicApi = {
            addBlobs: function(blobDataOrArray, params, endpoint) {
                this.addFiles(blobDataOrArray, params, endpoint);
            },
            addInitialFiles: function(cannedFileList) {
                var self = this;
                qq.each(cannedFileList, function(index, cannedFile) {
                    self._addCannedFile(cannedFile);
                });
            },
            addFiles: function(data, params, endpoint) {
                this._maybeHandleIos8SafariWorkaround();
                var batchId = this._storedIds.length === 0 ? qq.getUniqueId() : this._currentBatchId, processBlob = qq.bind(function(blob) {
                    this._handleNewFile({
                        blob: blob,
                        name: this._options.blobs.defaultName
                    }, batchId, verifiedFiles);
                }, this), processBlobData = qq.bind(function(blobData) {
                    this._handleNewFile(blobData, batchId, verifiedFiles);
                }, this), processCanvas = qq.bind(function(canvas) {
                    var blob = qq.canvasToBlob(canvas);
                    this._handleNewFile({
                        blob: blob,
                        name: this._options.blobs.defaultName + ".png"
                    }, batchId, verifiedFiles);
                }, this), processCanvasData = qq.bind(function(canvasData) {
                    var normalizedQuality = canvasData.quality && canvasData.quality / 100, blob = qq.canvasToBlob(canvasData.canvas, canvasData.type, normalizedQuality);
                    this._handleNewFile({
                        blob: blob,
                        name: canvasData.name
                    }, batchId, verifiedFiles);
                }, this), processFileOrInput = qq.bind(function(fileOrInput) {
                    if (qq.isInput(fileOrInput) && qq.supportedFeatures.ajaxUploading) {
                        var files = Array.prototype.slice.call(fileOrInput.files), self = this;
                        qq.each(files, function(idx, file) {
                            self._handleNewFile(file, batchId, verifiedFiles);
                        });
                    } else {
                        this._handleNewFile(fileOrInput, batchId, verifiedFiles);
                    }
                }, this), normalizeData = function() {
                    if (qq.isFileList(data)) {
                        data = Array.prototype.slice.call(data);
                    }
                    data = [].concat(data);
                }, self = this, verifiedFiles = [];
                this._currentBatchId = batchId;
                if (data) {
                    normalizeData();
                    qq.each(data, function(idx, fileContainer) {
                        if (qq.isFileOrInput(fileContainer)) {
                            processFileOrInput(fileContainer);
                        } else if (qq.isBlob(fileContainer)) {
                            processBlob(fileContainer);
                        } else if (qq.isObject(fileContainer)) {
                            if (fileContainer.blob && fileContainer.name) {
                                processBlobData(fileContainer);
                            } else if (fileContainer.canvas && fileContainer.name) {
                                processCanvasData(fileContainer);
                            }
                        } else if (fileContainer.tagName && fileContainer.tagName.toLowerCase() === "canvas") {
                            processCanvas(fileContainer);
                        } else {
                            self.log(fileContainer + " is not a valid file container!  Ignoring!", "warn");
                        }
                    });
                    this.log("Received " + verifiedFiles.length + " files.");
                    this._prepareItemsForUpload(verifiedFiles, params, endpoint);
                }
            },
            cancel: function(id) {
                var uploadData = this._uploadData.retrieve({
                    id: id
                });
                if (uploadData && uploadData.status === qq.status.UPLOAD_FINALIZING) {
                    this.log(qq.format("Ignoring cancel for file ID {} ({}).  Finalizing upload.", id, this.getName(id)), "error");
                } else {
                    this._handler.cancel(id);
                }
            },
            cancelAll: function() {
                var storedIdsCopy = [], self = this;
                qq.extend(storedIdsCopy, this._storedIds);
                qq.each(storedIdsCopy, function(idx, storedFileId) {
                    self.cancel(storedFileId);
                });
                this._handler.cancelAll();
            },
            clearStoredFiles: function() {
                this._storedIds = [];
            },
            continueUpload: function(id) {
                var uploadData = this._uploadData.retrieve({
                    id: id
                });
                if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) {
                    return false;
                }
                if (uploadData.status === qq.status.PAUSED) {
                    this.log(qq.format("Paused file ID {} ({}) will be continued.  Not paused.", id, this.getName(id)));
                    this._uploadFile(id);
                    return true;
                } else {
                    this.log(qq.format("Ignoring continue for file ID {} ({}).  Not paused.", id, this.getName(id)), "error");
                }
                return false;
            },
            deleteFile: function(id) {
                return this._onSubmitDelete(id);
            },
            doesExist: function(fileOrBlobId) {
                return this._handler.isValid(fileOrBlobId);
            },
            drawThumbnail: function(fileId, imgOrCanvas, maxSize, fromServer, customResizeFunction) {
                var promiseToReturn = new qq.Promise(), fileOrUrl, options;
                if (this._imageGenerator) {
                    fileOrUrl = this._thumbnailUrls[fileId];
                    options = {
                        customResizeFunction: customResizeFunction,
                        maxSize: maxSize > 0 ? maxSize : null,
                        scale: maxSize > 0
                    };
                    if (!fromServer && qq.supportedFeatures.imagePreviews) {
                        fileOrUrl = this.getFile(fileId);
                    }
                    if (fileOrUrl == null) {
                        promiseToReturn.failure({
                            container: imgOrCanvas,
                            error: "File or URL not found."
                        });
                    } else {
                        this._imageGenerator.generate(fileOrUrl, imgOrCanvas, options).then(function success(modifiedContainer) {
                            promiseToReturn.success(modifiedContainer);
                        }, function failure(container, reason) {
                            promiseToReturn.failure({
                                container: container,
                                error: reason || "Problem generating thumbnail"
                            });
                        });
                    }
                } else {
                    promiseToReturn.failure({
                        container: imgOrCanvas,
                        error: "Missing image generator module"
                    });
                }
                return promiseToReturn;
            },
            getButton: function(fileId) {
                return this._getButton(this._buttonIdsForFileIds[fileId]);
            },
            getEndpoint: function(fileId) {
                return this._endpointStore.get(fileId);
            },
            getFile: function(fileOrBlobId) {
                var file = this._handler.getFile(fileOrBlobId);
                var uploadDataRecord;
                if (!file) {
                    uploadDataRecord = this._uploadData.retrieve({
                        id: fileOrBlobId
                    });
                    if (uploadDataRecord) {
                        file = uploadDataRecord.file;
                    }
                }
                return file || null;
            },
            getInProgress: function() {
                return this._uploadData.retrieve({
                    status: [ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED ]
                }).length;
            },
            getName: function(id) {
                return this._uploadData.retrieve({
                    id: id
                }).name;
            },
            getParentId: function(id) {
                var uploadDataEntry = this.getUploads({
                    id: id
                }), parentId = null;
                if (uploadDataEntry) {
                    if (uploadDataEntry.parentId !== undefined) {
                        parentId = uploadDataEntry.parentId;
                    }
                }
                return parentId;
            },
            getResumableFilesData: function() {
                return this._handler.getResumableFilesData();
            },
            getSize: function(id) {
                return this._uploadData.retrieve({
                    id: id
                }).size;
            },
            getNetUploads: function() {
                return this._netUploaded;
            },
            getRemainingAllowedItems: function() {
                var allowedItems = this._currentItemLimit;
                if (allowedItems > 0) {
                    return allowedItems - this._netUploadedOrQueued;
                }
                return null;
            },
            getUploads: function(optionalFilter) {
                return this._uploadData.retrieve(optionalFilter);
            },
            getUuid: function(id) {
                return this._uploadData.retrieve({
                    id: id
                }).uuid;
            },
            isResumable: function(id) {
                return this._handler.hasResumeRecord(id);
            },
            log: function(str, level) {
                if (this._options.debug && (!level || level === "info")) {
                    qq.log("[Fine Uploader " + qq.version + "] " + str);
                } else if (level && level !== "info") {
                    qq.log("[Fine Uploader " + qq.version + "] " + str, level);
                }
            },
            pauseUpload: function(id) {
                var uploadData = this._uploadData.retrieve({
                    id: id
                });
                if (!qq.supportedFeatures.pause || !this._options.chunking.enabled) {
                    return false;
                }
                if (qq.indexOf([ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING ], uploadData.status) >= 0) {
                    if (this._handler.pause(id)) {
                        this._uploadData.setStatus(id, qq.status.PAUSED);
                        return true;
                    } else {
                        this.log(qq.format("Unable to pause file ID {} ({}).", id, this.getName(id)), "error");
                    }
                } else {
                    this.log(qq.format("Ignoring pause for file ID {} ({}).  Not in progress.", id, this.getName(id)), "error");
                }
                return false;
            },
            removeFileRef: function(id) {
                this._handler.expunge(id);
                this._uploadData.removeFileRef(id);
            },
            reset: function() {
                this.log("Resetting uploader...");
                this._handler.reset();
                this._storedIds = [];
                this._autoRetries = [];
                this._retryTimeouts = [];
                this._preventRetries = [];
                this._thumbnailUrls = [];
                qq.each(this._buttons, function(idx, button) {
                    button.reset();
                });
                this._paramsStore.reset();
                this._endpointStore.reset();
                this._netUploadedOrQueued = 0;
                this._netUploaded = 0;
                this._uploadData.reset();
                this._buttonIdsForFileIds = [];
                this._pasteHandler && this._pasteHandler.reset();
                this._options.session.refreshOnReset && this._refreshSessionData();
                this._succeededSinceLastAllComplete = [];
                this._failedSinceLastAllComplete = [];
                this._totalProgress && this._totalProgress.reset();
                this._customResumeDataStore.reset();
            },
            retry: function(id) {
                return this._manualRetry(id);
            },
            scaleImage: function(id, specs) {
                var self = this;
                return qq.Scaler.prototype.scaleImage(id, specs, {
                    log: qq.bind(self.log, self),
                    getFile: qq.bind(self.getFile, self),
                    uploadData: self._uploadData
                });
            },
            setCustomHeaders: function(headers, id) {
                this._customHeadersStore.set(headers, id);
            },
            setCustomResumeData: function(id, data) {
                this._customResumeDataStore.set(data, id);
            },
            setDeleteFileCustomHeaders: function(headers, id) {
                this._deleteFileCustomHeadersStore.set(headers, id);
            },
            setDeleteFileEndpoint: function(endpoint, id) {
                this._deleteFileEndpointStore.set(endpoint, id);
            },
            setDeleteFileParams: function(params, id) {
                this._deleteFileParamsStore.set(params, id);
            },
            setEndpoint: function(endpoint, id) {
                this._endpointStore.set(endpoint, id);
            },
            setForm: function(elementOrId) {
                this._updateFormSupportAndParams(elementOrId);
            },
            setItemLimit: function(newItemLimit) {
                this._currentItemLimit = newItemLimit;
            },
            setName: function(id, newName) {
                this._uploadData.updateName(id, newName);
            },
            setParams: function(params, id) {
                this._paramsStore.set(params, id);
            },
            setUuid: function(id, newUuid) {
                return this._uploadData.uuidChanged(id, newUuid);
            },
            setStatus: function(id, newStatus) {
                var fileRecord = this.getUploads({
                    id: id
                });
                if (!fileRecord) {
                    throw new qq.Error(id + " is not a valid file ID.");
                }
                switch (newStatus) {
                  case qq.status.DELETED:
                    this._onDeleteComplete(id, null, false);
                    break;

                  case qq.status.DELETE_FAILED:
                    this._onDeleteComplete(id, null, true);
                    break;

                  default:
                    var errorMessage = "Method setStatus called on '" + name + "' not implemented yet for " + newStatus;
                    this.log(errorMessage);
                    throw new qq.Error(errorMessage);
                }
            },
            uploadStoredFiles: function() {
                if (this._storedIds.length === 0) {
                    this._itemError("noFilesError");
                } else {
                    this._uploadStoredFiles();
                }
            }
        };
        qq.basePrivateApi = {
            _addCannedFile: function(sessionData) {
                var self = this;
                return this._uploadData.addFile({
                    uuid: sessionData.uuid,
                    name: sessionData.name,
                    size: sessionData.size,
                    status: qq.status.UPLOAD_SUCCESSFUL,
                    onBeforeStatusChange: function(id) {
                        sessionData.deleteFileEndpoint && self.setDeleteFileEndpoint(sessionData.deleteFileEndpoint, id);
                        sessionData.deleteFileParams && self.setDeleteFileParams(sessionData.deleteFileParams, id);
                        if (sessionData.thumbnailUrl) {
                            self._thumbnailUrls[id] = sessionData.thumbnailUrl;
                        }
                        self._netUploaded++;
                        self._netUploadedOrQueued++;
                    }
                });
            },
            _annotateWithButtonId: function(file, associatedInput) {
                if (qq.isFile(file)) {
                    file.qqButtonId = this._getButtonId(associatedInput);
                }
            },
            _batchError: function(message) {
                this._options.callbacks.onError(null, null, message, undefined);
            },
            _createDeleteHandler: function() {
                var self = this;
                return new qq.DeleteFileAjaxRequester({
                    method: this._options.deleteFile.method.toUpperCase(),
                    maxConnections: this._options.maxConnections,
                    uuidParamName: this._options.request.uuidName,
                    customHeaders: this._deleteFileCustomHeadersStore,
                    paramsStore: this._deleteFileParamsStore,
                    endpointStore: this._deleteFileEndpointStore,
                    cors: this._options.cors,
                    log: qq.bind(self.log, self),
                    onDelete: function(id) {
                        self._onDelete(id);
                        self._options.callbacks.onDelete(id);
                    },
                    onDeleteComplete: function(id, xhrOrXdr, isError) {
                        self._onDeleteComplete(id, xhrOrXdr, isError);
                        self._options.callbacks.onDeleteComplete(id, xhrOrXdr, isError);
                    }
                });
            },
            _createPasteHandler: function() {
                var self = this;
                return new qq.PasteSupport({
                    targetElement: this._options.paste.targetElement,
                    callbacks: {
                        log: qq.bind(self.log, self),
                        pasteReceived: function(blob) {
                            self._handleCheckedCallback({
                                name: "onPasteReceived",
                                callback: qq.bind(self._options.callbacks.onPasteReceived, self, blob),
                                onSuccess: qq.bind(self._handlePasteSuccess, self, blob),
                                identifier: "pasted image"
                            });
                        }
                    }
                });
            },
            _createStore: function(initialValue, _readOnlyValues_) {
                var store = {}, catchall = initialValue, perIdReadOnlyValues = {}, readOnlyValues = _readOnlyValues_, copy = function(orig) {
                    if (qq.isObject(orig)) {
                        return qq.extend({}, orig);
                    }
                    return orig;
                }, getReadOnlyValues = function() {
                    if (qq.isFunction(readOnlyValues)) {
                        return readOnlyValues();
                    }
                    return readOnlyValues;
                }, includeReadOnlyValues = function(id, existing) {
                    if (readOnlyValues && qq.isObject(existing)) {
                        qq.extend(existing, getReadOnlyValues());
                    }
                    if (perIdReadOnlyValues[id]) {
                        qq.extend(existing, perIdReadOnlyValues[id]);
                    }
                };
                return {
                    set: function(val, id) {
                        if (id == null) {
                            store = {};
                            catchall = copy(val);
                        } else {
                            store[id] = copy(val);
                        }
                    },
                    get: function(id) {
                        var values;
                        if (id != null && store[id]) {
                            values = store[id];
                        } else {
                            values = copy(catchall);
                        }
                        includeReadOnlyValues(id, values);
                        return copy(values);
                    },
                    addReadOnly: function(id, values) {
                        if (qq.isObject(store)) {
                            if (id === null) {
                                if (qq.isFunction(values)) {
                                    readOnlyValues = values;
                                } else {
                                    readOnlyValues = readOnlyValues || {};
                                    qq.extend(readOnlyValues, values);
                                }
                            } else {
                                perIdReadOnlyValues[id] = perIdReadOnlyValues[id] || {};
                                qq.extend(perIdReadOnlyValues[id], values);
                            }
                        }
                    },
                    remove: function(fileId) {
                        return delete store[fileId];
                    },
                    reset: function() {
                        store = {};
                        perIdReadOnlyValues = {};
                        catchall = initialValue;
                    }
                };
            },
            _createUploadDataTracker: function() {
                var self = this;
                return new qq.UploadData({
                    getName: function(id) {
                        return self.getName(id);
                    },
                    getUuid: function(id) {
                        return self.getUuid(id);
                    },
                    getSize: function(id) {
                        return self.getSize(id);
                    },
                    onStatusChange: function(id, oldStatus, newStatus) {
                        self._onUploadStatusChange(id, oldStatus, newStatus);
                        self._options.callbacks.onStatusChange(id, oldStatus, newStatus);
                        self._maybeAllComplete(id, newStatus);
                        if (self._totalProgress) {
                            setTimeout(function() {
                                self._totalProgress.onStatusChange(id, oldStatus, newStatus);
                            }, 0);
                        }
                    }
                });
            },
            _createUploadButton: function(spec) {
                var self = this, acceptFiles = spec.accept || this._options.validation.acceptFiles, allowedExtensions = spec.allowedExtensions || this._options.validation.allowedExtensions, button;
                function allowMultiple() {
                    if (qq.supportedFeatures.ajaxUploading) {
                        if (self._options.workarounds.iosEmptyVideos && qq.ios() && !qq.ios6() && self._isAllowedExtension(allowedExtensions, ".mov")) {
                            return false;
                        }
                        if (spec.multiple === undefined) {
                            return self._options.multiple;
                        }
                        return spec.multiple;
                    }
                    return false;
                }
                button = new qq.UploadButton({
                    acceptFiles: acceptFiles,
                    element: spec.element,
                    focusClass: this._options.classes.buttonFocus,
                    folders: spec.folders,
                    hoverClass: this._options.classes.buttonHover,
                    ios8BrowserCrashWorkaround: this._options.workarounds.ios8BrowserCrash,
                    multiple: allowMultiple(),
                    name: this._options.request.inputName,
                    onChange: function(input) {
                        self._onInputChange(input);
                    },
                    title: spec.title == null ? this._options.text.fileInputTitle : spec.title
                });
                this._disposeSupport.addDisposer(function() {
                    button.dispose();
                });
                self._buttons.push(button);
                return button;
            },
            _createUploadHandler: function(additionalOptions, namespace) {
                var self = this, lastOnProgress = {}, options = {
                    debug: this._options.debug,
                    maxConnections: this._options.maxConnections,
                    cors: this._options.cors,
                    paramsStore: this._paramsStore,
                    endpointStore: this._endpointStore,
                    chunking: this._options.chunking,
                    resume: this._options.resume,
                    blobs: this._options.blobs,
                    log: qq.bind(self.log, self),
                    preventRetryParam: this._options.retry.preventRetryResponseProperty,
                    onProgress: function(id, name, loaded, total) {
                        if (loaded < 0 || total < 0) {
                            return;
                        }
                        if (lastOnProgress[id]) {
                            if (lastOnProgress[id].loaded !== loaded || lastOnProgress[id].total !== total) {
                                self._onProgress(id, name, loaded, total);
                                self._options.callbacks.onProgress(id, name, loaded, total);
                            }
                        } else {
                            self._onProgress(id, name, loaded, total);
                            self._options.callbacks.onProgress(id, name, loaded, total);
                        }
                        lastOnProgress[id] = {
                            loaded: loaded,
                            total: total
                        };
                    },
                    onComplete: function(id, name, result, xhr) {
                        delete lastOnProgress[id];
                        var status = self.getUploads({
                            id: id
                        }).status, retVal;
                        if (status === qq.status.UPLOAD_SUCCESSFUL || status === qq.status.UPLOAD_FAILED) {
                            return;
                        }
                        retVal = self._onComplete(id, name, result, xhr);
                        if (retVal instanceof qq.Promise) {
                            retVal.done(function() {
                                self._options.callbacks.onComplete(id, name, result, xhr);
                            });
                        } else {
                            self._options.callbacks.onComplete(id, name, result, xhr);
                        }
                    },
                    onCancel: function(id, name, cancelFinalizationEffort) {
                        var promise = new qq.Promise();
                        self._handleCheckedCallback({
                            name: "onCancel",
                            callback: qq.bind(self._options.callbacks.onCancel, self, id, name),
                            onFailure: promise.failure,
                            onSuccess: function() {
                                cancelFinalizationEffort.then(function() {
                                    self._onCancel(id, name);
                                });
                                promise.success();
                            },
                            identifier: id
                        });
                        return promise;
                    },
                    onUploadPrep: qq.bind(this._onUploadPrep, this),
                    onUpload: function(id, name) {
                        self._onUpload(id, name);
                        var onUploadResult = self._options.callbacks.onUpload(id, name);
                        if (qq.isGenericPromise(onUploadResult)) {
                            self.log(qq.format("onUpload for {} returned a Promise - waiting for resolution.", id));
                            return onUploadResult;
                        }
                        return new qq.Promise().success();
                    },
                    onUploadChunk: function(id, name, chunkData) {
                        self._onUploadChunk(id, chunkData);
                        var onUploadChunkResult = self._options.callbacks.onUploadChunk(id, name, chunkData);
                        if (qq.isGenericPromise(onUploadChunkResult)) {
                            self.log(qq.format("onUploadChunk for {}.{} returned a Promise - waiting for resolution.", id, chunkData.partIndex));
                            return onUploadChunkResult;
                        }
                        return new qq.Promise().success();
                    },
                    onUploadChunkSuccess: function(id, chunkData, result, xhr) {
                        self._onUploadChunkSuccess(id, chunkData);
                        self._options.callbacks.onUploadChunkSuccess.apply(self, arguments);
                    },
                    onResume: function(id, name, chunkData, customResumeData) {
                        return self._options.callbacks.onResume(id, name, chunkData, customResumeData);
                    },
                    onAutoRetry: function(id, name, responseJSON, xhr) {
                        return self._onAutoRetry.apply(self, arguments);
                    },
                    onUuidChanged: function(id, newUuid) {
                        self.log("Server requested UUID change from '" + self.getUuid(id) + "' to '" + newUuid + "'");
                        self.setUuid(id, newUuid);
                    },
                    getName: qq.bind(self.getName, self),
                    getUuid: qq.bind(self.getUuid, self),
                    getSize: qq.bind(self.getSize, self),
                    setSize: qq.bind(self._setSize, self),
                    getDataByUuid: function(uuid) {
                        return self.getUploads({
                            uuid: uuid
                        });
                    },
                    isQueued: function(id) {
                        var status = self.getUploads({
                            id: id
                        }).status;
                        return status === qq.status.QUEUED || status === qq.status.SUBMITTED || status === qq.status.UPLOAD_RETRYING || status === qq.status.PAUSED;
                    },
                    getIdsInProxyGroup: self._uploadData.getIdsInProxyGroup,
                    getIdsInBatch: self._uploadData.getIdsInBatch,
                    isInProgress: function(id) {
                        return self.getUploads({
                            id: id
                        }).status === qq.status.UPLOADING;
                    },
                    getCustomResumeData: qq.bind(self._getCustomResumeData, self),
                    setStatus: function(id, status) {
                        self._uploadData.setStatus(id, status);
                    }
                };
                qq.each(this._options.request, function(prop, val) {
                    options[prop] = val;
                });
                options.customHeaders = this._customHeadersStore;
                if (additionalOptions) {
                    qq.each(additionalOptions, function(key, val) {
                        options[key] = val;
                    });
                }
                return new qq.UploadHandlerController(options, namespace);
            },
            _fileOrBlobRejected: function(id) {
                this._netUploadedOrQueued--;
                this._uploadData.setStatus(id, qq.status.REJECTED);
            },
            _formatSize: function(bytes) {
                if (bytes === 0) {
                    return bytes + this._options.text.sizeSymbols[0];
                }
                var i = -1;
                do {
                    bytes = bytes / 1e3;
                    i++;
                } while (bytes > 999);
                return Math.max(bytes, .1).toFixed(1) + this._options.text.sizeSymbols[i];
            },
            _generateExtraButtonSpecs: function() {
                var self = this;
                this._extraButtonSpecs = {};
                qq.each(this._options.extraButtons, function(idx, extraButtonOptionEntry) {
                    var multiple = extraButtonOptionEntry.multiple, validation = qq.extend({}, self._options.validation, true), extraButtonSpec = qq.extend({}, extraButtonOptionEntry);
                    if (multiple === undefined) {
                        multiple = self._options.multiple;
                    }
                    if (extraButtonSpec.validation) {
                        qq.extend(validation, extraButtonOptionEntry.validation, true);
                    }
                    qq.extend(extraButtonSpec, {
                        multiple: multiple,
                        validation: validation
                    }, true);
                    self._initExtraButton(extraButtonSpec);
                });
            },
            _getButton: function(buttonId) {
                var extraButtonsSpec = this._extraButtonSpecs[buttonId];
                if (extraButtonsSpec) {
                    return extraButtonsSpec.element;
                } else if (buttonId === this._defaultButtonId) {
                    return this._options.button;
                }
            },
            _getButtonId: function(buttonOrFileInputOrFile) {
                var inputs, fileInput, fileBlobOrInput = buttonOrFileInputOrFile;
                if (fileBlobOrInput instanceof qq.BlobProxy) {
                    fileBlobOrInput = fileBlobOrInput.referenceBlob;
                }
                if (fileBlobOrInput && !qq.isBlob(fileBlobOrInput)) {
                    if (qq.isFile(fileBlobOrInput)) {
                        return fileBlobOrInput.qqButtonId;
                    } else if (fileBlobOrInput.tagName.toLowerCase() === "input" && fileBlobOrInput.type.toLowerCase() === "file") {
                        return fileBlobOrInput.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                    }
                    inputs = fileBlobOrInput.getElementsByTagName("input");
                    qq.each(inputs, function(idx, input) {
                        if (input.getAttribute("type") === "file") {
                            fileInput = input;
                            return false;
                        }
                    });
                    if (fileInput) {
                        return fileInput.getAttribute(qq.UploadButton.BUTTON_ID_ATTR_NAME);
                    }
                }
            },
            _getCustomResumeData: function(fileId) {
                return this._customResumeDataStore.get(fileId);
            },
            _getNotFinished: function() {
                return this._uploadData.retrieve({
                    status: [ qq.status.UPLOADING, qq.status.UPLOAD_RETRYING, qq.status.QUEUED, qq.status.SUBMITTING, qq.status.SUBMITTED, qq.status.PAUSED ]
                }).length;
            },
            _getValidationBase: function(buttonId) {
                var extraButtonSpec = this._extraButtonSpecs[buttonId];
                return extraButtonSpec ? extraButtonSpec.validation : this._options.validation;
            },
            _getValidationDescriptor: function(fileWrapper) {
                if (fileWrapper.file instanceof qq.BlobProxy) {
                    return {
                        name: qq.getFilename(fileWrapper.file.referenceBlob),
                        size: fileWrapper.file.referenceBlob.size
                    };
                }
                return {
                    name: this.getUploads({
                        id: fileWrapper.id
                    }).name,
                    size: this.getUploads({
                        id: fileWrapper.id
                    }).size
                };
            },
            _getValidationDescriptors: function(fileWrappers) {
                var self = this, fileDescriptors = [];
                qq.each(fileWrappers, function(idx, fileWrapper) {
                    fileDescriptors.push(self._getValidationDescriptor(fileWrapper));
                });
                return fileDescriptors;
            },
            _handleCameraAccess: function() {
                if (this._options.camera.ios && qq.ios()) {
                    var acceptIosCamera = "image/*;capture=camera", button = this._options.camera.button, buttonId = button ? this._getButtonId(button) : this._defaultButtonId, optionRoot = this._options;
                    if (buttonId && buttonId !== this._defaultButtonId) {
                        optionRoot = this._extraButtonSpecs[buttonId];
                    }
                    optionRoot.multiple = false;
                    if (optionRoot.validation.acceptFiles === null) {
                        optionRoot.validation.acceptFiles = acceptIosCamera;
                    } else {
                        optionRoot.validation.acceptFiles += "," + acceptIosCamera;
                    }
                    qq.each(this._buttons, function(idx, button) {
                        if (button.getButtonId() === buttonId) {
                            button.setMultiple(optionRoot.multiple);
                            button.setAcceptFiles(optionRoot.acceptFiles);
                            return false;
                        }
                    });
                }
            },
            _handleCheckedCallback: function(details) {
                var self = this, callbackRetVal = details.callback();
                if (qq.isGenericPromise(callbackRetVal)) {
                    this.log(details.name + " - waiting for " + details.name + " promise to be fulfilled for " + details.identifier);
                    return callbackRetVal.then(function(successParam) {
                        self.log(details.name + " promise success for " + details.identifier);
                        details.onSuccess(successParam);
                    }, function() {
                        if (details.onFailure) {
                            self.log(details.name + " promise failure for " + details.identifier);
                            details.onFailure();
                        } else {
                            self.log(details.name + " promise failure for " + details.identifier);
                        }
                    });
                }
                if (callbackRetVal !== false) {
                    details.onSuccess(callbackRetVal);
                } else {
                    if (details.onFailure) {
                        this.log(details.name + " - return value was 'false' for " + details.identifier + ".  Invoking failure callback.");
                        details.onFailure();
                    } else {
                        this.log(details.name + " - return value was 'false' for " + details.identifier + ".  Will not proceed.");
                    }
                }
                return callbackRetVal;
            },
            _handleNewFile: function(file, batchId, newFileWrapperList) {
                var self = this, uuid = qq.getUniqueId(), size = -1, name = qq.getFilename(file), actualFile = file.blob || file, handler = this._customNewFileHandler ? this._customNewFileHandler : qq.bind(self._handleNewFileGeneric, self);
                if (!qq.isInput(actualFile) && actualFile.size >= 0) {
                    size = actualFile.size;
                }
                handler(actualFile, name, uuid, size, newFileWrapperList, batchId, this._options.request.uuidName, {
                    uploadData: self._uploadData,
                    paramsStore: self._paramsStore,
                    addFileToHandler: function(id, file) {
                        self._handler.add(id, file);
                        self._netUploadedOrQueued++;
                        self._trackButton(id);
                    }
                });
            },
            _handleNewFileGeneric: function(file, name, uuid, size, fileList, batchId) {
                var id = this._uploadData.addFile({
                    uuid: uuid,
                    name: name,
                    size: size,
                    batchId: batchId,
                    file: file
                });
                this._handler.add(id, file);
                this._trackButton(id);
                this._netUploadedOrQueued++;
                fileList.push({
                    id: id,
                    file: file
                });
            },
            _handlePasteSuccess: function(blob, extSuppliedName) {
                var extension = blob.type.split("/")[1], name = extSuppliedName;
                if (name == null) {
                    name = this._options.paste.defaultName;
                }
                name += "." + extension;
                this.addFiles({
                    name: name,
                    blob: blob
                });
            },
            _handleDeleteSuccess: function(id) {
                if (this.getUploads({
                    id: id
                }).status !== qq.status.DELETED) {
                    var name = this.getName(id);
                    this._netUploadedOrQueued--;
                    this._netUploaded--;
                    this._handler.expunge(id);
                    this._uploadData.setStatus(id, qq.status.DELETED);
                    this.log("Delete request for '" + name + "' has succeeded.");
                }
            },
            _handleDeleteFailed: function(id, xhrOrXdr) {
                var name = this.getName(id);
                this._uploadData.setStatus(id, qq.status.DELETE_FAILED);
                this.log("Delete request for '" + name + "' has failed.", "error");
                if (!xhrOrXdr || xhrOrXdr.withCredentials === undefined) {
                    this._options.callbacks.onError(id, name, "Delete request failed", xhrOrXdr);
                } else {
                    this._options.callbacks.onError(id, name, "Delete request failed with response code " + xhrOrXdr.status, xhrOrXdr);
                }
            },
            _initExtraButton: function(spec) {
                var button = this._createUploadButton({
                    accept: spec.validation.acceptFiles,
                    allowedExtensions: spec.validation.allowedExtensions,
                    element: spec.element,
                    folders: spec.folders,
                    multiple: spec.multiple,
                    title: spec.fileInputTitle
                });
                this._extraButtonSpecs[button.getButtonId()] = spec;
            },
            _initFormSupportAndParams: function() {
                this._formSupport = qq.FormSupport && new qq.FormSupport(this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this));
                if (this._formSupport && this._formSupport.attachedToForm) {
                    this._paramsStore = this._createStore(this._options.request.params, this._formSupport.getFormInputsAsObject);
                    this._options.autoUpload = this._formSupport.newAutoUpload;
                    if (this._formSupport.newEndpoint) {
                        this._options.request.endpoint = this._formSupport.newEndpoint;
                    }
                } else {
                    this._paramsStore = this._createStore(this._options.request.params);
                }
            },
            _isDeletePossible: function() {
                if (!qq.DeleteFileAjaxRequester || !this._options.deleteFile.enabled) {
                    return false;
                }
                if (this._options.cors.expected) {
                    if (qq.supportedFeatures.deleteFileCorsXhr) {
                        return true;
                    }
                    if (qq.supportedFeatures.deleteFileCorsXdr && this._options.cors.allowXdr) {
                        return true;
                    }
                    return false;
                }
                return true;
            },
            _isAllowedExtension: function(allowed, fileName) {
                var valid = false;
                if (!allowed.length) {
                    return true;
                }
                qq.each(allowed, function(idx, allowedExt) {
                    if (qq.isString(allowedExt)) {
                        var extRegex = new RegExp("\\." + allowedExt + "$", "i");
                        if (fileName.match(extRegex) != null) {
                            valid = true;
                            return false;
                        }
                    }
                });
                return valid;
            },
            _itemError: function(code, maybeNameOrNames, item) {
                var message = this._options.messages[code], allowedExtensions = [], names = [].concat(maybeNameOrNames), name = names[0], buttonId = this._getButtonId(item), validationBase = this._getValidationBase(buttonId), extensionsForMessage, placeholderMatch;
                function r(name, replacement) {
                    message = message.replace(name, replacement);
                }
                qq.each(validationBase.allowedExtensions, function(idx, allowedExtension) {
                    if (qq.isString(allowedExtension)) {
                        allowedExtensions.push(allowedExtension);
                    }
                });
                extensionsForMessage = allowedExtensions.join(", ").toLowerCase();
                r("{file}", this._options.formatFileName(name));
                r("{extensions}", extensionsForMessage);
                r("{sizeLimit}", this._formatSize(validationBase.sizeLimit));
                r("{minSizeLimit}", this._formatSize(validationBase.minSizeLimit));
                placeholderMatch = message.match(/(\{\w+\})/g);
                if (placeholderMatch !== null) {
                    qq.each(placeholderMatch, function(idx, placeholder) {
                        r(placeholder, names[idx]);
                    });
                }
                this._options.callbacks.onError(null, name, message, undefined);
                return message;
            },
            _manualRetry: function(id, callback) {
                if (this._onBeforeManualRetry(id)) {
                    this._netUploadedOrQueued++;
                    this._uploadData.setStatus(id, qq.status.UPLOAD_RETRYING);
                    if (callback) {
                        callback(id);
                    } else {
                        this._handler.retry(id);
                    }
                    return true;
                }
            },
            _maybeAllComplete: function(id, status) {
                var self = this, notFinished = this._getNotFinished();
                if (status === qq.status.UPLOAD_SUCCESSFUL) {
                    this._succeededSinceLastAllComplete.push(id);
                } else if (status === qq.status.UPLOAD_FAILED) {
                    this._failedSinceLastAllComplete.push(id);
                }
                if (notFinished === 0 && (this._succeededSinceLastAllComplete.length || this._failedSinceLastAllComplete.length)) {
                    setTimeout(function() {
                        self._onAllComplete(self._succeededSinceLastAllComplete, self._failedSinceLastAllComplete);
                    }, 0);
                }
            },
            _maybeHandleIos8SafariWorkaround: function() {
                var self = this;
                if (this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari()) {
                    setTimeout(function() {
                        window.alert(self._options.messages.unsupportedBrowserIos8Safari);
                    }, 0);
                    throw new qq.Error(this._options.messages.unsupportedBrowserIos8Safari);
                }
            },
            _maybeParseAndSendUploadError: function(id, name, response, xhr) {
                if (!response.success) {
                    if (xhr && xhr.status !== 200 && !response.error) {
                        this._options.callbacks.onError(id, name, "XHR returned response code " + xhr.status, xhr);
                    } else {
                        var errorReason = response.error ? response.error : this._options.text.defaultResponseError;
                        this._options.callbacks.onError(id, name, errorReason, xhr);
                    }
                }
            },
            _maybeProcessNextItemAfterOnValidateCallback: function(validItem, items, index, params, endpoint) {
                var self = this;
                if (items.length > index) {
                    if (validItem || !this._options.validation.stopOnFirstInvalidFile) {
                        setTimeout(function() {
                            var validationDescriptor = self._getValidationDescriptor(items[index]), buttonId = self._getButtonId(items[index].file), button = self._getButton(buttonId);
                            self._handleCheckedCallback({
                                name: "onValidate",
                                callback: qq.bind(self._options.callbacks.onValidate, self, validationDescriptor, button),
                                onSuccess: qq.bind(self._onValidateCallbackSuccess, self, items, index, params, endpoint),
                                onFailure: qq.bind(self._onValidateCallbackFailure, self, items, index, params, endpoint),
                                identifier: "Item '" + validationDescriptor.name + "', size: " + validationDescriptor.size
                            });
                        }, 0);
                    } else if (!validItem) {
                        for (;index < items.length; index++) {
                            self._fileOrBlobRejected(items[index].id);
                        }
                    }
                }
            },
            _onAllComplete: function(successful, failed) {
                this._totalProgress && this._totalProgress.onAllComplete(successful, failed, this._preventRetries);
                this._options.callbacks.onAllComplete(qq.extend([], successful), qq.extend([], failed));
                this._succeededSinceLastAllComplete = [];
                this._failedSinceLastAllComplete = [];
            },
            _onAutoRetry: function(id, name, responseJSON, xhr, callback) {
                var self = this;
                self._preventRetries[id] = responseJSON[self._options.retry.preventRetryResponseProperty];
                if (self._shouldAutoRetry(id)) {
                    var retryWaitPeriod = self._options.retry.autoAttemptDelay * 1e3;
                    self._maybeParseAndSendUploadError.apply(self, arguments);
                    self._options.callbacks.onAutoRetry(id, name, self._autoRetries[id]);
                    self._onBeforeAutoRetry(id, name);
                    self._uploadData.setStatus(id, qq.status.UPLOAD_RETRYING);
                    self._retryTimeouts[id] = setTimeout(function() {
                        self.log("Starting retry for " + name + "...");
                        if (callback) {
                            callback(id);
                        } else {
                            self._handler.retry(id);
                        }
                    }, retryWaitPeriod);
                    return true;
                }
            },
            _onBeforeAutoRetry: function(id, name) {
                this.log("Waiting " + this._options.retry.autoAttemptDelay + " seconds before retrying " + name + "...");
            },
            _onBeforeManualRetry: function(id) {
                var itemLimit = this._currentItemLimit, fileName;
                if (this._preventRetries[id]) {
                    this.log("Retries are forbidden for id " + id, "warn");
                    return false;
                } else if (this._handler.isValid(id)) {
                    fileName = this.getName(id);
                    if (this._options.callbacks.onManualRetry(id, fileName) === false) {
                        return false;
                    }
                    if (itemLimit > 0 && this._netUploadedOrQueued + 1 > itemLimit) {
                        this._itemError("retryFailTooManyItems");
                        return false;
                    }
                    this.log("Retrying upload for '" + fileName + "' (id: " + id + ")...");
                    return true;
                } else {
                    this.log("'" + id + "' is not a valid file ID", "error");
                    return false;
                }
            },
            _onCancel: function(id, name) {
                this._netUploadedOrQueued--;
                clearTimeout(this._retryTimeouts[id]);
                var storedItemIndex = qq.indexOf(this._storedIds, id);
                if (!this._options.autoUpload && storedItemIndex >= 0) {
                    this._storedIds.splice(storedItemIndex, 1);
                }
                this._uploadData.setStatus(id, qq.status.CANCELED);
            },
            _onComplete: function(id, name, result, xhr) {
                if (!result.success) {
                    this._netUploadedOrQueued--;
                    this._uploadData.setStatus(id, qq.status.UPLOAD_FAILED);
                    if (result[this._options.retry.preventRetryResponseProperty] === true) {
                        this._preventRetries[id] = true;
                    }
                } else {
                    if (result.thumbnailUrl) {
                        this._thumbnailUrls[id] = result.thumbnailUrl;
                    }
                    this._netUploaded++;
                    this._uploadData.setStatus(id, qq.status.UPLOAD_SUCCESSFUL);
                }
                this._maybeParseAndSendUploadError(id, name, result, xhr);
                return result.success ? true : false;
            },
            _onDelete: function(id) {
                this._uploadData.setStatus(id, qq.status.DELETING);
            },
            _onDeleteComplete: function(id, xhrOrXdr, isError) {
                var name = this.getName(id);
                if (isError) {
                    this._handleDeleteFailed(id, xhrOrXdr);
                } else {
                    this._handleDeleteSuccess(id);
                }
            },
            _onInputChange: function(input) {
                var fileIndex;
                if (qq.supportedFeatures.ajaxUploading) {
                    for (fileIndex = 0; fileIndex < input.files.length; fileIndex++) {
                        this._annotateWithButtonId(input.files[fileIndex], input);
                    }
                    this.addFiles(input.files);
                } else if (input.value.length > 0) {
                    this.addFiles(input);
                }
                qq.each(this._buttons, function(idx, button) {
                    button.reset();
                });
            },
            _onProgress: function(id, name, loaded, total) {
                this._totalProgress && this._totalProgress.onIndividualProgress(id, loaded, total);
            },
            _onSubmit: function(id, name) {},
            _onSubmitCallbackSuccess: function(id, name) {
                this._onSubmit.apply(this, arguments);
                this._uploadData.setStatus(id, qq.status.SUBMITTED);
                this._onSubmitted.apply(this, arguments);
                if (this._options.autoUpload) {
                    this._options.callbacks.onSubmitted.apply(this, arguments);
                    this._uploadFile(id);
                } else {
                    this._storeForLater(id);
                    this._options.callbacks.onSubmitted.apply(this, arguments);
                }
            },
            _onSubmitDelete: function(id, onSuccessCallback, additionalMandatedParams) {
                var uuid = this.getUuid(id), adjustedOnSuccessCallback;
                if (onSuccessCallback) {
                    adjustedOnSuccessCallback = qq.bind(onSuccessCallback, this, id, uuid, additionalMandatedParams);
                }
                if (this._isDeletePossible()) {
                    this._handleCheckedCallback({
                        name: "onSubmitDelete",
                        callback: qq.bind(this._options.callbacks.onSubmitDelete, this, id),
                        onSuccess: adjustedOnSuccessCallback || qq.bind(this._deleteHandler.sendDelete, this, id, uuid, additionalMandatedParams),
                        identifier: id
                    });
                    return true;
                } else {
                    this.log("Delete request ignored for ID " + id + ", delete feature is disabled or request not possible " + "due to CORS on a user agent that does not support pre-flighting.", "warn");
                    return false;
                }
            },
            _onSubmitted: function(id) {},
            _onTotalProgress: function(loaded, total) {
                this._options.callbacks.onTotalProgress(loaded, total);
            },
            _onUploadPrep: function(id) {},
            _onUpload: function(id, name) {
                this._uploadData.setStatus(id, qq.status.UPLOADING);
            },
            _onUploadChunk: function(id, chunkData) {},
            _onUploadChunkSuccess: function(id, chunkData) {
                if (!this._preventRetries[id] && this._options.retry.enableAuto) {
                    this._autoRetries[id] = 0;
                }
            },
            _onUploadStatusChange: function(id, oldStatus, newStatus) {
                if (newStatus === qq.status.PAUSED) {
                    clearTimeout(this._retryTimeouts[id]);
                }
            },
            _onValidateBatchCallbackFailure: function(fileWrappers) {
                var self = this;
                qq.each(fileWrappers, function(idx, fileWrapper) {
                    self._fileOrBlobRejected(fileWrapper.id);
                });
            },
            _onValidateBatchCallbackSuccess: function(validationDescriptors, items, params, endpoint, button) {
                var errorMessage, itemLimit = this._currentItemLimit, proposedNetFilesUploadedOrQueued = this._netUploadedOrQueued;
                if (itemLimit === 0 || proposedNetFilesUploadedOrQueued <= itemLimit) {
                    if (items.length > 0) {
                        this._handleCheckedCallback({
                            name: "onValidate",
                            callback: qq.bind(this._options.callbacks.onValidate, this, validationDescriptors[0], button),
                            onSuccess: qq.bind(this._onValidateCallbackSuccess, this, items, 0, params, endpoint),
                            onFailure: qq.bind(this._onValidateCallbackFailure, this, items, 0, params, endpoint),
                            identifier: "Item '" + items[0].file.name + "', size: " + items[0].file.size
                        });
                    } else {
                        this._itemError("noFilesError");
                    }
                } else {
                    this._onValidateBatchCallbackFailure(items);
                    errorMessage = this._options.messages.tooManyItemsError.replace(/\{netItems\}/g, proposedNetFilesUploadedOrQueued).replace(/\{itemLimit\}/g, itemLimit);
                    this._batchError(errorMessage);
                }
            },
            _onValidateCallbackFailure: function(items, index, params, endpoint) {
                var nextIndex = index + 1;
                this._fileOrBlobRejected(items[index].id, items[index].file.name);
                this._maybeProcessNextItemAfterOnValidateCallback(false, items, nextIndex, params, endpoint);
            },
            _onValidateCallbackSuccess: function(items, index, params, endpoint) {
                var self = this, nextIndex = index + 1, validationDescriptor = this._getValidationDescriptor(items[index]);
                this._validateFileOrBlobData(items[index], validationDescriptor).then(function() {
                    self._upload(items[index].id, params, endpoint);
                    self._maybeProcessNextItemAfterOnValidateCallback(true, items, nextIndex, params, endpoint);
                }, function() {
                    self._maybeProcessNextItemAfterOnValidateCallback(false, items, nextIndex, params, endpoint);
                });
            },
            _prepareItemsForUpload: function(items, params, endpoint) {
                if (items.length === 0) {
                    this._itemError("noFilesError");
                    return;
                }
                var validationDescriptors = this._getValidationDescriptors(items), buttonId = this._getButtonId(items[0].file), button = this._getButton(buttonId);
                this._handleCheckedCallback({
                    name: "onValidateBatch",
                    callback: qq.bind(this._options.callbacks.onValidateBatch, this, validationDescriptors, button),
                    onSuccess: qq.bind(this._onValidateBatchCallbackSuccess, this, validationDescriptors, items, params, endpoint, button),
                    onFailure: qq.bind(this._onValidateBatchCallbackFailure, this, items),
                    identifier: "batch validation"
                });
            },
            _preventLeaveInProgress: function() {
                var self = this;
                this._disposeSupport.attach(window, "beforeunload", function(e) {
                    if (self.getInProgress()) {
                        e = e || window.event;
                        e.returnValue = self._options.messages.onLeave;
                        return self._options.messages.onLeave;
                    }
                });
            },
            _refreshSessionData: function() {
                var self = this, options = this._options.session;
                if (qq.Session && this._options.session.endpoint != null) {
                    if (!this._session) {
                        qq.extend(options, {
                            cors: this._options.cors
                        });
                        options.log = qq.bind(this.log, this);
                        options.addFileRecord = qq.bind(this._addCannedFile, this);
                        this._session = new qq.Session(options);
                    }
                    setTimeout(function() {
                        self._session.refresh().then(function(response, xhrOrXdr) {
                            self._sessionRequestComplete();
                            self._options.callbacks.onSessionRequestComplete(response, true, xhrOrXdr);
                        }, function(response, xhrOrXdr) {
                            self._options.callbacks.onSessionRequestComplete(response, false, xhrOrXdr);
                        });
                    }, 0);
                }
            },
            _sessionRequestComplete: function() {},
            _setSize: function(id, newSize) {
                this._uploadData.updateSize(id, newSize);
                this._totalProgress && this._totalProgress.onNewSize(id);
            },
            _shouldAutoRetry: function(id) {
                var uploadData = this._uploadData.retrieve({
                    id: id
                });
                if (!this._preventRetries[id] && this._options.retry.enableAuto && uploadData.status !== qq.status.PAUSED) {
                    if (this._autoRetries[id] === undefined) {
                        this._autoRetries[id] = 0;
                    }
                    if (this._autoRetries[id] < this._options.retry.maxAutoAttempts) {
                        this._autoRetries[id] += 1;
                        return true;
                    }
                }
                return false;
            },
            _storeForLater: function(id) {
                this._storedIds.push(id);
            },
            _trackButton: function(id) {
                var buttonId;
                if (qq.supportedFeatures.ajaxUploading) {
                    buttonId = this._handler.getFile(id).qqButtonId;
                } else {
                    buttonId = this._getButtonId(this._handler.getInput(id));
                }
                if (buttonId) {
                    this._buttonIdsForFileIds[id] = buttonId;
                }
            },
            _updateFormSupportAndParams: function(formElementOrId) {
                this._options.form.element = formElementOrId;
                this._formSupport = qq.FormSupport && new qq.FormSupport(this._options.form, qq.bind(this.uploadStoredFiles, this), qq.bind(this.log, this));
                if (this._formSupport && this._formSupport.attachedToForm) {
                    this._paramsStore.addReadOnly(null, this._formSupport.getFormInputsAsObject);
                    this._options.autoUpload = this._formSupport.newAutoUpload;
                    if (this._formSupport.newEndpoint) {
                        this.setEndpoint(this._formSupport.newEndpoint);
                    }
                }
            },
            _upload: function(id, params, endpoint) {
                var name = this.getName(id);
                if (params) {
                    this.setParams(params, id);
                }
                if (endpoint) {
                    this.setEndpoint(endpoint, id);
                }
                this._handleCheckedCallback({
                    name: "onSubmit",
                    callback: qq.bind(this._options.callbacks.onSubmit, this, id, name),
                    onSuccess: qq.bind(this._onSubmitCallbackSuccess, this, id, name),
                    onFailure: qq.bind(this._fileOrBlobRejected, this, id, name),
                    identifier: id
                });
            },
            _uploadFile: function(id) {
                if (!this._handler.upload(id)) {
                    this._uploadData.setStatus(id, qq.status.QUEUED);
                }
            },
            _uploadStoredFiles: function() {
                var idToUpload, stillSubmitting, self = this;
                while (this._storedIds.length) {
                    idToUpload = this._storedIds.shift();
                    this._uploadFile(idToUpload);
                }
                stillSubmitting = this.getUploads({
                    status: qq.status.SUBMITTING
                }).length;
                if (stillSubmitting) {
                    qq.log("Still waiting for " + stillSubmitting + " files to clear submit queue. Will re-parse stored IDs array shortly.");
                    setTimeout(function() {
                        self._uploadStoredFiles();
                    }, 1e3);
                }
            },
            _validateFileOrBlobData: function(fileWrapper, validationDescriptor) {
                var self = this, file = function() {
                    if (fileWrapper.file instanceof qq.BlobProxy) {
                        return fileWrapper.file.referenceBlob;
                    }
                    return fileWrapper.file;
                }(), name = validationDescriptor.name, size = validationDescriptor.size, buttonId = this._getButtonId(fileWrapper.file), validationBase = this._getValidationBase(buttonId), validityChecker = new qq.Promise();
                validityChecker.then(function() {}, function() {
                    self._fileOrBlobRejected(fileWrapper.id, name);
                });
                if (qq.isFileOrInput(file) && !this._isAllowedExtension(validationBase.allowedExtensions, name)) {
                    this._itemError("typeError", name, file);
                    return validityChecker.failure();
                }
                if (!this._options.validation.allowEmpty && size === 0) {
                    this._itemError("emptyError", name, file);
                    return validityChecker.failure();
                }
                if (size > 0 && validationBase.sizeLimit && size > validationBase.sizeLimit) {
                    this._itemError("sizeError", name, file);
                    return validityChecker.failure();
                }
                if (size > 0 && size < validationBase.minSizeLimit) {
                    this._itemError("minSizeError", name, file);
                    return validityChecker.failure();
                }
                if (qq.ImageValidation && qq.supportedFeatures.imagePreviews && qq.isFile(file)) {
                    new qq.ImageValidation(file, qq.bind(self.log, self)).validate(validationBase.image).then(validityChecker.success, function(errorCode) {
                        self._itemError(errorCode + "ImageError", name, file);
                        validityChecker.failure();
                    });
                } else {
                    validityChecker.success();
                }
                return validityChecker;
            },
            _wrapCallbacks: function() {
                var self, safeCallback, prop;
                self = this;
                safeCallback = function(name, callback, args) {
                    var errorMsg;
                    try {
                        return callback.apply(self, args);
                    } catch (exception) {
                        errorMsg = exception.message || exception.toString();
                        self.log("Caught exception in '" + name + "' callback - " + errorMsg, "error");
                    }
                };
                for (prop in this._options.callbacks) {
                    (function() {
                        var callbackName, callbackFunc;
                        callbackName = prop;
                        callbackFunc = self._options.callbacks[callbackName];
                        self._options.callbacks[callbackName] = function() {
                            return safeCallback(callbackName, callbackFunc, arguments);
                        };
                    })();
                }
            }
        };
    })();
    (function() {
        "use strict";
        qq.FineUploaderBasic = function(o) {
            var self = this;
            this._options = {
                debug: false,
                button: null,
                multiple: true,
                maxConnections: 3,
                disableCancelForFormUploads: false,
                autoUpload: true,
                warnBeforeUnload: true,
                request: {
                    customHeaders: {},
                    endpoint: "/server/upload",
                    filenameParam: "qqfilename",
                    forceMultipart: true,
                    inputName: "qqfile",
                    method: "POST",
                    omitDefaultParams: false,
                    params: {},
                    paramsInBody: true,
                    requireSuccessJson: true,
                    totalFileSizeName: "qqtotalfilesize",
                    uuidName: "qquuid"
                },
                validation: {
                    allowedExtensions: [],
                    sizeLimit: 0,
                    minSizeLimit: 0,
                    itemLimit: 0,
                    stopOnFirstInvalidFile: true,
                    acceptFiles: null,
                    image: {
                        maxHeight: 0,
                        maxWidth: 0,
                        minHeight: 0,
                        minWidth: 0
                    },
                    allowEmpty: false
                },
                callbacks: {
                    onSubmit: function(id, name) {},
                    onSubmitted: function(id, name) {},
                    onComplete: function(id, name, responseJSON, maybeXhr) {},
                    onAllComplete: function(successful, failed) {},
                    onCancel: function(id, name) {},
                    onUpload: function(id, name) {},
                    onUploadChunk: function(id, name, chunkData) {},
                    onUploadChunkSuccess: function(id, chunkData, responseJSON, xhr) {},
                    onResume: function(id, fileName, chunkData, customResumeData) {},
                    onProgress: function(id, name, loaded, total) {},
                    onTotalProgress: function(loaded, total) {},
                    onError: function(id, name, reason, maybeXhrOrXdr) {},
                    onAutoRetry: function(id, name, attemptNumber) {},
                    onManualRetry: function(id, name) {},
                    onValidateBatch: function(fileOrBlobData) {},
                    onValidate: function(fileOrBlobData) {},
                    onSubmitDelete: function(id) {},
                    onDelete: function(id) {},
                    onDeleteComplete: function(id, xhrOrXdr, isError) {},
                    onPasteReceived: function(blob) {},
                    onStatusChange: function(id, oldStatus, newStatus) {},
                    onSessionRequestComplete: function(response, success, xhrOrXdr) {}
                },
                messages: {
                    typeError: "{file} has an invalid extension. Valid extension(s): {extensions}.",
                    sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
                    minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
                    emptyError: "{file} is empty, please select files again without it.",
                    noFilesError: "No files to upload.",
                    tooManyItemsError: "Too many items ({netItems}) would be uploaded.  Item limit is {itemLimit}.",
                    maxHeightImageError: "Image is too tall.",
                    maxWidthImageError: "Image is too wide.",
                    minHeightImageError: "Image is not tall enough.",
                    minWidthImageError: "Image is not wide enough.",
                    retryFailTooManyItems: "Retry failed - you have reached your file limit.",
                    onLeave: "The files are being uploaded, if you leave now the upload will be canceled.",
                    unsupportedBrowserIos8Safari: "Unrecoverable error - this browser does not permit file uploading of any kind due to serious bugs in iOS8 Safari.  Please use iOS8 Chrome until Apple fixes these issues."
                },
                retry: {
                    enableAuto: false,
                    maxAutoAttempts: 3,
                    autoAttemptDelay: 5,
                    preventRetryResponseProperty: "preventRetry"
                },
                classes: {
                    buttonHover: "qq-upload-button-hover",
                    buttonFocus: "qq-upload-button-focus"
                },
                chunking: {
                    enabled: false,
                    concurrent: {
                        enabled: false
                    },
                    mandatory: false,
                    paramNames: {
                        partIndex: "qqpartindex",
                        partByteOffset: "qqpartbyteoffset",
                        chunkSize: "qqchunksize",
                        totalFileSize: "qqtotalfilesize",
                        totalParts: "qqtotalparts"
                    },
                    partSize: function(id) {
                        return 2e6;
                    },
                    success: {
                        endpoint: null,
                        headers: function(id) {
                            return null;
                        },
                        jsonPayload: false,
                        method: "POST",
                        params: function(id) {
                            return null;
                        },
                        resetOnStatus: []
                    }
                },
                resume: {
                    enabled: false,
                    recordsExpireIn: 7,
                    paramNames: {
                        resuming: "qqresume"
                    },
                    customKeys: function(fileId) {
                        return [];
                    }
                },
                formatFileName: function(fileOrBlobName) {
                    return fileOrBlobName;
                },
                text: {
                    defaultResponseError: "Upload failure reason unknown",
                    fileInputTitle: "file input",
                    sizeSymbols: [ "kB", "MB", "GB", "TB", "PB", "EB" ]
                },
                deleteFile: {
                    enabled: false,
                    method: "DELETE",
                    endpoint: "/server/upload",
                    customHeaders: {},
                    params: {}
                },
                cors: {
                    expected: false,
                    sendCredentials: false,
                    allowXdr: false
                },
                blobs: {
                    defaultName: "misc_data"
                },
                paste: {
                    targetElement: null,
                    defaultName: "pasted_image"
                },
                camera: {
                    ios: false,
                    button: null
                },
                extraButtons: [],
                session: {
                    endpoint: null,
                    params: {},
                    customHeaders: {},
                    refreshOnReset: true
                },
                form: {
                    element: "qq-form",
                    autoUpload: false,
                    interceptSubmit: true
                },
                scaling: {
                    customResizer: null,
                    sendOriginal: true,
                    orient: true,
                    defaultType: null,
                    defaultQuality: 80,
                    failureText: "Failed to scale",
                    includeExif: false,
                    sizes: []
                },
                workarounds: {
                    iosEmptyVideos: true,
                    ios8SafariUploads: true,
                    ios8BrowserCrash: false
                }
            };
            qq.extend(this._options, o, true);
            this._buttons = [];
            this._extraButtonSpecs = {};
            this._buttonIdsForFileIds = [];
            this._wrapCallbacks();
            this._disposeSupport = new qq.DisposeSupport();
            this._storedIds = [];
            this._autoRetries = [];
            this._retryTimeouts = [];
            this._preventRetries = [];
            this._thumbnailUrls = [];
            this._netUploadedOrQueued = 0;
            this._netUploaded = 0;
            this._uploadData = this._createUploadDataTracker();
            this._initFormSupportAndParams();
            this._customHeadersStore = this._createStore(this._options.request.customHeaders);
            this._deleteFileCustomHeadersStore = this._createStore(this._options.deleteFile.customHeaders);
            this._deleteFileParamsStore = this._createStore(this._options.deleteFile.params);
            this._endpointStore = this._createStore(this._options.request.endpoint);
            this._deleteFileEndpointStore = this._createStore(this._options.deleteFile.endpoint);
            this._handler = this._createUploadHandler();
            this._deleteHandler = qq.DeleteFileAjaxRequester && this._createDeleteHandler();
            if (this._options.button) {
                this._defaultButtonId = this._createUploadButton({
                    element: this._options.button,
                    title: this._options.text.fileInputTitle
                }).getButtonId();
            }
            this._generateExtraButtonSpecs();
            this._handleCameraAccess();
            if (this._options.paste.targetElement) {
                if (qq.PasteSupport) {
                    this._pasteHandler = this._createPasteHandler();
                } else {
                    this.log("Paste support module not found", "error");
                }
            }
            this._options.warnBeforeUnload && this._preventLeaveInProgress();
            this._imageGenerator = qq.ImageGenerator && new qq.ImageGenerator(qq.bind(this.log, this));
            this._refreshSessionData();
            this._succeededSinceLastAllComplete = [];
            this._failedSinceLastAllComplete = [];
            this._scaler = qq.Scaler && new qq.Scaler(this._options.scaling, qq.bind(this.log, this)) || {};
            if (this._scaler.enabled) {
                this._customNewFileHandler = qq.bind(this._scaler.handleNewFile, this._scaler);
            }
            if (qq.TotalProgress && qq.supportedFeatures.progressBar) {
                this._totalProgress = new qq.TotalProgress(qq.bind(this._onTotalProgress, this), function(id) {
                    var entry = self._uploadData.retrieve({
                        id: id
                    });
                    return entry && entry.size || 0;
                });
            }
            this._currentItemLimit = this._options.validation.itemLimit;
            this._customResumeDataStore = this._createStore();
        };
        qq.FineUploaderBasic.prototype = qq.basePublicApi;
        qq.extend(qq.FineUploaderBasic.prototype, qq.basePrivateApi);
    })();
    qq.AjaxRequester = function(o) {
        "use strict";
        var log, shouldParamsBeInQueryString, queue = [], requestData = {}, options = {
            acceptHeader: null,
            validMethods: [ "PATCH", "POST", "PUT" ],
            method: "POST",
            contentType: "application/x-www-form-urlencoded",
            maxConnections: 3,
            customHeaders: {},
            endpointStore: {},
            paramsStore: {},
            mandatedParams: {},
            allowXRequestedWithAndCacheControl: true,
            successfulResponseCodes: {
                DELETE: [ 200, 202, 204 ],
                PATCH: [ 200, 201, 202, 203, 204 ],
                POST: [ 200, 201, 202, 203, 204 ],
                PUT: [ 200, 201, 202, 203, 204 ],
                GET: [ 200 ]
            },
            cors: {
                expected: false,
                sendCredentials: false
            },
            log: function(str, level) {},
            onSend: function(id) {},
            onComplete: function(id, xhrOrXdr, isError) {},
            onProgress: null
        };
        qq.extend(options, o);
        log = options.log;
        if (qq.indexOf(options.validMethods, options.method) < 0) {
            throw new Error("'" + options.method + "' is not a supported method for this type of request!");
        }
        function isSimpleMethod() {
            return qq.indexOf([ "GET", "POST", "HEAD" ], options.method) >= 0;
        }
        function containsNonSimpleHeaders(headers) {
            var containsNonSimple = false;
            qq.each(containsNonSimple, function(idx, header) {
                if (qq.indexOf([ "Accept", "Accept-Language", "Content-Language", "Content-Type" ], header) < 0) {
                    containsNonSimple = true;
                    return false;
                }
            });
            return containsNonSimple;
        }
        function isXdr(xhr) {
            return options.cors.expected && xhr.withCredentials === undefined;
        }
        function getCorsAjaxTransport() {
            var xhrOrXdr;
            if (window.XMLHttpRequest || window.ActiveXObject) {
                xhrOrXdr = qq.createXhrInstance();
                if (xhrOrXdr.withCredentials === undefined) {
                    xhrOrXdr = new XDomainRequest();
                    xhrOrXdr.onload = function() {};
                    xhrOrXdr.onerror = function() {};
                    xhrOrXdr.ontimeout = function() {};
                    xhrOrXdr.onprogress = function() {};
                }
            }
            return xhrOrXdr;
        }
        function getXhrOrXdr(id, suppliedXhr) {
            var xhrOrXdr = requestData[id] && requestData[id].xhr;
            if (!xhrOrXdr) {
                if (suppliedXhr) {
                    xhrOrXdr = suppliedXhr;
                } else {
                    if (options.cors.expected) {
                        xhrOrXdr = getCorsAjaxTransport();
                    } else {
                        xhrOrXdr = qq.createXhrInstance();
                    }
                }
                requestData[id].xhr = xhrOrXdr;
            }
            return xhrOrXdr;
        }
        function dequeue(id) {
            var i = qq.indexOf(queue, id), max = options.maxConnections, nextId;
            delete requestData[id];
            queue.splice(i, 1);
            if (queue.length >= max && i < max) {
                nextId = queue[max - 1];
                sendRequest(nextId);
            }
        }
        function onComplete(id, xdrError) {
            var xhr = getXhrOrXdr(id), method = options.method, isError = xdrError === true;
            dequeue(id);
            if (isError) {
                log(method + " request for " + id + " has failed", "error");
            } else if (!isXdr(xhr) && !isResponseSuccessful(xhr.status)) {
                isError = true;
                log(method + " request for " + id + " has failed - response code " + xhr.status, "error");
            }
            options.onComplete(id, xhr, isError);
        }
        function getParams(id) {
            var onDemandParams = requestData[id].additionalParams, mandatedParams = options.mandatedParams, params;
            if (options.paramsStore.get) {
                params = options.paramsStore.get(id);
            }
            if (onDemandParams) {
                qq.each(onDemandParams, function(name, val) {
                    params = params || {};
                    params[name] = val;
                });
            }
            if (mandatedParams) {
                qq.each(mandatedParams, function(name, val) {
                    params = params || {};
                    params[name] = val;
                });
            }
            return params;
        }
        function sendRequest(id, optXhr) {
            var xhr = getXhrOrXdr(id, optXhr), method = options.method, params = getParams(id), payload = requestData[id].payload, url;
            options.onSend(id);
            url = createUrl(id, params, requestData[id].additionalQueryParams);
            if (isXdr(xhr)) {
                xhr.onload = getXdrLoadHandler(id);
                xhr.onerror = getXdrErrorHandler(id);
            } else {
                xhr.onreadystatechange = getXhrReadyStateChangeHandler(id);
            }
            registerForUploadProgress(id);
            xhr.open(method, url, true);
            if (options.cors.expected && options.cors.sendCredentials && !isXdr(xhr)) {
                xhr.withCredentials = true;
            }
            setHeaders(id);
            log("Sending " + method + " request for " + id);
            if (payload) {
                xhr.send(payload);
            } else if (shouldParamsBeInQueryString || !params) {
                xhr.send();
            } else if (params && options.contentType && options.contentType.toLowerCase().indexOf("application/x-www-form-urlencoded") >= 0) {
                xhr.send(qq.obj2url(params, ""));
            } else if (params && options.contentType && options.contentType.toLowerCase().indexOf("application/json") >= 0) {
                xhr.send(JSON.stringify(params));
            } else {
                xhr.send(params);
            }
            return xhr;
        }
        function createUrl(id, params, additionalQueryParams) {
            var endpoint = options.endpointStore.get(id), addToPath = requestData[id].addToPath;
            if (addToPath != undefined) {
                endpoint += "/" + addToPath;
            }
            if (shouldParamsBeInQueryString && params) {
                endpoint = qq.obj2url(params, endpoint);
            }
            if (additionalQueryParams) {
                endpoint = qq.obj2url(additionalQueryParams, endpoint);
            }
            return endpoint;
        }
        function getXhrReadyStateChangeHandler(id) {
            return function() {
                if (getXhrOrXdr(id).readyState === 4) {
                    onComplete(id);
                }
            };
        }
        function registerForUploadProgress(id) {
            var onProgress = options.onProgress;
            if (onProgress) {
                getXhrOrXdr(id).upload.onprogress = function(e) {
                    if (e.lengthComputable) {
                        onProgress(id, e.loaded, e.total);
                    }
                };
            }
        }
        function getXdrLoadHandler(id) {
            return function() {
                onComplete(id);
            };
        }
        function getXdrErrorHandler(id) {
            return function() {
                onComplete(id, true);
            };
        }
        function setHeaders(id) {
            var xhr = getXhrOrXdr(id), customHeaders = options.customHeaders, onDemandHeaders = requestData[id].additionalHeaders || {}, method = options.method, allHeaders = {};
            if (!isXdr(xhr)) {
                options.acceptHeader && xhr.setRequestHeader("Accept", options.acceptHeader);
                if (options.allowXRequestedWithAndCacheControl) {
                    if (!options.cors.expected || (!isSimpleMethod() || containsNonSimpleHeaders(customHeaders))) {
                        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                        xhr.setRequestHeader("Cache-Control", "no-cache");
                    }
                }
                if (options.contentType && (method === "POST" || method === "PUT")) {
                    xhr.setRequestHeader("Content-Type", options.contentType);
                }
                qq.extend(allHeaders, qq.isFunction(customHeaders) ? customHeaders(id) : customHeaders);
                qq.extend(allHeaders, onDemandHeaders);
                qq.each(allHeaders, function(name, val) {
                    xhr.setRequestHeader(name, val);
                });
            }
        }
        function isResponseSuccessful(responseCode) {
            return qq.indexOf(options.successfulResponseCodes[options.method], responseCode) >= 0;
        }
        function prepareToSend(id, optXhr, addToPath, additionalParams, additionalQueryParams, additionalHeaders, payload) {
            requestData[id] = {
                addToPath: addToPath,
                additionalParams: additionalParams,
                additionalQueryParams: additionalQueryParams,
                additionalHeaders: additionalHeaders,
                payload: payload
            };
            var len = queue.push(id);
            if (len <= options.maxConnections) {
                return sendRequest(id, optXhr);
            }
        }
        shouldParamsBeInQueryString = options.method === "GET" || options.method === "DELETE";
        qq.extend(this, {
            initTransport: function(id) {
                var path, params, headers, payload, cacheBuster, additionalQueryParams;
                return {
                    withPath: function(appendToPath) {
                        path = appendToPath;
                        return this;
                    },
                    withParams: function(additionalParams) {
                        params = additionalParams;
                        return this;
                    },
                    withQueryParams: function(_additionalQueryParams_) {
                        additionalQueryParams = _additionalQueryParams_;
                        return this;
                    },
                    withHeaders: function(additionalHeaders) {
                        headers = additionalHeaders;
                        return this;
                    },
                    withPayload: function(thePayload) {
                        payload = thePayload;
                        return this;
                    },
                    withCacheBuster: function() {
                        cacheBuster = true;
                        return this;
                    },
                    send: function(optXhr) {
                        if (cacheBuster && qq.indexOf([ "GET", "DELETE" ], options.method) >= 0) {
                            params.qqtimestamp = new Date().getTime();
                        }
                        return prepareToSend(id, optXhr, path, params, additionalQueryParams, headers, payload);
                    }
                };
            },
            canceled: function(id) {
                dequeue(id);
            }
        });
    };
    qq.UploadHandler = function(spec) {
        "use strict";
        var proxy = spec.proxy, fileState = {}, onCancel = proxy.onCancel, getName = proxy.getName;
        qq.extend(this, {
            add: function(id, fileItem) {
                fileState[id] = fileItem;
                fileState[id].temp = {};
            },
            cancel: function(id) {
                var self = this, cancelFinalizationEffort = new qq.Promise(), onCancelRetVal = onCancel(id, getName(id), cancelFinalizationEffort);
                onCancelRetVal.then(function() {
                    if (self.isValid(id)) {
                        fileState[id].canceled = true;
                        self.expunge(id);
                    }
                    cancelFinalizationEffort.success();
                });
            },
            expunge: function(id) {
                delete fileState[id];
            },
            getThirdPartyFileId: function(id) {
                return fileState[id].key;
            },
            isValid: function(id) {
                return fileState[id] !== undefined;
            },
            reset: function() {
                fileState = {};
            },
            _getFileState: function(id) {
                return fileState[id];
            },
            _setThirdPartyFileId: function(id, thirdPartyFileId) {
                fileState[id].key = thirdPartyFileId;
            },
            _wasCanceled: function(id) {
                return !!fileState[id].canceled;
            }
        });
    };
    qq.UploadHandlerController = function(o, namespace) {
        "use strict";
        var controller = this, chunkingPossible = false, concurrentChunkingPossible = false, chunking, preventRetryResponse, log, handler, options = {
            paramsStore: {},
            maxConnections: 3,
            chunking: {
                enabled: false,
                multiple: {
                    enabled: false
                }
            },
            log: function(str, level) {},
            onProgress: function(id, fileName, loaded, total) {},
            onComplete: function(id, fileName, response, xhr) {},
            onCancel: function(id, fileName) {},
            onUploadPrep: function(id) {},
            onUpload: function(id, fileName) {},
            onUploadChunk: function(id, fileName, chunkData) {},
            onUploadChunkSuccess: function(id, chunkData, response, xhr) {},
            onAutoRetry: function(id, fileName, response, xhr) {},
            onResume: function(id, fileName, chunkData, customResumeData) {},
            onUuidChanged: function(id, newUuid) {},
            getName: function(id) {},
            setSize: function(id, newSize) {},
            isQueued: function(id) {},
            getIdsInProxyGroup: function(id) {},
            getIdsInBatch: function(id) {},
            isInProgress: function(id) {}
        }, chunked = {
            done: function(id, chunkIdx, response, xhr) {
                var chunkData = handler._getChunkData(id, chunkIdx);
                handler._getFileState(id).attemptingResume = false;
                delete handler._getFileState(id).temp.chunkProgress[chunkIdx];
                handler._getFileState(id).loaded += chunkData.size;
                options.onUploadChunkSuccess(id, handler._getChunkDataForCallback(chunkData), response, xhr);
            },
            finalize: function(id) {
                var size = options.getSize(id), name = options.getName(id);
                log("All chunks have been uploaded for " + id + " - finalizing....");
                handler.finalizeChunks(id).then(function(response, xhr) {
                    log("Finalize successful for " + id);
                    var normaizedResponse = upload.normalizeResponse(response, true);
                    options.onProgress(id, name, size, size);
                    handler._maybeDeletePersistedChunkData(id);
                    upload.cleanup(id, normaizedResponse, xhr);
                }, function(response, xhr) {
                    var normalizedResponse = upload.normalizeResponse(response, false);
                    log("Problem finalizing chunks for file ID " + id + " - " + normalizedResponse.error, "error");
                    if (normalizedResponse.reset || xhr && options.chunking.success.resetOnStatus.indexOf(xhr.status) >= 0) {
                        chunked.reset(id);
                    }
                    if (!options.onAutoRetry(id, name, normalizedResponse, xhr)) {
                        upload.cleanup(id, normalizedResponse, xhr);
                    }
                });
            },
            handleFailure: function(chunkIdx, id, response, xhr) {
                var name = options.getName(id);
                log("Chunked upload request failed for " + id + ", chunk " + chunkIdx);
                handler.clearCachedChunk(id, chunkIdx);
                var responseToReport = upload.normalizeResponse(response, false), inProgressIdx;
                if (responseToReport.reset) {
                    chunked.reset(id);
                } else {
                    var inProgressChunksArray = handler._getFileState(id).chunking.inProgress;
                    inProgressIdx = inProgressChunksArray ? qq.indexOf(inProgressChunksArray, chunkIdx) : -1;
                    if (inProgressIdx >= 0) {
                        handler._getFileState(id).chunking.inProgress.splice(inProgressIdx, 1);
                        handler._getFileState(id).chunking.remaining.unshift(chunkIdx);
                    }
                }
                if (!handler._getFileState(id).temp.ignoreFailure) {
                    if (concurrentChunkingPossible) {
                        handler._getFileState(id).temp.ignoreFailure = true;
                        log(qq.format("Going to attempt to abort these chunks: {}. These are currently in-progress: {}.", JSON.stringify(Object.keys(handler._getXhrs(id))), JSON.stringify(handler._getFileState(id).chunking.inProgress)));
                        qq.each(handler._getXhrs(id), function(ckid, ckXhr) {
                            log(qq.format("Attempting to abort file {}.{}. XHR readyState {}. ", id, ckid, ckXhr.readyState));
                            ckXhr.abort();
                            ckXhr._cancelled = true;
                        });
                        handler.moveInProgressToRemaining(id);
                        connectionManager.free(id, true);
                    }
                    if (!options.onAutoRetry(id, name, responseToReport, xhr)) {
                        upload.cleanup(id, responseToReport, xhr);
                    }
                }
            },
            hasMoreParts: function(id) {
                return !!handler._getFileState(id).chunking.remaining.length;
            },
            nextPart: function(id) {
                var nextIdx = handler._getFileState(id).chunking.remaining.shift();
                if (nextIdx >= handler._getTotalChunks(id)) {
                    nextIdx = null;
                }
                return nextIdx;
            },
            reset: function(id) {
                log("Server or callback has ordered chunking effort to be restarted on next attempt for item ID " + id, "error");
                handler._maybeDeletePersistedChunkData(id);
                handler.reevaluateChunking(id);
                handler._getFileState(id).loaded = 0;
                handler._getFileState(id).attemptingResume = false;
            },
            sendNext: function(id) {
                var size = options.getSize(id), name = options.getName(id), chunkIdx = chunked.nextPart(id), chunkData = handler._getChunkData(id, chunkIdx), fileState = handler._getFileState(id), resuming = fileState.attemptingResume, inProgressChunks = fileState.chunking.inProgress || [];
                if (fileState.loaded == null) {
                    fileState.loaded = 0;
                }
                if (resuming && options.onResume(id, name, chunkData, fileState.customResumeData) === false) {
                    chunked.reset(id);
                    chunkIdx = chunked.nextPart(id);
                    chunkData = handler._getChunkData(id, chunkIdx);
                    resuming = false;
                }
                if (chunkIdx == null && inProgressChunks.length === 0) {
                    chunked.finalize(id);
                } else {
                    inProgressChunks.push(chunkIdx);
                    handler._getFileState(id).chunking.inProgress = inProgressChunks;
                    if (concurrentChunkingPossible) {
                        connectionManager.open(id, chunkIdx);
                    }
                    if (concurrentChunkingPossible && connectionManager.available() && handler._getFileState(id).chunking.remaining.length) {
                        chunked.sendNext(id);
                    }
                    if (chunkData.blob.size === 0) {
                        log(qq.format("Chunk {} for file {} will not be uploaded, zero sized chunk.", chunkIdx, id), "error");
                        chunked.handleFailure(chunkIdx, id, "File is no longer available", null);
                    }
                    var onUploadChunkPromise = options.onUploadChunk(id, name, handler._getChunkDataForCallback(chunkData));
                    onUploadChunkPromise.then(function(requestOverrides) {
                        if (!options.isInProgress(id)) {
                            log(qq.format("Not sending chunked upload request for item {}.{} - no longer in progress.", id, chunkIdx));
                        } else {
                            log(qq.format("Sending chunked upload request for item {}.{}, bytes {}-{} of {}.", id, chunkIdx, chunkData.start + 1, chunkData.end, size));
                            var uploadChunkData = {
                                chunkIdx: chunkIdx,
                                id: id,
                                overrides: requestOverrides,
                                resuming: resuming
                            };
                            handler.uploadChunk(uploadChunkData).then(function success(response, xhr) {
                                log("Chunked upload request succeeded for " + id + ", chunk " + chunkIdx);
                                handler.clearCachedChunk(id, chunkIdx);
                                var inProgressChunks = handler._getFileState(id).chunking.inProgress || [], responseToReport = upload.normalizeResponse(response, true), inProgressChunkIdx = qq.indexOf(inProgressChunks, chunkIdx);
                                log(qq.format("Chunk {} for file {} uploaded successfully.", chunkIdx, id));
                                chunked.done(id, chunkIdx, responseToReport, xhr);
                                if (inProgressChunkIdx >= 0) {
                                    inProgressChunks.splice(inProgressChunkIdx, 1);
                                }
                                handler._maybePersistChunkedState(id);
                                if (!chunked.hasMoreParts(id) && inProgressChunks.length === 0) {
                                    chunked.finalize(id);
                                } else if (chunked.hasMoreParts(id)) {
                                    chunked.sendNext(id);
                                } else {
                                    log(qq.format("File ID {} has no more chunks to send and these chunk indexes are still marked as in-progress: {}", id, JSON.stringify(inProgressChunks)));
                                }
                            }, function failure(response, xhr) {
                                chunked.handleFailure(chunkIdx, id, response, xhr);
                            }).done(function() {
                                handler.clearXhr(id, chunkIdx);
                            });
                        }
                    }, function(error) {
                        chunked.handleFailure(chunkIdx, id, error, null);
                    });
                }
            }
        }, connectionManager = {
            _open: [],
            _openChunks: {},
            _waiting: [],
            available: function() {
                var max = options.maxConnections, openChunkEntriesCount = 0, openChunksCount = 0;
                qq.each(connectionManager._openChunks, function(fileId, openChunkIndexes) {
                    openChunkEntriesCount++;
                    openChunksCount += openChunkIndexes.length;
                });
                return max - (connectionManager._open.length - openChunkEntriesCount + openChunksCount);
            },
            free: function(id, dontAllowNext) {
                var allowNext = !dontAllowNext, waitingIndex = qq.indexOf(connectionManager._waiting, id), connectionsIndex = qq.indexOf(connectionManager._open, id), nextId;
                delete connectionManager._openChunks[id];
                if (upload.getProxyOrBlob(id) instanceof qq.BlobProxy) {
                    log("Generated blob upload has ended for " + id + ", disposing generated blob.");
                    delete handler._getFileState(id).file;
                }
                if (waitingIndex >= 0) {
                    connectionManager._waiting.splice(waitingIndex, 1);
                } else if (allowNext && connectionsIndex >= 0) {
                    connectionManager._open.splice(connectionsIndex, 1);
                    nextId = connectionManager._waiting.shift();
                    if (nextId >= 0) {
                        connectionManager._open.push(nextId);
                        upload.start(nextId);
                    }
                }
            },
            getWaitingOrConnected: function() {
                var waitingOrConnected = [];
                qq.each(connectionManager._openChunks, function(fileId, chunks) {
                    if (chunks && chunks.length) {
                        waitingOrConnected.push(parseInt(fileId));
                    }
                });
                qq.each(connectionManager._open, function(idx, fileId) {
                    if (!connectionManager._openChunks[fileId]) {
                        waitingOrConnected.push(parseInt(fileId));
                    }
                });
                waitingOrConnected = waitingOrConnected.concat(connectionManager._waiting);
                return waitingOrConnected;
            },
            isUsingConnection: function(id) {
                return qq.indexOf(connectionManager._open, id) >= 0;
            },
            open: function(id, chunkIdx) {
                if (chunkIdx == null) {
                    connectionManager._waiting.push(id);
                }
                if (connectionManager.available()) {
                    if (chunkIdx == null) {
                        connectionManager._waiting.pop();
                        connectionManager._open.push(id);
                    } else {
                        (function() {
                            var openChunksEntry = connectionManager._openChunks[id] || [];
                            openChunksEntry.push(chunkIdx);
                            connectionManager._openChunks[id] = openChunksEntry;
                        })();
                    }
                    return true;
                }
                return false;
            },
            reset: function() {
                connectionManager._waiting = [];
                connectionManager._open = [];
            }
        }, simple = {
            send: function(id, name) {
                var fileState = handler._getFileState(id);
                if (!fileState) {
                    log("Ignoring send request as this upload may have been cancelled, File ID " + id, "warn");
                    return;
                }
                fileState.loaded = 0;
                log("Sending simple upload request for " + id);
                handler.uploadFile(id).then(function(response, optXhr) {
                    log("Simple upload request succeeded for " + id);
                    var responseToReport = upload.normalizeResponse(response, true), size = options.getSize(id);
                    options.onProgress(id, name, size, size);
                    upload.maybeNewUuid(id, responseToReport);
                    upload.cleanup(id, responseToReport, optXhr);
                }, function(response, optXhr) {
                    log("Simple upload request failed for " + id);
                    var responseToReport = upload.normalizeResponse(response, false);
                    if (!options.onAutoRetry(id, name, responseToReport, optXhr)) {
                        upload.cleanup(id, responseToReport, optXhr);
                    }
                });
            }
        }, upload = {
            cancel: function(id) {
                log("Cancelling " + id);
                options.paramsStore.remove(id);
                connectionManager.free(id);
            },
            cleanup: function(id, response, optXhr) {
                var name = options.getName(id);
                options.onComplete(id, name, response, optXhr);
                if (handler._getFileState(id)) {
                    handler._clearXhrs && handler._clearXhrs(id);
                }
                connectionManager.free(id);
            },
            getProxyOrBlob: function(id) {
                return handler.getProxy && handler.getProxy(id) || handler.getFile && handler.getFile(id);
            },
            initHandler: function() {
                var handlerType = namespace ? qq[namespace] : qq.traditional, handlerModuleSubtype = qq.supportedFeatures.ajaxUploading ? "Xhr" : "Form";
                handler = new handlerType[handlerModuleSubtype + "UploadHandler"](options, {
                    getCustomResumeData: options.getCustomResumeData,
                    getDataByUuid: options.getDataByUuid,
                    getName: options.getName,
                    getSize: options.getSize,
                    getUuid: options.getUuid,
                    log: log,
                    onCancel: options.onCancel,
                    onProgress: options.onProgress,
                    onUuidChanged: options.onUuidChanged,
                    onFinalizing: function(id) {
                        options.setStatus(id, qq.status.UPLOAD_FINALIZING);
                    }
                });
                if (handler._removeExpiredChunkingRecords) {
                    handler._removeExpiredChunkingRecords();
                }
            },
            isDeferredEligibleForUpload: function(id) {
                return options.isQueued(id);
            },
            maybeDefer: function(id, blob) {
                if (blob && !handler.getFile(id) && blob instanceof qq.BlobProxy) {
                    options.onUploadPrep(id);
                    log("Attempting to generate a blob on-demand for " + id);
                    blob.create().then(function(generatedBlob) {
                        log("Generated an on-demand blob for " + id);
                        handler.updateBlob(id, generatedBlob);
                        options.setSize(id, generatedBlob.size);
                        handler.reevaluateChunking(id);
                        upload.maybeSendDeferredFiles(id);
                    }, function(errorMessage) {
                        var errorResponse = {};
                        if (errorMessage) {
                            errorResponse.error = errorMessage;
                        }
                        log(qq.format("Failed to generate blob for ID {}.  Error message: {}.", id, errorMessage), "error");
                        options.onComplete(id, options.getName(id), qq.extend(errorResponse, preventRetryResponse), null);
                        upload.maybeSendDeferredFiles(id);
                        connectionManager.free(id);
                    });
                } else {
                    return upload.maybeSendDeferredFiles(id);
                }
                return false;
            },
            maybeSendDeferredFiles: function(id) {
                var idsInGroup = options.getIdsInProxyGroup(id), uploadedThisId = false;
                if (idsInGroup && idsInGroup.length) {
                    log("Maybe ready to upload proxy group file " + id);
                    qq.each(idsInGroup, function(idx, idInGroup) {
                        if (upload.isDeferredEligibleForUpload(idInGroup) && !!handler.getFile(idInGroup)) {
                            uploadedThisId = idInGroup === id;
                            upload.now(idInGroup);
                        } else if (upload.isDeferredEligibleForUpload(idInGroup)) {
                            return false;
                        }
                    });
                } else {
                    uploadedThisId = true;
                    upload.now(id);
                }
                return uploadedThisId;
            },
            maybeNewUuid: function(id, response) {
                if (response.newUuid !== undefined) {
                    options.onUuidChanged(id, response.newUuid);
                }
            },
            normalizeResponse: function(originalResponse, successful) {
                var response = originalResponse;
                if (!qq.isObject(originalResponse)) {
                    response = {};
                    if (qq.isString(originalResponse) && !successful) {
                        response.error = originalResponse;
                    }
                }
                response.success = successful;
                return response;
            },
            now: function(id) {
                var name = options.getName(id);
                if (!controller.isValid(id)) {
                    throw new qq.Error(id + " is not a valid file ID to upload!");
                }
                options.onUpload(id, name).then(function(response) {
                    if (response && response.pause) {
                        options.setStatus(id, qq.status.PAUSED);
                        handler.pause(id);
                        connectionManager.free(id);
                    } else {
                        if (chunkingPossible && handler._shouldChunkThisFile(id)) {
                            chunked.sendNext(id);
                        } else {
                            simple.send(id, name);
                        }
                    }
                }, function(error) {
                    error = error || {};
                    log(id + " upload start aborted due to rejected onUpload Promise - details: " + error, "error");
                    if (!options.onAutoRetry(id, name, error.responseJSON || {})) {
                        var response = upload.normalizeResponse(error.responseJSON, false);
                        upload.cleanup(id, response);
                    }
                });
            },
            start: function(id) {
                var blobToUpload = upload.getProxyOrBlob(id);
                if (blobToUpload) {
                    return upload.maybeDefer(id, blobToUpload);
                } else {
                    upload.now(id);
                    return true;
                }
            }
        };
        qq.extend(this, {
            add: function(id, file) {
                handler.add.apply(this, arguments);
            },
            upload: function(id) {
                if (connectionManager.open(id)) {
                    return upload.start(id);
                }
                return false;
            },
            retry: function(id) {
                if (concurrentChunkingPossible) {
                    handler._getFileState(id).temp.ignoreFailure = false;
                }
                if (connectionManager.isUsingConnection(id)) {
                    return upload.start(id);
                } else {
                    return controller.upload(id);
                }
            },
            cancel: function(id) {
                var cancelRetVal = handler.cancel(id);
                if (qq.isGenericPromise(cancelRetVal)) {
                    cancelRetVal.then(function() {
                        upload.cancel(id);
                    });
                } else if (cancelRetVal !== false) {
                    upload.cancel(id);
                }
            },
            cancelAll: function() {
                var waitingOrConnected = connectionManager.getWaitingOrConnected(), i;
                if (waitingOrConnected.length) {
                    for (i = waitingOrConnected.length - 1; i >= 0; i--) {
                        controller.cancel(waitingOrConnected[i]);
                    }
                }
                connectionManager.reset();
            },
            getFile: function(id) {
                if (handler.getProxy && handler.getProxy(id)) {
                    return handler.getProxy(id).referenceBlob;
                }
                return handler.getFile && handler.getFile(id);
            },
            isProxied: function(id) {
                return !!(handler.getProxy && handler.getProxy(id));
            },
            getInput: function(id) {
                if (handler.getInput) {
                    return handler.getInput(id);
                }
            },
            reset: function() {
                log("Resetting upload handler");
                controller.cancelAll();
                connectionManager.reset();
                handler.reset();
            },
            expunge: function(id) {
                if (controller.isValid(id)) {
                    return handler.expunge(id);
                }
            },
            isValid: function(id) {
                return handler.isValid(id);
            },
            hasResumeRecord: function(id) {
                var key = handler.isValid(id) && handler._getLocalStorageId && handler._getLocalStorageId(id);
                if (key) {
                    return !!localStorage.getItem(key);
                }
                return false;
            },
            getResumableFilesData: function() {
                if (handler.getResumableFilesData) {
                    return handler.getResumableFilesData();
                }
                return [];
            },
            getThirdPartyFileId: function(id) {
                if (controller.isValid(id)) {
                    return handler.getThirdPartyFileId(id);
                }
            },
            pause: function(id) {
                if (controller.isResumable(id) && handler.pause && controller.isValid(id) && handler.pause(id)) {
                    connectionManager.free(id);
                    handler.moveInProgressToRemaining(id);
                    return true;
                }
                return false;
            },
            isAttemptingResume: function(id) {
                return !!handler.isAttemptingResume && handler.isAttemptingResume(id);
            },
            isResumable: function(id) {
                return !!handler.isResumable && handler.isResumable(id);
            }
        });
        qq.extend(options, o);
        log = options.log;
        chunkingPossible = options.chunking.enabled && qq.supportedFeatures.chunking;
        concurrentChunkingPossible = chunkingPossible && options.chunking.concurrent.enabled;
        preventRetryResponse = function() {
            var response = {};
            response[options.preventRetryParam] = true;
            return response;
        }();
        upload.initHandler();
    };
    qq.WindowReceiveMessage = function(o) {
        "use strict";
        var options = {
            log: function(message, level) {}
        }, callbackWrapperDetachers = {};
        qq.extend(options, o);
        qq.extend(this, {
            receiveMessage: function(id, callback) {
                var onMessageCallbackWrapper = function(event) {
                    callback(event.data);
                };
                if (window.postMessage) {
                    callbackWrapperDetachers[id] = qq(window).attach("message", onMessageCallbackWrapper);
                } else {
                    log("iframe message passing not supported in this browser!", "error");
                }
            },
            stopReceivingMessages: function(id) {
                if (window.postMessage) {
                    var detacher = callbackWrapperDetachers[id];
                    if (detacher) {
                        detacher();
                    }
                }
            }
        });
    };
    qq.FormUploadHandler = function(spec) {
        "use strict";
        var options = spec.options, handler = this, proxy = spec.proxy, formHandlerInstanceId = qq.getUniqueId(), onloadCallbacks = {}, detachLoadEvents = {}, postMessageCallbackTimers = {}, isCors = options.isCors, inputName = options.inputName, getUuid = proxy.getUuid, log = proxy.log, corsMessageReceiver = new qq.WindowReceiveMessage({
            log: log
        });
        function expungeFile(id) {
            delete detachLoadEvents[id];
            if (isCors) {
                clearTimeout(postMessageCallbackTimers[id]);
                delete postMessageCallbackTimers[id];
                corsMessageReceiver.stopReceivingMessages(id);
            }
            var iframe = document.getElementById(handler._getIframeName(id));
            if (iframe) {
                iframe.setAttribute("src", "javascript:false;");
                qq(iframe).remove();
            }
        }
        function getFileIdForIframeName(iframeName) {
            return iframeName.split("_")[0];
        }
        function initIframeForUpload(name) {
            var iframe = qq.toElement("<iframe src='javascript:false;' name='" + name + "' />");
            iframe.setAttribute("id", name);
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            return iframe;
        }
        function registerPostMessageCallback(iframe, callback) {
            var iframeName = iframe.id, fileId = getFileIdForIframeName(iframeName), uuid = getUuid(fileId);
            onloadCallbacks[uuid] = callback;
            detachLoadEvents[fileId] = qq(iframe).attach("load", function() {
                if (handler.getInput(fileId)) {
                    log("Received iframe load event for CORS upload request (iframe name " + iframeName + ")");
                    postMessageCallbackTimers[iframeName] = setTimeout(function() {
                        var errorMessage = "No valid message received from loaded iframe for iframe name " + iframeName;
                        log(errorMessage, "error");
                        callback({
                            error: errorMessage
                        });
                    }, 1e3);
                }
            });
            corsMessageReceiver.receiveMessage(iframeName, function(message) {
                log("Received the following window message: '" + message + "'");
                var fileId = getFileIdForIframeName(iframeName), response = handler._parseJsonResponse(message), uuid = response.uuid, onloadCallback;
                if (uuid && onloadCallbacks[uuid]) {
                    log("Handling response for iframe name " + iframeName);
                    clearTimeout(postMessageCallbackTimers[iframeName]);
                    delete postMessageCallbackTimers[iframeName];
                    handler._detachLoadEvent(iframeName);
                    onloadCallback = onloadCallbacks[uuid];
                    delete onloadCallbacks[uuid];
                    corsMessageReceiver.stopReceivingMessages(iframeName);
                    onloadCallback(response);
                } else if (!uuid) {
                    log("'" + message + "' does not contain a UUID - ignoring.");
                }
            });
        }
        qq.extend(this, new qq.UploadHandler(spec));
        qq.override(this, function(super_) {
            return {
                add: function(id, fileInput) {
                    super_.add(id, {
                        input: fileInput
                    });
                    fileInput.setAttribute("name", inputName);
                    if (fileInput.parentNode) {
                        qq(fileInput).remove();
                    }
                },
                expunge: function(id) {
                    expungeFile(id);
                    super_.expunge(id);
                },
                isValid: function(id) {
                    return super_.isValid(id) && handler._getFileState(id).input !== undefined;
                }
            };
        });
        qq.extend(this, {
            getInput: function(id) {
                return handler._getFileState(id).input;
            },
            _attachLoadEvent: function(iframe, callback) {
                var responseDescriptor;
                if (isCors) {
                    registerPostMessageCallback(iframe, callback);
                } else {
                    detachLoadEvents[iframe.id] = qq(iframe).attach("load", function() {
                        log("Received response for " + iframe.id);
                        if (!iframe.parentNode) {
                            return;
                        }
                        try {
                            if (iframe.contentDocument && iframe.contentDocument.body && iframe.contentDocument.body.innerHTML == "false") {
                                return;
                            }
                        } catch (error) {
                            log("Error when attempting to access iframe during handling of upload response (" + error.message + ")", "error");
                            responseDescriptor = {
                                success: false
                            };
                        }
                        callback(responseDescriptor);
                    });
                }
            },
            _createIframe: function(id) {
                var iframeName = handler._getIframeName(id);
                return initIframeForUpload(iframeName);
            },
            _detachLoadEvent: function(id) {
                if (detachLoadEvents[id] !== undefined) {
                    detachLoadEvents[id]();
                    delete detachLoadEvents[id];
                }
            },
            _getIframeName: function(fileId) {
                return fileId + "_" + formHandlerInstanceId;
            },
            _initFormForUpload: function(spec) {
                var method = spec.method, endpoint = spec.endpoint, params = spec.params, paramsInBody = spec.paramsInBody, targetName = spec.targetName, form = qq.toElement("<form method='" + method + "' enctype='multipart/form-data'></form>"), url = endpoint;
                if (paramsInBody) {
                    qq.obj2Inputs(params, form);
                } else {
                    url = qq.obj2url(params, endpoint);
                }
                form.setAttribute("action", url);
                form.setAttribute("target", targetName);
                form.style.display = "none";
                document.body.appendChild(form);
                return form;
            },
            _parseJsonResponse: function(innerHtmlOrMessage) {
                var response = {};
                try {
                    response = qq.parseJson(innerHtmlOrMessage);
                } catch (error) {
                    log("Error when attempting to parse iframe upload response (" + error.message + ")", "error");
                }
                return response;
            }
        });
    };
    qq.XhrUploadHandler = function(spec) {
        "use strict";
        var handler = this, namespace = spec.options.namespace, proxy = spec.proxy, chunking = spec.options.chunking, getChunkSize = function(id) {
            var fileState = handler._getFileState(id);
            if (fileState.chunkSize) {
                return fileState.chunkSize;
            } else {
                var chunkSize = chunking.partSize;
                if (qq.isFunction(chunkSize)) {
                    chunkSize = chunkSize(id, getSize(id));
                }
                fileState.chunkSize = chunkSize;
                return chunkSize;
            }
        }, resume = spec.options.resume, chunkFiles = chunking && spec.options.chunking.enabled && qq.supportedFeatures.chunking, resumeEnabled = resume && spec.options.resume.enabled && chunkFiles && qq.supportedFeatures.resume, getName = proxy.getName, getSize = proxy.getSize, getUuid = proxy.getUuid, getEndpoint = proxy.getEndpoint, getDataByUuid = proxy.getDataByUuid, onUuidChanged = proxy.onUuidChanged, onProgress = proxy.onProgress, log = proxy.log, getCustomResumeData = proxy.getCustomResumeData;
        function abort(id) {
            qq.each(handler._getXhrs(id), function(xhrId, xhr) {
                var ajaxRequester = handler._getAjaxRequester(id, xhrId);
                xhr.onreadystatechange = null;
                xhr.upload.onprogress = null;
                xhr.abort();
                ajaxRequester && ajaxRequester.canceled && ajaxRequester.canceled(id);
            });
        }
        qq.extend(this, new qq.UploadHandler(spec));
        qq.override(this, function(super_) {
            return {
                add: function(id, blobOrProxy) {
                    if (qq.isFile(blobOrProxy) || qq.isBlob(blobOrProxy)) {
                        super_.add(id, {
                            file: blobOrProxy
                        });
                    } else if (blobOrProxy instanceof qq.BlobProxy) {
                        super_.add(id, {
                            proxy: blobOrProxy
                        });
                    } else {
                        throw new Error("Passed obj is not a File, Blob, or proxy");
                    }
                    handler._initTempState(id);
                    resumeEnabled && handler._maybePrepareForResume(id);
                },
                expunge: function(id) {
                    abort(id);
                    handler._maybeDeletePersistedChunkData(id);
                    handler._clearXhrs(id);
                    super_.expunge(id);
                }
            };
        });
        qq.extend(this, {
            clearCachedChunk: function(id, chunkIdx) {
                var fileState = handler._getFileState(id);
                if (fileState) {
                    delete fileState.temp.cachedChunks[chunkIdx];
                }
            },
            clearXhr: function(id, chunkIdx) {
                var tempState = handler._getFileState(id).temp;
                if (tempState.xhrs) {
                    delete tempState.xhrs[chunkIdx];
                }
                if (tempState.ajaxRequesters) {
                    delete tempState.ajaxRequesters[chunkIdx];
                }
            },
            finalizeChunks: function(id, responseParser) {
                var lastChunkIdx = handler._getTotalChunks(id) - 1, xhr = handler._getXhr(id, lastChunkIdx);
                if (responseParser) {
                    return new qq.Promise().success(responseParser(xhr), xhr);
                }
                return new qq.Promise().success({}, xhr);
            },
            getFile: function(id) {
                return handler.isValid(id) && handler._getFileState(id).file;
            },
            getProxy: function(id) {
                return handler.isValid(id) && handler._getFileState(id).proxy;
            },
            getResumableFilesData: function() {
                var resumableFilesData = [];
                handler._iterateResumeRecords(function(key, uploadData) {
                    handler.moveInProgressToRemaining(null, uploadData.chunking.inProgress, uploadData.chunking.remaining);
                    var data = {
                        name: uploadData.name,
                        remaining: uploadData.chunking.remaining,
                        size: uploadData.size,
                        uuid: uploadData.uuid
                    };
                    if (uploadData.key) {
                        data.key = uploadData.key;
                    }
                    if (uploadData.customResumeData) {
                        data.customResumeData = uploadData.customResumeData;
                    }
                    resumableFilesData.push(data);
                });
                return resumableFilesData;
            },
            isAttemptingResume: function(id) {
                return handler._getFileState(id).attemptingResume;
            },
            isResumable: function(id) {
                return !!chunking && handler.isValid(id) && !handler._getFileState(id).notResumable;
            },
            moveInProgressToRemaining: function(id, optInProgress, optRemaining) {
                var fileState = handler._getFileState(id) || {}, chunkingState = fileState.chunking || {}, inProgress = optInProgress || chunkingState.inProgress, remaining = optRemaining || chunkingState.remaining;
                if (inProgress) {
                    log(qq.format("Moving these chunks from in-progress {}, to remaining.", JSON.stringify(inProgress)));
                    inProgress.reverse();
                    qq.each(inProgress, function(idx, chunkIdx) {
                        remaining.unshift(chunkIdx);
                    });
                    inProgress.length = 0;
                }
            },
            pause: function(id) {
                if (handler.isValid(id)) {
                    log(qq.format("Aborting XHR upload for {} '{}' due to pause instruction.", id, getName(id)));
                    handler._getFileState(id).paused = true;
                    abort(id);
                    return true;
                }
            },
            reevaluateChunking: function(id) {
                if (chunking && handler.isValid(id)) {
                    var state = handler._getFileState(id), totalChunks, i;
                    delete state.chunking;
                    state.chunking = {};
                    totalChunks = handler._getTotalChunks(id);
                    if (totalChunks > 1 || chunking.mandatory) {
                        state.chunking.enabled = true;
                        state.chunking.parts = totalChunks;
                        state.chunking.remaining = [];
                        for (i = 0; i < totalChunks; i++) {
                            state.chunking.remaining.push(i);
                        }
                        handler._initTempState(id);
                    } else {
                        state.chunking.enabled = false;
                    }
                }
            },
            updateBlob: function(id, newBlob) {
                if (handler.isValid(id)) {
                    handler._getFileState(id).file = newBlob;
                }
            },
            _clearXhrs: function(id) {
                var tempState = handler._getFileState(id).temp;
                qq.each(tempState.ajaxRequesters, function(chunkId) {
                    delete tempState.ajaxRequesters[chunkId];
                });
                qq.each(tempState.xhrs, function(chunkId) {
                    delete tempState.xhrs[chunkId];
                });
            },
            _createXhr: function(id, optChunkIdx) {
                return handler._registerXhr(id, optChunkIdx, qq.createXhrInstance());
            },
            _getAjaxRequester: function(id, optChunkIdx) {
                var chunkIdx = optChunkIdx == null ? -1 : optChunkIdx;
                return handler._getFileState(id).temp.ajaxRequesters[chunkIdx];
            },
            _getChunkData: function(id, chunkIndex) {
                var chunkSize = getChunkSize(id), fileSize = getSize(id), fileOrBlob = handler.getFile(id), startBytes = chunkSize * chunkIndex, endBytes = startBytes + chunkSize >= fileSize ? fileSize : startBytes + chunkSize, totalChunks = handler._getTotalChunks(id), cachedChunks = this._getFileState(id).temp.cachedChunks, blob = cachedChunks[chunkIndex] || qq.sliceBlob(fileOrBlob, startBytes, endBytes);
                cachedChunks[chunkIndex] = blob;
                return {
                    part: chunkIndex,
                    start: startBytes,
                    end: endBytes,
                    count: totalChunks,
                    blob: blob,
                    size: endBytes - startBytes
                };
            },
            _getChunkDataForCallback: function(chunkData) {
                return {
                    partIndex: chunkData.part,
                    startByte: chunkData.start + 1,
                    endByte: chunkData.end,
                    totalParts: chunkData.count
                };
            },
            _getLocalStorageId: function(id) {
                var formatVersion = "5.0", name = getName(id), size = getSize(id), chunkSize = getChunkSize(id), endpoint = getEndpoint(id), customKeys = resume.customKeys(id), localStorageId = qq.format("qq{}resume{}-{}-{}-{}-{}", namespace, formatVersion, name, size, chunkSize, endpoint);
                customKeys.forEach(function(key) {
                    localStorageId += "-" + key;
                });
                return localStorageId;
            },
            _getMimeType: function(id) {
                return handler.getFile(id).type;
            },
            _getPersistableData: function(id) {
                return handler._getFileState(id).chunking;
            },
            _getTotalChunks: function(id) {
                if (chunking) {
                    var fileSize = getSize(id), chunkSize = getChunkSize(id);
                    return Math.ceil(fileSize / chunkSize);
                }
            },
            _getXhr: function(id, optChunkIdx) {
                var chunkIdx = optChunkIdx == null ? -1 : optChunkIdx;
                return handler._getFileState(id).temp.xhrs[chunkIdx];
            },
            _getXhrs: function(id) {
                return handler._getFileState(id).temp.xhrs;
            },
            _iterateResumeRecords: function(callback) {
                if (resumeEnabled) {
                    qq.each(localStorage, function(key, item) {
                        if (key.indexOf(qq.format("qq{}resume", namespace)) === 0) {
                            var uploadData = JSON.parse(item);
                            callback(key, uploadData);
                        }
                    });
                }
            },
            _initTempState: function(id) {
                handler._getFileState(id).temp = {
                    ajaxRequesters: {},
                    chunkProgress: {},
                    xhrs: {},
                    cachedChunks: {}
                };
            },
            _markNotResumable: function(id) {
                handler._getFileState(id).notResumable = true;
            },
            _maybeDeletePersistedChunkData: function(id) {
                var localStorageId;
                if (resumeEnabled && handler.isResumable(id)) {
                    localStorageId = handler._getLocalStorageId(id);
                    if (localStorageId && localStorage.getItem(localStorageId)) {
                        localStorage.removeItem(localStorageId);
                        return true;
                    }
                }
                return false;
            },
            _maybePrepareForResume: function(id) {
                var state = handler._getFileState(id), localStorageId, persistedData;
                if (resumeEnabled && state.key === undefined) {
                    localStorageId = handler._getLocalStorageId(id);
                    persistedData = localStorage.getItem(localStorageId);
                    if (persistedData) {
                        persistedData = JSON.parse(persistedData);
                        if (getDataByUuid(persistedData.uuid)) {
                            handler._markNotResumable(id);
                        } else {
                            log(qq.format("Identified file with ID {} and name of {} as resumable.", id, getName(id)));
                            onUuidChanged(id, persistedData.uuid);
                            state.key = persistedData.key;
                            state.chunking = persistedData.chunking;
                            state.loaded = persistedData.loaded;
                            state.customResumeData = persistedData.customResumeData;
                            state.attemptingResume = true;
                            handler.moveInProgressToRemaining(id);
                        }
                    }
                }
            },
            _maybePersistChunkedState: function(id) {
                var state = handler._getFileState(id), localStorageId, persistedData;
                if (resumeEnabled && handler.isResumable(id)) {
                    var customResumeData = getCustomResumeData(id);
                    localStorageId = handler._getLocalStorageId(id);
                    persistedData = {
                        name: getName(id),
                        size: getSize(id),
                        uuid: getUuid(id),
                        key: state.key,
                        chunking: state.chunking,
                        loaded: state.loaded,
                        lastUpdated: Date.now()
                    };
                    if (customResumeData) {
                        persistedData.customResumeData = customResumeData;
                    }
                    try {
                        localStorage.setItem(localStorageId, JSON.stringify(persistedData));
                    } catch (error) {
                        log(qq.format("Unable to save resume data for '{}' due to error: '{}'.", id, error.toString()), "warn");
                    }
                }
            },
            _registerProgressHandler: function(id, chunkIdx, chunkSize) {
                var xhr = handler._getXhr(id, chunkIdx), name = getName(id), progressCalculator = {
                    simple: function(loaded, total) {
                        var fileSize = getSize(id);
                        if (loaded === total) {
                            onProgress(id, name, fileSize, fileSize);
                        } else {
                            onProgress(id, name, loaded >= fileSize ? fileSize - 1 : loaded, fileSize);
                        }
                    },
                    chunked: function(loaded, total) {
                        var chunkProgress = handler._getFileState(id).temp.chunkProgress, totalSuccessfullyLoadedForFile = handler._getFileState(id).loaded, loadedForRequest = loaded, totalForRequest = total, totalFileSize = getSize(id), estActualChunkLoaded = loadedForRequest - (totalForRequest - chunkSize), totalLoadedForFile = totalSuccessfullyLoadedForFile;
                        chunkProgress[chunkIdx] = estActualChunkLoaded;
                        qq.each(chunkProgress, function(chunkIdx, chunkLoaded) {
                            totalLoadedForFile += chunkLoaded;
                        });
                        onProgress(id, name, totalLoadedForFile, totalFileSize);
                    }
                };
                xhr.upload.onprogress = function(e) {
                    if (e.lengthComputable) {
                        var type = chunkSize == null ? "simple" : "chunked";
                        progressCalculator[type](e.loaded, e.total);
                    }
                };
            },
            _registerXhr: function(id, optChunkIdx, xhr, optAjaxRequester) {
                var xhrsId = optChunkIdx == null ? -1 : optChunkIdx, tempState = handler._getFileState(id).temp;
                tempState.xhrs = tempState.xhrs || {};
                tempState.ajaxRequesters = tempState.ajaxRequesters || {};
                tempState.xhrs[xhrsId] = xhr;
                if (optAjaxRequester) {
                    tempState.ajaxRequesters[xhrsId] = optAjaxRequester;
                }
                return xhr;
            },
            _removeExpiredChunkingRecords: function() {
                var expirationDays = resume.recordsExpireIn;
                handler._iterateResumeRecords(function(key, uploadData) {
                    var expirationDate = new Date(uploadData.lastUpdated);
                    expirationDate.setDate(expirationDate.getDate() + expirationDays);
                    if (expirationDate.getTime() <= Date.now()) {
                        log("Removing expired resume record with key " + key);
                        localStorage.removeItem(key);
                    }
                });
            },
            _shouldChunkThisFile: function(id) {
                var state = handler._getFileState(id);
                if (state) {
                    if (!state.chunking) {
                        handler.reevaluateChunking(id);
                    }
                    return state.chunking.enabled;
                }
            }
        });
    };
    qq.DeleteFileAjaxRequester = function(o) {
        "use strict";
        var requester, options = {
            method: "DELETE",
            uuidParamName: "qquuid",
            endpointStore: {},
            maxConnections: 3,
            customHeaders: function(id) {
                return {};
            },
            paramsStore: {},
            cors: {
                expected: false,
                sendCredentials: false
            },
            log: function(str, level) {},
            onDelete: function(id) {},
            onDeleteComplete: function(id, xhrOrXdr, isError) {}
        };
        qq.extend(options, o);
        function getMandatedParams() {
            if (options.method.toUpperCase() === "POST") {
                return {
                    _method: "DELETE"
                };
            }
            return {};
        }
        requester = qq.extend(this, new qq.AjaxRequester({
            acceptHeader: "application/json",
            validMethods: [ "POST", "DELETE" ],
            method: options.method,
            endpointStore: options.endpointStore,
            paramsStore: options.paramsStore,
            mandatedParams: getMandatedParams(),
            maxConnections: options.maxConnections,
            customHeaders: function(id) {
                return options.customHeaders.get(id);
            },
            log: options.log,
            onSend: options.onDelete,
            onComplete: options.onDeleteComplete,
            cors: options.cors
        }));
        qq.extend(this, {
            sendDelete: function(id, uuid, additionalMandatedParams) {
                var additionalOptions = additionalMandatedParams || {};
                options.log("Submitting delete file request for " + id);
                if (options.method === "DELETE") {
                    requester.initTransport(id).withPath(uuid).withParams(additionalOptions).send();
                } else {
                    additionalOptions[options.uuidParamName] = uuid;
                    requester.initTransport(id).withParams(additionalOptions).send();
                }
            }
        });
    };
    (function() {
        function detectSubsampling(img) {
            var iw = img.naturalWidth, ih = img.naturalHeight, canvas = document.createElement("canvas"), ctx;
            if (iw * ih > 1024 * 1024) {
                canvas.width = canvas.height = 1;
                ctx = canvas.getContext("2d");
                ctx.drawImage(img, -iw + 1, 0);
                return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
            } else {
                return false;
            }
        }
        function detectVerticalSquash(img, iw, ih) {
            var canvas = document.createElement("canvas"), sy = 0, ey = ih, py = ih, ctx, data, alpha, ratio;
            canvas.width = 1;
            canvas.height = ih;
            ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            data = ctx.getImageData(0, 0, 1, ih).data;
            while (py > sy) {
                alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                } else {
                    sy = py;
                }
                py = ey + sy >> 1;
            }
            ratio = py / ih;
            return ratio === 0 ? 1 : ratio;
        }
        function renderImageToDataURL(img, blob, options, doSquash) {
            var canvas = document.createElement("canvas"), mime = options.mime || "image/jpeg", promise = new qq.Promise();
            renderImageToCanvas(img, blob, canvas, options, doSquash).then(function() {
                promise.success(canvas.toDataURL(mime, options.quality || .8));
            });
            return promise;
        }
        function maybeCalculateDownsampledDimensions(spec) {
            var maxPixels = 5241e3;
            if (!qq.ios()) {
                throw new qq.Error("Downsampled dimensions can only be reliably calculated for iOS!");
            }
            if (spec.origHeight * spec.origWidth > maxPixels) {
                return {
                    newHeight: Math.round(Math.sqrt(maxPixels * (spec.origHeight / spec.origWidth))),
                    newWidth: Math.round(Math.sqrt(maxPixels * (spec.origWidth / spec.origHeight)))
                };
            }
        }
        function renderImageToCanvas(img, blob, canvas, options, doSquash) {
            var iw = img.naturalWidth, ih = img.naturalHeight, width = options.width, height = options.height, ctx = canvas.getContext("2d"), promise = new qq.Promise(), modifiedDimensions;
            ctx.save();
            if (options.resize) {
                return renderImageToCanvasWithCustomResizer({
                    blob: blob,
                    canvas: canvas,
                    image: img,
                    imageHeight: ih,
                    imageWidth: iw,
                    orientation: options.orientation,
                    resize: options.resize,
                    targetHeight: height,
                    targetWidth: width
                });
            }
            if (!qq.supportedFeatures.unlimitedScaledImageSize) {
                modifiedDimensions = maybeCalculateDownsampledDimensions({
                    origWidth: width,
                    origHeight: height
                });
                if (modifiedDimensions) {
                    qq.log(qq.format("Had to reduce dimensions due to device limitations from {}w / {}h to {}w / {}h", width, height, modifiedDimensions.newWidth, modifiedDimensions.newHeight), "warn");
                    width = modifiedDimensions.newWidth;
                    height = modifiedDimensions.newHeight;
                }
            }
            transformCoordinate(canvas, width, height, options.orientation);
            if (qq.ios()) {
                (function() {
                    if (detectSubsampling(img)) {
                        iw /= 2;
                        ih /= 2;
                    }
                    var d = 1024, tmpCanvas = document.createElement("canvas"), vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1, dw = Math.ceil(d * width / iw), dh = Math.ceil(d * height / ih / vertSquashRatio), sy = 0, dy = 0, tmpCtx, sx, dx;
                    tmpCanvas.width = tmpCanvas.height = d;
                    tmpCtx = tmpCanvas.getContext("2d");
                    while (sy < ih) {
                        sx = 0;
                        dx = 0;
                        while (sx < iw) {
                            tmpCtx.clearRect(0, 0, d, d);
                            tmpCtx.drawImage(img, -sx, -sy);
                            ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
                            sx += d;
                            dx += dw;
                        }
                        sy += d;
                        dy += dh;
                    }
                    ctx.restore();
                    tmpCanvas = tmpCtx = null;
                })();
            } else {
                ctx.drawImage(img, 0, 0, width, height);
            }
            canvas.qqImageRendered && canvas.qqImageRendered();
            promise.success();
            return promise;
        }
        function renderImageToCanvasWithCustomResizer(resizeInfo) {
            var blob = resizeInfo.blob, image = resizeInfo.image, imageHeight = resizeInfo.imageHeight, imageWidth = resizeInfo.imageWidth, orientation = resizeInfo.orientation, promise = new qq.Promise(), resize = resizeInfo.resize, sourceCanvas = document.createElement("canvas"), sourceCanvasContext = sourceCanvas.getContext("2d"), targetCanvas = resizeInfo.canvas, targetHeight = resizeInfo.targetHeight, targetWidth = resizeInfo.targetWidth;
            transformCoordinate(sourceCanvas, imageWidth, imageHeight, orientation);
            targetCanvas.height = targetHeight;
            targetCanvas.width = targetWidth;
            sourceCanvasContext.drawImage(image, 0, 0);
            resize({
                blob: blob,
                height: targetHeight,
                image: image,
                sourceCanvas: sourceCanvas,
                targetCanvas: targetCanvas,
                width: targetWidth
            }).then(function success() {
                targetCanvas.qqImageRendered && targetCanvas.qqImageRendered();
                promise.success();
            }, promise.failure);
            return promise;
        }
        function transformCoordinate(canvas, width, height, orientation) {
            switch (orientation) {
              case 5:
              case 6:
              case 7:
              case 8:
                canvas.width = height;
                canvas.height = width;
                break;

              default:
                canvas.width = width;
                canvas.height = height;
            }
            var ctx = canvas.getContext("2d");
            switch (orientation) {
              case 2:
                ctx.translate(width, 0);
                ctx.scale(-1, 1);
                break;

              case 3:
                ctx.translate(width, height);
                ctx.rotate(Math.PI);
                break;

              case 4:
                ctx.translate(0, height);
                ctx.scale(1, -1);
                break;

              case 5:
                ctx.rotate(.5 * Math.PI);
                ctx.scale(1, -1);
                break;

              case 6:
                ctx.rotate(.5 * Math.PI);
                ctx.translate(0, -height);
                break;

              case 7:
                ctx.rotate(.5 * Math.PI);
                ctx.translate(width, -height);
                ctx.scale(-1, 1);
                break;

              case 8:
                ctx.rotate(-.5 * Math.PI);
                ctx.translate(-width, 0);
                break;

              default:
                break;
            }
        }
        function MegaPixImage(srcImage, errorCallback) {
            var self = this;
            if (window.Blob && srcImage instanceof Blob) {
                (function() {
                    var img = new Image(), URL = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                    if (!URL) {
                        throw Error("No createObjectURL function found to create blob url");
                    }
                    img.src = URL.createObjectURL(srcImage);
                    self.blob = srcImage;
                    srcImage = img;
                })();
            }
            if (!srcImage.naturalWidth && !srcImage.naturalHeight) {
                srcImage.onload = function() {
                    var listeners = self.imageLoadListeners;
                    if (listeners) {
                        self.imageLoadListeners = null;
                        setTimeout(function() {
                            for (var i = 0, len = listeners.length; i < len; i++) {
                                listeners[i]();
                            }
                        }, 0);
                    }
                };
                srcImage.onerror = errorCallback;
                this.imageLoadListeners = [];
            }
            this.srcImage = srcImage;
        }
        MegaPixImage.prototype.render = function(target, options) {
            options = options || {};
            var self = this, imgWidth = this.srcImage.naturalWidth, imgHeight = this.srcImage.naturalHeight, width = options.width, height = options.height, maxWidth = options.maxWidth, maxHeight = options.maxHeight, doSquash = !this.blob || this.blob.type === "image/jpeg", tagName = target.tagName.toLowerCase(), opt;
            if (this.imageLoadListeners) {
                this.imageLoadListeners.push(function() {
                    self.render(target, options);
                });
                return;
            }
            if (width && !height) {
                height = imgHeight * width / imgWidth << 0;
            } else if (height && !width) {
                width = imgWidth * height / imgHeight << 0;
            } else {
                width = imgWidth;
                height = imgHeight;
            }
            if (maxWidth && width > maxWidth) {
                width = maxWidth;
                height = imgHeight * width / imgWidth << 0;
            }
            if (maxHeight && height > maxHeight) {
                height = maxHeight;
                width = imgWidth * height / imgHeight << 0;
            }
            opt = {
                width: width,
                height: height
            }, qq.each(options, function(optionsKey, optionsValue) {
                opt[optionsKey] = optionsValue;
            });
            if (tagName === "img") {
                (function() {
                    var oldTargetSrc = target.src;
                    renderImageToDataURL(self.srcImage, self.blob, opt, doSquash).then(function(dataUri) {
                        target.src = dataUri;
                        oldTargetSrc === target.src && target.onload();
                    });
                })();
            } else if (tagName === "canvas") {
                renderImageToCanvas(this.srcImage, this.blob, target, opt, doSquash);
            }
            if (typeof this.onrender === "function") {
                this.onrender(target);
            }
        };
        qq.MegaPixImage = MegaPixImage;
    })();
    qq.ImageGenerator = function(log) {
        "use strict";
        function isImg(el) {
            return el.tagName.toLowerCase() === "img";
        }
        function isCanvas(el) {
            return el.tagName.toLowerCase() === "canvas";
        }
        function isImgCorsSupported() {
            return new Image().crossOrigin !== undefined;
        }
        function isCanvasSupported() {
            var canvas = document.createElement("canvas");
            return canvas.getContext && canvas.getContext("2d");
        }
        function determineMimeOfFileName(nameWithPath) {
            var pathSegments = nameWithPath.split("/"), name = pathSegments[pathSegments.length - 1].split("?")[0], extension = qq.getExtension(name);
            extension = extension && extension.toLowerCase();
            switch (extension) {
              case "jpeg":
              case "jpg":
                return "image/jpeg";

              case "png":
                return "image/png";

              case "bmp":
                return "image/bmp";

              case "gif":
                return "image/gif";

              case "tiff":
              case "tif":
                return "image/tiff";
            }
        }
        function isCrossOrigin(url) {
            var targetAnchor = document.createElement("a"), targetProtocol, targetHostname, targetPort;
            targetAnchor.href = url;
            targetProtocol = targetAnchor.protocol;
            targetPort = targetAnchor.port;
            targetHostname = targetAnchor.hostname;
            if (targetProtocol.toLowerCase() !== window.location.protocol.toLowerCase()) {
                return true;
            }
            if (targetHostname.toLowerCase() !== window.location.hostname.toLowerCase()) {
                return true;
            }
            if (targetPort !== window.location.port && !qq.ie()) {
                return true;
            }
            return false;
        }
        function registerImgLoadListeners(img, promise) {
            img.onload = function() {
                img.onload = null;
                img.onerror = null;
                promise.success(img);
            };
            img.onerror = function() {
                img.onload = null;
                img.onerror = null;
                log("Problem drawing thumbnail!", "error");
                promise.failure(img, "Problem drawing thumbnail!");
            };
        }
        function registerCanvasDrawImageListener(canvas, promise) {
            canvas.qqImageRendered = function() {
                promise.success(canvas);
            };
        }
        function registerThumbnailRenderedListener(imgOrCanvas, promise) {
            var registered = isImg(imgOrCanvas) || isCanvas(imgOrCanvas);
            if (isImg(imgOrCanvas)) {
                registerImgLoadListeners(imgOrCanvas, promise);
            } else if (isCanvas(imgOrCanvas)) {
                registerCanvasDrawImageListener(imgOrCanvas, promise);
            } else {
                promise.failure(imgOrCanvas);
                log(qq.format("Element container of type {} is not supported!", imgOrCanvas.tagName), "error");
            }
            return registered;
        }
        function draw(fileOrBlob, container, options) {
            var drawPreview = new qq.Promise(), identifier = new qq.Identify(fileOrBlob, log), maxSize = options.maxSize, orient = options.orient == null ? true : options.orient, megapixErrorHandler = function() {
                container.onerror = null;
                container.onload = null;
                log("Could not render preview, file may be too large!", "error");
                drawPreview.failure(container, "Browser cannot render image!");
            };
            identifier.isPreviewable().then(function(mime) {
                var dummyExif = {
                    parse: function() {
                        return new qq.Promise().success();
                    }
                }, exif = orient ? new qq.Exif(fileOrBlob, log) : dummyExif, mpImg = new qq.MegaPixImage(fileOrBlob, megapixErrorHandler);
                if (registerThumbnailRenderedListener(container, drawPreview)) {
                    exif.parse().then(function(exif) {
                        var orientation = exif && exif.Orientation;
                        mpImg.render(container, {
                            maxWidth: maxSize,
                            maxHeight: maxSize,
                            orientation: orientation,
                            mime: mime,
                            resize: options.customResizeFunction
                        });
                    }, function(failureMsg) {
                        log(qq.format("EXIF data could not be parsed ({}).  Assuming orientation = 1.", failureMsg));
                        mpImg.render(container, {
                            maxWidth: maxSize,
                            maxHeight: maxSize,
                            mime: mime,
                            resize: options.customResizeFunction
                        });
                    });
                }
            }, function() {
                log("Not previewable");
                drawPreview.failure(container, "Not previewable");
            });
            return drawPreview;
        }
        function drawOnCanvasOrImgFromUrl(url, canvasOrImg, draw, maxSize, customResizeFunction) {
            var tempImg = new Image(), tempImgRender = new qq.Promise();
            registerThumbnailRenderedListener(tempImg, tempImgRender);
            if (isCrossOrigin(url)) {
                tempImg.crossOrigin = "anonymous";
            }
            tempImg.src = url;
            tempImgRender.then(function rendered() {
                registerThumbnailRenderedListener(canvasOrImg, draw);
                var mpImg = new qq.MegaPixImage(tempImg);
                mpImg.render(canvasOrImg, {
                    maxWidth: maxSize,
                    maxHeight: maxSize,
                    mime: determineMimeOfFileName(url),
                    resize: customResizeFunction
                });
            }, draw.failure);
        }
        function drawOnImgFromUrlWithCssScaling(url, img, draw, maxSize) {
            registerThumbnailRenderedListener(img, draw);
            qq(img).css({
                maxWidth: maxSize + "px",
                maxHeight: maxSize + "px"
            });
            img.src = url;
        }
        function drawFromUrl(url, container, options) {
            var draw = new qq.Promise(), scale = options.scale, maxSize = scale ? options.maxSize : null;
            if (scale && isImg(container)) {
                if (isCanvasSupported()) {
                    if (isCrossOrigin(url) && !isImgCorsSupported()) {
                        drawOnImgFromUrlWithCssScaling(url, container, draw, maxSize);
                    } else {
                        drawOnCanvasOrImgFromUrl(url, container, draw, maxSize);
                    }
                } else {
                    drawOnImgFromUrlWithCssScaling(url, container, draw, maxSize);
                }
            } else if (isCanvas(container)) {
                drawOnCanvasOrImgFromUrl(url, container, draw, maxSize);
            } else if (registerThumbnailRenderedListener(container, draw)) {
                container.src = url;
            }
            return draw;
        }
        qq.extend(this, {
            generate: function(fileBlobOrUrl, container, options) {
                if (qq.isString(fileBlobOrUrl)) {
                    log("Attempting to update thumbnail based on server response.");
                    return drawFromUrl(fileBlobOrUrl, container, options || {});
                } else {
                    log("Attempting to draw client-side image preview.");
                    return draw(fileBlobOrUrl, container, options || {});
                }
            }
        });
        this._testing = {};
        this._testing.isImg = isImg;
        this._testing.isCanvas = isCanvas;
        this._testing.isCrossOrigin = isCrossOrigin;
        this._testing.determineMimeOfFileName = determineMimeOfFileName;
    };
    qq.Exif = function(fileOrBlob, log) {
        "use strict";
        var TAG_IDS = [ 274 ], TAG_INFO = {
            274: {
                name: "Orientation",
                bytes: 2
            }
        };
        function parseLittleEndian(hex) {
            var result = 0, pow = 0;
            while (hex.length > 0) {
                result += parseInt(hex.substring(0, 2), 16) * Math.pow(2, pow);
                hex = hex.substring(2, hex.length);
                pow += 8;
            }
            return result;
        }
        function seekToApp1(offset, promise) {
            var theOffset = offset, thePromise = promise;
            if (theOffset === undefined) {
                theOffset = 2;
                thePromise = new qq.Promise();
            }
            qq.readBlobToHex(fileOrBlob, theOffset, 4).then(function(hex) {
                var match = /^ffe([0-9])/.exec(hex), segmentLength;
                if (match) {
                    if (match[1] !== "1") {
                        segmentLength = parseInt(hex.slice(4, 8), 16);
                        seekToApp1(theOffset + segmentLength + 2, thePromise);
                    } else {
                        thePromise.success(theOffset);
                    }
                } else {
                    thePromise.failure("No EXIF header to be found!");
                }
            });
            return thePromise;
        }
        function getApp1Offset() {
            var promise = new qq.Promise();
            qq.readBlobToHex(fileOrBlob, 0, 6).then(function(hex) {
                if (hex.indexOf("ffd8") !== 0) {
                    promise.failure("Not a valid JPEG!");
                } else {
                    seekToApp1().then(function(offset) {
                        promise.success(offset);
                    }, function(error) {
                        promise.failure(error);
                    });
                }
            });
            return promise;
        }
        function isLittleEndian(app1Start) {
            var promise = new qq.Promise();
            qq.readBlobToHex(fileOrBlob, app1Start + 10, 2).then(function(hex) {
                promise.success(hex === "4949");
            });
            return promise;
        }
        function getDirEntryCount(app1Start, littleEndian) {
            var promise = new qq.Promise();
            qq.readBlobToHex(fileOrBlob, app1Start + 18, 2).then(function(hex) {
                if (littleEndian) {
                    return promise.success(parseLittleEndian(hex));
                } else {
                    promise.success(parseInt(hex, 16));
                }
            });
            return promise;
        }
        function getIfd(app1Start, dirEntries) {
            var offset = app1Start + 20, bytes = dirEntries * 12;
            return qq.readBlobToHex(fileOrBlob, offset, bytes);
        }
        function getDirEntries(ifdHex) {
            var entries = [], offset = 0;
            while (offset + 24 <= ifdHex.length) {
                entries.push(ifdHex.slice(offset, offset + 24));
                offset += 24;
            }
            return entries;
        }
        function getTagValues(littleEndian, dirEntries) {
            var TAG_VAL_OFFSET = 16, tagsToFind = qq.extend([], TAG_IDS), vals = {};
            qq.each(dirEntries, function(idx, entry) {
                var idHex = entry.slice(0, 4), id = littleEndian ? parseLittleEndian(idHex) : parseInt(idHex, 16), tagsToFindIdx = tagsToFind.indexOf(id), tagValHex, tagName, tagValLength;
                if (tagsToFindIdx >= 0) {
                    tagName = TAG_INFO[id].name;
                    tagValLength = TAG_INFO[id].bytes;
                    tagValHex = entry.slice(TAG_VAL_OFFSET, TAG_VAL_OFFSET + tagValLength * 2);
                    vals[tagName] = littleEndian ? parseLittleEndian(tagValHex) : parseInt(tagValHex, 16);
                    tagsToFind.splice(tagsToFindIdx, 1);
                }
                if (tagsToFind.length === 0) {
                    return false;
                }
            });
            return vals;
        }
        qq.extend(this, {
            parse: function() {
                var parser = new qq.Promise(), onParseFailure = function(message) {
                    log(qq.format("EXIF header parse failed: '{}' ", message));
                    parser.failure(message);
                };
                getApp1Offset().then(function(app1Offset) {
                    log(qq.format("Moving forward with EXIF header parsing for '{}'", fileOrBlob.name === undefined ? "blob" : fileOrBlob.name));
                    isLittleEndian(app1Offset).then(function(littleEndian) {
                        log(qq.format("EXIF Byte order is {} endian", littleEndian ? "little" : "big"));
                        getDirEntryCount(app1Offset, littleEndian).then(function(dirEntryCount) {
                            log(qq.format("Found {} APP1 directory entries", dirEntryCount));
                            getIfd(app1Offset, dirEntryCount).then(function(ifdHex) {
                                var dirEntries = getDirEntries(ifdHex), tagValues = getTagValues(littleEndian, dirEntries);
                                log("Successfully parsed some EXIF tags");
                                parser.success(tagValues);
                            }, onParseFailure);
                        }, onParseFailure);
                    }, onParseFailure);
                }, onParseFailure);
                return parser;
            }
        });
        this._testing = {};
        this._testing.parseLittleEndian = parseLittleEndian;
    };
    qq.Identify = function(fileOrBlob, log) {
        "use strict";
        function isIdentifiable(magicBytes, questionableBytes) {
            var identifiable = false, magicBytesEntries = [].concat(magicBytes);
            qq.each(magicBytesEntries, function(idx, magicBytesArrayEntry) {
                if (questionableBytes.indexOf(magicBytesArrayEntry) === 0) {
                    identifiable = true;
                    return false;
                }
            });
            return identifiable;
        }
        qq.extend(this, {
            isPreviewable: function() {
                var self = this, identifier = new qq.Promise(), previewable = false, name = fileOrBlob.name === undefined ? "blob" : fileOrBlob.name;
                log(qq.format("Attempting to determine if {} can be rendered in this browser", name));
                log("First pass: check type attribute of blob object.");
                if (this.isPreviewableSync()) {
                    log("Second pass: check for magic bytes in file header.");
                    qq.readBlobToHex(fileOrBlob, 0, 4).then(function(hex) {
                        qq.each(self.PREVIEWABLE_MIME_TYPES, function(mime, bytes) {
                            if (isIdentifiable(bytes, hex)) {
                                if (mime !== "image/tiff" || qq.supportedFeatures.tiffPreviews) {
                                    previewable = true;
                                    identifier.success(mime);
                                }
                                return false;
                            }
                        });
                        log(qq.format("'{}' is {} able to be rendered in this browser", name, previewable ? "" : "NOT"));
                        if (!previewable) {
                            identifier.failure();
                        }
                    }, function() {
                        log("Error reading file w/ name '" + name + "'.  Not able to be rendered in this browser.");
                        identifier.failure();
                    });
                } else {
                    identifier.failure();
                }
                return identifier;
            },
            isPreviewableSync: function() {
                var fileMime = fileOrBlob.type, isRecognizedImage = qq.indexOf(Object.keys(this.PREVIEWABLE_MIME_TYPES), fileMime) >= 0, previewable = false, name = fileOrBlob.name === undefined ? "blob" : fileOrBlob.name;
                if (isRecognizedImage) {
                    if (fileMime === "image/tiff") {
                        previewable = qq.supportedFeatures.tiffPreviews;
                    } else {
                        previewable = true;
                    }
                }
                !previewable && log(name + " is not previewable in this browser per the blob's type attr");
                return previewable;
            }
        });
    };
    qq.Identify.prototype.PREVIEWABLE_MIME_TYPES = {
        "image/jpeg": "ffd8ff",
        "image/gif": "474946",
        "image/png": "89504e",
        "image/bmp": "424d",
        "image/tiff": [ "49492a00", "4d4d002a" ]
    };
    qq.ImageValidation = function(blob, log) {
        "use strict";
        function hasNonZeroLimits(limits) {
            var atLeastOne = false;
            qq.each(limits, function(limit, value) {
                if (value > 0) {
                    atLeastOne = true;
                    return false;
                }
            });
            return atLeastOne;
        }
        function getWidthHeight() {
            var sizeDetermination = new qq.Promise();
            new qq.Identify(blob, log).isPreviewable().then(function() {
                var image = new Image(), url = window.URL && window.URL.createObjectURL ? window.URL : window.webkitURL && window.webkitURL.createObjectURL ? window.webkitURL : null;
                if (url) {
                    image.onerror = function() {
                        log("Cannot determine dimensions for image.  May be too large.", "error");
                        sizeDetermination.failure();
                    };
                    image.onload = function() {
                        sizeDetermination.success({
                            width: this.width,
                            height: this.height
                        });
                    };
                    image.src = url.createObjectURL(blob);
                } else {
                    log("No createObjectURL function available to generate image URL!", "error");
                    sizeDetermination.failure();
                }
            }, sizeDetermination.failure);
            return sizeDetermination;
        }
        function getFailingLimit(limits, dimensions) {
            var failingLimit;
            qq.each(limits, function(limitName, limitValue) {
                if (limitValue > 0) {
                    var limitMatcher = /(max|min)(Width|Height)/.exec(limitName), dimensionPropName = limitMatcher[2].charAt(0).toLowerCase() + limitMatcher[2].slice(1), actualValue = dimensions[dimensionPropName];
                    switch (limitMatcher[1]) {
                      case "min":
                        if (actualValue < limitValue) {
                            failingLimit = limitName;
                            return false;
                        }
                        break;

                      case "max":
                        if (actualValue > limitValue) {
                            failingLimit = limitName;
                            return false;
                        }
                        break;
                    }
                }
            });
            return failingLimit;
        }
        this.validate = function(limits) {
            var validationEffort = new qq.Promise();
            log("Attempting to validate image.");
            if (hasNonZeroLimits(limits)) {
                getWidthHeight().then(function(dimensions) {
                    var failingLimit = getFailingLimit(limits, dimensions);
                    if (failingLimit) {
                        validationEffort.failure(failingLimit);
                    } else {
                        validationEffort.success();
                    }
                }, validationEffort.success);
            } else {
                validationEffort.success();
            }
            return validationEffort;
        };
    };
    qq.Session = function(spec) {
        "use strict";
        var options = {
            endpoint: null,
            params: {},
            customHeaders: {},
            cors: {},
            addFileRecord: function(sessionData) {},
            log: function(message, level) {}
        };
        qq.extend(options, spec, true);
        function isJsonResponseValid(response) {
            if (qq.isArray(response)) {
                return true;
            }
            options.log("Session response is not an array.", "error");
        }
        function handleFileItems(fileItems, success, xhrOrXdr, promise) {
            var someItemsIgnored = false;
            success = success && isJsonResponseValid(fileItems);
            if (success) {
                qq.each(fileItems, function(idx, fileItem) {
                    if (fileItem.uuid == null) {
                        someItemsIgnored = true;
                        options.log(qq.format("Session response item {} did not include a valid UUID - ignoring.", idx), "error");
                    } else if (fileItem.name == null) {
                        someItemsIgnored = true;
                        options.log(qq.format("Session response item {} did not include a valid name - ignoring.", idx), "error");
                    } else {
                        try {
                            options.addFileRecord(fileItem);
                            return true;
                        } catch (err) {
                            someItemsIgnored = true;
                            options.log(err.message, "error");
                        }
                    }
                    return false;
                });
            }
            promise[success && !someItemsIgnored ? "success" : "failure"](fileItems, xhrOrXdr);
        }
        this.refresh = function() {
            var refreshEffort = new qq.Promise(), refreshCompleteCallback = function(response, success, xhrOrXdr) {
                handleFileItems(response, success, xhrOrXdr, refreshEffort);
            }, requesterOptions = qq.extend({}, options), requester = new qq.SessionAjaxRequester(qq.extend(requesterOptions, {
                onComplete: refreshCompleteCallback
            }));
            requester.queryServer();
            return refreshEffort;
        };
    };
    qq.SessionAjaxRequester = function(spec) {
        "use strict";
        var requester, options = {
            endpoint: null,
            customHeaders: {},
            params: {},
            cors: {
                expected: false,
                sendCredentials: false
            },
            onComplete: function(response, success, xhrOrXdr) {},
            log: function(str, level) {}
        };
        qq.extend(options, spec);
        function onComplete(id, xhrOrXdr, isError) {
            var response = null;
            if (xhrOrXdr.responseText != null) {
                try {
                    response = qq.parseJson(xhrOrXdr.responseText);
                } catch (err) {
                    options.log("Problem parsing session response: " + err.message, "error");
                    isError = true;
                }
            }
            options.onComplete(response, !isError, xhrOrXdr);
        }
        requester = qq.extend(this, new qq.AjaxRequester({
            acceptHeader: "application/json",
            validMethods: [ "GET" ],
            method: "GET",
            endpointStore: {
                get: function() {
                    return options.endpoint;
                }
            },
            customHeaders: options.customHeaders,
            log: options.log,
            onComplete: onComplete,
            cors: options.cors
        }));
        qq.extend(this, {
            queryServer: function() {
                var params = qq.extend({}, options.params);
                options.log("Session query request.");
                requester.initTransport("sessionRefresh").withParams(params).withCacheBuster().send();
            }
        });
    };
    qq.Scaler = function(spec, log) {
        "use strict";
        var self = this, customResizeFunction = spec.customResizer, includeOriginal = spec.sendOriginal, orient = spec.orient, defaultType = spec.defaultType, defaultQuality = spec.defaultQuality / 100, failedToScaleText = spec.failureText, includeExif = spec.includeExif, sizes = this._getSortedSizes(spec.sizes);
        qq.extend(this, {
            enabled: qq.supportedFeatures.scaling && sizes.length > 0,
            getFileRecords: function(originalFileUuid, originalFileName, originalBlobOrBlobData) {
                var self = this, records = [], originalBlob = originalBlobOrBlobData.blob ? originalBlobOrBlobData.blob : originalBlobOrBlobData, identifier = new qq.Identify(originalBlob, log);
                if (identifier.isPreviewableSync()) {
                    qq.each(sizes, function(idx, sizeRecord) {
                        var outputType = self._determineOutputType({
                            defaultType: defaultType,
                            requestedType: sizeRecord.type,
                            refType: originalBlob.type
                        });
                        records.push({
                            uuid: qq.getUniqueId(),
                            name: self._getName(originalFileName, {
                                name: sizeRecord.name,
                                type: outputType,
                                refType: originalBlob.type
                            }),
                            blob: new qq.BlobProxy(originalBlob, qq.bind(self._generateScaledImage, self, {
                                customResizeFunction: customResizeFunction,
                                maxSize: sizeRecord.maxSize,
                                orient: orient,
                                type: outputType,
                                quality: defaultQuality,
                                failedText: failedToScaleText,
                                includeExif: includeExif,
                                log: log
                            }))
                        });
                    });
                    records.push({
                        uuid: originalFileUuid,
                        name: originalFileName,
                        size: originalBlob.size,
                        blob: includeOriginal ? originalBlob : null
                    });
                } else {
                    records.push({
                        uuid: originalFileUuid,
                        name: originalFileName,
                        size: originalBlob.size,
                        blob: originalBlob
                    });
                }
                return records;
            },
            handleNewFile: function(file, name, uuid, size, fileList, batchId, uuidParamName, api) {
                var self = this, buttonId = file.qqButtonId || file.blob && file.blob.qqButtonId, scaledIds = [], originalId = null, addFileToHandler = api.addFileToHandler, uploadData = api.uploadData, paramsStore = api.paramsStore, proxyGroupId = qq.getUniqueId();
                qq.each(self.getFileRecords(uuid, name, file), function(idx, record) {
                    var blobSize = record.size, id;
                    if (record.blob instanceof qq.BlobProxy) {
                        blobSize = -1;
                    }
                    id = uploadData.addFile({
                        uuid: record.uuid,
                        name: record.name,
                        size: blobSize,
                        batchId: batchId,
                        proxyGroupId: proxyGroupId
                    });
                    if (record.blob instanceof qq.BlobProxy) {
                        scaledIds.push(id);
                    } else {
                        originalId = id;
                    }
                    if (record.blob) {
                        addFileToHandler(id, record.blob);
                        fileList.push({
                            id: id,
                            file: record.blob
                        });
                    } else {
                        uploadData.setStatus(id, qq.status.REJECTED);
                    }
                });
                if (originalId !== null) {
                    qq.each(scaledIds, function(idx, scaledId) {
                        var params = {
                            qqparentuuid: uploadData.retrieve({
                                id: originalId
                            }).uuid,
                            qqparentsize: uploadData.retrieve({
                                id: originalId
                            }).size
                        };
                        params[uuidParamName] = uploadData.retrieve({
                            id: scaledId
                        }).uuid;
                        uploadData.setParentId(scaledId, originalId);
                        paramsStore.addReadOnly(scaledId, params);
                    });
                    if (scaledIds.length) {
                        (function() {
                            var param = {};
                            param[uuidParamName] = uploadData.retrieve({
                                id: originalId
                            }).uuid;
                            paramsStore.addReadOnly(originalId, param);
                        })();
                    }
                }
            }
        });
    };
    qq.extend(qq.Scaler.prototype, {
        scaleImage: function(id, specs, api) {
            "use strict";
            if (!qq.supportedFeatures.scaling) {
                throw new qq.Error("Scaling is not supported in this browser!");
            }
            var scalingEffort = new qq.Promise(), log = api.log, file = api.getFile(id), uploadData = api.uploadData.retrieve({
                id: id
            }), name = uploadData && uploadData.name, uuid = uploadData && uploadData.uuid, scalingOptions = {
                customResizer: specs.customResizer,
                sendOriginal: false,
                orient: specs.orient,
                defaultType: specs.type || null,
                defaultQuality: specs.quality,
                failedToScaleText: "Unable to scale",
                sizes: [ {
                    name: "",
                    maxSize: specs.maxSize
                } ]
            }, scaler = new qq.Scaler(scalingOptions, log);
            if (!qq.Scaler || !qq.supportedFeatures.imagePreviews || !file) {
                scalingEffort.failure();
                log("Could not generate requested scaled image for " + id + ".  " + "Scaling is either not possible in this browser, or the file could not be located.", "error");
            } else {
                qq.bind(function() {
                    var record = scaler.getFileRecords(uuid, name, file)[0];
                    if (record && record.blob instanceof qq.BlobProxy) {
                        record.blob.create().then(scalingEffort.success, scalingEffort.failure);
                    } else {
                        log(id + " is not a scalable image!", "error");
                        scalingEffort.failure();
                    }
                }, this)();
            }
            return scalingEffort;
        },
        _determineOutputType: function(spec) {
            "use strict";
            var requestedType = spec.requestedType, defaultType = spec.defaultType, referenceType = spec.refType;
            if (!defaultType && !requestedType) {
                if (referenceType !== "image/jpeg") {
                    return "image/png";
                }
                return referenceType;
            }
            if (!requestedType) {
                return defaultType;
            }
            if (qq.indexOf(Object.keys(qq.Identify.prototype.PREVIEWABLE_MIME_TYPES), requestedType) >= 0) {
                if (requestedType === "image/tiff") {
                    return qq.supportedFeatures.tiffPreviews ? requestedType : defaultType;
                }
                return requestedType;
            }
            return defaultType;
        },
        _getName: function(originalName, scaledVersionProperties) {
            "use strict";
            var startOfExt = originalName.lastIndexOf("."), versionType = scaledVersionProperties.type || "image/png", referenceType = scaledVersionProperties.refType, scaledName = "", scaledExt = qq.getExtension(originalName), nameAppendage = "";
            if (scaledVersionProperties.name && scaledVersionProperties.name.trim().length) {
                nameAppendage = " (" + scaledVersionProperties.name + ")";
            }
            if (startOfExt >= 0) {
                scaledName = originalName.substr(0, startOfExt);
                if (referenceType !== versionType) {
                    scaledExt = versionType.split("/")[1];
                }
                scaledName += nameAppendage + "." + scaledExt;
            } else {
                scaledName = originalName + nameAppendage;
            }
            return scaledName;
        },
        _getSortedSizes: function(sizes) {
            "use strict";
            sizes = qq.extend([], sizes);
            return sizes.sort(function(a, b) {
                if (a.maxSize > b.maxSize) {
                    return 1;
                }
                if (a.maxSize < b.maxSize) {
                    return -1;
                }
                return 0;
            });
        },
        _generateScaledImage: function(spec, sourceFile) {
            "use strict";
            var self = this, customResizeFunction = spec.customResizeFunction, log = spec.log, maxSize = spec.maxSize, orient = spec.orient, type = spec.type, quality = spec.quality, failedText = spec.failedText, includeExif = spec.includeExif && sourceFile.type === "image/jpeg" && type === "image/jpeg", scalingEffort = new qq.Promise(), imageGenerator = new qq.ImageGenerator(log), canvas = document.createElement("canvas");
            log("Attempting to generate scaled version for " + sourceFile.name);
            imageGenerator.generate(sourceFile, canvas, {
                maxSize: maxSize,
                orient: orient,
                customResizeFunction: customResizeFunction
            }).then(function() {
                var scaledImageDataUri = canvas.toDataURL(type, quality), signalSuccess = function() {
                    log("Success generating scaled version for " + sourceFile.name);
                    var blob = qq.dataUriToBlob(scaledImageDataUri);
                    scalingEffort.success(blob);
                };
                if (includeExif) {
                    self._insertExifHeader(sourceFile, scaledImageDataUri, log).then(function(scaledImageDataUriWithExif) {
                        scaledImageDataUri = scaledImageDataUriWithExif;
                        signalSuccess();
                    }, function() {
                        log("Problem inserting EXIF header into scaled image.  Using scaled image w/out EXIF data.", "error");
                        signalSuccess();
                    });
                } else {
                    signalSuccess();
                }
            }, function() {
                log("Failed attempt to generate scaled version for " + sourceFile.name, "error");
                scalingEffort.failure(failedText);
            });
            return scalingEffort;
        },
        _insertExifHeader: function(originalImage, scaledImageDataUri, log) {
            "use strict";
            var reader = new FileReader(), insertionEffort = new qq.Promise(), originalImageDataUri = "";
            reader.onload = function() {
                originalImageDataUri = reader.result;
                insertionEffort.success(qq.ExifRestorer.restore(originalImageDataUri, scaledImageDataUri));
            };
            reader.onerror = function() {
                log("Problem reading " + originalImage.name + " during attempt to transfer EXIF data to scaled version.", "error");
                insertionEffort.failure();
            };
            reader.readAsDataURL(originalImage);
            return insertionEffort;
        },
        _dataUriToBlob: function(dataUri) {
            "use strict";
            var byteString, mimeString, arrayBuffer, intArray;
            if (dataUri.split(",")[0].indexOf("base64") >= 0) {
                byteString = atob(dataUri.split(",")[1]);
            } else {
                byteString = decodeURI(dataUri.split(",")[1]);
            }
            mimeString = dataUri.split(",")[0].split(":")[1].split(";")[0];
            arrayBuffer = new ArrayBuffer(byteString.length);
            intArray = new Uint8Array(arrayBuffer);
            qq.each(byteString, function(idx, character) {
                intArray[idx] = character.charCodeAt(0);
            });
            return this._createBlob(arrayBuffer, mimeString);
        },
        _createBlob: function(data, mime) {
            "use strict";
            var BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, blobBuilder = BlobBuilder && new BlobBuilder();
            if (blobBuilder) {
                blobBuilder.append(data);
                return blobBuilder.getBlob(mime);
            } else {
                return new Blob([ data ], {
                    type: mime
                });
            }
        }
    });
    qq.ExifRestorer = function() {
        var ExifRestorer = {};
        ExifRestorer.KEY_STR = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
        ExifRestorer.encode64 = function(input) {
            var output = "", chr1, chr2, chr3 = "", enc1, enc2, enc3, enc4 = "", i = 0;
            do {
                chr1 = input[i++];
                chr2 = input[i++];
                chr3 = input[i++];
                enc1 = chr1 >> 2;
                enc2 = (chr1 & 3) << 4 | chr2 >> 4;
                enc3 = (chr2 & 15) << 2 | chr3 >> 6;
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + this.KEY_STR.charAt(enc1) + this.KEY_STR.charAt(enc2) + this.KEY_STR.charAt(enc3) + this.KEY_STR.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
            return output;
        };
        ExifRestorer.restore = function(origFileBase64, resizedFileBase64) {
            var expectedBase64Header = "data:image/jpeg;base64,";
            if (!origFileBase64.match(expectedBase64Header)) {
                return resizedFileBase64;
            }
            var rawImage = this.decode64(origFileBase64.replace(expectedBase64Header, ""));
            var segments = this.slice2Segments(rawImage);
            var image = this.exifManipulation(resizedFileBase64, segments);
            return expectedBase64Header + this.encode64(image);
        };
        ExifRestorer.exifManipulation = function(resizedFileBase64, segments) {
            var exifArray = this.getExifArray(segments), newImageArray = this.insertExif(resizedFileBase64, exifArray), aBuffer = new Uint8Array(newImageArray);
            return aBuffer;
        };
        ExifRestorer.getExifArray = function(segments) {
            var seg;
            for (var x = 0; x < segments.length; x++) {
                seg = segments[x];
                if (seg[0] == 255 & seg[1] == 225) {
                    return seg;
                }
            }
            return [];
        };
        ExifRestorer.insertExif = function(resizedFileBase64, exifArray) {
            var imageData = resizedFileBase64.replace("data:image/jpeg;base64,", ""), buf = this.decode64(imageData), separatePoint = buf.indexOf(255, 3), mae = buf.slice(0, separatePoint), ato = buf.slice(separatePoint), array = mae;
            array = array.concat(exifArray);
            array = array.concat(ato);
            return array;
        };
        ExifRestorer.slice2Segments = function(rawImageArray) {
            var head = 0, segments = [];
            while (1) {
                if (rawImageArray[head] == 255 & rawImageArray[head + 1] == 218) {
                    break;
                }
                if (rawImageArray[head] == 255 & rawImageArray[head + 1] == 216) {
                    head += 2;
                } else {
                    var length = rawImageArray[head + 2] * 256 + rawImageArray[head + 3], endPoint = head + length + 2, seg = rawImageArray.slice(head, endPoint);
                    segments.push(seg);
                    head = endPoint;
                }
                if (head > rawImageArray.length) {
                    break;
                }
            }
            return segments;
        };
        ExifRestorer.decode64 = function(input) {
            var output = "", chr1, chr2, chr3 = "", enc1, enc2, enc3, enc4 = "", i = 0, buf = [];
            var base64test = /[^A-Za-z0-9\+\/\=]/g;
            if (base64test.exec(input)) {
                throw new Error("There were invalid base64 characters in the input text.  " + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='");
            }
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            do {
                enc1 = this.KEY_STR.indexOf(input.charAt(i++));
                enc2 = this.KEY_STR.indexOf(input.charAt(i++));
                enc3 = this.KEY_STR.indexOf(input.charAt(i++));
                enc4 = this.KEY_STR.indexOf(input.charAt(i++));
                chr1 = enc1 << 2 | enc2 >> 4;
                chr2 = (enc2 & 15) << 4 | enc3 >> 2;
                chr3 = (enc3 & 3) << 6 | enc4;
                buf.push(chr1);
                if (enc3 != 64) {
                    buf.push(chr2);
                }
                if (enc4 != 64) {
                    buf.push(chr3);
                }
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);
            return buf;
        };
        return ExifRestorer;
    }();
    qq.TotalProgress = function(callback, getSize) {
        "use strict";
        var perFileProgress = {}, totalLoaded = 0, totalSize = 0, lastLoadedSent = -1, lastTotalSent = -1, callbackProxy = function(loaded, total) {
            if (loaded !== lastLoadedSent || total !== lastTotalSent) {
                callback(loaded, total);
            }
            lastLoadedSent = loaded;
            lastTotalSent = total;
        }, noRetryableFiles = function(failed, retryable) {
            var none = true;
            qq.each(failed, function(idx, failedId) {
                if (qq.indexOf(retryable, failedId) >= 0) {
                    none = false;
                    return false;
                }
            });
            return none;
        }, onCancel = function(id) {
            updateTotalProgress(id, -1, -1);
            delete perFileProgress[id];
        }, onAllComplete = function(successful, failed, retryable) {
            if (failed.length === 0 || noRetryableFiles(failed, retryable)) {
                callbackProxy(totalSize, totalSize);
                this.reset();
            }
        }, onNew = function(id) {
            var size = getSize(id);
            if (size > 0) {
                updateTotalProgress(id, 0, size);
                perFileProgress[id] = {
                    loaded: 0,
                    total: size
                };
            }
        }, updateTotalProgress = function(id, newLoaded, newTotal) {
            var oldLoaded = perFileProgress[id] ? perFileProgress[id].loaded : 0, oldTotal = perFileProgress[id] ? perFileProgress[id].total : 0;
            if (newLoaded === -1 && newTotal === -1) {
                totalLoaded -= oldLoaded;
                totalSize -= oldTotal;
            } else {
                if (newLoaded) {
                    totalLoaded += newLoaded - oldLoaded;
                }
                if (newTotal) {
                    totalSize += newTotal - oldTotal;
                }
            }
            callbackProxy(totalLoaded, totalSize);
        };
        qq.extend(this, {
            onAllComplete: onAllComplete,
            onStatusChange: function(id, oldStatus, newStatus) {
                if (newStatus === qq.status.CANCELED || newStatus === qq.status.REJECTED) {
                    onCancel(id);
                } else if (newStatus === qq.status.SUBMITTING) {
                    onNew(id);
                }
            },
            onIndividualProgress: function(id, loaded, total) {
                updateTotalProgress(id, loaded, total);
                perFileProgress[id] = {
                    loaded: loaded,
                    total: total
                };
            },
            onNewSize: function(id) {
                onNew(id);
            },
            reset: function() {
                perFileProgress = {};
                totalLoaded = 0;
                totalSize = 0;
            }
        });
    };
    qq.PasteSupport = function(o) {
        "use strict";
        var options, detachPasteHandler;
        options = {
            targetElement: null,
            callbacks: {
                log: function(message, level) {},
                pasteReceived: function(blob) {}
            }
        };
        function isImage(item) {
            return item.type && item.type.indexOf("image/") === 0;
        }
        function registerPasteHandler() {
            detachPasteHandler = qq(options.targetElement).attach("paste", function(event) {
                var clipboardData = event.clipboardData;
                if (clipboardData) {
                    qq.each(clipboardData.items, function(idx, item) {
                        if (isImage(item)) {
                            var blob = item.getAsFile();
                            options.callbacks.pasteReceived(blob);
                        }
                    });
                }
            });
        }
        function unregisterPasteHandler() {
            if (detachPasteHandler) {
                detachPasteHandler();
            }
        }
        qq.extend(options, o);
        registerPasteHandler();
        qq.extend(this, {
            reset: function() {
                unregisterPasteHandler();
            }
        });
    };
    qq.FormSupport = function(options, startUpload, log) {
        "use strict";
        var self = this, interceptSubmit = options.interceptSubmit, formEl = options.element, autoUpload = options.autoUpload;
        qq.extend(this, {
            newEndpoint: null,
            newAutoUpload: autoUpload,
            attachedToForm: false,
            getFormInputsAsObject: function() {
                if (formEl == null) {
                    return null;
                }
                return self._form2Obj(formEl);
            }
        });
        function determineNewEndpoint(formEl) {
            if (formEl.getAttribute("action")) {
                self.newEndpoint = formEl.getAttribute("action");
            }
        }
        function validateForm(formEl, nativeSubmit) {
            if (formEl.checkValidity && !formEl.checkValidity()) {
                log("Form did not pass validation checks - will not upload.", "error");
                nativeSubmit();
            } else {
                return true;
            }
        }
        function maybeUploadOnSubmit(formEl) {
            var nativeSubmit = formEl.submit;
            qq(formEl).attach("submit", function(event) {
                event = event || window.event;
                if (event.preventDefault) {
                    event.preventDefault();
                } else {
                    event.returnValue = false;
                }
                validateForm(formEl, nativeSubmit) && startUpload();
            });
            formEl.submit = function() {
                validateForm(formEl, nativeSubmit) && startUpload();
            };
        }
        function determineFormEl(formEl) {
            if (formEl) {
                if (qq.isString(formEl)) {
                    formEl = document.getElementById(formEl);
                }
                if (formEl) {
                    log("Attaching to form element.");
                    determineNewEndpoint(formEl);
                    interceptSubmit && maybeUploadOnSubmit(formEl);
                }
            }
            return formEl;
        }
        formEl = determineFormEl(formEl);
        this.attachedToForm = !!formEl;
    };
    qq.extend(qq.FormSupport.prototype, {
        _form2Obj: function(form) {
            "use strict";
            var obj = {}, notIrrelevantType = function(type) {
                var irrelevantTypes = [ "button", "image", "reset", "submit" ];
                return qq.indexOf(irrelevantTypes, type.toLowerCase()) < 0;
            }, radioOrCheckbox = function(type) {
                return qq.indexOf([ "checkbox", "radio" ], type.toLowerCase()) >= 0;
            }, ignoreValue = function(el) {
                if (radioOrCheckbox(el.type) && !el.checked) {
                    return true;
                }
                return el.disabled && el.type.toLowerCase() !== "hidden";
            }, selectValue = function(select) {
                var value = null;
                qq.each(qq(select).children(), function(idx, child) {
                    if (child.tagName.toLowerCase() === "option" && child.selected) {
                        value = child.value;
                        return false;
                    }
                });
                return value;
            };
            qq.each(form.elements, function(idx, el) {
                if ((qq.isInput(el, true) || el.tagName.toLowerCase() === "textarea") && notIrrelevantType(el.type) && !ignoreValue(el)) {
                    obj[el.name] = el.value;
                } else if (el.tagName.toLowerCase() === "select" && !ignoreValue(el)) {
                    var value = selectValue(el);
                    if (value !== null) {
                        obj[el.name] = value;
                    }
                }
            });
            return obj;
        }
    });
    qq.traditional = qq.traditional || {};
    qq.traditional.FormUploadHandler = function(options, proxy) {
        "use strict";
        var handler = this, getName = proxy.getName, getUuid = proxy.getUuid, log = proxy.log;
        function getIframeContentJson(id, iframe) {
            var response, doc, innerHtml;
            try {
                doc = iframe.contentDocument || iframe.contentWindow.document;
                innerHtml = doc.body.innerHTML;
                log("converting iframe's innerHTML to JSON");
                log("innerHTML = " + innerHtml);
                if (innerHtml && innerHtml.match(/^<pre/i)) {
                    innerHtml = doc.body.firstChild.firstChild.nodeValue;
                }
                response = handler._parseJsonResponse(innerHtml);
            } catch (error) {
                log("Error when attempting to parse form upload response (" + error.message + ")", "error");
                response = {
                    success: false
                };
            }
            return response;
        }
        function createForm(id, iframe) {
            var params = options.paramsStore.get(id), method = options.method.toLowerCase() === "get" ? "GET" : "POST", endpoint = options.endpointStore.get(id), name = getName(id);
            params[options.uuidName] = getUuid(id);
            params[options.filenameParam] = name;
            return handler._initFormForUpload({
                method: method,
                endpoint: endpoint,
                params: params,
                paramsInBody: options.paramsInBody,
                targetName: iframe.name
            });
        }
        this.uploadFile = function(id) {
            var input = handler.getInput(id), iframe = handler._createIframe(id), promise = new qq.Promise(), form;
            form = createForm(id, iframe);
            form.appendChild(input);
            handler._attachLoadEvent(iframe, function(responseFromMessage) {
                log("iframe loaded");
                var response = responseFromMessage ? responseFromMessage : getIframeContentJson(id, iframe);
                handler._detachLoadEvent(id);
                if (!options.cors.expected) {
                    qq(iframe).remove();
                }
                if (response.success) {
                    promise.success(response);
                } else {
                    promise.failure(response);
                }
            });
            log("Sending upload request for " + id);
            form.submit();
            qq(form).remove();
            return promise;
        };
        qq.extend(this, new qq.FormUploadHandler({
            options: {
                isCors: options.cors.expected,
                inputName: options.inputName
            },
            proxy: {
                onCancel: options.onCancel,
                getName: getName,
                getUuid: getUuid,
                log: log
            }
        }));
    };
    qq.traditional = qq.traditional || {};
    qq.traditional.XhrUploadHandler = function(spec, proxy) {
        "use strict";
        var handler = this, getName = proxy.getName, getSize = proxy.getSize, getUuid = proxy.getUuid, log = proxy.log, multipart = spec.forceMultipart || spec.paramsInBody, addChunkingSpecificParams = function(id, params, chunkData) {
            var size = getSize(id), name = getName(id);
            if (!spec.omitDefaultParams) {
                params[spec.chunking.paramNames.partIndex] = chunkData.part;
                params[spec.chunking.paramNames.partByteOffset] = chunkData.start;
                params[spec.chunking.paramNames.chunkSize] = chunkData.size;
                params[spec.chunking.paramNames.totalParts] = chunkData.count;
                params[spec.totalFileSizeName] = size;
            }
            if (multipart && !spec.omitDefaultParams) {
                params[spec.filenameParam] = name;
            }
        }, allChunksDoneRequester = new qq.traditional.AllChunksDoneAjaxRequester({
            cors: spec.cors,
            endpoint: spec.chunking.success.endpoint,
            headers: spec.chunking.success.headers,
            jsonPayload: spec.chunking.success.jsonPayload,
            log: log,
            method: spec.chunking.success.method,
            params: spec.chunking.success.params
        }), createReadyStateChangedHandler = function(id, xhr) {
            var promise = new qq.Promise();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    var result = onUploadOrChunkComplete(id, xhr);
                    if (result.success) {
                        promise.success(result.response, xhr);
                    } else {
                        promise.failure(result.response, xhr);
                    }
                }
            };
            return promise;
        }, getChunksCompleteParams = function(id) {
            var params = spec.paramsStore.get(id), name = getName(id), size = getSize(id);
            params[spec.uuidName] = getUuid(id);
            params[spec.filenameParam] = name;
            params[spec.totalFileSizeName] = size;
            params[spec.chunking.paramNames.totalParts] = handler._getTotalChunks(id);
            return params;
        }, isErrorUploadResponse = function(xhr, response) {
            return qq.indexOf([ 200, 201, 202, 203, 204 ], xhr.status) < 0 || spec.requireSuccessJson && !response.success || response.reset;
        }, onUploadOrChunkComplete = function(id, xhr) {
            var response;
            log("xhr - server response received for " + id);
            log("responseText = " + xhr.responseText);
            response = parseResponse(true, xhr);
            return {
                success: !isErrorUploadResponse(xhr, response),
                response: response
            };
        }, parseResponse = function(upload, xhr) {
            var response = {};
            try {
                log(qq.format("Received response status {} with body: {}", xhr.status, xhr.responseText));
                response = qq.parseJson(xhr.responseText);
            } catch (error) {
                upload && spec.requireSuccessJson && log("Error when attempting to parse xhr response text (" + error.message + ")", "error");
            }
            return response;
        }, sendChunksCompleteRequest = function(id) {
            var promise = new qq.Promise();
            allChunksDoneRequester.complete(id, handler._createXhr(id), getChunksCompleteParams(id), spec.customHeaders.get(id)).then(function(xhr) {
                promise.success(parseResponse(false, xhr), xhr);
            }, function(xhr) {
                promise.failure(parseResponse(false, xhr), xhr);
            });
            return promise;
        }, setParamsAndGetEntityToSend = function(entityToSendParams) {
            var fileOrBlob = entityToSendParams.fileOrBlob;
            var id = entityToSendParams.id;
            var xhr = entityToSendParams.xhr;
            var xhrOverrides = entityToSendParams.xhrOverrides || {};
            var customParams = entityToSendParams.customParams || {};
            var defaultParams = entityToSendParams.params || {};
            var xhrOverrideParams = xhrOverrides.params || {};
            var params;
            var formData = multipart ? new FormData() : null, method = xhrOverrides.method || spec.method, endpoint = xhrOverrides.endpoint || spec.endpointStore.get(id), name = getName(id), size = getSize(id);
            if (spec.omitDefaultParams) {
                params = qq.extend({}, customParams);
                qq.extend(params, xhrOverrideParams);
            } else {
                params = qq.extend({}, customParams);
                qq.extend(params, xhrOverrideParams);
                qq.extend(params, defaultParams);
                params[spec.uuidName] = getUuid(id);
                params[spec.filenameParam] = name;
                if (multipart) {
                    params[spec.totalFileSizeName] = size;
                } else if (!spec.paramsInBody) {
                    params[spec.inputName] = name;
                }
            }
            if (!spec.paramsInBody) {
                endpoint = qq.obj2url(params, endpoint);
            }
            xhr.open(method, endpoint, true);
            if (spec.cors.expected && spec.cors.sendCredentials) {
                xhr.withCredentials = true;
            }
            if (multipart) {
                if (spec.paramsInBody) {
                    qq.obj2FormData(params, formData);
                }
                formData.append(spec.inputName, fileOrBlob);
                return formData;
            }
            return fileOrBlob;
        }, setUploadHeaders = function(headersOptions) {
            var headerOverrides = headersOptions.headerOverrides;
            var id = headersOptions.id;
            var xhr = headersOptions.xhr;
            if (headerOverrides) {
                qq.each(headerOverrides, function(headerName, headerValue) {
                    xhr.setRequestHeader(headerName, headerValue);
                });
            } else {
                var extraHeaders = spec.customHeaders.get(id), fileOrBlob = handler.getFile(id);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                xhr.setRequestHeader("Cache-Control", "no-cache");
                if (!multipart) {
                    xhr.setRequestHeader("Content-Type", "application/octet-stream");
                    xhr.setRequestHeader("X-Mime-Type", fileOrBlob.type);
                }
                qq.each(extraHeaders, function(name, val) {
                    xhr.setRequestHeader(name, val);
                });
            }
        };
        qq.extend(this, {
            uploadChunk: function(uploadChunkParams) {
                var id = uploadChunkParams.id;
                var chunkIdx = uploadChunkParams.chunkIdx;
                var overrides = uploadChunkParams.overrides || {};
                var resuming = uploadChunkParams.resuming;
                var chunkData = handler._getChunkData(id, chunkIdx), xhr = handler._createXhr(id, chunkIdx), promise, toSend, customParams, params = {};
                promise = createReadyStateChangedHandler(id, xhr);
                handler._registerProgressHandler(id, chunkIdx, chunkData.size);
                customParams = spec.paramsStore.get(id);
                addChunkingSpecificParams(id, params, chunkData);
                if (resuming) {
                    params[spec.resume.paramNames.resuming] = true;
                }
                toSend = setParamsAndGetEntityToSend({
                    fileOrBlob: chunkData.blob,
                    id: id,
                    customParams: customParams,
                    params: params,
                    xhr: xhr,
                    xhrOverrides: overrides
                });
                setUploadHeaders({
                    headerOverrides: overrides.headers,
                    id: id,
                    xhr: xhr
                });
                xhr.send(toSend);
                return promise;
            },
            uploadFile: function(id) {
                var fileOrBlob = handler.getFile(id), promise, xhr, customParams, toSend;
                xhr = handler._createXhr(id);
                handler._registerProgressHandler(id);
                promise = createReadyStateChangedHandler(id, xhr);
                customParams = spec.paramsStore.get(id);
                toSend = setParamsAndGetEntityToSend({
                    fileOrBlob: fileOrBlob,
                    id: id,
                    customParams: customParams,
                    xhr: xhr
                });
                setUploadHeaders({
                    id: id,
                    xhr: xhr
                });
                xhr.send(toSend);
                return promise;
            }
        });
        qq.extend(this, new qq.XhrUploadHandler({
            options: qq.extend({
                namespace: "traditional"
            }, spec),
            proxy: qq.extend({
                getEndpoint: spec.endpointStore.get
            }, proxy)
        }));
        qq.override(this, function(super_) {
            return {
                finalizeChunks: function(id) {
                    proxy.onFinalizing(id);
                    if (spec.chunking.success.endpoint) {
                        return sendChunksCompleteRequest(id);
                    } else {
                        return super_.finalizeChunks(id, qq.bind(parseResponse, this, true));
                    }
                }
            };
        });
    };
    qq.traditional.AllChunksDoneAjaxRequester = function(o) {
        "use strict";
        var requester, options = {
            cors: {
                allowXdr: false,
                expected: false,
                sendCredentials: false
            },
            endpoint: null,
            log: function(str, level) {},
            method: "POST"
        }, promises = {}, endpointHandler = {
            get: function(id) {
                if (qq.isFunction(options.endpoint)) {
                    return options.endpoint(id);
                }
                return options.endpoint;
            }
        };
        qq.extend(options, o);
        requester = qq.extend(this, new qq.AjaxRequester({
            acceptHeader: "application/json",
            contentType: options.jsonPayload ? "application/json" : "application/x-www-form-urlencoded",
            validMethods: [ options.method ],
            method: options.method,
            endpointStore: endpointHandler,
            allowXRequestedWithAndCacheControl: false,
            cors: options.cors,
            log: options.log,
            onComplete: function(id, xhr, isError) {
                var promise = promises[id];
                delete promises[id];
                if (isError) {
                    promise.failure(xhr);
                } else {
                    promise.success(xhr);
                }
            }
        }));
        qq.extend(this, {
            complete: function(id, xhr, params, headers) {
                var promise = new qq.Promise();
                options.log("Submitting All Chunks Done request for " + id);
                promises[id] = promise;
                requester.initTransport(id).withParams(options.params(id) || params).withHeaders(options.headers(id) || headers).send(xhr);
                return promise;
            }
        });
    };
    qq.DragAndDrop = function(o) {
        "use strict";
        var options, HIDE_ZONES_EVENT_NAME = "qq-hidezones", HIDE_BEFORE_ENTER_ATTR = "qq-hide-dropzone", uploadDropZones = [], droppedFiles = [], disposeSupport = new qq.DisposeSupport();
        options = {
            dropZoneElements: [],
            allowMultipleItems: true,
            classes: {
                dropActive: null
            },
            callbacks: new qq.DragAndDrop.callbacks()
        };
        qq.extend(options, o, true);
        function uploadDroppedFiles(files, uploadDropZone) {
            var filesAsArray = Array.prototype.slice.call(files);
            options.callbacks.dropLog("Grabbed " + files.length + " dropped files.");
            uploadDropZone.dropDisabled(false);
            options.callbacks.processingDroppedFilesComplete(filesAsArray, uploadDropZone.getElement());
        }
        function traverseFileTree(entry) {
            var parseEntryPromise = new qq.Promise();
            if (entry.isFile) {
                entry.file(function(file) {
                    file.qqPath = extractDirectoryPath(entry);
                    droppedFiles.push(file);
                    parseEntryPromise.success();
                }, function(fileError) {
                    options.callbacks.dropLog("Problem parsing '" + entry.fullPath + "'.  FileError code " + fileError.code + ".", "error");
                    parseEntryPromise.failure();
                });
            } else if (entry.isDirectory) {
                getFilesInDirectory(entry).then(function allEntriesRead(entries) {
                    var entriesLeft = entries.length;
                    qq.each(entries, function(idx, entry) {
                        traverseFileTree(entry).done(function() {
                            entriesLeft -= 1;
                            if (entriesLeft === 0) {
                                parseEntryPromise.success();
                            }
                        });
                    });
                    if (!entries.length) {
                        parseEntryPromise.success();
                    }
                }, function readFailure(fileError) {
                    options.callbacks.dropLog("Problem parsing '" + entry.fullPath + "'.  FileError code " + fileError.code + ".", "error");
                    parseEntryPromise.failure();
                });
            }
            return parseEntryPromise;
        }
        function extractDirectoryPath(entry) {
            var name = entry.name, fullPath = entry.fullPath, indexOfNameInFullPath = fullPath.lastIndexOf(name);
            fullPath = fullPath.substr(0, indexOfNameInFullPath);
            if (fullPath.charAt(0) === "/") {
                fullPath = fullPath.substr(1);
            }
            return fullPath;
        }
        function getFilesInDirectory(entry, reader, accumEntries, existingPromise) {
            var promise = existingPromise || new qq.Promise(), dirReader = reader || entry.createReader();
            dirReader.readEntries(function readSuccess(entries) {
                var newEntries = accumEntries ? accumEntries.concat(entries) : entries;
                if (entries.length) {
                    setTimeout(function() {
                        getFilesInDirectory(entry, dirReader, newEntries, promise);
                    }, 0);
                } else {
                    promise.success(newEntries);
                }
            }, promise.failure);
            return promise;
        }
        function handleDataTransfer(dataTransfer, uploadDropZone) {
            var pendingFolderPromises = [], handleDataTransferPromise = new qq.Promise();
            options.callbacks.processingDroppedFiles();
            uploadDropZone.dropDisabled(true);
            if (dataTransfer.files.length > 1 && !options.allowMultipleItems) {
                options.callbacks.processingDroppedFilesComplete([]);
                options.callbacks.dropError("tooManyFilesError", "");
                uploadDropZone.dropDisabled(false);
                handleDataTransferPromise.failure();
            } else {
                droppedFiles = [];
                if (qq.isFolderDropSupported(dataTransfer)) {
                    qq.each(dataTransfer.items, function(idx, item) {
                        var entry = item.webkitGetAsEntry();
                        if (entry) {
                            if (entry.isFile) {
                                droppedFiles.push(item.getAsFile());
                            } else {
                                pendingFolderPromises.push(traverseFileTree(entry).done(function() {
                                    pendingFolderPromises.pop();
                                    if (pendingFolderPromises.length === 0) {
                                        handleDataTransferPromise.success();
                                    }
                                }));
                            }
                        }
                    });
                } else {
                    droppedFiles = dataTransfer.files;
                }
                if (pendingFolderPromises.length === 0) {
                    handleDataTransferPromise.success();
                }
            }
            return handleDataTransferPromise;
        }
        function setupDropzone(dropArea) {
            var dropZone = new qq.UploadDropZone({
                HIDE_ZONES_EVENT_NAME: HIDE_ZONES_EVENT_NAME,
                element: dropArea,
                onEnter: function(e) {
                    qq(dropArea).addClass(options.classes.dropActive);
                    e.stopPropagation();
                },
                onLeaveNotDescendants: function(e) {
                    qq(dropArea).removeClass(options.classes.dropActive);
                },
                onDrop: function(e) {
                    handleDataTransfer(e.dataTransfer, dropZone).then(function() {
                        uploadDroppedFiles(droppedFiles, dropZone);
                    }, function() {
                        options.callbacks.dropLog("Drop event DataTransfer parsing failed.  No files will be uploaded.", "error");
                    });
                }
            });
            disposeSupport.addDisposer(function() {
                dropZone.dispose();
            });
            qq(dropArea).hasAttribute(HIDE_BEFORE_ENTER_ATTR) && qq(dropArea).hide();
            uploadDropZones.push(dropZone);
            return dropZone;
        }
        function isFileDrag(dragEvent) {
            var fileDrag;
            qq.each(dragEvent.dataTransfer.types, function(key, val) {
                if (val === "Files") {
                    fileDrag = true;
                    return false;
                }
            });
            return fileDrag;
        }
        function leavingDocumentOut(e) {
            if (qq.safari()) {
                return e.x < 0 || e.y < 0;
            }
            return e.x === 0 && e.y === 0;
        }
        function setupDragDrop() {
            var dropZones = options.dropZoneElements, maybeHideDropZones = function() {
                setTimeout(function() {
                    qq.each(dropZones, function(idx, dropZone) {
                        qq(dropZone).hasAttribute(HIDE_BEFORE_ENTER_ATTR) && qq(dropZone).hide();
                        qq(dropZone).removeClass(options.classes.dropActive);
                    });
                }, 10);
            };
            qq.each(dropZones, function(idx, dropZone) {
                var uploadDropZone = setupDropzone(dropZone);
                if (dropZones.length && qq.supportedFeatures.fileDrop) {
                    disposeSupport.attach(document, "dragenter", function(e) {
                        if (!uploadDropZone.dropDisabled() && isFileDrag(e)) {
                            qq.each(dropZones, function(idx, dropZone) {
                                if (dropZone instanceof HTMLElement && qq(dropZone).hasAttribute(HIDE_BEFORE_ENTER_ATTR)) {
                                    qq(dropZone).css({
                                        display: "block"
                                    });
                                }
                            });
                        }
                    });
                }
            });
            disposeSupport.attach(document, "dragleave", function(e) {
                if (leavingDocumentOut(e)) {
                    maybeHideDropZones();
                }
            });
            disposeSupport.attach(qq(document).children()[0], "mouseenter", function(e) {
                maybeHideDropZones();
            });
            disposeSupport.attach(document, "drop", function(e) {
                if (isFileDrag(e)) {
                    e.preventDefault();
                    maybeHideDropZones();
                }
            });
            disposeSupport.attach(document, HIDE_ZONES_EVENT_NAME, maybeHideDropZones);
        }
        setupDragDrop();
        qq.extend(this, {
            setupExtraDropzone: function(element) {
                options.dropZoneElements.push(element);
                setupDropzone(element);
            },
            removeDropzone: function(element) {
                var i, dzs = options.dropZoneElements;
                for (i in dzs) {
                    if (dzs[i] === element) {
                        return dzs.splice(i, 1);
                    }
                }
            },
            dispose: function() {
                disposeSupport.dispose();
                qq.each(uploadDropZones, function(idx, dropZone) {
                    dropZone.dispose();
                });
            }
        });
        this._testing = {};
        this._testing.extractDirectoryPath = extractDirectoryPath;
    };
    qq.DragAndDrop.callbacks = function() {
        "use strict";
        return {
            processingDroppedFiles: function() {},
            processingDroppedFilesComplete: function(files, targetEl) {},
            dropError: function(code, errorSpecifics) {
                qq.log("Drag & drop error code '" + code + " with these specifics: '" + errorSpecifics + "'", "error");
            },
            dropLog: function(message, level) {
                qq.log(message, level);
            }
        };
    };
    qq.UploadDropZone = function(o) {
        "use strict";
        var disposeSupport = new qq.DisposeSupport(), options, element, preventDrop, dropOutsideDisabled;
        options = {
            element: null,
            onEnter: function(e) {},
            onLeave: function(e) {},
            onLeaveNotDescendants: function(e) {},
            onDrop: function(e) {}
        };
        qq.extend(options, o);
        element = options.element;
        function dragoverShouldBeCanceled() {
            return qq.safari() || qq.firefox() && qq.windows();
        }
        function disableDropOutside(e) {
            if (!dropOutsideDisabled) {
                if (dragoverShouldBeCanceled) {
                    disposeSupport.attach(document, "dragover", function(e) {
                        e.preventDefault();
                    });
                } else {
                    disposeSupport.attach(document, "dragover", function(e) {
                        if (e.dataTransfer) {
                            e.dataTransfer.dropEffect = "none";
                            e.preventDefault();
                        }
                    });
                }
                dropOutsideDisabled = true;
            }
        }
        function isValidFileDrag(e) {
            if (!qq.supportedFeatures.fileDrop) {
                return false;
            }
            var effectTest, dt = e.dataTransfer, isSafari = qq.safari();
            effectTest = qq.ie() && qq.supportedFeatures.fileDrop ? true : dt.effectAllowed !== "none";
            return dt && effectTest && (dt.files && dt.files.length || !isSafari && dt.types.contains && dt.types.contains("Files") || dt.types.includes && dt.types.includes("Files"));
        }
        function isOrSetDropDisabled(isDisabled) {
            if (isDisabled !== undefined) {
                preventDrop = isDisabled;
            }
            return preventDrop;
        }
        function triggerHidezonesEvent() {
            var hideZonesEvent;
            function triggerUsingOldApi() {
                hideZonesEvent = document.createEvent("Event");
                hideZonesEvent.initEvent(options.HIDE_ZONES_EVENT_NAME, true, true);
            }
            if (window.CustomEvent) {
                try {
                    hideZonesEvent = new CustomEvent(options.HIDE_ZONES_EVENT_NAME);
                } catch (err) {
                    triggerUsingOldApi();
                }
            } else {
                triggerUsingOldApi();
            }
            document.dispatchEvent(hideZonesEvent);
        }
        function attachEvents() {
            disposeSupport.attach(element, "dragover", function(e) {
                if (!isValidFileDrag(e)) {
                    return;
                }
                var effect = qq.ie() && qq.supportedFeatures.fileDrop ? null : e.dataTransfer.effectAllowed;
                if (effect === "move" || effect === "linkMove") {
                    e.dataTransfer.dropEffect = "move";
                } else {
                    e.dataTransfer.dropEffect = "copy";
                }
                e.stopPropagation();
                e.preventDefault();
            });
            disposeSupport.attach(element, "dragenter", function(e) {
                if (!isOrSetDropDisabled()) {
                    if (!isValidFileDrag(e)) {
                        return;
                    }
                    options.onEnter(e);
                }
            });
            disposeSupport.attach(element, "dragleave", function(e) {
                if (!isValidFileDrag(e)) {
                    return;
                }
                options.onLeave(e);
                var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
                if (qq(this).contains(relatedTarget)) {
                    return;
                }
                options.onLeaveNotDescendants(e);
            });
            disposeSupport.attach(element, "drop", function(e) {
                if (!isOrSetDropDisabled()) {
                    if (!isValidFileDrag(e)) {
                        return;
                    }
                    e.preventDefault();
                    e.stopPropagation();
                    options.onDrop(e);
                    triggerHidezonesEvent();
                }
            });
        }
        disableDropOutside();
        attachEvents();
        qq.extend(this, {
            dropDisabled: function(isDisabled) {
                return isOrSetDropDisabled(isDisabled);
            },
            dispose: function() {
                disposeSupport.dispose();
            },
            getElement: function() {
                return element;
            }
        });
        this._testing = {};
        this._testing.isValidFileDrag = isValidFileDrag;
    };
    (function() {
        "use strict";
        qq.uiPublicApi = {
            addInitialFiles: function(cannedFileList) {
                this._parent.prototype.addInitialFiles.apply(this, arguments);
                this._templating.addCacheToDom();
            },
            clearStoredFiles: function() {
                this._parent.prototype.clearStoredFiles.apply(this, arguments);
                this._templating.clearFiles();
            },
            addExtraDropzone: function(element) {
                this._dnd && this._dnd.setupExtraDropzone(element);
            },
            removeExtraDropzone: function(element) {
                if (this._dnd) {
                    return this._dnd.removeDropzone(element);
                }
            },
            getItemByFileId: function(id) {
                if (!this._templating.isHiddenForever(id)) {
                    return this._templating.getFileContainer(id);
                }
            },
            reset: function() {
                this._parent.prototype.reset.apply(this, arguments);
                this._templating.reset();
                if (!this._options.button && this._templating.getButton()) {
                    this._defaultButtonId = this._createUploadButton({
                        element: this._templating.getButton(),
                        title: this._options.text.fileInputTitle
                    }).getButtonId();
                }
                if (this._dnd) {
                    this._dnd.dispose();
                    this._dnd = this._setupDragAndDrop();
                }
                this._totalFilesInBatch = 0;
                this._filesInBatchAddedToUi = 0;
                this._setupClickAndEditEventHandlers();
            },
            setName: function(id, newName) {
                var formattedFilename = this._options.formatFileName(newName);
                this._parent.prototype.setName.apply(this, arguments);
                this._templating.updateFilename(id, formattedFilename);
            },
            pauseUpload: function(id) {
                var paused = this._parent.prototype.pauseUpload.apply(this, arguments);
                paused && this._templating.uploadPaused(id);
                return paused;
            },
            continueUpload: function(id) {
                var continued = this._parent.prototype.continueUpload.apply(this, arguments);
                continued && this._templating.uploadContinued(id);
                return continued;
            },
            getId: function(fileContainerOrChildEl) {
                return this._templating.getFileId(fileContainerOrChildEl);
            },
            getDropTarget: function(fileId) {
                var file = this.getFile(fileId);
                return file.qqDropTarget;
            }
        };
        qq.uiPrivateApi = {
            _getButton: function(buttonId) {
                var button = this._parent.prototype._getButton.apply(this, arguments);
                if (!button) {
                    if (buttonId === this._defaultButtonId) {
                        button = this._templating.getButton();
                    }
                }
                return button;
            },
            _removeFileItem: function(fileId) {
                this._templating.removeFile(fileId);
            },
            _setupClickAndEditEventHandlers: function() {
                this._fileButtonsClickHandler = qq.FileButtonsClickHandler && this._bindFileButtonsClickEvent();
                this._focusinEventSupported = !qq.firefox();
                if (this._isEditFilenameEnabled()) {
                    this._filenameClickHandler = this._bindFilenameClickEvent();
                    this._filenameInputFocusInHandler = this._bindFilenameInputFocusInEvent();
                    this._filenameInputFocusHandler = this._bindFilenameInputFocusEvent();
                }
            },
            _setupDragAndDrop: function() {
                var self = this, dropZoneElements = this._options.dragAndDrop.extraDropzones, templating = this._templating, defaultDropZone = templating.getDropZone();
                defaultDropZone && dropZoneElements.push(defaultDropZone);
                return new qq.DragAndDrop({
                    dropZoneElements: dropZoneElements,
                    allowMultipleItems: this._options.multiple,
                    classes: {
                        dropActive: this._options.classes.dropActive
                    },
                    callbacks: {
                        processingDroppedFiles: function() {
                            templating.showDropProcessing();
                        },
                        processingDroppedFilesComplete: function(files, targetEl) {
                            templating.hideDropProcessing();
                            qq.each(files, function(idx, file) {
                                file.qqDropTarget = targetEl;
                            });
                            if (files.length) {
                                self.addFiles(files, null, null);
                            }
                        },
                        dropError: function(code, errorData) {
                            self._itemError(code, errorData);
                        },
                        dropLog: function(message, level) {
                            self.log(message, level);
                        }
                    }
                });
            },
            _bindFileButtonsClickEvent: function() {
                var self = this;
                return new qq.FileButtonsClickHandler({
                    templating: this._templating,
                    log: function(message, lvl) {
                        self.log(message, lvl);
                    },
                    onDeleteFile: function(fileId) {
                        self.deleteFile(fileId);
                    },
                    onCancel: function(fileId) {
                        self.cancel(fileId);
                    },
                    onRetry: function(fileId) {
                        self.retry(fileId);
                    },
                    onPause: function(fileId) {
                        self.pauseUpload(fileId);
                    },
                    onContinue: function(fileId) {
                        self.continueUpload(fileId);
                    },
                    onGetName: function(fileId) {
                        return self.getName(fileId);
                    }
                });
            },
            _isEditFilenameEnabled: function() {
                return this._templating.isEditFilenamePossible() && !this._options.autoUpload && qq.FilenameClickHandler && qq.FilenameInputFocusHandler && qq.FilenameInputFocusHandler;
            },
            _filenameEditHandler: function() {
                var self = this, templating = this._templating;
                return {
                    templating: templating,
                    log: function(message, lvl) {
                        self.log(message, lvl);
                    },
                    onGetUploadStatus: function(fileId) {
                        return self.getUploads({
                            id: fileId
                        }).status;
                    },
                    onGetName: function(fileId) {
                        return self.getName(fileId);
                    },
                    onSetName: function(id, newName) {
                        self.setName(id, newName);
                    },
                    onEditingStatusChange: function(id, isEditing) {
                        var qqInput = qq(templating.getEditInput(id)), qqFileContainer = qq(templating.getFileContainer(id));
                        if (isEditing) {
                            qqInput.addClass("qq-editing");
                            templating.hideFilename(id);
                            templating.hideEditIcon(id);
                        } else {
                            qqInput.removeClass("qq-editing");
                            templating.showFilename(id);
                            templating.showEditIcon(id);
                        }
                        qqFileContainer.addClass("qq-temp").removeClass("qq-temp");
                    }
                };
            },
            _onUploadStatusChange: function(id, oldStatus, newStatus) {
                this._parent.prototype._onUploadStatusChange.apply(this, arguments);
                if (this._isEditFilenameEnabled()) {
                    if (this._templating.getFileContainer(id) && newStatus !== qq.status.SUBMITTED) {
                        this._templating.markFilenameEditable(id);
                        this._templating.hideEditIcon(id);
                    }
                }
                if (oldStatus === qq.status.UPLOAD_RETRYING && newStatus === qq.status.UPLOADING) {
                    this._templating.hideRetry(id);
                    this._templating.setStatusText(id);
                    qq(this._templating.getFileContainer(id)).removeClass(this._classes.retrying);
                } else if (newStatus === qq.status.UPLOAD_FAILED) {
                    this._templating.hidePause(id);
                }
            },
            _bindFilenameInputFocusInEvent: function() {
                var spec = qq.extend({}, this._filenameEditHandler());
                return new qq.FilenameInputFocusInHandler(spec);
            },
            _bindFilenameInputFocusEvent: function() {
                var spec = qq.extend({}, this._filenameEditHandler());
                return new qq.FilenameInputFocusHandler(spec);
            },
            _bindFilenameClickEvent: function() {
                var spec = qq.extend({}, this._filenameEditHandler());
                return new qq.FilenameClickHandler(spec);
            },
            _storeForLater: function(id) {
                this._parent.prototype._storeForLater.apply(this, arguments);
                this._templating.hideSpinner(id);
            },
            _onAllComplete: function(successful, failed) {
                this._parent.prototype._onAllComplete.apply(this, arguments);
                this._templating.resetTotalProgress();
            },
            _onSubmit: function(id, name) {
                var file = this.getFile(id);
                if (file && file.qqPath && this._options.dragAndDrop.reportDirectoryPaths) {
                    this._paramsStore.addReadOnly(id, {
                        qqpath: file.qqPath
                    });
                }
                this._parent.prototype._onSubmit.apply(this, arguments);
                this._addToList(id, name);
            },
            _onSubmitted: function(id) {
                if (this._isEditFilenameEnabled()) {
                    this._templating.markFilenameEditable(id);
                    this._templating.showEditIcon(id);
                    if (!this._focusinEventSupported) {
                        this._filenameInputFocusHandler.addHandler(this._templating.getEditInput(id));
                    }
                }
            },
            _onProgress: function(id, name, loaded, total) {
                this._parent.prototype._onProgress.apply(this, arguments);
                this._templating.updateProgress(id, loaded, total);
                if (total === 0 || Math.round(loaded / total * 100) === 100) {
                    this._templating.hideCancel(id);
                    this._templating.hidePause(id);
                    this._templating.hideProgress(id);
                    this._templating.setStatusText(id, this._options.text.waitingForResponse);
                    this._displayFileSize(id);
                } else {
                    this._displayFileSize(id, loaded, total);
                }
            },
            _onTotalProgress: function(loaded, total) {
                this._parent.prototype._onTotalProgress.apply(this, arguments);
                this._templating.updateTotalProgress(loaded, total);
            },
            _onComplete: function(id, name, result, xhr) {
                var parentRetVal = this._parent.prototype._onComplete.apply(this, arguments), templating = this._templating, fileContainer = templating.getFileContainer(id), self = this;
                function completeUpload(result) {
                    if (!fileContainer) {
                        return;
                    }
                    templating.setStatusText(id);
                    qq(fileContainer).removeClass(self._classes.retrying);
                    templating.hideProgress(id);
                    if (self.getUploads({
                        id: id
                    }).status !== qq.status.UPLOAD_FAILED) {
                        templating.hideCancel(id);
                    }
                    templating.hideSpinner(id);
                    if (result.success) {
                        self._markFileAsSuccessful(id);
                    } else {
                        qq(fileContainer).addClass(self._classes.fail);
                        templating.showCancel(id);
                        if (templating.isRetryPossible() && !self._preventRetries[id]) {
                            qq(fileContainer).addClass(self._classes.retryable);
                            templating.showRetry(id);
                        }
                        self._controlFailureTextDisplay(id, result);
                    }
                }
                if (parentRetVal instanceof qq.Promise) {
                    parentRetVal.done(function(newResult) {
                        completeUpload(newResult);
                    });
                } else {
                    completeUpload(result);
                }
                return parentRetVal;
            },
            _markFileAsSuccessful: function(id) {
                var templating = this._templating;
                if (this._isDeletePossible()) {
                    templating.showDeleteButton(id);
                }
                qq(templating.getFileContainer(id)).addClass(this._classes.success);
                this._maybeUpdateThumbnail(id);
            },
            _onUploadPrep: function(id) {
                this._parent.prototype._onUploadPrep.apply(this, arguments);
                this._templating.showSpinner(id);
            },
            _onUpload: function(id, name) {
                var parentRetVal = this._parent.prototype._onUpload.apply(this, arguments);
                this._templating.showSpinner(id);
                return parentRetVal;
            },
            _onUploadChunk: function(id, chunkData) {
                this._parent.prototype._onUploadChunk.apply(this, arguments);
                if (chunkData.partIndex > 0 && this._handler.isResumable(id)) {
                    this._templating.allowPause(id);
                }
            },
            _onCancel: function(id, name) {
                this._parent.prototype._onCancel.apply(this, arguments);
                this._removeFileItem(id);
                if (this._getNotFinished() === 0) {
                    this._templating.resetTotalProgress();
                }
            },
            _onBeforeAutoRetry: function(id) {
                var retryNumForDisplay, maxAuto, retryNote;
                this._parent.prototype._onBeforeAutoRetry.apply(this, arguments);
                this._showCancelLink(id);
                if (this._options.retry.showAutoRetryNote) {
                    retryNumForDisplay = this._autoRetries[id];
                    maxAuto = this._options.retry.maxAutoAttempts;
                    retryNote = this._options.retry.autoRetryNote.replace(/\{retryNum\}/g, retryNumForDisplay);
                    retryNote = retryNote.replace(/\{maxAuto\}/g, maxAuto);
                    this._templating.setStatusText(id, retryNote);
                    qq(this._templating.getFileContainer(id)).addClass(this._classes.retrying);
                }
            },
            _onBeforeManualRetry: function(id) {
                if (this._parent.prototype._onBeforeManualRetry.apply(this, arguments)) {
                    this._templating.resetProgress(id);
                    qq(this._templating.getFileContainer(id)).removeClass(this._classes.fail);
                    this._templating.setStatusText(id);
                    this._templating.showSpinner(id);
                    this._showCancelLink(id);
                    return true;
                } else {
                    qq(this._templating.getFileContainer(id)).addClass(this._classes.retryable);
                    this._templating.showRetry(id);
                    return false;
                }
            },
            _onSubmitDelete: function(id) {
                var onSuccessCallback = qq.bind(this._onSubmitDeleteSuccess, this);
                this._parent.prototype._onSubmitDelete.call(this, id, onSuccessCallback);
            },
            _onSubmitDeleteSuccess: function(id, uuid, additionalMandatedParams) {
                if (this._options.deleteFile.forceConfirm) {
                    this._showDeleteConfirm.apply(this, arguments);
                } else {
                    this._sendDeleteRequest.apply(this, arguments);
                }
            },
            _onDeleteComplete: function(id, xhr, isError) {
                this._parent.prototype._onDeleteComplete.apply(this, arguments);
                this._templating.hideSpinner(id);
                if (isError) {
                    this._templating.setStatusText(id, this._options.deleteFile.deletingFailedText);
                    this._templating.showDeleteButton(id);
                } else {
                    this._removeFileItem(id);
                }
            },
            _sendDeleteRequest: function(id, uuid, additionalMandatedParams) {
                this._templating.hideDeleteButton(id);
                this._templating.showSpinner(id);
                this._templating.setStatusText(id, this._options.deleteFile.deletingStatusText);
                this._deleteHandler.sendDelete.apply(this, arguments);
            },
            _showDeleteConfirm: function(id, uuid, mandatedParams) {
                var fileName = this.getName(id), confirmMessage = this._options.deleteFile.confirmMessage.replace(/\{filename\}/g, fileName), uuid = this.getUuid(id), deleteRequestArgs = arguments, self = this, retVal;
                retVal = this._options.showConfirm(confirmMessage);
                if (qq.isGenericPromise(retVal)) {
                    retVal.then(function() {
                        self._sendDeleteRequest.apply(self, deleteRequestArgs);
                    });
                } else if (retVal !== false) {
                    self._sendDeleteRequest.apply(self, deleteRequestArgs);
                }
            },
            _addToList: function(id, name, canned) {
                var prependData, prependIndex = 0, dontDisplay = this._handler.isProxied(id) && this._options.scaling.hideScaled, record;
                if (this._options.display.prependFiles) {
                    if (this._totalFilesInBatch > 1 && this._filesInBatchAddedToUi > 0) {
                        prependIndex = this._filesInBatchAddedToUi - 1;
                    }
                    prependData = {
                        index: prependIndex
                    };
                }
                if (!canned) {
                    if (this._options.disableCancelForFormUploads && !qq.supportedFeatures.ajaxUploading) {
                        this._templating.disableCancel();
                    }
                    if (!this._options.multiple) {
                        record = this.getUploads({
                            id: id
                        });
                        this._handledProxyGroup = this._handledProxyGroup || record.proxyGroupId;
                        if (record.proxyGroupId !== this._handledProxyGroup || !record.proxyGroupId) {
                            this._handler.cancelAll();
                            this._clearList();
                            this._handledProxyGroup = null;
                        }
                    }
                }
                if (canned) {
                    this._templating.addFileToCache(id, this._options.formatFileName(name), prependData, dontDisplay);
                    this._templating.updateThumbnail(id, this._thumbnailUrls[id], true, this._options.thumbnails.customResizer);
                } else {
                    this._templating.addFile(id, this._options.formatFileName(name), prependData, dontDisplay);
                    this._templating.generatePreview(id, this.getFile(id), this._options.thumbnails.customResizer);
                }
                this._filesInBatchAddedToUi += 1;
                if (canned || this._options.display.fileSizeOnSubmit && qq.supportedFeatures.ajaxUploading) {
                    this._displayFileSize(id);
                }
            },
            _clearList: function() {
                this._templating.clearFiles();
                this.clearStoredFiles();
            },
            _displayFileSize: function(id, loadedSize, totalSize) {
                var size = this.getSize(id), sizeForDisplay = this._formatSize(size);
                if (size >= 0) {
                    if (loadedSize !== undefined && totalSize !== undefined) {
                        sizeForDisplay = this._formatProgress(loadedSize, totalSize);
                    }
                    this._templating.updateSize(id, sizeForDisplay);
                }
            },
            _formatProgress: function(uploadedSize, totalSize) {
                var message = this._options.text.formatProgress;
                function r(name, replacement) {
                    message = message.replace(name, replacement);
                }
                r("{percent}", Math.round(uploadedSize / totalSize * 100));
                r("{total_size}", this._formatSize(totalSize));
                return message;
            },
            _controlFailureTextDisplay: function(id, response) {
                var mode, responseProperty, failureReason;
                mode = this._options.failedUploadTextDisplay.mode;
                responseProperty = this._options.failedUploadTextDisplay.responseProperty;
                if (mode === "custom") {
                    failureReason = response[responseProperty];
                    if (!failureReason) {
                        failureReason = this._options.text.failUpload;
                    }
                    this._templating.setStatusText(id, failureReason);
                    if (this._options.failedUploadTextDisplay.enableTooltip) {
                        this._showTooltip(id, failureReason);
                    }
                } else if (mode === "default") {
                    this._templating.setStatusText(id, this._options.text.failUpload);
                } else if (mode !== "none") {
                    this.log("failedUploadTextDisplay.mode value of '" + mode + "' is not valid", "warn");
                }
            },
            _showTooltip: function(id, text) {
                this._templating.getFileContainer(id).title = text;
            },
            _showCancelLink: function(id) {
                if (!this._options.disableCancelForFormUploads || qq.supportedFeatures.ajaxUploading) {
                    this._templating.showCancel(id);
                }
            },
            _itemError: function(code, name, item) {
                var message = this._parent.prototype._itemError.apply(this, arguments);
                this._options.showMessage(message);
            },
            _batchError: function(message) {
                this._parent.prototype._batchError.apply(this, arguments);
                this._options.showMessage(message);
            },
            _setupPastePrompt: function() {
                var self = this;
                this._options.callbacks.onPasteReceived = function() {
                    var message = self._options.paste.namePromptMessage, defaultVal = self._options.paste.defaultName;
                    return self._options.showPrompt(message, defaultVal);
                };
            },
            _fileOrBlobRejected: function(id, name) {
                this._totalFilesInBatch -= 1;
                this._parent.prototype._fileOrBlobRejected.apply(this, arguments);
            },
            _prepareItemsForUpload: function(items, params, endpoint) {
                this._totalFilesInBatch = items.length;
                this._filesInBatchAddedToUi = 0;
                this._parent.prototype._prepareItemsForUpload.apply(this, arguments);
            },
            _maybeUpdateThumbnail: function(fileId) {
                var thumbnailUrl = this._thumbnailUrls[fileId], fileStatus = this.getUploads({
                    id: fileId
                }).status;
                if (fileStatus !== qq.status.DELETED && (thumbnailUrl || this._options.thumbnails.placeholders.waitUntilResponse || !qq.supportedFeatures.imagePreviews)) {
                    this._templating.updateThumbnail(fileId, thumbnailUrl, this._options.thumbnails.customResizer);
                }
            },
            _addCannedFile: function(sessionData) {
                var id = this._parent.prototype._addCannedFile.apply(this, arguments);
                this._addToList(id, this.getName(id), true);
                this._templating.hideSpinner(id);
                this._templating.hideCancel(id);
                this._markFileAsSuccessful(id);
                return id;
            },
            _setSize: function(id, newSize) {
                this._parent.prototype._setSize.apply(this, arguments);
                this._templating.updateSize(id, this._formatSize(newSize));
            },
            _sessionRequestComplete: function() {
                this._templating.addCacheToDom();
                this._parent.prototype._sessionRequestComplete.apply(this, arguments);
            }
        };
    })();
    qq.FineUploader = function(o, namespace) {
        "use strict";
        var self = this;
        this._parent = namespace ? qq[namespace].FineUploaderBasic : qq.FineUploaderBasic;
        this._parent.apply(this, arguments);
        qq.extend(this._options, {
            element: null,
            button: null,
            listElement: null,
            dragAndDrop: {
                extraDropzones: [],
                reportDirectoryPaths: false
            },
            text: {
                formatProgress: "{percent}% of {total_size}",
                failUpload: "Upload failed",
                waitingForResponse: "Processing...",
                paused: "Paused"
            },
            template: "qq-template",
            classes: {
                retrying: "qq-upload-retrying",
                retryable: "qq-upload-retryable",
                success: "qq-upload-success",
                fail: "qq-upload-fail",
                editable: "qq-editable",
                hide: "qq-hide",
                dropActive: "qq-upload-drop-area-active"
            },
            failedUploadTextDisplay: {
                mode: "default",
                responseProperty: "error",
                enableTooltip: true
            },
            messages: {
                tooManyFilesError: "You may only drop one file",
                unsupportedBrowser: "Unrecoverable error - this browser does not permit file uploading of any kind."
            },
            retry: {
                showAutoRetryNote: true,
                autoRetryNote: "Retrying {retryNum}/{maxAuto}..."
            },
            deleteFile: {
                forceConfirm: false,
                confirmMessage: "Are you sure you want to delete {filename}?",
                deletingStatusText: "Deleting...",
                deletingFailedText: "Delete failed"
            },
            display: {
                fileSizeOnSubmit: false,
                prependFiles: false
            },
            paste: {
                promptForName: false,
                namePromptMessage: "Please name this image"
            },
            thumbnails: {
                customResizer: null,
                maxCount: 0,
                placeholders: {
                    waitUntilResponse: false,
                    notAvailablePath: null,
                    waitingPath: null
                },
                timeBetweenThumbs: 750
            },
            scaling: {
                hideScaled: false
            },
            showMessage: function(message) {
                if (self._templating.hasDialog("alert")) {
                    return self._templating.showDialog("alert", message);
                } else {
                    setTimeout(function() {
                        window.alert(message);
                    }, 0);
                }
            },
            showConfirm: function(message) {
                if (self._templating.hasDialog("confirm")) {
                    return self._templating.showDialog("confirm", message);
                } else {
                    return window.confirm(message);
                }
            },
            showPrompt: function(message, defaultValue) {
                if (self._templating.hasDialog("prompt")) {
                    return self._templating.showDialog("prompt", message, defaultValue);
                } else {
                    return window.prompt(message, defaultValue);
                }
            }
        }, true);
        qq.extend(this._options, o, true);
        this._templating = new qq.Templating({
            log: qq.bind(this.log, this),
            templateIdOrEl: this._options.template,
            containerEl: this._options.element,
            fileContainerEl: this._options.listElement,
            button: this._options.button,
            imageGenerator: this._imageGenerator,
            classes: {
                hide: this._options.classes.hide,
                editable: this._options.classes.editable
            },
            limits: {
                maxThumbs: this._options.thumbnails.maxCount,
                timeBetweenThumbs: this._options.thumbnails.timeBetweenThumbs
            },
            placeholders: {
                waitUntilUpdate: this._options.thumbnails.placeholders.waitUntilResponse,
                thumbnailNotAvailable: this._options.thumbnails.placeholders.notAvailablePath,
                waitingForThumbnail: this._options.thumbnails.placeholders.waitingPath
            },
            text: this._options.text
        });
        if (this._options.workarounds.ios8SafariUploads && qq.ios800() && qq.iosSafari()) {
            this._templating.renderFailure(this._options.messages.unsupportedBrowserIos8Safari);
        } else if (!qq.supportedFeatures.uploading || this._options.cors.expected && !qq.supportedFeatures.uploadCors) {
            this._templating.renderFailure(this._options.messages.unsupportedBrowser);
        } else {
            this._wrapCallbacks();
            this._templating.render();
            this._classes = this._options.classes;
            if (!this._options.button && this._templating.getButton()) {
                this._defaultButtonId = this._createUploadButton({
                    element: this._templating.getButton(),
                    title: this._options.text.fileInputTitle
                }).getButtonId();
            }
            this._setupClickAndEditEventHandlers();
            if (qq.DragAndDrop && qq.supportedFeatures.fileDrop) {
                this._dnd = this._setupDragAndDrop();
            }
            if (this._options.paste.targetElement && this._options.paste.promptForName) {
                if (qq.PasteSupport) {
                    this._setupPastePrompt();
                } else {
                    this.log("Paste support module not found.", "error");
                }
            }
            this._totalFilesInBatch = 0;
            this._filesInBatchAddedToUi = 0;
        }
    };
    qq.extend(qq.FineUploader.prototype, qq.basePublicApi);
    qq.extend(qq.FineUploader.prototype, qq.basePrivateApi);
    qq.extend(qq.FineUploader.prototype, qq.uiPublicApi);
    qq.extend(qq.FineUploader.prototype, qq.uiPrivateApi);
    qq.Templating = function(spec) {
        "use strict";
        var FILE_ID_ATTR = "qq-file-id", FILE_CLASS_PREFIX = "qq-file-id-", THUMBNAIL_MAX_SIZE_ATTR = "qq-max-size", THUMBNAIL_SERVER_SCALE_ATTR = "qq-server-scale", HIDE_DROPZONE_ATTR = "qq-hide-dropzone", DROPZPONE_TEXT_ATTR = "qq-drop-area-text", IN_PROGRESS_CLASS = "qq-in-progress", HIDDEN_FOREVER_CLASS = "qq-hidden-forever", fileBatch = {
            content: document.createDocumentFragment(),
            map: {}
        }, isCancelDisabled = false, generatedThumbnails = 0, thumbnailQueueMonitorRunning = false, thumbGenerationQueue = [], thumbnailMaxSize = -1, options = {
            log: null,
            limits: {
                maxThumbs: 0,
                timeBetweenThumbs: 750
            },
            templateIdOrEl: "qq-template",
            containerEl: null,
            fileContainerEl: null,
            button: null,
            imageGenerator: null,
            classes: {
                hide: "qq-hide",
                editable: "qq-editable"
            },
            placeholders: {
                waitUntilUpdate: false,
                thumbnailNotAvailable: null,
                waitingForThumbnail: null
            },
            text: {
                paused: "Paused"
            }
        }, selectorClasses = {
            button: "qq-upload-button-selector",
            alertDialog: "qq-alert-dialog-selector",
            dialogCancelButton: "qq-cancel-button-selector",
            confirmDialog: "qq-confirm-dialog-selector",
            dialogMessage: "qq-dialog-message-selector",
            dialogOkButton: "qq-ok-button-selector",
            promptDialog: "qq-prompt-dialog-selector",
            uploader: "qq-uploader-selector",
            drop: "qq-upload-drop-area-selector",
            list: "qq-upload-list-selector",
            progressBarContainer: "qq-progress-bar-container-selector",
            progressBar: "qq-progress-bar-selector",
            totalProgressBarContainer: "qq-total-progress-bar-container-selector",
            totalProgressBar: "qq-total-progress-bar-selector",
            file: "qq-upload-file-selector",
            spinner: "qq-upload-spinner-selector",
            size: "qq-upload-size-selector",
            cancel: "qq-upload-cancel-selector",
            pause: "qq-upload-pause-selector",
            continueButton: "qq-upload-continue-selector",
            deleteButton: "qq-upload-delete-selector",
            retry: "qq-upload-retry-selector",
            statusText: "qq-upload-status-text-selector",
            editFilenameInput: "qq-edit-filename-selector",
            editNameIcon: "qq-edit-filename-icon-selector",
            dropText: "qq-upload-drop-area-text-selector",
            dropProcessing: "qq-drop-processing-selector",
            dropProcessingSpinner: "qq-drop-processing-spinner-selector",
            thumbnail: "qq-thumbnail-selector"
        }, previewGeneration = {}, cachedThumbnailNotAvailableImg = new qq.Promise(), cachedWaitingForThumbnailImg = new qq.Promise(), log, isEditElementsExist, isRetryElementExist, templateDom, container, fileList, showThumbnails, serverScale, cacheThumbnailPlaceholders = function() {
            var notAvailableUrl = options.placeholders.thumbnailNotAvailable, waitingUrl = options.placeholders.waitingForThumbnail, spec = {
                maxSize: thumbnailMaxSize,
                scale: serverScale
            };
            if (showThumbnails) {
                if (notAvailableUrl) {
                    options.imageGenerator.generate(notAvailableUrl, new Image(), spec).then(function(updatedImg) {
                        cachedThumbnailNotAvailableImg.success(updatedImg);
                    }, function() {
                        cachedThumbnailNotAvailableImg.failure();
                        log("Problem loading 'not available' placeholder image at " + notAvailableUrl, "error");
                    });
                } else {
                    cachedThumbnailNotAvailableImg.failure();
                }
                if (waitingUrl) {
                    options.imageGenerator.generate(waitingUrl, new Image(), spec).then(function(updatedImg) {
                        cachedWaitingForThumbnailImg.success(updatedImg);
                    }, function() {
                        cachedWaitingForThumbnailImg.failure();
                        log("Problem loading 'waiting for thumbnail' placeholder image at " + waitingUrl, "error");
                    });
                } else {
                    cachedWaitingForThumbnailImg.failure();
                }
            }
        }, displayWaitingImg = function(thumbnail) {
            var waitingImgPlacement = new qq.Promise();
            cachedWaitingForThumbnailImg.then(function(img) {
                maybeScalePlaceholderViaCss(img, thumbnail);
                if (!thumbnail.src) {
                    thumbnail.src = img.src;
                    thumbnail.onload = function() {
                        thumbnail.onload = null;
                        show(thumbnail);
                        waitingImgPlacement.success();
                    };
                } else {
                    waitingImgPlacement.success();
                }
            }, function() {
                hide(thumbnail);
                waitingImgPlacement.success();
            });
            return waitingImgPlacement;
        }, generateNewPreview = function(id, blob, spec) {
            var thumbnail = getThumbnail(id);
            log("Generating new thumbnail for " + id);
            blob.qqThumbnailId = id;
            return options.imageGenerator.generate(blob, thumbnail, spec).then(function() {
                generatedThumbnails++;
                show(thumbnail);
                previewGeneration[id].success();
            }, function() {
                previewGeneration[id].failure();
                if (!options.placeholders.waitUntilUpdate) {
                    maybeSetDisplayNotAvailableImg(id, thumbnail);
                }
            });
        }, generateNextQueuedPreview = function() {
            if (thumbGenerationQueue.length) {
                thumbnailQueueMonitorRunning = true;
                var queuedThumbRequest = thumbGenerationQueue.shift();
                if (queuedThumbRequest.update) {
                    processUpdateQueuedPreviewRequest(queuedThumbRequest);
                } else {
                    processNewQueuedPreviewRequest(queuedThumbRequest);
                }
            } else {
                thumbnailQueueMonitorRunning = false;
            }
        }, getCancel = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.cancel);
        }, getContinue = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.continueButton);
        }, getDialog = function(type) {
            return getTemplateEl(container, selectorClasses[type + "Dialog"]);
        }, getDelete = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.deleteButton);
        }, getDropProcessing = function() {
            return getTemplateEl(container, selectorClasses.dropProcessing);
        }, getEditIcon = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.editNameIcon);
        }, getFile = function(id) {
            return fileBatch.map[id] || qq(fileList).getFirstByClass(FILE_CLASS_PREFIX + id);
        }, getFilename = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.file);
        }, getPause = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.pause);
        }, getProgress = function(id) {
            if (id == null) {
                return getTemplateEl(container, selectorClasses.totalProgressBarContainer) || getTemplateEl(container, selectorClasses.totalProgressBar);
            }
            return getTemplateEl(getFile(id), selectorClasses.progressBarContainer) || getTemplateEl(getFile(id), selectorClasses.progressBar);
        }, getRetry = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.retry);
        }, getSize = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.size);
        }, getSpinner = function(id) {
            return getTemplateEl(getFile(id), selectorClasses.spinner);
        }, getTemplateEl = function(context, cssClass) {
            return context && qq(context).getFirstByClass(cssClass);
        }, getThumbnail = function(id) {
            return showThumbnails && getTemplateEl(getFile(id), selectorClasses.thumbnail);
        }, hide = function(el) {
            el && qq(el).addClass(options.classes.hide);
        }, maybeScalePlaceholderViaCss = function(placeholder, thumbnail) {
            var maxWidth = placeholder.style.maxWidth, maxHeight = placeholder.style.maxHeight;
            if (maxHeight && maxWidth && !thumbnail.style.maxWidth && !thumbnail.style.maxHeight) {
                qq(thumbnail).css({
                    maxWidth: maxWidth,
                    maxHeight: maxHeight
                });
            }
        }, maybeSetDisplayNotAvailableImg = function(id, thumbnail) {
            var previewing = previewGeneration[id] || new qq.Promise().failure(), notAvailableImgPlacement = new qq.Promise();
            cachedThumbnailNotAvailableImg.then(function(img) {
                previewing.then(function() {
                    notAvailableImgPlacement.success();
                }, function() {
                    maybeScalePlaceholderViaCss(img, thumbnail);
                    thumbnail.onload = function() {
                        thumbnail.onload = null;
                        notAvailableImgPlacement.success();
                    };
                    thumbnail.src = img.src;
                    show(thumbnail);
                });
            });
            return notAvailableImgPlacement;
        }, parseAndGetTemplate = function() {
            var scriptEl, scriptHtml, fileListNode, tempTemplateEl, fileListEl, defaultButton, dropArea, thumbnail, dropProcessing, dropTextEl, uploaderEl;
            log("Parsing template");
            if (options.templateIdOrEl == null) {
                throw new Error("You MUST specify either a template element or ID!");
            }
            if (qq.isString(options.templateIdOrEl)) {
                scriptEl = document.getElementById(options.templateIdOrEl);
                if (scriptEl === null) {
                    throw new Error(qq.format("Cannot find template script at ID '{}'!", options.templateIdOrEl));
                }
                scriptHtml = scriptEl.innerHTML;
            } else {
                if (options.templateIdOrEl.innerHTML === undefined) {
                    throw new Error("You have specified an invalid value for the template option!  " + "It must be an ID or an Element.");
                }
                scriptHtml = options.templateIdOrEl.innerHTML;
            }
            scriptHtml = qq.trimStr(scriptHtml);
            tempTemplateEl = document.createElement("div");
            tempTemplateEl.appendChild(qq.toElement(scriptHtml));
            uploaderEl = qq(tempTemplateEl).getFirstByClass(selectorClasses.uploader);
            if (options.button) {
                defaultButton = qq(tempTemplateEl).getFirstByClass(selectorClasses.button);
                if (defaultButton) {
                    qq(defaultButton).remove();
                }
            }
            if (!qq.DragAndDrop || !qq.supportedFeatures.fileDrop) {
                dropProcessing = qq(tempTemplateEl).getFirstByClass(selectorClasses.dropProcessing);
                if (dropProcessing) {
                    qq(dropProcessing).remove();
                }
            }
            dropArea = qq(tempTemplateEl).getFirstByClass(selectorClasses.drop);
            if (dropArea && !qq.DragAndDrop) {
                log("DnD module unavailable.", "info");
                qq(dropArea).remove();
            }
            if (!qq.supportedFeatures.fileDrop) {
                uploaderEl.removeAttribute(DROPZPONE_TEXT_ATTR);
                if (dropArea && qq(dropArea).hasAttribute(HIDE_DROPZONE_ATTR)) {
                    qq(dropArea).css({
                        display: "none"
                    });
                }
            } else if (qq(uploaderEl).hasAttribute(DROPZPONE_TEXT_ATTR) && dropArea) {
                dropTextEl = qq(dropArea).getFirstByClass(selectorClasses.dropText);
                dropTextEl && qq(dropTextEl).remove();
            }
            thumbnail = qq(tempTemplateEl).getFirstByClass(selectorClasses.thumbnail);
            if (!showThumbnails) {
                thumbnail && qq(thumbnail).remove();
            } else if (thumbnail) {
                thumbnailMaxSize = parseInt(thumbnail.getAttribute(THUMBNAIL_MAX_SIZE_ATTR));
                thumbnailMaxSize = thumbnailMaxSize > 0 ? thumbnailMaxSize : null;
                serverScale = qq(thumbnail).hasAttribute(THUMBNAIL_SERVER_SCALE_ATTR);
            }
            showThumbnails = showThumbnails && thumbnail;
            isEditElementsExist = qq(tempTemplateEl).getByClass(selectorClasses.editFilenameInput).length > 0;
            isRetryElementExist = qq(tempTemplateEl).getByClass(selectorClasses.retry).length > 0;
            fileListNode = qq(tempTemplateEl).getFirstByClass(selectorClasses.list);
            if (fileListNode == null) {
                throw new Error("Could not find the file list container in the template!");
            }
            fileListEl = fileListNode.children[0].cloneNode(true);
            fileListNode.innerHTML = "";
            if (tempTemplateEl.getElementsByTagName("DIALOG").length) {
                document.createElement("dialog");
            }
            log("Template parsing complete");
            return {
                template: tempTemplateEl,
                fileTemplate: fileListEl
            };
        }, prependFile = function(el, index, fileList) {
            var parentEl = fileList, beforeEl = parentEl.firstChild;
            if (index > 0) {
                beforeEl = qq(parentEl).children()[index].nextSibling;
            }
            parentEl.insertBefore(el, beforeEl);
        }, processNewQueuedPreviewRequest = function(queuedThumbRequest) {
            var id = queuedThumbRequest.id, optFileOrBlob = queuedThumbRequest.optFileOrBlob, relatedThumbnailId = optFileOrBlob && optFileOrBlob.qqThumbnailId, thumbnail = getThumbnail(id), spec = {
                customResizeFunction: queuedThumbRequest.customResizeFunction,
                maxSize: thumbnailMaxSize,
                orient: true,
                scale: true
            };
            if (qq.supportedFeatures.imagePreviews) {
                if (thumbnail) {
                    if (options.limits.maxThumbs && options.limits.maxThumbs <= generatedThumbnails) {
                        maybeSetDisplayNotAvailableImg(id, thumbnail);
                        generateNextQueuedPreview();
                    } else {
                        displayWaitingImg(thumbnail).done(function() {
                            previewGeneration[id] = new qq.Promise();
                            previewGeneration[id].done(function() {
                                setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
                            });
                            if (relatedThumbnailId != null) {
                                useCachedPreview(id, relatedThumbnailId);
                            } else {
                                generateNewPreview(id, optFileOrBlob, spec);
                            }
                        });
                    }
                } else {
                    generateNextQueuedPreview();
                }
            } else if (thumbnail) {
                displayWaitingImg(thumbnail);
                generateNextQueuedPreview();
            }
        }, processUpdateQueuedPreviewRequest = function(queuedThumbRequest) {
            var id = queuedThumbRequest.id, thumbnailUrl = queuedThumbRequest.thumbnailUrl, showWaitingImg = queuedThumbRequest.showWaitingImg, thumbnail = getThumbnail(id), spec = {
                customResizeFunction: queuedThumbRequest.customResizeFunction,
                scale: serverScale,
                maxSize: thumbnailMaxSize
            };
            if (thumbnail) {
                if (thumbnailUrl) {
                    if (options.limits.maxThumbs && options.limits.maxThumbs <= generatedThumbnails) {
                        maybeSetDisplayNotAvailableImg(id, thumbnail);
                        generateNextQueuedPreview();
                    } else {
                        if (showWaitingImg) {
                            displayWaitingImg(thumbnail);
                        }
                        return options.imageGenerator.generate(thumbnailUrl, thumbnail, spec).then(function() {
                            show(thumbnail);
                            generatedThumbnails++;
                            setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
                        }, function() {
                            maybeSetDisplayNotAvailableImg(id, thumbnail);
                            setTimeout(generateNextQueuedPreview, options.limits.timeBetweenThumbs);
                        });
                    }
                } else {
                    maybeSetDisplayNotAvailableImg(id, thumbnail);
                    generateNextQueuedPreview();
                }
            }
        }, setProgressBarWidth = function(id, percent) {
            var bar = getProgress(id), progressBarSelector = id == null ? selectorClasses.totalProgressBar : selectorClasses.progressBar;
            if (bar && !qq(bar).hasClass(progressBarSelector)) {
                bar = qq(bar).getFirstByClass(progressBarSelector);
            }
            if (bar) {
                qq(bar).css({
                    width: percent + "%"
                });
                bar.setAttribute("aria-valuenow", percent);
            }
        }, show = function(el) {
            el && qq(el).removeClass(options.classes.hide);
        }, useCachedPreview = function(targetThumbnailId, cachedThumbnailId) {
            var targetThumbnail = getThumbnail(targetThumbnailId), cachedThumbnail = getThumbnail(cachedThumbnailId);
            log(qq.format("ID {} is the same file as ID {}.  Will use generated thumbnail from ID {} instead.", targetThumbnailId, cachedThumbnailId, cachedThumbnailId));
            previewGeneration[cachedThumbnailId].then(function() {
                generatedThumbnails++;
                previewGeneration[targetThumbnailId].success();
                log(qq.format("Now using previously generated thumbnail created for ID {} on ID {}.", cachedThumbnailId, targetThumbnailId));
                targetThumbnail.src = cachedThumbnail.src;
                show(targetThumbnail);
            }, function() {
                previewGeneration[targetThumbnailId].failure();
                if (!options.placeholders.waitUntilUpdate) {
                    maybeSetDisplayNotAvailableImg(targetThumbnailId, targetThumbnail);
                }
            });
        };
        qq.extend(options, spec);
        log = options.log;
        if (!qq.supportedFeatures.imagePreviews) {
            options.limits.timeBetweenThumbs = 0;
            options.limits.maxThumbs = 0;
        }
        container = options.containerEl;
        showThumbnails = options.imageGenerator !== undefined;
        templateDom = parseAndGetTemplate();
        cacheThumbnailPlaceholders();
        qq.extend(this, {
            render: function() {
                log("Rendering template in DOM.");
                generatedThumbnails = 0;
                container.appendChild(templateDom.template.cloneNode(true));
                hide(getDropProcessing());
                this.hideTotalProgress();
                fileList = options.fileContainerEl || getTemplateEl(container, selectorClasses.list);
                log("Template rendering complete");
            },
            renderFailure: function(message) {
                var cantRenderEl = qq.toElement(message);
                container.innerHTML = "";
                container.appendChild(cantRenderEl);
            },
            reset: function() {
                container.innerHTML = "";
                this.render();
            },
            clearFiles: function() {
                fileList.innerHTML = "";
            },
            disableCancel: function() {
                isCancelDisabled = true;
            },
            addFile: function(id, name, prependInfo, hideForever, batch) {
                var fileEl = templateDom.fileTemplate.cloneNode(true), fileNameEl = getTemplateEl(fileEl, selectorClasses.file), uploaderEl = getTemplateEl(container, selectorClasses.uploader), fileContainer = batch ? fileBatch.content : fileList, thumb;
                if (batch) {
                    fileBatch.map[id] = fileEl;
                }
                qq(fileEl).addClass(FILE_CLASS_PREFIX + id);
                uploaderEl.removeAttribute(DROPZPONE_TEXT_ATTR);
                if (fileNameEl) {
                    qq(fileNameEl).setText(name);
                    fileNameEl.setAttribute("title", name);
                }
                fileEl.setAttribute(FILE_ID_ATTR, id);
                if (prependInfo) {
                    prependFile(fileEl, prependInfo.index, fileContainer);
                } else {
                    fileContainer.appendChild(fileEl);
                }
                if (hideForever) {
                    fileEl.style.display = "none";
                    qq(fileEl).addClass(HIDDEN_FOREVER_CLASS);
                } else {
                    hide(getProgress(id));
                    hide(getSize(id));
                    hide(getDelete(id));
                    hide(getRetry(id));
                    hide(getPause(id));
                    hide(getContinue(id));
                    if (isCancelDisabled) {
                        this.hideCancel(id);
                    }
                    thumb = getThumbnail(id);
                    if (thumb && !thumb.src) {
                        cachedWaitingForThumbnailImg.then(function(waitingImg) {
                            thumb.src = waitingImg.src;
                            if (waitingImg.style.maxHeight && waitingImg.style.maxWidth) {
                                qq(thumb).css({
                                    maxHeight: waitingImg.style.maxHeight,
                                    maxWidth: waitingImg.style.maxWidth
                                });
                            }
                            show(thumb);
                        });
                    }
                }
            },
            addFileToCache: function(id, name, prependInfo, hideForever) {
                this.addFile(id, name, prependInfo, hideForever, true);
            },
            addCacheToDom: function() {
                fileList.appendChild(fileBatch.content);
                fileBatch.content = document.createDocumentFragment();
                fileBatch.map = {};
            },
            removeFile: function(id) {
                qq(getFile(id)).remove();
            },
            getFileId: function(el) {
                var currentNode = el;
                if (currentNode) {
                    while (currentNode.getAttribute(FILE_ID_ATTR) == null) {
                        currentNode = currentNode.parentNode;
                    }
                    return parseInt(currentNode.getAttribute(FILE_ID_ATTR));
                }
            },
            getFileList: function() {
                return fileList;
            },
            markFilenameEditable: function(id) {
                var filename = getFilename(id);
                filename && qq(filename).addClass(options.classes.editable);
            },
            updateFilename: function(id, name) {
                var filenameEl = getFilename(id);
                if (filenameEl) {
                    qq(filenameEl).setText(name);
                    filenameEl.setAttribute("title", name);
                }
            },
            hideFilename: function(id) {
                hide(getFilename(id));
            },
            showFilename: function(id) {
                show(getFilename(id));
            },
            isFileName: function(el) {
                return qq(el).hasClass(selectorClasses.file);
            },
            getButton: function() {
                return options.button || getTemplateEl(container, selectorClasses.button);
            },
            hideDropProcessing: function() {
                hide(getDropProcessing());
            },
            showDropProcessing: function() {
                show(getDropProcessing());
            },
            getDropZone: function() {
                return getTemplateEl(container, selectorClasses.drop);
            },
            isEditFilenamePossible: function() {
                return isEditElementsExist;
            },
            hideRetry: function(id) {
                hide(getRetry(id));
            },
            isRetryPossible: function() {
                return isRetryElementExist;
            },
            showRetry: function(id) {
                show(getRetry(id));
            },
            getFileContainer: function(id) {
                return getFile(id);
            },
            showEditIcon: function(id) {
                var icon = getEditIcon(id);
                icon && qq(icon).addClass(options.classes.editable);
            },
            isHiddenForever: function(id) {
                return qq(getFile(id)).hasClass(HIDDEN_FOREVER_CLASS);
            },
            hideEditIcon: function(id) {
                var icon = getEditIcon(id);
                icon && qq(icon).removeClass(options.classes.editable);
            },
            isEditIcon: function(el) {
                return qq(el).hasClass(selectorClasses.editNameIcon, true);
            },
            getEditInput: function(id) {
                return getTemplateEl(getFile(id), selectorClasses.editFilenameInput);
            },
            isEditInput: function(el) {
                return qq(el).hasClass(selectorClasses.editFilenameInput, true);
            },
            updateProgress: function(id, loaded, total) {
                var bar = getProgress(id), percent;
                if (bar && total > 0) {
                    percent = Math.round(loaded / total * 100);
                    if (percent === 100) {
                        hide(bar);
                    } else {
                        show(bar);
                    }
                    setProgressBarWidth(id, percent);
                }
            },
            updateTotalProgress: function(loaded, total) {
                this.updateProgress(null, loaded, total);
            },
            hideProgress: function(id) {
                var bar = getProgress(id);
                bar && hide(bar);
            },
            hideTotalProgress: function() {
                this.hideProgress();
            },
            resetProgress: function(id) {
                setProgressBarWidth(id, 0);
                this.hideTotalProgress(id);
            },
            resetTotalProgress: function() {
                this.resetProgress();
            },
            showCancel: function(id) {
                if (!isCancelDisabled) {
                    var cancel = getCancel(id);
                    cancel && qq(cancel).removeClass(options.classes.hide);
                }
            },
            hideCancel: function(id) {
                hide(getCancel(id));
            },
            isCancel: function(el) {
                return qq(el).hasClass(selectorClasses.cancel, true);
            },
            allowPause: function(id) {
                show(getPause(id));
                hide(getContinue(id));
            },
            uploadPaused: function(id) {
                this.setStatusText(id, options.text.paused);
                this.allowContinueButton(id);
                hide(getSpinner(id));
            },
            hidePause: function(id) {
                hide(getPause(id));
            },
            isPause: function(el) {
                return qq(el).hasClass(selectorClasses.pause, true);
            },
            isContinueButton: function(el) {
                return qq(el).hasClass(selectorClasses.continueButton, true);
            },
            allowContinueButton: function(id) {
                show(getContinue(id));
                hide(getPause(id));
            },
            uploadContinued: function(id) {
                this.setStatusText(id, "");
                this.allowPause(id);
                show(getSpinner(id));
            },
            showDeleteButton: function(id) {
                show(getDelete(id));
            },
            hideDeleteButton: function(id) {
                hide(getDelete(id));
            },
            isDeleteButton: function(el) {
                return qq(el).hasClass(selectorClasses.deleteButton, true);
            },
            isRetry: function(el) {
                return qq(el).hasClass(selectorClasses.retry, true);
            },
            updateSize: function(id, text) {
                var size = getSize(id);
                if (size) {
                    show(size);
                    qq(size).setText(text);
                }
            },
            setStatusText: function(id, text) {
                var textEl = getTemplateEl(getFile(id), selectorClasses.statusText);
                if (textEl) {
                    if (text == null) {
                        qq(textEl).clearText();
                    } else {
                        qq(textEl).setText(text);
                    }
                }
            },
            hideSpinner: function(id) {
                qq(getFile(id)).removeClass(IN_PROGRESS_CLASS);
                hide(getSpinner(id));
            },
            showSpinner: function(id) {
                qq(getFile(id)).addClass(IN_PROGRESS_CLASS);
                show(getSpinner(id));
            },
            generatePreview: function(id, optFileOrBlob, customResizeFunction) {
                if (!this.isHiddenForever(id)) {
                    thumbGenerationQueue.push({
                        id: id,
                        customResizeFunction: customResizeFunction,
                        optFileOrBlob: optFileOrBlob
                    });
                    !thumbnailQueueMonitorRunning && generateNextQueuedPreview();
                }
            },
            updateThumbnail: function(id, thumbnailUrl, showWaitingImg, customResizeFunction) {
                if (!this.isHiddenForever(id)) {
                    thumbGenerationQueue.push({
                        customResizeFunction: customResizeFunction,
                        update: true,
                        id: id,
                        thumbnailUrl: thumbnailUrl,
                        showWaitingImg: showWaitingImg
                    });
                    !thumbnailQueueMonitorRunning && generateNextQueuedPreview();
                }
            },
            hasDialog: function(type) {
                return qq.supportedFeatures.dialogElement && !!getDialog(type);
            },
            showDialog: function(type, message, defaultValue) {
                var dialog = getDialog(type), messageEl = getTemplateEl(dialog, selectorClasses.dialogMessage), inputEl = dialog.getElementsByTagName("INPUT")[0], cancelBtn = getTemplateEl(dialog, selectorClasses.dialogCancelButton), okBtn = getTemplateEl(dialog, selectorClasses.dialogOkButton), promise = new qq.Promise(), closeHandler = function() {
                    cancelBtn.removeEventListener("click", cancelClickHandler);
                    okBtn && okBtn.removeEventListener("click", okClickHandler);
                    promise.failure();
                }, cancelClickHandler = function() {
                    cancelBtn.removeEventListener("click", cancelClickHandler);
                    dialog.close();
                }, okClickHandler = function() {
                    dialog.removeEventListener("close", closeHandler);
                    okBtn.removeEventListener("click", okClickHandler);
                    dialog.close();
                    promise.success(inputEl && inputEl.value);
                };
                dialog.addEventListener("close", closeHandler);
                cancelBtn.addEventListener("click", cancelClickHandler);
                okBtn && okBtn.addEventListener("click", okClickHandler);
                if (inputEl) {
                    inputEl.value = defaultValue;
                }
                messageEl.textContent = message;
                dialog.showModal();
                return promise;
            }
        });
    };
    qq.UiEventHandler = function(s, protectedApi) {
        "use strict";
        var disposer = new qq.DisposeSupport(), spec = {
            eventType: "click",
            attachTo: null,
            onHandled: function(target, event) {}
        };
        qq.extend(this, {
            addHandler: function(element) {
                addHandler(element);
            },
            dispose: function() {
                disposer.dispose();
            }
        });
        function addHandler(element) {
            disposer.attach(element, spec.eventType, function(event) {
                event = event || window.event;
                var target = event.target || event.srcElement;
                spec.onHandled(target, event);
            });
        }
        qq.extend(protectedApi, {
            getFileIdFromItem: function(item) {
                return item.qqFileId;
            },
            getDisposeSupport: function() {
                return disposer;
            }
        });
        qq.extend(spec, s);
        if (spec.attachTo) {
            addHandler(spec.attachTo);
        }
    };
    qq.FileButtonsClickHandler = function(s) {
        "use strict";
        var inheritedInternalApi = {}, spec = {
            templating: null,
            log: function(message, lvl) {},
            onDeleteFile: function(fileId) {},
            onCancel: function(fileId) {},
            onRetry: function(fileId) {},
            onPause: function(fileId) {},
            onContinue: function(fileId) {},
            onGetName: function(fileId) {}
        }, buttonHandlers = {
            cancel: function(id) {
                spec.onCancel(id);
            },
            retry: function(id) {
                spec.onRetry(id);
            },
            deleteButton: function(id) {
                spec.onDeleteFile(id);
            },
            pause: function(id) {
                spec.onPause(id);
            },
            continueButton: function(id) {
                spec.onContinue(id);
            }
        };
        function examineEvent(target, event) {
            qq.each(buttonHandlers, function(buttonType, handler) {
                var firstLetterCapButtonType = buttonType.charAt(0).toUpperCase() + buttonType.slice(1), fileId;
                if (spec.templating["is" + firstLetterCapButtonType](target)) {
                    fileId = spec.templating.getFileId(target);
                    qq.preventDefault(event);
                    spec.log(qq.format("Detected valid file button click event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                    handler(fileId);
                    return false;
                }
            });
        }
        qq.extend(spec, s);
        spec.eventType = "click";
        spec.onHandled = examineEvent;
        spec.attachTo = spec.templating.getFileList();
        qq.extend(this, new qq.UiEventHandler(spec, inheritedInternalApi));
    };
    qq.FilenameClickHandler = function(s) {
        "use strict";
        var inheritedInternalApi = {}, spec = {
            templating: null,
            log: function(message, lvl) {},
            classes: {
                file: "qq-upload-file",
                editNameIcon: "qq-edit-filename-icon"
            },
            onGetUploadStatus: function(fileId) {},
            onGetName: function(fileId) {}
        };
        qq.extend(spec, s);
        function examineEvent(target, event) {
            if (spec.templating.isFileName(target) || spec.templating.isEditIcon(target)) {
                var fileId = spec.templating.getFileId(target), status = spec.onGetUploadStatus(fileId);
                if (status === qq.status.SUBMITTED) {
                    spec.log(qq.format("Detected valid filename click event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                    qq.preventDefault(event);
                    inheritedInternalApi.handleFilenameEdit(fileId, target, true);
                }
            }
        }
        spec.eventType = "click";
        spec.onHandled = examineEvent;
        qq.extend(this, new qq.FilenameEditHandler(spec, inheritedInternalApi));
    };
    qq.FilenameInputFocusInHandler = function(s, inheritedInternalApi) {
        "use strict";
        var spec = {
            templating: null,
            onGetUploadStatus: function(fileId) {},
            log: function(message, lvl) {}
        };
        if (!inheritedInternalApi) {
            inheritedInternalApi = {};
        }
        function handleInputFocus(target, event) {
            if (spec.templating.isEditInput(target)) {
                var fileId = spec.templating.getFileId(target), status = spec.onGetUploadStatus(fileId);
                if (status === qq.status.SUBMITTED) {
                    spec.log(qq.format("Detected valid filename input focus event on file '{}', ID: {}.", spec.onGetName(fileId), fileId));
                    inheritedInternalApi.handleFilenameEdit(fileId, target);
                }
            }
        }
        spec.eventType = "focusin";
        spec.onHandled = handleInputFocus;
        qq.extend(spec, s);
        qq.extend(this, new qq.FilenameEditHandler(spec, inheritedInternalApi));
    };
    qq.FilenameInputFocusHandler = function(spec) {
        "use strict";
        spec.eventType = "focus";
        spec.attachTo = null;
        qq.extend(this, new qq.FilenameInputFocusInHandler(spec, {}));
    };
    qq.FilenameEditHandler = function(s, inheritedInternalApi) {
        "use strict";
        var spec = {
            templating: null,
            log: function(message, lvl) {},
            onGetUploadStatus: function(fileId) {},
            onGetName: function(fileId) {},
            onSetName: function(fileId, newName) {},
            onEditingStatusChange: function(fileId, isEditing) {}
        };
        function getFilenameSansExtension(fileId) {
            var filenameSansExt = spec.onGetName(fileId), extIdx = filenameSansExt.lastIndexOf(".");
            if (extIdx > 0) {
                filenameSansExt = filenameSansExt.substr(0, extIdx);
            }
            return filenameSansExt;
        }
        function getOriginalExtension(fileId) {
            var origName = spec.onGetName(fileId);
            return qq.getExtension(origName);
        }
        function handleNameUpdate(newFilenameInputEl, fileId) {
            var newName = newFilenameInputEl.value, origExtension;
            if (newName !== undefined && qq.trimStr(newName).length > 0) {
                origExtension = getOriginalExtension(fileId);
                if (origExtension !== undefined) {
                    newName = newName + "." + origExtension;
                }
                spec.onSetName(fileId, newName);
            }
            spec.onEditingStatusChange(fileId, false);
        }
        function registerInputBlurHandler(inputEl, fileId) {
            inheritedInternalApi.getDisposeSupport().attach(inputEl, "blur", function() {
                handleNameUpdate(inputEl, fileId);
            });
        }
        function registerInputEnterKeyHandler(inputEl, fileId) {
            inheritedInternalApi.getDisposeSupport().attach(inputEl, "keyup", function(event) {
                var code = event.keyCode || event.which;
                if (code === 13) {
                    handleNameUpdate(inputEl, fileId);
                }
            });
        }
        qq.extend(spec, s);
        spec.attachTo = spec.templating.getFileList();
        qq.extend(this, new qq.UiEventHandler(spec, inheritedInternalApi));
        qq.extend(inheritedInternalApi, {
            handleFilenameEdit: function(id, target, focusInput) {
                var newFilenameInputEl = spec.templating.getEditInput(id);
                spec.onEditingStatusChange(id, true);
                newFilenameInputEl.value = getFilenameSansExtension(id);
                if (focusInput) {
                    newFilenameInputEl.focus();
                }
                registerInputBlurHandler(newFilenameInputEl, id);
                registerInputEnterKeyHandler(newFilenameInputEl, id);
            }
        });
    };
})(window);
//# sourceMappingURL=fine-uploader.js.map

/***/ }),

/***/ "./node_modules/fine-uploader/lib/traditional.js":
/*!*******************************************************!*\
  !*** ./node_modules/fine-uploader/lib/traditional.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ../fine-uploader/fine-uploader */ "./node_modules/fine-uploader/fine-uploader/fine-uploader.js");


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--9-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-2!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader??ref--9-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--9-2!../vue-loader/lib??vue-loader-options!./vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-datepicker/vue-datepicker.vue":
/*!********************************************************!*\
  !*** ./node_modules/vue-datepicker/vue-datepicker.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_datepicker_vue_vue_type_template_id_3faef998_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-datepicker.vue?vue&type=template&id=3faef998&scoped=true& */ "./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=template&id=3faef998&scoped=true&");
/* harmony import */ var _vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-datepicker.vue?vue&type=script&lang=js& */ "./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_datepicker_vue_vue_type_style_index_0_id_3faef998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css& */ "./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css&");
/* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vue_datepicker_vue_vue_type_template_id_3faef998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vue_datepicker_vue_vue_type_template_id_3faef998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3faef998",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/vue-datepicker/vue-datepicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib??vue-loader-options!./vue-datepicker.vue?vue&type=script&lang=js& */ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_9_2_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_style_index_0_id_3faef998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../style-loader!../css-loader??ref--9-1!../vue-loader/lib/loaders/stylePostLoader.js!../postcss-loader/src??ref--9-2!../vue-loader/lib??vue-loader-options!./vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=style&index=0&id=3faef998&scoped=true&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_9_2_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_style_index_0_id_3faef998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_9_2_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_style_index_0_id_3faef998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_9_2_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_style_index_0_id_3faef998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_9_2_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_style_index_0_id_3faef998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_9_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_9_2_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_style_index_0_id_3faef998_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=template&id=3faef998&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=template&id=3faef998&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_template_id_3faef998_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../vue-loader/lib??vue-loader-options!./vue-datepicker.vue?vue&type=template&id=3faef998&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=template&id=3faef998&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_template_id_3faef998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_vue_datepicker_vue_vue_type_template_id_3faef998_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/vue-loader/lib/index.js?!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    required: false,
    date: {
      type: Object,
      required: true
    },
    option: {
      type: Object,
      default: function _default() {
        return {
          type: 'day',
          SundayFirst: false,
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD',
          color: {
            checked: '#F50057',
            header: '#3f51b5',
            headerText: '#fff'
          },
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #fff',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          placeholder: 'when?',
          buttons: {
            ok: 'OK',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5,
          dismissible: true
        };
      }
    },
    limit: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  data: function data() {
    function hours() {
      var list = [];
      var hour = 24;
      while (hour > 0) {
        hour--;
        list.push({
          checked: false,
          value: hour < 10 ? '0' + hour : hour
        });
      }
      return list;
    }
    function mins() {
      var list = [];
      var min = 60;
      while (min > 0) {
        min--;
        list.push({
          checked: false,
          value: min < 10 ? '0' + min : min
        });
      }
      return list;
    }
    return {
      hours: hours(),
      mins: mins(),
      showInfo: {
        hour: false,
        day: false,
        month: false,
        year: false,
        check: false
      },
      displayInfo: {
        month: ''
      },
      library: {
        week: this.option.week,
        month: this.option.month,
        year: []
      },
      checked: {
        oldtime: '',
        currentMoment: null,
        year: '',
        month: '',
        day: '',
        hour: '00',
        min: '00'
      },
      dayList: [],
      selectedDays: []
    };
  },

  methods: {
    pad: function pad(n) {
      n = Math.floor(n);
      return n < 10 ? '0' + n : n;
    },
    nextMonth: function nextMonth(type) {
      var next = null;
      type === 'next' ? next = (0, _moment2.default)(this.checked.currentMoment).add(1, 'M') : next = (0, _moment2.default)(this.checked.currentMoment).add(-1, 'M');
      this.showDay(next);
    },
    showDay: function showDay(time) {
      if (time === undefined || !Date.parse(time)) {
        this.checked.currentMoment = (0, _moment2.default)();
      } else {
        this.checked.currentMoment = (0, _moment2.default)(time, this.option.format);
      }
      this.showOne('day');
      this.checked.year = (0, _moment2.default)(this.checked.currentMoment).format('YYYY');
      this.checked.month = (0, _moment2.default)(this.checked.currentMoment).format('MM');
      this.checked.day = (0, _moment2.default)(this.checked.currentMoment).format('DD');
      this.displayInfo.month = this.library.month[(0, _moment2.default)(this.checked.currentMoment).month()];
      var days = [];
      var currentMoment = this.checked.currentMoment;
      var firstDay = (0, _moment2.default)(currentMoment).date(1).day();
      // gettting previous and next month
      // let currentMonth = moment(currentMoment)
      var previousMonth = (0, _moment2.default)(currentMoment);
      var nextMonth = (0, _moment2.default)(currentMoment);
      nextMonth.add(1, 'months');
      previousMonth.subtract(1, 'months');
      var monthDays = (0, _moment2.default)(currentMoment).daysInMonth();
      var oldtime = this.checked.oldtime;
      for (var i = 1; i <= monthDays; ++i) {
        days.push({
          value: i,
          inMonth: true,
          unavailable: false,
          checked: false,
          moment: (0, _moment2.default)(currentMoment).date(i)
        });
        if (i === Math.ceil((0, _moment2.default)(currentMoment).format('D')) && (0, _moment2.default)(oldtime, this.option.format).year() === (0, _moment2.default)(currentMoment).year() && (0, _moment2.default)(oldtime, this.option.format).month() === (0, _moment2.default)(currentMoment).month()) {
          days[i - 1].checked = true;
        }
        this.checkBySelectDays(i, days);
      }
      if (firstDay === 0) firstDay = 7;
      for (var _i = 0; _i < firstDay - (this.option.SundayFirst ? 0 : 1); _i++) {
        var passiveDay = {
          value: previousMonth.daysInMonth() - _i,
          inMonth: false,
          action: 'previous',
          unavailable: false,
          checked: false,
          moment: (0, _moment2.default)(currentMoment).date(1).subtract(_i + 1, 'days')
        };
        days.unshift(passiveDay);
      }
      if (this.limit.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.limit[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var li = _step.value;

            switch (li.type) {
              case 'fromto':
                days = this.limitFromTo(li, days);
                break;
              case 'weekday':
                days = this.limitWeekDay(li, days);
                break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
      var passiveDaysAtFinal = 42 - days.length;
      for (var _i2 = 1; _i2 <= passiveDaysAtFinal; _i2++) {
        var _passiveDay = {
          value: _i2,
          inMonth: false,
          action: 'next',
          unavailable: false,
          checked: false,
          moment: (0, _moment2.default)(currentMoment).add(1, 'months').date(_i2)
        };
        days.push(_passiveDay);
      }
      this.dayList = days;
    },
    checkBySelectDays: function checkBySelectDays(d, days) {
      var _this = this;

      this.selectedDays.forEach(function (day) {
        if (_this.checked.year === (0, _moment2.default)(day).format('YYYY') && _this.checked.month === (0, _moment2.default)(day).format('MM') && d === Math.ceil((0, _moment2.default)(day).format('D'))) {
          days[d - 1].checked = true;
        }
      });
    },
    limitWeekDay: function limitWeekDay(limit, days) {
      days.map(function (day) {
        if (limit.available.indexOf(Math.floor(day.moment.format('d'))) === -1) {
          day.unavailable = true;
        }
      });
      return days;
    },
    limitFromTo: function limitFromTo(limit, days) {
      var _this2 = this;

      if (limit.from || limit.to) {
        days.map(function (day) {
          if (_this2.getLimitCondition(limit, day)) {
            day.unavailable = true;
          }
        });
      }
      return days;
    },
    getLimitCondition: function getLimitCondition(limit, day) {
      var tmpMoment = (0, _moment2.default)(this.checked.year + '-' + this.pad(this.checked.month) + '-' + this.pad(day.value));
      if (limit.from && !limit.to) {
        return !tmpMoment.isAfter(limit.from);
      } else if (!limit.from && limit.to) {
        return !tmpMoment.isBefore(limit.to);
      } else {
        return !tmpMoment.isBetween(limit.from, limit.to);
      }
    },
    checkDay: function checkDay(obj) {
      if (obj.unavailable || obj.value === '') {
        return false;
      }
      if (!obj.inMonth) {
        this.nextMonth(obj.action);
      }
      if (this.option.type === 'day' || this.option.type === 'min') {
        this.dayList.forEach(function (x) {
          x.checked = false;
        });
        this.checked.day = this.pad(obj.value);
        obj.checked = true;
      } else {
        var day = this.pad(obj.value);
        var ctime = this.checked.year + '-' + this.checked.month + '-' + day;
        if (obj.checked === true) {
          obj.checked = false;
          this.selectedDays.$remove(ctime);
        } else {
          this.selectedDays.push(ctime);
          obj.checked = true;
        }
      }
      switch (this.option.type) {
        case 'day':
          this.picked();
          break;
        case 'min':
          this.showOne('hour');
          // shift activated time items to visible position.
          this.shiftActTime();
          break;
      }
    },
    showYear: function showYear() {
      var _this3 = this;

      var year = (0, _moment2.default)(this.checked.currentMoment).year();
      this.library.year = [];
      var yearTmp = [];
      for (var i = year - 100; i < year + 5; ++i) {
        yearTmp.push(i);
      }
      this.library.year = yearTmp;
      this.showOne('year');
      this.$nextTick(function () {
        var listDom = document.getElementById('yearList');
        listDom.scrollTop = listDom.scrollHeight - 100;
        _this3.addYear();
      });
    },
    showOne: function showOne(type) {
      switch (type) {
        case 'year':
          this.showInfo.hour = false;
          this.showInfo.day = false;
          this.showInfo.year = true;
          this.showInfo.month = false;
          break;
        case 'month':
          this.showInfo.hour = false;
          this.showInfo.day = false;
          this.showInfo.year = false;
          this.showInfo.month = true;
          break;
        case 'day':
          this.showInfo.hour = false;
          this.showInfo.day = true;
          this.showInfo.year = false;
          this.showInfo.month = false;
          break;
        case 'hour':
          this.showInfo.hour = true;
          this.showInfo.day = false;
          this.showInfo.year = false;
          this.showInfo.month = false;
          break;
        default:
          this.showInfo.day = true;
          this.showInfo.year = false;
          this.showInfo.month = false;
          this.showInfo.hour = false;
      }
    },
    showMonth: function showMonth() {
      this.showOne('month');
    },
    addYear: function addYear() {
      var _this4 = this;

      var listDom = document.getElementById('yearList');
      listDom.addEventListener('scroll', function (e) {
        if (listDom.scrollTop < listDom.scrollHeight - 100) {
          var len = _this4.library.year.length;
          var lastYear = _this4.library.year[len - 1];
          _this4.library.year.push(lastYear + 1);
        }
      }, false);
    },
    setYear: function setYear(year) {
      this.checked.currentMoment = (0, _moment2.default)(year + '-' + this.checked.month + '-' + this.checked.day);
      this.showDay(this.checked.currentMoment);
    },
    setMonth: function setMonth(month) {
      var mo = this.library.month.indexOf(month) + 1;
      if (mo < 10) {
        mo = '0' + '' + mo;
      }
      this.checked.currentMoment = (0, _moment2.default)(this.checked.year + '-' + mo + '-' + this.checked.day);
      this.showDay(this.checked.currentMoment);
    },
    showCheck: function showCheck() {
      if (this.date.time === '') {
        this.showDay();
      } else {
        if (this.option.type === 'day' || this.option.type === 'min') {
          this.checked.oldtime = this.date.time;
          this.showDay(this.date.time);
        } else {
          this.selectedDays = JSON.parse(this.date.time);
          if (this.selectedDays.length) {
            this.checked.oldtime = this.selectedDays[0];
            this.showDay(this.selectedDays[0]);
          } else {
            this.showDay();
          }
        }
      }
      this.showInfo.check = true;
    },
    setTime: function setTime(type, obj, list) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          item.checked = false;
          if (item.value === obj.value) {
            item.checked = true;
            this.checked[type] = item.value;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    },
    picked: function picked() {
      if (this.option.type === 'day' || this.option.type === 'min') {
        var ctime = this.checked.year + '-' + this.checked.month + '-' + this.checked.day + ' ' + this.checked.hour + ':' + this.checked.min;
        this.checked.currentMoment = (0, _moment2.default)(ctime, 'YYYY-MM-DD HH:mm');
        this.date.time = (0, _moment2.default)(this.checked.currentMoment).format(this.option.format);
      } else {
        this.date.time = JSON.stringify(this.selectedDays);
      }
      this.showInfo.check = false;
      this.$emit('change', this.date.time);
    },
    dismiss: function dismiss(evt) {
      if (evt.target.className === 'datepicker-overlay') {
        if (this.option.dismissible === undefined || this.option.dismissible) {
          this.showInfo.check = false;
          this.$emit('cancel');
        }
      }
    },
    shiftActTime: function shiftActTime() {
      // shift activated time items to visible position.
      this.$nextTick(function () {
        if (!document.querySelector('.hour-item.active')) {
          return false;
        }
        document.querySelector('.hour-box').scrollTop = (document.querySelector('.hour-item.active').offsetTop || 0) - 250;
        document.querySelector('.min-box').scrollTop = (document.querySelector('.min-item.active').offsetTop || 0) - 250;
      });
    }
  }
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=template&id=3faef998&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/vue-datepicker/vue-datepicker.vue?vue&type=template&id=3faef998&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "cov-vue-date" }, [
    _c("div", { staticClass: "datepickbox" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.date.time,
            expression: "date.time"
          }
        ],
        staticClass: "cov-datepicker",
        style: _vm.option.inputStyle ? _vm.option.inputStyle : {},
        attrs: {
          type: "text",
          title: "input date",
          readonly: "readonly",
          placeholder: _vm.option.placeholder,
          required: _vm.required
        },
        domProps: { value: _vm.date.time },
        on: {
          click: _vm.showCheck,
          foucus: _vm.showCheck,
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.$set(_vm.date, "time", $event.target.value)
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm.showInfo.check
      ? _c(
          "div",
          {
            staticClass: "datepicker-overlay",
            style: {
              background: _vm.option.overlayOpacity
                ? "rgba(0,0,0," + _vm.option.overlayOpacity + ")"
                : "rgba(0,0,0,0.5)"
            },
            on: {
              click: function($event) {
                return _vm.dismiss($event)
              }
            }
          },
          [
            _c(
              "div",
              {
                staticClass: "cov-date-body",
                style: {
                  "background-color": _vm.option.color
                    ? _vm.option.color.header
                    : "#3f51b5"
                }
              },
              [
                _c("div", { staticClass: "cov-date-monthly" }, [
                  _c(
                    "div",
                    {
                      staticClass: "cov-date-previous",
                      on: {
                        click: function($event) {
                          return _vm.nextMonth("pre")
                        }
                      }
                    },
                    [_vm._v("«")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "cov-date-caption",
                      style: {
                        color: _vm.option.color
                          ? _vm.option.color.headerText
                          : "#fff"
                      }
                    },
                    [
                      _c("span", { on: { click: _vm.showYear } }, [
                        _c("small", [_vm._v(_vm._s(_vm.checked.year))])
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { on: { click: _vm.showMonth } }, [
                        _vm._v(_vm._s(_vm.displayInfo.month))
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "cov-date-next",
                      on: {
                        click: function($event) {
                          return _vm.nextMonth("next")
                        }
                      }
                    },
                    [_vm._v("»")]
                  )
                ]),
                _vm._v(" "),
                _vm.showInfo.day
                  ? _c("div", { staticClass: "cov-date-box" }, [
                      _c(
                        "div",
                        { staticClass: "cov-picker-box" },
                        [
                          _c("div", { staticClass: "week" }, [
                            _c(
                              "ul",
                              _vm._l(_vm.library.week, function(weekie) {
                                return _c("li", [_vm._v(_vm._s(weekie))])
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.dayList, function(day) {
                            return _c(
                              "div",
                              {
                                staticClass: "day",
                                class: {
                                  checked: day.checked,
                                  unavailable: day.unavailable,
                                  "passive-day": !day.inMonth
                                },
                                style: day.checked
                                  ? _vm.option.color &&
                                    _vm.option.color.checkedDay
                                    ? {
                                        background: _vm.option.color.checkedDay
                                      }
                                    : { background: "#F50057" }
                                  : {},
                                attrs: { "track-by": "$index" },
                                on: {
                                  click: function($event) {
                                    return _vm.checkDay(day)
                                  }
                                }
                              },
                              [_vm._v(_vm._s(day.value))]
                            )
                          })
                        ],
                        2
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.showInfo.year
                  ? _c("div", { staticClass: "cov-date-box list-box" }, [
                      _c(
                        "div",
                        {
                          staticClass: "cov-picker-box date-list",
                          attrs: { id: "yearList" }
                        },
                        _vm._l(_vm.library.year, function(yearItem) {
                          return _c(
                            "div",
                            {
                              staticClass: "date-item",
                              attrs: { "track-by": "$index" },
                              on: {
                                click: function($event) {
                                  return _vm.setYear(yearItem)
                                }
                              }
                            },
                            [_vm._v(_vm._s(yearItem))]
                          )
                        }),
                        0
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.showInfo.month
                  ? _c("div", { staticClass: "cov-date-box list-box" }, [
                      _c(
                        "div",
                        { staticClass: "cov-picker-box date-list" },
                        _vm._l(_vm.library.month, function(monthItem) {
                          return _c(
                            "div",
                            {
                              staticClass: "date-item",
                              attrs: { "track-by": "$index" },
                              on: {
                                click: function($event) {
                                  return _vm.setMonth(monthItem)
                                }
                              }
                            },
                            [_vm._v(_vm._s(monthItem))]
                          )
                        }),
                        0
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.showInfo.hour
                  ? _c("div", { staticClass: "cov-date-box list-box" }, [
                      _c("div", { staticClass: "cov-picker-box date-list" }, [
                        _c("div", { staticClass: "watch-box" }, [
                          _c("div", { staticClass: "hour-box" }, [
                            _c("div", {
                              staticClass: "mui-pciker-rule mui-pciker-rule-ft"
                            }),
                            _vm._v(" "),
                            _c(
                              "ul",
                              _vm._l(_vm.hours, function(hitem) {
                                return _c(
                                  "li",
                                  {
                                    staticClass: "hour-item",
                                    class: { active: hitem.checked },
                                    on: {
                                      click: function($event) {
                                        return _vm.setTime(
                                          "hour",
                                          hitem,
                                          _vm.hours
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(hitem.value))]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "min-box" },
                            [
                              _c("div", {
                                staticClass:
                                  "mui-pciker-rule mui-pciker-rule-ft"
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.mins, function(mitem) {
                                return _c(
                                  "div",
                                  {
                                    staticClass: "min-item",
                                    class: { active: mitem.checked },
                                    on: {
                                      click: function($event) {
                                        return _vm.setTime(
                                          "min",
                                          mitem,
                                          _vm.mins
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(mitem.value))]
                                )
                              })
                            ],
                            2
                          )
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "button-box" }, [
                  _c(
                    "span",
                    {
                      on: {
                        click: function($event) {
                          _vm.showInfo.check = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        _vm._s(
                          _vm.option.buttons
                            ? _vm.option.buttons.cancel
                            : "Cancel"
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("span", { on: { click: _vm.picked } }, [
                    _vm._v(
                      _vm._s(_vm.option.buttons ? _vm.option.buttons.ok : "Ok")
                    )
                  ])
                ])
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);