/* ============================================================
   PocketPilot — screen definitions (LIGHT, matches team Figma)
   Shared by index.html (interactive prototype) and deck.html (PDF).
   4 screens are faithful to the storyboard (Home, Privacy Review,
   Working, Ready); 4 extend it in the same style (Welcome/trial,
   Confirm gate, Privacy-trail details, Connect/setup).
   ============================================================ */
(function () {
  const IC = {
    check: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>',
    checkS: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12l5 5L20 6"/></svg>',
    home: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 10v10h14V10"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    vault: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>',
    shield: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/></svg>',
    server: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M6 18a4 4 0 010-8 5 5 0 019.6-1.3A3.5 3.5 0 0118 18z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.9"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="M3 6l9 7 9-7"/></svg>',
    replay: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 109-9 9 9 0 00-6.4 2.7L3 8"/><path d="M3 3v5h5"/></svg>',
    spark: '<svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor"><path d="M12 2l2.2 6.2L20.5 10l-6.3 1.8L12 18l-2.2-6.2L3.5 10l6.3-1.8z"/></svg>',
    doc: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/></svg>',
  };

  const anon = `<span class="anon" data-goto="setup">${IC.lock} Anon</span>`;
  function head(title, sub) {
    return `<div class="pp-head"><div><div class="ttl">PocketPilot</div><div class="sub">${sub}</div></div><div class="spacer"></div>${anon}</div>`;
  }
  function tabbar(active) {
    const t = (k, ic, lab, go) => `<div class="tab${k === active ? ' active' : ''}" data-goto="${go}">${ic}<span>${lab}</span></div>`;
    return `<div class="tabbar">${t('home', IC.home, 'Home', 'home')}${t('tasks', IC.clock, 'Tasks', 'ready')}${t('vault', IC.vault, 'Vault', 'privacy')}</div>`;
  }

  const S = {};

  S.welcome = `
    <div class="screen" style="justify-content:center;align-items:center;text-align:center;padding:44px 34px 34px;">
      <div class="grow" style="display:flex;flex-direction:column;justify-content:center;align-items:center;gap:24px;">
        <div class="logo">${IC.spark}</div>
        <div>
          <div style="font-size:30px;font-weight:800;letter-spacing:-0.03em;">PocketPilot</div>
          <div class="muted" style="font-size:14.5px;line-height:1.55;margin-top:10px;max-width:250px;font-weight:500;">Get real tasks done across your apps — while your private details never leave your phone.</div>
        </div>
        <div class="dots3"><i style="background:var(--green)"></i><i style="background:var(--blue)"></i><i style="background:var(--purple)"></i></div>
      </div>
      <div style="width:100%;display:flex;flex-direction:column;gap:12px;">
        <div class="banner banner-green" style="text-align:left"><div class="bic">${IC.shield}</div><div><div class="bt">Anonymous by default</div><div class="bd">Try a full task with no account and no sign-in.</div></div></div>
        <button class="btn btn-green" data-goto="home">Start a private task</button>
        <button class="btn btn-white" data-goto="setup">Connect a home device</button>
      </div>
    </div>`;

  S.home = `
    <div class="screen">
      ${head('home', 'Start from a private task')}
      <div class="pp-body">
        <div class="card">
          <h3>What do you need done?</h3>
          <div class="taskbox" data-fill="Summarize this PDF and prepare a reply email.">Summarize this PDF and prepare a reply email.</div>
          <div class="chips"><span class="chip chip-blue">PDF attached</span><span class="chip chip-green">Mail ready</span></div>
        </div>
        <button class="btn btn-green" data-goto="privacy">Continue</button>
        <div class="banner banner-green"><div class="bic">${IC.checkS}</div><div><div class="bt">Anonymous mode is on</div><div class="bd">The assistant never sees raw names, files, or tool outputs.</div></div></div>
        <div class="grow"></div>
      </div>
      ${tabbar('home')}
    </div>`;

  S.privacy = `
    <div class="screen">
      ${head('privacy', 'Check what leaves the phone')}
      <div class="pp-body">
        <div class="card">
          <h3>Protected request</h3>
          <div class="cardsub">Sensitive details are replaced before cloud assistance starts.</div>
          <div class="taskbox">Summarize <span class="tokb">[LOCAL_FILE]</span> and draft a reply to <span class="tokg">[CONTACT]</span>.</div>
        </div>
        <div class="card">
          <h3 style="margin-bottom:14px">Private vault</h3>
          <div class="vault-item"><div class="avatar avatar-blue">P</div><div class="vi-main"><div class="vi-t">[LOCAL_FILE]</div><div class="vi-d">Resolved only on this phone</div></div><div class="vi-tag tag-blue">Hidden</div></div>
          <div class="vault-item"><div class="avatar avatar-green">@</div><div class="vi-main"><div class="vi-t">[CONTACT]</div><div class="vi-d">Resolved only on this phone</div></div><div class="vi-tag tag-green">Hidden</div></div>
        </div>
        <div class="grow"></div>
        <button class="btn btn-purple" data-goto="working">Ask assistant safely</button>
      </div>
      ${tabbar('vault')}
    </div>`;

  S.working = `
    <div class="screen">
      ${head('working', 'Phone, home server, and cloud')}
      <div class="pp-body">
        <div class="card">
          <div class="row" style="justify-content:space-between;align-items:flex-start"><h3>Routing securely</h3><span class="route" style="flex:none"><span style="width:20px;height:20px;border-radius:50%;background:var(--blue)"></span></span></div>
          <div class="cardsub">PocketPilot moves between phone, private home tools, and cloud assistance without exposing raw details.</div>
        </div>
        <div class="card">
          <div class="route">
            <div class="rline"></div>
            <div class="node node-green"><div class="dotc"><div class="inner"></div></div><div class="nlab">Phone</div><div class="nsub">local vault</div></div>
            <div class="node node-blue"><div class="dotc"><div class="inner"></div></div><div class="nlab">Home</div><div class="nsub">private tools</div></div>
            <div class="node node-purple"><div class="dotc"><div class="inner"></div></div><div class="nlab">Cloud</div><div class="nsub">assistant</div></div>
          </div>
          <div class="active-now">Active now</div>
          <div class="banner banner-blue" style="margin-top:14px"><div class="bic">${IC.server}</div><div><div class="bd" style="font-weight:700;color:var(--blue-ink);opacity:1">Currently using private home tools behind the filter.</div></div></div>
        </div>
        <div class="grow"></div>
        <button class="btn btn-green" data-goto="confirm">Review the reply</button>
      </div>
      ${tabbar('home')}
    </div>`;

  S.confirm = `
    <div class="screen">
      ${head('confirm', 'Review before sending')}
      <div class="pp-body">
        <div class="card">
          <h3>Reply ready for review</h3>
          <div class="cardsub">Real details were restored on your phone just now — nothing has been sent yet.</div>
          <div style="margin-top:14px">
            <div class="mailrow"><span class="k">To</span><span class="v">alice@example.com</span></div>
            <div class="mailrow"><span class="k">Subject</span><span class="v">Re: assignment PDF</span></div>
            <div class="mailrow"><span class="k">Body</span><span class="v muted">Hi Alice — here's a short summary of the PDF and the key deadlines…</span></div>
          </div>
        </div>
        <div class="banner banner-green"><div class="bic">${IC.lock}</div><div><div class="bt">Restored on-device</div><div class="bd">The cloud only ever saw [CONTACT]; the address was filled in here.</div></div></div>
        <div class="grow"></div>
        <div class="btn-row"><button class="btn btn-white" data-goto="working">Edit</button><button class="btn btn-green" data-goto="ready">Looks good</button></div>
      </div>
    </div>`;

  S.ready = `
    <div class="screen">
      ${head('ready', 'Task recap')}
      <div class="pp-body">
        <div class="card">
          <div class="check-badge">${IC.check}</div>
          <h3 style="font-size:24px;margin-top:16px">Task done</h3>
          <div class="cardsub">Your assistant completed the request and restored private details on-device.</div>
          <div class="btn-row" style="margin-top:18px"><button class="btn btn-green" data-goto="details">View details</button><button class="btn btn-white" data-goto="home">New task</button></div>
        </div>
        <div class="card">
          <h3>Summary</h3>
          <div class="sum-row sum-green"><div class="sic">${IC.checkS}</div><div><div class="st">Email draft prepared</div><div class="sd">Ready for final review</div></div></div>
          <div class="sum-row sum-blue"><div class="sic">P</div><div><div class="st">PDF summarized locally</div><div class="sd">Private details restored</div></div></div>
          <div class="banner banner-plain" style="margin-top:12px"><div class="bd">Cloud saw only anonymous labels.</div></div>
        </div>
        <div class="grow"></div>
      </div>
      ${tabbar('home')}
    </div>`;

  S.details = `
    <div class="screen">
      ${head('details', 'Where your data went')}
      <div class="pp-body">
        <div class="card">
          <h3 style="margin-bottom:16px">Privacy trail</h3>
          <div class="trail">
            <div class="trail-item tp"><div class="th-t">Captured on phone</div><div class="th-d">PDF + task read locally and stored in the private vault.</div></div>
            <div class="trail-item th"><div class="th-t">Handled by private home tools</div><div class="th-d">Summarised behind the filter — raw text never left home.</div></div>
            <div class="trail-item tc"><div class="th-t">Cloud assistant helped</div><div class="th-d">Saw only [LOCAL_FILE] and [CONTACT] — no real values.</div></div>
            <div class="trail-item tp"><div class="th-t">Restored on your phone</div><div class="th-d">Labels swapped back to real details just before the draft.</div></div>
          </div>
        </div>
        <div class="card tight">
          <div class="cardsub" style="margin:0 0 12px;font-weight:700;color:var(--ink)">Cloud only ever saw</div>
          <div class="row" style="justify-content:space-between;font-size:13.5px;font-weight:600;padding:6px 0"><span class="tokb">[LOCAL_FILE]</span><span class="muted">anonymous label</span></div>
          <div class="row" style="justify-content:space-between;font-size:13.5px;font-weight:600;padding:6px 0"><span class="tokg">[CONTACT]</span><span class="muted">anonymous label</span></div>
        </div>
        <div class="grow"></div>
        <div class="btn-row"><button class="btn btn-white" data-goto="details">${IC.replay} Replay</button><button class="btn btn-green" data-goto="ready">Done</button></div>
      </div>
    </div>`;

  S.setup = `
    <div class="screen">
      ${head('setup', 'Connect your private tools')}
      <div class="pp-body">
        <div class="card">
          <div class="row" style="gap:14px"><div class="sic" style="width:44px;height:44px;border-radius:12px;background:var(--green-soft);color:var(--green)">${IC.server}</div>
          <div style="flex:1"><div class="vi-t">Home server</div><div class="vi-d">Studio-Mini · on your home network</div></div>
          <span class="anon" style="cursor:default;background:var(--green-soft)">${IC.checkS} Paired</span></div>
        </div>
        <div class="card">
          <div class="setting-row"><div class="sic">${IC.shield}</div><div class="lab"><div class="t">Anonymous mode</div><div class="s">Assistant never sees raw values</div></div><div class="toggle"></div></div>
          <div class="setting-row"><div class="sic">${IC.cloud}</div><div class="lab"><div class="t">Cloud assistance</div><div class="s">Anonymous labels only</div></div><div class="toggle"></div></div>
          <div class="setting-row"><div class="sic">${IC.clock}</div><div class="lab"><div class="t">Keep privacy trail</div><div class="s">Record every data hop</div></div><div class="toggle"></div></div>
        </div>
        <div class="banner banner-plain"><div class="bd">You can keep using PocketPilot anonymously — connect only to add your own private home tools.</div></div>
        <div class="grow"></div>
        <button class="btn btn-green" data-goto="home">Done</button>
      </div>
      ${tabbar('home')}
    </div>`;

  const META = {
    welcome: { name: 'Welcome / trial entry', cap: 'Anonymous by default — start a real task immediately, with no account and no device pairing required.', group: 'Get started' },
    home: { name: 'Task input', cap: 'Describe any task in plain language. In demo mode a file is already attached and mail is ready, so users go straight to core value.', group: 'Capture' },
    privacy: { name: 'Privacy review', cap: 'The core screen: the request is rewritten with [LOCAL_FILE] / [CONTACT] before anything reaches the cloud, and the private vault keeps the real values on-device.', group: 'Protect' },
    working: { name: 'Routing securely', cap: 'A live view of the task moving Phone → Home → Cloud, using private home tools behind the filter without exposing raw details.', group: 'Route' },
    confirm: { name: 'Review before sending', cap: 'The confirmation gate: real details are restored on-device and the drafted reply is shown for approval before anything is sent.', group: 'Confirm' },
    ready: { name: 'Task recap', cap: 'Task done — the assistant finished and restored private details on-device; the summary shows the cloud saw only anonymous labels.', group: 'Done' },
    details: { name: 'Privacy trail', cap: 'A per-hop trail proving exactly what each domain saw — verifiable evidence that the cloud only ever received anonymous labels.', group: 'Verify' },
    setup: { name: 'Connect private tools', cap: 'The one place setup is needed: pair a home server to add your own private tools. Everything else works anonymously first.', group: 'Setup' },
  };

  const ORDER = ['welcome', 'home', 'privacy', 'working', 'confirm', 'ready', 'details', 'setup'];

  function buildPhone(id) {
    const el = document.createElement('div');
    el.className = 'phone';
    el.dataset.screen = id;
    el.innerHTML = S[id];
    return el;
  }

  window.PP = { screens: S, meta: META, order: ORDER, buildPhone, IC };
})();
