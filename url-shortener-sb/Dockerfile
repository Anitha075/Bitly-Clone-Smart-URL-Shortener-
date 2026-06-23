# Stage 1: Build stage
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# 1. Copy pom.xml first (for caching dependencies)
COPY pom.xml .

# 2. Download all dependencies (Maven cache layer)
RUN mvn dependency:go-offline -B

# 3. Copy source code
COPY src ./src

# 4. Build project
RUN mvn clean package -DskipTests

# -------------------------
# Stage 2: Runtime image
# -------------------------
FROM eclipse-temurin:17-jdk

WORKDIR /app

# 5. Copy built JAR
COPY --from=build /app/target/*.jar app.jar

# 6. Run application
ENTRYPOINT ["java", "-jar", "app.jar"]