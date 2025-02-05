// import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function Fashion () {
  var productPage='/pages/productdetail';
  //
  return (
    <section className="text-gray-600 body-font">
      
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 ">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link href={productPage}>
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover " src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_960_720.jpg" height={400} width={400}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
        </Link>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover" src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_960_720.jpg" height={400} width={400}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover" src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_960_720.jpg" height={400} width={400}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover" src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_960_720.jpg" height={400} width={400}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover" src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_960_720.jpg" height={400} width={400}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover" src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_960_720.jpg" height={400} width={400}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover" src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_960_720.jpg" height={400} width={400}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative rounded overflow-hidden">
          <Image alt="ecommerce" className="object-cover" src="https://cdn.pixabay.com/photo/2024/04/29/04/21/tshirt-8726716_960_720.jpg" height={400} width={400}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
