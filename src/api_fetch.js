export async function fetch_posts(){
    return fetch_from('https://dummyjson.com/posts');
}

export async function fetch_comments(){
    return fetch_from('https://dummyjson.com/comments');
}

export async function fetch_users(){
    return fetch_from('https://dummyjson.com/users');
}

async function fetch_from(url){
    const result = await fetch(url);
    
    if (!result.ok) {
        console.error('Failed to fetch:', result.status, result.statusText);
        return;
    }
    
    const json = await result.json();
    return json.posts;
}