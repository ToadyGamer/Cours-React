import { useReducer, useState } from 'react';
import '../App.css'
import { Card } from 'flowbite-react';

function AddProfile(props : {AddEmploye : (newEmploye : {prenom: string; phone: string; }) => void}) {

  
  const [prenom, SetPrenom] = useState("");
  const [phone, SetPhone] = useState("");
  
  function Submit() {
    let employe = {prenom, phone}
    employe.prenom = prenom;
    employe.phone = phone;

    props.AddEmploye(employe);
  }
  
  const PrenomHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    SetPrenom(e.target.value);
  }
  const PhoneHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    SetPhone(e.target.value);
  }
  


  const [state, dispatch] = useReducer(counterReducer, { count: 0, bis:3 });

  function counterReducer(state : any, action : any) {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, count: state.count + 1};
      case 'DECREMENT':
        return { ...state , count: state.count - action.amount };
        default:
        throw new Error();
    }
  }

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'DECREMENT', amount: 2 })}>-</button>
      <button onClick={() => dispatch({ type: 'INCREMENT', amount: 1 })}>+</button>

      <Card className="max-w-sm form">
        <form onSubmit={Submit}>
          <p className="font-normal text-gray-700 dark:text-gray-400"> 
            <label>
              Prenom : <input type="text" value={prenom} onChange={PrenomHandler} name='newPrenom'/>
            </label> <br /> <br />
            <label>
              Phone : <input type="text" value={phone} onChange={PhoneHandler} name='newPhone'/>
            </label> <br /> <br />

            <button type='button' onClick={Submit}>Ajouter</button>
          </p>
        </form>
      </Card>
    </>
  )
}

export default AddProfile
