import {useContext} from 'react';
import {StateFrom} from "xstate";
import {useSelector} from '@xstate/react';
import {GlobalStateContext} from "./GlobalState";
import {acnMachine} from "../machines/AcnMachine";

const loggedInSelector = (state: StateFrom<typeof acnMachine>) => {
    return state.matches('loggedIn');
}


export const SomeComponent = (_props: {}) => {
    const globalServices = useContext(GlobalStateContext);
    const isLoggedIn = useSelector(globalServices.acnService, loggedInSelector);

    return (
        <>
            <p>{isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
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