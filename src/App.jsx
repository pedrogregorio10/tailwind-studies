import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-white max-w-96 w-full flex justify-center flex-col items-center gap-3 rounded-3xl shadow-emerald-600 shadow-2xl">
        <div className="flex gap-2.5 pt-6 p-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <div className="bg-red-500 w-full"> 
          <h1>Itens da Lista</h1>

          <ul className="flex flex-col gap-2 bg-amber-800">
              <li className=" bg-amber-300">Primeiro item</li>
              <li className="bg-blue-500">Primeiro item</li>
              <li>Primeiro item</li>
              <li>Primeiro item</li>
              <li>Primeiro item</li>
              <li>Primeiro item</li>
          </ul>
        </div>

        <h1>Vite + React</h1>

        <div className="flex flex-col items-center justify-center gap-3.5 ">
          <div className="w-full flex gap-3">
            <input
              className="border border-amber-600 p-2.5"
              type="text"
              name=""
              id=""
              value={count}
              placeholder="digire seu nome aqui"
            />

            <button
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-400 p-2 cursor-pointer transition-all hover:bg-gray-800"
            >
              count is {count}
            </button>
          </div>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <p className="pb-7">Click on the Vite and React logos to learn more</p>
      </div>
    </>
  );
}

export default App;
