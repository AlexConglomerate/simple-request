import * as Sentry from "@sentry/react";
import {BrowserTracing} from "@sentry/tracing";

// Тут хранятся наши ошибки: https://5fdda19b90c0.sentry.io/issues/?project=4504564136935424&query=is%3Aunresolved&referrer=issue-stream

// Инициализация логгера
function init() {
    Sentry.init({
        dsn: "https://2a32338da7f6494a8cd1b3e74861d014@o4504320023199744.ingest.sentry.io/4504564136935424",
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0,
    });
}

// Функция для логирования
function log(error) {
    Sentry.captureException(error);
}

export const logger = {init, log};

