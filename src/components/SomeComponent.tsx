import {useContext} from 'react';
import {EventFrom, InterpreterFrom, StateFrom} from "xstate";
import {useSelector} from '@xstate/react';
import {GlobalStateContext} from "./GlobalState";
import {acnMachine} from "../machines/AcnMachine";

const loggedInSelector = (state: StateFrom<typeof acnMachine>) => {
    return state.matches('loggedIn');
}

const makeSender = (interpreter: InterpreterFrom<typeof acnMachine>, eventName: string) => {
    const sender = () => interpreter.send({ type: eventName } as EventFrom<typeof acnMachine>);
    return sender;
}


export const SomeComponent = (_props: {}) => {
    const globalServices = useContext(GlobalStateContext);
    const isLoggedIn = useSelector(globalServices.acnService, loggedInSelector);

    return (
        <>
            <p>{isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
            <button onClick={makeSender(globalServices.acnService, 'LOG_IN' )}>
                Log In
            </button>
            <button onClick={makeSender(globalServices.acnService, 'LOG_OUT' )}>
                Log Out
            </button>
        </>
    )
}