// import gh action packages
const core = require('@actions/core');
// gives access to context obj
// gives access to octect obj - rest api
//github.getOctokit()
const github = require('@actions/github');
const exec = require('@actions/exec');

function run(){

    // log message to gh workflow
    core.notice('Hello from my custom Javascript Action!');
    // 1. get some input values
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});
    // 2. upload files - exec package
    // aws cli command (assuming its installed)
    exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`);
    const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`;
    core.setOutput('website-url', websiteUrl); // echo "website-url=${{ websiteUrl }}




}



run();