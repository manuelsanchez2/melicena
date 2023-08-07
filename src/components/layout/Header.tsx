import UnstyledLink from '@/components/links/UnstyledLink';
import ModeToggler from '@/components/mode-toggler/ModeToggler';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const isActive = (href: string) => {
    return router.pathname === href;
  };

  return (
    <div className='navbar bg-base-100 container p-4 mx-auto'>
      <div className='flex-1'>
        <Link
          href='/'
          title='A la página principal'
          className={`btn btn-ghost normal-case text-md sm:text-xl pl-2 pr-2 ${
            isActive('/') ? 'font-bold' : ''
          }`}
        >
          Melicena
        </Link>
      </div>
      <div className='flex-none'>
        <ModeToggler />
        <ul className='menu menu-horizontal px-1'>
          <li className='hidden sm:block'>
            <UnstyledLink
              href='/'
              className={`hover:text-gray-600 ${
                isActive('/') ? 'font-bold' : ''
              }`}
            >
              Inicio
            </UnstyledLink>
          </li>
          <li>
            <details>
              <summary>Sobre el pueblo</summary>
              <ul className='p-2 bg-base-100'>
                <li>
                  <Link
                    className={isActive('/galeria') ? 'font-bold' : ''}
                    href='/galeria'
                  >
                    Galería
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/quiz') ? 'font-bold' : ''}
                    href='/quiz'
                  >
                    Quiz
                  </Link>
                </li>
                <li>
                  <Link
                    className={isActive('/fiestas-2023') ? 'font-bold' : ''}
                    href='/fiestas-2023'
                  >
                    Programación Fiestas 2023
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
