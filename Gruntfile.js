module.exports = function(grunt) {
	// Config
	grunt.initConfig({
		// Compile LESS
		less: {
			development: {
				options: {
					compress: false
				},
				files: {
					'css/main.css' : 'less/main.less'
				}
			},
			production: {
				options: {
					compress: true
				},
				files: {
					'css/main.css' : 'less/main.less'
				}
			}
		},
		// Keyra less task þegar LESS skrá breytist
		watch: {
			scripts: {
				files: ['less/*.less'],
				tasks: ['less:development'],
				options: {
					spawn: true
				}
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Development task
	grunt.registerTask('default', ['less:development']);

	// Production task
	grunt.registerTask('production', ['less:production']);
};