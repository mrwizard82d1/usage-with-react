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
            <button onClick={() => globalServices.acnService.send('LOG_IN')}>
                Log In
            </button>
            <button onClick={() => globalServices.acnService.send('LOG_OUT')}>
                Log Out
            </button>
        </>
    )
}