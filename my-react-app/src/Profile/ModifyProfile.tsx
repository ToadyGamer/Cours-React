import '../App.css'

import { useState } from 'react';
import { Card } from 'flowbite-react';

function Profile() {

  const [prenom, SetPrenom] = useState("");
  const [phone, SetPhone] = useState("");

function oui() {

}

  return (
    <>
      <Card href="#" className="max-w-sm">
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Prenom : {prenom}<br />
        Téléphone : {phone}<br />
      </p>
      {/* <button onClick={() => SetVisibility(!visible)}>Modifier</button> */}
    </Card>
    </>
  )
}

export default Profile
