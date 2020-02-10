/**
 * Copyright (c) Mik BRY
 * mik@mikbry.com
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import scene from './scene';

ReactDOM.render(<App scene={scene} />, document.getElementById('root'));
