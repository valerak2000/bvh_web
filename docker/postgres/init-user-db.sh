#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER djangoreactredux WITH PASSWORD '123' CREATEDB;
    CREATE DATABASE djangoreactredux_dev;
    GRANT ALL PRIVILEGES ON DATABASE djangoreactredux_dev TO djangoreactredux;
EOSQL
