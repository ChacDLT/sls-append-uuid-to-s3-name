'use strict'
const _ = require('lodash')
const uuidv4 = require('uuid/v4');

class AppendToS3Name {
    constructor(serverless, options) {
        this.hooks = {
          'before:package:finalize': () => appenduuid(serverless)
        }
    }
}


const appenduuid = serverless => {

  if (serverless.service.resources.Resources) {
      _.forEach(serverless.service.resources.Resources, (resourcesObj, resourcesName) => {
          if(resourcesObj.Type === 'AWS::S3::Bucket'){
              serverless.service.resources.Resources[resourcesName].Properties.BucketName += `-${uuidv4()}`;
          }
      })
  }
}
module.exports = AppendToS3Name