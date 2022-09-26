-- +goose Up
-- +goose StatementBegin
CREATE EXTENSION IF NOT EXISTS pgcrypto SCHEMA public;

CREATE SCHEMA dream_service;
ALTER SCHEMA dream_service OWNER TO postgres;
SET search_path TO pg_catalog,public,user_service,media_service,dream_service;

CREATE TABLE dream_service.dreams
(
    id                      uuid NOT NULL,
    trello_id               text,
    title                   text,
    description             text,
    main_picture_wide_id    uuid,
    main_picture_portret_id uuid,
    owner_id                uuid NOT NULL,
    manager_id              uuid,
    status                  text NOT NULL,
    CONSTRAINT dream_pk PRIMARY KEY (id)
);
ALTER SCHEMA dream_service OWNER TO postgres;

CREATE TABLE dream_service.resources
(
    id       uuid    NOT NULL,
    title    text    NOT NULL,
    dream_id uuid    NOT NULL,
    measure  text    NOT NULL,
    amount   integer NOT NULL,
    stage_id uuid    NOT NULL,
    CONSTRAINT resources_pk PRIMARY KEY (id)
);
ALTER TABLE dream_service.resources
    OWNER TO postgres;

CREATE TABLE dream_service.contributions
(
    id          uuid NOT NULL,
    resource_id uuid,
    user_id     uuid,
    list        text,
    CONSTRAINT contributions_pk PRIMARY KEY (id)
);
COMMENT ON COLUMN dream_service.contributions.list IS E'List name in Trello';
ALTER TABLE dream_service.contributions
    OWNER TO postgres;

CREATE TABLE dream_service.dream_stage
(
    id        uuid NOT NULL,
    trello_id text,
    name      text,
    dream_id  uuid NOT NULL,
    CONSTRAINT dream_stage_pk PRIMARY KEY (id)
);
ALTER TABLE dream_service.dream_stage
    OWNER TO postgres;

ALTER TABLE dream_service.resources
    ADD CONSTRAINT dream FOREIGN KEY (dream_id)
        REFERENCES dream_service.dreams (id) MATCH SIMPLE
        ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE dream_service.resources
    ADD CONSTRAINT resource_stage FOREIGN KEY (stage_id)
        REFERENCES dream_service.dream_stage (id) MATCH SIMPLE
        ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE dream_service.contributions
    ADD CONSTRAINT contribution FOREIGN KEY (resource_id)
        REFERENCES dream_service.resources (id) MATCH SIMPLE
        ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE dream_service.dream_stage
    ADD CONSTRAINT dream_stage FOREIGN KEY (dream_id)
        REFERENCES dream_service.dreams (id) MATCH SIMPLE
        ON DELETE NO ACTION ON UPDATE NO ACTION;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
-- +goose StatementEnd
