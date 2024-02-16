//Assert ok e NotOk

QUnit.test("Ok e NotOk", function (assert){
    assert.ok(true, 'teste ok');
    assert.notOk(false,'teste NotOk');
});

//Assert Equal Not Equal
QUnit.test("Teste de igualdade", function(assert) {
    var resultado = somar(2, 3);
    assert.equal(resultado, 5, "A soma de 2 e 3 deve ser igual a 5");
  });
  // Exemplo usando notEqual
QUnit.test("Teste de não igualdade", function(assert) {
    var resultado = multiplicar(2, 3);
    assert.notEqual(resultado, 7, "A multiplicação de 2 e 3 não deve ser igual a 7");
  });
  
  // Funções de exemplo
  function somar(a, b) {
    return a + b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }

//Assert DeepEqual DeepNotEqual
// Exemplo usando deepEqual
QUnit.test("Teste de igualdade profunda", function(assert) {
    var objeto1 = { nome: "João", idade: 25, endereço: { cidade: "São Paulo", país: "Brasil" } };
    var objeto2 = { nome: "João", idade: 25, endereço: { cidade: "São Paulo", país: "Brasil" } };
  
    assert.deepEqual(objeto1, objeto2, "Os objetos devem ser iguais em profundidade");
  });
  
  // Exemplo usando deepNotEqual
  QUnit.test("Teste de não igualdade profunda", function(assert) {
    var array1 = [1, 2, { valor: 3 }];
    var array2 = [1, 2, { valor: 4 }];
  
    assert.notDeepEqual(array1, array2, "Os arrays não devem ser iguais em profundidade");
  });
  