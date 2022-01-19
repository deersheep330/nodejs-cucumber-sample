const { Given, When, Then } = require('@cucumber/cucumber')

Given('on login page', function() {
    console.log('==> on login page');
});

Then('simple input username and password', function() {
    console.log('==> try to login but username/password should be provided');
});

Then('input username {string} and password {string}', function(arg0, arg1) {
    console.log("==> login with username: " + arg0 + ", password: " + arg1);
});

Then('input username and password', function(dataTable) {
    dataTable.hashes().map((account) => {
        console.log("==> login with username: " + account.username + ", password: " + account.password);
      })
});
