(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var isDrawing = false,
      x = 0,
      y = 0;
  var drawBox = document.getElementById("drag-box");
  var context = drawBox.getContext("2d");
  var rect = drawBox.getBoundingClientRect();
  drawBox.addEventListener("mousedown", function (e) {
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    isDrawing = true;
  });
  drawBox.addEventListener("mousemove", function (e) {
    if (isDrawing === true) {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }
  });
  drawBox.addEventListener("mouseup", function (e) {
    if (isDrawing === true) {
      drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
      x = 0;
      y = 0;
      isDrawing = false;
    }
  });

  function drawLine(context, x1, y1, x2, y2) {
    if (Math.sign(x1 - x2) < 0) {
      context.font = "30px Helvetica";
      context.strokeText("A", x1, y1);
    } else {
      context.font = "50px Helvetica";
      context.strokeText("A", x1, y1);
    }
  }
});

},{}]},{},[1]);
