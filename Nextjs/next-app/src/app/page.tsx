import Link from 'next/link'

// import * as React from "react"

// import { Button } from "@/components/ui/button"

function Page1() {
  return (
    <div>
      Ceci est la page principale
      <br />
      <Link href="/home">
        Aller à la page Home
      </Link>

      {/* <Button>Click me</Button> */}
    </div>
  );
}

export default Page1;