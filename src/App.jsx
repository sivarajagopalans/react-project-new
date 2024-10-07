import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Products } from './components/Products';
import { PaginationCom } from './components/PaginationCom';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/register-form/RegisterForm';

function App() {

  return (
    <>
      {/* <Products/>
      <PaginationCom/> */}
      {/* <LoginForm /> */}
      <RegisterForm />
    </>
  )
}

export default App
