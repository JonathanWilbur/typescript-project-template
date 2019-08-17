pipeline {
    agent any
    // agent {
    //     docker {
    //         image 'node' 
    //     }
    // }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/JonathanWilbur/preql.git'  
            }
        }
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run-script build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run-script lint'
                sh 'npm run-script test'
            }
        }
        stage('Deploy') {
            steps {
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                    sh 'npm run-script deploy-functions'
                }
            }
        }
    }
}