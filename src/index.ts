import { noop } from 'lodash';

interface Meethods {
  getMessage(): string;
  logMessage(message: string): void;
}

function main(methods: Meethods) {
  console.log('> start');

  const message = methods.getMessage();

  methods.logMessage(message);

  console.log('> end');
}

main({
  logMessage(message) {
    console.log('1 > ', message);
  },
  getMessage() {
    return 'message 1';
  },
});

main({
  // replace 'as any' for everything to work: 'logMessage: noop,'
  logMessage: noop as any,
  getMessage() {
    return 'ignored';
  },
});
