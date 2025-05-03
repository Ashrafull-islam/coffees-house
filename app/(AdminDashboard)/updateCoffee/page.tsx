"use client"
import React, { FormEvent } from 'react';
type CoffeeData = {
  _id: string;
  name: string;
  chef: string;
  details: string;
};

export default function UpdateCoffee() {
  const handleUpdateCoffee = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const chef = (form.elements.namedItem("chef") as HTMLInputElement).value;
    const details = (form.elements.namedItem("details") as HTMLInputElement).value;

    const coffee = { name, chef, details };
    console.log("Updating Coffee:", coffee);

    // fetch(`http://localhost:5000/coffee/${loaderData._id}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(coffee),
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.modifiedCount > 0) {
    //       alert('Coffee updated successfully');
    //       form.reset();
    //     }
    //   });
  };

  return (
    <div className='bg-amber-50 min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-3xl text-center font-bold'>Update Coffee</h1>
      <form className='w-1/2 mx-auto' onSubmit={handleUpdateCoffee}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Coffee Name</label>
          <input
            type="text"
            defaultValue={"new-coffee"}
            name="name"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="details" className="block text-gray-700 text-sm font-bold mb-2">Details</label>
          <input
            type="text"
            defaultValue={'lorem 10'}
            name="details"
            id="details"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="chef" className="block text-gray-700 text-sm font-bold mb-2">Chef</label>
          <input
            type="text"
            defaultValue={'azmeri banu'}
            name="chef"
            id="chef"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Coffee
        </button>
      </form>
    </div>
  );
}
