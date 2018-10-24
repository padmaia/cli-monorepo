import SomeApi from 'some-api';

describe('api', () => {
  it('.run() should return the meaning of life', async () => {
    let api = new SomeApi();
    let result = await api.run();
    expect(result).toBe(42);
  });
});
