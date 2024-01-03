import '../App.css'

import AddProfile from './AddProfile.tsx'
import { useState, useEffect } from 'react';
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

  function AddAEmploye(newEmploye : {prenom: string; phone: string; }){

    let updatedEmployes = [...employes];
  
    updatedEmployes.push(newEmploye);
  
    SetEmployes(updatedEmployes);
  }

  function ModifyAProfile(i : number){
    if(visible)
    {
      if(employe == i) SetVisibility(false);
      else{
        SetEmploye(i);
  
        SetPrenom(employes[i].prenom);
        SetPhone(employes[i].phone);
      }
    }
    else{
        SetEmploye(i);
  
        SetPrenom(employes[i].prenom);
        SetPhone(employes[i].phone);
  
        SetVisibility(true);
    }
  }

  //A CHAQUE FOIS QU'UNE FONCTION EST APPELLE, ON UTILISE LE USEEFFECT.
  //D'OU L'IMPORTANCE DE BIEN SEPARER SES PAGES EN DIFFERENTS TSX
  useEffect(() => {
    console.log(`Modification d'un employe n°${employe} !`);
  },[prenom, phone]);

  function Submit() {
    let updatedEmployes = [...employes];
  
    updatedEmployes[employe].prenom = prenom;
    updatedEmployes[employe].phone = phone;
  
    SetEmployes(updatedEmployes);

    SetVisibility(false);
  }

  const PrenomHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    SetPrenom(e.target.value);
  }
  const PhoneHandler = (e:  React.ChangeEvent<HTMLInputElement>) => {
    SetPhone(e.target.value);
  }

  return (
    <>
      <ul className='Employes'>
        {employes.map((element, i) =>
        <>
          <li className='Employe'>
            <Card className="max-w-sm listEmploye">
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
      <Card className="max-w-sm form">
        <form onSubmit={Submit}>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <label>
              Prenom : <input type="text" value={prenom} onChange={PrenomHandler} name='newPrenom'/>
            </label> <br /> <br />
            <label>
              Phone : <input type="text" value={phone} onChange={PhoneHandler} name='newPhone'/>
            </label> <br /> <br />

            <button type='submit'>Modifier</button>
          </p>
        </form>
      </Card>
      }

      <br />
      <br />

      <AddProfile AddEmploye={AddAEmploye}/>
      
    </>
  )
}

export default Profile
