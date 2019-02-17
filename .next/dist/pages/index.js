'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _getFactorySummary = require('../ethereum/getFactorySummary');

var _getFactorySummary2 = _interopRequireDefault(_getFactorySummary);

var _getContractSummary = require('../ethereum/getContractSummary');

var _getContractSummary2 = _interopRequireDefault(_getContractSummary);

var _deployedContracts = require('../ethereum/deployedContracts');

var _deployedContracts2 = _interopRequireDefault(_deployedContracts);

var _routes = require('../routes');

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