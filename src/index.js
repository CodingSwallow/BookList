import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BookApp from './BookApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BookApp />, document.getElementById('root'));
registerServiceWorker();
