window.homeSwipe = new Swipe($('#slider'), {
  startSlide: 0,
  speed: 400,
  auto: 4000,
  continuous: true,
  disableScroll: false,
  stopPropagation: false
  // ,
  // callback: function(index, elem) {},
  // transitionEnd: function(index, elem) {}
});

var prefix = (function () {
  var styles = window.getComputedStyle(document.documentElement, ''),
  pre = (Array.prototype.slice
    .call(styles)
    .join('')
    .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
  dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
})();

function xhr(url, obj, callback){
  var xhro = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
  xhro.open('POST', url, true);
  xhro.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhro.onreadystatechange = function () {
    // do something to response
    if (xhro.readyState === 4) {
      if (xhro.status === 200) {
        callback(xhro.responseText);
      } else {
        console.error(xhro.statusText);
      }
    }
  };
  xhro.onerror = function () {
    console.error(xhro.statusText);
  };
  var str = '';
  for (var key in obj) {
    if (str !== '') {
      str += '&';
    }
    str += key + '=' + obj[key];
  }
  xhro.send(str);
}

// navlinks[i].style[prefix.js+'Transform']
function doTransform(amount) {
  if (Modernizr.csstransforms3d) {
    return 'translate3d('+amount+'px, 0, 0)';
  } else if (Modernizr.csstransforms) {
    return 'translateX('+amount+'px)';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // s'all loaded bro!
});
