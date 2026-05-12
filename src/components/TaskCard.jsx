import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusBadge from '@/components/StatusBadge.jsx';
import PriorityBadge from '@/components/PriorityBadge.jsx';
import TeamMemberAvatar from '@/components/TeamMemberAvatar.jsx';
import { teamMembers } from '@/data/dummyData.js';

const TaskCard = ({ task, onClick }) => {
  const assignee = teamMembers.find(m => m.id === task.assignee);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="cursor-pointer hover:shadow-lg transition-all duration-200"
        onClick={onClick}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-base font-semibold leading-snug">{task.title}</CardTitle>
            <PriorityBadge priority={task.priority} />
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {assignee && <TeamMemberAvatar member={assignee} size="sm" />}
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{new Date(task.deadline).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
            </div>
          </div>
          <StatusBadge status={task.status} />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TaskCard;