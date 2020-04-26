// eslint-disable-next-line import/no-duplicates
import { format } from 'date-fns';
// eslint-disable-next-line import/no-duplicates
import pt from 'date-fns/locale/pt';

import { zonedTimeToUtc } from 'date-fns-tz';

const formatDate = (date: Date): string =>
  format(zonedTimeToUtc(date, 'America/Sao_Paulo'), "d'/'MM'/'yyyy", {
    locale: pt,
  });

export default formatDate;
