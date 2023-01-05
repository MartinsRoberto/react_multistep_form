
import Steps from './components/Steps'
import { useForm } from './hooks/useForm'
import './App.css'

import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import UserForm from './components/UserForm'
import { useState } from 'react'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];
  const { currentStep, currentComponent, changeStep } = useForm(formComponents)

  return (
    <div className="App">
      <div className="container">
        <Steps currentStep={currentStep} />
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
