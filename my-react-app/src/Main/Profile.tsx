import '../App.css'

import { useState } from 'react';
import { Card } from 'flowbite-react';

function Profile() {

const data = [
	{
		"prenom": "Lysandra",
		"phone": "(522) 364-2659"
	},
	{
		"prenom": "Hall",
		"phone": "(333) 671-0754"
	},
	{
		"prenom": "Quinlan",
		"phone": "(677) 239-2808"
	}
];

const [employes, SetEmployes] = useState(data);
const [visible, SetVisibility] = useState(false);
const [prenom, SetPrenom] = useState("");
const [phone, SetPhone] = useState("");
const [employe, SetEmploye] = useState(-1);

  function ModifyAProfile(i : number){
    if(visible)
    {
      if(employe == i) SetVisibility(false);
      else{
        SetEmploye(i);
  
        SetPrenom(data[i].prenom);
        SetPhone(data[i].phone);
      }
    }
    else{
        SetEmploye(i);
  
        SetPrenom(data[i].prenom);
        SetPhone(data[i].phone);
  
        SetVisibility(true);
    }
  }

  function Submit() {
    let newPrenom = document.getElementsByName('newPrenom')[0] as HTMLInputElement;
    let newPhone = document.getElementsByName('newPhone')[0] as HTMLInputElement;
  
    let updatedEmployes = [...employes];
  
    updatedEmployes[employe].prenom = newPrenom.value;
    updatedEmployes[employe].phone = newPhone.value;
  
    SetEmployes(updatedEmployes);

    SetVisibility(false);
  }

  return (
    <>
      <ul className='Employes'>
        {employes.map((element, i) =>
        <>
          <li className='Employe'>
            <Card href="#" className="max-w-sm listEmploye">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              EMPLOYE N°{i + 1}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Prenom : {element.prenom}<br />
              Téléphone : {element.phone}<br />
            </p>
            <button onClick={() =>  ModifyAProfile(i)}>Modifier l'employe</button>
          </Card>
          </li>
        </>
        )}
      </ul>

      <br />
      <br />  
      <br />
      <br />  

      {visible &&
      <Card href="#" className="max-w-sm form">
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <form onSubmit={Submit}>
            <label>
              Prenom : <input type="text" defaultValue={prenom} key={prenom} name='newPrenom'/>
            </label> <br /> <br />
            <label>
              Phone : <input type="text" defaultValue={phone} key={phone} name='newPhone'/>
            </label> <br /> <br />
          <button type="submit">Modifier</button>
          </form>
        </p>
      </Card>
      }

      
    </>
  )
}

export default Profile
