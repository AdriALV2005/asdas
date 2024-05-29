
"use client";
  
import { useFormState } from "react-dom";
import { saveMetting } from "../../../../lib/actionReunion";
  
const CreateMettingPage = () => {

  // sirve para manejar el estado del formulario
    const [state, formAction] = useFormState(saveMetting, null); //  es la función que se ejecuta al enviar el formulario
    return (
    <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Add New reuniones</h1>
        <div>
        <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-900">
            fecha
          </label>
          <input
            type="text"
            name="fecha"
            id="fecha"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Full fecha..."
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.fecha}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="hora" className="block text-sm font-medium text-gray-900">
            hora
          </label>
          <input
            type="text"
            name="hora"
            id="hora"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="hora..."
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.hora}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="lugar" className="block text-sm font-medium text-gray-900">
            lugar
          </label>
          <input
            type="text"
            name="lugar"
            id="lugar"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="lugar..."
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.lugar}</p>
          </div>
        </div>
          
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
    </div>
  );
};
  
export default CreateMettingPage ;