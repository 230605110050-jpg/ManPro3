import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, FileText, Users, TrendingUp } from 'lucide-react';
import TeamMemberAvatar from '@/components/TeamMemberAvatar.jsx';

const ActivityItem = ({ activity, index }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'task_completed':
        return <CheckCircle2 className="h-4 w-4 text-accent" />;
      case 'risk_created':
      case 'risk_updated':
        return <AlertCircle className="h-4 w-4 text-warning" />;
      case 'project_created':
      case 'project_updated':
      case 'project_milestone':
        return <TrendingUp className="h-4 w-4 text-primary" />;
      case 'team_joined':
        return <Users className="h-4 w-4 text-accent" />;
      default:
        return <FileText className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const userInitials = activity.user.split(' ').map(n => n[0]).join('');

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
    >
      <div className="flex-shrink-0">
        <TeamMemberAvatar 
          member={{ name: activity.user, avatar: userInitials }} 
          size="sm" 
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">
          <div className="flex-shrink-0 mt-1">
            {getIcon(activity.type)}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm">
              <span className="font-medium text-foreground">{activity.user}</span>
              {' '}
              <span className="text-muted-foreground">{activity.description}</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityItem;