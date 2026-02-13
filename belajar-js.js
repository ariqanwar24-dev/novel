const editor = document.getElementById('editor');
const btnHapus = document.getElementById('btn-hapus');
const btnDownload = document.getElementById('btn-download')
const charCount = document.getElementById('char-count')

// --- 2. LOGIKA NOTEPAD (Sistem Novel) ---

// Load tulisan terakhir pas web dibuka
editor.value = localStorage.getItem('novel_draft') || "";
charCount.innerText = editor.value.length;

// Simpan Otomatis setiap kali ngetik
editor.addEventListener('input', () => {
    localStorage.setItem('novel_draft', editor.value);
    charCount.innerText = editor.value.length;
});

// Fitur Download .txt
btnDownload.addEventListener('click', () => {
    const blob = new Blob([editor.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Novel_Oshi_Saya.txt';
    a.click();
});

// Hapus Draft
btnHapus.addEventListener('click', () => {
    if(confirm("Yakin mau hapus semua tulisan?")) {
        editor.value = "";
        localStorage.removeItem('novel_draft');
        charCount.innerText = 0;
    }
});

// --- 3. ANIMASI TYPED.JS (Judul Ngetik) ---
new Typed('#typed-title', {
    strings: ['Novel ^100 <span>Editor</span>', 'Oshi ^100 <span>Diary</span>'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true,
    showCursor: false
});

// --- 4. ANIMASI PARTICLES.JS (Partikel Merah) ---
particlesJS('particles-js', {
    "particles": {
        "number": { "value": 80 },
        "color": { "value": "#ff3e3e" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3 },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ff3e3e",
            "opacity": 0.4,
            "width": 1
        },
        "move": { "enable": true, "speed": 2 }
    },
    "interactivity": {
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        }
    }
});