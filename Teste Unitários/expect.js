//Expect

QUnit.module("Assert Expect");

QUnit.test( "Async assert expect", function( assert ){
    assert.expect(1);
    var done = assert.async(2);

    setTimeout(function (){
        assert.ok( true, "This should pass" );
        done();
    }, 500);
    })

QUnit.test('example', function (assert) {
    assert.expect(2);
  
    function calc (x, operation) {
      return operation(x);
    }
  
    let result = calc(2, function (x) {
      assert.true(true, 'calc() calls operation function');
      return x * x;
    });
  
    assert.strictEqual(result, 4, '2 squared equals 4');
  });

// Test that the `assert` object is available in async tests