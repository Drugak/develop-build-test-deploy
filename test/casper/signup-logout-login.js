describe('Sign Up, Log out and Log in back', function() {

  before(function() {
    casper.start('http://localhost:9000');
  });

  it('should be able to click on "Sign Up" button', function() {
    casper.then(function() {
      'a[href="/signup"]'.should.be.inDOM;
      this.click('a[href="/signup"]');
    });
  });

  it('Sign Up page should be loaded', function() {
    casper.then(function() {
      expect(/signup/).to.matchCurrentUrl;
    });
  });

  it('should be able to fill Sign up form', function() {
    casper.then(function() {
      '.form'.should.be.inDOM;
      this.fill('.form', {
        name: 'Test User',
        email: 'test@test.test',
        password: 'test123'
      }, true);
    });
  });

  it('should be logged in', function() {
    casper.waitForResource('/api/users', function() {
      expect('.jumbotron h1 span').to.have.text('Test User');
    });
  });

  it('should be able to click on "Logout" button', function() {
    casper.then(function() {
      'a[ng-click="logout()"]'.should.be.inDOM;
      this.click('a[ng-click="logout()"]');
    });
  });

  it('should be logged out', function() {
    casper.waitForResource('/partials/login', function() {
      expect('.col-sm-12 h1').to.have.text('Login');
    });
  });

  it('should be able to fill Log in form', function() {
    casper.then(function() {
      '.form'.should.be.inDOM;
      this.fill('.form', {
        email: 'test@test.test',
        password: 'test123'
      }, true);
    });
  });

  it('should be logged in', function() {
    casper.waitForSelectorTextChange('.jumbotron h1 span', function() {
      expect('.jumbotron h1 span').to.have.text('Test User');
    });
  });

});
