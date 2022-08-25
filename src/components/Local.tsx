import React from 'react';
import { useMachine } from '@xstate/react';
import toggleMachine, { CounterEvents, CounterStates } from '../machines/ToggleMachine';

function Local() {
    const [current, send] = useMachine(toggleMachine);

    return (
        <section>
            <h1>Local State</h1>
            <button onClick={() => send('TOGGLE')}>
                {current.matches(CounterStates.INACTIVE) ? 'Off' : 'On'}
            </button>
        </section>
    )
}

export default Local;
