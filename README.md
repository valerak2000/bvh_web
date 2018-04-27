git submodule init

linux:
	virtualenv -p /usr/bin/python3 py3
	source py3/bin/activate
windows:
	py -3 -m venv py3

pip install -r py-requirements/dev.txt

cd src
python manage.py migrate
python manage.py loaddata fixtures.json
python manage.py runserver

psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev

python manage.py runserver --settings=djangoreactredux.settings.dev_docker

ubuntu
=======
sudo apt-get install ssh
sudo curl -L https://github.com/docker/compose/releases/download/1.18.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn