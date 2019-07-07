import React, { useState } from 'react';
import ResourcesList from './ResourcesList';
import UsersList from'./UsersList';

const App = () => {
  const [resource, setResource] = useState('posts');
  
  return(
    <div>
      <UsersList/>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourcesList resource={resource}/>
    </div>
  );

};

export default App;