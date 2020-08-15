import React from 'react';
import Amplify from 'aws-amplify';
import Navigation from './src/components/Navigation';

import config from './aws-exports';

Amplify.configure(config);

const App = () => {
  return <Navigation />;
};

export default App;
// export default withAuthenticator(App, {includeGreetings: true});
