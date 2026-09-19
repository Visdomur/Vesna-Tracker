// DATABASE coming from Paimon.moe, ldshop.com, and Genshin Impact Wiki (Fandom)
const data = {
    "Ascension\u30fbLevel 90": [
        { name: "Vayuda Turquoise Gemstone", count: 6, img: "https://paimon.moe/images/items/vayuda_turquoise_gemstone.png" },
        { name: "Vayuda Turquoise Chunk", count: 9, img: "https://paimon.moe/images/items/vayuda_turquoise_chunk.png" },
        { name: "Vayuda Turquoise Fragment", count: 9, img: "https://paimon.moe/images/items/vayuda_turquoise_fragment.png" },
        { name: "Vayuda Turquoise Sliver", count: 1, img: "https://paimon.moe/images/items/vayuda_turquoise_sliver.png" },
        { name: "Chimeric Core", count: 18, description: "Aberrant Chimeric Monsters", img: "https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Chimeric_Core.png" },
        { name: "Chimeric Nucleus", count: 30, description: "Aberrant Chimeric Monsters", img: "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Item_Symbiotic_Chimeric_Nucleus.png" },
        { name: "Chimeric Nexus", count: 36, description: "Aberrant Chimeric Monsters", img: "https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Prime_Chimeric_Nexus.png" },
        { name: "Vagabond's Cracked Armor", count: 46, img: "https://paimon.moe/images/items/vagabonds_cracked_armor.png" },
        { name: "Golden Ferns", count: 168, img: "https://static.wikia.nocookie.net/gensin-impact/images/7/71/Item_Golden_Fern.png?format=original" },
        { name: "Wanderer's Advice", count: 3, img: "https://paimon.moe/images/items/wanderes_advice.png" },
        { name: "Hero's Wit", count: 418, img: "https://paimon.moe/images/items/heros_wit.png" },
        { name: "Mora", count: 2092400, img: "https://paimon.moe/images/items/mora.png" }
    ],
    "Talents": [
        { name: "Teachings of Glory", count: 9, description: "Relics of the Fallen Grace Domain", img: "https://static.wikia.nocookie.net/gensin-impact/images/b/b3/Item_Teachings_of_Glory.png?format=original" },
        { name: "Guide to Glory", count: 63, description: "Relics of the Fallen Grace Domain", img: "https://static.wikia.nocookie.net/gensin-impact/images/6/6b/Item_Guide_to_Glory.png?format=original" },
        { name: "Philosophies of Glory", count: 114, description: "Relics of the Fallen Grace Domain", img: "https://static.wikia.nocookie.net/gensin-impact/images/4/4a/Item_Philosophies_of_Glory.png?format=original" },
        { name: "Crown of Insight", count: 3, img: "https://paimon.moe/images/items/crown_of_insight.png" },
        { name: "Profaned Sprout", count: 18, description: "Exalted Master of the Heretical Path - Dottore II", img: "https://paimon.moe/images/items/profaned_sprout.png" },
        { name: "Ethereal Glimmershard", count: 18, description: "Fae of Crystalline Flesh", img: "https://paimon.moe/images/items/ethereal_glimmershard.png" },
        { name: "Ethereal Crystal", count: 66, description: "Fae of Crystalline Flesh", img: "https://paimon.moe/images/items/ethereal_crystal.png" },
        { name: "Ethereal Crystalscale Stone", count: 93, description: "Fae of Crystalline Flesh", img: "https://paimon.moe/images/items/ethereal_crystalscale_stone.png" },
        { name: "Mora", count: 4957500, img: "https://paimon.moe/images/items/mora.png" }
    ],
    "Signature Weapon\u30fbBeyond the Chrysalis": [
        { name: "Rise of the Pale Star Army", count: 5, description: "Scars of Cursed Obsession Domain", img: "https://paimon.moe/images/items/rise_of_the_pale_star_army.png" },
        { name: "Muster of the Pale Star Army", count: 14, description: "Scars of Cursed Obsession Domain", img: "https://paimon.moe/images/items/muster_of_the_pale_star_army.png" },
        { name: "Clarion of the Pale Star Army", count: 14, description: "Scars of Cursed Obsession Domain", img: "https://paimon.moe/images/items/clarion_of_the_pale_star_army.png" },
        { name: "Triumph of the Pale Star Army", count: 6, description: "Scars of Cursed Obsession Domain", img: "https://paimon.moe/images/items/triumph_of_the_pale_star_army.png" },
        { name: "Chimeric Core", count: 23, description: "Aberrant Chimeric Monsters", img: "https://static.wikia.nocookie.net/gensin-impact/images/f/f1/Item_Chimeric_Core.png" },
        { name: "Chimeric Nucleus", count: 27, description: "Aberrant Chimeric Monsters", img: "https://static.wikia.nocookie.net/gensin-impact/images/f/fa/Item_Symbiotic_Chimeric_Nucleus.png" },
        { name: "Chimeric Nexus", count: 41, description: "Aberrant Chimeric Monsters", img: "https://static.wikia.nocookie.net/gensin-impact/images/c/c3/Item_Prime_Chimeric_Nexus.png" },
        { name: "Hollow Root of Life", count: 15, description: "Fae of Crystalline Flesh", img: "https://paimon.moe/images/items/hollow_root_of_life.png" },
        { name: "Sprout Node of Life", count: 23, description: "Fae of Crystalline Flesh", img: "https://paimon.moe/images/items/sprout_node_of_life.png" },
        { name: "Coiled Core of Life", description: "Fae of Crystalline Flesh", count: 27, img: "https://paimon.moe/images/items/coiled_core_of_life.png" },
        { name: "Mystic Enhancement Ore", count: 709, img: "https://paimon.moe/images/items/mystic_enhancement_ore.png" },
        { name: "Mora", count: 753000, img: "https://paimon.moe/images/items/mora.png" }
    ]
};

const restrictedItems = [];
const PREFIX = "Vesna-Preparation-Tracker";
const app = document.getElementById('app');
const statusEl = document.getElementById('save-status');
const exportGrid = document.getElementById('export-grid');

// CALIBRATION
const gridConfig = { top: 13.12, left: 35.9, width: 63, height: 83 };

function applyGridConfig() {
    exportGrid.style.top = gridConfig.top + '%';
    exportGrid.style.left = gridConfig.left + '%';
    exportGrid.style.width = gridConfig.width + '%';
    exportGrid.style.height = gridConfig.height + '%';
}

function render() {
    app.innerHTML = '';
    for (const [section, items] of Object.entries(data)) {
        const title = document.createElement('div');
        title.className = 'section-title';
        title.textContent = section;
        app.appendChild(title);
        const grid = document.createElement('div');
        grid.className = 'checklist-grid';
        items.forEach((item, index) => {
            const id = `${PREFIX}${section.split(' ')[0]}_${index}`;
            const isChecked = localStorage.getItem(id) === 'true';
            
            // CLICKABLE CARD
            const card = document.createElement('div');
            card.className = `card ${isChecked ? 'completed' : ''}`;
            
            // Click Logic
            card.onclick = (e) => {
                if (e.target.type !== 'checkbox' && e.target.tagName !== 'LABEL') {
                    const checkbox = document.getElementById(id);
                    checkbox.checked = !checkbox.checked;
                    toggle(id, checkbox);
                }
            };

            card.innerHTML = `
                <img src="${item.img}" class="item-icon" alt="${item.name}" onerror="this.src='https://paimon.moe/images/items/mora.png'">
                <div class="item-details">
                    <span class="item-name">${item.name}</span>
                    ${item.description ? `<span class="item-description">${item.description}</span>` : ''}
                    <div class="item-count">x ${item.count.toLocaleString()} ${item.note ? `<span class="badge">${item.note}</span>` : ''}</div>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="${id}" ${isChecked ? 'checked' : ''} onchange="toggle('${id}', this)">
                    <label for="${id}"></label>
                </div>`;
            grid.appendChild(card);
        });
        app.appendChild(grid);
    }
}

window.toggle = (id, el) => { localStorage.setItem(id, el.checked); render(); showSaveStatus(); };

// SAVINGS
window.saveSavings = () => {
    localStorage.setItem(PREFIX + 'primos', document.getElementById('primoInput').value);
    localStorage.setItem(PREFIX + 'fates', document.getElementById('fateInput').value);
};

function loadSavings() {
    document.getElementById('primoInput').value = localStorage.getItem(PREFIX + 'primos') || '';
    document.getElementById('fateInput').value = localStorage.getItem(PREFIX + 'fates') || '';
}

// RESET
document.getElementById('resetBtn').addEventListener('click', () => {
    if(confirm("Are you sure you want to reset all progress?")) {
        Object.keys(localStorage).forEach(k => { 
            if(k.startsWith(PREFIX)) localStorage.removeItem(k); 
        });
        render();
        loadSavings();
    }
});

// COUNTDOWN TIMER
function updateCountdown() {
    // Check if countdown element exists
    if (!document.getElementById('countdown')) return;
    
    // Target: Jan 14, 2026 11:00 AM GMT+8 (ISO 8601 format)
    const targetDate = new Date('2026-01-14T11:00:00+08:00').getTime();
    const now = new Date().getTime();
    const gap = targetDate - now;

    if (gap <= 0) {
        document.getElementById('countdown').innerHTML = "<div class='time-box' style='width:100%'><span>AVAILABLE NOW!</span></div>";
        return;
    }

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = d < 10 ? '0' + d : d;
    document.getElementById('hours').innerText = h < 10 ? '0' + h : h;
    document.getElementById('minutes').innerText = m < 10 ? '0' + m : m;
    document.getElementById('seconds').innerText = s < 10 ? '0' + s : s;
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately

// GENERATE CARD
document.getElementById('saveBtn').addEventListener('click', () => {
    const btn = document.getElementById('saveBtn');
    const originalText = btn.innerText;
    btn.innerText = "Processing...";

    // 1. Validation Check
    let invalidItems = [];
    for (const [section, items] of Object.entries(data)) {
        items.forEach((item, index) => {
            const id = `${PREFIX}${section.split(' ')[0]}_${index}`;
            if (localStorage.getItem(id) === 'true' && restrictedItems.includes(item.name)) {
                invalidItems.push(item.name);
            }
        });
    }

    if (invalidItems.length > 0) {
        alert(`⚠️ Cannot Generate Summary\n\nThe following items are UNRELEASED and cannot be obtained yet:\n\n- ${[...new Set(invalidItems)].join('\n- ')}\n\nPlease uncheck them to proceed.`);
        btn.innerText = originalText;
        return;
    }

    // 2. Setup Card
    applyGridConfig();
    const exportContainer = document.getElementById('export-container');
    exportContainer.style.display = 'block';

    // 3. Update Savings on Card
    document.getElementById('export-primo').innerText = document.getElementById('primoInput').value || "0";
    document.getElementById('export-fate').innerText = document.getElementById('fateInput').value || "0";

    // 4. Collect & Merge Data
    const collected = {};
    for (const [section, items] of Object.entries(data)) {
        items.forEach((item, index) => {
            const id = `${PREFIX}${section.split(' ')[0]}_${index}`;
            if (localStorage.getItem(id) === 'true') {
                if (collected[item.name]) {
                    collected[item.name].count += item.count;
                } else {
                    collected[item.name] = { name: item.name, count: item.count, img: item.img };
                }
            }
        });
    }

    exportGrid.innerHTML = '';
    const items = Object.values(collected);
    
    if (items.length === 0) { 
        alert("No items marked as done!"); 
        exportContainer.style.display = 'none';
        btn.innerText = originalText; 
        return; 
    }

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'export-card';
        div.innerHTML = `<img src="${item.img}"><span>${formatNumber(item.count)}</span>`;
        exportGrid.appendChild(div);
    });

    // 5. Render
    setTimeout(() => {
         html2canvas(exportContainer, {
            useCORS: true, 
            allowTaint: true, 
            scale: 1.5, 
            width: 1280, 
            height: 720
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = 'Vesna_Card.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
            btn.innerText = originalText;
            exportContainer.style.display = 'none'; 
        }).catch(err => {
            console.error(err);
            alert("Error: Please upload to a server/GitHub.");
            btn.innerText = originalText;
            exportContainer.style.display = 'none'; 
        });
    }, 200);
});

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return num.toLocaleString();
}
function showSaveStatus() { statusEl.style.opacity = '1'; setTimeout(() => { statusEl.style.opacity = '0'; }, 1500); }

// INITIALIZATION
applyGridConfig();
loadSavings();

render();
