import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Nguyen Van Khanh - K23CNT - ReactJS</h1>
      <hr/>
      {/* su dung component NvkCompA */}
      <NvkCompA/>
      <NvkCompA nvkName="Nguyen Van Khanh" nvkAddress="28 Dai Linh" nvkMasv="2310900047" nvkNgaysinh="29/05/2005" nvkDienthoai="0984915173" nvkLop="K23CNT3"/>
    </div>
  );
}

export default App;
