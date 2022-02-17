FROM node:16

# creeé repertoire de travail
WORKDIR /app

# recupere le fichier package et install
COPY package*.json ./

RUN npm install


# copie tout les fichier du repertoire courant 
COPY . .
#ouverture du port 8080
EXPOSE 8080
#lance l'aplication
CMD [ "node", "serveur.js" ]