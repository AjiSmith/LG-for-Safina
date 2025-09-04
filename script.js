  const nama = localStorage.getItem("authNama");
  if (!nama) {
    window.location.href = "auth.html";
  }   
   
    (function(){
      const c = document.getElementById('starfield');
      const ctx = c.getContext('2d');
      let w, h, stars;
      const STAR_COUNT = 120;
      function resize(){ w = c.width = window.innerWidth; h = c.height = window.innerHeight; init(); }
      function init(){
        stars = Array.from({length: STAR_COUNT}, () => ({
          x: Math.random()*w,
          y: Math.random()*h,
          r: Math.random()*1.2 + 0.4,
          a: Math.random()*1,
          v: 0.002 + Math.random()*0.003
        }));
      }
      function draw(){
        ctx.clearRect(0,0,w,h);
        for(const s of stars){
          s.a += s.v; const alpha = 0.3 + Math.sin(s.a)*0.3;
          ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.fill();
        }
        requestAnimationFrame(draw);
      }
      window.addEventListener('resize', resize);
      resize();
      draw();
    })();

    (function(){
      const el = document.getElementById('typewriter');
      const lines = [
        'Semua ini aku buat dengan penuh suka cita dan rasa terimakasih atas waktu yang telah kamu luangkan bersama aku.',
        'Doa dari aku untukmu "semoga langkahmu dipermudah, hatimu dijaga, mimpimu dipeluk semesta".',
        'Selamat ulang tahun Princess Terhebatku. Terima kasih sudah pernah jadi cerita baik dalam hari-hariku.'
      ];
      const cursor = document.createElement('span'); cursor.className = 'cursor';

      let i = 0, j = 0, deleting = false;
      function tick(){
        const current = lines[i];
        if(!deleting){
          el.textContent = current.slice(0, j++);
          el.appendChild(cursor);
          if(j > current.length + 10){ deleting = true; }
        } else {
          el.textContent = current.slice(0, j--);
          el.appendChild(cursor);
          if(j < 0){ deleting = false; i = (i+1) % lines.length; }
        }
        const speed = deleting ? 30 + Math.random()*40 : 50 + Math.random()*60;
        setTimeout(tick, speed);
      }
      tick();
    })();

    (function(){
      const canvas = document.getElementById('confetti');
      const ctx = canvas.getContext('2d');
      let W, H, pieces = [], running = false, frame;

      function resize(){ W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
      window.addEventListener('resize', resize); resize();

      function rnd(min, max){ return Math.random()*(max-min)+min; }
      function makePiece(){
        const huePool = [200, 190, 210, 330, 350]; 
        const hue = huePool[Math.floor(Math.random()*huePool.length)];
        return {
          x: rnd(0, W), y: -10, w: rnd(4, 8), h: rnd(8, 14),
          speed: rnd(2, 4), rot: rnd(0, 2*Math.PI), rSpeed: rnd(-0.2, 0.2),
          color: `hsl(${hue}, 85%, ${rnd(55, 70)}%)`
        };
      }

      function burst(){
        pieces.push(...Array.from({length: 220}, makePiece));
        if(!running){ running = true; animate(); setTimeout(()=> running=false, 2000); }
      }

      function animate(){
        ctx.clearRect(0,0,W,H);
        for(const p of pieces){
          p.y += p.speed; p.rot += p.rSpeed; p.x += Math.sin(p.y*0.02);
          ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
          ctx.fillStyle = p.color; ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
          ctx.restore();
        }
        pieces = pieces.filter(p => p.y < H + 20);
        if(running || pieces.length){ frame = requestAnimationFrame(animate); }
        else cancelAnimationFrame(frame);
      }

      document.getElementById('giftBtn').addEventListener('click', burst);
    })();

    (function(){
      const openBtn = document.getElementById('easterBtn');
      const modal = document.getElementById('modal');
      const closeBtn = document.getElementById('closeModal');
      function open(){ modal.style.display='flex'; }
      function close(){ modal.style.display='none'; }
      openBtn.addEventListener('click', open);
      closeBtn.addEventListener('click', close);
      modal.addEventListener('click', (e)=>{ if(e.target === modal) close(); });
      document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });
    })();

    (function(){
      const icons = ['💙','✨','💫','🩵','🕊️'];
      function spawnHeart(x, y){
        const el = document.createElement('div'); el.className='float-heart';
        el.textContent = icons[Math.floor(Math.random()*icons.length)];
        el.style.setProperty('--x', x+'px'); el.style.setProperty('--y', y+'px');
        document.body.appendChild(el);
        setTimeout(()=> el.remove(), 1700);
      }
      window.addEventListener('pointerdown', (e)=>{ spawnHeart(e.clientX, e.clientY); });
    })();

      (function(){
        if (!window.emailjs) { console.error('EmailJS SDK belum ter-load'); return; }
      emailjs.init({
        publicKey: "8KD5im2Hi7VbaeZpU",
      });


  document.getElementById("responForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const params = {
      user_name: document.getElementById("user_name").value,
      message: document.getElementById("message").value
    };

    emailjs.send("service_k9ebm7p", "template_nvh05jo", params)
      .then(function() {
        document.getElementById("status").innerText = "Pesan berhasil dikirim! 💙";
      }, function(error) {
        document.getElementById("status").innerText = "Gagal mengirim: " + JSON.stringify(error);
      });
  });
})(); 



