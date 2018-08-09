#!/bin/bash
cd /var/www/bvh_web
screen -dmS web npm run dev
#forever npm run dev >> logfile.log

