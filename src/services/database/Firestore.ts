import { Database } from './Database';
import { addDoc, collection as firestoreCol, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../../providers/firebase';

export class Firestore implements Database {
    async store<T extends Record<string, string>>(collection: string, object: T): Promise<void> {
        try {
            const ref = firestoreCol(firestore, collection);
            await addDoc(ref, Object.assign(object, { created_at: serverTimestamp() }));
        } catch (err) {
            console.error(err);
            throw err;
        }
    }
}
