import React from 'react';
import { Badge } from '@/components/ui/badge';

const PriorityBadge = ({ priority }) => {
  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-[hsl(48_96%_53%)] text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Badge className={`${getPriorityColor(priority)} transition-all duration-200`}>
      {priority}
    </Badge>
  );
};

export default PriorityBadge;