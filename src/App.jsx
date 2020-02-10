/**
 * Copyright (c) Mik BRY
 * mik@miklabs.com
 *
 * This source code is licensed under private license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import GLView from './GLView.jsx';

function App({ scene }) {
  return (
    <div className="App">
      <GLView width={720} height={480} scene={scene} />
      <div className="App-title">WebGL React App</div>
    </div>
  );
}

App.propTypes = {
  scene: PropTypes.object.isRequired,
};

export default App;
