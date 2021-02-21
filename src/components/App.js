import React from 'react';

function App() {
  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <div>
      <h1>
        React App from scratch
        {process.env.PROD_URL_SUFFIXS}
      </h1>

    </div>
  );
}

export default App;
