pipeline {
 agent any

 tools {
  nodejs "NodeJS_23"
 }

 triggers {
  pollSCM('* * * * *')
 }

 stages {
  stage('Checkout') {
   steps {
    git branch: 'main',
    url: 'https://github.com/Yeonsu00-12/Community_React.git'
   }
  }
  stage('Install dependencies') {
   steps {
    sh 'npm ci'
   }
  }
  stage('Build') {
   steps {
    sh 'npm run build'
   }
  }
  
  stage('Deploy') {
   steps {
    deploy adapters: [tomcat9(credentialsId: 'tomcat-manager', url: 'http://192.168.56.102:8080')], contextPath: null, war : 'target/hello-world.war'
   }
  }
 }
}
