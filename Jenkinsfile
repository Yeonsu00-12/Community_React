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
  
  stage('Archive Build') {
      steps {
        archiveArtifacts artifacts: 'build/**', fingerprint: true
      }
    }
 }
}
