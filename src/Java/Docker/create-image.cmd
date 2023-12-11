docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba12-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba12-java/app ../../..
