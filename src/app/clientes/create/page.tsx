"use client";

import { useFormState } from "react-dom";
import { saveCustomer } from "../../../../lib/actionCliente";
import React from "react";

const CreateCustomersPage = () => {
  // sirve para manejar el estado del formulario
  const [state, formAction] = useFormState(saveCustomer, null); // saveEmployee es la función que se ejecuta al enviar el formulario
  return (
    <div className="max-w-md mx-auto mt-5">
      <h1 className="text-2xl text-center mb-2">Add New clientes</h1>
      <div>


        <form action={formAction}>
          <div className="mb-5">
            <label
              htmlFor="nombre"
              className="block text-sm font-medium text-gray-900"
            >
              Nombre porfis
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="Nombre completo ..."
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.Error?.nombre}
              </p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="apellido"
              className="block text-sm font-medium text-gray-900"
            >
              apellido
            </label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="apellido..."
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.Error?.apellido}
              </p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="gmail..."
            />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.Error?.email}
              </p>
            </div>
          </div>
          <div className="mb-5">
            <label
              htmlFor="telefono"
              className="block text-sm font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="number"
              name="telefono"
              id="telefono"
              className="input input-bordered input-primary w-full max-w-xs"
              placeholder="gmail..."
            />
            <div id="phone-error" aria-live="polite" aria-atomic="true">
              <p className="mt-2 text-sm text-red-500">
                {state?.Error?.email}
              </p>
            </div>
          </div>

          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCustomersPage;
