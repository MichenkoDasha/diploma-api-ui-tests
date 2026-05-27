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
            nodejs('NodeJS22.22.0') {
                sh '''
                    node -e '
                        const fs = require("fs");
                        const https = require("https");
                        
                        const TOKEN = process.env.TELEGRAM_TOKEN;
                        const CHAT_ID = "-5174723274";
                        const REPORT_LINK = "https://michenkodasha.github.io/diploma-api-ui-tests/";
                        
                        let total = 0, passed = 0, failed = 0;
                        try {
                            const data = JSON.parse(fs.readFileSync("allure-report/widgets/summary.json", "utf8"));
                            total = data.statistic.total || 0;
                            passed = data.statistic.passed || 0;
                            failed = data.statistic.failed || 0;
                        } catch(e) {
                            console.log("No summary.json");
                            process.exit(1);
                        }
                        
                        const percent = total > 0 ? (passed * 100 / total).toFixed(1) : 0;
                        const message = "✅ *Результаты тестирования Wazzup* ✅\\n\\n" +
                            "📊 *Всего тестов:* " + total + "\\n" +
                            "✅ *Пройдено:* " + passed + " (" + percent + "%)\\n" +
                            "❌ *Упало:* " + failed + "\\n\\n" +
                            "📎 [Открыть Allure Report](" + REPORT_LINK + ")";
                        
                        const url = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";
                        const postData = "chat_id=" + CHAT_ID + "&text=" + encodeURIComponent(message) + "&parse_mode=Markdown";
                        
                        const req = https.request(url, {method: "POST"}, () => console.log("✅ Telegram sent"));
                        req.on("error", () => console.log("❌ Telegram failed"));
                        req.write(postData);
                        req.end();
                    '
                '''
            }
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