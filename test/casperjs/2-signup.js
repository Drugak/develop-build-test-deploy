casper.test.begin('Sign Up', function (test) {
  casper.start('http://localhost:9000', function() {
    this.click('a[href="/signup"]');
  })
    .then(function() {
      this.echo('Trying to sign up...');
    })
    .then(function() {
      this.fill('.form', {
        name: 'Test User',
        email: 'test@test.test',
        password: 'test123'
      }, true);
    })
    .waitForResource('/api/users')
    .then(function() {
      test.assertSelectorHasText('.jumbotron h1 span', 'Test User');
    })
    .then(function() {
      this.echo('Signed up successfully as test@test.test');
    });

  casper.run(function() {
    test.done();
  });
});
