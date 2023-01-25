import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react'
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode,setDarkMode] = useState("light");
  const [modeText,setModetext] = useState("Dark Mode");
  const [alert,setAlert]=useState(null);
  const [color,setStyle] = useState("white","black");

  const setColor =(bgColor,color)=>{
    setStyle({
      bgcolor:bgColor,
      color:color
    })
  }
  const colorChangeGree =()=>{
    if(color.color!=="white"){
      document.body.style.backgroundColor = '#205c30';
      document.body.style.color = "white";
      setColor("#a1c1a1","white");
      showAlert("Green Mode is Enable","success");
    }else{
      document.body.style.backgroundColor = 'white';
      document.body.style.color = "black";
      setColor("white","black");
      showAlert("Green Mode is Disable","success");
    }
    
  }



   const showAlert = (message,type) =>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() =>{
          setAlert(null);
        },2000);
      }

  const toggleMode = () =>{
      if(mode === 'light'){
        setDarkMode('dark');
        setModetext('Dark Mode');
        document.body.style.backgroundColor = '#042743';
        document.body.style.color = "white";
        showAlert("Dark Mode is Enable","success");
        setInterval(() =>{
          document.title= "Paytm MLoyal";
        },2000);
        setInterval(() =>{
          document.title = "The Loyalty Program";
        },1500)
      }else{
        setDarkMode('light');
        setModetext('Light Mode');
        document.body.style.backgroundColor = 'white';
        document.body.style.color='#212529';
        showAlert("Light Mode is Enable","success");
      }
     
  }
  return (
    <>
    {/* <BrowserRouter> */}
      {/* Pass props in function */}
      <NavBar title="Paytm Mloyal" aboutText ="About Mloyal" mode={mode} toggleMode={toggleMode} modeText={modeText} colorChangeGree={colorChangeGree} color={color}/>   
        <div className="container">
        <Alert alert={alert}/>
        <About mode={mode}/>
        <TextForm heading="Feedback" mode={mode} showAlert={showAlert} color={color}/>
            {/* <Routes>
              <Route exact path="/About" element={<About mode={mode}/>} />
              <Route exact path="/" element={<TextForm heading="Feedback" mode={mode} showAlert={showAlert} color={color}/>} />
            </Routes> */}
        </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
