import { getCookie } from './whitCockies';

const createGetUrl = () => {
  const query_id = getCookie('query_id') ?? '';
  let user = getCookie('user') ?? '';
  let auth_date = getCookie('auth_date') ?? '';
  const signature = getCookie('signature') ?? '';
  const hash = getCookie('hash') ?? '';

  // 1️⃣ Форматуємо user
  if (user) {
    try {
      const userObj = typeof user === 'string' ? JSON.parse(user) : user;
      user = encodeURIComponent(JSON.stringify(userObj));
    } catch (e) {
      // Якщо parse не вдалось — залишаємо як є
    }
  }

  // 2️⃣ Форматуємо auth_date у UNIX timestamp
  if (auth_date) {
    const date = new Date(auth_date);
    if (!isNaN(date.getTime())) {
      auth_date = Math.floor(date.getTime() / 1000).toString();
    }
  }

  // 3️⃣ Формуємо URL
  return (
    `https://mstrcrm.prtestcompany.org/master-crm/client-tgbot/validate-init-data` +
    `?query_id=${query_id}` +
    `&user=${user}` +
    `&auth_date=${auth_date}` +
    `&signature=${signature}` +
    `&hash=${hash}`
  );
};

export default createGetUrl;
