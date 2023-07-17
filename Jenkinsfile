pipeline {
    agent any
    environment {
        NO_COLOR = 1
    }
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
    post {
        always {
            publishHTML(
                [
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: false,
                    reportDir: 'report/mochawesome',
                    reportFiles: 'mochawesome.html',
                    reportName: 'CY Report',
                    reportTitles: 'cyreport',
                    useWrapperFileDirectly: true
                ]
            )
        }
    }
}
