import * as CognitoIdentity from 'aws-sdk/clients/cognitoidentity';

import { IExampleCallback } from 'functions/example/example-callback.interface';
import { IExampleEvent } from 'functions/example/example-event.interface';
import { ILambdaContext } from 'lib/Lambda/lambda-context.interface';
import { cognitoIdentity } from 'lib/CognitoIdentity/cognitoIdentity';

export class Example {

  constructor(private _event: IExampleEvent, private _callback: IExampleCallback) {
  }

  public run() {
    this.test();
    this._callback(null, {
      success: true
    });
  }

  private test(): Promise<CognitoIdentity.Types.GetOpenIdTokenForDeveloperIdentityResponse> {
    return new Promise((resolve, reject) => {
      const params: CognitoIdentity.Types.GetOpenIdTokenForDeveloperIdentityInput = {
        IdentityPoolId: 'test',
        Logins: {
          test: this._event.someprop
        },
        TokenDuration: 1800
      };

      cognitoIdentity.getOpenIdTokenForDeveloperIdentity(params, (error: Error, data: CognitoIdentity.Types.GetOpenIdTokenForDeveloperIdentityResponse) => {
        if (error) {
          reject(error);
          return;
        } else if (!data || !data.IdentityId || !data.Token) {
          reject(new Error('Cognito did not respond with a valid token or identity id'));
          return;
        }

        resolve(data);
      });
    });
  }

}

export function handler(event: IExampleEvent, _context: ILambdaContext, callback: IExampleCallback): void {
  (new Example(event, callback))
    .run();
}
