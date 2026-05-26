pipeline {
    agent any

    environment {
        ALLURE_RESULTS = 'allure-results'
        ALLURE_REPORT = 'allure-report'
        ALLURE_ENDPOINT = 'https://allure.autotests.cloud'
        ALLURE_PROJECT_ID = '5218'
    }

    stages {
        stage('Build') {
            steps {
                nodejs('NodeJS22.22.0') {
                    sh 'npm ci'
                    sh 'npx playwright install --with-deps chromium'
                    sh 'npm add allure'
                    // Запускаем тесты: ошибки не ломают пайплайн
                    sh 'npm t || echo "Tests completed with failures"'
                }
            }
        }

    stage('Upload to Allure TestOps') {
            steps {
                nodejs('NodeJS22.22.0') {
                    withCredentials([string(credentialsId: 'allure-token_for_diploma', variable: 'ALLURE_TOKEN_SECRET')]) {
                        sh '''
                            curl -L https://github.com/allure-framework/allurectl/releases/latest/download/allurectl_linux_amd64 -o allurectl
                            chmod +x allurectl
                            ./allurectl upload \
                              --endpoint ${ALLURE_ENDPOINT} \
                              --token ${ALLURE_TOKEN_SECRET} \
                              --project-id ${ALLURE_PROJECT_ID} \
                              ${ALLURE_RESULTS} || echo "TestOps upload failed"
                        '''
                    }
                }
            }
        }

        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: "${ALLURE_RESULTS}"]]
                ])
            }
        } 
        stage('Telegram Notification') {
    steps {
        withCredentials([string(credentialsId: 'telegram-token_for_diploma', variable: 'TELEGRAM_TOKEN')]) {
            nodejs('NodeJS22.22.0') {
                sh '''
                    java -DconfigFile=notifications/telegram.json \
                         -Dtelegram.token=${TELEGRAM_TOKEN} \
                         -jar notifications/allure-notifications-4.11.0.jar || echo "Telegram notification failed"
                '''
            }
        }
    }
}

    post {
        always {
            archiveArtifacts artifacts: "${ALLURE_RESULTS}/**/*,${ALLURE_REPORT}/**/*,playwright-report/**/*,test-results/**/*",
                             allowEmptyArchive: true,
                             fingerprint: true
            echo '✅ Pipeline completed. Reports archived.'
        }
        failure {
            echo '❌ Pipeline failed. Check console output.'
        }
    }
}
}