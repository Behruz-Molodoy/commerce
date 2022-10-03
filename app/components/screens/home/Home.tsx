import { NextPage } from "next"

import { useGetProductsQuery } from "../../../store/products/product.api";
import LoadingItem from "../../UI/LoadingItem";
import CardDropdown from './cart-dropdown/CartDropdown';
import LogError from '../../UI/LogError';
import ProductItem from './ProductItem';

const Home: NextPage = () => {
    const { isLoading, data, error } = useGetProductsQuery(6)

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <h1 className="text-2xl text-green-900 font-medium">
                    Let&apos;s find your products
                </h1>
                <CardDropdown />
            </div>

            {isLoading
                ? <LoadingItem />
                : error
                    ? <LogError />
                    : (
                        <div className="flex flex-wrap justify-between">
                            {data && data.map((product) => <ProductItem key={product.id} {...product} />)}
                        </div>
                    )
            }
        </div >
    )
}

export default Home

{/* */ }