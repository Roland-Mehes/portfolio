'use client';

import React, { useEffect, useState } from 'react';
import {
  collection,
  onSnapshot,
  QueryDocumentSnapshot,
  DocumentData,
  Timestamp,
} from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/fbServices/fb';

interface ContactFormData {
  firstname?: string;
  lastname?: string;
  message?: string;
  email?: string;
  subject?: string;
  createdAt: Timestamp;
}

const MessageCard: React.FC = () => {
  const [docs, setDocs] = useState<ContactFormData[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user) return;

    const unsubscribe = onSnapshot(
      collection(db, 'ContactForm'),
      (snapshot) => {
        const data = snapshot.docs.map(
          (doc: QueryDocumentSnapshot<DocumentData>) =>
            doc.data() as ContactFormData
        );
        setDocs(data);
        setError(null);
      },
      (err) => {
        console.error('Firestore listen error:', err);
        setError(err);
      }
    );

    return () => unsubscribe();
  }, [user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">ERROR: {error.message}</p>;
  return (
    <div className="p-4 grid grid-cols-1 gap-4 justify-items-center  ">
      {docs.map((doc, idx) => (
        <div
          key={idx}
          className="shadow-md rounded-lg p-4 border border-gray-200 grid relative sm:w-fit !w-[800px] max-w-[80%]  "
        >
          <p className="absolute top-[-15px] left-5 bg-[var(--bg-color-1)] text-[8px]">
            {doc.createdAt.toDate().toLocaleString()}
          </p>

          <div className="flex justify-between">
            <h2 className="md:text-lg text-[12px] font-semibold mb-2">
              {(doc.firstname || '') + ' ' + (doc.lastname || '') || 'Névtelen'}
            </h2>
            <p className="text-sm md:text-lg   text-gray-500 mt-2 ">
              {doc.email || 'N/A'}
            </p>
          </div>
          <div>
            <div className="text-[var(--color-2)]">{doc.subject}</div>
            <div>{doc.message}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageCard;
