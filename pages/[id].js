// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import NotFound from '../components/NotFound'

// const dishes = [
//   {
//     id: '1',
//     name: 'Appam',
//     image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Archana/Soft_and_Fluffy_Appam_Recipe.jpg',
//     description: 'Soft and fluffy rice pancakes.',
//     price: 50,
//     rating: 4.2,
//     cuisine: 'Kerala',
//     outlet: 'Cochin',
//     status: 'Open & delivering',
//   },
//   {
//     id: '2',
//     name: 'Puttu',
//     image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/puttu-recipe.jpg',
//     description: 'Steamed rice cake with coconut.',
//     price: 40,
//     rating: 4.0,
//     cuisine: 'Kerala',
//     outlet: 'Kochi',
//     status: 'Open & delivering',
//   },
//   {
//     id: '3',
//     name: 'Kerala Sadya',
//     image: 'https://www.keralatourism.org/images/kerala-sadya.jpg',
//     description: 'Traditional vegetarian feast.',
//     price: 200,
//     rating: 4.5,
//     cuisine: 'Kerala',
//     outlet: 'Trivandrum',
//     status: 'Closed & not delivering',
//   },
//   // ... add other dishes similarly or reuse from index.js
// ]

// export default function DishDetail() {
//   const router = useRouter()
//   const { id } = router.query

//   if (!id) {
//     return <p>Loading...</p>
//   }

//   const dish = dishes.find(d => d.id === id)

//   if (!dish) {
//     return <NotFound />
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Kerala Food Delivery</h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
//             <li><a href="#" className="hover:text-orange-500">Help</a></li>
//             <li><a href="#" className="hover:text-orange-500">Search</a></li>
//             <li><a href="#" className="hover:text-orange-500">Cart</a></li>
//           </ul>
//         </nav>
//       </header>

//       <h2 className="text-2xl font-semibold mb-2">{dish.name}</h2>
//       <div className="border-b mb-4">
//         <nav className="flex space-x-4 border-b-2 border-orange-500">
//           <button className="pb-2 border-b-2 border-orange-500 font-semibold">Order Online</button>
//           <button className="pb-2 text-gray-500">Dineout</button>
//         </nav>
//       </div>

//       <div className="bg-orange-50 p-4 rounded mb-4 text-sm text-orange-700">
//         <p>Currently not accepting orders at this moment. They should be back by 11:00 AM tomorrow.</p>
//       </div>

//       <div className="border rounded p-4 mb-6">
//         <p><strong>{dish.rating} (100+ ratings)</strong> - ₹{dish.price} for two</p>
//         <p className="text-orange-600 underline cursor-pointer">{dish.cuisine}</p>
//         <p>Outlet: {dish.outlet}</p>
//         <p>Status: {dish.status}</p>
//       </div>

//       <h3 className="text-xl font-semibold mb-2">Recommended</h3>
//       <ul>
//         <li className="mb-4 flex justify-between items-center">
//           <div>
//             <p className="font-semibold">La Mushroom Pizza</p>
//             <p className="text-sm text-gray-600">Fennel rice flour, layered pizza with secret Indian cheese, spicy & creamy.</p>
//             <p className="text-sm text-gray-600">₹125</p>
//           </div>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Mushroom_pizza.jpg" alt="La Mushroom Pizza" className="w-24 h-16 object-cover rounded" />
//         </li>
//         <li className="mb-4 flex justify-between items-center">
//           <div>
//             <p className="font-semibold">La Capsicum Pizza</p>
//             <p className="text-sm text-gray-600">Roasted capsicum freshly baked pizza with secret spice cheese.</p>
//             <p className="text-sm text-gray-600">₹125</p>
//           </div>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Capsicum_pizza.jpg" alt="La Capsicum Pizza" className="w-24 h-16 object-cover rounded" />
//         </li>
//       </ul>
//     </div>
//   )
// }

import { useRouter } from 'next/router'
import Link from 'next/link'
import NotFound from '../components/NotFound'

const dishes = [
  {
    id: '1',
    name: 'Appam',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Appam.jpg',
    description: 'Soft and fluffy rice pancakes.',
    price: 50,
    rating: 4.2,
    cuisine: 'Kerala',
    outlet: 'Cochin',
    status: 'Open & delivering',
  },
  {
    id: '2',
    name: 'Puttu',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Puttu_and_Kadala_curry.jpg',
    description: 'Steamed rice cake with coconut.',
    price: 40,
    rating: 4.0,
    cuisine: 'Kerala',
    outlet: 'Kochi',
    status: 'Open & delivering',
  },
  {
    id: '3',
    name: 'Kerala Sadya',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Sadya_kerala.jpg',
    description: 'Traditional vegetarian feast.',
    price: 200,
    rating: 4.5,
    cuisine: 'Kerala',
    outlet: 'Trivandrum',
    status: 'Closed & not delivering',
  },
  // ... add other dishes similarly or reuse from index.js
]

export default function DishDetail() {
  const router = useRouter()
  const { id } = router.query

  if (!id) {
    return <p>Loading...</p>
  }

  const dish = dishes.find(d => d.id === id)

  if (!dish) {
    return <NotFound />
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Kerala Food Delivery</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><a href="#" className="hover:text-orange-500">Help</a></li>
            <li><a href="#" className="hover:text-orange-500">Search</a></li>
            <li><a href="#" className="hover:text-orange-500">Cart</a></li>
          </ul>
        </nav>
      </header>

      <h2 className="text-2xl font-semibold mb-2">{dish.name}</h2>
      <div className="border-b mb-4">
        <nav className="flex space-x-4 border-b-2 border-orange-500">
          <button className="pb-2 border-b-2 border-orange-500 font-semibold">Order Online</button>
          <button className="pb-2 text-gray-500">Dineout</button>
        </nav>
      </div>

      <div className="bg-orange-50 p-4 rounded mb-4 text-sm text-orange-700">
        <p>Currently not accepting orders at this moment. They should be back by 11:00 AM tomorrow.</p>
      </div>

      <div className="border rounded p-4 mb-6">
        <p><strong>{dish.rating} (100+ ratings)</strong> - ₹{dish.price} for two</p>
        <p className="text-orange-600 underline cursor-pointer">{dish.cuisine}</p>
        <p>Outlet: {dish.outlet}</p>
        <p>Status: {dish.status}</p>
      </div>

      <h3 className="text-xl font-semibold mb-2">Recommended</h3>
      <ul>
        <li className="mb-4 flex justify-between items-center">
          <div>
            <p className="font-semibold">La Mushroom Pizza</p>
            <p className="text-sm text-gray-600">Fennel rice flour, layered pizza with secret Indian cheese, spicy & creamy.</p>
            <p className="text-sm text-gray-600">₹125</p>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Mushroom_pizza.jpg" alt="La Mushroom Pizza" className="w-24 h-16 object-cover rounded" />
        </li>
        <li className="mb-4 flex justify-between items-center">
          <div>
            <p className="font-semibold">La Capsicum Pizza</p>
            <p className="text-sm text-gray-600">Roasted capsicum freshly baked pizza with secret spice cheese.</p>
            <p className="text-sm text-gray-600">₹125</p>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Capsicum_pizza.jpg" alt="La Capsicum Pizza" className="w-24 h-16 object-cover rounded" />
        </li>
      </ul>
    </div>
  )
}
