import { useState, useEffect } from 'react';

interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  version: string;
  motd: string;
  icon?: string;
  loading: boolean;
  error: string | null;
}

export const useServerStatus = (serverAddress: string) => {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: { online: 0, max: 0 },
    version: '',
    motd: '',
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        setStatus(prev => ({ ...prev, loading: true, error: null }));
        
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverAddress}`);
        const data = await response.json();

        if (data.online) {
          setStatus({
            online: true,
            players: {
              online: data.players?.online || 0,
              max: data.players?.max || 0
            },
            version: data.version || 'Unknown',
            motd: data.motd?.clean?.[0] || 'Welcome to Kingdom Online!',
            loading: false,
            error: null
          });
        } else {
          setStatus({
            online: false,
            players: { online: 0, max: 0 },
            version: '',
            motd: 'Server is offline',
            loading: false,
            error: null
          });
        }
      } catch (error) {
        setStatus({
          online: false,
          players: { online: 0, max: 0 },
          version: '',
          motd: '',
          loading: false,
          error: 'Failed to fetch server status'
        });
      }
    };

    fetchServerStatus();
    
    // 30초마다 상태 업데이트
    const interval = setInterval(fetchServerStatus, 30000);
    
    return () => clearInterval(interval);
  }, [serverAddress]);

  return status;
};
