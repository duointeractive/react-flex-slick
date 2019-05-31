'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _src = require('../src');

require('./index.css');

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    _Component.apply(this, arguments);
  }

  App.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      { style: { display: 'flex', flexDirection: 'column', alignItems: 'center' } },
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          'Non Infinite'
        ),
        _react2['default'].createElement(NonInfinite, { width: 580, height: 150 })
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          'Infinite'
        ),
        _react2['default'].createElement(Infinite, { width: 580, height: 150 })
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          'Custom arrows'
        ),
        _react2['default'].createElement(CustomArrows, { width: 580, height: 150 })
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          'Control Play (will autoPlay after 5s)'
        ),
        _react2['default'].createElement(ControlPlay, { width: 580, height: 150 })
      ),
      _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h2',
          null,
          'Set slide to show (will show the 6th slide after 5s)'
        ),
        _react2['default'].createElement(SetSlide, { width: 580, height: 150 })
      )
    );
  };

  return App;
})(_react.Component);

var slideStyle = {
  width: 540,
  height: 125,
  backgroundColor: 'slateblue',
  color: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

var NonInfinite = (function (_Component2) {
  _inherits(NonInfinite, _Component2);

  function NonInfinite() {
    _classCallCheck(this, NonInfinite);

    _Component2.apply(this, arguments);
  }

  NonInfinite.prototype.render = function render() {
    return _react2['default'].createElement(
      _src.Slider,
      null,
      _react2['default'].createElement(_src.PrevArrow, { activeClassName: 'non-infinite-left--active',
        inactiveClassName: 'non-infinite-left--inactive' }),
      _react2['default'].createElement(
        _src.Slides,
        this.props,
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '1'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '2'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '3'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '4'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '5'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '6'
          )
        )
      ),
      _react2['default'].createElement(_src.NextArrow, { activeClassName: 'non-infinite-right--active',
        inactiveClassName: 'non-infinite-right--inactive' }),
      _react2['default'].createElement(_src.Dots, null)
    );
  };

  return NonInfinite;
})(_react.Component);

var Infinite = (function (_Component3) {
  _inherits(Infinite, _Component3);

  function Infinite() {
    _classCallCheck(this, Infinite);

    _Component3.apply(this, arguments);
  }

  Infinite.prototype.render = function render() {
    return _react2['default'].createElement(
      _src.Slider,
      { infinite: true, swipe: true, draggable: true },
      _react2['default'].createElement(_src.PrevArrow, null),
      _react2['default'].createElement(
        _src.Slides,
        this.props,
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '1'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '2'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '3'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '4'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '5'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '6'
          )
        )
      ),
      _react2['default'].createElement(_src.NextArrow, null),
      _react2['default'].createElement(_src.Dots, null)
    );
  };

  return Infinite;
})(_react.Component);

var CustomArrows = (function (_Component4) {
  _inherits(CustomArrows, _Component4);

  function CustomArrows() {
    _classCallCheck(this, CustomArrows);

    _Component4.apply(this, arguments);
  }

  CustomArrows.prototype.render = function render() {
    return _react2['default'].createElement(
      _src.Slider,
      { infinite: true, swipe: true, draggable: true },
      _react2['default'].createElement(
        'button',
        null,
        'Prev'
      ),
      _react2['default'].createElement(
        _src.Slides,
        this.props,
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '1'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '2'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '3'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '4'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '5'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '6'
          )
        )
      ),
      _react2['default'].createElement(
        'button',
        null,
        'Next'
      )
    );
  };

  return CustomArrows;
})(_react.Component);

var ControlPlay = (function (_Component5) {
  _inherits(ControlPlay, _Component5);

  function ControlPlay(props) {
    _classCallCheck(this, ControlPlay);

    _Component5.call(this, props);
    this.state = { playing: false };
  }

  ControlPlay.prototype.componentDidMount = function componentDidMount() {
    var _this = this;

    this.timeout = setTimeout(function () {
      _this.setState({ playing: true });
    }, 5000);
  };

  ControlPlay.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
  };

  ControlPlay.prototype.render = function render() {
    return _react2['default'].createElement(
      _src.Slider,
      { infinite: true, swipe: true, draggable: true, autoPlay: this.state.playing },
      _react2['default'].createElement(
        'button',
        null,
        'Prev'
      ),
      _react2['default'].createElement(
        _src.Slides,
        this.props,
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '1'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '2'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '3'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '4'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '5'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '6'
          )
        )
      ),
      _react2['default'].createElement(
        'button',
        null,
        'Next'
      )
    );
  };

  return ControlPlay;
})(_react.Component);

var SetSlide = (function (_Component6) {
  _inherits(SetSlide, _Component6);

  function SetSlide(props) {
    _classCallCheck(this, SetSlide);

    _Component6.call(this, props);
    this.state = { currentSlide: 0 };
  }

  SetSlide.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timeout = setTimeout(function () {
      _this2.setState({ currentSlide: 5 });
    }, 5000);
  };

  SetSlide.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timeout);
  };

  SetSlide.prototype.render = function render() {
    return _react2['default'].createElement(
      _src.Slider,
      _extends({}, this.state, { infinite: true, swipe: true, draggable: true }),
      _react2['default'].createElement(
        'button',
        null,
        'Prev'
      ),
      _react2['default'].createElement(
        _src.Slides,
        this.props,
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '1'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '2'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '3'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '4'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '5'
          )
        ),
        _react2['default'].createElement(
          'div',
          { style: slideStyle },
          _react2['default'].createElement(
            'h1',
            null,
            '6'
          )
        )
      ),
      _react2['default'].createElement(
        'button',
        null,
        'Next'
      )
    );
  };

  return SetSlide;
})(_react.Component);

exports['default'] = App;

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('root'));
module.exports = exports['default'];