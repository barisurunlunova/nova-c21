import { useState } from 'react';

const COLORS = {
  dark: '#252526',
  gold: '#beaf87',
  gold2: '#a19276',
  bg: '#e6e7e8',
  white: '#ffffff',
  smoke: '#808285',
  red: '#c8102e',
};

const TEAM = [
  {
    id: 'bu',
    name: 'Barış Urunlu',
    role: 'Broker',
    initials: 'BU',
    online: true,
  },
  {
    id: 'eu',
    name: 'Ece Urunlu',
    role: 'Broker',
    initials: 'EU',
    online: true,
  },
  {
    id: 'bk',
    name: 'Batuhan Kısa',
    role: 'Broker Asistanı',
    initials: 'BK',
    online: true,
  },
  {
    id: 'ya',
    name: 'Yiğit Atasoy',
    role: 'Danışman',
    initials: 'YA',
    online: true,
  },
  {
    id: 'po',
    name: 'Pınar Öner',
    role: 'Danışman',
    initials: 'PÖ',
    online: true,
  },
  {
    id: 'ma',
    name: 'Mert Albayrak',
    role: 'Danışman',
    initials: 'MA',
    online: false,
  },
  {
    id: 'hm',
    name: 'Hilal Menteş',
    role: 'Danışman',
    initials: 'HM',
    online: false,
  },
  {
    id: 'fo',
    name: 'Fulya Özcan',
    role: 'Danışman',
    initials: 'FO',
    online: true,
  },
  {
    id: 'sy',
    name: 'Suna Yılmaz',
    role: 'Danışman',
    initials: 'SY',
    online: false,
  },
  {
    id: 'bc',
    name: 'Barış Çaylı',
    role: 'Danışman',
    initials: 'BÇ',
    online: false,
  },
  {
    id: 'fs',
    name: 'Furkan Sağdıç',
    role: 'Danışman',
    initials: 'FS',
    online: true,
  },
  {
    id: 'ts',
    name: 'Taha Şimşek',
    role: 'Danışman',
    initials: 'TŞ',
    online: false,
  },
  {
    id: 'sc',
    name: 'Selda Çaylı',
    role: 'Danışman',
    initials: 'SÇ',
    online: false,
  },
  {
    id: 'yb',
    name: 'Yağmur Baytekin',
    role: 'Danışman',
    initials: 'YB',
    online: true,
  },
];

const TABS = [
  { id: 'home', icon: '🏠', label: 'Ana Sayfa' },
  { id: 'messages', icon: '💬', label: 'Mesajlar' },
  { id: 'portfolio', icon: '🏢', label: 'Portföy' },
  { id: 'crm', icon: '👥', label: 'CRM' },
  { id: 'calendar', icon: '📅', label: 'Takvim' },
  { id: 'team', icon: '👤', label: 'Ekip' },
  { id: 'league', icon: '🏆', label: 'Nova Ligi' },
  { id: 'broker', icon: '🎓', label: 'Broker' },
];

const s: Record<string, any> = {
  phone: {
    width: '100%',
    maxWidth: 390,
    margin: '0 auto',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: COLORS.bg,
    overflow: 'hidden',
    fontFamily: 'system-ui,sans-serif',
  },
  topbar: { background: COLORS.dark, padding: '12px 16px 10px', flexShrink: 0 },
  topbarInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoText: { color: '#fff', fontSize: 17, fontWeight: 600, letterSpacing: 1 },
  logoSub: { color: COLORS.gold, fontSize: 10, letterSpacing: 2 },
  content: {
    flex: 1,
    overflowY: 'auto' as const,
    padding: 14,
    paddingBottom: 80,
  },
  bottomNav: {
    position: 'fixed' as const,
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    maxWidth: 390,
    background: COLORS.dark,
    display: 'flex',
    borderTop: '1px solid #333',
    zIndex: 100,
  },
  navItem: (active: boolean) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    padding: '8px 2px 10px',
    cursor: 'pointer',
    opacity: active ? 1 : 0.5,
  }),
  navIcon: (active: boolean) => ({
    fontSize: 18,
    color: active ? COLORS.gold : '#666',
    marginBottom: 2,
  }),
  navLabel: (active: boolean) => ({
    fontSize: 9,
    color: active ? COLORS.gold : '#666',
  }),
  card: {
    background: COLORS.white,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    border: '0.5px solid #ddd',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: COLORS.dark,
    marginBottom: 10,
    marginTop: 16,
  },
  statGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8,
    marginBottom: 10,
  },
  statCard: {
    background: COLORS.white,
    borderRadius: 10,
    padding: 12,
    border: '0.5px solid #ddd',
  },
  quickGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 8,
    marginBottom: 10,
  },
  quickBtn: {
    background: COLORS.white,
    border: '0.5px solid ' + COLORS.gold,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center' as const,
    cursor: 'pointer',
  },
  hapCard: {
    background: COLORS.dark,
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  progressBar: (pct: number) => ({
    height: 4,
    borderRadius: 2,
    background: COLORS.gold,
    width: pct + '%',
    transition: 'width .5s',
  }),
  bubble: (out: boolean) => ({
    maxWidth: '75%',
    padding: '9px 13px',
    borderRadius: 16,
    fontSize: 13,
    background: out ? COLORS.gold : COLORS.white,
    border: out ? 'none' : '0.5px solid #ddd',
    alignSelf: out ? 'flex-end' : 'flex-start',
    color: COLORS.dark,
  }),
};

function Avatar({ initials, color = '#beaf87', size = 40, online }: any) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: size * 0.3,
        fontWeight: 600,
        color: COLORS.dark,
        flexShrink: 0,
        position: 'relative',
      }}
    >
      {initials}
      {online !== undefined && (
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 10,
            height: 10,
            borderRadius: '50%',
            background: online ? '#4CAF50' : '#ccc',
            border: '2px solid white',
          }}
        />
      )}
    </div>
  );
}

function HomeTab({ tasks, setTasks, setCelebration, switchTab }: any) {
  const toggle = (i: number) => {
    const updated = [...tasks];
    updated[i].done = !updated[i].done;
    setTasks(updated);
    if (
      updated[i].done &&
      (updated[i].type === 'tapu' || updated[i].type === 'kira')
    ) {
      setCelebration({
        show: true,
        type: updated[i].type,
        name: updated[i].name,
      });
    }
  };
  const typeColor: any = {
    gosterim: '#4CAF50',
    tapu: COLORS.red,
    toplanti: '#2196F3',
    kira: COLORS.gold,
  };
  return (
    <div>
      <div style={s.hapCard}>
        <div
          style={{
            color: COLORS.gold,
            fontSize: 10,
            letterSpacing: 1,
            marginBottom: 6,
          }}
        >
          GÜNLÜK HAP BİLGİ
        </div>
        <div style={{ color: '#eee', fontSize: 13, lineHeight: 1.6 }}>
          İstanbul konut fiyatları bu ay %2.3 arttı. Anadolu Yakası kiralık
          talepte güçlü seyrediyor. "Fırsat hazır olanı sever."
        </div>
      </div>
      <div style={s.sectionTitle}>Günlük Program</div>
      <div style={s.card}>
        {tasks.map((t: any, i: number) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 0',
              borderBottom: i < tasks.length - 1 ? '0.5px solid #eee' : 'none',
            }}
          >
            <div
              onClick={() => toggle(i)}
              style={{
                width: 22,
                height: 22,
                borderRadius: '50%',
                border: '2px solid ' + COLORS.gold,
                background: t.done ? COLORS.gold : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                fontSize: 12,
                color: COLORS.dark,
              }}
            >
              {t.done ? '✓' : ''}
            </div>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: typeColor[t.type],
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 13,
                  color: t.done ? '#aaa' : COLORS.dark,
                  textDecoration: t.done ? 'line-through' : 'none',
                  fontWeight: 500,
                }}
              >
                {t.name}
              </div>
              <div style={{ fontSize: 11, color: COLORS.smoke }}>{t.time}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={s.sectionTitle}>İstatistikler</div>
      <div style={s.statGrid}>
        {[
          ['Aktif İlan', '47', '+3 bu hafta'],
          ['Satış', '12', 'Bu ay'],
          ['Müşteri', '183', 'CRM toplam'],
          ['Ciro', '₺4.2M', 'Bu ay'],
        ].map(([l, v, s]) => (
          <div key={l} style={s.statCard}>
            <div style={{ fontSize: 11, color: COLORS.smoke, marginBottom: 4 }}>
              {l}
            </div>
            <div style={{ fontSize: 22, fontWeight: 600, color: COLORS.dark }}>
              {v}
            </div>
            <div style={{ fontSize: 10, color: COLORS.gold2 }}>{s}</div>
          </div>
        ))}
      </div>
      <div style={s.sectionTitle}>Hızlı İşlemler</div>
      <div style={s.quickGrid}>
        {[
          ['🏢', 'Yeni Portföy', 2],
          ['👤', 'Yeni Müşteri', 3],
          ['📄', 'Belge Tara', null],
          ['🎓', 'Brokera Sor', 7],
        ].map(([ico, lbl, tab]) => (
          <div
            key={lbl as string}
            style={s.quickBtn}
            onClick={() => tab !== null && switchTab(tab as number)}
          >
            <div style={{ fontSize: 22, marginBottom: 4 }}>{ico}</div>
            <div style={{ fontSize: 11, color: COLORS.dark, fontWeight: 500 }}>
              {lbl as string}
            </div>
          </div>
        ))}
      </div>
      <div style={s.sectionTitle}>Performans Sıralaması</div>
      <div style={s.card}>
        {[
          ['🥇', 'Yiğit Atasoy', '₺980K'],
          ['🥈', 'Pınar Öner', '₺745K'],
          ['🥉', 'Mert Albayrak', '₺612K'],
        ].map(([m, n, v]) => (
          <div
            key={n as string}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 0',
              borderBottom: '0.5px solid #eee',
            }}
          >
            <span style={{ fontSize: 18 }}>{m}</span>
            <span style={{ flex: 1, fontSize: 13, color: COLORS.dark }}>
              {n as string}
            </span>
            <span
              style={{ fontSize: 12, fontWeight: 600, color: COLORS.gold2 }}
            >
              {v as string}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MessagesTab() {
  const [chat, setChat] = useState<any>(null);
  const [msg, setMsg] = useState('');
  const [messages, setMessages] = useState([
    {
      out: false,
      text: 'Merhaba! Kadıköy portföyünü müşteriye gösterdim, çok beğendi.',
      time: '09:12',
    },
    { out: true, text: 'Harika! Teklif verecekler mi?', time: '09:15' },
    { out: false, text: 'Evet, bugün değerlendirecekler.', time: '09:18' },
  ]);
  const convos = [
    {
      id: 'genel',
      name: 'Genel — NOVA',
      preview: 'Yiğit: Tapu tamamlandı!',
      time: '10:23',
      unread: 3,
      online: true,
    },
    ...TEAM.slice(3, 9).map((m) => ({
      id: m.id,
      name: m.name,
      preview: 'Son mesaj...',
      time: 'Dün',
      unread: 0,
      online: m.online,
    })),
  ];
  const send = () => {
    if (!msg.trim()) return;
    setMessages([...messages, { out: true, text: msg, time: 'Şimdi' }]);
    setMsg('');
  };
  if (chat)
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 130px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '0 0 12px',
            borderBottom: '0.5px solid #ddd',
            marginBottom: 10,
          }}
        >
          <span
            style={{ fontSize: 20, cursor: 'pointer' }}
            onClick={() => setChat(null)}
          >
            ←
          </span>
          <Avatar
            initials={chat.name
              .split(' ')
              .map((w: string) => w[0])
              .join('')
              .slice(0, 2)}
            size={32}
          />
          <span style={{ fontSize: 14, fontWeight: 600, color: COLORS.dark }}>
            {chat.name}
          </span>
        </div>
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            marginBottom: 10,
          }}
        >
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: m.out ? 'flex-end' : 'flex-start',
              }}
            >
              <div style={s.bubble(m.out)}>{m.text}</div>
              <div style={{ fontSize: 10, color: COLORS.smoke, marginTop: 3 }}>
                {m.time}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Mesaj yaz..."
            style={{
              flex: 1,
              border: '0.5px solid #ccc',
              borderRadius: 20,
              padding: '8px 14px',
              fontSize: 13,
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
          <button
            onClick={send}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: COLORS.gold,
              border: 'none',
              cursor: 'pointer',
              fontSize: 16,
            }}
          >
            ➤
          </button>
        </div>
      </div>
    );
  return (
    <div>
      <div style={s.sectionTitle}>Mesajlar</div>
      {convos.map((c) => (
        <div
          key={c.id}
          onClick={() => setChat(c)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 0',
            borderBottom: '0.5px solid #eee',
            cursor: 'pointer',
          }}
        >
          <Avatar initials={c.name.slice(0, 2)} online={c.online} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span
                style={{ fontSize: 13, fontWeight: 600, color: COLORS.dark }}
              >
                {c.name}
              </span>
              <span style={{ fontSize: 10, color: COLORS.smoke }}>
                {c.time}
              </span>
            </div>
            <div
              style={{
                fontSize: 12,
                color: COLORS.smoke,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {c.preview}
            </div>
          </div>
          {c.unread > 0 && (
            <div
              style={{
                background: COLORS.red,
                color: '#fff',
                borderRadius: 10,
                fontSize: 10,
                minWidth: 18,
                height: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4px',
              }}
            >
              {c.unread}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PortfolioTab() {
  const [filter, setFilter] = useState('Tümü');
  const items = [
    {
      title: '3+1 Daire — Moda',
      addr: 'Moda Cad. No:42',
      price: '₺18.500.000',
      status: 'Satılık',
      img: '🏙',
      views: 284,
      services: 5,
      advisor: 'Y. Atasoy',
    },
    {
      title: '2+1 Daire — Bağdat',
      addr: 'Bağdat Cad. No:8',
      price: '₺22.000.000',
      status: 'Görüşmede',
      img: '🏢',
      views: 142,
      services: 3,
      advisor: 'P. Öner',
    },
    {
      title: 'Dükkan — Kalamış',
      addr: 'Kalamış Sahil Yolu',
      price: '₺45.000/ay',
      status: 'Kiralık',
      img: '🏪',
      views: 98,
      services: 7,
      advisor: 'M. Albayrak',
    },
    {
      title: '4+1 Villa — Bostancı',
      addr: 'Bostancı Mah.',
      price: '₺35.000.000',
      status: 'Satılık',
      img: '🏡',
      views: 321,
      services: 9,
      advisor: 'H. Menteş',
    },
  ];
  const statusColor: any = {
    Satılık: COLORS.red,
    Kiralık: '#1a73e8',
    Görüşmede: COLORS.gold,
  };
  const filtered =
    filter === 'Tümü' ? items : items.filter((i) => i.status === filter);
  return (
    <div>
      <div style={s.sectionTitle}>Portföy</div>
      <div
        style={{
          display: 'flex',
          gap: 6,
          marginBottom: 12,
          flexWrap: 'wrap' as const,
        }}
      >
        {['Tümü', 'Satılık', 'Kiralık', 'Görüşmede'].map((f) => (
          <div
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '5px 12px',
              borderRadius: 16,
              fontSize: 11,
              border: '0.5px solid ' + (filter === f ? COLORS.gold : '#ccc'),
              background: filter === f ? COLORS.gold : COLORS.white,
              cursor: 'pointer',
              color: filter === f ? COLORS.dark : COLORS.smoke,
              fontWeight: filter === f ? 600 : 400,
            }}
          >
            {f}
          </div>
        ))}
      </div>
      {filtered.map((p, i) => (
        <div
          key={i}
          style={{
            background: COLORS.white,
            borderRadius: 12,
            marginBottom: 10,
            overflow: 'hidden',
            border: '0.5px solid #ddd',
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg,#b8c5d6,#8da5c0)',
              height: 90,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 36,
              position: 'relative',
            }}
          >
            {p.img}
            <div
              style={{
                position: 'absolute',
                top: 8,
                left: 8,
                padding: '3px 8px',
                borderRadius: 8,
                fontSize: 10,
                fontWeight: 600,
                background: statusColor[p.status],
                color: p.status === 'Görüşmede' ? COLORS.dark : '#fff',
              }}
            >
              {p.status}
            </div>
          </div>
          <div style={{ padding: 10 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.dark }}>
              {p.title}
            </div>
            <div style={{ fontSize: 11, color: COLORS.smoke, marginTop: 2 }}>
              {p.addr}
            </div>
            <div
              style={{
                fontSize: 15,
                fontWeight: 600,
                color: COLORS.gold2,
                marginTop: 6,
              }}
            >
              {p.price}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
              {[
                ['👁', p.views + ' görüntülenme'],
                ['🚗', p.services + ' servis'],
                ['👤', p.advisor],
              ].map(([ic, tx]) => (
                <div
                  key={tx as string}
                  style={{
                    fontSize: 10,
                    color: COLORS.smoke,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                  }}
                >
                  {ic} {tx as string}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CRMTab() {
  const clients = [
    {
      name: 'Ahmet Yılmaz',
      type: 'Alıcı',
      heat: 'Sıcak',
      heatColor: '#ffebee',
      heatText: '#c62828',
      stage: 2,
      note: '3+1 Moda/Kadıköy, bütçe 20M',
      advisor: 'Y. Atasoy',
    },
    {
      name: 'Fatma Demir',
      type: 'Satıcı',
      heat: 'Ilık',
      heatColor: '#fff8e1',
      heatText: '#f57f17',
      stage: 1,
      note: 'Suadiyede 2+1 satmak istiyor',
      advisor: 'P. Öner',
    },
    {
      name: 'Can Kaya',
      type: 'Kiracı',
      heat: 'Soğuk',
      heatColor: '#e3f2fd',
      heatText: '#1565c0',
      stage: 0,
      note: 'Kadıköyde ofis arıyor',
      advisor: 'M. Albayrak',
    },
    {
      name: 'Selin Arslan',
      type: 'Alıcı',
      heat: 'Sıcak',
      heatColor: '#ffebee',
      heatText: '#c62828',
      stage: 2,
      note: 'Bağdat Cad. villa odaklı',
      advisor: 'H. Menteş',
    },
  ];
  const stages = ['Aktif Arama', 'Görüşme', 'Kapalı'];
  return (
    <div>
      <div style={s.sectionTitle}>Müşteriler (CRM)</div>
      {clients.map((c, i) => (
        <div key={i} style={{ ...s.card, marginBottom: 8 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 8,
            }}
          >
            <div>
              <div
                style={{ fontSize: 13, fontWeight: 600, color: COLORS.dark }}
              >
                {c.name}
              </div>
              <div style={{ fontSize: 11, color: COLORS.smoke }}>
                {c.type} • {c.advisor}
              </div>
            </div>
            <span
              style={{
                fontSize: 10,
                padding: '2px 8px',
                borderRadius: 10,
                fontWeight: 600,
                background: c.heatColor,
                color: c.heatText,
              }}
            >
              {c.heat}
            </span>
          </div>
          <div style={{ fontSize: 12, color: COLORS.smoke, marginBottom: 8 }}>
            {c.note}
          </div>
          <div style={{ fontSize: 11, color: COLORS.smoke, marginBottom: 4 }}>
            Huni: {stages[c.stage]}
          </div>
          <div style={{ display: 'flex', gap: 2 }}>
            {stages.map((_, si) => (
              <div
                key={si}
                style={{
                  flex: 1,
                  height: 4,
                  borderRadius: 2,
                  background: si <= c.stage ? COLORS.gold : '#eee',
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function CalendarTab() {
  const days = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
  const nums = [21, 22, 23, 24, 25, 26, 27];
  const events = [
    {
      title: 'Yer Gösterimi — Moda',
      sub: '10:00 • Yiğit Atasoy',
      bg: '#e8f5e9',
      border: '#4CAF50',
    },
    {
      title: 'Ofis Toplantısı',
      sub: '12:30 • Tüm Ekip',
      bg: '#e3f2fd',
      border: '#2196F3',
    },
    {
      title: 'Tapu İşlemi — Bağdat',
      sub: '15:00 • Pınar Öner',
      bg: '#ffebee',
      border: COLORS.red,
    },
    {
      title: 'Kira Kontratı — Suadiye',
      sub: '17:00 • Mert Albayrak',
      bg: '#fef7e0',
      border: COLORS.gold,
    },
  ];
  return (
    <div>
      <div style={s.sectionTitle}>Takvim — Nisan 2025</div>
      <div style={s.card}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7,1fr)',
            gap: 4,
          }}
        >
          {days.map((d, i) => (
            <div key={d} style={{ textAlign: 'center' }}>
              <div
                style={{ fontSize: 9, color: COLORS.smoke, marginBottom: 4 }}
              >
                {d}
              </div>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  margin: '0 auto',
                  background:
                    i === 2
                      ? COLORS.gold
                      : i === 3
                      ? COLORS.dark
                      : 'transparent',
                  color: i === 2 ? COLORS.dark : i === 3 ? '#fff' : COLORS.dark,
                  fontWeight: i === 2 || i === 3 ? 600 : 400,
                }}
              >
                {nums[i]}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={s.sectionTitle}>23 Nisan Etkinlikleri</div>
      {events.map((e, i) => (
        <div
          key={i}
          style={{
            borderRadius: 8,
            padding: 10,
            marginBottom: 8,
            background: e.bg,
            borderLeft: '3px solid ' + e.border,
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.dark }}>
            {e.title}
          </div>
          <div style={{ fontSize: 11, color: COLORS.smoke, marginTop: 2 }}>
            {e.sub}
          </div>
        </div>
      ))}
    </div>
  );
}

function TeamTab() {
  const colors = [
    '#beaf87',
    '#c8102e',
    '#1a73e8',
    '#2e7d32',
    '#7b1fa2',
    '#00796b',
    '#e65100',
    '#1565c0',
    '#558b2f',
    '#ad1457',
  ];
  return (
    <div>
      <div style={s.sectionTitle}>Ekip ({TEAM.length} kişi)</div>
      {TEAM.map((m, i) => (
        <div
          key={m.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '10px 0',
            borderBottom: '0.5px solid #eee',
          }}
        >
          <Avatar
            initials={m.initials}
            color={colors[i % colors.length]}
            online={m.online}
          />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span
                style={{ fontSize: 13, fontWeight: 600, color: COLORS.dark }}
              >
                {m.name}
              </span>
              <span
                style={{ fontSize: 12, fontWeight: 600, color: COLORS.gold2 }}
              >
                ₺{(Math.random() * 900 + 100).toFixed(0)}K
              </span>
            </div>
            <div style={{ fontSize: 11, color: COLORS.smoke }}>{m.role}</div>
            <div style={{ marginTop: 5 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 10,
                  color: COLORS.smoke,
                  marginBottom: 3,
                }}
              >
                <span>Aylık Hedef</span>
                <span>{Math.floor(Math.random() * 60 + 30)}%</span>
              </div>
              <div style={{ height: 4, background: '#eee', borderRadius: 2 }}>
                <div
                  style={{
                    ...s.progressBar(Math.floor(Math.random() * 60 + 30)),
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LeagueTab() {
  const data = [
    { rank: 1, name: 'Yiğit Atasoy', pts: 487 },
    { rank: 2, name: 'Pınar Öner', pts: 412 },
    { rank: 3, name: 'Mert Albayrak', pts: 356 },
    { rank: 4, name: 'Hilal Menteş', pts: 298 },
    { rank: 5, name: 'Fulya Özcan', pts: 265, me: true },
    { rank: 6, name: 'Furkan Sağdıç', pts: 231 },
    { rank: 7, name: 'Barış Çaylı', pts: 198 },
    { rank: 8, name: 'Suna Yılmaz', pts: 187 },
  ];
  const medals = ['🥇', '🥈', '🥉'];
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
        <div style={{ fontSize: 40 }}>🏆</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: COLORS.dark }}>
          Nova Ligi
        </div>
        <div style={{ fontSize: 12, color: COLORS.smoke, marginTop: 4 }}>
          Nisan 2025
        </div>
      </div>
      {data.map((d: any) => (
        <div
          key={d.rank}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: 10,
            borderRadius: 10,
            marginBottom: 6,
            background: d.me ? '#fffbf2' : COLORS.white,
            border: '0.5px solid ' + (d.me ? COLORS.gold : '#ddd'),
          }}
        >
          <div
            style={{
              width: 24,
              textAlign: 'center',
              fontSize: 13,
              fontWeight: 600,
              color: COLORS.smoke,
            }}
          >
            {d.rank <= 3 ? medals[d.rank - 1] : d.rank}
          </div>
          <div style={{ flex: 1, fontSize: 13, color: COLORS.dark }}>
            {d.name}
            {d.me && (
              <span style={{ color: COLORS.gold, fontSize: 11 }}> (Sen)</span>
            )}
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: COLORS.gold2 }}>
              {d.pts}
            </div>
            <div style={{ fontSize: 10, color: COLORS.smoke }}>puan</div>
          </div>
        </div>
      ))}
      <div style={{ ...s.card, marginTop: 12 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: COLORS.dark,
            marginBottom: 8,
          }}
        >
          Puan Rehberi
        </div>
        {[
          ['Günlük giriş', '5 puan'],
          ['Günlük plan girişi', '1 puan'],
          ['Tamamlanan görev', '1 puan'],
          ['Satılık portföy', '10 puan'],
          ['Ticari portföy', '12 puan'],
          ['İşlem kapama', '25 puan'],
          ['Pazartesi toplantısı', '5 puan'],
          ['Tebrik mesajı', '1 puan'],
        ].map(([k, v]) => (
          <div
            key={k}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: 11,
              color: COLORS.smoke,
              padding: '4px 0',
              borderBottom: '0.5px solid #f5f5f5',
            }}
          >
            <span>• {k}</span>
            <span style={{ fontWeight: 600, color: COLORS.gold2 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BrokerTab() {
  const [question, setQuestion] = useState('');
  const brokers = [
    {
      initials: 'BU',
      name: 'Barış Urunlu',
      color: COLORS.gold,
      q: 'Müşteri komisyon düşürmemi istedi?',
      a: 'Değer sun önce. Son noktada %0.5 maksimum indirim yapılabilir.',
    },
    {
      initials: 'EU',
      name: 'Ece Urunlu',
      color: COLORS.red,
      q: 'Soğuk müşteriye nasıl yaklaşmalıyım?',
      a: 'Değer bazlı içerik paylaş. 15 günde bir hafif dokunuş yeterli.',
    },
  ];
  return (
    <div>
      <div style={s.sectionTitle}>Broker'a Sor</div>
      <div style={{ fontSize: 12, color: COLORS.smoke, marginBottom: 12 }}>
        Soruların her iki broker'a aynı anda iletilir.
      </div>
      {brokers.map((b, i) => (
        <div key={i} style={s.card}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 12,
            }}
          >
            <Avatar
              initials={b.initials}
              color={b.color}
              size={48}
              online={true}
            />
            <div>
              <div
                style={{ fontSize: 14, fontWeight: 600, color: COLORS.dark }}
              >
                {b.name}
              </div>
              <div style={{ fontSize: 11, color: COLORS.smoke }}>
                Broker / Ofis Sahibi
              </div>
            </div>
          </div>
          <div style={{ background: '#f9f9f9', borderRadius: 8, padding: 10 }}>
            <div style={{ fontSize: 11, color: COLORS.smoke, marginBottom: 4 }}>
              Son soru:
            </div>
            <div
              style={{
                fontSize: 12,
                color: COLORS.smoke,
                marginBottom: 6,
                fontStyle: 'italic',
              }}
            >
              "{b.q}"
            </div>
            <div style={{ fontSize: 13, color: COLORS.dark }}>{b.a}</div>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 4 }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: COLORS.dark,
            marginBottom: 8,
          }}
        >
          Yeni Soru Sor
        </div>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Sorunuzu yazın..."
          style={{
            width: '100%',
            border: '0.5px solid #ccc',
            borderRadius: 10,
            padding: 10,
            fontSize: 13,
            fontFamily: 'inherit',
            height: 80,
            outline: 'none',
            resize: 'none',
            boxSizing: 'border-box',
          }}
        />
        <button
          onClick={() => setQuestion('')}
          style={{
            width: '100%',
            marginTop: 8,
            background: COLORS.gold,
            border: 'none',
            borderRadius: 10,
            padding: 11,
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            color: COLORS.dark,
          }}
        >
          Her İki Broker'a Gönder ➤
        </button>
      </div>
    </div>
  );
}

function Celebration({ data, onClose }: any) {
  if (!data.show) return null;
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 390,
        height: '100vh',
        background: 'rgba(0,0,0,0.75)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: COLORS.white,
          borderRadius: 20,
          padding: 30,
          textAlign: 'center',
          maxWidth: 300,
          margin: '0 20px',
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 12 }}>🏆</div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: COLORS.dark,
            marginBottom: 8,
          }}
        >
          {data.type === 'tapu'
            ? 'Tapu Tamamlandı!'
            : 'Kira Kontratı İmzalandı!'}
        </div>
        <div style={{ fontSize: 13, color: COLORS.smoke, marginBottom: 20 }}>
          {data.name} başarıyla kapandı! Tüm ekip sizi kutluyor! 🎉
        </div>
        <button
          onClick={onClose}
          style={{
            background: COLORS.gold,
            border: 'none',
            borderRadius: 20,
            padding: '10px 28px',
            fontSize: 14,
            fontWeight: 600,
            cursor: 'pointer',
            color: COLORS.dark,
          }}
        >
          Ekibi Kutla 🎊
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState(0);
  const [tasks, setTasks] = useState([
    {
      name: 'Yer Gösterimi — Kadıköy',
      time: '10:00',
      type: 'gosterim',
      done: false,
    },
    {
      name: 'Ofis Ziyareti — Mert Albayrak',
      time: '12:30',
      type: 'toplanti',
      done: false,
    },
    {
      name: 'Tapu İşlemi — Bağdat Cad.',
      time: '15:00',
      type: 'tapu',
      done: false,
    },
    {
      name: 'Kira Kontratı — Suadiye',
      time: '17:00',
      type: 'kira',
      done: false,
    },
  ]);
  const [celebration, setCelebration] = useState({
    show: false,
    type: '',
    name: '',
  });

  const tabs = [
    <HomeTab
      tasks={tasks}
      setTasks={setTasks}
      setCelebration={setCelebration}
      switchTab={setTab}
    />,
    <MessagesTab />,
    <PortfolioTab />,
    <CRMTab />,
    <CalendarTab />,
    <TeamTab />,
    <LeagueTab />,
    <BrokerTab />,
  ];

  return (
    <div style={s.phone}>
      <div style={s.topbar}>
        <div style={s.topbarInner}>
          <div>
            <div style={s.logoText}>NOVA</div>
            <div style={s.logoSub}>BY C21 NOVA</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: COLORS.red,
              }}
            />
            <Avatar initials="BU" size={28} />
          </div>
        </div>
      </div>
      <div style={s.content}>{tabs[tab]}</div>
      <div style={s.bottomNav}>
        {TABS.map((t, i) => (
          <div
            key={t.id}
            style={s.navItem(tab === i)}
            onClick={() => setTab(i)}
          >
            <div style={s.navIcon(tab === i)}>{t.icon}</div>
            <div style={s.navLabel(tab === i)}>{t.label}</div>
          </div>
        ))}
      </div>
      <Celebration
        data={celebration}
        onClose={() => setCelebration({ show: false, type: '', name: '' })}
      />
    </div>
  );
}
