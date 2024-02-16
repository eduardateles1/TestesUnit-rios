function fetchDouble(num, callback) {
    const double = num * 2;
    callback(double);
}

QUnit.test('async example', assert => {
    const done = assert.async();

    fetchDouble(21, res => {
        assert.strictEqual(res, 42, 'Result');
        done();
    });
});

//Async Parte 2
QUnit.module('Async Parte 2');

QUnit.test('Async ajax', function (assert) {
    var hasJQuery = window.JQuery ? true : false;
    assert.ok(hasJQuery, 'tem LIB JQuery');
    //async teste
    if (hasJQuery) {
        var done = assert.async(1);
        var cepExperidado = {
            'status': 1,
            'code': '14406702',
            'state': "São Paulo",
            "city": "Franca",
            'district': 'Franca',
            'adress': 'Rua Caxambu, 1271'
        };

        $.ajax({
            url: "http://apps.widenet.com.br/busca-cep/api/cep.json?code=14406-702",
            type: "GET",
            dataType: 'json',
            success: function (data) {
                assert.deepEqual(data.state, "SP", "Estado");
            },
            error: function (err) {
                assert.throws(function () {
                    throw err;
                }, cepExperidado, JSON.stringify(err));
            },
            complete: function () {
                done();
            }
        })
    }
})