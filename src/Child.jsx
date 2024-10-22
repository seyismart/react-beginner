import React from 'react';

const Child = ({blogprop, handleDeletes}) => {

    return (
        <div className='center'>
            {blogprop.map((blog) => (
                <div key={blog.id} className='box'> {blog.title} 
            <button onClick={() => handleDeletes(blog.id)}>Delete</button>
           
            </div>
            ))}
        </div>
    );
};

export default Child;
