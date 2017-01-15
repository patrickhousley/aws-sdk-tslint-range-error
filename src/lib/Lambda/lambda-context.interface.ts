export interface ILambdaContext {
  // Properties
  functionName: string;
  functionVersion: string;
  invokedFunctionArn: string;
  memoryLimitInMB: number;
  awsRequestId: string;
  logGroupName: string;
  logStreamName: string;
  identity?: {
    cognitoIdentityId?: string;
    cognitoIdentityPoolId?: string;
  };
  clientContext?: {
    client?: {
      installation_id?: string;
      app_title?: string;
      app_version_name?: string;
      app_version_code?: string;
      app_package_name?: string;
    };
    Custom?: { [name: string]: string };
    env?: {
      platform_version?: string;
      platform?: string;
      make?: string;
      model?: string;
      locale?: string;
    };
  };

  // Functions
  succeed(result?: Object): void;
  fail(error?: Error): void;
  done(error?: Error, result?: Object): void; // result must be JSON.stringifyable
  getRemainingTimeInMillis(): number;
}
