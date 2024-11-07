// src/providers/counter-store-provider.tsx
'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type CartStore, useCartStore, initCounterStore } from '@/Store/useCartStore'

export type CounterStoreApi = ReturnType<typeof useCartStore>

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
    undefined,
)

export interface CounterStoreProviderProps {
    children: ReactNode
}

export const CounterStoreProvider = ({
    children,
}: CounterStoreProviderProps) => {
    const storeRef = useRef<CounterStoreApi>()
    if (!storeRef.current) {
        storeRef.current = useCartStore(initCounterStore())
    }

    return (
        <CounterStoreContext.Provider value={storeRef.current}>
            {children}
        </CounterStoreContext.Provider>
    )
}

export const useCounterStore = <T,>(
    selector: (store: CartStore) => T,
): T => {
    const counterStoreContext = useContext(CounterStoreContext)

    if (!counterStoreContext) {
        throw new Error(`useCounterStore must be used within CounterStoreProvider`)
    }

    return useStore(counterStoreContext, selector)
}
