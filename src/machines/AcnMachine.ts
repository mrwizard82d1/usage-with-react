import { createMachine } from 'xstate';

export const acnMachine = createMachine(
    {
        schema : {
            // The context (extended state) of the machine
            context: {},
            events: {} as
                | { type: 'LOG_IN' }
                | { type: 'LOG_OUT' },
        },
        initial: 'loggedOut',
        context: {},
        states: {
            loggedOut: {},
            loggedIn: {},
        },
    }
);
