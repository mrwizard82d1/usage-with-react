import {useContext} from 'react';
import {EventFrom, InterpreterFrom, StateFrom} from "xstate";
import {useSelector} from '@xstate/react';
import { F } from '@mobily/ts-belt';
import {GlobalStateContext} from "./GlobalState";
import {acnMachine} from "../machines/AcnMachine";

const loggedInSelector = (state: StateFrom<typeof acnMachine>) => {
    return state.matches('loggedIn');
}

const loggedInText = (truthyText: string, falsyText: string) => F.ifElse(F.identity<boolean>,
                                                                         F.always(truthyText),
                                                                         F.always(falsyText));

const loggedInStatusText = loggedInText('Logged In', 'Logged Out');
const loggedInButtonText = loggedInText('Log Out', 'Log In');

const makeSender = (interpreter: InterpreterFrom<typeof acnMachine>, isLoggedIn: boolean) => {
    return () => interpreter.send({ type: isLoggedIn ? 'LOG_OUT' : 'LOG_IN' } as EventFrom<typeof acnMachine>);
}


export const SomeComponent = (_props: {}) => {
    const globalServices = useContext(GlobalStateContext);
    const isLoggedIn = useSelector(globalServices.acnService, loggedInSelector);

    return (
        <>
            <p>{loggedInStatusText(isLoggedIn )}</p>
            <button onClick={makeSender(globalServices.acnService, isLoggedIn)}>
                {loggedInButtonText(isLoggedIn )}
            </button>
        </>
    )
}