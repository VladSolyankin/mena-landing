/**
 * Конфигурация хранилища для больших файлов (PDF, изображения и т.д.)
 *
 * Для больших файлов рекомендуется использовать:
 * - AWS S3 + CloudFront
 * - Google Cloud Storage
 * - Cloudflare R2
 * - Другие CDN сервисы
 */

export interface StorageConfig {
  // Базовый URL для файлов (например: https://cdn.example.com или https://storage.googleapis.com/bucket-name)
  baseUrl: string;

  // Путь к папке с документами (например: /documents или /pdfs)
  documentsPath: string;

  // Использовать ли базовый URL (если false, файлы берутся из /public)
  useExternalStorage: boolean;
}

// Конфигурация по умолчанию (локальные файлы из /public)
export const defaultStorageConfig: StorageConfig = {
  baseUrl: "https://storage.yandexcloud.net/",
  documentsPath: "/vladsolyankinfiles",
  useExternalStorage: false,
};

// Пример конфигурации для внешнего хранилища (раскомментируйте и настройте)
/*
export const storageConfig: StorageConfig = {
  baseUrl: "https://your-cdn-domain.com", // Замените на ваш CDN URL
  documentsPath: "/documents",
  useExternalStorage: true,
};
*/

// Используйте эту конфигурацию
export const storageConfig: StorageConfig = defaultStorageConfig;

/**
 * Получить полный URL для файла документа
 */
export function getDocumentUrl(filename: string): string {
  if (storageConfig.useExternalStorage) {
    return `${storageConfig.baseUrl}${storageConfig.documentsPath}/${filename}`;
  }
  return `${storageConfig.documentsPath}/${filename}`;
}
