/**
 * Created by Administrator on 2014/11/25.
 */
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ["./public/js/**/*.js"],
      options: {
        unused: true
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.registerInitTask("default", ["jshint"]);


};