//lib\utils.ts

// Sirve para formatear la fecha
export const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat("es-ES", { // Cambiar a es-ES para español
      dateStyle: "medium",
      timeStyle: "short",
    });
    return formatter.format(date);
  };
  