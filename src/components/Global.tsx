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
                {/**
                 I tried to move the `button` components in `SomeComponent` here to eliminate the "hack" mentioned
                 in the _children_ comment.

                 When I move these components and copy the call to `useContext` into this component, everything
                 compiles cleanly. But when I actually run the code, the browser reports that the expression
                 `globalServices.acnService.send` has a value of `undefined` which produces an error because "...send"
                 is not a function.

                 I do not understand this behavior, but I plan to move on for now.
                 */}
            </GlobalStateProvider>
        </section>
    )
}

export default Global;
