
import Steps from './components/Steps'
import { useForm } from './hooks/useForm'
import './App.css'

import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import UserForm from './components/UserForm'

function App() {

  const formComponents = [<UserForm />, <ReviewForm />, <Thanks />]

  const { currentStep, currentComponent, changeStep } = useForm(formComponents)

  return (
    <div className="App">
      <div className="container">
        <Steps/>
        <div className="inputs-container">{currentComponent}</div>

        <div className="btns">
          <button type='button' onClick={() => changeStep(currentStep - 1)}>Voltar</button>
          <button type='button' onClick={() => changeStep(currentStep + 1)}>Avançar</button>
        </div>

      </div>
    </div>
  )
}

export default App
