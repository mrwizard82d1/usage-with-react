import { createContext, ReactElement } from 'react';
import { useInterpret } from '@xstate/react';
import { acnMachine } from '../machines/AcnMachine';
import {InterpreterFrom} from "xstate";

export const GlobalStateContext = createContext({ acnService: {} as InterpreterFrom<typeof acnMachine> });

export const GlobalStateProvider = (props: { children: ReactElement[] }) => {
    const acnService = useInterpret(acnMachine);

    return (
        <GlobalStateContext.Provider value={{ acnService }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
