-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler version: 0.9.4
-- PostgreSQL version: 13.0
-- Project Site: pgmodeler.io
-- Model Author: ---

-- Database creation must be performed outside a multi lined SQL file. 
-- These commands were put in this file only as a convenience.
-- 
-- object: city_dream | type: DATABASE --
-- DROP DATABASE IF EXISTS city_dream;
CREATE DATABASE city_dream;
-- ddl-end --


-- object: user_service | type: SCHEMA --
-- DROP SCHEMA IF EXISTS user_service CASCADE;
CREATE SCHEMA user_service;
-- ddl-end --
ALTER SCHEMA user_service OWNER TO postgres;
-- ddl-end --

-- object: media | type: SCHEMA --
-- DROP SCHEMA IF EXISTS media CASCADE;
CREATE SCHEMA media;
-- ddl-end --
ALTER SCHEMA media OWNER TO postgres;
-- ddl-end --

-- object: dream_service | type: SCHEMA --
-- DROP SCHEMA IF EXISTS dream_service CASCADE;
CREATE SCHEMA dream_service;
-- ddl-end --
ALTER SCHEMA dream_service OWNER TO postgres;
-- ddl-end --

SET search_path TO pg_catalog,public,user_service,media,dream_service;
-- ddl-end --

-- object: user_service.users | type: TABLE --
-- DROP TABLE IF EXISTS user_service.users CASCADE;
CREATE TABLE user_service.users (
	id uuid NOT NULL,
	fb_id text,
	tg_id text,
	trello_id text,
	first_name text,
	last_name text,
	avatar text,
	roles text[],
	CONSTRAINT user_pk PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE user_service.users OWNER TO postgres;
-- ddl-end --

-- object: dream_service.dreams | type: TABLE --
-- DROP TABLE IF EXISTS dream_service.dreams CASCADE;
CREATE TABLE dream_service.dreams (
	id uuid NOT NULL,
	trello_id text,
	title text,
	description text,
	cover_image text,
	owner_id uuid NOT NULL,
	manager_id uuid,
	status text NOT NULL,
	CONSTRAINT dream_pk PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE dream_service.dreams OWNER TO postgres;
-- ddl-end --

-- object: dream_service.resources | type: TABLE --
-- DROP TABLE IF EXISTS dream_service.resources CASCADE;
CREATE TABLE dream_service.resources (
	id uuid NOT NULL,
	title text NOT NULL,
	dream_id uuid NOT NULL,
	measure text NOT NULL,
	amount integer NOT NULL,
	stage_id uuid NOT NULL,
	CONSTRAINT resources_pk PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE dream_service.resources OWNER TO postgres;
-- ddl-end --

-- object: dream_service.contributions | type: TABLE --
-- DROP TABLE IF EXISTS dream_service.contributions CASCADE;
CREATE TABLE dream_service.contributions (
	id uuid NOT NULL,
	resource_id uuid,
	user_id uuid,
	list text,
	CONSTRAINT contributions_pk PRIMARY KEY (id)
);
-- ddl-end --
COMMENT ON COLUMN dream_service.contributions.list IS E'List name in Trello';
-- ddl-end --
ALTER TABLE dream_service.contributions OWNER TO postgres;
-- ddl-end --

-- object: dream_service.dream_stage | type: TABLE --
-- DROP TABLE IF EXISTS dream_service.dream_stage CASCADE;
CREATE TABLE dream_service.dream_stage (
	id uuid NOT NULL,
	trello_id text,
	name text,
	dream_id uuid NOT NULL,
	CONSTRAINT dream_stage_pk PRIMARY KEY (id)
);
-- ddl-end --
ALTER TABLE dream_service.dream_stage OWNER TO postgres;
-- ddl-end --

-- object: owner | type: CONSTRAINT --
-- ALTER TABLE dream_service.dreams DROP CONSTRAINT IF EXISTS owner CASCADE;
ALTER TABLE dream_service.dreams ADD CONSTRAINT owner FOREIGN KEY (owner_id)
REFERENCES user_service.users (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: manager | type: CONSTRAINT --
-- ALTER TABLE dream_service.dreams DROP CONSTRAINT IF EXISTS manager CASCADE;
ALTER TABLE dream_service.dreams ADD CONSTRAINT manager FOREIGN KEY (manager_id)
REFERENCES user_service.users (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: dream | type: CONSTRAINT --
-- ALTER TABLE dream_service.resources DROP CONSTRAINT IF EXISTS dream CASCADE;
ALTER TABLE dream_service.resources ADD CONSTRAINT dream FOREIGN KEY (dream_id)
REFERENCES dream_service.dreams (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: resource_stage | type: CONSTRAINT --
-- ALTER TABLE dream_service.resources DROP CONSTRAINT IF EXISTS resource_stage CASCADE;
ALTER TABLE dream_service.resources ADD CONSTRAINT resource_stage FOREIGN KEY (stage_id)
REFERENCES dream_service.dream_stage (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: contribution | type: CONSTRAINT --
-- ALTER TABLE dream_service.contributions DROP CONSTRAINT IF EXISTS contribution CASCADE;
ALTER TABLE dream_service.contributions ADD CONSTRAINT contribution FOREIGN KEY (resource_id)
REFERENCES dream_service.resources (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: "user" | type: CONSTRAINT --
-- ALTER TABLE dream_service.contributions DROP CONSTRAINT IF EXISTS "user" CASCADE;
ALTER TABLE dream_service.contributions ADD CONSTRAINT "user" FOREIGN KEY (user_id)
REFERENCES user_service.users (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --

-- object: dream_stage | type: CONSTRAINT --
-- ALTER TABLE dream_service.dream_stage DROP CONSTRAINT IF EXISTS dream_stage CASCADE;
ALTER TABLE dream_service.dream_stage ADD CONSTRAINT dream_stage FOREIGN KEY (dream_id)
REFERENCES dream_service.dreams (id) MATCH SIMPLE
ON DELETE NO ACTION ON UPDATE NO ACTION;
-- ddl-end --


