import Image from "next/image";
import { FC } from 'react'
import { IProduct } from '../../../store/products/products.types';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const ProductItem: FC<IProduct> = ({ image, price, title, category, description, id, rating }) => {
    const { addItem } = useActions()

    const cart = useTypedSelector(({ cart }) => cart)

    const isExistsInCart: boolean = cart.some(product => product.id === id)

    return (
        <div className="rounded-xl mb-5 p-3 shadow-sm w-2/4 bg-yellow-50"  >
            <div className="text-center">
                <Image src={image} alt={title} width="100" height="143" className="rounded-xl" />
            </div>
            <div className="flex items-center justify-between mt-3">
                <div className="text-green-900 font-medium text-sm overflow-hidden text-ellipsis whitespace-nowrap mr-5">
                    {title}
                </div>
                <div className="text-sm text-green-600">{price}</div>
            </div>
            <button className="text-sm mt-3 bg-white rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200"
                onClick={() => !isExistsInCart && addItem({ image, price, title, category, description, id, rating })}
            >
                {isExistsInCart ? "Already exist in cart" : "Add to Cart"}
            </button>
        </div>
    )
}

export default ProductItem