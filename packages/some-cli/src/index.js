import meow from 'meow';
import Api from 'some-api';

let cli = meow({
  flags: {
    someFlag: { type: 'boolean' }
  }
});

let api = new Api();
api.run(cli.input[0], cli.flags);
