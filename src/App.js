import { SignIn,SignUp } from "./page";
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
