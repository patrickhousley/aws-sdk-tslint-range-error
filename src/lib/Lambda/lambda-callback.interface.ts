export interface ILambdaCallback extends Function {
  (error: Error | null, result: Object): void;
}
