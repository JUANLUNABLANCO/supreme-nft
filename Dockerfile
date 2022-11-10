FROM node:12



COPY ["package.json", "package-lock.json", "/home/apps/supreme-nft/"]

WORKDIR /home/apps/supreme-nft/

RUN npm install

RUN npm install pm2 -g

COPY [".", "/home/apps/supreme-nft/"]

EXPOSE 5000

# ### DEVELOPMENT
# CMD ["npx", "nodemon", "./src/server.js"] // platziapp:v1.0.0
# supremeapp:v1.1.0

# ### PRODUCTION
CMD ["pm2-runtime", "ecosystem.config.js", "--env", "production"] 

