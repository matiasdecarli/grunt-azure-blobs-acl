/*
 * grunt-azure-blobs-acl
 * 
 *
 * Copyright (c) 2014 matiasdecarli
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

   // Project configuration.
    grunt.initConfig({
        blobs: {                   
          }
    })

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks')

    // plugin's task(s), then test the result.
    grunt.registerTask('default', ['azure-blobs-acl'])
};
