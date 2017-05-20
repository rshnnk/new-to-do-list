(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _navigation = require('./modules/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _gallery = require('./modules/gallery');

var _gallery2 = _interopRequireDefault(_gallery);

var _reviews = require('./modules/reviews');

var _reviews2 = _interopRequireDefault(_reviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
    'use strict';

    // When DOM is ready

    $(function () {
        _navigation2.default.init();
        _gallery2.default.init();
        _reviews2.default.init();
    });
})(jQuery);

},{"./modules/gallery":2,"./modules/navigation":3,"./modules/reviews":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var gallery = {
    init: function init() {
        var mySwiper = new Swiper('#gallery', {
            loop: true,
            autoplay: 5000,
            nextButton: '.gallery-btn--next',
            prevButton: '.gallery-btn--prev',
            slidesPerView: 'auto',
            spaceBetween: 6
        });
    }
};

exports.default = gallery;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var navigation = {
    init: function init() {
        var navigation = responsiveNav(".nav-collapse", {
            customToggle: ".nav-toggle",
            closeOnNavClick: true
        });
    }
};

exports.default = navigation;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var reviews = {
    init: function init() {
        var mySwiper = new Swiper('#reviews', {
            autoplay: 5000,
            slidesPerView: 'auto',
            pagination: '.gallery-pagination',
            paginationClickable: true
        });
    }
};

exports.default = reviews;

},{}]},{},[1]);
