import Header from './components/Header'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" style={myStyles}>
      <SideBar/>  
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
const myStyles={
  display:"flex",
 backgroundColor:"#b8d6f4",
 height:"100%",
 width:"100%"
}


export default App;
