import {useContext} from 'react';
import {useActor} from '@xstate/react';
import {GlobalStateContext} from "./GlobalState";


export const SomeComponent = (_props: {}) => {
    const globalServices = useContext(GlobalStateContext);
    const [state] = useActor(globalServices.acnService);

    console.log('In SomeComponent()');

    const renderState = (theState: typeof state) => {
        console.log(`InSomeComponent: state.matches("loggedIn")=${state.matches("loggedIn")}`);
        const result = theState.matches('loggedIn)') ? 'Logged In' : 'Logged Out';
        console.log(`InSomeComponent.renderState returns ${result}`);
        return result;
    }

    return (
        <>
            <p>{ renderState(state) }</p>
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