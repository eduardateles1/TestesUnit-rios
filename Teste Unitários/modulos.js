QUnit.module("Modulo 1");
QUnit.test( "Testing modulo with positive numbers", function( assert ) {
    assert.ok(true, 'This always works');
});

const { test } = QUnit;

QUnit.module('Group A', hooks => {
  test('basic test example', assert => {
    assert.true(true, 'this is fine');
  });

  test('basic test example 2', assert => {
    assert.true(true, 'this is also fine');
  });
});

QUnit.module('Group B', hooks => {
  test('basic test example 3', assert => {
    assert.true(true, 'this is fine');
  });

  test('basic test example 4', assert => {
    assert.true(true, 'this is also fine');
  });
});

//SKIP
class Dinossauro{
    constructor(){
        this.dinossauro = this.dinossauro
    }
    diga(){
        return "Extermine!"
    }
    poder(){
        return this.poder;
    }
}
QUnit.module('dinossauro', hooks =>{
    let dinossauro;
    hooks.beforeEach(()=>{
        dinossauro = new Dinossauro();
    })
    QUnit.test('diga', assert =>{
        assert.strictEqual(dinossauro.diga(),'Extermine!');
    })
    //dinossauro não tem um método poder()... utilizando o skip agora
    QUnit.module.skip('poder', hooks =>{
        QUnit.test('poder', assert =>{
            assert.true(dinossauro.poder());
        })
    })
})
