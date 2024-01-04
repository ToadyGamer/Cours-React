import Link from 'next/link';

function Page2() {
  return (
    <div>
      Ceci est la page Menu
      <br />
      <Link href="/home">
        Aller à la page Home
      </Link>
    </div>
  );
}

export default Page2;