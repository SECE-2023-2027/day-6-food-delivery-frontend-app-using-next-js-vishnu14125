// import Link from 'next/link'

// const dishes = [
//   {
//     id: '1',
//     name: 'Appam',
//     // image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Appam.jpg',
//     image : 'https://t4.ftcdn.net/jpg/04/10/55/63/360_F_410556335_6p6Jz5nq47Xh46ohiKHQzXfUIiNF1Xny.jpg',
//     description: 'Soft and fluffy rice pancakes.',
//     price: 50,
//   },
//   {
//     id: '2',
//     name: 'Puttu',
//     image: 'https://clubmahindra.gumlet.io/blog/media/section_images/ajourneyin-b1a9b6850cc6a2d.jpg?w=376&dpr=2.6',
//     description: 'Steamed rice cake with coconut.',
//     price: 40,
//   },
//   {
//     id: '3',
//     name: 'Kerala Sadya',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1aOjnf6u3QXVpf1obCP1uV1Vtf1iEyeiXbg&s',
//     description: 'Traditional vegetarian feast.',
//     price: 200,
//   },
//   {
//     id: '4',
//     name: 'Fish Curry',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Kerala_Fish_Curry.jpg',
//     description: 'Spicy and tangy fish curry.',
//     price: 150,
//   },
//   {
//     id: '5',
//     name: 'Beef Fry',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Kerala_Beef_Fry.jpg',
//     description: 'Spicy dry-fried beef.',
//     price: 180,
//   },
//   {
//     id: '6',
//     name: 'Idiyappam',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Idiyappam.jpg',
//     description: 'String hoppers made from rice flour.',
//     price: 45,
//   },
//   {
//     id: '7',
//     name: 'Thalassery Biryani',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Thalassery_Biryani.jpg',
//     description: 'Fragrant biryani with spices.',
//     price: 220,
//   },
//   {
//     id: '8',
//     name: 'Nadan Kozhi Curry',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Kerala_Chicken_Curry.jpg',
//     description: 'Traditional chicken curry.',
//     price: 160,
//   },
//   {
//     id: '9',
//     name: 'Parotta',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Parotta.jpg',
//     description: 'Flaky layered flatbread.',
//     price: 30,
//   },
//   {
//     id: '10',
//     name: 'Kadala Curry',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Puttu_and_Kadala_curry.jpg',
//     description: 'Black chickpea curry.',
//     price: 60,
//   },
//   {
//     id: '11',
//     name: 'Ela Ada',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Ela_Ada.jpg',
//     description: 'Steamed rice flour dumplings with coconut.',
//     price: 40,
//   },
//   {
//     id: '12',
//     name: 'Unniyappam',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Unniyappam.jpg',
//     description: 'Sweet fried rice flour dumplings.',
//     price: 35,
//   },
//   {
//     id: '13',
//     name: 'Thoran',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Thoran.jpg',
//     description: 'Stir-fried vegetable with coconut.',
//     price: 50,
//   },
//   {
//     id: '14',
//     name: 'Avial',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Avial.jpg',
//     description: 'Mixed vegetable curry with coconut.',
//     price: 70,
//   },
//   {
//     id: '15',
//     name: 'Sadhya Rice',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Sadya_kerala.jpg',
//     description: 'Plain rice served in Sadya.',
//     price: 20,
//   },
//   {
//     id: '16',
//     name: 'Meen Pollichathu',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Kerala_Fish_Curry.jpg',
//     description: 'Fish cooked in banana leaf.',
//     price: 180,
//   },
//   {
//     id: '17',
//     name: 'Kappa',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Kappa_and_Fish_Curry.jpg',
//     description: 'Tapioca boiled and mashed.',
//     price: 40,
//   },
//   {
//     id: '18',
//     name: 'Pazham Pori',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Pazham_Pori.jpg',
//     description: 'Banana fritters.',
//     price: 30,
//   },
//   {
//     id: '19',
//     name: 'Idli',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Idli.jpg',
//     description: 'Steamed rice cakes.',
//     price: 25,
//   },
//   {
//     id: '20',
//     name: 'Sambar',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Sambar.jpg',
//     description: 'Lentil stew with vegetables.',
//     price: 50,
//   },
//   {
//     id: '21',
//     name: 'Pazham Kanji',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Pazham_Kanji.jpg',
//     description: 'Rice porridge with banana.',
//     price: 40,
//   },
//   {
//     id: '22',
//     name: 'Fish Fry',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Kerala_Fish_Fry.jpg',
//     description: 'Spicy fried fish.',
//     price: 150,
//   },
//   {
//     id: '23',
//     name: 'Chicken Roast',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Kerala_Chicken_Roast.jpg',
//     description: 'Spicy roasted chicken.',
//     price: 170,
//   },
//   {
//     id: '24',
//     name: 'Malabar Parotta',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Parotta.jpg',
//     description: 'Flaky layered flatbread from Malabar.',
//     price: 35,
//   },
//   {
//     id: '25',
//     name: 'Pazham Pori',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Pazham_Pori.jpg',
//     description: 'Banana fritters.',
//     price: 30,
//   },
//   {
//     id: '26',
//     name: 'Kozhukatta',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Kozhukatta.jpg',
//     description: 'Sweet rice dumplings.',
//     price: 40,
//   },
//   {
//     id: '27',
//     name: 'Ela Ada',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Ela_Ada.jpg',
//     description: 'Steamed rice flour dumplings with coconut.',
//     price: 40,
//   },
//   {
//     id: '28',
//     name: 'Fish Molee',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Kerala_Fish_Curry.jpg',
//     description: 'Fish cooked in coconut milk.',
//     price: 160,
//   },
//   {
//     id: '29',
//     name: 'Chicken Stew',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Kerala_Chicken_Curry.jpg',
//     description: 'Mild chicken stew with coconut milk.',
//     price: 160,
//   },
//   {
//     id: '30',
//     name: 'Puttu and Kadala',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Puttu_and_Kadala_curry.jpg',
//     description: 'Steamed rice cake with black chickpea curry.',
//     price: 60,
//   },
// ]

// export default function Home() {
//   return (
//     <div className="container mx-auto p-4">
//       <header className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Kerala Food Delivery</h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li><a href="#" className="text-orange-500 font-semibold">Home</a></li>
//             <li><a href="#" className="hover:text-orange-500">Help</a></li>
//             <li><a href="#" className="hover:text-orange-500">Search</a></li>
//             <li><a href="#" className="hover:text-orange-500">Cart</a></li>
//           </ul>
//         </nav>
//       </header>

//       <h2 className="text-xl font-semibold mb-4">Top Kerala Dishes</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
// {dishes.map(dish => (
//   <Link key={dish.id} href={`/${dish.id}`} className="block border rounded shadow hover:shadow-lg overflow-hidden">
//     <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover" />
//     <div className="p-2">
//       <h3 className="font-semibold">{dish.name}</h3>
//       <p className="text-sm text-gray-600">{dish.description}</p>
//       <p className="text-orange-500 font-semibold">₹{dish.price}</p>
//     </div>
//   </Link>
// ))}
//       </div>
//     </div>
//   )
// }

import Link from 'next/link'

const dishes = [
  {
  id: '1',
  name: 'Appam',
  image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  description: 'Soft and fluffy rice pancakes.',
  price: 50,
},
{
  id: '2',
  name: 'Puttu',
  image: 'https://images.pexels.com/photos/17104944/pexels-photo-17104944.jpeg',
  description: 'Steamed rice cake with coconut.',
  price: 40,
},
{
  id: '3',
  name: 'Kerala Sadya',
  image: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg',
  description: 'Traditional vegetarian feast.',
  price: 200,
},
{
  id: '4',
  name: 'Fish Curry',
  image: 'https://images.pexels.com/photos/13220317/pexels-photo-13220317.jpeg',
  description: 'Spicy and tangy fish curry.',
  price: 150,
},
{
  id: '5',
  name: 'Beef Fry',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmZkjIS8njAWMl2yVzhK_OBvmBMCXmZy8ICw&s',
  description: 'Spicy dry-fried beef.',
  price: 180,
},
{
  id: '6',
  name: 'Idiyappam',
  image: 'https://images.pexels.com/photos/16865975/pexels-photo-16865975.jpeg',
  description: 'String hoppers made from rice flour.',
  price: 45,
},
{
  id: '7',
  name: 'Thalassery Biryani',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgrPYXylETWVHpDyp85Oa_KNgluod8Z21oQ&s',
  description: 'Fragrant biryani with spices.',
  price: 220,
},
{
  id: '8',
  name: 'Nadan Kozhi Curry',
  image: 'https://images.pexels.com/photos/13220317/pexels-photo-13220317.jpeg',
  description: 'Traditional chicken curry.',
  price: 160,
},
{
  id: '9',
  name: 'Parotta',
  image: 'https://images.pexels.com/photos/14010820/pexels-photo-14010820.jpeg',
  description: 'Flaky layered flatbread.',
  price: 30,
},
{
  id: '10',
  name: 'Kadala Curry',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfxjklIIOyngaTeViYdUCuB4F6Zc0gUlSqtw&s',
  description: 'Black chickpea curry.',
  price: 60,
},
{
  id: '11',
  name: 'Ela Ada',
  image: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg',
  description: 'Steamed rice flour dumplings with coconut.',
  price: 40,
},
{
  id: '12',
  name: 'Unniyappam',
  image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg',
  description: 'Sweet fried rice flour dumplings.',
  price: 35,
},
{
  id: '13',
  name: 'Thoran',
  image: 'https://images.pexels.com/photos/5427312/pexels-photo-5427312.jpeg',
  description: 'Stir-fried vegetable with coconut.',
  price: 50,
},
{
  id: '14',
  name: 'Avial',
  image: 'https://foodtrails25.com/wp-content/uploads/2023/08/Avial-Aiyal.jpg',
  description: 'Mixed vegetable curry with coconut.',
  price: 70,
},
{
  id: '15',
  name: 'Sadhya Rice',
  image: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg',
  description: 'Plain rice served in Sadya.',
  price: 20,
},
{
  id: '16',
  name: 'Meen Pollichathu',
  image: 'https://images.pexels.com/photos/13220317/pexels-photo-13220317.jpeg',
  description: 'Fish cooked in banana leaf.',
  price: 180,
},
{
  id: '17',
  name: 'Kappa',
  image: 'https://images.pexels.com/photos/14875138/pexels-photo-14875138.jpeg',
  description: 'Tapioca boiled and mashed.',
  price: 40,
},
{
  id: '18',
  name: 'Pazham Pori',
  image: 'https://images.pexels.com/photos/17104944/pexels-photo-17104944.jpeg',
  description: 'Banana fritters.',
  price: 30,
},
{
  id: '19',
  name: 'Idli',
  image: 'https://images.pexels.com/photos/11232541/pexels-photo-11232541.jpeg',
  description: 'Steamed rice cakes.',
  price: 25,
},
{
  id: '20',
  name: 'Sambar',
  image: 'https://images.pexels.com/photos/13220317/pexels-photo-13220317.jpeg',
  description: 'Lentil stew with vegetables.',
  price: 50,
},
{
  id: '21',
  name: 'Pazham Kanji',
  image: 'https://images.pexels.com/photos/16142199/pexels-photo-16142199.jpeg',
  description: 'Rice porridge with banana.',
  price: 40,
},
{
  id: '22',
  name: 'Fish Fry',
  image: 'https://images.pexels.com/photos/13220317/pexels-photo-13220317.jpeg',
  description: 'Spicy fried fish.',
  price: 150,
},
{
  id: '23',
  name: 'Chicken Roast',
  image: 'https://sinfullyspicy.com/wp-content/uploads/2024/11/1200-by-1200-images-1.jpg',
  description: 'Spicy roasted chicken.',
  price: 170,
},
{
  id: '24',
  name: 'Malabar Parotta',
  image: 'https://images.pexels.com/photos/14010820/pexels-photo-14010820.jpeg',
  description: 'Flaky layered flatbread from Malabar.',
  price: 35,
},
{
  id: '25',
  name: 'Pazham Pori',
  image: 'https://images.pexels.com/photos/17104944/pexels-photo-17104944.jpeg',
  description: 'Banana fritters.',
  price: 30,
},
{
  id: '26',
  name: 'Kozhukatta',
  image: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg',
  description: 'Sweet rice dumplings.',
  price: 40,
},
{
  id: '27',
  name: 'Ela Ada',
  image: 'https://images.pexels.com/photos/5410418/pexels-photo-5410418.jpeg',
  description: 'Steamed rice flour dumplings with coconut.',
  price: 40,
},
{
  id: '28',
  name: 'Fish Molee',
  image: 'https://images.pexels.com/photos/13220317/pexels-photo-13220317.jpeg',
  description: 'Fish cooked in coconut milk.',
  price: 160,
},
{
  id: '29',
  name: 'Chicken Stew',
  image: 'https://images.pexels.com/photos/13220317/pexels-photo-13220317.jpeg',
  description: 'Mild chicken stew with coconut milk.',
  price: 160,
},
{
  id: '30',
  name: 'Puttu and Kadala',
  image: 'https://images.pexels.com/photos/17104944/pexels-photo-17104944.jpeg',
  description: 'Steamed rice cake with black chickpea curry.',
  price: 60,
},

]

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Kerala Food Delivery</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-orange-500 font-semibold">Home</a></li>
            <li><a href="#" className="hover:text-orange-500">Help</a></li>
            <li><a href="#" className="hover:text-orange-500">Search</a></li>
            <li><a href="#" className="hover:text-orange-500">Cart</a></li>
          </ul>
        </nav>
      </header>

      <h2 className="text-xl font-semibold mb-4">Top Kerala Dishes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {dishes.map(dish => (
          <Link key={dish.id} href={`/${dish.id}`} className="block border rounded shadow hover:shadow-lg overflow-hidden">
            <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover" />
            <div className="p-2">
              <h3 className="font-semibold">{dish.name}</h3>
              <p className="text-sm text-gray-600">{dish.description}</p>
              <p className="text-orange-500 font-semibold">₹{dish.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
