# Utilisation de l'image maven:3.6.3-jdk-11-slim comme base pour le processus de construction.
FROM maven:3.6.3-jdk-11-slim AS build

# Crée un répertoire de travail dans le conteneur.
RUN mkdir -p /workspace
WORKDIR /workspace

# Copie le fichier pom.xml dans le répertoire de travail du conteneur.
COPY pom.xml /workspace
# Copie le répertoire source dans le répertoire de travail du conteneur.
COPY src /workspace/src

# Exécute Maven pour compiler le code, en sautant les tests.
RUN mvn -B -f pom.xml clean package -DskipTests

# Utilisation de l'image openjdk:11-jdk-slim pour l'exécution de l'application.
FROM openjdk:11-jdk-slim

# Copie le fichier JAR compilé à partir de l'étape de construction dans le répertoire de travail du conteneur.
COPY --from=build /workspace/target/*.jar app.jar

# Expose le port 8080 pour que l'application soit accessible.
EXPOSE 8080

# Commande à exécuter lors de l'exécution du conteneur. Il lance l'application Java.
ENTRYPOINT ["java", "-jar","app.jar"]
