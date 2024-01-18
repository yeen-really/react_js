import { Provider } from 'react-redux';
import './App.css';
import {store} from './store/index'
import { MainPage } from './components/pages/MainPage';

function App() {
  return <Provider store={store}>
      <MainPage/>
  </Provider>
}

export default App;
