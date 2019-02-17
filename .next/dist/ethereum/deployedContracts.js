'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _BetContract = require('./build/BetContract.json');

var _BetContract2 = _interopRequireDefault(_BetContract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_BetContract2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxkZXBsb3llZENvbnRyYWN0cy5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiYmV0Q29udHJhY3QiLCJhZGRyZXNzIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLEFBQU8sQUFBUCxBQUFpQixBQUFqQjs7OztBQUNBLEFBQU8sQUFBUCxBQUF3QixBQUF4QixBQUdBOzs7Ozs7a0JBQWMsVUFBQyxBQUFELFNBQVksQUFDeEI7U0FBTyxJQUFJLGNBQUssQUFBTCxJQUFTLEFBQWIsU0FDTCxLQUFLLEFBQUwsTUFBVyxzQkFBWSxBQUF2QixBQURLLFlBRUwsQUFGSyxBQUFQLEFBSUQ7QUFMRCIsImZpbGUiOiJkZXBsb3llZENvbnRyYWN0cy5qcyIsInNvdXJjZVJvb3QiOiJDOi9XaW5kb3dzLm9sZC4wMDAvVXNlcnMvY2hyaXN0b3BoZXJJZ2JvamVrd2UvQm9va0Vhc2UifQ==