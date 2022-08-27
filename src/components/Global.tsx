import {GlobalStateProvider} from "./GlobalState";
import {SomeComponent} from "./SomeComponent";

function Global() {
    return (
        <section>
            {/**
             The type of  `GlobalStateProvide.props.children` is `ReactElement[]`; consequently, I moved the `h1`
             tag to a child element even though it is not really needed.
             */}
            <GlobalStateProvider>
                <h1>Global State and React Context</h1>
                <SomeComponent />
            </GlobalStateProvider>
        </section>
    )
}

export default Global;
