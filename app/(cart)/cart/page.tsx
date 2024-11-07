"use client"

import Link from "next/link";
import { ProductItem } from "@/components/Product";

import { useCounterStore } from "@/providers/providers";
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Cart = () => {
    const { CartItemss } = useCounterStore((state) => state)
    console.log(CartItemss)

    const [mounted, setMounted] = useState(false)
    const { increaseQuantity, removeAll, decreaseQuantity, totalItems, totalPrice, removeItem } = useCounterStore((state) => state)
    const onIncreaseCart = (productId: string) => {
        increaseQuantity(productId);
    };

    const onDecreaseCart = (productId: string) => {
        decreaseQuantity(productId)
    }
    useEffect(() => {

        typeof window !== 'undefined' && setMounted(true)

    }, [increaseQuantity, decreaseQuantity, removeItem])

    if (CartItemss && CartItemss.length < 1) {
        return (<>{
            mounted && <div className="h-72 flex flex-col items-center justify-center">
                <h2 className="text-3xl mt-10 mb-5 font-bold">Cart is Empty</h2>
                <Link
                    href="/top"
                    className="px-6 py-2 rounded-md text-white bg-orange-500"
                >
                    Back to Home page
                </Link>
            </div>
        }
        </>
        );
    }
    return (
        <div className=" flex  flex-col items-center  w-full align-middle justify-start text-sm my-7 ">
            {
                mounted && <table className="gap-3 w-full mx-6 space-y-5 border-spacing-y-7  border-spacing-3 table text-left align-top justify-start border-separate">
                    <thead className="w-full align-top p-3">
                        <tr>
                            <th className="max-w-[65%] w-full">Product</th>
                            <th>Quantity</th>
                            <th>Unit</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CartItemss?.map((item: ProductItem) => (

                            <tr key={item.id} className="my-4 w-full align-top p-3">
                                <td className="max-w-[65%] w-full align-top">
                                    <span className="flex w-full gap-1 max-w-[60%] text-wrap flex-row ">
                                        <Image src={"https:" + item.image} width={40} height={40} alt="image" className="!w-16 !h-16" />
                                        <span className="font-medium text-xs" >{item.title}</span></span>
                                </td>
                                <td className="align-top space-x-[1px] ">
                                    <button className="bg-white px-2 py-[2px]  border-gray-400 border-[1px]" onClick={() => { item.quantity > 1 ? decreaseQuantity(item.id) : removeItem(item.id) }} >-</button>
                                    <span className="border-gray-400 border-[1px] px-3 py-1">{item.quantity}</span>
                                    <button onClick={() => { increaseQuantity(item.id) }} className="bg-white px-2 py-[2px] border-gray-400 border-[1px]">+</button>
                                </td>
                                <td className="align-top font-semibold">USD {item.promo.toFixed(2) || item.price.toFixed(2)} / Pieces</td>
                                <td className="align-top font-xs">{item.promo != null && item.price != null ? <div className="flex flex-col"><s className="text-sm">{"USD " + (item.price * item.quantity).toFixed(2)}</s> <h3 className="font-semibold text-base">USD {(item.promo * item.quantity).toFixed(2)}</h3></div> : <h3 className="font-semibold text-base">USD {((item.promo || item.price) * item.quantity).toFixed(2)}</h3>} </td>
                            </tr>
                        ))}</tbody>
                    <tfoot className="text-base font-bold">
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Subtotal</td>
                            <td>USD {totalPrice?.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            }


            <div className="w-full flex px-6 justify-end ">
                <Button className="bg-orange-500 text-white text-base px-5 py-2" >Continue with supplier</Button>
            </div>
        </div>
    );
};

export default Cart;