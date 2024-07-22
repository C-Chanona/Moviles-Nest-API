pipeline {
    agent any
    tools {nodejs "Node"}

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/C-Chanona/Moviles-Nest-API.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                bat 'start /B node dist\\main.js'
            }
        }

        stage('Curl Request') {
            steps {
                script {
                    sleep 5 // Espera a que el servidor se inicie
                    bat 'curl -v http://100.29.86.145:3000/user/1'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completado exitosamente'
        }
        failure {
            echo 'Pipeline fallido'
        }
    }
}
