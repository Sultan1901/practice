import "./App.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ThemeProvider from "react-bootstrap/ThemeProvider";

import Stack from "react-bootstrap/Stack";


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
  const [list, setlist] = useState([]);
  const add = (e) => {
    e.preventDefault();
    let inp = e.target.input.value;
    setlist([...list, { name: inp, id: list.length+1 , hero: true,del :false }]);
  };
  const remove = (del) => {
    setlist(list.filter((u) =>  u.name= del==true));
  };
  const edit = (e) => {
    let input = prompt("inter");
    setlist(
      list.map((item, i) => {
        if (i === e) item.name = input;
        return item;
      })
    );
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
            <ThemeProvider prefixes={{ btn: "my-btn" }}></ThemeProvider>{" "}
            <Button as="a" variant="success">
              add new
            </Button>
          </form>
        </>
      }
      <ul>
        {list.map((e, i) => {
          return (
            <>
            {}
            
              <Stack direction="horizontal" gap={3}>
                <div key={i} className="bg-light border">
                  {" "}
                  {e.name} - {e.id}
                </div>{" "}
              </Stack>
              {
                <Button  onClick={() => remove(i)}>
                  del
                </Button>
              }
              <br />
              {
                <Button variant="success" onClick={() => edit(i)}>
                  edit
                </Button>
              }
            </>
          );
        })}
      </ul>
      
    </>
  );


}

export default App;
