import React from 'react';

import Layout from './containers/layout/Layout'
//import Cards from './components/cards/Cards'
import Tasks from './containers/tasks/Tasks'

function App() {
  return (
    <div>
      <Layout>
        <Tasks/>
      </Layout>
    </div>
  );
}

export default App;
