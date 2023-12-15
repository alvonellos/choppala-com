pipeline{
    agent {
        docker {
            dockerfile true
        }
    }

    stages {
    stage('Build') {
        agent {
            docker {
                image 'eclipse-temurin:17-jdk-alpine'
                // Run the container on the node specified at the
                // top-level of the Pipeline, in the same workspace,
                // rather than on a new node entirely:
                reuseNode true
            }
        }
        stage('Test') {
            steps {
                sh 'java --version'
            }
        }
    }
}