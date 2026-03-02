import { create } from 'zustand';

export async function getProducts() {
    try {
        const res = await fetch("http://localhost:3000/get_products")
        const allData = await res.json();
        console.log(allData);
        return allData
    } catch (error) {
        console.log("the problem is in get all products in the client: ", error);
    }
}

export const useProducts = create((set) => ({
    counter: 0,
    allCard: [],
    totalItems: 0,
    totalPrice: 0,
    cart: [],

    

    // addCard: ()=> set
}))

// export const useProducts = create((set) => ({
//     bears: 0,
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     removeAllBears: () => set({ bears: 0 }),
//     updateBears: (newBears) => set({ bears: newBears }),
// }))

// function BearCounter() {
//   const bears = useBear((state) => state.bears)
//   return <h1>{bears} bears around here...</h1>
// }

// function Controls() {
//   const increasePopulation = useBear((state) => state.increasePopulation)
//   return <button onClick={increasePopulation}>one up</button>
// }