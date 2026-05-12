import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import StatusBadge from '@/components/StatusBadge.jsx';
import ProgressBar from '@/components/ProgressBar.jsx';
import TeamMemberAvatar from '@/components/TeamMemberAvatar.jsx';
import { teamMembers } from '@/data/dummyData.js';

const ProjectCard = ({ project, onClick }) => {
  const projectTeam = teamMembers.filter(m => project.teamMembers.includes(m.id));

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card 
        className="cursor-pointer hover:shadow-lg transition-all duration-200"
        onClick={onClick}
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg font-semibold leading-snug">{project.name}</CardTitle>
            <StatusBadge status={project.status} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
          
          <ProgressBar progress={project.progress} />
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <div className="flex -space-x-2">
                {projectTeam.slice(0, 3).map(member => (
                  <TeamMemberAvatar key={member.id} member={member} size="sm" />
                ))}
                {projectTeam.length > 3 && (
                  <div className="w-8 h-8 rounded-xl bg-muted border-2 border-background flex items-center justify-center text-xs font-medium text-muted-foreground">
                    +{projectTeam.length - 3}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{new Date(project.deadline).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;