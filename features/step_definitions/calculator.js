/**
 * calculate step
 */

module.exports = function() {
    var self = this;

    this.Given(/^the input "([^"]*)"$/, function(input, callback) {
        console.log(input);
    });

    this.When(/^the calculator is run$/, function(callback) {
        console.log('running');
    });

    this.Then(/^the output should be "([^"]*)"$/, function(output, callback) {
        console.log(output);
    });
}