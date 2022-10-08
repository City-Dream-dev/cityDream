-- +goose Up
-- +goose StatementBegin
CREATE EXTENSION IF NOT EXISTS pgcrypto SCHEMA public;

CREATE SCHEMA user_service;
ALTER SCHEMA user_service OWNER TO postgres;
SET search_path TO pg_catalog,public,user_service,media_service,dream_service;

CREATE TABLE user_service.users
(
    id         uuid NOT NULL,
    fb_id      text,
    tg_id      text,
    trello_id  text,
    first_name text,
    last_name  text,
    avatar     text,
    roles      text[],
    CONSTRAINT user_pk PRIMARY KEY (id)
);
ALTER TABLE user_service.users
    OWNER TO postgres;


-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin

-- +goose StatementEnd
