import './App.css';

function App() {
  const name = "Yunseo";
  const naver = {
    name:"네이버",
    url:"https://naver.com",
  };

  return (
    <div className="App">
      <h1 style={
        {color:"white",
      backgroundColor:"black",}
      }>Welcome,{name}</h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
