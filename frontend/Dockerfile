FROM node:20

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port de développement Vite
EXPOSE 5173

# Démarrer le serveur de développement avec host 0.0.0.0
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]