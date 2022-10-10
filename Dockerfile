FROM openjdk:17

LABEL maintainer="test@neuefische.de"

ADD backend/target/wardrobeDB.jar wardrobeDB.jar

CMD [ "sh", "-c", "java -DServer.port=$PORT -jar /wardrobeDB.jar"]