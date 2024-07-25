import { useState } from "react";
function App() {
  const [color, setColor] = useState("gray");
  return (
    <>
      <div className="h-screen w-full" style={{backgroundColor:color}}>
        <h3 className="text-center pt-10 pb-2 text-3xl font-bold text-white" >BG Changer</h3>
        <h4 className="text-center text-white text-xl">Click on the buttons to change the background color</h4>
        <div className="fixed w-full gap-3 bottom-12 flex items-center justify-center">
        <div className="p-4 rounded-3xl  bg-slate-50 grid grid-cols-3 gap-3 shadow-lg">
        <button onClick={() => setColor("red")}  className="bg-red-500 px-6 py-2 rounded-xl text-xl text-white font-mono font-semibold">red</button>
          <button onClick={() => setColor("blue")} className="bg-blue-500 px-6 py-2 rounded-xl text-xl text-white font-mono font-semibold">blue</button>
          <button onClick={() => setColor("green")}className="bg-green-500 px-6 py-2 rounded-xl text-xl text-white font-mono font-semibold">green</button>
        </div>
        </div>
      </div>
    </>
  );
}

export default App;