import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Ozodbek {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nisi a voluptatum sit. Aspernatur, repellat magni libero pariatur voluptatibus recusandae, perspiciatis nam iusto, quo tempora sed dignissimos porro minus laudantium quia quas amet. Illum, amet officiis? Nulla magnam earum nostrum veniam quia blanditiis officia optio id, iste incidunt laboriosam qui sunt facere quae aperiam soluta corporis commodi ratione! At ullam, quis blanditiis nihil voluptatibus dolore quaerat deserunt vero iure distinctio omnis, ducimus autem, dolor natus! Quisquam dolor pariatur nulla consequatur saepe vero dicta repellendus accusantium iste perspiciatis sunt veniam cupiditate magnam amet aspernatur deserunt quasi veritatis reiciendis, laudantium optio asperiores est. Magnam quaerat consectetur natus molestiae qui, dolorem, dolores consequuntur, cupiditate cumque laudantium sint. Incidunt sequi odio reiciendis est voluptatibus!
      </p>
    </div>
  );
}

export default App;
