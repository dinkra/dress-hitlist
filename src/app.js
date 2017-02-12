'use strict';

import _ from 'lodash'; //ES6 import to check our babel loader
import App from './components/app.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import 'skeleton-css/css/normalize.css';
// import 'skeleton-css/css/skeleton.css';
import './sass/app.sass';

ReactDOM.render(<App/>, document.getElementById('root'));