FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=node-mysql-crud
ENV MYSQL_USER==root
ENV MYSQL_PASSWORD=root

EXPOSE 3306

COPY ./test-dump.sql /docker-entrypoint-initdb.d/
