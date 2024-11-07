'use client'
import { create } from "zustand";
import { createStore } from 'zustand/vanilla'
import { ProductItem } from "@/components/Product";
import { createJSONStorage, persist } from "zustand/middleware";
import { useEffect, useState } from "react";

import { persistNSync } from "persist-and-sync";

export type CartStore = {
    CartItemss: ProductItem[];
    addItemToCart: (p: ProductItem) => void,
    removeItem: (productId: string) => void,
    removeAll: () => void,
    increaseQuantity: (productId: string) => void,
    decreaseQuantity: (productId: string) => void;
    totalItems: number;
    totalPrice: number;
}
export const defaultInitState: StoreCart = {
    CartItemss: [],
    totalItems: 0,
    totalPrice: 0,
}

export type StoreCart = {
    CartItemss: [],
    totalItems: number;
    totalPrice: number;
}
export const initCounterStore = (): StoreCart => {
    return {
        CartItemss: typeof window !== 'undefined' ? (JSON.parse(<string>localStorage.getItem('cartitem')) ?? []) : null,
        totalItems: typeof window !== 'undefined' ? (JSON.parse(<string>localStorage.getItem('totalItems')) ?? []) : null,
        totalPrice: typeof window !== 'undefined' ? (JSON.parse(<string>localStorage.getItem('totalPrice')) ?? []) : null,
    }
}
export const useCartStore = (
    initState: StoreCart = defaultInitState,
) => {

    return createStore<CartStore>()(

        (set) => ({
            ...initState,
            CartItemss: typeof window !== 'undefined' ? (JSON.parse(<string>localStorage.getItem('cartitem')) ?? []) : null,
            //  typeof window !== 'undefined' ? (JSON.parse(<string>localStorage.getItem('cart')) ?? []) : null,
            totalItems: typeof window !== 'undefined' ? (JSON.parse(<string>localStorage.getItem('totalItems')) ?? []) : null,
            totalPrice: typeof window !== 'undefined' ? (JSON.parse(<string>localStorage.getItem('totalPrice')) ?? []) : null,
            addItemToCart: (item: ProductItem) =>

                set((state) => {
                    const existingItem = state.CartItemss.find((i) => i.id == item.id);
                    console.log('eeeee', existingItem)
                    let updatedItems = [];
                    if (existingItem) {
                        // If item exists, increase its quantity
                        updatedItems = state.CartItemss.map((i) =>
                            i.id == item.id ? { ...i, quantity: i.quantity + item.quantity } : i


                        );
                        localStorage.clear();
                        localStorage.setItem("cartitem", JSON.stringify(updatedItems));
                        localStorage.setItem('totalPrice', updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0))
                        localStorage.setItem('totalItems', updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0),)
                        return {
                            CartItemss: updatedItems,
                            totalPrice: updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0),
                            totalItems: updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0),
                        };
                    } else {
                        // Otherwise, add the new item
                        updatedItems = [...state.CartItemss, item];
                        console.log('uppppp', updatedItems)
                        localStorage.clear();
                        localStorage.setItem("cartitem", JSON.stringify(updatedItems));
                        localStorage.setItem('totalPrice', updatedItems.reduce((sum: any, item: any) => sum + item.price * item.quantity,
                            0),)
                        localStorage.setItem('totalItems', updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0),)
                        return {
                            CartItemss: updatedItems,
                            totalPrice: updatedItems.reduce((sum, item) => sum + item.price * item.quantity,
                                0),
                            totalItems: updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0),
                        };
                    }
                }),
            removeItem: (id) =>
                set((state) => {
                    let updatedItems = [];
                    updatedItems = state.CartItemss.filter((item) => item.id !== id);
                    const totalPrice = updatedItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    );
                    const totalItems = updatedItems.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                    );
                    localStorage.clear();
                    localStorage.setItem("cartitem", JSON.stringify(updatedItems));
                    localStorage.setItem('totalPrice', updatedItems.reduce((sum: any, item: any) => sum + item.price * item.quantity,
                        0),)
                    localStorage.setItem('totalItems', updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0),)
                    return {
                        CartItemss: updatedItems,
                        totalPrice,
                        totalItems,
                    };
                }),
            removeAll: () =>

                set((state) => (

                    localStorage.clear(),
                    localStorage.setItem("cartitem", '[]'),
                    localStorage.setItem('totalPrice', '0'),
                    localStorage.setItem('totalItems', '0'),
                    {
                        returnCartItemss: [],
                        totalItems: 0,
                        totalPrice: 0,
                    })),
            increaseQuantity: (id: String) =>
                set((state) => {
                    let updatedItems = [];
                    updatedItems = state.CartItemss.map((item) =>
                        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
                    );

                    const totalPrice = updatedItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    );
                    const totalItems = updatedItems.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                    );
                    localStorage.clear();
                    localStorage.setItem("cartitem", JSON.stringify(updatedItems));
                    localStorage.setItem('totalPrice', updatedItems.reduce((sum: any, item: any) => sum + item.price * item.quantity,
                        0),)
                    localStorage.setItem('totalItems', updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0),)
                    return {
                        CartItemss: updatedItems,
                        totalPrice,
                        totalItems,
                    };
                }),
            decreaseQuantity: (id) =>
                set((state) => {
                    let updatedItems = [];
                    updatedItems = state.CartItemss
                        .map((item) =>
                            item.id === id
                                ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                                : item
                        );

                    const totalPrice = updatedItems.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    );
                    const totalItems = updatedItems.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                    );
                    localStorage.clear();
                    localStorage.setItem("cartitem", JSON.stringify(updatedItems));
                    localStorage.setItem('totalPrice', updatedItems.reduce((sum: any, item: any) => sum + item.price * item.quantity,
                        0),)
                    localStorage.setItem('totalItems', updatedItems.reduce((sum: any, i: any) => sum + i.quantity, 0),)
                    return {
                        CartItemss: updatedItems,
                        totalPrice,
                        totalItems,
                    };
                }),

        })
    )
}

