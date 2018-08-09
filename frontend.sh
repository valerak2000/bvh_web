#!/bin/bash
cd /var/www/bvh_web
screen -dmS newScreenName nohup npm run dev >> logfile.log

