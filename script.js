const kanaTable = {
    hiragana: {
        base: [
            { kana: "あ", romaji: "a" },
            { kana: "い", romaji: "i" },
            { kana: "う", romaji: "u" },
            { kana: "え", romaji: "e" },
            { kana: "お", romaji: "o" },
            { kana: "か", romaji: "ka" },
            { kana: "き", romaji: "ki" },
            { kana: "く", romaji: "ku" },
            { kana: "け", romaji: "ke" },
            { kana: "こ", romaji: "ko" },
            { kana: "さ", romaji: "sa" },
            { kana: "し", romaji: "shi" },
            { kana: "す", romaji: "su" },
            { kana: "せ", romaji: "se" },
            { kana: "そ", romaji: "so" },
            { kana: "た", romaji: "ta" },
            { kana: "ち", romaji: "chi" },
            { kana: "つ", romaji: "tsu" },
            { kana: "て", romaji: "te" },
            { kana: "と", romaji: "to" },
            { kana: "な", romaji: "na" },
            { kana: "に", romaji: "ni" },
            { kana: "ぬ", romaji: "nu" },
            { kana: "ね", romaji: "ne" },
            { kana: "の", romaji: "no" },
            { kana: "は", romaji: "ha" },
            { kana: "ひ", romaji: "hi" },
            { kana: "ふ", romaji: "fu" },
            { kana: "へ", romaji: "he" },
            { kana: "ほ", romaji: "ho" },
            { kana: "ま", romaji: "ma" },
            { kana: "み", romaji: "mi" },
            { kana: "む", romaji: "mu" },
            { kana: "め", romaji: "me" },
            { kana: "も", romaji: "mo" },
            { kana: "や", romaji: "ya" },
            { kana: "ゆ", romaji: "yu" },
            { kana: "よ", romaji: "yo" },
            { kana: "ら", romaji: "ra" },
            { kana: "り", romaji: "ri" },
            { kana: "る", romaji: "ru" },
            { kana: "れ", romaji: "re" },
            { kana: "ろ", romaji: "ro" },
            { kana: "わ", romaji: "wa" },
            { kana: "を", romaji: "wo" },
            { kana: "ん", romaji: "n" }
        ],
        dakuten: [
            { kana: "が", romaji: "ga" },
            { kana: "ぎ", romaji: "gi" },
            { kana: "ぐ", romaji: "gu" },
            { kana: "げ", romaji: "ge" },
            { kana: "ご", romaji: "go" },
            { kana: "ざ", romaji: "za" },
            { kana: "じ", romaji: "ji" },
            { kana: "ず", romaji: "zu" },
            { kana: "ぜ", romaji: "ze" },
            { kana: "ぞ", romaji: "zo" },
            { kana: "だ", romaji: "da" },
            { kana: "ぢ", romaji: "ji" },
            { kana: "づ", romaji: "zu" },
            { kana: "で", romaji: "de" },
            { kana: "ど", romaji: "do" },
            { kana: "ば", romaji: "ba" },
            { kana: "び", romaji: "bi" },
            { kana: "ぶ", romaji: "bu" },
            { kana: "べ", romaji: "be" },
            { kana: "ぼ", romaji: "bo" }
        ],
        handakuten: [
            { kana: "ぱ", romaji: "pa" },
            { kana: "ぴ", romaji: "pi" },
            { kana: "ぷ", romaji: "pu" },
            { kana: "ぺ", romaji: "pe" },
            { kana: "ぽ", romaji: "po" }
        ],
        combinations: [
            { kana: "きゃ", romaji: "kya" },
            { kana: "きゅ", romaji: "kyu" },
            { kana: "きょ", romaji: "kyo" },
            { kana: "しゃ", romaji: "sha" },
            { kana: "しゅ", romaji: "shu" },
            { kana: "しょ", romaji: "sho" },
            { kana: "ちゃ", romaji: "cha" },
            { kana: "ちゅ", romaji: "chu" },
            { kana: "ちょ", romaji: "cho" },
            { kana: "にゃ", romaji: "nya" },
            { kana: "にゅ", romaji: "nyu" },
            { kana: "にょ", romaji: "nyo" },
            { kana: "ひゃ", romaji: "hya" },
            { kana: "ひゅ", romaji: "hyu" },
            { kana: "ひょ", romaji: "hyo" },
            { kana: "みゃ", romaji: "mya" },
            { kana: "みゅ", romaji: "myu" },
            { kana: "みょ", romaji: "myo" },
            { kana: "りゃ", romaji: "rya" },
            { kana: "りゅ", romaji: "ryu" },
            { kana: "りょ", romaji: "ryo" },
            { kana: "ぎゃ", romaji: "gya" },
            { kana: "ぎゅ", romaji: "gyu" },
            { kana: "ぎょ", romaji: "gyo" },
            { kana: "じゃ", romaji: "ja" },
            { kana: "じゅ", romaji: "ju" },
            { kana: "じょ", romaji: "jo" },
            { kana: "びゃ", romaji: "bya" },
            { kana: "びゅ", romaji: "byu" },
            { kana: "びょ", romaji: "byo" },
            { kana: "ぴゃ", romaji: "pya" },
            { kana: "ぴゅ", romaji: "pyu" },
            { kana: "ぴょ", romaji: "pyo" }
        ]
    },
    katakana: {
        base: [
            { kana: "ア", romaji: "a" },
            { kana: "イ", romaji: "i" },
            { kana: "ウ", romaji: "u" },
            { kana: "エ", romaji: "e" },
            { kana: "オ", romaji: "o" },
            { kana: "カ", romaji: "ka" },
            { kana: "キ", romaji: "ki" },
            { kana: "ク", romaji: "ku" },
            { kana: "ケ", romaji: "ke" },
            { kana: "コ", romaji: "ko" },
            { kana: "サ", romaji: "sa" },
            { kana: "シ", romaji: "shi" },
            { kana: "ス", romaji: "su" },
            { kana: "セ", romaji: "se" },
            { kana: "ソ", romaji: "so" },
            { kana: "タ", romaji: "ta" },
            { kana: "チ", romaji: "chi" },
            { kana: "ツ", romaji: "tsu" },
            { kana: "テ", romaji: "te" },
            { kana: "ト", romaji: "to" },
            { kana: "ナ", romaji: "na" },
            { kana: "ニ", romaji: "ni" },
            { kana: "ヌ", romaji: "nu" },
            { kana: "ネ", romaji: "ne" },
            { kana: "ノ", romaji: "no" },
            { kana: "ハ", romaji: "ha" },
            { kana: "ヒ", romaji: "hi" },
            { kana: "フ", romaji: "fu" },
            { kana: "ヘ", romaji: "he" },
            { kana: "ホ", romaji: "ho" },
            { kana: "マ", romaji: "ma" },
            { kana: "ミ", romaji: "mi" },
            { kana: "ム", romaji: "mu" },
            { kana: "メ", romaji: "me" },
            { kana: "モ", romaji: "mo" },
            { kana: "ヤ", romaji: "ya" },
            { kana: "ユ", romaji: "yu" },
            { kana: "ヨ", romaji: "yo" },
            { kana: "ラ", romaji: "ra" },
            { kana: "リ", romaji: "ri" },
            { kana: "ル", romaji: "ru" },
            { kana: "レ", romaji: "re" },
            { kana: "ロ", romaji: "ro" },
            { kana: "ワ", romaji: "wa" },
            { kana: "ヲ", romaji: "wo" },
            { kana: "ン", romaji: "n" }
        ],
        dakuten: [
            { kana: "ガ", romaji: "ga" },
            { kana: "ギ", romaji: "gi" },
            { kana: "グ", romaji: "gu" },
            { kana: "ゲ", romaji: "ge" },
            { kana: "ゴ", romaji: "go" },
            { kana: "ザ", romaji: "za" },
            { kana: "ジ", romaji: "ji" },
            { kana: "ズ", romaji: "zu" },
            { kana: "ゼ", romaji: "ze" },
            { kana: "ゾ", romaji: "zo" },
            { kana: "ダ", romaji: "da" },
            { kana: "ヂ", romaji: "ji" },
            { kana: "ヅ", romaji: "zu" },
            { kana: "デ", romaji: "de" },
            { kana: "ド", romaji: "do" },
            { kana: "バ", romaji: "ba" },
            { kana: "ビ", romaji: "bi" },
            { kana: "ブ", romaji: "bu" },
            { kana: "ベ", romaji: "be" },
            { kana: "ボ", romaji: "bo" }
        ],
        handakuten: [
            { kana: "パ", romaji: "pa" },
            { kana: "ピ", romaji: "pi" },
            { kana: "プ", romaji: "pu" },
            { kana: "ペ", romaji: "pe" },
            { kana: "ポ", romaji: "po" }
        ],
        combinations: [
            { kana: "キャ", romaji: "kya" },
            { kana: "キュ", romaji: "kyu" },
            { kana: "キョ", romaji: "kyo" },
            { kana: "シャ", romaji: "sha" },
            { kana: "シュ", romaji: "shu" },
            { kana: "ショ", romaji: "sho" },
            { kana: "チャ", romaji: "cha" },
            { kana: "チュ", romaji: "chu" },
            { kana: "チョ", romaji: "cho" },
            { kana: "ニャ", romaji: "nya" },
            { kana: "ニュ", romaji: "nyu" },
            { kana: "ニョ", romaji: "nyo" },
            { kana: "ヒャ", romaji: "hya" },
            { kana: "ヒュ", romaji: "hyu" },
            { kana: "ヒョ", romaji: "hyo" },
            { kana: "ミャ", romaji: "mya" },
            { kana: "ミュ", romaji: "myu" },
            { kana: "ミョ", romaji: "myo" },
            { kana: "リャ", romaji: "rya" },
            { kana: "リュ", romaji: "ryu" },
            { kana: "リョ", romaji: "ryo" },
            { kana: "ギャ", romaji: "gya" },
            { kana: "ギュ", romaji: "gyu" },
            { kana: "ギョ", romaji: "gyo" },
            { kana: "ジャ", romaji: "ja" },
            { kana: "ジュ", romaji: "ju" },
            { kana: "ジョ", romaji: "jo" },
            { kana: "ビャ", romaji: "bya" },
            { kana: "ビュ", romaji: "byu" },
            { kana: "ビョ", romaji: "byo" },
            { kana: "ピャ", romaji: "pya" },
            { kana: "ピュ", romaji: "pyu" },
            { kana: "ピョ", romaji: "pyo" }
        ]
    }
};

const ALL_KANA_TYPES = ["hiragana", "katakana"];
const ALL_KANA_CATEGORIES = ["base", "dakuten", "handakuten", "combinations"];
const STORAGE_KEYS = {
    theme: "kana-exercices:theme",
    settings: "kana-exercices:settings",
    bestStreak: "kana-exercices:best-streak",
    bestSprint: "kana-exercices:best-sprint",
    stats: "kana-exercices:kana-stats"
};
const SPRINT_DURATION = 60;

let timeoutId = null;
let score = 0;
let streak = 0;
let bestStreak = Number(localStorage.getItem(STORAGE_KEYS.bestStreak)) || 0;
let currentQuestion = null;
let sprint = { active: false, score: 0, secondsLeft: SPRINT_DURATION, intervalId: null };

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function loadSettings() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.settings));
        if (
            saved &&
            Array.isArray(saved.kanaTypes) &&
            Array.isArray(saved.kanaCategories) &&
            saved.kanaTypes.length > 0 &&
            saved.kanaCategories.length > 0
        ) {
            return {
                kanaTypes: saved.kanaTypes,
                kanaCategories: saved.kanaCategories,
                mode: saved.mode === "type" ? "type" : "qcm"
            };
        }
    } catch (e) {
        // Ignore corrupted settings and fall back to defaults.
    }
    return { kanaTypes: [...ALL_KANA_TYPES], kanaCategories: [...ALL_KANA_CATEGORIES], mode: "qcm" };
}

function saveSettings(settings) {
    localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}

let activeSettings = loadSettings();

function loadStats() {
    try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEYS.stats));
        if (saved && typeof saved === "object") return saved;
    } catch (e) {
        // Ignore corrupted stats.
    }
    return {};
}

let kanaStats = loadStats();

function saveStats() {
    localStorage.setItem(STORAGE_KEYS.stats, JSON.stringify(kanaStats));
}

function recordAnswer(key, isCorrect) {
    const entry = kanaStats[key] || { correct: 0, wrong: 0 };
    if (isCorrect) {
        entry.correct += 1;
    } else {
        entry.wrong += 1;
    }
    kanaStats[key] = entry;
    saveStats();
}

// Builds the pool of eligible kana for the active alphabet/category filters.
function buildPool(kanaTypes, kanaCategories) {
    const pool = [];
    kanaTypes.forEach((kanaType) => {
        kanaCategories.forEach((category) => {
            kanaTable[kanaType][category].forEach(({ kana, romaji }) => {
                pool.push({ key: `${kanaType}:${category}:${kana}`, kana, romaji, kanaType, category });
            });
        });
    });
    return pool;
}

// Kana missed more often (relative to how often they've since been gotten right)
// get a higher weight, so they resurface more frequently — a lightweight spaced-repetition effect.
function pickWeighted(pool) {
    const weights = pool.map((entry) => {
        const stat = kanaStats[entry.key];
        if (!stat) return 1.4;
        return 1 + (stat.wrong * 2) / (stat.correct + 1);
    });
    const total = weights.reduce((sum, w) => sum + w, 0);
    let roll = Math.random() * total;
    for (let i = 0; i < pool.length; i++) {
        roll -= weights[i];
        if (roll <= 0) return pool[i];
    }
    return pool[pool.length - 1];
}

function getRandomOptions(correctRomaji, kanaType, kanaCategories) {
    const options = new Set([correctRomaji]);
    let attempts = 0;
    const maxAttempts = 200;
    while (options.size < 4 && attempts < maxAttempts) {
        attempts += 1;
        const randomCategory = kanaCategories[getRandomInt(kanaCategories.length)];
        const kanaList = kanaTable[kanaType][randomCategory];
        const randomRomaji = kanaList[getRandomInt(kanaList.length)].romaji;
        options.add(
            kanaType === "katakana" ? randomRomaji.toUpperCase() : randomRomaji
        );
    }
    return [...options].sort(() => Math.random() - 0.5);
}

function displayNewQuestion() {
    const { kanaTypes, kanaCategories, mode } = activeSettings;
    const pool = buildPool(kanaTypes, kanaCategories);
    const selected = pickWeighted(pool);
    const correctRomaji =
        selected.kanaType === "katakana" ? selected.romaji.toUpperCase() : selected.romaji;
    currentQuestion = { ...selected, correctRomaji };

    const kanaDisplay = document.getElementById("kana-display");
    kanaDisplay.innerText = selected.kana;
    kanaDisplay.classList.remove("correct", "incorrect", "enter");
    // Force reflow so the "enter" animation replays on every new question.
    void kanaDisplay.offsetWidth;
    kanaDisplay.classList.add("enter");

    if (mode === "type") {
        const input = document.getElementById("type-input");
        input.value = "";
        input.disabled = false;
        input.classList.remove("correct", "incorrect");
        input.focus();
    } else {
        const options = getRandomOptions(correctRomaji, selected.kanaType, kanaCategories);
        const buttons = document.querySelectorAll(".option");
        buttons.forEach((button, index) => {
            button.innerText = options[index] ?? "";
            button.dataset.correct = options[index] === correctRomaji;
            button.disabled = false;
            button.classList.remove("disabled", "correct", "incorrect");
        });
    }
}

function updateScoreBoard() {
    document.getElementById("score-value").innerText = score;
    document.getElementById("streak-value").innerText = streak;
    document.getElementById("best-streak-value").innerText = bestStreak;
}

function updateBestSprintDisplay() {
    const best = Number(localStorage.getItem(STORAGE_KEYS.bestSprint)) || 0;
    document.getElementById("best-sprint-value").innerText = best;
}

function updateStatsProgressText() {
    const el = document.getElementById("stats-progress-text");
    el.innerText = `${Object.keys(kanaStats).length} kana suivis.`;
}

function registerResult(isCorrect) {
    if (currentQuestion) {
        recordAnswer(currentQuestion.key, isCorrect);
    }

    if (sprint.active) {
        if (isCorrect) {
            sprint.score += 1;
            updateSprintBoard();
        }
        return;
    }

    if (isCorrect) {
        score += 1;
        streak += 1;
        if (streak > bestStreak) {
            bestStreak = streak;
            localStorage.setItem(STORAGE_KEYS.bestStreak, String(bestStreak));
        }
    } else {
        streak = 0;
    }
    updateScoreBoard();
}

function checkAnswer(button) {
    const buttons = document.querySelectorAll(".option");
    const kanaDisplay = document.getElementById("kana-display");

    clearTimeout(timeoutId); // Annule le délai précédent

    buttons.forEach((btn) => {
        btn.disabled = true;
        btn.classList.add("disabled");
    });

    const isCorrect = button.dataset.correct === "true";
    registerResult(isCorrect);

    if (isCorrect) {
        kanaDisplay.classList.add("correct");
        kanaDisplay.classList.remove("incorrect");
        button.classList.add("correct");
        timeoutId = setTimeout(displayNewQuestion, sprint.active ? 400 : 900);
    } else {
        kanaDisplay.classList.add("incorrect");
        kanaDisplay.classList.remove("correct");
        button.classList.add("incorrect");
        const correctButton = [...buttons].find((btn) => btn.dataset.correct === "true");
        correctButton?.classList.add("correct");
        timeoutId = setTimeout(displayNewQuestion, sprint.active ? 700 : 1300);
    }
}

function checkTypedAnswer(rawValue) {
    const input = document.getElementById("type-input");
    const kanaDisplay = document.getElementById("kana-display");
    if (!currentQuestion || input.disabled) return;

    clearTimeout(timeoutId);
    input.disabled = true;

    const isCorrect = rawValue.trim().toLowerCase() === currentQuestion.correctRomaji.toLowerCase();
    registerResult(isCorrect);

    if (isCorrect) {
        kanaDisplay.classList.add("correct");
        kanaDisplay.classList.remove("incorrect");
        input.classList.add("correct");
        timeoutId = setTimeout(displayNewQuestion, sprint.active ? 400 : 900);
    } else {
        kanaDisplay.classList.add("incorrect");
        kanaDisplay.classList.remove("correct");
        input.classList.add("incorrect");
        input.value = currentQuestion.correctRomaji;
        timeoutId = setTimeout(displayNewQuestion, sprint.active ? 900 : 1500);
    }
}

function initOptionButtons() {
    document.querySelectorAll(".option").forEach((button) => {
        button.addEventListener("click", () => checkAnswer(button));
    });

    document.addEventListener("keydown", (event) => {
        if (activeSettings.mode !== "qcm") return;
        const index = Number(event.key) - 1;
        if (index >= 0 && index < 4) {
            const button = document.querySelector(`.option[data-index="${index}"]`);
            if (button && !button.disabled) {
                checkAnswer(button);
            }
        }
    });
}

function initTypeAnswer() {
    document.getElementById("type-answer").addEventListener("submit", (event) => {
        event.preventDefault();
        checkTypedAnswer(document.getElementById("type-input").value);
    });
}

function applyModeUI(mode) {
    document.getElementById("options").hidden = mode !== "qcm";
    document.getElementById("type-answer").hidden = mode !== "type";
    document.getElementById("hint").innerText =
        mode === "qcm"
            ? "Astuce : utilise les touches 1 à 4 pour répondre"
            : "Astuce : appuie sur Entrée pour valider";
}

function initTheme() {
    const toggleButton = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = savedTheme || (prefersDark ? "dark" : "light");
    applyTheme(theme);

    toggleButton.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEYS.theme, next);
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.getElementById("theme-toggle").innerText = theme === "dark" ? "☀️" : "🌙";
}

function initSettingsPanel() {
    const panel = document.getElementById("settings-panel");
    const toggleButton = document.getElementById("settings-toggle");
    const closeButton = document.getElementById("settings-close");
    const warning = document.getElementById("settings-warning");
    const typeInputs = document.querySelectorAll('input[name="kanaType"]');
    const categoryInputs = document.querySelectorAll('input[name="kanaCategory"]');
    const modeInputs = document.querySelectorAll('input[name="quizMode"]');

    typeInputs.forEach((input) => {
        input.checked = activeSettings.kanaTypes.includes(input.value);
    });
    categoryInputs.forEach((input) => {
        input.checked = activeSettings.kanaCategories.includes(input.value);
    });
    modeInputs.forEach((input) => {
        input.checked = input.value === activeSettings.mode;
    });
    applyModeUI(activeSettings.mode);

    toggleButton.addEventListener("click", () => panel.showModal());
    closeButton.addEventListener("click", () => panel.close());
    panel.addEventListener("click", (event) => {
        if (event.target === panel) panel.close();
    });

    function handleChange() {
        const kanaTypes = [...typeInputs].filter((i) => i.checked).map((i) => i.value);
        const kanaCategories = [...categoryInputs]
            .filter((i) => i.checked)
            .map((i) => i.value);
        const mode = [...modeInputs].find((i) => i.checked)?.value === "type" ? "type" : "qcm";

        if (kanaTypes.length === 0 || kanaCategories.length === 0) {
            warning.hidden = false;
            return;
        }

        warning.hidden = true;
        activeSettings = { kanaTypes, kanaCategories, mode };
        saveSettings(activeSettings);
        applyModeUI(mode);
        clearTimeout(timeoutId);
        displayNewQuestion();
    }

    typeInputs.forEach((input) => input.addEventListener("change", handleChange));
    categoryInputs.forEach((input) => input.addEventListener("change", handleChange));
    modeInputs.forEach((input) => input.addEventListener("change", handleChange));

    document.getElementById("reset-stats").addEventListener("click", () => {
        kanaStats = {};
        saveStats();
        updateStatsProgressText();
        showToast("Progression réinitialisée.");
    });

    updateStatsProgressText();
}

function updateSprintBoard() {
    document.getElementById("sprint-time-value").innerText = sprint.secondsLeft;
    document.getElementById("sprint-score-value").innerText = sprint.score;
}

function startSprint() {
    document.getElementById("settings-panel").close();
    document.getElementById("sprint-result").close();

    sprint.active = true;
    sprint.score = 0;
    sprint.secondsLeft = SPRINT_DURATION;

    document.getElementById("score-board").hidden = true;
    document.getElementById("sprint-launcher").hidden = true;
    document.getElementById("sprint-bar").hidden = false;
    updateSprintBoard();

    clearInterval(sprint.intervalId);
    sprint.intervalId = setInterval(() => {
        sprint.secondsLeft -= 1;
        updateSprintBoard();
        if (sprint.secondsLeft <= 0) {
            endSprint();
        }
    }, 1000);

    clearTimeout(timeoutId);
    displayNewQuestion();
}

function endSprint() {
    clearInterval(sprint.intervalId);
    sprint.active = false;

    document.getElementById("score-board").hidden = false;
    document.getElementById("sprint-launcher").hidden = false;
    document.getElementById("sprint-bar").hidden = true;

    const best = Number(localStorage.getItem(STORAGE_KEYS.bestSprint)) || 0;
    const isNewBest = sprint.score > best;
    if (isNewBest) {
        localStorage.setItem(STORAGE_KEYS.bestSprint, String(sprint.score));
    }
    updateBestSprintDisplay();

    document.getElementById("sprint-final-score").innerText = sprint.score;
    document.getElementById("sprint-result-message").innerText = isNewBest
        ? "Nouveau record personnel !"
        : `Ton record est de ${Math.max(best, sprint.score)}.`;
    document.getElementById("sprint-result").showModal();

    clearTimeout(timeoutId);
    displayNewQuestion();
}

function initSprint() {
    document.getElementById("start-sprint").addEventListener("click", startSprint);
    document.getElementById("sprint-replay").addEventListener("click", startSprint);
    document.getElementById("sprint-result-close").addEventListener("click", () => {
        document.getElementById("sprint-result").close();
    });
    updateBestSprintDisplay();
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.hidden = false;
    clearTimeout(showToast.timeoutId);
    showToast.timeoutId = setTimeout(() => {
        toast.hidden = true;
    }, 2200);
}

function initServiceWorker() {
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("service-worker.js").catch(() => {});
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initSettingsPanel();
    initOptionButtons();
    initTypeAnswer();
    initSprint();
    initServiceWorker();
    updateScoreBoard();
    displayNewQuestion();
});
