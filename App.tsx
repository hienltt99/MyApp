import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './src/redux/reducers/rootReducer';
import MainScreen from './src/screens/MainScreen';
import SlashScreen from './src/screens/SlashScreen';

const store = createStore(rootReducer);

const App = () => {
  const [time, setTime] = React.useState(false);
  setTimeout(function () {
    setTime(true);
  }, 3000);
  return (
    <Provider store={store}>{time ? <MainScreen /> : <SlashScreen />}</Provider>
  );
};

export default App;
