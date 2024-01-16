FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY  target/website-1.0.0.jar app.jar
EXPOSE 8088
ENTRYPOINT ["java","-jar","/app.jar"]