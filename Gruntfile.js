// Generated on 2014-03-25 using generator-angular-fullstack 1.3.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist',
      deploy: require('./conf').deploy,
      page_speed: require('./conf').page_speed,
      reports: 'reports'
    },
    express: {
      options: {
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: 'server.js',
          debug: true
        }
      },
      prod: {
        options: {
          script: 'dist/server.js',
          node_env: 'production'
        }
      },
      test: {
        options: {
          script: 'server.js'
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    watch: {
      js: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      mochaTest: {
        files: ['test/server/{,*/}*.js'],
        tasks: ['mochaTest']
      },
      jsTest: {
        files: ['test/client/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      compass: {
       files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
       tasks: ['compass:server', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '<%= yeoman.app %>/views/{,*//*}*.{html,jade}',
          '{.tmp,<%= yeoman.app %>}/styles/{,*//*}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*//*}*.js',
          '<%= yeoman.app %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}',
        ],

        options: {
          livereload: true
        }
      },
      express: {
        files: [
          'server.js',
          'lib/**/*.{js,json}'
        ],
        tasks: ['newer:jshint:server', 'express:dev', 'wait'],
        options: {
          livereload: true,
          nospawn: true //Without this option specified express won't be reloaded
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      server: {
        options: {
          jshintrc: 'lib/.jshintrc'
        },
        src: [ 'lib/{,*/}*.js']
      },
      all: [
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: 'test/client/.jshintrc'
        },
        src: ['test/client/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*',
            '!<%= yeoman.dist %>/Procfile'
          ]
        }]
      },

      server: {
        dot: true,
        src: [
          '.tmp',
          '<%= yeoman.reports %>/accessibility',
          '<%= yeoman.reports %>/coverage',
          '<%= yeoman.reports %>/load-perf',
          '<%= yeoman.reports %>/visual/desktop/results',
          '<%= yeoman.reports %>/perf-metrics',
          '<%= yeoman.reports %>/api'
        ]
      },

      api: {
        dot: true,
        src: ['<%= yeoman.reports %>/api']
      },
      load_perf: {
        dot: true,
        src: ['<%= yeoman.reports %>/load-perf']
      },
      accessibility: {
        dot: true,
        src: ['<%= yeoman.reports %>/accessibility']
      },
      phantomcss: {
        dot: true,
        src: ['<%= yeoman.reports %>/visual/desktop/results']
      },
      phantomas: {
        dot: true,
        src: ['<%= yeoman.reports %>/perf-metrics']
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Debugging with node inspector
    'node-inspector': {
      custom: {
        options: {
          'web-host': 'localhost'
        }
      }
    },

    // Use nodemon to run server in debug mode with an initial breakpoint
    nodemon: {
      debug: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug-brk'],
          env: {
            PORT: process.env.PORT || 9000
          },
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            // opens browser on initial server start
            nodemon.on('config:update', function() {
              setTimeout(function() {
                require('open')('http://localhost:8080/debug?port=5858');
              }, 500);
            });
          }
        }
      }
    },

    // Automatically inject Bower components into the app
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/views/index.html',
        ignorePath: '<%= yeoman.app %>/',
        exclude: ['bootstrap-sass']
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/public/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/public/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/public/styles/{,*/}*.css',
            '<%= yeoman.dist %>/public/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/public/styles/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= yeoman.app %>/views/index.html',
             '<%= yeoman.app %>/views/index.jade'],
      options: {
        dest: '<%= yeoman.dist %>/public'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/views/{,*/}*.html',
             '<%= yeoman.dist %>/views/{,*/}*.jade'],
      css: ['<%= yeoman.dist %>/public/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>/public']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/public/images'
        }],
        options: {
          cache: false
        }
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/public/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          //collapseWhitespace: true,
          //collapseBooleanAttributes: true,
          //removeCommentsFromCDATA: true,
          //removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/views',
          src: ['*.html', 'partials/**/*.html'],
          dest: '<%= yeoman.dist %>/views'
        }]
      }
    },

    // Allow the use of non-minsafe AngularJS files. Automatically makes it
    // minsafe compatible so Uglify does not destroy the ng references
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    // Replace Google CDN references
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/views/*.html']
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>/public',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'images/{,*/}*.{webp}',
            'fonts/**/*'
          ]
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/views',
          dest: '<%= yeoman.dist %>/views',
          src: '**/*.jade'
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/public/images',
          src: ['generated/*']
        }, {
          expand: true,
          dest: '<%= yeoman.dist %>',
          src: [
            'package.json',
            'bower.json',
            'server.js',
            'lib/**/*'
          ]
        }, {
          expand: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: ['.bowerrc']
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      debug: {
        tasks: [
          'nodemon',
          'node-inspector'
        ],
        options: {
          logConcurrentOutput: true
        }
      },
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.app %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },


    /*
     * Tests
     *
    \* ================== */

    // Client unit testing settings
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    // Functional testing settings
    mocha_casperjs: {
      options: {
        timeout: 5000
      },
      files: ['test/casper/**/*.js']
    },

    // Accessibility testing settings
    accessibility: {
      options : {
        accessibilityLevel: 'WCAG2AAA',
        outputFormat: 'json',
        force: true,
        domElement: true
      },
      test : {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/views/',
          src: ['**/*.html'],
          dest: '<%= yeoman.reports %>/accessibility/',
          ext: '-report'
        }]
      }
    },

    // Server unit testing settings
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      src: ['test/server/**/*.js']
    },

    // CSS regression testing settings
    phantomcss: {
      desktop: {
        options: {
          screenshots: '<%= yeoman.reports %>/visual/desktop/baseline',
          results: '<%= yeoman.reports %>/visual/desktop/results',
          viewportSize: [1024, 768]
        },
        src: [
          'test/visual/**.js'
        ]
      },
    },

    /*
     * Metrics
     *
    \* ================== */

    // Code coverage report submit to Coveralls.io
    coveralls: {
      options: {
        force: true,
        coverage_dir: '<%= yeoman.reports %>/coverage'
      }
    },

    // Loading performance testing settings
    load_perf: {
      edge: {
        options: {
          localPort: 9001,
          remotePort: 9000,
          networkProfile: '2G',
          cwd: __dirname,
          output: '<%= yeoman.reports %>/load-perf/',
          animation: 'load-perf.gif'
        }
      }
    },

    // Web performance metrics
    phantomas: {
      dev: {
        options: {
          indexPath: '<%= yeoman.reports %>/perf-metrics/',
          url: 'http://localhost:9000',
          buildUi: true
        }
      }
    },

    // JavaScript complexity analysis #1
    complexity: {
      client: {
        src: '<%= yeoman.app %>/scripts/**/*.js',
        options: {
          jsLintXML: '<%= yeoman.reports %>/complexity/client/report.xml',
          maintainability: 100
        }
      },
      server: {
        src: 'lib/**/*.js',
        options: {
          jsLintXML: '<%= yeoman.reports %>/complexity/server/report.xml',
          maintainability: 100
        }
      }
    },

    // JavaScript complexity analysis #2
    plato: {
      client: {
        options : {
          jshint : false
        },
        files: {
          '<%= yeoman.reports %>/complexity-plato/client': '<%= yeoman.app %>/scripts/**/*.js'
        }
      },
      server: {
        options : {
          jshint : false
        },
        files: {
          '<%= yeoman.reports %>/complexity-plato/server': 'lib/**/*.js'
        }
      }
    },

    // API test
    api_benchmark: {
      test: {
        options: {
          output: 'reports/api'
        },
        files: {
          'index.html': 'test/api/api.json'
        }
      }
    },

    // Google PageSpeed Insights
    pagespeed: {
      dev: {
        options: {
          url: 'url_accessible_from_the_public_internet:9000',
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      },
      dist: {
        options: {
          paths: 'url_accessible_from_the_public_internet:9000',
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      },
      prod: {
        options: {
          paths: 'production_server_url',
          locale: 'en_GB',
          strategy: 'desktop',
          threshold: 80
        }
      },

      options: {
        key: '<%= yeoman.page_speed.api_key %>'
      }
    },

    // Unleash a horde of undisciplined gremlins
    gremlins: {
      horde: {
        options: {
          path: 'http://localhost:9000',
          test: __dirname + '/test/gremlins/horde.js'
        }
      }
    },


    /*
     * Deployment
     *
    \* ================== */

    // Deploy via FTP
    'ftp-deploy': {
      stage: {
        auth: '<%= yeoman.deploy.ftp %>',
        src: '<%= yeoman.dist %>',
        dest: 'server_project_dir_path'
      }
    },

    // Deploy via SFTP
    'sftp-deploy': {
      stage: {
        auth: '<%= yeoman.deploy.sftp %>',
        src: '<%= yeoman.dist %>',
        dest: 'server_project_dir_path'
      }
    },

    // Deploy via SFTP + SSH
    sftp: {
      stage: {
        files: {
          './': '<%= yeoman.dist %>/**'
        },
        options: {
          srcBasePath: 'dist/',
          path: 'server_project_dir_path',
          host: '<%= yeoman.deploy.ssh.host %>',
          port: '<%= yeoman.deploy.ssh.port %>',
          username: '<%= yeoman.deploy.ssh.username %>',
          agent: process.env.SSH_AUTH_SOCK, // ssh-agent-based auth or
          //password: '<%= yeoman.deploy.ssh.password %>', // Auth with password or
          //privateKey: grunt.file.read('path_to_id_rsa'), // Auth with private key
          //passphrase: '<%= yeoman.deploy.ssh.passphrase %>', // Passphrase for private key
          createDirectories: true,
          showProgress: true
        }
      }
    },
    sshexec: {
      stage: {
        command: [
          'cd server_project_dir_path', // cd into project folder
          'pm2 stop my-app',            // Stop application processes
          'npm install --production',   // Install Node production deps
          'bower install --production', // Install front-end production deps
          'export NODE_ENV=production', // Set Node env variable to run in production mode
          'pm2 start server.js --name my-app -i 2 -o out.log -e err.log' // Run application
        ].join(' && '),
        options: {
          host: '<%= yeoman.deploy.ssh.host %>',
          port: '<%= yeoman.deploy.ssh.port %>',
          username: '<%= yeoman.deploy.ssh.username %>',
          agent: process.env.SSH_AUTH_SOCK,
          pty: true
        }
      },
      git: {
        command: [
          'cd server_project_dir_path', // cd into project folder
          'pm2 stop my-app',            // Stop application processes
          'git pull origin master',     // Pull source from project repo
          'npm install',                // Install Node production deps
          'bower install',              // Install front-end production deps
          'grunt',                      // Test & build project
          'cd dist',                    // cd into build dir
          'pm2 start server.js --name my-app -i 1 -o out.log -e err.log' // Run application
        ].join(' && '),
        options: {
          host: '<%= yeoman.deploy.git.host %>',
          port: '<%= yeoman.deploy.git.port %>',
          username: '<%= yeoman.deploy.git.username %>',
          agent: process.env.SSH_AUTH_SOCK,
          pty: true
        }
      }
    },


    /*
     * Environment settings
     *
    \* ================== */

    env: {
      test: {
        NODE_ENV: 'test'
      }
    }
  });

  // Used for delaying livereload until after server has restarted
  grunt.registerTask('wait', function() {
    grunt.log.ok('Waiting for server reload...');

    var done = this.async();

    setTimeout(function() {
      grunt.log.writeln('Done waiting!');
      done();
    }, 500);
  });

  grunt.registerTask('express-keepalive', 'Keep grunt running', function() {
    this.async();
  });

  // Run dev server
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'express:prod', 'open', 'express-keepalive']);
    }

    if (target === 'debug') {
      return grunt.task.run([
        'clean:server',
        'bower-install',
        'concurrent:server',
        'autoprefixer',
        'concurrent:debug'
      ]);
    }

    grunt.task.run([
      'clean:server',
      'bower-install',
      'concurrent:server',
      'autoprefixer',
      'express:dev',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('server', function() {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // Run tests
  grunt.registerTask('test', function (target) {
    if (target === 'server') {
      return grunt.task.run([
        'env:test',
        'mochaTest'
      ]);
    }

    if (target === 'client') {
      return grunt.task.run([
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'karma',
        'express:dev',
        'mocha_casperjs',
        'coveralls'
      ]);
    }

    switch (target) {
      case 'api':
        return grunt.task.run([
          'clean:api',
          'express:dev',
          'api_benchmark'
        ]);
        break;
      case 'load_perf':
        return grunt.task.run([
          'clean:load_perf',
          'concurrent:test',
          'autoprefixer',
          'express:dev',
          'load_perf'
        ]);
        break;
      case 'phantomcss':
        return grunt.task.run([
          'clean:phantomcss',
          'concurrent:test',
          'autoprefixer',
          'express:dev',
          'phantomcss'
        ]);
        break;
      case 'accessibility':
        return grunt.task.run([
          'clean:accessibility',
          'concurrent:test',
          'autoprefixer',
          'express:dev',
          'accessibility'
        ]);
        break;
      case 'phantomas':
        return grunt.task.run([
          'clean:phantomas',
          'concurrent:test',
          'autoprefixer',
          'express:dev',
          'phantomas:dev'
        ]);
        break;
      case 'complexity':
        return grunt.task.run([
          'complexity',
          'plato'
        ]);
        break;
      case 'pagespeed-dev':
        return grunt.task.run([
          'concurrent:test',
          'autoprefixer',
          'express:dev',
          'pagespeed:dev'
        ]);
        break;
      case 'pagespeed-dist':
        return grunt.task.run([
          'build',
          'express:prod',
          'pagespeed:dist'
        ]);
        break;
      case 'gremlins':
        return grunt.task.run([
          'concurrent:test',
          'autoprefixer',
          'express:dev',
          'gremlins:horde'
        ]);
        break;
    }

    if (target === 'more') {
      return grunt.task.run([
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'express:dev',
        'api_benchmark',
        'load_perf',
        'phantomcss',
        'accessibility',
        'phantomas:dev',
        'pagespeed:dev',
        'complexity',
        'plato'
      ]);
    }

    grunt.task.run([
      'env:test',
      'mochaTest',
      'clean:server',
      'concurrent:test',
      'autoprefixer',
      'karma',
      'express:test',
      'mocha_casperjs',
      'coveralls'
    ]);
  });

  // Build
  grunt.registerTask('build', [
    'clean:dist',
    'bower-install',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  // Deploy
  grunt.registerTask('deploy', function (target) {
    if (target === 'ftp') {
      return grunt.task.run([
        'default',
        'ftp-deploy:stage'
      ]);
    }

    if (target === 'sftp') {
      return grunt.task.run([
        'default',
        'sftp-deploy:stage'
      ]);
    }

    if (target === 'ssh') {
      return grunt.task.run([
        'default',
        'sftp:stage',
        'sshexec:stage'
      ]);
    }
  });

  // Default
  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
