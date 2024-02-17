// import gh action packages
const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){
    // log message to gh workflow
    core.notice('Hello from my custom Javascript Action!')
}



run();