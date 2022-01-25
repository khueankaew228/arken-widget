import { useRef, useEffect, createElement } from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var _excluded = ["containerStyle"];

var convertParams = function convertParams(params) {
  var result = {};
  Object.keys(params).forEach(function (key) {
    var snakeCase = key.replace(/[A-Z]/g, function (letter) {
      return "_" + letter.toLowerCase();
    });
    result[snakeCase] = params[key];
  });
  return result;
};

var rootUrl = process.env.REACT_APP_ROOT_URL || 'https://widget.arken.finance/';
var widget = {
  create: function create(props) {
    var iframe = document.createElement('iframe');
    iframe.id = 'arken-widget';
    iframe.src = rootUrl + '?mode=' + props.mode + '&type=' + props.widgetType;
    iframe.style.position = 'absolute';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    iframe.addEventListener('load', function () {
      try {
        var _temp4 = function _temp4() {
          var _window, _window$location;

          var params = JSON.stringify(_extends({}, convertParams(props), {
            origin: (_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.origin,
            originWalletAddress: originWalletAddress
          }));
          console.log(params);

          if (iframe.contentWindow) {
            iframe.contentWindow.postMessage("setupWidget:data:" + params, rootUrl);
          }
        };

        console.log('iframe load complete');
        var originWalletAddress = null;

        var _temp5 = _catch(function () {
          var _temp = function () {
            if (window.ethereum.selectedAddress) {
              originWalletAddress = window.ethereum.selectedAddress;
            } else {
              return Promise.resolve(window.BinanceChain.requestAddresses()).then(function (_window$BinanceChain$) {
                originWalletAddress = _window$BinanceChain$;
              });
            }
          }();

          if (_temp && _temp.then) return _temp.then(function () {});
        }, function () {});

        return Promise.resolve(_temp5 && _temp5.then ? _temp5.then(_temp4) : _temp4(_temp5));
      } catch (e) {
        return Promise.reject(e);
      }
    });
    return iframe;
  },
  load: function load(ele, props) {
    if (ele) {
      var iframe = widget.create(props);
      ele.appendChild(iframe);
      return iframe;
    }

    return null;
  }
};
var ArkenWidget = function ArkenWidget(_ref) {
  var _ref$containerStyle = _ref.containerStyle,
      containerStyle = _ref$containerStyle === void 0 ? {} : _ref$containerStyle,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var ref = useRef(null);
  var iframeRef = useRef(null);
  useEffect(function () {
    if (!ref.current) {
      return;
    }

    var iframe = iframeRef.current;

    if (iframe !== null && iframe !== void 0 && iframe.contentWindow) {
      iframe.contentWindow.postMessage("updateWidget:toggleTheme:", rootUrl);
    } else {
      iframeRef.current = widget.load(ref.current, props);
    }
  }, [props.mode]);
  return createElement("div", {
    ref: ref,
    id: 'arken-root',
    style: _extends({
      minHeight: 700,
      position: 'relative'
    }, containerStyle)
  });
};

export { ArkenWidget };
//# sourceMappingURL=index.modern.js.map
