module.exports = function(grunt) {

  grunt.initConfig({

    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/style.css':'sass/style.sass'
        }
      }
    },

    watch: {
      scripts: {
        files: ['sass/style.sass'],
        tasks: ['sass'],
        options: {
            spawn: false
        },
      } 
    },
	
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'css/style.css',
            '*.html',
            '*.js'
          ]
        },
        options: {
          watchTask: true, 
          server: './'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);

};