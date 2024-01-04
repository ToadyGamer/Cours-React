import Link from 'next/link';

function Page2() {
  return (
    <div>
      Ceci est la page Home
      <br />
      <Link href="/menu">
        Aller à la page menu
      </Link>
    </div>
  );
}

export default Page2;