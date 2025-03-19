import { createClient } from "@sanity/client";

export const client = createClient({
    projectId:'j0sbdb3j',
    dataset:'production',
    useCdn:true,
    apiVersion:'2024-03-25'
})


