import { createItem, getItems, updateItem, deleteItem } from "~/firebase/firestore";

export default defineEventHandler(async (event) => {
    const method = event.req.method;
    const body = await useBody(event);
    const id = event.context.params.id;

    if (method === "POST") {
        await createItem(body);
        return { message: "Item created successfully" };
    } else if (method === "GET") {
        const items = await getItems();
        return items;
    } else if (method === "PUT") {
        await updateItem(id, body);
        return { message: "Item updated successfully" };
    } else if (method === "DELETE") {
        await deleteItem(id);
        return { message: "Item deleted successfully" };
    }
});