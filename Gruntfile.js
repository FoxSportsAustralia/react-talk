'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        clean: {
            dist: ['dist/'],
            docAssets: ['dist/assets/']
        },

        includereplace: {
            docs: {
                options: {},
                files: [
                    {
                        src: ['src/index.html'],
                        dest: 'dist/index.html'
                    }
                ]
            }
        },

        copy: {
            docAssets: {
                expand: true,
                cwd: 'src/assets/',
                src: '**/*',
                dest: 'dist/assets/'
            }
        },

        watch: {
            docs: {
                files: ['src/**/*'],
                tasks: ['includereplace:docs']
            },
            docAssets: {
                files: ['src/assets/**/*'],
                tasks: ['clean:docAssets', 'copy:docAssets']
            }
        }
    });

    grunt.registerTask('default', ['clean:dist', 'includereplace:docs', 'copy:docAssets']);
};
