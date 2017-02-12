import * as AWS from 'aws-sdk';

const options: AWS.CognitoIdentity.ClientConfiguration = {
  apiVersion: '2014-06-30'
};

export const cognitoIdentity = new AWS.CognitoIdentity(options);
