import React from 'react';
import { useMachine } from '@xstate/react';
import toggleMachine, { CounterStates } from '../machines/ToggleMachine';
import {Button, Stack, Typography} from "@mui/material";

function Local() {
    const [current, send] = useMachine(toggleMachine);

    return (
        <Stack>
            <Typography variant="h3"
                        component="h1"
                        marginBottom={5}>
               Local State
            </Typography>
            <Stack spacing={2}
                   direction="row">
                <Typography variant="body1" component="p">
                    Wax on. Wax off.
                </Typography>
                <Button variant="outlined"
                        size="small"
                        onClick={() => send('TOGGLE')}>
                    {current.matches(CounterStates.INACTIVE) ? 'Off' : 'On'}
                </Button>
            </Stack>
        </Stack>
    )
}

export default Local;
