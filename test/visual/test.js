casper.start('http://localhost:9000')
.then(function() {
  phantomcss.screenshot('.jumbotron', 'home-view');
});
