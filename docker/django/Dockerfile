FROM python:3.5.2
MAINTAINER Filipe Garcia <filipe.garcia@seedstarslabs.com>

ENV PYTHONUNBUFFERED 1

COPY ./docker/django/django-entrypoint.sh /
COPY ./py-requirements /django/py-requirements

WORKDIR /django

RUN pip install pip==18.0
#9.0.1
RUN pip install -r py-requirements/dev.txt
