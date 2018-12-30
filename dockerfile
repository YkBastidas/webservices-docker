# Dockerfile
FROM node:8

WORKDIR /app

# Copia los archivos.
COPY package*.json ./

# Instala dependencias.
RUN npm install
COPY . .
EXPOSE 3000
# Inicia la aplicación.
CMD ["npm", "start"]
