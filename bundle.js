"use strict";

var _path = require("path");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Exercicio 01
var Usuario =
/*#__PURE__*/
function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return this.admin === true;
    }
  }]);

  return Usuario;
}();

var Admin =
/*#__PURE__*/
function (_Usuario) {
  _inherits(Admin, _Usuario);

  function Admin() {
    var _this;

    _classCallCheck(this, Admin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Admin).call(this));
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var usrComum = new Usuario('teste@teste.com', 'senha');
var usrAdm = new Admin('email@teste.com', 'senha');
console.log(usrComum.isAdmin());
console.log(usrAdm.isAdmin()); //Fim Exercicio 01
//Exercicio 02

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}]; //2.1

var idades = usuarios.map(function (item) {
  return item.idade;
}); //2.2

var anos = usuarios.filter(function (item) {
  return item.idade > 18 && item.empresa === 'Rocketseat';
}); //2.3

var funcionarioGoogle = usuarios.find(function (item) {
  return item.empresa === 'Google';
}); //2.4

var funcionarioMenor50 = usuarios.filter(function (item) {
  item.idade *= 2;

  if (item.idade <= 50) {
    return item;
  }
});
console.log(idades);
console.log(anos);
console.log(funcionarioGoogle);
console.log(funcionarioMenor50); //Fim Exericio 02
//Exercicio 03
//3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); //3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
}; //3.3


var nome = 'Diego';
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  nome, idade;
};

console.log(nome, idade);
console.log(nome); //3.4
// const promise = () => {
//     return new Promise((resolve, reject) => resolve());
// }
// console.log(promise);
//Fim Exercicio 03
//Exercicio 04
//4.1

var empresa = {
  nome: 'RocketSeat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nomeEmpresa = empresa.nomeEmpresa,
    _empresa$endereco = empresa.endereco,
    cidadeEmpresa = _empresa$endereco.cidadeEmpresa,
    estadoEmpresa = _empresa$endereco.estadoEmpresa;
console.log(nomeEmpresa);
console.log(cidadeEmpresa);
console.log(estadoEmpresa);
