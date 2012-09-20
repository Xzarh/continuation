var BlockStatement = require('./BlockStatement');
var VariableDeclaration = require('./VariableDeclaration');
var helpers = require('../helpers');

var IfStatement = module.exports = function(test, consequent, alternate) {
  this.type = 'IfStatement';
  this.test = test;
  this.consequent = consequent;
  this.alternate = alternate;
};

IfStatement.prototype.normalize = function (place) {
  //Add block this
  if (this.consequent.type !== 'BlockStatement') {
    this.consequent = new BlockStatement([this.consequent]);
  }
  this.consequent.normalize();
  if (this.alternate === null) {
    this.alternate = new BlockStatement([]);
  } else if (this.alternate.type !== 'BlockStatement') {
    this.alternate = new BlockStatement([this.alternate]);
  }
  this.alternate.normalize();
  
  //Move variable declarations outside
  var declarations = [];
  helpers.extractVariableDeclarations(this.consequent, declarations);
  helpers.extractVariableDeclarations(this.alternate, declarations);
  declarations = helpers.reduceDeclarations(declarations);
  if (declarations.length > 0) {
    place.push(new VariableDeclaration(declarations, 'var'));
  }
  place.push(this);
};