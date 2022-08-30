import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/galeria', label: 'Galería' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 m-12 bg-white'>
      <div className='layout h-21 flex items-center justify-between'>
        <UnstyledLink href='/' className='flex font-bold hover:text-gray-600'>
          <NextImage
            priority
            useSkeleton
            src='/images/melicena-round.png'
            width='90'
            height='90'
            alt='Melicena Logo'
          />
        </UnstyledLink>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
