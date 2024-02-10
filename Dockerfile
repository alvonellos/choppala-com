FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY  target/website-2.0.0.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/app.jar"]