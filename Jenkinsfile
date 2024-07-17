pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS 14', type: 'NodeJSInstallation' // Ajusta el nombre según tu configuración de Jenkins
        PATH = "${env.NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/C-Chanona/Moviles-Nest-API.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deploy') {
            steps {
                sh 'node dist/main.js &'
            }
        }

        stage('Curl Request') {
            steps {
                script {
                    sleep 5 // Espera a que el servidor se inicie
                    sh 'curl -v http://100.29.86.145:3000/user/1'
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
