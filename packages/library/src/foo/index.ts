export class Foo {
  /** @internal */
  internalProperty: string;

  publicProperty: string;

  constructor() {
    this.internalProperty = "asdf";
    this.publicProperty = "asdf";
  }
}
