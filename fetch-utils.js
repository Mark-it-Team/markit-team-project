const SUPABASE_URL = 'https://ntegguvcsbrefltqhojv.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50ZWdndXZjc2JyZWZsdHFob2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYwNzIwNjEsImV4cCI6MTk2MTY0ODA2MX0.UsQcV5MVZfD-77jViimoke-OeHyMyc9MLiP18wash6I';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('/');
    }
}
export async function fetchVendorDetails(id) {
    const resp = await client.from('vendors').select().match({ id: id }).single();
    return checkError(resp);
}
export async function fetchVendors() {
    const resp = await client.from('vendors').select();
    return checkError(resp);
}

export async function fetchProducts(id) {
    const resp = await client.from('products').select().match({ vendor_id: id });
    return checkError(resp);
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
