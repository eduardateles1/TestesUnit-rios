QUnit.module('Async Callback');

function asyncOpreation(callback) {
    setTimeout(function(){
        const result = 'resultado da operação assíncrona';
        callback(result);
    }, 1000); // simulando uma operação assíncrona que demora um segundo para ser concluída
}
QUnit.test('Teste assíncrono com Callback', function (assert){
    assert.expect(1)

    asyncOpreation(function (result){
        var done = assert.async();
        assert.equal(result, "resultado da operação assíncrona", "Valor esperado é igual ao resultado da operação");
        done();
    });
})