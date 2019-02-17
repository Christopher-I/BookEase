webpackHotUpdate(5,{

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(69);

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(745);

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = __webpack_require__(482);

var _factory = __webpack_require__(684);

var _factory2 = _interopRequireDefault(_factory);

var _getFactorySummary = __webpack_require__(1194);

var _getFactorySummary2 = _interopRequireDefault(_getFactorySummary);

var _getContractSummary = __webpack_require__(1195);

var _getContractSummary2 = _interopRequireDefault(_getContractSummary);

var _deployedContracts = __webpack_require__(742);

var _deployedContracts2 = _interopRequireDefault(_deployedContracts);

var _routes = __webpack_require__(678);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Windows.old.000\\Users\\christopherIgbojekwe\\BookEase\\pages\\index.js?entry';


var ContractIndex = function (_Component) {
  (0, _inherits3.default)(ContractIndex, _Component);

  function ContractIndex() {
    (0, _classCallCheck3.default)(this, ContractIndex);

    return (0, _possibleConstructorReturn3.default)(this, (ContractIndex.__proto__ || (0, _getPrototypeOf2.default)(ContractIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(ContractIndex, [{
    key: 'renderHeader',
    value: function renderHeader() {
      var _this2 = this;

      var LabelExampleDetail = function LabelExampleDetail() {
        return _react2.default.createElement(_semanticUiReact.Label, { style: { marginBottom: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, 'Deployed Contracts', _react2.default.createElement(_semanticUiReact.Label.Detail, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, _this2.props.deployedContractsLength));
      };

      return _react2.default.createElement(LabelExampleDetail, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      });
    }
  }, {
    key: 'renderContracts',
    value: function renderContracts() {
      var _this3 = this;

      //

      var CardExampleGroups = function CardExampleGroups() {
        return _react2.default.createElement(_semanticUiReact.Card.Group, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _this3.props.summary.map(function (summary) {

          return _react2.default.createElement(_semanticUiReact.Card, { style: { width: '400px', height: '200px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }, _react2.default.createElement(_semanticUiReact.Card.Content, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }, _react2.default.createElement(_semanticUiReact.Image, { floated: 'right', size: 'mini', src: 'https://react.semantic-ui.com/images/avatar/large/steve.jpg', __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }), _react2.default.createElement(_semanticUiReact.Card.Header, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }), _react2.default.createElement(_semanticUiReact.Card.Meta, { style: { fontSize: '15px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }, 'Home :', _react2.default.createElement('strong', { style: { fontSize: '15px', color: 'black' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }, summary[1], ' Wei'), ' Away: ', _react2.default.createElement('strong', { style: { fontSize: '15px', color: 'black' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            }
          }, summary[1], ' Wei'), _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }), summary[6], '  ', _react2.default.createElement('strong', { style: { fontSize: '15px', color: 'black' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }, 'VS'), ' ', summary[7], '.', _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          }), 'Date ', summary[3], '/', summary[4], '/', summary[5], '.', _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            }
          }), _react2.default.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          }), 'Enter Bet: ', _react2.default.createElement(_semanticUiReact.Input, { style: { height: '25px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          })), _react2.default.createElement(_semanticUiReact.Card.Description, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            }
          })), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            }
          }, _react2.default.createElement('div', { className: 'ui two buttons', __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          }, _react2.default.createElement(_routes.Link, { route: '/contracts/' + summary[2], __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', style: { font: '10px', width: '180px', height: '40px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            }
          }, 'Bet on ', summary[6])), _react2.default.createElement(_routes.Link, { route: '/contracts/' + summary[2] + '/bid', __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            }
          }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'red', style: { font: '10px', width: '180px', height: '40px' }, __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            }
          }, 'Bet on ', summary[7])))));
        }));
      };
      return _react2.default.createElement(CardExampleGroups, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, this.renderHeader(), this.renderContracts()));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var deployedContractsLength, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedContractsLength().call();

              case 2:
                deployedContractsLength = _context.sent;
                _context.next = 5;
                return _promise2.default.all(Array(parseInt(deployedContractsLength)).fill().map(function (element, index) {
                  return _factory2.default.methods.deployedContracts(index).call();
                }));

              case 5:
                summary = _context.sent;
                return _context.abrupt('return', { summary: summary, deployedContractsLength: deployedContractsLength });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return ContractIndex;
}(_react.Component);

exports.default = ContractIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsIkJ1dHRvbiIsIkljb24iLCJDYXJkIiwiSW1hZ2UiLCJMYWJlbCIsIklucHV0IiwiZmFjdG9yeSIsImdldEZhY3RvcnlTdW1tYXJ5IiwiZ2V0Q29udHJhY3RTdW1tYXJ5IiwiZGVwbG95ZWRDb250cmFjdHMiLCJMaW5rIiwiUm91dGVyIiwiQ29udHJhY3RJbmRleCIsIkxhYmVsRXhhbXBsZURldGFpbCIsIm1hcmdpbkJvdHRvbSIsInByb3BzIiwiZGVwbG95ZWRDb250cmFjdHNMZW5ndGgiLCJDYXJkRXhhbXBsZUdyb3VwcyIsInN1bW1hcnkiLCJtYXAiLCJ3aWR0aCIsImhlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJmb250IiwicmVuZGVySGVhZGVyIiwicmVuZGVyQ29udHJhY3RzIiwibWV0aG9kcyIsImdldERlcGxveWVkQ29udHJhY3RzTGVuZ3RoIiwiY2FsbCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQU8sQUFBTSxBQUFNLEFBQU0sQUFBTTs7QUFDeEMsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBdUI7Ozs7QUFDOUIsQUFBTyxBQUF3Qjs7OztBQUMvQixBQUFPLEFBQXVCOzs7O0FBQzlCLEFBQVMsQUFBTSxBQUFhOzs7Ozs7O0ksQUFJdEI7Ozs7Ozs7Ozs7O21DQXlCUTttQkFDWjs7VUFBTSxxQkFBcUIsU0FBckIsQUFBcUIscUJBQUE7K0JBQzNCLEFBQUMsd0NBQU0sT0FBUyxFQUFDLGNBQWpCLEFBQWdCLEFBQWU7c0JBQS9CO3dCQUFBO0FBQUE7U0FBQSxFQUVFLHNDQUFDLGNBQUQsdUJBQUEsQUFBTzs7c0JB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LE9BQWYsQUFBdUIsU0FBUSxRQUFsRSxBQUFtQyxBQUF1Qzt3QkFBMUU7MEJBQUE7QUFBQTthQUNXLG1CQTdCakIsQUFDQSxBQW1CRSxBQUNFLEFBTUUsQUFDQSxBQUNXLEFBQVEsQUFPeEI7QUF6Q3dCLEFBQzNCLEFBQ0M7QUFGQSxBQTZDRDsyQ0FBTyxBQUFDOztvQkFBRDtzQkFBUCxBQUFPLEFBQ047QUFETTtBQUFBLE9BQUE7Ozs7NkJBR0MsQUFDSjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNBO0FBREE7QUFBQSxPQUFBLGtCQUNBLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0M7QUFERDtBQUFBLGNBQUEsQUFDQyxBQUFLLEFBQ0wscUJBSkgsQUFDRSxBQUNBLEFBRUMsQUFBSyxBQUtYOzs7Ozs7Ozs7Ozs7dUJBL0Z1QyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsNkJBQWhCLEFBQTZDLEE7O21CQUE3RTtBOzt5Q0FFZ0IsQUFBUSxVQUN0QixTQUFOLEFBQU0sQUFBUywwQkFBZixBQUNDLE9BREQsQUFFQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBUyxBQUN0Qjt5QkFBTyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0Isa0JBQWhCLEFBQWtDLE9BQXpDLEFBQU8sQUFBeUMsQUFDakQ7QSxBQUxtQixBQUNwQixpQkFBQSxDQURvQjs7bUJBQWhCO0E7aURBaUJBLEVBQUMsU0FBRCxTQUFTLHlCLEFBQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF0QmtCLEEsQUFvRzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1dpbmRvd3Mub2xkLjAwMC9Vc2Vycy9jaHJpc3RvcGhlcklnYm9qZWt3ZS9Cb29rRWFzZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Windows.old.000\\Users\\christopherIgbojekwe\\BookEase\\pages\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Windows.old.000\\Users\\christopherIgbojekwe\\BookEase\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMmVlMzlhOTA2YTBiYmUwNGNkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ODAwMGI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgeyBCdXR0b24sSWNvbiwgQ2FyZCwgSW1hZ2UsTGFiZWwsSW5wdXQgIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSAnLi4vZXRoZXJldW0vZmFjdG9yeSc7XG5pbXBvcnQgZ2V0RmFjdG9yeVN1bW1hcnkgZnJvbSAnLi4vZXRoZXJldW0vZ2V0RmFjdG9yeVN1bW1hcnknO1xuaW1wb3J0IGdldENvbnRyYWN0U3VtbWFyeSBmcm9tICcuLi9ldGhlcmV1bS9nZXRDb250cmFjdFN1bW1hcnknO1xuaW1wb3J0IGRlcGxveWVkQ29udHJhY3RzIGZyb20gJy4uL2V0aGVyZXVtL2RlcGxveWVkQ29udHJhY3RzJztcbmltcG9ydCB7IExpbmssIFJvdXRlcn0gZnJvbSAnLi4vcm91dGVzJztcblxuXG5cbmNsYXNzIENvbnRyYWN0SW5kZXggZXh0ZW5kcyBDb21wb25lbnR7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKXtcbiAgICBcbiAgICBjb25zdCBkZXBsb3llZENvbnRyYWN0c0xlbmd0aCA9IGF3YWl0IGZhY3RvcnkubWV0aG9kcy5nZXREZXBsb3llZENvbnRyYWN0c0xlbmd0aCgpLmNhbGwoKTtcblxuICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgIEFycmF5KHBhcnNlSW50KGRlcGxveWVkQ29udHJhY3RzTGVuZ3RoKSlcbiAgICAgIC5maWxsKClcbiAgICAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PntcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkubWV0aG9kcy5kZXBsb3llZENvbnRyYWN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gY29uc3QgaG9tZVRlYW0gPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAvLyAgIEFycmF5KHBhcnNlSW50KGRlcGxveWVkQ29udHJhY3RzTGVuZ3RoKSlcbiAgICAvLyAgIC5maWxsKClcbiAgICAvLyAgIC5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PntcbiAgICAvLyAgICAgcmV0dXJuIGRlcGxveWVkQ29udHJhY3RzKHN1bW1hcnlbMF0pLm1ldGhvZHMuaG9tZVRlYW0oaW5kZXgpLmNhbGwoKTtcbiAgICAvLyAgIH0pXG4gICAgLy8gKTtcbiAgXG5cbiAgICByZXR1cm57c3VtbWFyeSxkZXBsb3llZENvbnRyYWN0c0xlbmd0aH07XG4gIH1cblxucmVuZGVySGVhZGVyKCl7XG4gIGNvbnN0IExhYmVsRXhhbXBsZURldGFpbCA9ICgpID0+IChcbiAgPExhYmVsIHN0eWxlID0ge3ttYXJnaW5Cb3R0b206ICcxMHB4J319PlxuICAgIERlcGxveWVkIENvbnRyYWN0c1xuICAgIDxMYWJlbC5EZXRhaWw+e3RoaXMucHJvcHMuZGVwbG95ZWRDb250cmFjdHNMZW5ndGh9PC9MYWJlbC5EZXRhaWw+XG4gIDwvTGFiZWw+XG4pXG5cbnJldHVybiA8TGFiZWxFeGFtcGxlRGV0YWlsLz47XG59XG5cblxuICByZW5kZXJDb250cmFjdHMoKXtcbiAgICAvL1xuXG4gICBjb25zdCBDYXJkRXhhbXBsZUdyb3VwcyA9ICgpID0+IChcbiAgPENhcmQuR3JvdXA+XG4gIHt0aGlzLnByb3BzLnN1bW1hcnkubWFwKHN1bW1hcnkgPT57XG5cblxuICAgIHJldHVybihcbiAgICA8Q2FyZCAgc3R5bGU9e3t3aWR0aDonNDAwcHgnLGhlaWdodDonMjAwcHgnfX0+XG5cbiAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgIDxJbWFnZSBmbG9hdGVkPSdyaWdodCcgc2l6ZT0nbWluaScgc3JjPSdodHRwczovL3JlYWN0LnNlbWFudGljLXVpLmNvbS9pbWFnZXMvYXZhdGFyL2xhcmdlL3N0ZXZlLmpwZycgLz5cbiAgICAgICAgPENhcmQuSGVhZGVyPjwvQ2FyZC5IZWFkZXI+XG4gICAgICAgIDxDYXJkLk1ldGEgc3R5bGU9e3tmb250U2l6ZTonMTVweCd9fSA+XG4gICAgICAgIEhvbWUgOjxzdHJvbmcgc3R5bGU9e3tmb250U2l6ZTonMTVweCcsY29sb3I6J2JsYWNrJ319Pnsgc3VtbWFyeVsxXSB9IFdlaTwvc3Ryb25nPiBBd2F5OiA8c3Ryb25nIHN0eWxlPXt7Zm9udFNpemU6JzE1cHgnLGNvbG9yOidibGFjayd9fT57IHN1bW1hcnlbMV0gfSBXZWk8L3N0cm9uZz5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIHsgc3VtbWFyeVs2XSB9ICA8c3Ryb25nIHN0eWxlPXt7Zm9udFNpemU6JzE1cHgnLGNvbG9yOidibGFjayd9fT5WUzwvc3Ryb25nPiB7IHN1bW1hcnlbN10gfS5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIERhdGUgeyBzdW1tYXJ5WzNdIH0veyBzdW1tYXJ5WzRdIH0veyBzdW1tYXJ5WzVdIH0uIFxuICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgIEVudGVyIEJldDogPElucHV0IHN0eWxlID0ge3toZWlnaHQ6ICcyNXB4J319PjwvSW5wdXQ+XG4gICAgICAgIDwvQ2FyZC5NZXRhPlxuICAgICAgICA8Q2FyZC5EZXNjcmlwdGlvbj5cblxuICAgICAgICA8L0NhcmQuRGVzY3JpcHRpb24+XG4gICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgIDxDYXJkLkNvbnRlbnQgZXh0cmE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0d28gYnV0dG9ucyc+XG4gICAgICAgIDxMaW5rIHJvdXRlID0ge2AvY29udHJhY3RzLyR7c3VtbWFyeVsyXX1gfT5cbiAgICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yPSdncmVlbicgc3R5bGUgPSB7e2ZvbnQ6ICcxMHB4Jywgd2lkdGggOiAnMTgwcHgnLGhlaWdodDogJzQwcHgnfX0+XG4gICAgICAgICAgICBCZXQgb24geyBzdW1tYXJ5WzZdIH1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgcm91dGUgPSB7YC9jb250cmFjdHMvJHtzdW1tYXJ5WzJdfS9iaWRgfT5cbiAgICAgICAgICA8QnV0dG9uIGJhc2ljIGNvbG9yPSdyZWQnIHN0eWxlID0ge3tmb250OiAnMTBweCcsIHdpZHRoIDogJzE4MHB4JyxoZWlnaHQ6ICc0MHB4J319PlxuICAgICAgICAgICAgQmV0IG9uIHsgc3VtbWFyeVs3XSB9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgIDwvQ2FyZD5cbilcbiAgICB9KVxuICB9XG4gICAgICAgIDwvQ2FyZC5Hcm91cD5cbilcbiAgcmV0dXJuIDxDYXJkRXhhbXBsZUdyb3Vwcy8+O1xuICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnJlbmRlckhlYWRlcigpfVxuICAgICAgICB7dGhpcy5yZW5kZXJDb250cmFjdHMoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKTtcblxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDb250cmFjdEluZGV4O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFJQTtBQUFBO0FBRUE7QUFGQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBSUE7QUFKQTtBQUFBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBaENBO0FBMkNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7QUF4RkE7QUFDQTtBQURBOzs7QUFFQTtBQUlBO0FBSEE7QUFDQTtBQUZBOztBQWlCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9