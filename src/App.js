import { SignIn,SignUp ,Home} from "./page";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
  );
}

export default App;
