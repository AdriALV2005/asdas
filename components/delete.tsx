//components\delete.tsx
import { deleteEmployee } from "../lib/action";
import { deleteMeeting } from "../lib/actionReunion";

  
export const DeleteButton = ({ id }: { id: string }) => {
  const DeleteEmployeetWithId = deleteEmployee.bind(null, id);
  return (
    <form action={DeleteEmployeetWithId}>
      <button className="btn btn-error">
        Delete
      </button>
    </form>
  );
};


export const DeleteButtonReunion = ({ reunion_id }: { reunion_id: string }) => {
  const DeleteMeetingWithId = deleteMeeting.bind(null, reunion_id);
  return (
    <form onSubmit={DeleteMeetingWithId}>
      <button type="submit" className="btn btn-error">
        Delete
      </button>
    </form>
  );
};