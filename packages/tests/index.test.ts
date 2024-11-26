import { Foo } from "library/foo";

test("http client", async () => {
  const foo = new Foo();
  console.log(foo.publicProperty);
  console.log(foo.internalProperty);
});
