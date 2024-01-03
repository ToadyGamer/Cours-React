import { useState } from 'react';
import '../App.css'
import Profile from './Profile.tsx'
import { Card } from 'flowbite-react';

function AddProfile(props : {AddEmploye : (newEmploye : {prenom: string; phone: string; }) => void}) {

  const [prenom, SetPrenom] = useState("");
  const [phone, SetPhone] = useState("");

  function Submit() {
    let employe = {prenom, phone}
    employe.prenom = prenom;
    employe.phone = phone;

    props.AddEmploye(employe);

    // <Profile newEmploye={employe}/>
    // let updatedEmployes = [...employes];
  
    // updatedEmployes[employe].prenom = prenom;
    // updatedEmployes[employe].phone = phone;
  
    // SetEmployes(updatedEmployes);
  }

  const PrenomHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    SetPrenom(e.target.value);
  }
  const PhoneHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    SetPhone(e.target.value);
  }


  return (
    <>
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
