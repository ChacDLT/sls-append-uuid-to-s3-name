'use strict'
const uuidv4 = require('uuid/v4');

class AppendToS3Name {
  constructor(serverless, options) {
    this.hooks = {
      'before:package:finalize': () => appenduuid(serverless),
    };
  }
}

const appenduuid = serverless => {
  if (serverless.service.resources.Resources) {
    for (const resourceName in serverless.service.resources.Resources) {
      if (serverless.service.resources.Resources[resourceName].Type === 'AWS::S3::Bucket') {
        serverless.service.resources.Resources[resourceName].Properties.BucketName += `-${uuidv4()}`;
      }
    }
  }
};

module.exports = AppendToS3Name;
