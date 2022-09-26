-- +goose Up
-- +goose StatementBegin
ALTER TABLE dream_service.dreams ADD CONSTRAINT owner FOREIGN KEY (owner_id)
    REFERENCES user_service.users (id) MATCH SIMPLE
    ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE dream_service.contributions ADD CONSTRAINT "user" FOREIGN KEY (user_id)
    REFERENCES user_service.users (id) MATCH SIMPLE
    ON DELETE NO ACTION ON UPDATE NO ACTION;

ALTER TABLE dream_service.dreams ADD CONSTRAINT manager FOREIGN KEY (manager_id)
    REFERENCES user_service.users (id) MATCH SIMPLE
    ON DELETE NO ACTION ON UPDATE NO ACTION;
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
-- +goose StatementEnd
