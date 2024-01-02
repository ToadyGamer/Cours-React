
import { useState } from 'react';
import './App.css'

import { Card } from 'flowbite-react';

function Profile() {

const [visible, SetVisibility] = useState(false);

var data = [
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

  return (
    <>
      <ul>
      {data.map((element, i) => 
      <>
      <li>
        <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          EMPLOYE N°{i + 1}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Prenom : {element.prenom}<br />
          Téléphone : {element.phone}<br />
        </p>
        <button onClick={() => SetVisibility(!visible)}>Modifier l'employe</button>
      </Card>
      </li>
    </>
    )}
      </ul>
    {visible && <>oui</>}
    </>
  )
}

export default Profile
