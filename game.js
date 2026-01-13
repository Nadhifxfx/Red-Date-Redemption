// ==============================================
// GAME CONFIGURATION
// ==============================================

const CONFIG = {
    TILE_SIZE: 30,
    CANVAS_WIDTH: 21,
    CANVAS_HEIGHT: 21,
    PLAYER_SPEED: 150, // Movement speed in ms
    ENEMY_SPEED: 200,
    POWER_DURATION: 5000,
    ENEMY_COUNT: 3,
    INITIAL_LIVES: 3,
    MAX_LIVES: 5,
    MAX_LEVEL: 5,
    LEVEL_TIME_LIMIT: 60, // seconds per level
    INTERPOLATION_SPEED: 0.3 // Smooth movement interpolation (0-1)
};

// ==============================================
// GAME SETTINGS (Configurable)
// ==============================================

const gameSettings = {
    language: 'id',
    volume: 70
};

// ==============================================
// TRANSLATIONS
// ==============================================

const translations = {
    id: {
        // Main Menu
        game_title: 'RED DATE REDEMPTION',
        game_subtitle: 'Akhir bulan mengajarkan arti bertahan',
        high_score_label: 'Skor Tertinggi:',
        play_button: 'MULAI BERMAIN',
        tutorial_button: 'CARA BERMAIN',
        about_button: 'TENTANG GAME',
        settings_button: 'PENGATURAN',
        leaderboard_button: 'PAPAN PERINGKAT',
        menu_footer: '😊 Bertahan sampai tanggal 1 | 🍱 Kumpulkan semua makanan | 📕⏰😱 Hindari tekanan hidup',
        
        // Tutorial
        tutorial_title: 'CARA BERMAIN',
        controls_title: '🎮 Kontrol',
        controls_text: 'Gunakan tombol panah <strong>↑ ↓ ← →</strong> untuk menggerakkan karakter',
        objective_title: '🎯 Tujuan',
        objective_text1: 'Kumpulkan semua <strong>nasi bungkus (🍱)</strong> yang tersisa di kos-kosan',
        objective_text2: 'Hindari <strong>tekanan hidup (📕⏰😱)</strong> yang mengejar kamu',
        powerup_title: '⚡ Power Up',
        powerup_text1: 'Ambil <strong>kopi sachet (☕)</strong> untuk mendapat energi sementara',
        powerup_text2: 'Saat powered, kamu bisa menghadapi tekanan hidup!',
        lives_title: '❤️ Sistem Nyawa',
        lives_text1: '• Setiap level dimulai dengan <strong>3 nyawa</strong> (❤️❤️❤️)',
        lives_text2: '• Terkena musuh = kehilangan 1 nyawa',
        lives_text3: '• Nyawa habis = <strong>Game Over</strong> → Kembali ke Level 1',
        scoring_title: '🏆 Penilaian',
        scoring_text1: '• Nasi bungkus: +10 poin',
        scoring_text2: '• Menghadapi tekanan: +100 poin (saat powered)',
        scoring_text3: '• Kumpulkan semua untuk lanjut level berikutnya',
        back_button: 'KEMBALI KE MENU',
        
        // About
        about_title: 'TENTANG GAME',
        about_text1: '<strong>"Red Date Redemption"</strong> adalah game yang terinspirasi dari pengalaman nyata mahasiswa rantau di Indonesia.',
        about_text2: 'Akhir bulan adalah masa paling berat bagi mahasiswa rantau. Transfer bulanan sudah habis, tapi masih harus bertahan sampai tanggal 1.',
        about_text3: 'Game ini menggambarkan perjuangan sehari-hari: mengelola sisa makanan, menghadapi tekanan akademik, dan bertahan dengan segala keterbatasan.',
        about_highlight1: 'Untuk semua mahasiswa rantau di luar sana:',
        about_highlight2: 'Kalian hebat. Kalian kuat. Kalian bisa.',
        
        // Leaderboard
        leaderboard_title: '🏆 PAPAN PERINGKAT',
        leaderboard_subtitle: 'Top 10 Skor Tertinggi',
        leaderboard_rank: 'Peringkat',
        leaderboard_score: 'Skor',
        leaderboard_level: 'Level',
        leaderboard_empty: 'Belum ada skor. Mulai bermain untuk masuk leaderboard!',
        new_record: '🎉 REKOR BARU! Anda masuk Top 10!',
        
        // Settings
        settings_title: '⚙ PENGATURAN',
        language_label: 'Bahasa / Language',
        volume_label: '🔊 Volume Suara',
        settings_tip1: '💡 <strong>Tips:</strong> Pengaturan akan disimpan otomatis',
        settings_tip2: '🔊 Set volume ke 0% untuk menonaktifkan suara',
        
        // Opening Story
        opening_title: 'RED DATE REDEMPTION',
        opening_text1: 'Kamu adalah mahasiswa rantau yang hidup di kos sempit.',
        opening_text2: 'Hari ini tanggal 31. Transfer bulanan sudah habis.',
        opening_text3: 'Di kulkas hanya tersisa beberapa nasi bungkus dan uang receh di dompet.',
        opening_text4: 'Sementara itu, deadline tugas, ujian, dan tekanan akademik terus menghantui.',
        opening_highlight1: 'Kamu harus bertahan sampai tanggal 1 besok.',
        opening_highlight2: 'Kumpulkan semua yang tersisa tanpa tertangkap tekanan hidup.',
        start_game_button: 'MULAI BERTAHAN',
        
        // Game UI
        score_label: 'SKOR:',
        level_label: 'LEVEL:',
        lives_label: 'NYAWA:',
        timer_label: 'WAKTU:',
        time_bonus: 'Bonus Waktu: +{points} poin!',
        perfect_clear: '🌟 PERFECT CLEAR! +{points} poin!',
        status_label: 'STATUS:',
        status_normal: 'Normal',
        status_powered: 'Powered!',
        pause_title: 'GAME DIJEDA',
        resume_button: '▶️ LANJUTKAN',
        restart_button: '🔄 MULAI ULANG',
        menu_button: '🏠 KE MENU',
        game_controls: 'Gunakan tombol ↑ ↓ ← → untuk bergerak',
        legend_player: '😊 Kamu',
        legend_food: '🍱 Makanan',
        legend_coffee: '☕ Kopi',
        legend_enemy: '📕⏰😱 Musuh',
        
        // Game Over
        gameover_title: 'TERTANGKAP',
        gameover_text1: 'Tekanan hidup terlalu berat...',
        gameover_text2: 'Kamu kalah oleh deadline dan kekhawatiran.',
        gameover_text3: 'Kadang, hidup mahasiswa rantau memang tidak mudah.',
        gameover_highlight1: 'Tapi ingat, besok adalah hari baru.',
        gameover_highlight2: 'Kamu selalu bisa mencoba lagi.',
        final_score_label: 'SKOR AKHIR:',
        try_again_button: 'COBA LAGI',
        
        // Win
        win_title: 'BERTAHAN!',
        win_text1: 'Kamu berhasil mengumpulkan semua yang tersisa!',
        win_text2: 'Besok adalah tanggal 1. Transfer akan masuk pagi ini.',
        win_text3: 'Kamu berhasil melewati akhir bulan yang berat.',
        win_highlight1: 'Ini bukan tentang menang atau kalah.',
        win_highlight2: 'Ini tentang bertahan di tengah keterbatasan.',
        win_highlight3: 'Kamu kuat. Kamu bisa.',
        continue_button: 'LEVEL SELANJUTNYA',
        play_again_button: 'MAIN LAGI'
    },
    en: {
        // Main Menu
        game_title: 'RED DATE REDEMPTION',
        game_subtitle: 'End of month teaches the meaning of survival',
        high_score_label: 'High Score:',
        play_button: 'START GAME',
        tutorial_button: 'HOW TO PLAY',
        about_button: 'ABOUT GAME',
        settings_button: 'SETTINGS',
        leaderboard_button: 'LEADERBOARD',
        menu_footer: '😊 Survive until 1st | 🍱 Collect all food | 📕⏰😱 Avoid life pressures',
        
        // Tutorial
        tutorial_title: 'HOW TO PLAY',
        controls_title: '🎮 Controls',
        controls_text: 'Use arrow keys <strong>↑ ↓ ← →</strong> to move your character',
        objective_title: '🎯 Objective',
        objective_text1: 'Collect all <strong>lunch boxes (🍱)</strong> left in your dorm',
        objective_text2: 'Avoid <strong>life pressures (📕⏰😱)</strong> chasing you',
        powerup_title: '⚡ Power Up',
        powerup_text1: 'Get <strong>instant coffee (☕)</strong> for temporary energy',
        powerup_text2: 'When powered, you can face the pressures!',
        lives_title: '❤️ Lives System',
        lives_text1: '• Each level starts with <strong>3 lives</strong> (❤️❤️❤️)',
        lives_text2: '• Hit by enemy = lose 1 life',
        lives_text3: '• No lives left = <strong>Game Over</strong> → Restart from Level 1',
        scoring_title: '🏆 Scoring',
        scoring_text1: '• Lunch box: +10 points',
        scoring_text2: '• Face pressure: +100 points (when powered)',
        scoring_text3: '• Collect all to advance to next level',
        back_button: 'BACK TO MENU',
        
        // About
        about_title: 'ABOUT GAME',
        about_text1: '<strong>"Red Date Redemption"</strong> is a game inspired by real experiences of overseas students in Indonesia.',
        about_text2: 'End of month is the hardest time for students. Monthly allowance has run out, but you still have to survive until the 1st.',
        about_text3: 'This game depicts daily struggles: managing leftover food, facing academic pressure, and surviving with limitations.',
        about_highlight1: 'For all overseas students out there:',
        about_highlight2: 'You are amazing. You are strong. You can do this.',
        
        // Leaderboard
        leaderboard_title: '🏆 LEADERBOARD',
        leaderboard_subtitle: 'Top 10 High Scores',
        leaderboard_rank: 'Rank',
        leaderboard_score: 'Score',
        leaderboard_level: 'Level',
        leaderboard_empty: 'No scores yet. Start playing to get on the leaderboard!',
        new_record: '🎉 NEW RECORD! You made it to Top 10!',
        
        // Settings
        settings_title: '⚙ SETTINGS',
        language_label: 'Language / Bahasa',
        volume_label: '🔊 Sound Volume',
        settings_tip1: '💡 <strong>Tip:</strong> Settings will be saved automatically',
        settings_tip2: '🔊 Set volume to 0% to disable sound',
        
        // Opening Story
        opening_title: 'RED DATE REDEMPTION',
        opening_text1: 'You are an overseas student living in a small dorm.',
        opening_text2: 'Today is the 31st. Your monthly allowance is gone.',
        opening_text3: 'In the fridge, only a few lunch boxes and spare change in your wallet.',
        opening_text4: 'Meanwhile, deadlines, exams, and academic pressure keep haunting.',
        opening_highlight1: 'You must survive until tomorrow, the 1st.',
        opening_highlight2: 'Collect everything left without getting caught by life pressures.',
        start_game_button: 'START SURVIVING',
        
        // Game UI
        score_label: 'SCORE:',
        level_label: 'LEVEL:',
        lives_label: 'LIVES:',
        timer_label: 'TIME:',
        time_bonus: 'Time Bonus: +{points} points!',
        perfect_clear: '🌟 PERFECT CLEAR! +{points} points!',
        status_label: 'STATUS:',
        status_normal: 'Normal',
        status_powered: 'Powered!',
        pause_title: 'GAME PAUSED',
        resume_button: '▶️ RESUME',
        restart_button: '🔄 RESTART',
        menu_button: '🏠 MAIN MENU',
        game_controls: 'Use ↑ ↓ ← → keys to move',
        legend_player: '😊 You',
        legend_food: '🍱 Food',
        legend_coffee: '☕ Coffee',
        legend_enemy: '📕⏰😱 Enemy',
        
        // Game Over
        gameover_title: 'CAUGHT',
        gameover_text1: 'Life pressure was too heavy...',
        gameover_text2: 'You were defeated by deadlines and worries.',
        gameover_text3: 'Sometimes, student life is not easy.',
        gameover_highlight1: 'But remember, tomorrow is a new day.',
        gameover_highlight2: 'You can always try again.',
        final_score_label: 'FINAL SCORE:',
        try_again_button: 'TRY AGAIN',
        
        // Win
        win_title: 'SURVIVED!',
        win_text1: 'You managed to collect everything left!',
        win_text2: 'Tomorrow is the 1st. The transfer will come this morning.',
        win_text3: 'You successfully passed the hard end of month.',
        win_highlight1: 'This is not about winning or losing.',
        win_highlight2: 'This is about surviving with limitations.',
        win_highlight3: 'You are strong. You can do this.',
        continue_button: 'NEXT LEVEL',
        play_again_button: 'PLAY AGAIN'
    }
};

function applyTranslations() {
    const lang = gameSettings.language;
    const t = translations[lang];
    
    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (t[key]) {
            element.innerHTML = t[key];
        }
    });
    
    // Update game status if game is running
    if (gameState) {
        if (gameState.isPowered) {
            gameState.status = t.status_powered;
        } else {
            gameState.status = t.status_normal;
        }
        updateUI();
    }
}

// ==============================================
// AUDIO SYSTEM
// ==============================================

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Background Music System
let backgroundMusic = {
    isPlaying: false,
    oscillators: [],
    gainNode: null
};

function startBackgroundMusic() {
    if (backgroundMusic.isPlaying) return;
    if (gameSettings.volume === 0) return;
    
    backgroundMusic.isPlaying = true;
    backgroundMusic.gainNode = audioContext.createGain();
    backgroundMusic.gainNode.connect(audioContext.destination);
    
    const volume = (gameSettings.volume / 100) * 0.15; // Lower volume for background
    backgroundMusic.gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    
    // Create a simple ambient melody loop
    const notes = [
        { freq: 261.63, duration: 0.5 }, // C4
        { freq: 293.66, duration: 0.5 }, // D4
        { freq: 329.63, duration: 0.5 }, // E4
        { freq: 349.23, duration: 0.5 }, // F4
        { freq: 392.00, duration: 1.0 }, // G4
        { freq: 349.23, duration: 0.5 }, // F4
        { freq: 329.63, duration: 0.5 }, // E4
        { freq: 293.66, duration: 1.0 }  // D4
    ];
    
    let currentTime = audioContext.currentTime;
    
    function playMelodyLoop() {
        if (!backgroundMusic.isPlaying) return;
        
        const loopDuration = notes.reduce((sum, note) => sum + note.duration, 0);
        
        notes.forEach((note, index) => {
            const startTime = currentTime + notes.slice(0, index).reduce((sum, n) => sum + n.duration, 0);
            
            const osc = audioContext.createOscillator();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(note.freq, startTime);
            osc.connect(backgroundMusic.gainNode);
            osc.start(startTime);
            osc.stop(startTime + note.duration);
            
            backgroundMusic.oscillators.push(osc);
        });
        
        currentTime += loopDuration;
        setTimeout(() => playMelodyLoop(), loopDuration * 1000);
    }
    
    playMelodyLoop();
}

function stopBackgroundMusic() {
    if (!backgroundMusic.isPlaying) return;
    
    backgroundMusic.isPlaying = false;
    backgroundMusic.oscillators.forEach(osc => {
        try {
            osc.stop();
        } catch (e) {
            // Oscillator might already be stopped
        }
    });
    backgroundMusic.oscillators = [];
    
    if (backgroundMusic.gainNode) {
        backgroundMusic.gainNode.disconnect();
        backgroundMusic.gainNode = null;
    }
}

function updateMusicVolume() {
    if (backgroundMusic.gainNode) {
        const volume = (gameSettings.volume / 100) * 0.15;
        backgroundMusic.gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    }
    
    // Stop music if volume is 0
    if (gameSettings.volume === 0 && backgroundMusic.isPlaying) {
        stopBackgroundMusic();
    }
    // Start music if volume > 0 and game is running
    else if (gameSettings.volume > 0 && !backgroundMusic.isPlaying && gameState && gameState.isRunning) {
        startBackgroundMusic();
    }
}

// Sound effect generator
function playSound(type) {
    if (gameSettings.volume === 0) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    const volume = gameSettings.volume / 100;
    const now = audioContext.currentTime;
    
    switch(type) {
        case 'collect': // Makanan
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(523.25, now); // C5
            oscillator.frequency.exponentialRampToValueAtTime(784, now + 0.1); // G5
            gainNode.gain.setValueAtTime(volume * 0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            oscillator.start(now);
            oscillator.stop(now + 0.15);
            break;
            
        case 'powerup': // Kopi
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(440, now);
            oscillator.frequency.exponentialRampToValueAtTime(880, now + 0.1);
            oscillator.frequency.exponentialRampToValueAtTime(1760, now + 0.2);
            gainNode.gain.setValueAtTime(volume * 0.2, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            oscillator.start(now);
            oscillator.stop(now + 0.3);
            break;
            
        case 'defeat': // Kalahkan musuh
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(200, now);
            oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1);
            gainNode.gain.setValueAtTime(volume * 0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            oscillator.start(now);
            oscillator.stop(now + 0.15);
            break;
            
        case 'gameover': // Kalah
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(440, now);
            oscillator.frequency.exponentialRampToValueAtTime(110, now + 0.5);
            gainNode.gain.setValueAtTime(volume * 0.4, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
            oscillator.start(now);
            oscillator.stop(now + 0.6);
            break;
            
        case 'win': // Menang
            // Mainkan urutan nada
            [523.25, 659.25, 783.99].forEach((freq, i) => {
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                osc.connect(gain);
                gain.connect(audioContext.destination);
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + i * 0.15);
                gain.gain.setValueAtTime(volume * 0.3, now + i * 0.15);
                gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.15 + 0.2);
                osc.start(now + i * 0.15);
                osc.stop(now + i * 0.15 + 0.2);
            });
            return; // Skip the normal oscillator stop
    }
}

// Load settings from localStorage
function loadSettings() {
    const saved = localStorage.getItem('akhirBulanSettings');
    if (saved) {
        const parsed = JSON.parse(saved);
        Object.assign(gameSettings, parsed);
    }
    
    // Load high score
    const savedHighScore = localStorage.getItem('akhirBulanHighScore');
    if (savedHighScore) {
        gameState.highScore = parseInt(savedHighScore);
    }
    
    // Load leaderboard
    const savedLeaderboard = localStorage.getItem('akhirBulanLeaderboard');
    if (savedLeaderboard) {
        gameState.leaderboard = JSON.parse(savedLeaderboard);
    } else {
        gameState.leaderboard = [];
    }
}

// Save settings to localStorage
function saveSettings() {
    localStorage.setItem('akhirBulanSettings', JSON.stringify(gameSettings));
}

// Save high score
function saveHighScore() {
    localStorage.setItem('akhirBulanHighScore', gameState.highScore.toString());
}

// Add score to leaderboard
function addToLeaderboard(score, level) {
    const entry = {
        score: score,
        level: level,
        date: new Date().toLocaleDateString('id-ID')
    };
    
    gameState.leaderboard.push(entry);
    gameState.leaderboard.sort((a, b) => b.score - a.score);
    gameState.leaderboard = gameState.leaderboard.slice(0, 10); // Keep top 10
    
    localStorage.setItem('akhirBulanLeaderboard', JSON.stringify(gameState.leaderboard));
    
    // Check if this is a new top 10 entry
    const isNewRecord = gameState.leaderboard.findIndex(e => e.score === score && e.level === level) !== -1;
    return isNewRecord;
}

// Display leaderboard
function displayLeaderboard() {
    const leaderboardList = document.getElementById('leaderboard-list');
    if (!leaderboardList) return;
    
    if (gameState.leaderboard.length === 0) {
        leaderboardList.innerHTML = `<p class="leaderboard-empty" data-translate="leaderboard_empty">${translations[gameSettings.language].leaderboard_empty}</p>`;
        return;
    }
    
    let html = '<table class="leaderboard-table"><thead><tr>';
    html += `<th data-translate="leaderboard_rank">${translations[gameSettings.language].leaderboard_rank}</th>`;
    html += `<th data-translate="leaderboard_score">${translations[gameSettings.language].leaderboard_score}</th>`;
    html += `<th data-translate="leaderboard_level">${translations[gameSettings.language].leaderboard_level}</th>`;
    html += '</tr></thead><tbody>';
    
    gameState.leaderboard.forEach((entry, index) => {
        const rankClass = index < 3 ? `rank-${index + 1}` : '';
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '';
        html += `<tr class="${rankClass}">`;
        html += `<td>${medal} ${index + 1}</td>`;
        html += `<td>${entry.score.toLocaleString()}</td>`;
        html += `<td>${entry.level}</td>`;
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    leaderboardList.innerHTML = html;
}

// Apply settings to game config
function applySettings() {
    // Difficulty
    switch(gameSettings.difficulty) {
        case 'easy':
            CONFIG.ENEMY_COUNT = 3;
            CONFIG.ENEMY_SPEED = 300;
            gameSettings.scoreMultiplier = 0.8;
            break;
        case 'normal':
            CONFIG.ENEMY_COUNT = 4;
            CONFIG.ENEMY_SPEED = 250;
            gameSettings.scoreMultiplier = 1;
            break;
        case 'hard':
            CONFIG.ENEMY_COUNT = 5;
            CONFIG.ENEMY_SPEED = 180;
            gameSettings.scoreMultiplier = 2;
            break;
    }
}

// ==============================================
// GAME STATE
// ==============================================

const gameState = {
    score: 0,
    highScore: 0,
    leaderboard: [],
    level: 1,
    lives: CONFIG.INITIAL_LIVES,
    timeRemaining: CONFIG.LEVEL_TIME_LIMIT,
    levelStartTime: 0,
    status: 'normal',
    isRunning: false,
    isPowered: false,
    powerTimer: null,
    timerInterval: null,
    player: { x: 1, y: 1, direction: 'right', targetX: 1, targetY: 1, renderX: 1, renderY: 1 },
    enemies: [],
    items: [],
    powerItems: [],
    maze: [],
    totalItems: 0,
    collectedItems: 0,
    animationFrame: null,
    lastMoveTime: 0,
    enemyMoveTime: 0
};

// ==============================================
// MAZE GENERATION
// ==============================================

function createMaze(level) {
    const width = CONFIG.CANVAS_WIDTH;
    const height = CONFIG.CANVAS_HEIGHT;

    // 0 = path, 1 = wall
    const maze = Array(height).fill(0).map(() => Array(width).fill(0));

    // Create border walls
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            if (x === 0 || y === 0 || x === width - 1 || y === height - 1) {
                maze[y][x] = 1;
            }
        }
    }

    // Create internal walls (pattern based on level)
    if (level === 1) {
        // Simple pattern for level 1
        for (let y = 3; y < height - 3; y += 4) {
            for (let x = 3; x < width - 3; x += 4) {
                maze[y][x] = 1;
                maze[y][x + 1] = 1;
                maze[y + 1][x] = 1;
            }
        }

        // Add some horizontal walls
        for (let x = 5; x < width - 5; x += 2) {
            maze[10][x] = 1;
        }
    } else if (level === 2) {
        // More complex pattern for level 2
        for (let y = 2; y < height - 2; y += 3) {
            for (let x = 2; x < width - 2; x += 3) {
                maze[y][x] = 1;
                if (x + 1 < width - 1) maze[y][x + 1] = 1;
                if (y + 1 < height - 1) maze[y + 1][x] = 1;
            }
        }

        // Add vertical corridors
        for (let y = 5; y < height - 5; y += 2) {
            maze[y][8] = 1;
            maze[y][12] = 1;
        }
    } else if (level === 3) {
        // Complex maze with rooms
        for (let y = 2; y < height - 2; y += 2) {
            for (let x = 2; x < width - 2; x += 2) {
                if (Math.random() > 0.3) {
                    maze[y][x] = 1;
                }
            }
        }
        // Add some long corridors
        for (let x = 4; x < width - 4; x++) {
            if (x % 3 !== 0) maze[7][x] = 1;
            if (x % 3 !== 1) maze[14][x] = 1;
        }
    } else if (level === 4) {
        // Very complex with tight spaces
        for (let y = 2; y < height - 2; y++) {
            for (let x = 2; x < width - 2; x++) {
                if ((x + y) % 3 === 0 && Math.random() > 0.2) {
                    maze[y][x] = 1;
                }
            }
        }
        // Create diagonal patterns
        for (let i = 3; i < Math.min(width, height) - 3; i++) {
            if (i % 2 === 0) {
                maze[i][i] = 1;
                maze[i][width - i - 1] = 1;
            }
        }
    } else {
        // Level 5 - Maximum difficulty
        for (let y = 2; y < height - 2; y++) {
            for (let x = 2; x < width - 2; x++) {
                if (Math.random() > 0.25) {
                    maze[y][x] = 1;
                }
            }
        }
        // Ensure some paths exist
        for (let y = 1; y < height - 1; y += 3) {
            for (let x = 1; x < width - 1; x++) {
                maze[y][x] = 0;
            }
        }
        for (let x = 1; x < width - 1; x += 3) {
            for (let y = 1; y < height - 1; y++) {
                maze[y][x] = 0;
            }
        }
    }

    // Ensure starting position is clear
    maze[1][1] = 0;
    maze[1][2] = 0;
    maze[2][1] = 0;

    return maze;
}

// ==============================================
// ITEM GENERATION
// ==============================================

function placeItems(maze) {
    const items = [];
    const powerItems = [];

    for (let y = 1; y < maze.length - 1; y++) {
        for (let x = 1; x < maze[0].length - 1; x++) {
            if (maze[y][x] === 0) {
                // Skip starting position
                if (x === 1 && y === 1) continue;

                // 10% chance for power item in good positions
                if (Math.random() < 0.05 && x > 3 && y > 3) {
                    powerItems.push({ x, y, type: 'power' });
                }
                // 70% chance for regular item
                else if (Math.random() < 0.7) {
                    items.push({
                        x,
                        y,
                        type: Math.random() > 0.5 ? 'food' : 'money'
                    });
                }
            }
        }
    }

    return { items, powerItems };
}

// ==============================================
// ENEMY GENERATION
// ==============================================

function createEnemies(maze, level) {
    const enemies = [];
    const spawnPoints = [
        { x: CONFIG.CANVAS_WIDTH - 2, y: 1 },
        { x: CONFIG.CANVAS_WIDTH - 2, y: CONFIG.CANVAS_HEIGHT - 2 },
        { x: 1, y: CONFIG.CANVAS_HEIGHT - 2 }
    ];

    const enemyTypes = ['deadline', 'clock', 'stress'];

    // Always create exactly 3 enemies, one of each type
    for (let i = 0; i < 3; i++) {
        const spawn = spawnPoints[i];
        enemies.push({
            x: spawn.x,
            y: spawn.y,
            targetX: spawn.x,
            targetY: spawn.y,
            renderX: spawn.x,
            renderY: spawn.y,
            direction: ['up', 'down', 'left', 'right'][Math.floor(Math.random() * 4)],
            type: enemyTypes[i],
            moveCounter: 0
        });
    }

    return enemies;
}

// ==============================================
// CANVAS DRAWING
// ==============================================

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

function initCanvas() {
    canvas.width = CONFIG.CANVAS_WIDTH * CONFIG.TILE_SIZE;
    canvas.height = CONFIG.CANVAS_HEIGHT * CONFIG.TILE_SIZE;
}

function drawMaze() {
    const maze = gameState.maze;

    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[0].length; x++) {
            if (maze[y][x] === 1) {
                // Draw wall
                ctx.fillStyle = '#3a2f2f';
                ctx.fillRect(
                    x * CONFIG.TILE_SIZE,
                    y * CONFIG.TILE_SIZE,
                    CONFIG.TILE_SIZE,
                    CONFIG.TILE_SIZE
                );

                // Wall border
                ctx.strokeStyle = '#4a3f3f';
                ctx.lineWidth = 2;
                ctx.strokeRect(
                    x * CONFIG.TILE_SIZE,
                    y * CONFIG.TILE_SIZE,
                    CONFIG.TILE_SIZE,
                    CONFIG.TILE_SIZE
                );
            } else {
                // Draw floor
                ctx.fillStyle = '#1a1a1a';
                ctx.fillRect(
                    x * CONFIG.TILE_SIZE,
                    y * CONFIG.TILE_SIZE,
                    CONFIG.TILE_SIZE,
                    CONFIG.TILE_SIZE
                );
            }
        }
    }
}

function drawItems() {
    // Draw regular items
    gameState.items.forEach(item => {
        const centerX = item.x * CONFIG.TILE_SIZE + CONFIG.TILE_SIZE / 2;
        const centerY = item.y * CONFIG.TILE_SIZE + CONFIG.TILE_SIZE / 2;

        if (item.type === 'food') {
            // Nasi bungkus emoji 🍱
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('🍱', centerX, centerY);
        } else {
            // Uang receh emoji 💵
            ctx.font = '16px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('💵', centerX, centerY);
        }
    });

    // Draw power items
    gameState.powerItems.forEach(item => {
        const centerX = item.x * CONFIG.TILE_SIZE + CONFIG.TILE_SIZE / 2;
        const centerY = item.y * CONFIG.TILE_SIZE + CONFIG.TILE_SIZE / 2;

        // Kopi sachet emoji ☕
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // Add glow effect
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur = 10;
        ctx.fillText('☕', centerX, centerY);
        ctx.shadowBlur = 0;
    });
}

function drawPlayer() {
    const player = gameState.player;
    // Use renderX and renderY for smooth interpolation
    const centerX = player.renderX * CONFIG.TILE_SIZE + CONFIG.TILE_SIZE / 2;
    const centerY = player.renderY * CONFIG.TILE_SIZE + CONFIG.TILE_SIZE / 2;

    // Background circle untuk membedakan player
    ctx.fillStyle = gameState.isPowered ? '#4a9eff' : '#ffd700';
    ctx.shadowColor = gameState.isPowered ? '#4a9eff' : '#ffd700';
    ctx.shadowBlur = gameState.isPowered ? 20 : 12;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Border circle
    ctx.strokeStyle = gameState.isPowered ? '#6ab0ff' : '#ffed4e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
    ctx.stroke();

    // Player icon - menggunakan emoji wajah tersenyum yang lebih terlihat
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#000000';
    ctx.fillText('😊', centerX, centerY);
}

function drawEnemies() {
    gameState.enemies.forEach(enemy => {
        // Use renderX and renderY for smooth interpolation
        const centerX = enemy.renderX * CONFIG.TILE_SIZE + CONFIG.TILE_SIZE / 2;
        const centerY = enemy.renderY * CONFIG.TILE_SIZE + CONFIG.TILE_SIZE / 2;

        let emoji = '';
        let bgColor = '';
        let borderColor = '';
        let glowColor = '';
        
        // Choose emoji and colors based on enemy type
        if (enemy.type === 'deadline') {
            emoji = '📕'; // Buku merah (lebih jelas dari 📚)
            bgColor = '#ff4444'; // Merah terang
            borderColor = '#ff6666';
            glowColor = '#ff4444';
        } else if (enemy.type === 'clock') {
            emoji = '⏰'; // Alarm clock
            bgColor = '#ff8844'; // Orange
            borderColor = '#ffaa66';
            glowColor = '#ff8844';
        } else {
            emoji = '😱'; // Wajah ketakutan (lebih dramatis)
            bgColor = '#dd44dd'; // Ungu/magenta
            borderColor = '#ee66ee';
            glowColor = '#dd44dd';
        }
        
        // If player is powered, enemies look scared with different color
        if (gameState.isPowered) {
            emoji = '😨'; // Takut!
            bgColor = '#666688'; // Abu-abu kebiruan
            borderColor = '#8888aa';
            glowColor = '#666688';
        }

        // Draw background circle
        ctx.fillStyle = bgColor;
        ctx.shadowColor = glowColor;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Draw border
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 11, 0, Math.PI * 2);
        ctx.stroke();

        // Draw enemy emoji
        ctx.font = '18px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#000000';
        ctx.fillText(emoji, centerX, centerY);
    });
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawItems();
    drawEnemies();
    drawPlayer();
}

// ==============================================
// GAME LOGIC
// ==============================================

function canMove(x, y) {
    if (x < 0 || y < 0 || x >= CONFIG.CANVAS_WIDTH || y >= CONFIG.CANVAS_HEIGHT) {
        return false;
    }
    return gameState.maze[y][x] === 0;
}

function movePlayer(direction) {
    const player = gameState.player;
    let newX = player.x;
    let newY = player.y;

    switch (direction) {
        case 'up': newY--; break;
        case 'down': newY++; break;
        case 'left': newX--; break;
        case 'right': newX++; break;
    }

    if (canMove(newX, newY)) {
        player.x = newX;
        player.y = newY;
        player.targetX = newX;
        player.targetY = newY;
        player.direction = direction;

        checkItemCollection();
        checkEnemyCollision();
    }
}

function checkItemCollection() {
    const player = gameState.player;

    // Check regular items
    for (let i = gameState.items.length - 1; i >= 0; i--) {
        const item = gameState.items[i];
        if (item.x === player.x && item.y === player.y) {
            gameState.items.splice(i, 1);
            gameState.collectedItems++;
            const baseScore = item.type === 'food' ? 10 : 5;
            gameState.score += baseScore;
            playSound('collect');
            updateUI();

            // Check win condition
            if (gameState.collectedItems >= gameState.totalItems) {
                winGame();
            }
        }
    }

    // Check power items
    for (let i = gameState.powerItems.length - 1; i >= 0; i--) {
        const item = gameState.powerItems[i];
        if (item.x === player.x && item.y === player.y) {
            gameState.powerItems.splice(i, 1);
            gameState.score += 50;
            playSound('powerup');
            activatePower();
            updateUI();
        }
    }
}

function activatePower() {
    gameState.isPowered = true;
    const lang = gameSettings.language;
    gameState.status = translations[lang].status_powered;
    updateUI();

    if (gameState.powerTimer) {
        clearTimeout(gameState.powerTimer);
    }

    gameState.powerTimer = setTimeout(() => {
        gameState.isPowered = false;
        gameState.status = translations[gameSettings.language].status_normal;
        updateUI();
    }, CONFIG.POWER_DURATION);
}

function moveEnemies() {
    gameState.enemies.forEach(enemy => {
        const directions = ['up', 'down', 'left', 'right'];

        // Simple AI: try to move towards player occasionally
        if (Math.random() < 0.3 && !gameState.isPowered) {
            const dx = gameState.player.x - enemy.x;
            const dy = gameState.player.y - enemy.y;

            if (Math.abs(dx) > Math.abs(dy)) {
                enemy.direction = dx > 0 ? 'right' : 'left';
            } else {
                enemy.direction = dy > 0 ? 'down' : 'up';
            }
        }

        let newX = enemy.x;
        let newY = enemy.y;

        switch (enemy.direction) {
            case 'up': newY--; break;
            case 'down': newY++; break;
            case 'left': newX--; break;
            case 'right': newX++; break;
        }

        // If can't move in current direction, pick random direction
        if (!canMove(newX, newY)) {
            enemy.direction = directions[Math.floor(Math.random() * 4)];
            return;
        }

        enemy.x = newX;
        enemy.y = newY;
        enemy.targetX = newX;
        enemy.targetY = newY;
    });

    checkEnemyCollision();
}

function checkEnemyCollision() {
    const player = gameState.player;

    for (const enemy of gameState.enemies) {
        if (enemy.x === player.x && enemy.y === player.y) {
            if (gameState.isPowered) {
                // Player is powered, enemy is defeated (respawn enemy)
                const spawnPoints = [
                    { x: CONFIG.CANVAS_WIDTH - 2, y: 1 },
                    { x: CONFIG.CANVAS_WIDTH - 2, y: CONFIG.CANVAS_HEIGHT - 2 },
                    { x: 1, y: CONFIG.CANVAS_HEIGHT - 2 }
                ];
                const spawn = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
                enemy.x = spawn.x;
                enemy.y = spawn.y;
                enemy.targetX = spawn.x;
                enemy.targetY = spawn.y;
                enemy.renderX = spawn.x;
                enemy.renderY = spawn.y;
                gameState.score += 100;
                playSound('defeat');
                updateUI();
            } else {
                // Player is caught - lose a life
                loseLife();
            }
        }
    }
}

// ==============================================
// INPUT HANDLING
// ==============================================

const keys = {};

document.addEventListener('keydown', (e) => {
    if (!gameState.isRunning) return;

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
        keys[e.key] = true;
    }
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function handleInput(currentTime) {
    if (currentTime - gameState.lastMoveTime < CONFIG.PLAYER_SPEED) {
        return;
    }

    if (keys['ArrowUp']) {
        movePlayer('up');
        gameState.lastMoveTime = currentTime;
    } else if (keys['ArrowDown']) {
        movePlayer('down');
        gameState.lastMoveTime = currentTime;
    } else if (keys['ArrowLeft']) {
        movePlayer('left');
        gameState.lastMoveTime = currentTime;
    } else if (keys['ArrowRight']) {
        movePlayer('right');
        gameState.lastMoveTime = currentTime;
    }
}

// ==============================================
// GAME LOOP
// ==============================================

function gameLoop(currentTime) {
    if (!gameState.isRunning) return;

    handleInput(currentTime);

    // Smooth player interpolation
    const player = gameState.player;
    player.renderX += (player.targetX - player.renderX) * CONFIG.INTERPOLATION_SPEED;
    player.renderY += (player.targetY - player.renderY) * CONFIG.INTERPOLATION_SPEED;

    // Snap to target if very close
    if (Math.abs(player.renderX - player.targetX) < 0.01) player.renderX = player.targetX;
    if (Math.abs(player.renderY - player.targetY) < 0.01) player.renderY = player.targetY;

    // Smooth enemy interpolation
    gameState.enemies.forEach(enemy => {
        enemy.renderX += (enemy.targetX - enemy.renderX) * CONFIG.INTERPOLATION_SPEED;
        enemy.renderY += (enemy.targetY - enemy.renderY) * CONFIG.INTERPOLATION_SPEED;
        
        // Snap to target if very close
        if (Math.abs(enemy.renderX - enemy.targetX) < 0.01) enemy.renderX = enemy.targetX;
        if (Math.abs(enemy.renderY - enemy.targetY) < 0.01) enemy.renderY = enemy.targetY;
    });

    // Move enemies
    if (currentTime - gameState.enemyMoveTime > CONFIG.ENEMY_SPEED) {
        moveEnemies();
        gameState.enemyMoveTime = currentTime;
    }

    render();
    gameState.animationFrame = requestAnimationFrame(gameLoop);
}

// ==============================================
// GAME STATES
// ==============================================

function startGame() {
    // Initialize game state
    gameState.maze = createMaze(gameState.level);
    const { items, powerItems } = placeItems(gameState.maze);
    gameState.items = items;
    gameState.powerItems = powerItems;
    gameState.totalItems = items.length;
    gameState.collectedItems = 0;
    gameState.enemies = createEnemies(gameState.maze, gameState.level);
    gameState.player = { x: 1, y: 1, direction: 'right', targetX: 1, targetY: 1, renderX: 1, renderY: 1 };
    gameState.isPowered = false;
    gameState.status = translations[gameSettings.language].status_normal;
    gameState.isRunning = true;
    gameState.lastMoveTime = 0;
    gameState.enemyMoveTime = 0;

    updateUI();
    showScreen('game-screen');
    render();
    startTimer();
    startBackgroundMusic();
    gameState.animationFrame = requestAnimationFrame(gameLoop);
}

function loseLife() {
    gameState.lives--;
    
    if (gameState.lives <= 0) {
        // No more lives - game over
        gameOver();
    } else {
        // Still have lives - stay at current position
        // Reset power-up if active
        gameState.isPowered = false;
        gameState.status = translations[gameSettings.language].status_normal;
        if (gameState.powerTimer) {
            clearTimeout(gameState.powerTimer);
        }
        
        // Brief invulnerability by making player invisible for a moment
        playSound('gameover');
        updateUI();
        
        // Continue game without interruption
    }
}

function gameOver() {
    gameState.isRunning = false;
    if (gameState.animationFrame) {
        cancelAnimationFrame(gameState.animationFrame);
    }
    if (gameState.powerTimer) {
        clearTimeout(gameState.powerTimer);
    }
    
    stopTimer();
    
    // Update high score
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        saveHighScore();
    }
    
    // Add to leaderboard
    addToLeaderboard(gameState.score, gameState.level);

    stopBackgroundMusic();
    playSound('gameover');
    document.getElementById('final-score').textContent = gameState.score;
    showScreen('gameover-screen');
}

function winGame() {
    gameState.isRunning = false;
    if (gameState.animationFrame) {
        cancelAnimationFrame(gameState.animationFrame);
    }
    if (gameState.powerTimer) {
        clearTimeout(gameState.powerTimer);
    }
    
    stopTimer();
    
    // Calculate and apply bonuses
    const bonus = calculateTimeBonus();
    gameState.score += bonus.total;
    
    // Update high score
    if (gameState.score > gameState.highScore) {
        gameState.highScore = gameState.score;
        saveHighScore();
    }
    
    // Add to leaderboard
    const isNewRecord = addToLeaderboard(gameState.score, gameState.level);

    stopBackgroundMusic();
    playSound('win');
    document.getElementById('win-score').textContent = gameState.score;
    
    // Display bonus info
    const bonusInfo = document.getElementById('bonus-info');
    if (bonusInfo) {
        let bonusText = '';
        if (bonus.timeBonus > 0) {
            const timeBonusMsg = translations[gameSettings.language].time_bonus.replace('{points}', bonus.timeBonus);
            bonusText += `<p>${timeBonusMsg}</p>`;
        }
        if (bonus.perfectBonus > 0) {
            const perfectMsg = translations[gameSettings.language].perfect_clear.replace('{points}', bonus.perfectBonus);
            bonusText += `<p>${perfectMsg}</p>`;
        }
        bonusInfo.innerHTML = bonusText;
    }
    
    // Check if final level completed
    const continueButton = document.getElementById('continue-button');
    if (gameState.level >= CONFIG.MAX_LEVEL) {
        // Hide continue button on final level
        if (continueButton) continueButton.style.display = 'none';
    } else {
        // Show continue button for other levels
        if (continueButton) continueButton.style.display = 'inline-block';
    }
    
    showScreen('win-screen');
}

function restartGame() {
    gameState.score = 0;
    gameState.level = 1;
    gameState.lives = CONFIG.INITIAL_LIVES;
    startGame();
}

function nextLevel() {
    gameState.level++;
    // Add bonus life for completing level (max 5 lives)
    gameState.lives = Math.min(gameState.lives + 1, CONFIG.MAX_LIVES);
    startGame();
}

// ==============================================
// UI FUNCTIONS
// ==============================================

function updateUI() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('level').textContent = gameState.level;
    
    // Display hearts for lives
    const hearts = '❤️'.repeat(gameState.lives);
    document.getElementById('lives').textContent = hearts;
    
    // Update timer
    if (document.getElementById('timer')) {
        document.getElementById('timer').textContent = gameState.timeRemaining;
    }
}

function updateHighScoreDisplay() {
    const highScoreElement = document.getElementById('high-score-value');
    if (highScoreElement) {
        highScoreElement.textContent = gameState.highScore;
    }
}

function startTimer() {
    gameState.timeRemaining = CONFIG.LEVEL_TIME_LIMIT;
    gameState.levelStartTime = Date.now();
    
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }
    
    gameState.timerInterval = setInterval(() => {
        if (!gameState.isRunning) return;
        
        gameState.timeRemaining--;
        updateUI();
        
        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            loseLife();
        }
    }, 1000);
}

function stopTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
}

function calculateTimeBonus() {
    const timeLeft = gameState.timeRemaining;
    const timeBonus = timeLeft * 10; // 10 points per second
    const perfectBonus = (gameState.lives === CONFIG.INITIAL_LIVES) ? 500 : 0;
    
    return {
        timeBonus: timeBonus,
        perfectBonus: perfectBonus,
        total: timeBonus + perfectBonus
    };
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Update settings UI from saved values
function updateSettingsUI() {
    document.getElementById('language-select').value = gameSettings.language;
    document.getElementById('volume-slider').value = gameSettings.volume;
    document.getElementById('volume-value').textContent = gameSettings.volume + '%';
}

// Update pause menu settings
function updatePauseSettingsUI() {
    document.getElementById('pause-language').value = gameSettings.language;
    document.getElementById('pause-volume').value = gameSettings.volume;
    document.getElementById('pause-volume-value').textContent = gameSettings.volume + '%';
}

// Pause game
function pauseGame() {
    if (!gameState.isRunning) return;
    
    gameState.isRunning = false;
    if (gameState.animationFrame) {
        cancelAnimationFrame(gameState.animationFrame);
    }
    
    stopTimer();
    stopBackgroundMusic();
    updatePauseSettingsUI();
    document.getElementById('pause-overlay').classList.add('active');
}

// Resume game
function resumeGame() {
    document.getElementById('pause-overlay').classList.remove('active');
    
    if (!gameState.isRunning) {
        gameState.isRunning = true;
        gameState.lastMoveTime = 0;
        gameState.enemyMoveTime = 0;
        startTimer();
        startBackgroundMusic();
        gameState.animationFrame = requestAnimationFrame(gameLoop);
    }
}

// Handle settings changes
function setupSettingsHandlers() {
    // Main settings language
    document.getElementById('language-select').addEventListener('change', (e) => {
        gameSettings.language = e.target.value;
        saveSettings();
        applyTranslations();
        // Update pause menu language select
        document.getElementById('pause-language').value = gameSettings.language;
    });

    // Main settings volume
    document.getElementById('volume-slider').addEventListener('input', (e) => {
        gameSettings.volume = parseInt(e.target.value);
        document.getElementById('volume-value').textContent = gameSettings.volume + '%';
        // Sync with pause menu volume
        document.getElementById('pause-volume').value = gameSettings.volume;
        document.getElementById('pause-volume-value').textContent = gameSettings.volume + '%';
        updateMusicVolume();
        saveSettings();
    });

    // Pause menu language
    document.getElementById('pause-language').addEventListener('change', (e) => {
        gameSettings.language = e.target.value;
        saveSettings();
        applyTranslations();
        // Update main settings language select
        document.getElementById('language-select').value = gameSettings.language;
    });

    // Pause menu volume
    document.getElementById('pause-volume').addEventListener('input', (e) => {
        gameSettings.volume = parseInt(e.target.value);
        document.getElementById('pause-volume-value').textContent = gameSettings.volume + '%';
        // Sync with main settings volume
        document.getElementById('volume-slider').value = gameSettings.volume;
        document.getElementById('volume-value').textContent = gameSettings.volume + '%';
        updateMusicVolume();
        saveSettings();
    });
}

// ==============================================
// EVENT LISTENERS
// ==============================================

// Main Menu Navigation
document.getElementById('play-button').addEventListener('click', () => {
    showScreen('opening-screen');
});

document.getElementById('tutorial-button').addEventListener('click', () => {
    showScreen('tutorial-screen');
});

document.getElementById('about-button').addEventListener('click', () => {
    showScreen('about-screen');
});

document.getElementById('leaderboard-button').addEventListener('click', () => {
    displayLeaderboard();
    showScreen('leaderboard-screen');
});

document.getElementById('settings-button').addEventListener('click', () => {
    updateSettingsUI();
    showScreen('settings-screen');
});

document.getElementById('back-from-tutorial').addEventListener('click', () => {
    showScreen('main-menu');
});

document.getElementById('back-from-about').addEventListener('click', () => {
    showScreen('main-menu');
});

document.getElementById('back-from-leaderboard').addEventListener('click', () => {
    showScreen('main-menu');
});

document.getElementById('back-from-settings').addEventListener('click', () => {
    showScreen('main-menu');
});

// Game Flow
document.getElementById('start-button').addEventListener('click', () => {
    startGame();
});

document.getElementById('restart-button').addEventListener('click', () => {
    restartGame();
});

document.getElementById('continue-button').addEventListener('click', () => {
    nextLevel();
});

document.getElementById('restart-win-button').addEventListener('click', () => {
    restartGame();
});

// Pause menu controls
document.getElementById('pause-button').addEventListener('click', () => {
    pauseGame();
});

document.getElementById('resume-button').addEventListener('click', () => {
    resumeGame();
});

document.getElementById('restart-from-pause').addEventListener('click', () => {
    document.getElementById('pause-overlay').classList.remove('active');
    restartGame();
});

document.getElementById('menu-from-pause').addEventListener('click', () => {
    document.getElementById('pause-overlay').classList.remove('active');
    gameState.isRunning = false;
    if (gameState.animationFrame) {
        cancelAnimationFrame(gameState.animationFrame);
    }
    if (gameState.powerTimer) {
        clearTimeout(gameState.powerTimer);
    }
    stopBackgroundMusic();
    showScreen('main-menu');
});

// Keyboard shortcut for pause (ESC key)
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && gameState.isRunning) {
        pauseGame();
    } else if (e.key === 'Escape' && document.getElementById('pause-overlay').classList.contains('active')) {
        resumeGame();
    }
});

// ==============================================
// INITIALIZATION
// ==============================================

loadSettings();
applyTranslations();
setupSettingsHandlers();
initCanvas();
showScreen('main-menu');
