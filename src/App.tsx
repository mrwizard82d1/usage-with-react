import React from 'react';
import Local from './components/Local';
import Global from './components/Global';
import Other from './components/Other';
import {CssBaseline, Container, Stack, Divider} from "@mui/material";

function App() {
  return (
      <>
          <CssBaseline />
          <Container>
              <Stack divider={<Divider orientation="horizontal" flexItem />}
                     spacing={2}>
                  <Local />
                  <Global />
                  <Other />
              </Stack>
          </Container>
      </>
  );
}

export default App;
