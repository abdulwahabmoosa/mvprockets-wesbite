"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CaseStudiesRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/#case-studies');
  }, [router]);
  return null;
} 