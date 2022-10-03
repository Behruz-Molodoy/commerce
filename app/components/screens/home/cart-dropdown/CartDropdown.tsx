import Image from 'next/image';
import React from 'react'
import { BsX, BsCart, BsTrash } from 'react-icons/bs'

import { useOutside } from '../../../../hooks/useOutside';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { IProduct } from '../../../../store/products/products.types';
import { useActions } from '../../../../hooks/useActions';
import Link from 'next/link';

export default function CardDropdown() {
  const { ref, isShow, setIsShow } = useOutside(false)

  const cart = useTypedSelector(({ cart }) => cart)

  const { removeItem } = useActions()

  return (
    <>
      <button className='bg-green-800 rounded-full text-white p-2 block' onClick={() => setIsShow(!isShow)}>
        {isShow ? <BsX /> : <BsCart />}
      </button>

      {isShow && (
        <div
          className='bg-white rounded-t-xl shadow-2xl fixed bottom-0 left-0 anim-cart z-10 py-7 px-5 w-full'
          style={{ minWidth: "45%" }}
          ref={ref}
        >
          {cart.length ? (
            <>
              {cart.map((product: IProduct) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between  bg-green-100 rounded-lg p-4 mb-4"
                >
                  <div className='w-3/4 flex items-center'>
                    <div className='mr-4'>
                      <Image src={product.image} alt={product.description} width="33" height="48" layout='fixed' className='rounded-lg' />
                    </div>

                    <div className='text-sm mr-4 w-3/4'>
                      <div className='overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-green-900 mb-1'>
                        {product.title}
                      </div>
                      <div className='text-green-800'>{product.price}</div>
                    </div>
                  </div>
                  <button onClick={() => removeItem({ id: product.id })}>
                    <BsTrash className="text-green-600"></BsTrash>
                  </button>
                </div>
              ))}
              <button className='text-1xl text-cyan-300'><Link href="/shoped">SHop</Link></button>
            </>
          )

            : <h1 className='text-green-400 text-3xl text-center'>Cart is empty</h1>
          }

        </div>
      )}
    </>
  )
}
