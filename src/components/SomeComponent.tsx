import {useContext} from 'react';
import {useActor} from '@xstate/react';
import {GlobalStateContext} from "./GlobalState";


export const SomeComponent = (_props: {}) => {
    const globalServices = useContext(GlobalStateContext);
    const [state] = useActor(globalServices.acnService);

    return (
        <>
            <p>{state.matches('loggedIn)') ? 'Logged In' : 'Logged Out'}</p>
            <button onClick={() => {
                const nextState = globalServices.acnService.send('LOG_IN')
                console.log(nextState);
                return nextState;
            }
            }>
                Log In
            </button>
            <button onClick={() => {
                const nextState = globalServices.acnService.send('LOG_OUT')
                console.log(nextState);
                return nextState;
            }
            }>
                Log Out
            </button>
        </>
    )
}