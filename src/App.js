import Header from "./components/Header";
import Side from "./components/Side";
import Main from "./components/Main";

function App() {
  return (
    <div className="grid grid-cols-12">
      <Header />
      <Side />
      <Main />
    </div>
  );
}

export default App;
