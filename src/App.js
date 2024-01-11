import { Provider} from 'react-redux';
import './App.css';
import { AppStore } from './store/Store';
import Header from './components/Header';
import Items from './components/Items';

function App() {

  return (
    <Provider store={AppStore}>
      <div className="App px-12">
        <Header />
          <Items/>
      </div>
    </Provider>
  );
}

export default App;
