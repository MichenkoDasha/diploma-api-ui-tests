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
                withCredentials([file(credentialsId: 'secret_for_diploma', variable: 'ENV_FILE')]) {
                    nodejs('NodeJS22.22.0') {
                       sh '''
                        cp ${ENV_FILE} .env
                        npm ci
                        npx playwright install chromium --with-deps
                        npm add allure
                        npm t || echo "Tests completed with failures"
                    '''
                    }
                }
            }
        }

        stage('Upload to Allure TestOps') {
            steps {
                withCredentials([string(credentialsId: 'allure-token_for_diploma', variable: 'ALLURE_TOKEN_SECRET')]) {
                    nodejs('NodeJS22.22.0') {
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
            sh '''
                TOTAL=$(jq '.statistic.total' allure-report/widgets/summary.json)
                PASSED=$(jq '.statistic.passed' allure-report/widgets/summary.json)
                FAILED=$(jq '.statistic.failed' allure-report/widgets/summary.json)
                PERCENT=$(echo "scale=1; $PASSED * 100 / $TOTAL" | bc)
                
                MESSAGE="✅ *Результаты тестирования Wazzup* ✅%0A%0A\
                📊 *Всего тестов:* $TOTAL%0A\
                ✅ *Пройдено:* $PASSED ($PERCENT%)%0A\
                ❌ *Упало:* $FAILED%0A%0A\
                📎 [Открыть Allure Report](https://michenkodasha.github.io/diploma-api-ui-tests/)"
                
                curl -s -X POST "https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage" \
                     -d "chat_id=-5174723274" \
                     -d "text=${MESSAGE}" \
                     -d "parse_mode=Markdown"
            '''
        }
    }
}
    }
}

