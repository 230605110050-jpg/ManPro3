import React from 'react';
import { Badge } from '@/components/ui/badge';

const RiskLevelBadge = ({ level }) => {
  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case 'critical':
        return 'bg-destructive text-destructive-foreground';
      case 'high':
        return 'bg-[hsl(25_95%_53%)] text-white';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Badge className={`${getLevelColor(level)} transition-all duration-200`}>
      {level}
    </Badge>
  );
};

export default RiskLevelBadge;