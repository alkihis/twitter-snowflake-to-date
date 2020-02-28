import bigInt from 'big-integer';

const TWITTER_START_EPOCH = 1288834974657;

/**
 * Convert a snowflake tweet id {id_str} to a `Date` object.
 * 
 * Twitter uses snowflakes IDs since November, 4, 2010 only. 
 * Every given tweet ID that is **not** a snowflake will return `Date(2010-10-31T12:00:00.000Z)`.
 * 
 * @param id_str Tweet identifier (string version)
 * 
 * ```ts
 * twitterSnowflakeToDate("1233161576649121792"); // => Date(2020-02-27T22:46:45.564Z)
 * ```
 */
export function twitterSnowflakeToDate(id_str: string) {
  if (id_str.length <= 13) {
    return new Date("2010-10-31T12:00:00.000Z");
  }
  return new Date((+bigInt(id_str).shiftRight(22)) + TWITTER_START_EPOCH);
}

export default twitterSnowflakeToDate;
