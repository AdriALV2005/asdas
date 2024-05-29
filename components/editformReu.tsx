//components\editformReu.tsx
"use client";
  
import { updateMetting } from "../lib/actionReunion";
import { useFormState } from "react-dom";
import type { TablaReuniones } from "@prisma/client";
  
const UpdateForm = ({ meeting }: { meeting: TablaReuniones }) => {
    const UpdateMeetingWithId = updateMetting.bind(null, meeting.reunion_id);
    const [state, formAction] = useFormState(UpdateMeetingWithId, null);
  
    return (
    <div>
      <form action={formAction}>
        <div className="mb-5">
          <label htmlFor="fecha" className="block text-sm font-medium text-gray-900">
            Fecha
          </label>
          <input
            type="text"
            name="fecha"
            id="fecha"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Fecha..."
            defaultValue={meeting.fecha}
          />
          <div id="fecha-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.fecha}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="hora" className="block text-sm font-medium text-gray-900">
            Hora
          </label>
          <input
            type="text"
            name="hora"
            id="hora"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Hora..."
            defaultValue={meeting.hora}
          />
          <div id="hora-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.hora}</p>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="lugar" className="block text-sm font-medium text-gray-900">
            Lugar
          </label>
          <input
            type="text"
            name="lugar"
            id="lugar"
            className="input input-bordered input-primary w-full max-w-xs"
            placeholder="Lugar..."
            defaultValue={meeting.lugar}
          />
          <div id="lugar-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.lugar}</p>
          </div>
        </div>
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};
  
export default UpdateForm;