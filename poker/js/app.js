// console.log('js works')
// $('body').append("jq works")

//rules Ace High five card draw

//cards

const deck = [
    heartsAce = {
        suit: 'hearts',
        rank: 14,
        img: "images/cards/ace_of_hearts.png"
    },
    hearts2 = {
        suit: 'hearts',
        rank: 2,
        img: "images/cards/2_of_hearts.png"
    },
    hearts3 = {
        suit: 'hearts',
        rank: 3,
        img: "images/cards/3_of_hearts.png"
    },
    hearts4 = {
        suit: 'hearts',
        rank: 4,
        img: "images/cards/4_of_hearts.png"
    },
    hearts5 = {
        suit: 'hearts',
        rank: 5,
        img: "images/cards/5_of_hearts.png"
    },
    hearts6 = {
        suit: 'hearts',
        rank: 6,
        img: "images/cards/6_of_hearts.png"
    },
    hearts7 = {
        suit: 'hearts',
        rank: 7,
        img: "images/cards/7_of_hearts.png"
    },
    hearts8 = {
        suit: 'hearts',
        rank: 8,
        img: "images/cards/8_of_hearts.png"
    },
    hearts9 = {
        suit: 'hearts',
        rank: 9,
        img: "images/cards/9_of_hearts.png"
    },
    hearts10 = {
        suit: 'hearts',
        rank:10,
        img: "images/cards/10_of_hearts.png"
    },
    heartsJack = {
        suit: 'hearts',
        rank: 11,
        img: "images/cards/jack_of_hearts.png"
    },
    heartsQueen = {
        suit: 'hearts',
        rank: 12,
        img: "images/cards/queen_of_hearts.png"
    },
    heartsKing = {
        suit: 'hearts',
        rank: 13,
        src: "images/cards/king_of_hearts.png"
    },
    clubsAce = {
        suit:'clubs',
        rank: 14,
        img: "images/cards/ace_of_clubs.png"
    },
    clubs2 = {
        suit: 'clubs',
        rank: 2,
        img: "images/cards/2_of_clubs.png"
    },
    clubs3 = {
        suit: 'clubs',
        rank: 3,
        img: "images/cards/3_of_clubs.png"
    },
    clubs4 = {
        suit: 'clubs',
        rank: 4,
        img: "images/cards/4_of_clubs.png"
    },
    clubs5 = {
        suit: 'clubs',
        rank: 5,
        img: "images/cards/5_of_clubs.png"
    },
    clubs6 = {
        suit: 'clubs',
        rank: 6,
        img: "images/cards/6_of_clubs.png"
    },
    clubs7 = {
        suit: 'clubs',
        rank: 7,
        img: "images/cards/7_of_clubs.png"
    },
    clubs8 = {
        suit: 'clubs',
        rank: 8,
        img: "images/cards/8_of_clubs.png"
    },
    clubs9 = {
        suit: 'clubs',
        rank: 9,
        img: "images/cards/9_of_clubs.png"
    },
    clubs10 = {
        suit: 'clubs',
        rank: 10,
        img: "images/cards/10_of_clubs.png"
    },
    clubsJack = {
        suit: 'clubs',
        rank: 11,
        img: "images/cards/jack_of_clubs.png"
    },
    clubsQueen = {
        suit: 'clubs',
        rank: 12,
        img: "images/cards/queen_of_clubs.png"
    },
    clubsKing = {
        suit: 'clubs',
        rank: 13,
        img: "images/cards/king_of_clubs.png"
    },
    diamondsAce = {
        suit: 'diamonds',
        rank: 14,
        img: "images/cards/ace_of_diamonds.png"
    },
    diamonds2 = {
        suit: 'diamonds',
        rank: 2,
        img: "images/cards/2_of_diamonds.png"
    },
    diamonds3 = {
        suit: 'diamonds',
        rank: 3,
        img: "images/cards/3_of_diamonds.png"
    },
    diamonds4 = {
        suit: 'diamonds',
        rank: 4,
        img: "images/cards/4_of_diamonds.png"
    },
    diamonds5 = {
        suit: 'diamonds',
        rank: 5,
        img: "images/cards/5_of_diamonds.png"
    },
    diamonds6 = {
        suit: 'diamonds',
        rank: 6,
        img: "images/cards/6_of_diamonds.png"
    },
    diamonds7 = {
        suit: 'diamonds',
        rank: 7,
        img: "images/cards/7_of_diamonds.png"
    },
    diamonds8 = {
        suit: 'diamonds',
        rank: 8,
        img: "images/cards/8_of_diamonds.png"
    },
    diamonds9 = {
        suit: 'diamonds',
        rank: 9,
        img: "images/cards/9_of_diamonds.png"
    },
    diamonds10 = {
        suit: 'diamonds',
        rank: 10,
        img: "images/cards/10_of_diamonds.png"
    },
    diamondsJack = {
        suit: 'diamonds',
        rank: 11,
        img: "images/cards/jack_of_diamonds.png"
    },
    diamondsQueen = {
        suit: 'diamonds',
        rank: 12,
        img: "images/cards/queen_of_diamonds.png"
    },
    diamondsKing = {
        suit: 'diamonds',
        rank: 13,
        img: "images/cards/king_of_diamonds.png"
    },
    spadesAce = {
        suit: 'spades',
        rank: 14,
        img: "images/cards/ace_of_spades.png"
    },
    spades2 = {
        suit: 'spades',
        rank: 2,
        img: "images/cards/2_of_spades.png"
    },
    spades3 = {
        suit: 'spades',
        rank: 3,
        img: "images/cards/3_of_spades.png"
    },
    spades4 = {
        suit: 'spades',
        rank: 4,
        img: "images/cards/4_of_spades.png"
    },
    spades5 = {
        suit: 'spades',
        rank: 5,
        img: "images/cards/5_of_spades.png"
    },
    spades6 = {
        suit: 'spades',
        rank: 6,
        img: "images/cards/6_of_spades.png"
    },
    spades7 = {
        suit: 'spades',
        rank: 7,
        img: "images/cards/7_of_spades.png"
    },
    spades8 = {
        suit: 'spades',
        rank: 8,
        img: "images/cards/8_of_spades.png"
    },
    spades9 = {
        suit: 'spades',
        rank: 9,
        img: "images/cards/9_of_spades.png"
    },
    spades10 = {
        suit: 'spades',
        rank: 10,
        img: "images/cards/10_of_spades.png"
    },
    spadesJack = {
        suit: 'spades',
        rank: 11,
        img: "images/cards/jack_of_spades.png"
    },
    spadesQueen = {
        suit: 'spades',
        rank: 12,
        img: "images/cards/queen_of_spades.png"
    },
    spadesKing = {
        suit: 'spades',
        rank: 13,
        img: "images/cards/king_of_spades.png"
},]
const player = {
    name: '',
    score:0,
    hand: [],
    discard: [],
    sortedRanks: [],
    sortedSuits: [],
    highCard: 0,
    secondHigh:0,
    thirdHigh:0,
    fourthHigh:0,
    fifthHigh: 0,
    pair: false,
    twoPair: false,
    pairRank: 0,
    twoPairRank:0,
    pairArr: [],
    winHighCard: false,
    winHighPair: false,
    winThreeOfAKind: false,
    winStrait:false,
    winFlush:false,
    winFourOfAKind:false,
    winFullHouse:false,
    winningHand:0,
}
const computer = {
    hand: [],
    score:0,
    discard: [],
    sortedRanks: [],
    sortedSuits: [],
    highCard: 0,
    secondHigh:0,
    thirdHigh:0,
    fourthHigh:0,
    fifthHigh:0,
    pair: false,
    pairRank: 0,
    twoPairRank:0,
    twoPair:false,
    pairArr: [],
    winHighCard: false,
    winHighPair: false,
    winStrait:false,
    winFlush:false,
    winFourOfAKind:false,
    winFullHouse:false,

   
}
//game functions
const render=()=>{
computer.hand = []
computer.discard= []
computer.sortedRanks= []
computer.sortedSuits= []
computer.highCard= 0
computer.secondHigh= 0
computer.thirdHigh= 0
computer.fourthHigh= 0
computer.fifthHigh= 0
computer.pair= false
computer.pairRank= 0
computer.twoPairRank= 0
computer.twoPair= false
computer.pairArr= []
computer.winHighCard= false
computer.winHighPair= false
computer.winStrait= false
computer.winFlush= false
computer.winFourOfAKind= false
computer.winFullHouse= false
player.hand = []
player.discard = []
player.sortedRanks = []
player.sortedSuits = []
player.highCard = 0
player.secondHigh = 0
player.thirdHigh = 0
player.fourthHigh = 0
player.fifthHigh = 0
player.pair = false
player.twoPair = false
player.pairRank = 0
player.twoPairRank = 0
player.pairArr = []
player.winHighCard = false
player.winHighPair = false
player.winThreeOfAKind = false
player.winStrait = false
player.winFlush = false
player.winFourOfAKind = false
player.winFullHouse = false
player.winningHand = 0


}
const randomCard=()=>{
    let randomCard = deck[Math.floor(Math.random() * deck.length)]
        return randomCard;
}
const dealPlayer=()=>{
    player.hand.push(randomCard());
    console.log(player.hand)
    console.log('player') 
}
const dealComputer=()=>{
    computer.hand.push(randomCard());
    console.log(computer.hand)
    console.log('computer')
}
const dealHands = () =>{
    while (player.hand.length < 5){
    dealComputer()
    dealPlayer()
    console.log(player.hand, computer.hand)
    }
}
const listPlayerSuits = () => {
    //returns an array of player suits
    checkSuits = []
    for (let i = 0; i < player.hand.length; i++) {
        checkSuits.push(player.hand[i].suit)
    }
    player.sortedSuits = checkSuits.sort()
}
const listComputerSuits = () => {
    //returns an array of player suits
    checkSuits = []
    for (let i = 0; i < computer.hand.length; i++) {
        checkSuits.push(computer.hand[i].suit)    
    }
     computer.sortedSuits = checkSuits.sort()
}
const listPlayerRanks = () => {
    checkRanks = []
    for (let i = 0; i < player.hand.length; i++){
        checkRanks.push(player.hand[i].rank)
    }
player.sortedRanks = checkRanks.sort(function (a, b) {
            return b - a
        })
}
const listComputerRanks = () => {
    checkRanks = []
    for (let i = 0; i < computer.hand.length; i++){
        checkRanks.push(computer.hand[i].rank)    
    }
    computer.sortedRanks = checkRanks.sort(function (a, b) {
        return b - a
    })
}   
//check hands functions
//only checks first two high cards.  try to think of a better way to do this or come back to it and check all.
const highCards=()=>{
    if (player.highCard > computer.highCard){
        player.winHighCard = true
        console.log('player one has high card')
    }else if(player.highCard === computer.highCard){
        if (player.secondHigh > computer.secondHigh){
            player.winHighCard = true
            console.log('player one has high card')
        }
    }else{console.log('computer has high card')
    computer.winHighCard = true
    }

    // then by the rank of its second highest-ranking card, 
    //then by the rank of its third highest-ranking card,
    // then by the rank of its fourth highest-ranking card, 
    //and finally by the rank of its lowest-ranking card.
}
const checkPlayerPair=()=>{
    if (player.sortedRanks[0]===player.sortedRanks[1]){
        player.pair = true
        player.pairRank = player.sortedRanks[0]
        player.pairArr.push(player.sortedRanks[1])
        player.pairArr.push(player.sortedRanks[0])
        player.sortedRanks.shift([0])
        player.sortedRanks.shift([1])

    };
    if (player.sortedRanks[0] === player.sortedRanks[2]){
        player.pair = true
        player.pairRank = player.sortedRanks[0]
        player.pairArr.push(player.sortedRanks[2])
        player.pairArr.push(player.sortedRanks[0])
        player.sortedRanks.shift([0])
        player.sortedRanks.shift([2])
    };
    if (player.sortedRanks[0] === player.sortedRanks[3]) {
        player.pair = true
        player.pairRank = player.sortedRanks[0]
        player.pairArr.push(player.sortedRanks[3])
        player.pairArr.push(player.sortedRanks[0])
        player.sortedRanks.shift([0])
        player.sortedRanks.shift([3])
    };
    if (player.sortedRanks[0] === player.sortedRanks[4]) {
        player.pair = true
        player.pairRank = player.sortedRanks[0]
        player.pairArr.push(player.sortedRanks[4])
        player.pairArr.push(player.sortedRanks[0])
        player.sortedRanks.shift([0])
        player.sortedRanks.shift([4])
    };
    if (player.sortedRanks[1] === player.sortedRanks[2]) {
        player.pair = true
        player.pairRank = player.sortedRanks[1]
        player.pairArr.push(player.sortedRanks[1])
        player.pairArr.push(player.sortedRanks[2])
        player.sortedRanks.shift([2])
        player.sortedRanks.shift([1])
    };
    if (player.sortedRanks[1] === player.sortedRanks[3]) {
        player.pair = true
        player.pairRank = player.sortedRanks[1]
        player.pairArr.push(player.sortedRanks[1])
        player.pairArr.push(player.sortedRanks[3])
        player.sortedRanks.shift([3])
        player.sortedRanks.shift([1])
    };
    if (player.sortedRanks[1] === player.sortedRanks[4]) {
        player.pair = true
        player.pairRank =player.sortedRanks[1]
        player.pairArr.push(player.sortedRanks[1])
        player.pairArr.push(player.sortedRanks[4])
        player.sortedRanks.shift([1])
        player.sortedRanks.shift([4])
    };
    if (player.sortedRanks[2] === player.sortedRanks[3]){
        player.pair = true
        player.pairRank = player.sortedRanks[2]
        player.pairArr.push(player.sortedRanks[2])
        player.pairArr.push(player.sortedRanks[3])
        player.sortedRanks.shift([2])
        player.sortedRanks.shift([3])
    };
    if (player.sortedRanks[2] === player.sortedRanks[4]) {
        player.pair = true
        player.pairRank = player.sortedRanks[2]
        player.pairArr.push(player.sortedRanks[4])
        player.pairArr.push(player.sortedRanks[2])
        player.sortedRanks.shift([4])
        player.sortedRanks.shift([2])
    };
    if (player.sortedRanks[3] === player.sortedRanks[4]) {
        player.pair = true
        player.pairRank = player.sortedRanks[3]
        player.pairArr.push(player.sortedRanks[4])
        player.pairArr.push(player.sortedRanks[3])
        player.sortedRanks.shift([4])
        player.sortedRanks.shift([3])
    };
}
const checkComputerPair =()=>{
    if (computer.sortedRanks[0] === computer.sortedRanks[1]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[0]
        computer.pairArr.push(computer.sortedRanks[1])
        computer.pairArr.push(computer.sortedRanks[0])
        computer.sortedRanks.shift([0])
        computer.sortedRanks.shift([1])
    };
    if (computer.sortedRanks[0] === computer.sortedRanks[2]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[0]
        computer.pairArr.push(computer.sortedRanks[2])
        computer.pairArr.push(computer.sortedRanks[0])
        computer.sortedRanks.shift([0])
        computer.sortedRanks.shift([2])
    };
    if (computer.sortedRanks[0] === computer.sortedRanks[3]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[0]
        computer.pairArr.push(computer.sortedRanks[3])
        computer.pairArr.push(computer.sortedRanks[0])
        computer.sortedRanks.shift([0])
        computer.sortedRanks.shift([3])
    };
    if (computer.sortedRanks[0] === computer.sortedRanks[4]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[0]
        computer.pairArr.push(computer.sortedRanks[4])
        computer.pairArr.push(computer.sortedRanks[0])
        computer.sortedRanks.shift([0])
        computer.sortedRanks.shift([4])
    };
    if (computer.sortedRanks[1] === computer.sortedRanks[2]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[1]
        computer.pairArr.push(computer.sortedRanks[1])
        computer.pairArr.push(computer.sortedRanks[2])
        computer.sortedRanks.shift([2])
        computer.sortedRanks.shift([1])
    };
    if (computer.sortedRanks[1] === computer.sortedRanks[3]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[1]
        computer.pairArr.push(computer.sortedRanks[1])
        computer.pairArr.push(computer.sortedRanks[3])
        computer.sortedRanks.shift([3])
        computer.sortedRanks.shift([1])
    };
    if (computer.sortedRanks[1] === computer.sortedRanks[4]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[1]
        computer.pairArr.push(computer.sortedRanks[1])
        computer.pairArr.push(computer.sortedRanks[4])
        computer.sortedRanks.shift([1])
        computer.sortedRanks.shift([4])
    };
    if (computer.sortedRanks[2] === computer.sortedRanks[3]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[2]
        computer.pairArr.push(computer.sortedRanks[2])
        computer.pairArr.push(computer.sortedRanks[3])
        computer.sortedRanks.shift([2])
        computer.sortedRanks.shift([3])
    };
    if (computer.sortedRanks[2] === computer.sortedRanks[4]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[2]
        computer.pairArr.push(computer.sortedRanks[4])
        computer.pairArr.push(computer.sortedRanks[2])
        computer.sortedRanks.shift([4])
        computer.sortedRanks.shift([2])
    };
    if (computer.sortedRanks[3] === computer.sortedRanks[4]) {
        computer.pair = true
        computer.pairRank = computer.sortedRanks[3]
        computer.pairArr.push(computer.sortedRanks[4])
        computer.pairArr.push(computer.sortedRanks[3])
        computer.sortedRanks.shift([4])
        computer.sortedRanks.shift([3])
    };
    //a hand that contains two cards of one rank and three cards of three other ranks (the kickers)
    //Each one pair is ranked first by the rank of its pair, 
    //then by the rank of its highest-ranking kicker, 
    //then by the rank of its second highest-ranking kicker, 
    //and finally by the rank of its lowest-ranking kicker. 
};
const PairHighWinner =()=>{
    if(player.pairRank > computer.pairRank){
        player.winHighPair = true
        console.log("player wins high pair")
    }
    if(computer.pairRank > player.pairRank){
        computer.winHighPair = true
        console.log('computer wins high pair')
    }
}
const playerTwoPair=()=>{
if (player.pair === true) {
    if (player.sortedRanks[0] === player.sortedRanks[1]) {
        player.twoPair = true
        player.twoPairRank = player.sortedRanks[0]
    };
    if (player.sortedRanks[0] === player.sortedRanks[2]) {
        player.twoPair = true
        player.twoPairRank = player.sortedRanks[0]
       
    };
    if (player.sortedRanks[0] === player.sortedRanks[3]) {
        player.twoPair = true
        player.twoPairRank = player.sortedRanks[0]
        
    //contains two cards of one rank, two cards of another rank and one card of a third rank (the kicker)
    //Each two pair is ranked first by the rank of its highest ranking pair, 
    //then by the rank of its lowest - ranking pair, 
    //and finally by the rank of its kicker.
        }
    }
}
const computerTwoPair=()=>{
    if (computer.pair === true) {
        if (computer.sortedRanks[0] === computer.sortedRanks[1]) {
            computer.twoPair = true
            computer.twoPairRank = computer.sortedRanks[0]
        };
        if (computer.sortedRanks[0] === computer.sortedRanks[2]) {
            computer.twoPair = true
            computer.twoPairRank = computer.sortedRanks[0]

        };
        if (computer.sortedRanks[0] === computer.sortedRanks[3]) {
            computer.twoPair = true
            computer.twoPairRank = computer.sortedRanks[0]
        }  
    }    
}
const threeOfAKind=()=>{
for(let i = 0; i<player.sortedRanks.length; i++){
    if(player.sortedRanks[i] === player.pairRank){
        console.log(player.sortedRanks[i])
        return player.winThreeOfAKind = true;
         
    }
for (let i = 0; i < computer.sortedRanks.length; i++) {
    if (computer.sortedRanks[i] === computer.pairRank) {
        console.log(computer.sortedRanks[i])
        return computer.winThreeOfAKind = true;
    }
}
    //that contains three cards of one rank and two cards of two other ranks (the kickers), 
    //ranked first by the rank of its triplet, 
    //then by the rank of its highest-ranking kicker,
    // and finally by the rank of its lowest-ranking kicker
};
}
const straight=()=>{
    // contains five cards of sequential rank (not all of the same suit)
    // ranked by the rank of its highest-ranking card
    for (let i = 0; i < computer.sortedRanks.length; i++) {
        if (computer.sortedRanks[i] === computer.sortedRanks[i-1]) {
            console.log(computer.sortedRanks[i])
            return computer.winStrait = true;
        }
    }
    for (let i = 0; i < player.sortedRanks.length; i++) {
        if (player.sortedRanks[i] === player.sortedRanks[i -1]) {
            console.log(player.sortedRanks[i])
            return player.winStrait = true;
        }
    }
};
const flush=()=>{
if (player.sortedSuits[0] === player.sortedSuits[1] &&
    player.sortedSuits[1] === player.sortedSuits[2] &&
    player.sortedSuits[2] === player.sortedSuits[3] &&
    player.sortedSuits[3] === player.sortedSuits[4]){
        player.winFlush = true
    }
    if (computer.sortedSuits[0] === computer.sortedSuits[1] &&
        computer.sortedSuits[1] === computer.sortedSuits[2] &&
        computer.sortedSuits[2] === computer.sortedSuits[3] &&
        computer.sortedSuits[3] === computer.sortedSuits[4]) {
        computer.winFlush = true
    }
    //five cards all of the same suit, not all of sequential rank
    //ranked first by the rank of its highest-ranking card, 
    //then by the rank of its second highest-ranking card, 
    //then by the rank of its third highest-ranking card, 
    //then by the rank of its fourth highest-ranking card, 
    //and finally by the rank of its lowest-ranking card.
};
const fullHouse=()=>{
    if ((player.pair===true)&&(
        player.sortedRanks[0]===player.sortedRanks[1] &&
        player.sortedRanks[1]===player.sortedRanks[2] &&
        player.sortedRanks[2]===player.sortedRanks[3])){
            player.winFullHouse = true
        }
    
    if ((computer.pair === true) && (
            computer.sortedRanks[0] === computer.sortedRanks[1] &&
            computer.sortedRanks[1] === computer.sortedRanks[2] &&
            computer.sortedRanks[2] === computer.sortedRanks[3])) {
        computer.winFullHouse = true
    }
} 
    //contains three cards of one rank and two cards of another rank
    //ranked first by the rank of its triplet, and then by the rank of its pair
const fourOfAKind=()=>{
   //contains four cards of one rank and one card of another rank(the kicker)
   //ranked first by the rank of its quadruplet, and then by the rank of its kicker
    for (let i = 0; i < computer.sortedRanks.length; i++) {
        if (computer.sortedRanks[i-1] != computer.sortedRanks[i]) {
            console.log(computer.sortedRanks[i])
            console.log(computer.sortedRanks[i-1])
            return computer.winFourOfAKind = false;
        }
    }
    for (let i = 0; i < player.sortedRanks.length; i++) {
        if (player.sortedRanks[i] != player.sortedRanks[i + 1]) {
            console.log(player.sortedRanks[i])
            return player.winFourOfAKind = false;
        }
    }
};
const straightFlush=()=>{
    if((player.sortedSuits[0]===player.sortedSuits[1] && 
        player.sortedSuits[1] === player.sortedSuits[2] &&
        player.sortedSuits[2] === player.sortedSuits[3] &&
        player.sortedSuits[3] === player.sortedSuits[4])&&
        (player.winStrait === true))
        {
            player.winStraitFlush = true
        }
    if ((computer.sortedSuits[0] === computer.sortedSuits[1] &&
        computer.sortedSuits[1] === computer.sortedSuits[2] &&
        computer.sortedSuits[2] === computer.sortedSuits[3] &&
        computer.sortedSuits[3] === computer.sortedSuits[4])&&
        (computer.winStrait === true))
        {
        computer.winStraitFlush = true
    }
    //contains five cards of sequential rank, all of the same suit,
    //ranked by the rank of its highest-ranking card
};
const checkWins =()=>{
    if (player.winHighCard) {
        player.winningHand = 1
    }
    if (player.pair) {
        player.winningHand = 2
    }
    if (player.winTwoPair) {
        player.winningHand = 3
    }
    if (player.winStrait) {
        player.winningHand = 4
    }
    if (player.winFlush) {
        player.winningHand = 5
    }
    if (player.winFullHouse) {
        player.winningHand = 6
    }
    if (player.winFullHouse) {
        player.winingHand = 7
    }
    if (player.winFourOfAKind) {
        player.winningHand = 8
    }
    if (player.winStraitFlush) {
        player.winningHand = 9
    }

    if (computer.winHighCard) {
        computer.winningHand = 1
    }
    if (computer.pair) {
        computer.winningHand = 2
    }
    if (computer.winTwoPair) {
        computer.winningHand = 3
    }
    if (computer.winStrait) {
        computer.winningHand = 4
    }
    if (computer.winFlush) {
        computer.winningHand = 5
    }
    if (computer.winFullHouse) {
        computer.winningHand = 6
    }
    if (computer.winFullHouse) {
        computer.winingHand = 7
    }
    if (computer.winFourOfAKind) {
        computer.winningHand = 8
    }
    if (computer.winStraitFlush) {
        computer.winningHand = 9
    }
    if (player.winningHand > computer.winningHand){
        $('h2').text('Player Wins!')
        player.score = player.score +1
        $('#computer-score').text(`COMPUTER SCORE:  ${computer.score}  `)
        $('#player-score').text(`PLAYER SCORE:  ${player.score}  `)
    }else if (player.winningHand < computer.winningHand){
        $('h2').text('Computer Wins!')
        computer.score = computer.score +1
        $('#computer-score').text(`COMPUTER SCORE:  ${computer.score}  `)
        $('#player-score').text(`PLAYER SCORE:  ${player.score}  `)
    } else if (player.winningHand === computer.winningHand){
        $('h2').text('push')
    } else {
        $('h2').text('FULL-PIVOT POKER!')
    }
        

    
}
$('#player-score').text(`PLAYER SCORE:  ${player.score}  `)
$('#computer-score').text(`COMPUTER SCORE:  ${computer.score}  `)
//buttons
$('#discard1').click(function () {
    player.discard.push(player.hand[0])
    player.hand.splice(0,0)
    player.hand.push(randomCard())
    $('#card1').hide()
    $('#discard1').hide()
})
$('#discard2').click(function () {
    player.discard.push(player.hand[1])
    player.hand.splice(1,0)
    player.hand.push(randomCard())
    $('#card2').hide()
    $('#discard2').hide()
})
$('#discard3').click(function () {
    player.discard.push(player.hand[2])
    player.hand.splice(2,0)
    player.hand.push(randomCard())
    $('#card3').hide()
    $('#discard3').hide()
})
$('#discard4').click(function () {
    player.discard.push(player.hand[3])
    player.hand.splice(3,0)
    player.hand.push(randomCard())
    $('#card4').hide()
    $('#discard4').hide()
})
$('#discard5').click(function () {
    player.discard.splice(player.hand[4])
    player.hand.splice(4.0)
    player.hand.push(randomCard())
    $('#card5').hide()
    $('#discard5').hide()
})


//REFRESH PAGE
$('#roundTwo').hide()
$('#discard1').hide()
$('#discard2').hide()
$('#discard3').hide()
$('#discard4').hide()
$('#discard5').hide()
$('#dealAgain').hide()

$('#dealAgain').click(function () {
    $('#dealAgain').hide()
    checkWins()
    $('#roundTwo').show()
})

$('#roundTwo').click(function () {
    
    $('#roundTwo').hide()
    $('#discard1').hide()
    $('#discard2').hide()
    $('#discard3').hide()
    $('#discard4').hide()
    $('#discard5').hide()
    $('#dealAgain').hide()
    render()
    $('.back1').hide()
    $('#card1').hide()
    $('.back2').hide()
    $('#card2').hide()
    $('.back3').hide()
    $('#card3').hide()
    $('.back4').hide()
    $('#card4').hide()
    $('.back5').hide()
    $('#card5').hide()
    dealHands()
    listPlayerRanks()
    player.highCard = player.sortedRanks[0];
    player.secondHigh = player.sortedRanks[1];
    player.thirdHigh = player.sortedRanks[2];
    player.fourthHigh = player.sortedRanks[3];
    player.fifthHigh = player.sortedRanks[4];
    listComputerRanks()
    computer.highCard = computer.sortedRanks[0]
    computer.secondHigh = computer.sortedRanks[1];
    computer.thirdHigh = computer.sortedRanks[2];
    computer.fourthHigh = computer.sortedRanks[3];
    computer.fifthHigh = computer.sortedRanks[4];
    listPlayerSuits()
    listComputerSuits()
    highCards()
    checkPlayerPair()
    checkComputerPair()
    PairHighWinner()
    playerTwoPair()
    computerTwoPair()
    fullHouse()
    threeOfAKind()
    straight()
    flush()
    fourOfAKind()
    $('#discard1').show()
    $('#discard2').show()
    $('#discard3').show()
    $('#discard4').show()
    $('#discard5').show()
    $('#dealAgain').show()
})

$('#deal').click(function () {

    $('#deal').hide()
    $('#discard1').show()
    $('#discard2').show()
    $('#discard3').show()
    $('#discard4').show()
    $('#discard5').show()
    render()
    dealHands()
    $('.back1').hide()
    $('#card1').append(`<img src = ${player.hand[0].img}>`)
    $('.back2').hide()
    $('#card2').append(`<img src = ${player.hand[1].img}>`)
    $('.back3').hide()
    $('#card3').append(`<img src = ${player.hand[2].img}>`)
    $('.back4').hide()
    $('#card4').append(`<img src = ${player.hand[3].img}>`)
    $('.back5').hide()
    $('#card5').append(`<img src = ${player.hand[4].img}>`)
    listPlayerRanks()
    player.highCard = player.sortedRanks[0];
    player.secondHigh = player.sortedRanks[1];
    player.thirdHigh = player.sortedRanks[2];
    player.fourthHigh = player.sortedRanks[3];
    player.fifthHigh = player.sortedRanks[4];
    listComputerRanks()
    computer.highCard = computer.sortedRanks[0]
    computer.secondHigh = computer.sortedRanks[1];
    computer.thirdHigh = computer.sortedRanks[2];
    computer.fourthHigh = computer.sortedRanks[3];
    computer.fifthHigh = computer.sortedRanks[4];
    listPlayerSuits()
    listComputerSuits()
    highCards()
    checkPlayerPair()
    checkComputerPair()
    PairHighWinner()
    playerTwoPair()
    computerTwoPair()
    fullHouse()
    threeOfAKind()
    straight()
    flush()
    fourOfAKind()
    $('#discard1').show()
    $('#discard2').show()
    $('#discard3').show()
    $('#discard4').show()
    $('#discard5').show()
    $('#dealAgain').show()

})

//https://www.youtube.com/watch?v=n67RYI_0sc0

