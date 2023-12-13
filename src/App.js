import './App.css';
import Card from './components/Card';


function App() {
  return (
    <>
      <div className='flex inline-flex'>
        <Card title="Кнопка" description="Текст" price="цена"></Card>
        <Card title="креветки" description="Мы вкусные креветки" price="100"></Card>
        <Card title="пицца" description="Дорогая пицца" price="1000"></Card>
      </div>

    </>
  );
}

export default App;
