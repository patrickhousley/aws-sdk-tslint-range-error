export interface IExampleEvent extends Event {
  someprop: string;
  someOtherProp: {
    firstProp: string | number | null | undefined;
    secondProp?: string | null | undefined;
  };
}
