import Navbar from "./Components/Navbar";
import Products from "./Components/Products";

const App = () => { 
  return (
    <div className="App">
      <Navbar />
      {/* <div className="title-box">
        <h1 className="title-lbl">ÇiçekSepeti</h1>
      </div> */}
      <Products />
    </div>
  );
}

export default App;
