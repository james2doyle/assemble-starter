module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    assemble: {
      options: {
        layout: "src/layouts/default.hbs",
        partials: "src/partials/*.hbs",
        flatten: true
      },
      pages: {
        files: {
          'web/': ['src/pages/**/*.hbs']
        }
      }
    },
    clean: {
      all: ['web/*.html']
    },
    concat: {
      options: {
        separator: '\n'
      },
      scripts: {
        src: ['src/scripts/*.js'],
        dest: 'web/js/script.js'
      },
      styles: {
        src: ['web/css/*.css', '!web/css/style.css'],
        dest: 'web/css/style.css'
      }
    },
    sass: {
      dist: {
        files: {
          'web/css/style.ready.css': 'src/styles/z_site.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 4 versions']
      },
      your_target: {
        src: 'web/css/style.css',
        dest: 'web/css/style.css'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      templates: {
        files: ['src/**/*.hbs'],
        tasks: ['clean', 'assemble']
      },
      styles: {
        files: ['src/styles/*.scss'],
        tasks: ['sass', 'concat:styles']
      },
      scripts: {
        files: ['src/scripts/*.js'],
        tasks: ['concat:scripts']
      }
    }
  });
grunt.loadNpmTasks('assemble');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-autoprefixer');

grunt.registerTask('default', ['clean', 'assemble', 'sass', 'concat', 'autoprefixer']);
};