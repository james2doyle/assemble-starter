/*! Salt.js DOM Selector Lib. By @james2doyle */
window.$ = function(selector, context, undefined) {
  // an object containing the matching keys and native get commands
  var matches = {
    '#': 'getElementById',
    '.': 'getElementsByClassName',
    '@': 'getElementsByName',
    '=': 'getElementsByTagName',
    '*': 'querySelectorAll'
  }[selector[0]]; // you can treat a string as an array of characters
  // now pass the selector without the key/first character
  var el = (((context === undefined) ? document: context)[matches](selector.slice(1)));
  // if there is one element than return the 0 element
  return ((el.length < 2) ? el[0]: el);
};

// probably the most useful and allows $('#iddiv').find('.inside')
window.Element.prototype.find = function(selector) {
  return $(selector, this);
};

// doing a find in a NodeList doesnt really work. I had a function that
// would look inside and get the element but it was pretty big and
// required recusive searching inside NodeLists. So I would suggest just
// using a '*' selection method
window.NodeList.prototype.find = function find(elem) {
  console.error('You cannot find in a NodeList. Just use $(*selector %s)', elem);
  return this;
};

// another useful one for doing $('.inside').each()
window.NodeList.prototype.each = Array.prototype.forEach;

// $().attr('prop', 'value') support
window.Element.prototype.attr = function(name, value) {
  if(value) {
    this.setAttribute(name, value);
    return this;
  } else {
    return this.getAttribute(name);
  }
};

window.NodeList.prototype.attr = function(name, value) {
  this.each(function(el) {
    if(value) {
      el.setAttribute(name, value);
    } else {
      return el.getAttribute(name);
    }
  });
  return this;
};

// $().css('prop', 'value') support
window.Element.prototype.css = function(prop, value) {
  if (value) {
    this.style[prop] = value;
    return this;
  } else {
    return this.style[prop];
  }
};

window.NodeList.prototype.css = function(prop, value) {
  this.each(function(el) {
    el.css(prop, value);
  });
  return this;
};

// $().on('event', function(el){});
window.Element.prototype.on = function(eventType, callback) {
  eventType = eventType.split(' ');
  for (var i = 0; i < eventType.length; i++) {
    this.addEventListener(eventType[i], callback);
  }
  return this;
};


window.NodeList.prototype.on = function(eventType, callback){
  this.each(function(el){
    el.on(eventType, callback);
  });
  return this;
};

// $().addClass('name');
window.NodeList.prototype.addClass = function(name){
  this.each(function(el) {
    el.classList.add(name);
  });
  return this;
};

window.Element.prototype.addClass = function(name) {
  this.classList.add(name);
  return this;
};

// $().removeClass('name');
window.NodeList.prototype.removeClass = function(name){
  this.each(function(el) {
    el.classList.remove(name);
  });
  return this;
};

window.Element.prototype.removeClass = function(name) {
  this.classList.add(name);
  return this;
};

window.Element.prototype.hasClass = function(name) {
  // contains? how annoying!
  return this.classList.contains(name);
};

window.NodeList.prototype.first = function() {
  // if this is more than one item return the first
  return (this.length < 2) ? this : this[0];
};

window.NodeList.prototype.last = function() {
  // if there are many items, return the last
  return (this.length > 1) ? this[this.length - 1] : this;
};