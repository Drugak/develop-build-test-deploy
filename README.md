[![Build Status](https://travis-ci.org/roman01la/develop-build-test-deploy.svg?branch=master)](https://travis-ci.org/roman01la/develop-build-test-deploy)
[![Coverage Status](https://coveralls.io/repos/roman01la/develop-build-test-deploy/badge.png?branch=master)](https://coveralls.io/r/roman01la/develop-build-test-deploy?branch=master)

###Development, build, test, deploy processes for full-stack JavaScript (Node.js) applications.

##Development:
- Yeoman *(scaffolding tool)*
- Bower *(front-end deps manager)*
- Grunt *(tasks runner)*
    - Edits watcher
    - JS, CSS preprocessing & lintering
    - CSS postprocessing
    - Node.js debugger
    - ...

##Build:
- Images optimization
- JS, CSS concatenation & minification
- Assets revisioning
- ...

##Test:
- Headless browsers
- Test runners
- Unit testing
- Integration testing
- Visual regression testing
- Accessibility testing
- Loading & rendering performance measuring
- Code coverage
- CI

##Deploy:
- FTP
- SFTP
- SFTP + SSH

##Process managing
- [pm2](https://github.com/Unitech/pm2)
- [forever](https://github.com/nodejitsu/forever)
- [Upstart](http://upstart.ubuntu.com/) + [Monit](http://mmonit.com/monit/)

##Load balancing
- Native [Cluster](http://nodejs.org/api/cluster.html) module
- [pm2](https://github.com/Unitech/pm2) (With native Cluster module)
- [nginx](http://cjihrig.com/blog/scaling-node-js-applications/)
