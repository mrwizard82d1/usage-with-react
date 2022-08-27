import {useContext} from 'react';
import {EventFrom, InterpreterFrom, StateFrom} from "xstate";
import {useSelector} from '@xstate/react';
import {GlobalStateContext} from "./GlobalState";
import {acnMachine} from "../machines/AcnMachine";

const loggedInSelector = (state: StateFrom<typeof acnMachine>) => {
    return state.matches('loggedIn');
}

const makeSender = (interpreter: InterpreterFrom<typeof acnMachine>, isLoggedIn: boolean) => {
    return () => interpreter.send({ type: isLoggedIn ? 'LOG_OUT' : 'LOG_IN' } as EventFrom<typeof acnMachine>);
}


export const SomeComponent = (_props: {}) => {
    const globalServices = useContext(GlobalStateContext);
    const isLoggedIn = useSelector(globalServices.acnService, loggedInSelector);

    return (
        <>
            <p>{isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
            <button onClick={makeSender(globalServices.acnService, isLoggedIn)}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </>
    )
}