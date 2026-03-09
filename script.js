// ===================================
// GLOBAL STATE MANAGEMENT
// ===================================

let trackerData = {
    totalProgress: 0,
    problemsSolved: 0,
    currentStreak: 0,
    weeklyProblems: 0,
    weeklyHours: 0,
    weeklyConcepts: 0,
    currentFocus: "Week 1: Python Deep Dive",
    lastVisit: null,
    achievements: {
        firstSolve: false,
        weekStreak: false,
        century: false,
        phase1Complete: false
    },
    phases: {
        phase1: {
            completed: 0,
            total: 140
        },
        phase2: {
            completed: 0,
            total: 120
        },
        phase3: {
            completed: 0,
            total: 190
        },
        bonus: {
            completed: 0,
            total: 6
        }
    },
    checkboxes: {}
};

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 SDE Tracker Initialized');
    
    // Load saved data
    loadProgress();
    
    // Setup navigation
    setupNavigation();
    
    // Update displays
    updateAllDisplays();
    
    // Check and update streak
    updateStreak();
    
    // Setup event listeners
    setupEventListeners();
    
    // Animate on load
    animateOnLoad();
});

// ===================================
// LOCAL STORAGE FUNCTIONS
// ===================================

function saveProgress() {
    // Save all checkbox states
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        trackerData.checkboxes[checkbox.id] = checkbox.checked;
    });
    
    // Calculate problems solved
    const problemCheckboxes = document.querySelectorAll('.problem-item input[type="checkbox"]:checked');
    trackerData.problemsSolved = problemCheckboxes.length;
    
    // Calculate topic checkboxes
    const topicCheckboxes = document.querySelectorAll('.topic-item input[type="checkbox"]:checked');
    
    // Update phase progress
    updatePhaseProgress();
    
    // Calculate total progress
    const totalTasks = 450; // Total LeetCode problems target
    trackerData.totalProgress = Math.round((trackerData.problemsSolved / totalTasks) * 100);
    
    // Save to localStorage
    localStorage.setItem('sdeTrackerData', JSON.stringify(trackerData));
    
    // Update displays
    updateAllDisplays();
    
    // Check achievements
    checkAchievements();
    
    console.log('💾 Progress saved:', trackerData);
}

function loadProgress() {
    const saved = localStorage.getItem('sdeTrackerData');
    
    if (saved) {
        trackerData = JSON.parse(saved);
        console.log('📂 Progress loaded:', trackerData);
        
        // Restore checkbox states
        Object.keys(trackerData.checkboxes).forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                checkbox.checked = trackerData.checkboxes[id];
            }
        });
    } else {
        console.log('📝 No saved progress found. Starting fresh!');
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset ALL progress? This cannot be undone!')) {
        localStorage.removeItem('sdeTrackerData');
        location.reload();
    }
}

function exportProgress() {
    const dataStr = JSON.stringify(trackerData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sde-tracker-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    alert('✅ Progress exported successfully!');
}

// ===================================
// NAVIGATION
// ===================================

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const phase = this.dataset.phase;
            switchPhase(phase);
        });
    });
}

function switchPhase(phaseId) {
    // Update nav active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`[data-phase="${phaseId}"]`).classList.add('active');
    
    // Update section visibility
    document.querySelectorAll('.phase-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(phaseId).classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===================================
// DISPLAY UPDATES
// ===================================

function updateAllDisplays() {
    // Header stats
    document.getElementById('totalProgress').textContent = trackerData.totalProgress + '%';
    document.getElementById('problemsSolved').textContent = `${trackerData.problemsSolved}/450`;
    document.getElementById('currentStreak').textContent = trackerData.currentStreak;
    
    // Dashboard
    document.getElementById('currentFocus').textContent = trackerData.currentFocus;
    document.getElementById('weeklyProblems').textContent = trackerData.weeklyProblems;
    document.getElementById('weeklyHours').textContent = trackerData.weeklyHours + 'h';
    document.getElementById('weeklyConcepts').textContent = trackerData.weeklyConcepts;
    
    // Phase progress bars
    updatePhaseProgressBars();
    
    // Update category progress
    updateCategoryProgress();
}

function updatePhaseProgress() {
    // Count completed problems per phase
    // Phase 1: Month 1-3 problems
    const phase1Checkboxes = document.querySelectorAll('[id^="prob-"], [id^="m1"], [id^="m2"], [id^="m3"]');
    let phase1Count = 0;
    phase1Checkboxes.forEach(cb => {
        if (cb.checked && cb.type === 'checkbox') phase1Count++;
    });
    trackerData.phases.phase1.completed = Math.min(phase1Count, trackerData.phases.phase1.total);
    
    // Similar logic for other phases (simplified for now)
    // You can expand this based on specific problem IDs
}

function updatePhaseProgressBars() {
    Object.keys(trackerData.phases).forEach(phaseKey => {
        const phase = trackerData.phases[phaseKey];
        const percentage = Math.round((phase.completed / phase.total) * 100);
        
        const progressBar = document.querySelector(`[data-phase-progress="${phaseKey}"]`);
        if (progressBar) {
            progressBar.style.width = percentage + '%';
            const textSpan = progressBar.parentElement.nextElementSibling;
            if (textSpan) {
                textSpan.textContent = `${phase.completed}/${phase.total} problems`;
            }
        }
    });
}

function updateCategoryProgress() {
    const categories = document.querySelectorAll('.category-card');
    
    categories.forEach(category => {
        const checkboxes = category.querySelectorAll('input[type="checkbox"]');
        const total = checkboxes.length;
        let completed = 0;
        
        checkboxes.forEach(cb => {
            if (cb.checked) completed++;
        });
        
        const progressSpan = category.querySelector('.category-progress');
        if (progressSpan) {
            progressSpan.textContent = `${completed}/${total}`;
        }
    });
}

// ===================================
// STREAK TRACKING
// ===================================

function updateStreak() {
    const today = new Date().toDateString();
    const lastVisit = trackerData.lastVisit;
    
    if (!lastVisit) {
        // First visit
        trackerData.currentStreak = 1;
        trackerData.lastVisit = today;
    } else if (lastVisit === today) {
        // Same day visit - no change
        return;
    } else {
        const lastDate = new Date(lastVisit);
        const todayDate = new Date(today);
        const diffTime = todayDate - lastDate;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            // Consecutive day
            trackerData.currentStreak++;
        } else {
            // Streak broken
            trackerData.currentStreak = 1;
        }
        
        trackerData.lastVisit = today;
    }
    
    saveProgress();
}

// ===================================
// ACHIEVEMENTS
// ===================================

function checkAchievements() {
    let newAchievement = false;
    
    // First Solve
    if (!trackerData.achievements.firstSolve && trackerData.problemsSolved >= 1) {
        trackerData.achievements.firstSolve = true;
        unlockBadge('first-solve');
        newAchievement = true;
    }
    
    // Week Streak
    if (!trackerData.achievements.weekStreak && trackerData.currentStreak >= 7) {
        trackerData.achievements.weekStreak = true;
        unlockBadge('week-streak');
        newAchievement = true;
    }
    
    // Century
    if (!trackerData.achievements.century && trackerData.problemsSolved >= 100) {
        trackerData.achievements.century = true;
        unlockBadge('century');
        newAchievement = true;
    }
    
    // Phase 1 Complete
    if (!trackerData.achievements.phase1Complete && trackerData.phases.phase1.completed >= trackerData.phases.phase1.total) {
        trackerData.achievements.phase1Complete = true;
        unlockBadge('phase1-complete');
        newAchievement = true;
    }
    
    if (newAchievement) {
        saveProgress();
    }
}

function unlockBadge(badgeId) {
    const badge = document.querySelector(`[data-badge="${badgeId}"]`);
    if (badge) {
        badge.classList.remove('locked');
        
        // Show celebration animation
        showAchievementNotification(badgeId);
    }
}

function showAchievementNotification(badgeId) {
    const messages = {
        'first-solve': '🎉 Achievement Unlocked: First Solve!',
        'week-streak': '🔥 Achievement Unlocked: 7-Day Streak!',
        'century': '💯 Achievement Unlocked: 100 Problems!',
        'phase1-complete': '✅ Achievement Unlocked: Phase 1 Complete!'
    };
    
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.textContent = messages[badgeId];
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
        color: var(--bg-primary);
        padding: 20px 30px;
        border-radius: 12px;
        font-weight: 700;
        font-size: 1.1rem;
        box-shadow: 0 8px 32px rgba(0, 255, 136, 0.5);
        animation: slideInRight 0.5s ease-out, slideOutRight 0.5s ease-in 3s;
        z-index: 1000;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3500);
}

// ===================================
// WEEK EXPANSION
// ===================================

function toggleWeek(headerElement) {
    const weekCard = headerElement.parentElement;
    const weekContent = weekCard.querySelector('.week-content');
    
    headerElement.classList.toggle('expanded');
    
    if (headerElement.classList.contains('expanded')) {
        weekContent.style.maxHeight = weekContent.scrollHeight + 'px';
    } else {
        weekContent.style.maxHeight = '0';
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

function setupEventListeners() {
    // Checkbox change listeners are handled inline with onchange="saveProgress()"
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + S to save
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            saveProgress();
            showNotification('💾 Progress saved!');
        }
        
        // Ctrl/Cmd + E to export
        if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
            e.preventDefault();
            exportProgress();
        }
    });
}

// ===================================
// ANIMATIONS
// ===================================

function animateOnLoad() {
    // Animate stats counting up
    animateValue('totalProgress', 0, trackerData.totalProgress, 1000);
    animateValue('problemsSolved', 0, trackerData.problemsSolved, 1000, '/450');
    animateValue('currentStreak', 0, trackerData.currentStreak, 800);
}

function animateValue(id, start, end, duration, suffix = '') {
    const element = document.getElementById(id);
    if (!element) return;
    
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        if (suffix) {
            element.textContent = Math.round(current) + suffix;
        } else if (id === 'totalProgress') {
            element.textContent = Math.round(current) + '%';
        } else {
            element.textContent = Math.round(current);
        }
    }, 16);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--bg-card);
        border: 1px solid var(--accent-primary);
        color: var(--text-primary);
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: var(--shadow-md);
        animation: slideInRight 0.3s ease-out, slideOutRight 0.3s ease-in 2s;
        z-index: 1000;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2300);
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

function updateFocus() {
    const newFocus = prompt('What are you currently focusing on?', trackerData.currentFocus);
    if (newFocus) {
        trackerData.currentFocus = newFocus;
        document.getElementById('currentFocus').textContent = newFocus;
        saveProgress();
    }
}

function incrementWeeklyStat(stat) {
    if (stat === 'problems') trackerData.weeklyProblems++;
    if (stat === 'hours') trackerData.weeklyHours++;
    if (stat === 'concepts') trackerData.weeklyConcepts++;
    saveProgress();
}

function resetWeeklyStats() {
    if (confirm('Reset weekly stats?')) {
        trackerData.weeklyProblems = 0;
        trackerData.weeklyHours = 0;
        trackerData.weeklyConcepts = 0;
        saveProgress();
    }
}

// ===================================
// ADD CUSTOM CSS ANIMATIONS
// ===================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .achievement-notification {
        animation: slideInRight 0.5s ease-out, slideOutRight 0.5s ease-in 3s;
    }
`;
document.head.appendChild(style);

// ===================================
// EXPORT FUNCTIONS TO GLOBAL SCOPE
// ===================================

window.saveProgress = saveProgress;
window.resetProgress = resetProgress;
window.exportProgress = exportProgress;
window.updateFocus = updateFocus;
window.toggleWeek = toggleWeek;
window.incrementWeeklyStat = incrementWeeklyStat;
window.resetWeeklyStats = resetWeeklyStats;

console.log('✅ SDE Tracker fully loaded!');
