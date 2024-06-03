export async function fetchInstagramStories(accessToken) {
    const response = await fetch(`https://graph.instagram.com/me/media?access_token=${accessToken}`);
    const data = await response.json();
    return data.data;
}
  