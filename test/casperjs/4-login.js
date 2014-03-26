casper.test.begin('Login', function (test) {
  casper.start('http://localhost:9000', function() {
    this.click('a[href="/login"]');
  })
    .then(function() {
      this.echo('Trying to login...');
    })
    .then(function() {
      this.fill('.form', {
        email: 'test@test.test',
        password: 'test123'
      }, true);
    })
    .waitForResource('/api/session')
    .then(function() {
      test.assertSelectorHasText('.jumbotron h1 span', 'Test User');
    })
    .then(function() {
      this.echo('Logged in successfully as test@test.test');
    });

  casper.run(function() {
    test.done();
  });
});
