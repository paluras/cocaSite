import { createClient } from "@sanity/client";

export const client = createClient({
    projectId:'hemjxgd3',
    dataset:'production',
    useCdn:true,
    apiVersion:'2024-03-25'
})


