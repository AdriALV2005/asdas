"use client";

import { useFormState } from "react-dom";
import { saveCustomer } from "../../../../lib/actionCliente";
import React from "react";

const CreateCustomersPage = () => {
  // sirve para manejar el estado del formulario
  const [state, formAction] = useFormState(saveCustomer, null); // saveEmployee es la función que se ejecuta al enviar el formulario
  return (
<div className="min-h-screen flex items-center justify-center bg-black">
  {/* Contenedor de la imagen */}
  <div className="hidden md:block md:w-1/2">
  <img src="https://i.ibb.co/61kHpts/CLIENTE.png" alt="Imagen de fondo" className="w-[600px] h-[600px] object-cover" />  </div>
  {/* Contenedor del formulario */}
  <div className="bg-gray-800 shadow-xl rounded-lg p-8 w-full md:w-[500px]">    <div className="bg-gray-900 p-6 rounded-t-lg">
      <h1 className="text-3xl text-center mb-4 font-bold text-white">Agregar Nuevo Cliente</h1>
    </div>
    <form action={formAction} className="space-y-6 p-6">
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-gray-300">Nombre</label>
        <input
          type="text"
          name="nombre"
          id="nombre"
          className="input input-bordered input-primary w-full rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Nombre completo..."
        />
        <p className="mt-1 text-sm text-red-500">{state?.Error?.nombre}</p>
      </div>
      <div>
        <label htmlFor="apellido" className="block text-sm font-medium text-gray-300">Apellido</label>
        <input
          type="text"
          name="apellido"
          id="apellido"
          className="input input-bordered input-primary w-full rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Apellido..."
        />
        <p className="mt-1 text-sm text-red-500">{state?.Error?.apellido}</p>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Correo</label>
        <input
          type="email"
          name="email"
          id="email"
          className="input input-bordered input-primary w-full rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="example@gmail.com..."
        />
        <p className="mt-1 text-sm text-red-500">{state?.Error?.email}</p>
      </div>
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-gray-300">Número de Teléfono</label>
        <input
          type="number"
          name="telefono"
          id="telefono"
          className="input input-bordered input-primary w-full rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Teléfono..."
        />
        <p className="mt-1 text-sm text-red-500">{state?.Error?.telefono}</p>
      </div>
      <button className="btn btn-primary w-full py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Guardar
      </button>
    </form>
  </div>
</div>




  
  );
};

export default CreateCustomersPage;
