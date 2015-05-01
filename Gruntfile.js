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
		},
		// Keyra upp server á porti 8000
		connect: {
			server: {
				options: {
					port: 8000,
					hostname: 'localhost',
					keepalive: true
				}
			}
		}
	});

	// Load plugins
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	// Development task
	grunt.registerTask('default', ['less:development']);

	// Production task
	grunt.registerTask('production', ['less:production']);

	// Server task
	grunt.registerTask('server', ['connect']);
};