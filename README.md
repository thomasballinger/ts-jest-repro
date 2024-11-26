A case where types module resolution with a custom condition only works if the cache is used and already populated.

```sh
git clone git@github.com:thomasballinger/ts-jest-repro.git
cd ts-jest-repro/packages/tests
npm i
npx jest # should fail
npx jest # should succeed the second time
npx jest --no-cache # should fail again
```
