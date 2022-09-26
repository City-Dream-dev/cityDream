# Backend api for CityDream

### Local Setup

1. Run docker container with PostgreSql with `5454` external port
    ```
    docker run --name city-dream-postgres --rm -p 5454:5432 -d -e POSTGRES_PASSWORD=pass postgres
    ```
2. Run migration script from `src` directory:
    ```
   go run cmd/migrate/main.go --clearDb 
   ```
3. Set up environment variables to access to the trello api:
   ```
   TRELLO_APP_KEY=00000000000000000000000000000000
   TRELLO_TOKEN=0000000000000000000000000000000000000000000000000000000000000000
   TRELLO_BOARD_ID=00000000
   ```
4. Run import trello data script:
   ```
   go run services/trello/import/cmd/main.go
   ```
