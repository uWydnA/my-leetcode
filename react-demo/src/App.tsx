import { useEventCallback } from "rxjs-hooks";
import { map, withLatestFrom } from "rxjs/operators";

function App() {
  const [clickCallback, [description, x, y, prevDescription]] =
    useEventCallback(
      (event$, state$) =>
        event$.pipe(
          withLatestFrom(state$),
          map(([event, state]: [any, any]) => [
            event.target.innerHTML,
            event.clientX,
            event.clientY,
            state[0],
          ])
        ),
      ["nothing", 0, 0, "nothing"]
    );

  return (
    <div className="App">
      <h1>
        click position: {x}, {y}
      </h1>
      <h1>"{description}" was clicked.</h1>
      <h1>"{prevDescription}" was clicked previously.</h1>
      <button onClick={clickCallback}>click me</button>
      <button onClick={clickCallback}>click you</button>
      <button onClick={clickCallback}>click him</button>
    </div>
  );
}

export default App;
