import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const TeamMemberAvatar = ({ member, size = "md", showTooltip = true }) => {
  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-12 h-12 text-base"
  };

  const avatarColors = [
    'bg-[hsl(221_75%_33%)]',
    'bg-[hsl(160_84%_39%)]',
    'bg-[hsl(38_92%_50%)]',
    'bg-[hsl(271_81%_56%)]',
    'bg-[hsl(198_93%_60%)]'
  ];

  const colorIndex = member.name ? member.name.charCodeAt(0) % avatarColors.length : 0;

  const avatar = (
    <Avatar className={`${sizeClasses[size]} rounded-xl border-2 border-background ${avatarColors[colorIndex]} text-white`}>
      <AvatarFallback className="bg-transparent text-white font-semibold">
        {member.avatar || member.name?.substring(0, 2).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );

  if (!showTooltip) {
    return avatar;
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {avatar}
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">{member.name}</p>
          {member.role && <p className="text-xs text-muted-foreground">{member.role}</p>}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TeamMemberAvatar;