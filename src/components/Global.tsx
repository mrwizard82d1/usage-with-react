import {GlobalStateProvider} from "./GlobalState";
import {SomeComponent} from "./SomeComponent";

function Global() {
    return (
        <section>
            <GlobalStateProvider>
                <h1>Global State and React Context</h1>
                <SomeComponent />
            </GlobalStateProvider>
        </section>
    )
}

export default Global;
