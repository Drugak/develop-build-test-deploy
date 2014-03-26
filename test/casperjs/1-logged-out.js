casper.test.begin('Try navigate to Settings page when logged out', function (test) {
  casper.start('http://localhost:9000', function() {
    test.assertExists('a[href="/settings"]', 'navigation is fine');
    this.click('a[href="/settings"]');
  })
    .then(function() {
      test.assertUrlMatch(/login/, 'user has been redirected to Login page');
    });

  casper.run(function() {
    test.done();
  });
});
