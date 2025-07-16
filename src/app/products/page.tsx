// import Image from "next/image";

// const products = [
//   {
//     title: "Curettes",
//     //description: "Monitor your health metrics seamlessly with our smart tracker.",
//     image: "/images/Curettes.jpg",
//   },
//   {
//     title: "Mouth Minor",
//     //description: "Everything you need for remote consultations.",
//     image: "/images/mouth-minor.jpg",
//   },
// //   {
// //     title: "Wellness Planner",
// //     description: "Plan and achieve your wellness goals.",
// //     image: "/images/wellness-planner.jpg",
// //   },
// ];

// export default function ProductsPage() {
//   return (
//     <main className="max-w-7xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.title}
//             className="bg-white rounded-lg shadow hover:shadow-lg transition"
//           >
//             <Image
//               src={product.image}
//               alt={product.title}
//               width={600}
//               height={400}
//               className="rounded-t-lg"
//             />
//             <div className="p-4">
//               <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
//               {/* <p className="text-gray-600">{product.description}</p> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

import Image from "next/image";

const products = [
  {
    title: "Curettes",
    image: "/Curettes.jpg",
  },
  {
    title: "Mouth Minor",
    image: "/mouth-minor.jpg",
  },
];

export default function ProductsPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.title}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={200}
              className="rounded-t-lg object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}


