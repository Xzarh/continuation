exports.Literal = function(value) {
  this.type = 'Literal';
  this.value = value;
};

exports.Identifier = function(name) {
  this.type = 'Identifier';
  this.name = name;
};

exports.MemberExpression = function(obj, property) {
  this.type = 'MemberExpression';
  this.computed = true;
  this.object = obj;
  this.property = property;
};

exports.Assignment = function(left, right) {
  this.type = 'ExpressionStatement',
  this.expression = {
    type: 'AssignmentExpression',
    operator: '=',
    left: left,
    right: right,
  };
};

exports.BlockStatement = function (body) {
  this.type = 'BlockStatement';
  this.body = body;
};

exports.FunctionDeclaration = function(id, params, body) {
  this.type = 'FunctionDeclaration';
  this.id = id;
  this.params = params;
  this.body = body;
};

exports.ExpressionStatement = function(expression) {
  this.type = 'ExpressionStatement';
  this.expression = expression;
};

exports.CallExpression = function(callee, args) {
  this.type = 'CallExpression';
  this.callee = callee;
  this.arguments = args;
};

exports.CallStatement = function(callee, args) {
  this.type = 'ExpressionStatement';
  this.expression = {
    type: 'CallExpression',
    callee: callee,
    arguments: args,
  };
};

exports.ReturnStatement = function(expression) {
  this.type = 'ReturnStatement';
  this.argument = expression;
};

exports.FunctionExpression = function(id, params, body) {
  this.type = 'FunctionExpression';
  this.id = id;
  this.params = params;
  this.body = body;
};

exports.VariableDeclaration = function(declarations, kind) {
  this.type = 'VariableDeclaration';
  this.declarations = declarations;
  this.kind = kind;
};