import test from 'ava';

import SomeApi from 'some-api';

test('api.run() should return the meaning of life', async t => {
  let api = new SomeApi();
  let result = await api.run();
  t.is(result, 42);
});
