pipeline {
    agent any

    environment {
        ALLURE_RESULTS = 'allure-results'
        ALLURE_REPORT = 'allure-report'
        ALLURE_TOKEN = '8b477939-9c49-4b5b-b29d-12c1db13106a'
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

   //     stage('Generate Allure 3 Report') {
 //           steps {
     //           nodejs('NodeJS22.22.0') {
                    // ✅ Исправлено: -o вместо --report-dir
                    // --single-file создаст один HTML-файл
//                    catchError(buildResult: false, stageResult: 'UNSTABLE') {
  //                      sh "npx allure awesome ${ALLURE_RESULTS} --single-file -o ${ALLURE_REPORT}/report.html"
    //                }
    //            }
     //       }
      //  }
    stage('Upload to Allure TestOps') {
            steps {
                nodejs('NodeJS22.22.0') {
                    sh '''
                        # Скачать allurectl
                        curl -L https://github.com/allure-framework/allurectl/releases/latest/download/allurectl_linux_amd64 -o allurectl
                        chmod +x allurectl
                        
                        # Загрузить результаты в TestOps
                        ./allurectl upload \
                          --endpoint ${ALLURE_ENDPOINT} \
                          --token ${ALLURE_TOKEN} \
                          --project-id ${ALLURE_PROJECT_ID} \
                          ${ALLURE_RESULTS} || echo "TestOps upload failed"
                    '''
                }
            }
        }
        stage('Publish Allure Report') {
            steps {
                // Allure Plugin (для Allure 2, опционально)
                allure(
                    [
                        includeProperties: false,
                        jdk: '',
                        properties: [],
                        reportBuildPolicy: 'ALWAYS',
                        results: [[path: "${ALLURE_RESULTS}"]]
                    ]
                )
            }
        }
    }

    post {
        always {
            // Архивируем всё: результаты, отчёт, скриншоты
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