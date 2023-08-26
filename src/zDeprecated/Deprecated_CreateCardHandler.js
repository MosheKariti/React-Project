export function Deprecated_CreateCardHandler(event) {
    const data = new FormData(event.currentTarget);
    let image = data.get('businessImage');
    if (image.length < 5) {
        image = 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg';
    }
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const card = {
        title: data.get('businessName'),
        description: data.get('businessDescription'),
        address: data.get('businessAddress'),
        businessPhone: data.get('businessPhone'),
        businessImage: image,
        userName: loggedInUser.name
    }
    const cards = JSON.parse(localStorage.getItem('cards'));
    cards.push(card);
    localStorage.setItem('cards',JSON.stringify(cards));

}