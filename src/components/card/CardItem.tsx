import Image from 'next/image';
import React, { useCallback, useEffect, useRef } from 'react';

type BaseData = {
  id: number;
  name: string;
  img: string;
  description?: string;
  date?: string;
};

type CardItemProps = {
  data: BaseData;
  variant?: 'place' | 'festivity';
};

const CardItem: React.FC<CardItemProps> = ({ data, variant = 'place' }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalRef = useRef<HTMLFormElement>(null);

  const showModal = useCallback(() => {
    dialogRef.current && dialogRef.current.showModal();
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dialogRef.current && modalRef.current) {
      if (
        dialogRef.current.open &&
        !modalRef.current.contains(event.target as Node)
      ) {
        dialogRef.current.close();
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <li>
      <div className='card w-full max-w-96 bg-base-100 shadow-xl'>
        <Image src={data.img} width='600' height='300' alt={data.name} />
        <div className='card-body'>
          <h3 className='card-title'>{data.name}</h3>
          {variant === 'place' && (
            <p className='line-clamp-2 mb-2'>{data.description}</p>
          )}
          {variant === 'festivity' && (
            <p className='flex items-center gap-3'>
              <svg
                className='h-4 w-4'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                {' '}
                <g clip-path='url(#calendar-lg-clip)'>
                  <path
                    d='M3.77363 2H20.2264C21.7582 2 23 3.2418 23 4.77363V20.2264C23 21.7582 21.7582 23 20.2264 23H3.77363C2.24179 23 1 21.7582 1 20.2264V4.77363C1 3.24179 2.24179 2 3.77363 2Z'
                    stroke='currentColor'
                    stroke-width='2'
                  />
                  <path
                    d='M2 7L22.4347 7'
                    stroke='currentColor'
                    stroke-width='2'
                  />
                  <path
                    d='M7 4V1'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                  <path
                    d='M17 4V1'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                  />
                </g>
                <defs>
                  {' '}
                  <clipPath id='calendar-lg-clip'>
                    <rect width='24' height='24' fill='none' />
                  </clipPath>
                </defs>
              </svg>{' '}
              <span> {data.date}</span>
            </p> // Assuming date is present in BaseData for festivity
          )}
          {variant === 'place' && (
            <div className='card-actions justify-end'>
              <button className='btn btn-primary' onClick={showModal}>
                Leer más
              </button>
            </div>
          )}
        </div>
      </div>

      {variant === 'place' && (
        <dialog ref={dialogRef} id={`my_modal_${data.name}`} className='modal'>
          <form ref={modalRef} method='dialog' className='modal-box'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
            <div className='font-bold text-lg'>{data.name}</div>
            <p className='py-4'>{data.description}</p>
          </form>
        </dialog>
      )}
    </li>
  );
};

export default CardItem;
