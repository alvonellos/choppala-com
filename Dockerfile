FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY  target/website-1.0.0-SNAPSHOT.jar app.jar
EXPOSE 5000
ENTRYPOINT ["java","-jar","/app.jar"]