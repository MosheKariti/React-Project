export function Depcrecated_GetCardsByUser(userName) {
    let cards = JSON.parse(localStorage.getItem('cards'));
    cards = cards.filter((x) => x.userName === userName);
    return cards;
}