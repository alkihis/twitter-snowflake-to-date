# twitter-snowflake-to-date

> Convert a tweet ID snowflake to a JavaScript `Date` object

Since November 2010, Twitter use the [snowflake ID system](https://developer.twitter.com/en/docs/basics/twitter-ids) to guarantee identifier unicity.

It is composed with 42 bits of milliseconds timestamp, and 22 other bits of machine/worker identifiers and an internal counter.

With this package, you can simply extract the date contained in those type of IDs.

## Getting started

Install it using npm.

```bash
npm i twitter-snowflake-to-date
```

## Usage

One function is exported. You can import it with its name or with default import.

```ts
import twitterSnowflakeToDate from 'twitter-snowflake-to-date';
// OR with named import //
import { twitterSnowflakeToDate } from 'twitter-snowflake-to-date';
// OR with require //
const { twitterSnowflakeToDate } = require('twitter-snowflake-to-date');

const tweet_id_str = "1233161576649121792";

const tweet_date = twitterSnowflakeToDate(tweet_id_str); // Date(2020-02-27T22:46:45.564Z)
```

**Note**: Twitter uses snowflakes IDs since November 2010 only. 
Every given tweet ID that is **not** a snowflake will return `Date(2010-10-31T12:00:00.000Z)`.

You can easily check if tweet ID is a snowflake by checking its length. A `length > 13` ensure you have a snowflake ID.
