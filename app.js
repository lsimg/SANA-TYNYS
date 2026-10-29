const SANA_KEYS = {
  profile: 'sanaUserProfile',
  settings: 'sanaQuitSettings',
  onboarding: 'sanaOnboardingCompleted',
  chat: 'sanaChatHistory',
  calendar: 'sanaCalendar',
  checkins: 'sanaCheckins',
  triggers: 'sanaTriggerHistory',
  exercises: 'sanaExerciseHistory',
  relapses: 'sanaRelapseReviews'
};

const DEFAULT_SETTINGS = {
  startDate: '',
  habitType: 'cigarettes',
  cigarettesPerDay: 10,
  packPrice: 900,
  cigarettesPerPack: 20,
  vapeWeeklyCost: 3000,
  vapeEpisodesPerDay: 8
};

const BODY_STAGES = [
  {
    days: 0,
    time: 'Сейчас',
    title: 'Начало наблюдения',
    body: 'Тело уже реагирует на каждую паузу без никотина: пульс, дыхание и нервная система получают шанс выйти из привычного цикла.',
    feeling: 'Может быть тяга, беспокойство или мысль “сейчас бы одну”. Это ожидаемо: мозг ищет знакомый быстрый способ облегчения.',
    userText: 'Не нужно решать всю жизнь сразу. Достаточно заметить этот момент и выбрать один маленький шаг.',
    category: 'first-hours'
  },
  {
    days: 0.014,
    time: '20 минут',
    title: 'Сердцу немного легче',
    body: 'Пульс и давление могут начать снижаться, а сердцу становится чуть проще работать без новой дозы никотина.',
    feeling: 'Тяга может приходить волнами, особенно если был привычный ритуал: кофе, перерыв, дорога или стресс.',
    userText: 'Волна тяги не длится вечно. Попробуй переждать ближайшие 2 минуты.',
    category: 'first-hours'
  },
  {
    days: 0.33,
    time: '8 часов',
    title: 'Кислороду проще добраться до тканей',
    body: 'Уровень угарного газа постепенно снижается, и крови становится легче переносить кислород к мозгу, сердцу и мышцам.',
    feeling: 'Может появиться усталость или раздражение: организм перестраивается после привычной стимуляции.',
    userText: 'Если стало тяжело, это не слабость. Это тело выходит из никотинового режима.',
    category: 'first-hours'
  },
  {
    days: 0.5,
    time: '12 часов',
    title: 'Кровь переносит кислород лучше',
    body: 'Количество угарного газа в крови продолжает снижаться. Это один из ранних процессов восстановления после курения.',
    feeling: 'У некоторых людей тяга становится сильнее именно в первые сутки, потому что мозг ждёт знакомого облегчения.',
    userText: 'Сейчас помогает не идеальный план, а простое действие: вода, дыхание или короткая прогулка.',
    category: 'first-hours'
  },
  {
    days: 1,
    time: '24 часа',
    title: 'Первый большой шаг',
    body: 'Организм делает заметный шаг к очищению. Сердечно-сосудистой системе уже легче, чем в день активного курения.',
    feeling: 'Может быть напряжение, сонливость, голод или желание заменить привычный ритуал чем-то другим.',
    userText: 'Ты не обязан(а) чувствовать себя идеально. Достаточно продолжать путь мягко.',
    category: 'first-hours'
  },
  {
    days: 2,
    time: '48 часов',
    title: 'Вкус и запах могут просыпаться',
    body: 'Нервные окончания начинают восстанавливаться. У некоторых людей вкус и запах становятся ярче.',
    feeling: 'Тяга может быть заметной, а настроение — нестабильным. Это часто связано с перестройкой дофаминовой системы.',
    userText: 'Если тянет, попробуй назвать триггер: эмоция, место, человек или время дня.',
    category: 'first-hours'
  },
  {
    days: 3,
    time: '72 часа',
    title: 'Дыхательным путям становится свободнее',
    body: 'Бронхи могут постепенно расслабляться. Дышать иногда становится легче, хотя кашель тоже может усилиться из-за очищения.',
    feeling: 'Первые 72 часа часто самые резкие по тяге. Потом волны обычно становятся понятнее и управляемее.',
    userText: 'Сейчас важна не сила воли, а поддержка тела: вода, дыхание, еда, сон и пауза.',
    category: 'first-hours'
  },
  {
    days: 7,
    time: '1 неделя',
    title: 'Паттерны становятся заметнее',
    body: 'Организм продолжает адаптироваться к жизни без постоянной никотиновой стимуляции.',
    feeling: 'Тяга может появляться не постоянно, а в знакомых ситуациях: стресс, компания, кофе, вечер, маршрут.',
    userText: 'Каждый замеченный триггер — это не обвинение, а карта твоей привычки.',
    category: 'weeks-months'
  },
  {
    days: 14,
    time: '2 недели',
    title: 'Кровообращение постепенно улучшается',
    body: 'Кровообращение и перенос кислорода могут работать стабильнее. Нагрузки могут ощущаться немного легче.',
    feeling: 'Может появиться уверенность, но иногда возвращается внезапная тяга. Это нормально: привычка не исчезает по расписанию.',
    userText: 'Если тяга вернулась, это не откат. Это сигнал посмотреть, что её запустило.',
    category: 'weeks-months'
  },
  {
    days: 30,
    time: '1 месяц',
    title: 'Больше контроля',
    body: 'Лёгкие и дыхательные пути продолжают восстанавливаться. Энергии может становиться больше, особенно при регулярном сне и движении.',
    feeling: 'Тяга часто становится более психологической: “за компанию”, “после еды”, “чтобы выдохнуть”.',
    userText: 'Ты уже собираешь данные о себе. Это помогает выбрать замену, которая реально подходит.',
    category: 'weeks-months'
  },
  {
    days: 60,
    time: '2 месяца',
    title: 'Новые ритуалы закрепляются',
    body: 'Тело привыкает к более стабильному уровню кислорода и меньшей нагрузке от никотина.',
    feeling: 'Могут оставаться отдельные острые моменты, особенно при стрессе или сильных эмоциях.',
    userText: 'Хороший вопрос сейчас: “Что сигарета должна была мне дать, и чем я могу заменить это мягче?”',
    category: 'weeks-months'
  },
  {
    days: 90,
    time: '3 месяца',
    title: 'Дышать может быть свободнее',
    body: 'Кровообращение и работа лёгких могут заметно улучшаться. Повседневная активность иногда даётся легче.',
    feeling: 'Тяга может стать редкой, но социальные ситуации всё ещё могут запускать старый сценарий.',
    userText: 'Подготовленная фраза отказа помогает не спорить с собой в моменте.',
    category: 'weeks-months'
  },
  {
    days: 180,
    time: '6 месяцев',
    title: 'Меньше автоматизма',
    body: 'Многие телесные системы работают спокойнее без постоянного никотинового цикла. Дыхание и выносливость могут продолжать улучшаться.',
    feeling: 'Иногда может появиться мысль “я уже контролирую, можно один раз”. Это частый риск после прогресса.',
    userText: 'Один раз может снова включить старую дорожку. Лучше выбрать действие, которое поддержит твой результат.',
    category: 'weeks-months'
  },
  {
    days: 270,
    time: '9 месяцев',
    title: 'Лёгким легче очищаться',
    body: 'Реснички дыхательных путей могут работать активнее, помогая очищать бронхи. Кашель и одышка у многих уменьшаются.',
    feeling: 'Путь может ощущаться более спокойным, но стресс всё ещё может поднимать старую тягу.',
    userText: 'Ты уже знаешь больше о своих триггерах. Это сильнее, чем просто терпеть.',
    category: 'weeks-months'
  },
  {
    days: 365,
    time: '1 год',
    title: 'Сердце получает долгосрочную поддержку',
    body: 'Риски для сердца заметно снижаются по сравнению с продолжением курения. Организм получает больше пространства для восстановления.',
    feeling: 'Иногда важнее не тяга, а идентичность: привыкнуть к себе без никотина.',
    userText: 'Ты не просто “держишься”. Ты строишь новый способ заботиться о себе.',
    category: 'long-term'
  },
  {
    days: 730,
    time: '2 года',
    title: 'Результат становится устойчивее',
    body: 'Сердечно-сосудистая система продолжает получать пользу от жизни без курения и постоянного никотина.',
    feeling: 'Тяга обычно становится редкой, но может всплывать в старых местах или компаниях.',
    userText: 'Если старый триггер появился снова, можно спокойно использовать уже знакомые инструменты.',
    category: 'long-term'
  },
  {
    days: 1825,
    time: '5 лет',
    title: 'Долгосрочные риски продолжают снижаться',
    body: 'Организм продолжает выигрывать от отказа: сосуды, сердце и дыхательная система получают меньше ежедневной нагрузки.',
    feeling: 'Может казаться, что этот этап уже “просто жизнь”. Это тоже важный результат.',
    userText: 'Твой путь стал частью заботы о себе, а не ежедневной борьбой.',
    category: 'long-term'
  },
  {
    days: 3650,
    time: '10 лет',
    title: 'Дыхательная система получает большую дистанцию от дыма',
    body: 'Долгий срок без курения связан со снижением многих рисков, особенно по сравнению с продолжением привычки.',
    feeling: 'Тело давно живёт без ежедневного никотинового цикла. Старые ассоциации могут быть очень слабыми.',
    userText: 'Это результат множества маленьких решений, а не одного идеального дня.',
    category: 'long-term'
  },
  {
    days: 5475,
    time: '15 лет',
    title: 'Очень длинная поддержка сердца и сосудов',
    body: 'После многих лет без курения сердечно-сосудистые риски могут приближаться к уровню людей, которые не курили, хотя индивидуальные факторы всегда важны.',
    feeling: 'Этот этап часто уже не про тягу, а про долгую ценность выбора, который когда-то начался с одного шага.',
    userText: 'Ты не обязан(а) забывать прошлый опыт. Он может быть напоминанием, как далеко ты продвинулся/продвинулась.',
    category: 'long-term'
  }
];

const GROQ_API_KEY = 'PASTE_YOUR_GROQ_API_KEY_HERE';
const GROQ_MODEL = 'llama-3.3-70b-versatile';
const GROQ_FALLBACK_MODELS = ['llama-3.1-8b-instant'];
// TODO: move API calls to backend/serverless function and keep API key in .env.

const SANA_COACH_SYSTEM_PROMPT = `Ты Sana Coach — AI-помощник проекта SanaTynys.

Sana Coach — это не психолог и не врач. Он не лечит и не ставит диагнозы. Его роль — мягко помогать человеку замечать связь между эмоциями, телом, ситуациями и желанием курить. Он не стыдит за срыв. Он не обещает 100% отказ. Он помогает пережить тягу, разобрать триггер и выбрать маленький следующий шаг.

Отвечай на русском языке простыми словами. Поддерживай мягко, без давления, стыда и токсичной мотивации. Не используй обесценивающие фразы, обвинения или команды через силу. Используй язык: "Срыв — это данные, а не поражение", "Ты не начинаешь с нуля", "Один шаг сейчас важнее идеального плана".

Если пользователь пишет про самоповреждение, суицидальные мысли, угрозу жизни, насилие, сильную боль в груди, тяжёлую одышку или опасное состояние — мягко советуй немедленно обратиться к близкому человеку, врачу или экстренной помощи. Не пытайся лечить это через чат.

Когда пользователь хочет курить: спроси уровень тяги 1–10, эмоцию, предложи один маленький шаг на 2–10 минут. Когда был срыв: не ругай, помоги разобрать триггер и следующий мягкий шаг. Важные короткие фразы можно выделять через **жирный markdown**, не используй звёздочки иначе.`;

function getStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    console.warn('Storage read failed', key, error);
    return fallback;
  }
}

function setStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function todayISO() {
  return formatDateISO(new Date());
}

function formatDateISO(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function getQuitSettings() {
  return { ...DEFAULT_SETTINGS, ...getStorage(SANA_KEYS.settings, {}) };
}

function getDaysWithoutSmoking(settings = getQuitSettings()) {
  if (!settings.startDate) return 0;
  const start = new Date(`${settings.startDate}T00:00:00`);
  if (Number.isNaN(start.getTime())) return 0;
  return Math.max(0, Math.floor((new Date() - start) / 86400000));
}

function calculateProgress(settings = getQuitSettings()) {
  const days = getDaysWithoutSmoking(settings);
  const cigarettesPerDay = Number(settings.cigarettesPerDay) || 0;
  const packPrice = Number(settings.packPrice) || 0;
  const cigarettesPerPack = Number(settings.cigarettesPerPack) || 20;
  const vapeWeeklyCost = Number(settings.vapeWeeklyCost) || 0;
  const vapeEpisodesPerDay = Number(settings.vapeEpisodesPerDay) || 0;
  const cigaretteMoney = days * cigarettesPerDay * (packPrice / Math.max(1, cigarettesPerPack));
  const vapeMoney = (days / 7) * vapeWeeklyCost;
  const cigaretteItems = days * cigarettesPerDay;
  const vapeItems = days * vapeEpisodesPerDay;
  let savedMoney = cigaretteMoney;
  let avoidedItems = cigaretteItems;

  if (settings.habitType === 'vape') {
    savedMoney = vapeMoney;
    avoidedItems = vapeItems;
  } else if (settings.habitType === 'both') {
    savedMoney = cigaretteMoney + vapeMoney;
    avoidedItems = cigaretteItems + vapeItems;
  } else if (settings.habitType === 'observe') {
    savedMoney = Math.max(cigaretteMoney, vapeMoney);
    avoidedItems = Math.max(cigaretteItems, vapeItems);
  }

  return { days, savedMoney: Math.round(savedMoney), avoidedItems: Math.round(avoidedItems), stage: getBodyStage(days) };
}

function formatTenge(value) {
  return `₸${Math.round(value).toLocaleString('ru-RU')}`;
}

function getBodyStage(days) {
  return BODY_STAGES.reduce((current, stage) => days >= stage.days ? stage : current, BODY_STAGES[0]);
}

function saveCheckin(state) {
  const checkins = getStorage(SANA_KEYS.checkins, []);
  const entry = { state, createdAt: new Date().toISOString() };
  checkins.push(entry);
  setStorage(SANA_KEYS.checkins, checkins.slice(-160));
  return entry;
}

function saveCalendarEntry(status, note = '') {
  const calendar = getStorage(SANA_KEYS.calendar, {});
  const date = todayISO();
  const previous = calendar[date] || {};
  calendar[date] = {
    date,
    status,
    note: note || previous.note || '',
    createdAt: previous.createdAt || new Date().toISOString()
  };
  setStorage(SANA_KEYS.calendar, calendar);
  return calendar[date];
}

function saveExerciseResult(type, result = {}) {
  const history = getStorage(SANA_KEYS.exercises, []);
  const entry = { type, result, createdAt: new Date().toISOString() };
  history.push(entry);
  setStorage(SANA_KEYS.exercises, history.slice(-160));
  return entry;
}

function recordTrigger(trigger, source = 'exercise') {
  const history = getStorage(SANA_KEYS.triggers, []);
  history.push({ trigger, source, createdAt: new Date().toISOString() });
  setStorage(SANA_KEYS.triggers, history.slice(-120));
}

function buildCoachContext() {
  const profile = getStorage(SANA_KEYS.profile, {});
  const settings = getQuitSettings();
  const progress = calculateProgress(settings);
  const checkins = getStorage(SANA_KEYS.checkins, []).slice(-3);
  const calendar = Object.values(getStorage(SANA_KEYS.calendar, {})).sort((a, b) => a.date.localeCompare(b.date)).slice(-7);
  const triggers = getStorage(SANA_KEYS.triggers, []).slice(-6);
  const exercises = getStorage(SANA_KEYS.exercises, []).slice(-4);
  return `Контекст пользователя SanaTynys:
- Профиль: ${JSON.stringify(profile)}
- Настройки отказа: ${JSON.stringify(settings)}
- Дней: ${progress.days}
- Сэкономлено: ${formatTenge(progress.savedMoney)}
- Не использовано: ${progress.avoidedItems}
- Последние check-ins: ${checkins.map(i => i.state).join(', ') || 'нет'}
- Последние отметки календаря: ${calendar.map(i => `${i.date}:${i.status}`).join(', ') || 'нет'}
- Частые триггеры: ${triggers.map(i => i.trigger).join(', ') || 'нет'}
- Последние упражнения: ${exercises.map(i => i.type).join(', ') || 'нет'}
Не перечисляй этот контекст полностью, используй его мягко.`;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatCoachMessage(content) {
  return escapeHtml(content).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

async function callSanaCoachAPI(messages) {
  if (!GROQ_API_KEY || GROQ_API_KEY === 'PASTE_YOUR_GROQ_API_KEY_HERE') {
    return 'API ключ Groq не добавлен. Вставьте ключ в переменную GROQ_API_KEY в app.js. Для production вынеси ключ на backend/serverless.';
  }
  const chatMessages = [
    { role: 'system', content: SANA_COACH_SYSTEM_PROMPT },
    { role: 'system', content: buildCoachContext() },
    ...messages.slice(-14).map(item => ({
      role: item.role === 'model' ? 'assistant' : item.role,
      content: item.content
    }))
  ];
  const models = [GROQ_MODEL, ...GROQ_FALLBACK_MODELS];
  let lastError;
  for (const model of models) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${GROQ_API_KEY}`
          },
          body: JSON.stringify({
            model,
            messages: chatMessages,
            temperature: 0.7,
            max_completion_tokens: 900
          })
        });
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.error?.message || `Groq status ${response.status}`);
        const text = data.choices?.[0]?.message?.content?.trim();
        if (!text) throw new Error('Groq вернул пустой ответ');
        return text;
      } catch (error) {
        lastError = error;
        const t = String(error.message || '').toLowerCase();
        if ((t.includes('503') || t.includes('overloaded') || t.includes('rate limit')) && attempt === 0) {
          await new Promise(resolve => setTimeout(resolve, 900));
          continue;
        }
        if (!(t.includes('503') || t.includes('429') || t.includes('rate limit') || t.includes('not found') || t.includes('unsupported') || t.includes('model'))) break;
        break;
      }
    }
  }
  console.error('Sana Coach Groq API error:', lastError);
  const lastErrorText = String(lastError?.message || '').toLowerCase();
  if (lastErrorText.includes('quota') || lastErrorText.includes('429') || lastErrorText.includes('too many requests') || lastErrorText.includes('rate limit')) {
    return 'У Groq сейчас сработал лимит запросов для этого API key. Попробуй ещё раз чуть позже. Я рядом: на ближайшие 2 минуты выпей воды, сделай 3 спокойных выдоха и отложи никотин на 10 минут.';
  }
  if (lastErrorText.includes('503') || lastErrorText.includes('high demand') || lastErrorText.includes('overloaded')) {
    return 'Groq сейчас перегружен и не ответил. Попробуй отправить сообщение ещё раз через минуту. Пока можно сделать один маленький шаг: выпей воды и сделай 3 медленных выдоха.';
  }
  if (lastErrorText.includes('api key not valid') || lastErrorText.includes('invalid api key')) {
    return 'Groq API key не прошёл проверку. Проверь ключ в app.js и убедись, что он скопирован из Groq Console без лишних пробелов.';
  }
  if (lastErrorText.includes('permission') || lastErrorText.includes('403') || lastErrorText.includes('referer') || lastErrorText.includes('referrer')) {
    return 'Groq отклонил запрос. Проверь права API key и настройки проекта в Groq Console.';
  }
  return 'Сейчас AI-подключение недоступно, но я рядом. Попробуй пережить следующие 10 минут: выпей воды, сделай 3 спокойных выдоха и запиши, что стало триггером.';
}

function initNav() {
  const nav = document.getElementById('navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  window.addEventListener('scroll', () => nav?.classList.toggle('scrolled', window.scrollY > 20));
  toggle?.addEventListener('click', () => links?.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a => {
    const file = location.pathname.split('/').pop() || 'index.html';
    if (a.getAttribute('href') === file) a.classList.add('active');
  });
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), index * 60);
    });
  }, { threshold: 0.1 });
  items.forEach(el => observer.observe(el));
}

function renderProgressCards(root = document) {
  const progress = calculateProgress();
  const avoidedLabel = getQuitSettings().habitType === 'vape' ? 'эпизодов вейпа' : 'сигарет / эпизодов';
  const set = (id, value) => { const el = root.getElementById ? root.getElementById(id) : document.getElementById(id); if (el) el.textContent = value; };
  set('daysValue', progress.days);
  set('moneyValue', formatTenge(progress.savedMoney));
  set('avoidedValue', progress.avoidedItems);
  set('avoidedLabel', avoidedLabel);
  set('bodyValue', progress.stage.time);
}

function renderMiniCalendar(selector = '#miniCalendar', count = 30) {
  const grid = document.querySelector(selector);
  if (!grid) return;
  const calendar = getStorage(SANA_KEYS.calendar, {});
  const today = new Date();
  grid.innerHTML = '';
  for (let i = count - 1; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const iso = formatDateISO(date);
    const entry = calendar[iso];
    const status = entry?.status || 'skipped';
    const day = document.createElement('div');
    day.className = `calendar-day ${status}`;
    day.innerHTML = `<strong>${date.getDate()}</strong><span>${statusLabel(status)}</span>`;
    day.title = entry?.note || statusLabel(status);
    grid.appendChild(day);
  }
}

function statusLabel(status) {
  return {
    smoke_free: 'Без никотина',
    craving: 'Тяга',
    relapse: 'Срыв',
    skipped: 'Пауза'
  }[status] || 'Пауза';
}

function downloadJournal() {
  const journal = {
    profile: getStorage(SANA_KEYS.profile, {}),
    settings: getQuitSettings(),
    chat: getStorage(SANA_KEYS.chat, []),
    calendar: getStorage(SANA_KEYS.calendar, {}),
    checkins: getStorage(SANA_KEYS.checkins, []),
    triggers: getStorage(SANA_KEYS.triggers, []),
    exercises: getStorage(SANA_KEYS.exercises, []),
    relapses: getStorage(SANA_KEYS.relapses, [])
  };
  const blob = new Blob([JSON.stringify(journal, null, 2)], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `sanatynys-diary-${todayISO()}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function clearAllData() {
  if (!confirm('Очистить данные SanaTynys в этом браузере?')) return;
  Object.values(SANA_KEYS).forEach(key => localStorage.removeItem(key));
  location.reload();
}

window.SanaApp = {
  SANA_KEYS,
  getStorage,
  setStorage,
  getQuitSettings,
  calculateProgress,
  getDaysWithoutSmoking,
  getBodyStage,
  saveCheckin,
  saveCalendarEntry,
  saveExerciseResult,
  buildCoachContext,
  recordTrigger,
  renderProgressCards,
  renderMiniCalendar,
  statusLabel,
  downloadJournal,
  clearAllData,
  callSanaCoachAPI,
  formatCoachMessage,
  BODY_STAGES
};

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  document.querySelectorAll('[data-download-journal]').forEach(btn => btn.addEventListener('click', (event) => {
    event.preventDefault();
    downloadJournal();
  }));
  document.querySelectorAll('[data-clear-data]').forEach(btn => btn.addEventListener('click', (event) => {
    event.preventDefault();
    clearAllData();
  }));
});
