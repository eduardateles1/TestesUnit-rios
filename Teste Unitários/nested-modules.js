//Nested Module

const {
    hooks
} = require("qunit")

QUnit.module('Nested Modulo 1', function (hooks) {
    hooks.beforeEach(function (assert) {

    })
    hooks.afterEach(function (assert) {
        assert.ok(true, 'AfterEach Parte 1')
    })
    QUnit.test('Teste 1', function (assert) {
        assert.ok(true, 'Teste parte 1')

    })
    QUnit.module('Modulo filho 1', function (hooks) {
        hooks.beforeEach(function (assert) {
            assert.ok(true, 'beforeeach filho 1')
        })
        hooks.afterEach(function (assert) {
            assert.ok(true, "aftereach filho 1")
        })
        QUnit.test('Teste Filho 1', function (assert) {
            assert.ok(true, 'teste filho 1')
        })
    })
})

QUnit.module('Grupo A');

QUnit.test('Teste básico exemplo 1', function (assert) {
    assert.true(true, 'Tudo certo!');
});
QUnit.test('Teste básico exemplo 2', function (assert) {
    assert.true(true, 'Tudo certo também');
});
