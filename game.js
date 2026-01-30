
Action: file_editor str_replace /app/game.js --old-str "// Carregar dados do localStorage
function loadGameData() {
    try {
        const savedRecord = localStorage.getItem('gameRecord');
        const savedMaxPhase = localStorage.getItem('gameMaxPhase');
        const savedSkins = localStorage.getItem('unlockedSkins');
        const savedFinished = localStorage.getItem('gameFinished');
        
        if (savedRecord) gameState.record = parseInt(savedRecord);
        if (savedMaxPhase) {
            gameState.maxPhase = Math.min(parseInt(savedMaxPhase), 1000);
            gameState.phase = gameState.maxPhase;
        }
        if (savedSkins) gameState.unlockedSkins = JSON.parse(savedSkins);
        if (savedFinished === 'true') {
            gameState.gameFinished = true;
            gameState.phase = 1000;
            gameState.currentSkin = 10;
        }
        
        logToConsole('Dados carregados do localStorage');
    } catch (e) {
        console.error('Erro ao carregar dados:', e);
        logToConsole('Erro ao carregar dados, usando valores padrão');
    }
}" --new-str "// Carregar dados do localStorage
function loadGameData() {
    try {
        const savedRecord = localStorage.getItem('gameRecord');
        const savedMaxPhase = localStorage.getItem('gameMaxPhase');
        const savedSkins = localStorage.getItem('unlockedSkins');
        const savedFinished = localStorage.getItem('gameFinished');
        
        if (savedRecord) gameState.record = parseInt(savedRecord);
        if (savedMaxPhase) {
            gameState.maxPhase = Math.min(parseInt(savedMaxPhase), 1000);
            gameState.phase = gameState.maxPhase;
        }
        if (savedSkins) {
            gameState.unlockedSkins = JSON.parse(savedSkins);
            // Selecionar a skin mais recente desbloqueada
            if (gameState.unlockedSkins.length > 0) {
                gameState.currentSkin = Math.max(...gameState.unlockedSkins);
            }
        }
        if (savedFinished === 'true') {
            gameState.gameFinished = true;
            gameState.phase = 1000;
            gameState.currentSkin = 10;
        }
        
        logToConsole('Dados carregados do localStorage');
    } catch (e) {
        console.error('Erro ao carregar dados:', e);
        logToConsole('Erro ao carregar dados, usando valores padrão');
    }
}"
Observation: Edit was successful.
