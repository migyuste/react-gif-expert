export const getGifs = async (category) => {
    const baseUrl = 'https://api.giphy.com/v1/gifs/search?';
    const apiKey = 'bNh80vaCkZT7PRXCZbTfwJD0V07m2RpN';
    const url = `${baseUrl}api_key=${apiKey}&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json();
    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
};