import { createMachine } from 'xstate';

export type CounterEvents = { type: 'TOGGLE' };

export enum CounterStates {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
};

const toggleMachine = createMachine({
    predictableActionArguments: true,
    initial: CounterStates.INACTIVE,
    states: {
        inactive: { on: { 'TOGGLE': CounterStates.ACTIVE }},
        active: { on: { 'TOGGLE': CounterStates.INACTIVE }},
    },
});

export default toggleMachine;
