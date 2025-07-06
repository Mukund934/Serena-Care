
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page since we've restructured to separate pages
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
};

export default Index;
