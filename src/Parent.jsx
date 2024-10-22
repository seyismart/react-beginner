 import React, { useState } from "react";
 import Child from './Child';


function Parent() {

const [blogers, setBlog] = useState(
    [
      { title: "My new website", author: "John", id:1},
      { title: "Welcome Part!", author: "Emmanuel", id:2 },
      { title: "React Tooltip", author: "John", id:3 },
      { title: "Love story and fiction", author: "Emmanuel", id:4 },
      { title: "spiderMan fiction", author: "John", productlist: 'apple', id: 5 },
   ]);
   
const handleDelete = (id) => {
const newBlog = blogers.filter(blog => blog.id !== id)
setBlog(newBlog);

}


   // filter out the name that has john as a value
    return (
    <div>
     <Child blogprop = {blogers} handleDeletes = {handleDelete}/>
    </div>
  );
}

export default Parent;

      