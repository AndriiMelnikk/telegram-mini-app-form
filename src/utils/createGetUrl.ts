import { getCookie } from './whitCockies';

const createGetUrl = () => {
  const query_id = getCookie('query_id') ?? '';
  let user = getCookie('user') ?? '';
  let auth_date = getCookie('auth_date') ?? '';
  const signature = getCookie('signature') ?? '';
  const hash = getCookie('hash') ?? '';

  if (user) {
    try {
      const userObj = typeof user === 'string' ? JSON.parse(user) : user;
      user = encodeURIComponent(JSON.stringify(userObj));
    } catch (e) {
    }
  }

  if (auth_date) {
    const date = new Date(auth_date);
    if (!isNaN(date.getTime())) {
      auth_date = Math.floor(date.getTime() / 1000).toString();
    }
  }

  // return (
  //   `https://mstrcrm.prtestcompany.org/master-crm/client-tgbot/validate-init-data` +
  //   `?query_id=${query_id}` +
  //   `&user=${user}` +
  //   `&auth_date=${auth_date}` +
  //   `&signature=${signature}` +
  //   `&hash=${hash}`
  // );

  return 'https://mstrcrm.prtestcompany.org/master-crm/client-tgbot/validate-init-data?query_id=AAHhpIYdAAAAAOGkhh3lg5Ci&user=%7B%22allows_write_to_pm%22%3Atrue%2C%22first_name%22%3A%22Andrii%22%2C%22id%22%3A495363297%2C%22last_name%22%3A%22%22%2C%22language_code%22%3A%22uk%22%2C%22photo_url%22%3A%22https%3A%2F%2Ft.me%2Fi%2Fuserpic%2F320%2F6QINUnxyPYiB4pscwnodu913jNPSO85pPaIvPkdTxpg.svg%22%2C%22username%22%3A%22andrii_melnykk%22%7D&auth_date=1755254069&signature=gTYHiyZJ5M57gwOUVvCC-j71mWAV-tshCdsRPuNjjAxhld2ZwkDzCymGrLocQ6DlX07AI4cHAB4E7AKs2FOTBA&hash=2abb4338c7b7c7ff33a6309d1387589062fd02bf0eec02ac744ab409f8afa722'
};

export default createGetUrl;
