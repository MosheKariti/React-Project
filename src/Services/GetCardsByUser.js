export function GetCardsByUser(userName) {
    let cards = JSON.parse(localStorage.getItem('cards'));
    cards = cards.filter((x) => x.userName === userName);
    return cards;
}