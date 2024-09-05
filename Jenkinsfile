pipeline{
    agent any
    stages{
        
        stage('Checkout '){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/vikyathshettyy/Vikyath-Demo-Project']])
                sh 'echo checked out from git'
                
            }
            
        }  
        stage('Build Docker Image') {
            steps{
                script{
                    sh 'docker build -t vikyath11/todo-app-artifactory:v${BUILD_NUMBER} .'
                }
            }
        }
        stage('Push image to artifactory') {
            steps{
                withCredentials([string(credentialsId: 'dockerhubpassswd', variable: 'var1')]) {
                    sh 'docker login -u vikyath11 -p ${var1}'
                    sh 'docker push vikyath11/todo-app-artifactory:v${BUILD_NUMBER}'
                }
            }
        }
      
        stage('Deleting local docker image') {
            steps{
                sh 'docker rmi vikyath11/todo-app-artifactory:v${BUILD_NUMBER}' 
            }
        }
        stage('Deploy on worker') {
            steps{
                //sh 'docker compose down'
                // sh 'docker compose up -d --force-recreate --build custom_app mongodbi_db'
                // sh 'docker compose up -d'
                sh 'docker stack deploy -c docker-compose.yaml myTodoStack'
            }
        }
        
        
        
    }
}
