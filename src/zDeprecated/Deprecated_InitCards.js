import { initialData } from '../InitialData/initialData'
export function deprecated_InitCards() {
    let cards = localStorage.getItem('cards');
    if (!cards) {
        localStorage.setItem('cards', JSON.stringify(initialData));
    }
}