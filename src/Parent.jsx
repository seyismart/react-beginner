 import React, { useState } from "react";
import Child from "./Child";

function Parent() {

const [blogers, setBlog] = useState(
    [
      { title: "My new website", author: "John", id:1},
      { title: "Welcome Part!", author: "Emmanuel", id:2 },
      { title: "React Tooltip", author: "John", id:3 },
      { title: "Love story and fiction", author: "Emmanuel", id:4 },
      { title: "spiderMan fiction", author: "John", id:5, productlist: 'apple'  },
   ]);
   
 // const [title, setTitle] = useState('');


   // filter out the name that has john as a value
    return (
    <div>
     {blogers.map((data)=> (
      <div>
        <p>Author: {data.author}</p>
      </div>
     ))}
    </div>
  );
}

export default Parent;

      