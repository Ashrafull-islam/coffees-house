"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import '../style/global.css';

type InputFieldProps = {
  id: string;
  label: string;
  defaultValue: string;
  className?: string;
};

function InputField({ id, label, defaultValue, className = "" }: InputFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        id={id}
        defaultValue={defaultValue}
        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
      />
    </div>
  );
}

type UpdateCoffeeProps = {
  id: string;
  label: string;
  defaultValue: string;
  name: string; // ← You must have this
  className?: string;
};

export default function UpdateCoffee (){
  const handleCoffee=(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const coffeeData = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      chef: (form.elements.namedItem('chef') as HTMLInputElement)?.value,
      supplier: (form.elements.namedItem('supplier') as HTMLInputElement)?.value,
      taste: (form.elements.namedItem('taste') as HTMLInputElement)?.value,
      category: (form.elements.namedItem('category') as HTMLInputElement)?.value,
      details: (form.elements.namedItem('details') as HTMLInputElement)?.value,
      photo: (form.elements.namedItem('photo') as HTMLInputElement)?.value,
    };
    console.log(coffeeData);
  }
  return (
    <div className="min-h-screen bg-gray-50 bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-6">
          <Link href="/home" className="inline-flex items-center text-gray-700 hover:text-gray-900">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className="font-medium">Back to home</span>
          </Link>
        </div>

        <div className="rounded-md bg-[#f8f6f2] p-8 shadow-sm">
          <h1 className="mb-6 text-center text-2xl font-medium text-[#3a4a64]">
            Update Existing Coffee Details
          </h1>

          <p className="mb-8 text-center text-sm text-gray-600">
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using Content here.
          </p>

          <form onSubmit={handleCoffee} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <InputField  id="name" label="Name" defaultValue="Americano Coffee" />
              <InputField  id="chef" label="Chef" defaultValue="Mr. Matin Paul" />
              <InputField  id="supplier" label="Supplier" defaultValue="Cappo Authorizer" />
              <InputField  id="taste" label="Taste" defaultValue="Sweet and hot" />
              <InputField  id="category" label="Category" defaultValue="Americano" />
              <InputField  id="details" label="Details" defaultValue="Espresso with hot water" />
            </div>

            <InputField  id="photo" label="Photo" defaultValue="https://i.ibb.co/PGg4fhg/123ng" />

            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-[#e6c9a1] py-2.5 text-center text-sm font-medium text-gray-800 hover:bg-[#dbb989] focus:outline-none focus:ring-2 focus:ring-[#dbb989] focus:ring-offset-2"
            >
              Update Coffee Details
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
