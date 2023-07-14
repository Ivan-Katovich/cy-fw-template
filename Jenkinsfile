pipeline {
    agent any
    options {
        buildDiscarder(logRotator(daysToKeepStr: '10', numToKeepStr: '10'))
        timeout(time: 12, unit: 'HOURS')
        timestamps()
        ansiColor('xterm')
    }
    stages {
        stage('Build') {
            steps {
                sh('npm install')
            }
        }
        stage('Update Browsers') {
            steps {
                sh('npx browserslist@latest --update-db')
            }
        }
        stage('Test') {
            steps {
                sh('npm test')
            }
        }
    }
}
