import '../Styles/App.css';
import Navbar from './Navbar';
import Header from './Header';
import Engines from './Engines';
import Capsulebg from './CapsuleBg';
import Search from './Search';
import ApiData from './ApiData';
import DataGrid from './Datagrid';
import Footer from './Footer';

function App(props) {
  return (
    <>
      <Navbar />
      <Header />
      <Engines />
      <Capsulebg />
      <Search store={props.store} />
      <ApiData store={props.store}  />
      <DataGrid />
      <Footer />
    </>
    
  );
}

export default App;
