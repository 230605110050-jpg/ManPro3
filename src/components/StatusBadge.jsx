import React from 'react';
import { Badge } from '@/components/ui/badge';

const StatusBadge = ({ status }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'done':
      case 'completed':
      case 'active':
        return 'bg-accent text-accent-foreground';
      case 'in progress':
        return 'bg-primary text-primary-foreground';
      case 'review':
        return 'bg-warning text-warning-foreground';
      case 'to do':
        return 'bg-muted text-muted-foreground';
      case 'on hold':
        return 'bg-secondary text-secondary-foreground border border-border';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Badge className={`${getStatusColor(status)} transition-all duration-200`}>
      {status}
    </Badge>
  );
};

export default StatusBadge;