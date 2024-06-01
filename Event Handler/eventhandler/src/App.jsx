import React, {  useState } from 'react';
import Post from './Component/Post';
import './App.css'


const App = () => {
    const [posts, setPosts] = useState([]);
  
    const fetchPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res)=>res.json())
      .then((data)=>setPosts(data))
      .catch((err)=>console.log(err))
    };
 
    return (
      <div>
        <div className='btn'> <button onClick={fetchPosts}>Fetch Posts</button></div>
      
        <div>
          {posts.map(post => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))}
        </div>
      </div>
    );
  };
  
  export default App;