const storySegments = {
    start: {
        text: "You are Shivudu, raised by a tribe in the mountains. One day, you see a beautiful waterfall and feel drawn to it. Do you climb down to explore it or ask your mother about your past?",
        choices: ["Climb down", "Ask mother"],
        consequence: { 
            "Climb down": "waterfall", 
            "Ask mother": "mother" 
        },
        image: "waterfall.jpeg" // Add the appropriate image URL or file path
    },
    waterfall: {
        text: "At the waterfall, you find a mysterious statue. As you touch it, you feel a surge of power. Do you want to take the statue or leave it?",
        choices: ["Take the statue", "Leave it"],
        consequence: { 
            "Take the statue": "statue", 
            "Leave it": "start" 
        },
        image: "statue.jpg"
    },
    mother: {
        text: "Your mother reveals that you are the son of the late king. Do you want to embrace your destiny and go to Mahishmati or stay with your tribe?",
        choices: ["Go to Mahishmati", "Stay with tribe"],
        consequence: { 
            "Go to Mahishmati": "mahi", 
            "Stay with tribe": "tribe" 
        },
        image: "mother.jpg"
    },
    statue: {
        text: "You now possess great power, but a fierce warrior challenges you. Do you fight him or try to reason with him?",
        choices: ["Fight", "Reason"],
        consequence: { 
            "Fight": "fight", 
            "Reason": "peace" 
        },
        image: "battle.jpg"
    },
    mahi: {
        text: "In Mahishmati, you confront the evil Bhallaladeva. Do you challenge him to a duel or seek allies first?",
        choices: ["Challenge", "Seek allies"],
        consequence: { 
            "Challenge": "duel", 
            "Seek allies": "allies" 
        },
        image: "mahi.jpg"
    },
    tribe: {
        text: "You chose to stay with your tribe, but you always wonder about your royal blood. Your life continues in peace but with unanswered questions.",
        choices: [],
        consequence: {},
        image: "peace.jpeg"
    },
    fight: {
        text: "You defeat the warrior and gain respect. However, the fight draws unwanted attention. You are now hunted. Do you flee or stand your ground?",
        choices: ["Flee", "Stand ground"],
        consequence: { 
            "Flee": "flee", 
            "Stand ground": "stand" 
        },
        image: "flee.jpg"
    },
    peace: {
        text: "You negotiate peace with your enemies and restore harmony. Your legacy is one of wisdom and strength.",
        choices: [],
        consequence: {},
        image: "peace.jpeg"
    },
    duel: {
        text: "You confront Bhallaladeva in an epic duel. Do you unleash your full power or fight strategically?",
        choices: ["Unleash power", "Fight strategically"],
        consequence: { 
            "Unleash power": "victory", 
            "Fight strategically": "strategy" 
        },
        image: "duel.jpg"
    },
    allies: {
        text: "You gather strong allies and mount a successful challenge against Bhallaladeva. Your army prevails, and you reclaim your throne.",
        choices: [],
        consequence: {},
        image: "victory.jpeg"
    },
    victory: {
        text: "You are victorious and reclaim your rightful throne as the king of Mahishmati. Your reign is prosperous!",
        choices: [],
        consequence: {},
        image: "victory.jpeg"
    },
    strategy: {
        text: "Your strategic thinking leads you to victory without excessive loss of life. The people hail you as a wise king.",
        choices: [],
        consequence: {},
        image: "strategy.jpg"
    },
    flee: {
        text: "You escape but live in hiding, never realizing your full potential. Your story ends in obscurity.",
        choices: [],
        consequence: {},
        image: "flee.jpg"
    },
    stand: {
        text: "Standing your ground leads to a fierce battle. You fight valiantly but ultimately fall.",
        choices: [],
        consequence: {},
        image: "defeat.jpg"
    }
};

let currentSegment = "start";

function startGame() {
    updatePage();
}
function updatePage() {
    const segment = storySegments[currentSegment];
    document.getElementById("story").innerHTML = `<div class="question">${segment.text}</div>`;
    document.getElementById("image").innerHTML = `<img src="${segment.image}" alt="Story Image">`;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Clear previous choices
    segment.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => {
            currentSegment = segment.consequence[choice];
            updatePage();
        };
        choicesDiv.appendChild(button);
    });
}


startGame();
