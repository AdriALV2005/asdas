// lib/utils.ts
export const formatDate = (date: Date) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    return formatter.format(date);
};