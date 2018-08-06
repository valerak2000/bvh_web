using python, react, material-ui
==================
git submodule init

linux:
	virtualenv -p /usr/bin/python3 py3
	source py3/bin/activate
windows:
	py -3 -m venv py3

pip install django-disposable-email-checker
pip install -r py-requirements/dev.txt

cd src
python manage.py migrate
python manage.py loaddata fixtures.json
python manage.py runserver

cd ..
npm i

psql -h localhost -p 5433 -U djangoreactredux djangoreactredux_dev

python manage.py runserver 0.0.0.0:8000 --settings=djangoreactredux.settings.dev_docker

ubuntu
=======
sudo apt-get install ssh
sudo apt-get remove docker docker-engine docker.io
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
sudo apt-get install docker-ce docker-compose
sudo systemctl enable docker

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
YOUR_API_KEY=AIzaSyCROA6zZ20mgdxFsFf_4s47Nvwe5xRnOSE
