import { IExampleResult } from 'functions/example/example-result.interface';
import { ILambdaCallback } from 'lib/Lambda/lambda-callback.interface';

export interface IExampleCallback extends ILambdaCallback {
  (error: Error | null, result: IExampleResult): void;
}
