# Что используем как эталонный образ
FROM mcr.microsoft.com/playwright:v1.59.1-noble
# Копируем все файлы из текущей директории в образ
COPY . .
RUN npm ci
# Команда по умолчанию
CMD ["npm", "test"]