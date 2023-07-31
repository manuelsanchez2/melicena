import UnstyledLink from '@/components/links/UnstyledLink';
import ModeToggler from '@/components/mode-toggler/ModeToggler';
import Link from 'next/link';

export default function Header() {
  return (
    <div className='navbar bg-base-100 container p-4 mx-auto'>
      <div className='flex-1'>
        <Link
          href='/'
          title='A la página principal'
          className='btn btn-ghost normal-case text-xl'
        >
          Melicena
        </Link>
      </div>
      <div className='flex-none'>
        <ModeToggler />
        <ul className='menu menu-horizontal px-1'>
          <li>
            <UnstyledLink href='/' className='hover:text-gray-600'>
              Inicio
            </UnstyledLink>
          </li>
          <li>
            <details>
              <summary>Sobre el pueblo</summary>
              <ul className='p-2 bg-base-100'>
                <li>
                  <Link href='/gallery'>Galería</Link>
                </li>
                <li>
                  <Link href='/quiz'>Quiz (en construcción)</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
