"use strict";

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var Page = (function (_Component) {
  _inherits(Page, _Component);

  function Page() {
    _classCallCheck(this, Page);

    _Component.apply(this, arguments);
  }

  // TODO Possible PERF OPTIMIZATION remove translateXOffset and translateYOffset from
  // here and do imperative DOM operations (translate) inside Slider.

  // This is posibly blocked until the above todo.
  // Implement shouldComponentUpdate so that setTimeout state change only effects
  // on the edge. May be have an edge key inside state??

  Page.prototype.render = function render() {
    var _props = this.props;
    var pageStyle = _props.pageStyle;
    var className = _props.className;

    return _react2["default"].createElement(
      "div",
      { className: className, style: pageStyle },
      this.props.children
    );
  };

  _createClass(Page, null, [{
    key: "propTypes",
    value: {
      children: _propTypes2["default"].any,
      className: _propTypes2["default"].string,
      pageStyle: _propTypes2["default"].any
    },
    enumerable: true
  }]);

  return Page;
})(_react.Component);

var Track = (function (_Component2) {
  _inherits(Track, _Component2);

  _createClass(Track, null, [{
    key: "propTypes",
    value: {
      children: _propTypes2["default"].any,
      infinite: _propTypes2["default"].bool.isRequired,
      vertical: _propTypes2["default"].bool.isRequired,
      swipe: _propTypes2["default"].bool.isRequired,
      draggable: _propTypes2["default"].bool.isRequired,
      currentSlide: _propTypes2["default"].number.isRequired,
      pageClass: _propTypes2["default"].string,
      transitionSpeed: _propTypes2["default"].number.isRequired,
      transitionTimingFn: _propTypes2["default"].string.isRequired,
      beforeChange: _propTypes2["default"].func,
      afterChange: _propTypes2["default"].func,
      translateXOffset: _propTypes2["default"].number,
      translateYOffset: _propTypes2["default"].number
    },
    enumerable: true
  }]);

  function Track(props, context) {
    _classCallCheck(this, Track);

    _Component2.call(this, props, context);
    this.state = {
      previousSlide: undefined
    };
  }

  Track.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    // TODO May be move this to Slider
    var currentSlide = this.props.currentSlide;
    var previousSlide = this.state.previousSlide;

    this.setState({
      previousSlide: previousSlide !== currentSlide ? currentSlide : previousSlide
    });
  };

  Track.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    var _props2 = this.props;
    var swipe = _props2.swipe;
    var draggable = _props2.draggable;

    if (swipe === false && draggable === false) {
      return this.state.previousSlide !== nextProps.currentSlide;
    }

    return true;
  };

  Track.prototype.componentWillUpdate = function componentWillUpdate() {
    if (this.props.beforeChange !== undefined) {
      this.props.beforeChange(this.state.previousSlide, this.props.currentSlide);
    }
  };

  Track.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.afterChange !== undefined) {
      this.props.afterChange(this.state.previousSlide, this.props.currentSlide);
    }
  };

  Track.prototype.computeTrackStyle = function computeTrackStyle() {
    var _props3 = this.props;
    var vertical = _props3.vertical;
    var currentSlide = _props3.currentSlide;
    var infinite = _props3.infinite;
    var translateXOffset = _props3.translateXOffset;
    var translateYOffset = _props3.translateYOffset;
    var transitionSpeed = _props3.transitionSpeed;
    var transitionTimingFn = _props3.transitionTimingFn;

    var slideCount = _react.Children.count(this.props.children);
    var totalCount = slideCount + (infinite === true ? 2 : 0);
    var previousSlide = this.state.previousSlide;

    var preSlideCount = infinite === true ? 1 : 0;

    var trackWidth = vertical ? "100%" : 100 * totalCount + "%";
    var trackHeight = vertical ? 100 * totalCount + "%" : "100%";
    var translate = 100 * (currentSlide + preSlideCount) / totalCount;
    var translateX = vertical === false ? translate - translateXOffset : 0;
    var translateY = vertical === true ? translate - translateYOffset : 0;
    var trackTransform = "translate3d(" + -translateX + "%, " + -translateY + "%, 0)";
    var trackTransition = infinite === true && (previousSlide === -1 && currentSlide === slideCount - 1 || previousSlide === slideCount && currentSlide === 0) || translateXOffset !== 0 || translateYOffset !== 0 ? "" : "all " + transitionSpeed + "ms " + transitionTimingFn;
    var flexDirection = vertical ? "column" : "row";

    var trackStyle = {
      width: trackWidth,
      height: trackHeight,
      display: "flex",
      flexDirection: flexDirection,
      flexShrink: 0,
      transform: trackTransform,
      transition: trackTransition
    };

    return trackStyle;
  };

  Track.prototype.computePageStyle = function computePageStyle() {
    var _props4 = this.props;
    var vertical = _props4.vertical;
    var infinite = _props4.infinite;

    var slideCount = _react.Children.count(this.props.children);
    var totalCount = slideCount + (infinite === true ? 2 : 0);

    var pageWidth = vertical ? "100%" : 100 / totalCount + "%";
    var pageHeight = vertical ? 100 / totalCount + "%" : "100%";
    var pageStyle = {
      width: pageWidth,
      height: pageHeight,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };

    return pageStyle;
  };

  Track.prototype.render = function render() {
    var _props5 = this.props;
    var pageClass = _props5.pageClass;
    var infinite = _props5.infinite;

    var slideCount = _react.Children.count(this.props.children);
    var totalCount = slideCount + (infinite === true ? 2 : 0);

    var trackStyle = this.computeTrackStyle();
    var pageStyle = this.computePageStyle();

    var slides = _react.Children.map(this.props.children, function (child, i) {
      return _react2["default"].createElement(
        Page,
        { pageStyle: pageStyle, className: pageClass },
        _react.cloneElement(child, { key: i })
      );
    });

    var preSlides = slideCount === 1 || infinite === false ? null : _react2["default"].createElement(
      Page,
      { pageStyle: pageStyle, className: pageClass, pre: true },
      _react.cloneElement(this.props.children[slideCount - 1], { key: -1 })
    );

    var postSlides = slideCount === 1 || infinite === false ? null : _react2["default"].createElement(
      Page,
      { pageStyle: pageStyle, className: pageClass, post: true },
      _react.cloneElement(this.props.children[0], { key: totalCount })
    );

    return _react2["default"].createElement(
      "div",
      { style: trackStyle },
      preSlides,
      slides,
      postSlides
    );
  };

  return Track;
})(_react.Component);

var Slides = (function (_Component3) {
  _inherits(Slides, _Component3);

  function Slides() {
    _classCallCheck(this, Slides);

    _Component3.apply(this, arguments);
  }

  Slides.prototype.render = function render() {
    var _props6 = this.props;
    var width = _props6.width;
    var height = _props6.height;
    var children = _props6.children;
    var onMouseDown = _props6.onMouseDown;
    var onMouseMove = _props6.onMouseMove;
    var onMouseUp = _props6.onMouseUp;
    var onMouseLeave = _props6.onMouseLeave;
    var onTouchStart = _props6.onTouchStart;
    var onTouchMove = _props6.onTouchMove;
    var onTouchEnd = _props6.onTouchEnd;
    var onTouchCancel = _props6.onTouchCancel;

    var props = _objectWithoutProperties(_props6, ["width", "height", "children", "onMouseDown", "onMouseMove", "onMouseUp", "onMouseLeave", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"]);

    var containerWidth = width === 0 ? "100%" : width;
    var containerHeight = height === 0 ? "100%" : height;
    var containerStyle = {
      width: containerWidth,
      height: containerHeight,
      display: "flex",
      overflow: "hidden"
    };

    return _react2["default"].createElement(
      "div",
      {
        style: containerStyle,
        onMouseDown: onMouseDown,
        onMouseMove: onMouseMove,
        onMouseUp: onMouseUp,
        onMouseLeave: onMouseLeave,
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        onTouchCancel: onTouchCancel
      },
      _react2["default"].createElement(
        Track,
        props,
        this.props.children
      )
    );
  };

  _createClass(Slides, null, [{
    key: "propTypes",
    value: {
      children: _propTypes2["default"].any,
      width: _propTypes2["default"].number,
      height: _propTypes2["default"].number,
      currentSlide: _propTypes2["default"].number,
      infinite: _propTypes2["default"].bool,
      vertical: _propTypes2["default"].bool,
      swipe: _propTypes2["default"].bool,
      draggable: _propTypes2["default"].bool,
      pageClass: _propTypes2["default"].string,
      transitionSpeed: _propTypes2["default"].number,
      transitionTimingFn: _propTypes2["default"].string,
      onMouseDown: _propTypes2["default"].func,
      onMouseMove: _propTypes2["default"].func,
      onMouseUp: _propTypes2["default"].func,
      onMouseLeave: _propTypes2["default"].func,
      onTouchStart: _propTypes2["default"].func,
      onTouchMove: _propTypes2["default"].func,
      onTouchEnd: _propTypes2["default"].func,
      onTouchCancel: _propTypes2["default"].func,
      beforeChange: _propTypes2["default"].func,
      afterChange: _propTypes2["default"].func,
      translateXOffset: _propTypes2["default"].number,
      translateYOffset: _propTypes2["default"].number
    },
    enumerable: true
  }, {
    key: "defaultProps",
    value: {
      width: 0,
      height: 0
    },
    enumerable: true
  }]);

  return Slides;
})(_react.Component);

exports["default"] = Slides;
module.exports = exports["default"];