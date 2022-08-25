import { createMachine } from 'xstate';

export type CounterEvents = { type: 'TOGGLE' };

export enum CounterStates {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

const toggleMachine = createMachine({
    predictableActionArguments: true,
    initial: CounterStates.INACTIVE,
    states: {
        [CounterStates.INACTIVE]: { on: { 'TOGGLE': CounterStates.ACTIVE }},
        [CounterStates.ACTIVE]: { on: { 'TOGGLE': CounterStates.INACTIVE }},
    },
});

export default toggleMachine;
