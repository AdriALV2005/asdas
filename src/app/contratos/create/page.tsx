
"use client";
  
import { useFormState } from "react-dom";
import { saveContract } from "../../../../lib/actionContratos";
  
const CreateContractPage = () => {

  // sirve para manejar el estado del formulario
    const [state, formAction] = useFormState(saveContract, null); // saveEmployee es la función que se ejecuta al enviar el formulario
    return (
    <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2">Add New contratos</h1>
        <div>
        <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="estado" className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="estado"
            id="estado"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Full Name..."
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.estado}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="fechaInicio" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="text"
            name="fechaInicio"
            id="fechaInicio"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Email..."
          />
          <div id="email-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.fechaInicio}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="fechaFin" className="block text-sm font-medium text-gray-900">
            Phone Number
          </label>
          <input
            type="text"
            name="fechaFin"
            id="fechaFin"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Phone Number..."
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.fechaFin}</p>
          </div>
        </div>
          
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
    </div>
  );
};
  
export default CreateContractPage ;