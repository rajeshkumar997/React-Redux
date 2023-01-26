import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store'
import NumberContainer from './components/NumberContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NumberContainer />
      </div>
    </Provider>
  );
}

export default App;
