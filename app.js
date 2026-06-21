const questions = [
    // Module 1
    { id: 1, mod: 1, q: "Science is best described as:", options: ["a) A school subject that must be memorised", "b) A way of thinking, observing and doing things to understand the world", "c) Only experiments done in a laboratory", "d) Knowledge only found in textbooks"], correct: 1, hint: "Think about how we experience science by doing and questioning things.", explanation: "Science is defined as a systematic way of thinking and exploring the world." },
    { id: 2, mod: 1, q: "The Class 6 Science textbook is named:", options: ["a) Explorer", "b) Discovery", "c) Curiosity", "d) Wonder"], correct: 2, hint: "It is named after the exact emotion that drives us to ask 'Why?'.", explanation: "The textbook is named 'Curiosity' because asking questions is the foundation of science." },
    { id: 3, mod: 1, q: "In the textbook, science is compared to:", options: ["a) A river that flows in one direction", "b) A road with a clear destination", "c) A library of complete answers", "d) A giant and unending jigsaw puzzle"], correct: 3, hint: "Every piece we discover adds to a bigger, continuous picture.", explanation: "Science is like an endless puzzle where every discovery reveals new questions." },
    { id: 4, mod: 1, q: "The FIRST step of the scientific method is:", options: ["a) Form a hypothesis", "b) Do an experiment", "c) Observe something interesting or not understood", "d) Analyse the results"], correct: 2, hint: "Before you can ask questions or guess, you have to notice something.", explanation: "Observation is always the first step to identifying a mystery or problem." },
    { id: 5, mod: 1, q: "After forming a question, the NEXT step is:", options: ["a) Analyse the results", "b) Guess a possible answer (hypothesis)", "c) Start the experiment immediately", "d) Read a textbook about it"], correct: 1, hint: "You make an educated guess before verifying it with tests.", explanation: "A hypothesis is an educated guess made right after defining your core question." },
    // Module 2
    { id: 6, mod: 2, q: "How do we TEST our guess (hypothesis)?", options: ["a) By asking the teacher", "b) Through experiments or more observations", "c) By reading more books", "d) By guessing again"], correct: 1, hint: "Think of action! Just like building the LED circuit to see if it lights up.", explanation: "Experiments and systematic observations are used to test if a hypothesis is true." },
    { id: 7, mod: 2, q: "Which is a daily-life example of the scientific method?", options: ["a) A student memorising all science facts", "b) A bicycle repair person finding why a tyre is flat", "c) A teacher writing on a blackboard", "d) A chef following a recipe exactly"], correct: 1, hint: "Finding the root cause of a real-life mechanical breakdown.", explanation: "A mechanic observes the problem, forms hypotheses, and tests them to fix the issue." },
    { id: 8, mod: 2, q: "Science is rarely done:", options: ["a) With experiments", "b) Alone", "c) With questions", "d) With observations"], correct: 1, hint: "Scientists always build on previous work and collaborate in teams.", explanation: "Science is deeply collaborative and relies on shared peer knowledge." },
    { id: 9, mod: 2, q: "The example of a pen not writing illustrates:", options: ["a) Why science is difficult", "b) Why we need expensive equipment", "c) How the scientific method works in everyday life", "d) Why experiments always fail"], correct: 2, hint: "You systematically guess and check whether it's out of ink or broken.", explanation: "Checking a pen's ink or spring is an everyday practice of problem-solving." },
    { id: 10, mod: 2, q: "A truly wise person must be a:", options: ["a) \"Rights\" person who knows all rights", "b) \"Writes\" person who writes everything down", "c) \"Whys\" person who asks why about everything", "d) \"Wise\" person who never asks questions"], correct: 2, hint: "As Scientist Kabir implies: Always look deeper into the reasons behind occurrences.", explanation: "Scientist Kabir notes that asking 'Why' frequently builds real intellect." },
    // Module 3
    { id: 11, mod: 3, q: "New knowledge in science leads to:", options: ["a) End of all questions", "b) More questions and more things to find out", "c) Fewer experiments needed", "d) Complete understanding of everything"], correct: 1, hint: "Answering one mystery opens up several new pathways of discovery.", explanation: "Every expansion of knowledge introduces brand new scientific mysteries." },
    { id: 12, mod: 3, q: "Science helps us answer questions about:", options: ["a) Only living things", "b) Only non-living things", "c) Only things in a laboratory", "d) Everything - from stars in the sky to flowers blooming"], correct: 3, hint: "Science does not have bounds; it explores both natural phenomena and cosmic scope.", explanation: "Science investigates every aspect of our world, from physics to cosmic scope." },
    { id: 13, mod: 3, q: "\"Curiosity\" in the context of this textbook means:", options: ["a) Being confused about science", "b) The title of the Class 6 Science textbook and a key quality needed for science", "c) An experiment that goes wrong", "d) A type of laboratory instrument"], correct: 1, hint: "It refers both directly to the physical book's title and the hunger for exploration.", explanation: "Curiosity is both the formal name of the textbook and the essential character trait." },
    { id: 14, mod: 3, q: "The LAST step of the scientific method is:", options: ["a) Form a hypothesis", "b) Do more experiments", "c) Analyse the results to see if they answer the original question", "d) Observe something new"], correct: 2, hint: "Looking over your collected experiment results to draw a definitive conclusion.", explanation: "Analysis confirms whether your data answers the question or requires new tests." },
    { id: 15, mod: 3, q: "The science journey lasts:", options: ["a) One school year", "b) Until all questions are answered", "c) Until we finish the textbook", "d) Five years or even beyond"], correct: 3, hint: "Continuous lifelong exploration far past a regular school year.", explanation: "Scientific curiosity is a lifelong journey extending far beyond graduation." }
];

let state = {
    name: '', team: '',
    m1_done: false, m1_score: 0,
    m2_done: false, m2_score: 0,
    m3_done: false, m3_score: 0,
    total_score: 0, badge_level: '',
    pledge: '', completed_date: ''
};

function renderQuizzes() {
    for(let m = 1; m <= 3; m++) {
        const container = document.getElementById(`quiz-container-m${m}`);
        container.innerHTML = "";
        const modQuestions = questions.filter(q => q.mod === m);
        
        modQuestions.forEach((q, idx) => {
            const qBlock = document.createElement('div');
            qBlock.className = 'qa-block';
            qBlock.innerHTML = `
                <p class="qa-title"><strong>Q${q.id}. ${q.q}</strong></p>
                <div class="options-grid" id="opt-grid-${q.id}">
                    ${q.options.map((opt, oIdx) => `
                        <button class="option-btn" onclick="checkAnswer(${q.id}, ${oIdx}, this)">${opt}</button>
                    `).join('')}
                </div>
                <div class="feedback" id="feedback-${q.id}"></div>
            `;
            container.appendChild(qBlock);
        });
    }
}

function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(screenId).style.display = 'block';
}

function submitWelcomeScreen() {
    const nameVal = document.getElementById('student-name').value.trim();
    const teamVal = document.getElementById('team-name').value.trim();
    
    if(!nameVal) {
        alert("Name is a required field!");
        return;
    }
    
    state.name = nameVal;
    state.team = teamVal;
    localStorage.setItem('game_01_name', nameVal);
    localStorage.setItem('game_01_team', teamVal);
    
    document.getElementById('pledge-name-placeholder').innerText = nameVal;
    updateDashboard();
    navigateTo('screen-2');
}

function goToModule(mNum) {
    navigateTo(`screen-${mNum + 2}`);
}

function checkAnswer(qId, selectedIdx, btnElement) {
    const qObj = questions.find(q => q.id === qId);
    const grid = document.getElementById(`opt-grid-${qId}`);
    const feed = document.getElementById(`feedback-${qId}`);
    
    Array.from(grid.children).forEach(btn => btn.removeAttribute('onclick'));
    
    if(selectedIdx === qObj.correct) {
        btnElement.classList.add('selected-correct');
        feed.className = "feedback correct";
        feed.innerText = `Correct! Green Checkmark (✓) - ${qObj.explanation}`;
        feed.style.display = "block";
        state[`m${qObj.mod}_score`]++;
    } else {
        btnElement.classList.add('selected-wrong');
        Array.from(grid.children)[qObj.correct].classList.add('selected-correct');
        feed.className = "feedback wrong";
        feed.innerText = `Give it another look! Hint: ${qObj.hint}`;
        feed.style.display = "block";
    }
    updateProgressBar();
}

function updateProgressBar() {
    const totalAnswered = document.querySelectorAll('.option-btn.selected-correct, .option-btn.selected-wrong').length;
    const pct = (totalAnswered / 15) * 100;
    document.getElementById('progress-bar').style.width = `${pct}%`;
    document.getElementById('progress-text').innerText = `${totalAnswered} / 15 questions answered`;
}

function saveModuleProgress(mNum, navigateDirectToResults = false) {
    state[`m${mNum}_done`] = true;
    localStorage.setItem(`game_01_m${mNum}_done`, 'true');
    localStorage.setItem(`game_01_m${mNum}_score`, state[`m${mNum}_score`]);
    
    updateDashboard();
    
    if(navigateDirectToResults) {
        showResultsScreen();
    } else {
        navigateTo('screen-2');
    }
}

function updateDashboard() {
    let completedModulesCount = 0;
    for(let m = 1; m <= 3; m++) {
        const isDone = state[`m${m}_done`];
        const statusCell = document.getElementById(`status-m${m}`);
        if(isDone) {
            statusCell.innerText = "Done";
            statusCell.style.color = "var(--success)";
            completedModulesCount++;
        }
    }

    if(completedModulesCount === 3) {
        document.getElementById('results-btn').removeAttribute('disabled');
        document.getElementById('m3-results-nav-btn').style.display = "inline-block";
    }
}

function showResultsScreen() {
    state.total_score = state.m1_score + state.m2_score + state.m3_score;
    localStorage.setItem('game_01_total_score', state.total_score);
    
    let badge = "";
    let emoji = "";
    let desc = "";
    
    if(state.total_score >= 13) {
        badge = "Curiosity Champion";
        emoji = "🏆";
        desc = "You have mastered the Wonderful World of Science! You think and observe like a true scientist, Kabir would be proud!";
    } else if(state.total_score >= 9) {
        badge = "Science Explorer";
        emoji = "🔭";
        desc = "Great work! You are building strong science foundations. Review the concepts you found tricky and you will be a Curiosity Champion soon!";
    } else {
        badge = "Lab Discoverer";
        emoji = "🔬";
        desc = "Every scientist starts somewhere! Re-play the kit games and come back to try again. Kabir says: the only wrong move in science is to stop being curious!";
    }

    state.badge_level = badge;
    localStorage.setItem('game_01_badge_level', badge);
    
    state.completed_date = new Date().toISOString();
    localStorage.setItem('game_01_completed_date', state.completed_date);

    document.getElementById('final-score-display').innerText = `Total Score: ${state.total_score} / 15`;
    document.getElementById('badge-emoji').innerText = emoji;
    document.getElementById('badge-name').innerText = badge;
    document.getElementById('badge-desc').innerText = desc;
    
    document.getElementById('breakdown-m1').innerText = `${state.m1_score} / 5`;
    document.getElementById('breakdown-m2').innerText = `${state.m2_score} / 5`;
    document.getElementById('breakdown-m3').innerText = `${state.m3_score} / 5`;
    document.getElementById('breakdown-total').innerText = `${state.total_score} / 15`;

    navigateTo('screen-6');
}

function savePledge() {
    const pledgeVal = document.getElementById('custom-pledge').value.trim();
    state.pledge = pledgeVal;
    localStorage.setItem('game_01_pledge', pledgeVal);
    alert("Pledge saved successfully into registry!");
}

function openTeacherDashboard(e) {
    e.preventDefault();
    
    document.getElementById('td-name').innerText = localStorage.getItem('game_01_name') || state.name;
    document.getElementById('td-team').innerText = localStorage.getItem('game_01_team') || state.team || 'N/A';
    document.getElementById('td-date').innerText = localStorage.getItem('game_01_completed_date') || state.completed_date;
    document.getElementById('td-score').innerText = `${localStorage.getItem('game_01_total_score') || state.total_score} / 15`;
    
    const bLevel = localStorage.getItem('game_01_badge_level') || state.badge_level;
    document.getElementById('td-badge').innerText = bLevel;
    
    document.getElementById('td-m1').innerText = `${localStorage.getItem('game_01_m1_score') || state.m1_score} / 5`;
    document.getElementById('td-m2').innerText = `${localStorage.getItem('game_01_m2_score') || state.m2_score} / 5`;
    document.getElementById('td-m3').innerText = `${localStorage.getItem('game_01_m3_score') || state.m3_score} / 5`;
    document.getElementById('td-pledge').innerText = localStorage.getItem('game_01_pledge') || state.pledge || 'No custom pledge filled.';

    document.getElementById('row-action-champion').style.background = "none";
    document.getElementById('row-action-explorer').style.background = "none";
    document.getElementById('row-action-discoverer').style.background = "none";

    if(bLevel === "Curiosity Champion") {
        document.getElementById('row-action-champion').style.background = "var(--teal-l)";
    } else if(bLevel === "Science Explorer") {
        document.getElementById('row-action-explorer').style.background = "var(--blue-l)";
    } else {
        document.getElementById('row-action-discoverer').style.background = "var(--orange-l)";
    }

    navigateTo('screen-7');
}

renderQuizzes();