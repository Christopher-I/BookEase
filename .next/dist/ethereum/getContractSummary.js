'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _BetContract = require('./build/BetContract.json');

var _BetContract2 = _interopRequireDefault(_BetContract);

var _deployedContracts = require('./deployedContracts');

var _deployedContracts2 = _interopRequireDefault(_deployedContracts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

exports.default = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(address) {
    var betContract;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            betContract = (0, _deployedContracts2.default)(address);
            _context.next = 3;
            return betContract.methods.getSummary().call();

          case 3:
            return _context.abrupt('return', _context.sent);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxnZXRDb250cmFjdFN1bW1hcnkuanMiXSwibmFtZXMiOlsid2ViMyIsImJldENvbnRyYWN0IiwiZGVwbG95ZWRDb250cmFjdHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4Qjs7OztBQUNBLEFBQU8sQUFBUCxBQUE4QixBQUE5QixBQUdBOzs7Ozs7Ozs4QkFBQTtzRkFBZSxpQkFBTSxBQUFOLFNBQUE7UUFBQTtrRUFBQTtnQkFBQTt5Q0FBQTtlQUNQO0FBRE8sMEJBQ08saUNBQWtCLEFBQWxCLEFBRFA7NEJBQUE7bUJBR0EsWUFBWSxBQUFaLFFBQW9CLEFBQXBCLGFBQWlDLEFBQWpDLEFBSEE7O2VBQUE7c0RBQUE7O2VBQUE7ZUFBQTs0QkFBQTs7QUFBQTtnQkFBQTtBQUFmOzt1QkFBQTs0QkFBQTtBQUFBIiwiZmlsZSI6ImdldENvbnRyYWN0U3VtbWFyeS5qcyIsInNvdXJjZVJvb3QiOiJDOi9XaW5kb3dzLm9sZC4wMDAvVXNlcnMvY2hyaXN0b3BoZXJJZ2JvamVrd2UvQm9va0Vhc2UifQ==