import React, { useCallback, useRef } from 'react';

const CardItem = ({ index = 0 }: { index: number }) => {
  const dialogRef = useRef<HTMLDialogElement>(null); // Create a ref

  const showModal = useCallback(() => {
    if (dialogRef.current) dialogRef.current.showModal();
  }, []);

  return (
    <li>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure>
          <img src='/images/info-0.png' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h3 className='card-title'>El kiosko</h3>
          <p>Un lugar que siempre merece la pena visitar</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary' onClick={showModal}>
              Más info
            </button>
          </div>
        </div>
      </div>

      {/* Attach the ref to the dialog */}
      <dialog ref={dialogRef} id={`my_modal_${index}`} className='modal'>
        <form method='dialog' className='modal-box'>
          <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
            ✕
          </button>
          <h3 className='font-bold text-lg'>Hello!</h3>
          <p className='py-4'>Press ESC key or click on ✕ button to close</p>
        </form>
      </dialog>
    </li>
  );
};

export default CardItem;
