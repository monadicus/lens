"use strict";

var _ = require("underscore");

var util = require("substance-util");
var Chronicle = require("substance-chronicle");
var Article = require("lens-article");

// Lens.Session
// -----------------
//
// The main model thing

var Session = function(env) {
  this.env = env;
};

// window.handleDoc = null;

Session.Prototype = function() {

  // Load document from data folder
  // --------

  // this.loadDocument = function(name, cb) {
  //   if (name.match(/http/)) {
  //     // Perform on the 
  //     $.getJSON("convert/"+encodeURIComponent(name), function(data) {
  //       var doc = Article.fromSnapshot(data, {
  //         chronicle: Chronicle.create()
  //       });
  //       cb(null, doc);
  //     }).error(cb);
  //   } else {
  //     $.getJSON("data/"+name+".json", function(data) {
  //       var doc = Article.fromSnapshot(data, {
  //         chronicle: Chronicle.create()
  //       });
  //       cb(null, doc);
  //     }).error(cb);
  //   }
  // };


  // Load library from remote
  // --------

  this.loadLibrary = function(url, cb) {
    $.getJSON(url, function(data) {
      cb(null, data);
    }).error(cb);
  };
};

Session.prototype = new Session.Prototype();
_.extend(Session.prototype, util.Events);

module.exports = Session;
