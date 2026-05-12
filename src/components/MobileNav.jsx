import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileNav = ({ onToggle }) => {
  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="transition-all duration-200"
      >
        <Menu className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default MobileNav;