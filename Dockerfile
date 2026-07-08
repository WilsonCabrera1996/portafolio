# Usamos la versión LTS de Node
FROM node:20.11-alpine

# Instalamos el CLI de Angular globalmente
RUN npm install -g @angular/cli@17

# Seteamos el directorio de trabajo
WORKDIR /app

# Exponemos el puerto por defecto de Angular
EXPOSE 4200

# El comando por defecto solo mantiene el contenedor vivo 
# para que puedas entrar y ejecutar "ng serve" o "npm install"
CMD ["tail", "-f", "/dev/null"]