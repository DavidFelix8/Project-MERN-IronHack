import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// import Countdown from 'react-countdown-now';

ReactDOM.render(<App />, document.getElementById('root'));

/* 
const EndSubs = () => <span>Your subscription has ended!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <EndSubs />;
  } else {
    return (
      <span>
        {days}:{hours}:{minutes}:{seconds}
      </span>
    );
  }
};
ReactDOM.render(
  <App>
    <Countdown date={Date.now() + 60 * 60 * 24 * 30 * 1000} renderer={renderer} />,
    document.getElementById('root')
  </App>  
);
 */
