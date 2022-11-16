import "./App.css";
import { useState } from "react";

function App() {
  // const [num, setnum] = useState(0);
  // const add = () => {
  //   setnum(num + 1);
  // };
  // const min = () => {
  //   if (num > 0) setnum(num - 1);
  // };
  // const todostd = [
  //   { name: "Sultan", id: 0, iscompleted: false },
  //   { name: "Sulaiman", id: 1, iscompleted: true },
  //   { name: "Abdulhakeem", id: 2, iscompleted: false },
  //   { name: "Ali", id: 3, iscompleted: true },
  // ];
  const [list, setlist] = useState([
    { name: "Sultan", id: 0, Hero: true },
    { name: "Ahmed", id: 1, Hero: true },
    { name: "NaeF", id: 2, Hero: true },
    { name: "John", id: 3, Hero: false },
  ]);
  const add = (e) => {
    e.preventDefault();
    let inp = e.target.input.value;
    setlist([...list, { name: inp, id: list.length + 1, hero: true }]);
  };
  const remove = (del) => {
    setlist(list.filter((u) => u.id !== del));
  };
  const edit = (e) => {
    let input = prompt('inter')
    setlist(list.map((item,i)=>{if(i===e)item.name=input; return item}))
  };

  return (
    <>
      {/* {<button onClick={add}>+</button>}
      {<button onClick={min}>-</button>}
      {<h1>{num}</h1>} */}{" "}
      {
        <>
          <form onSubmit={add}>
            {" "}
            <input name="input" placeholder="add"></input>
            <button>add new</button>
          </form>
        </>
      }
      <ul>
        {list.map((e, i) => {
          return (
            <>
              <h2 key={i}>{e.name}</h2>
              {<button onClick={() => remove(i)}>del</button>}
              {<button onClick={() => edit(i)}>edit</button>}
            </>
          );
        })}
      </ul>
    </>
  );
}

export default App;
