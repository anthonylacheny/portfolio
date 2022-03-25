import { database } from '../../../providers/database';

export const storeMessage = (data: { email: string; name: string; msg: string }) =>
    database.store('messages', data);
