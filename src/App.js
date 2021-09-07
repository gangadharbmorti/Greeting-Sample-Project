import React from 'react';

function App() {
  let currentDate = new Date();
  currentDate = currentDate.getHours();
  let greeting = '';
  const cssStyle = {};

  if (currentDate >= 1 && currentDate < 12) {
    greeting = 'Good Morning';
    cssStyle.color = 'orange';
  } else if (currentDate >= 12 && currentDate < 17) {
    greeting = 'Good Afternoon';
    cssStyle.color = 'blue';
  } else if (currentDate >= 17 && currentDate < 19) {
    greeting = 'Good Evening';
    cssStyle.color = 'red';
  } else {
    greeting = 'Good Night';
    cssStyle.color = 'black';
  }

  return (
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}> {greeting}</span>
      </h1>
    </div>
  );
}

export default App;
