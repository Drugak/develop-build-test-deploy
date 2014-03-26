casper.test.begin('Logout', function (test) {
  casper.start('http://localhost:9000', function() {
    this.click('a[ng-click="logout()"]');
  })
    .then(function() {
      this.echo('Logging out...');
    })
    .waitForResource('/partials/login')
    .then(function() {
      test.assertSelectorHasText('.col-sm-12 h1', 'Login');
    })
    .then(function() {
      this.echo('Logged out successfully.');
    });

  casper.run(function() {
    test.done();
  });
});
