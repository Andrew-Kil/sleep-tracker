## Users

| column name        | data type | details            |
| ------------------ | --------- | ------------------ |
| id                 | integer   | SERIAL PRIMARY KEY |
| name               | varchar   | UNIQUE NOT NULL    |
| sleeping_disorders | text      | NOT NULL           |
| sleeping_aids      | text      | NOT NULL           |

## Sleep Logs

| column name       | data type                   | details                                |
| ----------------- | --------------------------- | -------------------------------------- |
| id                | integer                     | SERIAL PRIMARY KEY                     |
| remember_dream    | boolean                     | NOT NULL                               |
| sleep_location    | varchar                     | NOT NULL                               |
| sleep_start       | time [ (p) ] with time zone | NOT NULL                               |
| sleep_end         | time [ (p) ] with time zone | NOT NULL                               |
| interrupted_sleep | boolean                     | NOT NULL                               |
| dream_themes      | integer[]                   | NOT NULL - references dream_themes(id) |
| notes             | text                        |                                        |

## Common Dream Themes

| column name | data type | details            |
| ----------- | --------- | ------------------ |
| id          | integer   | SERIAL PRIMARY KEY |
| theme       | varchar   | NOT NULL           |
| info        | text      | NOT NULL           |
