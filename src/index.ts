import bigInt from 'big-integer';

const TWITTER_START_EPOCH = 1288834974657;

export function twitterSnowflakeToDate(id_str: string) {
  if (id_str.length <= 13) {
    return new Date("2010-10-31T12:00:00.000Z");
  }
  return new Date((+bigInt(id_str).shiftRight(22)) + TWITTER_START_EPOCH);
}
