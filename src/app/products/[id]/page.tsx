'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Aaa() {
  const [id, setId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
    }
  }, [router.query.id]);

  return (
    <>
      <h1>hello world {id}</h1>
    </>
  );
}
