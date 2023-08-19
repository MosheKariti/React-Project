import { initialCards } from '../../Data/defaultCards'
export function initCards() {
    let cards = localStorage.getItem('cards');
    if (!cards) {
        localStorage.setItem('cards', JSON.stringify(initialCards));
    }
}