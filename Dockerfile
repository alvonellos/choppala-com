FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY  target/website-1.0.0-SNAPSHOT.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]