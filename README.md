<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="theme-color" content="#0f0f14" />
  <title>VESTI — Renta & Venta de Vestidos</title>
  <link rel="manifest" href="manifest.json" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #0f0f14;
      --bg2: #16161f;
      --bg3: #1e1e2a;
      --surface: #22222f;
      --border: rgba(255,255,255,0.08);
      --border2: rgba(255,255,255,0.14);
      --accent: #7c6bff;
      --accent2: #b06bff;
      --lime: #c8ff57;
      --pink: #ff6b9d;
      --text: #f0f0f8;
      --text2: #8888a8;
      --text3: #5a5a78;
      --success: #4ade80;
      --warn: #facc15;
      --danger: #f87171;
      --r: 12px;
      --r2: 20px;
      --r3: 28px;
    }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; overflow-x: hidden; }
    h1,h2,h3,h4 { font-family: 'Syne', sans-serif; }

    /* BG GLOW */
    .bg-glow {
      position: fixed; inset: 0; z-index: 0; pointer-events: none;
      background:
        radial-gradient(ellipse 55% 40% at 85% 5%, rgba(124,107,255,0.18) 0%, transparent 60%),
        radial-gradient(ellipse 40% 35% at 5% 90%, rgba(176,107,255,0.12) 0%, transparent 60%),
        radial-gradient(ellipse 30% 25% at 50% 50%, rgba(200,255,87,0.04) 0%, transparent 60%);
    }

    #app { position: relative; z-index: 1; min-height: 100vh; display: flex; flex-direction: column; }

    /* NAV */
    nav {
      display: flex; align-items: center; justify-content: space-between;
      padding: 1rem 2.5rem;
      border-bottom: 0.5px solid var(--border);
      backdrop-filter: blur(24px);
      background: rgba(15,15,20,0.75);
      position: sticky; top: 0; z-index: 100;
    }
    .logo { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 700; letter-spacing: 0.25em; color: var(--text); cursor: pointer; }
    .logo span { color: var(--accent); }
    .nav-center { display: flex; gap: 0.3rem; }
    .nav-link {
      padding: 0.45rem 1rem; border-radius: 30px; font-size: 0.82rem; letter-spacing: 0.02em;
      color: var(--text2); cursor: pointer; background: none; border: none;
      font-family: 'Inter', sans-serif; transition: all 0.2s;
    }
    .nav-link:hover { color: var(--text); background: var(--surface); }
    .nav-right { display: flex; align-items: center; gap: 0.8rem; }
    .lang-toggle {
      display: flex; background: var(--surface); border-radius: 30px;
      border: 0.5px solid var(--border2); overflow: hidden;
    }
    .lang-btn {
      padding: 0.35rem 0.75rem; font-size: 0.75rem; font-weight: 500;
      cursor: pointer; background: none; border: none; color: var(--text2);
      font-family: 'Syne', sans-serif; letter-spacing: 0.05em; transition: all 0.2s;
    }
    .lang-btn.active { background: var(--accent); color: #fff; border-radius: 30px; }
    .nav-cta {
      padding: 0.5rem 1.3rem; border-radius: 30px;
      background: var(--accent); color: #fff; border: none;
      font-size: 0.82rem; font-weight: 500; cursor: pointer;
      font-family: 'Syne', sans-serif; letter-spacing: 0.05em;
      transition: all 0.2s;
    }
    .nav-cta:hover { background: var(--accent2); transform: translateY(-1px); }
    .hamburger { display: none; flex-direction: column; gap: 4px; cursor: pointer; padding: 4px; }
    .hamburger span { width: 20px; height: 1.5px; background: var(--text); border-radius: 2px; }

    /* PAGES */
    .page { display: none; flex: 1; flex-direction: column; }
    .page.active { display: flex; }

    /* ===== HOME ===== */
    .hero {
      display: grid; grid-template-columns: 1fr 1fr;
      min-height: 86vh; align-items: center;
      padding: 4rem 5rem; gap: 4rem;
    }
    .hero-text { display: flex; flex-direction: column; gap: 1.6rem; }
    .hero-pill {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.4rem 1rem; border-radius: 30px;
      background: rgba(124,107,255,0.12); border: 0.5px solid rgba(124,107,255,0.3);
      font-size: 0.75rem; font-weight: 500; color: var(--accent);
      width: fit-content; letter-spacing: 0.05em;
    }
    .hero-pill-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
    .hero-title { font-size: clamp(2.5rem, 5.5vw, 5rem); line-height: 1.05; font-weight: 700; }
    .hero-title .hl { 
      background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 50%, var(--pink) 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
    }
    .hero-title .hl2 { color: var(--lime); -webkit-text-fill-color: var(--lime); }
    .hero-sub { font-size: 1rem; color: var(--text2); line-height: 1.75; font-weight: 300; max-width: 420px; }
    .hero-actions { display: flex; gap: 0.8rem; flex-wrap: wrap; }
    .btn-primary {
      padding: 0.85rem 2rem; border-radius: 30px; border: none;
      background: var(--accent); color: #fff;
      font-size: 0.88rem; font-weight: 500; cursor: pointer;
      font-family: 'Syne', sans-serif; letter-spacing: 0.04em;
      transition: all 0.22s;
    }
    .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); box-shadow: 0 8px 28px rgba(124,107,255,0.4); }
    .btn-outline {
      padding: 0.85rem 2rem; border-radius: 30px;
      background: transparent; color: var(--text);
      border: 0.5px solid var(--border2);
      font-size: 0.88rem; font-weight: 500; cursor: pointer;
      font-family: 'Syne', sans-serif; letter-spacing: 0.04em;
      transition: all 0.22s;
    }
    .btn-outline:hover { border-color: var(--accent); color: var(--accent); }
    .hero-visual { position: relative; display: flex; justify-content: center; }
    .hero-mosaic { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }
    .hmcard {
      border-radius: var(--r2); overflow: hidden;
      border: 0.5px solid var(--border);
    }
    .hmcard img { width: 100%; height: 190px; object-fit: cover; display: block; }
    .hmcard:nth-child(2) { transform: translateY(24px); }
    .hmcard:nth-child(3) { transform: translateY(-12px); }
    .stats-row {
      display: flex; gap: 0; border-top: 0.5px solid var(--border);
      padding: 1.8rem 5rem; background: var(--bg2);
    }
    .stat { flex: 1; text-align: center; border-right: 0.5px solid var(--border); padding: 0 2rem; }
    .stat:last-child { border-right: none; }
    .stat-n { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 700; color: var(--text); }
    .stat-n span { color: var(--accent); }
    .stat-l { font-size: 0.78rem; color: var(--text2); margin-top: 0.2rem; letter-spacing: 0.04em; }
    .section { padding: 5rem 5rem; }
    .section-alt { background: var(--bg2); border-top: 0.5px solid var(--border); }
    .s-tag { display: inline-block; padding: 0.3rem 0.9rem; border-radius: 20px; background: rgba(124,107,255,0.1); border: 0.5px solid rgba(124,107,255,0.25); font-size: 0.72rem; font-weight: 500; color: var(--accent); letter-spacing: 0.08em; margin-bottom: 0.9rem; }
    .s-title { font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 600; color: var(--text); }
    .dress-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1.2rem; margin-top: 2.5rem; }

    /* DRESS CARD */
    .dcard {
      background: var(--bg2); border: 0.5px solid var(--border);
      border-radius: var(--r2); overflow: hidden; cursor: pointer;
      transition: transform 0.22s, border-color 0.22s;
    }
    .dcard:hover { transform: translateY(-4px); border-color: rgba(124,107,255,0.4); }
    .dcard-img { position: relative; }
    .dcard-img img { width: 100%; height: 300px; object-fit: cover; display: block; }
    .dcard-badge {
      position: absolute; top: 10px; left: 10px;
      padding: 3px 10px; border-radius: 20px; font-size: 0.68rem; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      background: rgba(15,15,20,0.8); color: var(--accent);
      border: 0.5px solid rgba(124,107,255,0.35); backdrop-filter: blur(10px);
    }
    .dcard-wish {
      position: absolute; top: 10px; right: 10px; width: 32px; height: 32px;
      background: rgba(15,15,20,0.75); border: 0.5px solid var(--border2);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      font-size: 15px; cursor: pointer; backdrop-filter: blur(8px); transition: background 0.2s;
    }
    .dcard-wish:hover { background: rgba(255,107,157,0.2); }
    .dcard-body { padding: 1rem 1.1rem; }
    .dcard-name { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 600; color: var(--text); margin-bottom: 0.25rem; }
    .dcard-size { font-size: 0.76rem; color: var(--text2); margin-bottom: 0.8rem; }
    .dcard-foot { display: flex; justify-content: space-between; align-items: center; }
    .dcard-price { font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text); }
    .dcard-price span { font-size: 0.72rem; color: var(--text2); font-family: 'Inter', sans-serif; font-weight: 400; }
    .btn-xs {
      padding: 0.38rem 1rem; border-radius: 20px;
      border: 0.5px solid var(--accent); background: transparent; color: var(--accent);
      font-size: 0.74rem; font-weight: 500; cursor: pointer;
      font-family: 'Syne', sans-serif; transition: all 0.2s;
    }
    .btn-xs:hover { background: var(--accent); color: #fff; }
    .btn-xs.solid { background: var(--accent); color: #fff; }
    .btn-xs.solid:hover { background: var(--accent2); }

    /* ===== CATALOG ===== */
    .catalog-wrap { display: grid; grid-template-columns: 240px 1fr; min-height: calc(100vh - 65px); }
    .filters {
      border-right: 0.5px solid var(--border); padding: 1.8rem 1.4rem;
      background: var(--bg2);
    }
    .filters h3 { font-family: 'Syne', sans-serif; font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); margin-bottom: 1.5rem; font-weight: 600; }
    .fgroup { margin-bottom: 1.8rem; }
    .fgroup > label { display: block; font-size: 0.75rem; color: var(--text2); margin-bottom: 0.7rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; }
    .fchips { display: flex; flex-wrap: wrap; gap: 0.45rem; }
    .fchip {
      padding: 0.3rem 0.8rem; border-radius: 20px;
      border: 0.5px solid var(--border2); background: transparent; color: var(--text2);
      font-size: 0.76rem; cursor: pointer; transition: all 0.18s;
      font-family: 'Inter', sans-serif;
    }
    .fchip.active, .fchip:hover { border-color: var(--accent); color: var(--accent); background: rgba(124,107,255,0.08); }
    .fslider { width: 100%; accent-color: var(--accent); }
    .cat-main { padding: 2rem 2.5rem; }
    .cat-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.8rem; }
    .cat-count { font-size: 0.83rem; color: var(--text2); }
    .searchbar {
      display: flex; align-items: center; gap: 0.7rem;
      background: var(--surface); border: 0.5px solid var(--border2);
      border-radius: 30px; padding: 0.55rem 1.1rem; width: 260px;
    }
    .searchbar input { background: none; border: none; outline: none; color: var(--text); font-size: 0.84rem; width: 100%; font-family: 'Inter', sans-serif; }
    .searchbar input::placeholder { color: var(--text3); }

    /* ===== DETAIL ===== */
    .detail-wrap { display: grid; grid-template-columns: 1fr 1fr; min-height: calc(100vh - 65px); }
    .dgallery { background: var(--bg2); padding: 2.5rem; display: flex; flex-direction: column; gap: 0.8rem; }
    .dmain-img { border-radius: var(--r2); overflow: hidden; aspect-ratio: 3/4; }
    .dmain-img img { width: 100%; height: 100%; object-fit: cover; }
    .dthumbs { display: flex; gap: 0.6rem; }
    .dthumb { width: 64px; height: 80px; border-radius: 8px; overflow: hidden; cursor: pointer; border: 1.5px solid transparent; transition: border-color 0.2s; flex-shrink: 0; }
    .dthumb.active { border-color: var(--accent); }
    .dthumb img { width: 100%; height: 100%; object-fit: cover; }
    .dinfo { padding: 2.5rem 2.5rem; overflow-y: auto; }
    .dcat { font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent); font-weight: 600; margin-bottom: 0.7rem; }
    .dtitle { font-size: 2.2rem; font-weight: 700; line-height: 1.15; color: var(--text); margin-bottom: 1rem; }
    .dseller { display: flex; align-items: center; gap: 0.8rem; padding: 0.9rem 0; border-top: 0.5px solid var(--border); border-bottom: 0.5px solid var(--border); margin-bottom: 1.4rem; }
    .savatar { width: 34px; height: 34px; border-radius: 50%; background: var(--accent); display: flex; align-items: center; justify-content: center; font-size: 13px; color: #fff; font-weight: 600; }
    .sname { font-size: 0.86rem; color: var(--text); }
    .srating { font-size: 0.72rem; color: var(--accent); }
    .dprice-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 1.4rem; }
    .dprice { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 700; color: var(--text); }
    .dprice-rent { font-size: 0.82rem; color: var(--text2); margin-top: 0.2rem; }
    .dmeasure-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.7rem; margin-bottom: 1.4rem; }
    .dmitem { background: var(--surface); border: 0.5px solid var(--border); border-radius: var(--r); padding: 0.75rem 1rem; }
    .dmitem-l { font-size: 0.7rem; color: var(--text2); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem; }
    .dmitem-v { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 600; color: var(--text); }
    .fit-bar { display: flex; align-items: center; gap: 0.65rem; padding: 0.9rem 1rem; border-radius: var(--r); margin-bottom: 1.4rem; border: 0.5px solid; }
    .fit-bar.ok { background: rgba(74,222,128,0.08); border-color: rgba(74,222,128,0.3); }
    .fit-bar.warn { background: rgba(250,204,21,0.08); border-color: rgba(250,204,21,0.3); }
    .fit-bar.bad { background: rgba(248,113,113,0.08); border-color: rgba(248,113,113,0.3); }
    .fit-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .fit-bar.ok .fit-dot { background: var(--success); }
    .fit-bar.warn .fit-dot { background: var(--warn); }
    .fit-bar.bad .fit-dot { background: var(--danger); }
    .fit-txt { font-size: 0.83rem; color: var(--text2); }
    .dactions { display: flex; flex-direction: column; gap: 0.7rem; margin-bottom: 1.5rem; }
    .btn-full {
      width: 100%; padding: 0.9rem; border-radius: var(--r3); border: none;
      font-size: 0.85rem; font-weight: 500; cursor: pointer;
      font-family: 'Syne', sans-serif; letter-spacing: 0.04em; transition: all 0.2s;
    }
    .btn-full.primary { background: var(--accent); color: #fff; }
    .btn-full.primary:hover { background: var(--accent2); }
    .btn-full.lime { background: var(--lime); color: #0f0f14; }
    .btn-full.lime:hover { filter: brightness(0.9); }
    .btn-full.outline { background: transparent; border: 0.5px solid var(--border2); color: var(--text); }
    .btn-full.outline:hover { border-color: var(--accent); color: var(--accent); }
    .btn-full.ghost { background: var(--surface); color: var(--text2); }
    .btn-full.ghost:hover { color: var(--text); }

    /* ===== MODAL ===== */
    .modal-ov {
      position: fixed; inset: 0; z-index: 200;
      background: rgba(8,8,12,0.92); backdrop-filter: blur(14px);
      display: flex; align-items: center; justify-content: center; padding: 1.5rem;
      opacity: 0; pointer-events: none; transition: opacity 0.3s;
    }
    .modal-ov.open { opacity: 1; pointer-events: all; }
    .modal-box {
      background: var(--bg2); border: 0.5px solid var(--border2);
      border-radius: var(--r2); width: 100%; max-width: 1020px;
      max-height: 92vh; overflow-y: auto;
      transform: translateY(16px); transition: transform 0.3s;
    }
    .modal-ov.open .modal-box { transform: translateY(0); }
    .modal-head {
      display: flex; justify-content: space-between; align-items: center;
      padding: 1.4rem 2rem; border-bottom: 0.5px solid var(--border);
    }
    .modal-title { font-family: 'Syne', sans-serif; font-size: 1.2rem; font-weight: 600; color: var(--text); }
    .modal-close { background: var(--surface); border: 0.5px solid var(--border); color: var(--text2); font-size: 1.1rem; cursor: pointer; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
    .modal-close:hover { color: var(--text); border-color: var(--border2); }

    /* VIRTUAL TRY-ON MODAL */
    .preview-wrap { display: grid; grid-template-columns: 1fr 1fr; min-height: 580px; }
    .preview-left { background: #090910; display: flex; flex-direction: column; border-right: 0.5px solid var(--border); }
    .preview-right { display: flex; flex-direction: column; }
    .preview-tabs { display: flex; border-bottom: 0.5px solid var(--border); flex-shrink: 0; }
    .preview-tab { flex: 1; padding: 0.85rem 0.5rem; font-size: 0.72rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text2); cursor: pointer; background: none; border: none; font-family: 'Syne', sans-serif; transition: all 0.2s; border-bottom: 2px solid transparent; }
    .preview-tab.active { color: var(--accent); border-bottom-color: var(--accent); background: rgba(124,107,255,0.04); }
    .ptab-content { flex: 1; display: none; overflow-y: auto; }
    .ptab-content.active { display: flex; flex-direction: column; }
    /* Compare panel */
    .compare-grid { display: grid; grid-template-columns: 1fr auto 1fr; gap: 0.8rem; padding: 1.2rem; flex: 1; }
    .compare-col { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; min-width: 0; }
    .compare-col h5 { font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text2); font-family: 'Syne', sans-serif; font-weight: 600; white-space: nowrap; }
    .compare-dress-img { width: 100%; aspect-ratio: 2/3; object-fit: cover; border-radius: var(--r); border: 0.5px solid var(--border); }
    .user-slot { width: 100%; aspect-ratio: 2/3; border-radius: var(--r); border: 1px dashed var(--border2); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.4rem; cursor: pointer; position: relative; overflow: hidden; transition: border-color 0.2s; background: var(--bg); }
    .user-slot:hover { border-color: var(--accent); }
    .user-slot .preview-user-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; border-radius: var(--r); display: none; }
    .user-slot input[type=file] { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; height: 100%; z-index: 2; }
    .user-slot-icon { font-size: 1.5rem; z-index: 1; pointer-events: none; }
    .user-slot-lbl { font-size: 0.68rem; color: var(--text2); text-align: center; z-index: 1; pointer-events: none; padding: 0 0.5rem; line-height: 1.5; }
    .compare-mid { display: flex; align-items: center; justify-content: center; padding-top: 1.6rem; }
    .vs-badge { font-size: 0.6rem; font-weight: 700; color: var(--text3); font-family: 'Syne', sans-serif; letter-spacing: 0.1em; border: 0.5px solid var(--border); border-radius: 20px; padding: 0.2rem 0.4rem; }
    /* Fit bar at bottom of compare */
    .compare-footer { border-top: 0.5px solid var(--border); padding: 0.8rem 1.2rem; flex-shrink: 0; }
    .fit-bars-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0.6rem; }
    .fit-bar-item { display: flex; flex-direction: column; gap: 0.25rem; }
    .fit-bar-label { font-size: 0.62rem; color: var(--text2); letter-spacing: 0.06em; text-transform: uppercase; font-family: 'Syne', sans-serif; }
    .fit-bar-track { height: 5px; background: var(--surface); border-radius: 4px; position: relative; overflow: hidden; }
    .fit-bar-fill { height: 100%; border-radius: 4px; transition: width 0.4s, background 0.3s; }
    .fit-bar-val { font-size: 0.65rem; color: var(--text2); }
    /* AI panel - right side */
    .ai-side { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
    .pose-header { padding: 1rem 1.2rem 0.5rem; border-bottom: 0.5px solid var(--border); }
    .pose-header h4 { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--accent); font-family: 'Syne', sans-serif; font-weight: 600; margin-bottom: 0.6rem; }
    .pose-visual { display: flex; gap: 0.8rem; align-items: flex-start; }
    .pose-tips-list { flex: 1; }
    .pose-tips-list li { list-style: none; font-size: 0.71rem; color: var(--text2); line-height: 1.5; margin-bottom: 0.18rem; }
    .pose-tips-list li::before { content: '✓ '; color: var(--success); }
    .ai-upload-section { padding: 0.8rem 1.2rem; border-bottom: 0.5px solid var(--border); }
    .ai-upload-section label { font-size: 0.65rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text2); font-family: 'Syne', sans-serif; font-weight: 600; display: block; margin-bottom: 0.5rem; }
    .ai-upload-row { display: flex; gap: 0.6rem; align-items: center; }
    .ai-file-input-wrap { flex: 1; position: relative; border: 0.5px solid var(--border2); border-radius: var(--r); padding: 0.55rem 0.8rem; background: var(--surface); cursor: pointer; transition: border-color 0.2s; }
    .ai-file-input-wrap:hover { border-color: var(--accent); }
    .ai-file-input-wrap input { position: absolute; inset: 0; opacity: 0; cursor: pointer; width: 100%; }
    .ai-file-label { font-size: 0.75rem; color: var(--text2); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .ai-btn { padding: 0.6rem 1rem; background: linear-gradient(135deg, var(--accent), var(--accent2)); border: none; border-radius: var(--r); color: #fff; font-size: 0.78rem; font-weight: 600; cursor: pointer; font-family: 'Syne', sans-serif; white-space: nowrap; transition: all 0.2s; display: flex; align-items: center; gap: 0.4rem; flex-shrink: 0; }
    .ai-btn:hover { filter: brightness(1.12); }
    .ai-btn:disabled { opacity: 0.5; cursor: not-allowed; }
    .ai-result-area { flex: 1; overflow-y: auto; padding: 1rem 1.2rem; }
    .ai-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 0.8rem; color: var(--text3); text-align: center; padding: 2rem; }
    .ai-placeholder-icon { font-size: 2.5rem; opacity: 0.4; }
    .ai-placeholder-text { font-size: 0.82rem; line-height: 1.6; }
    .ai-status { font-size: 0.75rem; color: var(--accent); text-align: center; padding: 0.5rem; }
    .ai-result-card { background: rgba(124,107,255,0.06); border: 0.5px solid rgba(124,107,255,0.2); border-radius: var(--r); padding: 1rem; font-size: 0.8rem; color: var(--text2); line-height: 1.75; white-space: pre-wrap; }
    .ai-fit-badge { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.7rem; font-weight: 600; font-family: 'Syne', sans-serif; margin-bottom: 0.8rem; }
    .ai-fit-badge.ok { background: rgba(74,222,128,0.12); color: var(--success); border: 0.5px solid rgba(74,222,128,0.3); }
    .ai-fit-badge.warn { background: rgba(250,204,21,0.1); color: var(--warn); border: 0.5px solid rgba(250,204,21,0.3); }
    .ai-fit-badge.bad { background: rgba(248,113,113,0.1); color: var(--danger); border: 0.5px solid rgba(248,113,113,0.3); }

    /* ===== AUTH ===== */
    .auth-wrap { display: flex; align-items: center; justify-content: center; min-height: calc(100vh - 65px); padding: 3rem; }
    .auth-box { background: var(--bg2); border: 0.5px solid var(--border2); border-radius: var(--r2); padding: 2.5rem; width: 100%; max-width: 440px; }
    .auth-box h2 { font-size: 1.9rem; font-weight: 700; color: var(--text); margin-bottom: 0.4rem; }
    .auth-box p { font-size: 0.88rem; color: var(--text2); margin-bottom: 1.8rem; line-height: 1.6; }
    .fgroup2 { margin-bottom: 1.1rem; }
    .fgroup2 label { display: block; font-size: 0.74rem; color: var(--text2); letter-spacing: 0.07em; text-transform: uppercase; margin-bottom: 0.45rem; font-weight: 500; }
    .finput {
      width: 100%; padding: 0.8rem 1rem; background: var(--surface);
      border: 0.5px solid var(--border2); border-radius: var(--r); color: var(--text);
      font-size: 0.88rem; outline: none; transition: border-color 0.2s;
      font-family: 'Inter', sans-serif;
    }
    .finput:focus { border-color: var(--accent); }
    .finput::placeholder { color: var(--text3); }
    .fselect { width: 100%; padding: 0.8rem 1rem; background: var(--bg); border: 0.5px solid var(--border2); border-radius: var(--r); color: var(--text); font-size: 0.88rem; outline: none; font-family: 'Inter', sans-serif; cursor: pointer; appearance: none; }
    .frow { display: grid; grid-template-columns: 1fr 1fr; gap: 0.9rem; }
    .auth-div { text-align: center; margin: 1.4rem 0; position: relative; }
    .auth-div::before { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 0.5px; background: var(--border); }
    .auth-div span { background: var(--bg2); padding: 0 1rem; font-size: 0.72rem; color: var(--text3); position: relative; }
    .auth-sw { text-align: center; margin-top: 1.4rem; font-size: 0.84rem; color: var(--text2); }
    .auth-sw a { color: var(--accent); cursor: pointer; font-weight: 500; }
    .meas-section { border-top: 0.5px solid var(--border); margin-top: 1.4rem; padding-top: 1.4rem; }
    .meas-section h4 { font-size: 0.7rem; color: var(--accent); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.9rem; font-weight: 600; font-family: 'Syne', sans-serif; }
    .mgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; }

    /* ===== LIST ===== */
    .list-wrap { max-width: 740px; margin: 0 auto; padding: 3rem 2rem; }
    .list-wrap h2 { font-size: 2rem; font-weight: 700; color: var(--text); margin-bottom: 0.4rem; }
    .list-wrap > p { font-size: 0.9rem; color: var(--text2); margin-bottom: 2.2rem; line-height: 1.6; }
    .fcard { background: var(--bg2); border: 0.5px solid var(--border); border-radius: var(--r2); padding: 1.8rem; margin-bottom: 1.2rem; }
    .fcard h3 { font-size: 0.7rem; color: var(--accent); letter-spacing: 0.2em; text-transform: uppercase; margin-bottom: 1.4rem; font-weight: 600; font-family: 'Syne', sans-serif; }
    .upload-zone { border: 1px dashed var(--border2); border-radius: var(--r); padding: 2.5rem; text-align: center; cursor: pointer; transition: all 0.2s; }
    .upload-zone:hover { border-color: var(--accent); background: rgba(124,107,255,0.04); }
    .upload-icon { font-size: 2rem; margin-bottom: 0.8rem; }
    .upload-txt { font-size: 0.86rem; color: var(--text2); }
    .upload-sub2 { font-size: 0.74rem; color: var(--text3); margin-top: 0.3rem; }

    /* ===== PROFILE ===== */
    .prof-wrap { padding: 3rem 4rem; }
    .prof-head { display: flex; align-items: center; gap: 1.8rem; margin-bottom: 2.5rem; padding-bottom: 1.8rem; border-bottom: 0.5px solid var(--border); }
    .prof-av { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent2)); display: flex; align-items: center; justify-content: center; font-family: 'Syne', sans-serif; font-size: 1.8rem; font-weight: 700; color: #fff; }
    .prof-info h2 { font-size: 1.8rem; font-weight: 700; color: var(--text); }
    .prof-info p { font-size: 0.86rem; color: var(--text2); margin-top: 0.2rem; }
    .ptabs { display: flex; gap: 0; border-bottom: 0.5px solid var(--border); margin-bottom: 2rem; }
    .ptab { padding: 0.7rem 1.3rem; font-size: 0.8rem; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text2); cursor: pointer; border-bottom: 2px solid transparent; transition: all 0.2s; background: none; border-top: none; border-left: none; border-right: none; font-family: 'Syne', sans-serif; font-weight: 500; }
    .ptab.active { color: var(--accent); border-bottom-color: var(--accent); }
    .mcards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.9rem; }
    .mcard { background: var(--surface); border: 0.5px solid var(--border); border-radius: var(--r); padding: 1.1rem; text-align: center; }
    .mcard-v { font-family: 'Syne', sans-serif; font-size: 1.9rem; font-weight: 700; color: var(--accent); }
    .mcard-u { font-size: 0.72rem; color: var(--text3); }
    .mcard-l { font-size: 0.74rem; color: var(--text2); margin-top: 0.25rem; text-transform: uppercase; letter-spacing: 0.07em; }

    /* TOAST */
    .toast { position: fixed; bottom: 1.8rem; right: 1.8rem; z-index: 300; background: var(--surface); border: 0.5px solid var(--border2); border-radius: var(--r); padding: 0.9rem 1.3rem; display: flex; align-items: center; gap: 0.7rem; transform: translateX(120%); transition: transform 0.3s ease; box-shadow: 0 8px 32px rgba(0,0,0,0.5); }
    .toast.show { transform: translateX(0); }
    .toast-ico { font-size: 16px; }
    .toast-txt { font-size: 0.86rem; color: var(--text); }

    /* RESPONSIVE */
    @media (max-width: 920px) {
      .hero { grid-template-columns: 1fr; padding: 2.5rem 1.5rem; min-height: auto; gap: 2rem; }
      .hero-visual { display: none; }
      .stats-row { padding: 1.5rem; gap: 0; }
      .section { padding: 3rem 1.5rem; }
      .catalog-wrap { grid-template-columns: 1fr; }
      .filters { display: none; }
      .detail-wrap { grid-template-columns: 1fr; }
      .preview-wrap { grid-template-columns: 1fr; }
      .preview-side { max-height: none; }
      .prof-wrap { padding: 2rem 1.5rem; }
      .mcards { grid-template-columns: 1fr 1fr; }
      nav { padding: 0.9rem 1.4rem; }
      .nav-center { display: none; }
      .hamburger { display: flex; }
    }
  </style>

  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
      });
    }
  </script>
</head>
<body>
<div class="bg-glow"></div>
<div id="app">

  <!-- NAV -->
  <nav>
    <div class="logo" onclick="nav('home')">VES<span>TI</span></div>
    <div class="nav-center" id="navCenter">
      <button class="nav-link" onclick="nav('catalog')" data-i18n="nav_explore">Explorar</button>
      <button class="nav-link" onclick="nav('list')" data-i18n="nav_list">Publicar vestido</button>
      <button class="nav-link" onclick="nav('profile')" data-i18n="nav_wardrobe">Mi guardarropa</button>
    </div>
    <div class="nav-right">
      <div class="lang-toggle">
        <button class="lang-btn active" id="langES" onclick="setLang('es')">ES</button>
        <button class="lang-btn" id="langEN" onclick="setLang('en')">EN</button>
      </div>
      <button class="nav-link" id="navAuthBtn" onclick="nav('auth')">Iniciar sesión</button>
      <button class="nav-cta" id="navCtaBtn" onclick="nav('auth')" data-i18n="nav_cta">Comenzar</button>
    </div>
    <div class="hamburger" onclick="toggleMobileNav()"><span></span><span></span><span></span></div>
  </nav>

  <!-- ===== HOME ===== -->
  <div class="page active" id="page-home">
    <div class="hero">
      <div class="hero-text">
        <div class="hero-pill"><div class="hero-pill-dot"></div><span data-i18n="hero_pill">El marketplace de vestidos de fiesta</span></div>
        <h1 class="hero-title" data-i18n-html="hero_title">Renta el vestido de tus <span class="hl">sueños</span></h1>
        <p class="hero-sub" data-i18n="hero_sub">Renta o compra vestidos de fiesta de otras mujeres. Pruébatelos virtualmente con IA antes de decidir.</p>
        <div class="hero-actions">
          <button class="btn-primary" onclick="nav('catalog')" data-i18n="hero_cta1">Ver colección</button>
          <button class="btn-outline" onclick="nav('list')" data-i18n="hero_cta2">Publicar vestido</button>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-mosaic">
          <div class="hmcard"><img src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop" /></div>
          <div class="hmcard"><img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop" /></div>
          <div class="hmcard"><img src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400&h=500&fit=crop" /></div>
          <div class="hmcard"><img src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop" /></div>
        </div>
      </div>
    </div>
    <div class="stats-row">
      <div class="stat"><div class="stat-n">2<span>,4</span>K+</div><div class="stat-l" data-i18n="stat1">Vestidos disponibles</div></div>
      <div class="stat"><div class="stat-n">18<span>K</span></div><div class="stat-l" data-i18n="stat2">Clientas felices</div></div>
      <div class="stat"><div class="stat-n">98<span>%</span></div><div class="stat-l" data-i18n="stat3">Precisión de talla</div></div>
      <div class="stat"><div class="stat-n">4.<span>9★</span></div><div class="stat-l" data-i18n="stat4">Calificación promedio</div></div>
    </div>
    <div class="section">
      <div class="s-tag" data-i18n="new_arrivals_tag">Nuevos ingresos</div>
      <h2 class="s-title" data-i18n="new_arrivals_title">Recién publicados</h2>
      <div class="dress-grid" id="homeDressGrid"></div>
    </div>
    <div class="section section-alt">
      <div class="s-tag" data-i18n="how_tag">Cómo funciona</div>
      <h2 class="s-title" data-i18n="how_title">Simple y rápido</h2>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:2.5rem;">
        <div style="background:var(--surface);border:0.5px solid var(--border);border-radius:var(--r2);padding:1.8rem;">
          <div style="width:44px;height:44px;border-radius:12px;background:rgba(124,107,255,0.15);border:0.5px solid rgba(124,107,255,0.3);display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:1rem;">📏</div>
          <h3 style="font-size:1.05rem;font-weight:600;color:var(--text);margin-bottom:0.5rem;" data-i18n="how1_title">Agrega tus medidas</h3>
          <p style="font-size:0.84rem;color:var(--text2);line-height:1.7;" data-i18n="how1_text">Ingresa tus medidas de busto, cintura y caderas una sola vez en tu perfil.</p>
        </div>
        <div style="background:var(--surface);border:0.5px solid var(--border);border-radius:var(--r2);padding:1.8rem;">
          <div style="width:44px;height:44px;border-radius:12px;background:rgba(200,255,87,0.1);border:0.5px solid rgba(200,255,87,0.25);display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:1rem;">✨</div>
          <h3 style="font-size:1.05rem;font-weight:600;color:var(--text);margin-bottom:0.5rem;" data-i18n="how2_title">Prueba virtual con IA</h3>
          <p style="font-size:0.84rem;color:var(--text2);line-height:1.7;" data-i18n="how2_text">Nuestro avatar 3D y la IA de Claude muestran cómo te quedaría cada vestido.</p>
        </div>
        <div style="background:var(--surface);border:0.5px solid var(--border);border-radius:var(--r2);padding:1.8rem;">
          <div style="width:44px;height:44px;border-radius:12px;background:rgba(255,107,157,0.1);border:0.5px solid rgba(255,107,157,0.25);display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:1rem;">🎉</div>
          <h3 style="font-size:1.05rem;font-weight:600;color:var(--text);margin-bottom:0.5rem;" data-i18n="how3_title">Renta o compra</h3>
          <p style="font-size:0.84rem;color:var(--text2);line-height:1.7;" data-i18n="how3_text">Reserva para tu evento o cómpralo. Envío asegurado a domicilio.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== CATALOG ===== -->
  <div class="page" id="page-catalog">
    <div class="catalog-wrap">
      <div class="filters">
        <h3 data-i18n="filters_title">Filtros</h3>
        <div class="fgroup">
          <label data-i18n="f_type">Tipo</label>
          <div class="fchips">
            <button class="fchip active" onclick="toggleFilter(this,'type','all')" data-i18n="f_all">Todos</button>
            <button class="fchip" onclick="toggleFilter(this,'type','rent')" data-i18n="f_rent">Renta</button>
            <button class="fchip" onclick="toggleFilter(this,'type','buy')" data-i18n="f_buy">Compra</button>
          </div>
        </div>
        <div class="fgroup">
          <label data-i18n="f_occasion">Ocasión</label>
          <div class="fchips">
            <button class="fchip" onclick="toggleFilter(this,'occ','gala')">Gala</button>
            <button class="fchip" onclick="toggleFilter(this,'occ','cocktail')">Cocktail</button>
            <button class="fchip" onclick="toggleFilter(this,'occ','wedding')" data-i18n="f_wedding">Boda</button>
            <button class="fchip" onclick="toggleFilter(this,'occ','party')" data-i18n="f_party">Fiesta</button>
            <button class="fchip" onclick="toggleFilter(this,'occ','prom')" data-i18n="f_prom">Graduación</button>
          </div>
        </div>
        <div class="fgroup">
          <label data-i18n="f_size">Talla</label>
          <div class="fchips">
            <button class="fchip" onclick="toggleFilter(this,'size','XS')">XS</button>
            <button class="fchip" onclick="toggleFilter(this,'size','S')">S</button>
            <button class="fchip" onclick="toggleFilter(this,'size','M')">M</button>
            <button class="fchip" onclick="toggleFilter(this,'size','L')">L</button>
            <button class="fchip" onclick="toggleFilter(this,'size','XL')">XL</button>
          </div>
        </div>
        <div class="fgroup">
          <label data-i18n="f_maxprice">Precio máx: $<span id="priceVal">400</span></label>
          <input type="range" class="fslider" min="20" max="2000" value="400" id="priceRange" oninput="document.getElementById('priceVal').textContent=this.value;renderCatalog()" />
        </div>
        <div class="fgroup">
          <label data-i18n="f_color">Color</label>
          <div class="fchips">
            <button class="fchip" onclick="toggleFilter(this,'color','black')" data-i18n="c_black">Negro</button>
            <button class="fchip" onclick="toggleFilter(this,'color','red')" data-i18n="c_red">Rojo</button>
            <button class="fchip" onclick="toggleFilter(this,'color','white')" data-i18n="c_white">Blanco</button>
            <button class="fchip" onclick="toggleFilter(this,'color','blue')" data-i18n="c_blue">Azul</button>
            <button class="fchip" onclick="toggleFilter(this,'color','gold')" data-i18n="c_gold">Dorado</button>
            <button class="fchip" onclick="toggleFilter(this,'color','pink')" data-i18n="c_pink">Rosa</button>
          </div>
        </div>
      </div>
      <div class="cat-main">
        <div class="cat-head">
          <div class="cat-count" id="catalogCount"></div>
          <div class="searchbar">
            <span style="color:var(--text3);font-size:13px;">⌕</span>
            <input type="text" id="searchInput" oninput="renderCatalog()" data-i18n-placeholder="search_placeholder" placeholder="Buscar vestidos..." />
          </div>
        </div>
        <div class="dress-grid" id="catalogGrid"></div>
      </div>
    </div>
  </div>

  <!-- ===== DETAIL ===== -->
  <div class="page" id="page-detail">
    <div class="detail-wrap">
      <div class="dgallery">
        <div class="dmain-img"><img id="detailMainImg" src="" alt="dress" /></div>
        <div class="dthumbs" id="detailThumbs"></div>
      </div>
      <div class="dinfo">
        <p class="dcat" id="detailCategory"></p>
        <h1 class="dtitle" id="detailTitle"></h1>
        <div class="dseller">
          <div class="savatar" id="sellerAv"></div>
          <div><div class="sname" id="sellerName"></div><div class="srating" id="sellerRating"></div></div>
        </div>
        <div class="dprice-row">
          <div><div class="dprice" id="detailPrice"></div><div class="dprice-rent" id="detailRent"></div></div>
          <div style="font-size:0.78rem;color:var(--text2);" id="detailCond"></div>
        </div>
        <p style="font-size:0.72rem;color:var(--text2);letter-spacing:0.07em;text-transform:uppercase;margin-bottom:0.7rem;" data-i18n="dress_measurements">Medidas del vestido</p>
        <div class="dmeasure-grid" id="detailMeas"></div>
        <div class="fit-bar warn" id="fitBar" style="margin-bottom:1.4rem;">
          <div class="fit-dot"></div>
          <div class="fit-txt" id="fitTxt"></div>
        </div>
        <div class="dactions">
          <button class="btn-full lime" onclick="openPreview()" data-i18n="try_on_btn">✨ Prueba virtual (IA)</button>
          <button class="btn-full primary" onclick="handleBuy()" data-i18n="buy_btn">Comprar ahora</button>
          <button class="btn-full outline" onclick="handleRent()" data-i18n="rent_btn">Rentar este vestido</button>
          <button class="btn-full ghost" onclick="handleWishlist()" data-i18n="save_btn">♡ Guardar en favoritos</button>
        </div>
        <p id="detailDesc" style="font-size:0.86rem;color:var(--text2);line-height:1.8;"></p>
      </div>
    </div>
  </div>

  <!-- ===== AUTH ===== -->
  <div class="page" id="page-auth">
    <div class="auth-wrap">
      <div class="auth-box">
        <div id="loginForm">
          <h2 data-i18n="login_title">Bienvenida</h2>
          <p data-i18n="login_sub">Inicia sesión para acceder a tu guardarropa y vestidos guardados.</p>
          <div class="fgroup2"><label data-i18n="email_label">Email</label><input class="finput" type="email" id="loginEmail" data-i18n-placeholder="email_ph" placeholder="tu@email.com" /></div>
          <div class="fgroup2"><label data-i18n="pass_label">Contraseña</label><input class="finput" type="password" id="loginPass" placeholder="••••••••" /></div>
          <button class="btn-full primary" onclick="handleLogin()" data-i18n="signin_btn">Iniciar sesión</button>
          <div class="auth-div"><span data-i18n="or_continue">o continúa con</span></div>
          <button class="btn-full ghost" onclick="handleSocial('Google')">🔑 Google</button>
          <div class="auth-sw" data-i18n-html="no_account">¿Sin cuenta? <a onclick="showReg()">Créala gratis</a></div>
        </div>
        <div id="registerForm" style="display:none;">
          <h2 data-i18n="reg_title">Únete a VESTI</h2>
          <p data-i18n="reg_sub">Crea tu cuenta y empieza a rentar o vender vestidos hoy.</p>
          <div class="frow">
            <div class="fgroup2"><label data-i18n="firstname">Nombre</label><input class="finput" id="regFirst" placeholder="Sofia" /></div>
            <div class="fgroup2"><label data-i18n="lastname">Apellido</label><input class="finput" id="regLast" placeholder="García" /></div>
          </div>
          <div class="fgroup2"><label>Email</label><input class="finput" type="email" id="regEmail" placeholder="tu@email.com" /></div>
          <div class="fgroup2"><label data-i18n="pass_label">Contraseña</label><input class="finput" type="password" id="regPass" placeholder="Mín. 8 caracteres" /></div>
          <div class="meas-section">
            <h4 data-i18n="meas_title">Tus medidas corporales (para verificar talla)</h4>
            <div class="mgrid">
              <div class="fgroup2"><label data-i18n="bust">Busto (cm)</label><input class="finput" type="number" id="regBust" placeholder="88" /></div>
              <div class="fgroup2"><label data-i18n="waist">Cintura (cm)</label><input class="finput" type="number" id="regWaist" placeholder="68" /></div>
              <div class="fgroup2"><label data-i18n="hips">Caderas (cm)</label><input class="finput" type="number" id="regHips" placeholder="96" /></div>
              <div class="fgroup2"><label data-i18n="height">Altura (cm)</label><input class="finput" type="number" id="regHeight" placeholder="165" /></div>
            </div>
          </div>
          <button class="btn-full primary" onclick="handleRegister()" style="margin-top:1rem;" data-i18n="create_acc">Crear cuenta</button>
          <div class="auth-sw" data-i18n-html="have_account">¿Ya tienes cuenta? <a onclick="showLogin()">Inicia sesión</a></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== LIST ===== -->
  <div class="page" id="page-list">
    <div class="list-wrap">
      <h2 data-i18n="list_title">Publicar vestido</h2>
      <p data-i18n="list_sub">Comparte tu vestido con miles de mujeres que buscan el look perfecto.</p>
      <div class="fcard">
        <h3 data-i18n="photos_section">Fotos</h3>
        <div class="upload-zone" onclick="triggerUpload()">
          <div class="upload-icon">📷</div>
          <div class="upload-txt" data-i18n="upload_txt">Arrastra fotos aquí o haz clic para subir</div>
          <div class="upload-sub2" data-i18n="upload_sub">JPG, PNG · Hasta 10 fotos · Máx 10MB cada una</div>
        </div>
      </div>
      <div class="fcard">
        <h3 data-i18n="details_section">Detalles del vestido</h3>
        <div class="fgroup2"><label data-i18n="dress_name">Nombre / Título</label><input class="finput" placeholder="Ej. Vestido Negro Halter con Abertura" id="listName" /></div>
        <div class="frow">
          <div class="fgroup2"><label data-i18n="occasion_label">Ocasión</label>
            <select class="fselect" id="listOcc">
              <option data-i18n="occ_cocktail">Fiesta cocktail</option>
              <option data-i18n="occ_gala">Gala / Etiqueta</option>
              <option data-i18n="occ_wedding">Invitada de boda</option>
              <option data-i18n="occ_prom">Graduación</option>
              <option data-i18n="occ_bday">Cumpleaños</option>
            </select>
          </div>
          <div class="fgroup2"><label data-i18n="size_label">Talla</label>
            <select class="fselect" id="listSize">
              <option>XS (32-34)</option><option>S (34-36)</option><option>M (36-38)</option><option>L (38-40)</option><option>XL (40-42)</option>
            </select>
          </div>
        </div>
        <div class="frow">
          <div class="fgroup2"><label data-i18n="brand_label">Marca</label><input class="finput" placeholder="Zara, BCBG, Vera Wang..." id="listBrand" /></div>
          <div class="fgroup2"><label data-i18n="color_label">Color</label><input class="finput" id="listColor" placeholder="Negro, Rojo..." /></div>
        </div>
        <div class="fgroup2"><label data-i18n="cond_label">Estado</label>
          <select class="fselect" id="listCond">
            <option data-i18n="cond1">Nuevo con etiqueta</option>
            <option data-i18n="cond2">Como nuevo (usado 1 vez)</option>
            <option data-i18n="cond3">Excelente (2-3 usos)</option>
            <option data-i18n="cond4">Bueno (desgaste visible)</option>
          </select>
        </div>
        <div class="fgroup2"><label data-i18n="desc_label">Descripción</label><textarea class="finput" rows="3" id="listDesc" style="resize:vertical;" placeholder="Describe la tela, el corte, si tiene alteraciones..."></textarea></div>
      </div>
      <div class="fcard">
        <h3 data-i18n="meas_dress_section">Medidas del vestido (para precisión de talla)</h3>
        <div class="mgrid">
          <div class="fgroup2"><label data-i18n="bust">Busto (cm)</label><input class="finput" type="number" placeholder="92" id="dBust" /></div>
          <div class="fgroup2"><label data-i18n="waist">Cintura (cm)</label><input class="finput" type="number" placeholder="72" id="dWaist" /></div>
          <div class="fgroup2"><label data-i18n="hips">Caderas (cm)</label><input class="finput" type="number" placeholder="100" id="dHips" /></div>
          <div class="fgroup2"><label data-i18n="length">Largo (cm)</label><input class="finput" type="number" placeholder="130" id="dLength" /></div>
        </div>
      </div>
      <div class="fcard">
        <h3 data-i18n="pricing_section">Precio</h3>
        <div class="frow">
          <div class="fgroup2"><label data-i18n="rent_price">Precio renta / día ($)</label><input class="finput" type="number" placeholder="45" id="listRentP" /></div>
          <div class="fgroup2"><label data-i18n="sale_price">Precio venta ($) — opcional</label><input class="finput" type="number" placeholder="280" id="listSaleP" /></div>
        </div>
        <div class="frow">
          <div class="fgroup2"><label data-i18n="avail_from">Disponible desde</label><input class="finput" type="date" id="listFrom" /></div>
          <div class="fgroup2"><label data-i18n="avail_until">Disponible hasta</label><input class="finput" type="date" id="listUntil" /></div>
        </div>
      </div>
      <button class="btn-full primary" onclick="handleListDress()" data-i18n="publish_btn">Publicar listado</button>
    </div>
  </div>

  <!-- ===== PROFILE ===== -->
  <div class="page" id="page-profile">
    <div class="prof-wrap">
      <div class="prof-head">
        <div class="prof-av" id="profAv">S</div>
        <div class="prof-info">
          <h2 id="profName">Sofia García</h2>
          <p id="profEmail">sofia@ejemplo.com</p>
          <p style="font-size:0.78rem;margin-top:0.3rem;color:var(--accent);">★ 4.9 · 12 rentas completadas</p>
        </div>
        <button class="btn-outline" style="margin-left:auto;" onclick="handleLogout()" data-i18n="signout_btn">Cerrar sesión</button>
      </div>
      <div class="ptabs">
        <button class="ptab active" onclick="switchTab('meas',this)" data-i18n="tab_meas">Mis medidas</button>
        <button class="ptab" onclick="switchTab('listings',this)" data-i18n="tab_listings">Mis listados</button>
        <button class="ptab" onclick="switchTab('rentals',this)" data-i18n="tab_rentals">Mis rentas</button>
        <button class="ptab" onclick="switchTab('wish',this)" data-i18n="tab_wish">Favoritos</button>
      </div>
      <div id="profContent"></div>
    </div>
  </div>

</div>

<!-- ===== VIRTUAL TRY-ON MODAL ===== -->
<div class="modal-ov" id="previewModal">
  <div class="modal-box" style="max-width:1060px;">
    <div class="modal-head">
      <div>
        <div class="modal-title" data-i18n="tryon_modal_title">Studio de Prueba Virtual</div>
        <div style="font-size:0.72rem;color:var(--text2);margin-top:0.2rem;" id="modalDressName"></div>
      </div>
      <button class="modal-close" onclick="closePreview()">×</button>
    </div>
    <div class="preview-wrap">

      <!-- LEFT: dress + user photo compare + fit bars -->
      <div class="preview-left">
        <div class="preview-tabs">
          <button class="preview-tab active" onclick="switchPTab('compare',this)" data-i18n="ptab_compare">Comparar fotos</button>
          <button class="preview-tab" onclick="switchPTab('measure',this)" data-i18n="ptab_measure">Análisis de talla</button>
        </div>

        <!-- Tab: Photo compare -->
        <div class="ptab-content active" id="ptab-compare">
          <div class="compare-grid">
            <div class="compare-col">
              <h5 data-i18n="dress_photo_lbl">Vestido</h5>
              <img class="compare-dress-img" id="compareDressImg" src="" alt="dress" />
            </div>
            <div class="compare-mid"><div class="vs-badge">VS</div></div>
            <div class="compare-col">
              <h5 data-i18n="your_photo_lbl">Tu foto</h5>
              <div class="user-slot" id="userSlot">
                <img class="preview-user-img" id="previewUserImg" />
                <input type="file" accept="image/*" id="comparePhotoInput" onchange="handleComparePhoto(this)" />
                <div class="user-slot-icon">📸</div>
                <div class="user-slot-lbl" data-i18n="tap_upload_photo">Toca para subir tu foto de cuerpo completo</div>
              </div>
            </div>
          </div>
          <div class="compare-footer">
            <div style="font-size:0.65rem;color:var(--text2);letter-spacing:0.1em;text-transform:uppercase;font-family:Syne,sans-serif;margin-bottom:0.6rem;" data-i18n="fit_analysis_lbl">Análisis de ajuste</div>
            <div class="fit-bars-grid" id="fitBarsGrid"></div>
          </div>
        </div>

        <!-- Tab: Measurement chart -->
        <div class="ptab-content" id="ptab-measure">
          <div style="padding:1.2rem;flex:1;overflow-y:auto;">
            <div style="margin-bottom:1.2rem;">
              <div style="font-size:0.65rem;color:var(--accent);letter-spacing:0.12em;text-transform:uppercase;font-family:Syne,sans-serif;font-weight:600;margin-bottom:0.8rem;" data-i18n="dress_meas_chart">Medidas del vestido vs. tus medidas</div>
              <div id="measChartContainer"></div>
            </div>
            <div id="fitSummaryBlock"></div>
          </div>
        </div>
      </div>

      <!-- RIGHT: pose guide + AI analysis -->
      <div class="preview-right">
        <div class="ai-side">
          <!-- Pose guide -->
          <div class="pose-header">
            <h4 data-i18n="pose_guide_title">📸 Cómo tomar tu foto</h4>
            <div class="pose-visual">
              <svg width="64" height="128" viewBox="0 0 64 128" fill="none" xmlns="http://www.w3.org/2000/svg" style="flex-shrink:0;">
                <circle cx="32" cy="12" r="10" fill="none" stroke="#7c6bff" stroke-width="1.5"/>
                <path d="M23 9 Q32 2 41 9" stroke="#7c6bff" stroke-width="1.2" fill="none"/>
                <line x1="32" y1="22" x2="32" y2="30" stroke="#7c6bff" stroke-width="1.5"/>
                <path d="M16 33 Q32 28 48 33" stroke="#7c6bff" stroke-width="1.3" fill="none"/>
                <line x1="16" y1="33" x2="10" y2="66" stroke="#7c6bff" stroke-width="1.3"/>
                <circle cx="10" cy="68" r="2" fill="#7c6bff"/>
                <line x1="48" y1="33" x2="54" y2="66" stroke="#7c6bff" stroke-width="1.3"/>
                <circle cx="54" cy="68" r="2" fill="#7c6bff"/>
                <path d="M16 33 L14 64 Q32 70 50 64 L48 33" fill="rgba(124,107,255,0.07)" stroke="#7c6bff" stroke-width="1.3"/>
                <line x1="24" y1="64" x2="20" y2="110" stroke="#7c6bff" stroke-width="1.3"/>
                <line x1="40" y1="64" x2="44" y2="110" stroke="#7c6bff" stroke-width="1.3"/>
                <path d="M20 110 L15 114 L20 114" stroke="#7c6bff" stroke-width="1.2" fill="none"/>
                <path d="M44 110 L49 114 L44 114" stroke="#7c6bff" stroke-width="1.2" fill="none"/>
                <text x="2" y="52" fill="#c8ff57" font-size="8" font-family="sans-serif">←</text>
                <text x="55" y="52" fill="#c8ff57" font-size="8" font-family="sans-serif">→</text>
                <line x1="4" y1="2" x2="4" y2="116" stroke="rgba(200,255,87,0.35)" stroke-width="0.5"/>
                <line x1="1" y1="2" x2="7" y2="2" stroke="rgba(200,255,87,0.35)" stroke-width="0.5"/>
                <line x1="1" y1="116" x2="7" y2="116" stroke="rgba(200,255,87,0.35)" stroke-width="0.5"/>
                <line x1="32" y1="2" x2="32" y2="116" stroke="rgba(124,107,255,0.18)" stroke-width="0.5" stroke-dasharray="2,3"/>
              </svg>
              <ul class="pose-tips-list">
                <li data-i18n="tip1">De frente, cuerpo completo</li>
                <li data-i18n="tip2">Brazos ligeramente abiertos</li>
                <li data-i18n="tip3">Postura recta y relajada</li>
                <li data-i18n="tip4">Fondo liso o neutro</li>
                <li data-i18n="tip5">Ropa ajustada o interior</li>
                <li data-i18n="tip6">Luz frontal uniforme</li>
                <li data-i18n="tip7">Sin objetos que tapen el cuerpo</li>
              </ul>
            </div>
          </div>

          <!-- Upload + generate -->
          <div class="ai-upload-section">
            <label data-i18n="ai_analyze_lbl">Análisis IA personalizado</label>
            <div class="ai-upload-row">
              <div class="ai-file-input-wrap">
                <input type="file" accept="image/*" id="userPhotoInput" onchange="handleAIFileSelect(this)" />
                <div class="ai-file-label" id="aiFileLabel" data-i18n="choose_photo_lbl">Elige tu foto...</div>
              </div>
              <button class="ai-btn" onclick="generateAI()" id="aiBtn">
                <span>✨</span><span data-i18n="gen_ai_btn">Analizar</span>
              </button>
            </div>
          </div>

          <!-- Result area -->
          <div class="ai-result-area" id="aiResultArea">
            <div class="ai-placeholder">
              <div class="ai-placeholder-icon">✨</div>
              <div class="ai-placeholder-text" data-i18n="ai_placeholder_text">Sube tu foto y te diremos cómo luce este vestido en ti, si la talla es correcta y qué accesorios combinan.</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>

<!-- TOAST -->
<div class="toast" id="toast">
  <span class="toast-ico" id="toastIco">✓</span>
  <span class="toast-txt" id="toastTxt"></span>
</div>

<script>
// ===================== i18n =====================
const T = {
  es: {
    nav_explore:'Explorar',
    ptab_compare:'Comparar fotos', ptab_measure:'Análisis de talla',
    dress_photo_lbl:'Vestido', your_photo_lbl:'Tu foto',
    tap_upload_photo:'Toca para subir tu foto de cuerpo completo',
    fit_analysis_lbl:'Análisis de ajuste', dress_meas_chart:'Medidas vestido vs. tus medidas',
    ai_analyze_lbl:'Análisis IA personalizado', choose_photo_lbl:'Elige tu foto...',
    ai_placeholder_text:'Sube tu foto y te diremos cómo luce este vestido en ti, si la talla es correcta y qué accesorios combinan.',
    try_on_btn:'✨ Prueba virtual (IA)', nav_list:'Publicar vestido', nav_wardrobe:'Mi guardarropa', nav_cta:'Comenzar',
    hero_pill:'El marketplace de vestidos de fiesta',
    hero_title:'Renta el vestido de tus <span class="hl">sueños</span>',
    hero_sub:'Renta o compra vestidos de fiesta de otras mujeres. Pruébatelos virtualmente con IA antes de decidir.',
    hero_cta1:'Ver colección', hero_cta2:'Publicar vestido',
    stat1:'Vestidos disponibles', stat2:'Clientas felices', stat3:'Precisión de talla', stat4:'Calificación promedio',
    new_arrivals_tag:'Nuevos ingresos', new_arrivals_title:'Recién publicados',
    how_tag:'Cómo funciona', how_title:'Simple y rápido',
    how1_title:'Agrega tus medidas', how1_text:'Ingresa tus medidas de busto, cintura y caderas una sola vez en tu perfil.',
    how2_title:'Prueba virtual con IA', how2_text:'Nuestro avatar 3D y la IA de Claude muestran cómo te quedaría cada vestido.',
    how3_title:'Renta o compra', how3_text:'Reserva para tu evento o cómpralo. Envío asegurado a domicilio.',
    filters_title:'Filtros', f_type:'Tipo', f_all:'Todos', f_rent:'Renta', f_buy:'Compra',
    f_occasion:'Ocasión', f_wedding:'Boda', f_party:'Fiesta', f_prom:'Graduación',
    f_size:'Talla', f_maxprice:'Precio máx: $', f_color:'Color',
    c_black:'Negro', c_red:'Rojo', c_white:'Blanco', c_blue:'Azul', c_gold:'Dorado', c_pink:'Rosa',
    search_placeholder:'Buscar vestidos...',
    catalog_showing:'Mostrando', catalog_dresses:'vestidos',
    dress_measurements:'Medidas del vestido',
    try_on_btn:'✨ Prueba virtual (IA)', buy_btn:'Comprar ahora', rent_btn:'Rentar este vestido', save_btn:'♡ Guardar en favoritos',
    login_title:'Bienvenida', login_sub:'Inicia sesión para acceder a tu guardarropa y vestidos guardados.',
    email_label:'Email', email_ph:'tu@email.com', pass_label:'Contraseña',
    signin_btn:'Iniciar sesión', or_continue:'o continúa con',
    no_account:'¿Sin cuenta? <a onclick="showReg()">Créala gratis</a>',
    reg_title:'Únete a VESTI', reg_sub:'Crea tu cuenta y empieza a rentar o vender vestidos hoy.',
    firstname:'Nombre', lastname:'Apellido', meas_title:'Tus medidas corporales (para verificar talla)',
    bust:'Busto (cm)', waist:'Cintura (cm)', hips:'Caderas (cm)', height:'Altura (cm)',
    create_acc:'Crear cuenta',
    have_account:'¿Ya tienes cuenta? <a onclick="showLogin()">Inicia sesión</a>',
    list_title:'Publicar vestido', list_sub:'Comparte tu vestido con miles de mujeres que buscan el look perfecto.',
    photos_section:'Fotos', upload_txt:'Arrastra fotos aquí o haz clic para subir', upload_sub:'JPG, PNG · Hasta 10 fotos · Máx 10MB cada una',
    details_section:'Detalles del vestido', dress_name:'Nombre / Título', occasion_label:'Ocasión', size_label:'Talla',
    occ_cocktail:'Fiesta cocktail', occ_gala:'Gala / Etiqueta', occ_wedding:'Invitada de boda', occ_prom:'Graduación', occ_bday:'Cumpleaños',
    brand_label:'Marca', color_label:'Color', cond_label:'Estado',
    cond1:'Nuevo con etiqueta', cond2:'Como nuevo (usado 1 vez)', cond3:'Excelente (2-3 usos)', cond4:'Bueno (desgaste visible)',
    desc_label:'Descripción',
    meas_dress_section:'Medidas del vestido (para precisión de talla)', length:'Largo (cm)',
    pricing_section:'Precio', rent_price:'Precio renta / día ($)', sale_price:'Precio venta ($) — opcional',
    avail_from:'Disponible desde', avail_until:'Disponible hasta', publish_btn:'Publicar listado',
    tab_meas:'Mis medidas', tab_listings:'Mis listados', tab_rentals:'Mis rentas', tab_wish:'Favoritos',
    signout_btn:'Cerrar sesión',
    tryon_modal_title:'Studio de Prueba Virtual', rotate_hint:'Rotación automática · Ajusta controles →',
    body_ctrl:'Ajustar silueta', height_ctrl:'Altura', bust_ctrl:'Busto', waist_ctrl:'Cintura', hips_ctrl:'Caderas',
    color_ctrl:'Color del vestido',
    ai_preview_title:'Preview con IA (Claude)',
    pose_guide_title:'📸 Cómo tomar tu foto',
    tip1:'De frente, cuerpo completo', tip2:'Brazos ligeramente abiertos', tip3:'Postura recta, relajada',
    tip4:'Fondo claro o neutro', tip5:'Ropa ajustada o en ropa interior', tip6:'Buena iluminación frontal', tip7:'Sin objetos que tapen el cuerpo',
    upload_photo_lbl:'Toca para subir tu foto', upload_photo_sub:'JPG o PNG · Máx 8MB',
    gen_ai_btn:'Generar preview con IA',
    fit_no_user:'Inicia sesión y agrega tus medidas para verificar la talla.',
    fit_perfect:'¡Talla perfecta! Este vestido debería quedarte muy bien según tus medidas.',
    fit_close:'Talla aproximada. Puede requerir pequeños ajustes.',
    fit_bad:'Este vestido podría no ajustarse bien a tus medidas. Revisa otras tallas.',
    no_meas:'Sin medidas aún.',
    update_meas:'Actualizar medidas', save_meas:'Guardar',
    no_listings:'Aún no tienes listados.', list_first:'Publica tu primer vestido',
    no_wishlist:'Aún no tienes favoritos.', explore_cat:'Explorar catálogo',
    no_rentals:'Tu historial de rentas aparecerá aquí cuando completes tu primera reserva.',
    signup_required:'Inicia sesión para continuar.',
    purchase_msg:'¡Compra iniciada! Conecta Stripe para pagos reales.',
    rental_msg:'¡Renta iniciada! Conecta Stripe para pagos reales.',
    saved_wish:'Guardado en favoritos ♥', removed_wish:'Eliminado de favoritos',
    dress_live:'¡Tu vestido está publicado!', fill_fields:'Por favor completa los campos requeridos.',
    email_exists:'Este email ya está registrado.', invalid_creds:'Credenciales incorrectas.',
    welcome_back:'Bienvenida,', signed_in_with:'Sesión iniciada con', signed_out:'Sesión cerrada.',
    meas_saved:'Medidas actualizadas ✓', upload_note:'Subida de fotos: conecta Supabase Storage en producción.',
    ai_generating:'Analizando tu foto con IA...', ai_error:'Error al generar el preview. Inténtalo de nuevo.',
    upload_photo_first:'Primero selecciona una foto.',
    navAuth_signIn:'Iniciar sesión',
  },
  en: {
    nav_explore:'Explore',
    ptab_compare:'Compare photos', ptab_measure:'Size analysis',
    dress_photo_lbl:'Dress', your_photo_lbl:'Your photo',
    tap_upload_photo:'Tap to upload your full body photo',
    fit_analysis_lbl:'Fit analysis', dress_meas_chart:'Dress measurements vs. yours',
    ai_analyze_lbl:'Personalized AI analysis', choose_photo_lbl:'Choose your photo...',
    ai_placeholder_text:'Upload your photo and we will tell you how this dress looks on you, whether the size is right, and what accessories pair best.',
    try_on_btn:'✨ Virtual try-on (AI)', nav_list:'List a dress', nav_wardrobe:'My wardrobe', nav_cta:'Get started',
    hero_pill:'The party dress marketplace',
    hero_title:'Rent the dress of your <span class="hl">dreams</span>',
    hero_sub:'Rent or buy party dresses from real women. Try them on virtually with AI before you commit.',
    hero_cta1:'Browse collection', hero_cta2:'List a dress',
    stat1:'Dresses listed', stat2:'Happy renters', stat3:'Fit accuracy', stat4:'Average rating',
    new_arrivals_tag:'New arrivals', new_arrivals_title:'Freshly listed',
    how_tag:'How it works', how_title:'Simple by design',
    how1_title:'Enter your measurements', how1_text:'Add your bust, waist and hip measurements once to your profile.',
    how2_title:'Virtual AI try-on', how2_text:'Our 3D avatar and Claude AI show exactly how each dress will fit your body.',
    how3_title:'Rent or buy', how3_text:'Book for your event date or purchase outright — insured delivery.',
    filters_title:'Filters', f_type:'Type', f_all:'All', f_rent:'Rent', f_buy:'Buy',
    f_occasion:'Occasion', f_wedding:'Wedding', f_party:'Party', f_prom:'Prom',
    f_size:'Size', f_maxprice:'Max price: $', f_color:'Color',
    c_black:'Black', c_red:'Red', c_white:'White', c_blue:'Blue', c_gold:'Gold', c_pink:'Pink',
    search_placeholder:'Search dresses...',
    catalog_showing:'Showing', catalog_dresses:'dresses',
    dress_measurements:'Dress measurements',
    try_on_btn:'✨ Virtual try-on (AI)', buy_btn:'Buy now', rent_btn:'Rent this dress', save_btn:'♡ Save to wishlist',
    login_title:'Welcome back', login_sub:'Sign in to access your wardrobe and saved dresses.',
    email_label:'Email', email_ph:'you@example.com', pass_label:'Password',
    signin_btn:'Sign in', or_continue:'or continue with',
    no_account:'No account? <a onclick="showReg()">Create one free</a>',
    reg_title:'Join VESTI', reg_sub:'Create your account and start renting or selling dresses today.',
    firstname:'First name', lastname:'Last name', meas_title:'Your body measurements (for fit check)',
    bust:'Bust (cm)', waist:'Waist (cm)', hips:'Hips (cm)', height:'Height (cm)',
    create_acc:'Create account',
    have_account:'Already have an account? <a onclick="showLogin()">Sign in</a>',
    list_title:'List a dress', list_sub:'Share your dress with thousands of style-conscious renters and buyers.',
    photos_section:'Photos', upload_txt:'Drop photos here or click to upload', upload_sub:'JPG, PNG · Up to 10 photos · Max 10MB each',
    details_section:'Dress details', dress_name:'Name / Title', occasion_label:'Occasion', size_label:'Size',
    occ_cocktail:'Cocktail party', occ_gala:'Gala / Black tie', occ_wedding:'Wedding guest', occ_prom:'Prom', occ_bday:'Birthday',
    brand_label:'Brand', color_label:'Color', cond_label:'Condition',
    cond1:'New with tags', cond2:'Like new (worn once)', cond3:'Excellent (2-3 times)', cond4:'Good (visible wear)',
    desc_label:'Description',
    meas_dress_section:'Dress measurements (for fit accuracy)', length:'Length (cm)',
    pricing_section:'Pricing', rent_price:'Rental price / day ($)', sale_price:'Sale price ($) — optional',
    avail_from:'Available from', avail_until:'Available until', publish_btn:'Publish listing',
    tab_meas:'My measurements', tab_listings:'My listings', tab_rentals:'My rentals', tab_wish:'Wishlist',
    signout_btn:'Sign out',
    tryon_modal_title:'Virtual Try-On Studio', rotate_hint:'Auto-rotating · Adjust controls →',
    body_ctrl:'Adjust silhouette', height_ctrl:'Height', bust_ctrl:'Bust', waist_ctrl:'Waist', hips_ctrl:'Hips',
    color_ctrl:'Dress color',
    ai_preview_title:'AI preview (Claude)',
    pose_guide_title:'📸 How to take your photo',
    tip1:'Front view, full body', tip2:'Arms slightly open', tip3:'Straight, relaxed posture',
    tip4:'Clear or neutral background', tip5:'Fitted clothes or undergarments', tip6:'Good front lighting', tip7:'No objects blocking your body',
    upload_photo_lbl:'Tap to upload your photo', upload_photo_sub:'JPG or PNG · Max 8MB',
    gen_ai_btn:'Generate AI preview',
    fit_no_user:'Sign in and add your measurements to check the fit.',
    fit_perfect:'Great fit! This dress should fit you perfectly based on your measurements.',
    fit_close:'Approximate fit. Minor alterations may be needed.',
    fit_bad:'This dress may not fit well based on your measurements. Consider a different size.',
    no_meas:'No measurements yet.',
    update_meas:'Update measurements', save_meas:'Save',
    no_listings:'No listings yet.', list_first:'List your first dress',
    no_wishlist:'No saved dresses yet.', explore_cat:'Explore catalog',
    no_rentals:'Your rental history will appear here once you complete your first booking.',
    signup_required:'Please sign in to continue.',
    purchase_msg:'Purchase initiated! Connect Stripe for real payments.',
    rental_msg:'Rental booking initiated! Connect Stripe for real payments.',
    saved_wish:'Saved to wishlist ♥', removed_wish:'Removed from wishlist',
    dress_live:'Your dress is now live!', fill_fields:'Please fill in all required fields.',
    email_exists:'Email already registered.', invalid_creds:'Incorrect credentials.',
    welcome_back:'Welcome back,', signed_in_with:'Signed in with', signed_out:'Signed out.',
    meas_saved:'Measurements updated ✓', upload_note:'Photo upload: connect Supabase Storage in production.',
    ai_generating:'Analyzing your photo with AI...', ai_error:'Error generating preview. Please try again.',
    upload_photo_first:'Please select a photo first.',
    navAuth_signIn:'Sign in',
  }
};

let lang = 'es';
function t(key) { return T[lang][key] || T['es'][key] || key; }

function setLang(l) {
  lang = l;
  document.getElementById('langES').classList.toggle('active', l === 'es');
  document.getElementById('langEN').classList.toggle('active', l === 'en');
  document.documentElement.lang = l;
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[lang][k]) el.textContent = T[lang][k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (T[lang][k]) el.innerHTML = T[lang][k];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (T[lang][k]) el.placeholder = T[lang][k];
  });
  // update nav auth btn
  updateNavAuth();
  // update catalog count if visible
  const cc = document.getElementById('catalogCount');
  if (cc && cc.textContent) renderCatalog();
}

// ===================== DATA =====================
const IMGS = [
  'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=700&fit=crop',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=700&fit=crop',
  'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=500&h=700&fit=crop',
  'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=700&fit=crop',
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500&h=700&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=700&fit=crop',
  'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?w=500&h=700&fit=crop',
  'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=500&h=700&fit=crop',
];
const dresses = [
  { id:1, name:'Noir Velvet Gown', category:'Gala', size:'S', bust:86, waist:66, hips:92, length:140, price:320, rentP:55, seller:'Isabelle M.', rating:'★★★★★', cond:'Like new', color:'black', img:IMGS[0], imgs:[IMGS[0],IMGS[4]], desc:'Gown de terciopelo floor-length con espalda abierta y cola sutil. Perfecto para eventos de gala.' },
  { id:2, name:'Rose Gold Sequin Midi', category:'Cocktail', size:'M', bust:90, waist:70, hips:98, length:110, price:180, rentP:38, seller:'Camille D.', rating:'★★★★★', cond:'New with tags', color:'gold', img:IMGS[1], imgs:[IMGS[1],IMGS[5]], desc:'Lentejuelas doradas que capturan cada luz. Un show stopper para cócteles y galas.' },
  { id:3, name:'Crimson Wrap Dress', category:'Fiesta', size:'S', bust:84, waist:64, hips:90, length:95, price:120, rentP:28, seller:'Valentina R.', rating:'★★★★☆', cond:'Excellent', color:'red', img:IMGS[2], imgs:[IMGS[2]], desc:'Silueta wrap en crepe carmesí. Cintura ajustable para un fit perfecto.' },
  { id:4, name:'Ivory Ruched Column', category:'Boda', size:'L', bust:96, waist:76, hips:104, length:150, price:450, rentP:85, seller:'Margot P.', rating:'★★★★★', cond:'Like new', color:'white', img:IMGS[3], imgs:[IMGS[3],IMGS[6]], desc:'Elegante vestido columna en marfil con corpino fruncido. Lujo sofisticado y discreto.' },
  { id:5, name:'Midnight Beaded Slip', category:'Gala', size:'XS', bust:80, waist:60, hips:86, length:130, price:280, rentP:60, seller:'Elena K.', rating:'★★★★★', cond:'Like new', color:'black', img:IMGS[4], imgs:[IMGS[4]], desc:'Slip dress de medianoche con bordado a mano. Una joya moderna.' },
  { id:6, name:'Cobalt Asymmetric Mini', category:'Fiesta', size:'M', bust:88, waist:68, hips:96, length:75, price:95, rentP:22, seller:'Lucia F.', rating:'★★★★☆', cond:'Good', color:'blue', img:IMGS[5], imgs:[IMGS[5]], desc:'Azul cobalto intenso con dobladillo asimétrico y hombro descubierto.' },
  { id:7, name:'Blush Tulle Ballgown', category:'Graduación', size:'S', bust:84, waist:62, hips:90, length:160, price:220, rentP:50, seller:'Natasha W.', rating:'★★★★★', cond:'New with tags', color:'pink', img:IMGS[6], imgs:[IMGS[6]], desc:'Vestido de bola en tul blush con escote corazón. Tu momento de princesa.' },
  { id:8, name:'Deep Plum Satin Bias', category:'Cocktail', size:'L', bust:94, waist:74, hips:102, length:105, price:160, rentP:35, seller:'Priya S.', rating:'★★★★★', cond:'Excellent', color:'black', img:IMGS[7], imgs:[IMGS[7]], desc:'Vestido bias cut en satén ciruela profundo. Se adapta a cada curva perfectamente.' },
];

let S = {
  dress: null,
  user: JSON.parse(localStorage.getItem('vesti_user')||'null'),
  wish: JSON.parse(localStorage.getItem('vesti_wish')||'[]'),
  listings: JSON.parse(localStorage.getItem('vesti_listings')||'[]'),
};

// ===================== NAVIGATION =====================
function nav(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-'+page);
  if (el) { el.classList.add('active'); window.scrollTo(0,0); }
  if (page==='home') renderHomeGrid();
  if (page==='catalog') renderCatalog();
  if (page==='profile') renderProfile();
}

function toggleMobileNav() {
  const nc = document.getElementById('navCenter');
  const vis = nc.style.display === 'flex';
  nc.style.display = vis ? 'none' : 'flex';
  if (!vis) Object.assign(nc.style, { flexDirection:'column', position:'absolute', top:'60px', left:'0', right:'0', background:'rgba(15,15,20,0.97)', padding:'1rem 1.5rem', zIndex:'99', borderBottom:'0.5px solid var(--border)' });
}

// ===================== RENDER =====================
function renderHomeGrid() {
  document.getElementById('homeDressGrid').innerHTML = dresses.slice(0,4).map(dCard).join('');
}
function renderCatalog() {
  const q = (document.getElementById('searchInput')?.value||'').toLowerCase();
  const maxP = parseInt(document.getElementById('priceRange')?.value||9999);
  const all = [...dresses,...S.listings];
  const f = all.filter(d => {
    if (q && !d.name.toLowerCase().includes(q) && !(d.category||'').toLowerCase().includes(q)) return false;
    if (d.rentP > maxP) return false;
    return true;
  });
  document.getElementById('catalogGrid').innerHTML = f.map(dCard).join('');
  document.getElementById('catalogCount').textContent = `${t('catalog_showing')} ${f.length} ${t('catalog_dresses')}`;
}
function dCard(d) {
  const saved = S.wish.includes(d.id);
  return `<div class="dcard" onclick="openDetail(${d.id})">
    <div class="dcard-img">
      <img src="${d.img}" alt="${d.name}" loading="lazy" />
      <div class="dcard-badge">${d.category}</div>
      <div class="dcard-wish" onclick="event.stopPropagation();toggleWish(${d.id},this)">${saved?'♥':'♡'}</div>
    </div>
    <div class="dcard-body">
      <div class="dcard-name">${d.name}</div>
      <div class="dcard-size">Talla ${d.size} · ${d.cond||d.condition}</div>
      <div class="dcard-foot">
        <div class="dcard-price">$${d.rentP}<span>/día</span></div>
        <button class="btn-xs solid" onclick="event.stopPropagation();openDetail(${d.id})" data-i18n="nav_explore">Ver</button>
      </div>
    </div>
  </div>`;
}
function toggleFilter(el, type, val) {
  el.closest('.fchips').querySelectorAll('.fchip').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  renderCatalog();
}

// ===================== DETAIL =====================
function openDetail(id) {
  const d = [...dresses,...S.listings].find(x=>x.id===id);
  if (!d) return;
  S.dress = d;
  document.getElementById('detailCategory').textContent = d.category;
  document.getElementById('detailTitle').textContent = d.name;
  document.getElementById('detailMainImg').src = d.img;
  document.getElementById('sellerAv').textContent = d.seller[0];
  document.getElementById('sellerName').textContent = d.seller;
  document.getElementById('sellerRating').textContent = d.rating;
  document.getElementById('detailPrice').textContent = `$${d.price}`;
  document.getElementById('detailRent').textContent = `${lang==='es'?'o renta por':'or rent for'} $${d.rentP}/${lang==='es'?'día':'day'}`;
  document.getElementById('detailCond').textContent = d.cond||d.condition;
  document.getElementById('detailDesc').textContent = d.desc;
  document.getElementById('detailThumbs').innerHTML = (d.imgs||[d.img]).map((img,i)=>
    `<div class="dthumb ${i===0?'active':''}" onclick="swapImg('${img}',this)"><img src="${img}" /></div>`).join('');
  document.getElementById('detailMeas').innerHTML = [
    [t('bust'),d.bust,'cm'],[t('waist'),d.waist,'cm'],[t('hips'),d.hips,'cm'],['Largo',d.length,'cm']
  ].map(([l,v,u])=>`<div class="dmitem"><div class="dmitem-l">${l}</div><div class="dmitem-v">${v} <span style="font-size:0.72rem;color:var(--text2)">${u}</span></div></div>`).join('');
  checkFit(d);
  nav('detail');
}
function swapImg(src, el) {
  document.getElementById('detailMainImg').src = src;
  document.querySelectorAll('.dthumb').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
}
function checkFit(d) {
  const u = S.user;
  const bar = document.getElementById('fitBar');
  const txt = document.getElementById('fitTxt');
  if (!u||!u.bust) { bar.className='fit-bar warn'; txt.textContent=t('fit_no_user'); return; }
  const diff = Math.abs(u.bust-d.bust)+Math.abs(u.waist-d.waist)+Math.abs(u.hips-d.hips);
  if (diff<12) { bar.className='fit-bar ok'; txt.textContent=t('fit_perfect'); }
  else if (diff<24) { bar.className='fit-bar warn'; txt.textContent=t('fit_close'); }
  else { bar.className='fit-bar bad'; txt.textContent=t('fit_bad'); }
}

// ===================== VIRTUAL TRY-ON (no 3D, photo-based + AI) =====================

function openPreview() {
  const d = S.dress; if (!d) return;
  document.getElementById('previewModal').classList.add('open');
  document.getElementById('modalDressName').textContent = d.name + ' · ' + d.category;
  document.getElementById('compareDressImg').src = d.img;
  renderFitBars();
  renderMeasChart();
  // reset user slot if no previous upload
  const prevImg = document.getElementById('previewUserImg');
  if (!prevImg.src || prevImg.src === window.location.href) {
    prevImg.style.display = 'none';
    document.querySelector('.user-slot-icon').style.display = '';
    document.querySelector('.user-slot-lbl').style.display = '';
  }
}

function closePreview() {
  document.getElementById('previewModal').classList.remove('open');
}

function switchPTab(tab, btn) {
  document.querySelectorAll('.preview-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.ptab-content').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('ptab-' + tab).classList.add('active');
}

function handleComparePhoto(input) {
  if (!input.files[0]) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = document.getElementById('previewUserImg');
    img.src = e.target.result;
    img.style.display = 'block';
    document.querySelector('.user-slot-icon').style.display = 'none';
    document.querySelector('.user-slot-lbl').style.display = 'none';
    // also fill the AI upload input label
    document.getElementById('aiFileLabel').textContent = input.files[0].name;
    // copy the file to userPhotoInput for AI
    const dt = new DataTransfer();
    dt.items.add(input.files[0]);
    document.getElementById('userPhotoInput').files = dt.files;
  };
  reader.readAsDataURL(input.files[0]);
}

function handleAIFileSelect(input) {
  if (input.files[0]) {
    document.getElementById('aiFileLabel').textContent = input.files[0].name;
  }
}

function renderFitBars() {
  const d = S.dress;
  const u = S.user;
  const grid = document.getElementById('fitBarsGrid');
  if (!grid) return;
  const measurements = [
    { key: lang === 'es' ? 'Busto' : 'Bust', dVal: d.bust, uVal: u && u.bust },
    { key: lang === 'es' ? 'Cintura' : 'Waist', dVal: d.waist, uVal: u && u.waist },
    { key: lang === 'es' ? 'Caderas' : 'Hips', dVal: d.hips, uVal: u && u.hips },
  ];
  grid.innerHTML = measurements.map(m => {
    if (!m.uVal) {
      return `<div class="fit-bar-item">
        <div class="fit-bar-label">${m.key}</div>
        <div class="fit-bar-track"><div class="fit-bar-fill" style="width:100%;background:var(--surface);"></div></div>
        <div class="fit-bar-val" style="color:var(--text3);">${lang==='es'?'Sin datos':'No data'}</div>
      </div>`;
    }
    const diff = m.uVal - m.dVal;
    const absDiff = Math.abs(diff);
    const pct = Math.max(5, Math.min(100, 100 - (absDiff / 20) * 100));
    const color = absDiff <= 4 ? 'var(--success)' : absDiff <= 9 ? 'var(--warn)' : 'var(--danger)';
    const note = absDiff <= 4 ? (lang==='es'?'Perfecto':'Perfect') : diff > 0 ? (lang==='es'?`+${diff}cm suelto`:`+${diff}cm loose`) : (lang==='es'?`${diff}cm justo`:`${diff}cm tight`);
    return `<div class="fit-bar-item">
      <div class="fit-bar-label">${m.key}</div>
      <div class="fit-bar-track"><div class="fit-bar-fill" style="width:${pct}%;background:${color};"></div></div>
      <div class="fit-bar-val" style="color:${color};">${note}</div>
    </div>`;
  }).join('');
}

function renderMeasChart() {
  const d = S.dress;
  const u = S.user;
  const container = document.getElementById('measChartContainer');
  const summary = document.getElementById('fitSummaryBlock');
  if (!container) return;
  const rows = [
    { key: lang==='es'?'Busto':'Bust', dv: d.bust, uv: u&&u.bust },
    { key: lang==='es'?'Cintura':'Waist', dv: d.waist, uv: u&&u.waist },
    { key: lang==='es'?'Caderas':'Hips', dv: d.hips, uv: u&&u.hips },
    { key: lang==='es'?'Largo':'Length', dv: d.length, uv: null },
  ];
  const maxVal = Math.max(...rows.map(r => Math.max(r.dv || 0, r.uv || 0))) + 10;
  container.innerHTML = rows.map(r => {
    const dPct = Math.round((r.dv / maxVal) * 100);
    const uPct = r.uv ? Math.round((r.uv / maxVal) * 100) : 0;
    const diff = r.uv ? r.uv - r.dv : null;
    const diffColor = diff === null ? 'transparent' : Math.abs(diff)<=4 ? 'var(--success)' : Math.abs(diff)<=9 ? 'var(--warn)' : 'var(--danger)';
    return `<div style="margin-bottom:0.9rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem;">
        <span style="font-size:0.72rem;color:var(--text2);font-family:Syne,sans-serif;font-weight:600;">${r.key}</span>
        <span style="font-size:0.68rem;color:${diffColor};">${diff !== null ? (diff>0?'+':'')+diff+' cm' : '—'}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.25rem;">
        <div style="display:flex;align-items:center;gap:0.5rem;">
          <span style="font-size:0.6rem;color:var(--text3);width:52px;text-align:right;flex-shrink:0;">${lang==='es'?'Vestido':'Dress'}</span>
          <div style="flex:1;height:10px;background:var(--surface);border-radius:4px;overflow:hidden;">
            <div style="height:100%;width:${dPct}%;background:var(--accent);border-radius:4px;"></div>
          </div>
          <span style="font-size:0.68rem;color:var(--text);width:36px;flex-shrink:0;">${r.dv} cm</span>
        </div>
        ${r.uv ? `<div style="display:flex;align-items:center;gap:0.5rem;">
          <span style="font-size:0.6rem;color:var(--text3);width:52px;text-align:right;flex-shrink:0;">${lang==='es'?'Tú':'You'}</span>
          <div style="flex:1;height:10px;background:var(--surface);border-radius:4px;overflow:hidden;">
            <div style="height:100%;width:${uPct}%;background:${diffColor};border-radius:4px;"></div>
          </div>
          <span style="font-size:0.68rem;color:${diffColor};width:36px;flex-shrink:0;">${r.uv} cm</span>
        </div>` : ''}
      </div>
    </div>`;
  }).join('');
  // Overall fit summary
  if (u && u.bust) {
    const total = Math.abs((u.bust||0)-d.bust) + Math.abs((u.waist||0)-d.waist) + Math.abs((u.hips||0)-d.hips);
    let badge, msg;
    if (total <= 8) { badge = 'ok'; msg = lang==='es' ? '✓ Talla perfecta — este vestido debería quedarte excelente.' : '✓ Perfect fit — this dress should fit you excellently.'; }
    else if (total <= 18) { badge = 'warn'; msg = lang==='es' ? '~ Talla aproximada — puede requerir pequeños ajustes.' : '~ Approximate fit — minor alterations may be needed.'; }
    else { badge = 'bad'; msg = lang==='es' ? '✗ Talla difícil — considera otra talla o vestido similar.' : '✗ Difficult fit — consider another size or similar dress.'; }
    const colors = { ok: 'var(--success)', warn: 'var(--warn)', bad: 'var(--danger)' };
    summary.innerHTML = `<div style="padding:0.8rem;border-radius:var(--r);border:0.5px solid;border-color:${colors[badge]}20;background:${colors[badge]}0d;font-size:0.8rem;color:${colors[badge]};line-height:1.6;">${msg}</div>`;
  } else {
    summary.innerHTML = `<div style="font-size:0.78rem;color:var(--text2);padding:0.6rem 0;">${lang==='es'?'Agrega tus medidas en tu perfil para ver el análisis completo.':'Add your measurements in your profile to see the full analysis.'}</div>`;
  }
}

// ===================== AI PREVIEW =====================
async function generateAI() {
  const fi = document.getElementById('userPhotoInput');
  const resultArea = document.getElementById('aiResultArea');
  const btn = document.getElementById('aiBtn');
  if (!fi.files[0]) { showToast(t('upload_photo_first'),'📷'); return; }
  const d = S.dress;
  btn.disabled=true;
  resultArea.innerHTML = `<div class="ai-status" id="aiStatus">${t('ai_generating')}</div>`;
  try {
    const file = fi.files[0];
    const b64 = await new Promise((res,rej)=>{ const r=new FileReader(); r.onload=()=>res(r.result.split(',')[1]); r.onerror=rej; r.readAsDataURL(file); });
    const mt = file.type||'image/jpeg';
    const prompt = lang === 'es'
      ? `Eres una IA de moda para la app VESTI. El vestido es: "${d.name}" — categoría ${d.category}, color ${d.color}, descripción: "${d.desc}". Medidas del vestido: busto ${d.bust}cm, cintura ${d.waist}cm, caderas ${d.hips}cm, largo ${d.length}cm. Medidas de la usuaria: busto ${avP.bust}cm, cintura ${avP.waist}cm, caderas ${avP.hips}cm, altura ${avP.height}cm. Por favor describe con detalle: 1) Cómo luciría este vestido en esta persona — la silueta, cómo caería la tela, cómo el color complementa su piel. 2) Valoración de la talla (excelente / buena / aproximada / no recomendada) con explicación. 3) 2-3 tips de estilismo: zapatos, accesorios, peinado. Escribe en español, tono editorial de moda, cálido y positivo.`
      : `You are a fashion AI for the VESTI dress rental app. The dress is: "${d.name}" — ${d.category}, color ${d.color}, description: "${d.desc}". Dress measurements: bust ${d.bust}cm, waist ${d.waist}cm, hips ${d.hips}cm, length ${d.length}cm. User measurements: bust ${avP.bust}cm, waist ${avP.waist}cm, hips ${avP.hips}cm, height ${avP.height}cm. Please describe: 1) How this dress would look on this person — silhouette, fabric drape, how the color complements her features. 2) Fit assessment (excellent/good/approximate/not recommended) with reasoning. 3) 2-3 styling tips: shoes, accessories, hair. Editorial fashion tone, warm and positive.`;
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        model:'claude-sonnet-4-20250514', max_tokens:1000,
        messages:[{ role:'user', content:[
          { type:'image', source:{ type:'base64', media_type:mt, data:b64 } },
          { type:'text', text:prompt }
        ]}]
      })
    });
    const data = await res.json();
    const text = data.content?.map(c=>c.text||'').join('')||t('ai_error');
    // detect fit quality from response for badge
    const lower = text.toLowerCase();
    const fitBadge = lower.includes('perfecto') || lower.includes('perfect') || lower.includes('excellent') || lower.includes('excelente')
      ? 'ok' : lower.includes('aproximad') || lower.includes('approximate') || lower.includes('minor') || lower.includes('peque')
      ? 'warn' : 'bad';
    const fitLabel = fitBadge==='ok' ? (lang==='es'?'Talla excelente':'Excellent fit') : fitBadge==='warn' ? (lang==='es'?'Talla aproximada':'Approximate fit') : (lang==='es'?'Revisar talla':'Check sizing');
    resultArea.innerHTML = `
      <div class="ai-fit-badge ${fitBadge}">${fitLabel}</div>
      <div class="ai-result-card">${text}</div>`;
  } catch(e) {
    resultArea.innerHTML = `<div style="padding:1rem;font-size:0.8rem;color:var(--danger);">${t('ai_error')}</div>`;
  }
  btn.disabled=false;
}

// ===================== AUTH =====================
function showReg() { document.getElementById('loginForm').style.display='none'; document.getElementById('registerForm').style.display='block'; }
function showLogin() { document.getElementById('registerForm').style.display='none'; document.getElementById('loginForm').style.display='block'; }

function handleLogin() {
  const email=document.getElementById('loginEmail').value, pass=document.getElementById('loginPass').value;
  if (!email||!pass) { showToast(t('fill_fields'),'⚠️'); return; }
  const acc=JSON.parse(localStorage.getItem('vesti_accounts')||'[]');
  const found=acc.find(a=>a.email===email);
  if (!found||found.password!==pass) { showToast(t('invalid_creds'),'⚠️'); return; }
  S.user=found; localStorage.setItem('vesti_user',JSON.stringify(found));
  updateNavAuth(); showToast(`${t('welcome_back')} ${found.firstName}!`,'✨'); nav('home');
}
function handleRegister() {
  const fn=document.getElementById('regFirst').value, ln=document.getElementById('regLast').value;
  const email=document.getElementById('regEmail').value, pass=document.getElementById('regPass').value;
  if (!fn||!ln||!email||!pass) { showToast(t('fill_fields'),'⚠️'); return; }
  const acc=JSON.parse(localStorage.getItem('vesti_accounts')||'[]');
  if (acc.find(a=>a.email===email)) { showToast(t('email_exists'),'⚠️'); return; }
  const u={ firstName:fn, lastName:ln, email, password:pass,
    bust:parseInt(document.getElementById('regBust').value)||null,
    waist:parseInt(document.getElementById('regWaist').value)||null,
    hips:parseInt(document.getElementById('regHips').value)||null,
    height:parseInt(document.getElementById('regHeight').value)||null
  };
  acc.push(u); localStorage.setItem('vesti_accounts',JSON.stringify(acc));
  S.user=u; localStorage.setItem('vesti_user',JSON.stringify(u));
  updateNavAuth(); showToast(`¡Bienvenida a VESTI, ${fn}!`,'🎉'); nav('home');
}
function handleSocial(p) {
  const u={firstName:'Sofia',lastName:'García',email:'sofia@ejemplo.com',bust:88,waist:68,hips:96,height:165};
  S.user=u; localStorage.setItem('vesti_user',JSON.stringify(u));
  updateNavAuth(); showToast(`${t('signed_in_with')} ${p}!`,'✓'); nav('home');
}
function handleLogout() {
  S.user=null; localStorage.removeItem('vesti_user');
  updateNavAuth(); showToast(t('signed_out'),'✓'); nav('home');
}
function updateNavAuth() {
  const btn=document.getElementById('navAuthBtn'), cta=document.getElementById('navCtaBtn');
  if (S.user) {
    btn.textContent=S.user.firstName; btn.onclick=()=>nav('profile');
    cta.textContent=t('tab_wardrobe')||t('nav_wardrobe'); cta.onclick=()=>nav('profile');
  } else {
    btn.textContent=t('navAuth_signIn'); btn.onclick=()=>nav('auth');
    cta.textContent=t('nav_cta'); cta.onclick=()=>nav('auth');
  }
}

// ===================== LIST DRESS =====================
function triggerUpload() { showToast(t('upload_note'),'📷'); }
function handleListDress() {
  if (!S.user) { nav('auth'); showToast(t('signup_required'),'⚠️'); return; }
  const name=document.getElementById('listName').value;
  if (!name) { showToast(t('fill_fields'),'⚠️'); return; }
  const d={
    id:Date.now(), name,
    category:document.getElementById('listOcc').value.split(' ')[0],
    size:document.getElementById('listSize').value.split(' ')[0],
    bust:parseInt(document.getElementById('dBust').value)||88,
    waist:parseInt(document.getElementById('dWaist').value)||68,
    hips:parseInt(document.getElementById('dHips').value)||96,
    length:parseInt(document.getElementById('dLength').value)||120,
    price:parseInt(document.getElementById('listSaleP').value)||200,
    rentP:parseInt(document.getElementById('listRentP').value)||40,
    seller:`${S.user.firstName} ${S.user.lastName[0]}.`,
    rating:'★★★★★', cond:document.getElementById('listCond').value,
    color:document.getElementById('listColor').value||'negro',
    img:IMGS[Math.floor(Math.random()*IMGS.length)], imgs:[],
    desc:document.getElementById('listDesc').value, listedBy:S.user.email
  };
  d.imgs=[d.img]; S.listings.push(d);
  localStorage.setItem('vesti_listings',JSON.stringify(S.listings));
  showToast(t('dress_live'),'🎉'); nav('catalog');
}

// ===================== WISHLIST =====================
function toggleWish(id, el) {
  if (S.wish.includes(id)) { S.wish=S.wish.filter(x=>x!==id); el.textContent='♡'; showToast(t('removed_wish'),'♡'); }
  else { S.wish.push(id); el.textContent='♥'; showToast(t('saved_wish'),'♥'); }
  localStorage.setItem('vesti_wish',JSON.stringify(S.wish));
}
function handleBuy() { if (!S.user) { nav('auth'); return; } showToast(t('purchase_msg'),'🛍️'); }
function handleRent() { if (!S.user) { nav('auth'); return; } showToast(t('rental_msg'),'🎉'); }
function handleWishlist() { if (!S.user) { nav('auth'); return; } if (S.dress) { S.wish.push(S.dress.id); localStorage.setItem('vesti_wish',JSON.stringify(S.wish)); showToast(t('saved_wish'),'♥'); } }

// ===================== PROFILE =====================
function renderProfile() {
  if (!S.user) { nav('auth'); return; }
  const u=S.user;
  document.getElementById('profAv').textContent=u.firstName?.[0]||'?';
  document.getElementById('profName').textContent=`${u.firstName} ${u.lastName}`;
  document.getElementById('profEmail').textContent=u.email;
  switchTab('meas', document.querySelector('.ptab'));
}
function switchTab(tab, btn) {
  document.querySelectorAll('.ptab').forEach(t2=>t2.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const u=S.user||{};
  const c=document.getElementById('profContent');
  if (tab==='meas') {
    const fields=[[t('bust'),u.bust,'cm'],[t('waist'),u.waist,'cm'],[t('hips'),u.hips,'cm'],[t('height'),u.height,'cm']];
    c.innerHTML=`<h3 style="font-size:1.1rem;font-weight:600;color:var(--text);margin-bottom:1.1rem;">${t('tab_meas')}</h3>
    <div class="mcards">${fields.map(([l,v,u2])=>`<div class="mcard"><div class="mcard-v">${v||'—'}</div><div class="mcard-u">${u2}</div><div class="mcard-l">${l}</div></div>`).join('')}</div>
    <div style="margin-top:1.8rem;"><h4 style="font-size:0.7rem;color:var(--accent);letter-spacing:0.15em;text-transform:uppercase;margin-bottom:0.9rem;font-family:Syne,sans-serif;">${t('update_meas')}</h4>
    <div class="mgrid">
      <div class="fgroup2"><label>${t('bust')}</label><input class="finput" type="number" id="upBust" value="${u.bust||''}" /></div>
      <div class="fgroup2"><label>${t('waist')}</label><input class="finput" type="number" id="upWaist" value="${u.waist||''}" /></div>
      <div class="fgroup2"><label>${t('hips')}</label><input class="finput" type="number" id="upHips" value="${u.hips||''}" /></div>
      <div class="fgroup2"><label>${t('height')}</label><input class="finput" type="number" id="upHeight" value="${u.height||''}" /></div>
    </div>
    <button class="btn-xs solid" onclick="saveMeas()" style="margin-top:0.5rem;">${t('save_meas')}</button></div>`;
  } else if (tab==='listings') {
    const mine=S.listings.filter(d=>d.listedBy===u.email);
    c.innerHTML=mine.length?`<div class="dress-grid">${mine.map(dCard).join('')}</div>`:`<p style="color:var(--text2);font-size:0.88rem;">${t('no_listings')} <a onclick="nav('list')" style="color:var(--accent);cursor:pointer;">${t('list_first')}</a></p>`;
  } else if (tab==='wish') {
    const saved=[...dresses,...S.listings].filter(d=>S.wish.includes(d.id));
    c.innerHTML=saved.length?`<div class="dress-grid">${saved.map(dCard).join('')}</div>`:`<p style="color:var(--text2);font-size:0.88rem;">${t('no_wishlist')} <a onclick="nav('catalog')" style="color:var(--accent);cursor:pointer;">${t('explore_cat')}</a></p>`;
  } else {
    c.innerHTML=`<p style="color:var(--text2);font-size:0.88rem;">${t('no_rentals')}</p>`;
  }
}
function saveMeas() {
  const u=S.user;
  u.bust=parseInt(document.getElementById('upBust').value)||u.bust;
  u.waist=parseInt(document.getElementById('upWaist').value)||u.waist;
  u.hips=parseInt(document.getElementById('upHips').value)||u.hips;
  u.height=parseInt(document.getElementById('upHeight').value)||u.height;
  S.user=u; localStorage.setItem('vesti_user',JSON.stringify(u));
  const acc=JSON.parse(localStorage.getItem('vesti_accounts')||'[]');
  const idx=acc.findIndex(a=>a.email===u.email);
  if (idx>=0) { acc[idx]=u; localStorage.setItem('vesti_accounts',JSON.stringify(acc)); }
  showToast(t('meas_saved'),'✓'); renderProfile();
}

// ===================== TOAST =====================
function showToast(msg,ico='✓') {
  const t2=document.getElementById('toast');
  document.getElementById('toastIco').textContent=ico;
  document.getElementById('toastTxt').textContent=msg;
  t2.classList.add('show');
  setTimeout(()=>t2.classList.remove('show'),3200);
}

// ===================== INIT =====================
updateNavAuth();
renderHomeGrid();
applyTranslations();
</script>
</body>
</html>
