// Enter Supabase Information
const SUPABASE_URL = 'https://xaclphmmjwgsgadrqeda.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhY2xwaG1tandnc2dhZHJxZWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0NDQ5NTksImV4cCI6MTk2MDAyMDk1OX0.m_J0UOK8xqmqxKkPmb4gtIUq8kEpRGTLmfWok0ZWGO4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {
    const resp = await client.auth.signUp({ email, password });
    console.log('signUpUser', resp);
}

export async function signInUser(email, password) {
    const { user, session, error } = await client.auth.signIn({ email, password });
    console.log('user', user, 'session', session, 'error', error);
}

export async function checkAuth() {
    const user = await getUser();
    if (!user) {
        location.replace('/');
        console.log(user);
    }
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace(`./other-page`);
    }
}

export async function logout() {}
