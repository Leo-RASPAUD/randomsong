import React from 'react';
import Amplify from 'aws-amplify';
import Navigation from './src/components/Navigation';
import { defaults } from 'react-sweet-state';
defaults.devtools = true;

import config from './aws-exports';

Amplify.configure(config);

const App: React.FC = () => {
  return <Navigation />;
};

export default App;
// export default withAuthenticator(App, {includeGreetings: true});
