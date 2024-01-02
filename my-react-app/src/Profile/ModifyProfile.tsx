
import { useState } from 'react';
import './App.css'

import { Card } from 'flowbite-react';

function Profile() {

const [visible, SetVisibility] = useState(true);

  return (
    <>
    {
      visible &&

      <Card href="#" className="max-w-sm">
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Nom : <br />
        Prenom : <br />
        Téléphone : <br />
      </p>
      <button onClick={() => SetVisibility(!visible)}>Modifier</button>
    </Card>
    }
    </>
  )
}

export default Profile
