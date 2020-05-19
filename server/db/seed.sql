DROP DATABASE IF EXISTS sleep_tracker;
CREATE DATABASE sleep_tracker;

\c sleep_tracker;

CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    firebase_id VARCHAR UNIQUE NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    first_name VARCHAR,
    last_name VARCHAR,
    date_of_birth DATE,
    occupation VARCHAR,
    location VARCHAR,
    about TEXT
);

CREATE TABLE dream_themes
(
    id SERIAL PRIMARY KEY,
    theme VARCHAR UNIQUE NOT NULL,
    info TEXT NOT NULL
);

CREATE TABLE sleep_logs
(
    id SERIAL PRIMARY KEY,
    user_id VARCHAR REFERENCES users(firebase_id),
    is_private BOOLEAN DEFAULT TRUE NOT NULL,
    post_date DATE NOT NULL,
    remember_dream BOOLEAN,
    sleep_interrupted BOOLEAN,
    sleep_start TIME,
    sleep_end TIME,
    notes TEXT
);

INSERT INTO users
    (firebase_id, email, first_name, last_name, date_of_birth, occupation, location, about)
VALUES
    ('Z0SrKJHeG7VqvpAwHG1jUWs866M2', 'rob@rob.com', 'rob', 'pinelli', '2020-05-12', 'cool guy', 'ny', 'aram enthusiast');

INSERT INTO dream_themes
    (theme, info)
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

INSERT INTO sleep_logs
    (user_id, is_private, post_date, remember_dream, sleep_interrupted, sleep_start, sleep_end, notes)
VALUES
    ('Z0SrKJHeG7VqvpAwHG1jUWs866M2', TRUE, '2020-02-05', TRUE, TRUE, '08:00:00', '12:00:00', 'slept in bed. had dream about flying. woke up once.');

  