describe('Navigate to Settings page', function() {

  before(function() {
    casper.start('http://localhost:9000');
  });

  it('should be able to click on "Settings" button', function() {
    casper.then(function() {
      'a[href="/settings"]'.should.be.inDOM;
      this.click('a[href="/settings"]');
    });
  });

  it('should be redirected to Login page', function() {
    casper.then(function() {
      expect(/login/).to.matchCurrentUrl;
    });
  });

});
