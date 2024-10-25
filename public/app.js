const cards = JSON.parse(document.querySelector('script[data-cards]').getAttribute('data-cards'));
const win = ['🎊', '', '', '🎊', 'Y', 'O', 'U', '🎈', '-', 'W', 'I', 'N', '🎉', '', '', ''];    

var random_cards = cards.sort(() => (Math.random() > 0.5) ? 2 : -1);
console.log(random_cards);

function Reshuffle(random_cards) {
    for (let i = random_cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [random_cards[i], random_cards[j]] = [random_cards[j], random_cards[i]]; // Swap elements
    }
    return random_cards;
}

random_cards = Reshuffle(random_cards);
console.log(random_cards);
random_cards = Reshuffle(random_cards);
console.log(random_cards);

document.querySelectorAll('.card').forEach(card => {
    card.onclick = function() {
        this.classList.add('flip_card');

        setTimeout(function() {
            let flipped_cards = document.querySelectorAll('.flip_card');
            if (flipped_cards.length > 1) {
                if (flipped_cards[0].innerHTML === flipped_cards[1].innerHTML) {
                    flipped_cards[0].classList.add('match_card');
                    flipped_cards[1].classList.add('match_card');

                    flipped_cards[1].classList.remove('flip_card');
                    flipped_cards[0].classList.remove('flip_card');

                    let matching_cards = document.querySelectorAll('.match_card');
                    if (matching_cards.length === cards.length) {
                        setTimeout(() => {
                            for (let index = 0; index < cards.length; index++) {
                                matching_cards[index].innerHTML = win[index];                                
                            }  
                        }, 8000);
                    }
                } else {
                    flipped_cards[1].classList.remove('flip_card');
                    flipped_cards[0].classList.remove('flip_card');
                }                
            }
        }, 500);
    }
});