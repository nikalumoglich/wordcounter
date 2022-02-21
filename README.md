
### Environment

###### Jdk 14.0.2 (https://www.oracle.com/br/java/technologies/javase/jdk14-archive-downloads.html)
###### OS: Fedora release 35 (Thirty Five) x86_64
###### Kernel: 5.16.9-200.fc35.x86_64
###### Maven 3.6.3 (https://dlcdn.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz)
(Please do not forget to set up JAVA_HOME and PATH properly - https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/; https://maven.apache.org/install.html)
    

### Running

```bash

mvn package -DskipTests && java -jar target/ROOT.war

```

access http://localhost:8080/

### Tests

```bash

mvn test

```

Remote test: http://18.230.57.246:8080