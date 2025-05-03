export function getItem(key, itemId){
    const items = JSON.parse(localStorage.getItem(key) || "[]");
    const item = items.find(i => i.id === parseInt(itemId));

    if(item === undefined) console.debug("Could not find item with id " + itemId);
    return item;
}

export function getItems(key){
    return JSON.parse(localStorage.getItem(key) || "[]");
}

export function addItem(key, item){
    let items = getItems(key);
    items.push(item);
    localStorage.setItem(key, JSON.stringify(items));
}

export function updateItem(key, itemId, updatedItem){
    let items = getItems(key);
    items[itemId] = { ...items[itemId], ...updatedItem };
    localStorage.setItem(key, JSON.stringify(items));
}

export function addLike(postId) {
    let posts = getItems("posts");
    posts[postId].reactions.likes = posts[postId].reactions.likes + 1;
    localStorage.setItem("posts", JSON.stringify(posts));
}