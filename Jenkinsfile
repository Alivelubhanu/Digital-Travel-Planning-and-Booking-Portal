pipeline {
  agent any

  stages {

    stage('Clone') {
      steps {
        git branch: 'main',
            url: 'https://github.com/Alivelubhanu/Digital-Travel-Planning-and-Booking-Portal.git'
      }
    }

    stage('Build') {
      steps {
        sh 'mvn clean package -DskipTests'
      }
    }

    stage('Deploy') {
      steps {
        echo 'Tomcat deploy - coming after server setup'
      }
    }

  }
}
