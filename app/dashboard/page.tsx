'use client';

import { useUser } from '@/contexts/UserContext';

export default function Dashboard() {
  const user = useUser();
  console.log('user', user);
  return <div>Dashboard</div>;
}
