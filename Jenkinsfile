pipeline {
    agent any
    options {
        buildDiscarder(logRotator(daysToKeepStr: '10', numToKeepStr: '10'))
        timeout(time: 12, unit: 'HOURS')
        timestamps()
    }
    stages {
        stage('Build') {
            steps {
                // the algorithm script creates a file named report.txt
                sh('npm test')
            }
        }
    }
}
