pipeline {
    agent { label 'dev' }

    stages {

        stage ('Code') {
            steps {
                git url: 'https://github.com/megoon/Traya-Assignment', branch: 'main'
            }
        }
        
        stage ('Build & Test') {
            steps {
                echo 'Build & Test'
                sh 'docker build . -t traya'
            }
        }
                
        stage ('Deploy') {
            steps {
                echo 'Deploying'
                sh 'docker-compose down && docker-compose up -d'
            }
        }

    }
}