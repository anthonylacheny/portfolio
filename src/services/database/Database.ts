export interface Database {
    store<T extends Record<string, string>>(collection: string, object: T): Promise<void>;
}
