// var path = require('path'),
// 	lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

// function mountServ(connect, point) {
// 	return connect.static(path.resolve(point));
// }

module.exports = function(grunt){
	grunt.initConfig({
		// connect: {
		// 	livereload: {
		// 		options: {
		// 			base: 'public',
		// 			port: '8080',
		// 			middleware: function(connect, options) {
		// 				return [lrSnippet, mountServ(connect, options.base) ];
		// 			}
		// 		}
		// 	}
		// },
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: 'app/less/**/*.less',
				tasks: ['less'],
				spawn: true
			}
			// reload: {
			// 	files: 'public/**/*',
			// 	tasks: ['livereload']
			// },
			// copy: {
			// 	files: 'js/**/*',
			// 	tasks: ['copy']
			// }
		},
		less: {
			options: {
				yuicompress: true,
				optimization: 2
			},
			glob_to_multiple: {
				expand: true,
				cwd: 'app/less',
				src: '**/*.less',
				dest: 'app/css/',
				ext: '.css'
			}
		}
		// bower: {
		// 	install: {
		// 		options: {
		// 			targetDir: './public',
		// 			verbose: true,
		// 			layout: function(type){
		// 				if(type === '__untyped__'){
		// 					return 'js';
		// 				} else {
		// 					return type;
		// 				}
		// 			}
		// 		}
		// 	}
		// },
		// livereload:{},
		// copy: {
		// 	glob_to_multiple: {
		// 		expand: true,
		// 		cwd: 'js',
		// 		src: '**/*.js',
		// 		dest: 'public/js/',
		// 		ext: '.js'
		// 	}
		// }
	});

	['grunt-contrib-less','grunt-contrib-watch'].forEach(grunt.loadNpmTasks);

	grunt.registerTask('default',['watch']);
};