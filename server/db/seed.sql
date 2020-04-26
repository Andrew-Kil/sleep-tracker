DROP DATABASE IF EXISTS sleep_tracker;
CREATE DATABASE sleep_tracker;

-- \c sleep_tracker;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE NOT NULL,
    sleeping_disorders TEXT NOT NULL,
    sleeping_aids TEXT NOT NULL
);

CREATE TABLE dream_themes
(
    id SERIAL PRIMARY KEY,
    theme VARCHAR NOT NULL,
    info TEXT NOT NULL
);

-- CREATE TABLE sleep_logs
-- (
--     id SERIAL PRIMARY KEY,
--     user_id INT REFERENCES users(id),
--     remember_dream BOOLEAN NOT NULL,
--     sleep_location VARCHAR NOT NULL,
--     sleep_start TIME NOT NULL,
--     sleep_end TIME NOT NULL,
--     interrupted_sleep BOOLEAN NOT NULL,
--     notes TEXT
-- );

CREATE TABLE sleep_logs
(
    id SERIAL PRIMARY KEY,
    notes TEXT
);


INSERT INTO users
    (
    name, sleeping_disorders, sleeping_aids
    )
VALUES
    ('danny devito', 'insomnia', 'melatonin');

INSERT INTO dream_themes
    (
    theme, info
    )
VALUES
    ('death', 'a big change or transformation on the horizon, for you or someone close to you'),
    ('falling', 'a lack of control of insecurity in your life. it might alsos represent failure'),
    ('friends', 'your own personality traits that you may not be aware of, or that need exploring'),
    ('sex', 'they are not always about sexual attraction. our subconscious sex partners have qualities that we want for ourselves'),
    ('flying', 'freedom. so if you are soaring, then you are inspired in life. touble flying? your life path might be blocked.'),
    ('paralysis', 'you might feel powerless during your waking hours'),
    ('running', 'you want to escape from someone or something in real life or achieve a goal. running with power suggests motivation and success. running in place means the opposite'),
    ('teeth', 'confidence and strength. if your teeth are falling out, you could fear embarassment, have low self-confidence, or feel stressed out or out of control'),
    ('test day', 'anxiety about difficulties in li8fe or failing at responsibilities'),
    ('water', 'your emotional side. the state of the water i.e. cloudy, calm, etc. will reveal emotions that you need to confront'),
    ('nakedness', 'vulnerability and exposure in a situation'),
    ('pregnancy', 'growth and/or something new, such as projects, goals, or circumstances');

-- INSERT INTO sleep_logs
--     (
--     remember_dream, user_id, sleep_location, sleep_start, sleep_end, interrupted_sleep, notes
--     )
-- VALUES
--     (true, 1, 'bed', '08:00:00', '12:00:00', true, 'ate egg before bed. woke up 3 times. had dream about birds');

INSERT INTO sleep_logs
    (notes)
VALUES
    ('ate egg before bed. woke up 3 times. had dream about birds');