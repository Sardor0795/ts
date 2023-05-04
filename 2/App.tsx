// import React, { useReducer, useRef, useState } from "react";

// interface PropType {
//   name: string;
//   age?: number;
//   children: React.ReactNode;
// }

// // export const App: React.FC<{ name: string; age?: number }> = () => {
// //   return <div>App</div>;
// // };

// export const App: React.FC<PropType> = (props) => {
//   console.log(props.name);
//   const [data, setData] = useState<number | string>("sdfsdf");
//   const add = (e: number) => {
//     console.log(e);
//   };
//   // const add = (e: React.MouseEvent) => {
//   //   console.log(e);
//   // };

//   const inpRef = useRef<HTMLInputElement>(null);
//   const divRef = useRef<HTMLDivElement>(null);

//   console.log(inpRef);

//   type Action = { type: "request" } | { type: "success" };

//   const reducer = (state: any[], action: Action) => {
//     switch (action.type) {
//       case "request":
//         return [1, 5, 3];
//     }
//     return [];
//   };

//   const [state, dispatch] = useReducer(reducer, [1, 5, 3]);

//   return (
//     <div>
//       App {props.children}
//       <div>
//         {data}
//         <button onClick={() => setData(1254)}>btn</button>
//         <button onClick={() => setData("sdfsdf")}>btn</button>
//         <button onClick={() => add(123)}>btn</button>
//         <button onClick={() => dispatch({ type: "request" })}>
//           Reducer btn
//         </button>
//       </div>
//       <div>
//         <input type="text" ref={inpRef} />
//         <div ref={divRef}>{state}</div>
//       </div>
//     </div>
//   );
// };

// export default App;
